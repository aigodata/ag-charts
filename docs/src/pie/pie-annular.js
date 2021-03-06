/*
 * 饼图
 * 描述: 环形图
 */
;(function (global, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		global.agChart.pie.annular = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.name = "pie.annular";

		this.single = null;

		this.option = {
			//标题
			title: {
				text: '环形图',
				textStyle: {
					color: '#888',
					fontWeight: 'normal',
					fontSize: 12
				},
				top: '20',
				left: '20'
			},
			//网格
			grid: {
				top: '70',
				left: '55',
				right: '40',
				bottom: '38'
			},
			//图例
			legend: {
				top: 'center',
				left: 22,
				data: ['邮件营销', '直接访问', '视频广告', '联盟广告'],
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
			//提示框
			tooltip: {
				trigger: 'item',
				formatter: "{b} <br/> {c} ({d}%)",
				backgroundColor: 'rgba(0,0,0,.7)',
				transitionDuration: 0.15,
				textStyle: {
					fontSize: 11
				},
				padding: [8,15]
			},
			// 颜色
			color: ['#e86699','#f8c76c','#6cd1db','#7e78f3'],
			//系列列表
			series: [
				{
					type: 'pie',
					radius: ['40%', '55%'],
					center: ['52%', '55%'],
					label: {
						normal: {
							formatter: '{b}{d}%'
						}
					},
					startAngle: 180,
					data: null,
					itemStyle: {
						normal: {
							borderColor: '#fff',
							borderWidth: 1
						}
					}
				}]
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
