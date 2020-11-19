import styled from 'styled-components';
import {kelvinToFahrenheit, kelvinToCelsius, utcToDate, todaysDate} from '../util';
import {useSelector} from 'react-redux';
import {motion, AnimatePresence} from 'framer-motion';
import {fadeIn} from '../animation';


function Weather(){

	const {weather, isLoading} = useSelector((state) => state.weather);

	return(
		<AnimatePresence exitBeforeEnter>
		{isLoading && 
			<StyledWeather variants={fadeIn} initial="hidden" animate="show" exit="exit">
				<h1>{weather.name}</h1>
				<p>{`as of ${todaysDate()}`}</p>
				<WeatherBody>
					<div>
						<h2>{`${kelvinToFahrenheit(weather.main.temp)}`}</h2>
						<p id='noMargin'>{`( ${kelvinToCelsius(weather.main.temp)} )`}</p>
					</div>
					<div>
						<img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].main} />
						<h3>{weather.weather[0].main}</h3>
					</div>
					<div>
						<h3>Feels Like:  {`${kelvinToFahrenheit(weather.main.feels_like)}`}</h3>
						<h3>Huminity:  {`${weather.main.humidity}%`}</h3>
						<h3>Sunrise:  {utcToDate(weather.sys.sunrise)}</h3>
						<h3>Sunset: {utcToDate(weather.sys.sunset)}</h3>
					</div>
				</WeatherBody>
			</StyledWeather>
		}
		</AnimatePresence>
	)
}

const StyledWeather = styled(motion.div)`
	margin: auto;
	width: 70%;
	height: 40vh;
	margin-top: 2rem;
	border-radius: 1rem;
	overflow: hidden;
	box-shadow: 0 0 20px lightgray;
	position: relative;
	background: rgb(38,170,255);
	background: linear-gradient(180deg, rgba(38,170,255,1) 0%, rgba(123,216,255,1) 100%);
	h1{
		text-align: center;
		font-size: 4rem;
		padding: 1rem;
	}
	p{
		text-align: center;
		margin-bottom: 2rem;
		font-size: 1.4rem;
	}
	h3{
		text-align: center;
	}
`

const WeatherBody = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	line-height: 2rem;
	div{
		margin: 0rem 1.5rem;
	}
	h2{
		font-size: 5rem;
		margin-bottom: 2rem;
	}
	#noMargin{
		margin: 0;
		font-weight: bold;
	}
`

export default Weather;