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
import OtherUserProfile from 'pages/site/other-user-profile/other-user-profile.component';
import EmailAndSms from 'pages/site/email-and-sms/email-and-sms.component';
import PushNotification from 'pages/site/push-notification/push-notification.component';
import PrivacyAndSecurity from 'pages/site/privacy-and-security/privacy-and-security.component';
import ManageContacts from 'pages/site/manage-contacts/manage-contacts.component';
import LoginActivity from 'pages/site/login-activity/login-activity.component';
import NewSignUp from 'pages/site/new-sign-up/new-sign-up.component';

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
	// SECTION PROFILE
	{
		path: '/profile/me',
		exact: true,
		layout: SiteLayout,
		component: ProfilePage,
	},
	{
		path: '/profile/:id',
		exact: true,
		layout: SiteLayout,
		component: OtherUserProfile,
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
		path: '/register2',
		exact: true,
		layout: RegistrationLayout,
		component: NewSignUp,
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
	{
		path: '/email',
		exact: true,
		layout: AccountLayout,
		component: EmailAndSms,
	},
	{
		path: '/notifications',
		exact: true,
		layout: AccountLayout,
		component: PushNotification,
	},
	{
		path: '/manage-contacts',
		exact: true,
		layout: AccountLayout,
		component: ManageContacts,
	},
	{
		path: '/privacy',
		exact: true,
		layout: AccountLayout,
		component: PrivacyAndSecurity,
	},
	{
		path: '/login-activity',
		exact: true,
		layout: AccountLayout,
		component: LoginActivity,
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
