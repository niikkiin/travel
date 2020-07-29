import React from 'react';

// styled components
import { RegistrationContainer } from 'layouts/layout.styles';

const RegistrationLayout = ({ children }) => {
  return(
	<RegistrationContainer>
		<div className='registration-box'>
      {children}
    </div>
	</RegistrationContainer>
)};

RegistrationLayout.propTypes = {};

RegistrationLayout.defaultProps = {};

export default RegistrationLayout;
