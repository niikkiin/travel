import styled from 'styled-components';
import { helpers } from 'utilities/styles/helpers.styles';

const { accentColor, secondaryColor, textColor1 } = helpers;

export const CustomButtonContainer = styled.button`
	min-width: 10rem;
	width: auto;
	margin: 0.5rem auto;
	display: inline-block;
	height: 3rem;
	letter-spacing: 0.1rem;
	padding: 0 1.5rem 0 1.5rem;
	font-size: 1.3rem;
	font-weight: 400;
	cursor: pointer;
	transition: all 0.3s ease;
	color: #fff;
	border: 1px solid ${accentColor};
	background-color: transparent;

	&:hover {
		color: ${accentColor};
		border: 1px solid ${accentColor};
	}

	&.submit-btn {
		color: #fff;
		background-color: ${accentColor};
		&:hover {
			background-color: transparent;
			color: ${accentColor};
		}
	}
	&:disabled {
		cursor: not-allowed;

		color: ${textColor1};
    background-color: ${secondaryColor};
    border: 1px solid ${secondaryColor};
    
    &:hover {
      color: ${textColor1};
      background-color: ${secondaryColor};
      border: 1px solid ${secondaryColor};
    }
  }
`;
