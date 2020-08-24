<template>
	<view class="uni-container"> 
		<view class="uni-panel" v-for="item in lists" :key="item.url">
			<view class="uni-panel-h" @click="goDetailPage(item.url)">
				 <text class="uni-panel-text">{{item.name}}</text>
				 <text class="uni-panel-text">测试数据</text>  
			</view>
		</view>
		<view class="uni-panel" >
			<text class="uni-panel-text">经验范围：</text>
			<view class="uni-panel-h"  style="height: 120px;">
				 
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
						name: "注册资本：", 
						url: "direct-mail"
					},
					{
						name: "实交资本",
						url: "calendar"
					},
					{
						name: "评分：",
						url: "card"
					},
					{
						name: "成立日期：",
						url: "collapse1"
					},
					{
						name: "经验状态：",
						url: "collapse2"
					},
					{
						name: "统一信用代码：",
						url: "collapse3"
					},
					{
						name: "工商注册号：",
						url: "collapse4"
					},  
					
				]
			}
		},
		methods: {
			goDetailPage(path) {
				console.log(321123);
				uni.navigateTo({
					url: '/pages/company/' + path
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
