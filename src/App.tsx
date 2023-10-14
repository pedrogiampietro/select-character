import React, { useState } from 'react';
import CharacterViewer from './components/CharacterViewer';
import CharacterInfo from './components/CharacterInfo';

import './App.css';

const App: React.FC = () => {
	const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
		null
	);

	const characters = [
		{
			name: 'Bloom',
			imgSrc: '/assets/Bloom/front.png',
			magicType: 'Fire',
			damage: 80,
			speed: 50,
			accuracy: 70,
			armor: 30,
		},
		{
			name: 'Aisha',
			imgSrc: '/assets/Aisha/front.png',
			magicType: 'Water',
			damage: 75,
			speed: 55,
			accuracy: 65,
			armor: 35,
		},
		{
			name: 'Musa',
			imgSrc: '/assets/Musa/front.png',
			magicType: 'Sound',
			damage: 65,
			speed: 60,
			accuracy: 80,
			armor: 25,
		},
		{
			name: 'Flora',
			imgSrc: '/assets/Flora/front.png',
			magicType: 'Nature',
			damage: 70,
			speed: 52,
			accuracy: 73,
			armor: 32,
		},
	];

	return (
		<div className='app-container'>
			<div className='left-panel'>
				<div className='content-container'>
					<div className='inventory-grid'>
						{characters.map((character) => (
							<div
								className={`inventory-slot ${
									selectedCharacter === character.name ? 'selected' : ''
								}`}
								key={character.name}
								onClick={() => setSelectedCharacter(character.name)}
							>
								<img
									src={character.imgSrc}
									alt={character.name}
									className='item-image'
								/>
								<span className='item-name'>{character.name}</span>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className='center-panel'>
				{selectedCharacter && <CharacterViewer character={selectedCharacter} />}
			</div>
			<div className='right-panel'>
				{selectedCharacter && (
					<CharacterInfo
						character={characters.find((c) => c.name === selectedCharacter)!}
					/>
				)}
			</div>
		</div>
	);
};

export default App;
