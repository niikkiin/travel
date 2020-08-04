import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';

const { secondaryColor, accentColor } = helpers;

export const CreatePostContainer = styled.div`
	margin: 2rem 1.5rem;
	margin-top: 0rem;
	padding: 2rem;
	border: 1px solid ${secondaryColor};
	overflow-y: hidden;
	max-height: 1600px; /* approximate max height */
	transition-property: all;
	transition-duration: 1s;
	transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
	&.is-closed {
		margin: 0 5rem;
		padding: 0 2rem;
		font-size: 0;
		max-height: 0;
		border: none;
	}
	h3.title {
		font-size: 1.5rem;
	}
`;

export const CropperContainer = styled.div`
	width: 100%;
	height: 20rem;
	z-index: 5;
	position: relative;
`;

export const ZoomContainer = styled.h3`
	font-size: 1.3rem;
	margin-top: 1rem;
`;

export const HeaderCreatePost = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	.x-mark {
		margin-top: -1rem;
		cursor: pointer;
		&:hover {
			color: ${accentColor};
		}
	}
`;