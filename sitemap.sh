#!/bin/bash

# url configuration
URL="https://ruurd.dev/"

# values: always hourly daily weekly monthly yearly never
FREQ="weekly"

# begin new sitemap
exec 1> sitemap.xml

# print head
echo '<?xml version="1.0" encoding="UTF-8"?>'
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'

ls -d */ | grep -v '.git' |
while read -r line; do
  echo "<url>"
  echo " <loc>${URL}${line}</loc>"
  echo " <changefreq>$FREQ</changefreq>"
  echo "</url>"
done

# print foot
echo "</urlset>"
