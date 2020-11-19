import {useState} from 'react';
import {searchWeather} from '../redux/actions/weatherAction';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';

function Nav(){

	const dispatch = useDispatch();

	const [searchInput, setSearchInput] = useState('');

	function inputHandler(e){
		setSearchInput(e.target.value);
	}

	function submitSearchHandler(e){
		e.preventDefault();
		dispatch(searchWeather(searchInput));
		setSearchInput('');
	}

	return(
		<Navbar>
			<h1>What's My Weather?</h1>
			<form>
				<input type="text" onChange={inputHandler} value={searchInput} placeholder="&quot;Los Angeles&quot;" required></input>
				<button onClick={submitSearchHandler} type="submit">Search</button>
			</form>
		</Navbar>
	)
}

const Navbar = styled.div`
	text-align: center;
	padding: 1rem 0rem;
	margin-top: 2rem;

	input{
		width: 30%;
		font-size: 1.3rem;
		padding: 0.5rem;
		margin-top: 2rem;
		outline: none;
	}

	button{
		font-size: 1.3rem;
		padding: 0.6rem 0.75rem;
		border: none;
		cursor: pointer;
		background: lightblue;
		font-weight: bold;
	}

	h1{
		font-family: 'Ultra', serif;
		font-size: 4rem;
		font-weight: lighter;
	}
`



export default Nav;