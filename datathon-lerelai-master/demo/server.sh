# set mac osx's terminal title
echo -n -e "\033]0;test server\007"

# make sure to switch to the script's dir (e.g. when launched via mac osx's finder)
cd `dirname "$0"`

( sleep 1; open http://localhost:8000/kindle.html; ) &
python -m SimpleHTTPServer
