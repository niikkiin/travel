import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';
import { Link } from 'react-router-dom';

const { accentColor, accentShade } = helpers;

export const InfoPageContainer = styled.div`
	h1 {
		font-sze: 2rem;
		margin: 0.5rem 0;
	}
	h3 {
		font-weight: 200;
	}

	.travel-tags {
		margin: 1rem 0;

		.tag-label {
			font-size: 1.2rem;
			margin: 0.5rem 0;

			.max-tag {
				font-size: 0.9rem;
			}
		}
	}
`;

export const SkipButton = styled(Link)`
	text-decoration: none;
	font-size: 1.2rem;
	margin: 2rem;
	color: ${accentColor};

	&:hover {
		color: ${accentShade};
	}
`;
