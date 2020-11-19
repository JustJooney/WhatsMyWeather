import Nav from './components/Nav';
import Weather from './components/Weather';
import GlobalStyles from './components/GlobalStyles';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';


function App() {
	return (
		<>
		<a href="https://github.com/JustJooney/WhatsMyWeather" target="_blank"><FontAwesomeIcon icon={faGithub} size='3x' id='github'/></a>
	    <StyledApp>
	    	<GlobalStyles />
	    	<Nav />
	    	<Weather/> 
	    </StyledApp>
	    </>
	  );
	}


const StyledApp = styled.div`
	position: relative;
	margin-top: 10rem;
	overflow: hidden;

`



export default App;
