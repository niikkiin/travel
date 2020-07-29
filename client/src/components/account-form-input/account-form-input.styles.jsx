import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';

const { accentColor, secondaryColor, textColor1 } = helpers;

export const FormInputContainer = styled.div`
	display: flex;
	font-size: 1.2rem;
`;

export const Input = styled.input`
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
  
  export const Label = styled.label`
	padding: 0.5rem 1rem;
  margin: 0.5rem;
  min-width: 15rem;
  text-align: right;
`;
