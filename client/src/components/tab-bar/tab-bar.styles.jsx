import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';
const { textColor1, accentColor } = helpers;

export const TabBarContainer = styled.div`
	background-color: #fff;
	height: 8vh;
	transition: all 0.3s ease-in-out;
	position: fixed;
	bottom: 0;
	width: 100%;
	z-index: 20;
  font-size: 2rem;
  color: ${textColor1};
  
  display: flex;
  justify-content: space-evenly;
  align-items: center;


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
`;
