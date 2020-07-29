import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';
const { secondaryColor } = helpers;

export const StaticBoxesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 4rem;
  width: 80%;

  .box {
    border: 1px solid ${secondaryColor};
    height: 8rem;
    width: 100%;
    margin: 1.3rem 0;
    display: block;
  }
`;