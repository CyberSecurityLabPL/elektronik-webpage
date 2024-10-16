#!/bin/bash
echo "Current Date and Time :$(date);

# Change dir
cd /home/carpye/elektronik-webpage/strapi

# Get the current date in DD-MM-YYYY
current_date=$(date +"%d-%m-%Y")

filename="elektronik_backup_$current_date"

# Run backup command
npm run strapi export -- --file $filename --key 123
