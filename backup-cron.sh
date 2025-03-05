#!/bin/bash

cd /home/krzysztofg/elektronik-webpage && docker compose exec strapi npm run strapi export -- --no-encrypt --file backups/backup_$(date +\%d-\%m-\%Y) >> /home/krzysztofg/elektronik-webpage/strapi/backups/log/strapi_backup.log 2>&1
echo "Backup created at $(date +%d-%m-%Y)" >> /home/krzysztofg/elektronik-webpage/strapi/backups/log/strapi_backup.log
