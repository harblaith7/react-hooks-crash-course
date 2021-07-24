import React, { useReducer } from 'react';

function reducer(state, action) {
	switch (action.type) {
		case 'deposit':
			return state + action.payload;
		case 'withdraw':
			return state - action.payload;
		default:
			return state;
	}
}

export default function ComponentWithUseReducer() {
	const deposit = (amount) => {
		dispatch({
			type: 'deposit',
			payload: amount,
		});
	};

	const withdraw = (amount) => {
		dispatch({
			type: 'withdraw',
			payload: amount,
		});
	};

	const [amount, dispatch] = useReducer(
		reducer,
		0
	);

	return (
		<div>
			<h1>{amount}</h1>
			<button onClick={() => deposit(500)}>
				Deposit
			</button>
			<button onClick={() => withdraw(500)}>
				Withdraw
			</button>
		</div>
	);
}
