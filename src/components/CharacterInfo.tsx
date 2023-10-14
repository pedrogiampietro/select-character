import React from 'react';

function getMagicTypeColor(magicType: string): string {
	switch (magicType) {
		case 'Fire':
			return '#FF5733'; // Vermelho para Fogo
		case 'Water':
			return '#33AFFF'; // Azul para Água
		case 'Sound':
			return '#FFD133'; // Amarelo para Som
		case 'Nature':
			return '#33FF57'; // Verde para Natureza
		default:
			return '#007acc'; // Cor padrão caso não tenha correspondência
	}
}

const CharacterInfo: React.FC<{ character: (typeof characters)[0] }> = ({
	character,
}) => {
	const magicTypeColor = getMagicTypeColor(character.magicType);

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