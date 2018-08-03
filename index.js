
var classActive = "active";
var classWaitActive = "wait_active";
var classActivePath = "active_path";
var classActivePathBefore = "active_path_before";
var descriptString = {
	s01: "UI設計跟平面設計最大的不同是，因為具有功能、要被操作且須遵守規範，雖然難啃但不失為初心者必備武器。",
	s02: "這行沒什麼大學科系可選擇，與 IT 產業相同的是需仰賴大量的閱讀與自學，不管是新手村或職業都是要每天持續學習。",
	s03: "使用者體驗(User Experience)是指一個人使用一個特定產品或系統或服務時的行為、情緒與態度。",
	s04: "是一個以人為本的解決問題方法論，透過從人的需求出發，為各種議題尋求創新解決方案，並創造更多的可能性。",
	s05: "設計師應該為了產品的「易用性」而奮鬥，否則費盡心思製造出功能多變、使用繁雜的產品，即使外觀漂亮，也只會讓消費者徒增困擾，一不小心還可能會釀成災禍。",
	s06: "線框稿中的元素應該是非常精簡的，通常設計師只會使用方框、線和灰階的底圖 (來表現不同的階層)。某些內容在初期還未確定或實作時，可先利用方框或假文字來表示，例如:圖片、影片與文字等等。",
	s07: "插畫源自于拉丁文「illustraio」，意指照亮之意，也就是說插畫可以使文字意念變得更清晰、有趣。插畫作為現代設計的一種重要視覺傳達形式",
	s08: "不論是什麼樣的數位產品(Web , App⋯等)，視覺都是接觸用戶的第一道關卡，每個物件的陰影、大小到圓角的處理，以及每個項目之間的間距及整體配色，都是魔鬼的關鍵細節，也是設計師的基本素養。",
	s09: "蘋果打到牛頓的頭，達文西賞鳥展翅，這些靈光乍現的瞬間對設計師來說是稀貴的寶石，只是靈感不單是稍縱即逝的瞬間，也是自發的學習勉強積累。",
	s11: '“配色方案” 是每個設計基礎中相當重要的因素之一，任何設計的配色選擇都具備一定的邏輯考量。透過色彩理論的應用，更有機會改變受眾的行為模式，達成設計的目標。',
	s12: "雖然說文案可能已經有其他部門會準備，但更常遇到的狀況是，他們也不知道你製作網頁會需要什麼樣的內容，或是今天是你要獨自完成一個網站的上架；其實當架站與設計技術經驗到一定門檻後，產文案反而是最難的。",
	s13: "網頁中會用到大量的實拍照片、或是作為背景的情境照，如果客戶那邊提供的素材不盡人意，這時候你就得自己準備了，作好美美的設計稿才能夠有說服力。",
	s14: "終於進入到介面設計的環節啦！前面的些準備及技巧，都是為了在這一階段能有更精彩的表現，坦白說現在的 UI 設計軟體的操作愈做愈簡單，功能也幾乎愈來愈像，挑一款適合你的工具就可以囉。",
	s15: "這也是一個可以讓工程師提早下面的技能，透過包含字體、大小、顏色及間劇等在內的標註文件，可以讓工程師更清楚地知道設計稿的真實模樣。",
	s16: "原型（ Prototype ）設計，可以幫助專案企劃時有效的溝通網頁功能、軟體介面、 App 互動，透過畫出原型，讓產品經理、設計師、程式開發師、主管、客戶之間能夠了解產品本身的使用流程，把想像或文字化為具體可用的示範。",
	s17: "一個專案有時會需要多名設計師合作，如何存放檔案、命名、分工內容都是開發流程中常遇到的問題。或是 PM 想掌握每位設計師的進度、客戶想了解前後設計稿差異，這都讓設計師需要花額外的精力去處理。",
	s18: "懂一點 Code (像是 Html5 / CSS3/JS..) 知道其網頁構成對於設計上也能帶來很大幫助，也能更靈活的做出想要的視覺與創意、並且是實務上可以被實踐的，也甭讓工程師加班 QAQ",
	s19: "恭喜你！抵達這裡已經擁有 UI設計師的基本職能，但才正要開始而已呢，這職好玩的是必須每天都要學習新東西，並且從四處蒐集靈感與資源，以及持續創作累積屬於自己的作品。",
	s20: "職場、商場上與人共事如此險峻，有時候面臨到的是公司內部與主管、工程師們的協作，並不是做好份內的事就可以達成專案目標，初入職場的你會感受到非常大的挫折，這時候你會需要懂一點技巧去維持設計師的立場。",
	s21: "Side Project 字面上意思的就是正職工作「以外」的私人項目，以中文來理解也可以想成是「個人項目」，也就是屬於你自己的專案。這個專案為你所擁有且必須負完全的責任。",
	s22: "對於剛想要入門做 UX/UI 設計的朋友來說，挑戰Daily UI (User Interface 使用者介面)的練習也許是個好方法，除了可以快速累積作品外，也能見證及考驗你是否有踏入這行的決心與毅力。",
	magic: "（⋯⋯這是⋯切圖沒切好?!）",
	magic_box: "追求卓越的設計師啊，這裡給你更多的寶藏！ 希望你能戴上它們，面對未來的種種考驗，並好好活下去⋯"
	};


function triggerSkill(event) {
	var skill = event.target.parentElement;
	var descript = document.getElementsByClassName("description")[0];

	if (skill.classList.contains(classActive)) {
		;
	}
	else if (skill.classList.contains(classWaitActive )) {
		skill.classList.remove(classWaitActive );
		skill.classList.add(classActive);
		releaseProcess(skill.id) ;
	} 

	descript.getElementsByTagName("button")[0].style.display = "none";
	descript.getElementsByTagName("h3")[0].textContent =
			skill.getElementsByTagName("h3")[0].innerText;
	descript.getElementsByTagName("img")[0].src = 
			skill.getElementsByTagName("img")[0].src;
	descript.getElementsByTagName("p")[0].textContent = descriptString[skill.id];
}

