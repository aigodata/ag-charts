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
			series: [
				{
					type: 'sankey',
					layout: 'none',
					data: null,
					links: null,
					itemStyle: {
						normal: {
							borderWidth: 1,
							borderColor: '#aaa'
						}
					},
					lineStyle: {
						normal: {
							color: 'source',
							curveness: 0.5
						}
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
			this.option.title.text = data.title;

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
