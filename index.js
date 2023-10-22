//다른 호스팅 페이지로 이동시키는 버튼 코드 부분
const toggleButton1 = document.getElementById('toggleButton1');
const toggleButton2 = document.getElementById('toggleButton2');
const hiddenButtons1 = document.getElementById('hiddenButtons1');
const hiddenButtons2 = document.getElementById('hiddenButtons2');



//실험용

 // 페이지 로드 시 실행
 window.addEventListener('load', () => {
   const hiddenButtons1 = document.getElementById('hiddenButtons1');
   const hiddenButtons2 = document.getElementById('hiddenButtons2');
   hiddenButtons1.style.display = 'none'; // 처음에는 숨김
   hiddenButtons2.style.display = 'none'; // 처음에는 숨김

   const toggleButton1 = document.getElementById('toggleButton1');
   const toggleButton2 = document.getElementById('toggleButton2');

   toggleButton1.addEventListener('click', () => {
     if (hiddenButtons1.style.display === 'none' || hiddenButtons1.style.display === '') {
       hiddenButtons1.style.display = 'block';
       hiddenButtons2.style.display = 'none'; // 숨김
     } else {
       hiddenButtons1.style.display = 'none';
     }
   });

   toggleButton2.addEventListener('click', () => {
     if (hiddenButtons2.style.display === 'none' || hiddenButtons2.style.display === '') {
       hiddenButtons2.style.display = 'block';
       hiddenButtons1.style.display = 'none'; // 숨김
     } else {
       hiddenButtons2.style.display = 'none';
     }
   });
 });

// 텍스트 변경 함수
const textElement = document.getElementById('changingText');
const texts = [
 "私の長所は常に努力することです。",
 "さらに、学んだ内容を実際に活用して実力を向上させるために大学の「DITブートキャンプコンテスト(チームを組んでウェブページやアプリを作って提出する大会です)」に参加しました。",
 "その結果、入賞することができました。",
 "저의 장점은 항상 노력하는 것입니다. 더불어 배운 내용을 실제로 활용하여 실력을 향상시키기 위하여 대학의 'DIT 부트캠프 콘테스트(팀을 이루어 웹페이지나 앱을 만들어 제출하는 대회입니다)'에 참가하였습니다. 그 결과 입상할 수 있었습니다.",
];
let textIndex = 0;

// 배경 색상 목록
const colors = ["#0074d9", "#ff99ff", "#ff8080", "#ffcc99", "#b3b3cc"];
let colorIndex = 0;

// 배경 색상 변경 함수
function changeBackgroundColor() {
 document.body.style.backgroundColor = colors[colorIndex];
 colorIndex = (colorIndex + 1) % colors.length;
}

// 배경 색상 변경과 텍스트 변경을 주기적으로 호출
setInterval(function () {
 changeBackgroundColor();
 textElement.textContent = texts[textIndex];
 menuBar.style.backgroundColor = colors[colorIndex];
 textIndex = (textIndex + 1) % texts.length;
}, 5000); // 5초마다 변경

let videoIds = ['k3KVArHfM6E', 'ahKks-Nlcj8', '_kmerFPj_U4'];
let currentIndex = 0;
let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    width: 640,
    height: 360,
    videoId: videoIds[currentIndex],
    playerVars: {
      autoplay: 1,
    },
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
  setInterval(changeVideo, 5000); // 5초마다 비디오 변경
}

function changeVideo() {
  currentIndex = (currentIndex + 1) % videoIds.length;
  player.loadVideoById(videoIds[currentIndex]);
}

// 이전 비디오로 이동하는 함수
function previousVideo() {
  currentIndex = (currentIndex - 1 + videoIds.length) % videoIds.length;
  player.loadVideoById(videoIds[currentIndex]);
}

// 다음 비디오로 이동하는 함수
function nextVideo() {
  currentIndex = (currentIndex + 1) % videoIds.length;
  player.loadVideoById(videoIds[currentIndex]);
}

// HTML에서 버튼과 이벤트 핸들러 연결
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');

previousButton.addEventListener('click', previousVideo);
nextButton.addEventListener('click', nextVideo);

//세로 메뉴바에서 메뉴 열기 버튼을 메뉴 닫기로 바뀌는 코드

document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('menu-button');
  const verticalMenu = document.querySelector('.vertical');

  menuButton.addEventListener('click', function () {
    if (verticalMenu.style.right === '-250px' || verticalMenu.style.right === '') {
      verticalMenu.style.right = '0'; /* 메뉴를 오른쪽에서 보이도록 함 */
      verticalMenu.classList.remove('hidden');
      menuButton.textContent = '메뉴 닫기'; // 버튼 텍스트를 변경
    } else {
      verticalMenu.style.right = '-250px'; /* 메뉴를 다시 숨김 */
      verticalMenu.classList.add('hidden');
      menuButton.textContent = '메뉴 열기'; // 버튼 텍스트를 변경
    }
  });
});
