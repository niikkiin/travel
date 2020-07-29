import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';

const { accentColor, secondaryColor } = helpers;

export const RadioButtonContainer = styled.label`
	input[type='radio'] {
		display: none;
		&:checked {
			+ .box {
				background-color: ${accentColor};
				.label {
					color: white;
					// transform: translateY(70px);
					&:before {
						// transform: translateY(0px);
						opacity: 1;
					}
				}
			}
		}
	}

	.box {
		width: 15rem;
		height: 5rem;
    background-color: #fff;
    border: 1px solid ${secondaryColor};
		transition: all 250ms ease;
		will-change: transition;
    display: grid;
    place-items: center;
		text-align: center;
		cursor: pointer;
		position: relative;
		&:active {
			// transform: translateY(10px);
		}
		.label {
      
			// position: absolute;
			// transform: translate(0, 60px);
			// left: 0;
			// right: 0;
			transition: all 300ms ease;
			font-size: 1.5em;
			user-select: none;
			color: ${accentColor};
			&:before {
				font-size: 1.2em;
				font-family: FontAwesome;
				display: block;
				transform: translateY(-80px);
				opacity: 0;
				transition: all 300ms ease-in-out;
				font-weight: normal;
				color: black;
			}
		}
	}
`;
