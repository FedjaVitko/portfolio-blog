import React from 'react';

import { Link } from 'react-router-dom';

import { Menu, Icon, Sidebar } from 'semantic-ui-react';

const View = ({
	visible, activeItem, handleItemClick
}) => (
	<Sidebar
		as={ Menu }
		animation='uncover'
		width='wide'
		direction='right'
		visible={ visible }
		icon='labeled'
		vertical
	>
		<Link to="/">
			<Menu.Item 
				name='home' 
				className='menu-item' 
				active = { activeItem === 'home' } 
				onClick = { handleItemClick }
				color = 'grey'
			>
				Home
			</Menu.Item>
		</Link>
		
		<Link to="/projects/daily-challenge-app">
			<Menu.Item 
				name='projects' 
				className='menu-item' 
				active = { activeItem === 'projects' } 
				onClick = { handleItemClick }
				color = 'grey'
			>
				Projects
			</Menu.Item>
		</Link>

		<Link to="/blogs">
			<Menu.Item 
				name='blog' 
				className='menu-item' 
				active = { activeItem === 'blog' } 
				onClick = { handleItemClick }
				color = 'grey'
			>
				Blog
			</Menu.Item>
		</Link>

	</Sidebar>
)

export default View;

	

