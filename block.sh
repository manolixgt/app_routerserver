#!/bin/bash

docker exec -i pihole pihole --regex '(\.|-|^)tiktok?(v|\w)' '(\.|^)roblox\.com$' '(\.|^)rbxcdn\.com$'
