import React from 'react'
import Header from '../../components/Header/index.jsx'
import Side from '../../components/Side/index.jsx'
import './index.css'

class Layout extends React.Component{
	constructor(){
		super(...arguments)

	}
	render(){
		return (<div id="wrapper">
			<Header />
			<div>
				<Side />
			</div>
		</div>)
	}
}

export default Layout