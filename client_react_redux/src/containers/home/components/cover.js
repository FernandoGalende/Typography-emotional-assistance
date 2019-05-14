import React from 'react';

const Cover = (user) => {
	const { hasUser } = user;
	const name = 'fer';

	return (
		<div className='container'>
			<div className='wrap '>
				{hasUser ? (
					<p className='line-1 anim-typewriter'>
						Hi {name}!Please tell me some feelings about your proyect, you
            can writte a concept a poem or a lyric
						whatever you want!
					</p>
				) : (
					<p className='line-1 anim-typewriter'>
						Hi! I am <strong>aurelio</strong>, your typography emotional asistant, please first at all login
						or signup! |
					</p>
				)}
			</div>
		</div>
	);
};

export default Cover;
