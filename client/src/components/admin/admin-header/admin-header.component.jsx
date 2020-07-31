import React from 'react';

// styled components
import { AdminHeaderContainer } from 'components/admin/admin-header/admin-header.styles';

// icons
import { Icon } from '@iconify/react';
import bxLeftArrowAlt from '@iconify/icons-bx/bx-left-arrow-alt';

function AdminHeader() {
	return (
		<AdminHeaderContainer>
			<header className='page-header'>
				<nav>
					<div className='logo'>TravelTagged</div>
					<button class='toggle-mob-menu' aria-expanded='false' aria-label='open menu'>
						{/* <svg width="20" height="20" aria-hidden="true">
        <use xlink:href="#down"></use>
      </svg> */}
					</button>
					<ul class='admin-menu'>
						<li class='menu-heading'>
							<h3>Admin</h3>
						</li>
						<li>
							<span>Posts</span>
						</li>
						<li style={{ display: 'flex'}}>
							{/* <Icon icon={userAvatarFilled} className='li-icon' style={{ color: '#fff', fontSize: '24px', width: '2rem' }} /> */}
							<span>Users</span>
						</li>
						<li>
							<span>Trends</span>
						</li>
						<li>
							<span>Collection</span>
						</li>
						<li>
							<span>Comments</span>
						</li>
						<li class='menu-heading'>
							<h3>Settings</h3>
						</li>
						<li>
							<span>Settings</span>
						</li>
						<li>
							<span>Options</span>
						</li>
						<li>
							<button class='collapse-btn' aria-expanded='true' aria-label='collapse menu'>
								<Icon icon={bxLeftArrowAlt} className='collapse-icon' />
								<span>Collapse</span>
							</button>
						</li>
					</ul>
				</nav>
			</header>
		</AdminHeaderContainer>
	);
}

export default AdminHeader;
