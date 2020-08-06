import styled from 'styled-components';

import { breakpoints } from 'utilities/styles/helpers.styles';
const { phone } = breakpoints;

export const PostsContainer = styled.div`
  margin: 5rem 1rem 5rem 2rem;
  
  @media ${phone} {
    margin: 3rem 1rem 5rem 2rem;
  }
`;