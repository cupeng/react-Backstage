import React from 'react'
import Title from '../../components/Title/index.jsx'
import Header from '../../components/Header/index.jsx'
import Side from '../../components/Side/index.jsx'
import Pagination from '../../util/pagination/index.jsx'
import MUtil from '../../util/mm.jsx'
import User1 from '../../sevice/user-sevice.jsx'
const _mm = new MUtil()
const _user = new User1()

class User extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			list: [],
			pageNum : 1,
			firstLoading:true
		}
	}
	componentDidMount() {
		this.loadUserList()
	}
	loadUserList(){
		_user.getUserList(this.state.pageNum).then(res=>{
			this.setState(res,()=>{
				firstLoading:false
			})
		},err=>{
			_mm.errorTips(errMsg)
		})
	}
	onPageNumChange(pageNum){
		this.setState({
			pageNum:pageNum
		},()=>{
			this.loadUserList()
		})
	}
	render() {
		const listBody = this.state.list ? this.state.list.map((e,i)=>{
			return (
				<tr key={i}>
					<td>{e.id}</td>
					<td>{e.username}</td>
					<td>{e.email}</td>
					<td>{e.phone}</td>
					<td>{new Date(e.createTime).toLocaleString()}</td>
				</tr>
			)
		}) : (
			<tr colSpan="5" className="text-center">
				<td>没有找到相应的结果~</td>
			</tr>
		)

		return (
			<div id="wrapper">
				<Header />
				<Side />
				<div id="page-wrapper">
					<div className="row">
						<Title title="用户页面"></Title>
					</div>
					<div className="row">
						<div className="col-md-12">
							<table className="table table-striped">
								<thead>
									<tr>
										<th>ID</th>
										<th>用户名</th>
										<th>邮箱</th>
										<th>电话</th>
										<th>注册时间</th>
									</tr>
								</thead>
								<tbody>
									{listBody}
								</tbody>
							</table>
						</div>
					</div>
					<div className="row">
						
						<Pagination onChange={(pageNum)=>this.onPageNumChange(pageNum)} current={this.state.pageNum} total={this.state.total} />
					</div>
				</div>
			</div>
		)
	}
}

export default User