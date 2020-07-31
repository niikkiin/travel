import styled from 'styled-components';


export const MessengerContainer = styled.div`
	margin: 0 3rem;
	margin-top: 6.5rem;
	font-size: 2rem;
	display: grid;
	grid-template-rows: 10vh minmax(54vh, 0.6fr) 10vh;
`;

export const MessagesContainer = styled.div`
	width: 100%;
	background-color: #fff;
	padding: 0rem 2rem 0rem 2rem;
	// height: 65vh;
	// height: auto;
	display: flex;
	justify-content: space-between;
	overflow-y: auto;
	.messages {
		margin-top: auto;
		width: 100%;
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
