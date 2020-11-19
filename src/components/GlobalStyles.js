import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;

		font-family: 'Montserrat', sans-serif;
	}

	body{
		width: 100%;
		color: #333;
	}
`

export default GlobalStyles;