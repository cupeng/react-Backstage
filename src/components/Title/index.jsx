import React from 'react'

class Title extends React.Component{
	constructor(props){
		super(props)
	}
	componentWillMount(){
		document.title = this.props.title + ' - HAPPYMMALL'
	}
	render(){
		return (
			<div className="row">
				<h1 className="page-header">{this.props.title}</h1>
				{this.props.children}
			</div>
		)
	}
}

export default Title