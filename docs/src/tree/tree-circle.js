/*
 * 树状图
 *  描述: 圆
 */
;(function (global, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		global.agChart.tree.circle = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.name = "tree.circle";

		this.single = null;

		this.option = {
			tooltip: {
				trigger: 'item',
				triggerOn: 'mousemove'
			},
			series: [
				{
					type: 'tree',
					data: null,
					top: '26%',
					bottom: '14%',
					layout: 'radial',
					symbol: 'emptyCircle',
					symbolSize: 7,
					itemStyle: {
						color: '#00a0e9',
						borderColor: '#00a0e9'
					},
					label: {
						normal: {
							color: '#888'
						}
					},
					initialTreeDepth: 3,
					animationDurationUpdate: 750
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
			this.option.series[0].data = data.data;

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
