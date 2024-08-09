!
function(t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.POWERMODE = e() : t.POWERMODE = e()
} (this,
function() {
	return function(t) {
		function e(n) {
			if (o[n]) return o[n].exports;
			var r = o[n] = {
				exports: {},
				id: n,
				loaded: !1
			};
			return t[n].call(r.exports, r, r.exports, e),
			r.loaded = !0,
			r.exports
		}
		var o = {};
		return e.m = t,
		e.c = o,
		e.p = "",
		e(0)
	} ([function(t, e, o) {
		"use strict";
		function n(t, e) {
			return Math.random() * (e - t) + t
		}
		function r(t) {
			if (d.colorful) {
				var e = n(0, 360);
				return "hsla(" + n(e - 10, e + 10) + ", 100%, " + n(50, 80) + "%, 1)"
			}
			return window.getComputedStyle(t).color
		}
		function i() {
			var t, e = document.activeElement;
			if ("TEXTAREA" === e.tagName || "INPUT" === e.tagName && "text" === e.getAttribute("type")) {
				var n = o(1)(e, e.selectionStart);
				return t = e.getBoundingClientRect(),
				{
					x: n.left + t.left,
					y: n.top + t.top,
					color: r(e)
				}
			}
			var i = window.getSelection();
			if (i.rangeCount) {
				var a = i.getRangeAt(0),
				d = a.startContainer;
				return d.nodeType === document.TEXT_NODE && (d = d.parentNode),
				t = a.getBoundingClientRect(),
				{
					x: t.left,
					y: t.top,
					color: r(d)
				}
			}
			return {
				x: 0,
				y: 0,
				color: "transparent"
			}
		}
		function a(t, e, o) {
			return {
				x: t,
				y: e,
				alpha: 1,
				color: o,
				velocity: {
					x: -1 + 2 * Math.random(),
					y: -3.5 + 2 * Math.random()
				}
			}
		}
		function d() {
			for (var t = i(), e = 5 + Math.round(10 * Math.random()); e--;) p[f] = a(t.x, t.y, t.color),
			f = (f + 1) % 500;
			if (d.shake) {
				var o = 1 + 2 * Math.random(),
				n = o * (Math.random() > .5 ? -1 : 1),
				r = o * (Math.random() > .5 ? -1 : 1);
				document.body.style.marginLeft = n + "px",
				document.body.style.marginTop = r + "px",
				setTimeout(function() {
					document.body.style.marginLeft = "",
					document.body.style.marginTop = ""
				},
				75)
			}
		}
		function l() {
			requestAnimationFrame(l),
			u.clearRect(0, 0, c.width, c.height);
			for (var t = 0; t < p.length; ++t) {
				var e = p[t];
				e.alpha <= .1 || (e.velocity.y += .075, e.x += e.velocity.x, e.y += e.velocity.y, e.alpha *= .96, u.globalAlpha = e.alpha, u.fillStyle = e.color, u.fillRect(Math.round(e.x - 1.5), Math.round(e.y - 1.5), 3, 3))
			}
		}
		var c = document.createElement("canvas");
		c.width = window.innerWidth,
		c.height = window.innerHeight,
		c.style.cssText = "position:fixed;top:0;left:0;pointer-events:none;z-index:999999",
		window.addEventListener("resize",
		function() {
			c.width = window.innerWidth,
			c.height = window.innerHeight
		}),
		document.body.appendChild(c);
		var u = c.getContext("2d"),
		p = [],
		f = 0;
		d.shake = !0,
		d.colorful = !1,
		requestAnimationFrame(l),
		t.exports = d
	},
	function(t, e) { !
		function() {
			function e(t, e, r) {
				var i = r && r.debug || !1;
				if (i) {
					var a = document.querySelector("#input-textarea-caret-position-mirror-div");
					a && a.parentNode.removeChild(a)
				}
				var d = document.createElement("div");
				d.id = "input-textarea-caret-position-mirror-div",
				document.body.appendChild(d);
				var l = d.style,
				c = window.getComputedStyle ? getComputedStyle(t) : t.currentStyle;
				l.whiteSpace = "pre-wrap",
				"INPUT" !== t.nodeName && (l.wordWrap = "break-word"),
				l.position = "absolute",
				i || (l.visibility = "hidden"),
				o.forEach(function(t) {
					l[t] = c[t]
				}),
				n ? t.scrollHeight > parseInt(c.height) && (l.overflowY = "scroll") : l.overflow = "hidden",
				d.textContent = t.value.substring(0, e),
				"INPUT" === t.nodeName && (d.textContent = d.textContent.replace(/\s/g, "聽"));
				var u = document.createElement("span");
				u.textContent = t.value.substring(e) || ".",
				d.appendChild(u);
				var p = {
					top: u.offsetTop + parseInt(c.borderTopWidth),
					left: u.offsetLeft + parseInt(c.borderLeftWidth)
				};
				return i ? u.style.backgroundColor = "#aaa": document.body.removeChild(d),
				p
			}
			var o = ["direction", "boxSizing", "width", "height", "overflowX", "overflowY", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth", "borderStyle", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "fontStyle", "fontVariant", "fontWeight", "fontStretch", "fontSize", "fontSizeAdjust", "lineHeight", "fontFamily", "textAlign", "textTransform", "textIndent", "textDecoration", "letterSpacing", "wordSpacing", "tabSize", "MozTabSize"],
			n = null != window.mozInnerScreenX;
			"undefined" != typeof t && "undefined" != typeof t.exports ? t.exports = e: window.getCaretCoordinates = e
		} ()
	}])
}),
function() {
	POWERMODE.colorful = !0,
	POWERMODE.shake = !1,
	document.body.addEventListener("input", POWERMODE)
} ();