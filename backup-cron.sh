#!/bin/bash
set -e  # zakończ skrypt, jeśli coś pójdzie nie tak

# Załaduj konfigurację
source "$(dirname "$0")/config.env"

# Tworzenie katalogów
mkdir -p "${BACKUP_DIR}" "${LOG_DIR}"

# Ustal datę i nazwę pliku
BACKUP_DATE=$(date +%Y-%m-%d)
BACKUP_FILENAME="backup_${BACKUP_DATE}"

cd "${WORKING_DIR}"

# Tworzenie backupu
echo "Rozpoczynam backup Strapi (${BACKUP_FILENAME})..." >> "${LOG_DIR}/strapi_backup.log"
docker compose exec ${STRAPI_SERVICE} npm run strapi export -- --no-encrypt --file /tmp/${BACKUP_FILENAME} >> "${LOG_DIR}/strapi_backup.log" 2>&1

# Kopiowanie backupu z kontenera
docker compose cp ${STRAPI_SERVICE}:/tmp/${BACKUP_FILENAME}.tar.gz "${BACKUP_DIR}/${BACKUP_FILENAME}.tar.gz" >> "${LOG_DIR}/strapi_backup.log" 2>&1

# Logowanie sukcesu
echo "Backup utworzony: ${BACKUP_DIR}/${BACKUP_FILENAME}.tar.gz (${BACKUP_DATE})" >> "${LOG_DIR}/strapi_backup.log"

# Usuwanie starych backupów
find "${BACKUP_DIR}" -type f -name "backup_*.tar.gz" -mtime +${BACKUP_RETENTION_DAYS} -exec rm {} \;
echo "Stare backupy (> ${BACKUP_RETENTION_DAYS} dni) usunięte." >> "${LOG_DIR}/strapi_backup.log"
