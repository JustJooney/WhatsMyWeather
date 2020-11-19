const initialState = {
	weather: {},
	isLoading: false,
}

function weatherReducer(state = initialState, action){
	switch(action.type){
		case "SEARCH_WEATHER":
			return{
				...state,
				weather: action.payload.weather,
				isLoading: true,
			}
		default: 
			return{
				...state
			}
	}
}

export default weatherReducer;