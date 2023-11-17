$(document).ready( function() {  
	$('#btnLoad3').click( function() {
		$('#listArea').empty();					
		$('#listArea').load('ajax-listinfo.html li', function(htmlData){		
			$('#listArea').listview('refresh');	
		});			
	});
});

$(document).ready(function(){
	$("a.caltitle").css("color", "red");
 });
 
 $(document).ready(function(){
	var colors = ['red', 'blue', 'green', 'yellow']; // 바꿀 배경 색상들을 배열로 저장합니다.
	var index = 0; // 현재 배경 색상의 인덱스를 저장하는 변수입니다.
 
	function changeBackgroundColor() {
	   $("body").css("background-color", colors[index]); // 현재 인덱스에 해당하는 배경 색상으로 변경합니다.
	   index = (index + 1) % colors.length; // 다음 색상으로 인덱스를 업데이트합니다.
	}
 
	setInterval(changeBackgroundColor, 5000); // 5초마다 changeBackgroundColor 함수를 호출합니다.
 });
 