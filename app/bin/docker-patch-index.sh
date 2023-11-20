#!/bin/bash

echo Trying..

#APPNAME=$(env APPNAME)
VERSION=$(cat VERSION)
DATE=$(date +%Y%m%d-%H%M%S)
PWD=`pwd`

echo "$0 v$VER - situated in $PWD"

find $PWD

sed -i "s/__APPNAME__/$APPNAME/g" index.html
sed -i "s/__VERSION__/$VERSION/g" index.html
sed -i "s/__DATE__/$DATE/g" index.html
