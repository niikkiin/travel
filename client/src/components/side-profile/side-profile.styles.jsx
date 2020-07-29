import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';

const { accentColor, textColor1 } = helpers;

export const SideProfileContainer = styled.ul`

  .side-profile-list {
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
    transition: all 0.5s ease;
    cursor: pointer;
    text-decoration: none;
    color: ${textColor1};


    &.active {
      border-left: 2px solid black;
      color: black;
      font-weight: 700;
    }

    &:hover {
      color: ${accentColor};
    }
  }
`;
