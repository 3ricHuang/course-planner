import Image from 'next/image';
import ClassSchedule from '@/components/ClassSchedule';
import NavBar from '@/components/NavBar';
import SearchCol from '@/components/SearchCol';

export default function Home() {
	return (
		<div className="grid min-h-screen w-full grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 pt-6 pb-20 font-[family-name:var(--font-geist-sans)]">
			<header className="w-full">
				<NavBar />
			</header>
			<main className="row-start-2 flex h-full flex-col items-center gap-[32px] sm:items-start">
				{/* <ClassSchedule /> */}
				<SearchCol />
			</main>
			<footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]">
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/file.svg"
						alt="File icon"
						width={16}
						height={16}
					/>
					Learn
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/window.svg"
						alt="Window icon"
						width={16}
						height={16}
					/>
					Examples
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/globe.svg"
						alt="Globe icon"
						width={16}
						height={16}
					/>
					Go to nextjs.org →
				</a>
			</footer>
		</div>
	);
}
