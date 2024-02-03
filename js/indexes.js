$(document).ready(() => {
	$("#basic").on('click', () => {
		$.get("./indexes/basic.html", (respuesta) => {
			$("#indx-cont").addClass("blank-back");
			$("#indx-cont").html(respuesta);
		});
	});

	$("#titles").on('click', () => {
		$.get("./indexes/titles.html", (respuesta) => {
			$("#indx-cont").addClass("blank-back");
			$("#indx-cont").html(respuesta);
		});
	});
});