import React from 'react'
import Title from '../../components/Title/index.jsx'

class Home extends React.Component{
	render(){
		return (
			<div id="page-wrapper">
				<Title title="首页"></Title>
				<div className="row">
					<div className="col-md-12">
						body
					</div>
				</div>
			</div>
		)
	}
}

export default Home