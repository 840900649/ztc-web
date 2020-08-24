<template>
	<view class="uni-container"> 
		<view class="uni-panel" v-for="item in lists" :key="item.url">
			<view class="uni-panel-h" @click="goDetailPage(item.url)">
				 <text class="uni-panel-text">{{item.name}}</text>
				 <text class="uni-panel-text">测试数据</text>  
			</view>
		</view>
		<view class="uni-panel" >
			<text class="uni-panel-text">机构详情：</text>
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
						name: "机构名称：", 
						url: "direct-mail"
					},
					{
						name: "法定代表人",
						url: "calendar"
					},
					{
						name: "登记状态：",
						url: "card"
					},
					{
						name: "成立日期：",
						url: "collapse1"
					},
					{
						name: "登记机关：",
						url: "collapse2"
					},
					{
						name: "统一信用代码：",
						url: "collapse3"
					},
					{
						name: "单位地址：",
						url: "collapse4"
					},
					{
						name: "联系电话：",
						url: "collapse4"
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
	.adq-panle{
		margin-bottom: 2px;
		font-size:24px;border-bottom: 1px solid #aaa;
	}
</style>
