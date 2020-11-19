//Base_Url
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

//Api Url for the city weather
export function cityApiUrl(city){
	return `${baseUrl}${city}&appid=${process.env.REACT_APP_WEATHER_API}`
}