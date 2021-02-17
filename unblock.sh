#!/bin/bash

docker exec -i pihole pihole -b -d --regex '(\.|^)youtube\.com$' '(\.|-|^)tiktok?(v|\w)' '(\.|^)roblox\.com$' '(\.|^)rbxcdn\.com$'
