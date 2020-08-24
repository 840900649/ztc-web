<template>
	<view class="uni-container">
		<view class="adq-panle">
			基础信息
		</view>
		<view class="uni-panel" v-for="item in lists" :key="item.url">
			<view class="uni-panel-h" @click="goDetailPage(item.url)">
				 <text class="uni-panel-text">{{item.name}}</text>
				 <text class="uni-panel-text">测试数据</text>  
			</view>
		</view>
		<view class="uni-panel" >
			<view class="uni-panel-h" >
				 <text class="uni-panel-text">签名：</text>
				 <text class="uni-panel-text">测试数据</text>  
			</view>
		</view>
		
		<view class="adq-panle">
			账号信息
		</view>
		<view class="uni-panel"  >
			<view class="uni-panel-h" >
				 <text class="uni-panel-text">登录账号：</text>
				 <text class="uni-panel-text">测试数据</text>  
			</view>
			
		</view>
		<view class="uni-panel"  >
			<view class="uni-panel-h" >
				 <text class="uni-panel-text">微信号：</text>
				 <text class="uni-panel-text">测试数据</text>  
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists: [{
						name: "姓名：", 
						url: "direct-mail"
					},
					{
						name: "性别：男",
						url: "calendar"
					},
					{
						name: "职务：",
						url: "card"
					},
					{
						name: "邮箱：",
						url: "collapse1"
					},
					{
						name: "手机号：",
						url: "collapse2"
					},
					{
						name: "出生年月：",
						url: "collapse3"
					},
					{
						name: "所在企业：",
						url: "collapse4"
					},  
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
	.adq-panle{
		margin-bottom: 2px;
		font-size:24px;border-bottom: 1px solid #aaa;
	}
</style>
