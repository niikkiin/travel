import React from 'react';
import Breakpoint from 'utilities/responsiveness/breakpoint.utility';


export function HighResDesktopBreakpoint(props) {
	return <Breakpoint name='highResDesktop'>{props.children}</Breakpoint>;
}

export function DesktopBreakpoint(props) {
	return <Breakpoint name='desktop'>{props.children}</Breakpoint>;
}

export function TabletLandscapeBreakpoint(props) {
	return <Breakpoint name='tabletLandscape'>{props.children}</Breakpoint>;
}

export function TabletPortraitBreakpoint(props) {
	return <Breakpoint name='tabletPortrait'>{props.children}</Breakpoint>;
}

export function PhoneBreakpoint(props) {
	return <Breakpoint name='phone'>{props.children}</Breakpoint>;
}