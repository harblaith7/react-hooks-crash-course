import { useState } from 'react';

function ComponentWithUseState() {
	const [count, setCounter] = useState(0);

	const changeCount = (operation) => {
		if (operation === 'add') {
			if (count < 10) setCounter(count + 1);
		} else {
			if (count > 0) setCounter(count - 1);
		}
	};

	const renderBar = () => {
		const bars = [];

		for (let i = 0; i < count; i++) {
			bars.push(
				<div
					style={{
						backgroundColor:
							'rgba(212,113,211, 0.3)',
						height: '100%',
						width: '10%',
					}}
				/>
			);
		}

		return bars;
	};

	return (
		<div>
			<h1>useState</h1>
			<div
				style={{
					border: '0.1rem solid rgba(0,0,0, 0.3)',
					height: '100px',
					width: '80%',
					margin: '2rem auto',
					display: 'flex',
				}}
			>
				{renderBar()}
			</div>

			<button
				onClick={() => changeCount('subtract')}
			>
				Substract Bar
			</button>
			<button onClick={() => changeCount('add')}>
				Add Bar
			</button>
		</div>
	);
}

export default ComponentWithUseState;
