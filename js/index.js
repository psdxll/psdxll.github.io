var video = document.getElementById('video1');
video.playbackRate = 0.5;
//视频变速

window.addEventListener("scroll", function () {
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
  })