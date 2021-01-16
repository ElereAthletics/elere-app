import { Fragment, useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../style'
import 'nprogress/nprogress.css'
import Router from 'next/router'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })

Router.events.on('routeChangeStart', () => {
	NProgress.start()
})

Router.events.on('routeChangeComplete', () => {
	NProgress.done()
	window.scroll({
		top: 0,
		left: 0,
	})
})

Router.events.on('routeChangeError', () => {
	NProgress.done()
})

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
