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
`
