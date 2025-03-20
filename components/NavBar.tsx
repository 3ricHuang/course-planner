import React from 'react';
import { Avatar } from 'antd';

export default function NavBar() {
	return (
		<div className="flex w-full border-b border-gray-200 bg-white p-4 shadow-md">
			<Avatar
				style={{ backgroundColor: '#87d068', color: '#ffffff' }}
				size="large"
			>
				U
			</Avatar>
		</div>
	);
}
