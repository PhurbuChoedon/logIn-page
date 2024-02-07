"use strict";

const form = document.querySelector("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const day = document.querySelector("#day");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	handleInput();
});

function handleInput() {
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const dayValue = day.value.trim();
	if (!emailValue) {
		setErrorFor(email, "Email cannot be blank");
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, "Please enter valid email");
	}

	if (!dayValue) {
		setErrorFor(day, "Please enter date");
	} else if (!isValidDay(dayValue)) {
		setErrorFor(day, "Please enter valid date");
	}

	if (!passwordValue) {
		setErrorFor(password, "Please enter password");
	} else if (!hasNumericValue(passwordValue)) {
		setErrorFor(password, "Password must have a numeric value");
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	formControl.classList.add("error");
	const small = formControl.querySelector("p");
	small.innerText = message;
}

function isEmail(email) {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

function hasNumericValue(password) {
	var numericRegex = /\d/;
	return numericRegex.test(password);
}

function isValidDay(day) {
	var dayNumber = Number(day);
	return !isNaN(dayNumber) && dayNumber >= 1 && dayNumber <= 31;
}

