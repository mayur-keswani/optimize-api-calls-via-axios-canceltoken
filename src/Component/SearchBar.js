import React, { Fragment } from 'react'
import './SearchBar.css'
const SearchBar = (props) =>{
	return(
	<div className="form-group mx-auto mt-5 search-tab" style={{width:"80%"}}>
    	<input type="text" 
			className="form-control" 
			placeholder="Enter username"
			value={props.username}
			onChange={props.changed}
			/>
 	</div>
	)
}

export default SearchBar