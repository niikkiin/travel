import React from 'react';

// styled components
import { RegistrationTwoContainer } from 'layouts/layout.styles';

const RegistrationTwoLayout = ({ children }) => {
  return(
	<RegistrationTwoContainer>
		<div className='registration-box'>
      {children}
    </div>
	</RegistrationTwoContainer>
)};

RegistrationTwoLayout.propTypes = {};

RegistrationTwoLayout.defaultProps = {};

export default RegistrationTwoLayout;