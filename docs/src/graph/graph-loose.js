/*
 * 关系图
 *  描述: 散
 */
;(function (global, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		global.agChart.graph.loose = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.name = "graph.loose";

		this.single = null;

		this.option = {
			legend: {
				data: null,
				top: 0,
				left: 20,
				itemGap: 18,
				textStyle: {
					color: '#888',
					fontSize: 12
				},
				itemWidth: 8,
				itemHeight: 8,
				icon: 'circle'
			},
			color: ['#ef6e85', '#cbf648', '#c885de', '#92eef4', '#89c9f6'],
			series: [{
				type: 'graph',
				height: '80',
				layout: 'force',
				animation: false,
				label: {
					normal: {
						position: 'right',
						formatter: '{b}'
					}
				},
				draggable: true,
				data: null,
				categories: null,
				force: {
					// initLayout: 'circular'
					// repulsion: 20,
					edgeLength: 5,
					repulsion: 20,
					gravity: 0.2
				},
				edges: null
			}]
		};

		this.init = function (el, style, data) {
			this.single = echarts.init(this.getDom(el));
			this.setData(data);
			this.single.setOption(this.option);
		};

		this.setData = function (data) {
			// 数据处理
			this.option.legend.data = data.legend;

			this.option.series[0].data = data.data.nodes.map(function (node, idx) {
				node.id = idx;
				return node;
			});
			this.option.series[0].categories = data.data.categories;
			this.option.series[0].edges = data.data.links;

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
