import React from 'react';

export const Dropdown = ({options,onChange}) => {
	return(
		<div class="dropdown">
		<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
		<span class="caret"></span></button>
		<ul class="dropdown-menu">
		{options.map(option=>{return <li onClick={e=>onChange(e.target.innerHTML)}><a href="#">{option}</a></li>})}
		</ul>
		</div>

	)
}
 
