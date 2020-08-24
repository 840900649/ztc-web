<template>
	<view class="uni-container">
		<view class="adq-panle" style="display: flex; ">
			<text>
				基础信息
			</text>

			<navigator url="my-edit" style="align-self: flex-end;">
				<button type="primary">
					编辑
				</button>
			</navigator>
		</view>
		<view class="uni-panel" >
			<view class="uni-panel-h" >
				<text class="uni-panel-text">姓名</text>
				<text class="uni-panel-text">{{forms.xm}}</text>
			</view>
		</view>
		<view class="uni-panel" >
			<view class="uni-panel-h" >
				<text class="uni-panel-text">性别</text>
				<text class="uni-panel-text">{{forms.xb}}</text>
			</view>
		</view>
		<view class="uni-panel" >
			<view class="uni-panel-h" >
				<text class="uni-panel-text">职务</text>
				<text class="uni-panel-text">{{forms.zw}}</text>
			</view>
		</view>
		<view class="uni-panel" >
			<view class="uni-panel-h" >
				<text class="uni-panel-text">邮箱</text>
				<text class="uni-panel-text">{{forms.yxdz}}</text>
			</view>
		</view>
		<view class="uni-panel" >
			<view class="uni-panel-h" >
				<text class="uni-panel-text">手机</text>
				<text class="uni-panel-text">{{forms.sjhm}}</text>
			</view>
		</view>
		<view class="uni-panel" >
			<view class="uni-panel-h" >
				<text class="uni-panel-text">出生年月</text>
				<text class="uni-panel-text">{{forms.csny}}</text>
			</view>
		</view>
		<view class="uni-panel" >
			<view class="uni-panel-h" >
				<text class="uni-panel-text">所在企业</text>
				<text class="uni-panel-text">{{forms.ssqym}}</text>
			</view>
		</view>
		<view class="uni-panel">
			<view class="uni-panel-h">
				<text class="uni-panel-text">签名：</text>
				< <text class="uni-panel-text">{{forms.gxqm}}</text>
			</view>
		</view>

		<view class="adq-panle">
			账号信息
		</view>
		<view class="uni-panel">
			<view class="uni-panel-h">
				<text class="uni-panel-text">登录账号：</text>
				<text class="uni-panel-text">{{forms.sjhm}}</text>
			</view>

		</view>
		<view class="uni-panel">
			<view class="uni-panel-h">
				<text class="uni-panel-text">微信号：</text>
				<text class="uni-panel-text">{{wxid}}</text>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				wxid:"",
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
				},
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
		mounted() {
			this.wxid=this.$store.state.userInfo.unionid;
			var self=this;
			this.adq.get("/ztc/EntUserx",null).then(result=>{
				console.log("赋值测试！");
				this.adq.api.set(self.forms,result.data); 
			});
		},
		methods: {
			goDetailPage(path) {
				 
			}
		}
	}
</script>

<style>
	.adq-panle {
		margin-bottom: 2px;
		font-size: 24px;
		border-bottom: 1px solid #aaa;
	}
</style>
