import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';

const { accentColor } = helpers;

export const RadioButtonContainer = styled.label`
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
