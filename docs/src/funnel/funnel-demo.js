/*
 * 漏斗图
 *  描述:
 */
;(function (global, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		global.agChart.funnel.demo = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.name = "funnel.demo";

		this.single = null;

		this.option = {
			title: {
				text: null
			},
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c}%"
			},
			legend: {
				data: null
			},
			series: [
				{
					name: '预期',
					type: 'funnel',
					left: '10%',
					width: '80%',
					label: {
						normal: {
							formatter: '{b}预期'
						},
						emphasis: {
							position:'inside',
							formatter: '{b}预期: {c}%'
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					itemStyle: {
						normal: {
							opacity: 0.7
						}
					},
					data: null
				},
				{
					name: '实际',
					type: 'funnel',
					left: '10%',
					width: '80%',
					maxSize: '80%',
					label: {
						normal: {
							position: 'inside',
							formatter: '{c}%',
							textStyle: {
								color: '#fff'
							}
						},
						emphasis: {
							position:'inside',
							formatter: '{b}实际: {c}%'
						}
					},
					itemStyle: {
						normal: {
							opacity: 0.5,
							borderColor: '#fff',
							borderWidth: 2
						}
					},
					data: null
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
			this.option.legend.data = data.legend;

			this.option.series[0].name = data.legend[0];
			this.option.series[0].data = data.data[0];

			this.option.series[1].name = data.legend[1];
			this.option.series[1].data = data.data[1];

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
