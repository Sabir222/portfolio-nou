'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';

export default function Blur() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 10);
		};

		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<div
			className={clsx(
				'fixed top-0 left-0 w-full h-8 z-50 transition-all duration-300',
				scrolled
					? 'gradient-blur-overlay '
					: 'bg-transparent'
			)}		>
		</div>
	);
}
