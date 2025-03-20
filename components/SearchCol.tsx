import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Select } from 'antd';

function TypeSelection(type: string, options: ) {

}

export default function SearchCol() {
	return (
		<div className="flex h-full w-full flex-col justify-between gap-2">
			<div className="flex font-bold">
				日夜間別：
				<Select
					size="large"
					style={{ width: '100%' }}
					options={[
						{
							value: 'day',
							label: <span>日間部（教務處）</span>,
						},
						{
							value: 'night',
							label: <span>碩士在職專班（進修學院）</span>,
						},
					]}
				/>
			</div>

			<input
				className="rounded-md border border-gray-200 bg-white"
				placeholder="Outlined"
			/>
			<button className="rounded bg-blue-700">
				<SearchOutlined />
			</button>
		</div>
	);
}
