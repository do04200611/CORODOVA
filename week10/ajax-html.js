$(document).ready( function() {  
	$('#btnLoad3').click( function() {
		$('#listArea').empty();					
		$('#listArea').load('ajax-listinfo.html li', function(htmlData){		
			$('#listArea').listview('refresh');	
		});			
	});
});

var images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // 변경하고자 하는 배경 이미지 파일명들
		var currentIndex = 0; // 현재 보여지고 있는 이미지의 인덱스

		function changeBackground() {
			var background = document.getElementById("background");
			background.style.backgroundImage = "url('" + images[currentIndex] + "')";

			currentIndex = (currentIndex + 1) % images.length; // 다음 이미지를 위해 인덱스 업데이트
		}

		setInterval(changeBackground, 5000); // 5초마다 배경 이미지 변경

		// 페이지 로드 시에도 초기 배경 이미지 설정
		window.addEventListener("load", changeBackground);