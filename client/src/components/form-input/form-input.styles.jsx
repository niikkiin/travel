import styled from 'styled-components';

import { helpers, shrinkLabelStyles } from 'utilities/styles/helpers.styles';

const { accentColor, secondaryColor, textColor1 } = helpers;

export const FormInputContainer = styled.div`
	position: relative;
	margin: 2rem 0 1.5rem 0;
	input[type='password'] {
		letter-spacing: 0.3em;
	}
`;

export const Input = styled.input`
	background: none;
	color: ${textColor1};
	font-size: 1rem;
	padding: 0.8rem;
	display: block;
	width: 100%;
  border: 1px solid ${secondaryColor};
	&:focus {
    outline: none;
    border: 1px solid ${accentColor};
	}
	&:focus ~ label {
		${shrinkLabelStyles};
	}
`;

export const Label = styled.label`
	text-transform: capitalize;
	color: ${textColor1};
	font-size: 1.5rem;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 1rem;
	top: 0.5rem;
	transition: 300ms ease all;
	&.shrink {
		${shrinkLabelStyles};
	}
`;

export const AccountFormInputContainer = styled.div`
	display: flex;
	font-size: 1.2rem;
`;

export const AccountInput = styled.input`
	padding: 0.5rem 1rem;
  margin: 0.5rem;
	width: 100%;
	outline: none;
	transition: all 0.5s ease;
  border: 1px solid ${secondaryColor};
  color: ${textColor1};
  
	&:focus,
	&:active {
    border: 1px solid ${accentColor};
    
    .label {
      color: ${accentColor};
    }
	}
  `;
  
  export const AccountLabel = styled.label`
	padding: 0.5rem 1rem;
  margin: 0.5rem;
  min-width: 15rem;
  text-align: right;
`;