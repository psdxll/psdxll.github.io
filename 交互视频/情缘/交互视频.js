//播放暂停
//var video = document.getElementsByClassName("video")[0];
var video = document.getElementsByClassName("video");
var myVideo = document.getElementById("myVideo");
var playB = document.getElementsByClassName("play")[0];
var line = document.querySelector('#line');
var lineBar = document.getElementById('lineBar');
var currPlayTime = document.querySelector('#current');
var totalTime = document.querySelector(' #duration');


myVideo.oncanplay = function () {
	//获取视频总时间
	totalTime.innerHTML = getFormatTime(this.duration)
}

//播放时间设置
function getFormatTime(time) {
	var time = time || 0;
	var h = parseInt(time / 3600);
	var m = parseInt(time % 3600 / 60);
	var s = parseInt(time % 60);
	h = h < 10 ? '0' + h : h
	m = m < 10 ? '0' + m : m
	s = s < 10 ? '0' + s : s
	return h + ':' + m + ':' + s
}

//视频播放暂停
function play() {
	if (myVideo.paused) {
		myVideo.play();
		playB.style.backgroundImage = "url('../../images/pause.png')";
	} else {
		myVideo.pause();
		playB.style.backgroundImage = "url('../../images/play.png')";
	}

}

video.onclick = play
playB.onclick = play
 






//获取进度条
myVideo.addEventListener("timeupdate", function () {
	var nowTime = this.currentTime;
	var totalTime = this.duration;
	var playProgress = nowTime / totalTime;
	lineBar.style.width = playProgress * 100 + "%";
	currPlayTime.innerHTML=getFormatTime(nowTime);
 
})


//进度条点击跳转
line.onclick=function(e){
	var event=e||window.event;
	myVideo.currentTime=(event.offsetX/this.offsetWidth)*myVideo.duration;
}

