import { cloneElement } from 'react';

import Child from './child';
import { IconProps } from './types';

const Icon = ({ children, width, height, size = 16, ...props }: IconProps) => {
	return cloneElement(<Child>{children}</Child>, {
		width: width ?? size,
		height: height ?? size,
		...props,
	});
};

export default Icon;
