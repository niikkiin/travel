import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';

const { accentColor, accentShade } = helpers;

export const SignUpPageContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;


	.instructions {
		margin: 1rem 0;
	}

	.link-to-login {
		padding: 1rem 0;
		font-size: 1.2rem;
		.login {
			color: ${accentColor};
			cursor: pointer;
			transition: all 0.5s ease;
			text-decoration: none;
			&:hover {
				color: ${accentShade};
			}
		}
	}

	.steps-container {
		margin-top: 1rem;
		// position: absolute;
		// bottom: 2%; 
		display: block;
	}
`;
