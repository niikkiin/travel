import React from 'react';

// table
import DataTable from 'react-data-table-component';
import { FormInput } from 'components/form-input/form-input.component';

const CustomTable = ({
	pointer,
	highlight,
	striped,
	fixedHeader,
	pagination,
	fixedHeaderScrollHeight,
	subHeader,
	columns,
	data,
	handleChange,
}) => {
	return (
		<DataTable
			title='Users'
			data={data}
			columns={columns}
			pointerOnHover={pointer}
			highlightOnHover={highlight}
			striped={striped}
			fixedHeader={fixedHeader}
			fixedHeaderScrollHeight={fixedHeaderScrollHeight}
			subHeader={subHeader}
			pagination={pagination}
			subHeaderComponent={
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<FormInput
						type='text'
						label='Search'
						variant='outlined'
						size='small'
						style={{ border: '1px solid #d0d0d0' }}
						handleChange={handleChange}
					/>
				</div>
			}
		/>
	);
};

export default CustomTable;
