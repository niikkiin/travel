import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';

const { secondaryColor, textColor1 } = helpers;

export const UploadImageContainer = styled.div`
	position: relative;
	overflow: hidden;
  margin: 1rem 0 2rem 0;
  cursor: pointer;
  
  .btn {
    border: 1px solid ${secondaryColor};
    color: ${textColor1};
    background-color: $secondaryColor;
    padding: 8px 20px;
    font-size: 1.3rem;
    cursor: pointer;

    .icon {
      margin-right: 0.5rem;
    }
  }
  
  input[type=file] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }

  .image-holder {
    margin-top: 1rem;
  }

  .img-holder {
    width: auto;
    height: 14.2rem;
    object-fit: cover;
  }
  .d-block {
    dislay: block;
  }
  .d-none {
    display: none;
  }
`;
