<template>
	<view class="adq-container">
		<view class="uni-padding-wrap uni-common-mt"> 
			<form @submit="formSubmit"> 
				<view class="uni-form-item uni-column">
					<view class="adq_must">审核部门</view>
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="uni-input">{{array[index].name}}</view>
					</picker>
				</view> 
				<view class="uni-form-item uni-column">
					<view class="adq_must">审核人</view>
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="uni-input">{{array[index].name}}</view>
					</picker>
				</view> 
			</form>
			<button type="primary" ref="popupDialog" form-type="submit">提交</button>
		</view>
	</view>
</template>

<script>
 export default {
	 data(){
		 return{
			 index: 0,
			 array: [{
			 	name: 'A'
			 }, {
			 	name: 'B'
			 }, {
			 	name: 'C'
			 }, {
			 	name: 'D'
			 }, {
			 	name: 'E'
			 }, {
			 	name: 'F'
			 }]
		 }
	 },
	 methods:{
		 bindPickerChange(e) {
		 	this.index=e.detail.value; 
		 },
	 }
 }
</script>

<style>
</style>
