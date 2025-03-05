#!/bin/bash

docker compose up strapi -d

while [ "$(curl -o /dev/null -s -w "%{http_code}" https://api.elektronik.zgora.pl/admin)" != "200" ]
do
	sleep 5
done

docker compose up frontend -d

