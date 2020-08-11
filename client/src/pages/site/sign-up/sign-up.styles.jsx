import styled from 'styled-components';

export const SignUpPageContainer = styled.div`
	h1 {
		font-sze: 2rem;
		margin: 0.5rem 0;
	}

	.user-type {
    display: flex;
    flex-direction: column;
    
    .helper-text {
      font-size: 1.3rem;
      margin: 1rem 0;
    }
    
		&-selection {
      display: flex;
      
		}
  }
  
  .form {
    transition: all 0.5s ease;
  }
`;