import React from 'react';

// styled components
import { UserTabContainer } from 'pages/admin/user-tab/user-tab.styles';
import CustomTable from 'components/table/table.component';

const UserTab = () => {
	const columns = [
		{
			name: 'Name',
			selector: 'name',
			sortable: true,
		},
		{
			name: 'Business Name',
			selector: 'businessname',
			sortable: true,
		},
		{
			name: 'Email Address',
			selector: 'email',
			sortable: true,
		},
		{
			name: 'Last Logged In',
			selector: 'lastloggedin',
			sortable: true,
		},
		{
			name: 'Registered Date',
			selector: 'registereddate',
			sortable: true,
		},
	];
	const data = [
		{
			name: 'Sam Rose',
			businessname: 'Eco Tours',
			email: 'ecotours@gmail.com',
			lastloggedin: 'July 30, 2020',
			registereddate: 'July 30, 2020',
		},
		{
			name: 'Sam Rose',
			businessname: 'Eco Tours',
			email: 'ecotours@gmail.com',
			lastloggedin: 'July 30, 2020',
			registereddate: 'July 30, 2020',
		},
		{
			name: 'Sam Rose',
			businessname: 'Eco Tours',
			email: 'ecotours@gmail.com',
			lastloggedin: 'July 30, 2020',
			registereddate: 'July 30, 2020',
		},
		{
			name: 'Sam Rose',
			businessname: 'Eco Tours',
			email: 'ecotours@gmail.com',
			lastloggedin: 'July 30, 2020',
			registereddate: 'July 30, 2020',
		},
		{
			name: 'Sam Rose',
			businessname: 'Eco Tours',
			email: 'ecotours@gmail.com',
			lastloggedin: 'July 30, 2020',
			registereddate: 'July 30, 2020',
		},
		{
			name: 'Sam Rose',
			businessname: 'Eco Tours',
			email: 'ecotours@gmail.com',
			lastloggedin: 'July 30, 2020',
			registereddate: 'July 30, 2020',
		},
		{
			name: 'Sam Rose',
			businessname: 'Eco Tours',
			email: 'ecotours@gmail.com',
			lastloggedin: 'July 30, 2020',
			registereddate: 'July 30, 2020',
		},
		{
			name: 'Sam Rose',
			businessname: 'Eco Tours',
			email: 'ecotours@gmail.com',
			lastloggedin: 'July 30, 2020',
			registereddate: 'July 30, 2020',
		},
		{
			name: 'Sam Rose',
			businessname: 'Eco Tours',
			email: 'ecotours@gmail.com',
			lastloggedin: 'July 30, 2020',
			registereddate: 'July 30, 2020',
		},
		{
			name: 'Sam Rose',
			businessname: 'Eco Tours',
			email: 'ecotours@gmail.com',
			lastloggedin: 'July 30, 2020',
			registereddate: 'July 30, 2020',
		},
		{
			name: 'Sam Rose',
			businessname: 'Eco Tours',
			email: 'ecotours@gmail.com',
			lastloggedin: 'July 30, 2020',
			registereddate: 'July 30, 2020',
		},
		{
			name: 'Sam Rose',
			businessname: 'Eco Tours',
			email: 'ecotours@gmail.com',
			lastloggedin: 'July 30, 2020',
			registereddate: 'July 30, 2020',
		},
		{
			name: 'Sam Rose',
			businessname: 'Eco Tours',
			email: 'ecotours@gmail.com',
			lastloggedin: 'July 30, 2020',
			registereddate: 'July 30, 2020',
		},
		{
			name: 'Sam Rose',
			businessname: 'Eco Tours',
			email: 'ecotours@gmail.com',
			lastloggedin: 'July 30, 2020',
			registereddate: 'July 30, 2020',
		},
		{
			name: 'Sam Rose',
			businessname: 'Eco Tours',
			email: 'ecotours@gmail.com',
			lastloggedin: 'July 30, 2020',
			registereddate: 'July 30, 2020',
		},
		{
			name: 'Sam Rose',
			businessname: 'Eco Tours',
			email: 'ecotours@gmail.com',
			lastloggedin: 'July 30, 2020',
			registereddate: 'July 30, 2020',
		},
		{
			name: 'Sam Rose',
			businessname: 'Eco Tours',
			email: 'ecotours@gmail.com',
			lastloggedin: 'July 30, 2020',
			registereddate: 'July 30, 2020',
		},
		{
			name: 'Sam Rose',
			businessname: 'Eco Tours',
			email: 'ecotours@gmail.com',
			lastloggedin: 'July 30, 2020',
			registereddate: 'July 30, 2020',
		},
		{
			name: 'Sam Rose',
			businessname: 'Eco Tours',
			email: 'ecotours@gmail.com',
			lastloggedin: 'July 30, 2020',
			registereddate: 'July 30, 2020',
		},
		{
			name: 'Sam Rose',
			businessname: 'Eco Tours',
			email: 'ecotours@gmail.com',
			lastloggedin: 'July 30, 2020',
			registereddate: 'July 30, 2020',
		},
		{
			name: 'Samantha Rose',
			businessname: 'Eco Tours',
			email: 'ecotours@gmail.com',
			lastloggedin: 'July 30, 2020',
			registereddate: 'July 30, 2020',
		},
	];

	return (
		<UserTabContainer>
			<CustomTable
				columns={columns}
				data={data}
				pointer={true}
				highlight={true}
				striped={true}
				fixedHeader={false}
        fixedHeaderScrollHeight="auto"
        subHeader={true}
        pagination={true}
        handleChange={(e, value) => this.handleSearchChange(e, value)}
			/>
		</UserTabContainer>
	);
};

export default UserTab;
