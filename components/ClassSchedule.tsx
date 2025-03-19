import React from 'react';
export default function ClassSchedule() {
	const schedule = [
		{
			time: '09:10 - 10:00',
			name: '機器學習與資料分析',
			location: '會計館一大電腦',
			teacher: '蔡宗翰',
			day: 1,
		},
		{
			time: '10:20 - 11:10',
			name: '機器學習與資料分析',
			location: '會計館一大電腦',
			teacher: '蔡宗翰',
			day: 1,
		},
		{
			time: '11:20 - 12:10',
			name: '機器學習與資料分析',
			location: '會計館一大電腦',
			teacher: '蔡宗翰',
			day: 1,
		},
		{
			time: '13:10 - 14:00',
			name: '資料結構與演算法',
			location: 'N/A',
			teacher: '林軒田',
			day: 4,
		},
		{
			time: '14:20 - 15:10',
			name: '審計學下',
			location: '管二205',
			teacher: '陳思帆',
			day: 1,
		},
		{
			time: '15:30 - 16:20',
			name: '審計學下',
			location: '管二205',
			teacher: '陳思帆',
			day: 1,
		},
		{
			time: '16:30 - 17:20',
			name: '大學國文：文化思想與寫作',
			location: '論505',
			teacher: '梁偉賢',
			day: 4,
		},
		{
			time: '16:30 - 17:20',
			name: '高等會計學下',
			location: '管二305',
			teacher: '許文馨',
			day: 5,
		},
	];

	const classTime = {
		'1': '09:10 - 10:00',
		'2': '10:20 - 11:10',
		'3': '11:20 - 12:10',
		'4': '13:10 - 14:00',
		'5': '14:20 - 15:10',
		'6': '15:30 - 16:20',
		'7': '16:30 - 17:20',
	};

	return (
		<div className="mx-auto max-w-5xl p-4">
			{/* 課表標題 */}
			<h2 className="mb-4 text-center text-2xl font-bold">課程時間表</h2>

			{/* Grid 表格 */}
			<div className="grid grid-cols-6 gap-1 rounded-md border border-gray-300">
				{/* 星期標題 */}
				<div className="bg-blue-500 p-1 text-center font-bold text-white">
					時間
				</div>
				<div className="bg-blue-500 p-1 text-center font-bold text-white">
					週一
				</div>
				<div className="bg-blue-500 p-1 text-center font-bold text-white">
					週二
				</div>
				<div className="bg-blue-500 p-1 text-center font-bold text-white">
					週三
				</div>
				<div className="bg-blue-500 p-1 text-center font-bold text-white">
					週四
				</div>
				<div className="bg-blue-500 p-1 text-center font-bold text-white">
					週五
				</div>

				{/* 課表時間區塊 */}
				{Object.entries(classTime).map(([key, time]) => (
					<React.Fragment key={key}>
						<div className="flex flex-col items-center justify-center gap-1 border border-gray-200 bg-gray-100 font-bold">
							<h1 className="text-xl">{key}</h1>
							<p className="text-gray-600">{time}</p>
						</div>
						{[1, 2, 3, 4, 5].map((day) => {
							const course = schedule.find(
								(s) => s.time === time && s.day === day,
							);
							return (
								<div
									key={`${time}-${day}`}
									className="border border-gray-200 text-center text-sm"
								>
									{course && (
										<div className="rounded-md bg-blue-100 p-2 shadow-md">
											<div className="font-bold">
												{course.name}
											</div>
											{/* <div className="text-gray-600">
												{course.location}
											</div>
											<div className="text-xs text-gray-500">
												{course.teacher}
											</div> */}
										</div>
									)}
								</div>
							);
						})}
					</React.Fragment>
				))}
			</div>
		</div>
	);
}
