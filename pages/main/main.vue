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
				console.log(search,"查询值");
				uni.request({
					url: this.adq.baseUrl + "/oauth/userinfo"+search,
					method: "GET",
					success: (response) => {
						var result = response.data; 
						if (result.success) { 
							uni.setStorageSync("user",result.data);
							this.login(uni.getStorageSync('user'));
							alert("登录成功！");
						} else {
							this.guideToLogin();
						}
					}
				})
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
