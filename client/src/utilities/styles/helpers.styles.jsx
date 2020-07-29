import { css } from 'styled-components';
/**
 * Helper styles and themes for global usage
 */
export const helpers = {
  primaryColor: '#FAFAFA',
  // secondaryColor: '#ECECEC',
	secondaryColor: '#d0d0d0',
	lightSecondaryColor: '#EDEDED',
	accentColor: '#458BC9',
	accentShade: '#0264bc',

	textColor1: '#262626',
	textColor2: '#757575',
	
	successColor: '#8BC34A',
	lightBlue: '#E1F5FE',
	lightGreen: '#F1F8E9',

	
	warningColor: '#E69316',
	dangerColor: '#BE174E',
	successHighlightColor: '#083623',

	boxShadow: '10px 25px 45px 0px rgba(0,0,0,0.25)',
};

export const breakpoints = {
	highResDesktop: '(min-width: 1281px)',
	desktop: '(min-width: 1025px) and (max-width: 1280px)',
	tabletLandscape: '(min-width: 961px) and (max-width: 1024px)',
	tabletPortrait: '(min-width: 641px) and (max-width: 960px)',
	phone: '(min-width: 320px) and (max-width: 640px)',
};

// SECTION ANIMATIONS
export const shrinkLabelStyles = css`
	top: -1.8rem;
	left: 0.1rem;
	font-size: 1.3rem;
	color: ${helpers.accentColor};
`;