/*
 * 关系图
 * 描述: 圆
 */
;(function (global, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		global.agChart.graph.circle = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.name = "graph.circle";

		this.single = null;

		this.option = {
			title: {
				text: ''
			},
			legend: [{
				// selectedMode: 'single',
				data: [],
				top: 15,
				left: 20,
				itemGap: 18,
				textStyle: {
					color: '#888',
					fontSize: 12
				},
				itemWidth: 8,
				itemHeight: 8,
				icon: 'circle'
			}],
			animationDurationUpdate: 1500,
			animationEasingUpdate: 'quinticInOut',
			color: ['#e1667c', '#e69a7f', '#e4cf70', '#c9e27e', '#8cde98', '#7acacf', '#72a9d8', '#838dd9'],
			series: [
				{
					name: 'Les Miserables',
					type: 'graph',
					layout: 'circular',
					circular: {
						rotateLabel: true
					},
					data: [],
					links: [],
					categories: [],
					label: {
						normal: {
							position: 'right',
							formatter: '{b}'
						}
					},
					lineStyle: {
						normal: {
							color: 'source',
							curveness: 0.3
						}
					},
					width: '44%'
				}
			]
		};

		this.init = function (el, style, data) {
			this.single = echarts.init(this.getDom(el));
			this.setData(data);
			this.single.setOption(this.option);
		};

		this.setData = function (data) {
			// 数据处理
			var categories = [];
			var graph = echarts.dataTool.gexf.parse(data);
			for (var i = 0; i < 9; i++) {
				categories[i] = {
					name: '类目' + i
				};
			}
			graph.nodes.forEach(function (node) {
				node.itemStyle = null;
				node.value = node.symbolSize;
				node.symbolSize /= 2;
				node.label = {
					normal: {
						show: node.symbolSize > 10
					}
				};
				node.category = node.attributes.modularity_class;
			});
			// 数据导入
			this.option.title.text = data.title || '';
			this.option.legend[0].data = categories.map(function (a) {
				return a.name;
			});
			this.option.series[0].data = graph.nodes;
			this.option.series[0].links = graph.links;
			this.option.series[0].categories = categories;
		};

		this.setStyle = function () {

		};

		this.resize = function () {
			this.single.resize();
		};
	}

	chart.prototype = agChart.common;
	chart.prototype.constructor = chart;

	return new chart();
});
