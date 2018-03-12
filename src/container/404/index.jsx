import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../../components/Title/index.jsx'
import Header from '../../components/Header/index.jsx'
import Side from '../../components/Side/index.jsx'
class Error extends React.Component {
	render() {
		return (
			<div id="wrapper">
				
				<Header />
				<Side />
				<div id="page-wrapper">
					<Title title="出错啦" />
					<div className="row">
						<div className="col-md-12">
							<span>找不到该路径</span>
							<Link to="/">点我返回首页</Link>
						</div>
					</div>
				</div>

			</div>
		)
	}
}

export default Error