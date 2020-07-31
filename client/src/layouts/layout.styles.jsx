import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';

const { secondaryColor } = helpers;

export const MainContainer = styled.div`
	#content {
		height: 100vh;
		overflow-y: scroll;
	}
`;

export const Main = styled.div`
	display: grid;
	// grid-template: auto 1fr / minmax(40rem, 1fr) minmax(70rem, 1fr) minmax(40rem, 1fr);
	// grid-template: auto 1fr / minmax(8%, 25%) minmax(60%, 50%) minmax(8%, 25%);
	grid-template: auto 1fr / minmax(8%, 1fr) minmax(50%, 1fr) minmax(8%, 1fr);
	min-height: 100vh;

	.main-content {
		grid-column: 2/3;
		// margin: 8rem 3rem 3rem 3rem;
		display: block;
	}
`;

export const RegistrationContainer = styled.div`
	display: grid;
	place-items: center;
	height: 100vh;

	.registration-box {
		padding: 4rem;
		width: 40rem;
		// height: 40rem;
		border: 1px solid ${secondaryColor};
	}
`;
export const AccountContainer = styled.div`
	display: grid;
	place-items: center;
	min-height: 90vh;
	margin-top: 6rem;

	.account-box {
		width: 80rem;
		border: 1px solid ${secondaryColor};

		display: grid;
		grid-template-columns: minmax(150px, 25%) 1fr;

		.side-profile {
		}
		.profile-contents {
			padding: 2rem 4rem;
			border-left: 1px solid ${secondaryColor};
		}
	}
`;

export const MainAdminContainer = styled.div`

ul {
  list-style: none;
}

a,
button {
  color: inherit;
}

a {
  text-decoration: none;
}

button {
  background: none;
  cursor: pointer;
}

input {
  -webkit-appearance: none;
}

button,
input {
  border: none;
}

svg {
  display: block;
}





/* PAGE CONTENT STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.page-content {
  position: relative;
  left: 22rem;
  width: calc(100% - 22rem);
  min-height: 100vh;
  padding: 30px;
  color: #171616;
  background: #f0f1f6;
}

.search-and-user {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: 50px;
  align-items: center;
  background: #f0f1f6;
  margin-bottom: 30px;
}

.search-and-user form {
  position: relative;
}

.search-and-user input[type="search"] {
  width: 100%;
  height: 50px;
  font-size: 1.5rem;
  padding-left: 15px;
  background: #fff;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.075);
}

.search-and-user ::placeholder {
  color: #171616;
}

.search-and-user form svg {
  width: 26px;
  height: 26px;
  fill: #171616;
}

.search-and-user form button {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
}

.search-and-user .admin-profile {
  display: flex;
  align-items: center;
}

.search-and-user .admin-profile .greeting {
  margin: 0 10px 0 20px;
}

.search-and-user .admin-profile svg {
  width: 30px;
  height: 30px;
}

.search-and-user .admin-profile .notifications {
  position: relative;
}

.search-and-user .admin-profile .badge {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10px;
  right: -3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  font-size: 10px;
  color: #fff;
  background: #ec1848;
}

.page-content .grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
}

.page-content .grid > article {
  display: flex;
  height: 300px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.075);
}

.page-content .grid > article:first-child,
.page-content .grid > article:last-child {
  grid-column: 1 / -1;
}


/* MQ RULES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
@media screen and (max-width: 767px) {
  .page-header,
  .page-content {
    position: static;
    width: 100%;
  }
   
  .page-header {
    padding: 10px;
  }

  .page-header nav {
    flex-direction: row;
  }

  .page-header .logo {
    margin: 0;
    height: 35px;
  }

  .page-header .toggle-mob-menu {
    display: block;
  }

  .page-header .admin-menu {
    position: absolute;
    left: 98px;
    top: 57px;
    margin-top: 0;
    z-index: 2;
    border-radius: 4px;
    background: #f0f1f6;
    visibility: hidden;
    opacity: 0;
    transform: scale(0.95);
    transition: all 0.2s;
  }

  .page-header .admin-menu li:nth-last-child(2) {
    margin-bottom: 12px;
  }
  
  .page-header .admin-menu li:last-child,
  .search-and-user .admin-profile .greeting {
    display: none;
  }
  
  .page-content {
    min-height: 0;
    padding: 10px;
  }

  .page-content .grid {
    grid-gap: 10px;
  }

  .search-and-user {
    position: absolute;
    left: 131px;
    top: 10px;
    padding: 0;
    grid-column-gap: 5px;
    width: calc(100% - 141px);
    border-radius: 4px;
    background: transparent;
  }

  .search-and-user input[type="search"] {
    font-size: 1rem;
    height: 35px;
  }

  .search-and-user form svg {
    width: 18px;
    height: 18px;
  }

  .search-and-user .admin-profile svg {
    fill: #fff;
  }
}

@media screen and (max-width: 400px) {
  .page-content .grid > article {
    grid-column: 1 / -1;
  }
}


/* BODY CLASSES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.mob-menu-opened .toggle-mob-menu svg {
  transform: rotate(180deg);
}

.mob-menu-opened .page-header .admin-menu {
  transform: scale(1);
  visibility: visible;
  opacity: 1;
}

@media screen and (min-width: 768px) {
  .collapsed .page-header {
    width: 40px;
  }

  .collapsed .page-header .admin-menu li > * {
    padding: 10px;
  }

  .collapsed .page-header .logo,
  .collapsed .page-header .admin-menu span,
  .collapsed .page-header .admin-menu .menu-heading {
    display: none;
  }

  .collapsed .page-header .admin-menu svg {
    margin-right: 0;
  }

  .collapsed .page-header .collapse-btn svg {
    transform: rotate(180deg);
  }

  .collapsed .page-content {
    left: 40px;
    width: calc(100% - 40px);
  }
}


/* FOOTER
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.page-footer {
  font-size: 0.85rem;
  text-align: right;
  margin-top: 10px;
}

.page-footer span {
  color: #ec1848;
}
`;