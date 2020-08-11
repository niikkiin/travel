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

export const RadioButtonTwoContainer = styled.label`
	display: flex;

	[type='radio']:checked,
	[type='radio']:not(:checked) {
		position: absolute;
		left: -9999px;
	}
	[type='radio']:checked + label,
	[type='radio']:not(:checked) + label {
		position: relative;
		padding-left: 4rem;
		margin-top: 1rem;
		cursor: pointer;
		line-height: 3rem;
		display: inline-block;
		color: #666;
	}
	[type='radio']:checked + label:before,
	[type='radio']:not(:checked) + label:before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 3rem;
		height: 3rem;
		border: 1px solid #ddd;
		border-radius: 100%;
		background: #fff;
	}
	[type='radio']:checked + label:after,
	[type='radio']:not(:checked) + label:after {
		content: '';
		width: 2rem;
		height: 2rem;
		background: ${accentColor};
		position: absolute;
		top: 0.5rem;
		left: 0.5rem;
		border-radius: 100%;
		-webkit-transition: all 0.2s ease;
		transition: all 0.2s ease;
	}
	[type='radio']:not(:checked) + label:after {
		opacity: 0;
		-webkit-transform: scale(0);
		transform: scale(0);
	}
	[type='radio']:checked + label:after {
		opacity: 1;
		-webkit-transform: scale(1);
		transform: scale(1);
	}
`;