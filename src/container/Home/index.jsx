import React from 'react'
import Title from '../../components/Title/index.jsx'
import Layout from '../../components/Layout/index.jsx'

class Home extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<Layout>
				<div id="page-wrapper">
					<Title title="首页"></Title>
					<div className="row">
						<div className="col-md-12">
							
						</div>
					</div>
				</div>
			</Layout>
			
		)
	}
}

export default Home