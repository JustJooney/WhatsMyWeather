


export function kelvinToFahrenheit(kelvin){
	const fahrenheit = Math.floor((kelvin - 273.15) * 9/5 + 32);

	return `${fahrenheit}°F`;
}

export function kelvinToCelsius(kelvin){
	const celsius = Math.floor(kelvin - 273.15);

	return `${celsius}°C`;
}

export function utcToDate(utc){
	const date = new Date(utc * 1000);
	let hour = date.getHours();
	const minutes = `0 + ${date.getMinutes()}`;
	const ampm = hour >= 12 ? "PM" : "AM";
	hour = hour % 12;
	hour = hour ? hour : 12;


	return `${hour}:${minutes.substr(-2)}${ampm}`;
}

export function todaysDate(){
	const date = new Date();
	let hour = date.getHours();
	const minutes = `0 + ${date.getMinutes()}`;
	const ampm = hour >= 12 ? "PM" : "AM";
	hour = hour % 12;
	hour = hour ? hour : 12;

	return `${hour}:${minutes.substr(-2)}${ampm}`;
}