<template>
	<view class="content">
		<view v-if="hasLogin" class="hello">
			<view class="title">
				您好 {{userName}}，您已成功登录。
			</view>
			<view class="ul">
				<view>欢迎进入 {{app_name}}。</view>
				<view>在 “我的” 中点击 “退出” 可以 “注销当前账户”</view>
			</view>
		</view>
		<view v-if="!hasLogin" class="hello">
			<view class="title">
				您好 游客。
			</view>
			<view class="ul">
				<view>欢迎进入 {{app_name}}。</view>
				<view>在 “我的” 中点击 “登录” 可以 “登录您的账户”</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		data() {
			return {
				app_name: this.adq.appName
			}
		},

		onLoad() {

			let uniIdToken = uni.getStorageSync('user')
			if (!uniIdToken) {
				var search=window.location.search; 
				//通过code 自动登录
				this.adq.get("/oauth/userinfo"+search,null).then(result=>{ 
					if (result.success) { 
						var userInfo=result.data;
						uni.setStorageSync("user",result.data);
						this.login(uni.getStorageSync('user'));
						//通过openid 获取注册信息
						this.adq.get("/ztc/EntUserx/"+userInfo.openid).then((result)=>{
							if(result.success){ 
							    uni.setStorageSync("isRegister",true);
								//若已注册成功，则直接获取令牌
								this.adq.token.getToken().then(result=>{
									console.log("令牌读取成功！",result);
									if(result.success){
										  uni.navigateTo({
										  	url:"/pages/company/index"
										  }) 
									} 
								}); 
							}
							else{
								uni.showToast({
									title:"首次登录，需要跳转页面进行数据绑定！"
								})
								//首次登录，需要进行数据绑定
								uni.navigateTo({
									url:"/pages/company/my-edit"
								})
							}
						})
					} else {
						this.guideToLogin();
					}
					
				}); 
			}
			else{
				uni.navigateTo({
					url:"/pages/company/index"
				})
			}

		},
		methods: {
			...mapMutations(['login']),
			guideToLogin() {
				uni.showModal({
					title: '未登录',
					content: '您未登录，需要登录后才能继续',
					/**
					 * 如果需要强制登录，不显示取消按钮
					 */
					showCancel: !this.forcedLogin,
					success: (res) => {
						if (res.confirm) {
							var oauth_url = this.adq.getWxOauth2();
							//window.location.href = oauth_url
							uni.navigateTo({
								url:"/pages/company/my-edit"
							})
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */

							// if (this.forcedLogin) {
							// 	uni.reLaunch({
							// 		url: '../login/login'
							// 	}); 
							//    }
						}
					}
				});
			}
		}

	}
</script>

<style>
	.hello {
		display: flex;
		flex: 1;
		flex-direction: column;
	}

	.title {
		color: #8f8f94;
		margin-top: 25px;
	}

	.ul {
		font-size: 15px;
		color: #8f8f94;
		margin-top: 25px;
	}

	.ul>view {
		line-height: 25px;
	}
</style>
