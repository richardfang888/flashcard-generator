import React from 'react'
import {Link} from 'react-router-dom'
export default function HomePage () {
    return (
	<div>
		<Link to='/Desktop1'><div>Desktop1</div></Link>
		<Link to='/Desktop1_1'><div>Desktop1_1</div></Link>
	</div>
	)
}