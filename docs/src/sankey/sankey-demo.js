/*
 * 桑基图
 *  描述:
 */
;(function (global, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		global.agChart.sankey.demo = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.name = "sankey.demo";

		this.single = null;

		this.option = {
			title: {
				text: ''
			},
			tooltip: {
				trigger: 'item',
				triggerOn: 'mousemove'
			},
			color: ['#8cde98', '#e69a7f', '#e4cf70', '#c9e27e', '#e1667c'],
			series: [
				{
					type: 'sankey',
					top: 40,
					bottom: 40,
					left: 40,
					right: 240,
					layout: 'none',
					data: null,
					links: null,
					itemStyle: {
						normal: {
							borderWidth: 1,
							borderColor: 'rgba(0,0,0,0)'
						}
					},
					lineStyle: {
						normal: {
							color: 'source',
							curveness: 0.5
						}
					},
					label: {
						color: '#888'
					}
				}
			]
		};

		this.init = function (el, style, data) {
			this.single = echarts.init(this.getDom(el));
			this.setData(data);
			this.single.setOption(this.option);
		};

		this.setData = function (data) {

			this.option.series[0].data = data.data.nodes;
			this.option.series[0].links = data.data.links;
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
