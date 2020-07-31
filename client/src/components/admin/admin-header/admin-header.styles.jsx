import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';
const { adminSidebarColor, adminLightColor } = helpers;

export const AdminHeaderContainer = styled.div`
	.page-header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: auto;
		width: 22rem;
		color: #171616;
		background: #f0f1f6;
	}

	/*In case you prefer an absolutely positioned header that covers the full page height, add these styles*/
	/*body {
  position: relative;
}

.page-header {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}*/

	/*remove these styles*/
	/*.page-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
}*/

	.page-header nav {
		display: flex;
		flex-direction: column;
		min-height: 100%;
		background-color: ${adminSidebarColor};
	}

	.page-header .logo {
		display: flex;
		justify-content: center;
		margin: 2rem;
    color: ${adminLightColor};
    font-size: 2rem;
		// max-width: 120px;
		// margin: 0 15px;
	}

	.page-header .toggle-mob-menu {
		display: none;
		margin-left: 5px;
		padding: 4px;
		background: #fff;
		border-radius: 4px;
	}

	.page-header .toggle-mob-menu svg {
		fill: #333;
		transition: transform 0.2s;
	}

	.page-header .admin-menu {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	.page-header .admin-menu li:nth-last-child(2) {
		margin-bottom: 35px;
	}

	.page-header .admin-menu li:last-child {
		margin-top: auto;
		margin-bottom: 20px;
	}

	.page-header .admin-menu li > * {
		width: 100%;
		padding: 12px 15px;
	}

	.page-header .admin-menu .menu-heading h3 {
		text-transform: uppercase;
		letter-spacing: 0.15em;
		font-size: 1.2rem;
		margin-top: 12px;
		color: #7889a4;
	}

	// .page-header .admin-menu icon {
	// 	width: 20px;
	// 	height: 20px;
	// 	fill: #171616;
	// 	margin-right: 10px;
	// 	transition: fill 0.2s;
	// }

	.page-header .admin-menu span,
	.page-header .admin-menu button {
		display: flex;
		align-items: center;
		font-size: 1.1rem;
    transition: background 0.2s, color 0.2s;
    color: ${adminLightColor};
    cursor: pointer;
	}

	.page-header .admin-menu span:hover,
	.page-header .admin-menu span:focus,
	.page-header .admin-menu button:hover,
	.page-header .admin-menu button:focus {
		background: #1d2636;
		color: #00b9eb;
		outline: none;
	}

	.page-header .admin-menu span:hover .li-icon,
	.page-header .admin-menu span:focus .li-icon,
	.page-header .admin-menu button:hover .li-icon,
	.page-header .admin-menu button:focus .li-icon {
		fill: #00b9eb;
  }
  
  .collapse-icon {
    font-size: 2rem;
  }
`;
