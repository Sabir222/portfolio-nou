import { getMDXComponent } from 'next-contentlayer2/hooks'
import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
	h2: ({ ...props }) => (
		<h2 className="mb-4 mt-6 text-2xl font-bold" {...props} />
	),
	h3: ({ ...props }) => (
		<h3 className="mb-3 mt-5 text-xl font-semibold" {...props} />
	),
	ol: ({ ...props }) => (
		<ol className="list-decimal pl-6 my-4" {...props} />
	),
	ul: ({ ...props }) => (
		<ul className="list-disc pl-6 my-4" {...props} />
	),
	li: ({ ...props }) => (
		<li className="mb-2" {...props} />
	),
	p: ({ ...props }) => (
		<p className="mb-4 leading-relaxed" {...props} />
	),
	blockquote: ({ ...props }) => (
		<blockquote className="mt-6 border-l-2 pl-6 italic" {...props} />
	),
	pre: ({ children, className, ...props }) => (
		<pre
			className={`mb-4 mt-6 overflow-x-auto rounded p-4 text-sm ${className || ''}`}
			{...props}
		>
			{children}
		</pre>
	),
	code: ({ children, className, ...props }) => {
		const isInline = !className?.includes('language-')
		if (isInline) {
			return (
				<code
					className={`rounded   px-1 py-0.5 font-mono text-sm   ${className || ''}`}
					{...props}
				>
					{children}
				</code>
			)
		}
		return (
			<code
				className={`font-mono text-sm  ${className || ''}`}
				{...props}
			>
				{children}
			</code>
		)
	},
}

interface MdxProps {
	code: string
}

export default function Mdx({ code }: MdxProps) {
	const Component = getMDXComponent(code)
	return (
		<div className="max-w-none">
			<Component components={components} />
		</div>
	)
}
