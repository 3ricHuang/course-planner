'use client';
import React, { useEffect, useState } from 'react';
import { Divider, List, Skeleton, Tooltip } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { HeartOutlined, UserOutlined } from '@ant-design/icons';
import type { CourseDataType } from '@/types/course';
export default function CourseList() {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<CourseDataType[]>([
		{
			id: 67002,
			class: '財金一',

			name: '微積分(二)',
			teacher: '郭志安',
			building: '教學一館',
			time: {
				day: 3,
				startTime: 2,
				endTime: 4,
			},

			credit: 3,
			classType: '系必修',
			allEng: true,
			acrossClass: true,

			headNumber: {
				limit: 50,
				enrollment: 40,
				joined: 42,
			},
			note: '限文學院學生(含輔系、雙修生)日籍或以日語為母語之學生請勿選修。\n限非日文系學生修習。已取得學分者請勿重複修習。\n線上初選限大一。',
		},
	]);

	const loadMoreData = () => {
		console.log('HELLO');
		// if (loading) {
		// 	return;
		// }
		// setLoading(true);
		// fetch(
		// 	'https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo',
		// )
		// 	.then((res) => res.json())
		// 	.then((body) => {
		// 		setData([...data, ...body.results]);
		// 		setLoading(false);
		// 	})
		// 	.catch(() => {
		// 		setLoading(false);
		// 	});
	};

	useEffect(() => {
		loadMoreData();
	}, []);

	return (
		<div
			id="scrollableDiv"
			className="h-[400px] w-full overflow-y-auto px-4"
		>
			<InfiniteScroll
				dataLength={data.length}
				next={loadMoreData}
				hasMore={data.length < 50}
				loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
				endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
				scrollableTarget="scrollableDiv"
			>
				<List
					dataSource={data}
					renderItem={(item) => (
						<List.Item key={item.id}>
							<div className="grid w-full grid-cols-[1fr_4fr_5fr_8fr_1fr] items-center gap-4 bg-white p-2">
								<Tooltip title="課程代碼">
									<button className="rounded-md p-1 hover:bg-gray-200">
										{item.id}
									</button>
								</Tooltip>

								<div className="flex flex-col gap-1">
									<p className="font-bold text-blue-600">
										{item.name}
									</p>
									<div className="flex gap-1">
										<div className="rounded-sm bg-blue-100 px-2 py-1 text-blue-800">
											<UserOutlined /> {item.teacher}
										</div>
										<div className="rounded-sm bg-gray-200 px-2 py-1">
											{item.building}
										</div>
									</div>
								</div>

								<div className="flex items-center gap-1">
									<div className="rounded-sm bg-gray-200 px-2 py-1">
										{item.credit} 學分
									</div>
									<div className="rounded-sm bg-gray-200 px-2 py-1">
										{item.classType}
									</div>
									{item.allEng && (
										<div className="rounded-sm bg-blue-100 px-2 py-1 text-blue-500">
											英語授課
										</div>
									)}
									{item.acrossClass && (
										<div className="rounded-sm bg-orange-100 px-2 py-1 text-orange-500">
											跨班教學
										</div>
									)}
								</div>

								<p className="w-full text-pretty whitespace-pre-wrap">
									{item.note}
								</p>

								<div className="flex items-center gap-3">
									<button className="cursor-pointer">
										<HeartOutlined />
									</button>
									<button className="cursor-pointer rounded-md bg-blue-100 px-2 py-2 font-bold text-blue-500 hover:bg-blue-300 hover:text-blue-700">
										<Tooltip
											title="選擇課程"
											mouseEnterDelay={0.5}
										>
											加入
										</Tooltip>
									</button>
								</div>
							</div>
						</List.Item>
					)}
				/>
			</InfiniteScroll>
		</div>
	);
}
