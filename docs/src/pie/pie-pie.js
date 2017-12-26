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
		global.agChart.pie.pie = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.name = "scatter.band";

		this.single = null;

		this.option = {
			//标题
			title: {
				text: '饼图',
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
				right: 22,
				data: ['邮件营销', '直接访问', '视频广告', '联盟广告'],
				orient: 'vertical',
				textStyle: {
					color: '#888',
					fontSize: 12
				},
				itemWidth: 6,
				itemHeight: 6,
				itemGap: 12
			},
			//提示框
			tooltip: {
				trigger: 'item',
				formatter: "{b} : {c} ({d}%)",
				backgroundColor: 'rgba(0,0,0,.7)',
			},
			//系列列表
			series: [
				{
					type: 'pie',
					radius: '55%',
					center: ['48%', '55%'],
					label: {
						normal: {
							formatter: '{b}{d}%'
						}
					},
					startAngle: 180,
					data: [
						{
							value: 80,
							name: '邮件营销',
							itemStyle: {
								normal: {
									color: '#e86699',
									borderColor: '#fff',
									borderWidth: 1
								}
							}
						},
						{
							value: 80,
							name: '直接访问',
							itemStyle: {
								normal: {
									color: '#f8c76c',
									borderColor: '#fff',
									borderWidth: 1
								}
							}
						},
						{
							value: 120,
							name: '视频广告',
							itemStyle: {
								normal: {
									color: '#6cd1db',
									borderColor: '#fff',
									borderWidth: 1
								}
							}
						},
						{
							value: 60,
							name: '联盟广告',
							itemStyle: {
								normal: {
									color: '#7e78f3',
									borderColor: '#fff',
									borderWidth: 1
								}
							}
						}
					]
				}]
		};

		this.init = function (el, style, data) {
			this.single = echarts.init(this.getDom(el));
			/*this.setData(data);*/
			this.single.setOption(this.option);
		};

		this.setData = function (data) {
			this.option.title.text = data.title;
			this.option.legend.data = data.legend;

			/*this.option.series[0].name = data.legend[0];
			this.option.series[0].data = data.data[0];

			this.option.series[1].name = data.legend[1];
			this.option.series[1].data = data.data[1];

			this.option.series[2].name = data.legend[2];
			this.option.series[2].data = data.data[2];

			this.option.series[3].name = data.legend[3];
			this.option.series[3].data = data.data[3];*/
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
