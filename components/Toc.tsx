'use client';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

const Toc = () => {
	const pathname = usePathname();
	const [currentId, setCurrentId] = useState<string>('');
	const [headingEls, setHeadingEls] = useState<Element[]>([]);
	const observerRef = useRef<IntersectionObserver | null>(null);
	const isClickScrolling = useRef(false);
	const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		const cleanup = () => {
			if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
			if (observerRef.current) {
				observerRef.current.disconnect();
				observerRef.current = null;
			}
		};

		const headingElements = Array.from(
			document.querySelectorAll('main h2, main h3')
		);
		const validHeadingElements = headingElements.filter(el => el.id);
		if (!validHeadingElements.length) {
			setHeadingEls([]);
			setCurrentId('');
			cleanup();
			return;
		}
		setHeadingEls(validHeadingElements);

		const observerOptions = {
			rootMargin: '-80px 0px -60% 0px',
			threshold: 0,
		};

		const intersectionMap = new Map<string, boolean>();

		observerRef.current = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				intersectionMap.set(entry.target.id, entry.isIntersecting);
			});

			let firstVisibleId = '';
			for (const heading of validHeadingElements) {
				if (intersectionMap.get(heading.id)) {
					firstVisibleId = heading.id;
					break;
				}
			}

			if (!isClickScrolling.current) {
				setCurrentId(prevId => prevId !== firstVisibleId ? firstVisibleId : prevId);
			}

		}, observerOptions);

		validHeadingElements.forEach((header) => {
			observerRef.current?.observe(header);
		});

		const initialCheckTimeout = setTimeout(() => {
			let firstVisibleId = '';
			for (const heading of validHeadingElements) {
				const rect = heading.getBoundingClientRect();
				const topMargin = parseInt(observerOptions.rootMargin.split(' ')[0], 10);
				const bottomMarginPercent = parseInt(observerOptions.rootMargin.split(' ')[2], 10);
				const viewportHeight = window.innerHeight;
				const bottomThreshold = viewportHeight * (1 - (Math.abs(bottomMarginPercent) / 100));

				if (rect.top >= topMargin && rect.top < bottomThreshold && rect.bottom > 0 && rect.top < viewportHeight) {
					firstVisibleId = heading.id;
					break;
				}
			}
			setCurrentId(firstVisibleId);
		}, 100);

		return () => {
			clearTimeout(initialCheckTimeout);
			cleanup();
		};

	}, [pathname]);

	const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
		e.preventDefault();
		isClickScrolling.current = true;
		setCurrentId(id);

		document.getElementById(id)?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});

		if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
		scrollTimeoutRef.current = setTimeout(() => {
			isClickScrolling.current = false;
		}, 1000);
	};

	if (!headingEls.length) return null;

	return (
		<div className="relative max-md:hidden">
			<nav className="w-full" aria-label="Table of contents">
				<ul className="space-y-1">
					{headingEls.map((h) => {
						const isActive = currentId === h.id;
						const isH2 = h.nodeName === 'H2';
						const indentClass = isH2 ? 'pl-3' : 'pl-[30px]';

						return (
							<li
								key={h.id}
								data-depth={isH2 ? '1' : '2'}
								data-active={isActive}
								className={`group border-l border-transparent ${indentClass} py-1 first:pt-0 last:pb-0 data-[active=true]:border-primary`}
							>
								<a
									href={`#${h.id}`}
									onClick={(e) => handleLinkClick(e, h.id)}
									className={`block text-sm leading-normal transition-all duration-100 ease-in hover:opacity-100 hover:underline ${isActive
										? 'font-medium text-primary opacity-100'
										: 'opacity-60 group-hover:opacity-80'
										}`}
								>
									{h.textContent}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Toc;
