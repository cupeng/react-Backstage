class MUtil{
	request(param){
		return new Promise((resolve,reject)=>{
			$.ajax({
				url:param.url || '',
				type:param.type || 'get',
				dataType:param.dataType || 'json',
				data:param.data || null,
				success:res=>{
					//请求成功
					if(res.status === 0){
						typeof resolve === 'function' && resolve(res.data,res.msg)
					}else if(res.status===10){
						//做登录
						this.doLogin()
					}else{
						typeof reject === 'function' && reject(res.msg || res.data)
					}
				},error:e=>{
					typeof reject === 'function' && reject(e.statusText)
				}

			})
		})
	}
	doLogin(){
		window.location.href = '/login?redirect='+ encodeURLComponent(window.location.pathname)
	}
	//获取URL参数
	getUrlParam(name){
		let queryString = window.location.search.split('?')[1] || ''
		let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
		let result = queryString.match(reg)
		return result ? decodeURIComponent(result[2]) : null
	}
	//错误处理
	errorTips(errMsg){
		alert(errMsg)
	}
	
}

export default MUtil