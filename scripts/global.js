$(document).ready(function() {
	console.log("ready");

	$("input").focus();

	$(".wrapper").click(function() {
		$("input").focus();
	});

	$(".bar").each(function(index) {
		$(this).css("background", randomColour());
	});

	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	let now = new Date();
	let year = 1900 + now.getYear();
	let month = months[now.getMonth()];
	let day = days[now.getDay()];
	let date = now.getDate().toString();

	let hour = ("0" + now.getHours()).slice(-2);
	let min = ("0" + now.getMinutes()).slice(-2);
	let sec = ("0" + now.getSeconds()).slice(-2);

	$(".hourMin").text(`${hour}:${min}`);
	$(".seconds").text(`:${sec}`);

	$(".date").text(`${day}, ${date}${getSuffix(date)} ${month}`);

	if ((hour > 18 && hour < 8)) {
		$(".wrapper").css("background", "#000");
		$("input, .time").css("color", "#aaa");
	} else {
		$(".wrapper").css("background", "#fff");
		$("input, .time").css("color", "#2e2e2e");
	}

	$(".copyDate").text(year);

	setInterval(function() {
		now = new Date();
		year = 1900 + now.getYear();
		month = months[now.getMonth()];
		day = days[now.getDay()];
		let date = now.getDate().toString();

		let hour = ("0" + now.getHours()).slice(-2);
		let min = ("0" + now.getMinutes()).slice(-2);
		let sec = ("0" + now.getSeconds()).slice(-2);

		console.log(hour, min, sec);

	if (hour > 18 && hour < 8) {
		$(".wrapper").css("background", "#000");
		$("input").css("color", "#aaa");
	} else {
		$(".wrapper").css("background", "#fff");
		$("input").css("color", "#2e2e2e");
	}

	$(".hourMin").text(`${hour}:${min}`);
	$(".seconds").text(`:${sec}`);

	$(".date").text(`${day}, ${date}${getSuffix(date)} ${month}`);

	}, 1000);

	$("#searchField").keyup(function() {
		if ($(this).val().includes("https://") || $(this).val().includes("http://") || $(this).val().includes("www.") || $(this).val().includes(".com") || $(this).val().includes(".co.uk") || $(this).val().includes(".org") || $(this).val().includes(".net")) {
			console.log("url");
			$(this).attr("action", "");
			$(this).keydown(function(e) {
				if (e.keycode == 13) {
					window.location.href = $(this).val();
				}
			});
		} else {
			$(this).attr("action", "https://www.google.com/search");
		}
	});
});

random = (max) => {
	return Math.ceil(Math.random() * max)
}

randomColour = () => {
	let r = random(255);
	let g = random(255);
	let b = random(255);

	return `rgba(${r}, ${g}, ${b}, 0.3)`;
}

getSuffix = (date) => {
	if (date.slice(date.length) == 1) {
		return "st"
	} else if (date.slice(date.length) == 2) {
		return "nd";
	} else if (date.slice(date.length) == 3) {
		return "rd";
	} else {
		return "th";
	}
}