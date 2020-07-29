import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';

const { secondaryColor } = helpers;

export const MainContainer = styled.div`
	#content {
		height: 100vh;
		overflow-y: scroll;
	}
`;

export const Main = styled.div`
	display: grid;
	// grid-template: auto 1fr / minmax(40rem, 1fr) minmax(70rem, 1fr) minmax(40rem, 1fr);
	// grid-template: auto 1fr / minmax(8%, 25%) minmax(60%, 50%) minmax(8%, 25%);
	grid-template: auto 1fr / minmax(8%, 1fr) minmax(50%, 1fr) minmax(8%, 1fr);
	min-height: 100vh;

	.main-content {
		grid-column: 2/3;
		// margin: 8rem 3rem 3rem 3rem;
		display: block;
	}
`;

export const RegistrationContainer = styled.div`
	display: grid;
	place-items: center;
	height: 100vh;

	.registration-box {
		padding: 4rem;
		width: 40rem;
		// height: 40rem;
		border: 1px solid ${secondaryColor};
	}
`;
export const AccountContainer = styled.div`
	display: grid;
	place-items: center;
	min-height: 90vh;
	margin-top: 6rem;

	.account-box {
		width: 80rem;
		border: 1px solid ${secondaryColor};

		display: grid;
		grid-template-columns: minmax(150px, 25%) 1fr;

		.side-profile {
		}
		.profile-contents {
			padding: 2rem 4rem;
			border-left: 1px solid ${secondaryColor};
		}
	}
`;
