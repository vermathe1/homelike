import React from 'react';

export const Select = ({options}) => {

	const handleChange = (e) =>{
		console.log(e.target.name);
		console.log(e.target.selected = !e.target.selected)
	}
	return(
			

<div class="btn-group" data-toggle="buttons">
	<label id='Radio 1' class="btn btn-primary">
		<input type="radio" name="options" id="option1" autocomplete="off"/> Radio 1
	</label>
	<div class="btn-group">
		<label class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			<input type="radio" class="" name="options" id="option4" autocomplete="off"/> Radio 4 <span class="caret"></span>
		</label>
	<ul class="dropdown-menu">
		<li><a href="#"><input type="checkbox" class="" name="pramod" id="option4" selected = 'false' onChange= {e =>handleChange(e)}/> Radio 41 </a></li>
		<li><a href="#"><input type="checkbox" class="" name="options2" id="option4" autocomplete="off"/> Radio 4 </a></li>
		<li><a href="#"><input type="checkbox" class="" name="options3" id="option4" autocomplete="off"/> Radio 4 </a></li>
		<li role="separator" class="divider">
			<li><a href="#"><input type="radio" class="" name="options4" id="option4" autocomplete="off"/> Radio 4 </a></li>
		</li>
		<li><a href="#"><li><a href="#"><input type="checkbox" class="" name="options" id="option4" autocomplete="off"/> Radio 4 </a></li></a></li>
	</ul>
	</div>
</div>
 

	)
}
 

