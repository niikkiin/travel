import styled from 'styled-components';


import { breakpoints } from 'utilities/styles/helpers.styles';

const {  phone } = breakpoints;

export const LeftSidebarContainer = styled.div`
	width: 27%;
	top: 8vh;
	bottom: 0px;
	position: fixed;
	display: grid;
	place-items: center;
	height: 100%;
	left: 0;
	z-index: -9999;
	
	@media ${phone} {
		&.is-phone-hidden {
			display: none;
		}
	}
`;