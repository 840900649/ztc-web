<template>
	<view class="uni-container">
		<view>
			<view class="uni-center">
				<image src="../../static/img/qq.png" class="adq-logo"></image>
			</view>

			<view class="uni-center">
				<text>微信昵称：张三</text>
				<text>登录时间：</text>
			</view>
		</view>
		<view class="uni-panel" v-for="item in lists" :key="item.url">
			<view class="uni-panel-h" @click="goDetailPage(item.url)">
				<text class="uni-panel-text">{{item.name}}</text>
				<text class="uni-panel-icon uni-icon">&#xe470;</text>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				lists: [{
						name: "代办事项",
						url: "direct-mail"
					},
					{
						name: "历史信件",
						url: "history_letter"
					},
					{
						name: "个人信息",
						url: "my"
					},
					{
						name: "单位信息",
						url: "info"
					}
				]
			}
		},
		methods: {
			goDetailPage(path) {
				console.log(321123);
				uni.navigateTo({
					url: '/pages/organ/' + path
				});
			}
		}
	}
</script>

<style>
	.uni-panel {
		margin-top: 20px;
	}

	.adq-logo {
		width: 120px;
		height: 120px;
		;
	}
</style>
