import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';
const { primaryColor, secondaryColor, textColor1 } = helpers;

export const HeaderContainer = styled.header`
  background-color: ${primaryColor};
  border-bottom: 1px solid ${secondaryColor};
  grid-column: 1 / 4;
  display: block;
  
  display: grid;
  // grid-template-columns: minmax(20rem, 40rem) minmax(40rem, 1fr) minmax(20rem, 40rem);
  grid-template-columns: minmax(8%, 1fr) minmax(50%, 1fr) minmax(8%, 1fr);
  text-align: center;
  align-items: center;

  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
  
  .logo {
    padding: 1.3rem;
    color: ${textColor1};
    font-weight: bold;
    font-size: 1.8rem;
  }
  .header-navigation {
    background-color: hotpink;
    padding: 2rem;
  }
  .profile-preview {
    padding: 2rem;
  }
`;