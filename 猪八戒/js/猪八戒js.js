<!-- 监听滚动条吸顶 及 返回顶部 -->
window.onscroll = function() {
	//变量t是滚动条滚动时，距离顶部的距离
	var t = document.documentElement.scrollTop || document.body.scrollTop;
	var xiding = document.getElementById('xiding');
	var zhanwei = document.getElementById("zhanwei");
	var bgdRightTwo = document.getElementById("bgdRightTwo");
	//当滚动到距离顶部200px时
	//吸顶效果
	if (t >= 200) {
		xiding.style.position = "fixed";
		xiding.style.top = 0;
		xiding.style.backgroundColor = "#fcfcfc";
		xiding.style.height = "105px";
		xiding.style.boxShadow = "0 0 10px #000000";
	} else {
		xiding.style.position = "relative";
		xiding.style.boxShadow = "none";
		xiding.style.backgroundColor = "#ffffff";
		xiding.style.height = "120px";
	}
	if (t >= 200) {
		zhanwei.style.display = "block";
	} else { //恢复正常
		zhanwei.style.display = "none";
	}
	/* 返回顶部 */
	if (t >= 300) {
		scrollup.style.display = "block";
	} else {
		scrollup.style.display = "none";
	}

	/* bgdRightTwo */
	if (t >= 728 && t <= 1058) {
		bgdRightTwo.style.position = "fixed";
		bgdRightTwo.style.top = 45 + "px";
	} else if (t >= 1058) {
		bgdRightTwo.style.position = "relative";
		bgdRightTwo.style.top = 335 + "px";
	} else {
		bgdRightTwo.style.position = "relative";
		bgdRightTwo.style.top = 0;
	}
}