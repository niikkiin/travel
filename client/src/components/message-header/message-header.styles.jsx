import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';

const { lightSecondaryColor, secondaryColor } = helpers;

export const MessageHeaderWrapper = styled.div`
position: relative;
margin-left: 2rem;
.avatar {
  width: 7rem;
  height: 7rem;
  -webkit-border-radius: 60px;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 50%;
  -moz-background-clip: padding;
  border-radius: 50%;
  background-clip: padding-box;
  float: left;
  background-size: cover;
  background-position: center center;
  position: absolute;
  top: -2.4%;
  left: -4.4%;

  &::before {
    content: '';
    padding: 0.5rem;
    position: absolute;
    top: -5%;
    left: -5%;
    border-radius: 50%;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  min-height: 10vh;
  padding: 0.5rem 1rem 0.5rem 7rem;
  // margin-left: 2rem;
	background-color: ${lightSecondaryColor};
  border: 1px solid ${secondaryColor};
  display: flex;
  justify-content: space-between;
  
  .name-details {
    display: flex;
    flex-direction: column;

    .tags {
      font-size: 1.1rem;
      margin-top: 0.6rem;

      span {
        margin-right: 1rem;
        font-weight: bold;
      }
    }

    .main-info {
      display: flex;

      .detail-1,
      .detail-2 {
        font-size: 1.1rem;
        font-weight: bold;
      }
      
      .detail-2 {
        margin: 0 0.5rem;
        padding: 0 0.5rem;
        margin-top:  0.1rem;

        .website {
          margin-top: 0.6rem;
        }
      }
    }
    
    .name {
      font-size: 1.4rem;
      font-weight: 700;
    }
    .time {
      font-weight: normal;
      font-size: 1rem;
      margin-top: 0.2rem;
      font-style: italic;
    }
  }
  
  .country {
    font-size: 1.5rem;
    margin-top: auto;
    margin-left: -5rem;
  }
  
  .settings {
    cursor: pointer;
    margin: auto 0;
    
    .icon {
      font-size: 4rem;
      color: ${secondaryColor};
      margin-top: 1rem;
    }
  }
`;
