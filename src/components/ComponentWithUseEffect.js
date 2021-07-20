import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ComponentWithUseEffect() {
	const [showStatement, setShowStatement] =
		useState(false);
	const [boxPicked, setBoxPicked] = useState(0);
	const [image, setImage] = useState('');

	useEffect(() => {
		setTimeout(() => {
			setShowStatement(true);
		}, 2000);
	}, []);

	useEffect(() => {
		if (boxPicked === 0) {
			setImage('');
		} else {
			fetchImage(boxPicked);
		}
	}, [boxPicked]);

	const fetchImage = async (boxId) => {
		if (boxId === 1) {
			const response = await axios.get(
				'https://randomfox.ca/floof/?ref=apilist.fun'
			);
			setImage(response.data.image);
		} else if (boxId === 2) {
			const response = await axios.get(
				'https://aws.random.cat/meow?ref=apilist.fun'
			);
			setImage(response.data.file);
		} else if (boxId === 3) {
			const response = await axios.get(
				'https://dog.ceo/api/breeds/image/random'
			);
			setImage(response.data.message);
		}
	};

	return (
		<div>
			{showStatement && (
				<>
					<h1 className='scary-text'>
						Pick A Box
					</h1>
					<div className='box-container'>
						<div
							id='1'
							className='box'
							onClick={(e) =>
								setBoxPicked(
									parseInt(e.target.id)
								)
							}
						>
							<h2>1</h2>
						</div>
						<div
							id='2'
							className='box'
							onClick={(e) =>
								setBoxPicked(
									parseInt(e.target.id)
								)
							}
						>
							<h2>2</h2>
						</div>
						<div
							id='3'
							className='box'
							onClick={(e) =>
								setBoxPicked(
									parseInt(e.target.id)
								)
							}
						>
							<h2>3</h2>
						</div>
					</div>
				</>
			)}
			{image && (
				<img
					className='animal-image'
					src={image}
				/>
			)}
		</div>
	);
}
