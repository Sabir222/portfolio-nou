'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { getIntersectionObserver } from 'lib/observer';

const Toc = () => {
	const pathname = usePathname();
	const [currentId, setCurrentId] = useState<string>('');
	const [headingEls, setHeadingEls] = useState<Element[]>([]);

	useEffect(() => {
		const observer = getIntersectionObserver(setCurrentId);
		const headingElements = Array.from(document.querySelectorAll('h2, h3'));
		setHeadingEls(headingElements);
		headingElements.forEach((header) => observer.observe(header));
	}, [pathname]);

	return (
		<div className="relative max-md:hidden">
			<div className="w-full">
				{headingEls.map((h, i) =>
					h.nodeName === 'H2' ? (
						<div
							key={i}
							data-depth="1"
							data-active={currentId === h.id}
							className="group py-1 pl-3 first:pt-0 last:pb-0 data-[active=true]:border-l data-[active=true]:border-primary"
						>
							<a
								href={`#${h.id}`}
								className="block text-sm leading-normal opacity-50 transition-all duration-100 ease-in hover:opacity-80 hover:underline group-data-[active=true]:text-primary group-data-[active=true]:opacity-100"
							>
								{h.textContent}
							</a>
						</div>
					) : (
						<div
							key={i}
							data-depth="2"
							data-active={currentId === h.id}
							className="group py-1 pl-[30px] first:pt-0 last:pb-0 data-[active=true]:border-l data-[active=true]:border-primary"
						>
							<a
								href={`#${h.id}`}
								className="block text-sm leading-normal opacity-50 transition-all duration-100 ease-in hover:opacity-80 hover:underline group-data-[active=true]:text-primary group-data-[active=true]:opacity-100"
							>
								{h.textContent}
							</a>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default Toc;
