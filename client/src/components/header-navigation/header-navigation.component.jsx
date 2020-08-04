import React from 'react';

// styled components
import { HeaderNavigationContainer } from 'components/header-navigation/header-navigation.styles';

// routes
import { NavLink } from 'react-router-dom';

// icons
import { Icon } from '@iconify/react';
import homeIcon from '@iconify/icons-foundation/home';
import locationArrow from '@iconify/icons-uil/location-arrow';
import compass2Icon from '@iconify/icons-icomoon-free/compass2';
import heartOutlined from '@iconify/icons-ant-design/heart-outlined';
import plusCircleOutlined from '@iconify/icons-ant-design/plus-circle-outlined';

// redux
import { toggleCreatePost } from 'store/actions/create-post.action';
import { connect } from 'react-redux';

const HeaderNavigation = ({ toggleCreatePost }) => {
	return (
		<HeaderNavigationContainer>
			<NavLink activeClassName='is-active' exact to='/'>
				<Icon icon={homeIcon} className='icon' />
			</NavLink>
			<NavLink activeClassName='is-active' exact to='/messages'>
				<Icon icon={locationArrow} className='icon' />
			</NavLink>
			<Icon
				icon={plusCircleOutlined}
				className='icon'
				// className={`icon ${isNavItemActive ? 'nav-active' : ''}`}
				onClick={toggleCreatePost}
			/>
			<NavLink activeClassName='is-active' exact to='/profile'>
				<Icon icon={compass2Icon} className='icon' />
			</NavLink>
			<NavLink activeClassName='is-active' exact to='/likes'>
				<Icon icon={heartOutlined} className='icon' />
			</NavLink>
		</HeaderNavigationContainer>
	);
};

export default connect(null, { toggleCreatePost })(HeaderNavigation);
