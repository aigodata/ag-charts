/*
 * 地图
 *  描述: 公交路线
 */
;(function (global, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		global.agChart.map.path = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.name = "map.path";

		this.single = null;

		this.option = {
			bmap: {
				center: [116.46, 39.92],
				zoom: 10,
				roam: true,
				mapStyle: {
					styleJson: [{
						'featureType': 'water',
						'elementType': 'all',
						'stylers': {
							'color': '#d1d1d1'
						}
					}, {
						'featureType': 'land',
						'elementType': 'all',
						'stylers': {
							'color': '#f3f3f3'
						}
					}, {
						'featureType': 'railway',
						'elementType': 'all',
						'stylers': {
							'visibility': 'off'
						}
					}, {
						'featureType': 'highway',
						'elementType': 'all',
						'stylers': {
							'color': '#fdfdfd'
						}
					}, {
						'featureType': 'highway',
						'elementType': 'labels',
						'stylers': {
							'visibility': 'off'
						}
					}, {
						'featureType': 'arterial',
						'elementType': 'geometry',
						'stylers': {
							'color': '#fefefe'
						}
					}, {
						'featureType': 'arterial',
						'elementType': 'geometry.fill',
						'stylers': {
							'color': '#fefefe'
						}
					}, {
						'featureType': 'poi',
						'elementType': 'all',
						'stylers': {
							'visibility': 'off'
						}
					}, {
						'featureType': 'green',
						'elementType': 'all',
						'stylers': {
							'visibility': 'off'
						}
					}, {
						'featureType': 'subway',
						'elementType': 'all',
						'stylers': {
							'visibility': 'off'
						}
					}, {
						'featureType': 'manmade',
						'elementType': 'all',
						'stylers': {
							'color': '#d1d1d1'
						}
					}, {
						'featureType': 'local',
						'elementType': 'all',
						'stylers': {
							'color': '#d1d1d1'
						}
					}, {
						'featureType': 'arterial',
						'elementType': 'labels',
						'stylers': {
							'visibility': 'off'
						}
					}, {
						'featureType': 'boundary',
						'elementType': 'all',
						'stylers': {
							'color': '#fefefe'
						}
					}, {
						'featureType': 'building',
						'elementType': 'all',
						'stylers': {
							'color': '#d1d1d1'
						}
					}, {
						'featureType': 'label',
						'elementType': 'labels.text.fill',
						'stylers': {
							'color': '#999999'
						}
					}]
				}
			},
			series: [{
				type: 'lines',
				coordinateSystem: 'bmap',
				polyline: true,
				data: null,
				silent: true,
				lineStyle: {
					normal: {
						color: '#c23531',
						color: 'rgb(200, 35, 45)',
						opacity: 0.2,
						width: 1
					}
				},
				progressiveThreshold: 500,
				progressive: 200
			}]
		};

		this.init = function (el, style, data) {
			this.single = echarts.init(this.getDom(el));
			this.setData(data);
			this.single.setOption(this.option);
		};

		this.setData = function (data) {
			// 数据处理
			this.option.series[0].data = [].concat.apply([], data.map(function (busLine, idx) {
				var prevPt;
				var points = [];
				for (var i = 0; i < busLine.length; i += 2) {
					var pt = [busLine[i], busLine[i + 1]];
					if (i > 0) {
						pt = [
							prevPt[0] + pt[0],
							prevPt[1] + pt[1]
						];
					}
					prevPt = pt;

					points.push([pt[0] / 1e4, pt[1] / 1e4]);
				}
				return {
					coords: points
				};
			}));

		/*	this.option.series[0].data = busLines;*/



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
