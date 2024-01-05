# #!/bin/bash

# # Get the IP of the backend container
# backend_ip=$(docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' wakecountybackend-1)

# # Output the IP
# echo $backend_ip


# !/bin/bash

network_name="bridge"

gateway_ip=$(docker network inspect "$network_name" | jq -r '.[0].IPAM.Config[0].Gateway')

if [ -n "$gateway_ip" ]; then
  echo "Default gateway IP address for network $network_name: $gateway_ip"
else
  echo "Error: Unable to retrieve gateway IP address for network $network_name."
fi
