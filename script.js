const input = document.querySelector(".subscribe__input");
const button = document.querySelector(".subscribe__button");

button.addEventListener("click", (e) => {
	e.preventDefault();
	if (input.value === "") {
		alert("Please type your email address.");
	} else if (!input.value.endsWith("@gmail.com")) {
		alert("We only approve google mails sorrynotsorry :)");
	} else {
		alert("Subscription successful!");
	}
});
