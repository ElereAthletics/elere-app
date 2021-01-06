import { Container } from '@components/atoms'
import { NoticeRight, NoticeWrap } from './styles'

const Notice = () => {
	return (
		<NoticeWrap>
			<Container>
				<p>Contact Us (123)-456-789</p>
				<NoticeRight>
					<p>Login / Register</p>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16.414'
						height='15.247'
						viewBox='0 0 16.414 15.247'
					>
						<g id='shopping-cart' transform='translate(-1 -2)'>
							<path
								id='Path_1'
								data-name='Path 1'
								d='M4.653,2H1V3.525H3.454L5.564,13.19h.01v.246h9.911v-.189l1.672-7.365.257-.832H5.311L4.876,3.059ZM15.475,6.574H5.644L6.81,11.911h7.454Z'
								fill='#fff'
								fillRule='evenodd'
							/>
							<path
								id='Path_2'
								data-name='Path 2'
								d='M9.525,21.049A1.525,1.525,0,1,0,8,19.525,1.525,1.525,0,0,0,9.525,21.049Z'
								transform='translate(-1.664 -3.802)'
								fill='#fff'
							/>
							<path
								id='Path_3'
								data-name='Path 3'
								d='M18.049,19.525A1.525,1.525,0,1,1,16.525,18,1.525,1.525,0,0,1,18.049,19.525Z'
								transform='translate(-3.327 -3.802)'
								fill='#fff'
							/>
						</g>
					</svg>
				</NoticeRight>
			</Container>
		</NoticeWrap>
	)
}

export default Notice
