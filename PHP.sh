clear
echo $(ipconfig getifaddr en1):8080
echo
echo
echo
echo
echo
php -S $(ipconfig getifaddr en1):8080
