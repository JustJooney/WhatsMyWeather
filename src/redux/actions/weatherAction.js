import axios from 'axios';
import {cityApiUrl} from '../../api';

export const searchWeather = (location) => async(dispatch) => {

	const weatherData = await axios.get(cityApiUrl(location));

	dispatch({
		type: "SEARCH_WEATHER",
		payload: {
			weather: weatherData.data,
			isLoading: true,
		}
	})
}