#!/bin/bash

# Run this on a swarm master to create the Website-V6 service

sudo docker service create \
--name website-v6-dev \
--hostname "website-v6-dev-{{ .Task.Slot }}" \
--network overlay_a \
--replicas 1 \
--env-file /data/website-v6/.env.dev \
swarm:5000/website-v6:main
