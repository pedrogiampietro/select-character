import React from 'react';

type Character = {
	name: string;
	imgSrc: string;
	magicType: 'Fire' | 'Water' | 'Sound' | 'Nature';
	damage: number;
	speed: number;
	accuracy: number;
	armor: number;
};

const CharacterInfo: React.FC<{ character: Character }> = ({ character }) => {
	return (
		<div className='character-info-card'>
			<h2>{character.name}</h2>
			<p>
				<strong>Magic Type:</strong> {character.magicType}
			</p>

			<div className='stats'>
				<div className='stat'>
					<strong>Damage:</strong>
					<progress
						value={character.damage}
						max={100}
						className={`progress-${character.magicType}`}
					></progress>
				</div>

				<div className='stat'>
					<strong>Speed:</strong>
					<progress
						value={character.speed}
						max={100}
						className={`progress-${character.magicType}`}
					></progress>
				</div>

				<div className='stat'>
					<strong>Accuracy:</strong>
					<progress
						value={character.accuracy}
						max={100}
						className={`progress-${character.magicType}`}
					></progress>
				</div>

				<div className='stat'>
					<strong>Armor:</strong>
					<progress
						value={character.armor}
						max={100}
						className={`progress-${character.magicType}`}
					></progress>
				</div>
			</div>
		</div>
	);
};

export default CharacterInfo;
