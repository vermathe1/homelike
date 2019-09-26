import React from 'react';

export const Select = ({options, title, onChange, handleSubmit}) => {
	const handleChange = (e) =>{
	}
	return(
<div class="btn-group" data-toggle="buttons">
	<div class="btn-group">
			<button class="btn" type="button" data-toggle="dropdown">{title}<span class="caret"></span></button>
	<ul class="dropdown-menu">
		{options.map(option=>{return <li><a><input type="checkbox" class="" name={option} onChange={e=>onChange(e)}/> {option}</a></li>})}
		<li role="separator" class="divider">
		</li>
		<div class="btn-group">
		<button  class=" btn" type="button" onClick={e=>{e.preventDefault(); handleSubmit()}}><li><a>Search</a></li></button>
		</div>
		
	</ul>
	</div>
</div>
	)
}
 


