import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';

const { accentColor, accentShade } = helpers;

export const SignInPageContainer = styled.div`
  h1 {
    font-sze: 2rem;
    margin: 0.5rem 0;
  }

  .link-to-register {
		padding: 1rem 0;
		font-size: 1.2rem;

		.register {
			color: ${accentColor};
			cursor: pointer;
			transition: all 0.5s ease;
			text-decoration: none;

			&:hover {
				color: ${accentShade};
			}
		}
	}
`;