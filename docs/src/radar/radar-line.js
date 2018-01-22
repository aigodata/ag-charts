/*
 * 雷达图
 * 描述: 线
 */
;(function (global, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		global.agChart.radar.line = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.name = "radar.line";

		this.single = null;

		this.option = {
			// 标题
			title: {
				text: '雷达图（毫米）',
				textStyle: {
					color: '#888',
					fontWeight: 'normal',
					fontSize: 12
				},
				top: '20',
				left: '20'
			},
			// 图例
			legend: {
				top: 'center',
				left: 22,
				data: ['降水量', '蒸发量'],
				orient: 'vertical',
				textStyle: {
					color: '#888',
					fontSize: 12
				},
				itemWidth: 6,
				itemHeight: 6,
				itemGap: 12,
				icon: 'circle'
			},
			// 提示框
			tooltip: {
				trigger: 'axis',
				backgroundColor: 'rgba(0,0,0,.7)',
				transitionDuration: 0.15,
				textStyle: {
					fontSize: 11
				},
				padding: [8, 15]
			},
			// 颜色
			color: ['#30a8ff', '#f53e3e'],
			// 雷达
			radar: {
				nameGap: 10,
				name : {
					color : '#b8b8b8'
				},
				splitLine : {
					lineStyle : {
						color : '#dcdcdc'
					}
				},
				splitArea : {
					areaStyle : {
						color : ['#fff','#f8f8f8']
					}
				},
				axisLine : {
					lineStyle : {
						color : '#dcdcdc'
					}
				},
				indicator: null,
				center: ['54%', '50%'],
				radius: 102
			},
			// 系列列表
			series: [
				{
					type: 'radar',
					tooltip: {
						trigger: 'item'
					},
					symbol: 'circle',
					itemStyle: {
						normal: {
							borderWidth: .5,
							borderColor: '#fff'
						}
					},
					lineStyle: {
						normal: {
							width: 1
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

			this.option.series[0].data = data.data;

			this.option.radar.indicator = data.indicator;
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
