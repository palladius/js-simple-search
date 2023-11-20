#!/bin/bash

echo Trying..

VERSION=$(cat VERSION)
DATE=$(date +%Y%m%d-%H%M%S)

sed -e "s/__VERSION__/$VERSION/i" index.html
sed -e "s/__DATE__/$DATE/i" index.html
