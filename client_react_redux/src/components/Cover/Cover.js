import React, { Component } from 'react';
import './cover.scss';

export default class Cover extends Component {
	render() {
		const { hasUser, userName } = this.props.user

		return(
			<div className='container'>
				<div className='wrap '>
					{hasUser ? (
						<p className='line-1 anim-typewriter'>
							Hi {userName}!Please tell me some feelings about your proyect, you can writte a concept a poem or a lyric whatever you want!
						</p>
					) : (
						<p className='line-1 anim-typewriter'>
							Hi! I am your <strong>typography emotional asistant</strong>, please first at all <span className='login'>login</span> or <span className='login'>signup</span>!
						</p>
					)}
				</div>
			</div>
		);
	};
};


