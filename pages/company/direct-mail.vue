<template>
	<view class="adq-container">
		<view class="uni-padding-wrap uni-common-mt"> 
			<form @submit="formSubmit">
				<view class="uni-form-item uni-column">
					<view class="adq_must">信件标题</view>
					<input class="uni-input" type="text" name="" id="" placeholder="请输入信件标题">
				</view>
				<view class="uni-form-item uni-column">
					<view class="adq_must">企业名称</view>
					<input class="uni-input" type="text" name="" id="" placeholder="请输入企业名称">
				</view>
				<view class="uni-form-item uni-column">
					<view class="adq_must">联系人姓名</view>
					<input class="uni-input" type="text" name="" id="" placeholder="请输入联系人姓名">
				</view>
				<view class="uni-form-item uni-column">
					<view class="adq_must">联系人手机</view>
					<input class="uni-input" type="text" name="" id="" placeholder="请输入联系人手机">
				</view>
				<view class="uni-form-item uni-column">
					<view class="adq_must">项目名称</view>
					<input class="uni-input" type="text" name="" id="" placeholder="请输项目名称">
				</view>
				<view class="uni-form-item uni-column">
					<view class="adq_must">目的地</view>
					<input class="uni-input" type="text" name="" id="" placeholder="请输入目的地">
				</view>
				<view class="uni-form-item uni-column">
					<view class="adq_must">信件类型</view>
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="uni-input">{{array[index].name}}</view>
					</picker>
				</view>
				<view class="uni-form-item uni-column">
					<view class="adq_must">项目基本情况</view>
					<textarea style="height:80px;" placeholder-style="padding:6px;" placeholder=""></textarea>
				</view>
				<view class="uni-form-item uni-column">
					<view class="uni-btn-v">
						<button type="primary" ref="popupDialog" form-type="submit">提交</button>
					</view>
				</view>
		
			</form>
			 
		</view>
	</view>
</template>

<script>
 
	export default { 
		data() {
			return {
				type: 'top',
				msgType: 'success',
				message: '这是一条成功消息提示',
				value: '默认输入的内容', 
				index: 0,
				array: [{
					name: '政策兑现'
				}, {
					name: '基础配套'
				}, {
					name: '手续办理'
				}, {
					name: '情况反映'
				}, {
					name: '意见建议'
				}, {
					name: '其他咨询'
				}]
			}
		},
		methods: { 
			bindPickerChange: function(e) {
				this.index=e.detail.value;
			},
			formSubmit: function() {
				var pdata=this.ps;
				uni.request({
					url: ADQ.baseUrl + "/yscp/jsyxxx",
					data: pdata,
					method: "POST",
					complete: () => {
						this.msgType = "success"
						this.message = '录入成功！'
						this.$refs.popupDialog.open()
					},
					fail: () => {
						this.msgType = "error"
						this.message = '录入失败！'
						this.$refs.popupDialog.open()
					}
				})
			
			}
		}
	}
</script>

<style>
	.adq-container{
		background-color: #F4F5F6;
	}
</style>
