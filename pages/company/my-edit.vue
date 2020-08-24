<template>
	<view class="adq-container">
		<view class="uni-padding-wrap uni-common-mt">
			<form @submit="formSubmit">
				<view class="uni-form-item uni-column">
					<view class="adq_must">姓名</view>
					<input class="uni-input" type="text" name="" v-model="forms.xm" id="" placeholder="请输入姓名">
				</view>
				<view class="uni-form-item uni-column">
					<view class="adq_must">所在企业</view>
					<input class="uni-input" type="text" name="" v-model="forms.ssqym" id="" placeholder="请输入所在企业名称">
				</view>
				<view class="uni-form-item uni-column">
					<view class="adq_must">手机号</view>
					<input class="uni-input" type="text" name="" v-model="forms.sjhm" id="" placeholder="请输入手机号">
				</view>
				<view class="uni-form-item uni-column">
					<view class="adq_must">职务</view>
					<input class="uni-input" type="text" name="" v-model="forms.zw" id="" placeholder="请输职务">
				</view>
				<view class="uni-form-item uni-column">
					<view class="adq_must">邮箱</view>
					<input class="uni-input" type="text" name="" v-model="forms.yx" id="" placeholder="请输入邮箱">
				</view>
				<view class="uni-form-item uni-column">
					<view class="adq_must">性别 </view>
					<radio-group name="gender" @change="changeSex">
						<label>
							<radio value="0" checked="checked" /> <text>男</text>
						</label>
						<label>
							<radio value="1" /> <text>女</text>
						</label>
					</radio-group>
				</view>
				<view class="uni-form-item uni-column">
					<view class="adq_must">个性签名</view>
					<textarea style="height:120px;" placeholder-style="padding:6px;" v-model="forms.gxqm" placeholder=""></textarea>
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
				forms: {
					xm: "",
					xb: 0,
					zw: "",
					csny: "",
					gxqm: "",
					zhmc: "",
					dlmm: "",
					sjhm: "",
					yxdz: "",
					ssqym: "",
					ssqybh: "",
					userId: "",
				}
			}
		},
		onLoad() {
			console.log(211231);
		  this.forms.userId= this.$store.state.userInfo.openid;
		},
		methods: {
			changeSex(e) {
				this.forms.xb = parseInt(e.detail.value);
			},
			formSubmit() {
				var form = this.forms;
				this.adq.post("/ztc/EntUserx", form).then(result => {
					 
					if (result.success) {
						uni.navigateTo({
							url: "/pages/company/index"
						})
					}
				});
			},

		}
	}
</script>

<style>
	.adq-panle {
		margin-bottom: 2px;
		font-size: 24px;
		border-bottom: 1px solid #aaa;
	}

	.adq-container {
		background-color: #F4F5F6;
	}
</style>