function triggerMagic(event) {
	var magic = event.target.parentElement;
	var descript = document.getElementsByClassName("description")[0];

	descript.getElementsByTagName("button")[0].style.display = "block";
	descript.getElementsByTagName("h3")[0].textContent =
			magic.getElementsByTagName("h3")[0].innerText;
	descript.getElementsByTagName("img")[0].src = "img/magic_box.png" ;
	descript.getElementsByTagName("p")[0].textContent = descriptString["magic"];
}

function openBox() {
	var descript = document.getElementsByClassName("description")[0];

	document.getElementsByClassName("magic")[0].style.display = "none";
	document.getElementsByClassName("magic_box")[0].style.display = "block";
	document.getElementById("s21").style.display = "block";
	document.getElementById("s22").style.display = "block";

	descript.getElementsByTagName("h3")[0].textContent = "我是 Mono喵" ;
	descript.getElementsByTagName("button")[0].style.display = "none";
	descript.getElementsByTagName("img")[0].src = "" ;
	descript.getElementsByTagName("p")[0].textContent = descriptString["magic_box"];
}

function releaseProcess(id) {
	// var releaseId = null ;

	switch(id) {
		case "s03":
			releaseId("s04");
			releasePath(id);
			break;
		case "s02":
			if (document.getElementById("s05").classList.contains(classActive)) {
				releaseId("s06");
				releasePath("s02");
				releasePath("s05");
				releasePathBefore("s06");
			}
			break;
		case "s05":
			if (document.getElementById("s02").classList.contains(classActive)) {
				releaseId("s06");
				releasePath("s02");
				releasePath("s05");
				releasePathBefore("s06");
			}
			break;
		case "s04":
			releaseId("s05");
			releasePath(id);
			break;
		case "s06":
			releaseId("s07");
			releaseId("s08");
			releaseId("s09");
			releaseId("s11");
			releaseId("s12");
			releaseId("s13");
			releasePath("s06");
			releasePath("s07");
			releasePath("s08");
			releasePath("s09");
			break;
		case "s11":
		case "s12":
		case "s13":
			if ((document.getElementById("s11").classList.contains(classActive)) &&
					(document.getElementById("s12").classList.contains(classActive)) &&
					(document.getElementById("s13").classList.contains(classActive)) ) {
				releaseId("s14");
				releasePath("s11");
				releasePath("s12");
				releasePath("s13");
			}

			break;
		case "s14":
			releaseId("s16");
			releasePath(id);
			break;
		case "s16":
			releaseId("s15");
			releaseId("s17");
			releaseId("s18");
			releaseId("s19");
			releaseId("s20");
			releasePath("s16");
			releasePath("s15");
			releasePath("s17");
			releasePath("s18");
			releasePath("s19");
			releasePath("s20");
			break;
		default :
			break;
	}
}

function releaseId(id) {
	document.getElementById(id).classList.add(classWaitActive );
}
function releasePath(id) {
	document.getElementById(id).classList.add(classActivePath );
}
function releasePathBefore(id) {
	document.getElementById(id).classList.add(classActivePathBefore );
}

function drawBackgroundPic() {
	drawStar( 2, 3);
	drawStar( 0, 55);
	drawStar( 41, 42);
	drawStar4Point( 36, 11);
	drawStar4Point( 47, 97);
	drawCircle( 52, 89);
	drawColoumn( 0, 69, 10);
	drawColoumn( 27, 32, 55);
	drawColoumn( 27, 43, 20);
	drawColoumn( 27, 60.5, 20);
	drawColoumn( 27, 71.5, 20);
	drawColoumn( 36, 81.5, 50);
	drawColoumn( 36, 91.5, 50);
}

function drawStar( top, left) {
	var wrap = document.getElementsByClassName("wrap")[0];
	var element = document.createElement("div");

	element.classList.add("star");
	element.style.top= top + "%";
	element.style.left= left + "%";
	wrap.appendChild(element);
}

function drawStar4Point( top, left) {
	var wrap = document.getElementsByClassName("wrap")[0];
	var element = document.createElement("div");

	element.classList.add("star_4point");
	element.style.top= top + "%";
	element.style.left= left + "%";
	wrap.appendChild(element);
}

function drawCircle( top, left) {
	var wrap = document.getElementsByClassName("wrap")[0];
	var element = document.createElement("div");

	element.classList.add("circle");
	element.style.top= top + "%";
	element.style.left= left + "%";
	wrap.appendChild(element);
}

function drawCirclePoint( top, left) {
	var wrap = document.getElementsByClassName("wrap")[0];
	var element = document.createElement("div");

	element.classList.add("circle_point");
	element.style.top= top + "%";
	element.style.left= left + "%";
	wrap.appendChild(element);
}

function drawColoumn( top, left, num) {
	for(var i=0 ; i<num ; i++ ) {
		drawCirclePoint( top+i, left);
	}
}


// ------------ main ------------
console.log("skill tree...");
var skill = document.getElementsByClassName("skill") ;
var magic = document.getElementsByClassName("magic")[0] ;

drawBackgroundPic();
for (var i=0 ; i<skill.length ; i++ ) {
	skill[i].getElementsByTagName("img")[0].addEventListener("click", triggerSkill);
}

magic.getElementsByTagName("img")[0].addEventListener("click", triggerMagic);

