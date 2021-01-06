import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
	}

	html, body {
		height: 100%;
    width: 100%;
  }

	html {
  	box-sizing: border-box;
		font-size: 62.5%;
	}

	*, *:before, *:after {
  	box-sizing: inherit;
	}

	body {
		font-size: 1.6rem;
		font-family: 'Karla', sans-serif;
		font-weight: 400;
		color: #010822;
	}

	h1,h2,h3,h4,h5,h6 {
		font-family: 'Rubik', sans-serif;
	}
	
	input, select, textarea, button{font-family:inherit;}
`
