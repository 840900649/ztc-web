let adq = {
	baseUrl: "https://ztc-wx.adq.xin",
	appName: "息烽服务直通车",
	appId: "wxb6ba2f54d4d6d31c",
	redirectUri: "https://ztc-wx.adq.xin/oauth/index?returnUrl=https://ztc-gzh.adq.xin/pages/company/index",
	getWxOauth2() {//获取微信登录路径
		//return "/company/index";
		console.log(this);
		var redirect = encodeURIComponent(this.redirectUri);
		return "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + this.appId + "&redirect_uri=" + redirect +
			"&response_type=code&scope=snsapi_userinfo&state=dwj-1000&connect_redirect=1#wechat_redirect";
	},
	api:{
		//设置vue值
		set(old,news){
			for(var key in old){
				if(news[key]){
					old[key]=news[key];
				}
			}
		 
		}
	},
	authType: 1, //1 bearer 授权方式
	token:{
		value:"",
		getToken(){//获取系统登录令牌 
			 var id=uni.getStorageSync("user").openid;
			return adq.post("/ztc/TokenAuth/login",{id:id,code:"123456" }).then(result=>{ 
				if(result.success){ 
					adq.token.value=result.data.token;
					uni.setStorageSync("userToken",result.data);
				} 
				return result;
			}); 
		},
	}, 
	headers: {}, 
	prefix: "", //接口前缀
	get: (url, data) => {
		return adq.request(url, "GET", data);
	},
	post: (url, data) => {
		uni.showLoading({
			title: "数据保存中......",
		})
		return adq.request(url, "POST", data);
	},
	request: (url, method, data) => {
		console.log("测试请求！");

		switch (adq.authType) {
			case 1:
				adq.headers['Authorization'] = `Bearer ${
				              adq.token.value
				          }` 
				break;
		}

		return uni.request({
			url: adq.baseUrl + url,
			method: method,
			data: data,
			dataType: 'json',
			header: adq.headers
		}).then(res => {
			uni.hideLoading();
			if (res[1].data && res[1].statusCode == 200) {
				if (method == "POST") {
					uni.showToast({
						title: res[1].data.msg,
						duration: 2000,
						icon:"success",
					})
				}
				return res[1].data;
			} else {
				if (method == "POST") {
					uni.showToast({
						title: "网络异常，请稍后重试",
						duration: 2000,
					})
				}
				console.log("网络请求异常,")
			}
		}).catch(parmas => {
			uni.hideLoading();
			switch (parmas.code) {
				case 401:
					uni.clearStorageSync()
					break
				default:
					uni.showToast({
						title: parmas.message,
						icon: 'none'
					})
					return Promise.reject()
					break
			}
		})
	}
};
if (process.env.Node_ENV === "development") {

} else {

}
export default adq;
