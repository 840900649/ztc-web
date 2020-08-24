<script> 
    
   

	import {
		mapState,
		mapMutations
	} from 'vuex';

	export default {
		onLaunch: function() {
			 //判断是否处于登录中
			let uniIdToken = uni.getStorageSync('user')
			if (uniIdToken) {
				var userInfo=uni.getStorageSync('user');
				var isRegister=uni.getStorageSync("isRegister");
				var isToken=uni.getStorageSync("userToken");
				this.login(userInfo)
				if(!isRegister){ 
					//通过openid 获取用户登录信息
					this.adq.get("/ztc/EntUserx/"+userInfo.openid).then((result)=>{
						if(result.success){
							uni.setStorageSync("isRegister",true);
						}
						else{
							uni.showToast({
								title:"首次登录，需要跳转页面进行数据绑定！"
							})
							uni.navigateTo({
								url:"/pages/company/my-edit"
							})
						}
					})
					
				}  
				else{
					if(!isToken){
						this.adq.token.getToken().then(result=>{
							console.log("令牌读取成功！",result);
							if(result.success){
								  
							} 
						});
					}
					else{
						this.adq.token.value=isToken.token;
					}
				}
			} 
			else{
				uni.navigateTo({
					url:"pages/main/main"
				})
			}
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		},
		methods: {
			...mapMutations(['login']),
		}
	}
</script>

<style>

    @import './common/uni.css';
		 @import './common/uni-nvue.css'; 
		@import './common/adq.css';
	 .uni-container{
		 width: 100%;
	 }
	 .uni-panel .uni-panel-icon{
		 float: right;
	 }
	/*每个页面公共css */
	page {
		min-height: 100%;
		display: flex;
		font-size: 16px;
	}

	/* #ifdef MP-BAIDU */
	page {
		width: 100%;
		height: 100%;
		display: block;
	}

	swan-template {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* 原生组件模式下需要注意组件外部样式 */
	custom-component {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* #endif */

	/* #ifdef MP-ALIPAY */
	page {
		min-height: 100vh;
	}

	/* #endif */

	/* 原生组件模式下需要注意组件外部样式 */
	m-input {
		width: 100%;
		/* min-height: 100%; */
		display: flex;
		flex: 1;
	}

	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #efeff4;
		padding: 10px;
	}

	.input-group {
		background-color: #ffffff;
		margin-top: 20px;
		position: relative;
	}

	.input-group::before {
		position: absolute;
		right: 0;
		top: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-group::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-row {
		display: flex;
		flex-direction: row;
		position: relative;
		font-size: 18px;
		line-height: 40px;
	}

	.input-row .title {
		width: 100px;
		padding-left: 15px;
	}

	.input-row.border::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 8px;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.btn-row {
		margin-top: 25px;
		padding: 10px;
	}

	button.primary {
		background-color: #0faeff;
	}
</style>
