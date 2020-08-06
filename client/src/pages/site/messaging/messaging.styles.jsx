import styled from 'styled-components';

import { breakpoints } from 'utilities/styles/helpers.styles';

const { phone } = breakpoints;

export const MessengerContainer = styled.div`
	margin: 0 -3.5rem 0 -2rem;
	margin-top: 1.5rem;
	font-size: 2rem;
	display: grid;
	grid-template-rows: 10vh minmax(54vh, 0.5fr) 10vh;
	
	@media ${phone} {
		// grid-template-rows: 10vh minmax(62vh, 0.5fr) 10vh;
		display: flex;
		flex-direction: column;
		margin: 2rem 1rem 6rem 1rem;
	}
`;

export const MessagesContainer = styled.div`
	width: 100%;
	background-color: #fff;
	margin: 1rem 0;
	padding: 0rem 2rem 0rem 2rem;
	// height: 65vh;
	// height: auto;
	display: flex;
	justify-content: space-between;
	overflow-y: scroll;
	.messages {
		margin-top: auto;
		width: 100%;
	}

	@media ${phone} {
		flex: 1;
		// min-height: 40rem;
	}
`;

export const MessageHeaderContainer = styled.div`
	width: 100%;
	height: 10vh;
`;

export const MessageBox = styled.div`
	width: 100%;
	height: 10vh;
`;
