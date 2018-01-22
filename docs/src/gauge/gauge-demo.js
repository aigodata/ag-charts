/*
 * 仪表盘
 *  描述:
 */
;(function (global, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		global.agChart.gauge.demo = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.name = "gauge.demo";

		this.single = null;

		this.option = {
			tooltip: {
				formatter: "{a} <br/>{b} : {c}%"
			},
			series: [
				{
					name: '业务指标',
					type: 'gauge',
					center: ['50%', '56%'],
					axisLine: {
						lineStyle: {
							color: [[1, new echarts.graphic.LinearGradient(
								0, 0, 1, 0,
								[
									{offset: 0, color: '#4ecbff'},
									{offset: 1, color: '#f6406f'}

								]
							)]],
							width: 20
						}
					},
					axisLabel: {
						color: '#888'
					},
					axisTick: {
						length: 8,
						lineStyle: {
							color: '#ff'
						}
					},
					splitLine: {
						length: 20,
						lineStyle: {
							width: 1,
							color: '#fff',
						}
					},
					pointer: {
						length: '72%',
						width: 6
					},
					detail: {
						formatter: '{value}%',
						color: '#333',
						fontSize: 22
					},
					data: null
				}
			]
		};

		/*setInterval(function () {
			option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
			myChart.setOption(option, true);
		},2000);*/

		this.init = function (el, style, data) {
			this.single = echarts.init(this.getDom(el));
			this.setData(data);
			this.single.setOption(this.option);
		};

		this.setData = function (data) {
			// this.option.title.text = data.title;
			// this.option.legend.data = data.legend;

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
