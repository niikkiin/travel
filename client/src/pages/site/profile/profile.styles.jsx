import styled from 'styled-components';


import { breakpoints, helpers } from 'utilities/styles/helpers.styles';
const { textColor1 } = helpers;
const { phone } = breakpoints;

export const ProfilePageContainer = styled.div`
  margin: 0 3rem;
  font-size: 2rem;

  
	@media ${phone} {
		margin: 0.5rem 1rem 10rem 0;
		.title {
      margin-left: 2rem;
      font-size: 3rem;
      color: ${textColor1};
		}
	}
`;