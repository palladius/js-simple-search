

# https://superuser.com/questions/436056/how-can-i-get-ffmpeg-to-convert-a-mov-to-a-gif
jsss-video.gif:
	ffmpeg -i jsss-video.mov -pix_fmt rgb24 jsss-video.gif

jsss-video-2x.gif:
	ffmpeg -i jsss-video.mov -pix_fmt rgb24 -vf "setpts=0.5*PTS" "$@"


jsss-video-3x.gif:
	ffmpeg -i jsss-video.mov -pix_fmt rgb24 -vf "setpts=0.3*PTS" "$@"

jsss-video-5x.gif:
	ffmpeg -i jsss-video.mov -pix_fmt rgb24 -vf "setpts=0.5*PTS" "$@"


