<template>
	<view class="uni-container">
		<view class="adq-panle">
			信件信息
		</view>
		<view class="box">
			<t-table @change="change">
				<t-tr>
					<t-td>信件标题</t-td>
					<t-td>测试数据</t-td>
				</t-tr>
				<t-tr>
					<t-td>信件分类</t-td>
					<t-td>测试数据</t-td>
				</t-tr>
				<t-tr>
					<t-td>企业名称</t-td>
					<t-td>测试数据</t-td>
				</t-tr>
				<t-tr>
					<t-td>企业联系人</t-td>
					<t-td>测试数据</t-td>
				</t-tr>
				<t-tr>
					<t-td>企业联系人电话</t-td>
					<t-td>测试数据</t-td>
				</t-tr>
				<t-tr>
					<t-td>项目名称</t-td>
					<t-td>测试数据</t-td>
				</t-tr>
				<t-tr>
					<t-td>项目基本情况</t-td>
					<t-td>测试数据</t-td>
				</t-tr>
				<t-tr>
					<t-td>信件内容</t-td>
					<t-td>测试数据</t-td>
				</t-tr>

			</t-table>
		</view>
		<view class="adq-panle">
			流程信息
		</view>
		<view class="box">
			<t-table @change="change">
				<t-tr>
					<t-th>所在部门</t-th>
					<t-th>节点信息</t-th>
					<t-th>业务信息</t-th>
				</t-tr>
				<t-tr v-for="item in tableList" :key="item.id">
					<t-td>投诉服务中心</t-td>
					<t-td class="adq-process">
						<view>
							节点：测试
						</view>
						<view>
							时间：测试
						</view>
						<view>
							姓名：测试
						</view>
						<view>
							职务：测试
						</view>
					</t-td>
					<t-td class="adq-process">
						<view>
							业务操作：测试
						</view>
						<view>
							审核意见：测试
						</view>
						<view>
							事项优先级：测试
						</view>
					</t-td>
				</t-tr>
			</t-table>
		</view>
		<view style="display: flex;margin: 4px 0;">
			<button type="primary" ref="popupDialog" form-type="submit" style="width: 50%;">图片资料</button>
			<button type="primary" ref="popupDialog" form-type="submit" style="width: 50%;">文件资料</button>
		</view>
		<view class="uni-form-item uni-column">
			<view class="adq_must">业务操作</view>
			<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
				<view class="uni-input">{{array[index].name}}</view>
			</picker>
		</view>
		<button type="primary" @click="confirmHandle" ref="popupDialog" form-type="submit">确定</button>
	</view>
</template>

<script>
	import tTable from '@/components/t-table/t-table.vue';
	import tTh from '@/components/t-table/t-th.vue';
	import tTr from '@/components/t-table/t-tr.vue';
	import tTd from '@/components/t-table/t-td.vue';

	export default {
		components: {
			tTable,
			tTh,
			tTr,
			tTd
		},
		data() {
			return {
				index: 0,
				array: [{
					name: '转交审核'
				}, {
					name: '转审核弹窗'
				}, {
					name: '转办理弹窗'
				}, {
					name: '信件办理'
				}, {
					name: '信件回复'
				}],
				tableList: [{
						id: 0,
						name: '张三',
						age: '19',
						hobby: '游泳'
					},
					{
						id: 1,
						name: '李四',
						age: '21',
						hobby: '绘画'
					},
					{
						id: 2,
						name: '王二',
						age: '29',
						hobby: '滑板'
					},
					{
						id: 3,
						name: '码字',
						age: '20',
						hobby: '蹦极'
					}
				]
			};
		},
		methods: {
			bindPickerChange(e) {
				this.index = e.detail.value;
				console.log(e.detail);
			},
			confirmHandle() {
				console.log(this.index);

				switch (this.index) {
					case 0:
					case 1:
					case 2:
					case 3:
						uni.navigateTo({
							url: "mail-confirm"
						})
						break;
					default:
						uni.navigateTo({
							url: "mail-details"
						})
						break;
				}
			},
			edit(item) {
				uni.showToast({
					title: item.name,
					icon: 'none'
				});
			}
		}
	};
</script>

<style>
	.adq-container {
		background-color: #F4F5F6;
	}

	.adq-process {
		display: block;
	}
</style>
