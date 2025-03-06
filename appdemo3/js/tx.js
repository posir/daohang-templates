{ /* <script> */ }
try {
    var appExtObj = {
        "appId": 0,
        "pkgName": "",
        "iosUrl": "",
        "sigMd5": "",
        "channel": 0,
        "templateId": 0,
        "buttonId": 0,
        "bgImageSmall": "",
        "bgImageBig": "",
        "documents": "",
        "signatures": [],
        "extParams": "",
        "appLinkInfo": "",
        "matchPkg": ""
    };
    window.appLinkInfo = appExtObj.appLinkInfo || "";
    window.templateId = appExtObj.templateId;
} catch (e) {
    window.appLinkInfo = "";
    window.templateId = 0;
}
// </script>


// <
// script type = "text/javascript" >
var Zepto = function() {
    function an(b) {
        return b == null ? String(b) : aD[aZ.call(b)] || "object"
    }

    function ai(b) {
        return an(b) == "function"
    }

    function aw(b) {
        return b != null && b == b.window
    }

    function ar(b) {
        return b != null && b.nodeType == b.DOCUMENT_NODE
    }

    function am(b) {
        return an(b) == "object"
    }

    function ao(b) {
        return am(b) && !aw(b) && Object.getPrototypeOf(b) == Object.prototype
    }

    function ak(b) {
        return b instanceof Array
    }

    function ax(b) {
        return typeof b.length == "number"
    }

    function aO(b) {
        return aq.call(b, function(c) {
            return c != null
        })
    }

    function aP(b) {
        return b.length > 0 ? aa.fn.concat.apply([], b) : b
    }

    function ap(b) {
        return b.replace(/::/g, "index-2.html").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }

    function aE(b) {
        return b in aA ? aA[b] : aA[b] = new RegExp("(^|\\s)" + b + "(\\s|$)")
    }

    function aF(d, c) {
        return typeof c == "number" && !aR[ap(d)] ? c + "px" : c
    }

    function aQ(f) {
        var d, g;
        return az[f] || (d = ae.createElement(f), ae.body.appendChild(d), g = getComputedStyle(d, "").getPropertyValue("display"), d.parentNode.removeChild(d), g == "none" && (g = "block"), az[f] = g), az[f]
    }

    function aG(b) {
        return "children" in b ? aj.call(b.children) : aa.map(b.childNodes, function(c) {
            if (c.nodeType == 1) {
                return c
            }
        })
    }

    function aH(b, a, f) {
        for (ac in a) {
            f && (ao(a[ac]) || ak(a[ac])) ? (ao(a[ac]) && !ao(b[ac]) && (b[ac] = {}), ak(a[ac]) && !ak(b[ac]) && (b[ac] = []), aH(b[ac], a[ac], f)) : a[ac] !== ad && (b[ac] = a[ac])
        }
    }

    function at(c, d) {
        return d == null ? aa(c) : aa(c).filter(d)
    }

    function ag(g, f, h, i) {
        return ai(f) ? f.call(g, h, i) : f
    }

    function ay(d, f, g) {
        g == null ? d.removeAttribute(f) : d.setAttribute(f, g)
    }

    function al(g, f) {
        var a = g.className,
            h = a && a.baseVal !== ad;
        if (f === ad) {
            return h ? a.baseVal : a
        }
        h ? a.baseVal = f : g.className = f
    }

    function aI(c) {
        var f;
        try {
            return c ? c == "true" || (c == "false" ? !1 : c == "null" ? null : !/^0/.test(c) && !isNaN(f = Number(c)) ? f : /^[\[\{]/.test(c) ? aa.parseJSON(c) : c) : c
        } catch (g) {
            return c
        }
    }

    function aJ(d, f) {
        f(d);
        for (var g in d.childNodes) {
            aJ(d.childNodes[g], f)
        }
    }
    var ad, ac, aa, ah, af = [],
        aj = af.slice,
        aq = af.filter,
        ae = window.document,
        az = {},
        aA = {},
        aR = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        },
        aB = /^\s*<(\w+|!)[^>]*>/,
        aS = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        aT = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        aK = /^(?:body|html)$/i,
        aU = /([A-Z])/g,
        aV = ["val", "css", "html", "text", "data", "width", "height", "offset"],
        aW = ["after", "prepend", "before", "append"],
        aC = ae.createElement("table"),
        aL = ae.createElement("tr"),
        aM = {
            tr: ae.createElement("tbody"),
            tbody: aC,
            thead: aC,
            tfoot: aC,
            td: aL,
            th: aL,
            "*": ae.createElement("div")
        },
        aX = /complete|loaded|interactive/,
        a1 = /^\.([\w-]+)$/,
        a2 = /^#([\w-]*)$/,
        aY = /^[\w-]*$/,
        aD = {},
        aZ = aD.toString,
        ab = {},
        au, av, aN = ae.createElement("div"),
        a0 = {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        };
    return ab.matches = function(g, h) {
        if (!h || !g || g.nodeType !== 1) {
            return !1
        }
        var j = g.webkitMatchesSelector || g.mozMatchesSelector || g.oMatchesSelector || g.matchesSelector;
        if (j) {
            return j.call(g, h)
        }
        var k, i = g.parentNode,
            l = !i;
        return l && (i = aN).appendChild(g), k = ~ab.qsa(i, h).indexOf(g), l && aN.removeChild(g), k
    }, au = function(b) {
        return b.replace(/-+(.)?/g, function(d, c) {
            return c ? c.toUpperCase() : ""
        })
    }, av = function(b) {
        return aq.call(b, function(a, d) {
            return b.indexOf(a) == d
        })
    }, ab.fragment = function(a, c, l) {
        var f, k, h;
        return aS.test(a) && (f = aa(ae.createElement(RegExp["$1"]))), f || (a.replace && (a = a.replace(aT, "<$1></$2>")), c === ad && (c = aB.test(a) && RegExp["$1"]), c in aM || (c = "*"), h = aM[c], h.innerHTML = "" + a, f = aa.each(aj.call(h.childNodes), function() {
            h.removeChild(this)
        })), ao(l) && (k = aa(f), aa.each(l, function(d, g) {
            aV.indexOf(d) > -1 ? k[d](g) : k.attr(d, g)
        })), f
    }, ab.Z = function(c, d) {
        return c = c || [], c.__proto__ = aa.fn, c.selector = d || "", c
    }, ab.isZ = function(b) {
        return b instanceof ab.Z
    }, ab.init = function(a, f) {
        var c;
        if (!a) {
            return ab.Z()
        }
        if (typeof a == "string") {
            a = a.trim();
            if (a[0] == "<" && aB.test(a)) {
                c = ab.fragment(a, RegExp["$1"], f), a = null
            } else {
                if (f !== ad) {
                    return aa(f).find(a)
                }
                c = ab.qsa(ae, a)
            }
        } else {
            if (ai(a)) {
                return aa(ae).ready(a)
            }
            if (ab.isZ(a)) {
                return a
            }
            if (ak(a)) {
                c = aO(a)
            } else if (am(a)) {
                c = [a], a = null
            } else if (aB.test(a)) {
                c = ab.fragment(a.trim(), RegExp["$1"], f), a = null
            } else {
                if (f !== ad) {
                    return aa(f).find(a)
                }
                c = ab.qsa(ae, a)
            }
        }
        return ab.Z(c, a)
    }, aa = function(c, d) {
        return ab.init(c, d)
    }, aa.extend = function(d) {
        var f, g = aj.call(arguments, 1);
        return typeof d == "boolean" && (f = d, d = g.shift()), g.forEach(function(a) {
            aH(d, a, f)
        }), d
    }, ab.qsa = function(f, i) {
        var l, j = i[0] == "#",
            m = !j && i[0] == ".",
            k = j || m ? i.slice(1) : i,
            n = aY.test(k);
        return ar(f) && n && j ? (l = f.getElementById(k)) ? [l] : [] : f.nodeType !== 1 && f.nodeType !== 9 ? [] : aj.call(n && !j ? m ? f.getElementsByClassName(k) : f.getElementsByTagName(i) : f.querySelectorAll(i))
    }, aa.contains = function(c, d) {
        return c !== d && c.contains(d)
    }, aa.type = an, aa.isFunction = ai, aa.isWindow = aw, aa.isArray = ak, aa.isPlainObject = ao, aa.isEmptyObject = function(c) {
        var d;
        for (d in c) {
            return !1
        }
        return !0
    }, aa.inArray = function(d, f, g) {
        return af.indexOf.call(f, d, g)
    }, aa.camelCase = au, aa.trim = function(b) {
        return b == null ? "" : String.prototype.trim.call(b)
    }, aa.uuid = 0, aa.support = {}, aa.expr = {}, aa.map = function(h, l) {
        var g, j = [],
            i, k;
        if (ax(h)) {
            for (i = 0; i < h.length; i++) {
                g = l(h[i], i), g != null && j.push(g)
            }
        } else {
            for (k in h) {
                g = l(h[k], k), g != null && j.push(g)
            }
        }
        return aP(j)
    }, aa.each = function(f, i) {
        var g, h;
        if (ax(f)) {
            for (g = 0; g < f.length; g++) {
                if (i.call(f[g], g, f[g]) === !1) {
                    return f
                }
            }
        } else {
            for (h in f) {
                if (i.call(f[h], h, f[h]) === !1) {
                    return f
                }
            }
        }
        return f
    }, aa.grep = function(c, d) {
        return aq.call(c, d)
    }, window.JSON && (aa.parseJSON = JSON.parse), aa.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(d, c) {
        aD["[object " + c + "]"] = c.toLowerCase()
    }), aa.fn = {
        forEach: af.forEach,
        reduce: af.reduce,
        push: af.push,
        sort: af.sort,
        indexOf: af.indexOf,
        concat: af.concat,
        map: function(b) {
            return aa(aa.map(this, function(a, d) {
                return b.call(a, d, a)
            }))
        },
        slice: function() {
            return aa(aj.apply(this, arguments))
        },
        ready: function(b) {
            return aX.test(ae.readyState) && ae.body ? b(aa) : ae.addEventListener("DOMContentLoaded", function() {
                b(aa)
            }, !1), this
        },
        get: function(a) {
            return a === ad ? aj.call(this) : this[a >= 0 ? a : a + this.length]
        },
        toArray: function() {
            return this.get()
        },
        size: function() {
            return this.length
        },
        remove: function() {
            return this.each(function() {
                this.parentNode != null && this.parentNode.removeChild(this)
            })
        },
        each: function(b) {
            return af.every.call(this, function(a, d) {
                return b.call(a, d, a) !== !1
            }), this
        },
        filter: function(b) {
            return ai(b) ? this.not(this.not(b)) : aa(aq.call(this, function(a) {
                return ab.matches(a, b)
            }))
        },
        add: function(c, d) {
            return aa(av(this.concat(aa(c, d))))
        },
        is: function(b) {
            return this.length > 0 && ab.matches(this[0], b)
        },
        not: function(a) {
            var c = [];
            if (ai(a) && a.call !== ad) {
                this.each(function(b) {
                    a.call(this, b) || c.push(this)
                })
            } else {
                var f = typeof a == "string" ? this.filter(a) : ax(a) && ai(a.item) ? aj.call(a) : aa(a);
                this.forEach(function(b) {
                    f.indexOf(b) < 0 && c.push(b)
                })
            }
            return aa(c)
        },
        has: function(b) {
            return this.filter(function() {
                return am(b) ? aa.contains(this, b) : aa(this).find(b).size()
            })
        },
        eq: function(b) {
            return b === -1 ? this.slice(b) : this.slice(b, +b + 1)
        },
        first: function() {
            var b = this[0];
            return b && !am(b) ? b : aa(b)
        },
        last: function() {
            var b = this[this.length - 1];
            return b && !am(b) ? b : aa(b)
        },
        find: function(c) {
            var f, g = this;
            return typeof c == "object" ? f = aa(c).filter(function() {
                var b = this;
                return af.some.call(g, function(a) {
                    return aa.contains(a, b)
                })
            }) : this.length == 1 ? f = aa(ab.qsa(this[0], c)) : f = this.map(function() {
                return ab.qsa(this, c)
            }), f
        },
        closest: function(f, h) {
            var c = this[0],
                g = !1;
            typeof f == "object" && (g = aa(f));
            while (c && !(g ? g.indexOf(c) >= 0 : ab.matches(c, f))) {
                c = c !== h && !ar(c) && c.parentNode
            }
            return aa(c)
        },
        parents: function(g) {
            var c = [],
                f = this;
            while (f.length > 0) {
                f = aa.map(f, function(b) {
                    if ((b = b.parentNode) && !ar(b) && c.indexOf(b) < 0) {
                        return c.push(b), b
                    }
                })
            }
            return at(c, g)
        },
        parent: function(b) {
            return at(av(this.pluck("parentNode")), b)
        },
        children: function(b) {
            return at(this.map(function() {
                return aG(this)
            }), b)
        },
        contents: function() {
            return this.map(function() {
                return aj.call(this.childNodes)
            })
        },
        siblings: function(b) {
            return at(this.map(function(d, c) {
                return aq.call(aG(c.parentNode), function(f) {
                    return f !== c
                })
            }), b)
        },
        empty: function() {
            return this.each(function() {
                this.innerHTML = ""
            })
        },
        pluck: function(b) {
            return aa.map(this, function(a) {
                return a[b]
            })
        },
        show: function() {
            return this.each(function() {
                this.style.display == "none" && (this.style.display = ""), getComputedStyle(this, "").getPropertyValue("display") == "none" && (this.style.display = aQ(this.nodeName))
            })
        },
        replaceWith: function(b) {
            return this.before(b).remove()
        },
        wrap: function(c) {
            var g = ai(c);
            if (this[0] && !g) {
                var f = aa(c).get(0),
                    h = f.parentNode || this.length > 1
            }
            return this.each(function(a) {
                aa(this).wrapAll(g ? c.call(this, a) : h ? f.cloneNode(!0) : f)
            })
        },
        wrapAll: function(c) {
            if (this[0]) {
                aa(this[0]).before(c = aa(c));
                var d;
                while ((d = c.children()).length) {
                    c = d.first()
                }
                aa(c).append(this)
            }
            return this
        },
        wrapInner: function(c) {
            var d = ai(c);
            return this.each(function(i) {
                var a = aa(this),
                    b = a.contents(),
                    h = d ? c.call(this, i) : c;
                b.length ? b.wrapAll(h) : a.append(h)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                aa(this).replaceWith(aa(this).children())
            }), this
        },
        clone: function() {
            return this.map(function() {
                return this.cloneNode(!0)
            })
        },
        hide: function() {
            return this.css("display", "none")
        },
        toggle: function(a) {
            return this.each(function() {
                var b = aa(this);
                (a === ad ? b.css("display") == "none" : a) ? b.show(): b.hide()
            })
        },
        prev: function(b) {
            return aa(this.pluck("previousElementSibling")).filter(b || "*")
        },
        next: function(b) {
            return aa(this.pluck("nextElementSibling")).filter(b || "*")
        },
        html: function(b) {
            return arguments.length === 0 ? this.length > 0 ? this[0].innerHTML : null : this.each(function(a) {
                var c = this.innerHTML;
                aa(this).empty().append(ag(this, b, a, c))
            })
        },
        text: function(a) {
            return arguments.length === 0 ? this.length > 0 ? this[0].textContent : null : this.each(function() {
                this.textContent = a === ad ? "" : "" + a
            })
        },
        attr: function(a, b) {
            var f;
            return typeof a == "string" && b === ad ? this.length == 0 || this[0].nodeType !== 1 ? ad : a == "value" && this[0].nodeName == "INPUT" ? this.val() : !(f = this[0].getAttribute(a)) && a in this[0] ? this[0][a] : f : this.each(function(c) {
                if (this.nodeType !== 1) {
                    return
                }
                if (am(a)) {
                    for (ac in a) {
                        ay(this, ac, a[ac])
                    }
                } else {
                    ay(this, a, ag(this, b, c, this.getAttribute(a)))
                }
            })
        },
        removeAttr: function(b) {
            return this.each(function() {
                this.nodeType === 1 && ay(this, b)
            })
        },
        prop: function(a, d) {
            return a = a0[a] || a, d === ad ? this[0] && this[0][a] : this.each(function(b) {
                this[a] = ag(this, d, b, this[a])
            })
        },
        data: function(f, g) {
            var a = this.attr("data-" + f.replace(aU, "-$1").toLowerCase(), g);
            return a !== null ? aI(a) : ad
        },
        val: function(b) {
            return arguments.length === 0 ? this[0] && (this[0].multiple ? aa(this[0]).find("option").filter(function() {
                return this.selected
            }).pluck("value") : this[0].value) : this.each(function(a) {
                this.value = ag(this, b, a, this.value)
            })
        },
        offset: function(d) {
            if (d) {
                return this.each(function(k) {
                    var a = aa(this),
                        h = ag(this, d, k, a.offset()),
                        i = a.offsetParent().offset(),
                        j = {
                            top: h.top - i.top,
                            left: h.left - i.left
                        };
                    a.css("position") == "static" && (j.position = "relative"), a.css(j)
                })
            }
            if (this.length == 0) {
                return null
            }
            var c = this[0].getBoundingClientRect();
            return {
                left: c.left + window.pageXOffset,
                top: c.top + window.pageYOffset,
                width: Math.round(c.width),
                height: Math.round(c.height)
            }
        },
        css: function(b, i) {
            if (arguments.length < 2) {
                var c = this[0],
                    k = getComputedStyle(c, "");
                if (!c) {
                    return
                }
                if (typeof b == "string") {
                    return c.style[au(b)] || k.getPropertyValue(b)
                }
                if (ak(b)) {
                    var l = {};
                    return aa.each(ak(b) ? b : [b], function(f, d) {
                        l[d] = c.style[au(d)] || k.getPropertyValue(d)
                    }), l
                }
            }
            var j = "";
            if (an(b) == "string") {
                !i && i !== 0 ? this.each(function() {
                    this.style.removeProperty(ap(b))
                }) : j = ap(b) + ":" + aF(b, i)
            } else {
                for (ac in b) {
                    !b[ac] && b[ac] !== 0 ? this.each(function() {
                        this.style.removeProperty(ap(ac))
                    }) : j += ap(ac) + ":" + aF(ac, b[ac]) + ";"
                }
            }
            return this.each(function() {
                this.style.cssText += ";" + j
            })
        },
        index: function(b) {
            return b ? this.indexOf(aa(b)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function(b) {
            return b ? af.some.call(this, function(c) {
                return this.test(al(c))
            }, aE(b)) : !1
        },
        addClass: function(b) {
            return b ? this.each(function(c) {
                ah = [];
                var a = al(this),
                    d = ag(this, b, c, a);
                d.split(/\s+/g).forEach(function(f) {
                    aa(this).hasClass(f) || ah.push(f)
                }, this), ah.length && al(this, a + (a ? " " : "") + ah.join(" "))
            }) : this
        },
        removeClass: function(a) {
            return this.each(function(b) {
                if (a === ad) {
                    return al(this, "")
                }
                ah = al(this), ag(this, a, b, ah).split(/\s+/g).forEach(function(c) {
                    ah = ah.replace(aE(c), " ")
                }), al(this, ah.trim())
            })
        },
        toggleClass: function(a, c) {
            return a ? this.each(function(d) {
                var b = aa(this),
                    h = ag(this, a, d, al(this));
                h.split(/\s+/g).forEach(function(f) {
                    (c === ad ? !b.hasClass(f) : c) ? b.addClass(f): b.removeClass(f)
                })
            }) : this
        },
        scrollTop: function(a) {
            if (!this.length) {
                return
            }
            var d = "scrollTop" in this[0];
            return a === ad ? d ? this[0].scrollTop : this[0].pageYOffset : this.each(d ? function() {
                this.scrollTop = a
            } : function() {
                this.scrollTo(this.scrollX, a)
            })
        },
        scrollLeft: function(a) {
            if (!this.length) {
                return
            }
            var d = "scrollLeft" in this[0];
            return a === ad ? d ? this[0].scrollLeft : this[0].pageXOffset : this.each(d ? function() {
                this.scrollLeft = a
            } : function() {
                this.scrollTo(a, this.scrollY)
            })
        },
        position: function() {
            if (!this.length) {
                return
            }
            var h = this[0],
                c = this.offsetParent(),
                f = this.offset(),
                g = aK.test(c[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : c.offset();
            return f.top -= parseFloat(aa(h).css("margin-top")) || 0, f.left -= parseFloat(aa(h).css("margin-left")) || 0, g.top += parseFloat(aa(c[0]).css("border-top-width")) || 0, g.left += parseFloat(aa(c[0]).css("border-left-width")) || 0, {
                top: f.top - g.top,
                left: f.left - g.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var b = this.offsetParent || ae.body;
                while (b && !aK.test(b.nodeName) && aa(b).css("position") == "static") {
                    b = b.offsetParent
                }
                return b
            })
        }
    }, aa.fn.detach = aa.fn.remove, ["width", "height"].forEach(function(a) {
        var c = a.replace(/./, function(b) {
            return b[0].toUpperCase()
        });
        aa.fn[a] = function(d) {
            var h, b = this[0];
            return d === ad ? aw(b) ? b["inner" + c] : ar(b) ? b.documentElement["scroll" + c] : (h = this.offset()) && h[a] : this.each(function(f) {
                b = aa(this), b.css(a, ag(this, d, f, b[a]()))
            })
        }
    }), aW.forEach(function(f, c) {
        var g = c % 2;
        aa.fn[f] = function() {
            var b, h = aa.map(arguments, function(a) {
                    return b = an(a), b == "object" || b == "array" || a == null ? a : ab.fragment(a)
                }),
                d, i = this.length > 1;
            return h.length < 1 ? this : this.each(function(k, j) {
                d = g ? j : j.parentNode, j = c == 0 ? j.nextSibling : c == 1 ? j.firstChild : c == 2 ? j : null, h.forEach(function(l) {
                    if (i) {
                        l = l.cloneNode(!0)
                    } else if (!d) {
                        return aa(l).remove()
                    }
                    aJ(d.insertBefore(l, j), function(m) {
                        m.nodeName != null && m.nodeName.toUpperCase() === "SCRIPT" && (!m.type || m.type === "text/javascript") && !m.src && window["eval"].call(window, m.innerHTML)
                    })
                })
            })
        }, aa.fn[g ? f + "To" : "insert" + (c ? "Before" : "After")] = function(a) {
            return aa(a)[f](this), this
        }
    }), ab.Z.prototype = aa.fn, ab.uniq = av, ab.deserializeValue = aI, aa.zepto = ab, aa
}();
window.Zepto = Zepto, window["$"] === undefined && (window["$"] = Zepto),
    function(A) {
        function C(b) {
            return b._zid || (b._zid = V++)
        }

        function K(i, f, g, h) {
            f = L(f);
            if (f.ns) {
                var j = U(f.ns)
            }
            return (H[C(i)] || []).filter(function(b) {
                return b && (!f.e || b.e == f.e) && (!f.ns || j.test(b.ns)) && (!g || C(b.fn) === C(g)) && (!h || b.sel == h)
            })
        }

        function L(d) {
            var c = ("" + d).split(".");
            return {
                e: c[0],
                ns: c.slice(1).sort().join(" ")
            }
        }

        function U(b) {
            return new RegExp("(?:^| )" + b.replace(" ", " .* ?") + "(?: |$)")
        }

        function M(c, d) {
            return c.del && !Q && c.e in R || !!d
        }

        function N(b) {
            return S[b] || Q && R[b] || b
        }

        function O(a, o, d, p, q, h, r) {
            var l = C(a),
                m = H[l] || (H[l] = []);
            o.split(/\s/).forEach(function(f) {
                if (f == "ready") {
                    return A(document).ready(d)
                }
                var b = L(f);
                b.fn = d, b.sel = q, b.e in S && (d = function(j) {
                    var i = j.relatedTarget;
                    if (!i || i !== this && !A.contains(this, i)) {
                        return b.fn.apply(this, arguments)
                    }
                }), b.del = h;
                var g = h || d;
                b.proxy = function(i) {
                    i = F(i);
                    if (i.isImmediatePropagationStopped()) {
                        return
                    }
                    i.data = p;
                    var j = g.apply(a, i._args == D ? [i] : [i].concat(i._args));
                    return j === !1 && (i.preventDefault(), i.stopPropagation()), j
                }, b.i = m.length, m.push(b), "addEventListener" in a && a.addEventListener(N(b.e), b.proxy, M(b, r))
            })
        }

        function I(g, h, i, j, k) {
            var l = C(g);
            (h || "").split(/\s/).forEach(function(a) {
                K(g, a, i, j).forEach(function(c) {
                    delete H[l][c.i], "removeEventListener" in g && g.removeEventListener(N(c.e), c.proxy, M(c, k))
                })
            })
        }

        function F(d, a) {
            (a || !d.isDefaultPrevented) && (a || (a = d), A.each(Y, function(b, c) {
                var f = a[b];
                d[b] = function() {
                    return this[c] = T, f && f.apply(a, arguments)
                }, d[c] = J
            }), (a.defaultPrevented !== D ? a.defaultPrevented : "returnValue" in a ? a.returnValue === !1 : a.getPreventDefault && a.getPreventDefault()) && (d.isDefaultPrevented = T));
            return d
        }

        function P(d) {
            var f, g = {
                originalEvent: d
            };
            for (f in d) {
                !X.test(f) && d[f] !== D && (g[f] = d[f])
            }
            return F(g, d)
        }
        var Z = A.zepto.qsa,
            V = 1,
            D, W = Array.prototype.slice,
            G = A.isFunction,
            B = function(b) {
                return typeof b == "string"
            },
            H = {},
            E = {},
            Q = "onfocusin" in window,
            R = {
                focus: "focusin",
                blur: "focusout"
            },
            S = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            };
        E.click = E.mousedown = E.mouseup = E.mousemove = "MouseEvents", A.event = {
            add: O,
            remove: I
        }, A.proxy = function(a, f) {
            if (G(a)) {
                var g = function() {
                    return a.apply(f, arguments)
                };
                return g._zid = C(a), g
            }
            if (B(f)) {
                return A.proxy(a[f], a)
            }
            throw new TypeError("expected function")
        }, A.fn.bind = function(d, f, g) {
            return this.on(d, f, g)
        }, A.fn.unbind = function(c, d) {
            return this.off(c, d)
        }, A.fn.one = function(f, g, h, i) {
            return this.on(f, g, h, i, 1)
        };
        var T = function() {
                return !0
            },
            J = function() {
                return !1
            },
            X = /^([A-Z]|returnValue$|layer[XY]$)/,
            Y = {
                preventDefault: "isDefaultPrevented",
                stopImmediatePropagation: "isImmediatePropagationStopped",
                stopPropagation: "isPropagationStopped"
            };
        A.fn.delegate = function(d, f, g) {
            return this.on(f, d, g)
        }, A.fn.undelegate = function(d, f, g) {
            return this.off(f, d, g)
        }, A.fn.live = function(a, d) {
            return A(document.body).delegate(this.selector, a, d), this
        }, A.fn.die = function(a, d) {
            return A(document.body).undelegate(this.selector, a, d), this
        }, A.fn.on = function(g, f, d, a, p) {
            var n, q, o = this;
            if (g && !B(g)) {
                return A.each(g, function(c, h) {
                    o.on(c, f, d, h, p)
                }), o
            }!B(f) && !G(a) && a !== !1 && (a = d, d = f, f = D);
            (G(d) || d === !1) && (a = d, d = D);
            return a === !1 && (a = J), o.each(function(c, b) {
                p && (n = function(h) {
                    return I(b, h.type, a), a.apply(this, arguments)
                }), f && (q = function(i) {
                    var j, h = A(i.target).closest(f, b).get(0);
                    if (h && h !== b) {
                        return j = A.extend(P(i), {
                            currentTarget: h,
                            liveFired: b
                        }), (n || a).apply(h, [j].concat(W.call(arguments, 1)))
                    }
                }), O(b, g, a, d, f, q || n)
            })
        }, A.fn.off = function(f, d, a) {
            var g = this;
            return f && !B(f) ? (A.each(f, function(c, h) {
                g.off(c, d, h)
            }), g) : (!B(d) && !G(a) && a !== !1 && (a = d, d = D), a === !1 && (a = J), g.each(function() {
                I(this, f, a, d)
            }))
        }, A.fn.trigger = function(a, d) {
            return a = B(a) || A.isPlainObject(a) ? A.Event(a) : F(a), a._args = d, this.each(function() {
                "dispatchEvent" in this ? this.dispatchEvent(a) : A(this).triggerHandler(a, d)
            })
        }, A.fn.triggerHandler = function(a, h) {
            var f, g;
            return this.each(function(c, b) {
                f = P(B(a) ? A.Event(a) : a), f._args = h, f.target = b, A.each(K(b, a.type || a), function(i, d) {
                    g = d.proxy(f);
                    if (f.isImmediatePropagationStopped()) {
                        return !1
                    }
                })
            }), g
        }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(a) {
            A.fn[a] = function(b) {
                return b ? this.bind(a, b) : this.trigger(a)
            }
        }), ["focus", "blur"].forEach(function(a) {
            A.fn[a] = function(b) {
                return b ? this.bind(a, b) : this.each(function() {
                    try {
                        this[a]()
                    } catch (c) {}
                }), this
            }
        }), A.Event = function(g, f) {
            B(g) || (f = g, g = f.type);
            var i = document.createEvent(E[g] || "Events"),
                j = !0;
            if (f) {
                for (var h in f) {
                    h == "bubbles" ? j = !!f[h] : i[h] = f[h]
                }
            }
            return i.initEvent(g, j, !0), F(i)
        }
    }(Zepto),
    function(a) {
        function r(C, D, E) {
            var B = a.Event(D);
            return a(C).trigger(B, E), !B.isDefaultPrevented()
        }

        function c(B, C, D, E) {
            if (B.global) {
                return r(C || j, D, E)
            }
        }

        function s(B) {
            B.global && a.active++ === 0 && c(B, null, "ajaxStart")
        }

        function t(B) {
            B.global && !--a.active && c(B, null, "ajaxStop")
        }

        function k(C, B) {
            var D = B.context;
            if (B.beforeSend.call(D, C, B) === !1 || c(B, D, "ajaxBeforeSend", [C, B]) === !1) {
                return !1
            }
            c(B, D, "ajaxSend", [C, B])
        }

        function l(D, C, B, G) {
            var E = B.context,
                F = "success";
            B.success.call(E, D, F, C), G && G.resolveWith(E, [D, F, C]), c(B, E, "ajaxSuccess", [C, B, D]), m(F, C, B)
        }

        function f(E, C, D, B, G) {
            var F = B.context;
            B.error.call(F, D, C, E), G && G.rejectWith(F, [D, C, E]), c(B, F, "ajaxError", [D, B, E || C]), m(C, D, B)
        }

        function m(E, C, B) {
            var D = B.context;
            B.complete.call(D, C, E), c(B, D, "ajaxComplete", [C, B]), t(B)
        }

        function d() {}

        function u(B) {
            return B && (B = B.split(";", 2)[0]), B && (B == p ? "html" : B == o ? "json" : y.test(B) ? "script" : z.test(B) && "xml") || "text"
        }

        function i(B, C) {
            return C == "" ? B : (B + "&" + C).replace(/[&?]{1,2}/, "?")
        }

        function v(B) {
            B.processData && B.data && a.type(B.data) != "string" && (B.data = a.param(B.data, B.traditional)), B.data && (!B.type || B.type.toUpperCase() == "GET") && (B.url = i(B.url, B.data), B.data = undefined)
        }

        function g(E, C, B, F) {
            var D = !a.isFunction(C);
            return {
                url: E,
                data: D ? C : undefined,
                success: D ? a.isFunction(B) ? B : undefined : C,
                dataType: D ? F || B : B
            }
        }

        function n(D, E, F, C) {
            var B, G = a.isArray(E),
                H = a.isPlainObject(E);
            a.each(E, function(J, I) {
                B = a.type(I), C && (J = F ? C : C + "[" + (H || B == "object" || B == "array" ? J : "") + "]"), !C && G ? D.add(I.name, I.value) : B == "array" || !F && B == "object" ? n(D, I, F, J) : D.add(J, I)
            })
        }
        var w = 0,
            j = window.document,
            h, b, x = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            y = /^(?:text|application)\/javascript/i,
            z = /^(?:text|application)\/xml/i,
            o = "application/json",
            p = "text/html",
            A = /^\s*$/;
        a.active = 0, a.ajaxJSONP = function(B, F) {
            if ("type" in B) {
                var I = B.jsonpCallback,
                    G = (a.isFunction(I) ? I() : I) || "jsonp" + ++w,
                    E = j.createElement("script"),
                    H = window[G],
                    C, J = function(L) {
                        a(E).triggerHandler("error", L || "abort")
                    },
                    D = {
                        abort: J
                    },
                    K;
                return F && F.promise(D), a(E).on("load error", function(L, M) {
                    clearTimeout(K), a(E).off().remove(), L.type == "error" || !C ? f(null, M || "error", D, B, F) : l(C[0], D, B, F), window[G] = H, C && a.isFunction(H) && H(C[0]), H = C = undefined
                }), k(D, B) === !1 ? (J("abort"), D) : (window[G] = function() {
                    C = arguments
                }, E.src = B.url.replace(/=\?/, "=" + G), j.head.appendChild(E), B.timeout > 0 && (K = setTimeout(function() {
                    J("timeout")
                }, B.timeout)), D)
            }
            return a.ajax(B)
        }, a.ajaxSettings = {
            type: "GET",
            beforeSend: d,
            success: d,
            error: d,
            complete: d,
            context: null,
            global: !0,
            xhr: function() {
                return new window.XMLHttpRequest()
            },
            accepts: {
                script: "text/javascript, application/javascript, application/x-javascript",
                json: o,
                xml: "application/xml, text/xml",
                html: p,
                text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0
        }, a.ajax = function(K) {
            var B = a.extend({}, K || {}),
                D = a.Deferred && a.Deferred();
            for (h in a.ajaxSettings) {
                B[h] === undefined && (B[h] = a.ajaxSettings[h])
            }
            s(B), B.crossDomain || (B.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(B.url) && RegExp["$2"] != window.location.host), B.url || (B.url = window.location.toString()), v(B), B.cache === !1 && (B.url = i(B.url, "_=" + Date.now()));
            var E = B.dataType,
                I = /=\?/.test(B.url);
            if (E == "jsonp" || I) {
                return I || (B.url = i(B.url, B.jsonp ? B.jsonp + "=?" : B.jsonp === !1 ? "" : "callback=?")), a.ajaxJSONP(B, D)
            }
            var F = B.accepts[E],
                H = {},
                G = function(O, P) {
                    H[O.toLowerCase()] = [O, P]
                },
                L = /^([\w-]+:)\/\//.test(B.url) ? RegExp["$1"] : window.location.protocol,
                C = B.xhr(),
                M = C.setRequestHeader,
                J;
            D && D.promise(C), B.crossDomain || G("X-Requested-With", "XMLHttpRequest"), G("Accept", F || "*/*");
            (F = B.mimeType || F) && (F.indexOf(",") > -1 && (F = F.split(",", 2)[0]), C.overrideMimeType && C.overrideMimeType(F));
            (B.contentType || B.contentType !== !1 && B.data && B.type.toUpperCase() != "GET") && G("Content-Type", B.contentType || "application/x-www-form-urlencoded");
            if (B.headers) {
                for (b in B.headers) {
                    G(b, B.headers[b])
                }
            }
            C.setRequestHeader = G, C.onreadystatechange = function() {
                if (C.readyState == 4) {
                    C.onreadystatechange = d, clearTimeout(J);
                    var O, P = !1;
                    if (C.status >= 200 && C.status < 300 || C.status == 304 || C.status == 0 && L == "file:") {
                        E = E || u(B.mimeType || C.getResponseHeader("content-type")), O = C.responseText;
                        try {
                            E == "script" ? (1, eval)(O) : E == "xml" ? O = C.responseXML : E == "json" && (O = A.test(O) ? null : a.parseJSON(O))
                        } catch (Q) {
                            P = Q
                        }
                        P ? f(P, "parsererror", C, B, D) : l(O, C, B, D)
                    } else {
                        f(C.statusText || null, C.status ? "error" : "abort", C, B, D)
                    }
                }
            };
            if (k(C, B) === !1) {
                return C.abort(), f(null, "abort", C, B, D), C
            }
            if (B.xhrFields) {
                for (b in B.xhrFields) {
                    C[b] = B.xhrFields[b]
                }
            }
            var N = "async" in B ? B.async : !0;
            C.open(B.type, B.url, N, B.username, B.password);
            for (b in H) {
                M.apply(C, H[b])
            }
            return B.timeout > 0 && (J = setTimeout(function() {
                C.onreadystatechange = d, C.abort(), f(null, "timeout", C, B, D)
            }, B.timeout)), C.send(B.data ? B.data : null), C
        }, a.get = function(B, C, D, E) {
            return a.ajax(g.apply(null, arguments))
        }, a.post = function(C, D, E, F) {
            var B = g.apply(null, arguments);
            return B.type = "POST", a.ajax(B)
        }, a.getJSON = function(C, D, E) {
            var B = g.apply(null, arguments);
            return B.dataType = "json", a.ajax(B)
        }, a.fn.load = function(E, H, I) {
            if (!this.length) {
                return this
            }
            var F = this,
                C = E.split(/\s/),
                D, B = g(E, H, I),
                G = B.success;
            return C.length > 1 && (B.url = C[0], D = C[1]), B.success = function(J) {
                F.html(D ? a("<div>").html(J.replace(x, "")).find(D) : J), G && G.apply(F, arguments)
            }, a.ajax(B), this
        };
        var q = encodeURIComponent;
        a.param = function(C, D) {
            var B = [];
            return B.add = function(E, F) {
                this.push(q(E) + "=" + q(F))
            }, n(B, C, D), B.join("&").replace(/%20/g, "+")
        }
    }(Zepto),
    function(b) {
        b.fn.serializeArray = function() {
            var d = [],
                a;
            return b([].slice.call(this.get(0).elements)).each(function() {
                a = b(this);
                var c = a.attr("type");
                this.nodeName.toLowerCase() != "fieldset" && !this.disabled && c != "submit" && c != "reset" && c != "button" && (c != "radio" && c != "checkbox" || this.checked) && d.push({
                    name: a.attr("name"),
                    value: a.val()
                })
            }), d
        }, b.fn.serialize = function() {
            var c = [];
            return this.serializeArray().forEach(function(a) {
                c.push(encodeURIComponent(a.name) + "=" + encodeURIComponent(a.value))
            }), c.join("&")
        }, b.fn.submit = function(a) {
            if (a) {
                this.bind("submit", a)
            } else if (this.length) {
                var d = b.Event("submit");
                this.eq(0).trigger(d), d.isDefaultPrevented() || this.get(0).submit()
            }
            return this
        }
    }(Zepto),
    function(d) {
        "__proto__" in {} || d.extend(d.zepto, {
            Z: function(a, h) {
                return a = a || [], d.extend(a, d.fn), a.selector = h || "", a.__Z = !0, a
            },
            isZ: function(a) {
                return d.type(a) === "array" && "__Z" in a
            }
        });
        try {
            getComputedStyle(undefined)
        } catch (g) {
            var f = getComputedStyle;
            window.getComputedStyle = function(c) {
                try {
                    return f(c)
                } catch (h) {
                    return null
                }
            }
        }
    }(Zepto);
(function(b) {
    b.extend(b.fn, {
        cookie: function(k, i, a) {
            var l, j, m, n;
            if (arguments.length > 1 && String(i) !== "[object Object]") {
                a = b.extend({}, a);
                (i === null || i === undefined) && (a.expires = -1);
                return typeof a.expires == "number" && (l = a.expires * 24 * 60 * 60 * 1e3, j = a.expires = new Date(), j.setTime(j.getTime() + l)), i = String(i), document.cookie = [encodeURIComponent(k), "=", a.raw ? i : encodeURIComponent(i), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
            }
            return a = i || {}, n = a.raw ? function(c) {
                return c
            } : decodeURIComponent, (m = (new RegExp("(?:^|; )" + encodeURIComponent(k) + "=([^;]*)")).exec(document.cookie)) ? n(m[1]) : null
        }
    })
})(Zepto);
! function() {
    var a = window.ISDR = {};
    a.debug = true;
    a.logImg = {};
    a.getPerformanceRtp = function() {
        var f, d = window.webkitPerformance ? window.webkitPerformance : window.msPerformance,
            h = ["navigationStart", "unloadEventStart", "unloadEventEnd", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd"],
            j = {},
            k, c;
        d = d ? d : window.performance;
        if (d && (f = d.timing)) {
            !f.domContentLoadedEventStart && ta.splice(15, 2, "domContentLoaded", "domContentLoaded");
            k = f[h[0]];
            for (var g = 1, m = h.length; g < m; g++) {
                c = f[h[g]];
                c = c ? c - k : 0;
                c > 0 && (j[g] = c)
            }
            return j
        } else {
            return {}
        }
    };
    a.reportRate = 1;
    a.sendCommonRpt = function(n, d) {
        if (!this.debug) {
            return
        }
        var f = n || {},
            h = f.f1,
            j = f.f2,
            k = f.f3,
            o = f.f5 || a.reportRate;
        if (h === undefined && j === undefined && k === undefined) {
            return
        }
        var d = d || {},
            g = [];
        for (var l in d) {
            g.push(l + "=" + d[l])
        }
        var p = "http://isdspeed.qq.com/cgi-bin/r.cgi?flag1=" + h + "&flag2=" + j + "&flag3=" + k + "&flag5=" + o + (g.length > 0 ? "&" + g.join("&") : ""),
            c = new Image(),
            m = "_img_" + Math.random();
        window[m] = c;
        c.onload = c.onerror = function() {
            c.onload = c.onerror = null;
            window[m] = null
        };
        setTimeout(function() {
            c.src = p
        }, 0)
    };
    var b = a.RPT = function(d) {
        var c = d || {};
        this.f1 = c.f1;
        this.f2 = c.f2;
        this.f3 = c.f3;
        this.f5 = c.f5 || a.reportRate;
        this.usePerformance = !!c.usePerformance;
        this.data = {}
    };
    b.prototype.set = function(d, c) {
        this.data[d] = c != undefined ? c : Date.now()
    };
    b.prototype.send = function() {
        var j, f, g = {
                f1: this.f1,
                f2: this.f2,
                f3: this.f3,
                f5: this.f5
            },
            d = this.data,
            c = {};
        f = d[0];
        for (var h in d) {
            c[h] = d[h] - f ? d[h] - f : 0
        }
        delete c[0];
        this.usePerformance ? /complete/.test(document.readyState) || /(iPhone|iPad|iPod|iOS)/g.test(navigator.userAgent) ? setTimeout(function() {
            var k = a.getPerformanceRtp();
            for (var l in k) {
                c[l] = k[l]
            }
            a.sendCommonRpt(g, c)
        }, 10) : window.addEventListener("load", function() {
            setTimeout(function() {
                var k = a.getPerformanceRtp();
                for (var l in k) {
                    c[l] = k[l]
                }
                a.sendCommonRpt(g, c)
            }, 10)
        }, false) : a.sendCommonRpt(g, c)
    }
}();
window.JsBridge = function(a, h, i) {
    a = a || {};
    a.SCENE_NONE = 0;
    a.SCENE_DOWNLOADER = 1;
    a.SCENE_DOWNLOADER_DETAIL = 2 | a.SCENE_DOWNLOADER;
    a.SCENE_DOWNLOADER_EXTERNAL = 4 | a.SCENE_DOWNLOADER;
    a.SCENE_DOWNLOADER_SDK = 8 | a.SCENE_DOWNLOADER;
    a.SCENE_MOBILEQ = 0x10;
    a.SCENE_WECHAT = 0x20;
    a.SCENE = a.SCENE_NONE;
    a._greaterThanOrEqual = function(k, l) {
        k = String(k).split(".");
        l = String(l).split(".");
        try {
            for (var j = 0, o = Math.max(k.length, l.length); j < o; j++) {
                var m = isFinite(k[j]) && Number(k[j]) || 0,
                    n = isFinite(l[j]) && Number(l[j]) || 0;
                if (m < n) {
                    return false
                } else if (m > n) {
                    return true
                }
            }
        } catch (p) {
            return false
        }
        return true
    };
    var d = [],
        c = {};

    function g() {
        var j = document.createElement("iframe");
        d.push(j);
        j.style.cssText = "position:absolute;left:0;top:0;width:0;height:0;visibility:hidden;";
        j.frameBorder = "0";
        document.body.appendChild(j);
        return j
    }
    a.callWithScheme = function(j) {
        a._callWithScheme(j)
    };
    a._callWithScheme = function(l, m) {
        var j;
        for (var k = 0; j = d[k]; k++) {
            if (!j._busy) {
                break
            }
        }(!j || j._busy) && (j = g());
        j._busy = true;
        c[m] = j;
        j.src = l
    };
    a._callback = function(j) {
        c[j] && (c[j]._busy = false, delete c[j])
    };
    a.ready = false;
    var f = [];
    a.onReady = function(j) {
        a.ready ? j && j() : j && f.push(j)
    };
    a._readyCallback = function() {
        if (a.ready) {
            return
        }
        a.ready = true;
        for (var j = 0, k; k = f[j]; j++) {
            k()
        }
    };
    var b = function(j, k, l) {
        this.args = j || {};
        this.callback = k;
        this.context = l;
        this.identifier = 0;
        this.state = 1;
        this.percentage = 0;
        b._instances[this.args.packageName] = this;
        this._init()
    };
    b._instances = {};
    b.HAS_PERCENTAGE = true;
    b.STATE_READY = 1;
    b.STATE_QUEUING = 2;
    b.STATE_DOWNLOADING = 3;
    b.STATE_PAUSED = 4;
    b.STATE_DOWNLOADED = 5;
    b.STATE_INSTALLING = 6;
    b.STATE_INSTALLED = 7;
    b.STATE_FAILED = 8;
    b.STATE_FAILED_OF_SDCARD = 9;
    b.STATE_REMOVED = 10;
    b.STATE_CANCAL = 11;
    b._getDownloadState = function(j, k) {
        j = b._stateMap[j];
        k && j == b.STATE_FAILED && (j = b.STATE_READY);
        return j
    };
    b.prototype._callback = function(k, j) {
        if (k) {
            this.state = k;
            switch (this.state) {
                case b.STATE_READY:
                case b.STATE_FAILED:
                case b.STATE_FAILED_OF_SDCARD:
                case b.STATE_CANCAL:
                case b.STATE_REMOVED:
                    this.percentage = 0;
                    break;
                case b.STATE_DOWNLOADED:
                case b.STATE_INSTALLING:
                case b.STATE_INSTALLED:
                    this.percentage = 100;
                    break
            }
        }
        j && ((this.state == b.STATE_DOWNLOADING || this.state == b.STATE_PAUSED) && b.HAS_PERCENTAGE && isFinite(j.percentage) && (this.percentage = j.percentage), j.identifier && (this.identifier != j.identifier ? (delete b._instances[this.identifier], b._instances[this.identifier = j.identifier] = this) : b._instances[this.identifier] != this && (b._instances[this.identifier] = this)));
        this.callback && this.callback.call(this, this.state, this.percentage, this.context, j)
    };
    b.prototype.doAction = function() {
        switch (this.state) {
            case b.STATE_QUEUING:
            case b.STATE_DOWNLOADING:
                this.stop();
                break;
            case b.STATE_DOWNLOADED:
                this.install();
                break;
            case b.STATE_INSTALLED:
                this.args.isUpdate ? this.start() : a.startApp(this.args.packageName);
                break;
            default:
                this.start();
                break
        }
    };
    b.prototype.dispose = function() {
        delete b._instances[this.identifier];
        delete b._instances[this.args.packageName];
        return true
    };
    a.Download = b;
    a.SHARE_USER_SELECTION = 0;
    a.SHARE_MOBILEQ = 1;
    a.SAHRE_QZONE = 2;
    a.SAHRE_WECHAT = 3;
    a.SAHRE_WECHAT_TIMELINE = 4;
    a.SHARE_USER_SELECTION_POPUP = 5;
    a._shareInfo = {
        iconUrl: "",
        jumpUrl: location.href,
        title: document.title,
        summary: location.href,
        message: "",
        appBarInfo: ""
    };
    a.setShareInfo = function(j) {
        j = j || {};
        j.allowShare == 1 || j.allowShare === true ? a._showShareButton && a._showShareButton() : (j.allowShare == 0 || j.allowShare === false) && a._hideShareButton && a._hideShareButton();
        var k = a._shareInfo;
        k.iconUrl = j.iconUrl || k.iconUrl;
        k.jumpUrl = j.jumpUrl || k.jumpUrl;
        k.title = j.title || k.title;
        k.summary = j.summary || k.summary;
        k.message = j.message || k.message;
        k.appBarInfo = j.appBarInfo || k.appBarInfo;
        a._setShareInfo && a._setShareInfo(j)
    };
    return a
}(window.JsBridge, window);
(function(a, h, i) {
    if (!a || a.SCENE != a.SCENE_NONE) {
        return
    }
    var f = navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/);
    if (f && a._greaterThanOrEqual(f[1], "5.0")) {
        a.SCENE = a.SCENE_WECHAT
    } else {
        return
    }
    var b = a.Download,
        c = "JsBridge-Download";

    function g(k) {
        if (window.localStorage) {
            var j = localStorage.getItem(c);
            if (j) {
                try {
                    return JSON.parse(j)[k].downloadId || 0
                } catch (l) {}
            }
        }
        return 0
    }

    function d(o, m) {
        if (window.localStorage) {
            var j = localStorage.getItem(c);
            if (j) {
                try {
                    var k = JSON.parse(j);
                    j = {};
                    for (var l in k) {
                        n - k[l].timestamp < 7 * 24 * 3600 && (j[l] = k[l])
                    }
                } catch (p) {
                    j = {}
                }
            } else {
                j = {}
            }
            var n = Date.now();
            m && (j[o] = {
                timestamp: n,
                downloadId: m
            });
            localStorage.setItem(c, JSON.stringify(j));
            return true
        }
        return false
    }
    b._stateMap = {
        downloading: b.STATE_DOWNLOADING,
        download_succ: b.STATE_DOWNLOADED,
        download_fail: b.STATE_FAILED,
        download_cancel: b.STATE_CANCAL,
        download_removed: b.STATE_REMOVED
    };
    b.HAS_PERCENTAGE = true;
    b.prototype._init = function() {
        var j = g(this.args.md5);
        debug("[wx_fix.js] queryDownloadTask downloadId: " + j);
        if (j) {
            var k = this;
            WeixinJSBridge.invoke("queryDownloadTask", {
                download_id: j
            }, function(l) {
                debug("[wx_fix.js] queryDownloadTask res: " + JSON.stringify(l));
                l.err_msg.indexOf("access_denied") >= 0 && reportWxJsAPIErrMsg("queryDownloadTask: " + l.err_msg);
                k._callback(l.err_msg.indexOf("query_download_task:ok") >= 0 ? b._getDownloadState(l.state, true) : b.STATE_READY, {
                    identifier: j
                })
            })
        } else {
            this._callback(b.STATE_READY)
        }
    };
    b.prototype.start = function() {
        debug("[wx_fix.js] Download.prototype.start this.state: " + this.state);
        switch (this.state) {
            case b.STATE_READY:
            case b.STATE_PAUSED:
            case b.STATE_FAILED:
            case b.STATE_FAILED_OF_SDCARD:
            case b.STATE_REMOVED:
            case b.STATE_CANCAL:
                var j = this;
                WeixinJSBridge.invoke("addDownloadTask", {
                    task_name: this.args.alias,
                    task_url: this.args.url,
                    file_md5: this.args.md5,
                    title: this.args.title,
                    thumb_url: this.args.thumbUrl
                }, function(k) {
                    debug("[wx_fix.js] Download.prototype.start addDownloadTask res: " + JSON.stringify(k));
                    k.err_msg.indexOf("add_download_task:ok") >= 0 ? (d(j.args.md5, k.download_id), j._callback(b.STATE_DOWNLOADING, {
                        identifier: k.download_id
                    })) : k.err_msg.indexOf("fail_sdcard_not_ready") >= 0 ? j._callback(b.STATE_FAILED_OF_SDCARD) : k.err_msg.indexOf("add_download_task:cancel") >= 0 ? j._callback(b.STATE_CANCAL) : j._callback(b.STATE_FAILED, {
                        errCode: -31415,
                        errMsg: k.err_msg
                    })
                });
                break;
            default:
                debug("[wx_fix.js] Download.prototype.start default");
                this._callback();
                break
        }
        return true
    };
    b.prototype.stop = function() {
        var j = this;
        debug("[wx_fix.js] Download.prototype.stop");
        WeixinJSBridge.invoke("cancelDownloadTask", {
            download_id: this.identifier
        }, function(k) {
            k.err_msg.indexOf("access_denied") >= 0 && reportWxJsAPIErrMsg("cancelDownloadTask: " + k.err_msg);
            debug("[wx_fix.js] Download.prototype.stop cancelDownloadTask res: " + JSON.stringify(k));
            d(j.args.md5);
            j._callback(b.STATE_READY)
        });
        return true
    };
    b.prototype.install = function() {
        var j = this;
        debug("[wx_fix.js] Download.prototype.install");
        WeixinJSBridge.invoke("installDownloadTask", {
            download_id: this.identifier
        }, function(k) {
            k.err_msg.indexOf("access_denied") >= 0 && reportWxJsAPIErrMsg("installDownloadTask: " + k.err_msg);
            k.err_msg.indexOf("fail") >= 0 && (d(j.args.md5), j._callback(b.STATE_READY))
        });
        return true
    };
    a.onReady(function() {
        WeixinJSBridge.on("wxdownload:state_change", function(j) {
            debug("[wx_fix.js] wxdownload:state_change res: " + JSON.stringify(j));
            var k = b._getDownloadState(j.state);
            if (j.download_id && k) {
                var l = b._instances[j.download_id];
                k == b.STATE_FAILED ? l && l._callback(k, {
                    errCode: j.err_code,
                    identifier: j.download_id
                }) : l && l._callback(k)
            }
        });
        WeixinJSBridge.on("activity:state_change", function(j) {
            j.state.indexOf("onResume") >= 0 && typeof a.onResume == "function" && a.onResume();
            j.state.indexOf("onPause") >= 0 && typeof a.onPause == "function" && a.onPause()
        });
        WeixinJSBridge.on("wxdownload:progress_change", function(j) {
            if (j.download_id) {
                var k = b._instances[j.download_id];
                k && k._callback(b.STATE_DOWNLOADING, {
                    percentage: j.progress,
                    identifier: j.download_id
                })
            }
        })
    });
    a.getAppInstalledVersion = function(k, n) {
        var m = k.length,
            o = {};
        for (var j = 0, p = m; j < p; j++) {
            WeixinJSBridge.invoke("getInstallState", {
                packageName: k[j]
            }, function(l) {
                return function(q) {
                    debug("[wx_fix.js] getInstallState res: " + JSON.stringify(q));
                    q.err_msg.indexOf("access_denied") >= 0 && reportWxJsAPIErrMsg("getInstallState: " + q.err_msg);
                    if (q.err_msg.indexOf("get_install_state:yes") >= 0) {
                        var r = q.err_msg.split("_");
                        r = r.length > 0 ? Number(r[r.length - 1]) : 0;
                        o[l] = r
                    }
                    m--;
                    m == 0 && n && n(o)
                }
            }(k[j]))
        }
        return true
    };
    a.startApp = function(l, j) {
        j = [].concat(j);

        function k() {
            debug("[wx_fix.js] launch3rdApp");
            WeixinJSBridge.invoke("launch3rdApp", {
                type: 1,
                packageName: l,
                signature: j.shift()
            }, function(m) {
                debug("[wx_fix.js] launch3rdApp res: " + JSON.stringify(m));
                m.err_msg.indexOf("access_denied") >= 0 && reportWxJsAPIErrMsg("launch3rdApp: " + m.err_msg);
                m.err_msg != "launch_3rdApp:ok" && j[0] && k()
            })
        }
        k();
        return true
    };
    a._showShareButton = function() {
        WeixinJSBridge.call("showOptionMenu")
    };
    a._hideShareButton = function() {
        WeixinJSBridge.call("hideOptionMenu")
    };
    a._setShareInfo = function() {
        a.onReady(function() {
            WeixinJSBridge.on("menu:share:appmessage", function() {
                a.share(a.SAHRE_WECHAT)
            });
            WeixinJSBridge.on("menu:share:timeline", function() {
                a.share(a.SAHRE_WECHAT_TIMELINE)
            })
        });
        delete a._setShareInfo
    };
    a.share = function(k) {
        var j = a._shareInfo;
        WeixinJSBridge.invoke(k == a.SAHRE_WECHAT ? "sendAppMessage" : "shareTimeline", {
            appid: "wx3909f6add1206543",
            img_url: j.iconUrl,
            img_width: 72,
            img_height: 72,
            link: j.jumpUrl,
            desc: j.summary,
            title: j.title
        });
        return true
    };
    a.showPictures = function(k, j) {
        WeixinJSBridge.invoke("imagePreview", {
            current: k[isFinite(j) && j >= 0 && j < k.length ? j : 0],
            urls: k
        });
        return true
    };
    a.openNewWindow = function() {
        return false
    };
    a.login = function() {
        return false
    };
    a.getLoginTicket = function() {
        return null
    };
    a.callWithScheme = function(j) {
        /MicroMessenger\/([0-5]\.|6\.[0-4]\.|6\.5\.[0-5]\.)/i.test(navigator.userAgent) ? a._callWithScheme(j) : WeixinJSBridge && WeixinJSBridge.invoke("launchApplication", {
            schemeUrl: j
        }, function(k) {
            k.err_msg.indexOf("access_denied") >= 0 && reportWxJsAPIErrMsg("launchApplication: " + k.err_msg);
            k.err_msg == "launchApplication:fail" && a._callWithScheme(j)
        })
    };
    window.WeixinJSBridge ? a._readyCallback() : document.addEventListener("WeixinJSBridgeReady", a._readyCallback, false)
})(window.JsBridge, window);
(function(b, j, n) {
    if (!b || b.SCENE != b.SCENE_NONE) {
        return
    }
    var l = navigator.userAgent.indexOf("V1_AND_SQ_") >= 0,
        k = navigator.userAgent.match(/(?:V1_AND_SQ_|QQ\/)([\d\.]+)/);
    if (k && b._greaterThanOrEqual(k[1], "4.6")) {
        b.SCENE = b.SCENE_MOBILEQ
    } else {
        return
    }
    var f = 1,
        d = {},
        c = b._call = function(s) {
            var p = ["jsbridge:/", s];
            p.push(f);
            var r;
            for (var q = 1, t = arguments.length; q < t; q++) {
                var o = arguments[q];
                if (typeof o == "function") {
                    r = o;
                    break
                }
                p.push(encodeURIComponent(typeof o == "object" ? JSON.stringify(o) : o + ""))
            }
            d[f] = {
                cb: r
            };
            b._callWithScheme(p.join("index-2.html"), f);
            return f++
        };
    b.multiCall = function(q, r) {
        var p = 0,
            o = {},
            s = {},
            w = function(x) {
                if (!x || !x.guid || !(x.guid in o)) {
                    return
                }
                s[o[x.guid]] = x.r == 0 ? x.data : null;
                typeof cb == "function" && cb(key, x);
                p--;
                delete o[x.guid];
                p == 0 && typeof r == "function" && r(s)
            };
        for (var t in q) {
            var u = q[t],
                v = [u.name].concat(u.args || []);
            v.push(w);
            o[b._call.apply(b, v)] = t;
            p++
        }
    };
    b.onResume = function() {};
    b.callback = function(p, o) {
        if (p == "resume") {
            typeof b.onResume == "function" && b.onResume();
            return
        }
        if (!o) {
            return
        }
        isFinite(p) ? d[p] && (b._callback(p), d[p].cb && d[p].cb(o.result), delete d[p]) : o.r == 0 && p == "interface.getQueryDownloadAction" ? g(o.data, true, true) : o.guid && d[o.guid] && (b._callback(o.guid), d[o.guid].cb && d[o.guid].cb(o.data), delete d[o.guid])
    };
    j.QzoneApp = {
        fire: function(o, p) {
            b.callback(o, p)
        }
    };
    j.publicAccountDownload = {
        queryProcess: function(o) {
            g(o, true)
        }
    };
    var a = b.Download;
    a._stateMap = {
        20: a.STATE_QUEUING,
        2: a.STATE_DOWNLOADING,
        12: a.STATE_DOWNLOADING,
        3: a.STATE_PAUSED,
        10: a.STATE_READY,
        4: a.STATE_DOWNLOADED,
        5: a.STATE_INSTALLING,
        6: a.STATE_INSTALLED,
        13: a.STATE_INSTALLED,
        9: a.STATE_READY,
        "-1": a.STATE_FAILED,
        "-2": a.STATE_FAILED,
        "-3": a.STATE_FAILED,
        "-4": a.STATE_FAILED,
        "-5": a.STATE_FAILED,
        "-6": a.STATE_FAILED
    };
    a.prototype._getDownloadParam = function(o) {
        return {
            myAppConfig: 0,
            appid: this.args.sngAppId,
            myAppId: this.args.hnAppId,
            versionCode: this.args.versionCode,
            url: this.args.url,
            packageName: this.args.packageName,
            actionCode: o,
            appName: this.args.alias,
            isAutoDownload: 1,
            isAutoInstall: 1,
            via: this.args.via || ""
        }
    };
    var h = 0,
        i = [];

    function m() {
        h = 0;
        var p = {
            guid: 1,
            infolist: []
        };
        for (var q = 0, o; o = i[q]; q++) {
            p.infolist.push({
                appid: o.args.sngAppId,
                myAppId: o.args.hnAppId,
                packageName: o.args.packageName,
                versionCode: o.args.versionCode
            })
        }
        i = [];
        !l && (p = p.infolist);
        c("q_download/getQueryDownloadAction", p)
    }
    a._query = function(o) {
        i.push(o);
        !h && (h = setTimeout(m))
    };
    a.prototype._init = function() {
        this._callback(a.STATE_READY, {
            identifier: this.args.sngAppId
        });
        a._query(this)
    };
    a.prototype.start = function() {
        switch (this.state) {
            case a.STATE_READY:
            case a.STATE_FAILED:
                c("q_download/doDownloadAction", this._getDownloadParam(this.args.isUpdate ? 12 : 2));
                break;
            case a.STATE_PAUSED:
                c("q_download/doDownloadAction", this._getDownloadParam(2));
                break;
            default:
                this._callback();
                break
        }
        return true
    };
    a.prototype.stop = function() {
        c("q_download/doDownloadAction", this._getDownloadParam(3));
        return true
    };
    a.prototype.install = function() {
        c("q_download/doDownloadAction", this._getDownloadParam(5));
        return true
    };
    a.onBatchCallback = function() {};

    function g(o, p, u) {
        if (Object.prototype.toString.call(o) == "[object Array]") {
            u && typeof a.onBatchCallback == "function" && a.onBatchCallback(o);
            for (var q = 0, r; r = o[q]; q++) {
                g(r, p)
            }
            return
        }
        var s = a._getDownloadState(o.state, p);
        if ((o.appid || o.packagename) && s) {
            var t = a._instances[o.appid] || a._instances[o.packagename];
            t && t._callback(s, {
                percentage: o.pro
            })
        }
    }
    a.callback = function(o) {
        g(o)
    };
    b.onReady(function() {
        c("q_download/registerDownloadCallBackListener", "JsBridge.Download.callback")
    });
    b.getAppInstalledVersion = function(p, o) {
        c("qzone_app/getAppInfoBatch", p.join(","), ",", false, false, false, function(q) {
            q = q && JSON.parse(q.data || q) || [];
            var s = {};
            for (var t = 0, r; r = q[t]; t++) {
                s[r[0]] = r[1]
            }
            o && o(s)
        });
        return true
    };
    b.startApp = function(o) {
        c("qqZoneAppList/startApp", o, "");
        return true
    };
    b._setShareInfo = function() {
        var o = b._shareInfo;
        c("QQApi/setShareInfo", {
            share_url: o.jumpUrl,
            title: o.title,
            desc: o.summary,
            image_url: o.iconUrl
        })
    };
    b.share = function() {
        return false
    };
    b.showPictures = function() {
        return false
    };
    b.openNewWindow = function(o) {
        c("QQApi/openUrl", {
            url: o,
            target: 1
        });
        return true
    };
    b.login = function() {
        return false
    };
    b.getLoginTicket = function() {
        return null
    };
    b._readyCallback()
})(window.JsBridge, window);
(function(i) {
    function f(l, m, n) {
        if (typeof MutationObserver == "function") {
            var o = document.createElement("div");
            new MutationObserver(function() {
                m.apply(l, n)
            }).observe(o, {
                attributes: true
            });
            o.setAttribute("change", "yes")
        } else if (typeof MessageChannel == "function") {
            var p = new MessageChannel();
            p.port1.onmessage = function() {
                m.apply(l, n)
            };
            p.port2.postMessage("trigger")
        } else {
            setTimeout(function() {
                m.apply(l, n)
            }, 0)
        }
    }

    function g(l) {
        l.placeholder && (b(l.placeholder, l.result, l.state), l.placeholder.subPromiseArr.length && c(l.placeholder))
    }

    function d(l, n, m) {
        if (l && l instanceof n.constructor) {
            if (l.state == "pending") {
                l.placeholder = n;
                m.hangup = true;
                return
            } else {
                m.state = l.state;
                return d(l.result, n, m)
            }
        } else if (l && typeof l.then == "function") {
            var o = false,
                p;
            l.then(function(q) {
                p = q;
                o = true;
                m.state = "resolved"
            }, function(q) {
                p = q;
                o = true;
                m.state = "rejected"
            });
            if (!o) {
                m.hangup = true;
                return
            }
            return d(p, n, m)
        } else {
            return l
        }
    }

    function j(n, l, q) {
        var p, o, m = {
            hangup: false
        };
        if (l.state == "resolved") {
            m.state = "resolved";
            p = d(l.result, l, m);
            if (m.hangup) {
                return
            }
            m.state == "resolved" ? o = l.fullfilFunArr[q] : o = l.rejectFunArr[q]
        } else {
            m.state = "rejected";
            p = l.result;
            o = l.rejectFunArr[q]
        }
        if (o === null) {
            b(n, p, m.state);
            return
        }
        pro_air = o(p);
        l.thened = true;
        pro_air instanceof n.constructor ? (pro_air.placeholder = n, pro_air.state != "pending" && b(n, pro_air.result, pro_air.state)) : b(n, pro_air, "resolved")
    }

    function b(l, m, n) {
        l.state = n;
        l.result = m;
        g(l)
    }

    function h(m, q) {
        var r, l, o;
        o = m.subPromiseArr.length;
        if (m.thened) {
            return
        }
        for (var n = 0; n < o; n++) {
            l = m.subPromiseArr[n];
            j(l, m, n)
        }
        for (var p = 0; p < o; p++) {
            l = m.subPromiseArr[p];
            l.state != "pending" && l.subPromiseArr.length && c(l)
        }
    }

    function c(l) {
        f(null, h, [l, 0])
    }

    function k(l) {
        var m = new l.constructor(),
            n;
        l.subPromiseArr.push(m);
        f(null, h, [l, 1]);
        return m
    }

    function a(n) {
        this.state = "pending";
        this.fullfilFunArr = [];
        this.rejectFunArr = [];
        this.thened = false;
        this.result = null;
        this.subPromiseArr = [];
        this.placeholder = null;
        if (!n) {
            return
        }
        var l = this,
            m;

        function o(p, q) {
            l.state = q;
            l.result = p;
            l.placeholder ? (m = l.placeholder, m.result = p, m.state = q, m.subPromiseArr.length && c(m), g(m)) : l.subPromiseArr.length && c(l)
        }
        n(function(p) {
            o(p, "resolved")
        }, function(p) {
            o(p, "rejected")
        })
    }
    a.prototype.then = function(m, n) {
        this.fullfilFunArr.push(m || null);
        this.rejectFunArr.push(n || null);
        var o, l;
        if (this.state == "pending") {
            l = new this.constructor();
            this.subPromiseArr.push(l);
            return l
        } else {
            return k(this)
        }
    };
    a.prototype.promiseCatch = function(l) {
        return this.then(null, l)
    };
    a.resolve = function(l) {
        if (l && typeof l == "object" && l.constructor == a) {
            return l
        }
        return new a(function(m, n) {
            m(l)
        })
    };
    a.reject = function(l) {
        return new a(function(n, m) {
            m(l)
        })
    };
    a.all = function(l) {
        var m = new a(function(s, t) {
            var p = l.length,
                q = [],
                n = false,
                r = 0;
            for (var o = 0; o < p; o++) {
                if (n) {
                    break
                }

                function u(v) {
                    l[v].then(function(w) {
                        !n && (r += 1, q[v] = w, r == p && s(q))
                    }).promiseCatch(function(w) {
                        !n && (n = true, t(w))
                    })
                }
                u(o)
            }
        });
        return m
    };
    a.race = function(l) {
        var m = new a(function(p, q) {
            var r = l.length,
                n = false;
            for (var o = 0; o < r; o++) {
                l[o].then(function(s) {
                    !n && (n = true, p(s))
                }).promiseCatch(function(s) {
                    !n && (n = true, q(s))
                })
            }
        });
        return m
    };
    typeof module != "undefined" && module.exports ? module.exports = a : typeof define === "function" && define.amd ? define(a) : i.Promise = a
})(window);

function configFun() {
    function a(f, h) {
        var c = arguments[1] || window.location.search,
            g = new RegExp("(^|&)" + f + "=([^&]*)(&|$)"),
            d = c.substr(c.indexOf("?") + 1).match(g);
        return d != null ? d[2] : ""
    }

    function b(d, f) {
        d = String(d).split(".");
        f = String(f).split(".");
        try {
            for (var c = 0, j = Math.max(d.length, f.length); c < j; c++) {
                var g = isFinite(d[c]) && Number(d[c]) || 0,
                    h = isFinite(f[c]) && Number(f[c]) || 0;
                if (g < h) {
                    return false
                } else if (g > h) {
                    return true
                }
            }
        } catch (k) {
            return false
        }
        return true
    }
    window.APPCONFIG = null;
    (function() {
        var c, d, f, j, h, i, g, k = navigator.userAgent.match(/(?:V1_AND_SQ_|QQ\/)([\d\.]+)/);
        i = k && k[1];
        i && (g = b(i, "5.6.0"));
        g = a("usehttps") && g || isUseHttpsForWX();
        c = window.AppInfoData;
        c && (d = c.appDetail || null, f = c.baoPkg || null, j = c.appExt || {}, h = c.identityInfo || {});
        if (!(c && d && f)) {
            return
        }
        window.APPCONFIG = {
            g_tk: c.g_tk,
            app: {
                appName: d.appName,
                appId: d.appId,
                apkId: d.apkId,
                appChannel: d.channel || "",
                packageName: d.packageName,
                sigMd5: [].concat(d.signatureMd5, c.appExt ? c.appExt.signatures : null),
                iosUrl: j.iosUrl,
                versionCode: d.versionCode,
                versionName: d.versionName,
                relatedPkgList: h.relatedPkgList || []
            },
            appbao: {
                appbaoPkg: "com.tencent.android.qqdownloader",
                appbaoUrl: (g ? f.https_url : "") || f.url || "",
                appbaoMd5: f.md5,
                appbaoName: "应用宝",
                g_f: f.channel || ""
            },
            identityInfo: h || {}
        }
    })()
}

function isUseHttpsForWX() {
    if (!window.localStorage) {
        return false
    }
    var a = window.localStorage.getItem("useHttpsUrl") || "",
        b = window.localStorage.getItem("setHttpsUrlTime") || 0;
    if (a && Date.now() - parseInt(b, 10) <= 604800000) {
        return true
    } else {
        return false
    }
}

function setUseHttps() {
    if (!window.localStorage) {
        return
    }
    window.localStorage.setItem("useHttpsUrl", true);
    window.localStorage.setItem("setHttpsUrlTime", Date.now())
}

function load_script(c, b) {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.readyState ? a.onreadystatechange = function() {
        (a.readyState == "loaded" || a.readyState == "complete") && (a.onreadystatechange = null, b && b())
    } : a.onload = function() {
        b && b()
    };
    a.src = c;
    document.getElementsByTagName("head")[0].appendChild(a)
}(function() {
    var a = window.UI = {};
    a.EVENTS = {};
    (function(b) {
        var c;
        c = b.hastouch = window.DocumentTouch && document instanceof window.DocumentTouch || "ontouchstart" in window;
        b.touchstart = c ? "touchstart" : "mousedown";
        b.touchmove = c ? "touchmove" : "mousemove";
        b.touchend = c ? "touchend" : "mouseup";
        b.resize = "onorientationchange" in window ? "orientationchange" : "resize";
        b.touchstartEv = function() {
            var d = document.createEvent("Event");
            d.initEvent("touchstart", true, true);
            d.touches = [{
                target: document.documentElement,
                pageX: 0,
                pageY: 0
            }];
            return d
        }
    })(a.EVENTS);
    a.pageVisibility = function() {
        var b, d = function(i, h) {
                if (i !== "") {
                    return i + h.slice(0, 1).toUpperCase() + h.slice(1)
                }
                return h
            },
            c = function() {
                var h = false;
                typeof window.screenX === "number" && ["webkit", "moz", "ms", "o", ""].forEach(function(i) {
                    h == false && document[d(i, "hidden")] != undefined && (b = i, h = true)
                });
                return h
            }(),
            f = function() {
                if (c) {
                    return document[d(b, "hidden")]
                }
                return undefined
            },
            g = function() {
                if (c) {
                    return document[d(b, "visibilityState")]
                }
                return undefined
            };
        return {
            isPageVisibilitySupport: c,
            isHidden: f,
            visibilityState: g,
            visibilitychange: function(h, i) {
                i = undefined || false;
                if (c && typeof h === "function") {
                    return document.addEventListener(b + "visibilitychange", function(j) {
                        this.hidden = f();
                        this.visibilityState = g();
                        h.call(this, j)
                    }.bind(this), i)
                }
                return undefined
            }
        }
    }(undefined);
    a.compareVersion = function(d, f) {
        d = String(d).split(".");
        f = String(f).split(".");
        try {
            for (var c = 0, j = Math.max(d.length, f.length); c < j; c++) {
                var g = isFinite(d[c]) && Number(d[c]) || 0,
                    h = isFinite(f[c]) && Number(f[c]) || 0;
                if (g < h) {
                    return -1
                } else if (g > h) {
                    return 1
                }
            }
        } catch (k) {
            return -1
        }
        return 0
    };
    a.detectua = function(c) {
        var d = {},
            b = {},
            j = c.match(/([a|A]ndroid)[\s\/]*([\d.]+)/),
            f = c.match(/(iPad).*OS\s([\d_]+)/),
            k = !f && c.match(/(iPhone\sOS)\s([\d_]+)/),
            g = c.match(/MicroMessenger\/([\d\.]+)/),
            l = window.browser && c.match(/MQQBrowser\/([\d\.]+)/),
            h = c.match(/(?:V1_AND_SQ_|QQ\/)([\d\.]+)/),
            i = c.match(/\/qqdownloader\/(\d+)(?:\/(appdetail|external))?/);
        (/android/i.test(c) || /UCBrowser/i.test(c) && /Adr[\s\/]*([\d.]+)/.test(c)) && (d.android = true, j && (d.version = j[2]));
        !(d.android) && /(iPhone|iPad|iPod|iOS)/g.test(c) && (d.ios = true, k && (d.iphone = true, d.version = k[2].replace(/_/g, ".")), f && (d.ipad = true, d.version = f[2].replace(/_/g, ".")));
        g && (b.wechat = true, b.version = g[1], b.pname = "com.tencent.mm");
        h && (b.mqq = true, b.version = h[1], b.pname = "com.tencent.mobileqq");
        i && (b.yyb = true, b.version = i[1], b.pname = "com.tencent.android.qqdownloader");
        !g && !h && !i && l && (b.qqbrowser = true, b.version = l[1], b.pname = "com.tencent.mtt");
        return {
            os: d,
            browser: b
        }
    };
    a.serializeParam = function(c, f) {
        var d = [];
        for (var b in c) {
            f ? d.push(b + "=" + c[b]) : d.push(encodeURIComponent(b) + "=" + encodeURIComponent(c[b]))
        }
        return d.join("&")
    };
    a.log = function(c) {
        var b = $("#log");
        if (!b.length) {
            return
        }
        b.append("<li>" + (new Date()).toUTCString() + "--" + c + "</li>")
    };
    a.getQuery = function(d, g) {
        var b = arguments[1] || window.location.search,
            f = new RegExp("(^|&)" + d + "=([^&]*)(&|$)"),
            c = b.substr(b.indexOf("?") + 1).match(f);
        return c != null ? c[2] : ""
    };
    a.escHtml = function(b) {
        if (b == null) {
            return ""
        }
        return String(b).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    };
    a.getHtml = function(c, b) {
        return c.replace(/{([\w\-]+)\}/g, function(f, d) {
            return typeof b[d] !== undefined ? a.escHtml(b[d]) : ""
        })
    };
    a.Slide = function(d, c) {
        var g = /translate3d\((-?[\d\.]+)(px)?,\s?0(px)?,\s?0(px)?\)/;

        function i() {}

        function h(m, n) {
            event = document.createEvent("Events"), event.initEvent(n, false, true);
            m.dispatchEvent(event)
        }

        function j(m, n, v) {
            var p, r, o, q;
            n.addEventListener("touchstart", function(t) {
                p = t.touches[0].clientX;
                r = t.touches[0].clientY
            });
            n.addEventListener("touchmove", function(t) {
                if (p != c) {
                    var w = t.touches[0].clientX - p,
                        x = t.touches[0].clientY - r;
                    if (Math.abs(w / x) > 1) {
                        o = w
                    } else {
                        if (v == true) {
                            return
                        }
                    }
                    t.preventDefault();
                    return false
                }
            });

            function s(t) {
                if (o != c) {
                    o > 0 ? m.index = Math.max(m.index - 1, 0) : o < 0 && (m.index = Math.min(m.index + 1, m.length - 1));
                    p = r = o = dy = c;
                    b(m);
                    t.preventDefault();
                    return false
                }
            }
            n.addEventListener("touchend", s);
            n.addEventListener("touchcancel", s);
            n.addEventListener("webkitTransitionEnd", function() {
                h(d, "viewchange")
            });

            function u(t) {
                q && clearTimeout(q);
                q = setTimeout(function() {
                    b(m, true);
                    q = c
                }, 500)
            }
            d.addEventListener("orientationchange", u);
            d.addEventListener("resize", u)
        }

        function k(m) {
            var n = m.list,
                u = n.parentElement,
                p = u.getBoundingClientRect();
            if (p.width) {
                var o = m.offset = {
                        viewWidth: p.width
                    },
                    v = g.test(n.style.webkitTransform) ? parseInt(RegExp["$1"]) : 0,
                    r = n.children[0].children[0].getBoundingClientRect(),
                    w = n.children[m.length - 1].children[0].getBoundingClientRect(),
                    q = r.left,
                    s = w.right,
                    t = r.width;
                o.totalWidth = s - q + (q - p.left - v) * 2;
                o.step = m.length == 1 ? t : (s - q - t) / (m.length - 1);
                m.moveable = m.length > 0 && o.totalWidth > o.viewWidth;
                !m.moveable && (n.style.webkitTransform = "")
            }
        }

        function b(m, q) {
            (q || m.moveable == c) && k(m);
            if (m.moveable) {
                var n = m.offset,
                    p = m.list,
                    r = g.test(p.style.webkitTransform) ? parseInt(RegExp["$1"]) : 0,
                    o = Math.max(0, Math.min(n.step * m.index, n.totalWidth - n.viewWidth));
                Math.abs(r + o) > 3 ? p.style.webkitTransform = "translate3d(-" + o + "px,0,0)" : m.index = Math.ceil(o / n.step);
                m.callback(m.index, n.totalWidth, n.viewWidth, o)
            }
        }

        function l(m, n) {
            n != false && (m.index = 0);
            b(m)
        }
        var f = function(n, o, p, q) {
            var m = this;
            m.container = n;
            m.list = o;
            m.index = 0;
            m.callback = p || i;
            m.length = o.childElementCount;
            j(m, n, q);
            b(m)
        };
        f.prototype = {
            constructor: f,
            reset: function(n) {
                var m = this;
                n != false && (m.index = 0, m.length = m.list.childElementCount);
                b(m, true)
            },
            jump: function(o) {
                var m = this,
                    n = m.list;
                m.index = Math.max(Math.min(o, m.length - 1), 0);
                n.style.webkitTransition = "-webkit-transform 0ms";
                b(m);
                setTimeout(function() {
                    n.style.webkitTransition = "";
                    h(d, "viewchange")
                }, 0)
            }
        };
        return f
    }(window)
})();
window.reportMap = {
    wx_android_noyyb_pagepv: [1, 638],
    wx_android_noyyb_ndclick: [0, 753],
    wx_android_noyyb_fdclick: [0, 646],
    wx_android_noyyb_nuclick: [0, 656],
    wx_android_noyyb_fuclick: [0, 2150],
    wx_android_noyyb_opclick: [0, 647],
    wx_android_noyyb_poppv: [1, 2156],
    wx_android_noyyb_popndclick: [0, 2157],
    wx_android_noyyb_popfdclick: [0, 2158],
    wx_android_noyyb_couponclick: [0, 2176],
    wx_android_noyyb_giftclick: [0, 2177],
    wx_android_noyyb_giftmoreclick: [0, 2178],
    wx_android_noyyb_commentmoreclick: [0, 2179],
    wx_android_yyb_pagepv: [1, 639],
    wx_android_yyb_fdclick: [0, 648],
    wx_android_yyb_fuclick: [0, 655],
    wx_android_yyb_opclick: [0, 649],
    wx_android_yyb_couponclick: [0, 2181],
    wx_android_yyb_giftclick: [0, 2182],
    wx_android_yyb_giftmoreclick: [0, 2183],
    wx_android_yyb_commentmoreclick: [0, 2184],
    wx_ios_pagepv: [1, 644],
    wx_android_noyyb_hasapp_popsoclick: [0, 863],
    wx_android_noyyb_hasapp_popnoclick: [0, 857],
    wx_android_noyyb_hasapp_popnopv: [1, 864],
    wx_android_yyb_hasapp_pagepv: [1, 865],
    wx_android_noyyb_hasapp_pagepv: [1, 866],
    wx_android_noyyb_hasapp_soclick: [0, 858],
    wx_android_downyyb_cancelclick: [0, 854],
    wx_android_downyyb_beginclick: [0, 855],
    wx_android_downyyb_removeclick: [0, 856],
    wx_android_downyyb_fail: [0, 859],
    wx_android_downyyb_finish: [0, 860],
    wx_android_yyb_installing: [0, 861],
    wx_android_yyb_finish_install: [0, 862],
    mqq_android_noyyb_pagepv: [1, 744],
    mqq_android_noyyb_ndclick: [0, 754],
    mqq_android_noyyb_fdclick: [0, 745],
    mqq_android_noyyb_nuclick: [0, 747],
    mqq_android_noyyb_fuclick: [0, 2151],
    mqq_android_noyyb_opclick: [0, 746],
    mqq_android_noyyb_poppv: [1, 2159],
    mqq_android_noyyb_popndclick: [0, 2160],
    mqq_android_noyyb_popfdclick: [0, 2161],
    mqq_android_noyyb_couponclick: [0, 2186],
    mqq_android_noyyb_giftclick: [0, 2187],
    mqq_android_noyyb_giftmoreclick: [0, 2188],
    mqq_android_noyyb_commentmoreclick: [0, 2189],
    mqq_android_yyb_pagepv: [1, 748],
    mqq_android_yyb_fdclick: [0, 749],
    mqq_android_yyb_fuclick: [0, 751],
    mqq_android_yyb_opclick: [0, 750],
    mqq_android_yyb_couponclick: [0, 2191],
    mqq_android_yyb_giftclick: [0, 2192],
    mqq_android_yyb_giftmoreclick: [0, 2193],
    mqq_android_yyb_commentmoreclick: [0, 2194],
    mqq_ios_pagepv: [1, 752],
    mqq_android_downyyb_beginclick: [0, 867],
    mqq_android_downyyb_finish: [0, 868],
    mqq_android_downyyb_fail: [0, 869],
    mqq_android_downyyb_removeclick: [0, 870],
    mqq_android_yyb_finish_install: [0, 871],
    mtt_android_noyyb_pagepv: [1, 640],
    mtt_android_noyyb_ndclick: [0, 650],
    mtt_android_noyyb_fdclick: [0, 2152],
    mtt_android_noyyb_nuclick: [0, 2153],
    mtt_android_noyyb_fuclick: [0, 658],
    mtt_android_noyyb_opclick: [0, 651],
    mtt_android_noyyb_poppv: [1, 2170],
    mtt_android_noyyb_popndclick: [0, 2171],
    mtt_android_noyyb_popfdclick: [0, 2172],
    mtt_android_noyyb_couponclick: [0, 2196],
    mtt_android_noyyb_giftclick: [0, 2197],
    mtt_android_noyyb_giftmoreclick: [0, 2198],
    mtt_android_noyyb_commentmoreclick: [0, 2199],
    mtt_android_yyb_pagepv: [1, 641],
    mtt_android_yyb_fdclick: [0, 652],
    mtt_android_yyb_fuclick: [0, 657],
    mtt_android_yyb_opclick: [0, 653],
    mtt_android_yyb_couponclick: [0, 2201],
    mtt_android_yyb_giftclick: [0, 2202],
    mtt_android_yyb_giftmoreclick: [0, 2203],
    mtt_android_yyb_commentmoreclick: [0, 2204],
    mtt_bannerpv: [1, 2167],
    mtt_banner_ndclick: [0, 2168],
    mtt_ios_pagepv: [1, 645],
    other_android_pagepv: [1, 642],
    other_android_ndclick: [0, 2154],
    other_android_fdclick: [0, 2155],
    other_android_poppv: [1, 2162],
    other_android_popndclick: [0, 2163],
    other_android_popfdclick: [0, 2164],
    other_android_couponclick: [0, 2206],
    other_android_giftclick: [0, 2207],
    other_android_giftmoreclick: [0, 2208],
    other_android_commentmoreclick: [0, 2209],
    other_ios_pagepv: [1, 643],
    other_pc_pagepv: [1, 654],
    other_bannerpv: [1, 2165],
    other_banner_ndclick: [0, 2166]
};

function _report(j, k, l) {
    var h, f, c, a = UI.getQuery("fromcase"),
        g = window.APPCONFIG.app;
    if (!c) {
        c = {};
        var b, i, d = location.pathname;
        !(b = d.lastIndexOf("index-2.html")) && (b = 0);
        b = d.lastIndexOf("index-2.html") + 1;
        (i = d.lastIndexOf(".")) <= b ? c.page = d.slice(b) : c.page = d.slice(b, i)
    }
    if (!a) {
        switch (window.templateId) {
            case 0:
                a = 50001;
                break;
            case 1:
                a = 50002;
                break;
            case 2:
                a = 50003;
                break;
            case 3:
                a = 50004;
                break;
            default:
                a = 50005
        }
    }
    f = {
        page: c.page,
        fromcase: a,
        type: j,
        id: k,
        appid: g.appId,
        apkid: g.apkId,
        channelId: g.appChannel || "",
        r: Math.random()
    };
    f = $.extend(f, l || {});
    h = "" + LC.BaseUrl + "/ajax/log/ActionLog?" + UI.serializeParam(f);
    $.get(h, function(m, n) {})
}
window.report = function(b, c) {
    var a = window.reportMap[b];
    a && _report(a[0], a[1], c);
    b.indexOf("try_again_wx") > -1 && reportCodeForSecondDown(a[1])
};

function reportCallYYBResult(a) {
    if (window.hasReportCallYYB) {
        return
    }
    window.hasReportCallYYB = true;
    if (Math.random() > 0.1) {
        return
    }
    var a = false;
    JsBridge.onPause = function() {
        a = true
    };
    setTimeout(function() {
        reportIsSuccessCallYYB(a);
        !a && BJ_REPORT.reportWithOutInit({
            id: 19,
            msg: ua.browser.version + " call yyb error: " + window.navigator.userAgent,
            url: "http://badjs.3g.qq.com/badjs"
        })
    }, 5000)
}

function reportIsSuccessCallYYB(f) {
    var g = (f ? 1 : 2) + ua.browser.version.split(".").join("").substr(0, 4),
        b = {
            appid: "1000436",
            commandid: "callyyb",
            resultcode: g,
            tmcost: 0,
            frequency: 1,
            reqsize: 0,
            rspsize: 0,
            stime: Date.now()
        },
        c = [];
    for (var d in b) {
        c.push(d + "=" + encodeURIComponent(b[d]))
    }
    var h = "http://wspeed.qq.com/w.cgi?" + c.join("&"),
        a = new Image();
    a.onload = a.onerror = function() {
        a.onload = a.onerror = null
    };
    setTimeout(function() {
        a.src = h
    }, 0)
}

function reportCodeForDownFailInWX(a) {
    var b = window.reportScene || "normal",
        c = ua.browser.version,
        d = window.APPCONFIG.appbao.appbaoUrlgtk.indexOf("https") > -1 ? "https" : "http",
        f = "http://yybcpstatreport.3g.qq.com/microDownFailCodeReport?code=" + a + "&scene=" + b + "&downprotocol=" + d + "&version=" + c;
    ping(f)
}

function reportWxJsAPIErrMsg(a) {
    return;
    ping("http://yybcpstatreport.3g.qq.com/report?type=wxApiErr&code=" + a);
    a.indexOf("getInstallState") > -1 && ping("http://yybcpstatreport.3g.qq.com/report?type=getInstallState&code=" + ua.browser.version)
}

function reportCreateTaskFailMsg(a) {
    ping("http://yybcpstatreport.3g.qq.com/microDownTaskFailMsgReport?msg=" + a)
}

function reportBehaviourCode(a) {
    var b = {
        "31415_create_task_fail": [1, "createTaskRetry"],
        "31415_retry_begin_down": [2, "createTaskRetry"],
        "31415_retry_succ_down": [3, "createTaskRetry"],
        "31415_reload_fail_dialog": [4, "createTaskRetry"],
        "31415_reload_dialog_surebtn_click": [5, "createTaskRetry"],
        "31415_reload_dialog_cancelbtn_click": [6, "createTaskRetry"],
        "31415_reload_pv": [7, "createTaskRetry"],
        "31415_reload_still_create_task_fail": [8, "createTaskRetry"],
        "31415_reload_fast_downbtn_click": [9, "createTaskRetry"],
        "31415_reload_begin_down": [10, "createTaskRetry"],
        "31415_reload_cancel_down": [11, "createTaskRetry"],
        "31415_reload_remove_down": [12, "createTaskRetry"],
        "31415_reload_success_down": [13, "createTaskRetry"],
        "31415_reload_fail_downing": [14, "createTaskRetry"],
        try_again_wx_android_downyyb_dialog_pv: [872, "tryAgainDownFor802"],
        try_again_wx_android_downyyb_dialog_cancalbtn_click: [873, "tryAgainDownFor802"],
        try_again_wx_android_downyyb_dialog_downbtn_click: [874, "tryAgainDownFor802"],
        try_again_wx_android_downyyb_beginclick: [875, "tryAgainDownFor802"],
        try_again_wx_android_downyyb_removeclick: [876, "tryAgainDownFor802"],
        try_again_wx_android_downyyb_cancelclick: [877, "tryAgainDownFor802"],
        try_again_wx_android_downyyb_fail: [878, "tryAgainDownFor802"],
        try_again_wx_android_downyyb_finish: [879, "tryAgainDownFor802"]
    };
    if (!b[a]) {
        return
    }
    ping("http://yybcpstatreport.3g.qq.com/report?type=" + b[a][1] + "&code=" + b[a][0])
}

function reportTestDownYYB(d) {
    if (window.isReportTestDownYYB || location.href.indexOf("debug=1") > 0) {
        var a = {
                p0: "testDownYYB",
                p1: encodeURIComponent(encodeURIComponent(window.downYYBTextForWx)),
                p2: window.APPCONFIG.identityInfo.yybConfirmPageUseCpLogo ? "useCPLogo" : "useYYBLogo",
                p3: d
            },
            b = "http://yybcpstatreport.3g.qq.com/common_rpt?";
        for (var c in a) {
            b += c + "=" + a[c] + "&"
        }
        ping(b)
    }
}

function ping(b) {
    var a = new Image();
    a.onload = a.onerror = function() {
        a.onload = a.onerror = null
    };
    setTimeout(function() {
        a.src = b
    }, 0)
}(function(a) {
    !a.isFunction(a.noop) && (a.noop = function() {});
    var b = {
        attr: "data-url",
        container: a(window),
        callback: a.noop
    };
    a.fn.scrollLoading = function(h) {
        var c = a.extend({}, b, h || {});
        c.cache = [];
        a(this).each(function() {
            var i = this.nodeName.toLowerCase(),
                j = a(this).attr(c.attr),
                k = {
                    obj: a(this),
                    tag: i,
                    url: j
                };
            c.cache.push(k)
        });
        c.length = c.cache.length;
        var f = function(i) {
                a.isFunction(c.callback) && c.callback.call(i.get(0))
            },
            d = function() {
                var k = a(window),
                    l = k.scrollTop(),
                    o = k.height(),
                    p = k.width(),
                    i = l,
                    j = l + o;
                if (c.container.get(0) !== window) {
                    var m = c.container,
                        n = m.offset().top,
                        q = m.height();
                    i = Math.max(i, n);
                    j = Math.min(j, n + q)
                }
                a.each(c.cache, function(y, s) {
                    var r = s.obj,
                        x = s.tag,
                        u = s.url,
                        t, v, w;
                    r && (t = r.offset().top, v = t + r.height(), w = r.offset().left, (t >= i && t <= j || v >= i && v <= j) && w < p && (u ? x === "img" ? (f(r.attr("src", u)), r.removeClass("lazyload")) : r.load(u, {}, function() {
                        f(r)
                    }) : f(r), s.obj = null, c.length = c.length - 1, !c.length && (c.container.unbind("scroll", d), d = null)))
                })
            };
        if (c.container.get(0) !== window) {
            var g = function() {
                var j = a(window),
                    k = j.scrollTop(),
                    p = j.height(),
                    l = k,
                    m = k + p,
                    n = c.container,
                    i = n.offset().top,
                    o = i + n.height();
                (i >= l && i <= m || o >= l && o <= m) && (d && d(), a(window).unbind("scroll", g), g = null)
            };
            a(window).bind("scroll", g)
        }
        c.container.bind("scroll", d);
        d()
    }
})($);

function initImgSlide(b) {
    var a = $(b.imgBoxSelector),
        c = a.find(b.imgScrollBarSelector),
        d = a.children("ul");
    new UI.Slide(a[0], d[0], function(k, h, f, i) {
        var j = Math.floor(f * 100 / h) + "%",
            g = "translate3d(" + Math.round(i * 100 / f) + "%,0,0)";
        c.css({
            width: j,
            transform: g,
            "-webkit-transform": g
        });
        a.find(".lazyload").length && setTimeout(function() {
            a.find(".lazyload").scrollLoading({})
        }, 800)
    }, true)
}
var isdPageNumber = window.isDownBase ? 3 : 4;
try {
    window.g_isd = new ISDR.RPT({
        f1: 7721,
        f2: 202,
        f3: isdPageNumber,
        usePerformance: true
    });
    g_isd.set(0, gTimeStamps[0]);
    g_isd.set(20, gTimeStamps[1]);
    g_isd.set(21, gTimeStamps[2]);
    g_isd.set(22, gTimeStamps[3]);
    g_isd.set(23, gTimeStamps[4])
} catch (e) {}

function downloadFun() {
    (function(h, n, D, o) {
        if (!n) {
            return
        }
        var j, g, i;
        window.ua = {};
        window.mobileInfo = {};
        window.AppbaoBaseVersion = 1050125;
        window.AppbaoManufactureUnBlockVersion = 7041130;
        window.AppbaoBaseVersionName = "4.0";
        var k = {
            obj: null,
            state: ""
        };
        window.updateDownBtn = function(S, T, U, V) {
            o.updateDownBtn(S, T, U, V);
            ua.browser.qqbrowser && h("#btn-fast-download .flag-recommend").hide()
        };
        var l = o.appbaoBanner,
            p = o.normalDialog;
        window.normalOpenDialog = o.normalOpenDialog;
        var f, A = {};
        window.JsBridgecount = 0;
        window.fastClickTrigger = false;
        window.via = "";
        var m = h.fn.cookie("scenevia") || UI.getQuery("scenevia").toUpperCase(),
            q = h.fn.cookie("skip");
        h.fn.cookie("scenevia", null, {
            path: "/",
            domain: location.host.indexOf("app.qq.com") > -1 ? "app.qq.com" : "3g.qq.com"
        });
        h.fn.cookie("skip", null, {
            path: "/",
            domain: location.host.indexOf("app.qq.com") > -1 ? "app.qq.com" : "3g.qq.com"
        });
        ua = UI.detectua(navigator.userAgent);
        f = UI.compareVersion;
        j = n.appbao;
        j.appbaoUrlgtk = j.appbaoUrl;
        g = n.app;
        i = n.identityInfo;
        window.installState = {
            app: null,
            appbao: null
        };
        window.appIsYYB = window.APPCONFIG.app.packageName == "com.tencent.android.qqdownloader";
        window.isForInnerSoft = UI.getQuery("forinnersoft") == 1 && parseInt(UI.getQuery("sngappid"), 10) > 0 && window.AppInfoData.isInnerSoft == 1;
        window.isForKingCard = UI.getQuery("fromcase") == 20001;
        window.isReload = UI.getQuery("isreload");
        window.downYYBTextForWx = (i.yybConfirmPageText || "您需要先安装官方安全下载器（应用宝）").replace("{appName}", g.appName);
        window.downYYBLogoForWx = i.yybConfirmPageUseCpLogo ? window.AppInfoData.appDetail.iconUrl.replace(/96$/, "") : i.yybLogo;
        window.isReportTestDownYYB = Math.random() < 0.1 ? true : false;
        window.oneLog = function(S, T) {
            if (A[T]) {
                return
            }
            S && S();
            A[T] = true
        };
        window.debug = function() {
            window.debugEnabled = window.debugEnabled || UI.getQuery("debug");
            window.debugEnabled && console.log.apply(console, arguments)
        };

        function r() {
            if (i.hideYYBBanner || g.packageName == "com.tencent.wework") {
                return
            }
            if (!h("#appbao-download-banner").length || !l) {
                return
            }
            if (!l.hasInit) {
                l && l.init();
                var S = h("#appbao-download-banner .btn-close"),
                    T = h("#appbao-download-banner .btn-appbao-download");
                T.bind(UI.EVENTS.touchstart, function(W) {
                    var X, V, U = h(W.target);
                    V = U.hasClass("btn-unactive");
                    oneLog(function() {
                        var Y = "";
                        ua.browser.qqbrowser ? Y = "mtt_banner_ndclick" : Y = "other_banner_ndclick";
                        report(Y)
                    }, "act_baobannerdown");
                    !V && (U.addClass("btn-unactive"), setTimeout(function() {
                        U.removeClass("btn-unactive")
                    }, 500), setTimeout(function() {
                        var Y = u("sourcecheck");
                        Y && (location.href = Y)
                    }, 0))
                });
                S.bind("click", function(U) {
                    l && l.hide()
                })
            }
            oneLog(function() {
                var U = "";
                ua.browser.qqbrowser ? U = "mtt_bannerpv" : U = "other_bannerpv";
                report(U)
            }, "act_baobannerpv");
            l.hasInit = true;
            l && l.show()
        }
        window.tryCallAppbao = function(S) {
            var T = h("#callAppbao-bridge");
            if (!S) {
                return
            }
            T.length > 0 ? (T.remove(), tryCallAppbao(S)) : (ua.browser.wechat && reportCallYYBResult(), Q(), S += "&outerCallTime=" + Date.now() + "&outerCallType=1&outerCallMode=1", JsBridge.callWithScheme(S))
        };
        window.tryCallScheme = function(V, S, T) {
            var W = Date.now(),
                U;
            tryCallAppbao(V);
            setTimeout(function() {
                U = Date.now() - W;
                U > 1000 ? S && S() : T && T()
            }, 800)
        };
        window.checkState = function(S) {
            var T = [g.packageName, j.appbaoPkg];
            window.JsBridge && window.JsBridge.getAppInstalledVersion ? window.JsBridge.getAppInstalledVersion(T, function(U) {
                installState.app = U[g.packageName] || null;
                installState.appbao = U[j.appbaoPkg] || null;
                S && S();
                debug("[common1.js] checkState JsBridge" + JSON.stringify(installState))
            }) : ua.browser.qqbrowser && ua.browser.version && f(ua.browser.version, "5.0") >= 0 ? s(T, function(U) {
                installState.app = U[g.packageName] || null;
                installState.appbao = U[j.appbaoPkg] || null;
                S && S();
                debug("[common1.js] checkState qqbrowser" + JSON.stringify(installState))
            }) : S && S()
        };

        function t(V, W, X) {
            var S, U = window.AppInfoData.giftInfo;
            if (X && !W && !UI.getQuery("ckey") && !(i.isSpecialPhoneBrand && f(installState.appbao, AppbaoManufactureUnBlockVersion) < 0) && (ua.browser.wechat || ua.browser.mqq || ua.browser.qqbrowser) && U && U.giftList.length) {
                S = U.giftList[window.currentGiftClickIndex || 0].actionUrl.url;
                S.indexOf("via=") == -1 && (S += "&via=ANDROIDWXZ.YYB.YH");
                S += "&hostpname=" + (ua.browser.pname || "") + "&hostversion=" + (ua.browser.pversioncode || "");
                return S
            }
            var T = {
                r: Math.random(),
                pname: g.packageName,
                oplist: V ? "0" : "1;2",
                via: window.via || "",
                downl_biz_id: j.g_f || ""
            };
            g.appChannel ? T.channelid = g.appChannel : "";
            g.appId ? T.appid = g.appId : "";
            (ua.browser.wechat || ua.browser.mqq || ua.browser.qqbrowser) && (T.hostpname = ua.browser.pname || "", T.hostversioncode = ua.browser.pversioncode || "", T.hostversion = ua.browser.pversioncode || "");
            S = "tmast://appdetails?" + UI.serializeParam(T);
            return S
        }
        window.getAppDownUrl = function(T, W, X) {
            var S = "",
                U = {
                    r: Math.random()
                };
            T = h.trim(T || "").toLowerCase();
            if (T == "tmast") {
                S = t(W, undefined, X)
            } else if (T == "ios") {
                S = g.iosUrl
            } else {
                if (AppInfoData && AppInfoData.appDetail && AppInfoData.appDetail.apkUrl) {
                    var V = AppInfoData.appDetail.apkUrl,
                        Y = m ? (V.indexOf("?") < 0 ? "?" : "&") + "via=" + m : "";
                    S = V + Y
                }!S && (g.appChannel ? U.channel = g.appChannel : "", j.g_f ? U.g_f = j.g_f : "", U.g_tk = n.g_tk, S = "http://" + location.host + D.BaseUrl + "/md-down/" + g.packageName + "?" + UI.serializeParam(U))
            }
            return S
        };

        function u(T, U) {
            var S = "",
                V = UI.getQuery("miscchannelid"),
                W = UI.getQuery("g_f") || j.g_f,
                X = "http://saweb.3g.qq.com/sourceCheckUrl/getSourceCheckUrl?data=" + encodeURIComponent(t(U, true));
            T == "mawebdownload" ? S = "http://maweb.3g.qq.com/cgi-bin/download?data=" + encodeURIComponent(t(U, true)) : T == "sourcecheck" && V ? S = X + "&channel=" + V + "&fromcase=1" : T == "sourcecheck" && W ? S = X + "&channel=" + W : S = j.appbaoUrlgtk;
            return S
        }

        function E() {
            g_isd.set(31);
            g_isd.send();
            var S, T = h("#btn-fast-download");
            updateDownBtn("iosdown");
            h("#btn-fast-download").unbind(UI.EVENTS.touchstart).bind(UI.EVENTS.touchstart, function(U) {
                g.iosUrl ? location.href = g.iosUrl : alert("\n抱歉，当前没有检测到iOS版本\n您可以尝试前往AppStore搜索查看")
            });
            if (window.isDownBase) {
                (!g.iosUrl || i.showTips == 1) && i.gameFloatingWindowInfo && h(document.body).append('<div class="top-tips">' + i.gameFloatingWindowInfo + "</div>");
                if (!g.iosUrl) {
                    h("#btn-fast-download").removeClass("is-b-blue").addClass("is-disable");
                    return
                }
                if (i.showTips == 1) {
                    return
                }
            } else if (!g.iosUrl) {
                return
            }
            location.href = g.iosUrl
        }

        function v() {
            setTimeout(function() {
                window.via = window.via.replace(".NEWYYB.", ".YYB.");
                tryCallScheme(getAppDownUrl("tmast"), function() {}, function() {
                    window.via = window.via.replace(".YYB.", ".NEWYYB.");
                    var S = u("sourcecheck");
                    S && (location.href = S)
                })
            }, 0)
        }

        function w() {
            g_isd.set(30);
            g_isd.send();
            var S = h("#btn-fast-download");
            updateDownBtn("down");
            window.via = "ANDROIDWXZ.YYB." + (m ? m : "OTHERBROWSER");
            var T = function() {
                var U = !window.fastClickTrigger;
                window.fastClickTrigger = false;
                U && oneLog(function() {
                    var V = "";
                    ua.os.android && (V = "other_android_fdclick");
                    report(V)
                }, "act_fastdownload")
            };
            q && tryCallAppbao(getAppDownUrl("tmast"));
            UI.pageVisibility.isPageVisibilitySupport ? S.unbind(UI.EVENTS.touchstart).bind(UI.EVENTS.touchstart, function(W) {
                var U, X, V;
                V = h(W.target);
                if (V.hasClass("btn-unactive")) {
                    return
                }
                T();
                updateDownBtn("loading");
                U = new Date();
                X = setTimeout(function() {
                    var Y, Z, ab;
                    ab = h("#btn-fast-download");
                    Y = new Date();
                    if (parseInt(Y.getTime(), 10) - parseInt(U.getTime(), 10) < 3000) {
                        Z = UI.pageVisibility.isHidden();
                        if (!Z) {
                            window.via = window.via.replace(".YYB.", ".NEWYYB.");
                            var aa = u("sourcecheck");
                            aa && (location.href = aa)
                        }
                    }
                    updateDownBtn("down")
                }, 2000);
                window.via = window.via.replace(".NEWYYB.", ".YYB.");
                tryCallAppbao(getAppDownUrl("tmast"))
            }) : S.unbind(UI.EVENTS.touchstart).bind(UI.EVENTS.touchstart, function(U) {
                T();
                v()
            });
            r()
        }

        function F() {
            var S, T = false;
            try {
                S = window.browser && window.browser.app ? window.browser.app : null;
                S && S.getApkInfo && S.runApk && (T = true)
            } catch (U) {
                T = false
            }
            return T
        }

        function s(S, U) {
            var V, W = {},
                Z = S.length,
                X = [];
            for (var T = 0, Y = S.length; T < Y; T++) {
                V = S[T];
                browser && browser.app && browser.app.getApkInfo(function(ab) {
                    var aa = JSON.parse(ab || "{}");
                    typeof aa == "string" && (aa = JSON.parse(aa || "{}"));
                    W[aa.packagename] = aa.versioncode;
                    X.push(aa.packagename);
                    X.length >= S.length && U && U(W)
                }, V) || null
            }
        }

        function G() {
            var S, T;
            S = h("#btn-fast-download");
            T = function(V) {
                checkState(function() {
                    var X, Y = false,
                        W = !window.fastClickTrigger;
                    window.fastClickTrigger = false;
                    if (installState.app) {
                        if (f(installState.app, g.versionCode) >= 0 || i.noNeedUpdate == 1 || window.isForKingCard) {
                            W && oneLog(function() {
                                report(installState.appbao ? "mtt_android_yyb_opclick" : "mtt_android_noyyb_opclick")
                            }, "act_fastdownload");
                            X = "open";
                            var Z = a();
                            Z ? location.href = Z : browser.app.runApk(g.packageName)
                        } else {
                            X = "update";
                            installState.appbao && f(installState.appbao, AppbaoBaseVersion) > 0 ? (Y = true, W && oneLog(function() {
                                report("mtt_android_yyb_fuclick")
                            }, "act_fastdownload"), f(installState.appbao, AppbaoManufactureUnBlockVersion) < 0 && i.isSpecialPhoneBrand ? setTimeout(function() {
                                location.href = getAppDownUrl()
                            }, 500) : tryCallAppbao(getAppDownUrl("tmast"))) : (W && oneLog(function() {
                                report("mtt_android_noyyb_fuclick")
                            }, "act_fastdownload"), v())
                        }
                    } else {
                        X = "down";
                        installState.appbao && f(installState.appbao, AppbaoBaseVersion) > 0 ? (Y = true, W && oneLog(function() {
                            report("mtt_android_yyb_fdclick")
                        }, "act_fastdownload"), f(installState.appbao, AppbaoManufactureUnBlockVersion) < 0 && i.isSpecialPhoneBrand ? setTimeout(function() {
                            location.href = getAppDownUrl()
                        }, 500) : tryCallAppbao(getAppDownUrl("tmast"))) : (W && oneLog(function() {
                            report("mtt_android_noyyb_fdclick")
                        }, "act_fastdownload"), v())
                    }
                    updateDownBtn(X, Y, undefined, installState.appbao)
                })
            };
            try {
                checkState(function() {
                    g_isd.set(29);
                    g_isd.send();
                    var V, W = false;
                    window.via = "ANDROIDWXZ." + (installState.appbao && f(installState.appbao, AppbaoBaseVersion) > 0 ? "YYB." : "NEWYYB.") + (m ? m : "QQBROWSER");
                    oneLog(function() {
                        report(installState.appbao && f(installState.appbao, AppbaoBaseVersion) > 0 ? "mtt_android_yyb_pagepv" : "mtt_android_noyyb_pagepv")
                    }, "pagepv");
                    q && installState.appbao && !installState.app && tryCallAppbao(getAppDownUrl("tmast"));
                    installState.app ? f(installState.app, g.versionCode) >= 0 || i.noNeedUpdate == 1 || window.isForKingCard ? V = "open" : V = "update" : V = "down";
                    !(installState.appbao && f(installState.appbao, AppbaoBaseVersion) > 0) ? r(): W = true;
                    updateDownBtn(V, W, undefined, installState.appbao);
                    h("body").delegate("#btn-fast-download", UI.EVENTS.touchstart, T);
                    if (V == "open" && location.hash.indexOf("opened") < 0) {
                        location.replace(location.href + (location.href.indexOf("#") > -1 ? "&" : "#") + "opened");
                        var X = a();
                        X ? JsBridge.callWithScheme(X) : (window.fastClickTrigger = true, S.trigger(UI.EVENTS.touchstartEv()))
                    }
                })
            } catch (U) {
                w()
            }
        }

        function H() {
            var S = function(T) {
                C(function(U) {
                    if (U) {
                        return
                    }
                    z = false;
                    checkState(function() {
                        T ? (B(T), ua.browser.wechat ? g_isd.set(27) : g_isd.set(28), g_isd.send(), oneLog(function() {
                            var V = installState.appbao && f(installState.appbao, AppbaoBaseVersion) > 0;
                            (ua.browser.wechat || ua.browser.mqq) && report("" + (ua.browser.wechat ? "wx_" : "mqq_") + (V ? "android_yyb_pagepv" : "android_noyyb_pagepv"));
                            ua.browser.wechat && installState.app && f(installState.app, g.versionCode) >= 0 && report(V ? "wx_android_yyb_hasapp_pagepv" : "wx_android_noyyb_hasapp_pagepv");
                            window.isReload && (reportBehaviourCode("31415_reload_pv"), window.reportScene = "reloadFor31415", setTimeout(function() {
                                h("#btn-fast-download").trigger(UI.EVENTS.touchstart);
                                window.isDownBase ? h("#reloadDialog").hide() : h("#reloadDialog").addClass("invisible")
                            }, 500))
                        }, "pagepv"), window.via = "ANDROIDWXZ." + (installState.appbao && f(installState.appbao, AppbaoBaseVersion) > 0 ? "YYB." : "NEWYYB.") + (m ? m : ua.browser.wechat ? "WX" : "QQ"), q && installState.appbao && !installState.app && tryCallAppbao(getAppDownUrl("tmast"))) : B(false)
                    })
                })
            };
            K(S);
            S(true)
        }
        var I = false;

        function x() {
            if (ua.browser.mqq && ua.browser.version && f(ua.browser.version, "4.6") >= 0) {
                var S = getAppDownUrl("tmast");
                try {
                    JsBridge._call("q_download/setDownloaderFirstOpenPage", {
                        url: S
                    });
                    I = true
                } catch (T) {}
            }
        }

        function y() {
            window.downYYBTimes ? window.downYYBTimes++ : window.downYYBTimes = 0;
            k.obj = new JsBridge.Download({
                sngAppId: parseInt(1101070898, 10),
                hnAppId: "5848",
                versionCode: "",
                url: j.appbaoUrlgtk,
                packageName: j.appbaoPkg,
                alias: j.appbaoName,
                md5: j.appbaoMd5,
                title: window.isForKingCard ? "您需要先安装大王卡免流商店（应用宝）" : window.downYYBTextForWx,
                thumbUrl: window.downYYBLogoForWx
            }, function(S, U, V, T) {
                debug("[common1.js] download callback args: " + JSON.stringify(T));
                debug("[common1.js] YYB JsBridge.Download callback");
                debug("[common1.js] YYB JsBridge.Download window.JsBridgecount: " + window.JsBridgecount);
                k.state = S;
                window.JsBridgecount == 0 && (window.JsBridgecount = 1);
                if (window.JsBridgecount <= 1) {
                    return
                }
                switch (S) {
                    case JsBridge.Download.STATE_DOWNLOADED:
                        window.isDownloadingYYB = false;
                        updateDownBtn(installState.app ? "update" : "down", undefined, undefined, installState.appbao);
                        ua.browser.mqq && ua.browser.version && f(ua.browser.version, "4.6") >= 0 ? (x(), setTimeout(function() {
                            k.obj.install()
                        }, 500)) : k.obj.install();
                        break;
                    case JsBridge.Download.STATE_INSTALLING:
                    case JsBridge.Download.STATE_DOWNLOADING:
                        window.isDownloadingYYB = true;
                        updateDownBtn("loading", false, U, installState.appbao);
                        break;
                    case JsBridge.Download.STATE_INSTALLED:
                        window.isDownloadingYYB = false;
                        checkState(function() {
                            ua.browser.mqq && ua.browser.version && f(ua.browser.version, "4.6") >= 0 ? tryCallAppbao(getAppDownUrl("tmast")) : JsBridge.callWithScheme(getAppDownUrl("tmast"));
                            updateDownBtn(installState.app ? "update" : "down", true, undefined, installState.appbao)
                        });
                        break;
                    case JsBridge.Download.STATE_FAILED_OF_SDCARD:
                        alert("下载失败，请关闭USB数据存储或者插入SD卡或者将手机与电脑断开连接。");
                    case JsBridge.Download.STATE_REMOVED:
                    case JsBridge.Download.STATE_CANCAL:
                    case JsBridge.Download.STATE_FAILED:
                    case JsBridge.Download.STATE_READY:
                    case JsBridge.Download.STATE_PAUSED:
                    default:
                        window.isDownloadingYYB = false;
                        updateDownBtn(installState.app ? "update" : "down", undefined, undefined, installState.appbao)
                }
                M(S, T);
                S == JsBridge.Download.STATE_FAILED && T.errCode == -31415 && O()
            })
        }
        var R = true,
            z = false;

        function B(V) {
            var S, T = false,
                W, U = h("#btn-fast-download");
            installState.app && (f(installState.app, g.versionCode) >= 0 || i.noNeedUpdate == 1 || window.isForKingCard) ? ua.browser.wechat ? !installState.appbao && i.isOpenAppDownYYB == 1 && !window.isForKingCard ? (S = "openwithoutyyb", T = false, window.justNotInstallyybForOpen = true) : (S = "open", T = true, window.nowInstallyybForOpen = true) : S = "open" : installState.appbao && f(installState.appbao, AppbaoBaseVersion) > 0 ? (S = installState.app ? "update" : "down", T = true, window.nowInstallyybForJumpyyb = true) : (S = installState.app ? "update" : "down", window.nowInstallyybForJumpyyb = false, window.justNotInstallyybForJumpyyb = true);
            !k.obj && y();
            W = function(ab, aa) {
                debug("[common1.js] jsbridge_bind fn start");
                var X = !window.fastClickTrigger;
                window.fastClickTrigger = false;
                if (installState.app && (f(installState.app, g.versionCode) >= 0 || i.noNeedUpdate == 1 || window.isForKingCard) && (!ua.browser.wechat || installState.appbao || i.isOpenAppDownYYB == 0 || window.isForKingCard)) {
                    X && oneLog(function() {
                        var ac = "";
                        ua.browser.wechat ? ac = installState.appbao && f(installState.appbao, AppbaoBaseVersion) > 0 ? "wx_android_yyb_opclick" : "wx_android_noyyb_opclick" : ua.browser.mqq && (ac = installState.appbao && f(installState.appbao, AppbaoBaseVersion) > 0 ? "mqq_android_yyb_opclick" : "mqq_android_noyyb_opclick");
                        report(ac)
                    }, "act_fastdownload");
                    var Z = a();
                    Z ? JsBridge.callWithScheme(Z) : JsBridge.startApp(g.packageName, g.sigMd5)
                } else if (installState.appbao && f(installState.appbao, AppbaoBaseVersion) > 0) {
                    X && oneLog(function() {
                        var ac = "";
                        ua.browser.wechat ? ac = installState.app ? "wx_android_yyb_fuclick" : "wx_android_yyb_fdclick" : ua.browser.mqq && (ac = installState.app ? "mqq_android_yyb_fuclick" : "mqq_android_yyb_fdclick");
                        report(ac)
                    }, "act_fastdownload");
                    f(installState.appbao, AppbaoManufactureUnBlockVersion) < 0 && i.isSpecialPhoneBrand ? location.href = getAppDownUrl() : tryCallAppbao(getAppDownUrl("tmast", undefined, aa))
                } else {
                    debug("[common1.js] jsbridge_bind fn before wx_writeBaoDate");
                    if (ua.browser.wechat && !z) {
                        z = true;
                        var Y = "";
                        installState.app && f(installState.app, g.versionCode) >= 0 ? Y = getAppDownUrl("tmast", true) : Y = getAppDownUrl("tmast");
                        J({
                            starttime: (new Date()).getTime(),
                            endtime: (new Date()).getTime() + 1000 * 60 * 30,
                            jumpUrl: Y,
                            baoPkgName: j.appbaoPkg
                        })
                    }
                    x();
                    X && oneLog(function() {
                        if (ua.browser.wechat && !(installState.appbao && f(installState.appbao, AppbaoBaseVersion) > 0) && installState.app && f(installState.app, g.versionCode) >= 0) {
                            report("wx_android_noyyb_hasapp_soclick")
                        } else {
                            var ac = "";
                            ua.browser.wechat ? (ac = installState.app ? "wx_android_noyyb_fuclick" : "wx_android_noyyb_fdclick", window.isReload && reportBehaviourCode("31415_reload_fast_downbtn_click")) : ua.browser.mqq && (ac = installState.app ? "mqq_android_noyyb_fuclick" : "mqq_android_noyyb_fdclick");
                            report(ac)
                        }
                    }, "act_fastdownload");
                    debug("[common1.js] jsbridge_bind fn before window.JsBridgecount judge");
                    if (window.JsBridgecount < 1) {
                        return
                    }
                    window.JsBridgecount++;
                    debug("[common1.js] jsbridge_bind fn jsBridgeloader.state: " + k.state);
                    ua.browser.wechat && !installState.appbao && (!installState.app || f(installState.app, g.versionCode) < 0) && reportTestDownYYB("downYYBBtnClick");
                    switch (k.state) {
                        case JsBridge.Download.STATE_INSTALLING:
                        case JsBridge.Download.STATE_DOWNLOADING:
                            break;
                        case JsBridge.Download.STATE_DOWNLOADED:
                            ua.browser.mqq && ua.browser.version && f(ua.browser.version, "4.6") >= 0 ? (x(), setTimeout(function() {
                                k.obj.install()
                            }, 500)) : k.obj.install();
                            break;
                        case JsBridge.Download.STATE_INSTALLED:
                            checkState(function() {
                                ua.browser.mqq && ua.browser.version && f(ua.browser.version, "4.6") >= 0 ? tryCallAppbao(getAppDownUrl("tmast")) : JsBridge.callWithScheme(getAppDownUrl("tmast"));
                                updateDownBtn(installState.app ? "update" : "down", true, undefined, installState.appbao)
                            });
                            break;
                        case JsBridge.Download.STATE_FAILED_OF_SDCARD:
                        case JsBridge.Download.STATE_FAILED:
                        case JsBridge.Download.STATE_PAUSED:
                        case JsBridge.Download.STATE_READY:
                        case JsBridge.Download.STATE_REMOVED:
                        case JsBridge.Download.STATE_CANCAL:
                            k.obj.start();
                            break
                    }
                }
            };
            updateDownBtn(window.isDownloadingYYB ? "loading" : S, T, undefined, installState.appbao);
            debug("[common1.js] jsbridge_bind before $btn.bind");
            U.unbind(UI.EVENTS.touchstart).bind(UI.EVENTS.touchstart, W);
            debug("[common1.js] jsbridge_bind after $btn.bind");
            ua.browser.wechat ? ((V && S == "open" && location.hash.indexOf("opened") < 0 || window.justNotInstallyybForOpen && window.nowInstallyybForOpen) && (window.justNotInstallyybForOpen = false, window.nowInstallyybForOpen = false, location.replace(location.href + (location.href.indexOf("#") > -1 ? "&" : "#") + "opened"), window.fastClickTrigger = true, U.trigger(UI.EVENTS.touchstartEv())), window.justNotInstallyybForJumpyyb && window.nowInstallyybForJumpyyb && (window.justNotInstallyybForJumpyyb = false, window.nowInstallyybForJumpyyb = false, window.fastClickTrigger = true, !(f(installState.appbao, AppbaoManufactureUnBlockVersion) < 0 && i.isSpecialPhoneBrand) && U.trigger(UI.EVENTS.touchstartEv()))) : V && S == "open" && location.hash.indexOf("opened") < 0 && (location.replace(location.href + (location.href.indexOf("#") > -1 ? "&" : "#") + "opened"), window.fastClickTrigger = true, U.trigger(UI.EVENTS.touchstartEv()))
        }

        function J(S) {
            var T = {
                starttime: S.starttime,
                endtime: S.endtime,
                url: S.jumpUrl
            };
            WeixinJSBridge && WeixinJSBridge.invoke("writeCommData", {
                packageName: S.baoPkgName,
                data: JSON.stringify(T)
            }, function(U) {
                S.callback && S.callback(U)
            })
        }

        function K(S) {
            ua.browser.mqq && ua.browser.version && f(ua.browser.version, "4.6") >= 0 ? f(ua.browser.version, "4.7") >= 0 ? document.addEventListener("qbrowserVisibilityChange", function(T) {
                !(T.hidden) && S && S()
            }) : UI.pageVisibility.isPageVisibilitySupport && UI.pageVisibility.visibilitychange(function() {
                !(UI.pageVisibility.isHidden) && S && S()
            }) : S && window.JsBridge && (window.JsBridge.onResume = S)
        }

        function C(S) {
            var T = h.extend([], g.relatedPkgList || []);
            if (T.length <= 0) {
                S && S(false);
                return
            }
            var W = {
                    packageName: g.packageName
                },
                U = [];
            U.push(W.packageName);
            for (var V = 0, Y = T.length; V < Y; V++) {
                U.push(T[V].packageName)
            }
            var X = function(ab) {
                    var ac = false;
                    if (ab[W.packageName]) {
                        S && S(false);
                        return
                    }
                    for (var aa = 0, ad = T.length; aa < ad; aa++) {
                        T[aa].isInstalled = !!ab[T[aa].packageName];
                        T[aa].isInstalled && (ac = true)
                    }
                    ac ? (Z(), location.hash.indexOf("opened") < 0 && (location.replace(location.href + (location.href.indexOf("#") > -1 ? "&" : "#") + "opened"), window.fastClickTrigger = true, h("#btn-fast-download").trigger(UI.EVENTS.touchstartEv())), S && S(true)) : S && S(false)
                },
                Z = function() {
                    updateDownBtn("open", true, undefined, installState.appbao);
                    h("#btn-fast-download").unbind(UI.EVENTS.touchstart).bind(UI.EVENTS.touchstart, function() {
                        var aa;
                        for (var ab = 0, ad = T.length; ab < ad; ab++) {
                            if (T[ab].isInstalled) {
                                aa = T[ab];
                                break
                            }
                        }
                        if (!aa) {
                            return
                        }
                        var ac = a();
                        window.JsBridge && window.JsBridge.getAppInstalledVersion ? ac ? location.href = ac : JsBridge.startApp(aa.packageName, [aa.signMd5]) : ua.browser.qqbrowser && ua.browser.version && f(ua.browser.version, "5.0") >= 0 && (ac ? location.href = ac : browser.app.runApk(aa.packageName))
                    })
                };
            window.JsBridge && window.JsBridge.getAppInstalledVersion ? window.JsBridge.getAppInstalledVersion(U, function(aa) {
                X(aa)
            }) : ua.browser.qqbrowser && ua.browser.version && f(ua.browser.version, "5.0") >= 0 ? s(U, function(aa) {
                X(aa)
            }) : S && S(false)
        }

        function L() {
            g_isd.set(24);
            window.JsBridge && JsBridge.onReady(function() {
                try {
                    var T = window.AppInfoData.appDetail;
                    JsBridge.setShareInfo({
                        iconUrl: T.iconUrl,
                        jumpUrl: location.href,
                        title: T.appName,
                        summary: T.description.slice(0, 100)
                    })
                } catch (U) {
                    window.BJ_REPORT && window.BJ_REPORT.report(U);
                    try {
                        window.BJ_REPORT && window.BJ_REPORT.report("slice error:" + JSON.stringify(T))
                    } catch (U) {}
                }
            });
            if (window.isReload) {
                var S = h("#reloadDialog");
                window.isDownBase ? S.show() : S.removeClass("invisible");
                S.find(".tips").text("小宝正在努力帮你连接中……");
                setTimeout(function() {
                    window.isDownBase ? S.hide() : S.addClass("invisible")
                }, 4000)
            }
            h("body").delegate("#btn-normal-download", "click", function() {
                if (h("#btn-normal-download").hasClass("normal-open")) {
                    c();
                    return
                }
                if (h("#btn-normal-download").hasClass("safe-open")) {
                    var T = a();
                    T ? JsBridge.callWithScheme(T) : ua.browser.wechat || ua.browser.mqq ? JsBridge.startApp(g.packageName, g.sigMd5) : ua.browser.qqbrowser && browser.app.runApk(g.packageName);
                    return
                }
                var U = function() {
                    oneLog(function() {
                        var V = "";
                        ua.browser.wechat ? V = "wx_android_noyyb_popndclick" : ua.browser.mqq ? V = "mqq_android_noyyb_popndclick" : ua.browser.qqbrowser ? V = "mtt_android_noyyb_popndclick" : V = "other_android_popndclick";
                        report(V)
                    }, "popbtnok");
                    p.hide();
                    setTimeout(function() {
                        location.href = getAppDownUrl()
                    }, 500)
                };
                p.init();
                oneLog(function() {
                    var V = "";
                    ua.browser.wechat ? V = f(installState.app, g.versionCode) >= 0 ? "wx_android_noyyb_nuclick" : "wx_android_noyyb_ndclick" : ua.browser.mqq ? V = f(installState.app, g.versionCode) >= 0 ? "mqq_android_noyyb_nuclick" : "mqq_android_noyyb_ndclick" : ua.browser.qqbrowser ? V = f(installState.app, g.versionCode) >= 0 ? "mtt_android_noyyb_nuclick" : "mtt_android_noyyb_ndclick" : V = "other_android_ndclick";
                    report(V)
                }, "act_normaldownload");
                if (i.isIgnoreOpenWindow == 1 || ua.browser.mqq || q) {
                    U();
                    return
                }
                oneLog(function() {
                    var V = "";
                    ua.browser.wechat ? V = "wx_android_noyyb_poppv" : ua.browser.mqq ? V = "mqq_android_noyyb_poppv" : ua.browser.qqbrowser ? V = "mtt_android_noyyb_poppv" : V = "other_android_poppv";
                    report(V)
                }, "poppv");
                window.APPCONFIG.app.packageName == "com.tencent.news" || window.APPCONFIG.app.packageName == "com.tencent.reading" ? setTimeout(function() {
                    location.href = getAppDownUrl()
                }, 500) : p.show({
                    appname: g.appName,
                    ok: U,
                    cancel: function() {
                        oneLog(function() {
                            var V = "";
                            ua.browser.wechat ? V = "wx_android_noyyb_popfdclick" : ua.browser.mqq ? V = "mqq_android_noyyb_popfdclick" : ua.browser.qqbrowser ? V = "mtt_android_noyyb_popfdclick" : V = "other_android_popfdclick";
                            report(V)
                        }, "popbtncancel");
                        p.hide();
                        window.fastClickTrigger = true;
                        h("#btn-fast-download").trigger(UI.EVENTS.touchstartEv())
                    }
                })
            });
            if (window.appIsYYB) {
                yybMicrDown();
                return
            }
            UI.getQuery("fromcase") != 20000 && h(".myapp-logo").show();
            if (window.isForInnerSoft) {
                d();
                return
            }
            P();
            ua.os.ios ? (ua.browser.wechat ? report("wx_ios_pagepv") : ua.browser.mqq ? report("mqq_ios_pagepv") : ua.browser.qqbrowser ? report("mtt_ios_pagepv") : report("other_ios_pagepv"), E()) : ua.os.android ? ua.browser.wechat && ua.browser.version && f(ua.browser.version, "5.1") >= 0 || ua.browser.mqq && ua.browser.version && f(ua.browser.version, "4.6") >= 0 ? (g_isd.set(25), window.JsBridge && window.JsBridge.onReady(function() {
                ua.browser.wechat && g_isd.set(26);
                window.JsBridge.getAppInstalledVersion([ua.browser.pname], function(T) {
                    ua.browser.pversioncode = T[ua.browser.pname] || null;
                    H()
                })
            })) : ua.browser.qqbrowser && ua.browser.version && f(ua.browser.version, "5.0") >= 0 && F() ? (C(function(T) {
                if (T) {
                    return
                }
                G()
            }), s([ua.browser.pname], function(T) {
                ua.browser.pversioncode = T[ua.browser.pname]
            })) : (report("other_android_pagepv"), r(), w(), ua.browser.yyb && tryCallAppbao(getAppDownUrl("tmast"))) : (report("other_pc_pagepv"), r(), w())
        }

        function M(U, T) {
            if (ua.browser.wechat) {
                switch (U) {
                    case JsBridge.Download.STATE_DOWNLOADING:
                        !window.hasReportDownYYB && (window.hasReportDownYYB = true, report("wx_android_downyyb_beginclick"), reportTestDownYYB("downYYBBegin"), window.isTryAgain && reportBehaviourCode("try_again_wx_android_downyyb_beginclick"), window.isReload && reportBehaviourCode("31415_reload_begin_down"), window.hasRetryFor31415 && reportBehaviourCode("31415_retry_begin_down"));
                        break;
                    case JsBridge.Download.STATE_REMOVED:
                        window.hasReportDownYYB = false;
                        report("wx_android_downyyb_removeclick");
                        reportTestDownYYB("downYYBRemove");
                        window.isReload && reportBehaviourCode("31415_reload_remove_down");
                        window.isTryAgain && reportBehaviourCode("try_again_wx_android_downyyb_removeclick");
                        break;
                    case JsBridge.Download.STATE_CANCAL:
                        window.hasReportDownYYB = false;
                        report("wx_android_downyyb_cancelclick");
                        reportTestDownYYB("downYYBCancel");
                        window.isReload && reportBehaviourCode("31415_reload_cancel_down");
                        window.isTryAgain && reportBehaviourCode("try_again_wx_android_downyyb_cancelclick");
                        break;
                    case JsBridge.Download.STATE_FAILED:
                        window.hasReportDownYYB = false;
                        var S = T && T.errCode ? T.errCode : -1000;
                        report("wx_android_downyyb_fail");
                        reportTestDownYYB("downYYBFail");
                        window.isTryAgain && reportBehaviourCode("try_again_wx_android_downyyb_fail");
                        window.isReload && (S == -31415 ? !window.hasReport31415ForReload && (window.hasReport31415ForReload = true, reportBehaviourCode("31415_reload_still_create_task_fail")) : reportBehaviourCode("31415_reload_fail_downing"));
                        reportCodeForDownFailInWX(S);
                        if (Math.random() < 0.2) {
                            try {
                                BJ_REPORT.reportWithOutInit({
                                    id: S == -31415 ? 26 : 20,
                                    msg: (S == -31415 ? T.errMsg : S) + "  " + document.referrer + "  " + window.navigator.userAgent + " " + JSON.stringify(window.APPCONFIG.appbao),
                                    url: "http://badjs.3g.qq.com/badjs"
                                })
                            } catch (V) {}
                        }
                        S == 802 && (window.reportScene = "retryFor802", j.appbaoUrlgtk = window.AppInfoData.baoPkg.https_url, setUseHttps(), N());
                        break;
                    case JsBridge.Download.STATE_DOWNLOADED:
                        window.hasReportDownYYB = false;
                        report("wx_android_downyyb_finish");
                        reportTestDownYYB("downYYBFinish");
                        window.isTryAgain && reportBehaviourCode("try_again_wx_android_downyyb_finish");
                        window.isReload && reportBehaviourCode("31415_reload_success_down");
                        window.hasRetryFor31415 && reportBehaviourCode("31415_retry_succ_down");
                        break;
                    default:
                        window.hasReportDownYYB = false
                }
            } else if (ua.browser.mqq) {
                switch (U) {
                    case JsBridge.Download.STATE_DOWNLOADING:
                        !window.hasReportBeginDownYYB && (window.hasReportBeginDownYYB = true, report("mqq_android_downyyb_beginclick"));
                        break;
                    case JsBridge.Download.STATE_REMOVED:
                        report("mqq_android_downyyb_removeclick");
                        break;
                    case JsBridge.Download.STATE_FAILED:
                        report("mqq_android_downyyb_fail");
                        if (Math.random() > 0.2) {
                            return
                        }
                        try {
                            BJ_REPORT.reportWithOutInit({
                                id: 20,
                                msg: "mqq " + ua.browser.version + " " + window.navigator.userAgent + " " + JSON.stringify(window.APPCONFIG.appbao),
                                url: "http://badjs.3g.qq.com/badjs"
                            })
                        } catch (V) {}
                        break;
                    case JsBridge.Download.STATE_DOWNLOADED:
                        report("mqq_android_downyyb_finish");
                        break;
                    case JsBridge.Download.STATE_INSTALLED:
                        report("mqq_android_yyb_finish_install");
                        break
                }
            }
        }

        function N() {
            if (window.downYYBTimes == 2) {
                return
            }
            y();
            var S = h("#downloadRetyrDialog");
            window.isDownBase ? S.show() : S.removeClass("invisible");
            reportBehaviourCode("try_again_wx_android_downyyb_dialog_pv");
            S.find(".tips").text("网络不稳定导致您下载失败，建议重试");
            S.find(".btn-close, .btn-cancel").unbind("click").bind("click", function() {
                reportBehaviourCode("try_again_wx_android_downyyb_dialog_cancalbtn_click");
                window.isDownBase ? S.hide() : S.addClass("invisible")
            });
            S.find(".btn-ok").unbind("click").bind("click", function() {
                window.isTryAgain = true;
                reportBehaviourCode("try_again_wx_android_downyyb_dialog_downbtn_click");
                h("#btn-fast-download").trigger(UI.EVENTS.touchstartEv());
                window.isDownBase ? S.hide() : S.addClass("invisible")
            })
        }

        function O() {
            if (window.isReload) {
                return
            }
            window.hasRetryFor31415 ? window.hasRetryFor31415++ : (window.hasRetryFor31415 = 1, window.reportScene = "retryFor31415", reportBehaviourCode("31415_create_task_fail"));
            if (window.hasRetryFor31415 > 3) {
                var S = h("#reloadDialog");
                window.isDownBase ? S.show() : S.removeClass("invisible");
                reportBehaviourCode("31415_reload_fail_dialog");
                S.find(".tips").text("小宝正在努力帮你连接中……");
                S.find(".btn-close, .btn-cancel").unbind("click").bind("click", function() {
                    window.isDownBase ? S.hide() : S.addClass("invisible");
                    reportBehaviourCode("31415_reload_dialog_cancelbtn_click");
                    window.hasReloadCancelClick = true
                });
                S.find(".btn-ok").unbind("click").bind("click", function() {
                    reportBehaviourCode("31415_reload_dialog_surebtn_click");
                    location.href = location.href + "&isreload=true"
                });
                setTimeout(function() {
                    !window.hasReloadCancelClick && (location.href = location.href + "&isreload=true")
                }, 1000)
            } else {
                y();
                setTimeout(function() {
                    h("#btn-fast-download").trigger(UI.EVENTS.touchstartEv())
                }, 500)
            }
        }

        function P() {
            !ua.os.ios && (ua.browser.mqq ? JsBridge._call("qqZoneAppList/getMobileInfo", function(S) {
                try {
                    window.mobileInfo = JSON.parse(S)
                } catch (T) {}
            }) : ua.browser.qqbrowser && s([ua.browser.pname], function(S) {
                ua.browser.pversioncode = S[ua.browser.pname] || ""
            }))
        }

        function Q() {
            var T = [{
                    blank1: ""
                }, {
                    phoneGuid: ""
                }, {
                    imei: mobileInfo.imei || ""
                }, {
                    macAdress: ""
                }, {
                    androidId: mobileInfo.androidId || ""
                }, {
                    androidIdSdCard: ""
                }, {
                    imsi: mobileInfo.imsi || ""
                }, {
                    imei2: ""
                }, {
                    imsi2: ""
                }, {
                    xResolution: mobileInfo.resolution && mobileInfo.resolution.split("x")[0] || ""
                }, {
                    yResolution: mobileInfo.resolution && mobileInfo.resolution.split("x")[1] || ""
                }, {
                    brand: mobileInfo.brand || ""
                }, {
                    mode: mobileInfo.model_name || ""
                }, {
                    manufacture: mobileInfo.manufacture || ""
                }, {
                    product: mobileInfo.product || ""
                }, {
                    netType: mobileInfo.network || ""
                }, {
                    extNetworkOperator: ""
                }, {
                    extNetworkType: ""
                }, {
                    isWap: ""
                }, {
                    wifiSsid: ""
                }, {
                    wifiBssid: ""
                }, {
                    hostPackageName: ua.browser.pname || ""
                }, {
                    hostVersionCode: ua.browser.pversioncode || ""
                }, {
                    requestId: ""
                }, {
                    clientIp: ""
                }, {
                    sdkName: ""
                }, {
                    sdkVersionName: ""
                }, {
                    sdkVersionCode: ""
                }, {
                    sdkChannel: ""
                }, {
                    sdkSubChannel: ""
                }, {
                    sdkBuilderNum: ""
                }, {
                    sysId: ""
                }, {
                    sysVersionName: ""
                }, {
                    sysVersionCode: ""
                }, {
                    rootFlag: ""
                }, {
                    qqNumer: mobileInfo.uin || ""
                }, {
                    ex1: ""
                }, {
                    ex2: ""
                }, {
                    ex3: ""
                }, {
                    ex4: ""
                }, {
                    ex5: ""
                }, {
                    ex6: ""
                }, {
                    ex7: ""
                }, {
                    ex8: ""
                }, {
                    ex9: ""
                }, {
                    ex10: ""
                }, {
                    outerCallType: 1
                }, {
                    outerCallModel: 1
                }, {
                    outerCallTime: Date.now()
                }, {
                    fingerprints: ""
                }, {
                    display: ""
                }, {
                    buildId: ""
                }, {
                    incremental: ""
                }, {
                    hostpname: ua.browser.pname || ""
                }, {
                    hostversion: ua.browser.pversioncode || ""
                }, {
                    yybVersion: installState.appbao || ""
                }, {
                    yybSDKAPILevel: ""
                }, {
                    blank2: ""
                }],
                U = [];
            for (var S = 0; S < T.length; S++) {
                for (var V in T[S]) {
                    U.push(T[S][V])
                }
            }
            h.get("/o/ajax/log/CallLog?callValue=" + U.join("|"), function(W, X) {})
        }
        h(function() {
            L()
        })
    })($, window.APPCONFIG, window.LC, window.page);
    var b = {
            "com.kugou.android": ["kugou://"],
            "com.sina.weibo": ["sinaweibo://"],
            "com.sohu.sohuvideo": ["sohuvideo://"],
            "com.letv.android.client": ["letvclient://"]
        },
        a = function() {
            var g = b[APPCONFIG.app.packageName] || [],
                f = decodeURIComponent(UI.getQuery("android_scheme"));
            !f && (f = decodeURIComponent(UI.getQuery("android_schema")));
            if (g.length) {
                for (var h = 0; h < g.length; h++) {
                    if (f.indexOf(g[h]) == 0) {
                        return f
                    }
                }
            } else if (f && f.indexOf(window.appLinkInfo + "://") == 0) {
                return f
            }
            return ""
        };

    function c() {
        normalOpenDialog.init();
        normalOpenDialog.show({
            appname: APPCONFIG.app.appName,
            ok: function() {
                normalOpenDialog.hide();
                setTimeout(function() {
                    var f = a();
                    f ? JsBridge.callWithScheme(f) : JsBridge.startApp(APPCONFIG.app.packageName, APPCONFIG.app.sigMd5)
                }, 500);
                report("wx_android_noyyb_hasapp_popnoclick")
            },
            cancel: function() {
                normalOpenDialog.hide();
                window.fastClickTrigger = true;
                $("#btn-fast-download").trigger(UI.EVENTS.touchstartEv());
                report("wx_android_noyyb_hasapp_popsoclick")
            }
        });
        report("wx_android_noyyb_hasapp_popnopv")
    }

    function d() {
        var j, h = window.APPCONFIG.app,
            n = window.APPCONFIG.appbao,
            k = window.APPCONFIG.identityInfo,
            i = window.AppInfoData.appDetail,
            l = UI.compareVersion,
            m = true,
            g = "down",
            f = {
                init: function() {
                    window.via = UI.getQuery("via");
                    ua.os.ios ? f.iosDownload() : ua.os.android ? f.androidDown() : f.browserDown()
                },
                iosDownload: function() {
                    var o = $("#btn-fast-download");
                    f.updateDownBtn("iosdown");
                    $("#btn-fast-download").unbind(UI.EVENTS.touchstart).bind(UI.EVENTS.touchstart, function(p) {
                        h.iosUrl ? location.href = h.iosUrl : alert("\n抱歉，当前没有检测到iOS版本\n您可以尝试前往AppStore搜索查看")
                    });
                    (!h.iosUrl || k.showTips == 1) && k.gameFloatingWindowInfo && $(document.body).append('<div class="top-tips">' + k.gameFloatingWindowInfo + "</div>");
                    if (!h.iosUrl) {
                        $("#btn-fast-download").removeClass("is-b-blue").addClass("is-disable");
                        return
                    }
                    if (k.showTips == 1) {
                        return
                    }
                    location.href = h.iosUrl
                },
                androidDown: function() {
                    ua.browser.wechat && ua.browser.version && l(ua.browser.version, "5.1") >= 0 || ua.browser.mqq && ua.browser.version && l(ua.browser.version, "4.6") >= 0 ? window.JsBridge && window.JsBridge.onReady(function() {
                        f.jsBridgeDown(true)
                    }) : ua.browser.qqbrowser && ua.browser.version && l(ua.browser.version, "5.0") >= 0 && f.mttAbilityCheck() ? f.qqbrowserDown() : f.browserDown()
                },
                jsBridgeDown: function(o) {
                    window.checkState(function() {
                        j = installState.appbao && !(k.isSpecialPhoneBrand && installState.appbao < window.AppbaoManufactureUnBlockVersion);
                        o && f.pageResume(function() {
                            f.jsBridgeDown(false)
                        });
                        f.downBind()
                    })
                },
                qqbrowserDown: function() {
                    var p, o;
                    p = $("#btn-fast-download");
                    o = function(r) {
                        window.checkState(function() {
                            installState.app ? g = "open" : g = "down";
                            f.updateDownBtn();
                            g == "open" ? browser.app.runApk(h.packageName) : j ? f.goYYBAndDown() : location.href = getAppDownUrl()
                        })
                    };
                    try {
                        window.checkState(function() {
                            j = installState.appbao && !(k.isSpecialPhoneBrand && installState.appbao < window.AppbaoManufactureUnBlockVersion);
                            installState.app ? g = "open" : g = "down";
                            f.updateDownBtn();
                            $("body").delegate("#btn-fast-download", UI.EVENTS.touchstart, o);
                            m && (m = false, g == "open" ? browser.app.runApk(h.packageName) : j ? f.goYYBAndDown() : location.href = getAppDownUrl())
                        })
                    } catch (q) {
                        f.browserDown()
                    }
                },
                browserDown: function() {
                    var o = $("#btn-fast-download");
                    g = "down";
                    f.updateDownBtn();
                    o.unbind(UI.EVENTS.touchstart).bind(UI.EVENTS.touchstart, function() {
                        g = "loading";
                        f.updateDownBtn();
                        location.href = getAppDownUrl();
                        setTimeout(function() {
                            g = "down";
                            f.updateDownBtn()
                        }, 2000)
                    });
                    m && tryCallScheme(getAppDownUrl("tmast"), function() {}, function() {
                        location.href = getAppDownUrl()
                    })
                },
                downBind: function() {
                    var o = $("#btn-fast-download");
                    installState.app ? g = "open" : window.hasFinshDownload ? g = "downloaded" : g = "down";
                    f.updateDownBtn();
                    g == "open" ? o.unbind(UI.EVENTS.touchstart).bind(UI.EVENTS.touchstart, function() {
                        f.jsbridgeStartApp()
                    }) : j ? o.unbind(UI.EVENTS.touchstart).bind(UI.EVENTS.touchstart, function() {
                        f.goYYBAndDown()
                    }) : (!window.jsBridgeloader && (window.jsBridgeloader = new JsBridge.Download({
                        sngAppId: parseInt(UI.getQuery("sngappid"), 10),
                        hnAppId: i.appId,
                        versionCode: i.versionCode,
                        url: i.apkUrl,
                        packageName: i.packageName,
                        alias: i.appName,
                        md5: i.apkMd5,
                        thumbUrl: i.iconUrl,
                        title: i.appName
                    }, f.stateChange)), o.unbind(UI.EVENTS.touchstart).bind(UI.EVENTS.touchstart, function() {
                        window.jsBridgeloader.start()
                    }));
                    if (m) {
                        m = false;
                        if (g == "open") {
                            f.jsbridgeStartApp();
                            return
                        } else {
                            j ? f.goYYBAndDown() : window.jsBridgeloader.start()
                        }
                    }
                },
                jsbridgeStartApp: function() {
                    JsBridge.startApp(h.packageName, h.sigMd5)
                },
                stateChange: function(o, p) {
                    console.log(o, p);
                    switch (o) {
                        case JsBridge.Download.STATE_DOWNLOADED:
                            ua.browser.mqq && ua.browser.version && l(ua.browser.version, "4.6") >= 0 ? setTimeout(function() {
                                jsBridgeloader.doAction()
                            }, 500) : jsBridgeloader.doAction();
                            window.hasFinshDownload = true;
                            g = "downloaded";
                            f.updateDownBtn();
                            break;
                        case JsBridge.Download.STATE_INSTALLING:
                        case JsBridge.Download.STATE_DOWNLOADING:
                            g = "loading";
                            f.updateDownBtn(p);
                            break;
                        case JsBridge.Download.STATE_INSTALLED:
                            g = "open";
                            f.updateDownBtn();
                            break;
                        case JsBridge.Download.STATE_FAILED_OF_SDCARD:
                            alert("下载失败，请关闭USB数据存储或者插入SD卡或者将手机与电脑断开连接。");
                        case JsBridge.Download.STATE_READY:
                        case JsBridge.Download.STATE_FAILED:
                        case JsBridge.Download.STATE_PAUSED:
                        case JsBridge.Download.STATE_CANCAL:
                        case JsBridge.Download.STATE_REMOVED:
                        default:
                            f.updateDownBtn()
                    }
                },
                pageResume: function(o) {
                    ua.browser.mqq && ua.browser.version && l(ua.browser.version, "4.6") >= 0 ? l(ua.browser.version, "4.7") >= 0 ? document.addEventListener("qbrowserVisibilityChange", function(p) {
                        !(p.hidden) && o && o()
                    }) : UI.pageVisibility.isPageVisibilitySupport && UI.pageVisibility.visibilitychange(function() {
                        !(UI.pageVisibility.isHidden) && o && o()
                    }) : o && window.JsBridge && (window.JsBridge.onResume = o)
                },
                mttAbilityCheck: function() {
                    var o, p = false;
                    try {
                        o = window.browser && window.browser.app ? window.browser.app : null;
                        o && o.getApkInfo && o.runApk && (p = true)
                    } catch (q) {
                        p = false
                    }
                    return p
                },
                mtt_checkState: function(o, q) {
                    var r, s = {},
                        v = o.length,
                        t = [];
                    for (var p = 0, u = o.length; p < u; p++) {
                        r = o[p];
                        browser.app.getApkInfo(function(x) {
                            var w = JSON.parse(x || "{}");
                            typeof w == "string" && (w = JSON.parse(w || "{}"));
                            s[w.packagename] = w.versioncode;
                            t.push(w.packagename);
                            t.length >= o.length && q && q(s)
                        }, r) || null
                    }
                },
                updateDownBtn: function(o) {
                    g == "open" ? btnText = "立即打开" : g == "loading" ? btnText = "下载中" : g == "downloaded" ? btnText = "立即安装" : g == "iosdown" ? btnText = "去App Store下载 " : btnText = "立即下载";
                    $("#high-download-loading").hide();
                    g == "loading" ? ($("#high-download-txt").hide(), $("#high-download-progress").show(), $("#high-download-progress .mod-progress-bar").css("width", o + "%"), $("#high-download-progress .mod-progress-text").css("width", 10000 / o + "%")) : ($("#high-download-txt").show().text(btnText), $("#high-download-progress").hide())
                },
                goYYBAndDown: function() {
                    !window.via && (ua.browser.wechat ? window.via = "ANDROIDWXZ.YYB.WX" : ua.browser.mqq ? window.via = "ANDROIDWXZ.YYB.QQ" : ua.browser.qqbrowser ? window.via = "ANDROIDWXZ.YYB.QQBROWSER" : window.via = "ANDROIDWXZ.YYB.OTHERBROWSER");
                    tryCallAppbao(getAppDownUrl("tmast"))
                }
            };
        f.init()
    }
}

function yybMicrDown() {
    window.isDownYYBForKingCard = UI.getQuery("fromcase") == 20002;
    window.isDownYYBForKingCard && (document.title = "免流量应用商店-应用宝");
    var d = window.APPCONFIG.app,
        g = window.APPCONFIG.appbao,
        f = window.APPCONFIG.identityInfo,
        c = UI.compareVersion,
        b, i = true,
        h = UI.getQuery("rurl"),
        j = UI.getQuery("via").toUpperCase(),
        a = {
            init: function() {
                ua.os.ios ? a.iosDownload() : ua.os.android ? a.androidDown() : a.browserDown()
            },
            iosDownload: function() {
                ua.browser.wechat ? report("wx_ios_pagepv") : ua.browser.mqq ? report("mqq_ios_pagepv") : ua.browser.qqbrowser ? report("mtt_ios_pagepv") : report("other_ios_pagepv");
                g_isd.set(31);
                g_isd.send();
                var k, l = $("#btn-fast-download");
                updateDownBtn("iosdown");
                $("#btn-fast-download").unbind(UI.EVENTS.touchstart).bind(UI.EVENTS.touchstart, function(m) {
                    alert("应用宝iOS版暂未上线，\n可在安卓手机下载使用")
                });
                $("#btn-fast-download").removeClass("is-b-blue").addClass("is-disable");
                $(document.body).append('<div class="top-tips">应用宝iOS版暂未上线，可在安卓手机下载使用</div>')
            },
            androidDown: function() {
                ua.browser.wechat && ua.browser.version && c(ua.browser.version, "5.1") >= 0 || ua.browser.mqq && ua.browser.version && c(ua.browser.version, "4.6") >= 0 ? (g_isd.set(25), window.JsBridge && window.JsBridge.onReady(function() {
                    ua.browser.wechat && g_isd.set(26);
                    a.jsBridgeDown(true)
                })) : ua.browser.qqbrowser && ua.browser.version && c(ua.browser.version, "5.0") >= 0 && a.mttAbilityCheck() ? a.qqbrowserDown() : a.browserDown()
            },
            checkYYBState: function(k) {
                var l = [d.packageName];
                window.JsBridge && window.JsBridge.getAppInstalledVersion ? window.JsBridge.getAppInstalledVersion(l, function(m) {
                    b = m[d.packageName] || null;
                    k && k()
                }) : ua.browser.qqbrowser && ua.browser.version && c(ua.browser.version, "5.0") >= 0 ? a.mtt_checkYYBState(l, function(m) {
                    b = m[d.packageName] || null;
                    k && k()
                }) : k && k()
            },
            jsBridgeDown: function(k) {
                a.checkYYBState(function() {
                    k && (ua.browser.wechat ? g_isd.set(27) : g_isd.set(28), g_isd.send(), oneLog(function() {
                        b && c(b, d.versionCode) >= 0 || f.noNeedUpdate ? (ua.browser.wechat || ua.browser.mqq) && report("" + (ua.browser.wechat ? "wx_" : "mqq_") + "android_yyb_pagepv") : (ua.browser.wechat || ua.browser.mqq) && report("" + (ua.browser.wechat ? "wx_" : "mqq_") + "android_noyyb_pagepv")
                    }, "pagepv"), a.pageResume(function() {
                        a.jsBridgeDown(false)
                    }));
                    a.downBind()
                })
            },
            qqbrowserDown: function() {
                var l, k;
                l = $("#btn-fast-download");
                k = function(n) {
                    a.checkYYBState(function() {
                        var o, p = "";
                        b ? c(b, d.versionCode) >= 0 || f.noNeedUpdate ? (o = "open", p = "mtt_android_yyb_opclick", a.qqbrowserCallYYB()) : (p = "mtt_android_yyb_fuclick", o = "update", a.downYYB()) : (p = "mtt_android_noyyb_fdclick", o = "down", a.downYYB());
                        report(p);
                        updateDownBtn(o)
                    })
                };
                try {
                    a.checkYYBState(function() {
                        g_isd.set(29);
                        g_isd.send();
                        var n, o;
                        oneLog(function() {
                            b ? c(b, d.versionCode) >= 0 || f.noNeedUpdate ? (n = "open", o = "mtt_android_yyb_pagepv") : (n = "update", o = "mtt_android_noyyb_pagepv") : (n = "down", o = "mtt_android_noyyb_pagepv");
                            report(o)
                        }, "pagepv");
                        updateDownBtn(n);
                        $("body").delegate("#btn-fast-download", UI.EVENTS.touchstart, k);
                        i && (i = false, n == "open" && a.qqbrowserCallYYB())
                    })
                } catch (m) {
                    a.browserDown()
                }
            },
            browserDown: function() {
                report("other_android_pagepv");
                g_isd.set(30);
                g_isd.send();
                var k = $("#btn-fast-download");
                updateDownBtn("down");
                k.unbind(UI.EVENTS.touchstart).bind(UI.EVENTS.touchstart, function(n) {
                    oneLog(function() {
                        var p = "";
                        ua.os.android && (p = "other_android_fdclick");
                        report(p)
                    }, "act_fastdownload");
                    if (window.isDownYYBForKingCard && h) {
                        var l, o, m;
                        m = $(n.target);
                        if (m.hasClass("btn-unactive")) {
                            return
                        }
                        updateDownBtn("loading");
                        l = new Date();
                        o = setTimeout(function() {
                            var p, q, r;
                            r = $("#btn-fast-download");
                            p = new Date();
                            parseInt(p.getTime(), 10) - parseInt(l.getTime(), 10) < 3000 && (q = UI.pageVisibility.isHidden(), !q && a.downYYB());
                            updateDownBtn("down")
                        }, 2000);
                        location.href = a.getTmastUrl()
                    } else {
                        updateDownBtn("loading");
                        a.downYYB();
                        setTimeout(function() {
                            updateDownBtn("down")
                        }, 2000)
                    }
                })
            },
            downBind: function() {
                var k, m, l = $("#btn-fast-download");
                b ? c(b, d.versionCode) >= 0 || f.noNeedUpdate ? k = "open" : k = "update" : k = "down";
                k == "open" ? window.nowInstallyybForOpen = true : window.justNotInstallyybForOpen = true;
                updateDownBtn(k);
                if (i) {
                    i = false;
                    if (k == "open") {
                        a.jsBridgeCallYYB();
                        return
                    }
                }
                ua.browser.wechat && window.justNotInstallyybForOpen && window.nowInstallyybForOpen && (window.justNotInstallyybForOpen = false, window.nowInstallyybForOpen = false, a.jsBridgeCallYYB());
                !window.jsBridgeloader && (window.jsBridgeloader = new JsBridge.Download({
                    sngAppId: parseInt(1101070898, 10),
                    hnAppId: "5848",
                    versionCode: d.versionCode,
                    url: g.appbaoUrlgtk,
                    packageName: g.appbaoPkg,
                    alias: g.appbaoName,
                    md5: g.appbaoMd5,
                    thumbUrl: f.yybLogo || "",
                    title: window.isDownYYBForKingCard ? "免流量应用商店-应用宝" : "应用宝"
                }, a.stateChange), l.unbind(UI.EVENTS.touchstart).bind(UI.EVENTS.touchstart, function() {
                    if (b && (c(b, d.versionCode) >= 0 || f.noNeedUpdate)) {
                        oneLog(function() {
                            var o = "";
                            ua.browser.wechat ? o = "wx_android_yyb_opclick" : o = "mqq_android_yyb_opclick";
                            report(o)
                        }, "act_fastopen");
                        a.jsBridgeCallYYB()
                    } else {
                        window.isDownYYBForKingCard && h && (ua.browser.wechat && !window.jsBridgeloaderWxWrite && function() {
                            window.jsBridgeloaderWxWrite = true;
                            var o = {
                                starttime: (new Date()).getTime(),
                                endtime: (new Date()).getTime() + 1000 * 60 * 30,
                                url: a.getTmastUrl()
                            };
                            WeixinJSBridge && WeixinJSBridge.invoke("writeCommData", {
                                packageName: g.appbaoPkg,
                                data: JSON.stringify(o)
                            }, function(p) {})
                        }(), ua.browser.mqq && !window.jsBridgeloaderMQQWrite && ua.browser.version && c(ua.browser.version, "4.6") >= 0 && function() {
                            try {
                                JsBridge._call("q_download/setDownloaderFirstOpenPage", {
                                    url: a.getTmastUrl()
                                });
                                window.jsBridgeloaderMQQWrite = true
                            } catch (o) {}
                        }());
                        var n = "";
                        oneLog(function() {
                            var o = "";
                            b && c(b, d.versionCode) < 0 ? ua.browser.wechat ? o = "wx_android_yyb_fuclick" : o = "mqq_android_yyb_fuclick" : ua.browser.wechat ? o = "wx_android_yyb_fdclick" : o = "mqq_android_yyb_fdclick";
                            report(o)
                        }, "act_fastdownload");
                        window.jsBridgeloader.doAction()
                    }
                }))
            },
            downYYB: function() {
                location.href = g.appbaoUrlgtk
            },
            jsBridgeCallYYB: function() {
                window.isDownYYBForKingCard && h ? JsBridge.callWithScheme(a.getTmastUrl()) : JsBridge.startApp(d.packageName, d.sigMd5)
            },
            stateChange: function(k, l) {
                switch (k) {
                    case JsBridge.Download.STATE_DOWNLOADED:
                        ua.browser.mqq && ua.browser.version && c(ua.browser.version, "4.6") >= 0 ? setTimeout(function() {
                            jsBridgeloader.doAction()
                        }, 500) : jsBridgeloader.doAction();
                        break;
                    case JsBridge.Download.STATE_INSTALLING:
                    case JsBridge.Download.STATE_DOWNLOADING:
                        updateDownBtn("loading", false, l);
                        break;
                    case JsBridge.Download.STATE_INSTALLED:
                        updateDownBtn(b ? "update" : "down", true);
                        a.jsBridgeCallYYB();
                        break;
                    case JsBridge.Download.STATE_FAILED_OF_SDCARD:
                        alert("下载失败，请关闭USB数据存储或者插入SD卡或者将手机与电脑断开连接。");
                    case JsBridge.Download.STATE_READY:
                    case JsBridge.Download.STATE_FAILED:
                    case JsBridge.Download.STATE_PAUSED:
                    case JsBridge.Download.STATE_CANCAL:
                    case JsBridge.Download.STATE_REMOVED:
                    default:
                        updateDownBtn(b ? c(b, d.versionCode) >= 0 || f.noNeedUpdate ? type = "open" : type = "update" : "down")
                }
            },
            pageResume: function(k) {
                ua.browser.mqq && ua.browser.version && c(ua.browser.version, "4.6") >= 0 ? c(ua.browser.version, "4.7") >= 0 ? document.addEventListener("qbrowserVisibilityChange", function(l) {
                    !(l.hidden) && k && k()
                }) : UI.pageVisibility.isPageVisibilitySupport && UI.pageVisibility.visibilitychange(function() {
                    !(UI.pageVisibility.isHidden) && k && k()
                }) : k && window.JsBridge && (window.JsBridge.onResume = k)
            },
            mttAbilityCheck: function() {
                var k, l = false;
                try {
                    k = window.browser && window.browser.app ? window.browser.app : null;
                    k && k.getApkInfo && k.runApk && (l = true)
                } catch (m) {
                    l = false
                }
                return l
            },
            mtt_checkYYBState: function(k, n) {
                var o, p = {},
                    s = k.length,
                    q = [];
                for (var m = 0, r = k.length; m < r; m++) {
                    o = k[m];
                    browser.app.getApkInfo(function(t) {
                        var l = JSON.parse(t || "{}");
                        typeof l == "string" && (l = JSON.parse(l || "{}"));
                        p[l.packagename] = l.versioncode;
                        q.push(l.packagename);
                        q.length >= k.length && n && n(p)
                    }, o) || null
                }
            },
            getTmastUrl: function() {
                return "tmast://webview?mode=0&url=" + h + "&via=" + j
            },
            qqbrowserCallYYB: function() {
                window.isDownYYBForKingCard && h ? location.href = a.getTmastUrl() : browser.app.runApk(d.packageName)
            }
        };
    a.init()
}

function setBlurBg(c) {
    var b = document.body.clientWidth,
        f = c,
        a = document.getElementById("headerPicBg");
    a.style.width = b + "px";
    a.style.height = b + "px";
    var d = document.createElement("div"),
        g = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events" width="100%" height="100%"><defs><filter id="topBlur"><feGaussianBlur stdDeviation="12" /></filter></defs><image xlink:href="' + f + '" x="0" y="0" height="' + b + '" width="' + b + '" filter="url(#topBlur)" /></svg>';
    d.innerHTML = g;
    a.appendChild(d);
    a.style["background-image"] = "url(" + c + ")";
    a.style["-webkit-background-size"] = "cover";
    a.style["background-size"] = "cover"
}

function resetHeaderPig() {
    var c = document.getElementById("headerWhiteBg"),
        b = document.getElementById("headerPicBg"),
        a = document.body.clientWidth;
    c.style.width = a + "px";
    b.style.width = a + "px";
    b.style.height = a + "px"
}

function drawCanvas() {
    var b = document.body.clientWidth,
        d = 166,
        c = document.getElementById("headerWhiteBg");
    c.style.width = b + "px";
    c.style.height = d + "px";
    c.width = b;
    c.height = d;
    var a = c.getContext("2d");
    a.moveTo(0, 41);
    a.lineTo(parseInt(b / 2), 0);
    a.lineTo(b, 41);
    a.closePath();
    a.fillStyle = "#ffffff";
    a.fill();
    a.lineWidth = 1;
    a.strokeStyle = "#ffffff";
    a.stroke();
    a.beginPath();
    a.moveTo(0, 41);
    a.lineTo(b, 41);
    a.lineTo(b, d);
    a.lineTo(0, d);
    a.closePath();
    a.fillStyle = "#ffffff";
    a.fill();
    a.lineWidth = 1;
    a.strokeStyle = "#ffffff";
    a.stroke()
}
document.addEventListener("DOMContentLoaded", drawCanvas, false);
window.addEventListener("resize", resetHeaderPig);
window.addEventListener("orientationchange", resetHeaderPig);
var requestPromise = new Promise(function(b, c) {
        if (window.AppInfoData) {
            b("provided by jsp");
            return
        }
        window.AppInfoData = null;
        var a = new XMLHttpRequest() || new ActiveXobject("Msxml2.XMLHTTP") || new ActiveXobject("Microsoft.XMLHTTP");
        a.onreadystatechange = function() {
            if (a.readyState == a.DONE) {
                if (a.status == 200) {
                    try {
                        var d = JSON.parse(a.responseText);
                        d && d.ret === 0 && (window.AppInfoData = d.data);
                        b("ok")
                    } catch (f) {
                        alert("服务器请求异常！");
                        c("fail1")
                    }
                } else {
                    alert("服务器请求异常！");
                    c("fail2")
                }
            }
        };
        a.open("get.html", "/o/ajax/micro/MicroDownAppInfo?pkgname=" + UI.getQuery("pkgname", location.href), true);
        a.send(null)
    }),
    mediator = function() {
        var a = {};
        return {
            hideModules: function(b) {
                b = [].concat(b);
                var d = b.length;
                for (var c = 0; c < d; c++) {
                    a[b[c]].hideModule()
                }
            },
            showModules: function(b) {
                b = [].concat(b);
                var d = b.length;
                for (var c = 0; c < d; c++) {
                    a[b[c]].showModule()
                }
            },
            removeModules: function(b) {
                a = {}
            },
            addModules: function(b, c) {
                b = [].concat(b);
                c = [].concat(c);
                var g = b.length,
                    f = c.length;
                if (g != f) {
                    throw new Error("modIds's length not equal to mods's length")
                } else {
                    for (var d = 0; d < f; d++) {
                        a[b[d]] = c[d]
                    }
                }
            },
            initModules: function() {
                for (var b in a) {
                    a[b].isShow && a[b].initModule()
                }
            }
        }
    }();

function Module(a, b, c) {
    this.fatherEle = a;
    this.data = b || null;
    this.tplObj = c || null;
    this.isShow = true
}
Module.prototype = {
    hideModule: function() {
        $(this.fatherEle).hide();
        this.isShow = false
    },
    showModule: function() {
        $(this.fatherEle).show();
        this.isShow = true
    },
    initModule: function() {
        if (this.tplObj) {
            var a = document.getElementById(this.tplObj.tplId).innnerHTML;
            $(this.tplObj.tplPos).html(UI.getHtml(a, this.data))
        }
        this.showModule();
        this.customInit && this.customInit()
    }
};
Module.prototype.constructor = Module;

function domFun() {
    window.gTimeStamps.push(Date.now());
    var a = new Module(".header");
    a.customInit = function() {
        setBlurBg(AppInfoData.appDetail.iconUrl);
        $("#commentNum").html(AppInfoData.appDetail.commentCount);

        function f() {}
        f()
    };
    mediator.addModules("topComponent", a);
    if (0) {
        var d = new Module(".friend-panel");
        mediator.addModules("friComponent", d)
    }
    JsBridge && JsBridge.onReady(function() {
        checkState(function() {
            if (!UI.getQuery("ckey") && !(window.APPCONFIG.identityInfo.isSpecialPhoneBrand && UI.compareVersion(installState.appbao, AppbaoManufactureUnBlockVersion) < 0) && AppInfoData.giftInfo && AppInfoData.giftInfo.giftList.length && !UI.detectua(navigator.userAgent).os.ios && (ua.browser.wechat || ua.browser.mqq || ua.browser.qqbrowser)) {
                var f = new Module(".gift-panel");
                f.customInit = function() {
                    var g = AppInfoData.giftInfo.giftList,
                        h = g.length,
                        i = "";

                    function j(m, n) {
                        var l = "";
                        for (var k = m; k < n; k++) {
                            l += "<li " + (k > 1 ? 'style="display:none;"' : "") + '><div class="card-icon ' + (g[k].type == 6 ? "red-packet" : "") + '" ' + (g[k].type == 0 ? 'style="background-image:url(' + g[k].iconUrl + ')"' : "") + '></div><div class="card-ct">';
                            l += '<p class="ellipsis title">' + g[k].desc + "</p></div>";
                            l += '<a href="javascript:void(0);" class="w-btn gift-btn is-red giftDownBtn" data-index="' + k + '">' + (g[k].btnTitle || "领取") + "</a></li>"
                        }
                        return l
                    }
                    i = j(0, h);
                    i && $(".gift-panel .card-list").html(i);
                    h > 2 ? $(".gift-panel .card-more").html("<span>更多(" + (h - 2) + ")</span>") : $(".gift-panel .card-more").hide()
                };
                mediator.addModules("giftComponent", f)
            }
            mediator.initModules()
        })
    });
    var b = new Module(".detail-panel");
    b.customInit = function() {
        window.snapPromise = new Promise(function(i, j) {
            var f = AppInfoData.appDetail;
            $(".detail-expain p").html(f.description.split("\n").join("<br>"));
            var g = "";
            f.snapshotsUrl.map(function(k, l) {
                l < 2 ? g += '<li><img src="' + k + '" alt="" style="min-width:150px;"></li>' : g += '<li><img class="lazyload" data-url="' + k + '" style="min-width:150px;" src="http://3gimg.qq.com/dist/webapp_andtouch/res/micro/appdetailloading.png" alt=""></li>'
            });
            $(".detail-pic-list").html(g);
            $(".detail-version-num").html("版本：" + f.versionName);
            $(".detail-version-time").html("更新时间：" + f.publishTime.replace(/ .*$/g, "").replace(/-/, "年").replace(/-/, "月") + "日");
            var h = "";
            h += (f.flag.virus ? "<span class='tips-virus'>无病毒</span>" : "") + (f.flag.adver ? "<span class='tips-adver'>无广告</span>" : "") + (f.flag.userSafe ? "<span class='tips-userSafe'>用户保障</span>" : "");
            $(".detail-panel .tips").html(h);
            i("ok");
            $(".detail-expain .more-btn").click(function() {
                var k = $(".detail-expain");
                k.hasClass("ellipsis-expain") ? k.removeClass("ellipsis-expain") : k.addClass("ellipsis-expain")
            })
        })
    };
    mediator.addModules("detailComponent", b);
    if (AppInfoData.commentList && AppInfoData.commentList.length) {
        var c = new Module(".detail-comment-panel");
        c.customInit = function() {
            var l = AppInfoData.commentList,
                n = l.length,
                g = AppInfoData.commentTagList,
                o = g && g.length ? g.length : 0,
                p = $("#commentTpl").html(),
                j = "",
                k = "";
            for (var f = 0; f < n; f++) {
                var h = l[f];
                j += UI.getHtml(p, {
                    userIconUrl: h.userIconUrl || "http://3gimg.qq.com/webapp_octopus/img/common_headpic.png",
                    nickName: h.nickName,
                    praiseCount: h.praiseCount,
                    content: h.content
                })
            }
            for (var f = 0; f < Math.min(o, 6); f++) {
                var m = g[f];
                k += '<span class="good-tag">' + m.tagName + "(" + m.count + ")</span>"
            }
            j && $(".comment-list").html(j);
            k && $(".tag-box").html(k)
        };
        mediator.addModules("commentComponent", c)
    }
    mediator.initModules();
    mediator.removeModules();
    window.gTimeStamps.push(Date.now())
}

function snapFun() {
    snapPromise.then(function(a) {
        initImgSlide({
            imgBoxSelector: ".detail-pic-panel",
            imgScrollBarSelector: ".mod-scroll-bar .scroll"
        });
        $(".detail-pic-panel li img.lazyload").scrollLoading({})
    })
}

function pageFun() {
    window.page = {};
    (function(a) {
        var b = function() {
                var j, h, g = window.AppInfoData && window.AppInfoData.downLoadDesc && window.AppInfoData.downLoadDesc.pageButtonTxt || "",
                    k = window.AppInfoData.identityInfo.isSpecialPhoneBrand,
                    i = UI.getQuery("fromcase") == 20001;
                return function(n, o, t, u) {
                    n = $.trim(n || "").toLowerCase();
                    j = n;
                    var s = k && o && UI.compareVersion(u, window.AppbaoManufactureUnBlockVersion) < 0,
                        v = {
                            "com.tencent.news": "腾讯新闻",
                            "com.tencent.reading": "快报"
                        },
                        q = v[window.APPCONFIG.app.packageName] || "",
                        r = $("#btn-fast-download"),
                        m, w = false,
                        l = !!UI.getQuery("hideNormalBtn") || window.appIsYYB,
                        p = false;
                    n == "open" ? (m = "安全打开", l = true) : n == "openwithoutyyb" ? (m = "安全打开", l = l || false) : n == "update" ? (o || !q ? window.appIsYYB ? (p = true, m = "立即更新") : m = s ? "立即更新" : "安全更新" : m = "安装应用宝，安全更新" + q, l = l || !!o) : n == "loading" ? (w = true, m = g ? "下载中" : "应用宝下载中", l = l || !!o) : n == "down" ? (i ? (m = "大王卡免流下载", l = l || !!o, p = true) : o || !q ? (m = g ? g : "安全下载", l = l || !!o, p = true) : m = g ? g : "安装应用宝，安全下载" + q, (window.appIsYYB || s) && (m = "立即下载"), l = l || !!o) : n == "iosdown" ? (m = "去App Store下载 ", l = true) : (i ? m = "大王卡免流下载" : m = g ? g : "安全下载", l = l || !!o, p = true, (window.appIsYYB || s) && (m = "立即下载"));
                    if (l) {
                        $(".dom-normal-btn").hide();
                        $("#high-download-tips").hide();
                        $("#btn-fast-download .flag-recommend").hide()
                    } else {
                        if (!h) {
                            switch (n) {
                                case "update":
                                    h = "普通更新";
                                    $("#btn-normal-download").removeClass("normal-open");
                                    break;
                                case "down":
                                    h = "普通下载";
                                    $("#btn-normal-download").removeClass("normal-open");
                                    break;
                                case "openwithoutyyb":
                                    h = "普通打开";
                                    $("#btn-normal-download").addClass("normal-open");
                                    break
                            }
                        }
                        $(".dom-normal-btn").show();
                        $("#btn-normal-download").text(h);
                        $("#btn-fast-download .flag-recommend").show()
                    }
                    if (n == "loading") {
                        var x = "<span class='ani-dot-txt'>" + m + "</span><span class='ani-dot'>...</span>";
                        r.removeClass("normal").addClass("downloading").html(x);
                        r.find(".downloading .bar").css("width", !!t ? t + "%" : "0%");
                        (!l || UI.getQuery("hideNormalBtn")) && $("#high-download-tips").show() && $(".dom-normal-btn").hide()
                    } else {
                        p ? r.removeClass("downloading").addClass("normal").html("<span class='high-download-txt'>" + m + "</span>") : r.removeClass("downloading").addClass("normal").html(m);
                        !l && $(".dom-normal-btn").show() && $("#high-download-tips").hide()
                    }
                    if (n == "update" && o) {
                        $("#btn-normal-download").show();
                        $("#btn-normal-download").addClass("safe-open");
                        $("#btn-normal-download").text("安全打开");
                        return
                    } else {
                        $("#btn-normal-download").removeClass("safe-open")
                    }
                }
            }(),
            c = function() {
                var g = function() {
                        $("#appbao-download-banner").show()
                    },
                    h = function() {
                        $("#appbao-download-banner").hide()
                    },
                    i = function() {};
                return {
                    init: i,
                    show: g,
                    hide: h
                }
            }(),
            d = function() {
                var h = function(j) {
                        j = j || {};
                        $("#normaldialog .appname").text(j.appname || "");
                        $("#normaldialog .btn-ok").off("click").on("click", j.ok || function() {
                            g()
                        });
                        $("#normaldialog .btn-cancel").off("click").on("click", j.cancel || function() {
                            g()
                        });
                        $("#normaldialog").show()
                    },
                    g = function() {
                        $("#normaldialog").hide()
                    },
                    i = function() {
                        $("#normaldialog .btn-close").off("click").on("click", function() {
                            g()
                        });
                        isForKingCard && ($("#normalDownDialogTips").text("（如果您是大王卡用户，建议选择免流下载）"), $("#normalOpenDialogFastDownBtn").text("免流下载"))
                    };
                return {
                    init: i,
                    show: h,
                    hide: g
                }
            }(),
            f = function() {
                var h = function(j) {
                        j = j || {};
                        $("#normalopendialog .appname").text(j.appname || "");
                        $("#normalopendialog .btn-ok").off("click").on("click", j.ok || function() {
                            g()
                        });
                        $("#normalopendialog .btn-cancel").off("click").on("click", j.cancel || function() {
                            g()
                        });
                        $("#normalopendialog").show()
                    },
                    g = function() {
                        $("#normalopendialog").hide()
                    },
                    i = function() {
                        $("#normalopendialog .btn-close").off("click").on("click", function() {
                            g()
                        })
                    };
                return {
                    init: i,
                    show: h,
                    hide: g
                }
            }();
        a.normalDialog = d;
        a.appbaoBanner = c;
        a.updateDownBtn = b;
        a.normalOpenDialog = f
    })(window.page)
}

function bindEvent() {
    var a = function(b) {
        checkState(function() {
            oneLog(function() {
                var d = "";
                ua.browser.wechat ? d = installState.appbao && UI.compareVersion(installState.appbao, AppbaoBaseVersion) > 0 ? "wx_android_yyb_giftclick" : "wx_android_noyyb_giftclick" : ua.browser.mqq ? d = installState.appbao && UI.compareVersion(installState.appbao, AppbaoBaseVersion) > 0 ? "mqq_android_yyb_giftclick" : "mqq_android_noyyb_giftclick" : ua.browser.qqbrowser ? d = installState.appbao && UI.compareVersion(installState.appbao, AppbaoBaseVersionName) > 0 ? "mtt_android_yyb_giftclick" : "mtt_android_noyyb_giftclick" : d = "other_android_giftclick";
                report(d)
            }, "giftdownclick")
        });
        window.fastClickTrigger = true;
        var c = $(b.target);
        window.currentGiftClickIndex = c.attr("data-index");
        $("#btn-fast-download").trigger(UI.EVENTS.touchstartEv(), ["fromGift"])
    };
    $(document.body).off("click", ".giftDownBtn", a).on("click", ".giftDownBtn", a);
    $(".gift-panel .card-more").click(function(b) {
        $(this).remove();
        $(".gift-panel li").show();
        checkState(function() {
            oneLog(function() {
                var c = "";
                ua.browser.wechat ? c = installState.appbao && UI.compareVersion(installState.appbao, AppbaoBaseVersion) > 0 ? "wx_android_yyb_giftmoreclick" : "wx_android_noyyb_giftmoreclick" : ua.browser.mqq ? c = installState.appbao && UI.compareVersion(installState.appbao, AppbaoBaseVersion) > 0 ? "mqq_android_yyb_giftmoreclick" : "mqq_android_noyyb_giftmoreclick" : ua.browser.qqbrowser ? c = installState.appbao && UI.compareVersion(installState.appbao, AppbaoBaseVersionName) > 0 ? "mtt_android_yyb_giftmoreclick" : "mtt_android_noyyb_giftmoreclick" : c = "other_android_giftmoreclick";
                report(c)
            }, "giftmoreclick")
        })
    })
}
requestPromise.then(function(a) {
    configFun();
    pageFun();
    downloadFun();
    domFun();
    snapFun();
    bindEvent()
}).promiseCatch(function(a) {
    console.log(a)
});
// </script>


{ /* <script type = "text/javascript" > */ }
load_script("css/tcss.min.html", function() {
    if (window.tcssPV) {
        var pkgname = UI.getQuery('pkgname');
        var fromcase = UI.getQuery('fromcase');
        var path = pkgname + fromcase;
        var referUrl = document.referrer || '',
            re = /(\w+):\/\/([^\:|\/]+)(\:\d*)?(.*\/)([^#|\?|\n]+)?(#.*)?(\?.*)?/i,
            result = referUrl.match(re) || [];
        tcssPV.send('micro.a.app.com', path, {
            "referURL": referUrl || '-',
            "referDomain": result[2] || '-',
            "referPath": result[4] || '-'
        });
    }
}); { /* </script> */ }