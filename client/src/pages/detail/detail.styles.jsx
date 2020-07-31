import styled from 'styled-components';
import { helpers } from 'utilities/styles/helpers.styles';


const {secondaryColor, lightSecondaryColor, accentColor} = helpers;

export const HeaderDetails = styled.div`
margin: 1rem 0 0 0;
position: relative;

.title {
  font-size: 1.8rem;
  font-weight: bold;
  margin: 1rem 1rem 0;
  }
  .timestamp {
    font-size: 1rem;
    font-style: italic;
    position: absolute;
    top: -7%;
    right: 2%;
  }
  .img {
    width: 27rem;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
  `;
  
  export const PastedHeader = styled.div`
  background-color: pink;
  border: 1px solid ${secondaryColor};
  background-color: ${lightSecondaryColor};
  font-size: 1rem;
  height: 10vh;
  width: 100%;

  .header-items {
    display: grid;
    grid-template-columns: auto 1fr auto;
  }
  .title {
    font-size: 1.8rem;
    font-weight: bold;
  }
  .post-header-details {
    margin: 0.4rem 0;
  }

  .timestamp {
    font-size: 1.3rem;
    font-style: italic;
    padding: 0.5rem 0;
    margin: 0.5rem 0;
  }

  .img-container {
    width: 8rem;
    padding: 1.4rem 1rem 0 1rem;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }

  .x-mark {
    font-size: 2rem;
    cursor: pointer;
    margin: 0.5rem 1rem 0 0;
    color: ${secondaryColor};
    transition: all 0.5s ease;

    &:hover{
      color: ${accentColor};
    }
  }
`;