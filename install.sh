#!bin/bash

pkg update -y
pkg upgrade -y
pkg install ruby
gem install lolcat
pkg install nodejs -y
pkg install libwebp -y
pkg install ffmpeg -y
pkg install wget -y
pkg install tesseract -y
pkg install graphicsmagick -y
pkg install imagemagick -y
npm install
npm install pm2 -g

echo "Hmmm, todo puede npm start, escanear el código y divertirse con el bot :)"

