#!/bin/bash

host="root@192.168.56.102"
destination="/var/www/backup"
source="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

scp $source/../backup/issabelbackup.tar $host:$destination
retvalue=$?

if [ $retvalue = 0 ]; then
  ssh $host "/usr/bin/issabel-helper backupengine --restore --backupfile 'issabelbackup.tar' --tmpdir '/var/www/backup' --components as_db,as_config_files,as_sounds,as_mohmp3,as_dahdi,ep_db,ep_config_files,mysql_db,menus_permissions 2>&1"
	echo "Done"
else
	echo "Could not copy issabel backup"
	echo "Return value: $retvalue"
fi
