import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';

const { accentColor, accentShade } = helpers;

export const SignUpPageContainer = styled.div`
	h1 {
		font-sze: 2rem;
		margin: 0.5rem 0;
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

	.user-type {
    display: flex;
    flex-direction: column;
    
    .helper-text {
      font-size: 1.3rem;
      margin: 1rem 0;
    }
    
		&-selection {
      display: flex;
      
		}
  }
  
  .form {
    transition: all 0.5s ease;
  }
`;
