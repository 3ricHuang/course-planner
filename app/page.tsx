import Image from 'next/image';
import ClassSchedule from '@/components/ClassSchedule';
import NavBar from '@/components/NavBar';
import Chatroom from '@/components/ChatRoom';
import SearchCol from '@/components/SearchCol';

export default function Home() {
	return (
		<div className="grid min-h-screen w-full grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 pt-6 pb-20 font-[family-name:var(--font-geist-sans)]">
			<header className="w-full">
				<NavBar />
			</header>
			<main className="row-start-2 flex h-full flex-col items-center gap-[32px] sm:items-start">
				{/* <ClassSchedule /> */}
				{/* <SearchCol /> */}
				<Chatroom />
			</main>
		</div>
	);
}
