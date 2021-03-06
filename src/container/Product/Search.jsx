import React from 'react'

class Search extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			searchType : 'productId',
			searchKeyword : ''
		}
	}
	onSearchKeywordKeyUp(e) {
		if(e.keyCode === 13){
            this.onSearch();
        }
	}
	onValueChange(e) {
		let name = e.target.name
		let val = e.target.value.trim()
		this.setState({
			[name]:val
		})
	}
	onSearch() {
		this.props.onSearch(this.state.searchType, this.state.searchKeyword);
	}
	render() {
		return (
			<div className="row search-wrap">
                <div className="col-md-12">
                    <div className="form-inline">
                        <div className="form-group">
                            <select className="form-control"
                                name="searchType"
                                onChange={(e) => this.onValueChange(e)}>
                                <option value="productId">按商品ID查询</option>
                                <option value="productName">按商品名称查询</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="text" 
                                className="form-control" 
                                placeholder="关键词"
                                name="searchKeyword"
                                onKeyUp={(e) => this.onSearchKeywordKeyUp(e)}
                                onChange={(e) => this.onValueChange(e)}/>
                        </div>
                        <button className="btn btn-primary" 
                            onClick={(e) => this.onSearch()}>搜索</button>
                    </div>
                </div>
            </div>
		)
	}
}

export default Search