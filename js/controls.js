// EVENT HANDLERS
$(document).ready(() => {
	$("#btn-play-pause").on('click', (event) => {
		let curstate = $("#btn-play-pause").attr("data-state");

		$("#btn-play-pause img").attr("src",`./images/controls/${
			curstate == "play" ? "play" : "pause"
		}.png`);

		play_pause(curstate);

		$("#btn-play-pause").attr("data-state",curstate == "play" ? "pause" : "play");
	});

	$("#btn-return").on('click', () => {
		$("#search").css("display","flex");
		$("#app").css("display","none");
		clear_fields();
		start_on_play();
	});

	$(window).on('keyup', (ev) => {
		console.log(ev.code);
		change_letra(ev.code);
	});

	$("#mp3").on('timeupdate', () => {
		console.log($("#mp3")[0].currentTime);
		//update_letra($("#mp3")[0].currentTime);
	});

	$("#mp3").on('ended', () => {
		$("#btn-play-pause img").attr("src","./images/controls/play.png");
		$("#btn-play-pause").attr("data-state","pause");
	});
});


// BACKEND FUNCTIONS
function play_pause(state) {
	if (state == "play") $("#mp3")[0].pause();
	else $("#mp3")[0].play();
}

function change_back(sign) {
	let tmp = Number($("#app").attr("data-img"));
	console.log("sign is: ",sign);

	tmp = sign == '+' ? tmp+1 : sign == '-' && tmp > 1 ? tmp-1 : tmp;
	let data_img = tmp;

	if (`${tmp}`.length == 1) tmp = `0${tmp}`;

	let jpg = $.ajax({
		url: `${$("#app").attr("data-ruta")}${tmp}.jpg`,
		method: "post"
	});

	jpg.done(function() {
		$("#app").attr("data-img",`${data_img}`);

		$("#app").css({
			"background": `url('${$("#app").attr("data-ruta")}${tmp}.jpg') 50% no-repeat`,
			"background-size":"auto 100%"
		});
	});

	jpg.fail(function () { console.log("End of song") });
}

function change_letra(code) {
	if ($("#search").css("display") != 'none') return;
	switch (code) {
	case "ArrowLeft":
		change_back('-');
		break;
	case "ArrowRight":
		change_back('+');
		break;
	case "Space":
		$("#btn-play-pause").trigger('click');
		break;
	case "Backspace":
		$("#btn-return").trigger('click');
		break;
	}
}