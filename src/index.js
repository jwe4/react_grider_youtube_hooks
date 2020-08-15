import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

/*
             App 
			        |
------------------------------
   |          |          |			 
SearchBar VideoDetail VideoList
                         |
					           VideoItem
					  
to generate app 
create-react-app videos
*/

ReactDOM.render(<App />, document.querySelector('#root'));
