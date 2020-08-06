import React from 'react';
import MediaQuery from 'react-responsive';

// import PropTypes from 'prop-types';

const breakpoints = {
	highResDesktop: '(min-width: 1281px)',
	desktop: '(min-width: 1025px) and (max-width: 1280px)',
	tabletLandscape: '(min-width: 961px) and (max-width: 1024px)',
	tabletPortrait: '(min-width: 641px) and (max-width: 960px)',
	phone: '(min-width: 320px) and (max-width: 640px)',
};

export default function Breakpoint(props) {
	const breakpoint = breakpoints[props.name] || breakpoints.desktop;
	return (
		<MediaQuery {...props} query={breakpoint}>
			{props.children}
		</MediaQuery>
	);
}

// @media (min-width:320px)  { /* smartphones, iPhone, portrait 480x320 phones */ }
// @media (min-width:481px)  { /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ }
// @media (min-width:641px)  { /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ }
// @media (min-width:961px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
// @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
// @media (min-width:1281px) { /* hi-res laptops and desktops */ }