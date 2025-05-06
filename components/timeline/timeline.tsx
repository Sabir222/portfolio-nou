import React, { ComponentProps, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type BaseProps = {
	asChild?: boolean;
	className?: string;
	children: ReactNode;
};

type DivisionProps = ComponentProps<'div'> & BaseProps;
type HeadingProps = ComponentProps<'h2'> & BaseProps & {
	icon?: ReactNode;
	iconSrc?: string;
	iconAlt?: string;
	iconFallback?: string;
};
type ParagraphProps = ComponentProps<'p'> & BaseProps;

const TimelineList = ({ asChild, className, children, ...props }: DivisionProps) => {
	const Comp = asChild ? Slot : 'div';
	return (
		<Comp className={clsx('relative w-full list-none', className)} {...props}>
			<div
				className={clsx(
					'absolute left-6 top-0 bottom-0 w-[1.5px] -z-10',
					'bg-repeat-y bg-[length:1.5px_8px] bg-[image:repeating-linear-gradient(to_bottom,theme(colors.border)_0,theme(colors.border)_4px,transparent_4px,transparent_8px)]',
					'[mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)]'
				)}
				aria-hidden="true"
			/>
			{children}
		</Comp>
	);
};

const TimelineItem = ({ asChild, className, children, ...props }: DivisionProps) => {
	const Comp = asChild ? Slot : 'div';
	return (
		<Comp
			className={clsx(
				'relative pl-16 pb-8 last:pb-0 group',
				className
			)}
			{...props}
		>
			{children}
		</Comp>
	);
};

const TimelineDot = ({ className }: { className?: string }) => {
	return (
		<div
			className={clsx(
				'absolute left-6 top-1 -translate-x-1/2',
				'w-3 h-3 rounded-full bg-border',
				'before:absolute before:-left-1 before:-right-1 before:-top-1 before:-bottom-1 before:rounded-full before:bg-border/20',
				className
			)}
			aria-hidden="true"
		/>
	);
};

const TimelineContent = ({ asChild, className, children, ...props }: DivisionProps) => {
	const Comp = asChild ? Slot : 'div';
	return (
		<Comp
			className={clsx(
				'border dark:bg-zinc-500/10 bg-[#F4F4F5] p-4 rounded-md ',
				'text-card-foreground',
				className
			)}
			{...props}
		>
			{children}
		</Comp>
	);
};

const TimelineHeading = ({
	asChild,
	className,
	children,
	icon,
	iconSrc = "https://github.com/shadcn.png",
	iconAlt,
	iconFallback = "SK",
	...props
}: HeadingProps) => {
	const Comp = asChild ? Slot : 'h2';

	return (
		<div className="flex  gap-2 mb-2 items-center">
			{icon || (
				<Avatar className="w-5 h-5 flex-shrink-0 mt-0.5">
					<AvatarImage src={iconSrc} alt={iconAlt} />
					<AvatarFallback className="text-xs">{iconFallback}</AvatarFallback>
				</Avatar>
			)}
			<Comp
				className={clsx(
					'text-base font-light break-keep leading-tight',
					className
				)}
				{...props}
			>
				{children}
			</Comp>
		</div>
	);
};

const TimelineDescription = ({ asChild, className, children, ...props }: ParagraphProps) => {
	const Comp = asChild ? Slot : 'p';
	return (
		<Comp
			className={clsx(
				'text-sm text-muted-foreground',
				className
			)}
			{...props}
		>
			{children}
		</Comp>
	);
};

export {
	TimelineList,
	TimelineItem,
	TimelineDot,
	TimelineContent,
	TimelineHeading,
	TimelineDescription
};
