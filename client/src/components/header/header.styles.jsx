import styled from 'styled-components';

import { helpers, breakpoints } from 'utilities/styles/helpers.styles';
const { primaryColorLight, secondaryColor, textColor1 } = helpers;

const {  phone } = breakpoints;

export const HeaderContainer = styled.header`
	background-color: ${primaryColorLight};
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
	
	// position: fixed;
	// top: 0;
	// left: 0;


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

	// NOTE DESKTOP IS DEFAULT 
	@media ${phone} {
		display: none;
	}
`;
