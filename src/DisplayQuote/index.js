import React from 'react';

const DisplayQuote=({ item })=>{
	return (
		<div className="DisplayQuote">
		    <ul>
	        	<li>character : {item.character}</li>
		    	<li><img src={item.image} alt="ok" /></li>
		        <li>quote : {item.quote}</li>
		    </ul>
		</div>
	)
};

export default DisplayQuote;