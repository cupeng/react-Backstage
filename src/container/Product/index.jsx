import React from 'react'
import Title from '../../components/Title/index.jsx'
import Header from '../../components/Header/index.jsx'
import Side from '../../components/Side/index.jsx'
import Pagination from '../../util/pagination/index.jsx'
import MUtil from '../../util/mm.jsx'
import Product1 from '../../sevice/product-sevice.jsx'
import { Link } from 'react-router-dom'
import TableList from '../../util/table-list/index.jsx'
const _mm = new MUtil()
const _product = new Product1()

class Product extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			list: [],
			pageNum : 1
		}
	}
	componentDidMount() {
		this.loadUserList()
	}
	loadUserList(){
		_product.getProductList(this.state.pageNum).then(res=>{
			this.setState(res)
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
					<td>
						<span>{e.name}</span>
						<span>{e.subtitle}</span>
					</td>
					<td>¥{e.price}</td>
					<td>
					{
						e.status === 1 ?'在售' : '已下架' 
					}
					</td>
					<td>
						<Link to={`/product/detail/${e.id}`}>查看详情   </Link>
						<Link to={`/product/detail/${e.id}`}> 编辑</Link>
					</td>
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
						<Title title="产品页面"></Title>
					</div>
					<TableList tableHeads={['商品ID','商品信息','价格','状态','操作']}>
						{
							listBody
						}
					</TableList>
					<div className="row">
						<Pagination onChange={(pageNum)=>this.onPageNumChange(pageNum)} current={this.state.pageNum} total={this.state.total} />
					</div>
				</div>
			</div>
		)
	}
}

export default Product