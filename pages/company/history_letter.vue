<template>
	<view class="uni-container">
		<view class="box">
			<t-table @change="change">
				<t-tr>
					<t-th>信件标题</t-th>
					<t-th>信件状态</t-th>
					<t-th>发起时间</t-th>
					<t-th>操作</t-th>
				</t-tr>
				<t-tr v-for="item in tableList" :key="item.id">
					<t-td>投诉建议</t-td>
					<t-td>未回复</t-td>
					<t-td>2020/08/01 12:00:00</t-td>
					<t-td>详情</t-td>
				</t-tr>
			</t-table>
		</view>
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
			change(e) {
				console.log(e.detail);
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
</style>
