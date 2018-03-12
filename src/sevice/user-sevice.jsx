import MUtil from '../util/mm.jsx'
const _mm = new MUtil()
class User{
	login(loginInfo){
		return _mm.request({
			url:'/manage/user/login.do',
			type:'post',
			data:loginInfo
		})
	}
	//检查登录接口的数据是否合法
	checkLoginInfo(loginInfo){
		let username = $.trim(loginInfo.username)
		let password = $.trim(loginInfo.passowrd)
		if(typeof username !=='string' || !loginInfo.username){
			return {
				status:false,
				msg:'用户名不能为空!'
			}
		}	
		if(typeof password !=='string' || !loginInfo.password){
			return {
				status:false,
				msg:'密码不能为空!'
			}
		}
		return {
			status:true,
			msg:'验证通过'
		}
	}
	logout(){
		return _mm.request({
			type:'post',
			url:'/user/logout.do'
		})
	}
}

export default User