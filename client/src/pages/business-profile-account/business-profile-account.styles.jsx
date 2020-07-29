import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';

const { accentColor, accentShade } = helpers;

export const BusinessProfileAccountContainer = styled.div`
	.change-profile {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 0 1rem -15rem;

		.avatar {
			width: 3.5rem;
			height: 3.5rem;
			-webkit-border-radius: 60px;
			-webkit-background-clip: padding-box;
			-moz-border-radius: 60px;
			-moz-background-clip: padding;
			border-radius: 60px;
			background-clip: padding-box;
			float: left;
			background-size: cover;
			background-position: center center;
			margin: 0 2rem;
		}

		.name-and-update {
			display: flex;
			flex-direction: column;
			font-size: 1.1rem;

			.change-profile-option {
				color: ${accentColor};
				font-weight: 700;
				cursor: pointer;

				&:hover {
					color: ${accentShade};
				}
			}
		}
	}
	.edit-travel-tags {
    display: flex;
    
    .create-select {
      width: 100%;
      padding: 0.5rem 0.5rem;
      margin: 0.5rem 0;
    }
    
		.tag-label {

			font-size: 1.2rem;
      padding: 1.3rem 0.3rem 0.5rem 0rem;
      margin: 0.5rem;
      min-width: 15rem;
      text-align: right;\

		  .max-tag {
        font-size: 0.9rem;
        padding: 0.2rem 0.5rem;
		  }
  }
  
  .edit-btn-container {
    display: flex;
    justify-content: right;
    float: right;
    background-color: pink;
  }
`;
