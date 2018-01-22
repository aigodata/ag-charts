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
				text: null,
				textStyle: {
					color: '#888',
					fontWeight: 'normal',
					fontSize: 12
				},
				top: 10,
				left: 10
			},
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c}%"
			},
			legend: {
				top: 10,
				data: [''],
				itemGap: 18,
				textStyle: {
					color: '#888',
					fontSize: 12
				},
				itemWidth: 8,
				itemHeight: 8
			},
			color: ['#7ef28f','#f8de6d','#ed8292','#60b1f9','#a88df8'],
			series: [
				{
					name: '',
					type: 'funnel',
					left: 'center',
					top: 80,
					//x2: 80,
					bottom: 40,
					width: 340,
					// height: {totalHeight} - y - y2,
					min: 0,
					max: 100,
					minSize: '0%',
					maxSize: '100%',
					sort: 'descending',
					gap: 0,
					label: {
						normal: {
							show: true,
							position: 'inside'
						},
						emphasis: {
							textStyle: {
								fontSize: 20
							}
						}
					},
					labelLine: {
						normal: {
							length: 10,
							lineStyle: {
								width: 1,
								type: 'solid'
							}
						}
					},
					itemStyle: {
						normal: {
							borderColor: '#fff',
							borderWidth: 1
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

			this.option.series[0].name = data.series.name;
			this.option.series[0].data = data.data[0];

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
