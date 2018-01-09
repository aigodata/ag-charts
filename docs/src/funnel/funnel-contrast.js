/*
 * 漏斗图
 *  描述: 对比
 */
;(function (global, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		global.agChart.funnel.contrast = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.name = "funnel.contrast";

		this.single = null;

		this.option = {
			title: {
				text: null,
				subtext: '纯属虚构',
				left: 'left',
				top: 'bottom'
			},
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c}%"
			},
			legend: {
				orient: 'vertical',
				left: 'left',
				data: null
			},
			calculable: true,
			series: [
				{
					name: '漏斗图',
					type: 'funnel',
					width: '40%',
					height: '45%',
					left: '5%',
					top: '50%',
					funnelAlign: 'right',

					center: ['25%', '25%'],  // for pie

					data: null
				},
				{
					name: '金字塔',
					type: 'funnel',
					width: '40%',
					height: '45%',
					left: '5%',
					top: '5%',
					sort: 'ascending',
					funnelAlign: 'right',

					center: ['25%', '75%'],  // for pie

					data: null
				},
				{
					name: '漏斗图',
					type: 'funnel',
					width: '40%',
					height: '45%',
					left: '55%',
					top: '5%',
					funnelAlign: 'left',

					center: ['75%', '25%'],  // for pie

					data: null
				},
				{
					name: '金字塔',
					type: 'funnel',
					width: '40%',
					height: '45%',
					left: '55%',
					top: '50%',
					sort: 'ascending',
					funnelAlign: 'left',

					center: ['75%', '75%'],  // for pie

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

			this.option.series[2].name = data.legend[2];
			this.option.series[2].data = data.data[2];

			this.option.series[3].name = data.legend[3];
			this.option.series[3].data = data.data[3];

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
