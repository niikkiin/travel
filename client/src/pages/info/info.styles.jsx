import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';
import { Link } from 'react-router-dom';

const { accentColor, accentShade } = helpers;

export const InfoPageContainer = styled.div`
	h1 {
		font-sze: 2rem;
		margin: 0.5rem 0;
	}
	h3 {
		font-weight: 200;
	}

	.travel-tags {
		margin: 1rem 0;

		.tag-label {
			font-size: 1.2rem;
			margin: 0.5rem 0;

			.max-tag {
				font-size: 0.9rem;
			}
		}
	}

	.profile-avatar {
		display: grid;
		place-items: center;
		cursor: pointer;
		position: relative;
		
		input[type="file"] {
			display: none;
		}
		
		label {
			cursor: pointer;
			transition: all 0.5s ease;
			
			&:hover {
				
				.image--cover {
					opacity: 0.5;
				}
				
				.label-upload {
					transform: scale(1);
				}
			}		
		}
		
		.label-upload {
			transition: all 0.5s ease;
			transform: scale(0);
			width: 11rem;
			position: absolute;
			bottom: 36%;
			left: 33%;
			height: 3rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			overflow: hidden;
			font-weight: bold;
			// color: #fff;     


			.icon {
				font-size: 1.8rem;
				// margin-right: 0.5rem;
			}
		}

		.image--cover {
			width: 10rem;
			height: 10rem;
			border-radius: 50%;
		
			object-fit: cover;
			object-position: center right;
			transition: all 0.5s ease;
		}
	}
`;

export const SkipButton = styled(Link)`
	text-decoration: none;
	font-size: 1.2rem;
	margin: 2rem;
	color: ${accentColor};

	&:hover {
		color: ${accentShade};
	}
`;
