import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';

const { accentColor, secondaryColor, lightDangerColor, warningColor, dangerColor } = helpers;

export const AdditionalInfoContainer = styled.div`
.additional-section {
  display: flex;

  .add-profile-picture-text {
    margin-top: -8rem;
    font-size: 1.2rem;
  }

  .additional-inputs {
    flex: 1;
  }
}
.profile-avatar {
  display: grid;
  place-items: center;
  // cursor: pointer;
  position: relative;

  input[type='file'] {
    display: none;
  }

  label {
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
      .image--cover {
        opacity: 0.5;
      }

      .label-upload {
        transform: scale(1);
      }
    }
  }

  .label-upload {
    transition: all 0.5s ease;
    transform: scale(0);
    width: 11rem;
    position: absolute;
    top: 30%;
    left: -3%;
    height: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    font-weight: bold;
    // color: #fff;
    .icon {
      font-size: 1.8rem;
      // margin-right: 0.5rem;
    }
  }
  .image--cover {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;

    object-fit: cover;
    object-position: center right;
    transition: all 0.5s ease;
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
    padding: 1.3rem 1rem 0.5rem 0rem;
    margin: 0.5rem;
    min-width: 15rem;
    text-align: right;
    .max-tag {
      font-size: 0.9rem;
      padding: 0.2rem 0.5rem;
    }
}
	.tag-input-container {
		position: relative;
	}
	.tag-length {
		font-size: 1rem;
		color: ${accentColor};
		position: absolute;
		top: 26%;
		right: 3%;

		&.full-length {
			color: ${warningColor};
		}
	}
	.tag-lists {
		display: grid;
		grid-template-rows: repeat(5, 1fr);
		grid-auto-flow: column;
		width: auto;
	}
	.tag-list {
		list-style-type: none;
		font-size: 1.4rem;
		font-style: italic;
		display: flex;

		.tag-container {
			transition: all 0.3s ease;
			padding: 0.5rem;
		}
		.remove-mark {
			display: none;
			background-color: ${lightDangerColor};
			transition: all 0.5s ease;
			cursor: pointer;
			padding: 0rem 1rem;
			font-size: 2rem;
			color: ${dangerColor};
			border: 1px solid ${secondaryColor};
		}
		&:hover {
			.tag-container {
				border: 1px solid ${secondaryColor};
			}

			.remove-mark {
				border: 1px solid ${secondaryColor};

				display: block;
			}
		}
	}
	.tag-error {
		color: ${warningColor};
		font-size: 1.5rem;
		margin-bottom: -2rem;
		transition: all 0.5s ease;
	}

	h1 {
		font-sze: 2rem;
		margin: 0.5rem 0;
	}
	h3 {
		font-weight: 200;
	}
	.travel-tags {
		margin: 1rem 0;
		.tag-label {
			font-size: 1.2rem;
			margin: 0.5rem 0;
			.max-tag {
				font-size: 0.9rem;
			}
		}
	}
	
`;
