#!/bin/bash

# Run this on a swarm master to create the Website-V6 service

sudo docker service create \
--name website-v6-production \
--hostname "website-v6-production-{{ .Task.Slot }}" \
--network overlay_a \
--replicas 4 \
--env-file /data/website-v6/.env.production \
swarm:5000/website-v6:production
