$(document).ready(function() {
		// 이미지 파일 이름들
		var imageFiles = ["4-1.jpg", "4-2.jpg", "4-3.jpg", "4-4.jpg", "4-5.jpg", "4-6.jpg", "4-7.jpg", "4-8.jpg", "4-9.jpg", "4-10.jpg"];
	
		// 이미지 로드 함수
		function loadImage(imageFile) {
			return new Promise(function(resolve, reject) {
				var image = new Image();
				image.src = imageFile;
				image.onload = function() {
					resolve(image);
				};
				image.onerror = function() {
					reject("이미지 로드 실패: " + imageFile);
				};
			});
		}
	
		// 이미지들을 병렬로 로드
		function loadImages(imageFiles) {
			var promises = imageFiles.map(function(imageFile) {
				return loadImage(imageFile);
			});
			return Promise.all(promises);
		}
	
		// 이미지를 표시하는 함수
		function displayImages(images) {
			var imageContainer = $("#imageContainer");
			imageContainer.empty();
			images.forEach(function(image) {
				// 마우스 진입 및 이탈 이벤트 핸들러를 등록
				$(image).hover(function() {
					$(this).css("width", "200px"); // 마우스 진입: 이미지 크기 확대
				}, function() {
					$(this).css("width", "100px"); // 마우스 이탈: 이미지 크기 복원
				});
	
				imageContainer.append(image);
			});
		}
	
		// 버튼 클릭 이벤트 처리
		$("#showImageBtn").click(function() {
			loadImages(imageFiles)
				.then(function(images) {
					displayImages(images);
				})
				.catch(function(error) {
					console.error("이미지 로드 중 오류 발생: " + error);
				});
		});
	});
	$('#fadeOut').click(function() {
		$('#img1').fadeOut(2000, function() {
			$('#img2').fadeIn(100);							
		});
		$('#fadeIn').click(function() {
			$('#img2').fadeOut(2000, function() {
				$('#img1').fadeIn(100);							
			});
	});		
	$('#fadeToggle').click(function() {
			$('#img1').fadeToggle(1000);
	});	
});
