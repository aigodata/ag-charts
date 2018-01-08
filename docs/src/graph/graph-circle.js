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

		this.name = "scatter.band";

		this.single = null;

		var graph = echarts.dataTool.gexf.parse(xml);
		var categories = [];
		for (var i = 0; i < 9; i++) {
			categories[i] = {
				name: '类目' + i
			};
		}
		graph.nodes.forEach(function (node) {
			node.itemStyle = null;
			node.value = node.symbolSize;
			node.symbolSize /= 1.5;
			node.label = {
				normal: {
					show: node.symbolSize > 10
				}
			};
			node.category = node.attributes.modularity_class;
		});

		this.option = {
			title: {
				text: 'Les Miserables',
				subtext: 'Circular layout',
				top: 'bottom',
				left: 'right'
			},
			tooltip: {},
			legend: [{
				// selectedMode: 'single',
				data: categories.map(function (a) {
					return a.name;
				})
			}],
			animationDurationUpdate: 1500,
			animationEasingUpdate: 'quinticInOut',
			series: [
				{
					name: 'Les Miserables',
					type: 'graph',
					layout: 'circular',
					circular: {
						rotateLabel: true
					},
					data: graph.nodes,
					links: graph.links,
					categories: categories,
					roam: true,
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
					}
				}
			]
		};
	}

	this.init = function (el, style, data) {
		this.single = echarts.init(this.getDom(el));
		this.setData(data);
		this.single.setOption(this.option);
	};

});
