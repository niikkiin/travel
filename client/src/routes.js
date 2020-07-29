// Layouts
import RegistrationLayout from 'layouts/registration.layout';

// Comopnents
import ProfilePage from 'pages/profile/profile.component';
import MainFeed from 'pages/main-feed/main-feed.component';
import Likes from 'pages/heart/heart.component';
import { SignUpPage } from 'pages/sign-up/sign-up.component';
import { SignInPage } from 'pages/sign-in/sign-in.component';
import { InfoPage } from 'pages/info/info.component';
import BusinessProfileAccount from 'pages/business-profile-account/edit-profile.component';
import AccountLayout from 'layouts/account.layout';
import { ChangePassword } from 'pages/business-profile-account/change-password.component';
import { EmailAndSms } from 'pages/business-profile-account/email-and-sms.component';
import { PushNotification } from 'pages/business-profile-account/push-notification.component';
import { ManageContacts } from 'pages/business-profile-account/manage-contacts.component';
import { PrivacyAndSecurity } from 'pages/business-profile-account/privacy-and-security.component';
import { LoginActivity } from 'pages/business-profile-account/login-activity.component';
import { DefaultLayout } from 'layouts';
import Messenger from 'pages/messenger/messenger.component';
import Details from 'pages/detail/detail.component';

export default [
	{
		path: '/',
		exact: true,
		layout: DefaultLayout,
		component: MainFeed,
	},
	{
		path: '/likes',
		exact: true,
		layout: DefaultLayout,
		component: Likes,
	},
	{
		path: '/messages',
		exact: true,
		layout: DefaultLayout,
		component: Messenger,
	},
	{
		path: '/details/:id',
		exact: true,
		layout: DefaultLayout,
		component: Details,
	},
	{
		path: '/profile',
		layout: DefaultLayout,
		component: ProfilePage,
	},
	{
		path: '/register',
		layout: RegistrationLayout,
		component: SignUpPage,
	},
	{
		path: '/login',
		layout: RegistrationLayout,
		component: SignInPage,
	},
	{
		path: '/info',
		layout: RegistrationLayout,
		component: InfoPage,
	},
	// ACCOUNTS BUSINESS
	{
		path: '/account-update',
		layout: AccountLayout,
		component: BusinessProfileAccount,
	},
	{
		path: '/change-password',
		layout: AccountLayout,
		component: ChangePassword,
	},
	{
		path: '/email',
		layout: AccountLayout,
		component: EmailAndSms,
	},
	{
		path: '/notifications',
		layout: AccountLayout,
		component: PushNotification,
	},
	{
		path: '/manage-contacts',
		layout: AccountLayout,
		component: ManageContacts,
	},
	{
		path: '/privacy',
		layout: AccountLayout,
		component: PrivacyAndSecurity,
	},
	{
		path: '/login-activity',
		layout: AccountLayout,
		component: LoginActivity,
	},
];
