import { useContext } from 'react';
import { CountContext } from '../Parent';

export default function Component5() {
	const count = useContext(CountContext);

	return (
		<div className='child-box-5'>{count}</div>
	);
}
