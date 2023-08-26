#!/bin/bash

# Run this on a swarm master to create the Website-V6 service

sudo docker service create \
--name website-v6-main \
--hostname "websitev6-main-{{ .Task.Slot }}" \
--network overlay_a \
--replicas 1 \
swarm:5000/websitev6:main
