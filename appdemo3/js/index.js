var ua = navigator.userAgent.toLowerCase();

function R(x) {
    return x[parseInt(Math.random() * x.length)];
}
var BJ_REPORT = function(c) {
    if (c.BJ_REPORT) {
        return c.BJ_REPORT
    }
    var h = [],
        a = {
            id: 0,
            uin: 0,
            url: "",
            combo: 1,
            ext: {},
            level: 4,
            ignore: [],
            random: 1,
            delay: 1000,
            submit: null
        },
        f = function(p, q) {
            return Object.prototype.toString.call(p) === "[object " + (q || "Object") + "]"
        },
        d = function(p) {
            var q = typeof p;
            return q === "object" && !!p
        },
        k = c.onerror;
    c.onerror = function(r, s, t, u, q) {
        var p = r;
        q && q.stack && (p = l(q));
        f(p, "Event") && (p += p.type ? "--" + p.type + "--" + (p.target ? p.target.tagName + "::" + p.target.src : "") : "");
        b.push({
            msg: p,
            target: s,
            rowNum: t,
            colNum: u
        });
        j();
        k && k.apply(c, arguments)
    };
    var m = function(p) {
            try {
                if (p.stack) {
                    var q = p.stack.match("http://[^/\n]+");
                    q = q ? q[0] : "";
                    var r = q.match(":([0-9]+):([0-9]+)");
                    !r && (r = [0, 0, 0]);
                    var s = l(p);
                    return {
                        msg: s,
                        rowNum: r[1],
                        colNum: r[2],
                        target: q.replace(r[0], "")
                    }
                } else {
                    return p
                }
            } catch (t) {
                return p
            }
        },
        l = function(q) {
            var p = q.stack.replace(/\n/gi, "").split(/\bat\b/).slice(0, 5).join("@").replace(/\?[^:]+/gi, ""),
                r = q.toString();
            p.indexOf(r) < 0 && (p = r + "@" + p);
            return p
        },
        n = function(q, v) {
            var s = [],
                t = [],
                u = [];
            if (d(q)) {
                q.level = q.level || a.level;
                for (var r in q) {
                    var p = q[r] || "";
                    if (p) {
                        if (d(p)) {
                            try {
                                p = JSON.stringify(p)
                            } catch (w) {
                                p = "[BJ_REPORT detect value stringify error] " + w.toString()
                            }
                        }
                        u.push(r + ":" + p);
                        s.push(r + "=" + encodeURIComponent(p));
                        t.push(r + "[" + v + "]=" + encodeURIComponent(p))
                    }
                }
            }
            return [t.join("&"), u.join(","), s.join("&")]
        },
        o = [],
        i = function(p) {
            if (a.submit) {
                a.submit(p)
            } else {
                var q = new Image();
                o.push(q);
                q.src = p
            }
        },
        e = [],
        g = 0,
        j = function(w) {
            if (!a.report) {
                return
            }
            while (h.length) {
                var t = false,
                    r = h.shift(),
                    p = n(r, e.length);
                if (f(a.ignore, "Array")) {
                    for (var s = 0, x = a.ignore.length; s < x; s++) {
                        var q = a.ignore[s];
                        if (f(q, "RegExp") && q.test(p[1]) || f(q, "Function") && q(r, p[1])) {
                            t = true;
                            break
                        }
                    }
                }!t && (a.combo ? e.push(p[0]) : i(a.report + p[2] + "&_t=" + +new Date()), a.onReport && a.onReport(a.id, r))
            }
            var u = e.length;
            if (u) {
                var v = function() {
                    clearTimeout(g);
                    i(a.report + e.join("&") + "&count=" + u + "&_t=" + +new Date());
                    g = 0;
                    e = []
                };
                w ? v() : !g && (g = setTimeout(v, a.delay))
            }
        },
        b = {
            push: function(p) {
                if (Math.random() >= a.random) {
                    return b
                }
                h.push(d(p) ? m(p) : {
                    msg: p
                });
                j();
                return b
            },
            report: function(p) {
                p && b.push(p);
                j(true);
                return b
            },
            info: function(p) {
                if (!p) {
                    return b
                }
                d(p) ? p.level = 2 : p = {
                    msg: p,
                    level: 2
                };
                b.push(p);
                return b
            },
            debug: function(p) {
                if (!p) {
                    return b
                }
                d(p) ? p.level = 1 : p = {
                    msg: p,
                    level: 1
                };
                b.push(p);
                return b
            },
            init: function(p) {
                if (d(p)) {
                    for (var q in p) {
                        a[q] = p[q]
                    }
                }
                var r = parseInt(a.id, 10);
                r && (a.report = (a.url || "http://badjs2.qq.com/badjs") + "?id=" + r + "&uin=" + parseInt(a.uin || (document.cookie.match(/\buin=\D+(\d+)/) || [])[1], 10) + "&from=" + encodeURIComponent(location.href) + "&ext=" + JSON.stringify(a.ext) + "&");
                return b
            },
            __onerror__: c.onerror,
            reportWithOutInit: function(p) {
                var q = p.url,
                    r = {
                        id: p.id,
                        uin: parseInt((document.cookie.match(/\buin=\D+(\d+)/) || [])[1], 10),
                        from: location.href,
                        ext: {},
                        "msg[0]": p.msg,
                        "target[0]": "",
                        "rowNum[0]": 1,
                        "colNum[0]": 1,
                        "level[0]": 4,
                        count: 1,
                        _t: Date.now()
                    },
                    s = [];
                for (var t in r) {
                    s.push(t + "=" + encodeURIComponent(r[t]))
                }
                q += "?" + s.join("&");
                i(q)
            }
        };
    return b
}(window);
typeof exports !== "undefined" && (typeof module !== "undefined" && module.exports && (exports = module.exports = BJ_REPORT), exports.BJ_REPORT = BJ_REPORT);
BJ_REPORT.init({
    id: 15,
    combo: 1,
    delay: 1000,
    url: "http://badjs.3g.qq.com/badjs",
    ignore: [/WeixinJSBridge/i, /platform/i, /Cannot read property '0'/i],
    random: location.href.indexOf("debug") > 0 ? 1 : 0.001,
    repeat: 5,
    onReport: function(a, b) {},
    ext: {}
});
window.gTimeStamps = [Date.now()];