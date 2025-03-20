'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';

export default function Chatroom() {
	const [messages, setMessages] = useState<{ id: number; text: string }[]>(
		[],
	);
	const [input, setInput] = useState('');
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const sendMessage = () => {
		if (!input.trim()) return; // 避免發送空訊息
		setMessages([...messages, { id: messages.length + 1, text: input }]);
		setInput('');
	};

	useEffect(() => {
		if (textareaRef.current) {
			textareaRef.current.style.height = 'auto';
			textareaRef.current.style.height =
				textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 240)}px`; // 限制最大 10 行
			textareaRef.current.style.overflowY =
				textareaRef.current.scrollHeight > 240 ? 'auto' : 'hidden';
		}
	}, [input]);

	return (
		<div className="flex h-screen w-full flex-col bg-gray-100 p-4">
			{/* 聊天室標題 */}
			<header className="rounded-lg bg-blue-600 p-3 text-center text-xl font-bold text-white shadow">
				選課顧問
			</header>

			{/* 訊息區域 */}
			<div className="relative max-w-lg flex-1 space-y-2 overflow-y-auto p-4">
				{messages.length === 0 && (
					<p className="text-center text-gray-400">
						提出你的規劃，讓 AI 幫你排課吧！
					</p>
				)}
				{messages.map((msg) => (
					<div
						key={msg.id}
						className="ml-auto w-fit rounded-lg bg-white p-2 text-pretty shadow"
					>
						{msg.text}
					</div>
				))}
			</div>
			<div className="pointer-events-none absolute bottom-[65px] left-0 h-[50px] w-full bg-gradient-to-t from-white to-transparent"></div>

			{/* 輸入框 & 發送按鈕 */}
			<div className="z-10 flex h-auto gap-2 rounded-lg bg-white p-3 shadow-md">
				<textarea
					className="max-h-[240px] w-full resize-none rounded-md p-2 py-3"
					rows={1}
					placeholder="輸入訊息..."
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === 'Enter' && !e.shiftKey) {
							e.preventDefault(); // 避免換行
							sendMessage();
						}
					}}
					ref={textareaRef}
				/>
				<button
					className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 p-3 text-white transition hover:bg-blue-700 active:scale-95"
					onClick={sendMessage}
				>
					<ArrowLeftOutlined style={{ fontSize: '24px' }} />
				</button>
			</div>
		</div>
	);
}
