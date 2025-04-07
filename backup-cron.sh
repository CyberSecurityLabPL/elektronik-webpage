#!/bin/bash

# cd /home/krzysztofg/elektronik-webpage && docker compose exec strapi npm run strapi export -- --no-encrypt --file backups/backup_$(date +\%d-\%m-\%Y) >> /home/krzysztofg/elektronik-webpage/strapi/backups/log/strapi_backup.log 2>&1
# echo "Backup created at $(date +%d-%m-%Y)" >> /home/krzysztofg/elektronik-webpage/strapi/backups/log/strapi_backup.log

# Create backup directories if they don't exist
BACKUP_DIR="/home/krzysztofg/backups/elektronik-webpage"
LOG_DIR="${BACKUP_DIR}/logs"
mkdir -p ${BACKUP_DIR}
mkdir -p ${LOG_DIR}

# Set the backup filename with date
BACKUP_DATE=$(date +%d-%m-%Y)
BACKUP_FILENAME="backup_${BACKUP_DATE}"

# Go to project directory and create the backup
cd /home/krzysztofg/elektronik-webpage

# Create backup and direct logs to the new location
docker compose exec strapi npm run strapi export -- --no-encrypt --file /tmp/${BACKUP_FILENAME} >> ${LOG_DIR}/strapi_backup.log 2>&1

# Copy the backup from the container to the external backup directory
docker compose cp strapi:/tmp/${BACKUP_FILENAME}.tar.gz ${BACKUP_DIR}/${BACKUP_FILENAME}.tar.gz >> ${LOG_DIR}/strapi_backup.log 2>&1

# Log the backup creation
echo "Backup created at ${BACKUP_DATE} and stored at ${BACKUP_DIR}/${BACKUP_FILENAME}.tar.gz" >> ${LOG_DIR}/strapi_backup.log
