import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';
const { secondaryColor, accentColor, successColor, accentShade, textColor1, textColor2 } = helpers;

export const PostItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	margin: 5rem 0;
	cursor: pointer;

	.avatar {
		width: 5.6rem;
		height: 5.6rem;
		-webkit-border-radius: 60px;
		-webkit-background-clip: padding-box;
		-moz-border-radius: 50%;
		-moz-background-clip: padding;
		border-radius: 50%;
		background-clip: padding-box;
		float: left;
		background-size: cover;
		background-position: center center;
		position: absolute;
		top: 2%;
		left: -2%;

		&::before {
			content: '';
			padding: 0.5rem;
			position: absolute;
			top: -5%;
			left: -5%;
			background-color: ${successColor};
			border-radius: 50%;
		}
	}

	.post-info {
		font-size: 1.2rem;
		font-weight: 500;
		margin: 1rem 1rem 1rem 7rem;

		.posted-by-text,
		.post-from-text {
			color: ${textColor1};
		}

		.link {
			color: ${accentColor};
			font-weight: 700;
			cursor: pointer;
			transition: all 0.5s ease;

			&:hover {
				color: ${accentShade};
			}
		}

		.time {
			font-style: italic;
		}
	}

	.card-container {
		display: flex;
		flex-wrap: wrap;
	}

	.card {
		border: solid 1px ${secondaryColor};
	}

	.card .card-body {
		p.post-title {
			color: ${textColor2};
			font-size: 2.5rem;
			margin: 2rem 2rem 1.5rem 9rem;
		}
	}

	.card img.card-img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`;
