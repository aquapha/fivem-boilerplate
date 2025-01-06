author 'Dead Horizon'
description 'A boilerplate for Dead Horizon resources'
version '1.0.0'

shared_scripts {
  'shared/**.lua',
}

client_scripts {
  'client/init.lua',
}

server_scripts {
  'server/init.lua',
}

ui_page 'ui/index.html'

files {
  'ui/build/index.html',
  'ui/build/assets/**/*.css',
  'ui/build/assets/**/*.js',
  'ui/build/**/*.png',
  'ui/build/**/*.svg',
}

fx_version 'cerulean'
game 'gta5'
lua54 'yes'
