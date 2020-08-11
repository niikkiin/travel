import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';

const { dangerColor, secondaryColor, warningColor, lightDangerColor } = helpers;

export const ChooseTagsContainer = styled.div`
	.tag-lists {
		display: grid;
		grid-template-rows: repeat(5, 1fr);
		grid-auto-flow: column;
		width: auto;
	}
	.tag-list {
		list-style-type: none;
		font-size: 1.4rem;
		font-style: italic;
		display: flex;

		.tag-container {
			transition: all 0.3s ease;
			padding: 0.5rem;
		}
		.remove-mark {
			display: none;
			background-color: ${lightDangerColor};
			transition: all 0.5s ease;
			cursor: pointer;
			padding: 0rem 1rem;
			font-size: 2rem;
			color: ${dangerColor};
			border: 1px solid ${secondaryColor};
		}
		&:hover {
			.tag-container {
				border: 1px solid ${secondaryColor};
			}

			.remove-mark {
				border: 1px solid ${secondaryColor};

				display: block;
			}
		}
	}
	.tag-error {
		color: ${warningColor};
		font-size: 1.5rem;
		// margin-bottom: -2rem;
		transition: all 0.5s ease;
	}
`;
