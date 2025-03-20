'use client';
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import type { TypeSelectionProps } from '@/types/selectOptions';
import { OPTIONS } from '@/constants/options';

const TypeSelection = <T,>({ type, optionsData }: TypeSelectionProps<T>) => {
	return (
		<div className="flex font-bold">
			{type}：
			<Select
				showSearch
				placeholder=""
				filterOption={(input, option) =>
					(option?.label ?? '')
						.toLowerCase()
						.includes(input.toLowerCase())
				}
				size="large"
				style={{ width: '100%' }}
				options={optionsData.map((option) => ({
					value: option.value,
					label: option.label,
				}))}
			/>
		</div>
	);
};

export default function SearchCol() {
	return (
		<div className="flex h-full w-full flex-col justify-between gap-2">
			<div className="flex flex-col gap-2 font-bold">
				<TypeSelection type="日夜間別" optionsData={OPTIONS.dayNight} />
				<TypeSelection type="學年度" optionsData={OPTIONS.year} />
				<TypeSelection type="學期" optionsData={OPTIONS.semester} />
				<TypeSelection type="上課時間" optionsData={OPTIONS.day} />
				<TypeSelection type="全英語授課" optionsData={OPTIONS.allEng} />
				<TypeSelection type="遠距授課" optionsData={OPTIONS.remote} />
				<TypeSelection type="修課班別" optionsData={OPTIONS.nClass} />
				<div>
					關鍵字：
					<input
						className="rounded-md border border-gray-200 bg-white p-2"
						placeholder="請輸入課堂名稱/教師/流水號"
					/>
				</div>
			</div>
			<button className="cursor-pointer rounded bg-blue-700 p-2 font-bold text-white hover:bg-blue-500">
				搜尋 <SearchOutlined />
			</button>
		</div>
	);
}
