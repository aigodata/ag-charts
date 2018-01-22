/*
 * 矩形树图
 *  描述:
 */
;(function (global, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		global.agChart.treemap.demo = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.name = "treemap.demo";

		this.single = null;

		function colorMappingChange(value) {
			var levelOption = getLevelOption(value);
			chart.setOption({
				series: [{
					levels: levelOption
				}]
			});
		}

		var formatUtil = echarts.format;

		function getLevelOption() {
			return [
				{
					itemStyle: {
						normal: {
							borderWidth: 0,
							gapWidth: 5
						}
					}
				},
				{
					itemStyle: {
						normal: {
							gapWidth: 1
						}
					}
				},
				{
					colorSaturation: [0.35, 0.5],
					itemStyle: {
						normal: {
							gapWidth: 1,
							borderColorSaturation: 0.6
						}
					}
				}
			];
		}

		this.option = {

			tooltip: {
				formatter: function (info) {
					var value = info.value;
					var treePathInfo = info.treePathInfo;
					var treePath = [];

					for (var i = 1; i < treePathInfo.length; i++) {
						treePath.push(treePathInfo[i].name);
					}

					return [
						'<div class="tooltip-title">' + formatUtil.encodeHTML(treePath.join('/')) + '</div>',
						'Disk Usage: ' + formatUtil.addCommas(value) + ' KB',
					].join('');
				}
			},
			color:['#e1667c','#e69a7f','#e4cf70','#c9e27e','#8cde98','#7acacf','#72a9d8','#838dd9','#a68ae1','#c885de','#f06aa6','#d266d6'],
			series: [
				{
					name: '',
					type: 'treemap',
					visibleMin: 300,
					label: {
						show: true,
						formatter: '{b}'
					},
					roam: false,
					itemStyle: {
						normal: {
							borderColor: '#fff'
						}
					},
					levels: getLevelOption(),
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
			// 数据处理
			this.option.series[0].name = data.legend[0];
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
