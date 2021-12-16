import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Section1 from './Section1/Section1.js';
import Section2 from './Section2/Section2.js';
import Section3 from './Section3/Section3.js';
import Section4 from './Section4/Section4.js';

class Main extends React.Component
{

	render()
	{
		
		return(
		<div>

              <Section1 />
			  <Section2 />
			  <Section3 />
			  <Section4 />

        </div>
		
		      	
		);

	}
}


	
ReactDOM.render(
    <div>
    <Main />
</div>
,document.getElementById('root')
);