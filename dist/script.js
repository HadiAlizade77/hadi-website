! function() {
    "use strict";
    const t = new class {
        constructor() {
            this.activeObjects = [], this.maxY = window.innerHeight, this.width = window.innerWidth, this.canEmit = !1
        }
        init() {
            this.objects = {
                awards: document.querySelectorAll(".award"),
                works: document.querySelectorAll(".legacy__work")
            }
        }
        emit() {
            if (!1 !== this.canEmit) {
                const t = [...this.objects[this.canEmit]].filter((t => !this.activeObjects.includes(t))),
                    e = t[Math.floor(Math.random() * t.length)];
                if (e) {
                    e.classList.contains("award") && !e.classList.contains("is-loaded") && (e.setAttribute("src", e.getAttribute("data-src")), e.classList.add("is-loaded"));
                    const t = {
                        x: Math.random() * this.width,
                        y: .5 * -Math.max(e.offsetWidth, e.offsetHeight),
                        rotate: 90 - 180 * Math.random(),
                        scale: 1 - .5 * Math.random(),
                        acceleration: {
                            x: 0,
                            y: 0,
                            rotate: 0
                        },
                        velocity: {
                            x: 0,
                            y: 2,
                            rotate: .5 - 1 * Math.random()
                        },
                        isHit: !1
                    };
                    t.hitSize = Math.hypot(e.offsetWidth, e.offsetHeight) * t.scale * .5, e.movement = t, e.style.zIndex = Math.random() > .5 ? "4" : "2", this.activeObjects.push(e)
                }
            }
        }
        resizeHandler() {
            this.maxY = window.innerHeight + 2 * this.objects.works[0].offsetWidth, this.width = window.innerWidth
        }
        remove(t) {
            this.activeObjects.splice(this.activeObjects.indexOf(t), 1)
        }
        hitObject(t) {
            const e = t.target;
            if (e.movement && !e.movement.isHit) {
                const t = {
                    x: e.movement.x - window.mouse.x,
                    y: e.movement.y - window.mouse.y
                };
                e.movement.velocity.rotate = Math.min(Math.max(.1 * t.x, -6), 6), e.movement.velocity.x = e.movement.velocity.rotate, e.movement.velocity.y = -Math.max(.1 * window.mouse.speedY, 2) - .35 * e.movement.velocity.y, e.movement.acceleration.y *= 2, e.movement.isHit = !0
            }
        }
        tick(t) {
            this.activeObjects.forEach((t => {
                const e = t.movement;
                if (e.acceleration.y += .0025, e.velocity.y += e.acceleration.y, e.velocity.rotate *= .99, e.x += e.velocity.x, e.y += e.velocity.y, e.rotate += e.velocity.rotate, t.style.transform = "translate3d(" + e.x + "px, " + e.y + "px, 0) rotate(" + e.rotate + "deg) scale(" + e.scale + ")", !e.isHit) {
                    const t = {
                        x: e.x - window.mouse.x,
                        y: e.y - window.mouse.y
                    };
                    t.total = Math.hypot(t.x, t.y), t.total < e.hitSize && (e.velocity.rotate = Math.min(Math.max(.1 * t.x, -6), 6), e.velocity.x = e.velocity.rotate, e.velocity.y = -Math.max(.1 * window.mouse.speedY, 2) - .35 * e.velocity.y, e.acceleration.y *= 2, e.isHit = !0)
                }
                e.y > this.maxY && this.remove(t)
            })), Math.random() < .08 && this.emit()
        }
    };
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function i(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
    }
    var n, r = {
        exports: {}
    };
    /*!
     * matter-js 0.17.1 by @liabru
     * http://brm.io/matter-js/
     * License MIT
     * 
     * The MIT License (MIT)
     * 
     * Copyright (c) Liam Brummitt and contributors.
     * 
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     * 
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     * 
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    n = function() {
        return function(t) {
            var e = {};

            function i(n) {
                if (e[n]) return e[n].exports;
                var r = e[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
            }
            return i.m = t, i.c = e, i.d = function(t, e, n) {
                i.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: n
                })
            }, i.r = function(t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }, i.t = function(t, e) {
                if (1 & e && (t = i(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if (i.r(n), Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t)
                    for (var r in t) i.d(n, r, function(e) {
                        return t[e]
                    }.bind(null, r));
                return n
            }, i.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t.default
                } : function() {
                    return t
                };
                return i.d(e, "a", e), e
            }, i.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, i.p = "", i(i.s = 22)
        }([function(t, i) {
            var n = {};
            t.exports = n,
                function() {
                    n._nextId = 0, n._seed = 0, n._nowStartTime = +new Date, n._warnedOnce = {}, n._decomp = null, n.extend = function(t, e) {
                        var i, r;
                        "boolean" == typeof e ? (i = 2, r = e) : (i = 1, r = !0);
                        for (var s = i; s < arguments.length; s++) {
                            var o = arguments[s];
                            if (o)
                                for (var a in o) r && o[a] && o[a].constructor === Object ? t[a] && t[a].constructor !== Object ? t[a] = o[a] : (t[a] = t[a] || {}, n.extend(t[a], r, o[a])) : t[a] = o[a]
                        }
                        return t
                    }, n.clone = function(t, e) {
                        return n.extend({}, e, t)
                    }, n.keys = function(t) {
                        if (Object.keys) return Object.keys(t);
                        var e = [];
                        for (var i in t) e.push(i);
                        return e
                    }, n.values = function(t) {
                        var e = [];
                        if (Object.keys) {
                            for (var i = Object.keys(t), n = 0; n < i.length; n++) e.push(t[i[n]]);
                            return e
                        }
                        for (var r in t) e.push(t[r]);
                        return e
                    }, n.get = function(t, e, i, n) {
                        e = e.split(".").slice(i, n);
                        for (var r = 0; r < e.length; r += 1) t = t[e[r]];
                        return t
                    }, n.set = function(t, e, i, r, s) {
                        var o = e.split(".").slice(r, s);
                        return n.get(t, e, 0, -1)[o[o.length - 1]] = i, i
                    }, n.shuffle = function(t) {
                        for (var e = t.length - 1; e > 0; e--) {
                            var i = Math.floor(n.random() * (e + 1)),
                                r = t[e];
                            t[e] = t[i], t[i] = r
                        }
                        return t
                    }, n.choose = function(t) {
                        return t[Math.floor(n.random() * t.length)]
                    }, n.isElement = function(t) {
                        return "undefined" != typeof HTMLElement ? t instanceof HTMLElement : !!(t && t.nodeType && t.nodeName)
                    }, n.isArray = function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    }, n.isFunction = function(t) {
                        return "function" == typeof t
                    }, n.isPlainObject = function(t) {
                        return "object" == typeof t && t.constructor === Object
                    }, n.isString = function(t) {
                        return "[object String]" === toString.call(t)
                    }, n.clamp = function(t, e, i) {
                        return t < e ? e : t > i ? i : t
                    }, n.sign = function(t) {
                        return t < 0 ? -1 : 1
                    }, n.now = function() {
                        if ("undefined" != typeof window && window.performance) {
                            if (window.performance.now) return window.performance.now();
                            if (window.performance.webkitNow) return window.performance.webkitNow()
                        }
                        return Date.now ? Date.now() : new Date - n._nowStartTime
                    }, n.random = function(e, i) {
                        return i = void 0 !== i ? i : 1, (e = void 0 !== e ? e : 0) + t() * (i - e)
                    };
                    var t = function() {
                        return n._seed = (9301 * n._seed + 49297) % 233280, n._seed / 233280
                    };
                    n.colorToNumber = function(t) {
                        return 3 == (t = t.replace("#", "")).length && (t = t.charAt(0) + t.charAt(0) + t.charAt(1) + t.charAt(1) + t.charAt(2) + t.charAt(2)), parseInt(t, 16)
                    }, n.logLevel = 1, n.log = function() {
                        console && n.logLevel > 0 && n.logLevel <= 3 && console.log.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                    }, n.info = function() {
                        console && n.logLevel > 0 && n.logLevel <= 2 && console.info.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                    }, n.warn = function() {
                        console && n.logLevel > 0 && n.logLevel <= 3 && console.warn.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                    }, n.warnOnce = function() {
                        var t = Array.prototype.slice.call(arguments).join(" ");
                        n._warnedOnce[t] || (n.warn(t), n._warnedOnce[t] = !0)
                    }, n.deprecated = function(t, e, i) {
                        t[e] = n.chain((function() {
                            n.warnOnce("🔅 deprecated 🔅", i)
                        }), t[e])
                    }, n.nextId = function() {
                        return n._nextId++
                    }, n.indexOf = function(t, e) {
                        if (t.indexOf) return t.indexOf(e);
                        for (var i = 0; i < t.length; i++)
                            if (t[i] === e) return i;
                        return -1
                    }, n.map = function(t, e) {
                        if (t.map) return t.map(e);
                        for (var i = [], n = 0; n < t.length; n += 1) i.push(e(t[n]));
                        return i
                    }, n.topologicalSort = function(t) {
                        var e = [],
                            i = [],
                            r = [];
                        for (var s in t) i[s] || r[s] || n._topologicalSort(s, i, r, t, e);
                        return e
                    }, n._topologicalSort = function(t, e, i, r, s) {
                        var o = r[t] || [];
                        i[t] = !0;
                        for (var a = 0; a < o.length; a += 1) {
                            var l = o[a];
                            i[l] || e[l] || n._topologicalSort(l, e, i, r, s)
                        }
                        i[t] = !1, e[t] = !0, s.push(t)
                    }, n.chain = function() {
                        for (var t = [], e = 0; e < arguments.length; e += 1) {
                            var i = arguments[e];
                            i._chained ? t.push.apply(t, i._chained) : t.push(i)
                        }
                        var n = function() {
                            for (var e, i = new Array(arguments.length), n = 0, r = arguments.length; n < r; n++) i[n] = arguments[n];
                            for (n = 0; n < t.length; n += 1) {
                                var s = t[n].apply(e, i);
                                void 0 !== s && (e = s)
                            }
                            return e
                        };
                        return n._chained = t, n
                    }, n.chainPathBefore = function(t, e, i) {
                        return n.set(t, e, n.chain(i, n.get(t, e)))
                    }, n.chainPathAfter = function(t, e, i) {
                        return n.set(t, e, n.chain(n.get(t, e), i))
                    }, n.setDecomp = function(t) {
                        n._decomp = t
                    }, n.getDecomp = function() {
                        var t = n._decomp;
                        try {
                            t || "undefined" == typeof window || (t = window.decomp), t || void 0 === e || (t = e.decomp)
                        } catch (e) {
                            t = null
                        }
                        return t
                    }
                }()
        }, function(t, e) {
            var i = {};
            t.exports = i, i.create = function(t) {
                var e = {
                    min: {
                        x: 0,
                        y: 0
                    },
                    max: {
                        x: 0,
                        y: 0
                    }
                };
                return t && i.update(e, t), e
            }, i.update = function(t, e, i) {
                t.min.x = 1 / 0, t.max.x = -1 / 0, t.min.y = 1 / 0, t.max.y = -1 / 0;
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.x > t.max.x && (t.max.x = r.x), r.x < t.min.x && (t.min.x = r.x), r.y > t.max.y && (t.max.y = r.y), r.y < t.min.y && (t.min.y = r.y)
                }
                i && (i.x > 0 ? t.max.x += i.x : t.min.x += i.x, i.y > 0 ? t.max.y += i.y : t.min.y += i.y)
            }, i.contains = function(t, e) {
                return e.x >= t.min.x && e.x <= t.max.x && e.y >= t.min.y && e.y <= t.max.y
            }, i.overlaps = function(t, e) {
                return t.min.x <= e.max.x && t.max.x >= e.min.x && t.max.y >= e.min.y && t.min.y <= e.max.y
            }, i.translate = function(t, e) {
                t.min.x += e.x, t.max.x += e.x, t.min.y += e.y, t.max.y += e.y
            }, i.shift = function(t, e) {
                var i = t.max.x - t.min.x,
                    n = t.max.y - t.min.y;
                t.min.x = e.x, t.max.x = e.x + i, t.min.y = e.y, t.max.y = e.y + n
            }
        }, function(t, e) {
            var i = {};
            t.exports = i, i.create = function(t, e) {
                return {
                    x: t || 0,
                    y: e || 0
                }
            }, i.clone = function(t) {
                return {
                    x: t.x,
                    y: t.y
                }
            }, i.magnitude = function(t) {
                return Math.sqrt(t.x * t.x + t.y * t.y)
            }, i.magnitudeSquared = function(t) {
                return t.x * t.x + t.y * t.y
            }, i.rotate = function(t, e, i) {
                var n = Math.cos(e),
                    r = Math.sin(e);
                i || (i = {});
                var s = t.x * n - t.y * r;
                return i.y = t.x * r + t.y * n, i.x = s, i
            }, i.rotateAbout = function(t, e, i, n) {
                var r = Math.cos(e),
                    s = Math.sin(e);
                n || (n = {});
                var o = i.x + ((t.x - i.x) * r - (t.y - i.y) * s);
                return n.y = i.y + ((t.x - i.x) * s + (t.y - i.y) * r), n.x = o, n
            }, i.normalise = function(t) {
                var e = i.magnitude(t);
                return 0 === e ? {
                    x: 0,
                    y: 0
                } : {
                    x: t.x / e,
                    y: t.y / e
                }
            }, i.dot = function(t, e) {
                return t.x * e.x + t.y * e.y
            }, i.cross = function(t, e) {
                return t.x * e.y - t.y * e.x
            }, i.cross3 = function(t, e, i) {
                return (e.x - t.x) * (i.y - t.y) - (e.y - t.y) * (i.x - t.x)
            }, i.add = function(t, e, i) {
                return i || (i = {}), i.x = t.x + e.x, i.y = t.y + e.y, i
            }, i.sub = function(t, e, i) {
                return i || (i = {}), i.x = t.x - e.x, i.y = t.y - e.y, i
            }, i.mult = function(t, e) {
                return {
                    x: t.x * e,
                    y: t.y * e
                }
            }, i.div = function(t, e) {
                return {
                    x: t.x / e,
                    y: t.y / e
                }
            }, i.perp = function(t, e) {
                return {
                    x: (e = !0 === e ? -1 : 1) * -t.y,
                    y: e * t.x
                }
            }, i.neg = function(t) {
                return {
                    x: -t.x,
                    y: -t.y
                }
            }, i.angle = function(t, e) {
                return Math.atan2(e.y - t.y, e.x - t.x)
            }, i._temp = [i.create(), i.create(), i.create(), i.create(), i.create(), i.create()]
        }, function(t, e, i) {
            var n = {};
            t.exports = n;
            var r = i(2),
                s = i(0);
            n.create = function(t, e) {
                for (var i = [], n = 0; n < t.length; n++) {
                    var r = t[n],
                        s = {
                            x: r.x,
                            y: r.y,
                            index: n,
                            body: e,
                            isInternal: !1
                        };
                    i.push(s)
                }
                return i
            }, n.fromPath = function(t, e) {
                var i = [];
                return t.replace(/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi, (function(t, e, n) {
                    i.push({
                        x: parseFloat(e),
                        y: parseFloat(n)
                    })
                })), n.create(i, e)
            }, n.centre = function(t) {
                for (var e, i, s, o = n.area(t, !0), a = {
                        x: 0,
                        y: 0
                    }, l = 0; l < t.length; l++) s = (l + 1) % t.length, e = r.cross(t[l], t[s]), i = r.mult(r.add(t[l], t[s]), e), a = r.add(a, i);
                return r.div(a, 6 * o)
            }, n.mean = function(t) {
                for (var e = {
                        x: 0,
                        y: 0
                    }, i = 0; i < t.length; i++) e.x += t[i].x, e.y += t[i].y;
                return r.div(e, t.length)
            }, n.area = function(t, e) {
                for (var i = 0, n = t.length - 1, r = 0; r < t.length; r++) i += (t[n].x - t[r].x) * (t[n].y + t[r].y), n = r;
                return e ? i / 2 : Math.abs(i) / 2
            }, n.inertia = function(t, e) {
                for (var i, n, s = 0, o = 0, a = t, l = 0; l < a.length; l++) n = (l + 1) % a.length, s += (i = Math.abs(r.cross(a[n], a[l]))) * (r.dot(a[n], a[n]) + r.dot(a[n], a[l]) + r.dot(a[l], a[l])), o += i;
                return e / 6 * (s / o)
            }, n.translate = function(t, e, i) {
                var n;
                if (i)
                    for (n = 0; n < t.length; n++) t[n].x += e.x * i, t[n].y += e.y * i;
                else
                    for (n = 0; n < t.length; n++) t[n].x += e.x, t[n].y += e.y;
                return t
            }, n.rotate = function(t, e, i) {
                if (0 !== e) {
                    for (var n = Math.cos(e), r = Math.sin(e), s = 0; s < t.length; s++) {
                        var o = t[s],
                            a = o.x - i.x,
                            l = o.y - i.y;
                        o.x = i.x + (a * n - l * r), o.y = i.y + (a * r + l * n)
                    }
                    return t
                }
            }, n.contains = function(t, e) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i],
                        r = t[(i + 1) % t.length];
                    if ((e.x - n.x) * (r.y - n.y) + (e.y - n.y) * (n.x - r.x) > 0) return !1
                }
                return !0
            }, n.scale = function(t, e, i, s) {
                if (1 === e && 1 === i) return t;
                var o, a;
                s = s || n.centre(t);
                for (var l = 0; l < t.length; l++) o = t[l], a = r.sub(o, s), t[l].x = s.x + a.x * e, t[l].y = s.y + a.y * i;
                return t
            }, n.chamfer = function(t, e, i, n, o) {
                e = "number" == typeof e ? [e] : e || [8], i = void 0 !== i ? i : -1, n = n || 2, o = o || 14;
                for (var a = [], l = 0; l < t.length; l++) {
                    var c = t[l - 1 >= 0 ? l - 1 : t.length - 1],
                        u = t[l],
                        d = t[(l + 1) % t.length],
                        h = e[l < e.length ? l : e.length - 1];
                    if (0 !== h) {
                        var p = r.normalise({
                                x: u.y - c.y,
                                y: c.x - u.x
                            }),
                            f = r.normalise({
                                x: d.y - u.y,
                                y: u.x - d.x
                            }),
                            m = Math.sqrt(2 * Math.pow(h, 2)),
                            g = r.mult(s.clone(p), h),
                            v = r.normalise(r.mult(r.add(p, f), .5)),
                            y = r.sub(u, r.mult(v, m)),
                            x = i; - 1 === i && (x = 1.75 * Math.pow(h, .32)), (x = s.clamp(x, n, o)) % 2 == 1 && (x += 1);
                        for (var b = Math.acos(r.dot(p, f)) / x, _ = 0; _ < x; _++) a.push(r.add(r.rotate(g, b * _), y))
                    } else a.push(u)
                }
                return a
            }, n.clockwiseSort = function(t) {
                var e = n.mean(t);
                return t.sort((function(t, i) {
                    return r.angle(e, t) - r.angle(e, i)
                })), t
            }, n.isConvex = function(t) {
                var e, i, n, r, s = 0,
                    o = t.length;
                if (o < 3) return null;
                for (e = 0; e < o; e++)
                    if (n = (e + 2) % o, r = (t[i = (e + 1) % o].x - t[e].x) * (t[n].y - t[i].y), (r -= (t[i].y - t[e].y) * (t[n].x - t[i].x)) < 0 ? s |= 1 : r > 0 && (s |= 2), 3 === s) return !1;
                return 0 !== s || null
            }, n.hull = function(t) {
                var e, i, n = [],
                    s = [];
                for ((t = t.slice(0)).sort((function(t, e) {
                        var i = t.x - e.x;
                        return 0 !== i ? i : t.y - e.y
                    })), i = 0; i < t.length; i += 1) {
                    for (e = t[i]; s.length >= 2 && r.cross3(s[s.length - 2], s[s.length - 1], e) <= 0;) s.pop();
                    s.push(e)
                }
                for (i = t.length - 1; i >= 0; i -= 1) {
                    for (e = t[i]; n.length >= 2 && r.cross3(n[n.length - 2], n[n.length - 1], e) <= 0;) n.pop();
                    n.push(e)
                }
                return n.pop(), s.pop(), n.concat(s)
            }
        }, function(t, e, i) {
            var n = {};
            t.exports = n;
            var r = i(0);
            n.on = function(t, e, i) {
                for (var n, r = e.split(" "), s = 0; s < r.length; s++) n = r[s], t.events = t.events || {}, t.events[n] = t.events[n] || [], t.events[n].push(i);
                return i
            }, n.off = function(t, e, i) {
                if (e) {
                    "function" == typeof e && (i = e, e = r.keys(t.events).join(" "));
                    for (var n = e.split(" "), s = 0; s < n.length; s++) {
                        var o = t.events[n[s]],
                            a = [];
                        if (i && o)
                            for (var l = 0; l < o.length; l++) o[l] !== i && a.push(o[l]);
                        t.events[n[s]] = a
                    }
                } else t.events = {}
            }, n.trigger = function(t, e, i) {
                var n, s, o, a, l = t.events;
                if (l && r.keys(l).length > 0) {
                    i || (i = {}), n = e.split(" ");
                    for (var c = 0; c < n.length; c++)
                        if (o = l[s = n[c]]) {
                            (a = r.clone(i, !1)).name = s, a.source = t;
                            for (var u = 0; u < o.length; u++) o[u].apply(t, [a])
                        }
                }
            }
        }, function(t, e, i) {
            var n = {};
            t.exports = n;
            var r = i(4),
                s = i(0),
                o = i(1),
                a = i(6);
            n.create = function(t) {
                return s.extend({
                    id: s.nextId(),
                    type: "composite",
                    parent: null,
                    isModified: !1,
                    bodies: [],
                    constraints: [],
                    composites: [],
                    label: "Composite",
                    plugin: {}
                }, t)
            }, n.setModified = function(t, e, i, r) {
                if (t.isModified = e, i && t.parent && n.setModified(t.parent, e, i, r), r)
                    for (var s = 0; s < t.composites.length; s++) {
                        var o = t.composites[s];
                        n.setModified(o, e, i, r)
                    }
            }, n.add = function(t, e) {
                var i = [].concat(e);
                r.trigger(t, "beforeAdd", {
                    object: e
                });
                for (var o = 0; o < i.length; o++) {
                    var a = i[o];
                    switch (a.type) {
                        case "body":
                            if (a.parent !== a) {
                                s.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");
                                break
                            }
                            n.addBody(t, a);
                            break;
                        case "constraint":
                            n.addConstraint(t, a);
                            break;
                        case "composite":
                            n.addComposite(t, a);
                            break;
                        case "mouseConstraint":
                            n.addConstraint(t, a.constraint)
                    }
                }
                return r.trigger(t, "afterAdd", {
                    object: e
                }), t
            }, n.remove = function(t, e, i) {
                var s = [].concat(e);
                r.trigger(t, "beforeRemove", {
                    object: e
                });
                for (var o = 0; o < s.length; o++) {
                    var a = s[o];
                    switch (a.type) {
                        case "body":
                            n.removeBody(t, a, i);
                            break;
                        case "constraint":
                            n.removeConstraint(t, a, i);
                            break;
                        case "composite":
                            n.removeComposite(t, a, i);
                            break;
                        case "mouseConstraint":
                            n.removeConstraint(t, a.constraint)
                    }
                }
                return r.trigger(t, "afterRemove", {
                    object: e
                }), t
            }, n.addComposite = function(t, e) {
                return t.composites.push(e), e.parent = t, n.setModified(t, !0, !0, !1), t
            }, n.removeComposite = function(t, e, i) {
                var r = s.indexOf(t.composites, e);
                if (-1 !== r && (n.removeCompositeAt(t, r), n.setModified(t, !0, !0, !1)), i)
                    for (var o = 0; o < t.composites.length; o++) n.removeComposite(t.composites[o], e, !0);
                return t
            }, n.removeCompositeAt = function(t, e) {
                return t.composites.splice(e, 1), n.setModified(t, !0, !0, !1), t
            }, n.addBody = function(t, e) {
                return t.bodies.push(e), n.setModified(t, !0, !0, !1), t
            }, n.removeBody = function(t, e, i) {
                var r = s.indexOf(t.bodies, e);
                if (-1 !== r && (n.removeBodyAt(t, r), n.setModified(t, !0, !0, !1)), i)
                    for (var o = 0; o < t.composites.length; o++) n.removeBody(t.composites[o], e, !0);
                return t
            }, n.removeBodyAt = function(t, e) {
                return t.bodies.splice(e, 1), n.setModified(t, !0, !0, !1), t
            }, n.addConstraint = function(t, e) {
                return t.constraints.push(e), n.setModified(t, !0, !0, !1), t
            }, n.removeConstraint = function(t, e, i) {
                var r = s.indexOf(t.constraints, e);
                if (-1 !== r && n.removeConstraintAt(t, r), i)
                    for (var o = 0; o < t.composites.length; o++) n.removeConstraint(t.composites[o], e, !0);
                return t
            }, n.removeConstraintAt = function(t, e) {
                return t.constraints.splice(e, 1), n.setModified(t, !0, !0, !1), t
            }, n.clear = function(t, e, i) {
                if (i)
                    for (var r = 0; r < t.composites.length; r++) n.clear(t.composites[r], e, !0);
                return e ? t.bodies = t.bodies.filter((function(t) {
                    return t.isStatic
                })) : t.bodies.length = 0, t.constraints.length = 0, t.composites.length = 0, n.setModified(t, !0, !0, !1), t
            }, n.allBodies = function(t) {
                for (var e = [].concat(t.bodies), i = 0; i < t.composites.length; i++) e = e.concat(n.allBodies(t.composites[i]));
                return e
            }, n.allConstraints = function(t) {
                for (var e = [].concat(t.constraints), i = 0; i < t.composites.length; i++) e = e.concat(n.allConstraints(t.composites[i]));
                return e
            }, n.allComposites = function(t) {
                for (var e = [].concat(t.composites), i = 0; i < t.composites.length; i++) e = e.concat(n.allComposites(t.composites[i]));
                return e
            }, n.get = function(t, e, i) {
                var r, s;
                switch (i) {
                    case "body":
                        r = n.allBodies(t);
                        break;
                    case "constraint":
                        r = n.allConstraints(t);
                        break;
                    case "composite":
                        r = n.allComposites(t).concat(t)
                }
                return r ? 0 === (s = r.filter((function(t) {
                    return t.id.toString() === e.toString()
                }))).length ? null : s[0] : null
            }, n.move = function(t, e, i) {
                return n.remove(t, e), n.add(i, e), t
            }, n.rebase = function(t) {
                for (var e = n.allBodies(t).concat(n.allConstraints(t)).concat(n.allComposites(t)), i = 0; i < e.length; i++) e[i].id = s.nextId();
                return n.setModified(t, !0, !0, !1), t
            }, n.translate = function(t, e, i) {
                for (var r = i ? n.allBodies(t) : t.bodies, s = 0; s < r.length; s++) a.translate(r[s], e);
                return n.setModified(t, !0, !0, !1), t
            }, n.rotate = function(t, e, i, r) {
                for (var s = Math.cos(e), o = Math.sin(e), l = r ? n.allBodies(t) : t.bodies, c = 0; c < l.length; c++) {
                    var u = l[c],
                        d = u.position.x - i.x,
                        h = u.position.y - i.y;
                    a.setPosition(u, {
                        x: i.x + (d * s - h * o),
                        y: i.y + (d * o + h * s)
                    }), a.rotate(u, e)
                }
                return n.setModified(t, !0, !0, !1), t
            }, n.scale = function(t, e, i, r, s) {
                for (var o = s ? n.allBodies(t) : t.bodies, l = 0; l < o.length; l++) {
                    var c = o[l],
                        u = c.position.x - r.x,
                        d = c.position.y - r.y;
                    a.setPosition(c, {
                        x: r.x + u * e,
                        y: r.y + d * i
                    }), a.scale(c, e, i)
                }
                return n.setModified(t, !0, !0, !1), t
            }, n.bounds = function(t) {
                for (var e = n.allBodies(t), i = [], r = 0; r < e.length; r += 1) {
                    var s = e[r];
                    i.push(s.bounds.min, s.bounds.max)
                }
                return o.create(i)
            }
        }, function(t, e, i) {
            var n = {};
            t.exports = n;
            var r = i(3),
                s = i(2),
                o = i(7);
            i(16);
            var a = i(0),
                l = i(1),
                c = i(10);
            ! function() {
                n._inertiaScale = 4, n._nextCollidingGroupId = 1, n._nextNonCollidingGroupId = -1, n._nextCategory = 1, n.create = function(e) {
                    var i = {
                            id: a.nextId(),
                            type: "body",
                            label: "Body",
                            parts: [],
                            plugin: {},
                            angle: 0,
                            vertices: r.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                            position: {
                                x: 0,
                                y: 0
                            },
                            force: {
                                x: 0,
                                y: 0
                            },
                            torque: 0,
                            positionImpulse: {
                                x: 0,
                                y: 0
                            },
                            constraintImpulse: {
                                x: 0,
                                y: 0,
                                angle: 0
                            },
                            totalContacts: 0,
                            speed: 0,
                            angularSpeed: 0,
                            velocity: {
                                x: 0,
                                y: 0
                            },
                            angularVelocity: 0,
                            isSensor: !1,
                            isStatic: !1,
                            isSleeping: !1,
                            motion: 0,
                            sleepThreshold: 60,
                            density: .001,
                            restitution: 0,
                            friction: .1,
                            frictionStatic: .5,
                            frictionAir: .01,
                            collisionFilter: {
                                category: 1,
                                mask: 4294967295,
                                group: 0
                            },
                            slop: .05,
                            timeScale: 1,
                            render: {
                                visible: !0,
                                opacity: 1,
                                strokeStyle: null,
                                fillStyle: null,
                                lineWidth: null,
                                sprite: {
                                    xScale: 1,
                                    yScale: 1,
                                    xOffset: 0,
                                    yOffset: 0
                                }
                            },
                            events: null,
                            bounds: null,
                            chamfer: null,
                            circleRadius: 0,
                            positionPrev: null,
                            anglePrev: 0,
                            parent: null,
                            axes: null,
                            area: 0,
                            mass: 0,
                            inertia: 0,
                            _original: null
                        },
                        n = a.extend(i, e);
                    return t(n, e), n
                }, n.nextGroup = function(t) {
                    return t ? n._nextNonCollidingGroupId-- : n._nextCollidingGroupId++
                }, n.nextCategory = function() {
                    return n._nextCategory = n._nextCategory << 1, n._nextCategory
                };
                var t = function(t, e) {
                    e = e || {}, n.set(t, {
                        bounds: t.bounds || l.create(t.vertices),
                        positionPrev: t.positionPrev || s.clone(t.position),
                        anglePrev: t.anglePrev || t.angle,
                        vertices: t.vertices,
                        parts: t.parts || [t],
                        isStatic: t.isStatic,
                        isSleeping: t.isSleeping,
                        parent: t.parent || t
                    }), r.rotate(t.vertices, t.angle, t.position), c.rotate(t.axes, t.angle), l.update(t.bounds, t.vertices, t.velocity), n.set(t, {
                        axes: e.axes || t.axes,
                        area: e.area || t.area,
                        mass: e.mass || t.mass,
                        inertia: e.inertia || t.inertia
                    });
                    var i = t.isStatic ? "#14151f" : a.choose(["#f19648", "#f5d259", "#f55a3c", "#063e7b", "#ececd1"]),
                        o = t.isStatic ? "#555" : "#ccc",
                        u = t.isStatic && null === t.render.fillStyle ? 1 : 0;
                    t.render.fillStyle = t.render.fillStyle || i, t.render.strokeStyle = t.render.strokeStyle || o, t.render.lineWidth = t.render.lineWidth || u, t.render.sprite.xOffset += -(t.bounds.min.x - t.position.x) / (t.bounds.max.x - t.bounds.min.x), t.render.sprite.yOffset += -(t.bounds.min.y - t.position.y) / (t.bounds.max.y - t.bounds.min.y)
                };
                n.set = function(t, e, i) {
                    var r;
                    for (r in "string" == typeof e && (r = e, (e = {})[r] = i), e)
                        if (Object.prototype.hasOwnProperty.call(e, r)) switch (i = e[r], r) {
                            case "isStatic":
                                n.setStatic(t, i);
                                break;
                            case "isSleeping":
                                o.set(t, i);
                                break;
                            case "mass":
                                n.setMass(t, i);
                                break;
                            case "density":
                                n.setDensity(t, i);
                                break;
                            case "inertia":
                                n.setInertia(t, i);
                                break;
                            case "vertices":
                                n.setVertices(t, i);
                                break;
                            case "position":
                                n.setPosition(t, i);
                                break;
                            case "angle":
                                n.setAngle(t, i);
                                break;
                            case "velocity":
                                n.setVelocity(t, i);
                                break;
                            case "angularVelocity":
                                n.setAngularVelocity(t, i);
                                break;
                            case "parts":
                                n.setParts(t, i);
                                break;
                            case "centre":
                                n.setCentre(t, i);
                                break;
                            default:
                                t[r] = i
                        }
                }, n.setStatic = function(t, e) {
                    for (var i = 0; i < t.parts.length; i++) {
                        var n = t.parts[i];
                        n.isStatic = e, e ? (n._original = {
                            restitution: n.restitution,
                            friction: n.friction,
                            mass: n.mass,
                            inertia: n.inertia,
                            density: n.density,
                            inverseMass: n.inverseMass,
                            inverseInertia: n.inverseInertia
                        }, n.restitution = 0, n.friction = 1, n.mass = n.inertia = n.density = 1 / 0, n.inverseMass = n.inverseInertia = 0, n.positionPrev.x = n.position.x, n.positionPrev.y = n.position.y, n.anglePrev = n.angle, n.angularVelocity = 0, n.speed = 0, n.angularSpeed = 0, n.motion = 0) : n._original && (n.restitution = n._original.restitution, n.friction = n._original.friction, n.mass = n._original.mass, n.inertia = n._original.inertia, n.density = n._original.density, n.inverseMass = n._original.inverseMass, n.inverseInertia = n._original.inverseInertia, n._original = null)
                    }
                }, n.setMass = function(t, e) {
                    var i = t.inertia / (t.mass / 6);
                    t.inertia = i * (e / 6), t.inverseInertia = 1 / t.inertia, t.mass = e, t.inverseMass = 1 / t.mass, t.density = t.mass / t.area
                }, n.setDensity = function(t, e) {
                    n.setMass(t, e * t.area), t.density = e
                }, n.setInertia = function(t, e) {
                    t.inertia = e, t.inverseInertia = 1 / t.inertia
                }, n.setVertices = function(t, e) {
                    e[0].body === t ? t.vertices = e : t.vertices = r.create(e, t), t.axes = c.fromVertices(t.vertices), t.area = r.area(t.vertices), n.setMass(t, t.density * t.area);
                    var i = r.centre(t.vertices);
                    r.translate(t.vertices, i, -1), n.setInertia(t, n._inertiaScale * r.inertia(t.vertices, t.mass)), r.translate(t.vertices, t.position), l.update(t.bounds, t.vertices, t.velocity)
                }, n.setParts = function(t, e, i) {
                    var s;
                    for (e = e.slice(0), t.parts.length = 0, t.parts.push(t), t.parent = t, s = 0; s < e.length; s++) {
                        var o = e[s];
                        o !== t && (o.parent = t, t.parts.push(o))
                    }
                    if (1 !== t.parts.length) {
                        if (i = void 0 === i || i) {
                            var a = [];
                            for (s = 0; s < e.length; s++) a = a.concat(e[s].vertices);
                            r.clockwiseSort(a);
                            var l = r.hull(a),
                                c = r.centre(l);
                            n.setVertices(t, l), r.translate(t.vertices, c)
                        }
                        var u = n._totalProperties(t);
                        t.area = u.area, t.parent = t, t.position.x = u.centre.x, t.position.y = u.centre.y, t.positionPrev.x = u.centre.x, t.positionPrev.y = u.centre.y, n.setMass(t, u.mass), n.setInertia(t, u.inertia), n.setPosition(t, u.centre)
                    }
                }, n.setCentre = function(t, e, i) {
                    i ? (t.positionPrev.x += e.x, t.positionPrev.y += e.y, t.position.x += e.x, t.position.y += e.y) : (t.positionPrev.x = e.x - (t.position.x - t.positionPrev.x), t.positionPrev.y = e.y - (t.position.y - t.positionPrev.y), t.position.x = e.x, t.position.y = e.y)
                }, n.setPosition = function(t, e) {
                    var i = s.sub(e, t.position);
                    t.positionPrev.x += i.x, t.positionPrev.y += i.y;
                    for (var n = 0; n < t.parts.length; n++) {
                        var o = t.parts[n];
                        o.position.x += i.x, o.position.y += i.y, r.translate(o.vertices, i), l.update(o.bounds, o.vertices, t.velocity)
                    }
                }, n.setAngle = function(t, e) {
                    var i = e - t.angle;
                    t.anglePrev += i;
                    for (var n = 0; n < t.parts.length; n++) {
                        var o = t.parts[n];
                        o.angle += i, r.rotate(o.vertices, i, t.position), c.rotate(o.axes, i), l.update(o.bounds, o.vertices, t.velocity), n > 0 && s.rotateAbout(o.position, i, t.position, o.position)
                    }
                }, n.setVelocity = function(t, e) {
                    t.positionPrev.x = t.position.x - e.x, t.positionPrev.y = t.position.y - e.y, t.velocity.x = e.x, t.velocity.y = e.y, t.speed = s.magnitude(t.velocity)
                }, n.setAngularVelocity = function(t, e) {
                    t.anglePrev = t.angle - e, t.angularVelocity = e, t.angularSpeed = Math.abs(t.angularVelocity)
                }, n.translate = function(t, e) {
                    n.setPosition(t, s.add(t.position, e))
                }, n.rotate = function(t, e, i) {
                    if (i) {
                        var r = Math.cos(e),
                            s = Math.sin(e),
                            o = t.position.x - i.x,
                            a = t.position.y - i.y;
                        n.setPosition(t, {
                            x: i.x + (o * r - a * s),
                            y: i.y + (o * s + a * r)
                        }), n.setAngle(t, t.angle + e)
                    } else n.setAngle(t, t.angle + e)
                }, n.scale = function(t, e, i, s) {
                    var o = 0,
                        a = 0;
                    s = s || t.position;
                    for (var u = 0; u < t.parts.length; u++) {
                        var d = t.parts[u];
                        r.scale(d.vertices, e, i, s), d.axes = c.fromVertices(d.vertices), d.area = r.area(d.vertices), n.setMass(d, t.density * d.area), r.translate(d.vertices, {
                            x: -d.position.x,
                            y: -d.position.y
                        }), n.setInertia(d, n._inertiaScale * r.inertia(d.vertices, d.mass)), r.translate(d.vertices, {
                            x: d.position.x,
                            y: d.position.y
                        }), u > 0 && (o += d.area, a += d.inertia), d.position.x = s.x + (d.position.x - s.x) * e, d.position.y = s.y + (d.position.y - s.y) * i, l.update(d.bounds, d.vertices, t.velocity)
                    }
                    t.parts.length > 1 && (t.area = o, t.isStatic || (n.setMass(t, t.density * o), n.setInertia(t, a))), t.circleRadius && (e === i ? t.circleRadius *= e : t.circleRadius = null)
                }, n.update = function(t, e, i, n) {
                    var o = Math.pow(e * i * t.timeScale, 2),
                        a = 1 - t.frictionAir * i * t.timeScale,
                        u = t.position.x - t.positionPrev.x,
                        d = t.position.y - t.positionPrev.y;
                    t.velocity.x = u * a * n + t.force.x / t.mass * o, t.velocity.y = d * a * n + t.force.y / t.mass * o, t.positionPrev.x = t.position.x, t.positionPrev.y = t.position.y, t.position.x += t.velocity.x, t.position.y += t.velocity.y, t.angularVelocity = (t.angle - t.anglePrev) * a * n + t.torque / t.inertia * o, t.anglePrev = t.angle, t.angle += t.angularVelocity, t.speed = s.magnitude(t.velocity), t.angularSpeed = Math.abs(t.angularVelocity);
                    for (var h = 0; h < t.parts.length; h++) {
                        var p = t.parts[h];
                        r.translate(p.vertices, t.velocity), h > 0 && (p.position.x += t.velocity.x, p.position.y += t.velocity.y), 0 !== t.angularVelocity && (r.rotate(p.vertices, t.angularVelocity, t.position), c.rotate(p.axes, t.angularVelocity), h > 0 && s.rotateAbout(p.position, t.angularVelocity, t.position, p.position)), l.update(p.bounds, p.vertices, t.velocity)
                    }
                }, n.applyForce = function(t, e, i) {
                    t.force.x += i.x, t.force.y += i.y;
                    var n = e.x - t.position.x,
                        r = e.y - t.position.y;
                    t.torque += n * i.y - r * i.x
                }, n._totalProperties = function(t) {
                    for (var e = {
                            mass: 0,
                            area: 0,
                            inertia: 0,
                            centre: {
                                x: 0,
                                y: 0
                            }
                        }, i = 1 === t.parts.length ? 0 : 1; i < t.parts.length; i++) {
                        var n = t.parts[i],
                            r = n.mass !== 1 / 0 ? n.mass : 1;
                        e.mass += r, e.area += n.area, e.inertia += n.inertia, e.centre = s.add(e.centre, s.mult(n.position, r))
                    }
                    return e.centre = s.div(e.centre, e.mass), e
                }
            }()
        }, function(t, e, i) {
            var n = {};
            t.exports = n;
            var r = i(4);
            n._motionWakeThreshold = .18, n._motionSleepThreshold = .08, n._minBias = .9, n.update = function(t, e) {
                for (var i = e * e * e, r = 0; r < t.length; r++) {
                    var s = t[r],
                        o = s.speed * s.speed + s.angularSpeed * s.angularSpeed;
                    if (0 === s.force.x && 0 === s.force.y) {
                        var a = Math.min(s.motion, o),
                            l = Math.max(s.motion, o);
                        s.motion = n._minBias * a + (1 - n._minBias) * l, s.sleepThreshold > 0 && s.motion < n._motionSleepThreshold * i ? (s.sleepCounter += 1, s.sleepCounter >= s.sleepThreshold && n.set(s, !0)) : s.sleepCounter > 0 && (s.sleepCounter -= 1)
                    } else n.set(s, !1)
                }
            }, n.afterCollisions = function(t, e) {
                for (var i = e * e * e, r = 0; r < t.length; r++) {
                    var s = t[r];
                    if (s.isActive) {
                        var o = s.collision,
                            a = o.bodyA.parent,
                            l = o.bodyB.parent;
                        if (!(a.isSleeping && l.isSleeping || a.isStatic || l.isStatic) && (a.isSleeping || l.isSleeping)) {
                            var c = a.isSleeping && !a.isStatic ? a : l,
                                u = c === a ? l : a;
                            !c.isStatic && u.motion > n._motionWakeThreshold * i && n.set(c, !1)
                        }
                    }
                }
            }, n.set = function(t, e) {
                var i = t.isSleeping;
                e ? (t.isSleeping = !0, t.sleepCounter = t.sleepThreshold, t.positionImpulse.x = 0, t.positionImpulse.y = 0, t.positionPrev.x = t.position.x, t.positionPrev.y = t.position.y, t.anglePrev = t.angle, t.speed = 0, t.angularSpeed = 0, t.motion = 0, i || r.trigger(t, "sleepStart")) : (t.isSleeping = !1, t.sleepCounter = 0, i && r.trigger(t, "sleepEnd"))
            }
        }, function(t, e, i) {
            var n = {};
            t.exports = n;
            var r = i(3),
                s = i(2),
                o = i(7),
                a = i(1),
                l = i(10),
                c = i(0);
            n._warming = .4, n._torqueDampen = 1, n._minLength = 1e-6, n.create = function(t) {
                var e = t;
                e.bodyA && !e.pointA && (e.pointA = {
                    x: 0,
                    y: 0
                }), e.bodyB && !e.pointB && (e.pointB = {
                    x: 0,
                    y: 0
                });
                var i = e.bodyA ? s.add(e.bodyA.position, e.pointA) : e.pointA,
                    n = e.bodyB ? s.add(e.bodyB.position, e.pointB) : e.pointB,
                    r = s.magnitude(s.sub(i, n));
                e.length = void 0 !== e.length ? e.length : r, e.id = e.id || c.nextId(), e.label = e.label || "Constraint", e.type = "constraint", e.stiffness = e.stiffness || (e.length > 0 ? 1 : .7), e.damping = e.damping || 0, e.angularStiffness = e.angularStiffness || 0, e.angleA = e.bodyA ? e.bodyA.angle : e.angleA, e.angleB = e.bodyB ? e.bodyB.angle : e.angleB, e.plugin = {};
                var o = {
                    visible: !0,
                    lineWidth: 2,
                    strokeStyle: "#ffffff",
                    type: "line",
                    anchors: !0
                };
                return 0 === e.length && e.stiffness > .1 ? (o.type = "pin", o.anchors = !1) : e.stiffness < .9 && (o.type = "spring"), e.render = c.extend(o, e.render), e
            }, n.preSolveAll = function(t) {
                for (var e = 0; e < t.length; e += 1) {
                    var i = t[e],
                        n = i.constraintImpulse;
                    i.isStatic || 0 === n.x && 0 === n.y && 0 === n.angle || (i.position.x += n.x, i.position.y += n.y, i.angle += n.angle)
                }
            }, n.solveAll = function(t, e) {
                for (var i = 0; i < t.length; i += 1) {
                    var r = t[i],
                        s = !r.bodyA || r.bodyA && r.bodyA.isStatic,
                        o = !r.bodyB || r.bodyB && r.bodyB.isStatic;
                    (s || o) && n.solve(t[i], e)
                }
                for (i = 0; i < t.length; i += 1) s = !(r = t[i]).bodyA || r.bodyA && r.bodyA.isStatic, o = !r.bodyB || r.bodyB && r.bodyB.isStatic, s || o || n.solve(t[i], e)
            }, n.solve = function(t, e) {
                var i = t.bodyA,
                    r = t.bodyB,
                    o = t.pointA,
                    a = t.pointB;
                if (i || r) {
                    i && !i.isStatic && (s.rotate(o, i.angle - t.angleA, o), t.angleA = i.angle), r && !r.isStatic && (s.rotate(a, r.angle - t.angleB, a), t.angleB = r.angle);
                    var l = o,
                        c = a;
                    if (i && (l = s.add(i.position, o)), r && (c = s.add(r.position, a)), l && c) {
                        var u = s.sub(l, c),
                            d = s.magnitude(u);
                        d < n._minLength && (d = n._minLength);
                        var h, p, f, m, g, v = (d - t.length) / d,
                            y = t.stiffness < 1 ? t.stiffness * e : t.stiffness,
                            x = s.mult(u, v * y),
                            b = (i ? i.inverseMass : 0) + (r ? r.inverseMass : 0),
                            _ = b + ((i ? i.inverseInertia : 0) + (r ? r.inverseInertia : 0));
                        if (t.damping) {
                            var w = s.create();
                            f = s.div(u, d), g = s.sub(r && s.sub(r.position, r.positionPrev) || w, i && s.sub(i.position, i.positionPrev) || w), m = s.dot(f, g)
                        }
                        i && !i.isStatic && (p = i.inverseMass / b, i.constraintImpulse.x -= x.x * p, i.constraintImpulse.y -= x.y * p, i.position.x -= x.x * p, i.position.y -= x.y * p, t.damping && (i.positionPrev.x -= t.damping * f.x * m * p, i.positionPrev.y -= t.damping * f.y * m * p), h = s.cross(o, x) / _ * n._torqueDampen * i.inverseInertia * (1 - t.angularStiffness), i.constraintImpulse.angle -= h, i.angle -= h), r && !r.isStatic && (p = r.inverseMass / b, r.constraintImpulse.x += x.x * p, r.constraintImpulse.y += x.y * p, r.position.x += x.x * p, r.position.y += x.y * p, t.damping && (r.positionPrev.x += t.damping * f.x * m * p, r.positionPrev.y += t.damping * f.y * m * p), h = s.cross(a, x) / _ * n._torqueDampen * r.inverseInertia * (1 - t.angularStiffness), r.constraintImpulse.angle += h, r.angle += h)
                    }
                }
            }, n.postSolveAll = function(t) {
                for (var e = 0; e < t.length; e++) {
                    var i = t[e],
                        c = i.constraintImpulse;
                    if (!(i.isStatic || 0 === c.x && 0 === c.y && 0 === c.angle)) {
                        o.set(i, !1);
                        for (var u = 0; u < i.parts.length; u++) {
                            var d = i.parts[u];
                            r.translate(d.vertices, c), u > 0 && (d.position.x += c.x, d.position.y += c.y), 0 !== c.angle && (r.rotate(d.vertices, c.angle, i.position), l.rotate(d.axes, c.angle), u > 0 && s.rotateAbout(d.position, c.angle, i.position, d.position)), a.update(d.bounds, d.vertices, i.velocity)
                        }
                        c.angle *= n._warming, c.x *= n._warming, c.y *= n._warming
                    }
                }
            }, n.pointAWorld = function(t) {
                return {
                    x: (t.bodyA ? t.bodyA.position.x : 0) + t.pointA.x,
                    y: (t.bodyA ? t.bodyA.position.y : 0) + t.pointA.y
                }
            }, n.pointBWorld = function(t) {
                return {
                    x: (t.bodyB ? t.bodyB.position.x : 0) + t.pointB.x,
                    y: (t.bodyB ? t.bodyB.position.y : 0) + t.pointB.y
                }
            }
        }, function(t, e, i) {
            var n = {};
            t.exports = n;
            var r = i(17);
            n.create = function(t, e) {
                var i = t.bodyA,
                    r = t.bodyB,
                    s = t.parentA,
                    o = t.parentB,
                    a = {
                        id: n.id(i, r),
                        bodyA: i,
                        bodyB: r,
                        contacts: {},
                        activeContacts: [],
                        separation: 0,
                        isActive: !0,
                        confirmedActive: !0,
                        isSensor: i.isSensor || r.isSensor,
                        timeCreated: e,
                        timeUpdated: e,
                        inverseMass: s.inverseMass + o.inverseMass,
                        friction: Math.min(s.friction, o.friction),
                        frictionStatic: Math.max(s.frictionStatic, o.frictionStatic),
                        restitution: Math.max(s.restitution, o.restitution),
                        slop: Math.max(s.slop, o.slop)
                    };
                return n.update(a, t, e), a
            }, n.update = function(t, e, i) {
                var s = t.contacts,
                    o = e.supports,
                    a = t.activeContacts,
                    l = e.parentA,
                    c = e.parentB;
                if (t.collision = e, t.inverseMass = l.inverseMass + c.inverseMass, t.friction = Math.min(l.friction, c.friction), t.frictionStatic = Math.max(l.frictionStatic, c.frictionStatic), t.restitution = Math.max(l.restitution, c.restitution), t.slop = Math.max(l.slop, c.slop), a.length = 0, e.collided) {
                    for (var u = 0; u < o.length; u++) {
                        var d = o[u],
                            h = r.id(d),
                            p = s[h];
                        p ? a.push(p) : a.push(s[h] = r.create(d))
                    }
                    t.separation = e.depth, n.setActive(t, !0, i)
                } else !0 === t.isActive && n.setActive(t, !1, i)
            }, n.setActive = function(t, e, i) {
                e ? (t.isActive = !0, t.timeUpdated = i) : (t.isActive = !1, t.activeContacts.length = 0)
            }, n.id = function(t, e) {
                return t.id < e.id ? "A" + t.id + "B" + e.id : "A" + e.id + "B" + t.id
            }
        }, function(t, e, i) {
            var n = {};
            t.exports = n;
            var r = i(2),
                s = i(0);
            n.fromVertices = function(t) {
                for (var e = {}, i = 0; i < t.length; i++) {
                    var n = (i + 1) % t.length,
                        o = r.normalise({
                            x: t[n].y - t[i].y,
                            y: t[i].x - t[n].x
                        }),
                        a = 0 === o.y ? 1 / 0 : o.x / o.y;
                    e[a = a.toFixed(3).toString()] = o
                }
                return s.values(e)
            }, n.rotate = function(t, e) {
                if (0 !== e)
                    for (var i = Math.cos(e), n = Math.sin(e), r = 0; r < t.length; r++) {
                        var s, o = t[r];
                        s = o.x * i - o.y * n, o.y = o.x * n + o.y * i, o.x = s
                    }
            }
        }, function(t, e, i) {
            var n = {};
            t.exports = n;
            var r = i(3),
                s = i(0),
                o = i(6),
                a = i(1),
                l = i(2);
            n.rectangle = function(t, e, i, n, a) {
                a = a || {};
                var l = {
                    label: "Rectangle Body",
                    position: {
                        x: t,
                        y: e
                    },
                    vertices: r.fromPath("L 0 0 L " + i + " 0 L " + i + " " + n + " L 0 " + n)
                };
                if (a.chamfer) {
                    var c = a.chamfer;
                    l.vertices = r.chamfer(l.vertices, c.radius, c.quality, c.qualityMin, c.qualityMax), delete a.chamfer
                }
                return o.create(s.extend({}, l, a))
            }, n.trapezoid = function(t, e, i, n, a, l) {
                l = l || {};
                var c, u = i * (a *= .5),
                    d = u + (1 - 2 * a) * i,
                    h = d + u;
                c = a < .5 ? "L 0 0 L " + u + " " + -n + " L " + d + " " + -n + " L " + h + " 0" : "L 0 0 L " + d + " " + -n + " L " + h + " 0";
                var p = {
                    label: "Trapezoid Body",
                    position: {
                        x: t,
                        y: e
                    },
                    vertices: r.fromPath(c)
                };
                if (l.chamfer) {
                    var f = l.chamfer;
                    p.vertices = r.chamfer(p.vertices, f.radius, f.quality, f.qualityMin, f.qualityMax), delete l.chamfer
                }
                return o.create(s.extend({}, p, l))
            }, n.circle = function(t, e, i, r, o) {
                r = r || {};
                var a = {
                    label: "Circle Body",
                    circleRadius: i
                };
                o = o || 25;
                var l = Math.ceil(Math.max(10, Math.min(o, i)));
                return l % 2 == 1 && (l += 1), n.polygon(t, e, l, i, s.extend({}, a, r))
            }, n.polygon = function(t, e, i, a, l) {
                if (l = l || {}, i < 3) return n.circle(t, e, a, l);
                for (var c = 2 * Math.PI / i, u = "", d = .5 * c, h = 0; h < i; h += 1) {
                    var p = d + h * c,
                        f = Math.cos(p) * a,
                        m = Math.sin(p) * a;
                    u += "L " + f.toFixed(3) + " " + m.toFixed(3) + " "
                }
                var g = {
                    label: "Polygon Body",
                    position: {
                        x: t,
                        y: e
                    },
                    vertices: r.fromPath(u)
                };
                if (l.chamfer) {
                    var v = l.chamfer;
                    g.vertices = r.chamfer(g.vertices, v.radius, v.quality, v.qualityMin, v.qualityMax), delete l.chamfer
                }
                return o.create(s.extend({}, g, l))
            }, n.fromVertices = function(t, e, i, n, c, u, d, h) {
                var p, f, m, g, v, y, x, b, _, w, S = s.getDecomp();
                for (p = Boolean(S && S.quickDecomp), n = n || {}, m = [], c = void 0 !== c && c, u = void 0 !== u ? u : .01, d = void 0 !== d ? d : 10, h = void 0 !== h ? h : .01, s.isArray(i[0]) || (i = [i]), _ = 0; _ < i.length; _ += 1)
                    if (v = i[_], !(g = r.isConvex(v)) && !p && s.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."), g || !p) v = g ? r.clockwiseSort(v) : r.hull(v), m.push({
                        position: {
                            x: t,
                            y: e
                        },
                        vertices: v
                    });
                    else {
                        var M = v.map((function(t) {
                            return [t.x, t.y]
                        }));
                        S.makeCCW(M), !1 !== u && S.removeCollinearPoints(M, u), !1 !== h && S.removeDuplicatePoints && S.removeDuplicatePoints(M, h);
                        var A = S.quickDecomp(M);
                        for (y = 0; y < A.length; y++) {
                            var k = A[y].map((function(t) {
                                return {
                                    x: t[0],
                                    y: t[1]
                                }
                            }));
                            d > 0 && r.area(k) < d || m.push({
                                position: r.centre(k),
                                vertices: k
                            })
                        }
                    }
                for (y = 0; y < m.length; y++) m[y] = o.create(s.extend(m[y], n));
                if (c)
                    for (y = 0; y < m.length; y++) {
                        var P = m[y];
                        for (x = y + 1; x < m.length; x++) {
                            var T = m[x];
                            if (a.overlaps(P.bounds, T.bounds)) {
                                var C = P.vertices,
                                    B = T.vertices;
                                for (b = 0; b < P.vertices.length; b++)
                                    for (w = 0; w < T.vertices.length; w++) {
                                        var O = l.magnitudeSquared(l.sub(C[(b + 1) % C.length], B[w])),
                                            F = l.magnitudeSquared(l.sub(C[b], B[(w + 1) % B.length]));
                                        O < 5 && F < 5 && (C[b].isInternal = !0, B[w].isInternal = !0)
                                    }
                            }
                        }
                    }
                return m.length > 1 ? (f = o.create(s.extend({
                    parts: m.slice(0)
                }, n)), o.setPosition(f, {
                    x: t,
                    y: e
                }), f) : m[0]
            }
        }, function(t, e, i) {
            var n = {};
            t.exports = n;
            var r = i(0);
            n.create = function(t) {
                var e = {};
                return t || r.log("Mouse.create: element was undefined, defaulting to document.body", "warn"), e.element = t || document.body, e.absolute = {
                    x: 0,
                    y: 0
                }, e.position = {
                    x: 0,
                    y: 0
                }, e.mousedownPosition = {
                    x: 0,
                    y: 0
                }, e.mouseupPosition = {
                    x: 0,
                    y: 0
                }, e.offset = {
                    x: 0,
                    y: 0
                }, e.scale = {
                    x: 1,
                    y: 1
                }, e.wheelDelta = 0, e.button = -1, e.pixelRatio = parseInt(e.element.getAttribute("data-pixel-ratio"), 10) || 1, e.sourceEvents = {
                    mousemove: null,
                    mousedown: null,
                    mouseup: null,
                    mousewheel: null
                }, e.mousemove = function(t) {
                    var i = n._getRelativeMousePosition(t, e.element, e.pixelRatio);
                    t.changedTouches && (e.button = 0, t.preventDefault()), e.absolute.x = i.x, e.absolute.y = i.y, e.position.x = e.absolute.x * e.scale.x + e.offset.x, e.position.y = e.absolute.y * e.scale.y + e.offset.y, e.sourceEvents.mousemove = t
                }, e.mousedown = function(t) {
                    var i = n._getRelativeMousePosition(t, e.element, e.pixelRatio);
                    t.changedTouches ? (e.button = 0, t.preventDefault()) : e.button = t.button, e.absolute.x = i.x, e.absolute.y = i.y, e.position.x = e.absolute.x * e.scale.x + e.offset.x, e.position.y = e.absolute.y * e.scale.y + e.offset.y, e.mousedownPosition.x = e.position.x, e.mousedownPosition.y = e.position.y, e.sourceEvents.mousedown = t
                }, e.mouseup = function(t) {
                    var i = n._getRelativeMousePosition(t, e.element, e.pixelRatio);
                    t.changedTouches && t.preventDefault(), e.button = -1, e.absolute.x = i.x, e.absolute.y = i.y, e.position.x = e.absolute.x * e.scale.x + e.offset.x, e.position.y = e.absolute.y * e.scale.y + e.offset.y, e.mouseupPosition.x = e.position.x, e.mouseupPosition.y = e.position.y, e.sourceEvents.mouseup = t
                }, e.mousewheel = function(t) {
                    e.wheelDelta = Math.max(-1, Math.min(1, t.wheelDelta || -t.detail)), t.preventDefault()
                }, n.setElement(e, e.element), e
            }, n.setElement = function(t, e) {
                t.element = e, e.addEventListener("mousemove", t.mousemove), e.addEventListener("mousedown", t.mousedown), e.addEventListener("mouseup", t.mouseup), e.addEventListener("mousewheel", t.mousewheel), e.addEventListener("DOMMouseScroll", t.mousewheel), e.addEventListener("touchmove", t.mousemove), e.addEventListener("touchstart", t.mousedown), e.addEventListener("touchend", t.mouseup)
            }, n.clearSourceEvents = function(t) {
                t.sourceEvents.mousemove = null, t.sourceEvents.mousedown = null, t.sourceEvents.mouseup = null, t.sourceEvents.mousewheel = null, t.wheelDelta = 0
            }, n.setOffset = function(t, e) {
                t.offset.x = e.x, t.offset.y = e.y, t.position.x = t.absolute.x * t.scale.x + t.offset.x, t.position.y = t.absolute.y * t.scale.y + t.offset.y
            }, n.setScale = function(t, e) {
                t.scale.x = e.x, t.scale.y = e.y, t.position.x = t.absolute.x * t.scale.x + t.offset.x, t.position.y = t.absolute.y * t.scale.y + t.offset.y
            }, n._getRelativeMousePosition = function(t, e, i) {
                var n, r, s = e.getBoundingClientRect(),
                    o = document.documentElement || document.body.parentNode || document.body,
                    a = void 0 !== window.pageXOffset ? window.pageXOffset : o.scrollLeft,
                    l = void 0 !== window.pageYOffset ? window.pageYOffset : o.scrollTop,
                    c = t.changedTouches;
                return c ? (n = c[0].pageX - s.left - a, r = c[0].pageY - s.top - l) : (n = t.pageX - s.left - a, r = t.pageY - s.top - l), {
                    x: n / (e.clientWidth / (e.width || e.clientWidth) * i),
                    y: r / (e.clientHeight / (e.height || e.clientHeight) * i)
                }
            }
        }, function(t, e, i) {
            var n = {};
            t.exports = n;
            var r = i(14),
                s = i(9),
                o = i(1);
            n.collisions = function(t, e) {
                for (var i = [], a = e.pairs.table, l = 0; l < t.length; l++) {
                    var c = t[l][0],
                        u = t[l][1];
                    if ((!c.isStatic && !c.isSleeping || !u.isStatic && !u.isSleeping) && n.canCollide(c.collisionFilter, u.collisionFilter) && o.overlaps(c.bounds, u.bounds))
                        for (var d = c.parts.length > 1 ? 1 : 0; d < c.parts.length; d++)
                            for (var h = c.parts[d], p = u.parts.length > 1 ? 1 : 0; p < u.parts.length; p++) {
                                var f = u.parts[p];
                                if (h === c && f === u || o.overlaps(h.bounds, f.bounds)) {
                                    var m, g = a[s.id(h, f)];
                                    m = g && g.isActive ? g.collision : null;
                                    var v = r.collides(h, f, m);
                                    v.collided && i.push(v)
                                }
                            }
                }
                return i
            }, n.canCollide = function(t, e) {
                return t.group === e.group && 0 !== t.group ? t.group > 0 : 0 != (t.mask & e.category) && 0 != (e.mask & t.category)
            }
        }, function(t, e, i) {
            var n = {};
            t.exports = n;
            var r = i(3),
                s = i(2);
            n.collides = function(t, e, i) {
                var o, a, l, c, u = !1;
                if (i) {
                    var d = t.parent,
                        h = e.parent,
                        p = d.speed * d.speed + d.angularSpeed * d.angularSpeed + h.speed * h.speed + h.angularSpeed * h.angularSpeed;
                    u = i && i.collided && p < .2, c = i
                } else c = {
                    collided: !1,
                    bodyA: t,
                    bodyB: e
                };
                if (i && u) {
                    var f = c.axisBody,
                        m = f === t ? e : t,
                        g = [f.axes[i.axisNumber]];
                    if (l = n._overlapAxes(f.vertices, m.vertices, g), c.reused = !0, l.overlap <= 0) return c.collided = !1, c
                } else {
                    if ((o = n._overlapAxes(t.vertices, e.vertices, t.axes)).overlap <= 0) return c.collided = !1, c;
                    if ((a = n._overlapAxes(e.vertices, t.vertices, e.axes)).overlap <= 0) return c.collided = !1, c;
                    o.overlap < a.overlap ? (l = o, c.axisBody = t) : (l = a, c.axisBody = e), c.axisNumber = l.axisNumber
                }
                c.bodyA = t.id < e.id ? t : e, c.bodyB = t.id < e.id ? e : t, c.collided = !0, c.depth = l.overlap, c.parentA = c.bodyA.parent, c.parentB = c.bodyB.parent, t = c.bodyA, e = c.bodyB, s.dot(l.axis, s.sub(e.position, t.position)) < 0 ? c.normal = {
                    x: l.axis.x,
                    y: l.axis.y
                } : c.normal = {
                    x: -l.axis.x,
                    y: -l.axis.y
                }, c.tangent = s.perp(c.normal), c.penetration = c.penetration || {}, c.penetration.x = c.normal.x * c.depth, c.penetration.y = c.normal.y * c.depth;
                var v = n._findSupports(t, e, c.normal),
                    y = [];
                if (r.contains(t.vertices, v[0]) && y.push(v[0]), r.contains(t.vertices, v[1]) && y.push(v[1]), y.length < 2) {
                    var x = n._findSupports(e, t, s.neg(c.normal));
                    r.contains(e.vertices, x[0]) && y.push(x[0]), y.length < 2 && r.contains(e.vertices, x[1]) && y.push(x[1])
                }
                return y.length < 1 && (y = [v[0]]), c.supports = y, c
            }, n._overlapAxes = function(t, e, i) {
                for (var r, o, a = s._temp[0], l = s._temp[1], c = {
                        overlap: Number.MAX_VALUE
                    }, u = 0; u < i.length; u++) {
                    if (o = i[u], n._projectToAxis(a, t, o), n._projectToAxis(l, e, o), (r = Math.min(a.max - l.min, l.max - a.min)) <= 0) return c.overlap = r, c;
                    r < c.overlap && (c.overlap = r, c.axis = o, c.axisNumber = u)
                }
                return c
            }, n._projectToAxis = function(t, e, i) {
                for (var n = s.dot(e[0], i), r = n, o = 1; o < e.length; o += 1) {
                    var a = s.dot(e[o], i);
                    a > r ? r = a : a < n && (n = a)
                }
                t.min = n, t.max = r
            }, n._findSupports = function(t, e, i) {
                for (var n, r, o, a, l = Number.MAX_VALUE, c = s._temp[0], u = e.vertices, d = t.position, h = 0; h < u.length; h++) r = u[h], c.x = r.x - d.x, c.y = r.y - d.y, (n = -s.dot(i, c)) < l && (l = n, o = r);
                return r = u[o.index - 1 >= 0 ? o.index - 1 : u.length - 1], c.x = r.x - d.x, c.y = r.y - d.y, l = -s.dot(i, c), a = r, r = u[(o.index + 1) % u.length], c.x = r.x - d.x, c.y = r.y - d.y, (n = -s.dot(i, c)) < l && (a = r), [o, a]
            }
        }, function(t, e, i) {
            var n = {};
            t.exports = n;
            var r = i(0);
            n._registry = {}, n.register = function(t) {
                if (n.isPlugin(t) || r.warn("Plugin.register:", n.toString(t), "does not implement all required fields."), t.name in n._registry) {
                    var e = n._registry[t.name],
                        i = n.versionParse(t.version).number,
                        s = n.versionParse(e.version).number;
                    i > s ? (r.warn("Plugin.register:", n.toString(e), "was upgraded to", n.toString(t)), n._registry[t.name] = t) : i < s ? r.warn("Plugin.register:", n.toString(e), "can not be downgraded to", n.toString(t)) : t !== e && r.warn("Plugin.register:", n.toString(t), "is already registered to different plugin object")
                } else n._registry[t.name] = t;
                return t
            }, n.resolve = function(t) {
                return n._registry[n.dependencyParse(t).name]
            }, n.toString = function(t) {
                return "string" == typeof t ? t : (t.name || "anonymous") + "@" + (t.version || t.range || "0.0.0")
            }, n.isPlugin = function(t) {
                return t && t.name && t.version && t.install
            }, n.isUsed = function(t, e) {
                return t.used.indexOf(e) > -1
            }, n.isFor = function(t, e) {
                var i = t.for && n.dependencyParse(t.for);
                return !t.for || e.name === i.name && n.versionSatisfies(e.version, i.range)
            }, n.use = function(t, e) {
                if (t.uses = (t.uses || []).concat(e || []), 0 !== t.uses.length) {
                    for (var i = n.dependencies(t), s = r.topologicalSort(i), o = [], a = 0; a < s.length; a += 1)
                        if (s[a] !== t.name) {
                            var l = n.resolve(s[a]);
                            l ? n.isUsed(t, l.name) || (n.isFor(l, t) || (r.warn("Plugin.use:", n.toString(l), "is for", l.for, "but installed on", n.toString(t) + "."), l._warned = !0), l.install ? l.install(t) : (r.warn("Plugin.use:", n.toString(l), "does not specify an install function."), l._warned = !0), l._warned ? (o.push("🔶 " + n.toString(l)), delete l._warned) : o.push("✅ " + n.toString(l)), t.used.push(l.name)) : o.push("❌ " + s[a])
                        }
                    o.length > 0 && r.info(o.join("  "))
                } else r.warn("Plugin.use:", n.toString(t), "does not specify any dependencies to install.")
            }, n.dependencies = function(t, e) {
                var i = n.dependencyParse(t),
                    s = i.name;
                if (!(s in (e = e || {}))) {
                    t = n.resolve(t) || t, e[s] = r.map(t.uses || [], (function(e) {
                        n.isPlugin(e) && n.register(e);
                        var s = n.dependencyParse(e),
                            o = n.resolve(e);
                        return o && !n.versionSatisfies(o.version, s.range) ? (r.warn("Plugin.dependencies:", n.toString(o), "does not satisfy", n.toString(s), "used by", n.toString(i) + "."), o._warned = !0, t._warned = !0) : o || (r.warn("Plugin.dependencies:", n.toString(e), "used by", n.toString(i), "could not be resolved."), t._warned = !0), s.name
                    }));
                    for (var o = 0; o < e[s].length; o += 1) n.dependencies(e[s][o], e);
                    return e
                }
            }, n.dependencyParse = function(t) {
                return r.isString(t) ? (/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?))?$/.test(t) || r.warn("Plugin.dependencyParse:", t, "is not a valid dependency string."), {
                    name: t.split("@")[0],
                    range: t.split("@")[1] || "*"
                }) : {
                    name: t.name,
                    range: t.range || t.version
                }
            }, n.versionParse = function(t) {
                var e = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-]+)?$/;
                e.test(t) || r.warn("Plugin.versionParse:", t, "is not a valid version or range.");
                var i = e.exec(t),
                    n = Number(i[4]),
                    s = Number(i[5]),
                    o = Number(i[6]);
                return {
                    isRange: Boolean(i[1] || i[2]),
                    version: i[3],
                    range: t,
                    operator: i[1] || i[2] || "",
                    major: n,
                    minor: s,
                    patch: o,
                    parts: [n, s, o],
                    prerelease: i[7],
                    number: 1e8 * n + 1e4 * s + o
                }
            }, n.versionSatisfies = function(t, e) {
                e = e || "*";
                var i = n.versionParse(e),
                    r = n.versionParse(t);
                if (i.isRange) {
                    if ("*" === i.operator || "*" === t) return !0;
                    if (">" === i.operator) return r.number > i.number;
                    if (">=" === i.operator) return r.number >= i.number;
                    if ("~" === i.operator) return r.major === i.major && r.minor === i.minor && r.patch >= i.patch;
                    if ("^" === i.operator) return i.major > 0 ? r.major === i.major && r.number >= i.number : i.minor > 0 ? r.minor === i.minor && r.patch >= i.patch : r.patch === i.patch
                }
                return t === e || "*" === t
            }
        }, function(t, e, i) {
            var n = {};
            t.exports = n;
            var r = i(0),
                s = i(5),
                o = i(1),
                a = i(4),
                l = i(2),
                c = i(12);
            ! function() {
                var t, e;
                "undefined" != typeof window && (t = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                    window.setTimeout((function() {
                        t(r.now())
                    }), 1e3 / 60)
                }, e = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame), n._goodFps = 30, n._goodDelta = 1e3 / 60, n.create = function(t) {
                    var e = {
                            controller: n,
                            engine: null,
                            element: null,
                            canvas: null,
                            mouse: null,
                            frameRequestId: null,
                            timing: {
                                historySize: 60,
                                delta: 0,
                                deltaHistory: [],
                                lastTime: 0,
                                lastTimestamp: 0,
                                lastElapsed: 0,
                                timestampElapsed: 0,
                                timestampElapsedHistory: [],
                                engineDeltaHistory: [],
                                engineElapsedHistory: [],
                                elapsedHistory: []
                            },
                            options: {
                                width: 800,
                                height: 600,
                                pixelRatio: 1,
                                background: "#14151f",
                                wireframeBackground: "#14151f",
                                hasBounds: !!t.bounds,
                                enabled: !0,
                                wireframes: !0,
                                showSleeping: !0,
                                showDebug: !1,
                                showStats: !1,
                                showPerformance: !1,
                                showBroadphase: !1,
                                showBounds: !1,
                                showVelocity: !1,
                                showCollisions: !1,
                                showSeparations: !1,
                                showAxes: !1,
                                showPositions: !1,
                                showAngleIndicator: !1,
                                showIds: !1,
                                showVertexNumbers: !1,
                                showConvexHulls: !1,
                                showInternalEdges: !1,
                                showMousePosition: !1
                            }
                        },
                        i = r.extend(e, t);
                    return i.canvas && (i.canvas.width = i.options.width || i.canvas.width, i.canvas.height = i.options.height || i.canvas.height), i.mouse = t.mouse, i.engine = t.engine, i.canvas = i.canvas || d(i.options.width, i.options.height), i.context = i.canvas.getContext("2d"), i.textures = {}, i.bounds = i.bounds || {
                        min: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: i.canvas.width,
                            y: i.canvas.height
                        }
                    }, 1 !== i.options.pixelRatio && n.setPixelRatio(i, i.options.pixelRatio), r.isElement(i.element) ? i.element.appendChild(i.canvas) : i.canvas.parentNode || r.log("Render.create: options.element was undefined, render.canvas was created but not appended", "warn"), i
                }, n.run = function(e) {
                    ! function r(s) {
                        e.frameRequestId = t(r), i(e, s), n.world(e, s), (e.options.showStats || e.options.showDebug) && n.stats(e, e.context, s), (e.options.showPerformance || e.options.showDebug) && n.performance(e, e.context, s)
                    }()
                }, n.stop = function(t) {
                    e(t.frameRequestId)
                }, n.setPixelRatio = function(t, e) {
                    var i = t.options,
                        n = t.canvas;
                    "auto" === e && (e = h(n)), i.pixelRatio = e, n.setAttribute("data-pixel-ratio", e), n.width = i.width * e, n.height = i.height * e, n.style.width = i.width + "px", n.style.height = i.height + "px"
                }, n.lookAt = function(t, e, i, n) {
                    n = void 0 === n || n, e = r.isArray(e) ? e : [e], i = i || {
                        x: 0,
                        y: 0
                    };
                    for (var s = {
                            min: {
                                x: 1 / 0,
                                y: 1 / 0
                            },
                            max: {
                                x: -1 / 0,
                                y: -1 / 0
                            }
                        }, o = 0; o < e.length; o += 1) {
                        var a = e[o],
                            l = a.bounds ? a.bounds.min : a.min || a.position || a,
                            u = a.bounds ? a.bounds.max : a.max || a.position || a;
                        l && u && (l.x < s.min.x && (s.min.x = l.x), u.x > s.max.x && (s.max.x = u.x), l.y < s.min.y && (s.min.y = l.y), u.y > s.max.y && (s.max.y = u.y))
                    }
                    var d = s.max.x - s.min.x + 2 * i.x,
                        h = s.max.y - s.min.y + 2 * i.y,
                        p = t.canvas.height,
                        f = t.canvas.width / p,
                        m = d / h,
                        g = 1,
                        v = 1;
                    m > f ? v = m / f : g = f / m, t.options.hasBounds = !0, t.bounds.min.x = s.min.x, t.bounds.max.x = s.min.x + d * g, t.bounds.min.y = s.min.y, t.bounds.max.y = s.min.y + h * v, n && (t.bounds.min.x += .5 * d - d * g * .5, t.bounds.max.x += .5 * d - d * g * .5, t.bounds.min.y += .5 * h - h * v * .5, t.bounds.max.y += .5 * h - h * v * .5), t.bounds.min.x -= i.x, t.bounds.max.x -= i.x, t.bounds.min.y -= i.y, t.bounds.max.y -= i.y, t.mouse && (c.setScale(t.mouse, {
                        x: (t.bounds.max.x - t.bounds.min.x) / t.canvas.width,
                        y: (t.bounds.max.y - t.bounds.min.y) / t.canvas.height
                    }), c.setOffset(t.mouse, t.bounds.min))
                }, n.startViewTransform = function(t) {
                    var e = t.bounds.max.x - t.bounds.min.x,
                        i = t.bounds.max.y - t.bounds.min.y,
                        n = e / t.options.width,
                        r = i / t.options.height;
                    t.context.setTransform(t.options.pixelRatio / n, 0, 0, t.options.pixelRatio / r, 0, 0), t.context.translate(-t.bounds.min.x, -t.bounds.min.y)
                }, n.endViewTransform = function(t) {
                    t.context.setTransform(t.options.pixelRatio, 0, 0, t.options.pixelRatio, 0, 0)
                }, n.world = function(t, e) {
                    var i, u = r.now(),
                        d = t.engine,
                        h = d.world,
                        p = t.canvas,
                        m = t.context,
                        g = t.options,
                        v = t.timing,
                        y = s.allBodies(h),
                        x = s.allConstraints(h),
                        b = g.wireframes ? g.wireframeBackground : g.background,
                        _ = [],
                        w = [],
                        S = {
                            timestamp: d.timing.timestamp
                        };
                    if (a.trigger(t, "beforeRender", S), t.currentBackground !== b && f(t, b), m.globalCompositeOperation = "source-in", m.fillStyle = "transparent", m.fillRect(0, 0, p.width, p.height), m.globalCompositeOperation = "source-over", g.hasBounds) {
                        for (i = 0; i < y.length; i++) {
                            var M = y[i];
                            o.overlaps(M.bounds, t.bounds) && _.push(M)
                        }
                        for (i = 0; i < x.length; i++) {
                            var A = x[i],
                                k = A.bodyA,
                                P = A.bodyB,
                                T = A.pointA,
                                C = A.pointB;
                            k && (T = l.add(k.position, A.pointA)), P && (C = l.add(P.position, A.pointB)), T && C && (o.contains(t.bounds, T) || o.contains(t.bounds, C)) && w.push(A)
                        }
                        n.startViewTransform(t), t.mouse && (c.setScale(t.mouse, {
                            x: (t.bounds.max.x - t.bounds.min.x) / t.options.width,
                            y: (t.bounds.max.y - t.bounds.min.y) / t.options.height
                        }), c.setOffset(t.mouse, t.bounds.min))
                    } else w = x, _ = y, 1 !== t.options.pixelRatio && t.context.setTransform(t.options.pixelRatio, 0, 0, t.options.pixelRatio, 0, 0);
                    !g.wireframes || d.enableSleeping && g.showSleeping ? n.bodies(t, _, m) : (g.showConvexHulls && n.bodyConvexHulls(t, _, m), n.bodyWireframes(t, _, m)), g.showBounds && n.bodyBounds(t, _, m), (g.showAxes || g.showAngleIndicator) && n.bodyAxes(t, _, m), g.showPositions && n.bodyPositions(t, _, m), g.showVelocity && n.bodyVelocity(t, _, m), g.showIds && n.bodyIds(t, _, m), g.showSeparations && n.separations(t, d.pairs.list, m), g.showCollisions && n.collisions(t, d.pairs.list, m), g.showVertexNumbers && n.vertexNumbers(t, _, m), g.showMousePosition && n.mousePosition(t, t.mouse, m), n.constraints(w, m), g.showBroadphase && n.grid(t, d.grid, m), g.hasBounds && n.endViewTransform(t), a.trigger(t, "afterRender", S), v.lastElapsed = r.now() - u
                }, n.stats = function(t, e, i) {
                    for (var n = t.engine, r = n.world, o = s.allBodies(r), a = 0, l = 0, c = 0; c < o.length; c += 1) a += o[c].parts.length;
                    var u = {
                        Part: a,
                        Body: o.length,
                        Cons: s.allConstraints(r).length,
                        Comp: s.allComposites(r).length,
                        Pair: n.pairs.list.length
                    };
                    for (var d in e.fillStyle = "#0e0f19", e.fillRect(l, 0, 302.5, 44), e.font = "12px Arial", e.textBaseline = "top", e.textAlign = "right", u) {
                        var h = u[d];
                        e.fillStyle = "#aaa", e.fillText(d, l + 55, 8), e.fillStyle = "#eee", e.fillText(h, l + 55, 26), l += 55
                    }
                }, n.performance = function(t, e) {
                    var i = t.engine,
                        r = t.timing,
                        s = r.deltaHistory,
                        o = r.elapsedHistory,
                        a = r.timestampElapsedHistory,
                        l = r.engineDeltaHistory,
                        c = r.engineElapsedHistory,
                        d = i.timing.lastDelta,
                        h = u(s),
                        p = u(o),
                        f = u(l),
                        m = u(c),
                        g = u(a) / h || 0,
                        v = 1e3 / h || 0,
                        y = 60;
                    e.fillStyle = "#0e0f19", e.fillRect(0, 50, 370, 34), n.status(e, 10, 69, y, 4, s.length, Math.round(v) + " fps", v / n._goodFps, (function(t) {
                        return s[t] / h - 1
                    })), n.status(e, 82, 69, y, 4, l.length, d.toFixed(2) + " dt", n._goodDelta / d, (function(t) {
                        return l[t] / f - 1
                    })), n.status(e, 154, 69, y, 4, c.length, m.toFixed(2) + " ut", 1 - m / n._goodFps, (function(t) {
                        return c[t] / m - 1
                    })), n.status(e, 226, 69, y, 4, o.length, p.toFixed(2) + " rt", 1 - p / n._goodFps, (function(t) {
                        return o[t] / p - 1
                    })), n.status(e, 298, 69, y, 4, a.length, g.toFixed(2) + " x", g * g * g, (function(t) {
                        return (a[t] / s[t] / g || 0) - 1
                    }))
                }, n.status = function(t, e, i, n, s, o, a, l, c) {
                    t.strokeStyle = "#888", t.fillStyle = "#444", t.lineWidth = 1, t.fillRect(e, i + 7, n, 1), t.beginPath(), t.moveTo(e, i + 7 - s * r.clamp(.4 * c(0), -2, 2));
                    for (var u = 0; u < n; u += 1) t.lineTo(e + u, i + 7 - (u < o ? s * r.clamp(.4 * c(u), -2, 2) : 0));
                    t.stroke(), t.fillStyle = "hsl(" + r.clamp(25 + 95 * l, 0, 120) + ",100%,60%)", t.fillRect(e, i - 7, 4, 4), t.font = "12px Arial", t.textBaseline = "middle", t.textAlign = "right", t.fillStyle = "#eee", t.fillText(a, e + n, i - 5)
                }, n.constraints = function(t, e) {
                    for (var i = e, n = 0; n < t.length; n++) {
                        var s = t[n];
                        if (s.render.visible && s.pointA && s.pointB) {
                            var o, a, c = s.bodyA,
                                u = s.bodyB;
                            if (o = c ? l.add(c.position, s.pointA) : s.pointA, "pin" === s.render.type) i.beginPath(), i.arc(o.x, o.y, 3, 0, 2 * Math.PI), i.closePath();
                            else {
                                if (a = u ? l.add(u.position, s.pointB) : s.pointB, i.beginPath(), i.moveTo(o.x, o.y), "spring" === s.render.type)
                                    for (var d, h = l.sub(a, o), p = l.perp(l.normalise(h)), f = Math.ceil(r.clamp(s.length / 5, 12, 20)), m = 1; m < f; m += 1) d = m % 2 == 0 ? 1 : -1, i.lineTo(o.x + h.x * (m / f) + p.x * d * 4, o.y + h.y * (m / f) + p.y * d * 4);
                                i.lineTo(a.x, a.y)
                            }
                            s.render.lineWidth && (i.lineWidth = s.render.lineWidth, i.strokeStyle = s.render.strokeStyle, i.stroke()), s.render.anchors && (i.fillStyle = s.render.strokeStyle, i.beginPath(), i.arc(o.x, o.y, 3, 0, 2 * Math.PI), i.arc(a.x, a.y, 3, 0, 2 * Math.PI), i.closePath(), i.fill())
                        }
                    }
                }, n.bodies = function(t, e, i) {
                    var n = i;
                    t.engine;
                    var r, s, o, a, l = t.options,
                        c = l.showInternalEdges || !l.wireframes;
                    for (o = 0; o < e.length; o++)
                        if ((r = e[o]).render.visible)
                            for (a = r.parts.length > 1 ? 1 : 0; a < r.parts.length; a++)
                                if ((s = r.parts[a]).render.visible) {
                                    if (l.showSleeping && r.isSleeping ? n.globalAlpha = .5 * s.render.opacity : 1 !== s.render.opacity && (n.globalAlpha = s.render.opacity), s.render.sprite && s.render.sprite.texture && !l.wireframes) {
                                        var u = s.render.sprite,
                                            d = p(t, u.texture);
                                        n.translate(s.position.x, s.position.y), n.rotate(s.angle), n.drawImage(d, d.width * -u.xOffset * u.xScale, d.height * -u.yOffset * u.yScale, d.width * u.xScale, d.height * u.yScale), n.rotate(-s.angle), n.translate(-s.position.x, -s.position.y)
                                    } else {
                                        if (s.circleRadius) n.beginPath(), n.arc(s.position.x, s.position.y, s.circleRadius, 0, 2 * Math.PI);
                                        else {
                                            n.beginPath(), n.moveTo(s.vertices[0].x, s.vertices[0].y);
                                            for (var h = 1; h < s.vertices.length; h++) !s.vertices[h - 1].isInternal || c ? n.lineTo(s.vertices[h].x, s.vertices[h].y) : n.moveTo(s.vertices[h].x, s.vertices[h].y), s.vertices[h].isInternal && !c && n.moveTo(s.vertices[(h + 1) % s.vertices.length].x, s.vertices[(h + 1) % s.vertices.length].y);
                                            n.lineTo(s.vertices[0].x, s.vertices[0].y), n.closePath()
                                        }
                                        l.wireframes ? (n.lineWidth = 1, n.strokeStyle = "#bbb", n.stroke()) : (n.fillStyle = s.render.fillStyle, s.render.lineWidth && (n.lineWidth = s.render.lineWidth, n.strokeStyle = s.render.strokeStyle, n.stroke()), n.fill())
                                    }
                                    n.globalAlpha = 1
                                }
                }, n.bodyWireframes = function(t, e, i) {
                    var n, r, s, o, a, l = i,
                        c = t.options.showInternalEdges;
                    for (l.beginPath(), s = 0; s < e.length; s++)
                        if ((n = e[s]).render.visible)
                            for (a = n.parts.length > 1 ? 1 : 0; a < n.parts.length; a++) {
                                for (r = n.parts[a], l.moveTo(r.vertices[0].x, r.vertices[0].y), o = 1; o < r.vertices.length; o++) !r.vertices[o - 1].isInternal || c ? l.lineTo(r.vertices[o].x, r.vertices[o].y) : l.moveTo(r.vertices[o].x, r.vertices[o].y), r.vertices[o].isInternal && !c && l.moveTo(r.vertices[(o + 1) % r.vertices.length].x, r.vertices[(o + 1) % r.vertices.length].y);
                                l.lineTo(r.vertices[0].x, r.vertices[0].y)
                            }
                    l.lineWidth = 1, l.strokeStyle = "#bbb", l.stroke()
                }, n.bodyConvexHulls = function(t, e, i) {
                    var n, r, s, o = i;
                    for (o.beginPath(), r = 0; r < e.length; r++)
                        if ((n = e[r]).render.visible && 1 !== n.parts.length) {
                            for (o.moveTo(n.vertices[0].x, n.vertices[0].y), s = 1; s < n.vertices.length; s++) o.lineTo(n.vertices[s].x, n.vertices[s].y);
                            o.lineTo(n.vertices[0].x, n.vertices[0].y)
                        }
                    o.lineWidth = 1, o.strokeStyle = "rgba(255,255,255,0.2)", o.stroke()
                }, n.vertexNumbers = function(t, e, i) {
                    var n, r, s, o = i;
                    for (n = 0; n < e.length; n++) {
                        var a = e[n].parts;
                        for (s = a.length > 1 ? 1 : 0; s < a.length; s++) {
                            var l = a[s];
                            for (r = 0; r < l.vertices.length; r++) o.fillStyle = "rgba(255,255,255,0.2)", o.fillText(n + "_" + r, l.position.x + .8 * (l.vertices[r].x - l.position.x), l.position.y + .8 * (l.vertices[r].y - l.position.y))
                        }
                    }
                }, n.mousePosition = function(t, e, i) {
                    var n = i;
                    n.fillStyle = "rgba(255,255,255,0.8)", n.fillText(e.position.x + "  " + e.position.y, e.position.x + 5, e.position.y - 5)
                }, n.bodyBounds = function(t, e, i) {
                    var n = i;
                    t.engine;
                    var r = t.options;
                    n.beginPath();
                    for (var s = 0; s < e.length; s++)
                        if (e[s].render.visible)
                            for (var o = e[s].parts, a = o.length > 1 ? 1 : 0; a < o.length; a++) {
                                var l = o[a];
                                n.rect(l.bounds.min.x, l.bounds.min.y, l.bounds.max.x - l.bounds.min.x, l.bounds.max.y - l.bounds.min.y)
                            }
                    r.wireframes ? n.strokeStyle = "rgba(255,255,255,0.08)" : n.strokeStyle = "rgba(0,0,0,0.1)", n.lineWidth = 1, n.stroke()
                }, n.bodyAxes = function(t, e, i) {
                    var n = i;
                    t.engine;
                    var r, s, o, a, l = t.options;
                    for (n.beginPath(), s = 0; s < e.length; s++) {
                        var c = e[s],
                            u = c.parts;
                        if (c.render.visible)
                            if (l.showAxes)
                                for (o = u.length > 1 ? 1 : 0; o < u.length; o++)
                                    for (r = u[o], a = 0; a < r.axes.length; a++) {
                                        var d = r.axes[a];
                                        n.moveTo(r.position.x, r.position.y), n.lineTo(r.position.x + 20 * d.x, r.position.y + 20 * d.y)
                                    } else
                                        for (o = u.length > 1 ? 1 : 0; o < u.length; o++)
                                            for (r = u[o], a = 0; a < r.axes.length; a++) n.moveTo(r.position.x, r.position.y), n.lineTo((r.vertices[0].x + r.vertices[r.vertices.length - 1].x) / 2, (r.vertices[0].y + r.vertices[r.vertices.length - 1].y) / 2)
                    }
                    l.wireframes ? (n.strokeStyle = "indianred", n.lineWidth = 1) : (n.strokeStyle = "rgba(255, 255, 255, 0.4)", n.globalCompositeOperation = "overlay", n.lineWidth = 2), n.stroke(), n.globalCompositeOperation = "source-over"
                }, n.bodyPositions = function(t, e, i) {
                    var n = i;
                    t.engine;
                    var r, s, o, a, l = t.options;
                    for (n.beginPath(), o = 0; o < e.length; o++)
                        if ((r = e[o]).render.visible)
                            for (a = 0; a < r.parts.length; a++) s = r.parts[a], n.arc(s.position.x, s.position.y, 3, 0, 2 * Math.PI, !1), n.closePath();
                    for (l.wireframes ? n.fillStyle = "indianred" : n.fillStyle = "rgba(0,0,0,0.5)", n.fill(), n.beginPath(), o = 0; o < e.length; o++)(r = e[o]).render.visible && (n.arc(r.positionPrev.x, r.positionPrev.y, 2, 0, 2 * Math.PI, !1), n.closePath());
                    n.fillStyle = "rgba(255,165,0,0.8)", n.fill()
                }, n.bodyVelocity = function(t, e, i) {
                    var n = i;
                    n.beginPath();
                    for (var r = 0; r < e.length; r++) {
                        var s = e[r];
                        s.render.visible && (n.moveTo(s.position.x, s.position.y), n.lineTo(s.position.x + 2 * (s.position.x - s.positionPrev.x), s.position.y + 2 * (s.position.y - s.positionPrev.y)))
                    }
                    n.lineWidth = 3, n.strokeStyle = "cornflowerblue", n.stroke()
                }, n.bodyIds = function(t, e, i) {
                    var n, r, s = i;
                    for (n = 0; n < e.length; n++)
                        if (e[n].render.visible) {
                            var o = e[n].parts;
                            for (r = o.length > 1 ? 1 : 0; r < o.length; r++) {
                                var a = o[r];
                                s.font = "12px Arial", s.fillStyle = "rgba(255,255,255,0.5)", s.fillText(a.id, a.position.x + 10, a.position.y - 10)
                            }
                        }
                }, n.collisions = function(t, e, i) {
                    var n, r, s, o, a = i,
                        l = t.options;
                    for (a.beginPath(), s = 0; s < e.length; s++)
                        if ((n = e[s]).isActive)
                            for (r = n.collision, o = 0; o < n.activeContacts.length; o++) {
                                var c = n.activeContacts[o].vertex;
                                a.rect(c.x - 1.5, c.y - 1.5, 3.5, 3.5)
                            }
                    for (l.wireframes ? a.fillStyle = "rgba(255,255,255,0.7)" : a.fillStyle = "orange", a.fill(), a.beginPath(), s = 0; s < e.length; s++)
                        if ((n = e[s]).isActive && (r = n.collision, n.activeContacts.length > 0)) {
                            var u = n.activeContacts[0].vertex.x,
                                d = n.activeContacts[0].vertex.y;
                            2 === n.activeContacts.length && (u = (n.activeContacts[0].vertex.x + n.activeContacts[1].vertex.x) / 2, d = (n.activeContacts[0].vertex.y + n.activeContacts[1].vertex.y) / 2), r.bodyB === r.supports[0].body || !0 === r.bodyA.isStatic ? a.moveTo(u - 8 * r.normal.x, d - 8 * r.normal.y) : a.moveTo(u + 8 * r.normal.x, d + 8 * r.normal.y), a.lineTo(u, d)
                        }
                    l.wireframes ? a.strokeStyle = "rgba(255,165,0,0.7)" : a.strokeStyle = "orange", a.lineWidth = 1, a.stroke()
                }, n.separations = function(t, e, i) {
                    var n, r, s, o, a, l = i,
                        c = t.options;
                    for (l.beginPath(), a = 0; a < e.length; a++)
                        if ((n = e[a]).isActive) {
                            s = (r = n.collision).bodyA;
                            var u = 1;
                            (o = r.bodyB).isStatic || s.isStatic || (u = .5), o.isStatic && (u = 0), l.moveTo(o.position.x, o.position.y), l.lineTo(o.position.x - r.penetration.x * u, o.position.y - r.penetration.y * u), u = 1, o.isStatic || s.isStatic || (u = .5), s.isStatic && (u = 0), l.moveTo(s.position.x, s.position.y), l.lineTo(s.position.x + r.penetration.x * u, s.position.y + r.penetration.y * u)
                        }
                    c.wireframes ? l.strokeStyle = "rgba(255,165,0,0.5)" : l.strokeStyle = "orange", l.stroke()
                }, n.grid = function(t, e, i) {
                    var n = i;
                    t.options.wireframes ? n.strokeStyle = "rgba(255,180,0,0.1)" : n.strokeStyle = "rgba(255,180,0,0.5)", n.beginPath();
                    for (var s = r.keys(e.buckets), o = 0; o < s.length; o++) {
                        var a = s[o];
                        if (!(e.buckets[a].length < 2)) {
                            var l = a.split(/C|R/);
                            n.rect(.5 + parseInt(l[1], 10) * e.bucketWidth, .5 + parseInt(l[2], 10) * e.bucketHeight, e.bucketWidth, e.bucketHeight)
                        }
                    }
                    n.lineWidth = 1, n.stroke()
                }, n.inspector = function(t, e) {
                    t.engine;
                    var i, n = t.selected,
                        r = t.render,
                        s = r.options;
                    if (s.hasBounds) {
                        var o = r.bounds.max.x - r.bounds.min.x,
                            a = r.bounds.max.y - r.bounds.min.y,
                            l = o / r.options.width,
                            c = a / r.options.height;
                        e.scale(1 / l, 1 / c), e.translate(-r.bounds.min.x, -r.bounds.min.y)
                    }
                    for (var u = 0; u < n.length; u++) {
                        var d = n[u].data;
                        switch (e.translate(.5, .5), e.lineWidth = 1, e.strokeStyle = "rgba(255,165,0,0.9)", e.setLineDash([1, 2]), d.type) {
                            case "body":
                                i = d.bounds, e.beginPath(), e.rect(Math.floor(i.min.x - 3), Math.floor(i.min.y - 3), Math.floor(i.max.x - i.min.x + 6), Math.floor(i.max.y - i.min.y + 6)), e.closePath(), e.stroke();
                                break;
                            case "constraint":
                                var h = d.pointA;
                                d.bodyA && (h = d.pointB), e.beginPath(), e.arc(h.x, h.y, 10, 0, 2 * Math.PI), e.closePath(), e.stroke()
                        }
                        e.setLineDash([]), e.translate(-.5, -.5)
                    }
                    null !== t.selectStart && (e.translate(.5, .5), e.lineWidth = 1, e.strokeStyle = "rgba(255,165,0,0.6)", e.fillStyle = "rgba(255,165,0,0.1)", i = t.selectBounds, e.beginPath(), e.rect(Math.floor(i.min.x), Math.floor(i.min.y), Math.floor(i.max.x - i.min.x), Math.floor(i.max.y - i.min.y)), e.closePath(), e.stroke(), e.fill(), e.translate(-.5, -.5)), s.hasBounds && e.setTransform(1, 0, 0, 1, 0, 0)
                };
                var i = function(t, e) {
                        var i = t.engine,
                            r = t.timing,
                            s = r.historySize,
                            o = i.timing.timestamp;
                        r.delta = e - r.lastTime || n._goodDelta, r.lastTime = e, r.timestampElapsed = o - r.lastTimestamp || 0, r.lastTimestamp = o, r.deltaHistory.unshift(r.delta), r.deltaHistory.length = Math.min(r.deltaHistory.length, s), r.engineDeltaHistory.unshift(i.timing.lastDelta), r.engineDeltaHistory.length = Math.min(r.engineDeltaHistory.length, s), r.timestampElapsedHistory.unshift(r.timestampElapsed), r.timestampElapsedHistory.length = Math.min(r.timestampElapsedHistory.length, s), r.engineElapsedHistory.unshift(i.timing.lastElapsed), r.engineElapsedHistory.length = Math.min(r.engineElapsedHistory.length, s), r.elapsedHistory.unshift(r.lastElapsed), r.elapsedHistory.length = Math.min(r.elapsedHistory.length, s)
                    },
                    u = function(t) {
                        for (var e = 0, i = 0; i < t.length; i += 1) e += t[i];
                        return e / t.length || 0
                    },
                    d = function(t, e) {
                        var i = document.createElement("canvas");
                        return i.width = t, i.height = e, i.oncontextmenu = function() {
                            return !1
                        }, i.onselectstart = function() {
                            return !1
                        }, i
                    },
                    h = function(t) {
                        var e = t.getContext("2d");
                        return (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
                    },
                    p = function(t, e) {
                        var i = t.textures[e];
                        return i || ((i = t.textures[e] = new Image).src = e, i)
                    },
                    f = function(t, e) {
                        var i = e;
                        /(jpg|gif|png)$/.test(e) && (i = "url(" + e + ")"), t.canvas.style.background = i, t.canvas.style.backgroundSize = "contain", t.currentBackground = e
                    }
            }()
        }, function(t, e) {
            var i = {};
            t.exports = i, i.create = function(t) {
                return {
                    id: i.id(t),
                    vertex: t,
                    normalImpulse: 0,
                    tangentImpulse: 0
                }
            }, i.id = function(t) {
                return t.body.id + "_" + t.index
            }
        }, function(t, e, i) {
            var n = {};
            t.exports = n;
            var r = i(7),
                s = i(19),
                o = i(13),
                a = i(20),
                l = i(21),
                c = i(4),
                u = i(5),
                d = i(8),
                h = i(0),
                p = i(6);
            n.create = function(t) {
                t = t || {};
                var e = h.extend({
                    positionIterations: 6,
                    velocityIterations: 4,
                    constraintIterations: 2,
                    enableSleeping: !1,
                    events: [],
                    plugin: {},
                    grid: null,
                    gravity: {
                        x: 0,
                        y: 1,
                        scale: .001
                    },
                    timing: {
                        timestamp: 0,
                        timeScale: 1,
                        lastDelta: 0,
                        lastElapsed: 0
                    }
                }, t);
                return e.world = t.world || u.create({
                    label: "World"
                }), e.grid = l.create(t.grid || t.broadphase), e.pairs = a.create(), e.world.gravity = e.gravity, e.broadphase = e.grid, e.metrics = {}, e
            }, n.update = function(t, e, i) {
                var p = h.now();
                e = e || 1e3 / 60, i = i || 1;
                var f, m, g = t.world,
                    v = t.timing,
                    y = t.grid;
                v.timestamp += e * v.timeScale, v.lastDelta = e * v.timeScale;
                var x = {
                    timestamp: v.timestamp
                };
                c.trigger(t, "beforeUpdate", x);
                var b = u.allBodies(g),
                    _ = u.allConstraints(g);
                for (t.enableSleeping && r.update(b, v.timeScale), n._bodiesApplyGravity(b, t.gravity), n._bodiesUpdate(b, e, v.timeScale, i, g.bounds), d.preSolveAll(b), m = 0; m < t.constraintIterations; m++) d.solveAll(_, v.timeScale);
                d.postSolveAll(b), g.isModified && l.clear(y), l.update(y, b, t, g.isModified), f = y.pairsList, g.isModified && u.setModified(g, !1, !1, !0);
                var w = o.collisions(f, t),
                    S = t.pairs,
                    M = v.timestamp;
                for (a.update(S, w, M), a.removeOld(S, M), t.enableSleeping && r.afterCollisions(S.list, v.timeScale), S.collisionStart.length > 0 && c.trigger(t, "collisionStart", {
                        pairs: S.collisionStart
                    }), s.preSolvePosition(S.list), m = 0; m < t.positionIterations; m++) s.solvePosition(S.list, v.timeScale);
                for (s.postSolvePosition(b), d.preSolveAll(b), m = 0; m < t.constraintIterations; m++) d.solveAll(_, v.timeScale);
                for (d.postSolveAll(b), s.preSolveVelocity(S.list), m = 0; m < t.velocityIterations; m++) s.solveVelocity(S.list, v.timeScale);
                return S.collisionActive.length > 0 && c.trigger(t, "collisionActive", {
                    pairs: S.collisionActive
                }), S.collisionEnd.length > 0 && c.trigger(t, "collisionEnd", {
                    pairs: S.collisionEnd
                }), n._bodiesClearForces(b), c.trigger(t, "afterUpdate", x), t.timing.lastElapsed = h.now() - p, t
            }, n.merge = function(t, e) {
                if (h.extend(t, e), e.world) {
                    t.world = e.world, n.clear(t);
                    for (var i = u.allBodies(t.world), s = 0; s < i.length; s++) {
                        var o = i[s];
                        r.set(o, !1), o.id = h.nextId()
                    }
                }
            }, n.clear = function(t) {
                var e = t.world,
                    i = u.allBodies(e);
                a.clear(t.pairs), l.clear(t.grid), l.update(t.grid, i, t, !0)
            }, n._bodiesClearForces = function(t) {
                for (var e = 0; e < t.length; e++) {
                    var i = t[e];
                    i.force.x = 0, i.force.y = 0, i.torque = 0
                }
            }, n._bodiesApplyGravity = function(t, e) {
                var i = void 0 !== e.scale ? e.scale : .001;
                if ((0 !== e.x || 0 !== e.y) && 0 !== i)
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.isStatic || r.isSleeping || (r.force.y += r.mass * e.y * i, r.force.x += r.mass * e.x * i)
                    }
            }, n._bodiesUpdate = function(t, e, i, n, r) {
                for (var s = 0; s < t.length; s++) {
                    var o = t[s];
                    o.isStatic || o.isSleeping || p.update(o, e, i, n)
                }
            }
        }, function(t, e, i) {
            var n = {};
            t.exports = n;
            var r = i(3),
                s = i(2),
                o = i(0),
                a = i(1);
            n._restingThresh = 4, n._restingThreshTangent = 6, n._positionDampen = .9, n._positionWarming = .8, n._frictionNormalMultiplier = 5, n.preSolvePosition = function(t) {
                var e, i, n;
                for (e = 0; e < t.length; e++)(i = t[e]).isActive && (n = i.activeContacts.length, i.collision.parentA.totalContacts += n, i.collision.parentB.totalContacts += n)
            }, n.solvePosition = function(t, e) {
                var i, r, o, a, l, c, u, d, h, p = s._temp[0],
                    f = s._temp[1],
                    m = s._temp[2],
                    g = s._temp[3];
                for (i = 0; i < t.length; i++)(r = t[i]).isActive && !r.isSensor && (a = (o = r.collision).parentA, l = o.parentB, c = o.normal, u = s.sub(s.add(l.positionImpulse, l.position, p), s.add(a.positionImpulse, s.sub(l.position, o.penetration, f), m), g), r.separation = s.dot(c, u));
                for (i = 0; i < t.length; i++)(r = t[i]).isActive && !r.isSensor && (a = (o = r.collision).parentA, l = o.parentB, c = o.normal, h = (r.separation - r.slop) * e, (a.isStatic || l.isStatic) && (h *= 2), a.isStatic || a.isSleeping || (d = n._positionDampen / a.totalContacts, a.positionImpulse.x += c.x * h * d, a.positionImpulse.y += c.y * h * d), l.isStatic || l.isSleeping || (d = n._positionDampen / l.totalContacts, l.positionImpulse.x -= c.x * h * d, l.positionImpulse.y -= c.y * h * d))
            }, n.postSolvePosition = function(t) {
                for (var e = 0; e < t.length; e++) {
                    var i = t[e];
                    if (i.totalContacts = 0, 0 !== i.positionImpulse.x || 0 !== i.positionImpulse.y) {
                        for (var o = 0; o < i.parts.length; o++) {
                            var l = i.parts[o];
                            r.translate(l.vertices, i.positionImpulse), a.update(l.bounds, l.vertices, i.velocity), l.position.x += i.positionImpulse.x, l.position.y += i.positionImpulse.y
                        }
                        i.positionPrev.x += i.positionImpulse.x, i.positionPrev.y += i.positionImpulse.y, s.dot(i.positionImpulse, i.velocity) < 0 ? (i.positionImpulse.x = 0, i.positionImpulse.y = 0) : (i.positionImpulse.x *= n._positionWarming, i.positionImpulse.y *= n._positionWarming)
                    }
                }
            }, n.preSolveVelocity = function(t) {
                var e, i, n, r, o, a, l, c, u, d, h, p, f, m, g = s._temp[0],
                    v = s._temp[1];
                for (e = 0; e < t.length; e++)
                    if ((n = t[e]).isActive && !n.isSensor)
                        for (r = n.activeContacts, a = (o = n.collision).parentA, l = o.parentB, c = o.normal, u = o.tangent, i = 0; i < r.length; i++) h = (d = r[i]).vertex, p = d.normalImpulse, f = d.tangentImpulse, 0 === p && 0 === f || (g.x = c.x * p + u.x * f, g.y = c.y * p + u.y * f, a.isStatic || a.isSleeping || (m = s.sub(h, a.position, v), a.positionPrev.x += g.x * a.inverseMass, a.positionPrev.y += g.y * a.inverseMass, a.anglePrev += s.cross(m, g) * a.inverseInertia), l.isStatic || l.isSleeping || (m = s.sub(h, l.position, v), l.positionPrev.x -= g.x * l.inverseMass, l.positionPrev.y -= g.y * l.inverseMass, l.anglePrev -= s.cross(m, g) * l.inverseInertia))
            }, n.solveVelocity = function(t, e) {
                for (var i = e * e, r = s._temp[0], a = s._temp[1], l = s._temp[2], c = s._temp[3], u = s._temp[4], d = s._temp[5], h = 0; h < t.length; h++) {
                    var p = t[h];
                    if (p.isActive && !p.isSensor) {
                        var f = p.collision,
                            m = f.parentA,
                            g = f.parentB,
                            v = f.normal,
                            y = f.tangent,
                            x = p.activeContacts,
                            b = 1 / x.length;
                        m.velocity.x = m.position.x - m.positionPrev.x, m.velocity.y = m.position.y - m.positionPrev.y, g.velocity.x = g.position.x - g.positionPrev.x, g.velocity.y = g.position.y - g.positionPrev.y, m.angularVelocity = m.angle - m.anglePrev, g.angularVelocity = g.angle - g.anglePrev;
                        for (var _ = 0; _ < x.length; _++) {
                            var w = x[_],
                                S = w.vertex,
                                M = s.sub(S, m.position, a),
                                A = s.sub(S, g.position, l),
                                k = s.add(m.velocity, s.mult(s.perp(M), m.angularVelocity), c),
                                P = s.add(g.velocity, s.mult(s.perp(A), g.angularVelocity), u),
                                T = s.sub(k, P, d),
                                C = s.dot(v, T),
                                B = s.dot(y, T),
                                O = Math.abs(B),
                                F = o.sign(B),
                                E = (1 + p.restitution) * C,
                                R = o.clamp(p.separation + C, 0, 1) * n._frictionNormalMultiplier,
                                I = B,
                                L = 1 / 0;
                            O > p.friction * p.frictionStatic * R * i && (L = O, I = o.clamp(p.friction * F * i, -L, L));
                            var D = s.cross(M, v),
                                z = s.cross(A, v),
                                V = b / (m.inverseMass + g.inverseMass + m.inverseInertia * D * D + g.inverseInertia * z * z);
                            if (E *= V, I *= V, C < 0 && C * C > n._restingThresh * i) w.normalImpulse = 0;
                            else {
                                var q = w.normalImpulse;
                                w.normalImpulse = Math.min(w.normalImpulse + E, 0), E = w.normalImpulse - q
                            }
                            if (B * B > n._restingThreshTangent * i) w.tangentImpulse = 0;
                            else {
                                var W = w.tangentImpulse;
                                w.tangentImpulse = o.clamp(w.tangentImpulse + I, -L, L), I = w.tangentImpulse - W
                            }
                            r.x = v.x * E + y.x * I, r.y = v.y * E + y.y * I, m.isStatic || m.isSleeping || (m.positionPrev.x += r.x * m.inverseMass, m.positionPrev.y += r.y * m.inverseMass, m.anglePrev += s.cross(M, r) * m.inverseInertia), g.isStatic || g.isSleeping || (g.positionPrev.x -= r.x * g.inverseMass, g.positionPrev.y -= r.y * g.inverseMass, g.anglePrev -= s.cross(A, r) * g.inverseInertia)
                        }
                    }
                }
            }
        }, function(t, e, i) {
            var n = {};
            t.exports = n;
            var r = i(9),
                s = i(0);
            n._pairMaxIdleLife = 1e3, n.create = function(t) {
                return s.extend({
                    table: {},
                    list: [],
                    collisionStart: [],
                    collisionActive: [],
                    collisionEnd: []
                }, t)
            }, n.update = function(t, e, i) {
                var n, s, o, a, l = t.list,
                    c = t.table,
                    u = t.collisionStart,
                    d = t.collisionEnd,
                    h = t.collisionActive;
                for (u.length = 0, d.length = 0, h.length = 0, a = 0; a < l.length; a++) l[a].confirmedActive = !1;
                for (a = 0; a < e.length; a++)(n = e[a]).collided && ((o = c[s = r.id(n.bodyA, n.bodyB)]) ? (o.isActive ? h.push(o) : u.push(o), r.update(o, n, i), o.confirmedActive = !0) : (o = r.create(n, i), c[s] = o, u.push(o), l.push(o)));
                for (a = 0; a < l.length; a++)(o = l[a]).isActive && !o.confirmedActive && (r.setActive(o, !1, i), d.push(o))
            }, n.removeOld = function(t, e) {
                var i, r, s, o, a = t.list,
                    l = t.table,
                    c = [];
                for (o = 0; o < a.length; o++)(r = (i = a[o]).collision).bodyA.isSleeping || r.bodyB.isSleeping ? i.timeUpdated = e : e - i.timeUpdated > n._pairMaxIdleLife && c.push(o);
                for (o = 0; o < c.length; o++) delete l[(i = a[s = c[o] - o]).id], a.splice(s, 1)
            }, n.clear = function(t) {
                return t.table = {}, t.list.length = 0, t.collisionStart.length = 0, t.collisionActive.length = 0, t.collisionEnd.length = 0, t
            }
        }, function(t, e, i) {
            var n = {};
            t.exports = n;
            var r = i(9),
                s = i(0);
            n.create = function(t) {
                return s.extend({
                    buckets: {},
                    pairs: {},
                    pairsList: [],
                    bucketWidth: 48,
                    bucketHeight: 48
                }, t)
            }, n.update = function(t, e, i, r) {
                var s, o, a, l, c, u = i.world,
                    d = t.buckets,
                    h = !1;
                for (s = 0; s < e.length; s++) {
                    var p = e[s];
                    if ((!p.isSleeping || r) && (!u.bounds || !(p.bounds.max.x < u.bounds.min.x || p.bounds.min.x > u.bounds.max.x || p.bounds.max.y < u.bounds.min.y || p.bounds.min.y > u.bounds.max.y))) {
                        var f = n._getRegion(t, p);
                        if (!p.region || f.id !== p.region.id || r) {
                            p.region && !r || (p.region = f);
                            var m = n._regionUnion(f, p.region);
                            for (o = m.startCol; o <= m.endCol; o++)
                                for (a = m.startRow; a <= m.endRow; a++) {
                                    l = d[c = n._getBucketId(o, a)];
                                    var g = o >= f.startCol && o <= f.endCol && a >= f.startRow && a <= f.endRow,
                                        v = o >= p.region.startCol && o <= p.region.endCol && a >= p.region.startRow && a <= p.region.endRow;
                                    !g && v && v && l && n._bucketRemoveBody(t, l, p), (p.region === f || g && !v || r) && (l || (l = n._createBucket(d, c)), n._bucketAddBody(t, l, p))
                                }
                            p.region = f, h = !0
                        }
                    }
                }
                h && (t.pairsList = n._createActivePairsList(t))
            }, n.clear = function(t) {
                t.buckets = {}, t.pairs = {}, t.pairsList = []
            }, n._regionUnion = function(t, e) {
                var i = Math.min(t.startCol, e.startCol),
                    r = Math.max(t.endCol, e.endCol),
                    s = Math.min(t.startRow, e.startRow),
                    o = Math.max(t.endRow, e.endRow);
                return n._createRegion(i, r, s, o)
            }, n._getRegion = function(t, e) {
                var i = e.bounds,
                    r = Math.floor(i.min.x / t.bucketWidth),
                    s = Math.floor(i.max.x / t.bucketWidth),
                    o = Math.floor(i.min.y / t.bucketHeight),
                    a = Math.floor(i.max.y / t.bucketHeight);
                return n._createRegion(r, s, o, a)
            }, n._createRegion = function(t, e, i, n) {
                return {
                    id: t + "," + e + "," + i + "," + n,
                    startCol: t,
                    endCol: e,
                    startRow: i,
                    endRow: n
                }
            }, n._getBucketId = function(t, e) {
                return "C" + t + "R" + e
            }, n._createBucket = function(t, e) {
                return t[e] = []
            }, n._bucketAddBody = function(t, e, i) {
                for (var n = 0; n < e.length; n++) {
                    var s = e[n];
                    if (!(i.id === s.id || i.isStatic && s.isStatic)) {
                        var o = r.id(i, s),
                            a = t.pairs[o];
                        a ? a[2] += 1 : t.pairs[o] = [i, s, 1]
                    }
                }
                e.push(i)
            }, n._bucketRemoveBody = function(t, e, i) {
                e.splice(s.indexOf(e, i), 1);
                for (var n = 0; n < e.length; n++) {
                    var o = e[n],
                        a = r.id(i, o),
                        l = t.pairs[a];
                    l && (l[2] -= 1)
                }
            }, n._createActivePairsList = function(t) {
                var e, i, n = [];
                e = s.keys(t.pairs);
                for (var r = 0; r < e.length; r++)(i = t.pairs[e[r]])[2] > 0 ? n.push(i) : delete t.pairs[e[r]];
                return n
            }
        }, function(t, e, i) {
            var n = t.exports = i(23);
            n.Axes = i(10), n.Bodies = i(11), n.Body = i(6), n.Bounds = i(1), n.Common = i(0), n.Composite = i(5), n.Composites = i(24), n.Constraint = i(8), n.Contact = i(17), n.Detector = i(13), n.Engine = i(18), n.Events = i(4), n.Grid = i(21), n.Mouse = i(12), n.MouseConstraint = i(25), n.Pair = i(9), n.Pairs = i(20), n.Plugin = i(15), n.Query = i(26), n.Render = i(16), n.Resolver = i(19), n.Runner = i(27), n.SAT = i(14), n.Sleeping = i(7), n.Svg = i(28), n.Vector = i(2), n.Vertices = i(3), n.World = i(29), n.Engine.run = n.Runner.run, n.Common.deprecated(n.Engine, "run", "Engine.run ➤ use Matter.Runner.run(engine) instead")
        }, function(t, e, i) {
            var n = {};
            t.exports = n;
            var r = i(15),
                s = i(0);
            n.name = "matter-js", n.version = "0.17.1", n.uses = [], n.used = [], n.use = function() {
                r.use(n, Array.prototype.slice.call(arguments))
            }, n.before = function(t, e) {
                return t = t.replace(/^Matter./, ""), s.chainPathBefore(n, t, e)
            }, n.after = function(t, e) {
                return t = t.replace(/^Matter./, ""), s.chainPathAfter(n, t, e)
            }
        }, function(t, e, i) {
            var n = {};
            t.exports = n;
            var r = i(5),
                s = i(8),
                o = i(0),
                a = i(6),
                l = i(11),
                c = o.deprecated;
            n.stack = function(t, e, i, n, s, o, l) {
                for (var c, u = r.create({
                        label: "Stack"
                    }), d = t, h = e, p = 0, f = 0; f < n; f++) {
                    for (var m = 0, g = 0; g < i; g++) {
                        var v = l(d, h, g, f, c, p);
                        if (v) {
                            var y = v.bounds.max.y - v.bounds.min.y,
                                x = v.bounds.max.x - v.bounds.min.x;
                            y > m && (m = y), a.translate(v, {
                                x: .5 * x,
                                y: .5 * y
                            }), d = v.bounds.max.x + s, r.addBody(u, v), c = v, p += 1
                        } else d += s
                    }
                    h += m + o, d = t
                }
                return u
            }, n.chain = function(t, e, i, n, a, l) {
                for (var c = t.bodies, u = 1; u < c.length; u++) {
                    var d = c[u - 1],
                        h = c[u],
                        p = d.bounds.max.y - d.bounds.min.y,
                        f = d.bounds.max.x - d.bounds.min.x,
                        m = h.bounds.max.y - h.bounds.min.y,
                        g = {
                            bodyA: d,
                            pointA: {
                                x: f * e,
                                y: p * i
                            },
                            bodyB: h,
                            pointB: {
                                x: (h.bounds.max.x - h.bounds.min.x) * n,
                                y: m * a
                            }
                        },
                        v = o.extend(g, l);
                    r.addConstraint(t, s.create(v))
                }
                return t.label += " Chain", t
            }, n.mesh = function(t, e, i, n, a) {
                var l, c, u, d, h, p = t.bodies;
                for (l = 0; l < i; l++) {
                    for (c = 1; c < e; c++) u = p[c - 1 + l * e], d = p[c + l * e], r.addConstraint(t, s.create(o.extend({
                        bodyA: u,
                        bodyB: d
                    }, a)));
                    if (l > 0)
                        for (c = 0; c < e; c++) u = p[c + (l - 1) * e], d = p[c + l * e], r.addConstraint(t, s.create(o.extend({
                            bodyA: u,
                            bodyB: d
                        }, a))), n && c > 0 && (h = p[c - 1 + (l - 1) * e], r.addConstraint(t, s.create(o.extend({
                            bodyA: h,
                            bodyB: d
                        }, a)))), n && c < e - 1 && (h = p[c + 1 + (l - 1) * e], r.addConstraint(t, s.create(o.extend({
                            bodyA: h,
                            bodyB: d
                        }, a))))
                }
                return t.label += " Mesh", t
            }, n.pyramid = function(t, e, i, r, s, o, l) {
                return n.stack(t, e, i, r, s, o, (function(e, n, o, c, u, d) {
                    var h = Math.min(r, Math.ceil(i / 2)),
                        p = u ? u.bounds.max.x - u.bounds.min.x : 0;
                    if (!(c > h || o < (c = h - c) || o > i - 1 - c)) return 1 === d && a.translate(u, {
                        x: (o + (i % 2 == 1 ? 1 : -1)) * p,
                        y: 0
                    }), l(t + (u ? o * p : 0) + o * s, n, o, c, u, d)
                }))
            }, n.newtonsCradle = function(t, e, i, n, o) {
                for (var a = r.create({
                        label: "Newtons Cradle"
                    }), c = 0; c < i; c++) {
                    var u = l.circle(t + c * (1.9 * n), e + o, n, {
                            inertia: 1 / 0,
                            restitution: 1,
                            friction: 0,
                            frictionAir: 1e-4,
                            slop: 1
                        }),
                        d = s.create({
                            pointA: {
                                x: t + c * (1.9 * n),
                                y: e
                            },
                            bodyB: u
                        });
                    r.addBody(a, u), r.addConstraint(a, d)
                }
                return a
            }, c(n, "newtonsCradle", "Composites.newtonsCradle ➤ moved to newtonsCradle example"), n.car = function(t, e, i, n, o) {
                var c = a.nextGroup(!0),
                    u = .5 * -i + 20,
                    d = .5 * i - 20,
                    h = r.create({
                        label: "Car"
                    }),
                    p = l.rectangle(t, e, i, n, {
                        collisionFilter: {
                            group: c
                        },
                        chamfer: {
                            radius: .5 * n
                        },
                        density: 2e-4
                    }),
                    f = l.circle(t + u, e + 0, o, {
                        collisionFilter: {
                            group: c
                        },
                        friction: .8
                    }),
                    m = l.circle(t + d, e + 0, o, {
                        collisionFilter: {
                            group: c
                        },
                        friction: .8
                    }),
                    g = s.create({
                        bodyB: p,
                        pointB: {
                            x: u,
                            y: 0
                        },
                        bodyA: f,
                        stiffness: 1,
                        length: 0
                    }),
                    v = s.create({
                        bodyB: p,
                        pointB: {
                            x: d,
                            y: 0
                        },
                        bodyA: m,
                        stiffness: 1,
                        length: 0
                    });
                return r.addBody(h, p), r.addBody(h, f), r.addBody(h, m), r.addConstraint(h, g), r.addConstraint(h, v), h
            }, c(n, "car", "Composites.car ➤ moved to car example"), n.softBody = function(t, e, i, r, s, a, c, u, d, h) {
                d = o.extend({
                    inertia: 1 / 0
                }, d), h = o.extend({
                    stiffness: .2,
                    render: {
                        type: "line",
                        anchors: !1
                    }
                }, h);
                var p = n.stack(t, e, i, r, s, a, (function(t, e) {
                    return l.circle(t, e, u, d)
                }));
                return n.mesh(p, i, r, c, h), p.label = "Soft Body", p
            }, c(n, "softBody", "Composites.softBody ➤ moved to softBody and cloth examples")
        }, function(t, e, i) {
            var n = {};
            t.exports = n;
            var r = i(3),
                s = i(7),
                o = i(12),
                a = i(4),
                l = i(13),
                c = i(8),
                u = i(5),
                d = i(0),
                h = i(1);
            n.create = function(t, e) {
                var i = (t ? t.mouse : null) || (e ? e.mouse : null);
                i || (t && t.render && t.render.canvas ? i = o.create(t.render.canvas) : e && e.element ? i = o.create(e.element) : (i = o.create(), d.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));
                var r = {
                        type: "mouseConstraint",
                        mouse: i,
                        element: null,
                        body: null,
                        constraint: c.create({
                            label: "Mouse Constraint",
                            pointA: i.position,
                            pointB: {
                                x: 0,
                                y: 0
                            },
                            length: .01,
                            stiffness: .1,
                            angularStiffness: 1,
                            render: {
                                strokeStyle: "#90EE90",
                                lineWidth: 3
                            }
                        }),
                        collisionFilter: {
                            category: 1,
                            mask: 4294967295,
                            group: 0
                        }
                    },
                    s = d.extend(r, e);
                return a.on(t, "beforeUpdate", (function() {
                    var e = u.allBodies(t.world);
                    n.update(s, e), n._triggerEvents(s)
                })), s
            }, n.update = function(t, e) {
                var i = t.mouse,
                    n = t.constraint,
                    o = t.body;
                if (0 === i.button) {
                    if (n.bodyB) s.set(n.bodyB, !1), n.pointA = i.position;
                    else
                        for (var c = 0; c < e.length; c++)
                            if (o = e[c], h.contains(o.bounds, i.position) && l.canCollide(o.collisionFilter, t.collisionFilter))
                                for (var u = o.parts.length > 1 ? 1 : 0; u < o.parts.length; u++) {
                                    var d = o.parts[u];
                                    if (r.contains(d.vertices, i.position)) {
                                        n.pointA = i.position, n.bodyB = t.body = o, n.pointB = {
                                            x: i.position.x - o.position.x,
                                            y: i.position.y - o.position.y
                                        }, n.angleB = o.angle, s.set(o, !1), a.trigger(t, "startdrag", {
                                            mouse: i,
                                            body: o
                                        });
                                        break
                                    }
                                }
                } else n.bodyB = t.body = null, n.pointB = null, o && a.trigger(t, "enddrag", {
                    mouse: i,
                    body: o
                })
            }, n._triggerEvents = function(t) {
                var e = t.mouse,
                    i = e.sourceEvents;
                i.mousemove && a.trigger(t, "mousemove", {
                    mouse: e
                }), i.mousedown && a.trigger(t, "mousedown", {
                    mouse: e
                }), i.mouseup && a.trigger(t, "mouseup", {
                    mouse: e
                }), o.clearSourceEvents(e)
            }
        }, function(t, e, i) {
            var n = {};
            t.exports = n;
            var r = i(2),
                s = i(14),
                o = i(1),
                a = i(11),
                l = i(3);
            n.collides = function(t, e) {
                for (var i = [], n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (o.overlaps(r.bounds, t.bounds))
                        for (var a = 1 === r.parts.length ? 0 : 1; a < r.parts.length; a++) {
                            var l = r.parts[a];
                            if (o.overlaps(l.bounds, t.bounds)) {
                                var c = s.collides(l, t);
                                if (c.collided) {
                                    i.push(c);
                                    break
                                }
                            }
                        }
                }
                return i
            }, n.ray = function(t, e, i, s) {
                s = s || 1e-100;
                for (var o = r.angle(e, i), l = r.magnitude(r.sub(e, i)), c = .5 * (i.x + e.x), u = .5 * (i.y + e.y), d = a.rectangle(c, u, l, s, {
                        angle: o
                    }), h = n.collides(d, t), p = 0; p < h.length; p += 1) {
                    var f = h[p];
                    f.body = f.bodyB = f.bodyA
                }
                return h
            }, n.region = function(t, e, i) {
                for (var n = [], r = 0; r < t.length; r++) {
                    var s = t[r],
                        a = o.overlaps(s.bounds, e);
                    (a && !i || !a && i) && n.push(s)
                }
                return n
            }, n.point = function(t, e) {
                for (var i = [], n = 0; n < t.length; n++) {
                    var r = t[n];
                    if (o.contains(r.bounds, e))
                        for (var s = 1 === r.parts.length ? 0 : 1; s < r.parts.length; s++) {
                            var a = r.parts[s];
                            if (o.contains(a.bounds, e) && l.contains(a.vertices, e)) {
                                i.push(r);
                                break
                            }
                        }
                }
                return i
            }
        }, function(t, e, i) {
            var n = {};
            t.exports = n;
            var r, s, o, a = i(4),
                l = i(18),
                c = i(0);
            "undefined" != typeof window && (r = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame, s = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame), r || (r = function(t) {
                o = setTimeout((function() {
                    t(c.now())
                }), 1e3 / 60)
            }, s = function() {
                clearTimeout(o)
            }), n.create = function(t) {
                var e = c.extend({
                    fps: 60,
                    correction: 1,
                    deltaSampleSize: 60,
                    counterTimestamp: 0,
                    frameCounter: 0,
                    deltaHistory: [],
                    timePrev: null,
                    timeScalePrev: 1,
                    frameRequestId: null,
                    isFixed: !1,
                    enabled: !0
                }, t);
                return e.delta = e.delta || 1e3 / e.fps, e.deltaMin = e.deltaMin || 1e3 / e.fps, e.deltaMax = e.deltaMax || 1e3 / (.5 * e.fps), e.fps = 1e3 / e.delta, e
            }, n.run = function(t, e) {
                return void 0 !== t.positionIterations && (e = t, t = n.create()),
                    function i(s) {
                        t.frameRequestId = r(i), s && t.enabled && n.tick(t, e, s)
                    }(), t
            }, n.tick = function(t, e, i) {
                var n, r = e.timing,
                    s = 1,
                    o = {
                        timestamp: r.timestamp
                    };
                a.trigger(t, "beforeTick", o), t.isFixed ? n = t.delta : (n = i - t.timePrev || t.delta, t.timePrev = i, t.deltaHistory.push(n), t.deltaHistory = t.deltaHistory.slice(-t.deltaSampleSize), s = (n = (n = (n = Math.min.apply(null, t.deltaHistory)) < t.deltaMin ? t.deltaMin : n) > t.deltaMax ? t.deltaMax : n) / t.delta, t.delta = n), 0 !== t.timeScalePrev && (s *= r.timeScale / t.timeScalePrev), 0 === r.timeScale && (s = 0), t.timeScalePrev = r.timeScale, t.correction = s, t.frameCounter += 1, i - t.counterTimestamp >= 1e3 && (t.fps = t.frameCounter * ((i - t.counterTimestamp) / 1e3), t.counterTimestamp = i, t.frameCounter = 0), a.trigger(t, "tick", o), a.trigger(t, "beforeUpdate", o), l.update(e, n, s), a.trigger(t, "afterUpdate", o), a.trigger(t, "afterTick", o)
            }, n.stop = function(t) {
                s(t.frameRequestId)
            }, n.start = function(t, e) {
                n.run(t, e)
            }
        }, function(t, e, i) {
            var n = {};
            t.exports = n, i(1);
            var r = i(0);
            n.pathToVertices = function(t, e) {
                "undefined" == typeof window || "SVGPathSeg" in window || r.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");
                var i, s, o, a, l, c, u, d, h, p, f, m = [],
                    g = 0,
                    v = 0,
                    y = 0;
                e = e || 15;
                var x = function(t, e, i) {
                        var n = i % 2 == 1 && i > 1;
                        if (!h || t != h.x || e != h.y) {
                            h && n ? (p = h.x, f = h.y) : (p = 0, f = 0);
                            var r = {
                                x: p + t,
                                y: f + e
                            };
                            !n && h || (h = r), m.push(r), v = p + t, y = f + e
                        }
                    },
                    b = function(t) {
                        var e = t.pathSegTypeAsLetter.toUpperCase();
                        if ("Z" !== e) {
                            switch (e) {
                                case "M":
                                case "L":
                                case "T":
                                case "C":
                                case "S":
                                case "Q":
                                    v = t.x, y = t.y;
                                    break;
                                case "H":
                                    v = t.x;
                                    break;
                                case "V":
                                    y = t.y
                            }
                            x(v, y, t.pathSegType)
                        }
                    };
                for (n._svgPathToAbsolute(t), o = t.getTotalLength(), c = [], i = 0; i < t.pathSegList.numberOfItems; i += 1) c.push(t.pathSegList.getItem(i));
                for (u = c.concat(); g < o;) {
                    if ((l = c[t.getPathSegAtLength(g)]) != d) {
                        for (; u.length && u[0] != l;) b(u.shift());
                        d = l
                    }
                    switch (l.pathSegTypeAsLetter.toUpperCase()) {
                        case "C":
                        case "T":
                        case "S":
                        case "Q":
                        case "A":
                            a = t.getPointAtLength(g), x(a.x, a.y, 0)
                    }
                    g += e
                }
                for (i = 0, s = u.length; i < s; ++i) b(u[i]);
                return m
            }, n._svgPathToAbsolute = function(t) {
                for (var e, i, n, r, s, o, a = t.pathSegList, l = 0, c = 0, u = a.numberOfItems, d = 0; d < u; ++d) {
                    var h = a.getItem(d),
                        p = h.pathSegTypeAsLetter;
                    if (/[MLHVCSQTA]/.test(p)) "x" in h && (l = h.x), "y" in h && (c = h.y);
                    else switch ("x1" in h && (n = l + h.x1), "x2" in h && (s = l + h.x2), "y1" in h && (r = c + h.y1), "y2" in h && (o = c + h.y2), "x" in h && (l += h.x), "y" in h && (c += h.y), p) {
                        case "m":
                            a.replaceItem(t.createSVGPathSegMovetoAbs(l, c), d);
                            break;
                        case "l":
                            a.replaceItem(t.createSVGPathSegLinetoAbs(l, c), d);
                            break;
                        case "h":
                            a.replaceItem(t.createSVGPathSegLinetoHorizontalAbs(l), d);
                            break;
                        case "v":
                            a.replaceItem(t.createSVGPathSegLinetoVerticalAbs(c), d);
                            break;
                        case "c":
                            a.replaceItem(t.createSVGPathSegCurvetoCubicAbs(l, c, n, r, s, o), d);
                            break;
                        case "s":
                            a.replaceItem(t.createSVGPathSegCurvetoCubicSmoothAbs(l, c, s, o), d);
                            break;
                        case "q":
                            a.replaceItem(t.createSVGPathSegCurvetoQuadraticAbs(l, c, n, r), d);
                            break;
                        case "t":
                            a.replaceItem(t.createSVGPathSegCurvetoQuadraticSmoothAbs(l, c), d);
                            break;
                        case "a":
                            a.replaceItem(t.createSVGPathSegArcAbs(l, c, h.r1, h.r2, h.angle, h.largeArcFlag, h.sweepFlag), d);
                            break;
                        case "z":
                        case "Z":
                            l = e, c = i
                    }
                    "M" != p && "m" != p || (e = l, i = c)
                }
            }
        }, function(t, e, i) {
            var n = {};
            t.exports = n;
            var r = i(5);
            i(0), n.create = r.create, n.add = r.add, n.remove = r.remove, n.clear = r.clear, n.addComposite = r.addComposite, n.addBody = r.addBody, n.addConstraint = r.addConstraint
        }])
    }, r.exports = n();
    var s = i(r.exports);
    const o = new class {
        init() {
            this.canvas = document.querySelector(".slingshot"), this.content = document.querySelector(".site-content"), this.title = document.querySelector(".site-title"), this.svg = this.title.querySelector("svg"), this.paths = this.title.querySelectorAll("path"), this.letters = [], this.rocks = [], this.isRockVisible = !1, this.engine = s.Engine.create({
                enableSleeping: !0
            }), this.world = this.engine.world, this.render = s.Render.create({
                element: document.body,
                engine: this.engine,
                canvas: this.canvas,
                options: {
                    background: "transparent",
                    width: window.innerWidth,
                    height: window.innerHeight,
                    showAngleIndicator: !1,
                    showSleeping: !1,
                    wireframes: !1
                }
            }), s.Render.run(this.render), this.runner = s.Runner.create(), s.Runner.run(this.runner, this.engine)
        }
        intro() {
            this.createWorld(), this.addLetters(!0)
        }
        resizeHandler() {
            this.canvas && (this.canvas.width = window.innerWidth, this.canvas.height = window.innerHeight, s.Composite.clear(this.world), s.Events.off(this.engine), this.createWorld(), this.addLetters(!1))
        }
        createWorld() {
            const t = this;
            this.mouse = s.Mouse.create(this.render.canvas), this.mouseConstraint = s.MouseConstraint.create(this.engine, {
                mouse: this.mouse,
                constraint: {
                    stiffness: .2,
                    render: {
                        visible: !1
                    }
                }
            }), s.Composite.add(this.world, this.mouseConstraint), this.render.mouse = this.mouse, this.mouseConstraint.collisionFilter.mask = 12, this.mouse.element.removeEventListener("mousewheel", this.mouse.mousewheel), this.mouse.element.removeEventListener("DOMMouseScroll", this.mouse.mousewheel), this.mouse.element.removeEventListener("touchmove", this.mouseConstraint.mouse.mousemove), this.mouse.element.removeEventListener("touchstart", this.mouseConstraint.mouse.mousedown), this.mouse.element.removeEventListener("touchend", this.mouseConstraint.mouse.mouseup);
            const e = this.svg.querySelector("g:first-child").getBoundingClientRect(),
                i = s.Bodies.rectangle(e.left + e.width / 2, e.top + e.height + 5 + 10, e.width, 10, {
                    isStatic: !0,
                    collisionFilter: {
                        category: 2
                    },
                    render: {
                        visible: !1,
                        fillStyle: "#000"
                    }
                });
            s.Composite.add(this.world, i), s.Events.on(this.engine, "afterUpdate", (function() {
                t.rocks.forEach((e => {
                    e.position.y > 1.1 * window.innerHeight && (s.Composite.remove(this.world, e), t.rocks.splice(t.rocks.indexOf(e), 1))
                })), t.letters.forEach((e => {
                    const i = e.position;
                    (i.x < e.minX || i.x > e.maxX || i.y > e.maxY) && (s.Composite.remove(this.world, e), t.letters.splice(t.letters.indexOf(e), 1), 0 === t.letters.length && setTimeout(t.addLetters.bind(t, !0), 500))
                })), Math.random() < .02 && t.launchRock()
            }))
        }
        addLetters(t = !1) {
            this.letters = [];
            const e = this.svg.getBoundingClientRect(),
                i = t ? e.top + e.height : 0;
            let n = 1;
            n = e.width * (400 / 873) > e.height ? e.height / 400 : e.width / 873, this.paths.forEach((e => {
                const r = e.dataset.letter,
                    o = e.getBoundingClientRect(),
                    a = s.Bodies.rectangle(o.left + o.width / 2, o.top + o.height / 2 - i, o.width, o.height + 20, {
                        frictionAir: .02 * Math.random(),
                        isSleeping: !t,
                        collisionFilter: {
                            category: 4
                        },
                        render: {
                            sprite: {
                                texture: "/static/letter-" + r + ".svg",
                                xScale: n,
                                yScale: n
                            }
                        }
                    });
                a.offset = Math.hypot(o.width, o.height + 20), a.minX = -a.offset, a.maxX = window.innerWidth + a.offset, a.maxY = window.innerHeight + a.offset, a.path = e, this.letters.push(a)
            })), s.Composite.add(this.world, this.letters)
        }
        showRock() {
            this.isRockVisible = !0, this.launchRock()
        }
        hideRock() {
            this.isRockVisible = !1
        }
        launchRock() {
            if (this.isRockVisible) {
                const t = this.createRock();
                this.rocks.push(t), s.Composite.add(this.world, t)
            }
        }
        createRock() {
            const t = Math.max(.05 * window.innerWidth, 50),
                e = .345 * t,
                i = t / 62;
            return s.Bodies.rectangle(.1 * window.innerWidth + Math.random() * window.innerWidth * .8, -e, t, e, {
                density: .1,
                angle: (90 - 180 * Math.random()) * (Math.PI / 180),
                collisionFilter: {
                    category: 8,
                    mask: 5
                },
                render: {
                    sprite: {
                        texture: "/static/logo.svg",
                        xScale: i,
                        yScale: i
                    }
                }
            })
        }
    };

    function a(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function l(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    /*!
     * GSAP 3.7.1
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var c, u, d, h, p, f, m, g, v, y, x, b, _, w, S, M, A, k, P, T, C, B, O, F, E, R, I, L, D = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        z = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        V = 1e8,
        q = 1e-8,
        W = 2 * Math.PI,
        N = W / 4,
        H = 0,
        j = Math.sqrt,
        U = Math.cos,
        Y = Math.sin,
        X = function(t) {
            return "string" == typeof t
        },
        G = function(t) {
            return "function" == typeof t
        },
        Q = function(t) {
            return "number" == typeof t
        },
        Z = function(t) {
            return void 0 === t
        },
        K = function(t) {
            return "object" == typeof t
        },
        J = function(t) {
            return !1 !== t
        },
        $ = function() {
            return "undefined" != typeof window
        },
        tt = function(t) {
            return G(t) || X(t)
        },
        et = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        it = Array.isArray,
        nt = /(?:-?\.?\d|\.)+/gi,
        rt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        st = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        ot = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        at = /[+-]=-?[.\d]+/,
        lt = /[^,'"\[\]\s]+/gi,
        ct = /[\d.+\-=]+(?:e[-+]\d*)*/i,
        ut = {},
        dt = {},
        ht = function(t) {
            return (dt = Dt(t, ut)) && Mi
        },
        pt = function(t, e) {
            return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
        },
        ft = function(t, e) {
            return !e && console.warn(t)
        },
        mt = function(t, e) {
            return t && (ut[t] = e) && dt && (dt[t] = e) || ut
        },
        gt = function() {
            return 0
        },
        vt = {},
        yt = [],
        xt = {},
        bt = {},
        _t = {},
        wt = 30,
        St = [],
        Mt = "",
        At = function(t) {
            var e, i, n = t[0];
            if (K(n) || G(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
                for (i = St.length; i-- && !St[i].targetTest(n););
                e = St[i]
            }
            for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new Qe(t[i], e))) || t.splice(i, 1);
            return t
        },
        kt = function(t) {
            return t._gsap || At(fe(t))[0]._gsap
        },
        Pt = function(t, e, i) {
            return (i = t[e]) && G(i) ? t[e]() : Z(i) && t.getAttribute && t.getAttribute(e) || i
        },
        Tt = function(t, e) {
            return (t = t.split(",")).forEach(e) || t
        },
        Ct = function(t) {
            return Math.round(1e5 * t) / 1e5 || 0
        },
        Bt = function(t, e) {
            for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i;);
            return n < i
        },
        Ot = function() {
            var t, e, i = yt.length,
                n = yt.slice(0);
            for (xt = {}, yt.length = 0, t = 0; t < i; t++)(e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        Ft = function(t, e, i, n) {
            yt.length && Ot(), t.render(e, i, n), yt.length && Ot()
        },
        Et = function(t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(lt).length < 2 ? e : X(t) ? t.trim() : t
        },
        Rt = function(t) {
            return t
        },
        It = function(t, e) {
            for (var i in e) i in t || (t[i] = e[i]);
            return t
        },
        Lt = function(t, e) {
            for (var i in e) i in t || "duration" === i || "ease" === i || (t[i] = e[i])
        },
        Dt = function(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        },
        zt = function t(e, i) {
            for (var n in i) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = K(i[n]) ? t(e[n] || (e[n] = {}), i[n]) : i[n]);
            return e
        },
        Vt = function(t, e) {
            var i, n = {};
            for (i in t) i in e || (n[i] = t[i]);
            return n
        },
        qt = function(t) {
            var e = t.parent || u,
                i = t.keyframes ? Lt : It;
            if (J(t.inherit))
                for (; e;) i(t, e.vars.defaults), e = e.parent || e._dp;
            return t
        },
        Wt = function(t, e, i, n) {
            void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
            var r = e._prev,
                s = e._next;
            r ? r._next = s : t[i] === e && (t[i] = s), s ? s._prev = r : t[n] === e && (t[n] = r), e._next = e._prev = e.parent = null
        },
        Nt = function(t, e) {
            t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
        },
        Ht = function(t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
                for (var i = t; i;) i._dirty = 1, i = i.parent;
            return t
        },
        jt = function(t) {
            for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
            return t
        },
        Ut = function t(e) {
            return !e || e._ts && t(e.parent)
        },
        Yt = function(t) {
            return t._repeat ? Xt(t._tTime, t = t.duration() + t._rDelay) * t : 0
        },
        Xt = function(t, e) {
            var i = Math.floor(t /= e);
            return t && i === t ? i - 1 : i
        },
        Gt = function(t, e) {
            return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        },
        Qt = function(t) {
            return t._end = Ct(t._start + (t._tDur / Math.abs(t._ts || t._rts || q) || 0))
        },
        Zt = function(t, e) {
            var i = t._dp;
            return i && i.smoothChildTiming && t._ts && (t._start = Ct(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Qt(t), i._dirty || Ht(i, t)), t
        },
        Kt = function(t, e) {
            var i;
            if ((e._time || e._initted && !e._dur) && (i = Gt(t.rawTime(), e), (!e._dur || ce(0, e.totalDuration(), i) - e._tTime > q) && e.render(i, !0)), Ht(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration())
                    for (i = t; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
                t._zTime = -1e-8
            }
        },
        Jt = function(t, e, i, n) {
            return e.parent && Nt(e), e._start = Ct((Q(i) ? i : i || t !== u ? oe(t, i, e) : t._time) + e._delay), e._end = Ct(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
                function(t, e, i, n, r) {
                    void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
                    var s, o = t[n];
                    if (r)
                        for (s = e[r]; o && o[r] > s;) o = o._prev;
                    o ? (e._next = o._next, o._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = o, e.parent = e._dp = t
                }(t, e, "_first", "_last", t._sort ? "_start" : 0), ie(e) || (t._recent = e), n || Kt(t, e), t
        },
        $t = function(t, e) {
            return (ut.ScrollTrigger || pt("scrollTrigger", e)) && ut.ScrollTrigger.create(e, t)
        },
        te = function(t, e, i, n) {
            return ii(t, e), t._initted ? !i && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && m !== Le.frame ? (yt.push(t), t._lazy = [e, n], 1) : void 0 : 1
        },
        ee = function t(e) {
            var i = e.parent;
            return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i))
        },
        ie = function(t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e
        },
        ne = function(t, e, i, n) {
            var r = t._repeat,
                s = Ct(e) || 0,
                o = t._tTime / t._tDur;
            return o && !n && (t._time *= s / t._dur), t._dur = s, t._tDur = r ? r < 0 ? 1e10 : Ct(s * (r + 1) + t._rDelay * r) : s, o && !n ? Zt(t, t._tTime = t._tDur * o) : t.parent && Qt(t), i || Ht(t.parent, t), t
        },
        re = function(t) {
            return t instanceof Ke ? Ht(t) : ne(t, t._dur)
        },
        se = {
            _start: 0,
            endTime: gt,
            totalDuration: gt
        },
        oe = function t(e, i, n) {
            var r, s, o, a = e.labels,
                l = e._recent || se,
                c = e.duration() >= V ? l.endTime(!1) : e._dur;
            return X(i) && (isNaN(i) || i in a) ? (s = i.charAt(0), o = "%" === i.substr(-1), r = i.indexOf("="), "<" === s || ">" === s ? (r >= 0 && (i = i.replace(/=/, "")), ("<" === s ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (o ? (r < 0 ? l : n).totalDuration() / 100 : 1)) : r < 0 ? (i in a || (a[i] = c), a[i]) : (s = parseFloat(i.charAt(r - 1) + i.substr(r + 1)), o && n && (s = s / 100 * (it(n) ? n[0] : n).totalDuration()), r > 1 ? t(e, i.substr(0, r - 1), n) + s : c + s)) : null == i ? c : +i
        },
        ae = function(t, e, i) {
            var n, r, s = Q(e[1]),
                o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
                a = e[o];
            if (s && (a.duration = e[1]), a.parent = i, t) {
                for (n = a, r = i; r && !("immediateRender" in n);) n = r.vars.defaults || {}, r = J(r.vars.inherit) && r.parent;
                a.immediateRender = J(n.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[o - 1]
            }
            return new oi(e[0], a, e[o + 1])
        },
        le = function(t, e) {
            return t || 0 === t ? e(t) : e
        },
        ce = function(t, e, i) {
            return i < t ? t : i > e ? e : i
        },
        ue = function(t) {
            if ("string" != typeof t) return "";
            var e = ct.exec(t);
            return e ? t.substr(e.index + e[0].length) : ""
        },
        de = [].slice,
        he = function(t, e) {
            return t && K(t) && "length" in t && (!e && !t.length || t.length - 1 in t && K(t[0])) && !t.nodeType && t !== d
        },
        pe = function(t, e, i) {
            return void 0 === i && (i = []), t.forEach((function(t) {
                var n;
                return X(t) && !e || he(t, 1) ? (n = i).push.apply(n, fe(t)) : i.push(t)
            })) || i
        },
        fe = function(t, e, i) {
            return !X(t) || i || !h && De() ? it(t) ? pe(t, i) : he(t) ? de.call(t, 0) : t ? [t] : [] : de.call((e || p).querySelectorAll(t), 0)
        },
        me = function(t) {
            return t.sort((function() {
                return .5 - Math.random()
            }))
        },
        ge = function(t) {
            if (G(t)) return t;
            var e = K(t) ? t : {
                    each: t
                },
                i = je(e.ease),
                n = e.from || 0,
                r = parseFloat(e.base) || 0,
                s = {},
                o = n > 0 && n < 1,
                a = isNaN(n) || o,
                l = e.axis,
                c = n,
                u = n;
            return X(n) ? c = u = {
                    center: .5,
                    edges: .5,
                    end: 1
                }[n] || 0 : !o && a && (c = n[0], u = n[1]),
                function(t, o, d) {
                    var h, p, f, m, g, v, y, x, b, _ = (d || e).length,
                        w = s[_];
                    if (!w) {
                        if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, V])[1])) {
                            for (y = -1e8; y < (y = d[b++].getBoundingClientRect().left) && b < _;);
                            b--
                        }
                        for (w = s[_] = [], h = a ? Math.min(b, _) * c - .5 : n % b, p = a ? _ * u / b - .5 : n / b | 0, y = 0, x = V, v = 0; v < _; v++) f = v % b - h, m = p - (v / b | 0), w[v] = g = l ? Math.abs("y" === l ? m : f) : j(f * f + m * m), g > y && (y = g), g < x && (x = g);
                        "random" === n && me(w), w.max = y - x, w.min = x, w.v = _ = (parseFloat(e.amount) || parseFloat(e.each) * (b > _ ? _ - 1 : l ? "y" === l ? _ / b : b : Math.max(b, _ / b)) || 0) * ("edges" === n ? -1 : 1), w.b = _ < 0 ? r - _ : r, w.u = ue(e.amount || e.each) || 0, i = i && _ < 0 ? Ne(i) : i
                    }
                    return _ = (w[t] - w.min) / w.max || 0, Ct(w.b + (i ? i(_) : _) * w.v) + w.u
                }
        },
        ve = function(t) {
            var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
            return function(i) {
                var n = Math.round(parseFloat(i) / t) * t * e;
                return (n - n % 1) / e + (Q(i) ? 0 : ue(i))
            }
        },
        ye = function(t, e) {
            var i, n, r = it(t);
            return !r && K(t) && (i = r = t.radius || V, t.values ? (t = fe(t.values), (n = !Q(t[0])) && (i *= i)) : t = ve(t.increment)), le(e, r ? G(t) ? function(e) {
                return n = t(e), Math.abs(n - e) <= i ? n : e
            } : function(e) {
                for (var r, s, o = parseFloat(n ? e.x : e), a = parseFloat(n ? e.y : 0), l = V, c = 0, u = t.length; u--;)(r = n ? (r = t[u].x - o) * r + (s = t[u].y - a) * s : Math.abs(t[u] - o)) < l && (l = r, c = u);
                return c = !i || l <= i ? t[c] : e, n || c === e || Q(e) ? c : c + ue(e)
            } : ve(t))
        },
        xe = function(t, e, i, n) {
            return le(it(t) ? !e : !0 === i ? !!(i = 0) : !n, (function() {
                return it(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + .99 * i)) / i) * i * n) / n
            }))
        },
        be = function(t, e, i) {
            return le(i, (function(i) {
                return t[~~e(i)]
            }))
        },
        _e = function(t) {
            for (var e, i, n, r, s = 0, o = ""; ~(e = t.indexOf("random(", s));) n = t.indexOf(")", e), r = "[" === t.charAt(e + 7), i = t.substr(e + 7, n - e - 7).match(r ? lt : nt), o += t.substr(s, e - s) + xe(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5), s = n + 1;
            return o + t.substr(s, t.length - s)
        },
        we = function(t, e, i, n, r) {
            var s = e - t,
                o = n - i;
            return le(r, (function(e) {
                return i + ((e - t) / s * o || 0)
            }))
        },
        Se = function(t, e, i) {
            var n, r, s, o = t.labels,
                a = V;
            for (n in o)(r = o[n] - e) < 0 == !!i && r && a > (r = Math.abs(r)) && (s = n, a = r);
            return s
        },
        Me = function(t, e, i) {
            var n, r, s = t.vars,
                o = s[e];
            if (o) return n = s[e + "Params"], r = s.callbackScope || t, i && yt.length && Ot(), n ? o.apply(r, n) : o.call(r)
        },
        Ae = function(t) {
            return Nt(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && Me(t, "onInterrupt"), t
        },
        ke = function(t) {
            var e = (t = !t.name && t.default || t).name,
                i = G(t),
                n = e && !i && t.init ? function() {
                    this._props = []
                } : t,
                r = {
                    init: gt,
                    render: mi,
                    add: ti,
                    kill: vi,
                    modifier: gi,
                    rawVars: 0
                },
                s = {
                    targetTest: 0,
                    get: 0,
                    getSetter: di,
                    aliases: {},
                    register: 0
                };
            if (De(), t !== n) {
                if (bt[e]) return;
                It(n, It(Vt(t, r), s)), Dt(n.prototype, Dt(r, Vt(t, s))), bt[n.prop = e] = n, t.targetTest && (St.push(n), vt[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            mt(e, n), t.register && t.register(Mi, n, bi)
        },
        Pe = 255,
        Te = {
            aqua: [0, Pe, Pe],
            lime: [0, Pe, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, Pe],
            navy: [0, 0, 128],
            white: [Pe, Pe, Pe],
            olive: [128, 128, 0],
            yellow: [Pe, Pe, 0],
            orange: [Pe, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [Pe, 0, 0],
            pink: [Pe, 192, 203],
            cyan: [0, Pe, Pe],
            transparent: [Pe, Pe, Pe, 0]
        },
        Ce = function(t, e, i) {
            return (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * Pe + .5 | 0
        },
        Be = function(t, e, i) {
            var n, r, s, o, a, l, c, u, d, h, p = t ? Q(t) ? [t >> 16, t >> 8 & Pe, t & Pe] : 0 : Te.black;
            if (!p) {
                if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Te[t]) p = Te[t];
                else if ("#" === t.charAt(0)) {
                    if (t.length < 6 && (n = t.charAt(1), r = t.charAt(2), s = t.charAt(3), t = "#" + n + n + r + r + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & Pe, p & Pe, parseInt(t.substr(7), 16) / 255];
                    p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & Pe, t & Pe]
                } else if ("hsl" === t.substr(0, 3))
                    if (p = h = t.match(nt), e) {
                        if (~t.indexOf("=")) return p = t.match(rt), i && p.length < 4 && (p[3] = 1), p
                    } else o = +p[0] % 360 / 360, a = +p[1] / 100, n = 2 * (l = +p[2] / 100) - (r = l <= .5 ? l * (a + 1) : l + a - l * a), p.length > 3 && (p[3] *= 1), p[0] = Ce(o + 1 / 3, n, r), p[1] = Ce(o, n, r), p[2] = Ce(o - 1 / 3, n, r);
                else p = t.match(nt) || Te.transparent;
                p = p.map(Number)
            }
            return e && !h && (n = p[0] / Pe, r = p[1] / Pe, s = p[2] / Pe, l = ((c = Math.max(n, r, s)) + (u = Math.min(n, r, s))) / 2, c === u ? o = a = 0 : (d = c - u, a = l > .5 ? d / (2 - c - u) : d / (c + u), o = c === n ? (r - s) / d + (r < s ? 6 : 0) : c === r ? (s - n) / d + 2 : (n - r) / d + 4, o *= 60), p[0] = ~~(o + .5), p[1] = ~~(100 * a + .5), p[2] = ~~(100 * l + .5)), i && p.length < 4 && (p[3] = 1), p
        },
        Oe = function(t) {
            var e = [],
                i = [],
                n = -1;
            return t.split(Ee).forEach((function(t) {
                var r = t.match(st) || [];
                e.push.apply(e, r), i.push(n += r.length + 1)
            })), e.c = i, e
        },
        Fe = function(t, e, i) {
            var n, r, s, o, a = "",
                l = (t + a).match(Ee),
                c = e ? "hsla(" : "rgba(",
                u = 0;
            if (!l) return t;
            if (l = l.map((function(t) {
                    return (t = Be(t, e, 1)) && c + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                })), i && (s = Oe(t), (n = i.c).join(a) !== s.c.join(a)))
                for (o = (r = t.replace(Ee, "1").split(st)).length - 1; u < o; u++) a += r[u] + (~n.indexOf(u) ? l.shift() || c + "0,0,0,0)" : (s.length ? s : l.length ? l : i).shift());
            if (!r)
                for (o = (r = t.split(Ee)).length - 1; u < o; u++) a += r[u] + l[u];
            return a + r[o]
        },
        Ee = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in Te) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        Re = /hsl[a]?\(/,
        Ie = function(t) {
            var e, i = t.join(" ");
            if (Ee.lastIndex = 0, Ee.test(i)) return e = Re.test(i), t[1] = Fe(t[1], e), t[0] = Fe(t[0], e, Oe(t[1])), !0
        },
        Le = (M = Date.now, A = 500, k = 33, P = M(), T = P, B = C = 1e3 / 240, F = function t(e) {
            var i, n, r, s, o = M() - T,
                a = !0 === e;
            if (o > A && (P += o - k), ((i = (r = (T += o) - P) - B) > 0 || a) && (s = ++_.frame, w = r - 1e3 * _.time, _.time = r /= 1e3, B += i + (i >= C ? 4 : C - i), n = 1), a || (y = x(t)), n)
                for (S = 0; S < O.length; S++) O[S](r, w, s, e)
        }, _ = {
            time: 0,
            frame: 0,
            tick: function() {
                F(!0)
            },
            deltaRatio: function(t) {
                return w / (1e3 / (t || 60))
            },
            wake: function() {
                f && (!h && $() && (d = h = window, p = d.document || {}, ut.gsap = Mi, (d.gsapVersions || (d.gsapVersions = [])).push(Mi.version), ht(dt || d.GreenSockGlobals || !d.gsap && d || {}), b = d.requestAnimationFrame), y && _.sleep(), x = b || function(t) {
                    return setTimeout(t, B - 1e3 * _.time + 1 | 0)
                }, v = 1, F(2))
            },
            sleep: function() {
                (b ? d.cancelAnimationFrame : clearTimeout)(y), v = 0, x = gt
            },
            lagSmoothing: function(t, e) {
                A = t || 1e8, k = Math.min(e, A, 0)
            },
            fps: function(t) {
                C = 1e3 / (t || 240), B = 1e3 * _.time + C
            },
            add: function(t) {
                O.indexOf(t) < 0 && O.push(t), De()
            },
            remove: function(t) {
                var e;
                ~(e = O.indexOf(t)) && O.splice(e, 1) && S >= e && S--
            },
            _listeners: O = []
        }),
        De = function() {
            return !v && Le.wake()
        },
        ze = {},
        Ve = /^[\d.\-M][\d.\-,\s]/,
        qe = /["']/g,
        We = function(t) {
            for (var e, i, n, r = {}, s = t.substr(1, t.length - 3).split(":"), o = s[0], a = 1, l = s.length; a < l; a++) i = s[a], e = a !== l - 1 ? i.lastIndexOf(",") : i.length, n = i.substr(0, e), r[o] = isNaN(n) ? n.replace(qe, "").trim() : +n, o = i.substr(e + 1).trim();
            return r
        },
        Ne = function(t) {
            return function(e) {
                return 1 - t(1 - e)
            }
        },
        He = function t(e, i) {
            for (var n, r = e._first; r;) r instanceof Ke ? t(r, i) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === i || (r.timeline ? t(r.timeline, i) : (n = r._ease, r._ease = r._yEase, r._yEase = n, r._yoyo = i)), r = r._next
        },
        je = function(t, e) {
            return t && (G(t) ? t : ze[t] || function(t) {
                var e, i, n, r, s = (t + "").split("("),
                    o = ze[s[0]];
                return o && s.length > 1 && o.config ? o.config.apply(null, ~t.indexOf("{") ? [We(s[1])] : (e = t, i = e.indexOf("(") + 1, n = e.indexOf(")"), r = e.indexOf("(", i), e.substring(i, ~r && r < n ? e.indexOf(")", n + 1) : n)).split(",").map(Et)) : ze._CE && Ve.test(t) ? ze._CE("", t) : o
            }(t)) || e
        },
        Ue = function(t, e, i, n) {
            void 0 === i && (i = function(t) {
                return 1 - e(1 - t)
            }), void 0 === n && (n = function(t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
            });
            var r, s = {
                easeIn: e,
                easeOut: i,
                easeInOut: n
            };
            return Tt(t, (function(t) {
                for (var e in ze[t] = ut[t] = s, ze[r = t.toLowerCase()] = i, s) ze[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = ze[t + "." + e] = s[e]
            })), s
        },
        Ye = function(t) {
            return function(e) {
                return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
            }
        },
        Xe = function t(e, i, n) {
            var r = i >= 1 ? i : 1,
                s = (n || (e ? .3 : .45)) / (i < 1 ? i : 1),
                o = s / W * (Math.asin(1 / r) || 0),
                a = function(t) {
                    return 1 === t ? 1 : r * Math.pow(2, -10 * t) * Y((t - o) * s) + 1
                },
                l = "out" === e ? a : "in" === e ? function(t) {
                    return 1 - a(1 - t)
                } : Ye(a);
            return s = W / s, l.config = function(i, n) {
                return t(e, i, n)
            }, l
        },
        Ge = function t(e, i) {
            void 0 === i && (i = 1.70158);
            var n = function(t) {
                    return t ? --t * t * ((i + 1) * t + i) + 1 : 0
                },
                r = "out" === e ? n : "in" === e ? function(t) {
                    return 1 - n(1 - t)
                } : Ye(n);
            return r.config = function(i) {
                return t(e, i)
            }, r
        };
    Tt("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
        var i = e < 5 ? e + 1 : e;
        Ue(t + ",Power" + (i - 1), e ? function(t) {
            return Math.pow(t, i)
        } : function(t) {
            return t
        }, (function(t) {
            return 1 - Math.pow(1 - t, i)
        }), (function(t) {
            return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2
        }))
    })), ze.Linear.easeNone = ze.none = ze.Linear.easeIn, Ue("Elastic", Xe("in"), Xe("out"), Xe()), E = 7.5625, I = 1 / (R = 2.75), Ue("Bounce", (function(t) {
        return 1 - L(1 - t)
    }), L = function(t) {
        return t < I ? E * t * t : t < .7272727272727273 ? E * Math.pow(t - 1.5 / R, 2) + .75 : t < .9090909090909092 ? E * (t -= 2.25 / R) * t + .9375 : E * Math.pow(t - 2.625 / R, 2) + .984375
    }), Ue("Expo", (function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    })), Ue("Circ", (function(t) {
        return -(j(1 - t * t) - 1)
    })), Ue("Sine", (function(t) {
        return 1 === t ? 1 : 1 - U(t * N)
    })), Ue("Back", Ge("in"), Ge("out"), Ge()), ze.SteppedEase = ze.steps = ut.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var i = 1 / t,
                n = t + (e ? 0 : 1),
                r = e ? 1 : 0;
            return function(t) {
                return ((n * ce(0, .99999999, t) | 0) + r) * i
            }
        }
    }, z.ease = ze["quad.out"], Tt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
        return Mt += t + "," + t + "Params,"
    }));
    var Qe = function(t, e) {
            this.id = H++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Pt, this.set = e ? e.getSetter : di
        },
        Ze = function() {
            function t(t) {
                this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, ne(this, +t.duration, 1, 1), this.data = t.data, v || Le.wake()
            }
            var e = t.prototype;
            return e.delay = function(t) {
                return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
            }, e.duration = function(t) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
            }, e.totalDuration = function(t) {
                return arguments.length ? (this._dirty = 0, ne(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }, e.totalTime = function(t, e) {
                if (De(), !arguments.length) return this._tTime;
                var i = this._dp;
                if (i && i.smoothChildTiming && this._ts) {
                    for (Zt(this, t), !i._dp || i.parent || Kt(i, this); i.parent;) i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Jt(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === q || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), Ft(this, t, e)), this
            }, e.time = function(t, e) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Yt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
            }, e.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
            }, e.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Yt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
            }, e.iteration = function(t, e) {
                var i = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? Xt(this._tTime, i) + 1 : 1
            }, e.timeScale = function(t) {
                if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                if (this._rts === t) return this;
                var e = this.parent && this._ts ? Gt(this.parent._time, this) : this._tTime;
                return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, jt(this.totalTime(ce(-this._delay, this._tDur, e), !0))
            }, e.paused = function(t) {
                return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (De(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== q && (this._tTime -= q)))), this) : this._ps
            }, e.startTime = function(t) {
                if (arguments.length) {
                    this._start = t;
                    var e = this.parent || this._dp;
                    return e && (e._sort || !this.parent) && Jt(e, this, t - this._delay), this
                }
                return this._start
            }, e.endTime = function(t) {
                return this._start + (J(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
            }, e.rawTime = function(t) {
                var e = this.parent || this._dp;
                return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Gt(e.rawTime(t), this) : this._tTime : this._tTime
            }, e.globalTime = function(t) {
                for (var e = this, i = arguments.length ? t : e.rawTime(); e;) i = e._start + i / (e._ts || 1), e = e._dp;
                return i
            }, e.repeat = function(t) {
                return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, re(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
            }, e.repeatDelay = function(t) {
                if (arguments.length) {
                    var e = this._time;
                    return this._rDelay = t, re(this), e ? this.time(e) : this
                }
                return this._rDelay
            }, e.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, e.seek = function(t, e) {
                return this.totalTime(oe(this, t), J(e))
            }, e.restart = function(t, e) {
                return this.play().totalTime(t ? -this._delay : 0, J(e))
            }, e.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, e.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, e.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, e.resume = function() {
                return this.paused(!1)
            }, e.reversed = function(t) {
                return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
            }, e.invalidate = function() {
                return this._initted = this._act = 0, this._zTime = -1e-8, this
            }, e.isActive = function() {
                var t, e = this.parent || this._dp,
                    i = this._start;
                return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - q))
            }, e.eventCallback = function(t, e, i) {
                var n = this.vars;
                return arguments.length > 1 ? (e ? (n[t] = e, i && (n[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t]
            }, e.then = function(t) {
                var e = this;
                return new Promise((function(i) {
                    var n = G(t) ? t : Rt,
                        r = function() {
                            var t = e.then;
                            e.then = null, G(n) && (n = n(e)) && (n.then || n === e) && (e.then = t), i(n), e.then = t
                        };
                    e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? r() : e._prom = r
                }))
            }, e.kill = function() {
                Ae(this)
            }, t
        }();
    It(Ze.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Ke = function(t) {
        function e(e, i) {
            var n;
            return void 0 === e && (e = {}), (n = t.call(this, e) || this).labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = J(e.sortChildren), u && Jt(e.parent || u, a(n), i), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && $t(a(n), e.scrollTrigger), n
        }
        l(e, t);
        var i = e.prototype;
        return i.to = function(t, e, i) {
            return ae(0, arguments, this), this
        }, i.from = function(t, e, i) {
            return ae(1, arguments, this), this
        }, i.fromTo = function(t, e, i, n) {
            return ae(2, arguments, this), this
        }, i.set = function(t, e, i) {
            return e.duration = 0, e.parent = this, qt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new oi(t, e, oe(this, i), 1), this
        }, i.call = function(t, e, i) {
            return Jt(this, oi.delayedCall(0, t, e), i)
        }, i.staggerTo = function(t, e, i, n, r, s, o) {
            return i.duration = e, i.stagger = i.stagger || n, i.onComplete = s, i.onCompleteParams = o, i.parent = this, new oi(t, i, oe(this, r)), this
        }, i.staggerFrom = function(t, e, i, n, r, s, o) {
            return i.runBackwards = 1, qt(i).immediateRender = J(i.immediateRender), this.staggerTo(t, e, i, n, r, s, o)
        }, i.staggerFromTo = function(t, e, i, n, r, s, o, a) {
            return n.startAt = i, qt(n).immediateRender = J(n.immediateRender), this.staggerTo(t, e, n, r, s, o, a)
        }, i.render = function(t, e, i) {
            var n, r, s, o, a, l, c, d, h, p, f, m, g = this._time,
                v = this._dirty ? this.totalDuration() : this._tDur,
                y = this._dur,
                x = this !== u && t > v - q && t >= 0 ? v : t < q ? 0 : t,
                b = this._zTime < 0 != t < 0 && (this._initted || !y);
            if (x !== this._tTime || i || b) {
                if (g !== this._time && y && (x += this._time - g, t += this._time - g), n = x, h = this._start, l = !(d = this._ts), b && (y || (g = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                    if (f = this._yoyo, a = y + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * a + t, e, i);
                    if (n = Ct(x % a), x === v ? (o = this._repeat, n = y) : ((o = ~~(x / a)) && o === x / a && (n = y, o--), n > y && (n = y)), p = Xt(this._tTime, a), !g && this._tTime && p !== o && (p = o), f && 1 & o && (n = y - n, m = 1), o !== p && !this._lock) {
                        var _ = f && 1 & p,
                            w = _ === (f && 1 & o);
                        if (o < p && (_ = !_), g = _ ? 0 : y, this._lock = 1, this.render(g || (m ? 0 : Ct(o * a)), e, !y)._lock = 0, this._tTime = x, !e && this.parent && Me(this, "onRepeat"), this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1), g && g !== this._time || l !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (y = this._dur, v = this._tDur, w && (this._lock = 2, g = _ ? y : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !m && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
                        He(this, m)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (c = function(t, e, i) {
                        var n;
                        if (i > e)
                            for (n = t._first; n && n._start <= i;) {
                                if (!n._dur && "isPause" === n.data && n._start > e) return n;
                                n = n._next
                            } else
                                for (n = t._last; n && n._start >= i;) {
                                    if (!n._dur && "isPause" === n.data && n._start < e) return n;
                                    n = n._prev
                                }
                    }(this, Ct(g), Ct(n))) && (x -= n - (n = c._start)), this._tTime = x, this._time = n, this._act = !d, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, g = 0), !g && n && !e && (Me(this, "onStart"), this._tTime !== x)) return this;
                if (n >= g && t >= 0)
                    for (r = this._first; r;) {
                        if (s = r._next, (r._act || n >= r._start) && r._ts && c !== r) {
                            if (r.parent !== this) return this.render(t, e, i);
                            if (r.render(r._ts > 0 ? (n - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (n - r._start) * r._ts, e, i), n !== this._time || !this._ts && !l) {
                                c = 0, s && (x += this._zTime = -1e-8);
                                break
                            }
                        }
                        r = s
                    } else {
                        r = this._last;
                        for (var S = t < 0 ? t : n; r;) {
                            if (s = r._prev, (r._act || S <= r._end) && r._ts && c !== r) {
                                if (r.parent !== this) return this.render(t, e, i);
                                if (r.render(r._ts > 0 ? (S - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (S - r._start) * r._ts, e, i), n !== this._time || !this._ts && !l) {
                                    c = 0, s && (x += this._zTime = S ? -1e-8 : q);
                                    break
                                }
                            }
                            r = s
                        }
                    }
                if (c && !e && (this.pause(), c.render(n >= g ? 0 : -1e-8)._zTime = n >= g ? 1 : -1, this._ts)) return this._start = h, Qt(this), this.render(t, e, i);
                this._onUpdate && !e && Me(this, "onUpdate", !0), (x === v && v >= this.totalDuration() || !x && g) && (h !== this._start && Math.abs(d) === Math.abs(this._ts) || this._lock || ((t || !y) && (x === v && this._ts > 0 || !x && this._ts < 0) && Nt(this, 1), e || t < 0 && !g || !x && !g && v || (Me(this, x === v && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(x < v && this.timeScale() > 0) && this._prom())))
            }
            return this
        }, i.add = function(t, e) {
            var i = this;
            if (Q(e) || (e = oe(this, e, t)), !(t instanceof Ze)) {
                if (it(t)) return t.forEach((function(t) {
                    return i.add(t, e)
                })), this;
                if (X(t)) return this.addLabel(t, e);
                if (!G(t)) return this;
                t = oi.delayedCall(0, t)
            }
            return this !== t ? Jt(this, t, e) : this
        }, i.getChildren = function(t, e, i, n) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === n && (n = -1e8);
            for (var r = [], s = this._first; s;) s._start >= n && (s instanceof oi ? e && r.push(s) : (i && r.push(s), t && r.push.apply(r, s.getChildren(!0, e, i)))), s = s._next;
            return r
        }, i.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), i = e.length; i--;)
                if (e[i].vars.id === t) return e[i]
        }, i.remove = function(t) {
            return X(t) ? this.removeLabel(t) : G(t) ? this.killTweensOf(t) : (Wt(this, t), t === this._recent && (this._recent = this._last), Ht(this))
        }, i.totalTime = function(e, i) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Ct(Le.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, i), this._forcing = 0, this) : this._tTime
        }, i.addLabel = function(t, e) {
            return this.labels[t] = oe(this, e), this
        }, i.removeLabel = function(t) {
            return delete this.labels[t], this
        }, i.addPause = function(t, e, i) {
            var n = oi.delayedCall(0, e || gt, i);
            return n.data = "isPause", this._hasPause = 1, Jt(this, n, oe(this, t))
        }, i.removePause = function(t) {
            var e = this._first;
            for (t = oe(this, t); e;) e._start === t && "isPause" === e.data && Nt(e), e = e._next
        }, i.killTweensOf = function(t, e, i) {
            for (var n = this.getTweensOf(t, i), r = n.length; r--;) Je !== n[r] && n[r].kill(t, e);
            return this
        }, i.getTweensOf = function(t, e) {
            for (var i, n = [], r = fe(t), s = this._first, o = Q(e); s;) s instanceof oi ? Bt(s._targets, r) && (o ? (!Je || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && n.push(s) : (i = s.getTweensOf(r, e)).length && n.push.apply(n, i), s = s._next;
            return n
        }, i.tweenTo = function(t, e) {
            e = e || {};
            var i, n = this,
                r = oe(n, t),
                s = e,
                o = s.startAt,
                a = s.onStart,
                l = s.onStartParams,
                c = s.immediateRender,
                u = oi.to(n, It({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: r,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((r - (o && "time" in o ? o.time : n._time)) / n.timeScale()) || q,
                    onStart: function() {
                        if (n.pause(), !i) {
                            var t = e.duration || Math.abs((r - (o && "time" in o ? o.time : n._time)) / n.timeScale());
                            u._dur !== t && ne(u, t, 0, 1).render(u._time, !0, !0), i = 1
                        }
                        a && a.apply(u, l || [])
                    }
                }, e));
            return c ? u.render(0) : u
        }, i.tweenFromTo = function(t, e, i) {
            return this.tweenTo(e, It({
                startAt: {
                    time: oe(this, t)
                }
            }, i))
        }, i.recent = function() {
            return this._recent
        }, i.nextLabel = function(t) {
            return void 0 === t && (t = this._time), Se(this, oe(this, t))
        }, i.previousLabel = function(t) {
            return void 0 === t && (t = this._time), Se(this, oe(this, t), 1)
        }, i.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + q)
        }, i.shiftChildren = function(t, e, i) {
            void 0 === i && (i = 0);
            for (var n, r = this._first, s = this.labels; r;) r._start >= i && (r._start += t, r._end += t), r = r._next;
            if (e)
                for (n in s) s[n] >= i && (s[n] += t);
            return Ht(this)
        }, i.invalidate = function() {
            var e = this._first;
            for (this._lock = 0; e;) e.invalidate(), e = e._next;
            return t.prototype.invalidate.call(this)
        }, i.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, i = this._first; i;) e = i._next, this.remove(i), i = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Ht(this)
        }, i.totalDuration = function(t) {
            var e, i, n, r = 0,
                s = this,
                o = s._last,
                a = V;
            if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
            if (s._dirty) {
                for (n = s.parent; o;) e = o._prev, o._dirty && o.totalDuration(), (i = o._start) > a && s._sort && o._ts && !s._lock ? (s._lock = 1, Jt(s, o, i - o._delay, 1)._lock = 0) : a = i, i < 0 && o._ts && (r -= i, (!n && !s._dp || n && n.smoothChildTiming) && (s._start += i / s._ts, s._time -= i, s._tTime -= i), s.shiftChildren(-i, !1, -Infinity), a = 0), o._end > r && o._ts && (r = o._end), o = e;
                ne(s, s === u && s._time > r ? s._time : r, 1, 1), s._dirty = 0
            }
            return s._tDur
        }, e.updateRoot = function(t) {
            if (u._ts && (Ft(u, Gt(t, u)), m = Le.frame), Le.frame >= wt) {
                wt += D.autoSleep || 120;
                var e = u._first;
                if ((!e || !e._ts) && D.autoSleep && Le._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || Le.sleep()
                }
            }
        }, e
    }(Ze);
    It(Ke.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var Je, $e = function(t, e, i, n, r, s, o) {
            var a, l, c, u, d, h, p, f, m = new bi(this._pt, t, e, 0, 1, fi, null, r),
                g = 0,
                v = 0;
            for (m.b = i, m.e = n, i += "", (p = ~(n += "").indexOf("random(")) && (n = _e(n)), s && (s(f = [i, n], t, e), i = f[0], n = f[1]), l = i.match(ot) || []; a = ot.exec(n);) u = a[0], d = n.substring(g, a.index), c ? c = (c + 1) % 5 : "rgba(" === d.substr(-5) && (c = 1), u !== l[v++] && (h = parseFloat(l[v - 1]) || 0, m._pt = {
                _next: m._pt,
                p: d || 1 === v ? d : ",",
                s: h,
                c: "=" === u.charAt(1) ? parseFloat(u.substr(2)) * ("-" === u.charAt(0) ? -1 : 1) : parseFloat(u) - h,
                m: c && c < 4 ? Math.round : 0
            }, g = ot.lastIndex);
            return m.c = g < n.length ? n.substring(g, n.length) : "", m.fp = o, (at.test(n) || p) && (m.e = 0), this._pt = m, m
        },
        ti = function(t, e, i, n, r, s, o, a, l) {
            G(n) && (n = n(r || 0, t, s));
            var c, u = t[e],
                d = "get" !== i ? i : G(u) ? l ? t[e.indexOf("set") || !G(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : u,
                h = G(u) ? l ? ci : li : ai;
            if (X(n) && (~n.indexOf("random(") && (n = _e(n)), "=" === n.charAt(1) && ((c = parseFloat(d) + parseFloat(n.substr(2)) * ("-" === n.charAt(0) ? -1 : 1) + (ue(d) || 0)) || 0 === c) && (n = c)), d !== n) return isNaN(d * n) || "" === n ? (!u && !(e in t) && pt(e, n), $e.call(this, t, e, d, n, h, a || D.stringFilter, l)) : (c = new bi(this._pt, t, e, +d || 0, n - (d || 0), "boolean" == typeof u ? pi : hi, 0, h), l && (c.fp = l), o && c.modifier(o, this, t), this._pt = c)
        },
        ei = function(t, e, i, n, r, s) {
            var o, a, l, c;
            if (bt[t] && !1 !== (o = new bt[t]).init(r, o.rawVars ? e[t] : function(t, e, i, n, r) {
                    if (G(t) && (t = ni(t, r, e, i, n)), !K(t) || t.style && t.nodeType || it(t) || et(t)) return X(t) ? ni(t, r, e, i, n) : t;
                    var s, o = {};
                    for (s in t) o[s] = ni(t[s], r, e, i, n);
                    return o
                }(e[t], n, r, s, i), i, n, s) && (i._pt = a = new bi(i._pt, r, t, 0, 1, o.render, o, 0, o.priority), i !== g))
                for (l = i._ptLookup[i._targets.indexOf(r)], c = o._props.length; c--;) l[o._props[c]] = a;
            return o
        },
        ii = function t(e, i) {
            var n, r, s, o, a, l, d, h, p, f, m, g, v, y = e.vars,
                x = y.ease,
                b = y.startAt,
                _ = y.immediateRender,
                w = y.lazy,
                S = y.onUpdate,
                M = y.onUpdateParams,
                A = y.callbackScope,
                k = y.runBackwards,
                P = y.yoyoEase,
                T = y.keyframes,
                C = y.autoRevert,
                B = e._dur,
                O = e._startAt,
                F = e._targets,
                E = e.parent,
                R = E && "nested" === E.data ? E.parent._targets : F,
                I = "auto" === e._overwrite && !c,
                L = e.timeline;
            if (L && (!T || !x) && (x = "none"), e._ease = je(x, z.ease), e._yEase = P ? Ne(je(!0 === P ? x : P, z.ease)) : 0, P && e._yoyo && !e._repeat && (P = e._yEase, e._yEase = e._ease, e._ease = P), e._from = !L && !!y.runBackwards, !L) {
                if (g = (h = F[0] ? kt(F[0]).harness : 0) && y[h.prop], n = Vt(y, vt), O && O.render(-1, !0).kill(), b)
                    if (Nt(e._startAt = oi.set(F, It({
                            data: "isStart",
                            overwrite: !1,
                            parent: E,
                            immediateRender: !0,
                            lazy: J(w),
                            startAt: null,
                            delay: 0,
                            onUpdate: S,
                            onUpdateParams: M,
                            callbackScope: A,
                            stagger: 0
                        }, b))), i < 0 && !_ && !C && e._startAt.render(-1, !0), _) {
                        if (i > 0 && !C && (e._startAt = 0), B && i <= 0) return void(i && (e._zTime = i))
                    } else !1 === C && (e._startAt = 0);
                else if (k && B)
                    if (O) !C && (e._startAt = 0);
                    else if (i && (_ = !1), s = It({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: _ && J(w),
                        immediateRender: _,
                        stagger: 0,
                        parent: E
                    }, n), g && (s[h.prop] = g), Nt(e._startAt = oi.set(F, s)), i < 0 && e._startAt.render(-1, !0), _) {
                    if (!i) return
                } else t(e._startAt, q);
                for (e._pt = 0, w = B && J(w) || w && !B, r = 0; r < F.length; r++) {
                    if (d = (a = F[r])._gsap || At(F)[r]._gsap, e._ptLookup[r] = f = {}, xt[d.id] && yt.length && Ot(), m = R === F ? r : R.indexOf(a), h && !1 !== (p = new h).init(a, g || n, e, m, R) && (e._pt = o = new bi(e._pt, a, p.name, 0, 1, p.render, p, 0, p.priority), p._props.forEach((function(t) {
                            f[t] = o
                        })), p.priority && (l = 1)), !h || g)
                        for (s in n) bt[s] && (p = ei(s, n, e, m, a, R)) ? p.priority && (l = 1) : f[s] = o = ti.call(e, a, s, "get", n[s], m, R, 0, y.stringFilter);
                    e._op && e._op[r] && e.kill(a, e._op[r]), I && e._pt && (Je = e, u.killTweensOf(a, f, e.globalTime(0)), v = !e.parent, Je = 0), e._pt && w && (xt[d.id] = 1)
                }
                l && xi(e), e._onInit && e._onInit(e)
            }
            e._onUpdate = S, e._initted = (!e._op || e._pt) && !v
        },
        ni = function(t, e, i, n, r) {
            return G(t) ? t.call(e, i, n, r) : X(t) && ~t.indexOf("random(") ? _e(t) : t
        },
        ri = Mt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        si = (ri + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
        oi = function(t) {
            function e(e, i, n, r) {
                var s;
                "number" == typeof i && (n.duration = i, i = n, n = null);
                var o, l, d, h, p, f, m, g, v = (s = t.call(this, r ? i : qt(i)) || this).vars,
                    y = v.duration,
                    x = v.delay,
                    b = v.immediateRender,
                    _ = v.stagger,
                    w = v.overwrite,
                    S = v.keyframes,
                    M = v.defaults,
                    A = v.scrollTrigger,
                    k = v.yoyoEase,
                    P = i.parent || u,
                    T = (it(e) || et(e) ? Q(e[0]) : "length" in i) ? [e] : fe(e);
                if (s._targets = T.length ? At(T) : ft("GSAP target " + e + " not found. https://greensock.com", !D.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = w, S || _ || tt(y) || tt(x)) {
                    if (i = s.vars, (o = s.timeline = new Ke({
                            data: "nested",
                            defaults: M || {}
                        })).kill(), o.parent = o._dp = a(s), o._start = 0, S) It(o.vars.defaults, {
                        ease: "none"
                    }), _ ? T.forEach((function(t, e) {
                        return S.forEach((function(i, n) {
                            return o.to(t, i, n ? ">" : e * _)
                        }))
                    })) : S.forEach((function(t) {
                        return o.to(T, t, ">")
                    }));
                    else {
                        if (h = T.length, m = _ ? ge(_) : gt, K(_))
                            for (p in _) ~ri.indexOf(p) && (g || (g = {}), g[p] = _[p]);
                        for (l = 0; l < h; l++) {
                            for (p in d = {}, i) si.indexOf(p) < 0 && (d[p] = i[p]);
                            d.stagger = 0, k && (d.yoyoEase = k), g && Dt(d, g), f = T[l], d.duration = +ni(y, a(s), l, f, T), d.delay = (+ni(x, a(s), l, f, T) || 0) - s._delay, !_ && 1 === h && d.delay && (s._delay = x = d.delay, s._start += x, d.delay = 0), o.to(f, d, m(l, f, T))
                        }
                        o.duration() ? y = x = 0 : s.timeline = 0
                    }
                    y || s.duration(y = o.duration())
                } else s.timeline = 0;
                return !0 !== w || c || (Je = a(s), u.killTweensOf(T), Je = 0), Jt(P, a(s), n), i.reversed && s.reverse(), i.paused && s.paused(!0), (b || !y && !S && s._start === Ct(P._time) && J(b) && Ut(a(s)) && "nested" !== P.data) && (s._tTime = -1e-8, s.render(Math.max(0, -x))), A && $t(a(s), A), s
            }
            l(e, t);
            var i = e.prototype;
            return i.render = function(t, e, i) {
                var n, r, s, o, a, l, c, u, d, h = this._time,
                    p = this._tDur,
                    f = this._dur,
                    m = t > p - q && t >= 0 ? p : t < q ? 0 : t;
                if (f) {
                    if (m !== this._tTime || !t || i || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                        if (n = m, u = this.timeline, this._repeat) {
                            if (o = f + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, i);
                            if (n = Ct(m % o), m === p ? (s = this._repeat, n = f) : ((s = ~~(m / o)) && s === m / o && (n = f, s--), n > f && (n = f)), (l = this._yoyo && 1 & s) && (d = this._yEase, n = f - n), a = Xt(this._tTime, o), n === h && !i && this._initted) return this;
                            s !== a && (u && this._yEase && He(u, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = i = 1, this.render(Ct(o * s), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) {
                            if (te(this, t < 0 ? t : n, i, e)) return this._tTime = 0, this;
                            if (f !== this._dur) return this.render(t, e, i)
                        }
                        if (this._tTime = m, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = c = (d || this._ease)(n / f), this._from && (this.ratio = c = 1 - c), n && !h && !e && (Me(this, "onStart"), this._tTime !== m)) return this;
                        for (r = this._pt; r;) r.r(c, r.d), r = r._next;
                        u && u.render(t < 0 ? t : !n && l ? -1e-8 : u._dur * c, e, i) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, i), Me(this, "onUpdate")), this._repeat && s !== a && this.vars.onRepeat && !e && this.parent && Me(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), (t || !f) && (m === this._tDur && this._ts > 0 || !m && this._ts < 0) && Nt(this, 1), e || t < 0 && !h || !m && !h || (Me(this, m === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < p && this.timeScale() > 0) && this._prom()))
                    }
                } else ! function(t, e, i, n) {
                    var r, s, o, a = t.ratio,
                        l = e < 0 || !e && (!t._start && ee(t) && (t._initted || !ie(t)) || (t._ts < 0 || t._dp._ts < 0) && !ie(t)) ? 0 : 1,
                        c = t._rDelay,
                        u = 0;
                    if (c && t._repeat && (u = ce(0, t._tDur, e), s = Xt(u, c), o = Xt(t._tTime, c), t._yoyo && 1 & s && (l = 1 - l), s !== o && (a = 1 - l, t.vars.repeatRefresh && t._initted && t.invalidate())), l !== a || n || t._zTime === q || !e && t._zTime) {
                        if (!t._initted && te(t, e, n, i)) return;
                        for (o = t._zTime, t._zTime = e || (i ? q : 0), i || (i = e && !o), t.ratio = l, t._from && (l = 1 - l), t._time = 0, t._tTime = u, r = t._pt; r;) r.r(l, r.d), r = r._next;
                        t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !i && Me(t, "onUpdate"), u && t._repeat && !i && t.parent && Me(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === l && (l && Nt(t, 1), i || (Me(t, l ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                    } else t._zTime || (t._zTime = e)
                }(this, t, e, i);
                return this
            }, i.targets = function() {
                return this._targets
            }, i.invalidate = function() {
                return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
            }, i.kill = function(t, e) {
                if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? Ae(this) : this;
                if (this.timeline) {
                    var i = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(t, e, Je && !0 !== Je.vars.overwrite)._first || Ae(this), this.parent && i !== this.timeline.totalDuration() && ne(this, this._dur * this.timeline._tDur / i, 0, 1), this
                }
                var n, r, s, o, a, l, c, u = this._targets,
                    d = t ? fe(t) : u,
                    h = this._ptLookup,
                    p = this._pt;
                if ((!e || "all" === e) && function(t, e) {
                        for (var i = t.length, n = i === e.length; n && i-- && t[i] === e[i];);
                        return i < 0
                    }(u, d)) return "all" === e && (this._pt = 0), Ae(this);
                for (n = this._op = this._op || [], "all" !== e && (X(e) && (a = {}, Tt(e, (function(t) {
                        return a[t] = 1
                    })), e = a), e = function(t, e) {
                        var i, n, r, s, o = t[0] ? kt(t[0]).harness : 0,
                            a = o && o.aliases;
                        if (!a) return e;
                        for (n in i = Dt({}, e), a)
                            if (n in i)
                                for (r = (s = a[n].split(",")).length; r--;) i[s[r]] = i[n];
                        return i
                    }(u, e)), c = u.length; c--;)
                    if (~d.indexOf(u[c]))
                        for (a in r = h[c], "all" === e ? (n[c] = e, o = r, s = {}) : (s = n[c] = n[c] || {}, o = e), o)(l = r && r[a]) && ("kill" in l.d && !0 !== l.d.kill(a) || Wt(this, l, "_pt"), delete r[a]), "all" !== s && (s[a] = 1);
                return this._initted && !this._pt && p && Ae(this), this
            }, e.to = function(t, i) {
                return new e(t, i, arguments[2])
            }, e.from = function(t, e) {
                return ae(1, arguments)
            }, e.delayedCall = function(t, i, n, r) {
                return new e(i, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: t,
                    onComplete: i,
                    onReverseComplete: i,
                    onCompleteParams: n,
                    onReverseCompleteParams: n,
                    callbackScope: r
                })
            }, e.fromTo = function(t, e, i) {
                return ae(2, arguments)
            }, e.set = function(t, i) {
                return i.duration = 0, i.repeatDelay || (i.repeat = 0), new e(t, i)
            }, e.killTweensOf = function(t, e, i) {
                return u.killTweensOf(t, e, i)
            }, e
        }(Ze);
    It(oi.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), Tt("staggerTo,staggerFrom,staggerFromTo", (function(t) {
        oi[t] = function() {
            var e = new Ke,
                i = de.call(arguments, 0);
            return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
        }
    }));
    var ai = function(t, e, i) {
            return t[e] = i
        },
        li = function(t, e, i) {
            return t[e](i)
        },
        ci = function(t, e, i, n) {
            return t[e](n.fp, i)
        },
        ui = function(t, e, i) {
            return t.setAttribute(e, i)
        },
        di = function(t, e) {
            return G(t[e]) ? li : Z(t[e]) && t.setAttribute ? ui : ai
        },
        hi = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        pi = function(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        fi = function(t, e) {
            var i = e._pt,
                n = "";
            if (!t && e.b) n = e.b;
            else if (1 === t && e.e) n = e.e;
            else {
                for (; i;) n = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + n, i = i._next;
                n += e.c
            }
            e.set(e.t, e.p, n, e)
        },
        mi = function(t, e) {
            for (var i = e._pt; i;) i.r(t, i.d), i = i._next
        },
        gi = function(t, e, i, n) {
            for (var r, s = this._pt; s;) r = s._next, s.p === n && s.modifier(t, e, i), s = r
        },
        vi = function(t) {
            for (var e, i, n = this._pt; n;) i = n._next, n.p === t && !n.op || n.op === t ? Wt(this, n, "_pt") : n.dep || (e = 1), n = i;
            return !e
        },
        yi = function(t, e, i, n) {
            n.mSet(t, e, n.m.call(n.tween, i, n.mt), n)
        },
        xi = function(t) {
            for (var e, i, n, r, s = t._pt; s;) {
                for (e = s._next, i = n; i && i.pr > s.pr;) i = i._next;
                (s._prev = i ? i._prev : r) ? s._prev._next = s: n = s, (s._next = i) ? i._prev = s : r = s, s = e
            }
            t._pt = n
        },
        bi = function() {
            function t(t, e, i, n, r, s, o, a, l) {
                this.t = e, this.s = n, this.c = r, this.p = i, this.r = s || hi, this.d = o || this, this.set = a || ai, this.pr = l || 0, this._next = t, t && (t._prev = this)
            }
            return t.prototype.modifier = function(t, e, i) {
                this.mSet = this.mSet || this.set, this.set = yi, this.m = t, this.mt = i, this.tween = e
            }, t
        }();
    Tt(Mt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
        return vt[t] = 1
    })), ut.TweenMax = ut.TweenLite = oi, ut.TimelineLite = ut.TimelineMax = Ke, u = new Ke({
        sortChildren: !1,
        defaults: z,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), D.stringFilter = Ie;
    var _i = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            e.forEach((function(t) {
                return ke(t)
            }))
        },
        timeline: function(t) {
            return new Ke(t)
        },
        getTweensOf: function(t, e) {
            return u.getTweensOf(t, e)
        },
        getProperty: function(t, e, i, n) {
            X(t) && (t = fe(t)[0]);
            var r = kt(t || {}).get,
                s = i ? Rt : Et;
            return "native" === i && (i = ""), t ? e ? s((bt[e] && bt[e].get || r)(t, e, i, n)) : function(e, i, n) {
                return s((bt[e] && bt[e].get || r)(t, e, i, n))
            } : t
        },
        quickSetter: function(t, e, i) {
            if ((t = fe(t)).length > 1) {
                var n = t.map((function(t) {
                        return Mi.quickSetter(t, e, i)
                    })),
                    r = n.length;
                return function(t) {
                    for (var e = r; e--;) n[e](t)
                }
            }
            t = t[0] || {};
            var s = bt[e],
                o = kt(t),
                a = o.harness && (o.harness.aliases || {})[e] || e,
                l = s ? function(e) {
                    var n = new s;
                    g._pt = 0, n.init(t, i ? e + i : e, g, 0, [t]), n.render(1, n), g._pt && mi(1, g)
                } : o.set(t, a);
            return s ? l : function(e) {
                return l(t, a, i ? e + i : e, o, 1)
            }
        },
        isTweening: function(t) {
            return u.getTweensOf(t, !0).length > 0
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = je(t.ease, z.ease)), zt(z, t || {})
        },
        config: function(t) {
            return zt(D, t || {})
        },
        registerEffect: function(t) {
            var e = t.name,
                i = t.effect,
                n = t.plugins,
                r = t.defaults,
                s = t.extendTimeline;
            (n || "").split(",").forEach((function(t) {
                return t && !bt[t] && !ut[t] && ft(e + " effect requires " + t + " plugin.")
            })), _t[e] = function(t, e, n) {
                return i(fe(t), It(e || {}, r), n)
            }, s && (Ke.prototype[e] = function(t, i, n) {
                return this.add(_t[e](t, K(i) ? i : (n = i) && {}, this), n)
            })
        },
        registerEase: function(t, e) {
            ze[t] = je(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? je(t, e) : ze
        },
        getById: function(t) {
            return u.getById(t)
        },
        exportRoot: function(t, e) {
            void 0 === t && (t = {});
            var i, n, r = new Ke(t);
            for (r.smoothChildTiming = J(t.smoothChildTiming), u.remove(r), r._dp = 0, r._time = r._tTime = u._time, i = u._first; i;) n = i._next, !e && !i._dur && i instanceof oi && i.vars.onComplete === i._targets[0] || Jt(r, i, i._start - i._delay), i = n;
            return Jt(u, r, 0), r
        },
        utils: {
            wrap: function t(e, i, n) {
                var r = i - e;
                return it(e) ? be(e, t(0, e.length), i) : le(n, (function(t) {
                    return (r + (t - e) % r) % r + e
                }))
            },
            wrapYoyo: function t(e, i, n) {
                var r = i - e,
                    s = 2 * r;
                return it(e) ? be(e, t(0, e.length - 1), i) : le(n, (function(t) {
                    return e + ((t = (s + (t - e) % s) % s || 0) > r ? s - t : t)
                }))
            },
            distribute: ge,
            random: xe,
            snap: ye,
            normalize: function(t, e, i) {
                return we(t, e, 0, 1, i)
            },
            getUnit: ue,
            clamp: function(t, e, i) {
                return le(i, (function(i) {
                    return ce(t, e, i)
                }))
            },
            splitColor: Be,
            toArray: fe,
            selector: function(t) {
                return t = fe(t)[0] || ft("Invalid scope") || {},
                    function(e) {
                        var i = t.current || t.nativeElement || t;
                        return fe(e, i.querySelectorAll ? i : i === t ? ft("Invalid scope") || p.createElement("div") : t)
                    }
            },
            mapRange: we,
            pipe: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return function(t) {
                    return e.reduce((function(t, e) {
                        return e(t)
                    }), t)
                }
            },
            unitize: function(t, e) {
                return function(i) {
                    return t(parseFloat(i)) + (e || ue(i))
                }
            },
            interpolate: function t(e, i, n, r) {
                var s = isNaN(e + i) ? 0 : function(t) {
                    return (1 - t) * e + t * i
                };
                if (!s) {
                    var o, a, l, c, u, d = X(e),
                        h = {};
                    if (!0 === n && (r = 1) && (n = null), d) e = {
                        p: e
                    }, i = {
                        p: i
                    };
                    else if (it(e) && !it(i)) {
                        for (l = [], c = e.length, u = c - 2, a = 1; a < c; a++) l.push(t(e[a - 1], e[a]));
                        c--, s = function(t) {
                            t *= c;
                            var e = Math.min(u, ~~t);
                            return l[e](t - e)
                        }, n = i
                    } else r || (e = Dt(it(e) ? [] : {}, e));
                    if (!l) {
                        for (o in i) ti.call(h, e, o, "get", i[o]);
                        s = function(t) {
                            return mi(t, h) || (d ? e.p : e)
                        }
                    }
                }
                return le(n, s)
            },
            shuffle: me
        },
        install: ht,
        effects: _t,
        ticker: Le,
        updateRoot: Ke.updateRoot,
        plugins: bt,
        globalTimeline: u,
        core: {
            PropTween: bi,
            globals: mt,
            Tween: oi,
            Timeline: Ke,
            Animation: Ze,
            getCache: kt,
            _removeLinkedListItem: Wt,
            suppressOverwrites: function(t) {
                return c = t
            }
        }
    };
    Tt("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
        return _i[t] = oi[t]
    })), Le.add(Ke.updateRoot), g = _i.to({}, {
        duration: 0
    });
    var wi = function(t, e) {
            for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
            return i
        },
        Si = function(t, e) {
            return {
                name: t,
                rawVars: 1,
                init: function(t, i, n) {
                    n._onInit = function(t) {
                        var n, r;
                        if (X(i) && (n = {}, Tt(i, (function(t) {
                                return n[t] = 1
                            })), i = n), e) {
                            for (r in n = {}, i) n[r] = e(i[r]);
                            i = n
                        }! function(t, e) {
                            var i, n, r, s = t._targets;
                            for (i in e)
                                for (n = s.length; n--;)(r = t._ptLookup[n][i]) && (r = r.d) && (r._pt && (r = wi(r, i)), r && r.modifier && r.modifier(e[i], t, s[n], i))
                        }(t, i)
                    }
                }
            }
        },
        Mi = _i.registerPlugin({
            name: "attr",
            init: function(t, e, i, n, r) {
                var s, o;
                for (s in e)(o = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], n, r, 0, 0, s)) && (o.op = s), this._props.push(s)
            }
        }, {
            name: "endArray",
            init: function(t, e) {
                for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i])
            }
        }, Si("roundProps", ve), Si("modifiers"), Si("snap", ye)) || _i;
    oi.version = Ke.version = Mi.version = "3.7.1", f = 1, $() && De(), ze.Power0, ze.Power1, ze.Power2, ze.Power3, ze.Power4, ze.Linear, ze.Quad, ze.Cubic, ze.Quart, ze.Quint, ze.Strong, ze.Elastic, ze.Back, ze.SteppedEase, ze.Bounce, ze.Sine, ze.Expo, ze.Circ;
    /*!
     * CSSPlugin 3.7.1
     * https://greensock.com
     *
     * Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Ai, ki, Pi, Ti, Ci, Bi, Oi, Fi = {},
        Ei = 180 / Math.PI,
        Ri = Math.PI / 180,
        Ii = Math.atan2,
        Li = /([A-Z])/g,
        Di = /(?:left|right|width|margin|padding|x)/i,
        zi = /[\s,\(]\S/,
        Vi = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        qi = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        Wi = function(t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        Ni = function(t, e) {
            return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        },
        Hi = function(t, e) {
            var i = e.s + e.c * t;
            e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
        },
        ji = function(t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e)
        },
        Ui = function(t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        },
        Yi = function(t, e, i) {
            return t.style[e] = i
        },
        Xi = function(t, e, i) {
            return t.style.setProperty(e, i)
        },
        Gi = function(t, e, i) {
            return t._gsap[e] = i
        },
        Qi = function(t, e, i) {
            return t._gsap.scaleX = t._gsap.scaleY = i
        },
        Zi = function(t, e, i, n, r) {
            var s = t._gsap;
            s.scaleX = s.scaleY = i, s.renderTransform(r, s)
        },
        Ki = function(t, e, i, n, r) {
            var s = t._gsap;
            s[e] = i, s.renderTransform(r, s)
        },
        Ji = "transform",
        $i = Ji + "Origin",
        tn = function(t, e) {
            var i = ki.createElementNS ? ki.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : ki.createElement(t);
            return i.style ? i : ki.createElement(t)
        },
        en = function t(e, i, n) {
            var r = getComputedStyle(e);
            return r[i] || r.getPropertyValue(i.replace(Li, "-$1").toLowerCase()) || r.getPropertyValue(i) || !n && t(e, rn(i) || i, 1) || ""
        },
        nn = "O,Moz,ms,Ms,Webkit".split(","),
        rn = function(t, e, i) {
            var n = (e || Ci).style,
                r = 5;
            if (t in n && !i) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(nn[r] + t in n););
            return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? nn[r] : "") + t
        },
        sn = function() {
            "undefined" != typeof window && window.document && (Ai = window, ki = Ai.document, Pi = ki.documentElement, Ci = tn("div") || {
                style: {}
            }, tn("div"), Ji = rn(Ji), $i = Ji + "Origin", Ci.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Oi = !!rn("perspective"), Ti = 1)
        },
        on = function t(e) {
            var i, n = tn("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                r = this.parentNode,
                s = this.nextSibling,
                o = this.style.cssText;
            if (Pi.appendChild(n), n.appendChild(this), this.style.display = "block", e) try {
                i = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
            } catch (t) {} else this._gsapBBox && (i = this._gsapBBox());
            return r && (s ? r.insertBefore(this, s) : r.appendChild(this)), Pi.removeChild(n), this.style.cssText = o, i
        },
        an = function(t, e) {
            for (var i = e.length; i--;)
                if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
        },
        ln = function(t) {
            var e;
            try {
                e = t.getBBox()
            } catch (i) {
                e = on.call(t, !0)
            }
            return e && (e.width || e.height) || t.getBBox === on || (e = on.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                x: +an(t, ["x", "cx", "x1"]) || 0,
                y: +an(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            }
        },
        cn = function(t) {
            return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !ln(t))
        },
        un = function(t, e) {
            if (e) {
                var i = t.style;
                e in Fi && e !== $i && (e = Ji), i.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty(e.replace(Li, "-$1").toLowerCase())) : i.removeAttribute(e)
            }
        },
        dn = function(t, e, i, n, r, s) {
            var o = new bi(t._pt, e, i, 0, 1, s ? Ui : ji);
            return t._pt = o, o.b = n, o.e = r, t._props.push(i), o
        },
        hn = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        pn = function t(e, i, n, r) {
            var s, o, a, l, c = parseFloat(n) || 0,
                u = (n + "").trim().substr((c + "").length) || "px",
                d = Ci.style,
                h = Di.test(i),
                p = "svg" === e.tagName.toLowerCase(),
                f = (p ? "client" : "offset") + (h ? "Width" : "Height"),
                m = 100,
                g = "px" === r,
                v = "%" === r;
            return r === u || !c || hn[r] || hn[u] ? c : ("px" !== u && !g && (c = t(e, i, n, "px")), l = e.getCTM && cn(e), !v && "%" !== u || !Fi[i] && !~i.indexOf("adius") ? (d[h ? "width" : "height"] = m + (g ? u : r), o = ~i.indexOf("adius") || "em" === r && e.appendChild && !p ? e : e.parentNode, l && (o = (e.ownerSVGElement || {}).parentNode), o && o !== ki && o.appendChild || (o = ki.body), (a = o._gsap) && v && a.width && h && a.time === Le.time ? Ct(c / a.width * m) : ((v || "%" === u) && (d.position = en(e, "position")), o === e && (d.position = "static"), o.appendChild(Ci), s = Ci[f], o.removeChild(Ci), d.position = "absolute", h && v && ((a = kt(o)).time = Le.time, a.width = o[f]), Ct(g ? s * c / m : s && c ? m / s * c : 0))) : (s = l ? e.getBBox()[h ? "width" : "height"] : e[f], Ct(v ? c / s * m : c / 100 * s)))
        },
        fn = function(t, e, i, n) {
            var r;
            return Ti || sn(), e in Vi && "transform" !== e && ~(e = Vi[e]).indexOf(",") && (e = e.split(",")[0]), Fi[e] && "transform" !== e ? (r = An(t, n), r = "transformOrigin" !== e ? r[e] : r.svg ? r.origin : kn(en(t, $i)) + " " + r.zOrigin + "px") : (!(r = t.style[e]) || "auto" === r || n || ~(r + "").indexOf("calc(")) && (r = yn[e] && yn[e](t, e, i) || en(t, e) || Pt(t, e) || ("opacity" === e ? 1 : 0)), i && !~(r + "").trim().indexOf(" ") ? pn(t, e, r, i) + i : r
        },
        mn = function(t, e, i, n) {
            if (!i || "none" === i) {
                var r = rn(e, t, 1),
                    s = r && en(t, r, 1);
                s && s !== i ? (e = r, i = s) : "borderColor" === e && (i = en(t, "borderTopColor"))
            }
            var o, a, l, c, u, d, h, p, f, m, g, v, y = new bi(this._pt, t.style, e, 0, 1, fi),
                x = 0,
                b = 0;
            if (y.b = i, y.e = n, i += "", "auto" === (n += "") && (t.style[e] = n, n = en(t, e) || n, t.style[e] = i), Ie(o = [i, n]), n = o[1], l = (i = o[0]).match(st) || [], (n.match(st) || []).length) {
                for (; a = st.exec(n);) h = a[0], f = n.substring(x, a.index), u ? u = (u + 1) % 5 : "rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5) || (u = 1), h !== (d = l[b++] || "") && (c = parseFloat(d) || 0, g = d.substr((c + "").length), (v = "=" === h.charAt(1) ? +(h.charAt(0) + "1") : 0) && (h = h.substr(2)), p = parseFloat(h), m = h.substr((p + "").length), x = st.lastIndex - m.length, m || (m = m || D.units[e] || g, x === n.length && (n += m, y.e += m)), g !== m && (c = pn(t, e, d, m) || 0), y._pt = {
                    _next: y._pt,
                    p: f || 1 === b ? f : ",",
                    s: c,
                    c: v ? v * p : p - c,
                    m: u && u < 4 || "zIndex" === e ? Math.round : 0
                });
                y.c = x < n.length ? n.substring(x, n.length) : ""
            } else y.r = "display" === e && "none" === n ? Ui : ji;
            return at.test(n) && (y.e = 0), this._pt = y, y
        },
        gn = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        vn = function(t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var i, n, r, s = e.t,
                    o = s.style,
                    a = e.u,
                    l = s._gsap;
                if ("all" === a || !0 === a) o.cssText = "", n = 1;
                else
                    for (r = (a = a.split(",")).length; --r > -1;) i = a[r], Fi[i] && (n = 1, i = "transformOrigin" === i ? $i : Ji), un(s, i);
                n && (un(s, Ji), l && (l.svg && s.removeAttribute("transform"), An(s, 1), l.uncache = 1))
            }
        },
        yn = {
            clearProps: function(t, e, i, n, r) {
                if ("isFromStart" !== r.data) {
                    var s = t._pt = new bi(t._pt, e, i, 0, 0, vn);
                    return s.u = n, s.pr = -10, s.tween = r, t._props.push(i), 1
                }
            }
        },
        xn = [1, 0, 0, 1, 0, 0],
        bn = {},
        _n = function(t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
        },
        wn = function(t) {
            var e = en(t, Ji);
            return _n(e) ? xn : e.substr(7).match(rt).map(Ct)
        },
        Sn = function(t, e) {
            var i, n, r, s, o = t._gsap || kt(t),
                a = t.style,
                l = wn(t);
            return o.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? xn : l : (l !== xn || t.offsetParent || t === Pi || o.svg || (r = a.display, a.display = "block", (i = t.parentNode) && t.offsetParent || (s = 1, n = t.nextSibling, Pi.appendChild(t)), l = wn(t), r ? a.display = r : un(t, "display"), s && (n ? i.insertBefore(t, n) : i ? i.appendChild(t) : Pi.removeChild(t))), e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
        },
        Mn = function(t, e, i, n, r, s) {
            var o, a, l, c = t._gsap,
                u = r || Sn(t, !0),
                d = c.xOrigin || 0,
                h = c.yOrigin || 0,
                p = c.xOffset || 0,
                f = c.yOffset || 0,
                m = u[0],
                g = u[1],
                v = u[2],
                y = u[3],
                x = u[4],
                b = u[5],
                _ = e.split(" "),
                w = parseFloat(_[0]) || 0,
                S = parseFloat(_[1]) || 0;
            i ? u !== xn && (a = m * y - g * v) && (l = w * (-g / a) + S * (m / a) - (m * b - g * x) / a, w = w * (y / a) + S * (-v / a) + (v * b - y * x) / a, S = l) : (w = (o = ln(t)).x + (~_[0].indexOf("%") ? w / 100 * o.width : w), S = o.y + (~(_[1] || _[0]).indexOf("%") ? S / 100 * o.height : S)), n || !1 !== n && c.smooth ? (x = w - d, b = S - h, c.xOffset = p + (x * m + b * v) - x, c.yOffset = f + (x * g + b * y) - b) : c.xOffset = c.yOffset = 0, c.xOrigin = w, c.yOrigin = S, c.smooth = !!n, c.origin = e, c.originIsAbsolute = !!i, t.style[$i] = "0px 0px", s && (dn(s, c, "xOrigin", d, w), dn(s, c, "yOrigin", h, S), dn(s, c, "xOffset", p, c.xOffset), dn(s, c, "yOffset", f, c.yOffset)), t.setAttribute("data-svg-origin", w + " " + S)
        },
        An = function(t, e) {
            var i = t._gsap || new Qe(t);
            if ("x" in i && !e && !i.uncache) return i;
            var n, r, s, o, a, l, c, u, d, h, p, f, m, g, v, y, x, b, _, w, S, M, A, k, P, T, C, B, O, F, E, R, I = t.style,
                L = i.scaleX < 0,
                z = "px",
                V = "deg",
                q = en(t, $i) || "0";
            return n = r = s = l = c = u = d = h = p = 0, o = a = 1, i.svg = !(!t.getCTM || !cn(t)), g = Sn(t, i.svg), i.svg && (k = (!i.uncache || "0px 0px" === q) && !e && t.getAttribute("data-svg-origin"), Mn(t, k || q, !!k || i.originIsAbsolute, !1 !== i.smooth, g)), f = i.xOrigin || 0, m = i.yOrigin || 0, g !== xn && (b = g[0], _ = g[1], w = g[2], S = g[3], n = M = g[4], r = A = g[5], 6 === g.length ? (o = Math.sqrt(b * b + _ * _), a = Math.sqrt(S * S + w * w), l = b || _ ? Ii(_, b) * Ei : 0, (d = w || S ? Ii(w, S) * Ei + l : 0) && (a *= Math.abs(Math.cos(d * Ri))), i.svg && (n -= f - (f * b + m * w), r -= m - (f * _ + m * S))) : (R = g[6], F = g[7], C = g[8], B = g[9], O = g[10], E = g[11], n = g[12], r = g[13], s = g[14], c = (v = Ii(R, O)) * Ei, v && (k = M * (y = Math.cos(-v)) + C * (x = Math.sin(-v)), P = A * y + B * x, T = R * y + O * x, C = M * -x + C * y, B = A * -x + B * y, O = R * -x + O * y, E = F * -x + E * y, M = k, A = P, R = T), u = (v = Ii(-w, O)) * Ei, v && (y = Math.cos(-v), E = S * (x = Math.sin(-v)) + E * y, b = k = b * y - C * x, _ = P = _ * y - B * x, w = T = w * y - O * x), l = (v = Ii(_, b)) * Ei, v && (k = b * (y = Math.cos(v)) + _ * (x = Math.sin(v)), P = M * y + A * x, _ = _ * y - b * x, A = A * y - M * x, b = k, M = P), c && Math.abs(c) + Math.abs(l) > 359.9 && (c = l = 0, u = 180 - u), o = Ct(Math.sqrt(b * b + _ * _ + w * w)), a = Ct(Math.sqrt(A * A + R * R)), v = Ii(M, A), d = Math.abs(v) > 2e-4 ? v * Ei : 0, p = E ? 1 / (E < 0 ? -E : E) : 0), i.svg && (k = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !_n(en(t, Ji)), k && t.setAttribute("transform", k))), Math.abs(d) > 90 && Math.abs(d) < 270 && (L ? (o *= -1, d += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (a *= -1, d += d <= 0 ? 180 : -180)), i.x = n - ((i.xPercent = n && (i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + z, i.y = r - ((i.yPercent = r && (i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + z, i.z = s + z, i.scaleX = Ct(o), i.scaleY = Ct(a), i.rotation = Ct(l) + V, i.rotationX = Ct(c) + V, i.rotationY = Ct(u) + V, i.skewX = d + V, i.skewY = h + V, i.transformPerspective = p + z, (i.zOrigin = parseFloat(q.split(" ")[2]) || 0) && (I[$i] = kn(q)), i.xOffset = i.yOffset = 0, i.force3D = D.force3D, i.renderTransform = i.svg ? En : Oi ? Fn : Tn, i.uncache = 0, i
        },
        kn = function(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        Pn = function(t, e, i) {
            var n = ue(e);
            return Ct(parseFloat(e) + parseFloat(pn(t, "x", i + "px", n))) + n
        },
        Tn = function(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Fn(t, e)
        },
        Cn = "0deg",
        Bn = "0px",
        On = ") ",
        Fn = function(t, e) {
            var i = e || this,
                n = i.xPercent,
                r = i.yPercent,
                s = i.x,
                o = i.y,
                a = i.z,
                l = i.rotation,
                c = i.rotationY,
                u = i.rotationX,
                d = i.skewX,
                h = i.skewY,
                p = i.scaleX,
                f = i.scaleY,
                m = i.transformPerspective,
                g = i.force3D,
                v = i.target,
                y = i.zOrigin,
                x = "",
                b = "auto" === g && t && 1 !== t || !0 === g;
            if (y && (u !== Cn || c !== Cn)) {
                var _, w = parseFloat(c) * Ri,
                    S = Math.sin(w),
                    M = Math.cos(w);
                w = parseFloat(u) * Ri, _ = Math.cos(w), s = Pn(v, s, S * _ * -y), o = Pn(v, o, -Math.sin(w) * -y), a = Pn(v, a, M * _ * -y + y)
            }
            m !== Bn && (x += "perspective(" + m + On), (n || r) && (x += "translate(" + n + "%, " + r + "%) "), (b || s !== Bn || o !== Bn || a !== Bn) && (x += a !== Bn || b ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + On), l !== Cn && (x += "rotate(" + l + On), c !== Cn && (x += "rotateY(" + c + On), u !== Cn && (x += "rotateX(" + u + On), d === Cn && h === Cn || (x += "skew(" + d + ", " + h + On), 1 === p && 1 === f || (x += "scale(" + p + ", " + f + On), v.style[Ji] = x || "translate(0, 0)"
        },
        En = function(t, e) {
            var i, n, r, s, o, a = e || this,
                l = a.xPercent,
                c = a.yPercent,
                u = a.x,
                d = a.y,
                h = a.rotation,
                p = a.skewX,
                f = a.skewY,
                m = a.scaleX,
                g = a.scaleY,
                v = a.target,
                y = a.xOrigin,
                x = a.yOrigin,
                b = a.xOffset,
                _ = a.yOffset,
                w = a.forceCSS,
                S = parseFloat(u),
                M = parseFloat(d);
            h = parseFloat(h), p = parseFloat(p), (f = parseFloat(f)) && (p += f = parseFloat(f), h += f), h || p ? (h *= Ri, p *= Ri, i = Math.cos(h) * m, n = Math.sin(h) * m, r = Math.sin(h - p) * -g, s = Math.cos(h - p) * g, p && (f *= Ri, o = Math.tan(p - f), r *= o = Math.sqrt(1 + o * o), s *= o, f && (o = Math.tan(f), i *= o = Math.sqrt(1 + o * o), n *= o)), i = Ct(i), n = Ct(n), r = Ct(r), s = Ct(s)) : (i = m, s = g, n = r = 0), (S && !~(u + "").indexOf("px") || M && !~(d + "").indexOf("px")) && (S = pn(v, "x", u, "px"), M = pn(v, "y", d, "px")), (y || x || b || _) && (S = Ct(S + y - (y * i + x * r) + b), M = Ct(M + x - (y * n + x * s) + _)), (l || c) && (o = v.getBBox(), S = Ct(S + l / 100 * o.width), M = Ct(M + c / 100 * o.height)), o = "matrix(" + i + "," + n + "," + r + "," + s + "," + S + "," + M + ")", v.setAttribute("transform", o), w && (v.style[Ji] = o)
        },
        Rn = function(t, e, i, n, r, s) {
            var o, a, l = 360,
                c = X(r),
                u = parseFloat(r) * (c && ~r.indexOf("rad") ? Ei : 1),
                d = s ? u * s : u - n,
                h = n + d + "deg";
            return c && ("short" === (o = r.split("_")[1]) && (d %= l) !== d % 180 && (d += d < 0 ? l : -360), "cw" === o && d < 0 ? d = (d + 36e9) % l - ~~(d / l) * l : "ccw" === o && d > 0 && (d = (d - 36e9) % l - ~~(d / l) * l)), t._pt = a = new bi(t._pt, e, i, n, d, Wi), a.e = h, a.u = "deg", t._props.push(i), a
        },
        In = function(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        },
        Ln = function(t, e, i) {
            var n, r, s, o, a, l, c, u = In({}, i._gsap),
                d = i.style;
            for (r in u.svg ? (s = i.getAttribute("transform"), i.setAttribute("transform", ""), d[Ji] = e, n = An(i, 1), un(i, Ji), i.setAttribute("transform", s)) : (s = getComputedStyle(i)[Ji], d[Ji] = e, n = An(i, 1), d[Ji] = s), Fi)(s = u[r]) !== (o = n[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (a = ue(s) !== (c = ue(o)) ? pn(i, r, s, c) : parseFloat(s), l = parseFloat(o), t._pt = new bi(t._pt, n, r, a, l - a, qi), t._pt.u = c || 0, t._props.push(r));
            In(n, u)
        };
    Tt("padding,margin,Width,Radius", (function(t, e) {
        var i = "Top",
            n = "Right",
            r = "Bottom",
            s = "Left",
            o = (e < 3 ? [i, n, r, s] : [i + s, i + n, r + n, r + s]).map((function(i) {
                return e < 2 ? t + i : "border" + i + t
            }));
        yn[e > 1 ? "border" + t : t] = function(t, e, i, n, r) {
            var s, a;
            if (arguments.length < 4) return s = o.map((function(e) {
                return fn(t, e, i)
            })), 5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a;
            s = (n + "").split(" "), a = {}, o.forEach((function(t, e) {
                return a[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
            })), t.init(e, a, r)
        }
    }));
    var Dn, zn, Vn, qn = {
        name: "css",
        register: sn,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, i, n, r) {
            var s, o, a, l, c, u, d, h, p, f, m, g, v, y, x, b, _, w, S, M = this._props,
                A = t.style,
                k = i.vars.startAt;
            for (d in Ti || sn(), e)
                if ("autoRound" !== d && (o = e[d], !bt[d] || !ei(d, e, i, n, t, r)))
                    if (c = typeof o, u = yn[d], "function" === c && (c = typeof(o = o.call(i, n, t, r))), "string" === c && ~o.indexOf("random(") && (o = _e(o)), u) u(this, t, d, o, i) && (x = 1);
                    else if ("--" === d.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(d) + "").trim(), o += "", Ee.lastIndex = 0, Ee.test(s) || (h = ue(s), p = ue(o)), p ? h !== p && (s = pn(t, d, s, p) + p) : h && (o += h), this.add(A, "setProperty", s, o, n, r, 0, 0, d), M.push(d);
            else if ("undefined" !== c) {
                if (k && d in k ? (s = "function" == typeof k[d] ? k[d].call(i, n, t, r) : k[d], d in D.units && !ue(s) && (s += D.units[d]), "=" === (s + "").charAt(1) && (s = fn(t, d))) : s = fn(t, d), l = parseFloat(s), (f = "string" === c && "=" === o.charAt(1) ? +(o.charAt(0) + "1") : 0) && (o = o.substr(2)), a = parseFloat(o), d in Vi && ("autoAlpha" === d && (1 === l && "hidden" === fn(t, "visibility") && a && (l = 0), dn(this, A, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== d && "transform" !== d && ~(d = Vi[d]).indexOf(",") && (d = d.split(",")[0])), m = d in Fi)
                    if (g || ((v = t._gsap).renderTransform && !e.parseTransform || An(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new bi(this._pt, A, Ji, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === d) this._pt = new bi(this._pt, v, "scaleY", v.scaleY, (f ? f * a : a - v.scaleY) || 0), M.push("scaleY", d), d += "X";
                    else {
                        if ("transformOrigin" === d) {
                            _ = void 0, w = void 0, S = void 0, _ = (b = o).split(" "), w = _[0], S = _[1] || "50%", "top" !== w && "bottom" !== w && "left" !== S && "right" !== S || (b = w, w = S, S = b), _[0] = gn[w] || w, _[1] = gn[S] || S, o = _.join(" "), v.svg ? Mn(t, o, 0, y, 0, this) : ((p = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin && dn(this, v, "zOrigin", v.zOrigin, p), dn(this, A, d, kn(s), kn(o)));
                            continue
                        }
                        if ("svgOrigin" === d) {
                            Mn(t, o, 1, y, 0, this);
                            continue
                        }
                        if (d in bn) {
                            Rn(this, v, d, l, o, f);
                            continue
                        }
                        if ("smoothOrigin" === d) {
                            dn(this, v, "smooth", v.smooth, o);
                            continue
                        }
                        if ("force3D" === d) {
                            v[d] = o;
                            continue
                        }
                        if ("transform" === d) {
                            Ln(this, o, t);
                            continue
                        }
                    }
                else d in A || (d = rn(d) || d);
                if (m || (a || 0 === a) && (l || 0 === l) && !zi.test(o) && d in A) a || (a = 0), (h = (s + "").substr((l + "").length)) !== (p = ue(o) || (d in D.units ? D.units[d] : h)) && (l = pn(t, d, s, p)), this._pt = new bi(this._pt, m ? v : A, d, l, f ? f * a : a - l, m || "px" !== p && "zIndex" !== d || !1 === e.autoRound ? qi : Hi), this._pt.u = p || 0, h !== p && (this._pt.b = s, this._pt.r = Ni);
                else if (d in A) mn.call(this, t, d, s, o);
                else {
                    if (!(d in t)) {
                        pt(d, o);
                        continue
                    }
                    this.add(t, d, s || t[d], o, n, r)
                }
                M.push(d)
            }
            x && xi(this)
        },
        get: fn,
        aliases: Vi,
        getSetter: function(t, e, i) {
            var n = Vi[e];
            return n && n.indexOf(",") < 0 && (e = n), e in Fi && e !== $i && (t._gsap.x || fn(t, "x")) ? i && Bi === i ? "scale" === e ? Qi : Gi : (Bi = i || {}) && ("scale" === e ? Zi : Ki) : t.style && !Z(t.style[e]) ? Yi : ~e.indexOf("-") ? Xi : di(t, e)
        },
        core: {
            _removeProperty: un,
            _getMatrix: Sn
        }
    };
    Mi.utils.checkPrefix = rn, Vn = Tt((Dn = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (zn = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
        Fi[t] = 1
    })), Tt(zn, (function(t) {
        D.units[t] = "deg", bn[t] = 1
    })), Vi[Vn[13]] = Dn + "," + zn, Tt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
        var e = t.split(":");
        Vi[e[1]] = Vn[e[0]]
    })), Tt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
        D.units[t] = "px"
    })), Mi.registerPlugin(qn);
    var Wn = Mi.registerPlugin(qn) || Mi;
    Wn.core.Tween;
    const Nn = {
            "Amazon Silk": "amazon_silk",
            "Android Browser": "android",
            Bada: "bada",
            BlackBerry: "blackberry",
            Chrome: "chrome",
            Chromium: "chromium",
            Electron: "electron",
            Epiphany: "epiphany",
            Firefox: "firefox",
            Focus: "focus",
            Generic: "generic",
            "Google Search": "google_search",
            Googlebot: "googlebot",
            "Internet Explorer": "ie",
            "K-Meleon": "k_meleon",
            Maxthon: "maxthon",
            "Microsoft Edge": "edge",
            "MZ Browser": "mz",
            "NAVER Whale Browser": "naver",
            Opera: "opera",
            "Opera Coast": "opera_coast",
            PhantomJS: "phantomjs",
            Puffin: "puffin",
            QupZilla: "qupzilla",
            QQ: "qq",
            QQLite: "qqlite",
            Safari: "safari",
            Sailfish: "sailfish",
            "Samsung Internet for Android": "samsung_internet",
            SeaMonkey: "seamonkey",
            Sleipnir: "sleipnir",
            Swing: "swing",
            Tizen: "tizen",
            "UC Browser": "uc",
            Vivaldi: "vivaldi",
            "WebOS Browser": "webos",
            WeChat: "wechat",
            "Yandex Browser": "yandex",
            Roku: "roku"
        },
        Hn = {
            amazon_silk: "Amazon Silk",
            android: "Android Browser",
            bada: "Bada",
            blackberry: "BlackBerry",
            chrome: "Chrome",
            chromium: "Chromium",
            electron: "Electron",
            epiphany: "Epiphany",
            firefox: "Firefox",
            focus: "Focus",
            generic: "Generic",
            googlebot: "Googlebot",
            google_search: "Google Search",
            ie: "Internet Explorer",
            k_meleon: "K-Meleon",
            maxthon: "Maxthon",
            edge: "Microsoft Edge",
            mz: "MZ Browser",
            naver: "NAVER Whale Browser",
            opera: "Opera",
            opera_coast: "Opera Coast",
            phantomjs: "PhantomJS",
            puffin: "Puffin",
            qupzilla: "QupZilla",
            qq: "QQ Browser",
            qqlite: "QQ Browser Lite",
            safari: "Safari",
            sailfish: "Sailfish",
            samsung_internet: "Samsung Internet for Android",
            seamonkey: "SeaMonkey",
            sleipnir: "Sleipnir",
            swing: "Swing",
            tizen: "Tizen",
            uc: "UC Browser",
            vivaldi: "Vivaldi",
            webos: "WebOS Browser",
            wechat: "WeChat",
            yandex: "Yandex Browser"
        },
        jn = {
            tablet: "tablet",
            mobile: "mobile",
            desktop: "desktop",
            tv: "tv"
        },
        Un = {
            WindowsPhone: "Windows Phone",
            Windows: "Windows",
            MacOS: "macOS",
            iOS: "iOS",
            Android: "Android",
            WebOS: "WebOS",
            BlackBerry: "BlackBerry",
            Bada: "Bada",
            Tizen: "Tizen",
            Linux: "Linux",
            ChromeOS: "Chrome OS",
            PlayStation4: "PlayStation 4",
            Roku: "Roku"
        },
        Yn = {
            EdgeHTML: "EdgeHTML",
            Blink: "Blink",
            Trident: "Trident",
            Presto: "Presto",
            Gecko: "Gecko",
            WebKit: "WebKit"
        };
    class Xn {
        static getFirstMatch(t, e) {
            const i = e.match(t);
            return i && i.length > 0 && i[1] || ""
        }
        static getSecondMatch(t, e) {
            const i = e.match(t);
            return i && i.length > 1 && i[2] || ""
        }
        static matchAndReturnConst(t, e, i) {
            if (t.test(e)) return i
        }
        static getWindowsVersionName(t) {
            switch (t) {
                case "NT":
                    return "NT";
                case "XP":
                    return "XP";
                case "NT 5.0":
                    return "2000";
                case "NT 5.1":
                    return "XP";
                case "NT 5.2":
                    return "2003";
                case "NT 6.0":
                    return "Vista";
                case "NT 6.1":
                    return "7";
                case "NT 6.2":
                    return "8";
                case "NT 6.3":
                    return "8.1";
                case "NT 10.0":
                    return "10";
                default:
                    return
            }
        }
        static getMacOSVersionName(t) {
            const e = t.split(".").splice(0, 2).map((t => parseInt(t, 10) || 0));
            if (e.push(0), 10 === e[0]) switch (e[1]) {
                case 5:
                    return "Leopard";
                case 6:
                    return "Snow Leopard";
                case 7:
                    return "Lion";
                case 8:
                    return "Mountain Lion";
                case 9:
                    return "Mavericks";
                case 10:
                    return "Yosemite";
                case 11:
                    return "El Capitan";
                case 12:
                    return "Sierra";
                case 13:
                    return "High Sierra";
                case 14:
                    return "Mojave";
                case 15:
                    return "Catalina";
                default:
                    return
            }
        }
        static getAndroidVersionName(t) {
            const e = t.split(".").splice(0, 2).map((t => parseInt(t, 10) || 0));
            if (e.push(0), !(1 === e[0] && e[1] < 5)) return 1 === e[0] && e[1] < 6 ? "Cupcake" : 1 === e[0] && e[1] >= 6 ? "Donut" : 2 === e[0] && e[1] < 2 ? "Eclair" : 2 === e[0] && 2 === e[1] ? "Froyo" : 2 === e[0] && e[1] > 2 ? "Gingerbread" : 3 === e[0] ? "Honeycomb" : 4 === e[0] && e[1] < 1 ? "Ice Cream Sandwich" : 4 === e[0] && e[1] < 4 ? "Jelly Bean" : 4 === e[0] && e[1] >= 4 ? "KitKat" : 5 === e[0] ? "Lollipop" : 6 === e[0] ? "Marshmallow" : 7 === e[0] ? "Nougat" : 8 === e[0] ? "Oreo" : 9 === e[0] ? "Pie" : void 0
        }
        static getVersionPrecision(t) {
            return t.split(".").length
        }
        static compareVersions(t, e, i = !1) {
            const n = Xn.getVersionPrecision(t),
                r = Xn.getVersionPrecision(e);
            let s = Math.max(n, r),
                o = 0;
            const a = Xn.map([t, e], (t => {
                const e = s - Xn.getVersionPrecision(t),
                    i = t + new Array(e + 1).join(".0");
                return Xn.map(i.split("."), (t => new Array(20 - t.length).join("0") + t)).reverse()
            }));
            for (i && (o = s - Math.min(n, r)), s -= 1; s >= o;) {
                if (a[0][s] > a[1][s]) return 1;
                if (a[0][s] === a[1][s]) {
                    if (s === o) return 0;
                    s -= 1
                } else if (a[0][s] < a[1][s]) return -1
            }
        }
        static map(t, e) {
            const i = [];
            let n;
            if (Array.prototype.map) return Array.prototype.map.call(t, e);
            for (n = 0; n < t.length; n += 1) i.push(e(t[n]));
            return i
        }
        static find(t, e) {
            let i, n;
            if (Array.prototype.find) return Array.prototype.find.call(t, e);
            for (i = 0, n = t.length; i < n; i += 1) {
                const n = t[i];
                if (e(n, i)) return n
            }
        }
        static assign(t, ...e) {
            const i = t;
            let n, r;
            if (Object.assign) return Object.assign(t, ...e);
            for (n = 0, r = e.length; n < r; n += 1) {
                const t = e[n];
                if ("object" == typeof t && null !== t) {
                    Object.keys(t).forEach((e => {
                        i[e] = t[e]
                    }))
                }
            }
            return t
        }
        static getBrowserAlias(t) {
            return Nn[t]
        }
        static getBrowserTypeByAlias(t) {
            return Hn[t] || ""
        }
    }
    const Gn = /version\/(\d+(\.?_?\d+)+)/i,
        Qn = [{
            test: [/googlebot/i],
            describe(t) {
                const e = {
                        name: "Googlebot"
                    },
                    i = Xn.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, t) || Xn.getFirstMatch(Gn, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/opera/i],
            describe(t) {
                const e = {
                        name: "Opera"
                    },
                    i = Xn.getFirstMatch(Gn, t) || Xn.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/opr\/|opios/i],
            describe(t) {
                const e = {
                        name: "Opera"
                    },
                    i = Xn.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, t) || Xn.getFirstMatch(Gn, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/SamsungBrowser/i],
            describe(t) {
                const e = {
                        name: "Samsung Internet for Android"
                    },
                    i = Xn.getFirstMatch(Gn, t) || Xn.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/Whale/i],
            describe(t) {
                const e = {
                        name: "NAVER Whale Browser"
                    },
                    i = Xn.getFirstMatch(Gn, t) || Xn.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/MZBrowser/i],
            describe(t) {
                const e = {
                        name: "MZ Browser"
                    },
                    i = Xn.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, t) || Xn.getFirstMatch(Gn, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/focus/i],
            describe(t) {
                const e = {
                        name: "Focus"
                    },
                    i = Xn.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, t) || Xn.getFirstMatch(Gn, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/swing/i],
            describe(t) {
                const e = {
                        name: "Swing"
                    },
                    i = Xn.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, t) || Xn.getFirstMatch(Gn, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/coast/i],
            describe(t) {
                const e = {
                        name: "Opera Coast"
                    },
                    i = Xn.getFirstMatch(Gn, t) || Xn.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/opt\/\d+(?:.?_?\d+)+/i],
            describe(t) {
                const e = {
                        name: "Opera Touch"
                    },
                    i = Xn.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, t) || Xn.getFirstMatch(Gn, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/yabrowser/i],
            describe(t) {
                const e = {
                        name: "Yandex Browser"
                    },
                    i = Xn.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, t) || Xn.getFirstMatch(Gn, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/ucbrowser/i],
            describe(t) {
                const e = {
                        name: "UC Browser"
                    },
                    i = Xn.getFirstMatch(Gn, t) || Xn.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/Maxthon|mxios/i],
            describe(t) {
                const e = {
                        name: "Maxthon"
                    },
                    i = Xn.getFirstMatch(Gn, t) || Xn.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/epiphany/i],
            describe(t) {
                const e = {
                        name: "Epiphany"
                    },
                    i = Xn.getFirstMatch(Gn, t) || Xn.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/puffin/i],
            describe(t) {
                const e = {
                        name: "Puffin"
                    },
                    i = Xn.getFirstMatch(Gn, t) || Xn.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/sleipnir/i],
            describe(t) {
                const e = {
                        name: "Sleipnir"
                    },
                    i = Xn.getFirstMatch(Gn, t) || Xn.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/k-meleon/i],
            describe(t) {
                const e = {
                        name: "K-Meleon"
                    },
                    i = Xn.getFirstMatch(Gn, t) || Xn.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/micromessenger/i],
            describe(t) {
                const e = {
                        name: "WeChat"
                    },
                    i = Xn.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, t) || Xn.getFirstMatch(Gn, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/qqbrowser/i],
            describe(t) {
                const e = {
                        name: /qqbrowserlite/i.test(t) ? "QQ Browser Lite" : "QQ Browser"
                    },
                    i = Xn.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, t) || Xn.getFirstMatch(Gn, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/msie|trident/i],
            describe(t) {
                const e = {
                        name: "Internet Explorer"
                    },
                    i = Xn.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/\sedg\//i],
            describe(t) {
                const e = {
                        name: "Microsoft Edge"
                    },
                    i = Xn.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/edg([ea]|ios)/i],
            describe(t) {
                const e = {
                        name: "Microsoft Edge"
                    },
                    i = Xn.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/vivaldi/i],
            describe(t) {
                const e = {
                        name: "Vivaldi"
                    },
                    i = Xn.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/seamonkey/i],
            describe(t) {
                const e = {
                        name: "SeaMonkey"
                    },
                    i = Xn.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/sailfish/i],
            describe(t) {
                const e = {
                        name: "Sailfish"
                    },
                    i = Xn.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/silk/i],
            describe(t) {
                const e = {
                        name: "Amazon Silk"
                    },
                    i = Xn.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/phantom/i],
            describe(t) {
                const e = {
                        name: "PhantomJS"
                    },
                    i = Xn.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/slimerjs/i],
            describe(t) {
                const e = {
                        name: "SlimerJS"
                    },
                    i = Xn.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
            describe(t) {
                const e = {
                        name: "BlackBerry"
                    },
                    i = Xn.getFirstMatch(Gn, t) || Xn.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/(web|hpw)[o0]s/i],
            describe(t) {
                const e = {
                        name: "WebOS Browser"
                    },
                    i = Xn.getFirstMatch(Gn, t) || Xn.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/bada/i],
            describe(t) {
                const e = {
                        name: "Bada"
                    },
                    i = Xn.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/tizen/i],
            describe(t) {
                const e = {
                        name: "Tizen"
                    },
                    i = Xn.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, t) || Xn.getFirstMatch(Gn, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/qupzilla/i],
            describe(t) {
                const e = {
                        name: "QupZilla"
                    },
                    i = Xn.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, t) || Xn.getFirstMatch(Gn, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/firefox|iceweasel|fxios/i],
            describe(t) {
                const e = {
                        name: "Firefox"
                    },
                    i = Xn.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/electron/i],
            describe(t) {
                const e = {
                        name: "Electron"
                    },
                    i = Xn.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/MiuiBrowser/i],
            describe(t) {
                const e = {
                        name: "Miui"
                    },
                    i = Xn.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/chromium/i],
            describe(t) {
                const e = {
                        name: "Chromium"
                    },
                    i = Xn.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, t) || Xn.getFirstMatch(Gn, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/chrome|crios|crmo/i],
            describe(t) {
                const e = {
                        name: "Chrome"
                    },
                    i = Xn.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/GSA/i],
            describe(t) {
                const e = {
                        name: "Google Search"
                    },
                    i = Xn.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test(t) {
                const e = !t.test(/like android/i),
                    i = t.test(/android/i);
                return e && i
            },
            describe(t) {
                const e = {
                        name: "Android Browser"
                    },
                    i = Xn.getFirstMatch(Gn, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/playstation 4/i],
            describe(t) {
                const e = {
                        name: "PlayStation 4"
                    },
                    i = Xn.getFirstMatch(Gn, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/safari|applewebkit/i],
            describe(t) {
                const e = {
                        name: "Safari"
                    },
                    i = Xn.getFirstMatch(Gn, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/.*/i],
            describe(t) {
                const e = -1 !== t.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                return {
                    name: Xn.getFirstMatch(e, t),
                    version: Xn.getSecondMatch(e, t)
                }
            }
        }];
    var Zn = [{
            test: [/Roku\/DVP/],
            describe(t) {
                const e = Xn.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, t);
                return {
                    name: Un.Roku,
                    version: e
                }
            }
        }, {
            test: [/windows phone/i],
            describe(t) {
                const e = Xn.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, t);
                return {
                    name: Un.WindowsPhone,
                    version: e
                }
            }
        }, {
            test: [/windows /i],
            describe(t) {
                const e = Xn.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, t),
                    i = Xn.getWindowsVersionName(e);
                return {
                    name: Un.Windows,
                    version: e,
                    versionName: i
                }
            }
        }, {
            test: [/Macintosh(.*?) FxiOS(.*?)\//],
            describe(t) {
                const e = {
                        name: Un.iOS
                    },
                    i = Xn.getSecondMatch(/(Version\/)(\d[\d.]+)/, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/macintosh/i],
            describe(t) {
                const e = Xn.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, t).replace(/[_\s]/g, "."),
                    i = Xn.getMacOSVersionName(e),
                    n = {
                        name: Un.MacOS,
                        version: e
                    };
                return i && (n.versionName = i), n
            }
        }, {
            test: [/(ipod|iphone|ipad)/i],
            describe(t) {
                const e = Xn.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, t).replace(/[_\s]/g, ".");
                return {
                    name: Un.iOS,
                    version: e
                }
            }
        }, {
            test(t) {
                const e = !t.test(/like android/i),
                    i = t.test(/android/i);
                return e && i
            },
            describe(t) {
                const e = Xn.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, t),
                    i = Xn.getAndroidVersionName(e),
                    n = {
                        name: Un.Android,
                        version: e
                    };
                return i && (n.versionName = i), n
            }
        }, {
            test: [/(web|hpw)[o0]s/i],
            describe(t) {
                const e = Xn.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, t),
                    i = {
                        name: Un.WebOS
                    };
                return e && e.length && (i.version = e), i
            }
        }, {
            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
            describe(t) {
                const e = Xn.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, t) || Xn.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, t) || Xn.getFirstMatch(/\bbb(\d+)/i, t);
                return {
                    name: Un.BlackBerry,
                    version: e
                }
            }
        }, {
            test: [/bada/i],
            describe(t) {
                const e = Xn.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, t);
                return {
                    name: Un.Bada,
                    version: e
                }
            }
        }, {
            test: [/tizen/i],
            describe(t) {
                const e = Xn.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, t);
                return {
                    name: Un.Tizen,
                    version: e
                }
            }
        }, {
            test: [/linux/i],
            describe: () => ({
                name: Un.Linux
            })
        }, {
            test: [/CrOS/],
            describe: () => ({
                name: Un.ChromeOS
            })
        }, {
            test: [/PlayStation 4/],
            describe(t) {
                const e = Xn.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, t);
                return {
                    name: Un.PlayStation4,
                    version: e
                }
            }
        }],
        Kn = [{
            test: [/googlebot/i],
            describe: () => ({
                type: "bot",
                vendor: "Google"
            })
        }, {
            test: [/huawei/i],
            describe(t) {
                const e = Xn.getFirstMatch(/(can-l01)/i, t) && "Nova",
                    i = {
                        type: jn.mobile,
                        vendor: "Huawei"
                    };
                return e && (i.model = e), i
            }
        }, {
            test: [/nexus\s*(?:7|8|9|10).*/i],
            describe: () => ({
                type: jn.tablet,
                vendor: "Nexus"
            })
        }, {
            test: [/ipad/i],
            describe: () => ({
                type: jn.tablet,
                vendor: "Apple",
                model: "iPad"
            })
        }, {
            test: [/Macintosh(.*?) FxiOS(.*?)\//],
            describe: () => ({
                type: jn.tablet,
                vendor: "Apple",
                model: "iPad"
            })
        }, {
            test: [/kftt build/i],
            describe: () => ({
                type: jn.tablet,
                vendor: "Amazon",
                model: "Kindle Fire HD 7"
            })
        }, {
            test: [/silk/i],
            describe: () => ({
                type: jn.tablet,
                vendor: "Amazon"
            })
        }, {
            test: [/tablet(?! pc)/i],
            describe: () => ({
                type: jn.tablet
            })
        }, {
            test(t) {
                const e = t.test(/ipod|iphone/i),
                    i = t.test(/like (ipod|iphone)/i);
                return e && !i
            },
            describe(t) {
                const e = Xn.getFirstMatch(/(ipod|iphone)/i, t);
                return {
                    type: jn.mobile,
                    vendor: "Apple",
                    model: e
                }
            }
        }, {
            test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
            describe: () => ({
                type: jn.mobile,
                vendor: "Nexus"
            })
        }, {
            test: [/[^-]mobi/i],
            describe: () => ({
                type: jn.mobile
            })
        }, {
            test: t => "blackberry" === t.getBrowserName(!0),
            describe: () => ({
                type: jn.mobile,
                vendor: "BlackBerry"
            })
        }, {
            test: t => "bada" === t.getBrowserName(!0),
            describe: () => ({
                type: jn.mobile
            })
        }, {
            test: t => "windows phone" === t.getBrowserName(),
            describe: () => ({
                type: jn.mobile,
                vendor: "Microsoft"
            })
        }, {
            test(t) {
                const e = Number(String(t.getOSVersion()).split(".")[0]);
                return "android" === t.getOSName(!0) && e >= 3
            },
            describe: () => ({
                type: jn.tablet
            })
        }, {
            test: t => "android" === t.getOSName(!0),
            describe: () => ({
                type: jn.mobile
            })
        }, {
            test: t => "macos" === t.getOSName(!0),
            describe: () => ({
                type: jn.desktop,
                vendor: "Apple"
            })
        }, {
            test: t => "windows" === t.getOSName(!0),
            describe: () => ({
                type: jn.desktop
            })
        }, {
            test: t => "linux" === t.getOSName(!0),
            describe: () => ({
                type: jn.desktop
            })
        }, {
            test: t => "playstation 4" === t.getOSName(!0),
            describe: () => ({
                type: jn.tv
            })
        }, {
            test: t => "roku" === t.getOSName(!0),
            describe: () => ({
                type: jn.tv
            })
        }],
        Jn = [{
            test: t => "microsoft edge" === t.getBrowserName(!0),
            describe(t) {
                if (/\sedg\//i.test(t)) return {
                    name: Yn.Blink
                };
                const e = Xn.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, t);
                return {
                    name: Yn.EdgeHTML,
                    version: e
                }
            }
        }, {
            test: [/trident/i],
            describe(t) {
                const e = {
                        name: Yn.Trident
                    },
                    i = Xn.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test: t => t.test(/presto/i),
            describe(t) {
                const e = {
                        name: Yn.Presto
                    },
                    i = Xn.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test(t) {
                const e = t.test(/gecko/i),
                    i = t.test(/like gecko/i);
                return e && !i
            },
            describe(t) {
                const e = {
                        name: Yn.Gecko
                    },
                    i = Xn.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }, {
            test: [/(apple)?webkit\/537\.36/i],
            describe: () => ({
                name: Yn.Blink
            })
        }, {
            test: [/(apple)?webkit/i],
            describe(t) {
                const e = {
                        name: Yn.WebKit
                    },
                    i = Xn.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, t);
                return i && (e.version = i), e
            }
        }];
    class $n {
        constructor(t, e = !1) {
            if (null == t || "" === t) throw new Error("UserAgent parameter can't be empty");
            this._ua = t, this.parsedResult = {}, !0 !== e && this.parse()
        }
        getUA() {
            return this._ua
        }
        test(t) {
            return t.test(this._ua)
        }
        parseBrowser() {
            this.parsedResult.browser = {};
            const t = Xn.find(Qn, (t => {
                if ("function" == typeof t.test) return t.test(this);
                if (t.test instanceof Array) return t.test.some((t => this.test(t)));
                throw new Error("Browser's test function is not valid")
            }));
            return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser
        }
        getBrowser() {
            return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
        }
        getBrowserName(t) {
            return t ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
        }
        getBrowserVersion() {
            return this.getBrowser().version
        }
        getOS() {
            return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
        }
        parseOS() {
            this.parsedResult.os = {};
            const t = Xn.find(Zn, (t => {
                if ("function" == typeof t.test) return t.test(this);
                if (t.test instanceof Array) return t.test.some((t => this.test(t)));
                throw new Error("Browser's test function is not valid")
            }));
            return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os
        }
        getOSName(t) {
            const {
                name: e
            } = this.getOS();
            return t ? String(e).toLowerCase() || "" : e || ""
        }
        getOSVersion() {
            return this.getOS().version
        }
        getPlatform() {
            return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
        }
        getPlatformType(t = !1) {
            const {
                type: e
            } = this.getPlatform();
            return t ? String(e).toLowerCase() || "" : e || ""
        }
        parsePlatform() {
            this.parsedResult.platform = {};
            const t = Xn.find(Kn, (t => {
                if ("function" == typeof t.test) return t.test(this);
                if (t.test instanceof Array) return t.test.some((t => this.test(t)));
                throw new Error("Browser's test function is not valid")
            }));
            return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform
        }
        getEngine() {
            return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
        }
        getEngineName(t) {
            return t ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
        }
        parseEngine() {
            this.parsedResult.engine = {};
            const t = Xn.find(Jn, (t => {
                if ("function" == typeof t.test) return t.test(this);
                if (t.test instanceof Array) return t.test.some((t => this.test(t)));
                throw new Error("Browser's test function is not valid")
            }));
            return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine
        }
        parse() {
            return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this
        }
        getResult() {
            return Xn.assign({}, this.parsedResult)
        }
        satisfies(t) {
            const e = {};
            let i = 0;
            const n = {};
            let r = 0;
            if (Object.keys(t).forEach((s => {
                    const o = t[s];
                    "string" == typeof o ? (n[s] = o, r += 1) : "object" == typeof o && (e[s] = o, i += 1)
                })), i > 0) {
                const t = Object.keys(e),
                    i = Xn.find(t, (t => this.isOS(t)));
                if (i) {
                    const t = this.satisfies(e[i]);
                    if (void 0 !== t) return t
                }
                const n = Xn.find(t, (t => this.isPlatform(t)));
                if (n) {
                    const t = this.satisfies(e[n]);
                    if (void 0 !== t) return t
                }
            }
            if (r > 0) {
                const t = Object.keys(n),
                    e = Xn.find(t, (t => this.isBrowser(t, !0)));
                if (void 0 !== e) return this.compareVersion(n[e])
            }
        }
        isBrowser(t, e = !1) {
            const i = this.getBrowserName().toLowerCase();
            let n = t.toLowerCase();
            const r = Xn.getBrowserTypeByAlias(n);
            return e && r && (n = r.toLowerCase()), n === i
        }
        compareVersion(t) {
            let e = [0],
                i = t,
                n = !1;
            const r = this.getBrowserVersion();
            if ("string" == typeof r) return ">" === t[0] || "<" === t[0] ? (i = t.substr(1), "=" === t[1] ? (n = !0, i = t.substr(2)) : e = [], ">" === t[0] ? e.push(1) : e.push(-1)) : "=" === t[0] ? i = t.substr(1) : "~" === t[0] && (n = !0, i = t.substr(1)), e.indexOf(Xn.compareVersions(r, i, n)) > -1
        }
        isOS(t) {
            return this.getOSName(!0) === String(t).toLowerCase()
        }
        isPlatform(t) {
            return this.getPlatformType(!0) === String(t).toLowerCase()
        }
        isEngine(t) {
            return this.getEngineName(!0) === String(t).toLowerCase()
        }
        is(t, e = !1) {
            return this.isBrowser(t, e) || this.isOS(t) || this.isPlatform(t)
        }
        some(t = []) {
            return t.some((t => this.is(t)))
        }
    }
    /*!
     * Bowser - a browser detector
     * https://github.com/lancedikson/bowser
     * MIT License | (c) Dustin Diaz 2012-2015
     * MIT License | (c) Denis Demchenko 2015-2019
     */
    var tr = new class {
        constructor() {
            window.browser = class {
                static getParser(t, e = !1) {
                    if ("string" != typeof t) throw new Error("UserAgent should be a string");
                    return new $n(t, e)
                }
                static parse(t) {
                    return new $n(t).getResult()
                }
                static get BROWSER_MAP() {
                    return Hn
                }
                static get ENGINE_MAP() {
                    return Yn
                }
                static get OS_MAP() {
                    return Un
                }
                static get PLATFORMS_MAP() {
                    return jn
                }
            }.getParser(window.navigator.userAgent), window.browser.is("mobile") || window.browser.is("tablet") || window.innerWidth <= 987 ? (this.isLight = !0, document.documentElement.classList.add("is-mobile")) : this.isLight = !1, window.mouse = {
                x: 0,
                y: 0,
                prevX: 0,
                prevY: 0,
                smoothX: 0,
                smoothY: 0,
                speed: 0,
                speedX: 0,
                speedY: 0
            }, this.scroll = {
                top: 0,
                max: 1,
                progress: 0,
                smooth: 0
            }, this.isVisible = !1, this.isScrolling = !1, this.timeouts = {
                scrollEnd: ""
            }, this.getMouseMovement()
        }
        init() {
            window.scroll(0, 0), this.content = document.querySelector(".site-content"), this.emitterLinks = document.querySelectorAll("[data-emitter]"), this.loader = document.querySelector(".site-loader"), this.works = document.querySelectorAll(".site-works .work"), this.loader.classList.add("is-animated"), this.bindEvents(), this.initScrollTimeline(), t.init()
        }
        bindEvents() {
            window.addEventListener("mousemove", this.mouseHandler.bind(this), {
                passive: !0
            }), window.addEventListener("scroll", this.scrollHandler.bind(this), {
                passive: !0
            }), window.addEventListener("resize", this.resizeThrottle.bind(this), {
                passive: !0
            }), document.querySelectorAll("[data-emitter]").forEach((t => {
                t.addEventListener("click", this.toggleEmitter.bind(this))
            })), document.querySelectorAll("[data-hover]").forEach((t => {
                t.addEventListener("mouseenter", this.hoverHandler.bind(this))
            }))
        }
        mouseHandler(t) {
            window.mouse.x = t.pageX, window.mouse.y = t.pageY - window.pageYOffset
        }
        getMouseMovement() {
            const t = {
                x: window.mouse.prevX - window.mouse.x,
                y: window.mouse.prevY - window.mouse.y
            };
            t.value = Math.hypot(t.x, t.y), window.mouse.speedX += .5 * (t.x - window.mouse.speedX), window.mouse.speedY += .5 * (t.y - window.mouse.speedY), window.mouse.speed += .5 * (t.value - window.mouse.speed), window.mouse.speed < .001 && (window.mouse.speed = 0), window.mouse.prevX = window.mouse.x, window.mouse.prevY = window.mouse.y, setTimeout(this.getMouseMovement.bind(this), 20)
        }
        resizeThrottle(t) {
            clearTimeout(this._resizeThrottleTimeout), this._resizeThrottleTimeout = setTimeout(this.resizeHandler.bind(this), 200)
        }
        resizeHandler() {
            this.scroll.max = document.body.offsetHeight - window.innerHeight, this.scroll.top = window.scrollY, this.scroll.progress = this.scroll.top / this.scroll.max, this.works.forEach((t => {
                if (!t.classList.contains("is-visible")) {
                    const e = t.querySelector(".work__card"),
                        i = t.querySelector("path"),
                        n = "M 0 0 h " + e.offsetWidth + " v " + e.offsetHeight + " H 0 V 0 z ";
                    i.setAttribute("d", n)
                }
            })), t.resizeHandler(), this.isLight || o.resizeHandler()
        }
        scrollHandler(t) {
            this.scroll.top = window.scrollY, this.scroll.progress = this.scroll.top / this.scroll.max, this.isScrolling || this.scrollStart(), clearTimeout(this.timeouts.scrollEnd), this.timeouts.scrollEnd = setTimeout(this.scrollEnd.bind(this), 200), this.scroll.top > .75 * window.innerHeight ? document.documentElement.classList.add("is-scrolled") : document.documentElement.classList.remove("is-scrolled")
        }
        scrollStart() {
            this.isScrolling = !0, document.documentElement.classList.add("is-scrolling")
        }
        scrollEnd() {
            this.isScrolling = !1, document.documentElement.classList.remove("is-scrolling")
        }
        hoverHandler(t) {
            const e = t.currentTarget;
            console.log(e);
            const i = e.getBoundingClientRect();
            e.style.setProperty("--anchor-x", i.left), e.style.setProperty("--anchor-y", i.top)
        }
        initScrollTimeline() {
            const t = this,
                e = Wn.timeline({
                    paused: !0
                });
            e.fromTo(this.content, {
                "--rotate": -1
            }, {
                "--rotate": 1,
                duration: .5,
                ease: "power1.inOut"
            }, 0), this.works.forEach(((i, n) => {
                const r = i.querySelector(".work__card"),
                    s = i.querySelector(".work__mask"),
                    o = s.querySelector("path"),
                    a = [{
                        x: .5,
                        y: .5
                    }, {
                        x: .5,
                        y: .5
                    }, {
                        x: .5,
                        y: .5
                    }, {
                        x: .5,
                        y: .5
                    }],
                    l = Wn.timeline(),
                    c = () => {
                        const e = i.querySelector("video");
                        e.currentTime = 0, Wn.to(a, {
                            x: t => 1 === t || 2 === t,
                            y: t => 2 === t || 3 === t,
                            duration: () => .5 + .5 * Math.random(),
                            ease: "expo.inOut",
                            onUpdate: t.drawWorkClip,
                            onUpdateParams: [s, o, a],
                            onComplete: () => {
                                e.play()
                            }
                        })
                    },
                    u = () => {
                        const e = i.querySelector("video");
                        Wn.to(a, {
                            x: .5,
                            y: .5,
                            duration: () => .5 + .5 * Math.random(),
                            ease: "expo.inOut",
                            onUpdate: t.drawWorkClip,
                            onUpdateParams: [s, o, a],
                            onComplete: () => {
                                e.pause()
                            }
                        })
                    };
                l.call((() => {
                    i.classList.toggle("is-visible"), i.classList.contains("is-visible") ? c() : u()
                }), null, .2), l.fromTo(r, {
                    "--rotate": -1
                }, {
                    "--rotate": 1,
                    duration: .5,
                    ease: "power1.inOut"
                }, 0), l.call((() => {
                    i.classList.toggle("is-visible"), i.classList.contains("is-visible") ? c() : u()
                }), null, .3), e.add(l, .1 * (n + 1))
            })), e.call((() => {
                this.content.classList.remove("is-hidden")
            }), null, .26), e.call((() => {
                this.content.classList.add("is-hidden")
            }), null, .26), this.isLight || (e.call((() => {
                o.hideRock()
            }), null, .95), e.call((() => {
                o.showRock()
            }), null, .95)), this.scrollTl = e
        }
        drawWorkClip(t, e, i) {
            const n = t.clientWidth,
                r = t.clientHeight;
            let s = "M 0 0 h " + n + " v " + r + " H 0 V 0 z ";
            s += "M " + i[0].x * n + " " + i[0].y * r + " L " + i[1].x * n + " " + i[1].y * r + " L " + i[2].x * n + " " + i[2].y * r + " L " + i[3].x * n + " " + i[3].y * r + " z ", e.setAttribute("d", s)
        }
        toggleEmitter(e) {
            const i = e.currentTarget,
                n = i.dataset.emitter;
            this.emitterLinks.forEach((t => {
                t !== i && t.classList.remove("is-active")
            })), i.classList.toggle("is-active"), i.classList.contains("is-active") ? t.canEmit = n : t.canEmit = !1, e.preventDefault()
        }
        planIntro() {
            const t = document.querySelector(".site-loader path");
            let e = 0;
            t.addEventListener("animationiteration", (() => {
                e++, e >= 1 && (this.loader.classList.remove("is-animated"), this.intro())
            }))
        }
        intro() {
            this.resizeHandler(), this.isVisible = !0, document.body.classList.add("is-visible"), this.isLight || (o.init(), o.intro()), requestAnimationFrame(this.tick.bind(this))
        }
        tick(e) {
            if (!this.isLight) {
                this.scroll.smooth += .1 * (this.scroll.progress - this.scroll.smooth), this.scrollTl.progress(this.scroll.smooth), window.mouse.smoothX += .1 * (window.mouse.x - window.mouse.smoothX), window.mouse.smoothY += .1 * (window.mouse.y - window.mouse.smoothY);
                const t = {
                    x: window.mouse.x - window.mouse.smoothX,
                    y: window.mouse.y - window.mouse.smoothY
                };
                document.body.style.setProperty("--mouse-x", window.mouse.smoothX), document.body.style.setProperty("--mouse-y", window.mouse.smoothY), document.body.style.setProperty("--mouse-diff-x", t.x), document.body.style.setProperty("--mouse-diff-y", t.y), document.body.style.setProperty("--mouse-diff-x-cap", Math.min(Math.max(t.x, -30), 30)), document.body.style.setProperty("--mouse-diff-y-cap", Math.min(Math.max(t.y, -30), 30))
            }
            t.tick(e), requestAnimationFrame(this.tick.bind(this))
        }
    };
    document.addEventListener("readystatechange", (t => {
        "interactive" === document.readyState ? tr.init() : "complete" === document.readyState && tr.planIntro()
    }))
}();