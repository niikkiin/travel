import React from 'react';

import { ShowHideContainerWrapper } from 'components/show-hide-container/show-hide-container.styles';

export const ShowHideContainer = ({ doShow, children }) => {
	return <ShowHideContainerWrapper className={doShow ? 'do-show' : ''}>{children}</ShowHideContainerWrapper>;
};
