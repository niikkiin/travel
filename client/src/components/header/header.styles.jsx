import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';
const { primaryColor, secondaryColor, textColor1 } = helpers;

export const HeaderContainer = styled.header`
	background-color: ${primaryColor};
	border-bottom: 1px solid ${secondaryColor};
	display: block;
	height: 8vh;

  display: -ms-grid;
  display: grid;
	// -ms-grid-columns: minmax(8%, 1fr) minmax(50%, 1fr) minmax(8%, 1fr);
	// grid-template-columns: minmax(8%, 1fr) minmax(50%, 1fr) minmax(8%, 1fr);
  text-align: center;
  // -ms-align-items: center;
	align-items: center;
  z-index: 9999;
  width: 100%;
  display: flex;
  justify-content: space-between;

	.logo {
		padding: 1.3rem;
		color: ${textColor1};
		font-weight: bold;
    font-size: 1.8rem;
    margin-left: 5rem;
	}
	.header-navigation {
		background-color: hotpink;
		padding: 2rem;
	}
	.profile-preview {
		padding: 2rem;
	}
`;
