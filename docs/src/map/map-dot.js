/*
 * 地图
 *  描述: 散点
 */
;(function (global, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		global.agChart.map.dot = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.name = "map.dot";

		this.single = null;

		this.option = {
			title: {
				text: '',
				subtext: 'data from PM25.in',
				sublink: 'http://www.pm25.in',
				left: 'center'
			},
			tooltip: {
				trigger: 'item'
			},
			geo: {
				map: '',
				roam: true,   // 启用, 拖拽, 平移
				scaleLimit: {
					min: 0.7,   // 最小缩放比
					max: 2    // 最大缩放比
				},
				label: {
					normal: {
						textStyle: {
							color: '#fff',
						},
						show: false
					},
					emphasis: {
						textStyle: {
							color: '#fff'
						},
						show: true
					}
				},
				itemStyle: {
					normal: {
						areaColor: '#21b3e2',
						borderColor: '#0466b1'
					},
					emphasis: {
						areaColor: 'rgba(38,134,243,0.9)'
					}
				}
			},
			bmap: {
				center: [104.114129, 37.550339],
				zoom: 5,
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
			series: [
				{
					name: 'pm2.5',
					type: 'scatter',
					coordinateSystem: 'bmap',
					data: null,
					symbolSize: function (val) {
						return val[2] / 10;
					},
					label: {
						normal: {
							formatter: '{b}',
							position: 'right',
							show: false
						},
						emphasis: {
							show: true
						}
					},
					itemStyle: {
						normal: {
							color: 'purple'
						}
					}
				},
				{
					name: 'Top 5',
					type: 'effectScatter',
					coordinateSystem: 'bmap',
					data: null,
					symbolSize: function (val) {
						return val[2] / 10;
					},
					showEffectOn: 'render',
					rippleEffect: {
						brushType: 'stroke'
					},
					hoverAnimation: true,
					label: {
						normal: {
							formatter: '{b}',
							position: 'right',
							show: true
						}
					},
					itemStyle: {
						normal: {
							color: 'purple',
							shadowBlur: 10,
							shadowColor: '#333'
						}
					},
					zlevel: 1
				}
			]
		};

		this.init = function (el, style, data, geoName, geo) {
			echarts.registerMap(geoName, geo);
			this.single = echarts.init(this.getDom(el));
			this.setData(data);
			this.setGeo(geoName);
			this.single.setOption(this.option);
		};

		this.setGeo = function(name) {
			this.option.geo.map = name;
		};

		this.setData = function (data) {
			// 数据处理
			this.option.title.text = data.title;

			var geoCoordMap = data.geoCoordMap;
			var data = data.data;

			var convertData = function (data) {
				var res = [];
				for (var i = 0; i < data.length; i++) {
					var geoCoord = geoCoordMap[data[i].name];
					if (geoCoord) {
						res.push({
							name: data[i].name,
							value: geoCoord.concat(data[i].value)
						});
					}
				}

				return res;
			};


			this.option.series[0].data = convertData(data);
			this.option.series[1].data = convertData(data.sort(function (a, b) {
				return b.value - a.value;
			}).slice(0, 6));


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
