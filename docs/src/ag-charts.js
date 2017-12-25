/**
 * ag-charts基类
 */
;(function (gloabal, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		gloabal.agChart = fun();
	}
})(window, function (agChart) {
	'use strict';

	agChart = {
		// 散点图
		scatter: {},
		// 折线图
		line: {}
	};

	agChart.common = {
		init: function () {

		},
		resize: function () {
			this.resize();
		},
		getDom: function (el) {
			if (!el) return;
			if (typeof el === "string") {
				var dom = document.querySelector(el);
				if (!dom) {
					throw new Error("图表: " + this.name + " 图表的选择器名称" + el + "无效");
				}
				return dom;
			} else if (el instanceof HTMLElement) {
				return el;
			}
		}
	};

	return agChart;
});
