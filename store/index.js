import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		/**
		 * 是否需要强制登录
		 */
		forcedLogin: true,
		hasLogin: false,
		userName: "",
		userInfo:null,
	},
	mutations: {
		login(state, userInfo) {  
			state.userName = userInfo.nickname|| '新用户';
		    state.userInfo=userInfo;
			state.hasLogin = true;
		
		},
		logout(state) {
			state.userName = "";
			stae.userInfo=null;
			state.hasLogin = false;
		}
	}
})

export default store
