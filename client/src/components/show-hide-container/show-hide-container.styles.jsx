import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';

const { secondaryColor } = helpers;

export const ShowHideContainerWrapper = styled.div`
	overflow: hidden;
	height: 0;
	transition: all 0.5s ease;
	margin-bottom: 1rem;
  // transition-property: all;
	// transition-duration: 1s;
	// transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

	&.do-show {
		height: 100%;
		border: 1px solid ${secondaryColor};
	}
`;
