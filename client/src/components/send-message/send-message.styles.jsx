import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';


const { lightSecondaryColor, secondaryColor, textColor1 } = helpers;

export const SendMessageContainer = styled.div`
	display: flex;
	padding-top: 1rem;
  align-items: center;
  
  .input-container {
    background-color: ${lightSecondaryColor};
    border: 1px solid ${secondaryColor};
    width: 100%;
    display: flex;
    padding: 1rem;
  }
  `;
  
  export const InputMessage = styled.input`
  width: 100%;
	height: 4rem;
  padding: 1rem 0 1rem 2rem;
	color: ${textColor1};
	border: none;
	outline: none;
`;

export const SendFileBox = styled.div`
  width: 7%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

	.icon {
    
		color: lightgray;
		font-size: 3rem;
		cursor: pointer;
	}
`;
export const SendFile = styled.input``;
