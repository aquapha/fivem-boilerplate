author 'Dead Horizon'
description 'A boilerplate for Dead Horizon resources'
version '1.0.0'

shared_scripts {
  'shared/*.lua',
}

client_scripts {
  'client/init.lua',
}

server_scripts {
  'server/init.lua',
}

ui_page 'web/build/index.html'

files {
  'web/build/index.html',
  'web/build/assets/**/*.css',
  'web/build/assets/**/*.js',
  'web/build/**/*.svg',
}

fx_version 'cerulean'
game 'gta5'
lua54 'yes'
