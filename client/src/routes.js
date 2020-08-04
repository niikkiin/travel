// Layouts
import { SiteLayout, RegistrationLayout, AdminLayout, AccountLayout } from 'layouts';

// Components
import MainFeed from 'pages/site/main-feed/main-feed.component';
import MessagingPage from 'pages/site/messaging/messaging.component';
import ProfilePage from 'pages/site/profile/profile.component';
import LikesPage from 'pages/site/likes/likes.component';
import DetailMessage from 'pages/site/detail-message/detail-message.component';
import { SignInPage } from 'pages/site/sign-in/sign-in.component';
import { SignUpPage } from 'pages/site/sign-up/sign-up.component';
import { InfoPage } from 'pages/site/info/info.component';
import EditProfilePage from 'pages/site/edit-profile/edit-profile.component';
import { ChangePassword } from 'pages/site/change-password/change-password.component';
import DashboardPage from 'pages/admin/dashboard/dashboard.component';
import UserTab from 'pages/admin/user-tab/user-tab.component';

export default [
	{
		path: '/',
		exact: true,
		layout: SiteLayout,
		component: MainFeed,
	},
	{
		path: '/messages',
		exact: true,
		layout: SiteLayout,
		component: MessagingPage,
	},
	{
		path: '/profile',
		exact: true,
		layout: SiteLayout,
		component: ProfilePage,
	},
	{
		path: '/likes',
		exact: true,
		layout: SiteLayout,
		component: LikesPage,
	},
	{
		path: '/details/:id',
		exact: true,
		layout: SiteLayout,
		component: DetailMessage,
	},
	// SECTION REGISTRATION
	{
		path: '/login',
		exact: true,
		layout: RegistrationLayout,
		component: SignInPage,
	},
	{
		path: '/register',
		exact: true,
		layout: RegistrationLayout,
		component: SignUpPage,
	},
	{
		path: '/info',
		exact: true,
		layout: RegistrationLayout,
		component: InfoPage,
	},
	// SECTION ACCOUNT
	{
		path: '/account-update',
		exact: true,
		layout: AccountLayout,
		component: EditProfilePage,
	},
	{
		path: '/change-password',
		exact: true,
		layout: AccountLayout,
		component: ChangePassword,
	},
	// SECTION ADMIN
	{
		path: '/ttcomt-admin',
		exact: true,
		layout: AdminLayout,
		component: DashboardPage,
	},
	{
		path: '/ttcomt-admin/users',
		exact: true,
		layout: AdminLayout,
		component: UserTab,
	},
];
