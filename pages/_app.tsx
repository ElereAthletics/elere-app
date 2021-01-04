import { Fragment, useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from '../style'

const App = ({ Component, pageProps }: AppProps) => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	return (
		<Fragment>
			<GlobalStyle />
			<ThemeProvider theme={theme}>{isMounted && <Component {...pageProps} />}</ThemeProvider>
		</Fragment>
	)
}

export default App
