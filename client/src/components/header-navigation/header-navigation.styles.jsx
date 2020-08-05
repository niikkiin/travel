import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';
const { textColor1, accentColor } = helpers;

export const HeaderNavigationContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex: 0.8;
	margin-left: 5rem;

	.is-active {
		.icon {
			color: ${accentColor};
		}
	}
	.icon {
		font-size: 2.8rem;
		color: ${textColor1};
		transition: all 0.5s ease;
		cursor: pointer;
		&.nav-active {
			color: ${accentColor};
		}

		&:hover {
			color: ${accentColor};
		}
	}
`;
