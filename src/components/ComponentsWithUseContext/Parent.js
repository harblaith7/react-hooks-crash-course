import React, {
	useState,
	createContext,
} from 'react';
import Component1 from './components/Component1';

export const CountContext = createContext(0);

export default function App() {
	const [count, setCount] = useState(0);

	return (
		<CountContext.Provider value={count}>
			<Component1 />
			<button onClick={() => setCount(count + 1)}>
				Add
			</button>
		</CountContext.Provider>
	);
}
