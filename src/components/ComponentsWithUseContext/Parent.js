import React, { useState } from 'react';
import Component1 from './components/Component1';

export default function Parent() {
	const [data, setData] = useState(
		'Please Subscribe'
	);

	return (
		<div>
			<Component1 />
		</div>
	);
}
