$(document).ready(function(){
    $('.your-class').slick({
      
    });
  });


  // video play code
let play_pause_status = "play";
function play_pause() {
	var video_screen = document.getElementById('video-player');
	if (play_pause_status == "pause") {
		video_screen.play();
		play_pause_status = "play";
	} else {
		video_screen.pause();
		play_pause_status = "pause";
	}
}