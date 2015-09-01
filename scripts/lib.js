!function (a, b, c) {
    "use strict";
    function d(a, b) {
        return b = b || Error, function () {
            var c, d, e = arguments[0], f = "[" + (a ? a + ":" : "") + e + "] ", g = arguments[1], h = arguments;
            for (c = f + g.replace(/\{\d+\}/g, function (a) {
                    var b = +a.slice(1, -1);
                    return b + 2 < h.length ? ma(h[b + 2]) : a
                }), c = c + "\nhttp://errors.angularjs.org/1.3.15/" + (a ? a + "/" : "") + e, d = 2; d < arguments.length; d++)c = c + (2 == d ? "?" : "&") + "p" + (d - 2) + "=" + encodeURIComponent(ma(arguments[d]));
            return new b(c)
        }
    }

    function e(a) {
        if (null == a || z(a))return !1;
        var b = a.length;
        return a.nodeType === sd && b ? !0 : u(a) || ld(a) || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function f(a, b, c) {
        var d, g;
        if (a)if (x(a))for (d in a)"prototype" == d || "length" == d || "name" == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d, a); else if (ld(a) || e(a)) {
            var h = "object" != typeof a;
            for (d = 0, g = a.length; g > d; d++)(h || d in a) && b.call(c, a[d], d, a)
        } else if (a.forEach && a.forEach !== f)a.forEach(b, c, a); else for (d in a)a.hasOwnProperty(d) && b.call(c, a[d], d, a);
        return a
    }

    function g(a) {
        return Object.keys(a).sort()
    }

    function h(a, b, c) {
        for (var d = g(a), e = 0; e < d.length; e++)b.call(c, a[d[e]], d[e]);
        return d
    }

    function i(a) {
        return function (b, c) {
            a(c, b)
        }
    }

    function j() {
        return ++jd
    }

    function k(a, b) {
        b ? a.$$hashKey = b : delete a.$$hashKey
    }

    function l(a) {
        for (var b = a.$$hashKey, c = 1, d = arguments.length; d > c; c++) {
            var e = arguments[c];
            if (e)for (var f = Object.keys(e), g = 0, h = f.length; h > g; g++) {
                var i = f[g];
                a[i] = e[i]
            }
        }
        return k(a, b), a
    }

    function m(a) {
        return parseInt(a, 10)
    }

    function n(a, b) {
        return l(Object.create(a), b)
    }

    function o() {
    }

    function p(a) {
        return a
    }

    function q(a) {
        return function () {
            return a
        }
    }

    function r(a) {
        return "undefined" == typeof a
    }

    function s(a) {
        return "undefined" != typeof a
    }

    function t(a) {
        return null !== a && "object" == typeof a
    }

    function u(a) {
        return "string" == typeof a
    }

    function v(a) {
        return "number" == typeof a
    }

    function w(a) {
        return "[object Date]" === gd.call(a)
    }

    function x(a) {
        return "function" == typeof a
    }

    function y(a) {
        return "[object RegExp]" === gd.call(a)
    }

    function z(a) {
        return a && a.window === a
    }

    function A(a) {
        return a && a.$evalAsync && a.$watch
    }

    function B(a) {
        return "[object File]" === gd.call(a)
    }

    function C(a) {
        return "[object FormData]" === gd.call(a)
    }

    function D(a) {
        return "[object Blob]" === gd.call(a)
    }

    function E(a) {
        return "boolean" == typeof a
    }

    function F(a) {
        return a && x(a.then)
    }

    function G(a) {
        return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
    }

    function H(a) {
        var b, c = {}, d = a.split(",");
        for (b = 0; b < d.length; b++)c[d[b]] = !0;
        return c
    }

    function I(a) {
        return Wc(a.nodeName || a[0] && a[0].nodeName)
    }

    function J(a, b) {
        var c = a.indexOf(b);
        return c >= 0 && a.splice(c, 1), b
    }

    function K(a, b, c, d) {
        if (z(a) || A(a))throw hd("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
        if (b) {
            if (a === b)throw hd("cpi", "Can't copy! Source and destination are identical.");
            if (c = c || [], d = d || [], t(a)) {
                var e = c.indexOf(a);
                if (-1 !== e)return d[e];
                c.push(a), d.push(b)
            }
            var g;
            if (ld(a)) {
                b.length = 0;
                for (var h = 0; h < a.length; h++)g = K(a[h], null, c, d), t(a[h]) && (c.push(a[h]), d.push(g)), b.push(g)
            } else {
                var i = b.$$hashKey;
                ld(b) ? b.length = 0 : f(b, function (a, c) {
                    delete b[c]
                });
                for (var j in a)a.hasOwnProperty(j) && (g = K(a[j], null, c, d), t(a[j]) && (c.push(a[j]), d.push(g)), b[j] = g);
                k(b, i)
            }
        } else if (b = a, a)if (ld(a))b = K(a, [], c, d); else if (w(a))b = new Date(a.getTime()); else if (y(a))b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), b.lastIndex = a.lastIndex; else if (t(a)) {
            var l = Object.create(Object.getPrototypeOf(a));
            b = K(a, l, c, d)
        }
        return b
    }

    function L(a, b) {
        if (ld(a)) {
            b = b || [];
            for (var c = 0, d = a.length; d > c; c++)b[c] = a[c]
        } else if (t(a)) {
            b = b || {};
            for (var e in a)("$" !== e.charAt(0) || "$" !== e.charAt(1)) && (b[e] = a[e])
        }
        return b || a
    }

    function M(a, b) {
        if (a === b)return !0;
        if (null === a || null === b)return !1;
        if (a !== a && b !== b)return !0;
        var d, e, f, g = typeof a, h = typeof b;
        if (g == h && "object" == g) {
            if (!ld(a)) {
                if (w(a))return w(b) ? M(a.getTime(), b.getTime()) : !1;
                if (y(a))return y(b) ? a.toString() == b.toString() : !1;
                if (A(a) || A(b) || z(a) || z(b) || ld(b) || w(b) || y(b))return !1;
                f = {};
                for (e in a)if ("$" !== e.charAt(0) && !x(a[e])) {
                    if (!M(a[e], b[e]))return !1;
                    f[e] = !0
                }
                for (e in b)if (!f.hasOwnProperty(e) && "$" !== e.charAt(0) && b[e] !== c && !x(b[e]))return !1;
                return !0
            }
            if (!ld(b))return !1;
            if ((d = a.length) == b.length) {
                for (e = 0; d > e; e++)if (!M(a[e], b[e]))return !1;
                return !0
            }
        }
        return !1
    }

    function N(a, b, c) {
        return a.concat(dd.call(b, c))
    }

    function O(a, b) {
        return dd.call(a, b || 0)
    }

    function P(a, b) {
        var c = arguments.length > 2 ? O(arguments, 2) : [];
        return !x(b) || b instanceof RegExp ? b : c.length ? function () {
            return arguments.length ? b.apply(a, N(c, arguments, 0)) : b.apply(a, c)
        } : function () {
            return arguments.length ? b.apply(a, arguments) : b.call(a)
        }
    }

    function Q(a, d) {
        var e = d;
        return "string" == typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? e = c : z(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : A(d) && (e = "$SCOPE"), e
    }

    function R(a, b) {
        return "undefined" == typeof a ? c : (v(b) || (b = b ? 2 : null), JSON.stringify(a, Q, b))
    }

    function S(a) {
        return u(a) ? JSON.parse(a) : a
    }

    function T(a) {
        a = ad(a).clone();
        try {
            a.empty()
        } catch (b) {
        }
        var c = ad("<div>").append(a).html();
        try {
            return a[0].nodeType === td ? Wc(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
                return "<" + Wc(b)
            })
        } catch (b) {
            return Wc(c)
        }
    }

    function U(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {
        }
    }

    function V(a) {
        var b, c, d = {};
        return f((a || "").split("&"), function (a) {
            if (a && (b = a.replace(/\+/g, "%20").split("="), c = U(b[0]), s(c))) {
                var e = s(b[1]) ? U(b[1]) : !0;
                Xc.call(d, c) ? ld(d[c]) ? d[c].push(e) : d[c] = [d[c], e] : d[c] = e
            }
        }), d
    }

    function W(a) {
        var b = [];
        return f(a, function (a, c) {
            ld(a) ? f(a, function (a) {
                b.push(Y(c, !0) + (a === !0 ? "" : "=" + Y(a, !0)))
            }) : b.push(Y(c, !0) + (a === !0 ? "" : "=" + Y(a, !0)))
        }), b.length ? b.join("&") : ""
    }

    function X(a) {
        return Y(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function Y(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+")
    }

    function Z(a, b) {
        var c, d, e = pd.length;
        for (a = ad(a), d = 0; e > d; ++d)if (c = pd[d] + b, u(c = a.attr(c)))return c;
        return null
    }

    function $(a, b) {
        var c, d, e = {};
        f(pd, function (b) {
            var e = b + "app";
            !c && a.hasAttribute && a.hasAttribute(e) && (c = a, d = a.getAttribute(e))
        }), f(pd, function (b) {
            var e, f = b + "app";
            !c && (e = a.querySelector("[" + f.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(f))
        }), c && (e.strictDi = null !== Z(c, "strict-di"), b(c, d ? [d] : [], e))
    }

    function _(c, d, e) {
        t(e) || (e = {});
        var g = {strictDi: !1};
        e = l(g, e);
        var h = function () {
            if (c = ad(c), c.injector()) {
                var a = c[0] === b ? "document" : T(c);
                throw hd("btstrpd", "App Already Bootstrapped with this Element '{0}'", a.replace(/</, "&lt;").replace(/>/, "&gt;"))
            }
            d = d || [], d.unshift(["$provide", function (a) {
                a.value("$rootElement", c)
            }]), e.debugInfoEnabled && d.push(["$compileProvider", function (a) {
                a.debugInfoEnabled(!0)
            }]), d.unshift("ng");
            var f = Sa(d, e.strictDi);
            return f.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
                a.$apply(function () {
                    b.data("$injector", d), c(b)(a)
                })
            }]), f
        }, i = /^NG_ENABLE_DEBUG_INFO!/, j = /^NG_DEFER_BOOTSTRAP!/;
        return a && i.test(a.name) && (e.debugInfoEnabled = !0, a.name = a.name.replace(i, "")), a && !j.test(a.name) ? h() : (a.name = a.name.replace(j, ""), id.resumeBootstrap = function (a) {
            return f(a, function (a) {
                d.push(a)
            }), h()
        }, void(x(id.resumeDeferredBootstrap) && id.resumeDeferredBootstrap()))
    }

    function aa() {
        a.name = "NG_ENABLE_DEBUG_INFO!" + a.name, a.location.reload()
    }

    function ba(a) {
        var b = id.element(a).injector();
        if (!b)throw hd("test", "no injector found for element argument to getTestability");
        return b.get("$$testability")
    }

    function ca(a, b) {
        return b = b || "_", a.replace(qd, function (a, c) {
            return (c ? b : "") + a.toLowerCase()
        })
    }

    function da() {
        var b;
        rd || (bd = a.jQuery, bd && bd.fn.on ? (ad = bd, l(bd.fn, {
            scope: Ld.scope,
            isolateScope: Ld.isolateScope,
            controller: Ld.controller,
            injector: Ld.injector,
            inheritedData: Ld.inheritedData
        }), b = bd.cleanData, bd.cleanData = function (a) {
            var c;
            if (kd)kd = !1; else for (var d, e = 0; null != (d = a[e]); e++)c = bd._data(d, "events"), c && c.$destroy && bd(d).triggerHandler("$destroy");
            b(a)
        }) : ad = ua, id.element = ad, rd = !0)
    }

    function ea(a, b, c) {
        if (!a)throw hd("areq", "Argument '{0}' is {1}", b || "?", c || "required");
        return a
    }

    function fa(a, b, c) {
        return c && ld(a) && (a = a[a.length - 1]), ea(x(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), a
    }

    function ga(a, b) {
        if ("hasOwnProperty" === a)throw hd("badname", "hasOwnProperty is not a valid {0} name", b)
    }

    function ha(a, b, c) {
        if (!b)return a;
        for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++)d = e[h], a && (a = (f = a)[d]);
        return !c && x(a) ? P(f, a) : a
    }

    function ia(a) {
        var b = a[0], c = a[a.length - 1], d = [b];
        do {
            if (b = b.nextSibling, !b)break;
            d.push(b)
        } while (b !== c);
        return ad(d)
    }

    function ja() {
        return Object.create(null)
    }

    function ka(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c())
        }

        var c = d("$injector"), e = d("ng"), f = b(a, "angular", Object);
        return f.$$minErr = f.$$minErr || d, b(f, "module", function () {
            var a = {};
            return function (d, f, g) {
                var h = function (a, b) {
                    if ("hasOwnProperty" === a)throw e("badname", "hasOwnProperty is not a valid {0} name", b)
                };
                return h(d, "module"), f && a.hasOwnProperty(d) && (a[d] = null), b(a, d, function () {
                    function a(a, c, d, e) {
                        return e || (e = b), function () {
                            return e[d || "push"]([a, c, arguments]), j
                        }
                    }

                    if (!f)throw c("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", d);
                    var b = [], e = [], h = [], i = a("$injector", "invoke", "push", e), j = {
                        _invokeQueue: b,
                        _configBlocks: e,
                        _runBlocks: h,
                        requires: f,
                        name: d,
                        provider: a("$provide", "provider"),
                        factory: a("$provide", "factory"),
                        service: a("$provide", "service"),
                        value: a("$provide", "value"),
                        constant: a("$provide", "constant", "unshift"),
                        animation: a("$animateProvider", "register"),
                        filter: a("$filterProvider", "register"),
                        controller: a("$controllerProvider", "register"),
                        directive: a("$compileProvider", "directive"),
                        config: i,
                        run: function (a) {
                            return h.push(a), this
                        }
                    };
                    return g && i(g), j
                })
            }
        })
    }

    function la(a) {
        var b = [];
        return JSON.stringify(a, function (a, c) {
            if (c = Q(a, c), t(c)) {
                if (b.indexOf(c) >= 0)return "<<already seen>>";
                b.push(c)
            }
            return c
        })
    }

    function ma(a) {
        return "function" == typeof a ? a.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof a ? "undefined" : "string" != typeof a ? la(a) : a
    }

    function na(b) {
        l(b, {
            bootstrap: _,
            copy: K,
            extend: l,
            equals: M,
            element: ad,
            forEach: f,
            injector: Sa,
            noop: o,
            bind: P,
            toJson: R,
            fromJson: S,
            identity: p,
            isUndefined: r,
            isDefined: s,
            isString: u,
            isFunction: x,
            isObject: t,
            isNumber: v,
            isElement: G,
            isArray: ld,
            version: xd,
            isDate: w,
            lowercase: Wc,
            uppercase: Yc,
            callbacks: {counter: 0},
            getTestability: ba,
            $$minErr: d,
            $$csp: od,
            reloadWithDebugInfo: aa
        }), cd = ka(a);
        try {
            cd("ngLocale")
        } catch (c) {
            cd("ngLocale", []).provider("$locale", qb)
        }
        cd("ng", ["ngLocale"], ["$provide", function (a) {
            a.provider({$$sanitizeUri: Wb}), a.provider("$compile", Za).directive({
                a: De,
                input: Ue,
                textarea: Ue,
                form: Ie,
                script: Kf,
                select: Nf,
                style: Pf,
                option: Of,
                ngBind: Xe,
                ngBindHtml: Ze,
                ngBindTemplate: Ye,
                ngClass: _e,
                ngClassEven: bf,
                ngClassOdd: af,
                ngCloak: cf,
                ngController: df,
                ngForm: Je,
                ngHide: Ef,
                ngIf: gf,
                ngInclude: hf,
                ngInit: kf,
                ngNonBindable: yf,
                ngPluralize: zf,
                ngRepeat: Af,
                ngShow: Df,
                ngStyle: Ff,
                ngSwitch: Gf,
                ngSwitchWhen: Hf,
                ngSwitchDefault: If,
                ngOptions: Mf,
                ngTransclude: Jf,
                ngModel: vf,
                ngList: lf,
                ngChange: $e,
                pattern: Rf,
                ngPattern: Rf,
                required: Qf,
                ngRequired: Qf,
                minlength: Tf,
                ngMinlength: Tf,
                maxlength: Sf,
                ngMaxlength: Sf,
                ngValue: We,
                ngModelOptions: xf
            }).directive({ngInclude: jf}).directive(Ee).directive(ef), a.provider({
                $anchorScroll: Ta,
                $animate: Vd,
                $browser: Wa,
                $cacheFactory: Xa,
                $controller: bb,
                $document: cb,
                $exceptionHandler: db,
                $filter: gc,
                $interpolate: ob,
                $interval: pb,
                $http: kb,
                $httpBackend: mb,
                $location: Eb,
                $log: Fb,
                $parse: Qb,
                $rootScope: Vb,
                $q: Rb,
                $$q: Sb,
                $sce: $b,
                $sceDelegate: Zb,
                $sniffer: _b,
                $templateCache: Ya,
                $templateRequest: ac,
                $$testability: bc,
                $timeout: cc,
                $window: fc,
                $$rAF: Ub,
                $$asyncCallback: Ua,
                $$jqLite: Na
            })
        }])
    }

    function oa() {
        return ++zd
    }

    function pa(a) {
        return a.replace(Cd, function (a, b, c, d) {
            return d ? c.toUpperCase() : c
        }).replace(Dd, "Moz$1")
    }

    function qa(a) {
        return !Hd.test(a)
    }

    function ra(a) {
        var b = a.nodeType;
        return b === sd || !b || b === vd
    }

    function sa(a, b) {
        var c, d, e, g, h = b.createDocumentFragment(), i = [];
        if (qa(a))i.push(b.createTextNode(a)); else {
            for (c = c || h.appendChild(b.createElement("div")), d = (Id.exec(a) || ["", ""])[1].toLowerCase(), e = Kd[d] || Kd._default, c.innerHTML = e[1] + a.replace(Jd, "<$1></$2>") + e[2], g = e[0]; g--;)c = c.lastChild;
            i = N(i, c.childNodes), c = h.firstChild, c.textContent = ""
        }
        return h.textContent = "", h.innerHTML = "", f(i, function (a) {
            h.appendChild(a)
        }), h
    }

    function ta(a, c) {
        c = c || b;
        var d;
        return (d = Gd.exec(a)) ? [c.createElement(d[1])] : (d = sa(a, c)) ? d.childNodes : []
    }

    function ua(a) {
        if (a instanceof ua)return a;
        var b;
        if (u(a) && (a = md(a), b = !0), !(this instanceof ua)) {
            if (b && "<" != a.charAt(0))throw Fd("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new ua(a)
        }
        b ? Ea(this, ta(a)) : Ea(this, a)
    }

    function va(a) {
        return a.cloneNode(!0)
    }

    function wa(a, b) {
        if (b || ya(a), a.querySelectorAll)for (var c = a.querySelectorAll("*"), d = 0, e = c.length; e > d; d++)ya(c[d])
    }

    function xa(a, b, c, d) {
        if (s(d))throw Fd("offargs", "jqLite#off() does not support the `selector` argument");
        var e = za(a), g = e && e.events, h = e && e.handle;
        if (h)if (b)f(b.split(" "), function (b) {
            if (s(c)) {
                var d = g[b];
                if (J(d || [], c), d && d.length > 0)return
            }
            Bd(a, b, h), delete g[b]
        }); else for (b in g)"$destroy" !== b && Bd(a, b, h), delete g[b]
    }

    function ya(a, b) {
        var d = a.ng339, e = d && yd[d];
        if (e) {
            if (b)return void delete e.data[b];
            e.handle && (e.events.$destroy && e.handle({}, "$destroy"), xa(a)), delete yd[d], a.ng339 = c
        }
    }

    function za(a, b) {
        var d = a.ng339, e = d && yd[d];
        return b && !e && (a.ng339 = d = oa(), e = yd[d] = {events: {}, data: {}, handle: c}), e
    }

    function Aa(a, b, c) {
        if (ra(a)) {
            var d = s(c), e = !d && b && !t(b), f = !b, g = za(a, !e), h = g && g.data;
            if (d)h[b] = c; else {
                if (f)return h;
                if (e)return h && h[b];
                l(h, b)
            }
        }
    }

    function Ba(a, b) {
        return a.getAttribute ? (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1 : !1
    }

    function Ca(a, b) {
        b && a.setAttribute && f(b.split(" "), function (b) {
            a.setAttribute("class", md((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + md(b) + " ", " ")))
        })
    }

    function Da(a, b) {
        if (b && a.setAttribute) {
            var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            f(b.split(" "), function (a) {
                a = md(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ")
            }), a.setAttribute("class", md(c))
        }
    }

    function Ea(a, b) {
        if (b)if (b.nodeType)a[a.length++] = b; else {
            var c = b.length;
            if ("number" == typeof c && b.window !== b) {
                if (c)for (var d = 0; c > d; d++)a[a.length++] = b[d]
            } else a[a.length++] = b
        }
    }

    function Fa(a, b) {
        return Ga(a, "$" + (b || "ngController") + "Controller")
    }

    function Ga(a, b, d) {
        a.nodeType == vd && (a = a.documentElement);
        for (var e = ld(b) ? b : [b]; a;) {
            for (var f = 0, g = e.length; g > f; f++)if ((d = ad.data(a, e[f])) !== c)return d;
            a = a.parentNode || a.nodeType === wd && a.host
        }
    }

    function Ha(a) {
        for (wa(a, !0); a.firstChild;)a.removeChild(a.firstChild)
    }

    function Ia(a, b) {
        b || wa(a);
        var c = a.parentNode;
        c && c.removeChild(a)
    }

    function Ja(b, c) {
        c = c || a, "complete" === c.document.readyState ? c.setTimeout(b) : ad(c).on("load", b)
    }

    function Ka(a, b) {
        var c = Md[b.toLowerCase()];
        return c && Nd[I(a)] && c
    }

    function La(a, b) {
        var c = a.nodeName;
        return ("INPUT" === c || "TEXTAREA" === c) && Od[b]
    }

    function Ma(a, b) {
        var c = function (c, d) {
            c.isDefaultPrevented = function () {
                return c.defaultPrevented
            };
            var e = b[d || c.type], f = e ? e.length : 0;
            if (f) {
                if (r(c.immediatePropagationStopped)) {
                    var g = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function () {
                        c.immediatePropagationStopped = !0, c.stopPropagation && c.stopPropagation(), g && g.call(c)
                    }
                }
                c.isImmediatePropagationStopped = function () {
                    return c.immediatePropagationStopped === !0
                }, f > 1 && (e = L(e));
                for (var h = 0; f > h; h++)c.isImmediatePropagationStopped() || e[h].call(a, c)
            }
        };
        return c.elem = a, c
    }

    function Na() {
        this.$get = function () {
            return l(ua, {
                hasClass: function (a, b) {
                    return a.attr && (a = a[0]), Ba(a, b)
                }, addClass: function (a, b) {
                    return a.attr && (a = a[0]), Da(a, b)
                }, removeClass: function (a, b) {
                    return a.attr && (a = a[0]), Ca(a, b)
                }
            })
        }
    }

    function Oa(a, b) {
        var c = a && a.$$hashKey;
        if (c)return "function" == typeof c && (c = a.$$hashKey()), c;
        var d = typeof a;
        return c = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || j)() : d + ":" + a
    }

    function Pa(a, b) {
        if (b) {
            var c = 0;
            this.nextUid = function () {
                return ++c
            }
        }
        f(a, this.put, this)
    }

    function Qa(a) {
        var b = a.toString().replace(Sd, ""), c = b.match(Pd);
        return c ? "function(" + (c[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function Ra(a, b, c) {
        var d, e, g, h;
        if ("function" == typeof a) {
            if (!(d = a.$inject)) {
                if (d = [], a.length) {
                    if (b)throw u(c) && c || (c = a.name || Qa(a)), Td("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", c);
                    e = a.toString().replace(Sd, ""), g = e.match(Pd), f(g[1].split(Qd), function (a) {
                        a.replace(Rd, function (a, b, c) {
                            d.push(c)
                        })
                    })
                }
                a.$inject = d
            }
        } else ld(a) ? (h = a.length - 1, fa(a[h], "fn"), d = a.slice(0, h)) : fa(a, "fn", !0);
        return d
    }

    function Sa(a, b) {
        function d(a) {
            return function (b, c) {
                return t(b) ? void f(b, i(a)) : a(b, c)
            }
        }

        function e(a, b) {
            if (ga(a, "service"), (x(b) || ld(b)) && (b = A.instantiate(b)), !b.$get)throw Td("pget", "Provider '{0}' must define $get factory method.", a);
            return z[a + v] = b
        }

        function g(a, b) {
            return function () {
                var c = C.invoke(b, this);
                if (r(c))throw Td("undef", "Provider '{0}' must return a value from $get factory method.", a);
                return c
            }
        }

        function h(a, b, c) {
            return e(a, {$get: c !== !1 ? g(a, b) : b})
        }

        function j(a, b) {
            return h(a, ["$injector", function (a) {
                return a.instantiate(b)
            }])
        }

        function k(a, b) {
            return h(a, q(b), !1)
        }

        function l(a, b) {
            ga(a, "constant"), z[a] = b, B[a] = b
        }

        function m(a, b) {
            var c = A.get(a + v), d = c.$get;
            c.$get = function () {
                var a = C.invoke(d, c);
                return C.invoke(b, null, {$delegate: a})
            }
        }

        function n(a) {
            var b, c = [];
            return f(a, function (a) {
                function d(a) {
                    var b, c;
                    for (b = 0, c = a.length; c > b; b++) {
                        var d = a[b], e = A.get(d[0]);
                        e[d[1]].apply(e, d[2])
                    }
                }

                if (!y.get(a)) {
                    y.put(a, !0);
                    try {
                        u(a) ? (b = cd(a), c = c.concat(n(b.requires)).concat(b._runBlocks), d(b._invokeQueue), d(b._configBlocks)) : x(a) ? c.push(A.invoke(a)) : ld(a) ? c.push(A.invoke(a)) : fa(a, "module")
                    } catch (e) {
                        throw ld(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Td("modulerr", "Failed to instantiate module {0} due to:\n{1}", a, e.stack || e.message || e)
                    }
                }
            }), c
        }

        function p(a, c) {
            function d(b, d) {
                if (a.hasOwnProperty(b)) {
                    if (a[b] === s)throw Td("cdep", "Circular dependency found: {0}", b + " <- " + w.join(" <- "));
                    return a[b]
                }
                try {
                    return w.unshift(b), a[b] = s, a[b] = c(b, d)
                } catch (e) {
                    throw a[b] === s && delete a[b], e
                } finally {
                    w.shift()
                }
            }

            function e(a, c, e, f) {
                "string" == typeof e && (f = e, e = null);
                var g, h, i, j = [], k = Sa.$$annotate(a, b, f);
                for (h = 0, g = k.length; g > h; h++) {
                    if (i = k[h], "string" != typeof i)throw Td("itkn", "Incorrect injection token! Expected service name as string, got {0}", i);
                    j.push(e && e.hasOwnProperty(i) ? e[i] : d(i, f))
                }
                return ld(a) && (a = a[g]), a.apply(c, j)
            }

            function f(a, b, c) {
                var d = Object.create((ld(a) ? a[a.length - 1] : a).prototype || null), f = e(a, d, b, c);
                return t(f) || x(f) ? f : d
            }

            return {
                invoke: e, instantiate: f, get: d, annotate: Sa.$$annotate, has: function (b) {
                    return z.hasOwnProperty(b + v) || a.hasOwnProperty(b)
                }
            }
        }

        b = b === !0;
        var s = {}, v = "Provider", w = [], y = new Pa([], !0), z = {
            $provide: {
                provider: d(e),
                factory: d(h),
                service: d(j),
                value: d(k),
                constant: d(l),
                decorator: m
            }
        }, A = z.$injector = p(z, function (a, b) {
            throw id.isString(b) && w.push(b), Td("unpr", "Unknown provider: {0}", w.join(" <- "))
        }), B = {}, C = B.$injector = p(B, function (a, b) {
            var d = A.get(a + v, b);
            return C.invoke(d.$get, d, c, a)
        });
        return f(n(a), function (a) {
            C.invoke(a || o)
        }), C
    }

    function Ta() {
        var a = !0;
        this.disableAutoScrolling = function () {
            a = !1
        }, this.$get = ["$window", "$location", "$rootScope", function (b, c, d) {
            function e(a) {
                var b = null;
                return Array.prototype.some.call(a, function (a) {
                    return "a" === I(a) ? (b = a, !0) : void 0
                }), b
            }

            function f() {
                var a = h.yOffset;
                if (x(a))a = a(); else if (G(a)) {
                    var c = a[0], d = b.getComputedStyle(c);
                    a = "fixed" !== d.position ? 0 : c.getBoundingClientRect().bottom
                } else v(a) || (a = 0);
                return a
            }

            function g(a) {
                if (a) {
                    a.scrollIntoView();
                    var c = f();
                    if (c) {
                        var d = a.getBoundingClientRect().top;
                        b.scrollBy(0, d - c)
                    }
                } else b.scrollTo(0, 0)
            }

            function h() {
                var a, b = c.hash();
                b ? (a = i.getElementById(b)) ? g(a) : (a = e(i.getElementsByName(b))) ? g(a) : "top" === b && g(null) : g(null)
            }

            var i = b.document;
            return a && d.$watch(function () {
                return c.hash()
            }, function (a, b) {
                (a !== b || "" !== a) && Ja(function () {
                    d.$evalAsync(h)
                })
            }), h
        }]
    }

    function Ua() {
        this.$get = ["$$rAF", "$timeout", function (a, b) {
            return a.supported ? function (b) {
                return a(b)
            } : function (a) {
                return b(a, 0, !1)
            }
        }]
    }

    function Va(a, b, d, e) {
        function g(a) {
            try {
                a.apply(null, O(arguments, 1))
            } finally {
                if (y--, 0 === y)for (; z.length;)try {
                    z.pop()()
                } catch (b) {
                    d.error(b)
                }
            }
        }

        function h(a) {
            var b = a.indexOf("#");
            return -1 === b ? "" : a.substr(b + 1)
        }

        function i(a, b) {
            !function c() {
                f(B, function (a) {
                    a()
                }), A = b(c, a)
            }()
        }

        function j() {
            l(), m()
        }

        function k() {
            try {
                return t.state
            } catch (a) {
            }
        }

        function l() {
            C = k(), C = r(C) ? null : C, M(C, J) && (C = J), J = C
        }

        function m() {
            (E !== p.url() || D !== C) && (E = p.url(), D = C, f(H, function (a) {
                a(p.url(), C)
            }))
        }

        function n(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {
                return a
            }
        }

        var p = this, q = b[0], s = a.location, t = a.history, v = a.setTimeout, w = a.clearTimeout, x = {};
        p.isMock = !1;
        var y = 0, z = [];
        p.$$completeOutstandingRequest = g, p.$$incOutstandingRequestCount = function () {
            y++
        }, p.notifyWhenNoOutstandingRequests = function (a) {
            f(B, function (a) {
                a()
            }), 0 === y ? a() : z.push(a)
        };
        var A, B = [];
        p.addPollFn = function (a) {
            return r(A) && i(100, v), B.push(a), a
        };
        var C, D, E = s.href, F = b.find("base"), G = null;
        l(), D = C, p.url = function (b, c, d) {
            if (r(d) && (d = null), s !== a.location && (s = a.location), t !== a.history && (t = a.history), b) {
                var f = D === d;
                if (E === b && (!e.history || f))return p;
                var g = E && vb(E) === vb(b);
                return E = b, D = d, !e.history || g && f ? (g || (G = b), c ? s.replace(b) : g ? s.hash = h(b) : s.href = b) : (t[c ? "replaceState" : "pushState"](d, "", b), l(), D = C), p
            }
            return G || s.href.replace(/%27/g, "'")
        }, p.state = function () {
            return C
        };
        var H = [], I = !1, J = null;
        p.onUrlChange = function (b) {
            return I || (e.history && ad(a).on("popstate", j), ad(a).on("hashchange", j), I = !0), H.push(b), b
        }, p.$$checkUrlChange = m, p.baseHref = function () {
            var a = F.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        var K = {}, L = "", N = p.baseHref();
        p.cookies = function (a, b) {
            var e, f, g, h, i;
            if (!a) {
                if (q.cookie !== L)for (L = q.cookie, f = L.split("; "), K = {}, h = 0; h < f.length; h++)g = f[h], i = g.indexOf("="), i > 0 && (a = n(g.substring(0, i)), K[a] === c && (K[a] = n(g.substring(i + 1))));
                return K
            }
            b === c ? q.cookie = encodeURIComponent(a) + "=;path=" + N + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : u(b) && (e = (q.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(b) + ";path=" + N).length + 1, e > 4096 && d.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + e + " > 4096 bytes)!"))
        }, p.defer = function (a, b) {
            var c;
            return y++, c = v(function () {
                delete x[c], g(a)
            }, b || 0), x[c] = !0, c
        }, p.defer.cancel = function (a) {
            return x[a] ? (delete x[a], w(a), g(o), !0) : !1
        }
    }

    function Wa() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, c, d) {
            return new Va(a, d, b, c)
        }]
    }

    function Xa() {
        this.$get = function () {
            function a(a, c) {
                function e(a) {
                    a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null)
                }

                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }

                if (a in b)throw d("$cacheFactory")("iid", "CacheId '{0}' is already taken!", a);
                var g = 0, h = l({}, c, {id: a}), i = {}, j = c && c.capacity || Number.MAX_VALUE, k = {}, m = null, n = null;
                return b[a] = {
                    put: function (a, b) {
                        if (j < Number.MAX_VALUE) {
                            var c = k[a] || (k[a] = {key: a});
                            e(c)
                        }
                        if (!r(b))return a in i || g++, i[a] = b, g > j && this.remove(n.key), b
                    }, get: function (a) {
                        if (j < Number.MAX_VALUE) {
                            var b = k[a];
                            if (!b)return;
                            e(b)
                        }
                        return i[a]
                    }, remove: function (a) {
                        if (j < Number.MAX_VALUE) {
                            var b = k[a];
                            if (!b)return;
                            b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete k[a]
                        }
                        delete i[a], g--
                    }, removeAll: function () {
                        i = {}, g = 0, k = {}, m = n = null
                    }, destroy: function () {
                        i = null, h = null, k = null, delete b[a]
                    }, info: function () {
                        return l({}, h, {size: g})
                    }
                }
            }

            var b = {};
            return a.info = function () {
                var a = {};
                return f(b, function (b, c) {
                    a[c] = b.info()
                }), a
            }, a.get = function (a) {
                return b[a]
            }, a
        }
    }

    function Ya() {
        this.$get = ["$cacheFactory", function (a) {
            return a("templates")
        }]
    }

    function Za(a, d) {
        function e(a, b) {
            var c = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/, d = {};
            return f(a, function (a, e) {
                var f = a.match(c);
                if (!f)throw Wd("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", b, e, a);
                d[e] = {mode: f[1][0], collection: "*" === f[2], optional: "?" === f[3], attrName: f[4] || e}
            }), d
        }

        var g = {}, h = "Directive", j = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, k = /(([\w\-]+)(?:\:([^;]+))?;?)/, m = H("ngSrc,ngSrcset,src,srcset"), r = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, v = /^(on[a-z]+|formaction)$/;
        this.directive = function y(b, c) {
            return ga(b, "directive"), u(b) ? (ea(c, "directiveFactory"), g.hasOwnProperty(b) || (g[b] = [], a.factory(b + h, ["$injector", "$exceptionHandler", function (a, c) {
                var d = [];
                return f(g[b], function (f, g) {
                    try {
                        var h = a.invoke(f);
                        x(h) ? h = {compile: q(h)} : !h.compile && h.link && (h.compile = q(h.link)), h.priority = h.priority || 0, h.index = g, h.name = h.name || b, h.require = h.require || h.controller && h.name, h.restrict = h.restrict || "EA", t(h.scope) && (h.$$isolateBindings = e(h.scope, h.name)), d.push(h)
                    } catch (i) {
                        c(i)
                    }
                }), d
            }])), g[b].push(c)) : f(b, i(y)), this
        }, this.aHrefSanitizationWhitelist = function (a) {
            return s(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function (a) {
            return s(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist()
        };
        var w = !0;
        this.debugInfoEnabled = function (a) {
            return s(a) ? (w = a, this) : w
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (a, d, e, i, q, s, y, z, B, C, D) {
            function E(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {
                }
            }

            function F(a, b, c, d, e) {
                a instanceof ad || (a = ad(a)), f(a, function (b, c) {
                    b.nodeType == td && b.nodeValue.match(/\S+/) && (a[c] = ad(b).wrap("<span></span>").parent()[0])
                });
                var g = H(a, b, a, c, d, e);
                F.$$addScopeClass(a);
                var h = null;
                return function (b, c, d) {
                    ea(b, "scope"), d = d || {};
                    var e = d.parentBoundTranscludeFn, f = d.transcludeControllers, i = d.futureParentElement;
                    e && e.$$boundTransclude && (e = e.$$boundTransclude), h || (h = G(i));
                    var j;
                    if (j = "html" !== h ? ad($(h, ad("<div>").append(a).html())) : c ? Ld.clone.call(a) : a, f)for (var k in f)j.data("$" + k + "Controller", f[k].instance);
                    return F.$$addScopeInfo(j, b), c && c(j, b), g && g(b, j, j, e), j
                }
            }

            function G(a) {
                var b = a && a[0];
                return b && "foreignobject" !== I(b) && b.toString().match(/SVG/) ? "svg" : "html"
            }

            function H(a, b, d, e, f, g) {
                function h(a, d, e, f) {
                    var g, h, i, j, k, l, m, n, q;
                    if (o) {
                        var r = d.length;
                        for (q = new Array(r), k = 0; k < p.length; k += 3)m = p[k], q[m] = d[m]
                    } else q = d;
                    for (k = 0, l = p.length; l > k;)i = q[p[k++]], g = p[k++], h = p[k++], g ? (g.scope ? (j = a.$new(), F.$$addScopeInfo(ad(i), j)) : j = a, n = g.transcludeOnThisElement ? K(a, g.transclude, f, g.elementTranscludeOnThisElement) : !g.templateOnThisElement && f ? f : !f && b ? K(a, b) : null, g(h, j, i, e, n)) : h && h(a, i.childNodes, c, f)
                }

                for (var i, j, k, l, m, n, o, p = [], q = 0; q < a.length; q++)i = new ga, j = L(a[q], [], i, 0 === q ? e : c, f), k = j.length ? Q(j, a[q], i, b, d, null, [], [], g) : null, k && k.scope && F.$$addScopeClass(i.$$element), m = k && k.terminal || !(l = a[q].childNodes) || !l.length ? null : H(l, k ? (k.transcludeOnThisElement || !k.templateOnThisElement) && k.transclude : b), (k || m) && (p.push(q, k, m), n = !0, o = o || k), g = null;
                return n ? h : null
            }

            function K(a, b, c, d) {
                var e = function (d, e, f, g, h) {
                    return d || (d = a.$new(!1, h), d.$$transcluded = !0), b(d, e, {
                        parentBoundTranscludeFn: c,
                        transcludeControllers: f,
                        futureParentElement: g
                    })
                };
                return e
            }

            function L(a, b, c, d, e) {
                var f, g, h = a.nodeType, i = c.$attr;
                switch (h) {
                    case sd:
                        S(b, $a(I(a)), "E", d, e);
                        for (var l, m, n, o, p, q, r = a.attributes, s = 0, v = r && r.length; v > s; s++) {
                            var w = !1, x = !1;
                            l = r[s], m = l.name, p = md(l.value), o = $a(m), (q = la.test(o)) && (m = m.replace(Xd, "").substr(8).replace(/_(.)/g, function (a, b) {
                                return b.toUpperCase()
                            }));
                            var y = o.replace(/(Start|End)$/, "");
                            U(y) && o === y + "Start" && (w = m, x = m.substr(0, m.length - 5) + "end", m = m.substr(0, m.length - 6)), n = $a(m.toLowerCase()), i[n] = m, (q || !c.hasOwnProperty(n)) && (c[n] = p, Ka(a, n) && (c[n] = !0)), aa(a, b, p, n, q), S(b, n, "A", d, e, w, x)
                        }
                        if (g = a.className, t(g) && (g = g.animVal), u(g) && "" !== g)for (; f = k.exec(g);)n = $a(f[2]), S(b, n, "C", d, e) && (c[n] = md(f[3])), g = g.substr(f.index + f[0].length);
                        break;
                    case td:
                        Z(b, a.nodeValue);
                        break;
                    case ud:
                        try {
                            f = j.exec(a.nodeValue), f && (n = $a(f[1]), S(b, n, "M", d, e) && (c[n] = md(f[2])))
                        } catch (z) {
                        }
                }
                return b.sort(X), b
            }

            function N(a, b, c) {
                var d = [], e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a)throw Wd("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", b, c);
                        a.nodeType == sd && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), a = a.nextSibling
                    } while (e > 0)
                } else d.push(a);
                return ad(d)
            }

            function P(a, b, c) {
                return function (d, e, f, g, h) {
                    return e = N(e[0], b, c), a(d, e, f, g, h)
                }
            }

            function Q(a, g, h, i, j, k, l, m, n) {
                function o(a, b, c, d) {
                    a && (c && (a = P(a, c, d)), a.require = z.require, a.directiveName = B, (I === z || z.$$isolateScope) && (a = da(a, {isolateScope: !0})), l.push(a)), b && (c && (b = P(b, c, d)), b.require = z.require, b.directiveName = B, (I === z || z.$$isolateScope) && (b = da(b, {isolateScope: !0})), m.push(b))
                }

                function p(a, b, c, d) {
                    var e, g, h = "data", i = !1, j = c;
                    if (u(b)) {
                        if (g = b.match(r), b = b.substring(g[0].length), g[3] && (g[1] ? g[3] = null : g[1] = g[3]), "^" === g[1] ? h = "inheritedData" : "^^" === g[1] && (h = "inheritedData", j = c.parent()), "?" === g[2] && (i = !0), e = null, d && "data" === h && (e = d[b]) && (e = e.instance), e = e || j[h]("$" + b + "Controller"), !e && !i)throw Wd("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", b, a);
                        return e || null
                    }
                    return ld(b) && (e = [], f(b, function (b) {
                        e.push(p(a, b, c, d))
                    })), e
                }

                function v(a, b, e, i, j) {
                    function k(a, b, d) {
                        var e;
                        return A(a) || (d = b, b = a, a = c), U && (e = v), d || (d = U ? x.parent() : x), j(a, b, e, d, D)
                    }

                    var n, o, r, t, u, v, w, x, z;
                    if (g === e ? (z = h, x = h.$$element) : (x = ad(e), z = new ga(x, h)), I && (u = b.$new(!0)), j && (w = k, w.$$boundTransclude = j), H && (y = {}, v = {}, f(H, function (a) {
                            var c, d = {
                                $scope: a === I || a.$$isolateScope ? u : b,
                                $element: x,
                                $attrs: z,
                                $transclude: w
                            };
                            t = a.controller, "@" == t && (t = z[a.name]), c = s(t, d, !0, a.controllerAs), v[a.name] = c, U || x.data("$" + a.name + "Controller", c.instance), y[a.name] = c
                        })), I) {
                        F.$$addScopeInfo(x, u, !0, !(J && (J === I || J === I.$$originalDirective))), F.$$addScopeClass(x, !0);
                        var B = y && y[I.name], C = u;
                        B && B.identifier && I.bindToController === !0 && (C = B.instance), f(u.$$isolateBindings = I.$$isolateBindings, function (a, c) {
                            var e, f, g, h, i = a.attrName, j = a.optional, k = a.mode;
                            switch (k) {
                                case"@":
                                    z.$observe(i, function (a) {
                                        C[c] = a
                                    }), z.$$observers[i].$$scope = b, z[i] && (C[c] = d(z[i])(b));
                                    break;
                                case"=":
                                    if (j && !z[i])return;
                                    f = q(z[i]), h = f.literal ? M : function (a, b) {
                                        return a === b || a !== a && b !== b
                                    }, g = f.assign || function () {
                                            throw e = C[c] = f(b), Wd("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", z[i], I.name)
                                        }, e = C[c] = f(b);
                                    var l = function (a) {
                                        return h(a, C[c]) || (h(a, e) ? g(b, a = C[c]) : C[c] = a), e = a
                                    };
                                    l.$stateful = !0;
                                    var m;
                                    m = a.collection ? b.$watchCollection(z[i], l) : b.$watch(q(z[i], l), null, f.literal), u.$on("$destroy", m);
                                    break;
                                case"&":
                                    f = q(z[i]), C[c] = function (a) {
                                        return f(b, a)
                                    }
                            }
                        })
                    }
                    for (y && (f(y, function (a) {
                        a()
                    }), y = null), n = 0, o = l.length; o > n; n++)r = l[n], fa(r, r.isolateScope ? u : b, x, z, r.require && p(r.directiveName, r.require, x, v), w);
                    var D = b;
                    for (I && (I.template || null === I.templateUrl) && (D = u), a && a(D, e.childNodes, c, j), n = m.length - 1; n >= 0; n--)r = m[n], fa(r, r.isolateScope ? u : b, x, z, r.require && p(r.directiveName, r.require, x, v), w)
                }

                n = n || {};
                for (var w, y, z, B, C, D, E, G = -Number.MAX_VALUE, H = n.controllerDirectives, I = n.newIsolateScopeDirective, J = n.templateDirective, K = n.nonTlbTranscludeDirective, Q = !1, S = !1, U = n.hasElementTranscludeDirective, X = h.$$element = ad(g), Z = k, _ = i, aa = 0, ca = a.length; ca > aa; aa++) {
                    z = a[aa];
                    var ea = z.$$start, ha = z.$$end;
                    if (ea && (X = N(g, ea, ha)), C = c, G > z.priority)break;
                    if ((E = z.scope) && (z.templateUrl || (t(E) ? (Y("new/isolated scope", I || w, z, X), I = z) : Y("new/isolated scope", I, z, X)), w = w || z), B = z.name, !z.templateUrl && z.controller && (E = z.controller, H = H || {}, Y("'" + B + "' controller", H[B], z, X), H[B] = z), (E = z.transclude) && (Q = !0, z.$$tlb || (Y("transclusion", K, z, X), K = z), "element" == E ? (U = !0, G = z.priority, C = X, X = h.$$element = ad(b.createComment(" " + B + ": " + h[B] + " ")), g = X[0], ba(j, O(C), g), _ = F(C, i, G, Z && Z.name, {nonTlbTranscludeDirective: K})) : (C = ad(va(g)).contents(), X.empty(), _ = F(C, i))), z.template)if (S = !0, Y("template", J, z, X), J = z, E = x(z.template) ? z.template(X, h) : z.template, E = ka(E), z.replace) {
                        if (Z = z, C = qa(E) ? [] : ab($(z.templateNamespace, md(E))), g = C[0], 1 != C.length || g.nodeType !== sd)throw Wd("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", B, "");
                        ba(j, X, g);
                        var ia = {$attr: {}}, ja = L(g, [], ia), la = a.splice(aa + 1, a.length - (aa + 1));
                        I && R(ja), a = a.concat(ja).concat(la), V(h, ia), ca = a.length
                    } else X.html(E);
                    if (z.templateUrl)S = !0, Y("template", J, z, X), J = z, z.replace && (Z = z), v = W(a.splice(aa, a.length - aa), X, h, j, Q && _, l, m, {
                        controllerDirectives: H,
                        newIsolateScopeDirective: I,
                        templateDirective: J,
                        nonTlbTranscludeDirective: K
                    }), ca = a.length; else if (z.compile)try {
                        D = z.compile(X, h, _), x(D) ? o(null, D, ea, ha) : D && o(D.pre, D.post, ea, ha)
                    } catch (ma) {
                        e(ma, T(X))
                    }
                    z.terminal && (v.terminal = !0, G = Math.max(G, z.priority))
                }
                return v.scope = w && w.scope === !0, v.transcludeOnThisElement = Q, v.elementTranscludeOnThisElement = U, v.templateOnThisElement = S, v.transclude = _, n.hasElementTranscludeDirective = U, v
            }

            function R(a) {
                for (var b = 0, c = a.length; c > b; b++)a[b] = n(a[b], {$$isolateScope: !0})
            }

            function S(b, d, f, i, j, k, l) {
                if (d === j)return null;
                var m = null;
                if (g.hasOwnProperty(d))for (var o, p = a.get(d + h), q = 0, r = p.length; r > q; q++)try {
                    o = p[q], (i === c || i > o.priority) && -1 != o.restrict.indexOf(f) && (k && (o = n(o, {
                        $$start: k, $$end: l
                    })), b.push(o), m = o)
                } catch (s) {
                    e(s)
                }
                return m
            }

            function U(b) {
                if (g.hasOwnProperty(b))for (var c, d = a.get(b + h), e = 0, f = d.length; f > e; e++)if (c = d[e], c.multiElement)return !0;
                return !1
            }

            function V(a, b) {
                var c = b.$attr, d = a.$attr, e = a.$$element;
                f(a, function (d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                }), f(b, function (b, f) {
                    "class" == f ? (E(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                })
            }

            function W(a, b, c, d, e, g, h, j) {
                var k, l, m = [], o = b[0], p = a.shift(), q = n(p, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: p
                }), r = x(p.templateUrl) ? p.templateUrl(b, c) : p.templateUrl, s = p.templateNamespace;
                return b.empty(), i(B.getTrustedResourceUrl(r)).then(function (i) {
                    var n, u, v, w;
                    if (i = ka(i), p.replace) {
                        if (v = qa(i) ? [] : ab($(s, md(i))), n = v[0], 1 != v.length || n.nodeType !== sd)throw Wd("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", p.name, r);
                        u = {$attr: {}}, ba(d, b, n);
                        var x = L(n, [], u);
                        t(p.scope) && R(x), a = x.concat(a), V(c, u)
                    } else n = o, b.html(i);
                    for (a.unshift(q), k = Q(a, n, c, e, b, p, g, h, j), f(d, function (a, c) {
                        a == n && (d[c] = b[0])
                    }), l = H(b[0].childNodes, e); m.length;) {
                        var y = m.shift(), z = m.shift(), A = m.shift(), B = m.shift(), C = b[0];
                        if (!y.$$destroyed) {
                            if (z !== o) {
                                var D = z.className;
                                j.hasElementTranscludeDirective && p.replace || (C = va(n)), ba(A, ad(z), C), E(ad(C), D)
                            }
                            w = k.transcludeOnThisElement ? K(y, k.transclude, B) : B, k(l, y, C, d, w)
                        }
                    }
                    m = null
                }), function (a, b, c, d, e) {
                    var f = e;
                    b.$$destroyed || (m ? m.push(b, c, d, f) : (k.transcludeOnThisElement && (f = K(b, k.transclude, e)), k(l, b, c, d, f)))
                }
            }

            function X(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
            }

            function Y(a, b, c, d) {
                if (b)throw Wd("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", b.name, c.name, a, T(d))
            }

            function Z(a, b) {
                var c = d(b, !0);
                c && a.push({
                    priority: 0, compile: function (a) {
                        var b = a.parent(), d = !!b.length;
                        return d && F.$$addBindingClass(b), function (a, b) {
                            var e = b.parent();
                            d || F.$$addBindingClass(e), F.$$addBindingInfo(e, c.expressions), a.$watch(c, function (a) {
                                b[0].nodeValue = a
                            })
                        }
                    }
                })
            }

            function $(a, c) {
                switch (a = Wc(a || "html")) {
                    case"svg":
                    case"math":
                        var d = b.createElement("div");
                        return d.innerHTML = "<" + a + ">" + c + "</" + a + ">", d.childNodes[0].childNodes;
                    default:
                        return c
                }
            }

            function _(a, b) {
                if ("srcdoc" == b)return B.HTML;
                var c = I(a);
                return "xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b) ? B.RESOURCE_URL : void 0
            }

            function aa(a, b, c, e, f) {
                var g = _(a, e);
                f = m[e] || f;
                var h = d(c, !0, g, f);
                if (h) {
                    if ("multiple" === e && "select" === I(a))throw Wd("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", T(a));
                    b.push({
                        priority: 100, compile: function () {
                            return {
                                pre: function (a, b, i) {
                                    var j = i.$$observers || (i.$$observers = {});
                                    if (v.test(e))throw Wd("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                    var k = i[e];
                                    k !== c && (h = k && d(k, !0, g, f), c = k), h && (i[e] = h(a), (j[e] || (j[e] = [])).$$inter = !0, (i.$$observers && i.$$observers[e].$$scope || a).$watch(h, function (a, b) {
                                        "class" === e && a != b ? i.$updateClass(a, b) : i.$set(e, a)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function ba(a, c, d) {
                var e, f, g = c[0], h = c.length, i = g.parentNode;
                if (a)for (e = 0, f = a.length; f > e; e++)if (a[e] == g) {
                    a[e++] = d;
                    for (var j = e, k = j + h - 1, l = a.length; l > j; j++, k++)l > k ? a[j] = a[k] : delete a[j];
                    a.length -= h - 1, a.context === g && (a.context = d);
                    break
                }
                i && i.replaceChild(d, g);
                var m = b.createDocumentFragment();
                m.appendChild(g), ad(d).data(ad(g).data()), bd ? (kd = !0, bd.cleanData([g])) : delete ad.cache[g[ad.expando]];
                for (var n = 1, o = c.length; o > n; n++) {
                    var p = c[n];
                    ad(p).remove(), m.appendChild(p), delete c[n]
                }
                c[0] = d, c.length = 1
            }

            function da(a, b) {
                return l(function () {
                    return a.apply(null, arguments)
                }, a, b)
            }

            function fa(a, b, c, d, f, g) {
                try {
                    a(b, c, d, f, g)
                } catch (h) {
                    e(h, T(c))
                }
            }

            var ga = function (a, b) {
                if (b) {
                    var c, d, e, f = Object.keys(b);
                    for (c = 0, d = f.length; d > c; c++)e = f[c], this[e] = b[e]
                } else this.$attr = {};
                this.$$element = a
            };
            ga.prototype = {
                $normalize: $a, $addClass: function (a) {
                    a && a.length > 0 && C.addClass(this.$$element, a)
                }, $removeClass: function (a) {
                    a && a.length > 0 && C.removeClass(this.$$element, a)
                }, $updateClass: function (a, b) {
                    var c = _a(a, b);
                    c && c.length && C.addClass(this.$$element, c);
                    var d = _a(b, a);
                    d && d.length && C.removeClass(this.$$element, d)
                }, $set: function (a, b, d, g) {
                    var h, i = this.$$element[0], j = Ka(i, a), k = La(i, a), l = a;
                    if (j ? (this.$$element.prop(a, b), g = j) : k && (this[k] = b, l = k), this[a] = b, g ? this.$attr[a] = g : (g = this.$attr[a], g || (this.$attr[a] = g = ca(a, "-"))), h = I(this.$$element), "a" === h && "href" === a || "img" === h && "src" === a)this[a] = b = D(b, "src" === a); else if ("img" === h && "srcset" === a) {
                        for (var m = "", n = md(b), o = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, p = /\s/.test(n) ? o : /(,)/, q = n.split(p), r = Math.floor(q.length / 2), s = 0; r > s; s++) {
                            var t = 2 * s;
                            m += D(md(q[t]), !0), m += " " + md(q[t + 1])
                        }
                        var u = md(q[2 * s]).split(/\s/);
                        m += D(md(u[0]), !0), 2 === u.length && (m += " " + md(u[1])), this[a] = b = m
                    }
                    d !== !1 && (null === b || b === c ? this.$$element.removeAttr(g) : this.$$element.attr(g, b));
                    var v = this.$$observers;
                    v && f(v[l], function (a) {
                        try {
                            a(b)
                        } catch (c) {
                            e(c)
                        }
                    })
                }, $observe: function (a, b) {
                    var c = this, d = c.$$observers || (c.$$observers = ja()), e = d[a] || (d[a] = []);
                    return e.push(b), y.$evalAsync(function () {
                        !e.$$inter && c.hasOwnProperty(a) && b(c[a])
                    }), function () {
                        J(e, b)
                    }
                }
            };
            var ha = d.startSymbol(), ia = d.endSymbol(), ka = "{{" == ha || "}}" == ia ? p : function (a) {
                return a.replace(/\{\{/g, ha).replace(/}}/g, ia)
            }, la = /^ngAttr[A-Z]/;
            return F.$$addBindingInfo = w ? function (a, b) {
                var c = a.data("$binding") || [];
                ld(b) ? c = c.concat(b) : c.push(b), a.data("$binding", c)
            } : o, F.$$addBindingClass = w ? function (a) {
                E(a, "ng-binding")
            } : o, F.$$addScopeInfo = w ? function (a, b, c, d) {
                var e = c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                a.data(e, b)
            } : o, F.$$addScopeClass = w ? function (a, b) {
                E(a, b ? "ng-isolate-scope" : "ng-scope")
            } : o, F
        }]
    }

    function $a(a) {
        return pa(a.replace(Xd, ""))
    }

    function _a(a, b) {
        var c = "", d = a.split(/\s+/), e = b.split(/\s+/);
        a:for (var f = 0; f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++)if (g == e[h])continue a;
            c += (c.length > 0 ? " " : "") + g
        }
        return c
    }

    function ab(a) {
        a = ad(a);
        var b = a.length;
        if (1 >= b)return a;
        for (; b--;) {
            var c = a[b];
            c.nodeType === ud && ed.call(a, b, 1)
        }
        return a
    }

    function bb() {
        var a = {}, b = !1, e = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function (b, c) {
            ga(b, "controller"), t(b) ? l(a, b) : a[b] = c
        }, this.allowGlobals = function () {
            b = !0
        }, this.$get = ["$injector", "$window", function (f, g) {
            function h(a, b, c, e) {
                if (!a || !t(a.$scope))throw d("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", e, b);
                a.$scope[b] = c
            }

            return function (d, i, j, k) {
                var m, n, o, p;
                if (j = j === !0, k && u(k) && (p = k), u(d)) {
                    if (n = d.match(e), !n)throw Yd("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", d);
                    o = n[1], p = p || n[3], d = a.hasOwnProperty(o) ? a[o] : ha(i.$scope, o, !0) || (b ? ha(g, o, !0) : c), fa(d, o, !0)
                }
                if (j) {
                    var q = (ld(d) ? d[d.length - 1] : d).prototype;
                    return m = Object.create(q || null), p && h(i, p, m, o || d.name), l(function () {
                        return f.invoke(d, m, i, o), m
                    }, {instance: m, identifier: p})
                }
                return m = f.instantiate(d, i, o), p && h(i, p, m, o || d.name), m
            }
        }]
    }

    function cb() {
        this.$get = ["$window", function (a) {
            return ad(a.document)
        }]
    }

    function db() {
        this.$get = ["$log", function (a) {
            return function (b, c) {
                a.error.apply(a, arguments)
            }
        }]
    }

    function eb(a, b) {
        if (u(a)) {
            var c = a.replace(be, "").trim();
            if (c) {
                var d = b("Content-Type");
                (d && 0 === d.indexOf(Zd) || fb(c)) && (a = S(c))
            }
        }
        return a
    }

    function fb(a) {
        var b = a.match(_d);
        return b && ae[b[0]].test(a)
    }

    function gb(a) {
        var b, c, d, e = ja();
        return a ? (f(a.split("\n"), function (a) {
            d = a.indexOf(":"), b = Wc(md(a.substr(0, d))), c = md(a.substr(d + 1)), b && (e[b] = e[b] ? e[b] + ", " + c : c)
        }), e) : e
    }

    function hb(a) {
        var b = t(a) ? a : c;
        return function (c) {
            if (b || (b = gb(a)), c) {
                var d = b[Wc(c)];
                return void 0 === d && (d = null), d
            }
            return b
        }
    }

    function ib(a, b, c, d) {
        return x(d) ? d(a, b, c) : (f(d, function (d) {
            a = d(a, b, c)
        }), a)
    }

    function jb(a) {
        return a >= 200 && 300 > a
    }

    function kb() {
        var a = this.defaults = {
            transformResponse: [eb],
            transformRequest: [function (a) {
                return !t(a) || B(a) || D(a) || C(a) ? a : R(a)
            }],
            headers: {common: {Accept: "application/json, text/plain, */*"}, post: L($d), put: L($d), patch: L($d)},
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN"
        }, b = !1;
        this.useApplyAsync = function (a) {
            return s(a) ? (b = !!a, this) : b
        };
        var e = this.interceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (g, i, j, k, m, n) {
            function o(b) {
                function e(a) {
                    var b = l({}, a);
                    return a.data ? b.data = ib(a.data, a.headers, a.status, i.transformResponse) : b.data = a.data, jb(a.status) ? b : m.reject(b)
                }

                function g(a) {
                    var b, c = {};
                    return f(a, function (a, d) {
                        x(a) ? (b = a(), null != b && (c[d] = b)) : c[d] = a
                    }), c
                }

                function h(b) {
                    var c, d, e, f = a.headers, h = l({}, b.headers);
                    f = l({}, f.common, f[Wc(b.method)]);
                    a:for (c in f) {
                        d = Wc(c);
                        for (e in h)if (Wc(e) === d)continue a;
                        h[c] = f[c]
                    }
                    return g(h)
                }

                if (!id.isObject(b))throw d("$http")("badreq", "Http request configuration must be an object.  Received: {0}", b);
                var i = l({
                    method: "get",
                    transformRequest: a.transformRequest,
                    transformResponse: a.transformResponse
                }, b);
                i.headers = h(b), i.method = Yc(i.method);
                var j = function (b) {
                    var d = b.headers, g = ib(b.data, hb(d), c, b.transformRequest);
                    return r(g) && f(d, function (a, b) {
                        "content-type" === Wc(b) && delete d[b]
                    }), r(b.withCredentials) && !r(a.withCredentials) && (b.withCredentials = a.withCredentials), v(b, g).then(e, e)
                }, k = [j, c], n = m.when(i);
                for (f(A, function (a) {
                    (a.request || a.requestError) && k.unshift(a.request, a.requestError), (a.response || a.responseError) && k.push(a.response, a.responseError)
                }); k.length;) {
                    var o = k.shift(), p = k.shift();
                    n = n.then(o, p)
                }
                return n.success = function (a) {
                    return n.then(function (b) {
                        a(b.data, b.status, b.headers, i)
                    }), n
                }, n.error = function (a) {
                    return n.then(null, function (b) {
                        a(b.data, b.status, b.headers, i)
                    }), n
                }, n
            }

            function p(a) {
                f(arguments, function (a) {
                    o[a] = function (b, c) {
                        return o(l(c || {}, {method: a, url: b}))
                    }
                })
            }

            function q(a) {
                f(arguments, function (a) {
                    o[a] = function (b, c, d) {
                        return o(l(d || {}, {method: a, url: b, data: c}))
                    }
                })
            }

            function v(d, e) {
                function f(a, c, d, e) {
                    function f() {
                        h(c, a, d, e)
                    }

                    n && (jb(a) ? n.put(w, [a, c, gb(d), e]) : n.remove(w)), b ? k.$applyAsync(f) : (f(), k.$$phase || k.$apply())
                }

                function h(a, b, c, e) {
                    b = Math.max(b, 0), (jb(b) ? q.resolve : q.reject)({
                        data: a,
                        status: b,
                        headers: hb(c),
                        config: d,
                        statusText: e
                    })
                }

                function j(a) {
                    h(a.data, a.status, L(a.headers()), a.statusText)
                }

                function l() {
                    var a = o.pendingRequests.indexOf(d);
                    -1 !== a && o.pendingRequests.splice(a, 1)
                }

                var n, p, q = m.defer(), u = q.promise, v = d.headers, w = y(d.url, d.params);
                if (o.pendingRequests.push(d), u.then(l, l), !d.cache && !a.cache || d.cache === !1 || "GET" !== d.method && "JSONP" !== d.method || (n = t(d.cache) ? d.cache : t(a.cache) ? a.cache : z), n && (p = n.get(w), s(p) ? F(p) ? p.then(j, j) : ld(p) ? h(p[1], p[0], L(p[2]), p[3]) : h(p, 200, {}, "OK") : n.put(w, u)), r(p)) {
                    var x = ec(d.url) ? i.cookies()[d.xsrfCookieName || a.xsrfCookieName] : c;
                    x && (v[d.xsrfHeaderName || a.xsrfHeaderName] = x), g(d.method, w, e, f, v, d.timeout, d.withCredentials, d.responseType)
                }
                return u
            }

            function y(a, b) {
                if (!b)return a;
                var c = [];
                return h(b, function (a, b) {
                    null === a || r(a) || (ld(a) || (a = [a]), f(a, function (a) {
                        t(a) && (a = w(a) ? a.toISOString() : R(a)), c.push(Y(b) + "=" + Y(a))
                    }))
                }), c.length > 0 && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&")), a
            }

            var z = j("$http"), A = [];
            return f(e, function (a) {
                A.unshift(u(a) ? n.get(a) : n.invoke(a))
            }), o.pendingRequests = [], p("get", "delete", "head", "jsonp"), q("post", "put", "patch"), o.defaults = a, o
        }]
    }

    function lb() {
        return new a.XMLHttpRequest
    }

    function mb() {
        this.$get = ["$browser", "$window", "$document", function (a, b, c) {
            return nb(a, lb, a.defer, b.angular.callbacks, c[0])
        }]
    }

    function nb(a, b, d, e, g) {
        function h(a, b, c) {
            var d = g.createElement("script"), f = null;
            return d.type = "text/javascript", d.src = a, d.async = !0, f = function (a) {
                Bd(d, "load", f), Bd(d, "error", f), g.body.removeChild(d), d = null;
                var h = -1, i = "unknown";
                a && ("load" !== a.type || e[b].called || (a = {type: "error"}), i = a.type, h = "error" === a.type ? 404 : 200), c && c(h, i)
            }, Ad(d, "load", f), Ad(d, "error", f), g.body.appendChild(d), f
        }

        return function (g, i, j, k, l, m, n, p) {
            function q() {
                u && u(), v && v.abort()
            }

            function r(b, e, f, g, h) {
                y !== c && d.cancel(y), u = v = null, b(e, f, g, h), a.$$completeOutstandingRequest(o)
            }

            if (a.$$incOutstandingRequestCount(), i = i || a.url(), "jsonp" == Wc(g)) {
                var t = "_" + (e.counter++).toString(36);
                e[t] = function (a) {
                    e[t].data = a, e[t].called = !0
                };
                var u = h(i.replace("JSON_CALLBACK", "angular.callbacks." + t), t, function (a, b) {
                    r(k, a, e[t].data, "", b), e[t] = o
                })
            } else {
                var v = b();
                v.open(g, i, !0), f(l, function (a, b) {
                    s(a) && v.setRequestHeader(b, a)
                }), v.onload = function () {
                    var a = v.statusText || "", b = "response"in v ? v.response : v.responseText, c = 1223 === v.status ? 204 : v.status;
                    0 === c && (c = b ? 200 : "file" == dc(i).protocol ? 404 : 0), r(k, c, b, v.getAllResponseHeaders(), a)
                };
                var w = function () {
                    r(k, -1, null, null, "")
                };
                if (v.onerror = w, v.onabort = w, n && (v.withCredentials = !0), p)try {
                    v.responseType = p
                } catch (x) {
                    if ("json" !== p)throw x
                }
                v.send(j || null)
            }
            if (m > 0)var y = d(q, m); else F(m) && m.then(q)
        }
    }

    function ob() {
        var a = "{{", b = "}}";
        this.startSymbol = function (b) {
            return b ? (a = b, this) : a
        }, this.endSymbol = function (a) {
            return a ? (b = a, this) : b
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function (c, d, e) {
            function f(a) {
                return "\\\\\\" + a
            }

            function g(f, g, m, n) {
                function o(c) {
                    return c.replace(j, a).replace(k, b)
                }

                function p(a) {
                    try {
                        return a = D(a), n && !s(a) ? a : E(a)
                    } catch (b) {
                        var c = ce("interr", "Can't interpolate: {0}\n{1}", f, b.toString());
                        d(c)
                    }
                }

                n = !!n;
                for (var q, t, u, v = 0, w = [], y = [], z = f.length, A = [], B = []; z > v;) {
                    if (-1 == (q = f.indexOf(a, v)) || -1 == (t = f.indexOf(b, q + h))) {
                        v !== z && A.push(o(f.substring(v)));
                        break
                    }
                    v !== q && A.push(o(f.substring(v, q))), u = f.substring(q + h, t), w.push(u), y.push(c(u, p)), v = t + i, B.push(A.length), A.push("")
                }
                if (m && A.length > 1)throw ce("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", f);
                if (!g || w.length) {
                    var C = function (a) {
                        for (var b = 0, c = w.length; c > b; b++) {
                            if (n && r(a[b]))return;
                            A[B[b]] = a[b]
                        }
                        return A.join("")
                    }, D = function (a) {
                        return m ? e.getTrusted(m, a) : e.valueOf(a)
                    }, E = function (a) {
                        if (null == a)return "";
                        switch (typeof a) {
                            case"string":
                                break;
                            case"number":
                                a = "" + a;
                                break;
                            default:
                                a = R(a)
                        }
                        return a
                    };
                    return l(function (a) {
                        var b = 0, c = w.length, e = new Array(c);
                        try {
                            for (; c > b; b++)e[b] = y[b](a);
                            return C(e)
                        } catch (g) {
                            var h = ce("interr", "Can't interpolate: {0}\n{1}", f, g.toString());
                            d(h)
                        }
                    }, {
                        exp: f, expressions: w, $$watchDelegate: function (a, b, c) {
                            var d;
                            return a.$watchGroup(y, function (c, e) {
                                var f = C(c);
                                x(b) && b.call(this, f, c !== e ? d : f, a), d = f
                            }, c)
                        }
                    })
                }
            }

            var h = a.length, i = b.length, j = new RegExp(a.replace(/./g, f), "g"), k = new RegExp(b.replace(/./g, f), "g");
            return g.startSymbol = function () {
                return a
            }, g.endSymbol = function () {
                return b
            }, g
        }]
    }

    function pb() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", function (a, b, c, d) {
            function e(e, g, h, i) {
                var j = b.setInterval, k = b.clearInterval, l = 0, m = s(i) && !i, n = (m ? d : c).defer(), o = n.promise;
                return h = s(h) ? h : 0, o.then(null, null, e), o.$$intervalId = j(function () {
                    n.notify(l++), h > 0 && l >= h && (n.resolve(l), k(o.$$intervalId), delete f[o.$$intervalId]), m || a.$apply()
                }, g), f[o.$$intervalId] = n, o
            }

            var f = {};
            return e.cancel = function (a) {
                return a && a.$$intervalId in f ? (f[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete f[a.$$intervalId], !0) : !1
            }, e
        }]
    }

    function qb() {
        this.$get = function () {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                    SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                    DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                    SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a",
                    ERANAMES: ["Before Christ", "Anno Domini"],
                    ERAS: ["BC", "AD"]
                },
                pluralCat: function (a) {
                    return 1 === a ? "one" : "other"
                }
            }
        }
    }

    function rb(a) {
        for (var b = a.split("/"), c = b.length; c--;)b[c] = X(b[c]);
        return b.join("/")
    }

    function sb(a, b) {
        var c = dc(a);
        b.$$protocol = c.protocol, b.$$host = c.hostname, b.$$port = m(c.port) || ee[c.protocol] || null
    }

    function tb(a, b) {
        var c = "/" !== a.charAt(0);
        c && (a = "/" + a);
        var d = dc(a);
        b.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname), b.$$search = V(d.search), b.$$hash = decodeURIComponent(d.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
    }

    function ub(a, b) {
        return 0 === b.indexOf(a) ? b.substr(a.length) : void 0
    }

    function vb(a) {
        var b = a.indexOf("#");
        return -1 == b ? a : a.substr(0, b)
    }

    function wb(a) {
        return a.replace(/(#.+)|#$/, "$1")
    }

    function xb(a) {
        return a.substr(0, vb(a).lastIndexOf("/") + 1)
    }

    function yb(a) {
        return a.substring(0, a.indexOf("/", a.indexOf("//") + 2))
    }

    function zb(a, b) {
        this.$$html5 = !0, b = b || "";
        var d = xb(a);
        sb(a, this), this.$$parse = function (a) {
            var b = ub(d, a);
            if (!u(b))throw fe("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', a, d);
            tb(b, this), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function () {
            var a = W(this.$$search), b = this.$$hash ? "#" + X(this.$$hash) : "";
            this.$$url = rb(this.$$path) + (a ? "?" + a : "") + b, this.$$absUrl = d + this.$$url.substr(1)
        }, this.$$parseLinkUrl = function (e, f) {
            if (f && "#" === f[0])return this.hash(f.slice(1)), !0;
            var g, h, i;
            return (g = ub(a, e)) !== c ? (h = g, i = (g = ub(b, g)) !== c ? d + (ub("/", g) || g) : a + h) : (g = ub(d, e)) !== c ? i = d + g : d == e + "/" && (i = d), i && this.$$parse(i), !!i
        }
    }

    function Ab(a, b) {
        var c = xb(a);
        sb(a, this), this.$$parse = function (d) {
            function e(a, b, c) {
                var d, e = /^\/[A-Z]:(\/.*)/;
                return 0 === b.indexOf(c) && (b = b.replace(c, "")), e.exec(b) ? a : (d = e.exec(a), d ? d[1] : a)
            }

            var f, g = ub(a, d) || ub(c, d);
            "#" === g.charAt(0) ? (f = ub(b, g), r(f) && (f = g)) : f = this.$$html5 ? g : "", tb(f, this), this.$$path = e(this.$$path, f, a), this.$$compose()
        }, this.$$compose = function () {
            var c = W(this.$$search), d = this.$$hash ? "#" + X(this.$$hash) : "";
            this.$$url = rb(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + (this.$$url ? b + this.$$url : "")
        }, this.$$parseLinkUrl = function (b, c) {
            return vb(a) == vb(b) ? (this.$$parse(b), !0) : !1
        }
    }

    function Bb(a, b) {
        this.$$html5 = !0, Ab.apply(this, arguments);
        var c = xb(a);
        this.$$parseLinkUrl = function (d, e) {
            if (e && "#" === e[0])return this.hash(e.slice(1)), !0;
            var f, g;
            return a == vb(d) ? f = d : (g = ub(c, d)) ? f = a + b + g : c === d + "/" && (f = c), f && this.$$parse(f), !!f
        }, this.$$compose = function () {
            var c = W(this.$$search), d = this.$$hash ? "#" + X(this.$$hash) : "";
            this.$$url = rb(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + b + this.$$url
        }
    }

    function Cb(a) {
        return function () {
            return this[a]
        }
    }

    function Db(a, b) {
        return function (c) {
            return r(c) ? this[a] : (this[a] = b(c), this.$$compose(), this)
        }
    }

    function Eb() {
        var a = "", b = {enabled: !1, requireBase: !0, rewriteLinks: !0};
        this.hashPrefix = function (b) {
            return s(b) ? (a = b, this) : a
        }, this.html5Mode = function (a) {
            return E(a) ? (b.enabled = a, this) : t(a) ? (E(a.enabled) && (b.enabled = a.enabled), E(a.requireBase) && (b.requireBase = a.requireBase), E(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (c, d, e, f, g) {
            function h(a, b, c) {
                var e = j.url(), f = j.$$state;
                try {
                    d.url(a, b, c), j.$$state = d.state()
                } catch (g) {
                    throw j.url(e), j.$$state = f, g
                }
            }

            function i(a, b) {
                c.$broadcast("$locationChangeSuccess", j.absUrl(), a, j.$$state, b)
            }

            var j, k, l, m = d.baseHref(), n = d.url();
            if (b.enabled) {
                if (!m && b.requireBase)throw fe("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                l = yb(n) + (m || "/"), k = e.history ? zb : Bb
            } else l = vb(n), k = Ab;
            j = new k(l, "#" + a), j.$$parseLinkUrl(n, n), j.$$state = d.state();
            var o = /^\s*(javascript|mailto):/i;
            f.on("click", function (a) {
                if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
                    for (var e = ad(a.target); "a" !== I(e[0]);)if (e[0] === f[0] || !(e = e.parent())[0])return;
                    var h = e.prop("href"), i = e.attr("href") || e.attr("xlink:href");
                    t(h) && "[object SVGAnimatedString]" === h.toString() && (h = dc(h.animVal).href), o.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || j.$$parseLinkUrl(h, i) && (a.preventDefault(), j.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0))
                }
            }), wb(j.absUrl()) != wb(n) && d.url(j.absUrl(), !0);
            var p = !0;
            return d.onUrlChange(function (a, b) {
                c.$evalAsync(function () {
                    var d, e = j.absUrl(), f = j.$$state;
                    j.$$parse(a), j.$$state = b, d = c.$broadcast("$locationChangeStart", a, e, b, f).defaultPrevented, j.absUrl() === a && (d ? (j.$$parse(e), j.$$state = f, h(e, !1, f)) : (p = !1, i(e, f)))
                }), c.$$phase || c.$digest()
            }), c.$watch(function () {
                var a = wb(d.url()), b = wb(j.absUrl()), f = d.state(), g = j.$$replace, k = a !== b || j.$$html5 && e.history && f !== j.$$state;
                (p || k) && (p = !1, c.$evalAsync(function () {
                    var b = j.absUrl(), d = c.$broadcast("$locationChangeStart", b, a, j.$$state, f).defaultPrevented;
                    j.absUrl() === b && (d ? (j.$$parse(a), j.$$state = f) : (k && h(b, g, f === j.$$state ? null : j.$$state), i(a, f)))
                })), j.$$replace = !1
            }), j
        }]
    }

    function Fb() {
        var a = !0, b = this;
        this.debugEnabled = function (b) {
            return s(b) ? (a = b, this) : a
        }, this.$get = ["$window", function (c) {
            function d(a) {
                return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), a
            }

            function e(a) {
                var b = c.console || {}, e = b[a] || b.log || o, g = !1;
                try {
                    g = !!e.apply
                } catch (h) {
                }
                return g ? function () {
                    var a = [];
                    return f(arguments, function (b) {
                        a.push(d(b))
                    }), e.apply(b, a)
                } : function (a, b) {
                    e(a, null == b ? "" : b)
                }
            }

            return {
                log: e("log"), info: e("info"), warn: e("warn"), error: e("error"), debug: function () {
                    var c = e("debug");
                    return function () {
                        a && c.apply(b, arguments)
                    }
                }()
            }
        }]
    }

    function Gb(a, b) {
        if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a)throw he("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", b);
        return a
    }

    function Hb(a, b) {
        if (a) {
            if (a.constructor === a)throw he("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
            if (a.window === a)throw he("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", b);
            if (a.children && (a.nodeName || a.prop && a.attr && a.find))throw he("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", b);
            if (a === Object)throw he("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", b)
        }
        return a
    }

    function Ib(a, b) {
        if (a) {
            if (a.constructor === a)throw he("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
            if (a === ie || a === je || a === ke)throw he("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", b)
        }
    }

    function Jb(a) {
        return a.constant
    }

    function Kb(a, b, c, d, e) {
        Hb(a, e), Hb(b, e);
        for (var f, g = c.split("."), h = 0; g.length > 1; h++) {
            f = Gb(g.shift(), e);
            var i = 0 === h && b && b[f] || a[f];
            i || (i = {}, a[f] = i), a = Hb(i, e)
        }
        return f = Gb(g.shift(), e), Hb(a[f], e), a[f] = d, d
    }

    function Lb(a) {
        return "constructor" == a
    }

    function Mb(a, b, d, e, f, g, h) {
        Gb(a, g), Gb(b, g), Gb(d, g), Gb(e, g), Gb(f, g);
        var i = function (a) {
            return Hb(a, g)
        }, j = h || Lb(a) ? i : p, k = h || Lb(b) ? i : p, l = h || Lb(d) ? i : p, m = h || Lb(e) ? i : p, n = h || Lb(f) ? i : p;
        return function (g, h) {
            var i = h && h.hasOwnProperty(a) ? h : g;
            return null == i ? i : (i = j(i[a]), b ? null == i ? c : (i = k(i[b]), d ? null == i ? c : (i = l(i[d]), e ? null == i ? c : (i = m(i[e]), f ? null == i ? c : i = n(i[f]) : i) : i) : i) : i)
        }
    }

    function Nb(a, b) {
        return function (c, d) {
            return a(c, d, Hb, b)
        }
    }

    function Ob(a, b, d) {
        var e = b.expensiveChecks, g = e ? re : qe, h = g[a];
        if (h)return h;
        var i = a.split("."), j = i.length;
        if (b.csp)h = 6 > j ? Mb(i[0], i[1], i[2], i[3], i[4], d, e) : function (a, b) {
            var f, g = 0;
            do f = Mb(i[g++], i[g++], i[g++], i[g++], i[g++], d, e)(a, b), b = c, a = f; while (j > g);
            return f
        }; else {
            var k = "";
            e && (k += "s = eso(s, fe);\nl = eso(l, fe);\n");
            var l = e;
            f(i, function (a, b) {
                Gb(a, d);
                var c = (b ? "s" : '((l&&l.hasOwnProperty("' + a + '"))?l:s)') + "." + a;
                (e || Lb(a)) && (c = "eso(" + c + ", fe)", l = !0), k += "if(s == null) return undefined;\ns=" + c + ";\n"
            }), k += "return s;";
            var m = new Function("s", "l", "eso", "fe", k);
            m.toString = q(k), l && (m = Nb(m, d)), h = m
        }
        return h.sharedGetter = !0, h.assign = function (b, c, d) {
            return Kb(b, d, a, c, a)
        }, g[a] = h, h
    }

    function Pb(a) {
        return x(a.valueOf) ? a.valueOf() : se.call(a)
    }

    function Qb() {
        var a = ja(), b = ja();
        this.$get = ["$filter", "$sniffer", function (c, d) {
            function e(a) {
                var b = a;
                return a.sharedGetter && (b = function (b, c) {
                    return a(b, c)
                }, b.literal = a.literal, b.constant = a.constant, b.assign = a.assign), b
            }

            function g(a, b) {
                for (var c = 0, d = a.length; d > c; c++) {
                    var e = a[c];
                    e.constant || (e.inputs ? g(e.inputs, b) : -1 === b.indexOf(e) && b.push(e))
                }
                return b
            }

            function h(a, b) {
                return null == a || null == b ? a === b : "object" == typeof a && (a = Pb(a), "object" == typeof a) ? !1 : a === b || a !== a && b !== b
            }

            function i(a, b, c, d) {
                var e, f = d.$$inputs || (d.$$inputs = g(d.inputs, []));
                if (1 === f.length) {
                    var i = h;
                    return f = f[0], a.$watch(function (a) {
                        var b = f(a);
                        return h(b, i) || (e = d(a), i = b && Pb(b)), e
                    }, b, c)
                }
                for (var j = [], k = 0, l = f.length; l > k; k++)j[k] = h;
                return a.$watch(function (a) {
                    for (var b = !1, c = 0, g = f.length; g > c; c++) {
                        var i = f[c](a);
                        (b || (b = !h(i, j[c]))) && (j[c] = i && Pb(i))
                    }
                    return b && (e = d(a)), e
                }, b, c)
            }

            function j(a, b, c, d) {
                var e, f;
                return e = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    f = a, x(b) && b.apply(this, arguments), s(a) && d.$$postDigest(function () {
                        s(f) && e()
                    })
                }, c)
            }

            function k(a, b, c, d) {
                function e(a) {
                    var b = !0;
                    return f(a, function (a) {
                        s(a) || (b = !1)
                    }), b
                }

                var g, h;
                return g = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    h = a, x(b) && b.call(this, a, c, d), e(a) && d.$$postDigest(function () {
                        e(h) && g()
                    })
                }, c)
            }

            function l(a, b, c, d) {
                var e;
                return e = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    x(b) && b.apply(this, arguments), e()
                }, c)
            }

            function m(a, b) {
                if (!b)return a;
                var c = a.$$watchDelegate, d = c !== k && c !== j, e = d ? function (c, d) {
                    var e = a(c, d);
                    return b(e, c, d)
                } : function (c, d) {
                    var e = a(c, d), f = b(e, c, d);
                    return s(e) ? f : e
                };
                return a.$$watchDelegate && a.$$watchDelegate !== i ? e.$$watchDelegate = a.$$watchDelegate : b.$stateful || (e.$$watchDelegate = i, e.inputs = [a]), e
            }

            var n = {csp: d.csp, expensiveChecks: !1}, p = {csp: d.csp, expensiveChecks: !0};
            return function (d, f, g) {
                var h, q, r;
                switch (typeof d) {
                    case"string":
                        r = d = d.trim();
                        var s = g ? b : a;
                        if (h = s[r], !h) {
                            ":" === d.charAt(0) && ":" === d.charAt(1) && (q = !0, d = d.substring(2));
                            var t = g ? p : n, u = new oe(t), v = new pe(u, c, t);
                            h = v.parse(d), h.constant ? h.$$watchDelegate = l : q ? (h = e(h), h.$$watchDelegate = h.literal ? k : j) : h.inputs && (h.$$watchDelegate = i), s[r] = h
                        }
                        return m(h, f);
                    case"function":
                        return m(d, f);
                    default:
                        return m(o, f)
                }
            }
        }]
    }

    function Rb() {
        this.$get = ["$rootScope", "$exceptionHandler", function (a, b) {
            return Tb(function (b) {
                a.$evalAsync(b)
            }, b)
        }]
    }

    function Sb() {
        this.$get = ["$browser", "$exceptionHandler", function (a, b) {
            return Tb(function (b) {
                a.defer(b)
            }, b)
        }]
    }

    function Tb(a, b) {
        function e(a, b, c) {
            function d(b) {
                return function (c) {
                    e || (e = !0, b.call(a, c))
                }
            }

            var e = !1;
            return [d(b), d(c)]
        }

        function g() {
            this.$$state = {status: 0}
        }

        function h(a, b) {
            return function (c) {
                b.call(a, c)
            }
        }

        function i(a) {
            var d, e, f;
            f = a.pending, a.processScheduled = !1, a.pending = c;
            for (var g = 0, h = f.length; h > g; ++g) {
                e = f[g][0], d = f[g][a.status];
                try {
                    x(d) ? e.resolve(d(a.value)) : 1 === a.status ? e.resolve(a.value) : e.reject(a.value)
                } catch (i) {
                    e.reject(i), b(i)
                }
            }
        }

        function j(b) {
            !b.processScheduled && b.pending && (b.processScheduled = !0, a(function () {
                i(b)
            }))
        }

        function k() {
            this.promise = new g, this.resolve = h(this, this.resolve), this.reject = h(this, this.reject), this.notify = h(this, this.notify)
        }

        function l(a) {
            var b = new k, c = 0, d = ld(a) ? [] : {};
            return f(a, function (a, e) {
                c++, r(a).then(function (a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                }, function (a) {
                    d.hasOwnProperty(e) || b.reject(a)
                })
            }), 0 === c && b.resolve(d), b.promise
        }

        var m = d("$q", TypeError), n = function () {
            return new k
        };
        g.prototype = {
            then: function (a, b, c) {
                var d = new k;
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([d, a, b, c]), this.$$state.status > 0 && j(this.$$state), d.promise
            }, "catch": function (a) {
                return this.then(null, a)
            }, "finally": function (a, b) {
                return this.then(function (b) {
                    return q(b, !0, a)
                }, function (b) {
                    return q(b, !1, a)
                }, b)
            }
        }, k.prototype = {
            resolve: function (a) {
                this.promise.$$state.status || (a === this.promise ? this.$$reject(m("qcycle", "Expected promise to be resolved with value other than itself '{0}'", a)) : this.$$resolve(a))
            }, $$resolve: function (a) {
                var c, d;
                d = e(this, this.$$resolve, this.$$reject);
                try {
                    (t(a) || x(a)) && (c = a && a.then), x(c) ? (this.promise.$$state.status = -1, c.call(a, d[0], d[1], this.notify)) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, j(this.promise.$$state))
                } catch (f) {
                    d[1](f), b(f)
                }
            }, reject: function (a) {
                this.promise.$$state.status || this.$$reject(a)
            }, $$reject: function (a) {
                this.promise.$$state.value = a, this.promise.$$state.status = 2, j(this.promise.$$state)
            }, notify: function (c) {
                var d = this.promise.$$state.pending;
                this.promise.$$state.status <= 0 && d && d.length && a(function () {
                    for (var a, e, f = 0, g = d.length; g > f; f++) {
                        e = d[f][0], a = d[f][3];
                        try {
                            e.notify(x(a) ? a(c) : c)
                        } catch (h) {
                            b(h)
                        }
                    }
                })
            }
        };
        var o = function (a) {
            var b = new k;
            return b.reject(a), b.promise
        }, p = function (a, b) {
            var c = new k;
            return b ? c.resolve(a) : c.reject(a), c.promise
        }, q = function (a, b, c) {
            var d = null;
            try {
                x(c) && (d = c())
            } catch (e) {
                return p(e, !1)
            }
            return F(d) ? d.then(function () {
                return p(a, b)
            }, function (a) {
                return p(a, !1)
            }) : p(a, b)
        }, r = function (a, b, c, d) {
            var e = new k;
            return e.resolve(a), e.promise.then(b, c, d)
        }, s = function u(a) {
            function b(a) {
                d.resolve(a)
            }

            function c(a) {
                d.reject(a)
            }

            if (!x(a))throw m("norslvr", "Expected resolverFn, got '{0}'", a);
            if (!(this instanceof u))return new u(a);
            var d = new k;
            return a(b, c), d.promise
        };
        return s.defer = n, s.reject = o, s.when = r, s.all = l, s
    }

    function Ub() {
        this.$get = ["$window", "$timeout", function (a, b) {
            var c = a.requestAnimationFrame || a.webkitRequestAnimationFrame, d = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame, e = !!c, f = e ? function (a) {
                var b = c(a);
                return function () {
                    d(b)
                }
            } : function (a) {
                var c = b(a, 16.66, !1);
                return function () {
                    b.cancel(c)
                }
            };
            return f.supported = e, f
        }]
    }

    function Vb() {
        function a(a) {
            function b() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = j(), this.$$ChildScope = null
            }

            return b.prototype = a, b
        }

        var b = 10, c = d("$rootScope"), g = null, h = null;
        this.digestTtl = function (a) {
            return arguments.length && (b = a), b
        }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (d, i, k, l) {
            function m(a) {
                a.currentScope.$$destroyed = !0
            }

            function n() {
                this.$id = j(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = null
            }

            function p(a) {
                if (y.$$phase)throw c("inprog", "{0} already in progress", y.$$phase);
                y.$$phase = a
            }

            function q() {
                y.$$phase = null
            }

            function s(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
            }

            function u() {
            }

            function v() {
                for (; B.length;)try {
                    B.shift()()
                } catch (a) {
                    i(a)
                }
                h = null
            }

            function w() {
                null === h && (h = l.defer(function () {
                    y.$apply(v)
                }))
            }

            n.prototype = {
                constructor: n, $new: function (b, c) {
                    var d;
                    return c = c || this, b ? (d = new n, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope), d.$parent = c, d.$$prevSibling = c.$$childTail, c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d, (b || c != this) && d.$on("$destroy", m), d
                }, $watch: function (a, b, c) {
                    var d = k(a);
                    if (d.$$watchDelegate)return d.$$watchDelegate(this, b, c, d);
                    var e = this, f = e.$$watchers, h = {fn: b, last: u, get: d, exp: a, eq: !!c};
                    return g = null, x(b) || (h.fn = o), f || (f = e.$$watchers = []), f.unshift(h), function () {
                        J(f, h), g = null
                    }
                }, $watchGroup: function (a, b) {
                    function c() {
                        i = !1, j ? (j = !1, b(e, e, h)) : b(e, d, h)
                    }

                    var d = new Array(a.length), e = new Array(a.length), g = [], h = this, i = !1, j = !0;
                    if (!a.length) {
                        var k = !0;
                        return h.$evalAsync(function () {
                            k && b(e, e, h)
                        }), function () {
                            k = !1
                        }
                    }
                    return 1 === a.length ? this.$watch(a[0], function (a, c, f) {
                        e[0] = a, d[0] = c, b(e, a === c ? e : d, f)
                    }) : (f(a, function (a, b) {
                        var f = h.$watch(a, function (a, f) {
                            e[b] = a, d[b] = f, i || (i = !0, h.$evalAsync(c))
                        });
                        g.push(f)
                    }), function () {
                        for (; g.length;)g.shift()()
                    })
                }, $watchCollection: function (a, b) {
                    function c(a) {
                        f = a;
                        var b, c, d, h, i;
                        if (!r(f)) {
                            if (t(f))if (e(f)) {
                                g !== n && (g = n, q = g.length = 0, l++), b = f.length, q !== b && (l++, g.length = q = b);
                                for (var j = 0; b > j; j++)i = g[j], h = f[j], d = i !== i && h !== h, d || i === h || (l++, g[j] = h)
                            } else {
                                g !== o && (g = o = {}, q = 0, l++), b = 0;
                                for (c in f)f.hasOwnProperty(c) && (b++, h = f[c], i = g[c], c in g ? (d = i !== i && h !== h, d || i === h || (l++, g[c] = h)) : (q++, g[c] = h, l++));
                                if (q > b) {
                                    l++;
                                    for (c in g)f.hasOwnProperty(c) || (q--, delete g[c])
                                }
                            } else g !== f && (g = f, l++);
                            return l
                        }
                    }

                    function d() {
                        if (p ? (p = !1, b(f, f, i)) : b(f, h, i), j)if (t(f))if (e(f)) {
                            h = new Array(f.length);
                            for (var a = 0; a < f.length; a++)h[a] = f[a]
                        } else {
                            h = {};
                            for (var c in f)Xc.call(f, c) && (h[c] = f[c])
                        } else h = f
                    }

                    c.$stateful = !0;
                    var f, g, h, i = this, j = b.length > 1, l = 0, m = k(a, c), n = [], o = {}, p = !0, q = 0;
                    return this.$watch(m, d)
                }, $digest: function () {
                    var a, d, e, f, j, k, m, n, o, r, s = b, t = this, w = [];
                    p("$digest"), l.$$checkUrlChange(), this === y && null !== h && (l.defer.cancel(h),
                        v()), g = null;
                    do {
                        for (k = !1, n = t; z.length;) {
                            try {
                                r = z.shift(), r.scope.$eval(r.expression, r.locals)
                            } catch (B) {
                                i(B)
                            }
                            g = null
                        }
                        a:do {
                            if (f = n.$$watchers)for (j = f.length; j--;)try {
                                if (a = f[j])if ((d = a.get(n)) === (e = a.last) || (a.eq ? M(d, e) : "number" == typeof d && "number" == typeof e && isNaN(d) && isNaN(e))) {
                                    if (a === g) {
                                        k = !1;
                                        break a
                                    }
                                } else k = !0, g = a, a.last = a.eq ? K(d, null) : d, a.fn(d, e === u ? d : e, n), 5 > s && (o = 4 - s, w[o] || (w[o] = []), w[o].push({
                                    msg: x(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                                    newVal: d,
                                    oldVal: e
                                }))
                            } catch (B) {
                                i(B)
                            }
                            if (!(m = n.$$childHead || n !== t && n.$$nextSibling))for (; n !== t && !(m = n.$$nextSibling);)n = n.$parent
                        } while (n = m);
                        if ((k || z.length) && !s--)throw q(), c("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", b, w)
                    } while (k || z.length);
                    for (q(); A.length;)try {
                        A.shift()()
                    } catch (B) {
                        i(B)
                    }
                }, $destroy: function () {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        if (this.$broadcast("$destroy"), this.$$destroyed = !0, this !== y) {
                            for (var b in this.$$listenerCount)s(this, this.$$listenerCount[b], b);
                            a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = o, this.$on = this.$watch = this.$watchGroup = function () {
                                return o
                            }, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                        }
                    }
                }, $eval: function (a, b) {
                    return k(a)(this, b)
                }, $evalAsync: function (a, b) {
                    y.$$phase || z.length || l.defer(function () {
                        z.length && y.$digest()
                    }), z.push({scope: this, expression: a, locals: b})
                }, $$postDigest: function (a) {
                    A.push(a)
                }, $apply: function (a) {
                    try {
                        return p("$apply"), this.$eval(a)
                    } catch (b) {
                        i(b)
                    } finally {
                        q();
                        try {
                            y.$digest()
                        } catch (b) {
                            throw i(b), b
                        }
                    }
                }, $applyAsync: function (a) {
                    function b() {
                        c.$eval(a)
                    }

                    var c = this;
                    a && B.push(b), w()
                }, $on: function (a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []), c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                    var e = this;
                    return function () {
                        var d = c.indexOf(b);
                        -1 !== d && (c[d] = null, s(e, 1, a))
                    }
                }, $emit: function (a, b) {
                    var c, d, e, f = [], g = this, h = !1, j = {
                        name: a, targetScope: g, stopPropagation: function () {
                            h = !0
                        }, preventDefault: function () {
                            j.defaultPrevented = !0
                        }, defaultPrevented: !1
                    }, k = N([j], arguments, 1);
                    do {
                        for (c = g.$$listeners[a] || f, j.currentScope = g, d = 0, e = c.length; e > d; d++)if (c[d])try {
                            c[d].apply(null, k)
                        } catch (l) {
                            i(l)
                        } else c.splice(d, 1), d--, e--;
                        if (h)return j.currentScope = null, j;
                        g = g.$parent
                    } while (g);
                    return j.currentScope = null, j
                }, $broadcast: function (a, b) {
                    var c = this, d = c, e = c, f = {
                        name: a, targetScope: c, preventDefault: function () {
                            f.defaultPrevented = !0
                        }, defaultPrevented: !1
                    };
                    if (!c.$$listenerCount[a])return f;
                    for (var g, h, j, k = N([f], arguments, 1); d = e;) {
                        for (f.currentScope = d, g = d.$$listeners[a] || [], h = 0, j = g.length; j > h; h++)if (g[h])try {
                            g[h].apply(null, k)
                        } catch (l) {
                            i(l)
                        } else g.splice(h, 1), h--, j--;
                        if (!(e = d.$$listenerCount[a] && d.$$childHead || d !== c && d.$$nextSibling))for (; d !== c && !(e = d.$$nextSibling);)d = d.$parent
                    }
                    return f.currentScope = null, f
                }
            };
            var y = new n, z = y.$$asyncQueue = [], A = y.$$postDigestQueue = [], B = y.$$applyAsyncQueue = [];
            return y
        }]
    }

    function Wb() {
        var a = /^\s*(https?|ftp|mailto|tel|file):/, b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function (b) {
            return s(b) ? (a = b, this) : a
        }, this.imgSrcSanitizationWhitelist = function (a) {
            return s(a) ? (b = a, this) : b
        }, this.$get = function () {
            return function (c, d) {
                var e, f = d ? b : a;
                return e = dc(c).href, "" === e || e.match(f) ? c : "unsafe:" + e
            }
        }
    }

    function Xb(a) {
        if ("self" === a)return a;
        if (u(a)) {
            if (a.indexOf("***") > -1)throw te("iwcard", "Illegal sequence *** in string matcher.  String: {0}", a);
            return a = nd(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + a + "$")
        }
        if (y(a))return new RegExp("^" + a.source + "$");
        throw te("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
    }

    function Yb(a) {
        var b = [];
        return s(a) && f(a, function (a) {
            b.push(Xb(a))
        }), b
    }

    function Zb() {
        this.SCE_CONTEXTS = ue;
        var a = ["self"], b = [];
        this.resourceUrlWhitelist = function (b) {
            return arguments.length && (a = Yb(b)), a
        }, this.resourceUrlBlacklist = function (a) {
            return arguments.length && (b = Yb(a)), b
        }, this.$get = ["$injector", function (d) {
            function e(a, b) {
                return "self" === a ? ec(b) : !!a.exec(b.href)
            }

            function f(c) {
                var d, f, g = dc(c.toString()), h = !1;
                for (d = 0, f = a.length; f > d; d++)if (e(a[d], g)) {
                    h = !0;
                    break
                }
                if (h)for (d = 0, f = b.length; f > d; d++)if (e(b[d], g)) {
                    h = !1;
                    break
                }
                return h
            }

            function g(a) {
                var b = function (a) {
                    this.$$unwrapTrustedValue = function () {
                        return a
                    }
                };
                return a && (b.prototype = new a), b.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                }, b.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                }, b
            }

            function h(a, b) {
                var d = m.hasOwnProperty(a) ? m[a] : null;
                if (!d)throw te("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", a, b);
                if (null === b || b === c || "" === b)return b;
                if ("string" != typeof b)throw te("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", a);
                return new d(b)
            }

            function i(a) {
                return a instanceof l ? a.$$unwrapTrustedValue() : a
            }

            function j(a, b) {
                if (null === b || b === c || "" === b)return b;
                var d = m.hasOwnProperty(a) ? m[a] : null;
                if (d && b instanceof d)return b.$$unwrapTrustedValue();
                if (a === ue.RESOURCE_URL) {
                    if (f(b))return b;
                    throw te("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", b.toString())
                }
                if (a === ue.HTML)return k(b);
                throw te("unsafe", "Attempting to use an unsafe value in a safe context.")
            }

            var k = function (a) {
                throw te("unsafe", "Attempting to use an unsafe value in a safe context.")
            };
            d.has("$sanitize") && (k = d.get("$sanitize"));
            var l = g(), m = {};
            return m[ue.HTML] = g(l), m[ue.CSS] = g(l), m[ue.URL] = g(l), m[ue.JS] = g(l), m[ue.RESOURCE_URL] = g(m[ue.URL]), {
                trustAs: h,
                getTrusted: j,
                valueOf: i
            }
        }]
    }

    function $b() {
        var a = !0;
        this.enabled = function (b) {
            return arguments.length && (a = !!b), a
        }, this.$get = ["$parse", "$sceDelegate", function (b, c) {
            if (a && 8 > _c)throw te("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
            var d = L(ue);
            d.isEnabled = function () {
                return a
            }, d.trustAs = c.trustAs, d.getTrusted = c.getTrusted, d.valueOf = c.valueOf, a || (d.trustAs = d.getTrusted = function (a, b) {
                return b
            }, d.valueOf = p), d.parseAs = function (a, c) {
                var e = b(c);
                return e.literal && e.constant ? e : b(c, function (b) {
                    return d.getTrusted(a, b)
                })
            };
            var e = d.parseAs, g = d.getTrusted, h = d.trustAs;
            return f(ue, function (a, b) {
                var c = Wc(b);
                d[pa("parse_as_" + c)] = function (b) {
                    return e(a, b)
                }, d[pa("get_trusted_" + c)] = function (b) {
                    return g(a, b)
                }, d[pa("trust_as_" + c)] = function (b) {
                    return h(a, b)
                }
            }), d
        }]
    }

    function _b() {
        this.$get = ["$window", "$document", function (a, b) {
            var c, d, e = {}, f = m((/android (\d+)/.exec(Wc((a.navigator || {}).userAgent)) || [])[1]), g = /Boxee/i.test((a.navigator || {}).userAgent), h = b[0] || {}, i = /^(Moz|webkit|ms)(?=[A-Z])/, j = h.body && h.body.style, k = !1, l = !1;
            if (j) {
                for (var n in j)if (d = i.exec(n)) {
                    c = d[0], c = c.substr(0, 1).toUpperCase() + c.substr(1);
                    break
                }
                c || (c = "WebkitOpacity"in j && "webkit"), k = !!("transition"in j || c + "Transition"in j), l = !!("animation"in j || c + "Animation"in j), !f || k && l || (k = u(h.body.style.webkitTransition), l = u(h.body.style.webkitAnimation))
            }
            return {
                history: !(!a.history || !a.history.pushState || 4 > f || g), hasEvent: function (a) {
                    if ("input" === a && 11 >= _c)return !1;
                    if (r(e[a])) {
                        var b = h.createElement("div");
                        e[a] = "on" + a in b
                    }
                    return e[a]
                }, csp: od(), vendorPrefix: c, transitions: k, animations: l, android: f
            }
        }]
    }

    function ac() {
        this.$get = ["$templateCache", "$http", "$q", function (a, b, c) {
            function d(e, f) {
                function g(a) {
                    if (!f)throw Wd("tpload", "Failed to load template: {0}", e);
                    return c.reject(a)
                }

                d.totalPendingRequests++;
                var h = b.defaults && b.defaults.transformResponse;
                ld(h) ? h = h.filter(function (a) {
                    return a !== eb
                }) : h === eb && (h = null);
                var i = {cache: a, transformResponse: h};
                return b.get(e, i)["finally"](function () {
                    d.totalPendingRequests--
                }).then(function (a) {
                    return a.data
                }, g)
            }

            return d.totalPendingRequests = 0, d
        }]
    }

    function bc() {
        this.$get = ["$rootScope", "$browser", "$location", function (a, b, c) {
            var d = {};
            return d.findBindings = function (a, b, c) {
                var d = a.getElementsByClassName("ng-binding"), e = [];
                return f(d, function (a) {
                    var d = id.element(a).data("$binding");
                    d && f(d, function (d) {
                        if (c) {
                            var f = new RegExp("(^|\\s)" + nd(b) + "(\\s|\\||$)");
                            f.test(d) && e.push(a)
                        } else-1 != d.indexOf(b) && e.push(a)
                    })
                }), e
            }, d.findModels = function (a, b, c) {
                for (var d = ["ng-", "data-ng-", "ng\\:"], e = 0; e < d.length; ++e) {
                    var f = c ? "=" : "*=", g = "[" + d[e] + "model" + f + '"' + b + '"]', h = a.querySelectorAll(g);
                    if (h.length)return h
                }
            }, d.getLocation = function () {
                return c.url()
            }, d.setLocation = function (b) {
                b !== c.url() && (c.url(b), a.$digest())
            }, d.whenStable = function (a) {
                b.notifyWhenNoOutstandingRequests(a)
            }, d
        }]
    }

    function cc() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (a, b, c, d, e) {
            function f(f, h, i) {
                var j, k = s(i) && !i, l = (k ? d : c).defer(), m = l.promise;
                return j = b.defer(function () {
                    try {
                        l.resolve(f())
                    } catch (b) {
                        l.reject(b), e(b)
                    } finally {
                        delete g[m.$$timeoutId]
                    }
                    k || a.$apply()
                }, h), m.$$timeoutId = j, g[j] = l, m
            }

            var g = {};
            return f.cancel = function (a) {
                return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
            }, f
        }]
    }

    function dc(a) {
        var b = a;
        return _c && (ve.setAttribute("href", b), b = ve.href), ve.setAttribute("href", b), {
            href: ve.href,
            protocol: ve.protocol ? ve.protocol.replace(/:$/, "") : "",
            host: ve.host,
            search: ve.search ? ve.search.replace(/^\?/, "") : "",
            hash: ve.hash ? ve.hash.replace(/^#/, "") : "",
            hostname: ve.hostname,
            port: ve.port,
            pathname: "/" === ve.pathname.charAt(0) ? ve.pathname : "/" + ve.pathname
        }
    }

    function ec(a) {
        var b = u(a) ? dc(a) : a;
        return b.protocol === we.protocol && b.host === we.host
    }

    function fc() {
        this.$get = q(a)
    }

    function gc(a) {
        function b(d, e) {
            if (t(d)) {
                var g = {};
                return f(d, function (a, c) {
                    g[c] = b(c, a)
                }), g
            }
            return a.factory(d + c, e)
        }

        var c = "Filter";
        this.register = b, this.$get = ["$injector", function (a) {
            return function (b) {
                return a.get(b + c)
            }
        }], b("currency", kc), b("date", xc), b("filter", hc), b("json", yc), b("limitTo", zc), b("lowercase", Be), b("number", lc), b("orderBy", Ac), b("uppercase", Ce)
    }

    function hc() {
        return function (a, b, c) {
            if (!ld(a))return a;
            var d, e;
            switch (typeof b) {
                case"function":
                    d = b;
                    break;
                case"boolean":
                case"number":
                case"string":
                    e = !0;
                case"object":
                    d = ic(b, c, e);
                    break;
                default:
                    return a
            }
            return a.filter(d)
        }
    }

    function ic(a, b, c) {
        var d, e = t(a) && "$"in a;
        return b === !0 ? b = M : x(b) || (b = function (a, b) {
            return t(a) || t(b) ? !1 : (a = Wc("" + a), b = Wc("" + b), -1 !== a.indexOf(b))
        }), d = function (d) {
            return e && !t(d) ? jc(d, a.$, b, !1) : jc(d, a, b, c)
        }
    }

    function jc(a, b, c, d, e) {
        var f = null !== a ? typeof a : "null", g = null !== b ? typeof b : "null";
        if ("string" === g && "!" === b.charAt(0))return !jc(a, b.substring(1), c, d);
        if (ld(a))return a.some(function (a) {
            return jc(a, b, c, d)
        });
        switch (f) {
            case"object":
                var h;
                if (d) {
                    for (h in a)if ("$" !== h.charAt(0) && jc(a[h], b, c, !0))return !0;
                    return e ? !1 : jc(a, b, c, !1)
                }
                if ("object" === g) {
                    for (h in b) {
                        var i = b[h];
                        if (!x(i) && !r(i)) {
                            var j = "$" === h, k = j ? a : a[h];
                            if (!jc(k, i, c, j, j))return !1
                        }
                    }
                    return !0
                }
                return c(a, b);
            case"function":
                return !1;
            default:
                return c(a, b)
        }
    }

    function kc(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c, d) {
            return r(c) && (c = b.CURRENCY_SYM), r(d) && (d = b.PATTERNS[1].maxFrac), null == a ? a : mc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, d).replace(/\u00A4/g, c)
        }
    }

    function lc(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c) {
            return null == a ? a : mc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
        }
    }

    function mc(a, b, c, d, e) {
        if (!isFinite(a) || t(a))return "";
        var f = 0 > a;
        a = Math.abs(a);
        var g = a + "", h = "", i = [], j = !1;
        if (-1 !== g.indexOf("e")) {
            var k = g.match(/([\d\.]+)e(-?)(\d+)/);
            k && "-" == k[2] && k[3] > e + 1 ? a = 0 : (h = g, j = !0)
        }
        if (j)e > 0 && 1 > a && (h = a.toFixed(e), a = parseFloat(h)); else {
            var l = (g.split(xe)[1] || "").length;
            r(e) && (e = Math.min(Math.max(b.minFrac, l), b.maxFrac)), a = +(Math.round(+(a.toString() + "e" + e)).toString() + "e" + -e);
            var m = ("" + a).split(xe), n = m[0];
            m = m[1] || "";
            var o, p = 0, q = b.lgSize, s = b.gSize;
            if (n.length >= q + s)for (p = n.length - q, o = 0; p > o; o++)(p - o) % s === 0 && 0 !== o && (h += c), h += n.charAt(o);
            for (o = p; o < n.length; o++)(n.length - o) % q === 0 && 0 !== o && (h += c), h += n.charAt(o);
            for (; m.length < e;)m += "0";
            e && "0" !== e && (h += d + m.substr(0, e))
        }
        return 0 === a && (f = !1), i.push(f ? b.negPre : b.posPre, h, f ? b.negSuf : b.posSuf), i.join("")
    }

    function nc(a, b, c) {
        var d = "";
        for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b;)a = "0" + a;
        return c && (a = a.substr(a.length - b)), d + a
    }

    function oc(a, b, c, d) {
        return c = c || 0, function (e) {
            var f = e["get" + a]();
            return (c > 0 || f > -c) && (f += c), 0 === f && -12 == c && (f = 12), nc(f, b, d)
        }
    }

    function pc(a, b) {
        return function (c, d) {
            var e = c["get" + a](), f = Yc(b ? "SHORT" + a : a);
            return d[f][e]
        }
    }

    function qc(a) {
        var b = -1 * a.getTimezoneOffset(), c = b >= 0 ? "+" : "";
        return c += nc(Math[b > 0 ? "floor" : "ceil"](b / 60), 2) + nc(Math.abs(b % 60), 2)
    }

    function rc(a) {
        var b = new Date(a, 0, 1).getDay();
        return new Date(a, 0, (4 >= b ? 5 : 12) - b)
    }

    function sc(a) {
        return new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay()))
    }

    function tc(a) {
        return function (b) {
            var c = rc(b.getFullYear()), d = sc(b), e = +d - +c, f = 1 + Math.round(e / 6048e5);
            return nc(f, a)
        }
    }

    function uc(a, b) {
        return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1]
    }

    function vc(a, b) {
        return a.getFullYear() <= 0 ? b.ERAS[0] : b.ERAS[1]
    }

    function wc(a, b) {
        return a.getFullYear() <= 0 ? b.ERANAMES[0] : b.ERANAMES[1]
    }

    function xc(a) {
        function b(a) {
            var b;
            if (b = a.match(c)) {
                var d = new Date(0), e = 0, f = 0, g = b[8] ? d.setUTCFullYear : d.setFullYear, h = b[8] ? d.setUTCHours : d.setHours;
                b[9] && (e = m(b[9] + b[10]), f = m(b[9] + b[11])), g.call(d, m(b[1]), m(b[2]) - 1, m(b[3]));
                var i = m(b[4] || 0) - e, j = m(b[5] || 0) - f, k = m(b[6] || 0), l = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
                return h.call(d, i, j, k, l), d
            }
            return a
        }

        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (c, d, e) {
            var g, h, i = "", j = [];
            if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, u(c) && (c = Ae.test(c) ? m(c) : b(c)), v(c) && (c = new Date(c)), !w(c))return c;
            for (; d;)h = ze.exec(d), h ? (j = N(j, h, 1), d = j.pop()) : (j.push(d), d = null);
            return e && "UTC" === e && (c = new Date(c.getTime()), c.setMinutes(c.getMinutes() + c.getTimezoneOffset())), f(j, function (b) {
                g = ye[b], i += g ? g(c, a.DATETIME_FORMATS) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), i
        }
    }

    function yc() {
        return function (a, b) {
            return r(b) && (b = 2), R(a, b)
        }
    }

    function zc() {
        return function (a, b) {
            return v(a) && (a = a.toString()), ld(a) || u(a) ? (b = Math.abs(Number(b)) === 1 / 0 ? Number(b) : m(b), b ? b > 0 ? a.slice(0, b) : a.slice(b) : u(a) ? "" : []) : a
        }
    }

    function Ac(a) {
        return function (b, c, d) {
            function f(a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e)return e
                }
                return 0
            }

            function g(a, b) {
                return b ? function (b, c) {
                    return a(c, b)
                } : a
            }

            function h(a) {
                switch (typeof a) {
                    case"number":
                    case"boolean":
                    case"string":
                        return !0;
                    default:
                        return !1
                }
            }

            function i(a) {
                return null === a ? "null" : "function" == typeof a.valueOf && (a = a.valueOf(), h(a)) ? a : "function" == typeof a.toString && (a = a.toString(), h(a)) ? a : ""
            }

            function j(a, b) {
                var c = typeof a, d = typeof b;
                return c === d && "object" === c && (a = i(a), b = i(b)), c === d ? ("string" === c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : b > a ? -1 : 1) : d > c ? -1 : 1
            }

            return e(b) ? (c = ld(c) ? c : [c], 0 === c.length && (c = ["+"]), c = c.map(function (b) {
                var c = !1, d = b || p;
                if (u(b)) {
                    if (("+" == b.charAt(0) || "-" == b.charAt(0)) && (c = "-" == b.charAt(0), b = b.substring(1)), "" === b)return g(j, c);
                    if (d = a(b), d.constant) {
                        var e = d();
                        return g(function (a, b) {
                            return j(a[e], b[e])
                        }, c)
                    }
                }
                return g(function (a, b) {
                    return j(d(a), d(b))
                }, c)
            }), dd.call(b).sort(g(f, d))) : b
        }
    }

    function Bc(a) {
        return x(a) && (a = {link: a}), a.restrict = a.restrict || "AC", q(a)
    }

    function Cc(a, b) {
        a.$name = b
    }

    function Dc(a, b, d, e, g) {
        var h = this, i = [], j = h.$$parentForm = a.parent().controller("form") || Fe;
        h.$error = {}, h.$$success = {}, h.$pending = c, h.$name = g(b.name || b.ngForm || "")(d), h.$dirty = !1, h.$pristine = !0, h.$valid = !0, h.$invalid = !1, h.$submitted = !1, j.$addControl(h), h.$rollbackViewValue = function () {
            f(i, function (a) {
                a.$rollbackViewValue()
            })
        }, h.$commitViewValue = function () {
            f(i, function (a) {
                a.$commitViewValue()
            })
        }, h.$addControl = function (a) {
            ga(a.$name, "input"), i.push(a), a.$name && (h[a.$name] = a)
        }, h.$$renameControl = function (a, b) {
            var c = a.$name;
            h[c] === a && delete h[c], h[b] = a, a.$name = b
        }, h.$removeControl = function (a) {
            a.$name && h[a.$name] === a && delete h[a.$name], f(h.$pending, function (b, c) {
                h.$setValidity(c, null, a)
            }), f(h.$error, function (b, c) {
                h.$setValidity(c, null, a)
            }), f(h.$$success, function (b, c) {
                h.$setValidity(c, null, a)
            }), J(i, a)
        }, Sc({
            ctrl: this, $element: a, set: function (a, b, c) {
                var d = a[b];
                if (d) {
                    var e = d.indexOf(c);
                    -1 === e && d.push(c)
                } else a[b] = [c]
            }, unset: function (a, b, c) {
                var d = a[b];
                d && (J(d, c), 0 === d.length && delete a[b])
            }, parentForm: j, $animate: e
        }), h.$setDirty = function () {
            e.removeClass(a, of), e.addClass(a, pf), h.$dirty = !0, h.$pristine = !1, j.$setDirty()
        }, h.$setPristine = function () {
            e.setClass(a, of, pf + " " + Ge), h.$dirty = !1, h.$pristine = !0, h.$submitted = !1, f(i, function (a) {
                a.$setPristine()
            })
        }, h.$setUntouched = function () {
            f(i, function (a) {
                a.$setUntouched()
            })
        }, h.$setSubmitted = function () {
            e.addClass(a, Ge), h.$submitted = !0, j.$setSubmitted()
        }
    }

    function Ec(a) {
        a.$formatters.push(function (b) {
            return a.$isEmpty(b) ? b : b.toString()
        })
    }

    function Fc(a, b, c, d, e, f) {
        Gc(a, b, c, d, e, f), Ec(d)
    }

    function Gc(a, b, c, d, e, f) {
        var g = Wc(b[0].type);
        if (!e.android) {
            var h = !1;
            b.on("compositionstart", function (a) {
                h = !0
            }), b.on("compositionend", function () {
                h = !1, i()
            })
        }
        var i = function (a) {
            if (j && (f.defer.cancel(j), j = null), !h) {
                var e = b.val(), i = a && a.type;
                "password" === g || c.ngTrim && "false" === c.ngTrim || (e = md(e)), (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, i)
            }
        };
        if (e.hasEvent("input"))b.on("input", i); else {
            var j, k = function (a, b, c) {
                j || (j = f.defer(function () {
                    j = null, b && b.value === c || i(a)
                }))
            };
            b.on("keydown", function (a) {
                var b = a.keyCode;
                91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || k(a, this, this.value)
            }), e.hasEvent("paste") && b.on("paste cut", k)
        }
        b.on("change", i), d.$render = function () {
            b.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue)
        }
    }

    function Hc(a, b) {
        if (w(a))return a;
        if (u(a)) {
            Qe.lastIndex = 0;
            var c = Qe.exec(a);
            if (c) {
                var d = +c[1], e = +c[2], f = 0, g = 0, h = 0, i = 0, j = rc(d), k = 7 * (e - 1);
                return b && (f = b.getHours(), g = b.getMinutes(), h = b.getSeconds(), i = b.getMilliseconds()), new Date(d, 0, j.getDate() + k, f, g, h, i)
            }
        }
        return NaN
    }

    function Ic(a, b) {
        return function (c, d) {
            var e, g;
            if (w(c))return c;
            if (u(c)) {
                if ('"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1)), Ke.test(c))return new Date(c);
                if (a.lastIndex = 0, e = a.exec(c))return e.shift(), g = d ? {
                    yyyy: d.getFullYear(),
                    MM: d.getMonth() + 1,
                    dd: d.getDate(),
                    HH: d.getHours(),
                    mm: d.getMinutes(),
                    ss: d.getSeconds(),
                    sss: d.getMilliseconds() / 1e3
                } : {yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0}, f(e, function (a, c) {
                    c < b.length && (g[b[c]] = +a)
                }), new Date(g.yyyy, g.MM - 1, g.dd, g.HH, g.mm, g.ss || 0, 1e3 * g.sss || 0)
            }
            return NaN
        }
    }

    function Jc(a, b, d, e) {
        return function (f, g, h, i, j, k, l) {
            function m(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime())
            }

            function n(a) {
                return s(a) ? w(a) ? a : d(a) : c
            }

            Kc(f, g, h, i), Gc(f, g, h, i, j, k);
            var o, p = i && i.$options && i.$options.timezone;
            if (i.$$parserName = a, i.$parsers.push(function (a) {
                    if (i.$isEmpty(a))return null;
                    if (b.test(a)) {
                        var e = d(a, o);
                        return "UTC" === p && e.setMinutes(e.getMinutes() - e.getTimezoneOffset()), e
                    }
                    return c
                }), i.$formatters.push(function (a) {
                    if (a && !w(a))throw tf("datefmt", "Expected `{0}` to be a date", a);
                    if (m(a)) {
                        if (o = a, o && "UTC" === p) {
                            var b = 6e4 * o.getTimezoneOffset();
                            o = new Date(o.getTime() + b)
                        }
                        return l("date")(a, e, p)
                    }
                    return o = null, ""
                }), s(h.min) || h.ngMin) {
                var q;
                i.$validators.min = function (a) {
                    return !m(a) || r(q) || d(a) >= q
                }, h.$observe("min", function (a) {
                    q = n(a), i.$validate()
                })
            }
            if (s(h.max) || h.ngMax) {
                var t;
                i.$validators.max = function (a) {
                    return !m(a) || r(t) || d(a) <= t
                }, h.$observe("max", function (a) {
                    t = n(a), i.$validate()
                })
            }
        }
    }

    function Kc(a, b, d, e) {
        var f = b[0], g = e.$$hasNativeValidators = t(f.validity);
        g && e.$parsers.push(function (a) {
            var d = b.prop(Vc) || {};
            return d.badInput && !d.typeMismatch ? c : a
        })
    }

    function Lc(a, b, d, e, f, g) {
        if (Kc(a, b, d, e), Gc(a, b, d, e, f, g), e.$$parserName = "number", e.$parsers.push(function (a) {
                return e.$isEmpty(a) ? null : Ne.test(a) ? parseFloat(a) : c
            }), e.$formatters.push(function (a) {
                if (!e.$isEmpty(a)) {
                    if (!v(a))throw tf("numfmt", "Expected `{0}` to be a number", a);
                    a = a.toString()
                }
                return a
            }), s(d.min) || d.ngMin) {
            var h;
            e.$validators.min = function (a) {
                return e.$isEmpty(a) || r(h) || a >= h
            }, d.$observe("min", function (a) {
                s(a) && !v(a) && (a = parseFloat(a, 10)), h = v(a) && !isNaN(a) ? a : c, e.$validate()
            })
        }
        if (s(d.max) || d.ngMax) {
            var i;
            e.$validators.max = function (a) {
                return e.$isEmpty(a) || r(i) || i >= a
            }, d.$observe("max", function (a) {
                s(a) && !v(a) && (a = parseFloat(a, 10)), i = v(a) && !isNaN(a) ? a : c, e.$validate()
            })
        }
    }

    function Mc(a, b, c, d, e, f) {
        Gc(a, b, c, d, e, f), Ec(d), d.$$parserName = "url", d.$validators.url = function (a, b) {
            var c = a || b;
            return d.$isEmpty(c) || Le.test(c)
        }
    }

    function Nc(a, b, c, d, e, f) {
        Gc(a, b, c, d, e, f), Ec(d), d.$$parserName = "email", d.$validators.email = function (a, b) {
            var c = a || b;
            return d.$isEmpty(c) || Me.test(c)
        }
    }

    function Oc(a, b, c, d) {
        r(c.name) && b.attr("name", j());
        var e = function (a) {
            b[0].checked && d.$setViewValue(c.value, a && a.type)
        };
        b.on("click", e), d.$render = function () {
            var a = c.value;
            b[0].checked = a == d.$viewValue
        }, c.$observe("value", d.$render)
    }

    function Pc(a, b, c, e, f) {
        var g;
        if (s(e)) {
            if (g = a(e), !g.constant)throw d("ngModel")("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", c, e);
            return g(b)
        }
        return f
    }

    function Qc(a, b, c, d, e, f, g, h) {
        var i = Pc(h, a, "ngTrueValue", c.ngTrueValue, !0), j = Pc(h, a, "ngFalseValue", c.ngFalseValue, !1), k = function (a) {
            d.$setViewValue(b[0].checked, a && a.type)
        };
        b.on("click", k), d.$render = function () {
            b[0].checked = d.$viewValue
        }, d.$isEmpty = function (a) {
            return a === !1
        }, d.$formatters.push(function (a) {
            return M(a, i)
        }), d.$parsers.push(function (a) {
            return a ? i : j
        })
    }

    function Rc(a, b) {
        return a = "ngClass" + a, ["$animate", function (c) {
            function d(a, b) {
                var c = [];
                a:for (var d = 0; d < a.length; d++) {
                    for (var e = a[d], f = 0; f < b.length; f++)if (e == b[f])continue a;
                    c.push(e)
                }
                return c
            }

            function e(a) {
                if (ld(a))return a;
                if (u(a))return a.split(" ");
                if (t(a)) {
                    var b = [];
                    return f(a, function (a, c) {
                        a && (b = b.concat(c.split(" ")))
                    }), b
                }
                return a
            }

            return {
                restrict: "AC", link: function (g, h, i) {
                    function j(a) {
                        var b = l(a, 1);
                        i.$addClass(b)
                    }

                    function k(a) {
                        var b = l(a, -1);
                        i.$removeClass(b)
                    }

                    function l(a, b) {
                        var c = h.data("$classCounts") || {}, d = [];
                        return f(a, function (a) {
                            (b > 0 || c[a]) && (c[a] = (c[a] || 0) + b, c[a] === +(b > 0) && d.push(a))
                        }), h.data("$classCounts", c), d.join(" ")
                    }

                    function m(a, b) {
                        var e = d(b, a), f = d(a, b);
                        e = l(e, 1), f = l(f, -1), e && e.length && c.addClass(h, e), f && f.length && c.removeClass(h, f)
                    }

                    function n(a) {
                        if (b === !0 || g.$index % 2 === b) {
                            var c = e(a || []);
                            if (o) {
                                if (!M(a, o)) {
                                    var d = e(o);
                                    m(d, c)
                                }
                            } else j(c)
                        }
                        o = L(a)
                    }

                    var o;
                    g.$watch(i[a], n, !0), i.$observe("class", function (b) {
                        n(g.$eval(i[a]))
                    }), "ngClass" !== a && g.$watch("$index", function (c, d) {
                        var f = 1 & c;
                        if (f !== (1 & d)) {
                            var h = e(g.$eval(i[a]));
                            f === b ? j(h) : k(h)
                        }
                    })
                }
            }
        }]
    }

    function Sc(a) {
        function b(a, b, i) {
            b === c ? d("$pending", a, i) : e("$pending", a, i), E(b) ? b ? (l(h.$error, a, i), k(h.$$success, a, i)) : (k(h.$error, a, i), l(h.$$success, a, i)) : (l(h.$error, a, i), l(h.$$success, a, i)), h.$pending ? (f(sf, !0), h.$valid = h.$invalid = c, g("", null)) : (f(sf, !1), h.$valid = Tc(h.$error), h.$invalid = !h.$valid, g("", h.$valid));
            var j;
            j = h.$pending && h.$pending[a] ? c : h.$error[a] ? !1 : h.$$success[a] ? !0 : null, g(a, j), m.$setValidity(a, j, h)
        }

        function d(a, b, c) {
            h[a] || (h[a] = {}), k(h[a], b, c)
        }

        function e(a, b, d) {
            h[a] && l(h[a], b, d), Tc(h[a]) && (h[a] = c)
        }

        function f(a, b) {
            b && !j[a] ? (n.addClass(i, a), j[a] = !0) : !b && j[a] && (n.removeClass(i, a), j[a] = !1)
        }

        function g(a, b) {
            a = a ? "-" + ca(a, "-") : "", f(mf + a, b === !0), f(nf + a, b === !1)
        }

        var h = a.ctrl, i = a.$element, j = {}, k = a.set, l = a.unset, m = a.parentForm, n = a.$animate;
        j[nf] = !(j[mf] = i.hasClass(mf)), h.$setValidity = b
    }

    function Tc(a) {
        if (a)for (var b in a)return !1;
        return !0
    }

    var Uc = /^\/(.+)\/([a-z]*)$/, Vc = "validity", Wc = function (a) {
        return u(a) ? a.toLowerCase() : a
    }, Xc = Object.prototype.hasOwnProperty, Yc = function (a) {
        return u(a) ? a.toUpperCase() : a
    }, Zc = function (a) {
        return u(a) ? a.replace(/[A-Z]/g, function (a) {
            return String.fromCharCode(32 | a.charCodeAt(0))
        }) : a
    }, $c = function (a) {
        return u(a) ? a.replace(/[a-z]/g, function (a) {
            return String.fromCharCode(-33 & a.charCodeAt(0))
        }) : a
    };
    "i" !== "I".toLowerCase() && (Wc = Zc, Yc = $c);
    var _c, ad, bd, cd, dd = [].slice, ed = [].splice, fd = [].push, gd = Object.prototype.toString, hd = d("ng"), id = a.angular || (a.angular = {}), jd = 0;
    _c = b.documentMode, o.$inject = [], p.$inject = [];
    var kd, ld = Array.isArray, md = function (a) {
        return u(a) ? a.trim() : a
    }, nd = function (a) {
        return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }, od = function () {
        if (s(od.isActive_))return od.isActive_;
        var a = !(!b.querySelector("[ng-csp]") && !b.querySelector("[data-ng-csp]"));
        if (!a)try {
            new Function("")
        } catch (c) {
            a = !0
        }
        return od.isActive_ = a
    }, pd = ["ng-", "data-ng-", "ng:", "x-ng-"], qd = /[A-Z]/g, rd = !1, sd = 1, td = 3, ud = 8, vd = 9, wd = 11, xd = {
        full: "1.3.15",
        major: 1,
        minor: 3,
        dot: 15,
        codeName: "locality-filtration"
    };
    ua.expando = "ng339";
    var yd = ua.cache = {}, zd = 1, Ad = function (a, b, c) {
        a.addEventListener(b, c, !1)
    }, Bd = function (a, b, c) {
        a.removeEventListener(b, c, !1)
    };
    ua._data = function (a) {
        return this.cache[a[this.expando]] || {}
    };
    var Cd = /([\:\-\_]+(.))/g, Dd = /^moz([A-Z])/, Ed = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
    }, Fd = d("jqLite"), Gd = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Hd = /<|&#?\w+;/, Id = /<([\w:]+)/, Jd = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Kd = {
        option: [1, '<select multiple="multiple">', "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Kd.optgroup = Kd.option, Kd.tbody = Kd.tfoot = Kd.colgroup = Kd.caption = Kd.thead, Kd.th = Kd.td;
    var Ld = ua.prototype = {
        ready: function (c) {
            function d() {
                e || (e = !0, c())
            }

            var e = !1;
            "complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), ua(a).on("load", d))
        }, toString: function () {
            var a = [];
            return f(this, function (b) {
                a.push("" + b)
            }), "[" + a.join(", ") + "]"
        }, eq: function (a) {
            return ad(a >= 0 ? this[a] : this[this.length + a])
        }, length: 0, push: fd, sort: [].sort, splice: [].splice
    }, Md = {};
    f("multiple,selected,checked,disabled,readOnly,required,open".split(","), function (a) {
        Md[Wc(a)] = a
    });
    var Nd = {};
    f("input,select,option,textarea,button,form,details".split(","), function (a) {
        Nd[a] = !0
    });
    var Od = {ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern"};
    f({data: Aa, removeData: ya}, function (a, b) {
        ua[b] = a
    }), f({
        data: Aa, inheritedData: Ga, scope: function (a) {
            return ad.data(a, "$scope") || Ga(a.parentNode || a, ["$isolateScope", "$scope"])
        }, isolateScope: function (a) {
            return ad.data(a, "$isolateScope") || ad.data(a, "$isolateScopeNoTemplate")
        }, controller: Fa, injector: function (a) {
            return Ga(a, "$injector")
        }, removeAttr: function (a, b) {
            a.removeAttribute(b)
        }, hasClass: Ba, css: function (a, b, c) {
            return b = pa(b), s(c) ? void(a.style[b] = c) : a.style[b]
        }, attr: function (a, b, d) {
            var e = Wc(b);
            if (Md[e]) {
                if (!s(d))return a[b] || (a.attributes.getNamedItem(b) || o).specified ? e : c;
                d ? (a[b] = !0, a.setAttribute(b, e)) : (a[b] = !1, a.removeAttribute(e))
            } else if (s(d))a.setAttribute(b, d); else if (a.getAttribute) {
                var f = a.getAttribute(b, 2);
                return null === f ? c : f
            }
        }, prop: function (a, b, c) {
            return s(c) ? void(a[b] = c) : a[b]
        }, text: function () {
            function a(a, b) {
                if (r(b)) {
                    var c = a.nodeType;
                    return c === sd || c === td ? a.textContent : ""
                }
                a.textContent = b
            }

            return a.$dv = "", a
        }(), val: function (a, b) {
            if (r(b)) {
                if (a.multiple && "select" === I(a)) {
                    var c = [];
                    return f(a.options, function (a) {
                        a.selected && c.push(a.value || a.text)
                    }), 0 === c.length ? null : c
                }
                return a.value
            }
            a.value = b
        }, html: function (a, b) {
            return r(b) ? a.innerHTML : (wa(a, !0), void(a.innerHTML = b))
        }, empty: Ha
    }, function (a, b) {
        ua.prototype[b] = function (b, d) {
            var e, f, g = this.length;
            if (a !== Ha && (2 == a.length && a !== Ba && a !== Fa ? b : d) === c) {
                if (t(b)) {
                    for (e = 0; g > e; e++)if (a === Aa)a(this[e], b); else for (f in b)a(this[e], f, b[f]);
                    return this
                }
                for (var h = a.$dv, i = h === c ? Math.min(g, 1) : g, j = 0; i > j; j++) {
                    var k = a(this[j], b, d);
                    h = h ? h + k : k
                }
                return h
            }
            for (e = 0; g > e; e++)a(this[e], b, d);
            return this
        }
    }), f({
        removeData: ya, on: function Uf(a, b, c, d) {
            if (s(d))throw Fd("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            if (ra(a)) {
                var e = za(a, !0), f = e.events, g = e.handle;
                g || (g = e.handle = Ma(a, f));
                for (var h = b.indexOf(" ") >= 0 ? b.split(" ") : [b], i = h.length; i--;) {
                    b = h[i];
                    var j = f[b];
                    j || (f[b] = [], "mouseenter" === b || "mouseleave" === b ? Uf(a, Ed[b], function (a) {
                        var c = this, d = a.relatedTarget;
                        (!d || d !== c && !c.contains(d)) && g(a, b)
                    }) : "$destroy" !== b && Ad(a, b, g), j = f[b]), j.push(c)
                }
            }
        }, off: xa, one: function (a, b, c) {
            a = ad(a), a.on(b, function d() {
                a.off(b, c), a.off(b, d)
            }), a.on(b, c)
        }, replaceWith: function (a, b) {
            var c, d = a.parentNode;
            wa(a), f(new ua(b), function (b) {
                c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b
            })
        }, children: function (a) {
            var b = [];
            return f(a.childNodes, function (a) {
                a.nodeType === sd && b.push(a)
            }), b
        }, contents: function (a) {
            return a.contentDocument || a.childNodes || []
        }, append: function (a, b) {
            var c = a.nodeType;
            if (c === sd || c === wd) {
                b = new ua(b);
                for (var d = 0, e = b.length; e > d; d++) {
                    var f = b[d];
                    a.appendChild(f)
                }
            }
        }, prepend: function (a, b) {
            if (a.nodeType === sd) {
                var c = a.firstChild;
                f(new ua(b), function (b) {
                    a.insertBefore(b, c)
                })
            }
        }, wrap: function (a, b) {
            b = ad(b).eq(0).clone()[0];
            var c = a.parentNode;
            c && c.replaceChild(b, a), b.appendChild(a)
        }, remove: Ia, detach: function (a) {
            Ia(a, !0)
        }, after: function (a, b) {
            var c = a, d = a.parentNode;
            b = new ua(b);
            for (var e = 0, f = b.length; f > e; e++) {
                var g = b[e];
                d.insertBefore(g, c.nextSibling), c = g
            }
        }, addClass: Da, removeClass: Ca, toggleClass: function (a, b, c) {
            b && f(b.split(" "), function (b) {
                var d = c;
                r(d) && (d = !Ba(a, b)), (d ? Da : Ca)(a, b)
            })
        }, parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== wd ? b : null
        }, next: function (a) {
            return a.nextElementSibling
        }, find: function (a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : []
        }, clone: va, triggerHandler: function (a, b, c) {
            var d, e, g, h = b.type || b, i = za(a), j = i && i.events, k = j && j[h];
            k && (d = {
                preventDefault: function () {
                    this.defaultPrevented = !0
                }, isDefaultPrevented: function () {
                    return this.defaultPrevented === !0
                }, stopImmediatePropagation: function () {
                    this.immediatePropagationStopped = !0
                }, isImmediatePropagationStopped: function () {
                    return this.immediatePropagationStopped === !0
                }, stopPropagation: o, type: h, target: a
            }, b.type && (d = l(d, b)), e = L(k), g = c ? [d].concat(c) : [d], f(e, function (b) {
                d.isImmediatePropagationStopped() || b.apply(a, g)
            }))
        }
    }, function (a, b) {
        ua.prototype[b] = function (b, c, d) {
            for (var e, f = 0, g = this.length; g > f; f++)r(e) ? (e = a(this[f], b, c, d), s(e) && (e = ad(e))) : Ea(e, a(this[f], b, c, d));
            return s(e) ? e : this
        }, ua.prototype.bind = ua.prototype.on, ua.prototype.unbind = ua.prototype.off
    }), Pa.prototype = {
        put: function (a, b) {
            this[Oa(a, this.nextUid)] = b
        }, get: function (a) {
            return this[Oa(a, this.nextUid)]
        }, remove: function (a) {
            var b = this[a = Oa(a, this.nextUid)];
            return delete this[a], b
        }
    };
    var Pd = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, Qd = /,/, Rd = /^\s*(_?)(\S+?)\1\s*$/, Sd = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Td = d("$injector");
    Sa.$$annotate = Ra;
    var Ud = d("$animate"), Vd = ["$provide", function (a) {
        this.$$selectors = {}, this.register = function (b, c) {
            var d = b + "-animation";
            if (b && "." != b.charAt(0))throw Ud("notcsel", "Expecting class selector starting with '.' got '{0}'.", b);
            this.$$selectors[b.substr(1)] = d, a.factory(d, c)
        }, this.classNameFilter = function (a) {
            return 1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null), this.$$classNameFilter
        }, this.$get = ["$$q", "$$asyncCallback", "$rootScope", function (a, b, c) {
            function d(b) {
                var d, e = a.defer();
                return e.promise.$$cancelFn = function () {
                    d && d()
                }, c.$$postDigest(function () {
                    d = b(function () {
                        e.resolve()
                    })
                }), e.promise
            }

            function e(a, b) {
                var c = [], d = [], e = ja();
                return f((a.attr("class") || "").split(/\s+/), function (a) {
                    e[a] = !0
                }), f(b, function (a, b) {
                    var f = e[b];
                    a === !1 && f ? d.push(b) : a !== !0 || f || c.push(b)
                }), c.length + d.length > 0 && [c.length ? c : null, d.length ? d : null]
            }

            function g(a, b, c) {
                for (var d = 0, e = b.length; e > d; ++d) {
                    var f = b[d];
                    a[f] = c
                }
            }

            function h() {
                return j || (j = a.defer(), b(function () {
                    j.resolve(), j = null
                })), j.promise
            }

            function i(a, b) {
                if (id.isObject(b)) {
                    var c = l(b.from || {}, b.to || {});
                    a.css(c)
                }
            }

            var j;
            return {
                animate: function (a, b, c) {
                    return i(a, {from: b, to: c}), h()
                }, enter: function (a, b, c, d) {
                    return i(a, d), c ? c.after(a) : b.prepend(a), h()
                }, leave: function (a, b) {
                    return i(a, b), a.remove(), h()
                }, move: function (a, b, c, d) {
                    return this.enter(a, b, c, d)
                }, addClass: function (a, b, c) {
                    return this.setClass(a, b, [], c)
                }, $$addClassImmediately: function (a, b, c) {
                    return a = ad(a), b = u(b) ? b : ld(b) ? b.join(" ") : "", f(a, function (a) {
                        Da(a, b)
                    }), i(a, c), h()
                }, removeClass: function (a, b, c) {
                    return this.setClass(a, [], b, c)
                }, $$removeClassImmediately: function (a, b, c) {
                    return a = ad(a), b = u(b) ? b : ld(b) ? b.join(" ") : "", f(a, function (a) {
                        Ca(a, b)
                    }), i(a, c), h()
                }, setClass: function (a, b, c, f) {
                    var h = this, i = "$$animateClasses", j = !1;
                    a = ad(a);
                    var k = a.data(i);
                    k ? f && k.options && (k.options = id.extend(k.options || {}, f)) : (k = {
                        classes: {},
                        options: f
                    }, j = !0);
                    var l = k.classes;
                    return b = ld(b) ? b : b.split(" "), c = ld(c) ? c : c.split(" "), g(l, b, !0), g(l, c, !1), j && (k.promise = d(function (b) {
                        var c = a.data(i);
                        if (a.removeData(i), c) {
                            var d = e(a, c.classes);
                            d && h.$$setClassImmediately(a, d[0], d[1], c.options)
                        }
                        b()
                    }), a.data(i, k)), k.promise
                }, $$setClassImmediately: function (a, b, c, d) {
                    return b && this.$$addClassImmediately(a, b), c && this.$$removeClassImmediately(a, c), i(a, d), h()
                }, enabled: o, cancel: o
            }
        }]
    }], Wd = d("$compile");
    Za.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Xd = /^((?:x|data)[\:\-_])/i, Yd = d("$controller"), Zd = "application/json", $d = {"Content-Type": Zd + ";charset=utf-8"}, _d = /^\[|^\{(?!\{)/, ae = {
        "[": /]$/,
        "{": /}$/
    }, be = /^\)\]\}',?\n/, ce = d("$interpolate"), de = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, ee = {
        http: 80,
        https: 443,
        ftp: 21
    }, fe = d("$location"), ge = {
        $$html5: !1, $$replace: !1, absUrl: Cb("$$absUrl"), url: function (a) {
            if (r(a))return this.$$url;
            var b = de.exec(a);
            return (b[1] || "" === a) && this.path(decodeURIComponent(b[1])), (b[2] || b[1] || "" === a) && this.search(b[3] || ""), this.hash(b[5] || ""), this
        }, protocol: Cb("$$protocol"), host: Cb("$$host"), port: Cb("$$port"), path: Db("$$path", function (a) {
            return a = null !== a ? a.toString() : "", "/" == a.charAt(0) ? a : "/" + a
        }), search: function (a, b) {
            switch (arguments.length) {
                case 0:
                    return this.$$search;
                case 1:
                    if (u(a) || v(a))a = a.toString(), this.$$search = V(a); else {
                        if (!t(a))throw fe("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                        a = K(a, {}), f(a, function (b, c) {
                            null == b && delete a[c]
                        }), this.$$search = a
                    }
                    break;
                default:
                    r(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
            }
            return this.$$compose(), this
        }, hash: Db("$$hash", function (a) {
            return null !== a ? a.toString() : ""
        }), replace: function () {
            return this.$$replace = !0, this
        }
    };
    f([Bb, Ab, zb], function (a) {
        a.prototype = Object.create(ge), a.prototype.state = function (b) {
            if (!arguments.length)return this.$$state;
            if (a !== zb || !this.$$html5)throw fe("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
            return this.$$state = r(b) ? null : b, this
        }
    });
    var he = d("$parse"), ie = Function.prototype.call, je = Function.prototype.apply, ke = Function.prototype.bind, le = ja();
    f({
        "null": function () {
            return null
        }, "true": function () {
            return !0
        }, "false": function () {
            return !1
        }, undefined: function () {
        }
    }, function (a, b) {
        a.constant = a.literal = a.sharedGetter = !0, le[b] = a
    }), le["this"] = function (a) {
        return a
    }, le["this"].sharedGetter = !0;
    var me = l(ja(), {
        "+": function (a, b, d, e) {
            return d = d(a, b), e = e(a, b), s(d) ? s(e) ? d + e : d : s(e) ? e : c
        }, "-": function (a, b, c, d) {
            return c = c(a, b), d = d(a, b), (s(c) ? c : 0) - (s(d) ? d : 0)
        }, "*": function (a, b, c, d) {
            return c(a, b) * d(a, b)
        }, "/": function (a, b, c, d) {
            return c(a, b) / d(a, b)
        }, "%": function (a, b, c, d) {
            return c(a, b) % d(a, b)
        }, "===": function (a, b, c, d) {
            return c(a, b) === d(a, b)
        }, "!==": function (a, b, c, d) {
            return c(a, b) !== d(a, b)
        }, "==": function (a, b, c, d) {
            return c(a, b) == d(a, b)
        }, "!=": function (a, b, c, d) {
            return c(a, b) != d(a, b)
        }, "<": function (a, b, c, d) {
            return c(a, b) < d(a, b)
        }, ">": function (a, b, c, d) {
            return c(a, b) > d(a, b)
        }, "<=": function (a, b, c, d) {
            return c(a, b) <= d(a, b)
        }, ">=": function (a, b, c, d) {
            return c(a, b) >= d(a, b)
        }, "&&": function (a, b, c, d) {
            return c(a, b) && d(a, b)
        }, "||": function (a, b, c, d) {
            return c(a, b) || d(a, b)
        }, "!": function (a, b, c) {
            return !c(a, b)
        }, "=": !0, "|": !0
    }), ne = {n: "\n", f: "\f", r: "\r", t: "	", v: "", "'": "'", '"': '"'}, oe = function (a) {
        this.options = a
    };
    oe.prototype = {
        constructor: oe, lex: function (a) {
            for (this.text = a, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                var b = this.text.charAt(this.index);
                if ('"' === b || "'" === b)this.readString(b); else if (this.isNumber(b) || "." === b && this.isNumber(this.peek()))this.readNumber(); else if (this.isIdent(b))this.readIdent(); else if (this.is(b, "(){}[].,;:?"))this.tokens.push({
                    index: this.index,
                    text: b
                }), this.index++; else if (this.isWhitespace(b))this.index++; else {
                    var c = b + this.peek(), d = c + this.peek(2), e = me[b], f = me[c], g = me[d];
                    if (e || f || g) {
                        var h = g ? d : f ? c : b;
                        this.tokens.push({index: this.index, text: h, operator: !0}), this.index += h.length
                    } else this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
            }
            return this.tokens
        }, is: function (a, b) {
            return -1 !== b.indexOf(a)
        }, peek: function (a) {
            var b = a || 1;
            return this.index + b < this.text.length ? this.text.charAt(this.index + b) : !1
        }, isNumber: function (a) {
            return a >= "0" && "9" >= a && "string" == typeof a
        }, isWhitespace: function (a) {
            return " " === a || "\r" === a || "	" === a || "\n" === a || "" === a || "?" === a
        }, isIdent: function (a) {
            return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a
        }, isExpOperator: function (a) {
            return "-" === a || "+" === a || this.isNumber(a)
        }, throwError: function (a, b, c) {
            c = c || this.index;
            var d = s(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c;
            throw he("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", a, d, this.text)
        }, readNumber: function () {
            for (var a = "", b = this.index; this.index < this.text.length;) {
                var c = Wc(this.text.charAt(this.index));
                if ("." == c || this.isNumber(c))a += c; else {
                    var d = this.peek();
                    if ("e" == c && this.isExpOperator(d))a += c; else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1))a += c; else {
                        if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1))break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            this.tokens.push({index: b, text: a, constant: !0, value: Number(a)})
        }, readIdent: function () {
            for (var a = this.index; this.index < this.text.length;) {
                var b = this.text.charAt(this.index);
                if (!this.isIdent(b) && !this.isNumber(b))break;
                this.index++
            }
            this.tokens.push({index: a, text: this.text.slice(a, this.index), identifier: !0})
        }, readString: function (a) {
            var b = this.index;
            this.index++;
            for (var c = "", d = a, e = !1; this.index < this.text.length;) {
                var f = this.text.charAt(this.index);
                if (d += f, e) {
                    if ("u" === f) {
                        var g = this.text.substring(this.index + 1, this.index + 5);
                        g.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + g + "]"), this.index += 4, c += String.fromCharCode(parseInt(g, 16))
                    } else {
                        var h = ne[f];
                        c += h || f
                    }
                    e = !1
                } else if ("\\" === f)e = !0; else {
                    if (f === a)return this.index++, void this.tokens.push({index: b, text: d, constant: !0, value: c});
                    c += f
                }
                this.index++
            }
            this.throwError("Unterminated quote", b)
        }
    };
    var pe = function (a, b, c) {
        this.lexer = a, this.$filter = b, this.options = c
    };
    pe.ZERO = l(function () {
        return 0
    }, {sharedGetter: !0, constant: !0}), pe.prototype = {
        constructor: pe, parse: function (a) {
            this.text = a, this.tokens = this.lexer.lex(a);
            var b = this.statements();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), b.literal = !!b.literal, b.constant = !!b.constant, b
        }, primary: function () {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.peek().identifier && this.peek().text in le ? a = le[this.consume().text] : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var b, c; b = this.expect("(", "[", ".");)"(" === b.text ? (a = this.functionCall(a, c), c = null) : "[" === b.text ? (c = a, a = this.objectIndex(a)) : "." === b.text ? (c = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
            return a
        }, throwError: function (a, b) {
            throw he("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", b.text, a, b.index + 1, this.text, this.text.substring(b.index))
        }, peekToken: function () {
            if (0 === this.tokens.length)throw he("ueoe", "Unexpected end of expression: {0}", this.text);
            return this.tokens[0]
        }, peek: function (a, b, c, d) {
            return this.peekAhead(0, a, b, c, d)
        }, peekAhead: function (a, b, c, d, e) {
            if (this.tokens.length > a) {
                var f = this.tokens[a], g = f.text;
                if (g === b || g === c || g === d || g === e || !b && !c && !d && !e)return f
            }
            return !1
        }, expect: function (a, b, c, d) {
            var e = this.peek(a, b, c, d);
            return e ? (this.tokens.shift(), e) : !1
        }, consume: function (a) {
            if (0 === this.tokens.length)throw he("ueoe", "Unexpected end of expression: {0}", this.text);
            var b = this.expect(a);
            return b || this.throwError("is unexpected, expecting [" + a + "]", this.peek()), b
        }, unaryFn: function (a, b) {
            var c = me[a];
            return l(function (a, d) {
                return c(a, d, b)
            }, {constant: b.constant, inputs: [b]})
        }, binaryFn: function (a, b, c, d) {
            var e = me[b];
            return l(function (b, d) {
                return e(b, d, a, c)
            }, {constant: a.constant && c.constant, inputs: !d && [a, c]})
        }, identifier: function () {
            for (var a = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "(");)a += this.consume().text + this.consume().text;
            return Ob(a, this.options, this.text)
        }, constant: function () {
            var a = this.consume().value;
            return l(function () {
                return a
            }, {constant: !0, literal: !0})
        }, statements: function () {
            for (var a = []; ;)if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";"))return 1 === a.length ? a[0] : function (b, c) {
                for (var d, e = 0, f = a.length; f > e; e++)d = a[e](b, c);
                return d
            }
        }, filterChain: function () {
            for (var a, b = this.expression(); a = this.expect("|");)b = this.filter(b);
            return b
        }, filter: function (a) {
            var b, d, e = this.$filter(this.consume().text);
            if (this.peek(":"))for (b = [], d = []; this.expect(":");)b.push(this.expression());
            var f = [a].concat(b || []);
            return l(function (f, g) {
                var h = a(f, g);
                if (d) {
                    d[0] = h;
                    for (var i = b.length; i--;)d[i + 1] = b[i](f, g);
                    return e.apply(c, d)
                }
                return e(h)
            }, {constant: !e.$stateful && f.every(Jb), inputs: !e.$stateful && f})
        }, expression: function () {
            return this.assignment()
        }, assignment: function () {
            var a, b, c = this.ternary();
            return (b = this.expect("=")) ? (c.assign || this.throwError("implies assignment but [" + this.text.substring(0, b.index) + "] can not be assigned to", b), a = this.ternary(), l(function (b, d) {
                return c.assign(b, a(b, d), d)
            }, {inputs: [c, a]})) : c
        }, ternary: function () {
            var a, b, c = this.logicalOR();
            if ((b = this.expect("?")) && (a = this.assignment(), this.consume(":"))) {
                var d = this.assignment();
                return l(function (b, e) {
                    return c(b, e) ? a(b, e) : d(b, e)
                }, {constant: c.constant && a.constant && d.constant})
            }
            return c
        }, logicalOR: function () {
            for (var a, b = this.logicalAND(); a = this.expect("||");)b = this.binaryFn(b, a.text, this.logicalAND(), !0);
            return b
        }, logicalAND: function () {
            for (var a, b = this.equality(); a = this.expect("&&");)b = this.binaryFn(b, a.text, this.equality(), !0);
            return b
        }, equality: function () {
            for (var a, b = this.relational(); a = this.expect("==", "!=", "===", "!==");)b = this.binaryFn(b, a.text, this.relational());
            return b
        }, relational: function () {
            for (var a, b = this.additive(); a = this.expect("<", ">", "<=", ">=");)b = this.binaryFn(b, a.text, this.additive());
            return b
        }, additive: function () {
            for (var a, b = this.multiplicative(); a = this.expect("+", "-");)b = this.binaryFn(b, a.text, this.multiplicative());
            return b
        }, multiplicative: function () {
            for (var a, b = this.unary(); a = this.expect("*", "/", "%");)b = this.binaryFn(b, a.text, this.unary());
            return b
        }, unary: function () {
            var a;
            return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(pe.ZERO, a.text, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.text, this.unary()) : this.primary()
        }, fieldAccess: function (a) {
            var b = this.identifier();
            return l(function (d, e, f) {
                var g = f || a(d, e);
                return null == g ? c : b(g)
            }, {
                assign: function (c, d, e) {
                    var f = a(c, e);
                    return f || a.assign(c, f = {}, e), b.assign(f, d)
                }
            })
        }, objectIndex: function (a) {
            var b = this.text, d = this.expression();
            return this.consume("]"), l(function (e, f) {
                var g, h = a(e, f), i = d(e, f);
                return Gb(i, b), h ? g = Hb(h[i], b) : c
            }, {
                assign: function (c, e, f) {
                    var g = Gb(d(c, f), b), h = Hb(a(c, f), b);
                    return h || a.assign(c, h = {}, f), h[g] = e
                }
            })
        }, functionCall: function (a, b) {
            var d = [];
            if (")" !== this.peekToken().text)do d.push(this.expression()); while (this.expect(","));
            this.consume(")");
            var e = this.text, f = d.length ? [] : null;
            return function (g, h) {
                var i = b ? b(g, h) : s(b) ? c : g, j = a(g, h, i) || o;
                if (f)for (var k = d.length; k--;)f[k] = Hb(d[k](g, h), e);
                Hb(i, e), Ib(j, e);
                var l = j.apply ? j.apply(i, f) : j(f[0], f[1], f[2], f[3], f[4]);
                return f && (f.length = 0), Hb(l, e)
            }
        }, arrayDeclaration: function () {
            var a = [];
            if ("]" !== this.peekToken().text)do {
                if (this.peek("]"))break;
                a.push(this.expression())
            } while (this.expect(","));
            return this.consume("]"), l(function (b, c) {
                for (var d = [], e = 0, f = a.length; f > e; e++)d.push(a[e](b, c));
                return d
            }, {literal: !0, constant: a.every(Jb), inputs: a})
        }, object: function () {
            var a = [], b = [];
            if ("}" !== this.peekToken().text)do {
                if (this.peek("}"))break;
                var c = this.consume();
                c.constant ? a.push(c.value) : c.identifier ? a.push(c.text) : this.throwError("invalid key", c), this.consume(":"), b.push(this.expression())
            } while (this.expect(","));
            return this.consume("}"), l(function (c, d) {
                for (var e = {}, f = 0, g = b.length; g > f; f++)e[a[f]] = b[f](c, d);
                return e
            }, {literal: !0, constant: b.every(Jb), inputs: b})
        }
    };
    var qe = ja(), re = ja(), se = Object.prototype.valueOf, te = d("$sce"), ue = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, Wd = d("$compile"), ve = b.createElement("a"), we = dc(a.location.href);
    gc.$inject = ["$provide"], kc.$inject = ["$locale"], lc.$inject = ["$locale"];
    var xe = ".", ye = {
        yyyy: oc("FullYear", 4),
        yy: oc("FullYear", 2, 0, !0),
        y: oc("FullYear", 1),
        MMMM: pc("Month"),
        MMM: pc("Month", !0),
        MM: oc("Month", 2, 1),
        M: oc("Month", 1, 1),
        dd: oc("Date", 2),
        d: oc("Date", 1),
        HH: oc("Hours", 2),
        H: oc("Hours", 1),
        hh: oc("Hours", 2, -12),
        h: oc("Hours", 1, -12),
        mm: oc("Minutes", 2),
        m: oc("Minutes", 1),
        ss: oc("Seconds", 2),
        s: oc("Seconds", 1),
        sss: oc("Milliseconds", 3),
        EEEE: pc("Day"),
        EEE: pc("Day", !0),
        a: uc,
        Z: qc,
        ww: tc(2),
        w: tc(1),
        G: vc,
        GG: vc,
        GGG: vc,
        GGGG: wc
    }, ze = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/, Ae = /^\-?\d+$/;
    xc.$inject = ["$locale"];
    var Be = q(Wc), Ce = q(Yc);
    Ac.$inject = ["$parse"];
    var De = q({
        restrict: "E", compile: function (a, b) {
            return b.href || b.xlinkHref || b.name ? void 0 : function (a, b) {
                if ("a" === b[0].nodeName.toLowerCase()) {
                    var c = "[object SVGAnimatedString]" === gd.call(b.prop("href")) ? "xlink:href" : "href";
                    b.on("click", function (a) {
                        b.attr(c) || a.preventDefault()
                    })
                }
            }
        }
    }), Ee = {};
    f(Md, function (a, b) {
        if ("multiple" != a) {
            var c = $a("ng-" + b);
            Ee[c] = function () {
                return {
                    restrict: "A", priority: 100, link: function (a, d, e) {
                        a.$watch(e[c], function (a) {
                            e.$set(b, !!a)
                        })
                    }
                }
            }
        }
    }), f(Od, function (a, b) {
        Ee[b] = function () {
            return {
                priority: 100, link: function (a, c, d) {
                    if ("ngPattern" === b && "/" == d.ngPattern.charAt(0)) {
                        var e = d.ngPattern.match(Uc);
                        if (e)return void d.$set("ngPattern", new RegExp(e[1], e[2]))
                    }
                    a.$watch(d[b], function (a) {
                        d.$set(b, a)
                    })
                }
            }
        }
    }), f(["src", "srcset", "href"], function (a) {
        var b = $a("ng-" + a);
        Ee[b] = function () {
            return {
                priority: 99, link: function (c, d, e) {
                    var f = a, g = a;
                    "href" === a && "[object SVGAnimatedString]" === gd.call(d.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null), e.$observe(b, function (b) {
                        return b ? (e.$set(g, b), void(_c && f && d.prop(f, e[g]))) : void("href" === a && e.$set(g, null))
                    })
                }
            }
        }
    });
    var Fe = {
        $addControl: o,
        $$renameControl: Cc,
        $removeControl: o,
        $setValidity: o,
        $setDirty: o,
        $setPristine: o,
        $setSubmitted: o
    }, Ge = "ng-submitted";
    Dc.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var He = function (a) {
        return ["$timeout", function (b) {
            var d = {
                name: "form", restrict: a ? "EAC" : "E", controller: Dc, compile: function (d, e) {
                    d.addClass(of).addClass(mf);
                    var f = e.name ? "name" : a && e.ngForm ? "ngForm" : !1;
                    return {
                        pre: function (a, d, e, g) {
                            if (!("action"in e)) {
                                var h = function (b) {
                                    a.$apply(function () {
                                        g.$commitViewValue(), g.$setSubmitted()
                                    }), b.preventDefault()
                                };
                                Ad(d[0], "submit", h), d.on("$destroy", function () {
                                    b(function () {
                                        Bd(d[0], "submit", h)
                                    }, 0, !1)
                                })
                            }
                            var i = g.$$parentForm;
                            f && (Kb(a, null, g.$name, g, g.$name), e.$observe(f, function (b) {
                                g.$name !== b && (Kb(a, null, g.$name, c, g.$name), i.$$renameControl(g, b), Kb(a, null, g.$name, g, g.$name))
                            })), d.on("$destroy", function () {
                                i.$removeControl(g), f && Kb(a, null, e[f], c, g.$name), l(g, Fe)
                            })
                        }
                    }
                }
            };
            return d
        }]
    }, Ie = He(), Je = He(!0), Ke = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, Le = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, Me = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, Ne = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Oe = /^(\d{4})-(\d{2})-(\d{2})$/, Pe = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Qe = /^(\d{4})-W(\d\d)$/, Re = /^(\d{4})-(\d\d)$/, Se = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Te = {
        text: Fc,
        date: Jc("date", Oe, Ic(Oe, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
        "datetime-local": Jc("datetimelocal", Pe, Ic(Pe, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: Jc("time", Se, Ic(Se, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
        week: Jc("week", Qe, Hc, "yyyy-Www"),
        month: Jc("month", Re, Ic(Re, ["yyyy", "MM"]), "yyyy-MM"),
        number: Lc,
        url: Mc,
        email: Nc,
        radio: Oc,
        checkbox: Qc,
        hidden: o,
        button: o,
        submit: o,
        reset: o,
        file: o
    }, Ue = ["$browser", "$sniffer", "$filter", "$parse", function (a, b, c, d) {
        return {
            restrict: "E", require: ["?ngModel"], link: {
                pre: function (e, f, g, h) {
                    h[0] && (Te[Wc(g.type)] || Te.text)(e, f, g, h[0], b, a, c, d)
                }
            }
        }
    }], Ve = /^(true|false|\d+)$/, We = function () {
        return {
            restrict: "A", priority: 100, compile: function (a, b) {
                return Ve.test(b.ngValue) ? function (a, b, c) {
                    c.$set("value", a.$eval(c.ngValue))
                } : function (a, b, c) {
                    a.$watch(c.ngValue, function (a) {
                        c.$set("value", a)
                    })
                }
            }
        }
    }, Xe = ["$compile", function (a) {
        return {
            restrict: "AC", compile: function (b) {
                return a.$$addBindingClass(b), function (b, d, e) {
                    a.$$addBindingInfo(d, e.ngBind), d = d[0], b.$watch(e.ngBind, function (a) {
                        d.textContent = a === c ? "" : a
                    })
                }
            }
        }
    }], Ye = ["$interpolate", "$compile", function (a, b) {
        return {
            compile: function (d) {
                return b.$$addBindingClass(d), function (d, e, f) {
                    var g = a(e.attr(f.$attr.ngBindTemplate));
                    b.$$addBindingInfo(e, g.expressions), e = e[0], f.$observe("ngBindTemplate", function (a) {
                        e.textContent = a === c ? "" : a
                    })
                }
            }
        }
    }], Ze = ["$sce", "$parse", "$compile", function (a, b, c) {
        return {
            restrict: "A", compile: function (d, e) {
                var f = b(e.ngBindHtml), g = b(e.ngBindHtml, function (a) {
                    return (a || "").toString()
                });
                return c.$$addBindingClass(d), function (b, d, e) {
                    c.$$addBindingInfo(d, e.ngBindHtml), b.$watch(g, function () {
                        d.html(a.getTrustedHtml(f(b)) || "")
                    })
                }
            }
        }
    }], $e = q({
        restrict: "A", require: "ngModel", link: function (a, b, c, d) {
            d.$viewChangeListeners.push(function () {
                a.$eval(c.ngChange)
            })
        }
    }), _e = Rc("", !0), af = Rc("Odd", 0), bf = Rc("Even", 1), cf = Bc({
        compile: function (a, b) {
            b.$set("ngCloak", c), a.removeClass("ng-cloak")
        }
    }), df = [function () {
        return {restrict: "A", scope: !0, controller: "@", priority: 500}
    }], ef = {}, ff = {blur: !0, focus: !0};
    f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
        var b = $a("ng-" + a);
        ef[b] = ["$parse", "$rootScope", function (c, d) {
            return {
                restrict: "A", compile: function (e, f) {
                    var g = c(f[b], null, !0);
                    return function (b, c) {
                        c.on(a, function (c) {
                            var e = function () {
                                g(b, {$event: c})
                            };
                            ff[a] && d.$$phase ? b.$evalAsync(e) : b.$apply(e)
                        })
                    }
                }
            }
        }]
    });
    var gf = ["$animate", function (a) {
        return {
            multiElement: !0,
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function (c, d, e, f, g) {
                var h, i, j;
                c.$watch(e.ngIf, function (c) {
                    c ? i || g(function (c, f) {
                        i = f, c[c.length++] = b.createComment(" end ngIf: " + e.ngIf + " "), h = {clone: c}, a.enter(c, d.parent(), d)
                    }) : (j && (j.remove(), j = null), i && (i.$destroy(), i = null), h && (j = ia(h.clone), a.leave(j).then(function () {
                        j = null
                    }), h = null))
                })
            }
        }
    }], hf = ["$templateRequest", "$anchorScroll", "$animate", "$sce", function (a, b, c, d) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: id.noop,
            compile: function (e, f) {
                var g = f.ngInclude || f.src, h = f.onload || "", i = f.autoscroll;
                return function (e, f, j, k, l) {
                    var m, n, o, p = 0, q = function () {
                        n && (n.remove(), n = null), m && (m.$destroy(), m = null), o && (c.leave(o).then(function () {
                            n = null
                        }), n = o, o = null)
                    };
                    e.$watch(d.parseAsResourceUrl(g), function (d) {
                        var g = function () {
                            !s(i) || i && !e.$eval(i) || b()
                        }, j = ++p;
                        d ? (a(d, !0).then(function (a) {
                            if (j === p) {
                                var b = e.$new();
                                k.template = a;
                                var i = l(b, function (a) {
                                    q(), c.enter(a, null, f).then(g)
                                });
                                m = b, o = i, m.$emit("$includeContentLoaded", d), e.$eval(h)
                            }
                        }, function () {
                            j === p && (q(), e.$emit("$includeContentError", d))
                        }), e.$emit("$includeContentRequested", d)) : (q(), k.template = null)
                    })
                }
            }
        }
    }], jf = ["$compile", function (a) {
        return {
            restrict: "ECA", priority: -400, require: "ngInclude", link: function (c, d, e, f) {
                return /SVG/.test(d[0].toString()) ? (d.empty(), void a(sa(f.template, b).childNodes)(c, function (a) {
                    d.append(a)
                }, {futureParentElement: d})) : (d.html(f.template), void a(d.contents())(c))
            }
        }
    }], kf = Bc({
        priority: 450, compile: function () {
            return {
                pre: function (a, b, c) {
                    a.$eval(c.ngInit)
                }
            }
        }
    }), lf = function () {
        return {
            restrict: "A", priority: 100, require: "ngModel", link: function (a, b, d, e) {
                var g = b.attr(d.$attr.ngList) || ", ", h = "false" !== d.ngTrim, i = h ? md(g) : g, j = function (a) {
                    if (!r(a)) {
                        var b = [];
                        return a && f(a.split(i), function (a) {
                            a && b.push(h ? md(a) : a)
                        }), b
                    }
                };
                e.$parsers.push(j), e.$formatters.push(function (a) {
                    return ld(a) ? a.join(g) : c
                }), e.$isEmpty = function (a) {
                    return !a || !a.length
                }
            }
        }
    }, mf = "ng-valid", nf = "ng-invalid", of = "ng-pristine", pf = "ng-dirty", qf = "ng-untouched", rf = "ng-touched", sf = "ng-pending", tf = new d("ngModel"), uf = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (a, b, d, e, g, h, i, j, k, l) {
        this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = c, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = c, this.$name = l(d.name || "", !1)(a);
        var m, n = g(d.ngModel), p = n.assign, q = n, t = p, u = null, w = this;
        this.$$setOptions = function (a) {
            if (w.$options = a, a && a.getterSetter) {
                var b = g(d.ngModel + "()"), c = g(d.ngModel + "($$$p)");
                q = function (a) {
                    var c = n(a);
                    return x(c) && (c = b(a)), c
                }, t = function (a, b) {
                    x(n(a)) ? c(a, {$$$p: w.$modelValue}) : p(a, w.$modelValue)
                }
            } else if (!n.assign)throw tf("nonassign", "Expression '{0}' is non-assignable. Element: {1}", d.ngModel, T(e))
        }, this.$render = o, this.$isEmpty = function (a) {
            return r(a) || "" === a || null === a || a !== a
        };
        var y = e.inheritedData("$formController") || Fe, z = 0;
        Sc({
            ctrl: this, $element: e, set: function (a, b) {
                a[b] = !0
            }, unset: function (a, b) {
                delete a[b]
            }, parentForm: y, $animate: h
        }), this.$setPristine = function () {
            w.$dirty = !1, w.$pristine = !0, h.removeClass(e, pf), h.addClass(e, of)
        }, this.$setDirty = function () {
            w.$dirty = !0, w.$pristine = !1, h.removeClass(e, of), h.addClass(e, pf), y.$setDirty()
        }, this.$setUntouched = function () {
            w.$touched = !1, w.$untouched = !0, h.setClass(e, qf, rf)
        }, this.$setTouched = function () {
            w.$touched = !0, w.$untouched = !1, h.setClass(e, rf, qf)
        }, this.$rollbackViewValue = function () {
            i.cancel(u), w.$viewValue = w.$$lastCommittedViewValue, w.$render()
        }, this.$validate = function () {
            if (!v(w.$modelValue) || !isNaN(w.$modelValue)) {
                var a = w.$$lastCommittedViewValue, b = w.$$rawModelValue, d = w.$valid, e = w.$modelValue, f = w.$options && w.$options.allowInvalid;
                w.$$runValidators(b, a, function (a) {
                    f || d === a || (w.$modelValue = a ? b : c, w.$modelValue !== e && w.$$writeModelToScope())
                })
            }
        }, this.$$runValidators = function (a, b, d) {
            function e() {
                var a = w.$$parserName || "parse";
                return m !== c ? (m || (f(w.$validators, function (a, b) {
                    i(b, null)
                }), f(w.$asyncValidators, function (a, b) {
                    i(b, null)
                })), i(a, m), m) : (i(a, null), !0)
            }

            function g() {
                var c = !0;
                return f(w.$validators, function (d, e) {
                    var f = d(a, b);
                    c = c && f, i(e, f)
                }), c ? !0 : (f(w.$asyncValidators, function (a, b) {
                    i(b, null)
                }), !1)
            }

            function h() {
                var d = [], e = !0;
                f(w.$asyncValidators, function (f, g) {
                    var h = f(a, b);
                    if (!F(h))throw tf("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", h);
                    i(g, c), d.push(h.then(function () {
                        i(g, !0)
                    }, function (a) {
                        e = !1, i(g, !1)
                    }))
                }), d.length ? k.all(d).then(function () {
                    j(e)
                }, o) : j(!0)
            }

            function i(a, b) {
                l === z && w.$setValidity(a, b)
            }

            function j(a) {
                l === z && d(a)
            }

            z++;
            var l = z;
            return e() && g() ? void h() : void j(!1)
        }, this.$commitViewValue = function () {
            var a = w.$viewValue;
            i.cancel(u), (w.$$lastCommittedViewValue !== a || "" === a && w.$$hasNativeValidators) && (w.$$lastCommittedViewValue = a, w.$pristine && this.$setDirty(), this.$$parseAndValidate())
        }, this.$$parseAndValidate = function () {
            function b() {
                w.$modelValue !== g && w.$$writeModelToScope()
            }

            var d = w.$$lastCommittedViewValue, e = d;
            if (m = r(e) ? c : !0)for (var f = 0; f < w.$parsers.length; f++)if (e = w.$parsers[f](e), r(e)) {
                m = !1;
                break
            }
            v(w.$modelValue) && isNaN(w.$modelValue) && (w.$modelValue = q(a));
            var g = w.$modelValue, h = w.$options && w.$options.allowInvalid;
            w.$$rawModelValue = e, h && (w.$modelValue = e, b()), w.$$runValidators(e, w.$$lastCommittedViewValue, function (a) {
                h || (w.$modelValue = a ? e : c, b())
            })
        }, this.$$writeModelToScope = function () {
            t(a, w.$modelValue), f(w.$viewChangeListeners, function (a) {
                try {
                    a()
                } catch (c) {
                    b(c)
                }
            })
        }, this.$setViewValue = function (a, b) {
            w.$viewValue = a, (!w.$options || w.$options.updateOnDefault) && w.$$debounceViewValueCommit(b)
        }, this.$$debounceViewValueCommit = function (b) {
            var c, d = 0, e = w.$options;
            e && s(e.debounce) && (c = e.debounce, v(c) ? d = c : v(c[b]) ? d = c[b] : v(c["default"]) && (d = c["default"])), i.cancel(u), d ? u = i(function () {
                w.$commitViewValue()
            }, d) : j.$$phase ? w.$commitViewValue() : a.$apply(function () {
                w.$commitViewValue()
            })
        }, a.$watch(function () {
            var b = q(a);
            if (b !== w.$modelValue) {
                w.$modelValue = w.$$rawModelValue = b, m = c;
                for (var d = w.$formatters, e = d.length, f = b; e--;)f = d[e](f);
                w.$viewValue !== f && (w.$viewValue = w.$$lastCommittedViewValue = f, w.$render(), w.$$runValidators(b, f, o))
            }
            return b
        })
    }], vf = ["$rootScope", function (a) {
        return {
            restrict: "A",
            require: ["ngModel", "^?form", "^?ngModelOptions"],
            controller: uf,
            priority: 1,
            compile: function (b) {
                return b.addClass(of).addClass(qf).addClass(mf), {
                    pre: function (a, b, c, d) {
                        var e = d[0], f = d[1] || Fe;
                        e.$$setOptions(d[2] && d[2].$options), f.$addControl(e), c.$observe("name", function (a) {
                            e.$name !== a && f.$$renameControl(e, a)
                        }), a.$on("$destroy", function () {
                            f.$removeControl(e)
                        })
                    }, post: function (b, c, d, e) {
                        var f = e[0];
                        f.$options && f.$options.updateOn && c.on(f.$options.updateOn, function (a) {
                            f.$$debounceViewValueCommit(a && a.type)
                        }), c.on("blur", function (c) {
                            f.$touched || (a.$$phase ? b.$evalAsync(f.$setTouched) : b.$apply(f.$setTouched))
                        })
                    }
                }
            }
        }
    }], wf = /(\s+|^)default(\s+|$)/, xf = function () {
        return {
            restrict: "A", controller: ["$scope", "$attrs", function (a, b) {
                var d = this;
                this.$options = a.$eval(b.ngModelOptions), this.$options.updateOn !== c ? (this.$options.updateOnDefault = !1, this.$options.updateOn = md(this.$options.updateOn.replace(wf, function () {
                    return d.$options.updateOnDefault = !0, " "
                }))) : this.$options.updateOnDefault = !0
            }]
        }
    }, yf = Bc({terminal: !0, priority: 1e3}), zf = ["$locale", "$interpolate", function (a, b) {
        var c = /{}/g, d = /^when(Minus)?(.+)$/;
        return {
            restrict: "EA", link: function (e, g, h) {
                function i(a) {
                    g.text(a || "")
                }

                var j, k = h.count, l = h.$attr.when && g.attr(h.$attr.when), m = h.offset || 0, n = e.$eval(l) || {}, o = {}, p = b.startSymbol(), q = b.endSymbol(), r = p + k + "-" + m + q, s = id.noop;
                f(h, function (a, b) {
                    var c = d.exec(b);
                    if (c) {
                        var e = (c[1] ? "-" : "") + Wc(c[2]);
                        n[e] = g.attr(h.$attr[b])
                    }
                }), f(n, function (a, d) {
                    o[d] = b(a.replace(c, r))
                }), e.$watch(k, function (b) {
                    var c = parseFloat(b), d = isNaN(c);
                    d || c in n || (c = a.pluralCat(c - m)), c === j || d && isNaN(j) || (s(), s = e.$watch(o[c], i), j = c)
                })
            }
        }
    }], Af = ["$parse", "$animate", function (a, g) {
        var h = "$$NG_REMOVED", i = d("ngRepeat"), j = function (a, b, c, d, e, f, g) {
            a[c] = d, e && (a[e] = f), a.$index = b, a.$first = 0 === b, a.$last = b === g - 1, a.$middle = !(a.$first || a.$last), a.$odd = !(a.$even = 0 === (1 & b))
        }, k = function (a) {
            return a.clone[0]
        }, l = function (a) {
            return a.clone[a.clone.length - 1]
        };
        return {
            restrict: "A",
            multiElement: !0,
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            $$tlb: !0,
            compile: function (d, m) {
                var n = m.ngRepeat, o = b.createComment(" end ngRepeat: " + n + " "), p = n.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                if (!p)throw i("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", n);
                var q = p[1], r = p[2], s = p[3], t = p[4];
                if (p = q.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !p)throw i("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", q);
                var u = p[3] || p[1], v = p[2];
                if (s && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(s)))throw i("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", s);
                var w, x, y, z, A = {$id: Oa};
                return t ? w = a(t) : (y = function (a, b) {
                    return Oa(b)
                }, z = function (a) {
                    return a
                }), function (a, b, d, m, p) {
                    w && (x = function (b, c, d) {
                        return v && (A[v] = b), A[u] = c, A.$index = d, w(a, A)
                    });
                    var q = ja();
                    a.$watchCollection(r, function (d) {
                        var m, r, t, w, A, B, C, D, E, F, G, H, I = b[0], J = ja();
                        if (s && (a[s] = d), e(d))E = d, D = x || y; else {
                            D = x || z, E = [];
                            for (var K in d)d.hasOwnProperty(K) && "$" != K.charAt(0) && E.push(K);
                            E.sort()
                        }
                        for (w = E.length, G = new Array(w), m = 0; w > m; m++)if (A = d === E ? m : E[m], B = d[A], C = D(A, B, m), q[C])F = q[C], delete q[C], J[C] = F, G[m] = F; else {
                            if (J[C])throw f(G, function (a) {
                                a && a.scope && (q[a.id] = a)
                            }), i("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", n, C, B);
                            G[m] = {id: C, scope: c, clone: c}, J[C] = !0
                        }
                        for (var L in q) {
                            if (F = q[L], H = ia(F.clone), g.leave(H), H[0].parentNode)for (m = 0, r = H.length; r > m; m++)H[m][h] = !0;
                            F.scope.$destroy()
                        }
                        for (m = 0; w > m; m++)if (A = d === E ? m : E[m], B = d[A], F = G[m], F.scope) {
                            t = I;
                            do t = t.nextSibling; while (t && t[h]);
                            k(F) != t && g.move(ia(F.clone), null, ad(I)), I = l(F), j(F.scope, m, u, B, v, A, w)
                        } else p(function (a, b) {
                            F.scope = b;
                            var c = o.cloneNode(!1);
                            a[a.length++] = c, g.enter(a, null, ad(I)), I = c, F.clone = a, J[F.id] = F, j(F.scope, m, u, B, v, A, w)
                        });
                        q = J
                    })
                }
            }
        }
    }], Bf = "ng-hide", Cf = "ng-hide-animate", Df = ["$animate", function (a) {
        return {
            restrict: "A", multiElement: !0, link: function (b, c, d) {
                b.$watch(d.ngShow, function (b) {
                    a[b ? "removeClass" : "addClass"](c, Bf, {tempClasses: Cf})
                })
            }
        }
    }], Ef = ["$animate", function (a) {
        return {
            restrict: "A", multiElement: !0, link: function (b, c, d) {
                b.$watch(d.ngHide, function (b) {
                    a[b ? "addClass" : "removeClass"](c, Bf, {tempClasses: Cf})
                })
            }
        }
    }], Ff = Bc(function (a, b, c) {
        a.$watchCollection(c.ngStyle, function (a, c) {
            c && a !== c && f(c, function (a, c) {
                b.css(c, "")
            }), a && b.css(a)
        })
    }), Gf = ["$animate", function (a) {
        return {
            restrict: "EA", require: "ngSwitch", controller: ["$scope", function () {
                this.cases = {}
            }], link: function (c, d, e, g) {
                var h = e.ngSwitch || e.on, i = [], j = [], k = [], l = [], m = function (a, b) {
                    return function () {
                        a.splice(b, 1)
                    }
                };
                c.$watch(h, function (c) {
                    var d, e;
                    for (d = 0, e = k.length; e > d; ++d)a.cancel(k[d]);
                    for (k.length = 0, d = 0, e = l.length; e > d; ++d) {
                        var h = ia(j[d].clone);
                        l[d].$destroy();
                        var n = k[d] = a.leave(h);
                        n.then(m(k, d))
                    }
                    j.length = 0, l.length = 0, (i = g.cases["!" + c] || g.cases["?"]) && f(i, function (c) {
                        c.transclude(function (d, e) {
                            l.push(e);
                            var f = c.element;
                            d[d.length++] = b.createComment(" end ngSwitchWhen: ");
                            var g = {clone: d};
                            j.push(g), a.enter(d, f.parent(), f)
                        })
                    })
                })
            }
        }
    }], Hf = Bc({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function (a, b, c, d, e) {
            d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || [], d.cases["!" + c.ngSwitchWhen].push({
                transclude: e,
                element: b
            })
        }
    }), If = Bc({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function (a, b, c, d, e) {
            d.cases["?"] = d.cases["?"] || [], d.cases["?"].push({transclude: e, element: b})
        }
    }), Jf = Bc({
        restrict: "EAC", link: function (a, b, c, e, f) {
            if (!f)throw d("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", T(b));
            f(function (a) {
                b.empty(), b.append(a)
            })
        }
    }), Kf = ["$templateCache", function (a) {
        return {
            restrict: "E", terminal: !0, compile: function (b, c) {
                if ("text/ng-template" == c.type) {
                    var d = c.id, e = b[0].text;
                    a.put(d, e)
                }
            }
        }
    }], Lf = d("ngOptions"), Mf = q({restrict: "A", terminal: !0}), Nf = ["$compile", "$parse", function (a, d) {
        var e = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, h = {$setViewValue: o};
        return {
            restrict: "E",
            require: ["select", "?ngModel"],
            controller: ["$element", "$scope", "$attrs", function (a, b, c) {
                var d, e, f = this, g = {}, i = h;
                f.databound = c.ngModel, f.init = function (a, b, c) {
                    i = a, d = b, e = c
                }, f.addOption = function (b, c) {
                    ga(b, '"option value"'), g[b] = !0, i.$viewValue == b && (a.val(b), e.parent() && e.remove()), c && c[0].hasAttribute("selected") && (c[0].selected = !0)
                }, f.removeOption = function (a) {
                    this.hasOption(a) && (delete g[a], i.$viewValue === a && this.renderUnknownOption(a))
                }, f.renderUnknownOption = function (b) {
                    var c = "? " + Oa(b) + " ?";
                    e.val(c), a.prepend(e), a.val(c), e.prop("selected", !0)
                }, f.hasOption = function (a) {
                    return g.hasOwnProperty(a)
                }, b.$on("$destroy", function () {
                    f.renderUnknownOption = o
                })
            }],
            link: function (h, i, j, k) {
                function l(a, b, c, d) {
                    c.$render = function () {
                        var a = c.$viewValue;
                        d.hasOption(a) ? (z.parent() && z.remove(), b.val(a), "" === a && o.prop("selected", !0)) : r(a) && o ? b.val("") : d.renderUnknownOption(a)
                    }, b.on("change", function () {
                        a.$apply(function () {
                            z.parent() && z.remove(), c.$setViewValue(b.val())
                        })
                    })
                }

                function m(a, b, c) {
                    var d;
                    c.$render = function () {
                        var a = new Pa(c.$viewValue);
                        f(b.find("option"), function (b) {
                            b.selected = s(a.get(b.value))
                        })
                    }, a.$watch(function () {
                        M(d, c.$viewValue) || (d = L(c.$viewValue), c.$render())
                    }), b.on("change", function () {
                        a.$apply(function () {
                            var a = [];
                            f(b.find("option"), function (b) {
                                b.selected && a.push(b.value)
                            }), c.$setViewValue(a)
                        })
                    })
                }

                function n(b, h, i) {
                    function j(a, c, d) {
                        return M[B] = d, E && (M[E] = c), a(b, M)
                    }

                    function k() {
                        b.$apply(function () {
                            var a, c = H(b) || [];
                            if (t)a = [], f(h.val(), function (b) {
                                b = J ? K[b] : b, a.push(l(b, c[b]))
                            }); else {
                                var d = J ? K[h.val()] : h.val();
                                a = l(d, c[d])
                            }
                            i.$setViewValue(a), r()
                        })
                    }

                    function l(a, b) {
                        if ("?" === a)return c;
                        if ("" === a)return null;
                        var d = D ? D : G;
                        return j(d, a, b)
                    }

                    function m() {
                        var a, c = H(b);
                        if (c && ld(c)) {
                            a = new Array(c.length);
                            for (var d = 0, e = c.length; e > d; d++)a[d] = j(A, d, c[d]);
                            return a
                        }
                        if (c) {
                            a = {};
                            for (var f in c)c.hasOwnProperty(f) && (a[f] = j(A, f, c[f]))
                        }
                        return a
                    }

                    function n(a) {
                        var b;
                        if (t)if (J && ld(a)) {
                            b = new Pa([]);
                            for (var c = 0; c < a.length; c++)b.put(j(J, null, a[c]), !0)
                        } else b = new Pa(a); else J && (a = j(J, null, a));
                        return function (c, d) {
                            var e;
                            return e = J ? J : D ? D : G, t ? s(b.remove(j(e, c, d))) : a === j(e, c, d)
                        }
                    }

                    function o() {
                        w || (b.$$postDigest(r), w = !0)
                    }

                    function q(a, b, c) {
                        a[b] = a[b] || 0, a[b] += c ? 1 : -1
                    }

                    function r() {
                        w = !1;
                        var a, c, d, e, k, l, m, o, r, u, z, B, C, D, G, I, N, O = {"": []}, P = [""], Q = i.$viewValue, R = H(b) || [], S = E ? g(R) : R, T = {}, U = n(Q), V = !1;
                        for (K = {}, B = 0; u = S.length, u > B; B++)m = B, E && (m = S[B], "$" === m.charAt(0)) || (o = R[m], a = j(F, m, o) || "", (c = O[a]) || (c = O[a] = [], P.push(a)), C = U(m, o), V = V || C, I = j(A, m, o), I = s(I) ? I : "", N = J ? J(b, M) : E ? S[B] : B, J && (K[N] = m), c.push({
                            id: N,
                            label: I,
                            selected: C
                        }));
                        for (t || (v || null === Q ? O[""].unshift({
                            id: "",
                            label: "",
                            selected: !V
                        }) : V || O[""].unshift({id: "?", label: "", selected: !0})), z = 0, r = P.length; r > z; z++) {
                            for (a = P[z], c = O[a], L.length <= z ? (e = {
                                element: y.clone().attr("label", a),
                                label: c.label
                            }, k = [e], L.push(k), h.append(e.element)) : (k = L[z], e = k[0], e.label != a && e.element.attr("label", e.label = a)), D = null, B = 0, u = c.length; u > B; B++)d = c[B], (l = k[B + 1]) ? (D = l.element, l.label !== d.label && (q(T, l.label, !1), q(T, d.label, !0), D.text(l.label = d.label), D.prop("label", l.label)), l.id !== d.id && D.val(l.id = d.id), D[0].selected !== d.selected && (D.prop("selected", l.selected = d.selected), _c && D.prop("selected", l.selected))) : ("" === d.id && v ? G = v : (G = x.clone()).val(d.id).prop("selected", d.selected).attr("selected", d.selected).prop("label", d.label).text(d.label), k.push(l = {
                                element: G,
                                label: d.label,
                                id: d.id,
                                selected: d.selected
                            }), q(T, d.label, !0), D ? D.after(G) : e.element.append(G), D = G);
                            for (B++; k.length > B;)d = k.pop(), q(T, d.label, !1), d.element.remove()
                        }
                        for (; L.length > z;) {
                            for (c = L.pop(), B = 1; B < c.length; ++B)q(T, c[B].label, !1);
                            c[0].element.remove()
                        }
                        f(T, function (a, b) {
                            a > 0 ? p.addOption(b) : 0 > a && p.removeOption(b)
                        })
                    }

                    var z;
                    if (!(z = u.match(e)))throw Lf("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", u, T(h));
                    var A = d(z[2] || z[1]), B = z[4] || z[6], C = / as /.test(z[0]) && z[1], D = C ? d(C) : null, E = z[5], F = d(z[3] || ""), G = d(z[2] ? z[1] : B), H = d(z[7]), I = z[8], J = I ? d(z[8]) : null, K = {}, L = [[{
                        element: h,
                        label: ""
                    }]], M = {};
                    v && (a(v)(b), v.removeClass("ng-scope"), v.remove()), h.empty(), h.on("change", k), i.$render = r, b.$watchCollection(H, o), b.$watchCollection(m, o), t && b.$watchCollection(function () {
                        return i.$modelValue
                    }, o)
                }

                if (k[1]) {
                    for (var o, p = k[0], q = k[1], t = j.multiple, u = j.ngOptions, v = !1, w = !1, x = ad(b.createElement("option")), y = ad(b.createElement("optgroup")), z = x.clone(), A = 0, B = i.children(), C = B.length; C > A; A++)if ("" === B[A].value) {
                        o = v = B.eq(A);
                        break
                    }
                    p.init(q, v, z), t && (q.$isEmpty = function (a) {
                        return !a || 0 === a.length
                    }), u ? n(h, i, q) : t ? m(h, i, q) : l(h, i, q, p)
                }
            }
        }
    }], Of = ["$interpolate", function (a) {
        var b = {addOption: o, removeOption: o};
        return {
            restrict: "E", priority: 100, compile: function (c, d) {
                if (r(d.value)) {
                    var e = a(c.text(), !0);
                    e || d.$set("value", c.text())
                }
                return function (a, c, d) {
                    var f = "$selectController", g = c.parent(), h = g.data(f) || g.parent().data(f);
                    h && h.databound || (h = b), e ? a.$watch(e, function (a, b) {
                        d.$set("value", a), b !== a && h.removeOption(b), h.addOption(a, c)
                    }) : h.addOption(d.value, c), c.on("$destroy", function () {
                        h.removeOption(d.value)
                    })
                }
            }
        }
    }], Pf = q({restrict: "E", terminal: !1}), Qf = function () {
        return {
            restrict: "A", require: "?ngModel", link: function (a, b, c, d) {
                d && (c.required = !0, d.$validators.required = function (a, b) {
                    return !c.required || !d.$isEmpty(b)
                }, c.$observe("required", function () {
                    d.$validate()
                }))
            }
        }
    }, Rf = function () {
        return {
            restrict: "A", require: "?ngModel", link: function (a, b, e, f) {
                if (f) {
                    var g, h = e.ngPattern || e.pattern;
                    e.$observe("pattern", function (a) {
                        if (u(a) && a.length > 0 && (a = new RegExp("^" + a + "$")), a && !a.test)throw d("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", h, a, T(b));
                        g = a || c, f.$validate()
                    }), f.$validators.pattern = function (a) {
                        return f.$isEmpty(a) || r(g) || g.test(a)
                    }
                }
            }
        }
    }, Sf = function () {
        return {
            restrict: "A", require: "?ngModel", link: function (a, b, c, d) {
                if (d) {
                    var e = -1;
                    c.$observe("maxlength", function (a) {
                        var b = m(a);
                        e = isNaN(b) ? -1 : b, d.$validate()
                    }), d.$validators.maxlength = function (a, b) {
                        return 0 > e || d.$isEmpty(b) || b.length <= e
                    }
                }
            }
        }
    }, Tf = function () {
        return {
            restrict: "A", require: "?ngModel", link: function (a, b, c, d) {
                if (d) {
                    var e = 0;
                    c.$observe("minlength", function (a) {
                        e = m(a) || 0, d.$validate()
                    }), d.$validators.minlength = function (a, b) {
                        return d.$isEmpty(b) || b.length >= e
                    }
                }
            }
        }
    };
    return a.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (da(), na(id), void ad(b).ready(function () {
        $(b, _)
    }))
}(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>'), function (a, b, c) {
    "use strict";
    function d(a, c) {
        c = c || {}, b.forEach(c, function (a, b) {
            delete c[b]
        });
        for (var d in a)!a.hasOwnProperty(d) || "$" === d.charAt(0) && "$" === d.charAt(1) || (c[d] = a[d]);
        return c
    }

    var e = b.$$minErr("$resource"), f = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;
    b.module("ngResource", ["ng"]).provider("$resource", function () {
        var a = this;
        this.defaults = {
            stripTrailingSlashes: !0,
            actions: {
                get: {method: "GET"},
                save: {method: "POST"},
                query: {method: "GET", isArray: !0},
                remove: {method: "DELETE"},
                "delete": {method: "DELETE"}
            }
        }, this.$get = ["$http", "$q", function (g, h) {
            function i(b, c) {
                this.template = b, this.defaults = m({}, a.defaults, c), this.urlParams = {}
            }

            function j(p, q, r, s) {
                function t(a, b) {
                    var d = {};
                    return b = m({}, q, b), l(b, function (b, g) {
                        o(b) && (b = b());
                        var h;
                        if (b && b.charAt && "@" == b.charAt(0)) {
                            h = a;
                            var i = b.substr(1);
                            if (null == i || "" === i || "hasOwnProperty" === i || !f.test("." + i))throw e("badmember", i);
                            for (var i = i.split("."), j = 0, k = i.length; k > j && h !== c; j++) {
                                var l = i[j];
                                h = null !== h ? h[l] : c
                            }
                        } else h = b;
                        d[g] = h
                    }), d
                }

                function u(a) {
                    return a.resource
                }

                function v(a) {
                    d(a || {}, this)
                }

                var w = new i(p, s);
                return r = m({}, a.defaults.actions, r), v.prototype.toJSON = function () {
                    var a = m({}, this);
                    return delete a.$promise, delete a.$resolved, a
                }, l(r, function (a, f) {
                    var i = /^(POST|PUT|PATCH)$/i.test(a.method);
                    v[f] = function (j, p, q, r) {
                        var s, x, y, z = {};
                        switch (arguments.length) {
                            case 4:
                                y = r, x = q;
                            case 3:
                            case 2:
                                if (!o(p)) {
                                    z = j, s = p, x = q;
                                    break
                                }
                                if (o(j)) {
                                    x = j, y = p;
                                    break
                                }
                                x = p, y = q;
                            case 1:
                                o(j) ? x = j : i ? s = j : z = j;
                                break;
                            case 0:
                                break;
                            default:
                                throw e("badargs", arguments.length)
                        }
                        var A = this instanceof v, B = A ? s : a.isArray ? [] : new v(s), C = {}, D = a.interceptor && a.interceptor.response || u, E = a.interceptor && a.interceptor.responseError || c;
                        return l(a, function (a, b) {
                            "params" != b && "isArray" != b && "interceptor" != b && (C[b] = n(a))
                        }), i && (C.data = s), w.setUrlParams(C, m({}, t(s, a.params || {}), z), a.url), z = g(C).then(function (c) {
                            var g = c.data, h = B.$promise;
                            if (g) {
                                if (b.isArray(g) !== !!a.isArray)throw e("badcfg", f, a.isArray ? "array" : "object", b.isArray(g) ? "array" : "object");
                                a.isArray ? (B.length = 0, l(g, function (a) {
                                    B.push("object" == typeof a ? new v(a) : a)
                                })) : (d(g, B), B.$promise = h)
                            }
                            return B.$resolved = !0, c.resource = B, c
                        }, function (a) {
                            return B.$resolved = !0, (y || k)(a), h.reject(a)
                        }), z = z.then(function (a) {
                            var b = D(a);
                            return (x || k)(b, a.headers), b
                        }, E), A ? z : (B.$promise = z, B.$resolved = !1, B)
                    }, v.prototype["$" + f] = function (a, b, c) {
                        return o(a) && (c = b, b = a, a = {}), a = v[f].call(this, a, this, b, c), a.$promise || a
                    }
                }), v.bind = function (a) {
                    return j(p, m({}, q, a), r)
                }, v
            }

            var k = b.noop, l = b.forEach, m = b.extend, n = b.copy, o = b.isFunction;
            return i.prototype = {
                setUrlParams: function (a, c, d) {
                    var f, g, h = this, i = d || h.template, j = h.urlParams = {};
                    l(i.split(/\W/), function (a) {
                        if ("hasOwnProperty" === a)throw e("badname");
                        !/^\d+$/.test(a) && a && new RegExp("(^|[^\\\\]):" + a + "(\\W|$)").test(i) && (j[a] = !0)
                    }), i = i.replace(/\\:/g, ":"), c = c || {}, l(h.urlParams, function (a, d) {
                        f = c.hasOwnProperty(d) ? c[d] : h.defaults[d], b.isDefined(f) && null !== f ? (g = encodeURIComponent(f).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "%20").replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+"), i = i.replace(new RegExp(":" + d + "(\\W|$)", "g"), function (a, b) {
                            return g + b
                        })) : i = i.replace(new RegExp("(/?):" + d + "(\\W|$)", "g"), function (a, b, c) {
                            return "/" == c.charAt(0) ? c : b + c
                        })
                    }), h.defaults.stripTrailingSlashes && (i = i.replace(/\/+$/, "") || "/"), i = i.replace(/\/\.(?=\w+($|\?))/, "."), a.url = i.replace(/\/\\\./, "/."), l(c, function (b, c) {
                        h.urlParams[c] || (a.params = a.params || {}, a.params[c] = b)
                    })
                }
            }, j
        }]
    })
}(window, window.angular), function (a, b, c) {
    "use strict";
    function d(a, c, d) {
        return {
            restrict: "ECA", terminal: !0, priority: 400, transclude: "element", link: function (e, f, g, h, i) {
                function j() {
                    n && (d.cancel(n), n = null), l && (l.$destroy(), l = null), m && (n = d.leave(m), n.then(function () {
                        n = null
                    }), m = null)
                }

                function k() {
                    var g = a.current && a.current.locals;
                    if (b.isDefined(g && g.$template)) {
                        var g = e.$new(), h = a.current;
                        m = i(g, function (a) {
                            d.enter(a, null, m || f).then(function () {
                                !b.isDefined(o) || o && !e.$eval(o) || c()
                            }), j()
                        }), l = h.scope = g, l.$emit("$viewContentLoaded"), l.$eval(p)
                    } else j()
                }

                var l, m, n, o = g.autoscroll, p = g.onload || "";
                e.$on("$routeChangeSuccess", k), k()
            }
        }
    }

    function e(a, b, c) {
        return {
            restrict: "ECA", priority: -400, link: function (d, e) {
                var f = c.current, g = f.locals;
                e.html(g.$template);
                var h = a(e.contents());
                f.controller && (g.$scope = d, g = b(f.controller, g), f.controllerAs && (d[f.controllerAs] = g), e.data("$ngControllerController", g), e.children().data("$ngControllerController", g)), h(d)
            }
        }
    }

    a = b.module("ngRoute", ["ng"]).provider("$route", function () {
        function a(a, c) {
            return b.extend(Object.create(a), c)
        }

        function c(a, b) {
            var c = b.caseInsensitiveMatch, d = {originalPath: a, regexp: a}, e = d.keys = [];
            return a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function (a, b, c, d) {
                return a = "?" === d ? d : null, d = "*" === d ? d : null, e.push({
                    name: c,
                    optional: !!a
                }), b = b || "", "" + (a ? "" : b) + "(?:" + (a ? b : "") + (d && "(.+?)" || "([^/]+)") + (a || "") + ")" + (a || "")
            }).replace(/([\/$\*])/g, "\\$1"), d.regexp = new RegExp("^" + a + "$", c ? "i" : ""), d
        }

        var d = {};
        this.when = function (a, e) {
            var f = b.copy(e);
            if (b.isUndefined(f.reloadOnSearch) && (f.reloadOnSearch = !0), b.isUndefined(f.caseInsensitiveMatch) && (f.caseInsensitiveMatch = this.caseInsensitiveMatch), d[a] = b.extend(f, a && c(a, f)), a) {
                var g = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
                d[g] = b.extend({redirectTo: a}, c(g, f))
            }
            return this
        }, this.caseInsensitiveMatch = !1, this.otherwise = function (a) {
            return "string" == typeof a && (a = {redirectTo: a}), this.when(null, a), this
        }, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", function (c, e, g, h, i, j, k) {
            function l(a) {
                var d = s.current;
                (q = (p = n()) && d && p.$$route === d.$$route && b.equals(p.pathParams, d.pathParams) && !p.reloadOnSearch && !r) || !d && !p || c.$broadcast("$routeChangeStart", p, d).defaultPrevented && a && a.preventDefault()
            }

            function m() {
                var a = s.current, d = p;
                q ? (a.params = d.params, b.copy(a.params, g), c.$broadcast("$routeUpdate", a)) : (d || a) && (r = !1, (s.current = d) && d.redirectTo && (b.isString(d.redirectTo) ? e.path(o(d.redirectTo, d.params)).search(d.params).replace() : e.url(d.redirectTo(d.pathParams, e.path(), e.search())).replace()), h.when(d).then(function () {
                    if (d) {
                        var a, c, e = b.extend({}, d.resolve);
                        return b.forEach(e, function (a, c) {
                            e[c] = b.isString(a) ? i.get(a) : i.invoke(a, null, null, c)
                        }), b.isDefined(a = d.template) ? b.isFunction(a) && (a = a(d.params)) : b.isDefined(c = d.templateUrl) && (b.isFunction(c) && (c = c(d.params)), c = k.getTrustedResourceUrl(c), b.isDefined(c) && (d.loadedTemplateUrl = c, a = j(c))), b.isDefined(a) && (e.$template = a), h.all(e)
                    }
                }).then(function (e) {
                    d == s.current && (d && (d.locals = e, b.copy(d.params, g)), c.$broadcast("$routeChangeSuccess", d, a))
                }, function (b) {
                    d == s.current && c.$broadcast("$routeChangeError", d, a, b)
                }))
            }

            function n() {
                var c, f;
                return b.forEach(d, function (d, g) {
                    var h;
                    if (h = !f) {
                        var i = e.path();
                        h = d.keys;
                        var j = {};
                        if (d.regexp)if (i = d.regexp.exec(i)) {
                            for (var k = 1, l = i.length; l > k; ++k) {
                                var m = h[k - 1], n = i[k];
                                m && n && (j[m.name] = n)
                            }
                            h = j
                        } else h = null; else h = null;
                        h = c = h
                    }
                    h && (f = a(d, {params: b.extend({}, e.search(), c), pathParams: c}), f.$$route = d)
                }), f || d[null] && a(d[null], {params: {}, pathParams: {}})
            }

            function o(a, c) {
                var d = [];
                return b.forEach((a || "").split(":"), function (a, b) {
                    if (0 === b)d.push(a); else {
                        var e = a.match(/(\w+)(?:[?*])?(.*)/), f = e[1];
                        d.push(c[f]), d.push(e[2] || ""), delete c[f]
                    }
                }), d.join("")
            }

            var p, q, r = !1, s = {
                routes: d, reload: function () {
                    r = !0, c.$evalAsync(function () {
                        l(), m()
                    })
                }, updateParams: function (a) {
                    if (!this.current || !this.current.$$route)throw f("norout");
                    a = b.extend({}, this.current.params, a), e.path(o(this.current.$$route.originalPath, a)), e.search(a)
                }
            };
            return c.$on("$locationChangeStart", l), c.$on("$locationChangeSuccess", m), s
        }]
    });
    var f = b.$$minErr("ngRoute");
    a.provider("$routeParams", function () {
        this.$get = function () {
            return {}
        }
    }), a.directive("ngView", d), a.directive("ngView", e), d.$inject = ["$route", "$anchorScroll", "$animate"], e.$inject = ["$compile", "$controller", "$route"]
}(window, window.angular), function (a, b, c) {
    "use strict";
    b.module("ngAnimate", ["ng"]).directive("ngAnimateChildren", function () {
        return function (a, c, d) {
            d = d.ngAnimateChildren, b.isString(d) && 0 === d.length ? c.data("$$ngAnimateChildren", !0) : a.$watch(d, function (a) {
                c.data("$$ngAnimateChildren", !!a)
            })
        }
    }).factory("$$animateReflow", ["$$rAF", "$document", function (a, b) {
        return function (b) {
            return a(function () {
                b()
            })
        }
    }]).config(["$provide", "$animateProvider", function (d, e) {
        function f(a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (1 == c.nodeType)return c
            }
        }

        function g(a, b) {
            return f(a) == f(b)
        }

        var h, i = b.noop, j = b.forEach, k = e.$$selectors, l = b.isArray, m = b.isString, n = b.isObject, o = {running: !0};
        d.decorator("$animate", ["$delegate", "$$q", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", "$templateRequest", "$$jqLite", function (a, c, d, p, q, r, s, t, u, v) {
            function w(a, b) {
                var c = a.data("$$ngAnimateState") || {};
                return b && (c.running = !0, c.structural = !0, a.data("$$ngAnimateState", c)), c.disabled || c.running && c.structural
            }

            function x(a) {
                var b, d = c.defer();
                return d.promise.$$cancelFn = function () {
                    b && b()
                }, s.$$postDigest(function () {
                    b = a(function () {
                        d.resolve()
                    })
                }), d.promise
            }

            function y(a) {
                return n(a) ? (a.tempClasses && m(a.tempClasses) && (a.tempClasses = a.tempClasses.split(/\s+/)), a) : void 0
            }

            function z(a, b, c) {
                c = c || {};
                var d = {};
                j(c, function (a, b) {
                    j(b.split(" "), function (b) {
                        d[b] = a
                    })
                });
                var e = Object.create(null);
                j((a.attr("class") || "").split(/\s+/), function (a) {
                    e[a] = !0
                });
                var f = [], g = [];
                return j(b && b.classes || [], function (a, b) {
                    var c = e[b], h = d[b] || {};
                    !1 === a ? (c || "addClass" == h.event) && g.push(b) : !0 === a && (c && "removeClass" != h.event || f.push(b))
                }), 0 < f.length + g.length && [f.join(" "), g.join(" ")]
            }

            function A(a) {
                if (a) {
                    var b = [], c = {};
                    a = a.substr(1).split("."), (p.transitions || p.animations) && b.push(d.get(k[""]));
                    for (var e = 0; e < a.length; e++) {
                        var f = a[e], g = k[f];
                        g && !c[f] && (b.push(d.get(g)), c[f] = !0)
                    }
                    return b
                }
            }

            function B(a, c, d, e) {
                function f(a, b) {
                    var c = a[b], d = a["before" + b.charAt(0).toUpperCase() + b.substr(1)];
                    return c || d ? ("leave" == b && (d = c, c = null), v.push({event: b, fn: c}), s.push({
                        event: b,
                        fn: d
                    }), !0) : void 0
                }

                function g(b, c, f) {
                    var g = [];
                    j(b, function (a) {
                        a.fn && g.push(a)
                    });
                    var h = 0;
                    j(g, function (b, j) {
                        var l = function () {
                            a:{
                                if (c) {
                                    if ((c[j] || i)(), ++h < g.length)break a;
                                    c = null
                                }
                                f()
                            }
                        };
                        switch (b.event) {
                            case"setClass":
                                c.push(b.fn(a, k, m, l, e));
                                break;
                            case"animate":
                                c.push(b.fn(a, d, e.from, e.to, l));
                                break;
                            case"addClass":
                                c.push(b.fn(a, k || d, l, e));
                                break;
                            case"removeClass":
                                c.push(b.fn(a, m || d, l, e));
                                break;
                            default:
                                c.push(b.fn(a, l, e))
                        }
                    }), c && 0 === c.length && f()
                }

                var h = a[0];
                if (h) {
                    e && (e.to = e.to || {}, e.from = e.from || {});
                    var k, m;
                    l(d) && (k = d[0], m = d[1], k ? m ? d = k + " " + m : (d = k, c = "addClass") : (d = m, c = "removeClass"));
                    var n = "setClass" == c, o = n || "addClass" == c || "removeClass" == c || "animate" == c, p = a.attr("class") + " " + d;
                    if (J(p)) {
                        var q = i, r = [], s = [], t = i, u = [], v = [], p = (" " + p).replace(/\s+/g, ".");
                        return j(A(p), function (a) {
                            !f(a, c) && n && (f(a, "addClass"), f(a, "removeClass"))
                        }), {
                            node: h,
                            event: c,
                            className: d,
                            isClassBased: o,
                            isSetClassOperation: n,
                            applyStyles: function () {
                                e && a.css(b.extend(e.from || {}, e.to || {}))
                            },
                            before: function (a) {
                                q = a, g(s, r, function () {
                                    q = i, a()
                                })
                            },
                            after: function (a) {
                                t = a, g(v, u, function () {
                                    t = i, a()
                                })
                            },
                            cancel: function () {
                                r && (j(r, function (a) {
                                    (a || i)(!0)
                                }), q(!0)), u && (j(u, function (a) {
                                    (a || i)(!0)
                                }), t(!0))
                            }
                        }
                    }
                }
            }

            function C(a, c, d, e, f, g, k, l) {
                function m(b) {
                    var e = "$animate:" + b;
                    t && t[e] && 0 < t[e].length && r(function () {
                        d.triggerHandler(e, {event: a, className: c})
                    })
                }

                function n() {
                    m("before")
                }

                function o() {
                    m("after")
                }

                function p() {
                    p.hasBeenRun || (p.hasBeenRun = !0, g())
                }

                function q() {
                    if (!q.hasBeenRun) {
                        s && s.applyStyles(), q.hasBeenRun = !0, k && k.tempClasses && j(k.tempClasses, function (a) {
                            h.removeClass(d, a)
                        });
                        var b = d.data("$$ngAnimateState");
                        b && (s && s.isClassBased ? E(d, c) : (r(function () {
                            var b = d.data("$$ngAnimateState") || {};
                            y == b.index && E(d, c, a)
                        }), d.data("$$ngAnimateState", b))), m("close"), l()
                    }
                }

                var s = B(d, a, c, k);
                if (!s)return p(), n(), o(), q(), i;
                a = s.event, c = s.className;
                var t = b.element._data(s.node), t = t && t.events;
                if (e || (e = f ? f.parent() : d.parent()), F(d, e))return p(), n(), o(), q(), i;
                e = d.data("$$ngAnimateState") || {};
                var u = e.active || {}, v = e.totalActive || 0, w = e.last;
                if (f = !1, v > 0) {
                    if (v = [], s.isClassBased)"setClass" == w.event ? (v.push(w), E(d, c)) : u[c] && (x = u[c], x.event == a ? f = !0 : (v.push(x), E(d, c))); else if ("leave" == a && u["ng-leave"])f = !0; else {
                        for (var x in u)v.push(u[x]);
                        e = {}, E(d, !0)
                    }
                    0 < v.length && j(v, function (a) {
                        a.cancel()
                    })
                }
                if (!s.isClassBased || s.isSetClassOperation || "animate" == a || f || (f = "addClass" == a == d.hasClass(c)), f)return p(), n(), o(), m("close"), l(), i;
                u = e.active || {}, v = e.totalActive || 0, "leave" == a && d.one("$destroy", function (a) {
                    a = b.element(this);
                    var c = a.data("$$ngAnimateState");
                    c && (c = c.active["ng-leave"]) && (c.cancel(), E(a, "ng-leave"))
                }), h.addClass(d, "ng-animate"), k && k.tempClasses && j(k.tempClasses, function (a) {
                    h.addClass(d, a)
                });
                var y = H++;
                return v++, u[c] = s, d.data("$$ngAnimateState", {
                    last: s,
                    active: u,
                    index: y,
                    totalActive: v
                }), n(), s.before(function (b) {
                    var e = d.data("$$ngAnimateState");
                    b = b || !e || !e.active[c] || s.isClassBased && e.active[c].event != a, p(), !0 === b ? q() : (o(), s.after(q))
                }), s.cancel
            }

            function D(a) {
                (a = f(a)) && (a = b.isFunction(a.getElementsByClassName) ? a.getElementsByClassName("ng-animate") : a.querySelectorAll(".ng-animate"), j(a, function (a) {
                    a = b.element(a), (a = a.data("$$ngAnimateState")) && a.active && j(a.active, function (a) {
                        a.cancel()
                    })
                }))
            }

            function E(a, b) {
                if (g(a, q))o.disabled || (o.running = !1, o.structural = !1); else if (b) {
                    var c = a.data("$$ngAnimateState") || {}, d = !0 === b;
                    !d && c.active && c.active[b] && (c.totalActive--, delete c.active[b]), (d || !c.totalActive) && (h.removeClass(a, "ng-animate"), a.removeData("$$ngAnimateState"))
                }
            }

            function F(a, c) {
                if (o.disabled)return !0;
                if (g(a, q))return o.running;
                var d, e, f;
                do {
                    if (0 === c.length)break;
                    var h = g(c, q), i = h ? o : c.data("$$ngAnimateState") || {};
                    if (i.disabled)return !0;
                    h && (f = !0), !1 !== d && (h = c.data("$$ngAnimateChildren"), b.isDefined(h) && (d = h)), e = e || i.running || i.last && !i.last.isClassBased
                } while (c = c.parent());
                return !f || !d && e
            }

            h = v, q.data("$$ngAnimateState", o);
            var G = s.$watch(function () {
                return u.totalPendingRequests
            }, function (a, b) {
                0 === a && (G(), s.$$postDigest(function () {
                    s.$$postDigest(function () {
                        o.running = !1
                    })
                }))
            }), H = 0, I = e.classNameFilter(), J = I ? function (a) {
                return I.test(a)
            } : function () {
                return !0
            };
            return {
                animate: function (a, c, d, e, g) {
                    return e = e || "ng-inline-animate", g = y(g) || {}, g.from = d ? c : null, g.to = d ? d : c, x(function (c) {
                        return C("animate", e, b.element(f(a)), null, null, i, g, c)
                    })
                }, enter: function (c, d, e, g) {
                    return g = y(g), c = b.element(c), d = d && b.element(d), e = e && b.element(e), w(c, !0), a.enter(c, d, e), x(function (a) {
                        return C("enter", "ng-enter", b.element(f(c)), d, e, i, g, a)
                    })
                }, leave: function (c, d) {
                    return d = y(d), c = b.element(c), D(c), w(c, !0), x(function (e) {
                        return C("leave", "ng-leave", b.element(f(c)), null, null, function () {
                            a.leave(c)
                        }, d, e)
                    })
                }, move: function (c, d, e, g) {
                    return g = y(g), c = b.element(c), d = d && b.element(d), e = e && b.element(e), D(c), w(c, !0), a.move(c, d, e), x(function (a) {
                        return C("move", "ng-move", b.element(f(c)), d, e, i, g, a)
                    })
                }, addClass: function (a, b, c) {
                    return this.setClass(a, b, [], c)
                }, removeClass: function (a, b, c) {
                    return this.setClass(a, [], b, c)
                }, setClass: function (c, d, e, g) {
                    if (g = y(g), c = b.element(c), c = b.element(f(c)), w(c))return a.$$setClassImmediately(c, d, e, g);
                    var h, i = c.data("$$animateClasses"), k = !!i;
                    return i || (i = {classes: {}}), h = i.classes, d = l(d) ? d : d.split(" "), j(d, function (a) {
                        a && a.length && (h[a] = !0)
                    }), e = l(e) ? e : e.split(" "), j(e, function (a) {
                        a && a.length && (h[a] = !1)
                    }), k ? (g && i.options && (i.options = b.extend(i.options || {}, g)), i.promise) : (c.data("$$animateClasses", i = {
                        classes: h,
                        options: g
                    }), i.promise = x(function (b) {
                        var d = c.parent(), e = f(c), g = e.parentNode;
                        if (g && !g.$$NG_REMOVED && !e.$$NG_REMOVED) {
                            e = c.data("$$animateClasses"), c.removeData("$$animateClasses");
                            var g = c.data("$$ngAnimateState") || {}, h = z(c, e, g.active);
                            return h ? C("setClass", h, c, d, null, function () {
                                h[0] && a.$$addClassImmediately(c, h[0]), h[1] && a.$$removeClassImmediately(c, h[1])
                            }, e.options, b) : b()
                        }
                        b()
                    }))
                }, cancel: function (a) {
                    a.$$cancelFn()
                }, enabled: function (a, b) {
                    switch (arguments.length) {
                        case 2:
                            if (a)E(b); else {
                                var c = b.data("$$ngAnimateState") || {};
                                c.disabled = !0, b.data("$$ngAnimateState", c)
                            }
                            break;
                        case 1:
                            o.disabled = !a;
                            break;
                        default:
                            a = !o.disabled
                    }
                    return !!a
                }
            }
        }]), e.register("", ["$window", "$sniffer", "$timeout", "$$animateReflow", function (d, e, g, k) {
            function n() {
                G || (G = k(function () {
                    J = [], G = null, H = {}
                }))
            }

            function o(a, b) {
                G && G(), J.push(b), G = k(function () {
                    j(J, function (a) {
                        a()
                    }), J = [], G = null, H = {}
                })
            }

            function p(a, c) {
                var d = f(a);
                a = b.element(d), M.push(a), d = Date.now() + c, L >= d || (g.cancel(K), L = d, K = g(function () {
                    q(M), M = []
                }, c, !1))
            }

            function q(a) {
                j(a, function (a) {
                    (a = a.data("$$ngAnimateCSS3Data")) && j(a.closeAnimationFns, function (a) {
                        a()
                    })
                })
            }

            function r(a, b) {
                var c = b ? H[b] : null;
                if (!c) {
                    var e = 0, f = 0, g = 0, h = 0;
                    j(a, function (a) {
                        if (1 == a.nodeType) {
                            a = d.getComputedStyle(a) || {}, e = Math.max(s(a[B + "Duration"]), e), f = Math.max(s(a[B + "Delay"]), f), h = Math.max(s(a[D + "Delay"]), h);
                            var b = s(a[D + "Duration"]);
                            b > 0 && (b *= parseInt(a[D + "IterationCount"], 10) || 1), g = Math.max(b, g)
                        }
                    }), c = {
                        total: 0,
                        transitionDelay: f,
                        transitionDuration: e,
                        animationDelay: h,
                        animationDuration: g
                    }, b && (H[b] = c)
                }
                return c
            }

            function s(a) {
                var b = 0;
                return a = m(a) ? a.split(/\s*,\s*/) : [], j(a, function (a) {
                    b = Math.max(parseFloat(a) || 0, b)
                }), b
            }

            function t(a, b, c, d) {
                a = 0 <= ["ng-enter", "ng-leave", "ng-move"].indexOf(c);
                var e, g = b.parent(), i = g.data("$$ngAnimateKey");
                i || (g.data("$$ngAnimateKey", ++I), i = I), e = i + "-" + f(b).getAttribute("class");
                var g = e + " " + c, i = H[g] ? ++H[g].total : 0, j = {};
                if (i > 0) {
                    var k = c + "-stagger", j = e + " " + k;
                    (e = !H[j]) && h.addClass(b, k), j = r(b, j), e && h.removeClass(b, k)
                }
                h.addClass(b, c);
                var k = b.data("$$ngAnimateCSS3Data") || {}, l = r(b, g);
                return e = l.transitionDuration, l = l.animationDuration, a && 0 === e && 0 === l ? (h.removeClass(b, c), !1) : (c = d || a && e > 0, a = l > 0 && 0 < j.animationDelay && 0 === j.animationDuration, b.data("$$ngAnimateCSS3Data", {
                    stagger: j,
                    cacheKey: g,
                    running: k.running || 0,
                    itemIndex: i,
                    blockTransition: c,
                    closeAnimationFns: k.closeAnimationFns || []
                }), g = f(b), c && (v(g, !0), d && b.css(d)), a && (g.style[D + "PlayState"] = "paused"), !0)
            }

            function u(a, b, c, d, e) {
                function i() {
                    b.off(G, k), h.removeClass(b, m), h.removeClass(b, n), A && g.cancel(A), z(b, c);
                    var a, d = f(b);
                    for (a in o)d.style.removeProperty(o[a])
                }

                function k(a) {
                    a.stopPropagation();
                    var b = a.originalEvent || a;
                    a = b.$manualTimeStamp || b.timeStamp || Date.now(), b = parseFloat(b.elapsedTime.toFixed(3)), Math.max(a - B, 0) >= y && b >= x && d()
                }

                var l = f(b);
                if (a = b.data("$$ngAnimateCSS3Data"), -1 != l.getAttribute("class").indexOf(c) && a) {
                    var m = "", n = "";
                    j(c.split(" "), function (a, b) {
                        var c = (b > 0 ? " " : "") + a;
                        m += c + "-active", n += c + "-pending"
                    });
                    var o = [], q = a.itemIndex, s = a.stagger, t = 0;
                    if (q > 0) {
                        t = 0, 0 < s.transitionDelay && 0 === s.transitionDuration && (t = s.transitionDelay * q);
                        var u = 0;
                        0 < s.animationDelay && 0 === s.animationDuration && (u = s.animationDelay * q, o.push(F + "animation-play-state")), t = Math.round(100 * Math.max(t, u)) / 100
                    }
                    t || (h.addClass(b, m), a.blockTransition && v(l, !1));
                    var w = r(b, a.cacheKey + " " + m), x = Math.max(w.transitionDuration, w.animationDuration);
                    if (0 !== x) {
                        !t && e && 0 < Object.keys(e).length && (w.transitionDuration || (b.css("transition", w.animationDuration + "s linear all"), o.push("transition")), b.css(e));
                        var q = Math.max(w.transitionDelay, w.animationDelay), y = 1e3 * q;
                        0 < o.length && (s = l.getAttribute("style") || "", ";" !== s.charAt(s.length - 1) && (s += ";"), l.setAttribute("style", s + " "));
                        var A, B = Date.now(), G = E + " " + C, q = 1e3 * (t + 1.5 * (q + x));
                        return t > 0 && (h.addClass(b, n), A = g(function () {
                            A = null, 0 < w.transitionDuration && v(l, !1), 0 < w.animationDuration && (l.style[D + "PlayState"] = ""), h.addClass(b, m), h.removeClass(b, n), e && (0 === w.transitionDuration && b.css("transition", w.animationDuration + "s linear all"), b.css(e), o.push("transition"))
                        }, 1e3 * t, !1)), b.on(G, k), a.closeAnimationFns.push(function () {
                            i(), d()
                        }), a.running++, p(b, q), i
                    }
                    h.removeClass(b, m), z(b, c), d()
                } else d()
            }

            function v(a, b) {
                a.style[B + "Property"] = b ? "none" : ""
            }

            function w(a, b, c, d) {
                return t(a, b, c, d) ? function (a) {
                    a && z(b, c)
                } : void 0
            }

            function x(a, b, c, d, e) {
                return b.data("$$ngAnimateCSS3Data") ? u(a, b, c, d, e) : (z(b, c), void d())
            }

            function y(a, b, c, d, e) {
                var f = w(a, b, c, e.from);
                if (f) {
                    var g = f;
                    return o(b, function () {
                        g = x(a, b, c, d, e.to)
                    }), function (a) {
                        (g || i)(a)
                    }
                }
                n(), d()
            }

            function z(a, b) {
                h.removeClass(a, b);
                var c = a.data("$$ngAnimateCSS3Data");
                c && (c.running && c.running--, c.running && 0 !== c.running || a.removeData("$$ngAnimateCSS3Data"))
            }

            function A(a, b) {
                var c = "";
                return a = l(a) ? a : a.split(/\s+/), j(a, function (a, d) {
                    a && 0 < a.length && (c += (d > 0 ? " " : "") + a + b)
                }), c
            }

            var B, C, D, E, F = "";
            a.ontransitionend === c && a.onwebkittransitionend !== c ? (F = "-webkit-", B = "WebkitTransition", C = "webkitTransitionEnd transitionend") : (B = "transition", C = "transitionend"), a.onanimationend === c && a.onwebkitanimationend !== c ? (F = "-webkit-", D = "WebkitAnimation", E = "webkitAnimationEnd animationend") : (D = "animation", E = "animationend");
            var G, H = {}, I = 0, J = [], K = null, L = 0, M = [];
            return {
                animate: function (a, b, c, d, e, f) {
                    return f = f || {}, f.from = c, f.to = d, y("animate", a, b, e, f)
                }, enter: function (a, b, c) {
                    return c = c || {}, y("enter", a, "ng-enter", b, c)
                }, leave: function (a, b, c) {
                    return c = c || {}, y("leave", a, "ng-leave", b, c)
                }, move: function (a, b, c) {
                    return c = c || {}, y("move", a, "ng-move", b, c)
                }, beforeSetClass: function (a, b, c, d, e) {
                    return e = e || {}, b = A(c, "-remove") + " " + A(b, "-add"), (e = w("setClass", a, b, e.from)) ? (o(a, d), e) : (n(), void d())
                }, beforeAddClass: function (a, b, c, d) {
                    return d = d || {}, (b = w("addClass", a, A(b, "-add"), d.from)) ? (o(a, c), b) : (n(), void c())
                }, beforeRemoveClass: function (a, b, c, d) {
                    return d = d || {}, (b = w("removeClass", a, A(b, "-remove"), d.from)) ? (o(a, c), b) : (n(), void c())
                }, setClass: function (a, b, c, d, e) {
                    return e = e || {}, c = A(c, "-remove"), b = A(b, "-add"), x("setClass", a, c + " " + b, d, e.to)
                }, addClass: function (a, b, c, d) {
                    return d = d || {}, x("addClass", a, A(b, "-add"), c, d.to)
                }, removeClass: function (a, b, c, d) {
                    return d = d || {}, x("removeClass", a, A(b, "-remove"), c, d.to)
                }
            }
        }])
    }])
}(window, window.angular), function (a, b, c) {
    "use strict";
    function d(a, c, d) {
        e.directive(a, ["$parse", "$swipe", function (e, f) {
            return function (g, h, i) {
                function j(a) {
                    if (!k)return !1;
                    var b = Math.abs(a.y - k.y);
                    return a = (a.x - k.x) * c, l && 75 > b && a > 0 && a > 30 && .3 > b / a
                }

                var k, l, m = e(i[a]), n = ["touch"];
                b.isDefined(i.ngSwipeDisableMouse) || n.push("mouse"), f.bind(h, {
                    start: function (a, b) {
                        k = a, l = !0
                    }, cancel: function (a) {
                        l = !1
                    }, end: function (a, b) {
                        j(a) && g.$apply(function () {
                            h.triggerHandler(d), m(g, {$event: b})
                        })
                    }
                }, n)
            }
        }])
    }

    var e = b.module("ngTouch", []);
    e.factory("$swipe", [function () {
        function a(a) {
            var b = a.touches && a.touches.length ? a.touches : [a];
            return a = a.changedTouches && a.changedTouches[0] || a.originalEvent && a.originalEvent.changedTouches && a.originalEvent.changedTouches[0] || b[0].originalEvent || b[0], {
                x: a.clientX,
                y: a.clientY
            }
        }

        function c(a, c) {
            var e = [];
            return b.forEach(a, function (a) {
                (a = d[a][c]) && e.push(a)
            }), e.join(" ")
        }

        var d = {
            mouse: {start: "mousedown", move: "mousemove", end: "mouseup"},
            touch: {start: "touchstart", move: "touchmove", end: "touchend", cancel: "touchcancel"}
        };
        return {
            bind: function (b, d, e) {
                var f, g, h, i, j = !1;
                e = e || ["mouse", "touch"], b.on(c(e, "start"), function (b) {
                    h = a(b), j = !0, g = f = 0, i = h, d.start && d.start(h, b)
                });
                var k = c(e, "cancel");
                k && b.on(k, function (a) {
                    j = !1, d.cancel && d.cancel(a)
                }), b.on(c(e, "move"), function (b) {
                    if (j && h) {
                        var c = a(b);
                        f += Math.abs(c.x - i.x), g += Math.abs(c.y - i.y), i = c, 10 > f && 10 > g || (g > f ? (j = !1, d.cancel && d.cancel(b)) : (b.preventDefault(), d.move && d.move(c, b)))
                    }
                }), b.on(c(e, "end"), function (b) {
                    j && (j = !1, d.end && d.end(a(b), b))
                })
            }
        }
    }]), e.config(["$provide", function (a) {
        a.decorator("ngClickDirective", ["$delegate", function (a) {
            return a.shift(), a
        }])
    }]), e.directive("ngClick", ["$parse", "$timeout", "$rootElement", function (a, c, d) {
        function e(a, b, c) {
            for (var d = 0; d < a.length; d += 2) {
                var e = a[d + 1], f = c;
                if (25 > Math.abs(a[d] - b) && 25 > Math.abs(e - f))return a.splice(d, d + 2), !0
            }
            return !1
        }

        function f(a) {
            if (!(2500 < Date.now() - h)) {
                var b = a.touches && a.touches.length ? a.touches : [a], c = b[0].clientX, b = b[0].clientY;
                1 > c && 1 > b || j && j[0] === c && j[1] === b || (j && (j = null), "label" === a.target.tagName.toLowerCase() && (j = [c, b]), e(i, c, b) || (a.stopPropagation(), a.preventDefault(), a.target && a.target.blur()))
            }
        }

        function g(a) {
            a = a.touches && a.touches.length ? a.touches : [a];
            var b = a[0].clientX, d = a[0].clientY;
            i.push(b, d), c(function () {
                for (var a = 0; a < i.length; a += 2)if (i[a] == b && i[a + 1] == d) {
                    i.splice(a, a + 2);
                    break
                }
            }, 2500, !1)
        }

        var h, i, j;
        return function (c, j, k) {
            function l() {
                r = !1, j.removeClass("ng-click-active")
            }

            var m, n, o, p, q = a(k.ngClick), r = !1;
            j.on("touchstart", function (a) {
                r = !0, m = a.target ? a.target : a.srcElement, 3 == m.nodeType && (m = m.parentNode), j.addClass("ng-click-active"), n = Date.now(), a = a.touches && a.touches.length ? a.touches : [a], a = a[0].originalEvent || a[0], o = a.clientX, p = a.clientY
            }), j.on("touchmove", function (a) {
                l()
            }), j.on("touchcancel", function (a) {
                l()
            }), j.on("touchend", function (a) {
                var c = Date.now() - n, q = a.changedTouches && a.changedTouches.length ? a.changedTouches : a.touches && a.touches.length ? a.touches : [a], s = q[0].originalEvent || q[0], q = s.clientX, s = s.clientY, t = Math.sqrt(Math.pow(q - o, 2) + Math.pow(s - p, 2));
                r && 750 > c && 12 > t && (i || (d[0].addEventListener("click", f, !0), d[0].addEventListener("touchstart", g, !0), i = []), h = Date.now(), e(i, q, s), m && m.blur(), b.isDefined(k.disabled) && !1 !== k.disabled || j.triggerHandler("click", [a])), l()
            }), j.onclick = function (a) {
            }, j.on("click", function (a, b) {
                c.$apply(function () {
                    q(c, {$event: b || a})
                })
            }), j.on("mousedown", function (a) {
                j.addClass("ng-click-active")
            }), j.on("mousemove mouseup", function (a) {
                j.removeClass("ng-click-active")
            })
        }
    }]), d("ngSwipeLeft", -1, "swipeleft"), d("ngSwipeRight", 1, "swiperight")
}(window, window.angular), void function () {
    for (var a = ""; a.length < 32;)a += Math.floor(Math.pow(36, 10) * Math.random()).toString(36);
    try {
        localStorage.setItem(a, a), a === localStorage.getItem(a) && localStorage.removeItem(a)
    } catch (b) {
        var c = {}, d = a;
        localStorage.setItem = function (a, b) {
            c[d + a] = b + ""
        }, localStorage.getItem = function (a) {
            return a in c ? c[d + a] : null
        }, localStorage.removeItem = function (a) {
            delete c[d + a]
        }, localStorage.clear = function () {
            c = {}
        }
    }
}(), void function () {
    var a = Date.parse;
    Date.parse = function (b) {
        var c = String(b).match(/^(\d+)-(\d+)-(\d+)T(\d+):(\d+)(?::(\d+)(?:\.(\d\d\d))?)?(z|[+-]\d\d:?\d\d)$/i);
        if (c) {
            var d = c[8].match(/\d\d/g) || [];
            return d[0] = 0 | d[0], d[1] = 0 | d[1], "-" === c[8].charAt(0) && (d[0] = -d[0], d[1] = -d[1]), new Date(Date.UTC(c[1], c[2] - 1, c[3], c[4] - d[0], c[5] - d[1], 0 | c[6], 0 | c[7]))
        }
        return a.apply(this, arguments)
    }
}(), function (a, b) {
    var c = function () {
    }, d = function () {
        this.calls = [], this.map = {
            events: {
                friend: "menu:share:appmessage",
                timeline: "menu:share:timeline",
                weibo: "menu:share:weibo",
                email: "email"
            },
            actions: {friend: "sendAppMessage", timeline: "shareTimeline", weibo: "shareWeibo", email: "email"},
            direct: {
                network: "getNetworkType",
                hideToolbar: "hideToolbar",
                hideOptionMenu: "hideOptionMenu",
                showOptionMenu: "showOptionMenu",
                closeWebView: "closeWindow",
                scanQRCode: "scanQRCode",
                imagePreview: "imagePreview"
            }
        }
    };
    d.prototype._data = function (a, b) {
        if (!a)return {};
        var c = {};
        for (var d in a) {
            if (!a.hasOwnProperty(d))return;
            c[d] = "function" == typeof a[d] ? a[d]() : a[d]
        }
        return c.appid = c.app, c.img_url = c.img, delete c.app, delete c.img, "weibo" === b ? (c.content = c.desc, c.url = c.link) : "timeline" === b ? (c.title = c.title + " - " + c.desc, c.desc = c.title) : "email" === b && (c.content = c.desc + " " + c.link), c
    }, d.prototype._make = function (a) {
        if ("undefined" == typeof WeixinJSBridge)return this.calls.push(a);
        var b = a.name, c = this.map.direct[b], d = a.data, e = a.callback;
        if (c)return "network" === b ? WeixinJSBridge.invoke(c, {}, e) : "imagePreview" === b ? WeixinJSBridge.invoke(c, d, e) : WeixinJSBridge.call(c, e);
        if ("email" === b)return WeixinJSBridge.invoke("sendEmail", this._data(d, b), e);
        var f = this;
        WeixinJSBridge.on(this.map.events[b], function () {
            WeixinJSBridge.invoke(f.map.actions[b], f._data(d, b), e)
        })
    }, d.prototype.on = function (a, b, d) {
        return a ? ("function" == typeof b && (d = b, b = null), this._make({
            name: a,
            data: b,
            callback: d || c
        }), this) : void 0
    };
    var e = function () {
        for (var a = 0, b = f.calls.length; b > a; a++)f._make(f.calls[a])
    }, f = new d, g = function () {
        return f.on.apply(f, arguments)
    };
    "undefined" != typeof exports && module.exports ? module.exports = exports = g : "function" == typeof define ? define(function (a, b, c) {
        c.exports = b = g
    }) : a.wechat = a.wechat || g, "undefined" == typeof WeixinJSBridge ? b.addEventListener ? b.addEventListener("WeixinJSBridgeReady", e, !1) : (b.attachEvent("WeixinJSBridgeReady", e), b.attachEvent("onWeixinJSBridgeReady", e)) : e()
}(window, document), function (a, b, c) {
    function d(a, c) {
        this.wrapper = "string" == typeof a ? b.querySelector(a) : a, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style,
            this.options = {
                resizeScrollbars: !0,
                mouseWheelSpeed: 20,
                snapThreshold: .334,
                startX: 0,
                startY: 0,
                scrollY: !0,
                directionLockThreshold: 5,
                momentum: !0,
                bounce: !0,
                bounceTime: 600,
                bounceEasing: "",
                preventDefault: !0,
                preventDefaultException: {tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/},
                HWCompositing: !0,
                useTransition: !0,
                useTransform: !0
            };
        for (var d in c)this.options[d] = c[d];
        this.translateZ = this.options.HWCompositing && h.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = h.hasTransition && this.options.useTransition, this.options.useTransform = h.hasTransform && this.options.useTransform, this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" == this.options.eventPassthrough ? !1 : this.options.scrollY, this.options.scrollX = "horizontal" == this.options.eventPassthrough ? !1 : this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? h.ease[this.options.bounceEasing] || h.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, this.options.tap === !0 && (this.options.tap = "tap"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
    }

    function e(a, c, d) {
        var e = b.createElement("div"), f = b.createElement("div");
        return d === !0 && (e.style.cssText = "position:absolute;z-index:9999", f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), f.className = "iScrollIndicator", "h" == a ? (d === !0 && (e.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", f.style.height = "100%"), e.className = "iScrollHorizontalScrollbar") : (d === !0 && (e.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", f.style.width = "100%"), e.className = "iScrollVerticalScrollbar"), e.style.cssText += ";overflow:hidden", c || (e.style.pointerEvents = "none"), e.appendChild(f), e
    }

    function f(c, d) {
        this.wrapper = "string" == typeof d.el ? b.querySelector(d.el) : d.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = c, this.options = {
            listenX: !0,
            listenY: !0,
            interactive: !1,
            resize: !0,
            defaultScrollbars: !1,
            shrink: !1,
            fade: !1,
            speedRatioX: 0,
            speedRatioY: 0
        };
        for (var e in d)this.options[e] = d[e];
        this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (h.addEvent(this.indicator, "touchstart", this), h.addEvent(a, "touchend", this)), this.options.disablePointer || (h.addEvent(this.indicator, h.prefixPointerEvent("pointerdown"), this), h.addEvent(a, h.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (h.addEvent(this.indicator, "mousedown", this), h.addEvent(a, "mouseup", this))), this.options.fade && (this.wrapperStyle[h.style.transform] = this.scroller.translateZ, this.wrapperStyle[h.style.transitionDuration] = h.isBadAndroid ? "0.001s" : "0ms", this.wrapperStyle.opacity = "0")
    }

    var g = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function (b) {
            a.setTimeout(b, 1e3 / 60)
        }, h = function () {
        function d(a) {
            return g === !1 ? !1 : "" === g ? a : g + a.charAt(0).toUpperCase() + a.substr(1)
        }

        var e = {}, f = b.createElement("div").style, g = function () {
            for (var a, b = ["t", "webkitT", "MozT", "msT", "OT"], c = 0, d = b.length; d > c; c++)if (a = b[c] + "ransform", a in f)return b[c].substr(0, b[c].length - 1);
            return !1
        }();
        e.getTime = Date.now || function () {
                return (new Date).getTime()
            }, e.extend = function (a, b) {
            for (var c in b)a[c] = b[c]
        }, e.addEvent = function (a, b, c, d) {
            a.addEventListener(b, c, !!d)
        }, e.removeEvent = function (a, b, c, d) {
            a.removeEventListener(b, c, !!d)
        }, e.prefixPointerEvent = function (b) {
            return a.MSPointerEvent ? "MSPointer" + b.charAt(9).toUpperCase() + b.substr(10) : b
        }, e.momentum = function (a, b, d, e, f, g) {
            var h, i, j = a - b, k = c.abs(j) / d;
            return g = void 0 === g ? 6e-4 : g, h = a + k * k / (2 * g) * (0 > j ? -1 : 1), i = k / g, e > h ? (h = f ? e - f / 2.5 * (k / 8) : e, j = c.abs(h - a), i = j / k) : h > 0 && (h = f ? f / 2.5 * (k / 8) : 0, j = c.abs(a) + h, i = j / k), {
                destination: c.round(h),
                duration: i
            }
        };
        var h = d("transform");
        return e.extend(e, {
            hasTransform: h !== !1,
            hasPerspective: d("perspective")in f,
            hasTouch: "ontouchstart"in a,
            hasPointer: a.PointerEvent || a.MSPointerEvent,
            hasTransition: d("transition")in f
        }), e.isBadAndroid = /Android /.test(a.navigator.appVersion) && !/Chrome\/\d/.test(a.navigator.appVersion), e.extend(e.style = {}, {
            transform: h,
            transitionTimingFunction: d("transitionTimingFunction"),
            transitionDuration: d("transitionDuration"),
            transitionDelay: d("transitionDelay"),
            transformOrigin: d("transformOrigin")
        }), e.hasClass = function (a, b) {
            var c = new RegExp("(^|\\s)" + b + "(\\s|$)");
            return c.test(a.className)
        }, e.addClass = function (a, b) {
            if (!e.hasClass(a, b)) {
                var c = a.className.split(" ");
                c.push(b), a.className = c.join(" ")
            }
        }, e.removeClass = function (a, b) {
            if (e.hasClass(a, b)) {
                var c = new RegExp("(^|\\s)" + b + "(\\s|$)", "g");
                a.className = a.className.replace(c, " ")
            }
        }, e.offset = function (a) {
            for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent;)b -= a.offsetLeft, c -= a.offsetTop;
            return {left: b, top: c}
        }, e.preventDefaultException = function (a, b) {
            for (var c in b)if (b[c].test(a[c]))return !0;
            return !1
        }, e.extend(e.eventType = {}, {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            mousedown: 2,
            mousemove: 2,
            mouseup: 2,
            pointerdown: 3,
            pointermove: 3,
            pointerup: 3,
            MSPointerDown: 3,
            MSPointerMove: 3,
            MSPointerUp: 3
        }), e.extend(e.ease = {}, {
            quadratic: {
                style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", fn: function (a) {
                    return a * (2 - a)
                }
            }, circular: {
                style: "cubic-bezier(0.1, 0.57, 0.1, 1)", fn: function (a) {
                    return c.sqrt(1 - --a * a)
                }
            }, back: {
                style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)", fn: function (a) {
                    var b = 4;
                    return (a -= 1) * a * ((b + 1) * a + b) + 1
                }
            }, bounce: {
                style: "", fn: function (a) {
                    return (a /= 1) < 1 / 2.75 ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                }
            }, elastic: {
                style: "", fn: function (a) {
                    var b = .22, d = .4;
                    return 0 === a ? 0 : 1 == a ? 1 : d * c.pow(2, -10 * a) * c.sin(2 * (a - b / 4) * c.PI / b) + 1
                }
            }
        }), e.tap = function (a, c) {
            var d = b.createEvent("Event");
            d.initEvent(c, !0, !0), d.pageX = a.pageX, d.pageY = a.pageY, a.target.dispatchEvent(d)
        }, e.click = function (a) {
            var c, d = a.target;
            /(SELECT|INPUT|TEXTAREA)/i.test(d.tagName) || (c = b.createEvent("MouseEvents"), c.initMouseEvent("click", !0, !0, a.view, 1, d.screenX, d.screenY, d.clientX, d.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null), c._constructed = !0, d.dispatchEvent(c))
        }, e
    }();
    d.prototype = {
        version: "5.1.3", _init: function () {
            this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys()
        }, destroy: function () {
            this._initEvents(!0), this._execEvent("destroy")
        }, _transitionEnd: function (a) {
            a.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
        }, _start: function (a) {
            if (!(1 != h.eventType[a.type] && 0 !== a.button || !this.enabled || this.initiated && h.eventType[a.type] !== this.initiated)) {
                !this.options.preventDefault || h.isBadAndroid || h.preventDefaultException(a.target, this.options.preventDefaultException) || a.preventDefault();
                var b, d = a.touches ? a.touches[0] : a;
                this.initiated = h.eventType[a.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this._transitionTime(), this.startTime = h.getTime(), this.options.useTransition && this.isInTransition ? (this.isInTransition = !1, b = this.getComputedPosition(), this._translate(c.round(b.x), c.round(b.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = d.pageX, this.pointY = d.pageY, this._execEvent("beforeScrollStart")
            }
        }, _move: function (a) {
            if (this.enabled && h.eventType[a.type] === this.initiated) {
                this.options.preventDefault && a.preventDefault();
                var b, d, e, f, g = a.touches ? a.touches[0] : a, i = g.pageX - this.pointX, j = g.pageY - this.pointY, k = h.getTime();
                if (this.pointX = g.pageX, this.pointY = g.pageY, this.distX += i, this.distY += j, e = c.abs(this.distX), f = c.abs(this.distY), !(k - this.endTime > 300 && 10 > e && 10 > f)) {
                    if (this.directionLocked || this.options.freeScroll || (e > f + this.options.directionLockThreshold ? this.directionLocked = "h" : f >= e + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
                        if ("vertical" == this.options.eventPassthrough)a.preventDefault(); else if ("horizontal" == this.options.eventPassthrough)return void(this.initiated = !1);
                        j = 0
                    } else if ("v" == this.directionLocked) {
                        if ("horizontal" == this.options.eventPassthrough)a.preventDefault(); else if ("vertical" == this.options.eventPassthrough)return void(this.initiated = !1);
                        i = 0
                    }
                    i = this.hasHorizontalScroll ? i : 0, j = this.hasVerticalScroll ? j : 0, b = this.x + i, d = this.y + j, (b > 0 || b < this.maxScrollX) && (b = this.options.bounce ? this.x + i / 3 : b > 0 ? 0 : this.maxScrollX), (d > 0 || d < this.maxScrollY) && (d = this.options.bounce ? this.y + j / 3 : d > 0 ? 0 : this.maxScrollY), this.directionX = i > 0 ? -1 : 0 > i ? 1 : 0, this.directionY = j > 0 ? -1 : 0 > j ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(b, d), k - this.startTime > 300 && (this.startTime = k, this.startX = this.x, this.startY = this.y)
                }
            }
        }, _end: function (a) {
            if (this.enabled && h.eventType[a.type] === this.initiated) {
                this.options.preventDefault && !h.preventDefaultException(a.target, this.options.preventDefaultException) && a.preventDefault();
                var b, d, e = (a.changedTouches ? a.changedTouches[0] : a, h.getTime() - this.startTime), f = c.round(this.x), g = c.round(this.y), i = c.abs(f - this.startX), j = c.abs(g - this.startY), k = 0, l = "";
                if (this.isInTransition = 0, this.initiated = 0, this.endTime = h.getTime(), !this.resetPosition(this.options.bounceTime)) {
                    if (this.scrollTo(f, g), !this.moved)return this.options.tap && h.tap(a, this.options.tap), this.options.click && h.click(a), void this._execEvent("scrollCancel");
                    if (this._events.flick && 200 > e && 100 > i && 100 > j)return void this._execEvent("flick");
                    if (this.options.momentum && 300 > e && (b = this.hasHorizontalScroll ? h.momentum(this.x, this.startX, e, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                            destination: f,
                            duration: 0
                        }, d = this.hasVerticalScroll ? h.momentum(this.y, this.startY, e, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                            destination: g,
                            duration: 0
                        }, f = b.destination, g = d.destination, k = c.max(b.duration, d.duration), this.isInTransition = 1), this.options.snap) {
                        var m = this._nearestSnap(f, g);
                        this.currentPage = m, k = this.options.snapSpeed || c.max(c.max(c.min(c.abs(f - m.x), 1e3), c.min(c.abs(g - m.y), 1e3)), 300), f = m.x, g = m.y, this.directionX = 0, this.directionY = 0, l = this.options.bounceEasing
                    }
                    return f != this.x || g != this.y ? ((f > 0 || f < this.maxScrollX || g > 0 || g < this.maxScrollY) && (l = h.ease.quadratic), void this.scrollTo(f, g, k, l)) : void this._execEvent("scrollEnd")
                }
            }
        }, _resize: function () {
            var a = this;
            clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function () {
                a.refresh()
            }, this.options.resizePolling)
        }, resetPosition: function (a) {
            var b = this.x, c = this.y;
            return a = a || 0, !this.hasHorizontalScroll || this.x > 0 ? b = 0 : this.x < this.maxScrollX && (b = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? c = 0 : this.y < this.maxScrollY && (c = this.maxScrollY), b == this.x && c == this.y ? !1 : (this.scrollTo(b, c, a, this.options.bounceEasing), !0)
        }, disable: function () {
            this.enabled = !1
        }, enable: function () {
            this.enabled = !0
        }, refresh: function () {
            this.wrapper.offsetHeight;
            this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = h.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
        }, on: function (a, b) {
            this._events[a] || (this._events[a] = []), this._events[a].push(b)
        }, off: function (a, b) {
            if (this._events[a]) {
                var c = this._events[a].indexOf(b);
                c > -1 && this._events[a].splice(c, 1)
            }
        }, _execEvent: function (a) {
            if (this._events[a]) {
                var b = 0, c = this._events[a].length;
                if (c)for (; c > b; b++)this._events[a][b].apply(this, [].slice.call(arguments, 1))
            }
        }, scrollBy: function (a, b, c, d) {
            a = this.x + a, b = this.y + b, c = c || 0, this.scrollTo(a, b, c, d)
        }, scrollTo: function (a, b, c, d) {
            d = d || h.ease.circular, this.isInTransition = this.options.useTransition && c > 0, !c || this.options.useTransition && d.style ? (this._transitionTimingFunction(d.style), this._transitionTime(c), this._translate(a, b)) : this._animate(a, b, c, d.fn)
        }, scrollToElement: function (a, b, d, e, f) {
            if (a = a.nodeType ? a : this.scroller.querySelector(a)) {
                var g = h.offset(a);
                g.left -= this.wrapperOffset.left, g.top -= this.wrapperOffset.top, d === !0 && (d = c.round(a.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), e === !0 && (e = c.round(a.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), g.left -= d || 0, g.top -= e || 0, g.left = g.left > 0 ? 0 : g.left < this.maxScrollX ? this.maxScrollX : g.left, g.top = g.top > 0 ? 0 : g.top < this.maxScrollY ? this.maxScrollY : g.top, b = void 0 === b || null === b || "auto" === b ? c.max(c.abs(this.x - g.left), c.abs(this.y - g.top)) : b, this.scrollTo(g.left, g.top, b, f)
            }
        }, _transitionTime: function (a) {
            if (a = a || 0, this.scrollerStyle[h.style.transitionDuration] = a + "ms", !a && h.isBadAndroid && (this.scrollerStyle[h.style.transitionDuration] = "0.001s"), this.indicators)for (var b = this.indicators.length; b--;)this.indicators[b].transitionTime(a)
        }, _transitionTimingFunction: function (a) {
            if (this.scrollerStyle[h.style.transitionTimingFunction] = a, this.indicators)for (var b = this.indicators.length; b--;)this.indicators[b].transitionTimingFunction(a)
        }, _translate: function (a, b) {
            if (this.options.useTransform ? this.scrollerStyle[h.style.transform] = "translate(" + a + "px," + b + "px)" + this.translateZ : (a = c.round(a), b = c.round(b), this.scrollerStyle.left = a + "px", this.scrollerStyle.top = b + "px"), this.x = a, this.y = b, this.indicators)for (var d = this.indicators.length; d--;)this.indicators[d].updatePosition()
        }, _initEvents: function (b) {
            var c = b ? h.removeEvent : h.addEvent, d = this.options.bindToWrapper ? this.wrapper : a;
            c(a, "orientationchange", this), c(a, "resize", this), this.options.click && c(this.wrapper, "click", this, !0), this.options.disableMouse || (c(this.wrapper, "mousedown", this), c(d, "mousemove", this), c(d, "mousecancel", this), c(d, "mouseup", this)), h.hasPointer && !this.options.disablePointer && (c(this.wrapper, h.prefixPointerEvent("pointerdown"), this), c(d, h.prefixPointerEvent("pointermove"), this), c(d, h.prefixPointerEvent("pointercancel"), this), c(d, h.prefixPointerEvent("pointerup"), this)), h.hasTouch && !this.options.disableTouch && (c(this.wrapper, "touchstart", this), c(d, "touchmove", this), c(d, "touchcancel", this), c(d, "touchend", this)), c(this.scroller, "transitionend", this), c(this.scroller, "webkitTransitionEnd", this), c(this.scroller, "oTransitionEnd", this), c(this.scroller, "MSTransitionEnd", this)
        }, getComputedPosition: function () {
            var b, c, d = a.getComputedStyle(this.scroller, null);
            return this.options.useTransform ? (d = d[h.style.transform].split(")")[0].split(", "), b = +(d[12] || d[4]), c = +(d[13] || d[5])) : (b = +d.left.replace(/[^-\d.]/g, ""), c = +d.top.replace(/[^-\d.]/g, "")), {
                x: b,
                y: c
            }
        }, _initIndicators: function () {
            function a(a) {
                for (var b = h.indicators.length; b--;)a.call(h.indicators[b])
            }

            var b, c = this.options.interactiveScrollbars, d = "string" != typeof this.options.scrollbars, g = [], h = this;
            this.indicators = [], this.options.scrollbars && (this.options.scrollY && (b = {
                el: e("v", c, this.options.scrollbars),
                interactive: c,
                defaultScrollbars: !0,
                customStyle: d,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenX: !1
            }, this.wrapper.appendChild(b.el), g.push(b)), this.options.scrollX && (b = {
                el: e("h", c, this.options.scrollbars),
                interactive: c,
                defaultScrollbars: !0,
                customStyle: d,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenY: !1
            }, this.wrapper.appendChild(b.el), g.push(b))), this.options.indicators && (g = g.concat(this.options.indicators));
            for (var i = g.length; i--;)this.indicators.push(new f(this, g[i]));
            this.options.fadeScrollbars && (this.on("scrollEnd", function () {
                a(function () {
                    this.fade()
                })
            }), this.on("scrollCancel", function () {
                a(function () {
                    this.fade()
                })
            }), this.on("scrollStart", function () {
                a(function () {
                    this.fade(1)
                })
            }), this.on("beforeScrollStart", function () {
                a(function () {
                    this.fade(1, !0)
                })
            })), this.on("refresh", function () {
                a(function () {
                    this.refresh()
                })
            }), this.on("destroy", function () {
                a(function () {
                    this.destroy()
                }), delete this.indicators
            })
        }, _initWheel: function () {
            h.addEvent(this.wrapper, "wheel", this), h.addEvent(this.wrapper, "mousewheel", this), h.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function () {
                h.removeEvent(this.wrapper, "wheel", this), h.removeEvent(this.wrapper, "mousewheel", this), h.removeEvent(this.wrapper, "DOMMouseScroll", this)
            })
        }, _wheel: function (a) {
            if (this.enabled) {
                a.preventDefault(), a.stopPropagation();
                var b, d, e, f, g = this;
                if (void 0 === this.wheelTimeout && g._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function () {
                        g._execEvent("scrollEnd"), g.wheelTimeout = void 0
                    }, 400), "deltaX"in a)1 === a.deltaMode ? (b = -a.deltaX * this.options.mouseWheelSpeed, d = -a.deltaY * this.options.mouseWheelSpeed) : (b = -a.deltaX, d = -a.deltaY); else if ("wheelDeltaX"in a)b = a.wheelDeltaX / 120 * this.options.mouseWheelSpeed, d = a.wheelDeltaY / 120 * this.options.mouseWheelSpeed; else if ("wheelDelta"in a)b = d = a.wheelDelta / 120 * this.options.mouseWheelSpeed; else {
                    if (!("detail"in a))return;
                    b = d = -a.detail / 3 * this.options.mouseWheelSpeed
                }
                if (b *= this.options.invertWheelDirection, d *= this.options.invertWheelDirection, this.hasVerticalScroll || (b = d, d = 0), this.options.snap)return e = this.currentPage.pageX, f = this.currentPage.pageY, b > 0 ? e-- : 0 > b && e++, d > 0 ? f-- : 0 > d && f++, void this.goToPage(e, f);
                e = this.x + c.round(this.hasHorizontalScroll ? b : 0), f = this.y + c.round(this.hasVerticalScroll ? d : 0), e > 0 ? e = 0 : e < this.maxScrollX && (e = this.maxScrollX), f > 0 ? f = 0 : f < this.maxScrollY && (f = this.maxScrollY), this.scrollTo(e, f, 0)
            }
        }, _initSnap: function () {
            this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function () {
                var a, b, d, e, f, g, h = 0, i = 0, j = 0, k = this.options.snapStepX || this.wrapperWidth, l = this.options.snapStepY || this.wrapperHeight;
                if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                    if (this.options.snap === !0)for (d = c.round(k / 2), e = c.round(l / 2); j > -this.scrollerWidth;) {
                        for (this.pages[h] = [], a = 0, f = 0; f > -this.scrollerHeight;)this.pages[h][a] = {
                            x: c.max(j, this.maxScrollX),
                            y: c.max(f, this.maxScrollY),
                            width: k,
                            height: l,
                            cx: j - d,
                            cy: f - e
                        }, f -= l, a++;
                        j -= k, h++
                    } else for (g = this.options.snap, a = g.length, b = -1; a > h; h++)(0 === h || g[h].offsetLeft <= g[h - 1].offsetLeft) && (i = 0, b++), this.pages[i] || (this.pages[i] = []), j = c.max(-g[h].offsetLeft, this.maxScrollX), f = c.max(-g[h].offsetTop, this.maxScrollY), d = j - c.round(g[h].offsetWidth / 2), e = f - c.round(g[h].offsetHeight / 2), this.pages[i][b] = {
                        x: j,
                        y: f,
                        width: g[h].offsetWidth,
                        height: g[h].offsetHeight,
                        cx: d,
                        cy: e
                    }, j > this.maxScrollX && i++;
                    this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = c.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = c.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                }
            }), this.on("flick", function () {
                var a = this.options.snapSpeed || c.max(c.max(c.min(c.abs(this.x - this.startX), 1e3), c.min(c.abs(this.y - this.startY), 1e3)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, a)
            })
        }, _nearestSnap: function (a, b) {
            if (!this.pages.length)return {x: 0, y: 0, pageX: 0, pageY: 0};
            var d = 0, e = this.pages.length, f = 0;
            if (c.abs(a - this.absStartX) < this.snapThresholdX && c.abs(b - this.absStartY) < this.snapThresholdY)return this.currentPage;
            for (a > 0 ? a = 0 : a < this.maxScrollX && (a = this.maxScrollX), b > 0 ? b = 0 : b < this.maxScrollY && (b = this.maxScrollY); e > d; d++)if (a >= this.pages[d][0].cx) {
                a = this.pages[d][0].x;
                break
            }
            for (e = this.pages[d].length; e > f; f++)if (b >= this.pages[0][f].cy) {
                b = this.pages[0][f].y;
                break
            }
            return d == this.currentPage.pageX && (d += this.directionX, 0 > d ? d = 0 : d >= this.pages.length && (d = this.pages.length - 1), a = this.pages[d][0].x), f == this.currentPage.pageY && (f += this.directionY, 0 > f ? f = 0 : f >= this.pages[0].length && (f = this.pages[0].length - 1), b = this.pages[0][f].y), {
                x: a,
                y: b,
                pageX: d,
                pageY: f
            }
        }, goToPage: function (a, b, d, e) {
            e = e || this.options.bounceEasing, a >= this.pages.length ? a = this.pages.length - 1 : 0 > a && (a = 0), b >= this.pages[a].length ? b = this.pages[a].length - 1 : 0 > b && (b = 0);
            var f = this.pages[a][b].x, g = this.pages[a][b].y;
            d = void 0 === d ? this.options.snapSpeed || c.max(c.max(c.min(c.abs(f - this.x), 1e3), c.min(c.abs(g - this.y), 1e3)), 300) : d, this.currentPage = {
                x: f,
                y: g,
                pageX: a,
                pageY: b
            }, this.scrollTo(f, g, d, e)
        }, next: function (a, b) {
            var c = this.currentPage.pageX, d = this.currentPage.pageY;
            c++, c >= this.pages.length && this.hasVerticalScroll && (c = 0, d++), this.goToPage(c, d, a, b)
        }, prev: function (a, b) {
            var c = this.currentPage.pageX, d = this.currentPage.pageY;
            c--, 0 > c && this.hasVerticalScroll && (c = 0, d--), this.goToPage(c, d, a, b)
        }, _initKeys: function (b) {
            var c, d = {pageUp: 33, pageDown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40};
            if ("object" == typeof this.options.keyBindings)for (c in this.options.keyBindings)"string" == typeof this.options.keyBindings[c] && (this.options.keyBindings[c] = this.options.keyBindings[c].toUpperCase().charCodeAt(0)); else this.options.keyBindings = {};
            for (c in d)this.options.keyBindings[c] = this.options.keyBindings[c] || d[c];
            h.addEvent(a, "keydown", this), this.on("destroy", function () {
                h.removeEvent(a, "keydown", this)
            })
        }, _key: function (a) {
            if (this.enabled) {
                var b, d = this.options.snap, e = d ? this.currentPage.pageX : this.x, f = d ? this.currentPage.pageY : this.y, g = h.getTime(), i = this.keyTime || 0, j = .25;
                switch (this.options.useTransition && this.isInTransition && (b = this.getComputedPosition(), this._translate(c.round(b.x), c.round(b.y)), this.isInTransition = !1), this.keyAcceleration = 200 > g - i ? c.min(this.keyAcceleration + j, 50) : 0, a.keyCode) {
                    case this.options.keyBindings.pageUp:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? e += d ? 1 : this.wrapperWidth : f += d ? 1 : this.wrapperHeight;
                        break;
                    case this.options.keyBindings.pageDown:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? e -= d ? 1 : this.wrapperWidth : f -= d ? 1 : this.wrapperHeight;
                        break;
                    case this.options.keyBindings.end:
                        e = d ? this.pages.length - 1 : this.maxScrollX, f = d ? this.pages[0].length - 1 : this.maxScrollY;
                        break;
                    case this.options.keyBindings.home:
                        e = 0, f = 0;
                        break;
                    case this.options.keyBindings.left:
                        e += d ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.up:
                        f += d ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.right:
                        e -= d ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.down:
                        f -= d ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    default:
                        return
                }
                if (d)return void this.goToPage(e, f);
                e > 0 ? (e = 0, this.keyAcceleration = 0) : e < this.maxScrollX && (e = this.maxScrollX, this.keyAcceleration = 0), f > 0 ? (f = 0, this.keyAcceleration = 0) : f < this.maxScrollY && (f = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(e, f, 0), this.keyTime = g
            }
        }, _animate: function (a, b, c, d) {
            function e() {
                var m, n, o, p = h.getTime();
                return p >= l ? (f.isAnimating = !1, f._translate(a, b), void(f.resetPosition(f.options.bounceTime) || f._execEvent("scrollEnd"))) : (p = (p - k) / c, o = d(p), m = (a - i) * o + i, n = (b - j) * o + j, f._translate(m, n), void(f.isAnimating && g(e)))
            }

            var f = this, i = this.x, j = this.y, k = h.getTime(), l = k + c;
            this.isAnimating = !0, e()
        }, handleEvent: function (a) {
            switch (a.type) {
                case"touchstart":
                case"pointerdown":
                case"MSPointerDown":
                case"mousedown":
                    this._start(a);
                    break;
                case"touchmove":
                case"pointermove":
                case"MSPointerMove":
                case"mousemove":
                    this._move(a);
                    break;
                case"touchend":
                case"pointerup":
                case"MSPointerUp":
                case"mouseup":
                case"touchcancel":
                case"pointercancel":
                case"MSPointerCancel":
                case"mousecancel":
                    this._end(a);
                    break;
                case"orientationchange":
                case"resize":
                    this._resize();
                    break;
                case"transitionend":
                case"webkitTransitionEnd":
                case"oTransitionEnd":
                case"MSTransitionEnd":
                    this._transitionEnd(a);
                    break;
                case"wheel":
                case"DOMMouseScroll":
                case"mousewheel":
                    this._wheel(a);
                    break;
                case"keydown":
                    this._key(a);
                    break;
                case"click":
                    a._constructed || (a.preventDefault(), a.stopPropagation())
            }
        }
    }, f.prototype = {
        handleEvent: function (a) {
            switch (a.type) {
                case"touchstart":
                case"pointerdown":
                case"MSPointerDown":
                case"mousedown":
                    this._start(a);
                    break;
                case"touchmove":
                case"pointermove":
                case"MSPointerMove":
                case"mousemove":
                    this._move(a);
                    break;
                case"touchend":
                case"pointerup":
                case"MSPointerUp":
                case"mouseup":
                case"touchcancel":
                case"pointercancel":
                case"MSPointerCancel":
                case"mousecancel":
                    this._end(a)
            }
        }, destroy: function () {
            this.options.interactive && (h.removeEvent(this.indicator, "touchstart", this), h.removeEvent(this.indicator, h.prefixPointerEvent("pointerdown"), this), h.removeEvent(this.indicator, "mousedown", this), h.removeEvent(a, "touchmove", this), h.removeEvent(a, h.prefixPointerEvent("pointermove"), this), h.removeEvent(a, "mousemove", this), h.removeEvent(a, "touchend", this), h.removeEvent(a, h.prefixPointerEvent("pointerup"), this), h.removeEvent(a, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
        }, _start: function (b) {
            var c = b.touches ? b.touches[0] : b;
            b.preventDefault(), b.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = c.pageX, this.lastPointY = c.pageY, this.startTime = h.getTime(), this.options.disableTouch || h.addEvent(a, "touchmove", this), this.options.disablePointer || h.addEvent(a, h.prefixPointerEvent("pointermove"), this), this.options.disableMouse || h.addEvent(a, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
        }, _move: function (a) {
            var b, c, d, e, f = a.touches ? a.touches[0] : a;
            h.getTime();
            this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, b = f.pageX - this.lastPointX, this.lastPointX = f.pageX, c = f.pageY - this.lastPointY, this.lastPointY = f.pageY, d = this.x + b, e = this.y + c, this._pos(d, e), a.preventDefault(), a.stopPropagation()
        }, _end: function (b) {
            if (this.initiated) {
                if (this.initiated = !1, b.preventDefault(), b.stopPropagation(), h.removeEvent(a, "touchmove", this), h.removeEvent(a, h.prefixPointerEvent("pointermove"), this), h.removeEvent(a, "mousemove", this), this.scroller.options.snap) {
                    var d = this.scroller._nearestSnap(this.scroller.x, this.scroller.y), e = this.options.snapSpeed || c.max(c.max(c.min(c.abs(this.scroller.x - d.x), 1e3), c.min(c.abs(this.scroller.y - d.y), 1e3)), 300);
                    (this.scroller.x != d.x || this.scroller.y != d.y) && (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = d, this.scroller.scrollTo(d.x, d.y, e, this.scroller.options.bounceEasing))
                }
                this.moved && this.scroller._execEvent("scrollEnd")
            }
        }, transitionTime: function (a) {
            a = a || 0, this.indicatorStyle[h.style.transitionDuration] = a + "ms", !a && h.isBadAndroid && (this.indicatorStyle[h.style.transitionDuration] = "0.001s")
        }, transitionTimingFunction: function (a) {
            this.indicatorStyle[h.style.transitionTimingFunction] = a
        }, refresh: function () {
            this.transitionTime(), this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (h.addClass(this.wrapper, "iScrollBothScrollbars"), h.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (h.removeClass(this.wrapper, "iScrollBothScrollbars"), h.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
            this.wrapper.offsetHeight;
            this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = c.max(c.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = c.max(c.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
        }, updatePosition: function () {
            var a = this.options.listenX && c.round(this.sizeRatioX * this.scroller.x) || 0, b = this.options.listenY && c.round(this.sizeRatioY * this.scroller.y) || 0;
            this.options.ignoreBoundaries || (a < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = c.max(this.indicatorWidth + a, 8), this.indicatorStyle.width = this.width + "px"), a = this.minBoundaryX) : a > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = c.max(this.indicatorWidth - (a - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", a = this.maxPosX + this.indicatorWidth - this.width) : a = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), b < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = c.max(this.indicatorHeight + 3 * b, 8), this.indicatorStyle.height = this.height + "px"), b = this.minBoundaryY) : b > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = c.max(this.indicatorHeight - 3 * (b - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", b = this.maxPosY + this.indicatorHeight - this.height) : b = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = a, this.y = b, this.scroller.options.useTransform ? this.indicatorStyle[h.style.transform] = "translate(" + a + "px," + b + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = a + "px", this.indicatorStyle.top = b + "px")
        }, _pos: function (a, b) {
            0 > a ? a = 0 : a > this.maxPosX && (a = this.maxPosX), 0 > b ? b = 0 : b > this.maxPosY && (b = this.maxPosY), a = this.options.listenX ? c.round(a / this.sizeRatioX) : this.scroller.x, b = this.options.listenY ? c.round(b / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(a, b)
        }, fade: function (a, b) {
            if (!b || this.visible) {
                clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
                var c = a ? 250 : 500, d = a ? 0 : 300;
                a = a ? "1" : "0", this.wrapperStyle[h.style.transitionDuration] = c + "ms", this.fadeTimeout = setTimeout(function (a) {
                    this.wrapperStyle.opacity = a, this.visible = +a
                }.bind(this, a), d)
            }
        }
    }, d.utils = h, "undefined" != typeof module && module.exports ? module.exports = d : a.IScroll = d
}(window, document, Math);
var mod;
mod = angular.module("infinite-scroll", []), mod.value("THROTTLE_MILLISECONDS", null), mod.directive("infiniteScroll", ["$rootScope", "$window", "$interval", "THROTTLE_MILLISECONDS", function (a, b, c, d) {
    return {
        scope: {
            infiniteScroll: "&",
            infiniteScrollContainer: "=",
            infiniteScrollDistance: "=",
            infiniteScrollDisabled: "=",
            infiniteScrollUseDocumentBottom: "=",
            infiniteScrollListenForEvent: "@"
        }, link: function (e, f, g) {
            var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y;
            return y = angular.element(b), t = null, u = null, i = null, j = null, q = !0, x = !1, w = null, p = function (a) {
                return a = a[0] || a, isNaN(a.offsetHeight) ? a.document.documentElement.clientHeight : a.offsetHeight
            }, r = function (a) {
                return a[0].getBoundingClientRect && !a.css("none") ? a[0].getBoundingClientRect().top + s(a) : void 0
            }, s = function (a) {
                return a = a[0] || a, isNaN(window.pageYOffset) ? a.document.documentElement.scrollTop : a.ownerDocument.defaultView.pageYOffset
            }, o = function () {
                var b, c, d, g, h;
                return j === y ? (b = p(j) + s(j[0].document.documentElement), d = r(f) + p(f)) : (b = p(j), c = 0, void 0 !== r(j) && (c = r(j)), d = r(f) - c + p(f)), x && (d = p((f[0].ownerDocument || f[0].document).documentElement)), g = d - b, h = g <= p(j) * t + 1, h ? (i = !0, u ? e.$$phase || a.$$phase ? e.infiniteScroll() : e.$apply(e.infiniteScroll) : void 0) : i = !1
            }, v = function (a, b) {
                var d, e, f;
                return f = null, e = 0, d = function () {
                    var b;
                    return e = (new Date).getTime(), c.cancel(f), f = null, a.call(), b = null
                }, function () {
                    var g, h;
                    return g = (new Date).getTime(), h = b - (g - e), 0 >= h ? (clearTimeout(f), c.cancel(f), f = null, e = g, a.call()) : f ? void 0 : f = c(d, h, 1)
                }
            }, null != d && (o = v(o, d)), e.$on("$destroy", function () {
                return j.unbind("scroll", o), null != w ? (w(), w = null) : void 0
            }), m = function (a) {
                return t = parseFloat(a) || 0
            }, e.$watch("infiniteScrollDistance", m), m(e.infiniteScrollDistance), l = function (a) {
                return u = !a, u && i ? (i = !1, o()) : void 0
            }, e.$watch("infiniteScrollDisabled", l), l(e.infiniteScrollDisabled), n = function (a) {
                return x = a
            }, e.$watch("infiniteScrollUseDocumentBottom", n), n(e.infiniteScrollUseDocumentBottom), h = function (a) {
                return null != j && j.unbind("scroll", o), j = a, null != a ? j.bind("scroll", o) : void 0
            }, h(y), e.infiniteScrollListenForEvent && (w = a.$on(e.infiniteScrollListenForEvent, o)), k = function (a) {
                if (null != a && 0 !== a.length) {
                    if (a instanceof HTMLElement ? a = angular.element(a) : "function" == typeof a.append ? a = angular.element(a[a.length - 1]) : "string" == typeof a && (a = angular.element(document.querySelector(a))), null != a)return h(a);
                    throw new Exception("invalid infinite-scroll-container attribute.")
                }
            }, e.$watch("infiniteScrollContainer", k), k(e.infiniteScrollContainer || []), null != g.infiniteScrollParent && h(angular.element(f.parent())), null != g.infiniteScrollImmediateCheck && (q = e.$eval(g.infiniteScrollImmediateCheck)), c(function () {
                return q ? o() : void 0
            }, 0, 1)
        }
    }
}]), function (a, b, c) {
    function d(a) {
        var b = w(), c = b.querySelector("h2"), d = b.querySelector("p"), e = b.querySelector("button.cancel"), f = b.querySelector("button.confirm");
        if (c.innerHTML = a.html ? a.title : B(a.title).split("\n").join("<br>"), d.innerHTML = a.html ? a.text : B(a.text || "").split("\n").join("<br>"), a.text && D(d), a.customClass)z(b, a.customClass), b.setAttribute("data-custom-class", a.customClass); else {
            var g = b.getAttribute("data-custom-class");
            A(b, g), b.setAttribute("data-custom-class", "")
        }
        if (F(b.querySelectorAll(".sa-icon")), a.type && !k()) {
            for (var i = !1, j = 0; j < u.length; j++)if (a.type === u[j]) {
                i = !0;
                break
            }
            if (!i)return l("Unknown alert type: " + a.type), !1;
            var m = b.querySelector(".sa-icon.sa-" + a.type);
            switch (D(m), a.type) {
                case"success":
                    z(m, "animate"), z(m.querySelector(".sa-tip"), "animateSuccessTip"), z(m.querySelector(".sa-long"), "animateSuccessLong");
                    break;
                case"error":
                    z(m, "animateErrorIcon"), z(m.querySelector(".sa-x-mark"), "animateXMark");
                    break;
                case"warning":
                    z(m, "pulseWarning"), z(m.querySelector(".sa-body"), "pulseWarningIns"), z(m.querySelector(".sa-dot"), "pulseWarningIns")
            }
        }
        if (a.imageUrl) {
            var n = b.querySelector(".sa-icon.sa-custom");
            n.style.backgroundImage = "url(" + a.imageUrl + ")", D(n);
            var o = 80, p = 80;
            if (a.imageSize) {
                var q = a.imageSize.toString().split("x"), r = q[0], s = q[1];
                r && s ? (o = r, p = s) : l("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + a.imageSize)
            }
            n.setAttribute("style", n.getAttribute("style") + "width:" + o + "px; height:" + p + "px")
        }
        b.setAttribute("data-has-cancel-button", a.showCancelButton), a.showCancelButton ? e.style.display = "inline-block" : F(e), b.setAttribute("data-has-confirm-button", a.showConfirmButton), a.showConfirmButton ? f.style.display = "inline-block" : F(f), a.cancelButtonText && (e.innerHTML = B(a.cancelButtonText)), a.confirmButtonText && (f.innerHTML = B(a.confirmButtonText)), f.style.backgroundColor = a.confirmButtonColor, h(f, a.confirmButtonColor), b.setAttribute("data-allow-ouside-click", a.allowOutsideClick);
        var t = a.doneFunction ? !0 : !1;
        b.setAttribute("data-has-done-function", t), a.animation ? b.setAttribute("data-animation", "pop") : b.setAttribute("data-animation", "none"), b.setAttribute("data-timer", a.timer)
    }

    function e(a, b) {
        a = String(a).replace(/[^0-9a-f]/gi, ""), a.length < 6 && (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]), b = b || 0;
        var c, d, e = "#";
        for (d = 0; 3 > d; d++)c = parseInt(a.substr(2 * d, 2), 16), c = Math.round(Math.min(Math.max(0, c + c * b), 255)).toString(16), e += ("00" + c).substr(c.length);
        return e
    }

    function f(a, b) {
        for (var c in b)b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    }

    function g(a) {
        var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
        return b ? parseInt(b[1], 16) + ", " + parseInt(b[2], 16) + ", " + parseInt(b[3], 16) : null
    }

    function h(a, b) {
        var c = g(b);
        a.style.boxShadow = "0 0 2px rgba(" + c + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"
    }

    function i() {
        var a = w();
        I(x(), 10), D(a), z(a, "showSweetAlert"), A(a, "hideSweetAlert"), m = b.activeElement;
        var c = a.querySelector("button.confirm");
        c.focus(), setTimeout(function () {
            z(a, "visible")
        }, 500);
        var d = a.getAttribute("data-timer");
        "null" !== d && "" !== d && (a.timeout = setTimeout(function () {
            q.close()
        }, d))
    }

    function j() {
        var a = w();
        a.style.marginTop = H(w())
    }

    function k() {
        return a.attachEvent && !a.addEventListener ? !0 : !1
    }

    function l(b) {
        a.console && a.console.log("SweetAlert: " + b)
    }

    var m, n, o, p, q, r, s = ".sweet-alert", t = ".sweet-overlay", u = ["error", "warning", "info", "success"], v = {
        title: "",
        text: "",
        type: null,
        allowOutsideClick: !1,
        showConfirmButton: !0,
        showCancelButton: !1,
        closeOnConfirm: !0,
        closeOnCancel: !0,
        confirmButtonText: "OK",
        confirmButtonColor: "#AEDEF4",
        cancelButtonText: "Cancel",
        imageUrl: null,
        imageSize: null,
        timer: null,
        customClass: "",
        html: !1,
        animation: !0,
        allowEscapeKey: !0
    }, w = function () {
        var a = b.querySelector(s);
        return a || (M(), a = w()), a
    }, x = function () {
        return b.querySelector(t)
    }, y = function (a, b) {
        return new RegExp(" " + b + " ").test(" " + a.className + " ")
    }, z = function (a, b) {
        y(a, b) || (a.className += " " + b)
    }, A = function (a, b) {
        var c = " " + a.className.replace(/[\t\r\n]/g, " ") + " ";
        if (y(a, b)) {
            for (; c.indexOf(" " + b + " ") >= 0;)c = c.replace(" " + b + " ", " ");
            a.className = c.replace(/^\s+|\s+$/g, "")
        }
    }, B = function (a) {
        var c = b.createElement("div");
        return c.appendChild(b.createTextNode(a)), c.innerHTML
    }, C = function (a) {
        a.style.opacity = "", a.style.display = "block"
    }, D = function (a) {
        if (a && !a.length)return C(a);
        for (var b = 0; b < a.length; ++b)C(a[b])
    }, E = function (a) {
        a.style.opacity = "", a.style.display = "none"
    }, F = function (a) {
        if (a && !a.length)return E(a);
        for (var b = 0; b < a.length; ++b)E(a[b])
    }, G = function (a, b) {
        for (var c = b.parentNode; null !== c;) {
            if (c === a)return !0;
            c = c.parentNode
        }
        return !1
    }, H = function (a) {
        a.style.left = "-9999px", a.style.display = "block";
        var b, c = a.clientHeight;
        return b = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(a).getPropertyValue("padding"), 10) : parseInt(a.currentStyle.padding), a.style.left = "", a.style.display = "none", "-" + parseInt(c / 2 + b) + "px"
    }, I = function (a, b) {
        if (+a.style.opacity < 1) {
            b = b || 16, a.style.opacity = 0, a.style.display = "block";
            var c = +new Date, d = function () {
                a.style.opacity = +a.style.opacity + (new Date - c) / 100, c = +new Date, +a.style.opacity < 1 && setTimeout(d, b)
            };
            d()
        }
        a.style.display = "block"
    }, J = function (a, b) {
        b = b || 16, a.style.opacity = 1;
        var c = +new Date, d = function () {
            a.style.opacity = +a.style.opacity - (new Date - c) / 100, c = +new Date, +a.style.opacity > 0 ? setTimeout(d, b) : a.style.display = "none"
        };
        d()
    }, K = function (c) {
        if ("function" == typeof MouseEvent) {
            var d = new MouseEvent("click", {view: a, bubbles: !1, cancelable: !0});
            c.dispatchEvent(d)
        } else if (b.createEvent) {
            var e = b.createEvent("MouseEvents");
            e.initEvent("click", !1, !1), c.dispatchEvent(e)
        } else b.createEventObject ? c.fireEvent("onclick") : "function" == typeof c.onclick && c.onclick()
    }, L = function (b) {
        "function" == typeof b.stopPropagation ? (b.stopPropagation(), b.preventDefault()) : a.event && a.event.hasOwnProperty("cancelBubble") && (a.event.cancelBubble = !0)
    }, M = function () {
        var a = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert" tabIndex="-1"><div class="sa-icon sa-error"><span class="sa-x-mark"><span class="sa-line sa-left"></span><span class="sa-line sa-right"></span></span></div><div class="sa-icon sa-warning"> <span class="sa-body"></span> <span class="sa-dot"></span> </div> <div class="sa-icon sa-info"></div> <div class="sa-icon sa-success"> <span class="sa-line sa-tip"></span> <span class="sa-line sa-long"></span> <div class="sa-placeholder"></div> <div class="sa-fix"></div> </div> <div class="sa-icon sa-custom"></div> <h2>Title</h2><p>Text</p><button class="cancel" tabIndex="2">Cancel</button><button class="confirm" tabIndex="1">OK</button></div>', c = b.createElement("div");
        for (c.innerHTML = a; c.firstChild;)b.body.appendChild(c.firstChild)
    };
    q = r = function () {
        function g(a) {
            var b = r;
            return "undefined" != typeof b[a] ? b[a] : v[a]
        }

        function k(b) {
            var d = b || a.event, e = d.keyCode || d.which;
            if (-1 !== [9, 13, 32, 27].indexOf(e)) {
                for (var f = d.target || d.srcElement, g = -1, i = 0; i < H.length; i++)if (f === H[i]) {
                    g = i;
                    break
                }
                9 === e ? (f = -1 === g ? E : g === H.length - 1 ? H[0] : H[g + 1], L(d), f.focus(), h(f, s.confirmButtonColor)) : (f = 13 === e || 32 === e ? -1 === g ? E : c : 27 === e && s.allowEscapeKey === !0 ? F : c, f !== c && K(f, d))
            }
        }

        function m(b) {
            var c = b || a.event, d = c.target || c.srcElement, e = c.relatedTarget, f = y(A, "visible");
            if (f) {
                var g = -1;
                if (null !== e) {
                    for (var h = 0; h < H.length; h++)if (e === H[h]) {
                        g = h;
                        break
                    }
                    -1 === g && d.focus()
                } else p = d
            }
        }

        var r = arguments[0];
        if (arguments[0] === c)return l("SweetAlert expects at least 1 attribute!"), !1;
        var s = f({}, v);
        switch (typeof arguments[0]) {
            case"string":
                s.title = arguments[0], s.text = arguments[1] || "", s.type = arguments[2] || "";
                break;
            case"object":
                if (arguments[0].title === c)return l('Missing "title" argument!'), !1;
                s.title = arguments[0].title;
                for (var t = ["text", "type", "customClass", "allowOutsideClick", "showConfirmButton", "showCancelButton", "closeOnConfirm", "closeOnCancel", "timer", "confirmButtonColor", "cancelButtonText", "imageUrl", "imageSize", "html", "animation", "allowEscapeKey"], u = t.length, x = 0; u > x; x++) {
                    var z = t[x];
                    s[z] = g(z)
                }
                s.confirmButtonText = s.showCancelButton ? "Confirm" : v.confirmButtonText, s.confirmButtonText = g("confirmButtonText"), s.doneFunction = arguments[1] || null;
                break;
            default:
                return l('Unexpected type of argument! Expected "string" or "object", got ' + typeof arguments[0]), !1
        }
        d(s), j(), i();
        for (var A = w(), B = function (b) {
            var c = b || a.event, d = c.target || c.srcElement, f = -1 !== d.className.indexOf("confirm"), g = y(A, "visible"), h = s.doneFunction && "true" === A.getAttribute("data-has-done-function");
            switch (c.type) {
                case"mouseover":
                    f && (d.style.backgroundColor = e(s.confirmButtonColor, -.04));
                    break;
                case"mouseout":
                    f && (d.style.backgroundColor = s.confirmButtonColor);
                    break;
                case"mousedown":
                    f && (d.style.backgroundColor = e(s.confirmButtonColor, -.14));
                    break;
                case"mouseup":
                    f && (d.style.backgroundColor = e(s.confirmButtonColor, -.04));
                    break;
                case"focus":
                    var i = A.querySelector("button.confirm"), j = A.querySelector("button.cancel");
                    f ? j.style.boxShadow = "none" : i.style.boxShadow = "none";
                    break;
                case"click":
                    if (f && h && g)s.doneFunction(!0), s.closeOnConfirm && q.close(); else if (h && g) {
                        var k = String(s.doneFunction).replace(/\s/g, ""), l = "function(" === k.substring(0, 9) && ")" !== k.substring(9, 10);
                        l && s.doneFunction(!1), s.closeOnCancel && q.close()
                    } else q.close()
            }
        }, C = A.querySelectorAll("button"), D = 0; D < C.length; D++)C[D].onclick = B, C[D].onmouseover = B, C[D].onmouseout = B, C[D].onmousedown = B, C[D].onfocus = B;
        n = b.onclick, b.onclick = function (b) {
            var c = b || a.event, d = c.target || c.srcElement, e = A === d, f = G(A, d), g = y(A, "visible"), h = "true" === A.getAttribute("data-allow-ouside-click");
            !e && !f && g && h && q.close()
        };
        var E = A.querySelector("button.confirm"), F = A.querySelector("button.cancel"), H = A.querySelectorAll("button[tabindex]");
        o = a.onkeydown, a.onkeydown = k, E.onblur = m, F.onblur = m, a.onfocus = function () {
            a.setTimeout(function () {
                p !== c && (p.focus(), p = c)
            }, 0)
        }
    }, q.setDefaults = r.setDefaults = function (a) {
        if (!a)throw new Error("userParams is required");
        if ("object" != typeof a)throw new Error("userParams has to be a object");
        f(v, a)
    }, q.close = r.close = function () {
        var d = w();
        J(x(), 5), J(d, 5), A(d, "showSweetAlert"), z(d, "hideSweetAlert"), A(d, "visible");
        var e = d.querySelector(".sa-icon.sa-success");
        A(e, "animate"), A(e.querySelector(".sa-tip"), "animateSuccessTip"), A(e.querySelector(".sa-long"), "animateSuccessLong");
        var f = d.querySelector(".sa-icon.sa-error");
        A(f, "animateErrorIcon"), A(f.querySelector(".sa-x-mark"), "animateXMark");
        var g = d.querySelector(".sa-icon.sa-warning");
        A(g, "pulseWarning"), A(g.querySelector(".sa-body"), "pulseWarningIns"), A(g.querySelector(".sa-dot"), "pulseWarningIns"), a.onkeydown = o, b.onclick = n, m && m.focus(), p = c, clearTimeout(d.timeout)
    }, "function" == typeof define && define.amd ? define(function () {
        return q
    }) : "undefined" != typeof module && module.exports ? module.exports = q : "undefined" != typeof a && (a.sweetAlert = a.swal = q)
}(window, document);
var Geohash = new function () {
    var a = Math.round, b = Math.max, c = Math.pow, d = Math.log, e = "0123456789bcdefghjkmnpqrstuvwxyz", f = new RegExp("^[" + e + "]+$"), g = function () {
    };
    g.prototype = {
        minlat: -90, maxlat: 90, minlng: -180, maxlng: 180, halfLat: function () {
            return (this.minlat + this.maxlat) / 2
        }, halfLng: function () {
            return (this.minlng + this.maxlng) / 2
        }
    }, this.encode = function (a, d) {
        if (a instanceof Array && null == d && (d = a[1], a = a[0]), a *= 1, d *= 1, a !== a)throw new Error("Geohash.encode: lat must be a Number");
        if (d !== d)throw new Error("Geohash.encode: lng must be a Number");
        for (var f, h, i = a.toString().length - a.toFixed().length - 2, j = d.toString().length - a.toFixed().length - 2, k = c(10, -b(i, j, 0)) / 2, l = new g, m = [], n = 180, o = !0, p = 0, q = 4; n >= k;)if (o ? (f = l.halfLng(), d > f ? (p |= 1 << q, l.minlng = f) : l.maxlng = f) : (f = l.halfLat(), a > f ? (p |= 1 << q, l.minlat = f) : l.maxlat = f), o = !o, q)q--; else {
            if (h = n, n = b(l.maxlng - l.minlng, l.maxlat - l.minlat), h === n)break;
            m.push(e[p]), q = 4, p = 0
        }
        return m.join("")
    }, this.decode = function (h) {
        if (!f.test(h))throw new Error("Geohash.decode: hash must be a geohash string");
        for (var i = new g, j = 90, k = 180, l = function (a, b, c) {
            var d = 1 << a;
            !(1 & a) ^ !(1 & c) ? d & b ? i.minlat = i.halfLat() : i.maxlat = i.halfLat() : d & b ? i.minlng = i.halfLng() : i.maxlng = i.halfLng()
        }, m = 0, n = h.length; n > m; m++) {
            for (var o = e.indexOf(h[m]), p = 1 & m, q = 4; q >= 0; q--)l(q, o, p);
            p ? (j /= 8, k /= 4) : (j /= 4, k /= 8)
        }
        var r = c(10, b(1, -a(d(j) / d(10))) - 1), s = c(10, b(1, -a(d(k) / d(10))) - 1);
        return [a(i.halfLat() * r) / r, a(i.halfLng() * s) / s]
    }
};
(function () {
    "use strict";
    var a = function () {
        for (var a = "", b = 0; 4 > b; b++)a += "0000000".concat(Math.floor(2821109907456 * Math.random()).toString(36)).slice(-8);
        return a
    }, b = "", c = "", d = function (a, b) {
        this.type = a || "UNKNOWN", this.params = b || {}
    };
    d.prototype.bindData = function () {
        var a = function () {
        };
        a.prototype = this.params;
        for (var b = new a, c = 0; c < arguments.length; c++) {
            var e = arguments[c];
            for (var f in e)b[f] = e[f]
        }
        return new d(this.type, b)
    }, d.prototype.bindType = function (a) {
        return new d(a, this.params)
    }, d.prototype.bind = function () {
        var a = Array.prototype.slice.call(arguments), b = "string" == typeof a[0] ? a.shift() : this.type, c = this.bindData.apply(this, a).params;
        return new d(b, c)
    }, d.prototype.send = function () {
        var d, f = this.bind.apply(this, arguments), g = f.params, h = g.type = f.type;
        "PV" === h ? (d = c, e.params.pvhash = a()) : d = b;
        for (var i in g) {
            var j = g[i];
            "function" == typeof j ? g[i] = j() : g[i] = g[i]
        }
        var k = encodeURIComponent(JSON.stringify(g));
        (new Image).src = d + "?" + k
    };
    var e = new d("DEFAULT", new function () {
        if (this.ssid = document.cookie.match(/(?:^|; )ubt_ssid=(.*?)(?:; |$)|$/)[1], !this.ssid) {
            var b = new Date((new Date).getTime() + 288e5);
            this.ssid = a() + "_" + [b.getUTCFullYear(), b.getUTCMonth() + 1, b.getUTCDate()].join("-").replace(/\b\d\b/g, "0$&");
            var c = document.domain.match(/[\w-]+\.?[\w-]+$/)[0];
            document.cookie = "ubt_ssid=" + this.ssid + "; Expires=Wed, 31 Dec 2098 16:00:00 GMT; Domain=" + c + "; Path=/"
        }
        this.timestamp = function () {
            return (new Date).getTime().toString(36)
        }
    }), f = document.documentElement;
    e.send("PV", {
        resolution: Math.max(f.clientWidth, window.innerWidth || 0) + "x" + Math.max(f.clientHeight, window.innerHeight || 0),
        location: location.href,
        referrer: document.referrer
    });
    var g = function (a, b, c) {
        var d = function (a) {
            a = a || event;
            var b = {target: a.target || a.srcElement};
            c.call(b.target, b)
        };
        a.addEventListener ? a.addEventListener(b, d, !0) : a.attachEvent && a.attachEvent("on" + b, d)
    }, h = function () {
        setTimeout(function () {
            for (var a = performance.timing, b = ["fetchStart", "connectEnd", "connectStart", "domComplete", "domContentLoadedEventEnd", "domContentLoadedEventStart", "domInteractive", "domLoading", "domainLookupEnd", "domainLookupStart", "loadEventEnd", "loadEventStart", "requestStart", "responseEnd", "responseStart"], c = {}, d = 0; d < b.length; d++)c[b[d]] = a[b[d]] - a.navigationStart;
            e.send("TIMING", c)
        })
    };
    window.performance && window.performance.timing && g(window, "load", h);
    var i = function (a) {
        return void 0 === a && (a = null), "string" != typeof a ? a : String(a).replace(/^\s*|\s*$/g, "").replace(/\s+/g, " ").replace(/^(.{7})(.{7,})(.{7})$/, function (a, b, c, d) {
            return b + "(" + c.length + ")" + d
        })
    }, j = function (a, b) {
        for (var c = a; c && 1 === c.nodeType && b(c) !== !1; c = c.parentNode);
    }, k = function (a) {
        var b;
        "INPUT" === a.tagName && (b = a.id && document.querySelector('[for="' + a.id + '"]'), b || j(a, function (a) {
            return "LABEL" === a.tagName || a.hasAttribute("ubt-label") ? (b = a, !1) : void 0
        }), b && (a = b));
        var c;
        return /TEXTAREA|SELECT/.test(a.tagName) || (c = String(a.textContent || a.innerText || "").replace(/^\s+|\s+$/g, "")), c || a.title || a.alt || a.name || a.getAttribute("placeholder")
    }, l = function (a) {
        var b;
        switch (a.tagName) {
            case"A":
                return a.getAttribute("href");
            case"INPUT":
                if (/checkbox|radio/.test(a.type))return a.checked;
            case"TEXTAREA":
                return a.value;
            case"SELECT":
                for (var c = a.getElementsByTagName("option"), d = 0; d < c.length; d++)if (c[d].selected)return c[d].hasAttribute("value") ? c[d].getAttribute("value") : c[d].innerHTML;
                return null;
            default:
                if ("LABEL" === a.tagName || a.hasAttribute("ubt-label")) {
                    var e = a.getAttribute("for"), b = e ? document.getElementById(e) : a.querySelector("input,textarea");
                    return b ? l(b) : null
                }
        }
    }, m = "ubt-click", n = function (a) {
        var b = a.getAttribute(m), c = l(a), d = k(a);
        e.send("EVENT", {name: b, action: "click", message: i(d), value: i(c)})
    };
    g(document, "click", function (a) {
        var b = a.target;
        "LABEL" === b.tagName && b.querySelector("input,textarea") || j(b, function (a) {
            a.hasAttribute(m) && n(a)
        })
    });
    var o = "ubt-change", p = o + "-installed", q = function (a, b) {
        g(a, "change", function (a) {
            var c = l(a.target), d = k(a.target);
            e.send("EVENT", {name: b, action: "change", value: i(c), message: i(d)})
        })
    }, r = ["input", "textarea", "select"], s = function (a) {
        a[p] || (a[p] = !0, q(a, a.getAttribute(o)))
    }, t = function (a) {
        var b = a.target;
        if (!new RegExp(r.join("|"), "i").test(b.tagName)) {
            var c = "LABEL" === b.tagName && b;
            if (c || j(b, function (a) {
                    return c = "LABEL" === a.tagName && a, c ? !1 : void 0
                }), c)var d = c.getAttribute("for"), b = d ? document.getElementById(d) : c.querySelector(r)
        }
        b && b.hasAttribute(o) && s(b)
    };
    g(document, "mousedown", t), g(document, "keydown", t);
    var u = {}, v = 10, w = function (a) {
        !a || u[a] || 0 >= v || (e.send("JSERROR", {message: a}), u[a] = !0, v--)
    };
    window.addEventListener ? addEventListener("error", function (a) {
        w(a.error && a.error.stack)
    }) : window.attachEvent && attachEvent("onerror", function (a, b, c) {
        w([a, "url: " + b, "line: " + c].join("\r\n"))
    }), void function () {
        switch (!0) {
            case"object" == typeof angular && "function" == typeof angular.module:
                return angular.module("UBT", []).factory("UBT", function () {
                    return e
                });
            default:
                [eval][0]("var UBT"), window.UBT = e
        }
    }()
}).call(this), void function () {
    var a = function () {
        var a = [], b = function (a, b) {
            return a.test ? a.test(b) : a === b
        };
        return a.solve = function (c, d, e, f, g, h, i) {
            var j = function (d) {
                var e = a[d];
                if (!e)return h();
                var k = function (a) {
                    switch (a) {
                        case!0:
                            return j(-1);
                        case!1:
                            return i();
                        default:
                            j(d + 1)
                    }
                };
                if ("function" != typeof e[c])return k();
                if (!b(e.method, f.method))return k();
                if (!b(e.url, f.url))return k();
                var l = e[c].call(null, f, g);
                l && "function" == typeof l.then ? l.then(k) : k(l)
            };
            j(0)
        }, a
    };
    angular.module("httphook", ["httphook.provider"], ["$httpBackendProvider", "httphookProvider", function (a, b) {
        var c = a.$get.splice(-1, 1, function () {
            var a = c.apply(this, arguments);
            return function (c, d, e, f, g, h, i) {
                b.trigger({method: c, url: d, data: e, callback: f, headers: g, timeout: h, withCredentials: i}, a)
            }
        })[0]
    }]), angular.module("httphook.provider", []).provider("httphook", function () {
        var b = new a;
        this.trigger = function (a, c) {
            var d = angular.copy(a), e = {status: 204, data: null, headers: "", statusText: "OK"};
            delete d.callback;
            var f = function (c, f, g, h) {
                e.status = c, e.data = f, e.headers = g, e.statusText = h, b.solve("resHandler", a.method, a.url, d, e, function () {
                    a.callback(e.status, e.data, e.headers, e.statusText)
                }, angular.noop)
            };
            b.solve("reqHandler", a.method, a.url, d, e, function () {
                c(d.method, d.url, d.data, f, d.headers, d.timeout, d.withCredentials)
            }, function () {
                f(e.status, e.data, e.headers, e.statusText)
            })
        }, this.$get = [function () {
            var a = function (c, d, e, f) {
                return b.push({method: c, url: d, reqHandler: e, resHandler: f}), a
            };
            return a.get = angular.bind(null, a, "GET"), a.post = angular.bind(null, a, "POST"), a.put = angular.bind(null, a, "PUT"), a["delete"] = angular.bind(null, a, "DELETE"), a
        }]
    })
}(), function (a, b, c) {
    "undefined" != typeof module && module.exports ? module.exports = c() : "function" == typeof define && define.amd ? define(c) : b[a] = c()
}("Fingerprint", this, function () {
    "use strict";
    var a = function (a) {
        var b = document.createElement("canvas");
        this.canvas = !(!b.getContext || !b.getContext("2d")), this.ielt11 = "Microsoft Internet Explorer" === navigator.appName
    };
    return a.prototype = {
        get: function () {
            return {
                plugins: this.getPlugins(),
                canvasFingerprintHash: this.getCanvasFingerprintHash(),
                resolution: this.getScreenResolution(),
                userAgent: navigator.userAgent,
                language: navigator.language,
                colorDepth: screen.colorDepth,
                timezone: (new Date).getTimezoneOffset(),
                cpuClass: navigator.cpuClass,
                platform: navigator.platform,
                hasSessionStorage: this.hasSessionStorage(),
                hasLocalStorage: this.hasLocalStorage(),
                hasIndexedDB: !!window.indexedDB,
                hasWebSQL: !!window.openDatabase
            }
        }, getHash: function () {
            var a = JSON.stringify(this.get());
            return this.hasher ? this.hasher(a, 31) : this.murmurhash3_32_gc(a, 31)
        }, murmurhash3_32_gc: function (a, b) {
            var c, d, e, f, g, h, i, j;
            for (c = 3 & a.length, d = a.length - c, e = b, g = 3432918353, h = 461845907, j = 0; d > j;)i = 255 & a.charCodeAt(j) | (255 & a.charCodeAt(++j)) << 8 | (255 & a.charCodeAt(++j)) << 16 | (255 & a.charCodeAt(++j)) << 24, ++j, i = (65535 & i) * g + (((i >>> 16) * g & 65535) << 16) & 4294967295, i = i << 15 | i >>> 17, i = (65535 & i) * h + (((i >>> 16) * h & 65535) << 16) & 4294967295, e ^= i, e = e << 13 | e >>> 19, f = 5 * (65535 & e) + ((5 * (e >>> 16) & 65535) << 16) & 4294967295, e = (65535 & f) + 27492 + (((f >>> 16) + 58964 & 65535) << 16);
            switch (i = 0, c) {
                case 3:
                    i ^= (255 & a.charCodeAt(j + 2)) << 16;
                case 2:
                    i ^= (255 & a.charCodeAt(j + 1)) << 8;
                case 1:
                    i ^= 255 & a.charCodeAt(j), i = (65535 & i) * g + (((i >>> 16) * g & 65535) << 16) & 4294967295, i = i << 15 | i >>> 17, i = (65535 & i) * h + (((i >>> 16) * h & 65535) << 16) & 4294967295, e ^= i
            }
            return e ^= a.length, e ^= e >>> 16, e = 2246822507 * (65535 & e) + ((2246822507 * (e >>> 16) & 65535) << 16) & 4294967295, e ^= e >>> 13, e = 3266489909 * (65535 & e) + ((3266489909 * (e >>> 16) & 65535) << 16) & 4294967295, e ^= e >>> 16, e >>> 0
        }, hasLocalStorage: function () {
            try {
                return !!window.localStorage
            } catch (a) {
                return !0
            }
        }, hasSessionStorage: function () {
            try {
                return !!window.sessionStorage
            } catch (a) {
                return !0
            }
        }, getPlugins: function () {
            return this.ielt11 ? this.getIEPlugins() : this.getRegularPlugins()
        }, getPluginsString: function () {
            return this.getPlugins().join(";")
        }, getRegularPlugins: function () {
            for (var a = {}, b = 0; b < navigator.plugins.length; b++) {
                for (var c = navigator.plugins[b], d = {}, e = 0; e < c.length; e++)d[c[e].type] = c[e].suffixes;
                a[c.name + "::" + c.description] = d
            }
            return a
        }, getRegularPluginsString: function () {
            return this.getRegularPlugins().join(";")
        }, getIEPluginsString: function () {
            return getIEPlugins().join(";")
        }, getIEPlugins: function () {
            for (var a = ["ShockwaveFlash.ShockwaveFlash", "AcroPDF.PDF", "PDF.PdfCtrl", "QuickTime.QuickTime", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer", "SWCtl.SWCtl", "WMPlayer.OCX", "AgControl.AgControl", "Skype.Detection"], b = {}, c = 0; c < a.length; c++)try {
                new ActiveXObject(name), b.push(name)
            } catch (d) {
            }
            return b
        }, getScreenResolution: function () {
            var a;
            return a = this.screen_orientation ? screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height] : [screen.height, screen.width]
        }, getCanvasFingerprint: function () {
            if (!this.canvas)return "";
            var a = document.createElement("canvas"), b = a.getContext("2d"), c = "http://valve.github.io";
            return b.textBaseline = "top", b.font = "14px 'Arial'", b.textBaseline = "alphabetic", b.fillStyle = "#f60", b.fillRect(125, 1, 62, 20), b.fillStyle = "#069", b.fillText(c, 2, 15), b.fillStyle = "rgba(102, 204, 0, 0.7)", b.fillText(c, 4, 17), a.toDataURL()
        }, getCanvasFingerprintHash: function () {
            return this.murmurhash3_32_gc(this.getCanvasFingerprint(), 31)
        }
    }, a
}), angular.module("angular-carousel", ["ngTouch", "angular-carousel.shifty"]), angular.module("angular-carousel").directive("rnCarouselAutoSlide", ["$interval", function (a) {
    return {
        restrict: "A", link: function (b, c, d) {
            var e = function () {
                b.autoSlider && (a.cancel(b.autoSlider), b.autoSlider = null)
            }, f = function () {
                b.autoSlide()
            };
            b.$watch("carouselIndex", f), d.hasOwnProperty("rnCarouselPauseOnHover") && "false" !== d.rnCarouselPauseOnHover && (c.on("mouseenter", e), c.on("mouseleave", f)), b.$on("$destroy", function () {
                e(), c.off("mouseenter", e), c.off("mouseleave", f)
            })
        }
    }
}]), angular.module("angular-carousel").directive("rnCarouselIndicators", ["$parse", function (a) {
    return {
        restrict: "A",
        scope: {slides: "=", index: "=rnCarouselIndex"},
        templateUrl: "carousel-indicators.html",
        link: function (b, c, d) {
            var e = a(d.rnCarouselIndex);
            b.goToSlide = function (a) {
                e.assign(b.$parent.$parent, a)
            }
        }
    }
}]), angular.module("angular-carousel").run(["$templateCache", function (a) {
    a.put("carousel-indicators.html", '<div class="rn-carousel-indicator">\n<span ng-repeat="slide in slides" ng-class="{active: $index==index}" ng-click="goToSlide($index)">●</span></div>')
}]), function () {
    "use strict";
    angular.module("angular-carousel").service("DeviceCapabilities", function () {
        function a() {
            var a = "transform", b = "webkitTransform";
            return "undefined" != typeof document.body.style[a] ? ["webkit", "moz", "o", "ms"].every(function (b) {
                var c = "-" + b + "-transform";
                return "undefined" != typeof document.body.style[c] ? (a = c, !1) : !0
            }) : a = "undefined" != typeof document.body.style[b] ? "-webkit-transform" : void 0, a
        }

        function b() {
            var a, b = document.createElement("p"), c = {
                webkitTransform: "-webkit-transform",
                msTransform: "-ms-transform",
                transform: "transform"
            };
            document.body.insertBefore(b, null);
            for (var d in c)void 0 !== b.style[d] && (b.style[d] = "translate3d(1px,1px,1px)", a = window.getComputedStyle(b).getPropertyValue(c[d]));
            return document.body.removeChild(b), void 0 !== a && a.length > 0 && "none" !== a
        }

        return {has3d: b(), transformProperty: a()}
    }).service("computeCarouselSlideStyle", ["DeviceCapabilities", function (a) {
        return function (b, c, d) {
            var e, f = {display: "inline-block"}, g = 100 * b + c, h = a.has3d ? "translate3d(" + g + "%, 0, 0)" : "translate3d(" + g + "%, 0)", i = (100 - Math.abs(g)) / 100;
            if (a.transformProperty)if ("fadeAndSlide" == d)f[a.transformProperty] = h, e = 0, Math.abs(g) < 100 && (e = .3 + .7 * i), f.opacity = e; else if ("hexagon" == d) {
                var j = 100, k = 0, l = 60 * (i - 1);
                j = -100 * b > c ? 100 : 0, k = -100 * b > c ? l : -l, f[a.transformProperty] = h + " rotateY(" + k + "deg)", f[a.transformProperty + "-origin"] = j + "% 50%"
            } else if ("zoom" == d) {
                f[a.transformProperty] = h;
                var m = 1;
                Math.abs(g) < 100 && (m = 1 + 2 * (1 - i)), f[a.transformProperty] += " scale(" + m + ")", f[a.transformProperty + "-origin"] = "50% 50%", e = 0, Math.abs(g) < 100 && (e = .3 + .7 * i), f.opacity = e
            } else f[a.transformProperty] = h; else f["margin-left"] = g + "%";
            return f
        }
    }]).service("createStyleString", function () {
        return function (a) {
            var b = [];
            return angular.forEach(a, function (a, c) {
                b.push(c + ":" + a)
            }), b.join(";")
        }
    }).directive("rnCarousel", ["$swipe", "$window", "$document", "$parse", "$compile", "$timeout", "$interval", "computeCarouselSlideStyle", "createStyleString", "Tweenable", function (a, b, c, d, e, f, g, h, i, j) {
        function k(a, b, c) {
            var d = c;
            return a.every(function (a, c) {
                return angular.equals(a, b) ? (d = c, !1) : !0
            }), d
        }

        var l = 0;
        b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame;
        return {
            restrict: "A", scope: !0, compile: function (m, n) {
                var o, p, q = m[0].querySelector("li"), r = q ? q.attributes : [], s = !1, t = !1;
                return ["ng-repeat", "data-ng-repeat", "ng:repeat", "x-ng-repeat"].every(function (a) {
                    var b = r[a];
                    if (angular.isDefined(b)) {
                        var c = b.value.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/), d = c[3];
                        if (o = c[1], p = c[2], o)return angular.isDefined(n.rnCarouselBuffered) && (t = !0, b.value = o + " in " + p + "|carouselSlice:carouselBufferIndex:carouselBufferSize", d && (b.value += " track by " + d)), s = !0, !1
                    }
                    return !0
                }), function (m, n, o, q) {
                    function r() {
                        return n[0].querySelectorAll("ul[rn-carousel] > li")
                    }

                    function u(a) {
                        N = !0, D({x: a.clientX, y: a.clientY}, a)
                    }

                    function v(a) {
                        var b = 100 * m.carouselBufferIndex + a;
                        angular.forEach(r(), function (a, c) {
                            a.style.cssText = i(h(c, b, K.transitionType))
                        })
                    }

                    function w(a, b) {
                        if (void 0 === a && (a = m.carouselIndex), b = b || {}, b.animate === !1 || "none" === K.transitionType)return S = !1, M = -100 * a, m.carouselIndex = a, void E();
                        S = !0;
                        var c = new j;
                        c.tween({
                            from: {x: M},
                            to: {x: -100 * a},
                            duration: K.transitionDuration,
                            easing: K.transitionEasing,
                            step: function (a) {
                                v(a.x)
                            },
                            finish: function () {
                                m.$apply(function () {
                                    m.carouselIndex = a, M = -100 * a, E(), f(function () {
                                        S = !1
                                    }, 0, !1)
                                })
                            }
                        })
                    }

                    function x() {
                        var a = n[0].getBoundingClientRect();
                        return a.width ? a.width : a.right - a.left
                    }

                    function y() {
                        P = x()
                    }

                    function z() {
                        R || (R = !0, c.bind("mouseup", u))
                    }

                    function A() {
                        R && (R = !1, c.unbind("mouseup", u))
                    }

                    function B(a, b) {
                        return S || O.length <= 1 ? void 0 : (y(), Q = n[0].querySelector("li").getBoundingClientRect().left, G = !0, H = a.x, !1)
                    }

                    function C(a, b) {
                        var c, d;
                        if (z(), G && (c = a.x, d = H - c, d > 2 || -2 > d)) {
                            N = !0;
                            var e = M + 100 * -d / P;
                            v(e)
                        }
                        return !1
                    }

                    function D(a, b, c) {
                        if ((!b || N) && (A(), G = !1, N = !1, I = H - a.x, 0 !== I && !S))if (M += 100 * -I / P, K.isSequential) {
                            var d = K.moveTreshold * P, e = -I, f = -Math[e >= 0 ? "ceil" : "floor"](e / P), g = Math.abs(e) > d;
                            O && f + m.carouselIndex >= O.length && (f = O.length - 1 - m.carouselIndex), f + m.carouselIndex < 0 && (f = -m.carouselIndex);
                            var h = g ? f : 0;
                            I = m.carouselIndex + h, w(I)
                        } else m.$apply(function () {
                            m.carouselIndex = parseInt(-M / 100, 10), E()
                        })
                    }

                    function E() {
                        var a = 0, b = (m.carouselBufferSize - 1) / 2;
                        t ? (a = m.carouselIndex <= b ? 0 : O && O.length < m.carouselBufferSize ? 0 : O && m.carouselIndex > O.length - m.carouselBufferSize ? O.length - m.carouselBufferSize : m.carouselIndex - b, m.carouselBufferIndex = a, f(function () {
                            v(M)
                        }, 0, !1)) : f(function () {
                            v(M)
                        }, 0, !1)
                    }

                    function F() {
                        y(), w()
                    }

                    l++;
                    var G, H, I, J = {
                        transitionType: o.rnCarouselTransition || "slide",
                        transitionEasing: o.rnCarouselEasing || "easeTo",
                        transitionDuration: parseInt(o.rnCarouselDuration, 10) || 300,
                        isSequential: !0,
                        autoSlideDuration: 3,
                        bufferSize: 5,
                        moveTreshold: .1
                    }, K = angular.extend({}, J), L = !1, M = 0, N = !1, O = [], P = null, Q = null, R = !1, S = !1;
                    a.bind(n, {
                        start: B, move: C, end: D, cancel: function (a) {
                            D({}, a)
                        }
                    }), m.nextSlide = function (a) {
                        var b = m.carouselIndex + 1;
                        b > O.length - 1 && (b = 0), S || w(b, a)
                    }, m.prevSlide = function (a) {
                        var b = m.carouselIndex - 1;
                        0 > b && (b = O.length - 1), w(b, a)
                    };
                    var T = !0;
                    if (m.carouselIndex = 0, s || (O = [], angular.forEach(r(), function (a, b) {
                            O.push({id: b})
                        })), void 0 !== o.rnCarouselControls) {
                        var U = s ? p.replace("::", "") + ".length - 1" : O.length - 1, V = '<div class="rn-carousel-controls">\n  <span class="rn-carousel-control rn-carousel-control-prev" ng-click="prevSlide()" ng-if="carouselIndex > 0"></span>\n  <span class="rn-carousel-control rn-carousel-control-next" ng-click="nextSlide()" ng-if="carouselIndex < ' + U + '"></span>\n</div>';
                        n.append(e(angular.element(V))(m))
                    }
                    if (void 0 !== o.rnCarouselAutoSlide) {
                        var W = parseInt(o.rnCarouselAutoSlide, 10) || K.autoSlideDuration;
                        m.autoSlide = function () {
                            m.autoSlider && (g.cancel(m.autoSlider), m.autoSlider = null), m.autoSlider = g(function () {
                                S || G || m.nextSlide()
                            }, 1e3 * W)
                        }
                    }
                    if (o.rnCarouselIndex) {
                        var X = function (a) {
                            Y.assign(m.$parent, a)
                        }, Y = d(o.rnCarouselIndex);
                        angular.isFunction(Y.assign) ? (m.$watch("carouselIndex", function (a) {
                            X(a)
                        }), m.$parent.$watch(Y, function (a, b) {
                            void 0 !== a && null !== a && (O && a >= O.length ? (a = O.length - 1, X(a)) : O && 0 > a && (a = 0, X(a)), S || w(a, {animate: !T}), T = !1)
                        }), L = !0) : isNaN(o.rnCarouselIndex) || w(parseInt(o.rnCarouselIndex, 10), {animate: !1})
                    } else w(0, {animate: !T}), T = !1;
                    if (o.rnCarouselLocked && m.$watch(o.rnCarouselLocked, function (a, b) {
                            S = a === !0 ? !0 : !1
                        }), s) {
                        var Z = void 0 !== o.rnCarouselDeepWatch;
                        m[Z ? "$watch" : "$watchCollection"](p, function (a, b) {
                            if (O = a, Z && angular.isArray(a)) {
                                var c = b[m.carouselIndex], d = k(a, c, m.carouselIndex);
                                w(d, {animate: !1})
                            } else w(m.carouselIndex, {animate: !1})
                        }, !0)
                    }
                    m.$on("$destroy", function () {
                        A()
                    }), m.carouselBufferIndex = 0, m.carouselBufferSize = K.bufferSize;
                    var $ = angular.element(b);
                    $.bind("orientationchange", F), $.bind("resize", F), m.$on("$destroy", function () {
                        A(), $.unbind("orientationchange", F),
                            $.unbind("resize", F)
                    })
                }
            }
        }
    }])
}(), angular.module("angular-carousel.shifty", []).factory("Tweenable", function () {
    return function (a) {
        var b = function () {
            "use strict";
            function b() {
            }

            function c(a, b) {
                var c;
                for (c in a)Object.hasOwnProperty.call(a, c) && b(c)
            }

            function d(a, b) {
                return c(b, function (c) {
                    a[c] = b[c]
                }), a
            }

            function e(a, b) {
                c(b, function (c) {
                    "undefined" == typeof a[c] && (a[c] = b[c])
                })
            }

            function f(a, b, c, d, e, f, h) {
                var i, j = (a - f) / e;
                for (i in b)b.hasOwnProperty(i) && (b[i] = g(c[i], d[i], l[h[i]], j));
                return b
            }

            function g(a, b, c, d) {
                return a + (b - a) * c(d)
            }

            function h(a, b) {
                var d = k.prototype.filter, e = a._filterArgs;
                c(d, function (c) {
                    "undefined" != typeof d[c][b] && d[c][b].apply(a, e)
                })
            }

            function i(a, b, c, d, e, g, i, j, k) {
                s = b + c, t = Math.min(r(), s), u = t >= s, v = c - (s - t), a.isPlaying() && !u ? (a._scheduleId = k(a._timeoutHandler, p), h(a, "beforeTween"), f(t, d, e, g, c, b, i), h(a, "afterTween"), j(d, a._attachment, v)) : u && (j(g, a._attachment, v), a.stop(!0))
            }

            function j(a, b) {
                var d = {};
                return "string" == typeof b ? c(a, function (a) {
                    d[a] = b
                }) : c(a, function (a) {
                    d[a] || (d[a] = b[a] || n)
                }), d
            }

            function k(a, b) {
                this._currentState = a || {}, this._configured = !1, this._scheduleFunction = m, "undefined" != typeof b && this.setConfig(b)
            }

            var l, m, n = "linear", o = 500, p = 1e3 / 60, q = Date.now ? Date.now : function () {
                return +new Date
            }, r = "undefined" != typeof SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : q;
            m = "undefined" != typeof window ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.mozCancelRequestAnimationFrame && window.mozRequestAnimationFrame || setTimeout : setTimeout;
            var s, t, u, v;
            return k.prototype.tween = function (a) {
                return this._isTweening ? this : (void 0 === a && this._configured || this.setConfig(a), this._timestamp = r(), this._start(this.get(), this._attachment), this.resume())
            }, k.prototype.setConfig = function (a) {
                a = a || {}, this._configured = !0, this._attachment = a.attachment, this._pausedAtTime = null, this._scheduleId = null, this._start = a.start || b, this._step = a.step || b, this._finish = a.finish || b, this._duration = a.duration || o, this._currentState = a.from || this.get(), this._originalState = this.get(), this._targetState = a.to || this.get();
                var c = this._currentState, d = this._targetState;
                return e(d, c), this._easing = j(c, a.easing || n), this._filterArgs = [c, this._originalState, d, this._easing], h(this, "tweenCreated"), this
            }, k.prototype.get = function () {
                return d({}, this._currentState)
            }, k.prototype.set = function (a) {
                this._currentState = a
            }, k.prototype.pause = function () {
                return this._pausedAtTime = r(), this._isPaused = !0, this
            }, k.prototype.resume = function () {
                this._isPaused && (this._timestamp += r() - this._pausedAtTime), this._isPaused = !1, this._isTweening = !0;
                var a = this;
                return this._timeoutHandler = function () {
                    i(a, a._timestamp, a._duration, a._currentState, a._originalState, a._targetState, a._easing, a._step, a._scheduleFunction)
                }, this._timeoutHandler(), this
            }, k.prototype.seek = function (a) {
                return this._timestamp = r() - a, this.isPlaying() || (this._isTweening = !0, this._isPaused = !1, i(this, this._timestamp, this._duration, this._currentState, this._originalState, this._targetState, this._easing, this._step, this._scheduleFunction), this._timeoutHandler(), this.pause()), this
            }, k.prototype.stop = function (c) {
                return this._isTweening = !1, this._isPaused = !1, this._timeoutHandler = b, (a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.oCancelAnimationFrame || a.msCancelAnimationFrame || a.mozCancelRequestAnimationFrame || a.clearTimeout)(this._scheduleId), c && (d(this._currentState, this._targetState), h(this, "afterTweenEnd"), this._finish.call(this, this._currentState, this._attachment)), this
            }, k.prototype.isPlaying = function () {
                return this._isTweening && !this._isPaused
            }, k.prototype.setScheduleFunction = function (a) {
                this._scheduleFunction = a
            }, k.prototype.dispose = function () {
                var a;
                for (a in this)this.hasOwnProperty(a) && delete this[a]
            }, k.prototype.filter = {}, k.prototype.formula = {
                linear: function (a) {
                    return a
                }
            }, l = k.prototype.formula, d(k, {
                now: r,
                each: c,
                tweenProps: f,
                tweenProp: g,
                applyFilter: h,
                shallowCopy: d,
                defaults: e,
                composeEasingObject: j
            }), a.Tweenable = k, k
        }();
        !function () {
            b.shallowCopy(b.prototype.formula, {
                easeInQuad: function (a) {
                    return Math.pow(a, 2)
                }, easeOutQuad: function (a) {
                    return -(Math.pow(a - 1, 2) - 1)
                }, easeInOutQuad: function (a) {
                    return (a /= .5) < 1 ? .5 * Math.pow(a, 2) : -.5 * ((a -= 2) * a - 2)
                }, easeInCubic: function (a) {
                    return Math.pow(a, 3)
                }, easeOutCubic: function (a) {
                    return Math.pow(a - 1, 3) + 1
                }, easeInOutCubic: function (a) {
                    return (a /= .5) < 1 ? .5 * Math.pow(a, 3) : .5 * (Math.pow(a - 2, 3) + 2)
                }, easeInQuart: function (a) {
                    return Math.pow(a, 4)
                }, easeOutQuart: function (a) {
                    return -(Math.pow(a - 1, 4) - 1)
                }, easeInOutQuart: function (a) {
                    return (a /= .5) < 1 ? .5 * Math.pow(a, 4) : -.5 * ((a -= 2) * Math.pow(a, 3) - 2)
                }, easeInQuint: function (a) {
                    return Math.pow(a, 5)
                }, easeOutQuint: function (a) {
                    return Math.pow(a - 1, 5) + 1
                }, easeInOutQuint: function (a) {
                    return (a /= .5) < 1 ? .5 * Math.pow(a, 5) : .5 * (Math.pow(a - 2, 5) + 2)
                }, easeInSine: function (a) {
                    return -Math.cos(a * (Math.PI / 2)) + 1
                }, easeOutSine: function (a) {
                    return Math.sin(a * (Math.PI / 2))
                }, easeInOutSine: function (a) {
                    return -.5 * (Math.cos(Math.PI * a) - 1)
                }, easeInExpo: function (a) {
                    return 0 === a ? 0 : Math.pow(2, 10 * (a - 1))
                }, easeOutExpo: function (a) {
                    return 1 === a ? 1 : -Math.pow(2, -10 * a) + 1
                }, easeInOutExpo: function (a) {
                    return 0 === a ? 0 : 1 === a ? 1 : (a /= .5) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (-Math.pow(2, -10 * --a) + 2)
                }, easeInCirc: function (a) {
                    return -(Math.sqrt(1 - a * a) - 1)
                }, easeOutCirc: function (a) {
                    return Math.sqrt(1 - Math.pow(a - 1, 2))
                }, easeInOutCirc: function (a) {
                    return (a /= .5) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
                }, easeOutBounce: function (a) {
                    return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                }, easeInBack: function (a) {
                    var b = 1.70158;
                    return a * a * ((b + 1) * a - b)
                }, easeOutBack: function (a) {
                    var b = 1.70158;
                    return (a -= 1) * a * ((b + 1) * a + b) + 1
                }, easeInOutBack: function (a) {
                    var b = 1.70158;
                    return (a /= .5) < 1 ? .5 * a * a * (((b *= 1.525) + 1) * a - b) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
                }, elastic: function (a) {
                    return -1 * Math.pow(4, -8 * a) * Math.sin(2 * (6 * a - 1) * Math.PI / 2) + 1
                }, swingFromTo: function (a) {
                    var b = 1.70158;
                    return (a /= .5) < 1 ? .5 * a * a * (((b *= 1.525) + 1) * a - b) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
                }, swingFrom: function (a) {
                    var b = 1.70158;
                    return a * a * ((b + 1) * a - b)
                }, swingTo: function (a) {
                    var b = 1.70158;
                    return (a -= 1) * a * ((b + 1) * a + b) + 1
                }, bounce: function (a) {
                    return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                }, bouncePast: function (a) {
                    return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 2 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 2 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 2 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
                }, easeFromTo: function (a) {
                    return (a /= .5) < 1 ? .5 * Math.pow(a, 4) : -.5 * ((a -= 2) * Math.pow(a, 3) - 2)
                }, easeFrom: function (a) {
                    return Math.pow(a, 4)
                }, easeTo: function (a) {
                    return Math.pow(a, .25)
                }
            })
        }(), function () {
            function a(a, b, c, d, e, f) {
                function g(a) {
                    return ((n * a + o) * a + p) * a
                }

                function h(a) {
                    return ((q * a + r) * a + s) * a
                }

                function i(a) {
                    return (3 * n * a + 2 * o) * a + p
                }

                function j(a) {
                    return 1 / (200 * a)
                }

                function k(a, b) {
                    return h(m(a, b))
                }

                function l(a) {
                    return a >= 0 ? a : 0 - a
                }

                function m(a, b) {
                    var c, d, e, f, h, j;
                    for (e = a, j = 0; 8 > j; j++) {
                        if (f = g(e) - a, l(f) < b)return e;
                        if (h = i(e), l(h) < 1e-6)break;
                        e -= f / h
                    }
                    if (c = 0, d = 1, e = a, c > e)return c;
                    if (e > d)return d;
                    for (; d > c;) {
                        if (f = g(e), l(f - a) < b)return e;
                        a > f ? c = e : d = e, e = .5 * (d - c) + c
                    }
                    return e
                }

                var n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
                return p = 3 * b, o = 3 * (d - b) - p, n = 1 - p - o, s = 3 * c, r = 3 * (e - c) - s, q = 1 - s - r, k(a, j(f))
            }

            function c(b, c, d, e) {
                return function (f) {
                    return a(f, b, c, d, e, 1)
                }
            }

            b.setBezierFunction = function (a, d, e, f, g) {
                var h = c(d, e, f, g);
                return h.x1 = d, h.y1 = e, h.x2 = f, h.y2 = g, b.prototype.formula[a] = h
            }, b.unsetBezierFunction = function (a) {
                delete b.prototype.formula[a]
            }
        }(), function () {
            function a(a, c, d, e, f) {
                return b.tweenProps(e, c, a, d, 1, 0, f)
            }

            var c = new b;
            c._filterArgs = [], b.interpolate = function (d, e, f, g) {
                var h = b.shallowCopy({}, d), i = b.composeEasingObject(d, g || "linear");
                c.set({});
                var j = c._filterArgs;
                j.length = 0, j[0] = h, j[1] = d, j[2] = e, j[3] = i, b.applyFilter(c, "tweenCreated"), b.applyFilter(c, "beforeTween");
                var k = a(d, h, e, f, i);
                return b.applyFilter(c, "afterTween"), k
            }
        }(), function (a) {
            function b(a, b) {
                B.length = 0;
                var c, d = a.length;
                for (c = 0; d > c; c++)B.push("_" + b + "_" + c);
                return B
            }

            function c(a) {
                var b = a.match(v);
                return b ? (1 === b.length || a[0].match(u)) && b.unshift("") : b = ["", ""], b.join(A)
            }

            function d(b) {
                a.each(b, function (a) {
                    var c = b[a];
                    "string" == typeof c && c.match(z) && (b[a] = e(c))
                })
            }

            function e(a) {
                return i(z, a, f)
            }

            function f(a) {
                var b = g(a);
                return "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")"
            }

            function g(a) {
                return a = a.replace(/#/, ""), 3 === a.length && (a = a.split(""), a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]), C[0] = h(a.substr(0, 2)), C[1] = h(a.substr(2, 2)), C[2] = h(a.substr(4, 2)), C
            }

            function h(a) {
                return parseInt(a, 16)
            }

            function i(a, b, c) {
                var d = b.match(a), e = b.replace(a, A);
                if (d)for (var f, g = d.length, h = 0; g > h; h++)f = d.shift(), e = e.replace(A, c(f));
                return e
            }

            function j(a) {
                return i(x, a, k)
            }

            function k(a) {
                for (var b = a.match(w), c = b.length, d = a.match(y)[0], e = 0; c > e; e++)d += parseInt(b[e], 10) + ",";
                return d = d.slice(0, -1) + ")"
            }

            function l(d) {
                var e = {};
                return a.each(d, function (a) {
                    var f = d[a];
                    if ("string" == typeof f) {
                        var g = r(f);
                        e[a] = {formatString: c(f), chunkNames: b(g, a)}
                    }
                }), e
            }

            function m(b, c) {
                a.each(c, function (a) {
                    for (var d = b[a], e = r(d), f = e.length, g = 0; f > g; g++)b[c[a].chunkNames[g]] = +e[g];
                    delete b[a]
                })
            }

            function n(b, c) {
                a.each(c, function (a) {
                    var d = b[a], e = o(b, c[a].chunkNames), f = p(e, c[a].chunkNames);
                    d = q(c[a].formatString, f), b[a] = j(d)
                })
            }

            function o(a, b) {
                for (var c, d = {}, e = b.length, f = 0; e > f; f++)c = b[f], d[c] = a[c], delete a[c];
                return d
            }

            function p(a, b) {
                D.length = 0;
                for (var c = b.length, d = 0; c > d; d++)D.push(a[b[d]]);
                return D
            }

            function q(a, b) {
                for (var c = a, d = b.length, e = 0; d > e; e++)c = c.replace(A, +b[e].toFixed(4));
                return c
            }

            function r(a) {
                return a.match(w)
            }

            function s(b, c) {
                a.each(c, function (a) {
                    for (var d = c[a], e = d.chunkNames, f = e.length, g = b[a].split(" "), h = g[g.length - 1], i = 0; f > i; i++)b[e[i]] = g[i] || h;
                    delete b[a]
                })
            }

            function t(b, c) {
                a.each(c, function (a) {
                    for (var d = c[a], e = d.chunkNames, f = e.length, g = "", h = 0; f > h; h++)g += " " + b[e[h]], delete b[e[h]];
                    b[a] = g.substr(1)
                })
            }

            var u = /(\d|\-|\.)/, v = /([^\-0-9\.]+)/g, w = /[0-9.\-]+/g, x = new RegExp("rgb\\(" + w.source + /,\s*/.source + w.source + /,\s*/.source + w.source + "\\)", "g"), y = /^.*\(/, z = /#([0-9]|[a-f]){3,6}/gi, A = "VAL", B = [], C = [], D = [];
            a.prototype.filter.token = {
                tweenCreated: function (a, b, c, e) {
                    d(a), d(b), d(c), this._tokenData = l(a)
                }, beforeTween: function (a, b, c, d) {
                    s(d, this._tokenData), m(a, this._tokenData), m(b, this._tokenData), m(c, this._tokenData)
                }, afterTween: function (a, b, c, d) {
                    n(a, this._tokenData), n(b, this._tokenData), n(c, this._tokenData), t(d, this._tokenData)
                }
            }
        }(b)
    }(window), window.Tweenable
}), function () {
    "use strict";
    angular.module("angular-carousel").filter("carouselSlice", function () {
        return function (a, b, c) {
            return angular.isArray(a) ? a.slice(b, b + c) : angular.isObject(a) ? a : void 0
        }
    })
}();