/*
 * 平行坐标
 * 描述: 纵
 */
;(function (global, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		global.agChart.parallel.vertical = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.name = "parallel.vertical";

		this.single = null;

		var lineStyle = {
			normal: {
				width: 1,
				opacity: 0.5
			}
		};

		this.option = {
			legend: {
				bottom: 30,
				data: null,
				itemGap: 20,
				textStyle: {
					color: '#888',
					fontSize: 12
				}
			},
			tooltip: {
				padding: 10,
				backgroundColor: '#222',
				borderColor: '#777',
				borderWidth: 1
			},
			parallelAxis: null,
			visualMap: {
				show: true,
				min: 0,
				max: 150,
				dimension: 2,
				inRange: {
					color: ['#f0516d ','#c17be6','#55a7ee'].reverse(),
				}
			},
			parallel: {
				left: '5%',
				right: '18%',
				bottom: 100,
				parallelAxisDefault: {
					type: 'value',
					nameLocation: 'end',
					nameGap: 20,
					nameTextStyle: {
						color: '#fff',
						fontSize: 12
					},
					axisLine: {
						lineStyle: {
							color: '#d7d7d7',
							type: 'solid',
						}
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						color: '#888',
						fontSize: '12'
					}
				}
			},
			color: ['#f0516d ','#c17be6','#55a7ee'],
			series: [
				{
					name: null,
					type: 'parallel',
					lineStyle: lineStyle,
					data: null
				},
				{
					name: null,
					type: 'parallel',
					lineStyle: lineStyle,
					data: null
				},
				{
					name: null,
					type: 'parallel',
					lineStyle: lineStyle,
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
			// this.option.title.text = data.title;
			this.option.legend.data = data.legend;

			this.option.series[0].name = data.legend[0];
			this.option.series[0].data = data.data[0];

			this.option.series[1].name = data.legend[1];
			this.option.series[1].data = data.data[1];

			this.option.series[2].name = data.legend[2];
			this.option.series[2].data = data.data[2];

			this.option.parallelAxis = data.parallelAxis;
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
