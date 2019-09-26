import React from 'react';

export const Dropdown = ({options,onChange,title}) => {
	return(
		<div class="dropdown filter">
		<button class="btn dropdown-toggle" type="button" data-toggle="dropdown">{title}
		<span class="caret"></span></button>
		<ul class="dropdown-menu">
		{options.map(option=>{return <li onClick={e=>onChange(e.target.innerHTML)}><a href="#">{option}</a></li>})}
		</ul>
		</div>

	)
}
 
