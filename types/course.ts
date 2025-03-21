export interface CourseDataType {
	id: number; // 課程代碼
	class: string; // 開課班別
	name: string; // 課程名稱
	classType: string; // 課程性質
	// classType2: string; // 課程性質 2
	allEng: boolean; // 全英語授課
	credit: number; // 學分
	teacher: string; // 教師
	building: string; // 上課地點

	// 上課時間
	time: {
		day: number;
		startTime: number;
		endTime: number;
	};

	// 人數
	headNumber: {
		limit: number;
		enrollment: number;
		joined: number;
	};

	acrossClass: boolean; // 可跨班
	note?: string; // 備註
}
