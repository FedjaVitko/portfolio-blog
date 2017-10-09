import React from "react";

import { Header, Image} from "semantic-ui-react";

import foto4 from "images/foto4.png";

const HeaderComponent = () => 
	(
		<Header
		  as="h2"
		  style={{
				marginTop: "0em",
				flexDirection: 'row',
				marginBottom: '0'
		  }}
		>	
		  <div
				className='flex-center'
				style={{
					flexDirection: 'column'
				}}
		  >
				<Image
					shape="circular"
					style={{
						width: "115px",
						height: "125px",
						marginRight: '0.5em',
						marginBottom: '1em',
					}}
					bordered
					fluid
					src={foto4}
				/>
			  <h1 style={{
					margin: '0', 
					fontWeight: '500', 
					fontSize: '30px'
				}}>
					Fedor Vitkovskiy
				</h1>
			  <h3 style={{
					margin: '10px 0', 
					fontWeight: '100'
				}}>
					Software Developer
				</h3>
		  </div>
		</Header>
  );


export default HeaderComponent;
