var aktif = 1;

	var imgList = document.getElementsByTagName("li");
	var imgMiktar = imgList.length;
	
	function boyutlandir(){
	imgList[aktif].className = "aktif";
	document.getElementsByClassName("sliderTasiyici")[0].style.background = "url(" +imgList[aktif].childNodes[0].src + ")";
	imgList[aktif].style.left = "calc(50% - "+ imgList[aktif].clientWidth / 2 +"px)";
	document.getElementById("holder").style.height = imgList[aktif].clientHeight;
	document.getElementsByClassName("altBolum")[0].style.width = imgList[aktif].clientWidth;
	if(aktif == 0){
		imgList[imgMiktar].className = "aktif-sol";
		imgList[imgMiktar].style.top = (imgList[aktif].clientHeight - imgList[imgMiktar].clientHeight)/2;
	}else{
		imgList[aktif - 1].className = "aktif-sol";
		imgList[aktif - 1].style.top = (imgList[aktif].clientHeight - imgList[aktif - 1].clientHeight)/2;
	}
	if(aktif == imgMiktar){
		imgList[0].className = "aktif-sag";
		imgList[0].style.top = (imgList[aktif].clientHeight - imgList[0].clientHeight)/2;
	}else{
		imgList[aktif + 1].className = "aktif-sag";
		imgList[aktif + 1].style.top = (imgList[aktif].clientHeight - imgList[aktif + 1].clientHeight)/2;
	}
}

window.onload = boyutlandir;
window.onresize = boyutlandir;
