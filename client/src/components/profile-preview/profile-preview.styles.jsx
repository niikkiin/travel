import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { helpers } from 'utilities/styles/helpers.styles';


const { textColor1, accentColor } = helpers; 
export const ProfilePreviewContainer = styled(Link)`
	display: flex;
	align-items: center;
  text-decoration: none;
  color: ${textColor1};
  transition: all 0.5s ease;

  &:hover {
    color: ${accentColor};
  }

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

	.name {
		font-weight: bold;
		font-size: 1.8rem;
	}
`;

export const IconContainer = styled.div`

	.icon {
		font-size: 2.4rem;
		display: flex;
		align-items: center;
		margin-left: 2rem;
	}
`;