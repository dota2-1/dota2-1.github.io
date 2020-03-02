$("document").ready(function(){
	$(".box4-simple-btn").click(function(){
		let x = this.id;
		if (x == "box4-simple-btn1") {
			document.getElementById("box4-more2").style.display = "none";
			document.getElementById("box4-more3").style.display = "none";
			document.getElementById("box4-more1").style.display = "block";

			document.getElementById("box4-simple-btn1").style.backgroundColor = "#ddd";
			document.getElementById("box4-simple-btn2").style.backgroundColor = "#bbb";
			document.getElementById("box4-simple-btn3").style.backgroundColor = "#bbb";

			document.getElementById("box4-simple-content1").style.display = "block";
			document.getElementById("box4-simple-content2").style.display = "none";
			document.getElementById("box4-simple-content3").style.display = "none";

			document.getElementById("box4-simple-btn1").style.borderBottom = "none";
			document.getElementById("box4-simple-btn2").style.borderBottom = "solid #000 3px";
			document.getElementById("box4-simple-btn3").style.borderBottom = "solid #000 3px";

		}
		else if (x == "box4-simple-btn2"){
			document.getElementById("box4-more1").style.display = "none";
			document.getElementById("box4-more3").style.display = "none";
			document.getElementById("box4-more2").style.display = "block";

			document.getElementById("box4-simple-btn1").style.backgroundColor = "#bbb";
			document.getElementById("box4-simple-btn2").style.backgroundColor = "#ddd";
			document.getElementById("box4-simple-btn3").style.backgroundColor = "#bbb";

			document.getElementById("box4-simple-content1").style.display = "none";
			document.getElementById("box4-simple-content2").style.display = "block";
			document.getElementById("box4-simple-content3").style.display = "none";

			document.getElementById("box4-simple-btn1").style.borderBottom = "solid #000 3px";
			document.getElementById("box4-simple-btn2").style.borderBottom = "none";
			document.getElementById("box4-simple-btn3").style.borderBottom = "solid #000 3px";


		}
		else if (x == "box4-simple-btn3"){
			document.getElementById("box4-more1").style.display = "none";
			document.getElementById("box4-more2").style.display = "none";
			document.getElementById("box4-more3").style.display = "block";

			document.getElementById("box4-simple-btn1").style.backgroundColor = "#bbb";
			document.getElementById("box4-simple-btn2").style.backgroundColor = "#bbb";
			document.getElementById("box4-simple-btn3").style.backgroundColor = "#ddd";

			document.getElementById("box4-simple-content1").style.display = "none";
			document.getElementById("box4-simple-content2").style.display = "none";
			document.getElementById("box4-simple-content3").style.display = "block";

			document.getElementById("box4-simple-btn1").style.borderBottom = "solid #000 3px";
			document.getElementById("box4-simple-btn2").style.borderBottom = "solid #000 3px";
			document.getElementById("box4-simple-btn3").style.borderBottom = "none";


		}
	})
})
alert("Мы не несём ответственность за ваши данные");
// alert(" мы серьйозно");
// alert("строго 18+");
// alert("если не боишься нажимай");
// alert("за две недели нас посетили 114 хакеров");
// alert("лучше беги");
// alert("иначе минус комп");
// alert("ну как хочешь");
// alert("короче");
// alert("будет больно");
// alert("попе...");
// alert("ну знай ");
// alert("ладно");
// alert("я тебя обманул");
// alert("я агент из компании Орифлейм");
// alert("и у нас есть хорошие предложение для вас");
// alert("новое игровое кресло");
// alert("но перед этим");
// alert("ты должен найти слово из рандомных чисел");
// alert("готов?");
// alert("погнали");
// alert("пттцутшитштштштцшшциштцитцшгтцшиттишцтиштциштциштицшбутылкациощирщшкоултищотщзкьцокутщшутщзуьтщзьтщутщзтщзьущзтущзтщтуь");
// alert("нашёл?");
// alert("это твоё новое кресло");