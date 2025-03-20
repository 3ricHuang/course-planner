export const OPTIONS = {
	// 日夜間部
	dayNight: [
		{ value: 'D', label: '日間部（教務處）' },
		{ value: 'N', label: '碩士在職專班（進修學院）' },
	],

	// 學年度
	year: Array.from({ length: 114 - 99 + 1 }, (_, i) => {
		const year = 114 - i;
		return { value: year, label: year.toString() };
	}),

	// 學期
	semester: [
		{ value: 1, label: '第一學期' },
		{ value: 2, label: '第二學期' },
	],

	// 上課時間
	day: Array.from({ length: 6 }, (_, i) => ({
		value: i + 1,
		label: `星期${['一', '二', '三', '四', '五', '六'][i]}`,
	})),

	// 全英語授課
	allEng: [
		{ value: true, label: '是' },
		{ value: false, label: '否' },
	],

	// 遠距授課
	remote: [
		{ value: true, label: '是' },
		{ value: false, label: '否' },
	],

	// 修課班別（夜）
	nClass: [
		{ value: 'N110MA6A', label: '輔導教學夜碩六' },
		{ value: 'N110ME1A', label: '心理健康與諮詢夜碩—A' },
		{ value: 'N110ME1B', label: '心理健康與諮詢夜碩—B' },
		{ value: 'N110ME2A', label: '心理健康與諮詢夜碩二A' },
		{ value: 'N110ME2B', label: '心理健康與諮詢夜碩二B' },
		{ value: 'N120ME1A', label: '特殊教育碩士在職專班' },
		{ value: 'N120ME2A', label: '特殊教育碩士在職專班二' },
		{ value: 'N130ME1A', label: '教育創新與人力發展一' },
		{ value: 'N130ME2A', label: '教育創新與人力發展二' },
		{ value: 'N130MG6A', label: '學校行政境碩六' },
		{ value: 'N130MY2A', label: '教育學暨學校行政境碩二' },
		{ value: 'N210MA6A', label: '數理創意教學及科普推廣夜碩六' },
		{ value: 'N260MW1A', label: '科技應用與管理夜碩一' },
		{ value: 'N260MW2A', label: '科技應用與管理夜碩二' },
		{ value: 'N260MW3A', label: '科技應用與管理夜碩三' },
		{ value: 'N310ME1A', label: '技職行管夜碩一' },
		{ value: 'N310ME2A', label: '技職行管夜碩二' },
		{ value: 'N320ME1A', label: '人力資源管理夜碩一' },
		{ value: 'N320ME2A', label: '人力資源管理夜碩二' },
		{ value: 'N410ME1A', label: '應用英語夜碩一' },
		{ value: 'N410ME2A', label: '應用英語夜碩二' },
		{ value: 'N440MA1A', label: '美術系藝教教學夜碩一' },
		{ value: 'N510ME1A', label: '機電夜碩一' },
		{ value: 'N510ME2A', label: '機電夜碩二' },
		{ value: 'N520ME1A', label: '電機夜碩一' },
		{ value: 'N520ME2A', label: '電機夜碩二' },
		{ value: 'N540ME1A', label: '人工智慧應用服務碩士在職專班一' },
		{ value: 'N540ME2A', label: '人工智慧應用服務碩士在職專班二' },
		{ value: 'N610ME1A', label: '創新與管理夜碩一' },
		{ value: 'N610ME2A', label: '創新與管理夜碩二' },
		{ value: 'N620ME1A', label: '企高夜碩—A' },
		{ value: 'N620ME1B', label: '企高夜碩—B' },
		{ value: 'N620ME2A', label: '企高夜碩二A' },
		{ value: 'N620ME2B', label: '企高夜碩二B' },
		{ value: 'N630ME1A', label: '國企夜碩—A' },
		{ value: 'N630ME1B', label: '國企夜碩—B' },
		{ value: 'N630ME2A', label: '國企夜碩二A' },
		{ value: 'N630ME2B', label: '國企夜碩二B' },
		{ value: 'N630ME2C', label: '國企夜碩二C' },
		{ value: 'N670ME1A', label: '財金行管夜碩—A' },
		{ value: 'N670ME1B', label: '財金行管夜碩—B' },
		{ value: 'N670ME2A', label: '財金行管夜碩二A' },
		{ value: 'N710ME1A', label: '運動與健康休閒夜碩一' },
		{ value: 'N710ME2A', label: '運動與健康休閒夜碩二' },
		{ value: 'N780ME1A', label: '公共事務夜碩一' },
		{ value: 'N780ME2A', label: '公共事務夜碩二' },
		{ value: 'NXZ6BV00', label: '夜外校大學' },
	],
};
