import Nav from './components/Nav';
import Weather from './components/Weather';
import GlobalStyles from './components/GlobalStyles';
import styled from 'styled-components';
import {AnimatePresence} from 'framer-motion';

function App() {
	return (
	    <StyledApp>
	    	<GlobalStyles />
	    	<Nav />
	    	<AnimatePresence exitBeforeEnter>
	    		<Weather/> 
	    	</AnimatePresence>
	    </StyledApp>
	  );
	}


const StyledApp = styled.div`
	position: relative;
	margin-top: 10rem;
	overflow: hidden;
`
export default App;
