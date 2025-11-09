#!/bin/bash
set -e  # zakończ skrypt, jeśli coś pójdzie nie tak

# Załaduj konfigurację
source "$(dirname "$0")/config.env"

cd "${WORKING_DIR}"

# Uruchom Strapi
docker compose up ${STRAPI_SERVICE} -d

# Czekaj, aż Strapi się uruchomi
echo "Czekam aż Strapi się uruchomi pod ${STRAPI_URL}..."
while [ "$(curl -o /dev/null -s -w "%{http_code}" ${STRAPI_URL})" != "200" ]; do
    sleep 5
done
echo "Strapi działa — uruchamiam frontend."

# Uruchom frontend
docker compose up ${FRONTEND_SERVICE} -d
