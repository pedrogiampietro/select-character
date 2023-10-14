import React, { useState, useRef } from 'react';

interface Props {
	character: string;
}

const views = ['front', 'left', 'right', 'back'];

const CharacterViewer: React.FC<Props> = ({ character }) => {
	const [viewIndex, setViewIndex] = useState(0);
	const dragStartX = useRef<number | null>(null);

	const handleMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
		dragStartX.current = e.clientX;
	};

	const handleMouseUp = (e: React.MouseEvent<HTMLImageElement>) => {
		if (dragStartX.current !== null) {
			const dx = e.clientX - dragStartX.current;
			if (dx > 50) {
				// Arrastado para a direita
				setViewIndex((prevIndex) => (prevIndex + 1) % views.length);
			} else if (dx < -50) {
				// Arrastado para a esquerda
				setViewIndex(
					(prevIndex) => (prevIndex - 1 + views.length) % views.length
				);
			}
		}
	};

	const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
		if (e.deltaY > 0) {
			// Scroll para baixo
			setViewIndex((prevIndex) => (prevIndex + 1) % views.length);
		} else if (e.deltaY < 0) {
			// Scroll para cima
			setViewIndex(
				(prevIndex) => (prevIndex - 1 + views.length) % views.length
			);
		}
	};

	const handleMouseLeave = () => {
		if (dragStartX.current !== null) {
			dragStartX.current = null;
		}
	};

	return (
		<div className='character-viewer' onWheel={handleWheel}>
			<img
				src={`/assets/${character}/${views[viewIndex]}.png`}
				alt={views[viewIndex]}
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseLeave}
				draggable='false'
				style={{
					width: '300px',
					height: '300px',
				}}
			/>
			<div className='rotation-indicator'>↻ 360°</div>
		</div>
	);
};

export default CharacterViewer;
