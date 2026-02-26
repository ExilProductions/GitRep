;(function () {
  const r = document.createElement('link').relList
  if (r && r.supports && r.supports('modulepreload')) return
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) c(f)
  new MutationObserver((f) => {
    for (const m of f)
      if (m.type === 'childList')
        for (const h of m.addedNodes) h.tagName === 'LINK' && h.rel === 'modulepreload' && c(h)
  }).observe(document, { childList: !0, subtree: !0 })
  function s(f) {
    const m = {}
    return (
      f.integrity && (m.integrity = f.integrity),
      f.referrerPolicy && (m.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === 'use-credentials'
        ? (m.credentials = 'include')
        : f.crossOrigin === 'anonymous'
          ? (m.credentials = 'omit')
          : (m.credentials = 'same-origin'),
      m
    )
  }
  function c(f) {
    if (f.ep) return
    f.ep = !0
    const m = s(f)
    fetch(f.href, m)
  }
})()
function Ah(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, 'default') ? i.default : i
}
var oo = { exports: {} },
  fu = {}
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $m
function zy() {
  if ($m) return fu
  $m = 1
  var i = Symbol.for('react.transitional.element'),
    r = Symbol.for('react.fragment')
  function s(c, f, m) {
    var h = null
    if ((m !== void 0 && (h = '' + m), f.key !== void 0 && (h = '' + f.key), 'key' in f)) {
      m = {}
      for (var y in f) y !== 'key' && (m[y] = f[y])
    } else m = f
    return ((f = m.ref), { $$typeof: i, type: c, key: h, ref: f !== void 0 ? f : null, props: m })
  }
  return ((fu.Fragment = r), (fu.jsx = s), (fu.jsxs = s), fu)
}
var Wm
function Ay() {
  return (Wm || ((Wm = 1), (oo.exports = zy())), oo.exports)
}
var E = Ay(),
  so = { exports: {} },
  le = {}
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fm
function Ny() {
  if (Fm) return le
  Fm = 1
  var i = Symbol.for('react.transitional.element'),
    r = Symbol.for('react.portal'),
    s = Symbol.for('react.fragment'),
    c = Symbol.for('react.strict_mode'),
    f = Symbol.for('react.profiler'),
    m = Symbol.for('react.consumer'),
    h = Symbol.for('react.context'),
    y = Symbol.for('react.forward_ref'),
    g = Symbol.for('react.suspense'),
    v = Symbol.for('react.memo'),
    T = Symbol.for('react.lazy'),
    b = Symbol.for('react.activity'),
    A = Symbol.iterator
  function Y(S) {
    return S === null || typeof S != 'object'
      ? null
      : ((S = (A && S[A]) || S['@@iterator']), typeof S == 'function' ? S : null)
  }
  var G = {
      isMounted: function () {
        return !1
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    q = Object.assign,
    B = {}
  function j(S, H, V) {
    ;((this.props = S), (this.context = H), (this.refs = B), (this.updater = V || G))
  }
  ;((j.prototype.isReactComponent = {}),
    (j.prototype.setState = function (S, H) {
      if (typeof S != 'object' && typeof S != 'function' && S != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        )
      this.updater.enqueueSetState(this, S, H, 'setState')
    }),
    (j.prototype.forceUpdate = function (S) {
      this.updater.enqueueForceUpdate(this, S, 'forceUpdate')
    }))
  function U() {}
  U.prototype = j.prototype
  function Z(S, H, V) {
    ;((this.props = S), (this.context = H), (this.refs = B), (this.updater = V || G))
  }
  var ee = (Z.prototype = new U())
  ;((ee.constructor = Z), q(ee, j.prototype), (ee.isPureReactComponent = !0))
  var $ = Array.isArray
  function re() {}
  var k = { H: null, A: null, T: null, S: null },
    Se = Object.prototype.hasOwnProperty
  function ne(S, H, V) {
    var Q = V.ref
    return { $$typeof: i, type: S, key: H, ref: Q !== void 0 ? Q : null, props: V }
  }
  function Xe(S, H) {
    return ne(S.type, H, S.props)
  }
  function Oe(S) {
    return typeof S == 'object' && S !== null && S.$$typeof === i
  }
  function P(S) {
    var H = { '=': '=0', ':': '=2' }
    return (
      '$' +
      S.replace(/[=:]/g, function (V) {
        return H[V]
      })
    )
  }
  var Qe = /\/+/g
  function Re(S, H) {
    return typeof S == 'object' && S !== null && S.key != null ? P('' + S.key) : H.toString(36)
  }
  function Ee(S) {
    switch (S.status) {
      case 'fulfilled':
        return S.value
      case 'rejected':
        throw S.reason
      default:
        switch (
          (typeof S.status == 'string'
            ? S.then(re, re)
            : ((S.status = 'pending'),
              S.then(
                function (H) {
                  S.status === 'pending' && ((S.status = 'fulfilled'), (S.value = H))
                },
                function (H) {
                  S.status === 'pending' && ((S.status = 'rejected'), (S.reason = H))
                }
              )),
          S.status)
        ) {
          case 'fulfilled':
            return S.value
          case 'rejected':
            throw S.reason
        }
    }
    throw S
  }
  function D(S, H, V, Q, te) {
    var ae = typeof S
    ;(ae === 'undefined' || ae === 'boolean') && (S = null)
    var oe = !1
    if (S === null) oe = !0
    else
      switch (ae) {
        case 'bigint':
        case 'string':
        case 'number':
          oe = !0
          break
        case 'object':
          switch (S.$$typeof) {
            case i:
            case r:
              oe = !0
              break
            case T:
              return ((oe = S._init), D(oe(S._payload), H, V, Q, te))
          }
      }
    if (oe)
      return (
        (te = te(S)),
        (oe = Q === '' ? '.' + Re(S, 0) : Q),
        $(te)
          ? ((V = ''),
            oe != null && (V = oe.replace(Qe, '$&/') + '/'),
            D(te, H, V, '', function (ll) {
              return ll
            }))
          : te != null &&
            (Oe(te) &&
              (te = Xe(
                te,
                V +
                  (te.key == null || (S && S.key === te.key)
                    ? ''
                    : ('' + te.key).replace(Qe, '$&/') + '/') +
                  oe
              )),
            H.push(te)),
        1
      )
    oe = 0
    var Ze = Q === '' ? '.' : Q + ':'
    if ($(S))
      for (var qe = 0; qe < S.length; qe++)
        ((Q = S[qe]), (ae = Ze + Re(Q, qe)), (oe += D(Q, H, V, ae, te)))
    else if (((qe = Y(S)), typeof qe == 'function'))
      for (S = qe.call(S), qe = 0; !(Q = S.next()).done; )
        ((Q = Q.value), (ae = Ze + Re(Q, qe++)), (oe += D(Q, H, V, ae, te)))
    else if (ae === 'object') {
      if (typeof S.then == 'function') return D(Ee(S), H, V, Q, te)
      throw (
        (H = String(S)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (H === '[object Object]' ? 'object with keys {' + Object.keys(S).join(', ') + '}' : H) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      )
    }
    return oe
  }
  function X(S, H, V) {
    if (S == null) return S
    var Q = [],
      te = 0
    return (
      D(S, Q, '', '', function (ae) {
        return H.call(V, ae, te++)
      }),
      Q
    )
  }
  function W(S) {
    if (S._status === -1) {
      var H = S._result
      ;((H = H()),
        H.then(
          function (V) {
            ;(S._status === 0 || S._status === -1) && ((S._status = 1), (S._result = V))
          },
          function (V) {
            ;(S._status === 0 || S._status === -1) && ((S._status = 2), (S._result = V))
          }
        ),
        S._status === -1 && ((S._status = 0), (S._result = H)))
    }
    if (S._status === 1) return S._result.default
    throw S._result
  }
  var se =
      typeof reportError == 'function'
        ? reportError
        : function (S) {
            if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
              var H = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof S == 'object' && S !== null && typeof S.message == 'string'
                    ? String(S.message)
                    : String(S),
                error: S,
              })
              if (!window.dispatchEvent(H)) return
            } else if (typeof process == 'object' && typeof process.emit == 'function') {
              process.emit('uncaughtException', S)
              return
            }
            console.error(S)
          },
    fe = {
      map: X,
      forEach: function (S, H, V) {
        X(
          S,
          function () {
            H.apply(this, arguments)
          },
          V
        )
      },
      count: function (S) {
        var H = 0
        return (
          X(S, function () {
            H++
          }),
          H
        )
      },
      toArray: function (S) {
        return (
          X(S, function (H) {
            return H
          }) || []
        )
      },
      only: function (S) {
        if (!Oe(S))
          throw Error('React.Children.only expected to receive a single React element child.')
        return S
      },
    }
  return (
    (le.Activity = b),
    (le.Children = fe),
    (le.Component = j),
    (le.Fragment = s),
    (le.Profiler = f),
    (le.PureComponent = Z),
    (le.StrictMode = c),
    (le.Suspense = g),
    (le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k),
    (le.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (S) {
        return k.H.useMemoCache(S)
      },
    }),
    (le.cache = function (S) {
      return function () {
        return S.apply(null, arguments)
      }
    }),
    (le.cacheSignal = function () {
      return null
    }),
    (le.cloneElement = function (S, H, V) {
      if (S == null) throw Error('The argument must be a React element, but you passed ' + S + '.')
      var Q = q({}, S.props),
        te = S.key
      if (H != null)
        for (ae in (H.key !== void 0 && (te = '' + H.key), H))
          !Se.call(H, ae) ||
            ae === 'key' ||
            ae === '__self' ||
            ae === '__source' ||
            (ae === 'ref' && H.ref === void 0) ||
            (Q[ae] = H[ae])
      var ae = arguments.length - 2
      if (ae === 1) Q.children = V
      else if (1 < ae) {
        for (var oe = Array(ae), Ze = 0; Ze < ae; Ze++) oe[Ze] = arguments[Ze + 2]
        Q.children = oe
      }
      return ne(S.type, te, Q)
    }),
    (le.createContext = function (S) {
      return (
        (S = {
          $$typeof: h,
          _currentValue: S,
          _currentValue2: S,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (S.Provider = S),
        (S.Consumer = { $$typeof: m, _context: S }),
        S
      )
    }),
    (le.createElement = function (S, H, V) {
      var Q,
        te = {},
        ae = null
      if (H != null)
        for (Q in (H.key !== void 0 && (ae = '' + H.key), H))
          Se.call(H, Q) && Q !== 'key' && Q !== '__self' && Q !== '__source' && (te[Q] = H[Q])
      var oe = arguments.length - 2
      if (oe === 1) te.children = V
      else if (1 < oe) {
        for (var Ze = Array(oe), qe = 0; qe < oe; qe++) Ze[qe] = arguments[qe + 2]
        te.children = Ze
      }
      if (S && S.defaultProps)
        for (Q in ((oe = S.defaultProps), oe)) te[Q] === void 0 && (te[Q] = oe[Q])
      return ne(S, ae, te)
    }),
    (le.createRef = function () {
      return { current: null }
    }),
    (le.forwardRef = function (S) {
      return { $$typeof: y, render: S }
    }),
    (le.isValidElement = Oe),
    (le.lazy = function (S) {
      return { $$typeof: T, _payload: { _status: -1, _result: S }, _init: W }
    }),
    (le.memo = function (S, H) {
      return { $$typeof: v, type: S, compare: H === void 0 ? null : H }
    }),
    (le.startTransition = function (S) {
      var H = k.T,
        V = {}
      k.T = V
      try {
        var Q = S(),
          te = k.S
        ;(te !== null && te(V, Q),
          typeof Q == 'object' && Q !== null && typeof Q.then == 'function' && Q.then(re, se))
      } catch (ae) {
        se(ae)
      } finally {
        ;(H !== null && V.types !== null && (H.types = V.types), (k.T = H))
      }
    }),
    (le.unstable_useCacheRefresh = function () {
      return k.H.useCacheRefresh()
    }),
    (le.use = function (S) {
      return k.H.use(S)
    }),
    (le.useActionState = function (S, H, V) {
      return k.H.useActionState(S, H, V)
    }),
    (le.useCallback = function (S, H) {
      return k.H.useCallback(S, H)
    }),
    (le.useContext = function (S) {
      return k.H.useContext(S)
    }),
    (le.useDebugValue = function () {}),
    (le.useDeferredValue = function (S, H) {
      return k.H.useDeferredValue(S, H)
    }),
    (le.useEffect = function (S, H) {
      return k.H.useEffect(S, H)
    }),
    (le.useEffectEvent = function (S) {
      return k.H.useEffectEvent(S)
    }),
    (le.useId = function () {
      return k.H.useId()
    }),
    (le.useImperativeHandle = function (S, H, V) {
      return k.H.useImperativeHandle(S, H, V)
    }),
    (le.useInsertionEffect = function (S, H) {
      return k.H.useInsertionEffect(S, H)
    }),
    (le.useLayoutEffect = function (S, H) {
      return k.H.useLayoutEffect(S, H)
    }),
    (le.useMemo = function (S, H) {
      return k.H.useMemo(S, H)
    }),
    (le.useOptimistic = function (S, H) {
      return k.H.useOptimistic(S, H)
    }),
    (le.useReducer = function (S, H, V) {
      return k.H.useReducer(S, H, V)
    }),
    (le.useRef = function (S) {
      return k.H.useRef(S)
    }),
    (le.useState = function (S) {
      return k.H.useState(S)
    }),
    (le.useSyncExternalStore = function (S, H, V) {
      return k.H.useSyncExternalStore(S, H, V)
    }),
    (le.useTransition = function () {
      return k.H.useTransition()
    }),
    (le.version = '19.2.3'),
    le
  )
}
var Im
function Zi() {
  return (Im || ((Im = 1), (so.exports = Ny())), so.exports)
}
var R = Zi()
const Ki = Ah(R)
var fo = { exports: {} },
  du = {},
  mo = { exports: {} },
  ho = {}
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pm
function _y() {
  return (
    Pm ||
      ((Pm = 1),
      (function (i) {
        function r(D, X) {
          var W = D.length
          D.push(X)
          e: for (; 0 < W; ) {
            var se = (W - 1) >>> 1,
              fe = D[se]
            if (0 < f(fe, X)) ((D[se] = X), (D[W] = fe), (W = se))
            else break e
          }
        }
        function s(D) {
          return D.length === 0 ? null : D[0]
        }
        function c(D) {
          if (D.length === 0) return null
          var X = D[0],
            W = D.pop()
          if (W !== X) {
            D[0] = W
            e: for (var se = 0, fe = D.length, S = fe >>> 1; se < S; ) {
              var H = 2 * (se + 1) - 1,
                V = D[H],
                Q = H + 1,
                te = D[Q]
              if (0 > f(V, W))
                Q < fe && 0 > f(te, V)
                  ? ((D[se] = te), (D[Q] = W), (se = Q))
                  : ((D[se] = V), (D[H] = W), (se = H))
              else if (Q < fe && 0 > f(te, W)) ((D[se] = te), (D[Q] = W), (se = Q))
              else break e
            }
          }
          return X
        }
        function f(D, X) {
          var W = D.sortIndex - X.sortIndex
          return W !== 0 ? W : D.id - X.id
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == 'object' && typeof performance.now == 'function')
        ) {
          var m = performance
          i.unstable_now = function () {
            return m.now()
          }
        } else {
          var h = Date,
            y = h.now()
          i.unstable_now = function () {
            return h.now() - y
          }
        }
        var g = [],
          v = [],
          T = 1,
          b = null,
          A = 3,
          Y = !1,
          G = !1,
          q = !1,
          B = !1,
          j = typeof setTimeout == 'function' ? setTimeout : null,
          U = typeof clearTimeout == 'function' ? clearTimeout : null,
          Z = typeof setImmediate < 'u' ? setImmediate : null
        function ee(D) {
          for (var X = s(v); X !== null; ) {
            if (X.callback === null) c(v)
            else if (X.startTime <= D) (c(v), (X.sortIndex = X.expirationTime), r(g, X))
            else break
            X = s(v)
          }
        }
        function $(D) {
          if (((q = !1), ee(D), !G))
            if (s(g) !== null) ((G = !0), re || ((re = !0), P()))
            else {
              var X = s(v)
              X !== null && Ee($, X.startTime - D)
            }
        }
        var re = !1,
          k = -1,
          Se = 5,
          ne = -1
        function Xe() {
          return B ? !0 : !(i.unstable_now() - ne < Se)
        }
        function Oe() {
          if (((B = !1), re)) {
            var D = i.unstable_now()
            ne = D
            var X = !0
            try {
              e: {
                ;((G = !1), q && ((q = !1), U(k), (k = -1)), (Y = !0))
                var W = A
                try {
                  t: {
                    for (ee(D), b = s(g); b !== null && !(b.expirationTime > D && Xe()); ) {
                      var se = b.callback
                      if (typeof se == 'function') {
                        ;((b.callback = null), (A = b.priorityLevel))
                        var fe = se(b.expirationTime <= D)
                        if (((D = i.unstable_now()), typeof fe == 'function')) {
                          ;((b.callback = fe), ee(D), (X = !0))
                          break t
                        }
                        ;(b === s(g) && c(g), ee(D))
                      } else c(g)
                      b = s(g)
                    }
                    if (b !== null) X = !0
                    else {
                      var S = s(v)
                      ;(S !== null && Ee($, S.startTime - D), (X = !1))
                    }
                  }
                  break e
                } finally {
                  ;((b = null), (A = W), (Y = !1))
                }
                X = void 0
              }
            } finally {
              X ? P() : (re = !1)
            }
          }
        }
        var P
        if (typeof Z == 'function')
          P = function () {
            Z(Oe)
          }
        else if (typeof MessageChannel < 'u') {
          var Qe = new MessageChannel(),
            Re = Qe.port2
          ;((Qe.port1.onmessage = Oe),
            (P = function () {
              Re.postMessage(null)
            }))
        } else
          P = function () {
            j(Oe, 0)
          }
        function Ee(D, X) {
          k = j(function () {
            D(i.unstable_now())
          }, X)
        }
        ;((i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (D) {
            D.callback = null
          }),
          (i.unstable_forceFrameRate = function (D) {
            0 > D || 125 < D
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (Se = 0 < D ? Math.floor(1e3 / D) : 5)
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return A
          }),
          (i.unstable_next = function (D) {
            switch (A) {
              case 1:
              case 2:
              case 3:
                var X = 3
                break
              default:
                X = A
            }
            var W = A
            A = X
            try {
              return D()
            } finally {
              A = W
            }
          }),
          (i.unstable_requestPaint = function () {
            B = !0
          }),
          (i.unstable_runWithPriority = function (D, X) {
            switch (D) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break
              default:
                D = 3
            }
            var W = A
            A = D
            try {
              return X()
            } finally {
              A = W
            }
          }),
          (i.unstable_scheduleCallback = function (D, X, W) {
            var se = i.unstable_now()
            switch (
              (typeof W == 'object' && W !== null
                ? ((W = W.delay), (W = typeof W == 'number' && 0 < W ? se + W : se))
                : (W = se),
              D)
            ) {
              case 1:
                var fe = -1
                break
              case 2:
                fe = 250
                break
              case 5:
                fe = 1073741823
                break
              case 4:
                fe = 1e4
                break
              default:
                fe = 5e3
            }
            return (
              (fe = W + fe),
              (D = {
                id: T++,
                callback: X,
                priorityLevel: D,
                startTime: W,
                expirationTime: fe,
                sortIndex: -1,
              }),
              W > se
                ? ((D.sortIndex = W),
                  r(v, D),
                  s(g) === null && D === s(v) && (q ? (U(k), (k = -1)) : (q = !0), Ee($, W - se)))
                : ((D.sortIndex = fe), r(g, D), G || Y || ((G = !0), re || ((re = !0), P()))),
              D
            )
          }),
          (i.unstable_shouldYield = Xe),
          (i.unstable_wrapCallback = function (D) {
            var X = A
            return function () {
              var W = A
              A = X
              try {
                return D.apply(this, arguments)
              } finally {
                A = W
              }
            }
          }))
      })(ho)),
    ho
  )
}
var eh
function Cy() {
  return (eh || ((eh = 1), (mo.exports = _y())), mo.exports)
}
var vo = { exports: {} },
  st = {}
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var th
function Oy() {
  if (th) return st
  th = 1
  var i = Zi()
  function r(g) {
    var v = 'https://react.dev/errors/' + g
    if (1 < arguments.length) {
      v += '?args[]=' + encodeURIComponent(arguments[1])
      for (var T = 2; T < arguments.length; T++) v += '&args[]=' + encodeURIComponent(arguments[T])
    }
    return (
      'Minified React error #' +
      g +
      '; visit ' +
      v +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
  }
  function s() {}
  var c = {
      d: {
        f: s,
        r: function () {
          throw Error(r(522))
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s,
      },
      p: 0,
      findDOMNode: null,
    },
    f = Symbol.for('react.portal')
  function m(g, v, T) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
    return {
      $$typeof: f,
      key: b == null ? null : '' + b,
      children: g,
      containerInfo: v,
      implementation: T,
    }
  }
  var h = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
  function y(g, v) {
    if (g === 'font') return ''
    if (typeof v == 'string') return v === 'use-credentials' ? v : ''
  }
  return (
    (st.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c),
    (st.createPortal = function (g, v) {
      var T = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
      if (!v || (v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)) throw Error(r(299))
      return m(g, v, null, T)
    }),
    (st.flushSync = function (g) {
      var v = h.T,
        T = c.p
      try {
        if (((h.T = null), (c.p = 2), g)) return g()
      } finally {
        ;((h.T = v), (c.p = T), c.d.f())
      }
    }),
    (st.preconnect = function (g, v) {
      typeof g == 'string' &&
        (v
          ? ((v = v.crossOrigin),
            (v = typeof v == 'string' ? (v === 'use-credentials' ? v : '') : void 0))
          : (v = null),
        c.d.C(g, v))
    }),
    (st.prefetchDNS = function (g) {
      typeof g == 'string' && c.d.D(g)
    }),
    (st.preinit = function (g, v) {
      if (typeof g == 'string' && v && typeof v.as == 'string') {
        var T = v.as,
          b = y(T, v.crossOrigin),
          A = typeof v.integrity == 'string' ? v.integrity : void 0,
          Y = typeof v.fetchPriority == 'string' ? v.fetchPriority : void 0
        T === 'style'
          ? c.d.S(g, typeof v.precedence == 'string' ? v.precedence : void 0, {
              crossOrigin: b,
              integrity: A,
              fetchPriority: Y,
            })
          : T === 'script' &&
            c.d.X(g, {
              crossOrigin: b,
              integrity: A,
              fetchPriority: Y,
              nonce: typeof v.nonce == 'string' ? v.nonce : void 0,
            })
      }
    }),
    (st.preinitModule = function (g, v) {
      if (typeof g == 'string')
        if (typeof v == 'object' && v !== null) {
          if (v.as == null || v.as === 'script') {
            var T = y(v.as, v.crossOrigin)
            c.d.M(g, {
              crossOrigin: T,
              integrity: typeof v.integrity == 'string' ? v.integrity : void 0,
              nonce: typeof v.nonce == 'string' ? v.nonce : void 0,
            })
          }
        } else v == null && c.d.M(g)
    }),
    (st.preload = function (g, v) {
      if (typeof g == 'string' && typeof v == 'object' && v !== null && typeof v.as == 'string') {
        var T = v.as,
          b = y(T, v.crossOrigin)
        c.d.L(g, T, {
          crossOrigin: b,
          integrity: typeof v.integrity == 'string' ? v.integrity : void 0,
          nonce: typeof v.nonce == 'string' ? v.nonce : void 0,
          type: typeof v.type == 'string' ? v.type : void 0,
          fetchPriority: typeof v.fetchPriority == 'string' ? v.fetchPriority : void 0,
          referrerPolicy: typeof v.referrerPolicy == 'string' ? v.referrerPolicy : void 0,
          imageSrcSet: typeof v.imageSrcSet == 'string' ? v.imageSrcSet : void 0,
          imageSizes: typeof v.imageSizes == 'string' ? v.imageSizes : void 0,
          media: typeof v.media == 'string' ? v.media : void 0,
        })
      }
    }),
    (st.preloadModule = function (g, v) {
      if (typeof g == 'string')
        if (v) {
          var T = y(v.as, v.crossOrigin)
          c.d.m(g, {
            as: typeof v.as == 'string' && v.as !== 'script' ? v.as : void 0,
            crossOrigin: T,
            integrity: typeof v.integrity == 'string' ? v.integrity : void 0,
          })
        } else c.d.m(g)
    }),
    (st.requestFormReset = function (g) {
      c.d.r(g)
    }),
    (st.unstable_batchedUpdates = function (g, v) {
      return g(v)
    }),
    (st.useFormState = function (g, v, T) {
      return h.H.useFormState(g, v, T)
    }),
    (st.useFormStatus = function () {
      return h.H.useHostTransitionStatus()
    }),
    (st.version = '19.2.3'),
    st
  )
}
var lh
function Dy() {
  if (lh) return vo.exports
  lh = 1
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
      } catch (r) {
        console.error(r)
      }
  }
  return (i(), (vo.exports = Oy()), vo.exports)
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nh
function My() {
  if (nh) return du
  nh = 1
  var i = Cy(),
    r = Zi(),
    s = Dy()
  function c(e) {
    var t = 'https://react.dev/errors/' + e
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1])
      for (var l = 2; l < arguments.length; l++) t += '&args[]=' + encodeURIComponent(arguments[l])
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
  }
  function f(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
  }
  function m(e) {
    var t = e,
      l = e
    if (e.alternate) for (; t.return; ) t = t.return
    else {
      e = t
      do ((t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return))
      while (e)
    }
    return t.tag === 3 ? l : null
  }
  function h(e) {
    if (e.tag === 13) {
      var t = e.memoizedState
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated
    }
    return null
  }
  function y(e) {
    if (e.tag === 31) {
      var t = e.memoizedState
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated
    }
    return null
  }
  function g(e) {
    if (m(e) !== e) throw Error(c(188))
  }
  function v(e) {
    var t = e.alternate
    if (!t) {
      if (((t = m(e)), t === null)) throw Error(c(188))
      return t !== e ? null : e
    }
    for (var l = e, n = t; ; ) {
      var a = l.return
      if (a === null) break
      var u = a.alternate
      if (u === null) {
        if (((n = a.return), n !== null)) {
          l = n
          continue
        }
        break
      }
      if (a.child === u.child) {
        for (u = a.child; u; ) {
          if (u === l) return (g(a), e)
          if (u === n) return (g(a), t)
          u = u.sibling
        }
        throw Error(c(188))
      }
      if (l.return !== n.return) ((l = a), (n = u))
      else {
        for (var o = !1, d = a.child; d; ) {
          if (d === l) {
            ;((o = !0), (l = a), (n = u))
            break
          }
          if (d === n) {
            ;((o = !0), (n = a), (l = u))
            break
          }
          d = d.sibling
        }
        if (!o) {
          for (d = u.child; d; ) {
            if (d === l) {
              ;((o = !0), (l = u), (n = a))
              break
            }
            if (d === n) {
              ;((o = !0), (n = u), (l = a))
              break
            }
            d = d.sibling
          }
          if (!o) throw Error(c(189))
        }
      }
      if (l.alternate !== n) throw Error(c(190))
    }
    if (l.tag !== 3) throw Error(c(188))
    return l.stateNode.current === l ? e : t
  }
  function T(e) {
    var t = e.tag
    if (t === 5 || t === 26 || t === 27 || t === 6) return e
    for (e = e.child; e !== null; ) {
      if (((t = T(e)), t !== null)) return t
      e = e.sibling
    }
    return null
  }
  var b = Object.assign,
    A = Symbol.for('react.element'),
    Y = Symbol.for('react.transitional.element'),
    G = Symbol.for('react.portal'),
    q = Symbol.for('react.fragment'),
    B = Symbol.for('react.strict_mode'),
    j = Symbol.for('react.profiler'),
    U = Symbol.for('react.consumer'),
    Z = Symbol.for('react.context'),
    ee = Symbol.for('react.forward_ref'),
    $ = Symbol.for('react.suspense'),
    re = Symbol.for('react.suspense_list'),
    k = Symbol.for('react.memo'),
    Se = Symbol.for('react.lazy'),
    ne = Symbol.for('react.activity'),
    Xe = Symbol.for('react.memo_cache_sentinel'),
    Oe = Symbol.iterator
  function P(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (Oe && e[Oe]) || e['@@iterator']), typeof e == 'function' ? e : null)
  }
  var Qe = Symbol.for('react.client.reference')
  function Re(e) {
    if (e == null) return null
    if (typeof e == 'function') return e.$$typeof === Qe ? null : e.displayName || e.name || null
    if (typeof e == 'string') return e
    switch (e) {
      case q:
        return 'Fragment'
      case j:
        return 'Profiler'
      case B:
        return 'StrictMode'
      case $:
        return 'Suspense'
      case re:
        return 'SuspenseList'
      case ne:
        return 'Activity'
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case G:
          return 'Portal'
        case Z:
          return e.displayName || 'Context'
        case U:
          return (e._context.displayName || 'Context') + '.Consumer'
        case ee:
          var t = e.render
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          )
        case k:
          return ((t = e.displayName || null), t !== null ? t : Re(e.type) || 'Memo')
        case Se:
          ;((t = e._payload), (e = e._init))
          try {
            return Re(e(t))
          } catch {}
      }
    return null
  }
  var Ee = Array.isArray,
    D = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    X = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    W = { pending: !1, data: null, method: null, action: null },
    se = [],
    fe = -1
  function S(e) {
    return { current: e }
  }
  function H(e) {
    0 > fe || ((e.current = se[fe]), (se[fe] = null), fe--)
  }
  function V(e, t) {
    ;(fe++, (se[fe] = e.current), (e.current = t))
  }
  var Q = S(null),
    te = S(null),
    ae = S(null),
    oe = S(null)
  function Ze(e, t) {
    switch ((V(ae, t), V(te, e), V(Q, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? pm(e) : 0
        break
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) ((t = pm(t)), (e = bm(t, e)))
        else
          switch (e) {
            case 'svg':
              e = 1
              break
            case 'math':
              e = 2
              break
            default:
              e = 0
          }
    }
    ;(H(Q), V(Q, e))
  }
  function qe() {
    ;(H(Q), H(te), H(ae))
  }
  function ll(e) {
    e.memoizedState !== null && V(oe, e)
    var t = Q.current,
      l = bm(t, e.type)
    t !== l && (V(te, e), V(Q, l))
  }
  function Tn(e) {
    ;(te.current === e && (H(Q), H(te)), oe.current === e && (H(oe), (cu._currentValue = W)))
  }
  var va, Al
  function $t(e) {
    if (va === void 0)
      try {
        throw Error()
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/)
        ;((va = (t && t[1]) || ''),
          (Al =
            -1 <
            l.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < l.stack.indexOf('@')
                ? '@unknown:0:0'
                : ''))
      }
    return (
      `
` +
      va +
      e +
      Al
    )
  }
  var xu = !1
  function Te(e, t) {
    if (!e || xu) return ''
    xu = !0
    var l = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    try {
      var n = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var L = function () {
                throw Error()
              }
              if (
                (Object.defineProperty(L.prototype, 'props', {
                  set: function () {
                    throw Error()
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(L, [])
                } catch (O) {
                  var C = O
                }
                Reflect.construct(e, [], L)
              } else {
                try {
                  L.call()
                } catch (O) {
                  C = O
                }
                e.call(L.prototype)
              }
            } else {
              try {
                throw Error()
              } catch (O) {
                C = O
              }
              ;(L = e()) && typeof L.catch == 'function' && L.catch(function () {})
            }
          } catch (O) {
            if (O && C && typeof O.stack == 'string') return [O.stack, C.stack]
          }
          return [null, null]
        },
      }
      n.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot'
      var a = Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot, 'name')
      a &&
        a.configurable &&
        Object.defineProperty(n.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        })
      var u = n.DetermineComponentFrameRoot(),
        o = u[0],
        d = u[1]
      if (o && d) {
        var p = o.split(`
`),
          _ = d.split(`
`)
        for (a = n = 0; n < p.length && !p[n].includes('DetermineComponentFrameRoot'); ) n++
        for (; a < _.length && !_[a].includes('DetermineComponentFrameRoot'); ) a++
        if (n === p.length || a === _.length)
          for (n = p.length - 1, a = _.length - 1; 1 <= n && 0 <= a && p[n] !== _[a]; ) a--
        for (; 1 <= n && 0 <= a; n--, a--)
          if (p[n] !== _[a]) {
            if (n !== 1 || a !== 1)
              do
                if ((n--, a--, 0 > a || p[n] !== _[a])) {
                  var M =
                    `
` + p[n].replace(' at new ', ' at ')
                  return (
                    e.displayName &&
                      M.includes('<anonymous>') &&
                      (M = M.replace('<anonymous>', e.displayName)),
                    M
                  )
                }
              while (1 <= n && 0 <= a)
            break
          }
      }
    } finally {
      ;((xu = !1), (Error.prepareStackTrace = l))
    }
    return (l = e ? e.displayName || e.name : '') ? $t(l) : ''
  }
  function Ye(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return $t(e.type)
      case 16:
        return $t('Lazy')
      case 13:
        return e.child !== t && t !== null ? $t('Suspense Fallback') : $t('Suspense')
      case 19:
        return $t('SuspenseList')
      case 0:
      case 15:
        return Te(e.type, !1)
      case 11:
        return Te(e.type.render, !1)
      case 1:
        return Te(e.type, !0)
      case 31:
        return $t('Activity')
      default:
        return ''
    }
  }
  function He(e) {
    try {
      var t = '',
        l = null
      do ((t += Ye(e, l)), (l = e), (e = e.return))
      while (e)
      return t
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      )
    }
  }
  var Me = Object.prototype.hasOwnProperty,
    mt = i.unstable_scheduleCallback,
    ot = i.unstable_cancelCallback,
    Ke = i.unstable_shouldYield,
    Et = i.unstable_requestPaint,
    Pe = i.unstable_now,
    tn = i.unstable_getCurrentPriorityLevel,
    ga = i.unstable_ImmediatePriority,
    ya = i.unstable_UserBlockingPriority,
    nt = i.unstable_NormalPriority,
    Xt = i.unstable_LowPriority,
    Rn = i.unstable_IdlePriority,
    Wi = i.log,
    pa = i.unstable_setDisableYieldValue,
    ba = null,
    Tt = null
  function Nl(e) {
    if ((typeof Wi == 'function' && pa(e), Tt && typeof Tt.setStrictMode == 'function'))
      try {
        Tt.setStrictMode(ba, e)
      } catch {}
  }
  var Rt = Math.clz32 ? Math.clz32 : fv,
    ov = Math.log,
    sv = Math.LN2
  function fv(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((ov(e) / sv) | 0)) | 0)
  }
  var Eu = 256,
    Tu = 262144,
    Ru = 4194304
  function ln(e) {
    var t = e & 42
    if (t !== 0) return t
    switch (e & -e) {
      case 1:
        return 1
      case 2:
        return 2
      case 4:
        return 4
      case 8:
        return 8
      case 16:
        return 16
      case 32:
        return 32
      case 64:
        return 64
      case 128:
        return 128
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560
      case 67108864:
        return 67108864
      case 134217728:
        return 134217728
      case 268435456:
        return 268435456
      case 536870912:
        return 536870912
      case 1073741824:
        return 0
      default:
        return e
    }
  }
  function zu(e, t, l) {
    var n = e.pendingLanes
    if (n === 0) return 0
    var a = 0,
      u = e.suspendedLanes,
      o = e.pingedLanes
    e = e.warmLanes
    var d = n & 134217727
    return (
      d !== 0
        ? ((n = d & ~u),
          n !== 0
            ? (a = ln(n))
            : ((o &= d), o !== 0 ? (a = ln(o)) : l || ((l = d & ~e), l !== 0 && (a = ln(l)))))
        : ((d = n & ~u),
          d !== 0
            ? (a = ln(d))
            : o !== 0
              ? (a = ln(o))
              : l || ((l = n & ~e), l !== 0 && (a = ln(l)))),
      a === 0
        ? 0
        : t !== 0 &&
            t !== a &&
            (t & u) === 0 &&
            ((u = a & -a), (l = t & -t), u >= l || (u === 32 && (l & 4194048) !== 0))
          ? t
          : a
    )
  }
  function Sa(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
  }
  function dv(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1
      default:
        return -1
    }
  }
  function Io() {
    var e = Ru
    return ((Ru <<= 1), (Ru & 62914560) === 0 && (Ru = 4194304), e)
  }
  function Fi(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e)
    return t
  }
  function xa(e, t) {
    ;((e.pendingLanes |= t),
      t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)))
  }
  function mv(e, t, l, n, a, u) {
    var o = e.pendingLanes
    ;((e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0))
    var d = e.entanglements,
      p = e.expirationTimes,
      _ = e.hiddenUpdates
    for (l = o & ~l; 0 < l; ) {
      var M = 31 - Rt(l),
        L = 1 << M
      ;((d[M] = 0), (p[M] = -1))
      var C = _[M]
      if (C !== null)
        for (_[M] = null, M = 0; M < C.length; M++) {
          var O = C[M]
          O !== null && (O.lane &= -536870913)
        }
      l &= ~L
    }
    ;(n !== 0 && Po(e, n, 0),
      u !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(o & ~t)))
  }
  function Po(e, t, l) {
    ;((e.pendingLanes |= t), (e.suspendedLanes &= ~t))
    var n = 31 - Rt(t)
    ;((e.entangledLanes |= t),
      (e.entanglements[n] = e.entanglements[n] | 1073741824 | (l & 261930)))
  }
  function es(e, t) {
    var l = (e.entangledLanes |= t)
    for (e = e.entanglements; l; ) {
      var n = 31 - Rt(l),
        a = 1 << n
      ;((a & t) | (e[n] & t) && (e[n] |= t), (l &= ~a))
    }
  }
  function ts(e, t) {
    var l = t & -t
    return ((l = (l & 42) !== 0 ? 1 : Ii(l)), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l)
  }
  function Ii(e) {
    switch (e) {
      case 2:
        e = 1
        break
      case 8:
        e = 4
        break
      case 32:
        e = 16
        break
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128
        break
      case 268435456:
        e = 134217728
        break
      default:
        e = 0
    }
    return e
  }
  function Pi(e) {
    return ((e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2)
  }
  function ls() {
    var e = X.p
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Vm(e.type))
  }
  function ns(e, t) {
    var l = X.p
    try {
      return ((X.p = e), t())
    } finally {
      X.p = l
    }
  }
  var _l = Math.random().toString(36).slice(2),
    at = '__reactFiber$' + _l,
    ht = '__reactProps$' + _l,
    zn = '__reactContainer$' + _l,
    ec = '__reactEvents$' + _l,
    hv = '__reactListeners$' + _l,
    vv = '__reactHandles$' + _l,
    as = '__reactResources$' + _l,
    Ea = '__reactMarker$' + _l
  function tc(e) {
    ;(delete e[at], delete e[ht], delete e[ec], delete e[hv], delete e[vv])
  }
  function An(e) {
    var t = e[at]
    if (t) return t
    for (var l = e.parentNode; l; ) {
      if ((t = l[zn] || l[at])) {
        if (((l = t.alternate), t.child !== null || (l !== null && l.child !== null)))
          for (e = Am(e); e !== null; ) {
            if ((l = e[at])) return l
            e = Am(e)
          }
        return t
      }
      ;((e = l), (l = e.parentNode))
    }
    return null
  }
  function Nn(e) {
    if ((e = e[at] || e[zn])) {
      var t = e.tag
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e
    }
    return null
  }
  function Ta(e) {
    var t = e.tag
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode
    throw Error(c(33))
  }
  function _n(e) {
    var t = e[as]
    return (t || (t = e[as] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t)
  }
  function tt(e) {
    e[Ea] = !0
  }
  var us = new Set(),
    is = {}
  function nn(e, t) {
    ;(Cn(e, t), Cn(e + 'Capture', t))
  }
  function Cn(e, t) {
    for (is[e] = t, e = 0; e < t.length; e++) us.add(t[e])
  }
  var gv = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    cs = {},
    rs = {}
  function yv(e) {
    return Me.call(rs, e)
      ? !0
      : Me.call(cs, e)
        ? !1
        : gv.test(e)
          ? (rs[e] = !0)
          : ((cs[e] = !0), !1)
  }
  function Au(e, t, l) {
    if (yv(t))
      if (l === null) e.removeAttribute(t)
      else {
        switch (typeof l) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(t)
            return
          case 'boolean':
            var n = t.toLowerCase().slice(0, 5)
            if (n !== 'data-' && n !== 'aria-') {
              e.removeAttribute(t)
              return
            }
        }
        e.setAttribute(t, '' + l)
      }
  }
  function Nu(e, t, l) {
    if (l === null) e.removeAttribute(t)
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(t)
          return
      }
      e.setAttribute(t, '' + l)
    }
  }
  function nl(e, t, l, n) {
    if (n === null) e.removeAttribute(l)
    else {
      switch (typeof n) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(l)
          return
      }
      e.setAttributeNS(t, l, '' + n)
    }
  }
  function jt(e) {
    switch (typeof e) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e
      case 'object':
        return e
      default:
        return ''
    }
  }
  function os(e) {
    var t = e.type
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
  }
  function pv(e, t, l) {
    var n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
    if (
      !e.hasOwnProperty(t) &&
      typeof n < 'u' &&
      typeof n.get == 'function' &&
      typeof n.set == 'function'
    ) {
      var a = n.get,
        u = n.set
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return a.call(this)
          },
          set: function (o) {
            ;((l = '' + o), u.call(this, o))
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return l
          },
          setValue: function (o) {
            l = '' + o
          },
          stopTracking: function () {
            ;((e._valueTracker = null), delete e[t])
          },
        }
      )
    }
  }
  function lc(e) {
    if (!e._valueTracker) {
      var t = os(e) ? 'checked' : 'value'
      e._valueTracker = pv(e, t, '' + e[t])
    }
  }
  function ss(e) {
    if (!e) return !1
    var t = e._valueTracker
    if (!t) return !0
    var l = t.getValue(),
      n = ''
    return (
      e && (n = os(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = n),
      e !== l ? (t.setValue(e), !0) : !1
    )
  }
  function _u(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null
    try {
      return e.activeElement || e.body
    } catch {
      return e.body
    }
  }
  var bv = /[\n"\\]/g
  function Ut(e) {
    return e.replace(bv, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' '
    })
  }
  function nc(e, t, l, n, a, u, o, d) {
    ;((e.name = ''),
      o != null && typeof o != 'function' && typeof o != 'symbol' && typeof o != 'boolean'
        ? (e.type = o)
        : e.removeAttribute('type'),
      t != null
        ? o === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + jt(t))
          : e.value !== '' + jt(t) && (e.value = '' + jt(t))
        : (o !== 'submit' && o !== 'reset') || e.removeAttribute('value'),
      t != null
        ? ac(e, o, jt(t))
        : l != null
          ? ac(e, o, jt(l))
          : n != null && e.removeAttribute('value'),
      a == null && u != null && (e.defaultChecked = !!u),
      a != null && (e.checked = a && typeof a != 'function' && typeof a != 'symbol'),
      d != null && typeof d != 'function' && typeof d != 'symbol' && typeof d != 'boolean'
        ? (e.name = '' + jt(d))
        : e.removeAttribute('name'))
  }
  function fs(e, t, l, n, a, u, o, d) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (e.type = u),
      t != null || l != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || t != null)) {
        lc(e)
        return
      }
      ;((l = l != null ? '' + jt(l) : ''),
        (t = t != null ? '' + jt(t) : l),
        d || t === e.value || (e.value = t),
        (e.defaultValue = t))
    }
    ;((n = n ?? a),
      (n = typeof n != 'function' && typeof n != 'symbol' && !!n),
      (e.checked = d ? e.checked : !!n),
      (e.defaultChecked = !!n),
      o != null &&
        typeof o != 'function' &&
        typeof o != 'symbol' &&
        typeof o != 'boolean' &&
        (e.name = o),
      lc(e))
  }
  function ac(e, t, l) {
    ;(t === 'number' && _u(e.ownerDocument) === e) ||
      e.defaultValue === '' + l ||
      (e.defaultValue = '' + l)
  }
  function On(e, t, l, n) {
    if (((e = e.options), t)) {
      t = {}
      for (var a = 0; a < l.length; a++) t['$' + l[a]] = !0
      for (l = 0; l < e.length; l++)
        ((a = t.hasOwnProperty('$' + e[l].value)),
          e[l].selected !== a && (e[l].selected = a),
          a && n && (e[l].defaultSelected = !0))
    } else {
      for (l = '' + jt(l), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === l) {
          ;((e[a].selected = !0), n && (e[a].defaultSelected = !0))
          return
        }
        t !== null || e[a].disabled || (t = e[a])
      }
      t !== null && (t.selected = !0)
    }
  }
  function ds(e, t, l) {
    if (t != null && ((t = '' + jt(t)), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t)
      return
    }
    e.defaultValue = l != null ? '' + jt(l) : ''
  }
  function ms(e, t, l, n) {
    if (t == null) {
      if (n != null) {
        if (l != null) throw Error(c(92))
        if (Ee(n)) {
          if (1 < n.length) throw Error(c(93))
          n = n[0]
        }
        l = n
      }
      ;(l == null && (l = ''), (t = l))
    }
    ;((l = jt(t)),
      (e.defaultValue = l),
      (n = e.textContent),
      n === l && n !== '' && n !== null && (e.value = n),
      lc(e))
  }
  function Dn(e, t) {
    if (t) {
      var l = e.firstChild
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t
        return
      }
    }
    e.textContent = t
  }
  var Sv = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  )
  function hs(e, t, l) {
    var n = t.indexOf('--') === 0
    l == null || typeof l == 'boolean' || l === ''
      ? n
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : n
        ? e.setProperty(t, l)
        : typeof l != 'number' || l === 0 || Sv.has(t)
          ? t === 'float'
            ? (e.cssFloat = l)
            : (e[t] = ('' + l).trim())
          : (e[t] = l + 'px')
  }
  function vs(e, t, l) {
    if (t != null && typeof t != 'object') throw Error(c(62))
    if (((e = e.style), l != null)) {
      for (var n in l)
        !l.hasOwnProperty(n) ||
          (t != null && t.hasOwnProperty(n)) ||
          (n.indexOf('--') === 0
            ? e.setProperty(n, '')
            : n === 'float'
              ? (e.cssFloat = '')
              : (e[n] = ''))
      for (var a in t) ((n = t[a]), t.hasOwnProperty(a) && l[a] !== n && hs(e, a, n))
    } else for (var u in t) t.hasOwnProperty(u) && hs(e, u, t[u])
  }
  function uc(e) {
    if (e.indexOf('-') === -1) return !1
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1
      default:
        return !0
    }
  }
  var xv = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    Ev =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i
  function Cu(e) {
    return Ev.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e
  }
  function al() {}
  var ic = null
  function cc(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    )
  }
  var Mn = null,
    jn = null
  function gs(e) {
    var t = Nn(e)
    if (t && (e = t.stateNode)) {
      var l = e[ht] || null
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (nc(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (t = l.name),
            l.type === 'radio' && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode
            for (
              l = l.querySelectorAll('input[name="' + Ut('' + t) + '"][type="radio"]'), t = 0;
              t < l.length;
              t++
            ) {
              var n = l[t]
              if (n !== e && n.form === e.form) {
                var a = n[ht] || null
                if (!a) throw Error(c(90))
                nc(
                  n,
                  a.value,
                  a.defaultValue,
                  a.defaultValue,
                  a.checked,
                  a.defaultChecked,
                  a.type,
                  a.name
                )
              }
            }
            for (t = 0; t < l.length; t++) ((n = l[t]), n.form === e.form && ss(n))
          }
          break e
        case 'textarea':
          ds(e, l.value, l.defaultValue)
          break e
        case 'select':
          ;((t = l.value), t != null && On(e, !!l.multiple, t, !1))
      }
    }
  }
  var rc = !1
  function ys(e, t, l) {
    if (rc) return e(t, l)
    rc = !0
    try {
      var n = e(t)
      return n
    } finally {
      if (
        ((rc = !1),
        (Mn !== null || jn !== null) &&
          (gi(), Mn && ((t = Mn), (e = jn), (jn = Mn = null), gs(t), e)))
      )
        for (t = 0; t < e.length; t++) gs(e[t])
    }
  }
  function Ra(e, t) {
    var l = e.stateNode
    if (l === null) return null
    var n = l[ht] || null
    if (n === null) return null
    l = n[t]
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ;((n = !n.disabled) ||
          ((e = e.type),
          (n = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !n))
        break e
      default:
        e = !1
    }
    if (e) return null
    if (l && typeof l != 'function') throw Error(c(231, t, typeof l))
    return l
  }
  var ul = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    oc = !1
  if (ul)
    try {
      var za = {}
      ;(Object.defineProperty(za, 'passive', {
        get: function () {
          oc = !0
        },
      }),
        window.addEventListener('test', za, za),
        window.removeEventListener('test', za, za))
    } catch {
      oc = !1
    }
  var Cl = null,
    sc = null,
    Ou = null
  function ps() {
    if (Ou) return Ou
    var e,
      t = sc,
      l = t.length,
      n,
      a = 'value' in Cl ? Cl.value : Cl.textContent,
      u = a.length
    for (e = 0; e < l && t[e] === a[e]; e++);
    var o = l - e
    for (n = 1; n <= o && t[l - n] === a[u - n]; n++);
    return (Ou = a.slice(e, 1 < n ? 1 - n : void 0))
  }
  function Du(e) {
    var t = e.keyCode
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    )
  }
  function Mu() {
    return !0
  }
  function bs() {
    return !1
  }
  function vt(e) {
    function t(l, n, a, u, o) {
      ;((this._reactName = l),
        (this._targetInst = a),
        (this.type = n),
        (this.nativeEvent = u),
        (this.target = o),
        (this.currentTarget = null))
      for (var d in e) e.hasOwnProperty(d) && ((l = e[d]), (this[d] = l ? l(u) : u[d]))
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Mu
          : bs),
        (this.isPropagationStopped = bs),
        this
      )
    }
    return (
      b(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0
          var l = this.nativeEvent
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != 'unknown' && (l.returnValue = !1),
            (this.isDefaultPrevented = Mu))
        },
        stopPropagation: function () {
          var l = this.nativeEvent
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
            (this.isPropagationStopped = Mu))
        },
        persist: function () {},
        isPersistent: Mu,
      }),
      t
    )
  }
  var an = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ju = vt(an),
    Aa = b({}, an, { view: 0, detail: 0 }),
    Tv = vt(Aa),
    fc,
    dc,
    Na,
    Uu = b({}, Aa, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: hc,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== Na &&
              (Na && e.type === 'mousemove'
                ? ((fc = e.screenX - Na.screenX), (dc = e.screenY - Na.screenY))
                : (dc = fc = 0),
              (Na = e)),
            fc)
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : dc
      },
    }),
    Ss = vt(Uu),
    Rv = b({}, Uu, { dataTransfer: 0 }),
    zv = vt(Rv),
    Av = b({}, Aa, { relatedTarget: 0 }),
    mc = vt(Av),
    Nv = b({}, an, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    _v = vt(Nv),
    Cv = b({}, an, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData
      },
    }),
    Ov = vt(Cv),
    Dv = b({}, an, { data: 0 }),
    xs = vt(Dv),
    Mv = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    jv = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    Uv = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
  function wv(e) {
    var t = this.nativeEvent
    return t.getModifierState ? t.getModifierState(e) : (e = Uv[e]) ? !!t[e] : !1
  }
  function hc() {
    return wv
  }
  var Hv = b({}, Aa, {
      key: function (e) {
        if (e.key) {
          var t = Mv[e.key] || e.key
          if (t !== 'Unidentified') return t
        }
        return e.type === 'keypress'
          ? ((e = Du(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? jv[e.keyCode] || 'Unidentified'
            : ''
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: hc,
      charCode: function (e) {
        return e.type === 'keypress' ? Du(e) : 0
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Du(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0
      },
    }),
    Lv = vt(Hv),
    Bv = b({}, Uu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Es = vt(Bv),
    qv = b({}, Aa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: hc,
    }),
    Yv = vt(qv),
    Gv = b({}, an, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Vv = vt(Gv),
    Xv = b({}, Uu, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Qv = vt(Xv),
    Zv = b({}, an, { newState: 0, oldState: 0 }),
    Kv = vt(Zv),
    Jv = [9, 13, 27, 32],
    vc = ul && 'CompositionEvent' in window,
    _a = null
  ul && 'documentMode' in document && (_a = document.documentMode)
  var kv = ul && 'TextEvent' in window && !_a,
    Ts = ul && (!vc || (_a && 8 < _a && 11 >= _a)),
    Rs = ' ',
    zs = !1
  function As(e, t) {
    switch (e) {
      case 'keyup':
        return Jv.indexOf(t.keyCode) !== -1
      case 'keydown':
        return t.keyCode !== 229
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0
      default:
        return !1
    }
  }
  function Ns(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null)
  }
  var Un = !1
  function $v(e, t) {
    switch (e) {
      case 'compositionend':
        return Ns(t)
      case 'keypress':
        return t.which !== 32 ? null : ((zs = !0), Rs)
      case 'textInput':
        return ((e = t.data), e === Rs && zs ? null : e)
      default:
        return null
    }
  }
  function Wv(e, t) {
    if (Un)
      return e === 'compositionend' || (!vc && As(e, t))
        ? ((e = ps()), (Ou = sc = Cl = null), (Un = !1), e)
        : null
    switch (e) {
      case 'paste':
        return null
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char
          if (t.which) return String.fromCharCode(t.which)
        }
        return null
      case 'compositionend':
        return Ts && t.locale !== 'ko' ? null : t.data
      default:
        return null
    }
  }
  var Fv = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  }
  function _s(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return t === 'input' ? !!Fv[e.type] : t === 'textarea'
  }
  function Cs(e, t, l, n) {
    ;(Mn ? (jn ? jn.push(n) : (jn = [n])) : (Mn = n),
      (t = Ti(t, 'onChange')),
      0 < t.length &&
        ((l = new ju('onChange', 'change', null, l, n)), e.push({ event: l, listeners: t })))
  }
  var Ca = null,
    Oa = null
  function Iv(e) {
    dm(e, 0)
  }
  function wu(e) {
    var t = Ta(e)
    if (ss(t)) return e
  }
  function Os(e, t) {
    if (e === 'change') return t
  }
  var Ds = !1
  if (ul) {
    var gc
    if (ul) {
      var yc = 'oninput' in document
      if (!yc) {
        var Ms = document.createElement('div')
        ;(Ms.setAttribute('oninput', 'return;'), (yc = typeof Ms.oninput == 'function'))
      }
      gc = yc
    } else gc = !1
    Ds = gc && (!document.documentMode || 9 < document.documentMode)
  }
  function js() {
    Ca && (Ca.detachEvent('onpropertychange', Us), (Oa = Ca = null))
  }
  function Us(e) {
    if (e.propertyName === 'value' && wu(Oa)) {
      var t = []
      ;(Cs(t, Oa, e, cc(e)), ys(Iv, t))
    }
  }
  function Pv(e, t, l) {
    e === 'focusin'
      ? (js(), (Ca = t), (Oa = l), Ca.attachEvent('onpropertychange', Us))
      : e === 'focusout' && js()
  }
  function eg(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return wu(Oa)
  }
  function tg(e, t) {
    if (e === 'click') return wu(t)
  }
  function lg(e, t) {
    if (e === 'input' || e === 'change') return wu(t)
  }
  function ng(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
  }
  var zt = typeof Object.is == 'function' ? Object.is : ng
  function Da(e, t) {
    if (zt(e, t)) return !0
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
    var l = Object.keys(e),
      n = Object.keys(t)
    if (l.length !== n.length) return !1
    for (n = 0; n < l.length; n++) {
      var a = l[n]
      if (!Me.call(t, a) || !zt(e[a], t[a])) return !1
    }
    return !0
  }
  function ws(e) {
    for (; e && e.firstChild; ) e = e.firstChild
    return e
  }
  function Hs(e, t) {
    var l = ws(e)
    e = 0
    for (var n; l; ) {
      if (l.nodeType === 3) {
        if (((n = e + l.textContent.length), e <= t && n >= t)) return { node: l, offset: t - e }
        e = n
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling
            break e
          }
          l = l.parentNode
        }
        l = void 0
      }
      l = ws(l)
    }
  }
  function Ls(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Ls(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1
  }
  function Bs(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window
    for (var t = _u(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == 'string'
      } catch {
        l = !1
      }
      if (l) e = t.contentWindow
      else break
      t = _u(e.document)
    }
    return t
  }
  function pc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    )
  }
  var ag = ul && 'documentMode' in document && 11 >= document.documentMode,
    wn = null,
    bc = null,
    Ma = null,
    Sc = !1
  function qs(e, t, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument
    Sc ||
      wn == null ||
      wn !== _u(n) ||
      ((n = wn),
      'selectionStart' in n && pc(n)
        ? (n = { start: n.selectionStart, end: n.selectionEnd })
        : ((n = ((n.ownerDocument && n.ownerDocument.defaultView) || window).getSelection()),
          (n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset,
          })),
      (Ma && Da(Ma, n)) ||
        ((Ma = n),
        (n = Ti(bc, 'onSelect')),
        0 < n.length &&
          ((t = new ju('onSelect', 'select', null, t, l)),
          e.push({ event: t, listeners: n }),
          (t.target = wn))))
  }
  function un(e, t) {
    var l = {}
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l['Webkit' + e] = 'webkit' + t),
      (l['Moz' + e] = 'moz' + t),
      l
    )
  }
  var Hn = {
      animationend: un('Animation', 'AnimationEnd'),
      animationiteration: un('Animation', 'AnimationIteration'),
      animationstart: un('Animation', 'AnimationStart'),
      transitionrun: un('Transition', 'TransitionRun'),
      transitionstart: un('Transition', 'TransitionStart'),
      transitioncancel: un('Transition', 'TransitionCancel'),
      transitionend: un('Transition', 'TransitionEnd'),
    },
    xc = {},
    Ys = {}
  ul &&
    ((Ys = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Hn.animationend.animation,
      delete Hn.animationiteration.animation,
      delete Hn.animationstart.animation),
    'TransitionEvent' in window || delete Hn.transitionend.transition)
  function cn(e) {
    if (xc[e]) return xc[e]
    if (!Hn[e]) return e
    var t = Hn[e],
      l
    for (l in t) if (t.hasOwnProperty(l) && l in Ys) return (xc[e] = t[l])
    return e
  }
  var Gs = cn('animationend'),
    Vs = cn('animationiteration'),
    Xs = cn('animationstart'),
    ug = cn('transitionrun'),
    ig = cn('transitionstart'),
    cg = cn('transitioncancel'),
    Qs = cn('transitionend'),
    Zs = new Map(),
    Ec =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      )
  Ec.push('scrollEnd')
  function Qt(e, t) {
    ;(Zs.set(e, t), nn(t, [e]))
  }
  var Hu =
      typeof reportError == 'function'
        ? reportError
        : function (e) {
            if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
              var t = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == 'object' && e !== null && typeof e.message == 'string'
                    ? String(e.message)
                    : String(e),
                error: e,
              })
              if (!window.dispatchEvent(t)) return
            } else if (typeof process == 'object' && typeof process.emit == 'function') {
              process.emit('uncaughtException', e)
              return
            }
            console.error(e)
          },
    wt = [],
    Ln = 0,
    Tc = 0
  function Lu() {
    for (var e = Ln, t = (Tc = Ln = 0); t < e; ) {
      var l = wt[t]
      wt[t++] = null
      var n = wt[t]
      wt[t++] = null
      var a = wt[t]
      wt[t++] = null
      var u = wt[t]
      if (((wt[t++] = null), n !== null && a !== null)) {
        var o = n.pending
        ;(o === null ? (a.next = a) : ((a.next = o.next), (o.next = a)), (n.pending = a))
      }
      u !== 0 && Ks(l, a, u)
    }
  }
  function Bu(e, t, l, n) {
    ;((wt[Ln++] = e),
      (wt[Ln++] = t),
      (wt[Ln++] = l),
      (wt[Ln++] = n),
      (Tc |= n),
      (e.lanes |= n),
      (e = e.alternate),
      e !== null && (e.lanes |= n))
  }
  function Rc(e, t, l, n) {
    return (Bu(e, t, l, n), qu(e))
  }
  function rn(e, t) {
    return (Bu(e, null, null, t), qu(e))
  }
  function Ks(e, t, l) {
    e.lanes |= l
    var n = e.alternate
    n !== null && (n.lanes |= l)
    for (var a = !1, u = e.return; u !== null; )
      ((u.childLanes |= l),
        (n = u.alternate),
        n !== null && (n.childLanes |= l),
        u.tag === 22 && ((e = u.stateNode), e === null || e._visibility & 1 || (a = !0)),
        (e = u),
        (u = u.return))
    return e.tag === 3
      ? ((u = e.stateNode),
        a &&
          t !== null &&
          ((a = 31 - Rt(l)),
          (e = u.hiddenUpdates),
          (n = e[a]),
          n === null ? (e[a] = [t]) : n.push(t),
          (t.lane = l | 536870912)),
        u)
      : null
  }
  function qu(e) {
    if (50 < eu) throw ((eu = 0), (jr = null), Error(c(185)))
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return))
    return e.tag === 3 ? e.stateNode : null
  }
  var Bn = {}
  function rg(e, t, l, n) {
    ;((this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = n),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null))
  }
  function At(e, t, l, n) {
    return new rg(e, t, l, n)
  }
  function zc(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent))
  }
  function il(e, t) {
    var l = e.alternate
    return (
      l === null
        ? ((l = At(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    )
  }
  function Js(e, t) {
    e.flags &= 65011714
    var l = e.alternate
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    )
  }
  function Yu(e, t, l, n, a, u) {
    var o = 0
    if (((n = e), typeof e == 'function')) zc(e) && (o = 1)
    else if (typeof e == 'string')
      o = my(e, l, Q.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5
    else
      e: switch (e) {
        case ne:
          return ((e = At(31, l, t, a)), (e.elementType = ne), (e.lanes = u), e)
        case q:
          return on(l.children, a, u, t)
        case B:
          ;((o = 8), (a |= 24))
          break
        case j:
          return ((e = At(12, l, t, a | 2)), (e.elementType = j), (e.lanes = u), e)
        case $:
          return ((e = At(13, l, t, a)), (e.elementType = $), (e.lanes = u), e)
        case re:
          return ((e = At(19, l, t, a)), (e.elementType = re), (e.lanes = u), e)
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case Z:
                o = 10
                break e
              case U:
                o = 9
                break e
              case ee:
                o = 11
                break e
              case k:
                o = 14
                break e
              case Se:
                ;((o = 16), (n = null))
                break e
            }
          ;((o = 29), (l = Error(c(130, e === null ? 'null' : typeof e, ''))), (n = null))
      }
    return ((t = At(o, l, t, a)), (t.elementType = e), (t.type = n), (t.lanes = u), t)
  }
  function on(e, t, l, n) {
    return ((e = At(7, e, n, t)), (e.lanes = l), e)
  }
  function Ac(e, t, l) {
    return ((e = At(6, e, null, t)), (e.lanes = l), e)
  }
  function ks(e) {
    var t = At(18, null, null, 0)
    return ((t.stateNode = e), t)
  }
  function Nc(e, t, l) {
    return (
      (t = At(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    )
  }
  var $s = new WeakMap()
  function Ht(e, t) {
    if (typeof e == 'object' && e !== null) {
      var l = $s.get(e)
      return l !== void 0 ? l : ((t = { value: e, source: t, stack: He(t) }), $s.set(e, t), t)
    }
    return { value: e, source: t, stack: He(t) }
  }
  var qn = [],
    Yn = 0,
    Gu = null,
    ja = 0,
    Lt = [],
    Bt = 0,
    Ol = null,
    Wt = 1,
    Ft = ''
  function cl(e, t) {
    ;((qn[Yn++] = ja), (qn[Yn++] = Gu), (Gu = e), (ja = t))
  }
  function Ws(e, t, l) {
    ;((Lt[Bt++] = Wt), (Lt[Bt++] = Ft), (Lt[Bt++] = Ol), (Ol = e))
    var n = Wt
    e = Ft
    var a = 32 - Rt(n) - 1
    ;((n &= ~(1 << a)), (l += 1))
    var u = 32 - Rt(t) + a
    if (30 < u) {
      var o = a - (a % 5)
      ;((u = (n & ((1 << o) - 1)).toString(32)),
        (n >>= o),
        (a -= o),
        (Wt = (1 << (32 - Rt(t) + a)) | (l << a) | n),
        (Ft = u + e))
    } else ((Wt = (1 << u) | (l << a) | n), (Ft = e))
  }
  function _c(e) {
    e.return !== null && (cl(e, 1), Ws(e, 1, 0))
  }
  function Cc(e) {
    for (; e === Gu; ) ((Gu = qn[--Yn]), (qn[Yn] = null), (ja = qn[--Yn]), (qn[Yn] = null))
    for (; e === Ol; )
      ((Ol = Lt[--Bt]),
        (Lt[Bt] = null),
        (Ft = Lt[--Bt]),
        (Lt[Bt] = null),
        (Wt = Lt[--Bt]),
        (Lt[Bt] = null))
  }
  function Fs(e, t) {
    ;((Lt[Bt++] = Wt), (Lt[Bt++] = Ft), (Lt[Bt++] = Ol), (Wt = t.id), (Ft = t.overflow), (Ol = e))
  }
  var ut = null,
    je = null,
    ye = !1,
    Dl = null,
    qt = !1,
    Oc = Error(c(519))
  function Ml(e) {
    var t = Error(
      c(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', '')
    )
    throw (Ua(Ht(t, e)), Oc)
  }
  function Is(e) {
    var t = e.stateNode,
      l = e.type,
      n = e.memoizedProps
    switch (((t[at] = e), (t[ht] = n), l)) {
      case 'dialog':
        ;(me('cancel', t), me('close', t))
        break
      case 'iframe':
      case 'object':
      case 'embed':
        me('load', t)
        break
      case 'video':
      case 'audio':
        for (l = 0; l < lu.length; l++) me(lu[l], t)
        break
      case 'source':
        me('error', t)
        break
      case 'img':
      case 'image':
      case 'link':
        ;(me('error', t), me('load', t))
        break
      case 'details':
        me('toggle', t)
        break
      case 'input':
        ;(me('invalid', t),
          fs(t, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, !0))
        break
      case 'select':
        me('invalid', t)
        break
      case 'textarea':
        ;(me('invalid', t), ms(t, n.value, n.defaultValue, n.children))
    }
    ;((l = n.children),
      (typeof l != 'string' && typeof l != 'number' && typeof l != 'bigint') ||
      t.textContent === '' + l ||
      n.suppressHydrationWarning === !0 ||
      gm(t.textContent, l)
        ? (n.popover != null && (me('beforetoggle', t), me('toggle', t)),
          n.onScroll != null && me('scroll', t),
          n.onScrollEnd != null && me('scrollend', t),
          n.onClick != null && (t.onclick = al),
          (t = !0))
        : (t = !1),
      t || Ml(e, !0))
  }
  function Ps(e) {
    for (ut = e.return; ut; )
      switch (ut.tag) {
        case 5:
        case 31:
        case 13:
          qt = !1
          return
        case 27:
        case 3:
          qt = !0
          return
        default:
          ut = ut.return
      }
  }
  function Gn(e) {
    if (e !== ut) return !1
    if (!ye) return (Ps(e), (ye = !0), !1)
    var t = e.tag,
      l
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type), (l = !(l !== 'form' && l !== 'button') || kr(e.type, e.memoizedProps))),
        (l = !l)),
      l && je && Ml(e),
      Ps(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(c(317))
      je = zm(e)
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(c(317))
      je = zm(e)
    } else
      t === 27
        ? ((t = je), Kl(e.type) ? ((e = Pr), (Pr = null), (je = e)) : (je = t))
        : (je = ut ? Gt(e.stateNode.nextSibling) : null)
    return !0
  }
  function sn() {
    ;((je = ut = null), (ye = !1))
  }
  function Dc() {
    var e = Dl
    return (e !== null && (bt === null ? (bt = e) : bt.push.apply(bt, e), (Dl = null)), e)
  }
  function Ua(e) {
    Dl === null ? (Dl = [e]) : Dl.push(e)
  }
  var Mc = S(null),
    fn = null,
    rl = null
  function jl(e, t, l) {
    ;(V(Mc, t._currentValue), (t._currentValue = l))
  }
  function ol(e) {
    ;((e._currentValue = Mc.current), H(Mc))
  }
  function jc(e, t, l) {
    for (; e !== null; ) {
      var n = e.alternate
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
          : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
        e === l)
      )
        break
      e = e.return
    }
  }
  function Uc(e, t, l, n) {
    var a = e.child
    for (a !== null && (a.return = e); a !== null; ) {
      var u = a.dependencies
      if (u !== null) {
        var o = a.child
        u = u.firstContext
        e: for (; u !== null; ) {
          var d = u
          u = a
          for (var p = 0; p < t.length; p++)
            if (d.context === t[p]) {
              ;((u.lanes |= l),
                (d = u.alternate),
                d !== null && (d.lanes |= l),
                jc(u.return, l, e),
                n || (o = null))
              break e
            }
          u = d.next
        }
      } else if (a.tag === 18) {
        if (((o = a.return), o === null)) throw Error(c(341))
        ;((o.lanes |= l), (u = o.alternate), u !== null && (u.lanes |= l), jc(o, l, e), (o = null))
      } else o = a.child
      if (o !== null) o.return = a
      else
        for (o = a; o !== null; ) {
          if (o === e) {
            o = null
            break
          }
          if (((a = o.sibling), a !== null)) {
            ;((a.return = o.return), (o = a))
            break
          }
          o = o.return
        }
      a = o
    }
  }
  function Vn(e, t, l, n) {
    e = null
    for (var a = t, u = !1; a !== null; ) {
      if (!u) {
        if ((a.flags & 524288) !== 0) u = !0
        else if ((a.flags & 262144) !== 0) break
      }
      if (a.tag === 10) {
        var o = a.alternate
        if (o === null) throw Error(c(387))
        if (((o = o.memoizedProps), o !== null)) {
          var d = a.type
          zt(a.pendingProps.value, o.value) || (e !== null ? e.push(d) : (e = [d]))
        }
      } else if (a === oe.current) {
        if (((o = a.alternate), o === null)) throw Error(c(387))
        o.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
          (e !== null ? e.push(cu) : (e = [cu]))
      }
      a = a.return
    }
    ;(e !== null && Uc(t, e, l, n), (t.flags |= 262144))
  }
  function Vu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!zt(e.context._currentValue, e.memoizedValue)) return !0
      e = e.next
    }
    return !1
  }
  function dn(e) {
    ;((fn = e), (rl = null), (e = e.dependencies), e !== null && (e.firstContext = null))
  }
  function it(e) {
    return ef(fn, e)
  }
  function Xu(e, t) {
    return (fn === null && dn(e), ef(e, t))
  }
  function ef(e, t) {
    var l = t._currentValue
    if (((t = { context: t, memoizedValue: l, next: null }), rl === null)) {
      if (e === null) throw Error(c(308))
      ;((rl = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288))
    } else rl = rl.next = t
    return l
  }
  var og =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, n) {
                  e.push(n)
                },
              })
            this.abort = function () {
              ;((t.aborted = !0),
                e.forEach(function (l) {
                  return l()
                }))
            }
          },
    sg = i.unstable_scheduleCallback,
    fg = i.unstable_NormalPriority,
    $e = {
      $$typeof: Z,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    }
  function wc() {
    return { controller: new og(), data: new Map(), refCount: 0 }
  }
  function wa(e) {
    ;(e.refCount--,
      e.refCount === 0 &&
        sg(fg, function () {
          e.controller.abort()
        }))
  }
  var Ha = null,
    Hc = 0,
    Xn = 0,
    Qn = null
  function dg(e, t) {
    if (Ha === null) {
      var l = (Ha = [])
      ;((Hc = 0),
        (Xn = qr()),
        (Qn = {
          status: 'pending',
          value: void 0,
          then: function (n) {
            l.push(n)
          },
        }))
    }
    return (Hc++, t.then(tf, tf), t)
  }
  function tf() {
    if (--Hc === 0 && Ha !== null) {
      Qn !== null && (Qn.status = 'fulfilled')
      var e = Ha
      ;((Ha = null), (Xn = 0), (Qn = null))
      for (var t = 0; t < e.length; t++) (0, e[t])()
    }
  }
  function mg(e, t) {
    var l = [],
      n = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (a) {
          l.push(a)
        },
      }
    return (
      e.then(
        function () {
          ;((n.status = 'fulfilled'), (n.value = t))
          for (var a = 0; a < l.length; a++) (0, l[a])(t)
        },
        function (a) {
          for (n.status = 'rejected', n.reason = a, a = 0; a < l.length; a++) (0, l[a])(void 0)
        }
      ),
      n
    )
  }
  var lf = D.S
  D.S = function (e, t) {
    ;((Yd = Pe()),
      typeof t == 'object' && t !== null && typeof t.then == 'function' && dg(e, t),
      lf !== null && lf(e, t))
  }
  var mn = S(null)
  function Lc() {
    var e = mn.current
    return e !== null ? e : De.pooledCache
  }
  function Qu(e, t) {
    t === null ? V(mn, mn.current) : V(mn, t.pool)
  }
  function nf() {
    var e = Lc()
    return e === null ? null : { parent: $e._currentValue, pool: e }
  }
  var Zn = Error(c(460)),
    Bc = Error(c(474)),
    Zu = Error(c(542)),
    Ku = { then: function () {} }
  function af(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected')
  }
  function uf(e, t, l) {
    switch (
      ((l = e[l]), l === void 0 ? e.push(t) : l !== t && (t.then(al, al), (t = l)), t.status)
    ) {
      case 'fulfilled':
        return t.value
      case 'rejected':
        throw ((e = t.reason), rf(e), e)
      default:
        if (typeof t.status == 'string') t.then(al, al)
        else {
          if (((e = De), e !== null && 100 < e.shellSuspendCounter)) throw Error(c(482))
          ;((e = t),
            (e.status = 'pending'),
            e.then(
              function (n) {
                if (t.status === 'pending') {
                  var a = t
                  ;((a.status = 'fulfilled'), (a.value = n))
                }
              },
              function (n) {
                if (t.status === 'pending') {
                  var a = t
                  ;((a.status = 'rejected'), (a.reason = n))
                }
              }
            ))
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value
          case 'rejected':
            throw ((e = t.reason), rf(e), e)
        }
        throw ((vn = t), Zn)
    }
  }
  function hn(e) {
    try {
      var t = e._init
      return t(e._payload)
    } catch (l) {
      throw l !== null && typeof l == 'object' && typeof l.then == 'function' ? ((vn = l), Zn) : l
    }
  }
  var vn = null
  function cf() {
    if (vn === null) throw Error(c(459))
    var e = vn
    return ((vn = null), e)
  }
  function rf(e) {
    if (e === Zn || e === Zu) throw Error(c(483))
  }
  var Kn = null,
    La = 0
  function Ju(e) {
    var t = La
    return ((La += 1), Kn === null && (Kn = []), uf(Kn, e, t))
  }
  function Ba(e, t) {
    ;((t = t.props.ref), (e.ref = t !== void 0 ? t : null))
  }
  function ku(e, t) {
    throw t.$$typeof === A
      ? Error(c(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          c(
            31,
            e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e
          )
        ))
  }
  function of(e) {
    function t(z, x) {
      if (e) {
        var N = z.deletions
        N === null ? ((z.deletions = [x]), (z.flags |= 16)) : N.push(x)
      }
    }
    function l(z, x) {
      if (!e) return null
      for (; x !== null; ) (t(z, x), (x = x.sibling))
      return null
    }
    function n(z) {
      for (var x = new Map(); z !== null; )
        (z.key !== null ? x.set(z.key, z) : x.set(z.index, z), (z = z.sibling))
      return x
    }
    function a(z, x) {
      return ((z = il(z, x)), (z.index = 0), (z.sibling = null), z)
    }
    function u(z, x, N) {
      return (
        (z.index = N),
        e
          ? ((N = z.alternate),
            N !== null
              ? ((N = N.index), N < x ? ((z.flags |= 67108866), x) : N)
              : ((z.flags |= 67108866), x))
          : ((z.flags |= 1048576), x)
      )
    }
    function o(z) {
      return (e && z.alternate === null && (z.flags |= 67108866), z)
    }
    function d(z, x, N, w) {
      return x === null || x.tag !== 6
        ? ((x = Ac(N, z.mode, w)), (x.return = z), x)
        : ((x = a(x, N)), (x.return = z), x)
    }
    function p(z, x, N, w) {
      var F = N.type
      return F === q
        ? M(z, x, N.props.children, w, N.key)
        : x !== null &&
            (x.elementType === F ||
              (typeof F == 'object' && F !== null && F.$$typeof === Se && hn(F) === x.type))
          ? ((x = a(x, N.props)), Ba(x, N), (x.return = z), x)
          : ((x = Yu(N.type, N.key, N.props, null, z.mode, w)), Ba(x, N), (x.return = z), x)
    }
    function _(z, x, N, w) {
      return x === null ||
        x.tag !== 4 ||
        x.stateNode.containerInfo !== N.containerInfo ||
        x.stateNode.implementation !== N.implementation
        ? ((x = Nc(N, z.mode, w)), (x.return = z), x)
        : ((x = a(x, N.children || [])), (x.return = z), x)
    }
    function M(z, x, N, w, F) {
      return x === null || x.tag !== 7
        ? ((x = on(N, z.mode, w, F)), (x.return = z), x)
        : ((x = a(x, N)), (x.return = z), x)
    }
    function L(z, x, N) {
      if ((typeof x == 'string' && x !== '') || typeof x == 'number' || typeof x == 'bigint')
        return ((x = Ac('' + x, z.mode, N)), (x.return = z), x)
      if (typeof x == 'object' && x !== null) {
        switch (x.$$typeof) {
          case Y:
            return ((N = Yu(x.type, x.key, x.props, null, z.mode, N)), Ba(N, x), (N.return = z), N)
          case G:
            return ((x = Nc(x, z.mode, N)), (x.return = z), x)
          case Se:
            return ((x = hn(x)), L(z, x, N))
        }
        if (Ee(x) || P(x)) return ((x = on(x, z.mode, N, null)), (x.return = z), x)
        if (typeof x.then == 'function') return L(z, Ju(x), N)
        if (x.$$typeof === Z) return L(z, Xu(z, x), N)
        ku(z, x)
      }
      return null
    }
    function C(z, x, N, w) {
      var F = x !== null ? x.key : null
      if ((typeof N == 'string' && N !== '') || typeof N == 'number' || typeof N == 'bigint')
        return F !== null ? null : d(z, x, '' + N, w)
      if (typeof N == 'object' && N !== null) {
        switch (N.$$typeof) {
          case Y:
            return N.key === F ? p(z, x, N, w) : null
          case G:
            return N.key === F ? _(z, x, N, w) : null
          case Se:
            return ((N = hn(N)), C(z, x, N, w))
        }
        if (Ee(N) || P(N)) return F !== null ? null : M(z, x, N, w, null)
        if (typeof N.then == 'function') return C(z, x, Ju(N), w)
        if (N.$$typeof === Z) return C(z, x, Xu(z, N), w)
        ku(z, N)
      }
      return null
    }
    function O(z, x, N, w, F) {
      if ((typeof w == 'string' && w !== '') || typeof w == 'number' || typeof w == 'bigint')
        return ((z = z.get(N) || null), d(x, z, '' + w, F))
      if (typeof w == 'object' && w !== null) {
        switch (w.$$typeof) {
          case Y:
            return ((z = z.get(w.key === null ? N : w.key) || null), p(x, z, w, F))
          case G:
            return ((z = z.get(w.key === null ? N : w.key) || null), _(x, z, w, F))
          case Se:
            return ((w = hn(w)), O(z, x, N, w, F))
        }
        if (Ee(w) || P(w)) return ((z = z.get(N) || null), M(x, z, w, F, null))
        if (typeof w.then == 'function') return O(z, x, N, Ju(w), F)
        if (w.$$typeof === Z) return O(z, x, N, Xu(x, w), F)
        ku(x, w)
      }
      return null
    }
    function K(z, x, N, w) {
      for (
        var F = null, pe = null, J = x, ie = (x = 0), ve = null;
        J !== null && ie < N.length;
        ie++
      ) {
        J.index > ie ? ((ve = J), (J = null)) : (ve = J.sibling)
        var be = C(z, J, N[ie], w)
        if (be === null) {
          J === null && (J = ve)
          break
        }
        ;(e && J && be.alternate === null && t(z, J),
          (x = u(be, x, ie)),
          pe === null ? (F = be) : (pe.sibling = be),
          (pe = be),
          (J = ve))
      }
      if (ie === N.length) return (l(z, J), ye && cl(z, ie), F)
      if (J === null) {
        for (; ie < N.length; ie++)
          ((J = L(z, N[ie], w)),
            J !== null && ((x = u(J, x, ie)), pe === null ? (F = J) : (pe.sibling = J), (pe = J)))
        return (ye && cl(z, ie), F)
      }
      for (J = n(J); ie < N.length; ie++)
        ((ve = O(J, z, ie, N[ie], w)),
          ve !== null &&
            (e && ve.alternate !== null && J.delete(ve.key === null ? ie : ve.key),
            (x = u(ve, x, ie)),
            pe === null ? (F = ve) : (pe.sibling = ve),
            (pe = ve)))
      return (
        e &&
          J.forEach(function (Fl) {
            return t(z, Fl)
          }),
        ye && cl(z, ie),
        F
      )
    }
    function I(z, x, N, w) {
      if (N == null) throw Error(c(151))
      for (
        var F = null, pe = null, J = x, ie = (x = 0), ve = null, be = N.next();
        J !== null && !be.done;
        ie++, be = N.next()
      ) {
        J.index > ie ? ((ve = J), (J = null)) : (ve = J.sibling)
        var Fl = C(z, J, be.value, w)
        if (Fl === null) {
          J === null && (J = ve)
          break
        }
        ;(e && J && Fl.alternate === null && t(z, J),
          (x = u(Fl, x, ie)),
          pe === null ? (F = Fl) : (pe.sibling = Fl),
          (pe = Fl),
          (J = ve))
      }
      if (be.done) return (l(z, J), ye && cl(z, ie), F)
      if (J === null) {
        for (; !be.done; ie++, be = N.next())
          ((be = L(z, be.value, w)),
            be !== null &&
              ((x = u(be, x, ie)), pe === null ? (F = be) : (pe.sibling = be), (pe = be)))
        return (ye && cl(z, ie), F)
      }
      for (J = n(J); !be.done; ie++, be = N.next())
        ((be = O(J, z, ie, be.value, w)),
          be !== null &&
            (e && be.alternate !== null && J.delete(be.key === null ? ie : be.key),
            (x = u(be, x, ie)),
            pe === null ? (F = be) : (pe.sibling = be),
            (pe = be)))
      return (
        e &&
          J.forEach(function (Ry) {
            return t(z, Ry)
          }),
        ye && cl(z, ie),
        F
      )
    }
    function Ce(z, x, N, w) {
      if (
        (typeof N == 'object' &&
          N !== null &&
          N.type === q &&
          N.key === null &&
          (N = N.props.children),
        typeof N == 'object' && N !== null)
      ) {
        switch (N.$$typeof) {
          case Y:
            e: {
              for (var F = N.key; x !== null; ) {
                if (x.key === F) {
                  if (((F = N.type), F === q)) {
                    if (x.tag === 7) {
                      ;(l(z, x.sibling), (w = a(x, N.props.children)), (w.return = z), (z = w))
                      break e
                    }
                  } else if (
                    x.elementType === F ||
                    (typeof F == 'object' && F !== null && F.$$typeof === Se && hn(F) === x.type)
                  ) {
                    ;(l(z, x.sibling), (w = a(x, N.props)), Ba(w, N), (w.return = z), (z = w))
                    break e
                  }
                  l(z, x)
                  break
                } else t(z, x)
                x = x.sibling
              }
              N.type === q
                ? ((w = on(N.props.children, z.mode, w, N.key)), (w.return = z), (z = w))
                : ((w = Yu(N.type, N.key, N.props, null, z.mode, w)),
                  Ba(w, N),
                  (w.return = z),
                  (z = w))
            }
            return o(z)
          case G:
            e: {
              for (F = N.key; x !== null; ) {
                if (x.key === F)
                  if (
                    x.tag === 4 &&
                    x.stateNode.containerInfo === N.containerInfo &&
                    x.stateNode.implementation === N.implementation
                  ) {
                    ;(l(z, x.sibling), (w = a(x, N.children || [])), (w.return = z), (z = w))
                    break e
                  } else {
                    l(z, x)
                    break
                  }
                else t(z, x)
                x = x.sibling
              }
              ;((w = Nc(N, z.mode, w)), (w.return = z), (z = w))
            }
            return o(z)
          case Se:
            return ((N = hn(N)), Ce(z, x, N, w))
        }
        if (Ee(N)) return K(z, x, N, w)
        if (P(N)) {
          if (((F = P(N)), typeof F != 'function')) throw Error(c(150))
          return ((N = F.call(N)), I(z, x, N, w))
        }
        if (typeof N.then == 'function') return Ce(z, x, Ju(N), w)
        if (N.$$typeof === Z) return Ce(z, x, Xu(z, N), w)
        ku(z, N)
      }
      return (typeof N == 'string' && N !== '') || typeof N == 'number' || typeof N == 'bigint'
        ? ((N = '' + N),
          x !== null && x.tag === 6
            ? (l(z, x.sibling), (w = a(x, N)), (w.return = z), (z = w))
            : (l(z, x), (w = Ac(N, z.mode, w)), (w.return = z), (z = w)),
          o(z))
        : l(z, x)
    }
    return function (z, x, N, w) {
      try {
        La = 0
        var F = Ce(z, x, N, w)
        return ((Kn = null), F)
      } catch (J) {
        if (J === Zn || J === Zu) throw J
        var pe = At(29, J, null, z.mode)
        return ((pe.lanes = w), (pe.return = z), pe)
      } finally {
      }
    }
  }
  var gn = of(!0),
    sf = of(!1),
    Ul = !1
  function qc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    }
  }
  function Yc(e, t) {
    ;((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }))
  }
  function wl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null }
  }
  function Hl(e, t, l) {
    var n = e.updateQueue
    if (n === null) return null
    if (((n = n.shared), (xe & 2) !== 0)) {
      var a = n.pending
      return (
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (n.pending = t),
        (t = qu(e)),
        Ks(e, null, l),
        t
      )
    }
    return (Bu(e, n, t, l), qu(e))
  }
  function qa(e, t, l) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))) {
      var n = t.lanes
      ;((n &= e.pendingLanes), (l |= n), (t.lanes = l), es(e, l))
    }
  }
  function Gc(e, t) {
    var l = e.updateQueue,
      n = e.alternate
    if (n !== null && ((n = n.updateQueue), l === n)) {
      var a = null,
        u = null
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var o = { lane: l.lane, tag: l.tag, payload: l.payload, callback: null, next: null }
          ;(u === null ? (a = u = o) : (u = u.next = o), (l = l.next))
        } while (l !== null)
        u === null ? (a = u = t) : (u = u.next = t)
      } else a = u = t
      ;((l = {
        baseState: n.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: u,
        shared: n.shared,
        callbacks: n.callbacks,
      }),
        (e.updateQueue = l))
      return
    }
    ;((e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t))
  }
  var Vc = !1
  function Ya() {
    if (Vc) {
      var e = Qn
      if (e !== null) throw e
    }
  }
  function Ga(e, t, l, n) {
    Vc = !1
    var a = e.updateQueue
    Ul = !1
    var u = a.firstBaseUpdate,
      o = a.lastBaseUpdate,
      d = a.shared.pending
    if (d !== null) {
      a.shared.pending = null
      var p = d,
        _ = p.next
      ;((p.next = null), o === null ? (u = _) : (o.next = _), (o = p))
      var M = e.alternate
      M !== null &&
        ((M = M.updateQueue),
        (d = M.lastBaseUpdate),
        d !== o && (d === null ? (M.firstBaseUpdate = _) : (d.next = _), (M.lastBaseUpdate = p)))
    }
    if (u !== null) {
      var L = a.baseState
      ;((o = 0), (M = _ = p = null), (d = u))
      do {
        var C = d.lane & -536870913,
          O = C !== d.lane
        if (O ? (he & C) === C : (n & C) === C) {
          ;(C !== 0 && C === Xn && (Vc = !0),
            M !== null &&
              (M = M.next =
                { lane: 0, tag: d.tag, payload: d.payload, callback: null, next: null }))
          e: {
            var K = e,
              I = d
            C = t
            var Ce = l
            switch (I.tag) {
              case 1:
                if (((K = I.payload), typeof K == 'function')) {
                  L = K.call(Ce, L, C)
                  break e
                }
                L = K
                break e
              case 3:
                K.flags = (K.flags & -65537) | 128
              case 0:
                if (
                  ((K = I.payload), (C = typeof K == 'function' ? K.call(Ce, L, C) : K), C == null)
                )
                  break e
                L = b({}, L, C)
                break e
              case 2:
                Ul = !0
            }
          }
          ;((C = d.callback),
            C !== null &&
              ((e.flags |= 64),
              O && (e.flags |= 8192),
              (O = a.callbacks),
              O === null ? (a.callbacks = [C]) : O.push(C)))
        } else
          ((O = { lane: C, tag: d.tag, payload: d.payload, callback: d.callback, next: null }),
            M === null ? ((_ = M = O), (p = L)) : (M = M.next = O),
            (o |= C))
        if (((d = d.next), d === null)) {
          if (((d = a.shared.pending), d === null)) break
          ;((O = d),
            (d = O.next),
            (O.next = null),
            (a.lastBaseUpdate = O),
            (a.shared.pending = null))
        }
      } while (!0)
      ;(M === null && (p = L),
        (a.baseState = p),
        (a.firstBaseUpdate = _),
        (a.lastBaseUpdate = M),
        u === null && (a.shared.lanes = 0),
        (Gl |= o),
        (e.lanes = o),
        (e.memoizedState = L))
    }
  }
  function ff(e, t) {
    if (typeof e != 'function') throw Error(c(191, e))
    e.call(t)
  }
  function df(e, t) {
    var l = e.callbacks
    if (l !== null) for (e.callbacks = null, e = 0; e < l.length; e++) ff(l[e], t)
  }
  var Jn = S(null),
    $u = S(0)
  function mf(e, t) {
    ;((e = pl), V($u, e), V(Jn, t), (pl = e | t.baseLanes))
  }
  function Xc() {
    ;(V($u, pl), V(Jn, Jn.current))
  }
  function Qc() {
    ;((pl = $u.current), H(Jn), H($u))
  }
  var Nt = S(null),
    Yt = null
  function Ll(e) {
    var t = e.alternate
    ;(V(Je, Je.current & 1),
      V(Nt, e),
      Yt === null && (t === null || Jn.current !== null || t.memoizedState !== null) && (Yt = e))
  }
  function Zc(e) {
    ;(V(Je, Je.current), V(Nt, e), Yt === null && (Yt = e))
  }
  function hf(e) {
    e.tag === 22 ? (V(Je, Je.current), V(Nt, e), Yt === null && (Yt = e)) : Bl()
  }
  function Bl() {
    ;(V(Je, Je.current), V(Nt, Nt.current))
  }
  function _t(e) {
    ;(H(Nt), Yt === e && (Yt = null), H(Je))
  }
  var Je = S(0)
  function Wu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState
        if (l !== null && ((l = l.dehydrated), l === null || Fr(l) || Ir(l))) return t
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === 'forwards' ||
          t.memoizedProps.revealOrder === 'backwards' ||
          t.memoizedProps.revealOrder === 'unstable_legacy-backwards' ||
          t.memoizedProps.revealOrder === 'together')
      ) {
        if ((t.flags & 128) !== 0) return t
      } else if (t.child !== null) {
        ;((t.child.return = t), (t = t.child))
        continue
      }
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null
        t = t.return
      }
      ;((t.sibling.return = t.return), (t = t.sibling))
    }
    return null
  }
  var sl = 0,
    ue = null,
    Ne = null,
    We = null,
    Fu = !1,
    kn = !1,
    yn = !1,
    Iu = 0,
    Va = 0,
    $n = null,
    hg = 0
  function Ge() {
    throw Error(c(321))
  }
  function Kc(e, t) {
    if (t === null) return !1
    for (var l = 0; l < t.length && l < e.length; l++) if (!zt(e[l], t[l])) return !1
    return !0
  }
  function Jc(e, t, l, n, a, u) {
    return (
      (sl = u),
      (ue = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (D.H = e === null || e.memoizedState === null ? Ff : rr),
      (yn = !1),
      (u = l(n, a)),
      (yn = !1),
      kn && (u = gf(t, l, n, a)),
      vf(e),
      u
    )
  }
  function vf(e) {
    D.H = Za
    var t = Ne !== null && Ne.next !== null
    if (((sl = 0), (We = Ne = ue = null), (Fu = !1), (Va = 0), ($n = null), t)) throw Error(c(300))
    e === null || Fe || ((e = e.dependencies), e !== null && Vu(e) && (Fe = !0))
  }
  function gf(e, t, l, n) {
    ue = e
    var a = 0
    do {
      if ((kn && ($n = null), (Va = 0), (kn = !1), 25 <= a)) throw Error(c(301))
      if (((a += 1), (We = Ne = null), e.updateQueue != null)) {
        var u = e.updateQueue
        ;((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0))
      }
      ;((D.H = If), (u = t(l, n)))
    } while (kn)
    return u
  }
  function vg() {
    var e = D.H,
      t = e.useState()[0]
    return (
      (t = typeof t.then == 'function' ? Xa(t) : t),
      (e = e.useState()[0]),
      (Ne !== null ? Ne.memoizedState : null) !== e && (ue.flags |= 1024),
      t
    )
  }
  function kc() {
    var e = Iu !== 0
    return ((Iu = 0), e)
  }
  function $c(e, t, l) {
    ;((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l))
  }
  function Wc(e) {
    if (Fu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue
        ;(t !== null && (t.pending = null), (e = e.next))
      }
      Fu = !1
    }
    ;((sl = 0), (We = Ne = ue = null), (kn = !1), (Va = Iu = 0), ($n = null))
  }
  function dt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
    return (We === null ? (ue.memoizedState = We = e) : (We = We.next = e), We)
  }
  function ke() {
    if (Ne === null) {
      var e = ue.alternate
      e = e !== null ? e.memoizedState : null
    } else e = Ne.next
    var t = We === null ? ue.memoizedState : We.next
    if (t !== null) ((We = t), (Ne = e))
    else {
      if (e === null) throw ue.alternate === null ? Error(c(467)) : Error(c(310))
      ;((Ne = e),
        (e = {
          memoizedState: Ne.memoizedState,
          baseState: Ne.baseState,
          baseQueue: Ne.baseQueue,
          queue: Ne.queue,
          next: null,
        }),
        We === null ? (ue.memoizedState = We = e) : (We = We.next = e))
    }
    return We
  }
  function Pu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null }
  }
  function Xa(e) {
    var t = Va
    return (
      (Va += 1),
      $n === null && ($n = []),
      (e = uf($n, e, t)),
      (t = ue),
      (We === null ? t.memoizedState : We.next) === null &&
        ((t = t.alternate), (D.H = t === null || t.memoizedState === null ? Ff : rr)),
      e
    )
  }
  function ei(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return Xa(e)
      if (e.$$typeof === Z) return it(e)
    }
    throw Error(c(438, String(e)))
  }
  function Fc(e) {
    var t = null,
      l = ue.updateQueue
    if ((l !== null && (t = l.memoCache), t == null)) {
      var n = ue.alternate
      n !== null &&
        ((n = n.updateQueue),
        n !== null &&
          ((n = n.memoCache),
          n != null &&
            (t = {
              data: n.data.map(function (a) {
                return a.slice()
              }),
              index: 0,
            })))
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = Pu()), (ue.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), n = 0; n < e; n++) l[n] = Xe
    return (t.index++, l)
  }
  function fl(e, t) {
    return typeof t == 'function' ? t(e) : t
  }
  function ti(e) {
    var t = ke()
    return Ic(t, Ne, e)
  }
  function Ic(e, t, l) {
    var n = e.queue
    if (n === null) throw Error(c(311))
    n.lastRenderedReducer = l
    var a = e.baseQueue,
      u = n.pending
    if (u !== null) {
      if (a !== null) {
        var o = a.next
        ;((a.next = u.next), (u.next = o))
      }
      ;((t.baseQueue = a = u), (n.pending = null))
    }
    if (((u = e.baseState), a === null)) e.memoizedState = u
    else {
      t = a.next
      var d = (o = null),
        p = null,
        _ = t,
        M = !1
      do {
        var L = _.lane & -536870913
        if (L !== _.lane ? (he & L) === L : (sl & L) === L) {
          var C = _.revertLane
          if (C === 0)
            (p !== null &&
              (p = p.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: _.action,
                  hasEagerState: _.hasEagerState,
                  eagerState: _.eagerState,
                  next: null,
                }),
              L === Xn && (M = !0))
          else if ((sl & C) === C) {
            ;((_ = _.next), C === Xn && (M = !0))
            continue
          } else
            ((L = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null,
            }),
              p === null ? ((d = p = L), (o = u)) : (p = p.next = L),
              (ue.lanes |= C),
              (Gl |= C))
          ;((L = _.action), yn && l(u, L), (u = _.hasEagerState ? _.eagerState : l(u, L)))
        } else
          ((C = {
            lane: L,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null,
          }),
            p === null ? ((d = p = C), (o = u)) : (p = p.next = C),
            (ue.lanes |= L),
            (Gl |= L))
        _ = _.next
      } while (_ !== null && _ !== t)
      if (
        (p === null ? (o = u) : (p.next = d),
        !zt(u, e.memoizedState) && ((Fe = !0), M && ((l = Qn), l !== null)))
      )
        throw l
      ;((e.memoizedState = u), (e.baseState = o), (e.baseQueue = p), (n.lastRenderedState = u))
    }
    return (a === null && (n.lanes = 0), [e.memoizedState, n.dispatch])
  }
  function Pc(e) {
    var t = ke(),
      l = t.queue
    if (l === null) throw Error(c(311))
    l.lastRenderedReducer = e
    var n = l.dispatch,
      a = l.pending,
      u = t.memoizedState
    if (a !== null) {
      l.pending = null
      var o = (a = a.next)
      do ((u = e(u, o.action)), (o = o.next))
      while (o !== a)
      ;(zt(u, t.memoizedState) || (Fe = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (l.lastRenderedState = u))
    }
    return [u, n]
  }
  function yf(e, t, l) {
    var n = ue,
      a = ke(),
      u = ye
    if (u) {
      if (l === void 0) throw Error(c(407))
      l = l()
    } else l = t()
    var o = !zt((Ne || a).memoizedState, l)
    if (
      (o && ((a.memoizedState = l), (Fe = !0)),
      (a = a.queue),
      lr(Sf.bind(null, n, a, e), [e]),
      a.getSnapshot !== t || o || (We !== null && We.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Wn(9, { destroy: void 0 }, bf.bind(null, n, a, l, t), null),
        De === null)
      )
        throw Error(c(349))
      u || (sl & 127) !== 0 || pf(n, t, l)
    }
    return l
  }
  function pf(e, t, l) {
    ;((e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = ue.updateQueue),
      t === null
        ? ((t = Pu()), (ue.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e)))
  }
  function bf(e, t, l, n) {
    ;((t.value = l), (t.getSnapshot = n), xf(t) && Ef(e))
  }
  function Sf(e, t, l) {
    return l(function () {
      xf(t) && Ef(e)
    })
  }
  function xf(e) {
    var t = e.getSnapshot
    e = e.value
    try {
      var l = t()
      return !zt(e, l)
    } catch {
      return !0
    }
  }
  function Ef(e) {
    var t = rn(e, 2)
    t !== null && St(t, e, 2)
  }
  function er(e) {
    var t = dt()
    if (typeof e == 'function') {
      var l = e
      if (((e = l()), yn)) {
        Nl(!0)
        try {
          l()
        } finally {
          Nl(!1)
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fl,
        lastRenderedState: e,
      }),
      t
    )
  }
  function Tf(e, t, l, n) {
    return ((e.baseState = l), Ic(e, Ne, typeof n == 'function' ? n : fl))
  }
  function gg(e, t, l, n, a) {
    if (ai(e)) throw Error(c(485))
    if (((e = t.action), e !== null)) {
      var u = {
        payload: a,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (o) {
          u.listeners.push(o)
        },
      }
      ;(D.T !== null ? l(!0) : (u.isTransition = !1),
        n(u),
        (l = t.pending),
        l === null
          ? ((u.next = t.pending = u), Rf(t, u))
          : ((u.next = l.next), (t.pending = l.next = u)))
    }
  }
  function Rf(e, t) {
    var l = t.action,
      n = t.payload,
      a = e.state
    if (t.isTransition) {
      var u = D.T,
        o = {}
      D.T = o
      try {
        var d = l(a, n),
          p = D.S
        ;(p !== null && p(o, d), zf(e, t, d))
      } catch (_) {
        tr(e, t, _)
      } finally {
        ;(u !== null && o.types !== null && (u.types = o.types), (D.T = u))
      }
    } else
      try {
        ;((u = l(a, n)), zf(e, t, u))
      } catch (_) {
        tr(e, t, _)
      }
  }
  function zf(e, t, l) {
    l !== null && typeof l == 'object' && typeof l.then == 'function'
      ? l.then(
          function (n) {
            Af(e, t, n)
          },
          function (n) {
            return tr(e, t, n)
          }
        )
      : Af(e, t, l)
  }
  function Af(e, t, l) {
    ;((t.status = 'fulfilled'),
      (t.value = l),
      Nf(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next), l === t ? (e.pending = null) : ((l = l.next), (t.next = l), Rf(e, l))))
  }
  function tr(e, t, l) {
    var n = e.pending
    if (((e.pending = null), n !== null)) {
      n = n.next
      do ((t.status = 'rejected'), (t.reason = l), Nf(t), (t = t.next))
      while (t !== n)
    }
    e.action = null
  }
  function Nf(e) {
    e = e.listeners
    for (var t = 0; t < e.length; t++) (0, e[t])()
  }
  function _f(e, t) {
    return t
  }
  function Cf(e, t) {
    if (ye) {
      var l = De.formState
      if (l !== null) {
        e: {
          var n = ue
          if (ye) {
            if (je) {
              t: {
                for (var a = je, u = qt; a.nodeType !== 8; ) {
                  if (!u) {
                    a = null
                    break t
                  }
                  if (((a = Gt(a.nextSibling)), a === null)) {
                    a = null
                    break t
                  }
                }
                ;((u = a.data), (a = u === 'F!' || u === 'F' ? a : null))
              }
              if (a) {
                ;((je = Gt(a.nextSibling)), (n = a.data === 'F!'))
                break e
              }
            }
            Ml(n)
          }
          n = !1
        }
        n && (t = l[0])
      }
    }
    return (
      (l = dt()),
      (l.memoizedState = l.baseState = t),
      (n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _f,
        lastRenderedState: t,
      }),
      (l.queue = n),
      (l = kf.bind(null, ue, n)),
      (n.dispatch = l),
      (n = er(!1)),
      (u = cr.bind(null, ue, !1, n.queue)),
      (n = dt()),
      (a = { state: t, dispatch: null, action: e, pending: null }),
      (n.queue = a),
      (l = gg.bind(null, ue, a, u, l)),
      (a.dispatch = l),
      (n.memoizedState = e),
      [t, l, !1]
    )
  }
  function Of(e) {
    var t = ke()
    return Df(t, Ne, e)
  }
  function Df(e, t, l) {
    if (
      ((t = Ic(e, t, _f)[0]),
      (e = ti(fl)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var n = Xa(t)
      } catch (o) {
        throw o === Zn ? Zu : o
      }
    else n = t
    t = ke()
    var a = t.queue,
      u = a.dispatch
    return (
      l !== t.memoizedState &&
        ((ue.flags |= 2048), Wn(9, { destroy: void 0 }, yg.bind(null, a, l), null)),
      [n, u, e]
    )
  }
  function yg(e, t) {
    e.action = t
  }
  function Mf(e) {
    var t = ke(),
      l = Ne
    if (l !== null) return Df(t, l, e)
    ;(ke(), (t = t.memoizedState), (l = ke()))
    var n = l.queue.dispatch
    return ((l.memoizedState = e), [t, n, !1])
  }
  function Wn(e, t, l, n) {
    return (
      (e = { tag: e, create: l, deps: n, inst: t, next: null }),
      (t = ue.updateQueue),
      t === null && ((t = Pu()), (ue.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((n = l.next), (l.next = e), (e.next = n), (t.lastEffect = e)),
      e
    )
  }
  function jf() {
    return ke().memoizedState
  }
  function li(e, t, l, n) {
    var a = dt()
    ;((ue.flags |= e),
      (a.memoizedState = Wn(1 | t, { destroy: void 0 }, l, n === void 0 ? null : n)))
  }
  function ni(e, t, l, n) {
    var a = ke()
    n = n === void 0 ? null : n
    var u = a.memoizedState.inst
    Ne !== null && n !== null && Kc(n, Ne.memoizedState.deps)
      ? (a.memoizedState = Wn(t, u, l, n))
      : ((ue.flags |= e), (a.memoizedState = Wn(1 | t, u, l, n)))
  }
  function Uf(e, t) {
    li(8390656, 8, e, t)
  }
  function lr(e, t) {
    ni(2048, 8, e, t)
  }
  function pg(e) {
    ue.flags |= 4
    var t = ue.updateQueue
    if (t === null) ((t = Pu()), (ue.updateQueue = t), (t.events = [e]))
    else {
      var l = t.events
      l === null ? (t.events = [e]) : l.push(e)
    }
  }
  function wf(e) {
    var t = ke().memoizedState
    return (
      pg({ ref: t, nextImpl: e }),
      function () {
        if ((xe & 2) !== 0) throw Error(c(440))
        return t.impl.apply(void 0, arguments)
      }
    )
  }
  function Hf(e, t) {
    return ni(4, 2, e, t)
  }
  function Lf(e, t) {
    return ni(4, 4, e, t)
  }
  function Bf(e, t) {
    if (typeof t == 'function') {
      e = e()
      var l = t(e)
      return function () {
        typeof l == 'function' ? l() : t(null)
      }
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null
        }
      )
  }
  function qf(e, t, l) {
    ;((l = l != null ? l.concat([e]) : null), ni(4, 4, Bf.bind(null, t, e), l))
  }
  function nr() {}
  function Yf(e, t) {
    var l = ke()
    t = t === void 0 ? null : t
    var n = l.memoizedState
    return t !== null && Kc(t, n[1]) ? n[0] : ((l.memoizedState = [e, t]), e)
  }
  function Gf(e, t) {
    var l = ke()
    t = t === void 0 ? null : t
    var n = l.memoizedState
    if (t !== null && Kc(t, n[1])) return n[0]
    if (((n = e()), yn)) {
      Nl(!0)
      try {
        e()
      } finally {
        Nl(!1)
      }
    }
    return ((l.memoizedState = [n, t]), n)
  }
  function ar(e, t, l) {
    return l === void 0 || ((sl & 1073741824) !== 0 && (he & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = Vd()), (ue.lanes |= e), (Gl |= e), l)
  }
  function Vf(e, t, l, n) {
    return zt(l, t)
      ? l
      : Jn.current !== null
        ? ((e = ar(e, l, n)), zt(e, t) || (Fe = !0), e)
        : (sl & 42) === 0 || ((sl & 1073741824) !== 0 && (he & 261930) === 0)
          ? ((Fe = !0), (e.memoizedState = l))
          : ((e = Vd()), (ue.lanes |= e), (Gl |= e), t)
  }
  function Xf(e, t, l, n, a) {
    var u = X.p
    X.p = u !== 0 && 8 > u ? u : 8
    var o = D.T,
      d = {}
    ;((D.T = d), cr(e, !1, t, l))
    try {
      var p = a(),
        _ = D.S
      if (
        (_ !== null && _(d, p), p !== null && typeof p == 'object' && typeof p.then == 'function')
      ) {
        var M = mg(p, n)
        Qa(e, t, M, Dt(e))
      } else Qa(e, t, n, Dt(e))
    } catch (L) {
      Qa(e, t, { then: function () {}, status: 'rejected', reason: L }, Dt())
    } finally {
      ;((X.p = u), o !== null && d.types !== null && (o.types = d.types), (D.T = o))
    }
  }
  function bg() {}
  function ur(e, t, l, n) {
    if (e.tag !== 5) throw Error(c(476))
    var a = Qf(e).queue
    Xf(
      e,
      a,
      t,
      W,
      l === null
        ? bg
        : function () {
            return (Zf(e), l(n))
          }
    )
  }
  function Qf(e) {
    var t = e.memoizedState
    if (t !== null) return t
    t = {
      memoizedState: W,
      baseState: W,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fl,
        lastRenderedState: W,
      },
      next: null,
    }
    var l = {}
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: fl,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    )
  }
  function Zf(e) {
    var t = Qf(e)
    ;(t.next === null && (t = e.alternate.memoizedState), Qa(e, t.next.queue, {}, Dt()))
  }
  function ir() {
    return it(cu)
  }
  function Kf() {
    return ke().memoizedState
  }
  function Jf() {
    return ke().memoizedState
  }
  function Sg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Dt()
          e = wl(l)
          var n = Hl(t, e, l)
          ;(n !== null && (St(n, t, l), qa(n, t, l)), (t = { cache: wc() }), (e.payload = t))
          return
      }
      t = t.return
    }
  }
  function xg(e, t, l) {
    var n = Dt()
    ;((l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      ai(e) ? $f(t, l) : ((l = Rc(e, t, l, n)), l !== null && (St(l, e, n), Wf(l, t, n))))
  }
  function kf(e, t, l) {
    var n = Dt()
    Qa(e, t, l, n)
  }
  function Qa(e, t, l, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }
    if (ai(e)) $f(t, a)
    else {
      var u = e.alternate
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var o = t.lastRenderedState,
            d = u(o, l)
          if (((a.hasEagerState = !0), (a.eagerState = d), zt(d, o)))
            return (Bu(e, t, a, 0), De === null && Lu(), !1)
        } catch {
        } finally {
        }
      if (((l = Rc(e, t, a, n)), l !== null)) return (St(l, e, n), Wf(l, t, n), !0)
    }
    return !1
  }
  function cr(e, t, l, n) {
    if (
      ((n = {
        lane: 2,
        revertLane: qr(),
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ai(e))
    ) {
      if (t) throw Error(c(479))
    } else ((t = Rc(e, l, n, 2)), t !== null && St(t, e, 2))
  }
  function ai(e) {
    var t = e.alternate
    return e === ue || (t !== null && t === ue)
  }
  function $f(e, t) {
    kn = Fu = !0
    var l = e.pending
    ;(l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (e.pending = t))
  }
  function Wf(e, t, l) {
    if ((l & 4194048) !== 0) {
      var n = t.lanes
      ;((n &= e.pendingLanes), (l |= n), (t.lanes = l), es(e, l))
    }
  }
  var Za = {
    readContext: it,
    use: ei,
    useCallback: Ge,
    useContext: Ge,
    useEffect: Ge,
    useImperativeHandle: Ge,
    useLayoutEffect: Ge,
    useInsertionEffect: Ge,
    useMemo: Ge,
    useReducer: Ge,
    useRef: Ge,
    useState: Ge,
    useDebugValue: Ge,
    useDeferredValue: Ge,
    useTransition: Ge,
    useSyncExternalStore: Ge,
    useId: Ge,
    useHostTransitionStatus: Ge,
    useFormState: Ge,
    useActionState: Ge,
    useOptimistic: Ge,
    useMemoCache: Ge,
    useCacheRefresh: Ge,
  }
  Za.useEffectEvent = Ge
  var Ff = {
      readContext: it,
      use: ei,
      useCallback: function (e, t) {
        return ((dt().memoizedState = [e, t === void 0 ? null : t]), e)
      },
      useContext: it,
      useEffect: Uf,
      useImperativeHandle: function (e, t, l) {
        ;((l = l != null ? l.concat([e]) : null), li(4194308, 4, Bf.bind(null, t, e), l))
      },
      useLayoutEffect: function (e, t) {
        return li(4194308, 4, e, t)
      },
      useInsertionEffect: function (e, t) {
        li(4, 2, e, t)
      },
      useMemo: function (e, t) {
        var l = dt()
        t = t === void 0 ? null : t
        var n = e()
        if (yn) {
          Nl(!0)
          try {
            e()
          } finally {
            Nl(!1)
          }
        }
        return ((l.memoizedState = [n, t]), n)
      },
      useReducer: function (e, t, l) {
        var n = dt()
        if (l !== void 0) {
          var a = l(t)
          if (yn) {
            Nl(!0)
            try {
              l(t)
            } finally {
              Nl(!1)
            }
          }
        } else a = t
        return (
          (n.memoizedState = n.baseState = a),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: a,
          }),
          (n.queue = e),
          (e = e.dispatch = xg.bind(null, ue, e)),
          [n.memoizedState, e]
        )
      },
      useRef: function (e) {
        var t = dt()
        return ((e = { current: e }), (t.memoizedState = e))
      },
      useState: function (e) {
        e = er(e)
        var t = e.queue,
          l = kf.bind(null, ue, t)
        return ((t.dispatch = l), [e.memoizedState, l])
      },
      useDebugValue: nr,
      useDeferredValue: function (e, t) {
        var l = dt()
        return ar(l, e, t)
      },
      useTransition: function () {
        var e = er(!1)
        return ((e = Xf.bind(null, ue, e.queue, !0, !1)), (dt().memoizedState = e), [!1, e])
      },
      useSyncExternalStore: function (e, t, l) {
        var n = ue,
          a = dt()
        if (ye) {
          if (l === void 0) throw Error(c(407))
          l = l()
        } else {
          if (((l = t()), De === null)) throw Error(c(349))
          ;(he & 127) !== 0 || pf(n, t, l)
        }
        a.memoizedState = l
        var u = { value: l, getSnapshot: t }
        return (
          (a.queue = u),
          Uf(Sf.bind(null, n, u, e), [e]),
          (n.flags |= 2048),
          Wn(9, { destroy: void 0 }, bf.bind(null, n, u, l, t), null),
          l
        )
      },
      useId: function () {
        var e = dt(),
          t = De.identifierPrefix
        if (ye) {
          var l = Ft,
            n = Wt
          ;((l = (n & ~(1 << (32 - Rt(n) - 1))).toString(32) + l),
            (t = '_' + t + 'R_' + l),
            (l = Iu++),
            0 < l && (t += 'H' + l.toString(32)),
            (t += '_'))
        } else ((l = hg++), (t = '_' + t + 'r_' + l.toString(32) + '_'))
        return (e.memoizedState = t)
      },
      useHostTransitionStatus: ir,
      useFormState: Cf,
      useActionState: Cf,
      useOptimistic: function (e) {
        var t = dt()
        t.memoizedState = t.baseState = e
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        }
        return ((t.queue = l), (t = cr.bind(null, ue, !0, l)), (l.dispatch = t), [e, t])
      },
      useMemoCache: Fc,
      useCacheRefresh: function () {
        return (dt().memoizedState = Sg.bind(null, ue))
      },
      useEffectEvent: function (e) {
        var t = dt(),
          l = { impl: e }
        return (
          (t.memoizedState = l),
          function () {
            if ((xe & 2) !== 0) throw Error(c(440))
            return l.impl.apply(void 0, arguments)
          }
        )
      },
    },
    rr = {
      readContext: it,
      use: ei,
      useCallback: Yf,
      useContext: it,
      useEffect: lr,
      useImperativeHandle: qf,
      useInsertionEffect: Hf,
      useLayoutEffect: Lf,
      useMemo: Gf,
      useReducer: ti,
      useRef: jf,
      useState: function () {
        return ti(fl)
      },
      useDebugValue: nr,
      useDeferredValue: function (e, t) {
        var l = ke()
        return Vf(l, Ne.memoizedState, e, t)
      },
      useTransition: function () {
        var e = ti(fl)[0],
          t = ke().memoizedState
        return [typeof e == 'boolean' ? e : Xa(e), t]
      },
      useSyncExternalStore: yf,
      useId: Kf,
      useHostTransitionStatus: ir,
      useFormState: Of,
      useActionState: Of,
      useOptimistic: function (e, t) {
        var l = ke()
        return Tf(l, Ne, e, t)
      },
      useMemoCache: Fc,
      useCacheRefresh: Jf,
    }
  rr.useEffectEvent = wf
  var If = {
    readContext: it,
    use: ei,
    useCallback: Yf,
    useContext: it,
    useEffect: lr,
    useImperativeHandle: qf,
    useInsertionEffect: Hf,
    useLayoutEffect: Lf,
    useMemo: Gf,
    useReducer: Pc,
    useRef: jf,
    useState: function () {
      return Pc(fl)
    },
    useDebugValue: nr,
    useDeferredValue: function (e, t) {
      var l = ke()
      return Ne === null ? ar(l, e, t) : Vf(l, Ne.memoizedState, e, t)
    },
    useTransition: function () {
      var e = Pc(fl)[0],
        t = ke().memoizedState
      return [typeof e == 'boolean' ? e : Xa(e), t]
    },
    useSyncExternalStore: yf,
    useId: Kf,
    useHostTransitionStatus: ir,
    useFormState: Mf,
    useActionState: Mf,
    useOptimistic: function (e, t) {
      var l = ke()
      return Ne !== null ? Tf(l, Ne, e, t) : ((l.baseState = e), [e, l.queue.dispatch])
    },
    useMemoCache: Fc,
    useCacheRefresh: Jf,
  }
  If.useEffectEvent = wf
  function or(e, t, l, n) {
    ;((t = e.memoizedState),
      (l = l(n, t)),
      (l = l == null ? t : b({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l))
  }
  var sr = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals
      var n = Dt(),
        a = wl(n)
      ;((a.payload = t),
        l != null && (a.callback = l),
        (t = Hl(e, a, n)),
        t !== null && (St(t, e, n), qa(t, e, n)))
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals
      var n = Dt(),
        a = wl(n)
      ;((a.tag = 1),
        (a.payload = t),
        l != null && (a.callback = l),
        (t = Hl(e, a, n)),
        t !== null && (St(t, e, n), qa(t, e, n)))
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals
      var l = Dt(),
        n = wl(l)
      ;((n.tag = 2),
        t != null && (n.callback = t),
        (t = Hl(e, n, l)),
        t !== null && (St(t, e, l), qa(t, e, l)))
    },
  }
  function Pf(e, t, l, n, a, u, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(n, u, o)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Da(l, n) || !Da(a, u)
          : !0
    )
  }
  function ed(e, t, l, n) {
    ;((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(l, n),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(l, n),
      t.state !== e && sr.enqueueReplaceState(t, t.state, null))
  }
  function pn(e, t) {
    var l = t
    if ('ref' in t) {
      l = {}
      for (var n in t) n !== 'ref' && (l[n] = t[n])
    }
    if ((e = e.defaultProps)) {
      l === t && (l = b({}, l))
      for (var a in e) l[a] === void 0 && (l[a] = e[a])
    }
    return l
  }
  function td(e) {
    Hu(e)
  }
  function ld(e) {
    console.error(e)
  }
  function nd(e) {
    Hu(e)
  }
  function ui(e, t) {
    try {
      var l = e.onUncaughtError
      l(t.value, { componentStack: t.stack })
    } catch (n) {
      setTimeout(function () {
        throw n
      })
    }
  }
  function ad(e, t, l) {
    try {
      var n = e.onCaughtError
      n(l.value, { componentStack: l.stack, errorBoundary: t.tag === 1 ? t.stateNode : null })
    } catch (a) {
      setTimeout(function () {
        throw a
      })
    }
  }
  function fr(e, t, l) {
    return (
      (l = wl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        ui(e, t)
      }),
      l
    )
  }
  function ud(e) {
    return ((e = wl(e)), (e.tag = 3), e)
  }
  function id(e, t, l, n) {
    var a = l.type.getDerivedStateFromError
    if (typeof a == 'function') {
      var u = n.value
      ;((e.payload = function () {
        return a(u)
      }),
        (e.callback = function () {
          ad(t, l, n)
        }))
    }
    var o = l.stateNode
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (e.callback = function () {
        ;(ad(t, l, n),
          typeof a != 'function' && (Vl === null ? (Vl = new Set([this])) : Vl.add(this)))
        var d = n.stack
        this.componentDidCatch(n.value, { componentStack: d !== null ? d : '' })
      })
  }
  function Eg(e, t, l, n, a) {
    if (((l.flags |= 32768), n !== null && typeof n == 'object' && typeof n.then == 'function')) {
      if (((t = l.alternate), t !== null && Vn(t, l, a, !0), (l = Nt.current), l !== null)) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              Yt === null ? yi() : l.alternate === null && Ve === 0 && (Ve = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = a),
              n === Ku
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([n])) : t.add(n),
                  Hr(e, n, a)),
              !1
            )
          case 22:
            return (
              (l.flags |= 65536),
              n === Ku
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([n]) }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue), l === null ? (t.retryQueue = new Set([n])) : l.add(n)),
                  Hr(e, n, a)),
              !1
            )
        }
        throw Error(c(435, l.tag))
      }
      return (Hr(e, n, a), yi(), !1)
    }
    if (ye)
      return (
        (t = Nt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = a),
            n !== Oc && ((e = Error(c(422), { cause: n })), Ua(Ht(e, l))))
          : (n !== Oc && ((t = Error(c(423), { cause: n })), Ua(Ht(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (a &= -a),
            (e.lanes |= a),
            (n = Ht(n, l)),
            (a = fr(e.stateNode, n, a)),
            Gc(e, a),
            Ve !== 4 && (Ve = 2)),
        !1
      )
    var u = Error(c(520), { cause: n })
    if (((u = Ht(u, l)), Pa === null ? (Pa = [u]) : Pa.push(u), Ve !== 4 && (Ve = 2), t === null))
      return !0
    ;((n = Ht(n, l)), (l = t))
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = a & -a),
            (l.lanes |= e),
            (e = fr(l.stateNode, n, e)),
            Gc(l, e),
            !1
          )
        case 1:
          if (
            ((t = l.type),
            (u = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (u !== null &&
                  typeof u.componentDidCatch == 'function' &&
                  (Vl === null || !Vl.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (a &= -a),
              (l.lanes |= a),
              (a = ud(a)),
              id(a, e, l, n),
              Gc(l, a),
              !1
            )
      }
      l = l.return
    } while (l !== null)
    return !1
  }
  var dr = Error(c(461)),
    Fe = !1
  function ct(e, t, l, n) {
    t.child = e === null ? sf(t, null, l, n) : gn(t, e.child, l, n)
  }
  function cd(e, t, l, n, a) {
    l = l.render
    var u = t.ref
    if ('ref' in n) {
      var o = {}
      for (var d in n) d !== 'ref' && (o[d] = n[d])
    } else o = n
    return (
      dn(t),
      (n = Jc(e, t, l, o, u, a)),
      (d = kc()),
      e !== null && !Fe
        ? ($c(e, t, a), dl(e, t, a))
        : (ye && d && _c(t), (t.flags |= 1), ct(e, t, n, a), t.child)
    )
  }
  function rd(e, t, l, n, a) {
    if (e === null) {
      var u = l.type
      return typeof u == 'function' && !zc(u) && u.defaultProps === void 0 && l.compare === null
        ? ((t.tag = 15), (t.type = u), od(e, t, u, n, a))
        : ((e = Yu(l.type, null, n, t, t.mode, a)), (e.ref = t.ref), (e.return = t), (t.child = e))
    }
    if (((u = e.child), !Sr(e, a))) {
      var o = u.memoizedProps
      if (((l = l.compare), (l = l !== null ? l : Da), l(o, n) && e.ref === t.ref))
        return dl(e, t, a)
    }
    return ((t.flags |= 1), (e = il(u, n)), (e.ref = t.ref), (e.return = t), (t.child = e))
  }
  function od(e, t, l, n, a) {
    if (e !== null) {
      var u = e.memoizedProps
      if (Da(u, n) && e.ref === t.ref)
        if (((Fe = !1), (t.pendingProps = n = u), Sr(e, a))) (e.flags & 131072) !== 0 && (Fe = !0)
        else return ((t.lanes = e.lanes), dl(e, t, a))
    }
    return mr(e, t, l, n, a)
  }
  function sd(e, t, l, n) {
    var a = n.children,
      u = e !== null ? e.memoizedState : null
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      n.mode === 'hidden')
    ) {
      if ((t.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | l : l), e !== null)) {
          for (n = t.child = e.child, a = 0; n !== null; )
            ((a = a | n.lanes | n.childLanes), (n = n.sibling))
          n = a & ~u
        } else ((n = 0), (t.child = null))
        return fd(e, t, u, l, n)
      }
      if ((l & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Qu(t, u !== null ? u.cachePool : null),
          u !== null ? mf(t, u) : Xc(),
          hf(t))
      else return ((n = t.lanes = 536870912), fd(e, t, u !== null ? u.baseLanes | l : l, l, n))
    } else
      u !== null
        ? (Qu(t, u.cachePool), mf(t, u), Bl(), (t.memoizedState = null))
        : (e !== null && Qu(t, null), Xc(), Bl())
    return (ct(e, t, a, l), t.child)
  }
  function Ka(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    )
  }
  function fd(e, t, l, n, a) {
    var u = Lc()
    return (
      (u = u === null ? null : { parent: $e._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: l, cachePool: u }),
      e !== null && Qu(t, null),
      Xc(),
      hf(t),
      e !== null && Vn(e, t, n, !0),
      (t.childLanes = a),
      null
    )
  }
  function ii(e, t) {
    return (
      (t = ri({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    )
  }
  function dd(e, t, l) {
    return (
      gn(t, e.child, null, l),
      (e = ii(t, t.pendingProps)),
      (e.flags |= 2),
      _t(t),
      (t.memoizedState = null),
      e
    )
  }
  function Tg(e, t, l) {
    var n = t.pendingProps,
      a = (t.flags & 128) !== 0
    if (((t.flags &= -129), e === null)) {
      if (ye) {
        if (n.mode === 'hidden') return ((e = ii(t, n)), (t.lanes = 536870912), Ka(null, e))
        if (
          (Zc(t),
          (e = je)
            ? ((e = Rm(e, qt)),
              (e = e !== null && e.data === '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Ol !== null ? { id: Wt, overflow: Ft } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = ks(e)),
                (l.return = t),
                (t.child = l),
                (ut = t),
                (je = null)))
            : (e = null),
          e === null)
        )
          throw Ml(t)
        return ((t.lanes = 536870912), null)
      }
      return ii(t, n)
    }
    var u = e.memoizedState
    if (u !== null) {
      var o = u.dehydrated
      if ((Zc(t), a))
        if (t.flags & 256) ((t.flags &= -257), (t = dd(e, t, l)))
        else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null))
        else throw Error(c(558))
      else if ((Fe || Vn(e, t, l, !1), (a = (l & e.childLanes) !== 0), Fe || a)) {
        if (((n = De), n !== null && ((o = ts(n, l)), o !== 0 && o !== u.retryLane)))
          throw ((u.retryLane = o), rn(e, o), St(n, e, o), dr)
        ;(yi(), (t = dd(e, t, l)))
      } else
        ((e = u.treeContext),
          (je = Gt(o.nextSibling)),
          (ut = t),
          (ye = !0),
          (Dl = null),
          (qt = !1),
          e !== null && Fs(t, e),
          (t = ii(t, n)),
          (t.flags |= 4096))
      return t
    }
    return (
      (e = il(e.child, { mode: n.mode, children: n.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    )
  }
  function ci(e, t) {
    var l = t.ref
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816)
    else {
      if (typeof l != 'function' && typeof l != 'object') throw Error(c(284))
      ;(e === null || e.ref !== l) && (t.flags |= 4194816)
    }
  }
  function mr(e, t, l, n, a) {
    return (
      dn(t),
      (l = Jc(e, t, l, n, void 0, a)),
      (n = kc()),
      e !== null && !Fe
        ? ($c(e, t, a), dl(e, t, a))
        : (ye && n && _c(t), (t.flags |= 1), ct(e, t, l, a), t.child)
    )
  }
  function md(e, t, l, n, a, u) {
    return (
      dn(t),
      (t.updateQueue = null),
      (l = gf(t, n, l, a)),
      vf(e),
      (n = kc()),
      e !== null && !Fe
        ? ($c(e, t, u), dl(e, t, u))
        : (ye && n && _c(t), (t.flags |= 1), ct(e, t, l, u), t.child)
    )
  }
  function hd(e, t, l, n, a) {
    if ((dn(t), t.stateNode === null)) {
      var u = Bn,
        o = l.contextType
      ;(typeof o == 'object' && o !== null && (u = it(o)),
        (u = new l(n, u)),
        (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = sr),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = n),
        (u.state = t.memoizedState),
        (u.refs = {}),
        qc(t),
        (o = l.contextType),
        (u.context = typeof o == 'object' && o !== null ? it(o) : Bn),
        (u.state = t.memoizedState),
        (o = l.getDerivedStateFromProps),
        typeof o == 'function' && (or(t, l, o, n), (u.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((o = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
          o !== u.state && sr.enqueueReplaceState(u, u.state, null),
          Ga(t, n, u, a),
          Ya(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
        (n = !0))
    } else if (e === null) {
      u = t.stateNode
      var d = t.memoizedProps,
        p = pn(l, d)
      u.props = p
      var _ = u.context,
        M = l.contextType
      ;((o = Bn), typeof M == 'object' && M !== null && (o = it(M)))
      var L = l.getDerivedStateFromProps
      ;((M = typeof L == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
        (d = t.pendingProps !== d),
        M ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((d || _ !== o) && ed(t, u, n, o)),
        (Ul = !1))
      var C = t.memoizedState
      ;((u.state = C),
        Ga(t, n, u, a),
        Ya(),
        (_ = t.memoizedState),
        d || C !== _ || Ul
          ? (typeof L == 'function' && (or(t, l, L, n), (_ = t.memoizedState)),
            (p = Ul || Pf(t, l, p, n, C, _, o))
              ? (M ||
                  (typeof u.UNSAFE_componentWillMount != 'function' &&
                    typeof u.componentWillMount != 'function') ||
                  (typeof u.componentWillMount == 'function' && u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == 'function' &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = n),
                (t.memoizedState = _)),
            (u.props = n),
            (u.state = _),
            (u.context = o),
            (n = p))
          : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308), (n = !1)))
    } else {
      ;((u = t.stateNode),
        Yc(e, t),
        (o = t.memoizedProps),
        (M = pn(l, o)),
        (u.props = M),
        (L = t.pendingProps),
        (C = u.context),
        (_ = l.contextType),
        (p = Bn),
        typeof _ == 'object' && _ !== null && (p = it(_)),
        (d = l.getDerivedStateFromProps),
        (_ = typeof d == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((o !== L || C !== p) && ed(t, u, n, p)),
        (Ul = !1),
        (C = t.memoizedState),
        (u.state = C),
        Ga(t, n, u, a),
        Ya())
      var O = t.memoizedState
      o !== L || C !== O || Ul || (e !== null && e.dependencies !== null && Vu(e.dependencies))
        ? (typeof d == 'function' && (or(t, l, d, n), (O = t.memoizedState)),
          (M =
            Ul ||
            Pf(t, l, M, n, C, O, p) ||
            (e !== null && e.dependencies !== null && Vu(e.dependencies)))
            ? (_ ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' && u.componentWillUpdate(n, O, p),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(n, O, p)),
              typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (o === e.memoizedProps && C === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (o === e.memoizedProps && C === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = n),
              (t.memoizedState = O)),
          (u.props = n),
          (u.state = O),
          (u.context = p),
          (n = M))
        : (typeof u.componentDidUpdate != 'function' ||
            (o === e.memoizedProps && C === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (o === e.memoizedProps && C === e.memoizedState) ||
            (t.flags |= 1024),
          (n = !1))
    }
    return (
      (u = n),
      ci(e, t),
      (n = (t.flags & 128) !== 0),
      u || n
        ? ((u = t.stateNode),
          (l = n && typeof l.getDerivedStateFromError != 'function' ? null : u.render()),
          (t.flags |= 1),
          e !== null && n
            ? ((t.child = gn(t, e.child, null, a)), (t.child = gn(t, null, l, a)))
            : ct(e, t, l, a),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = dl(e, t, a)),
      e
    )
  }
  function vd(e, t, l, n) {
    return (sn(), (t.flags |= 256), ct(e, t, l, n), t.child)
  }
  var hr = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null }
  function vr(e) {
    return { baseLanes: e, cachePool: nf() }
  }
  function gr(e, t, l) {
    return ((e = e !== null ? e.childLanes & ~l : 0), t && (e |= Ot), e)
  }
  function gd(e, t, l) {
    var n = t.pendingProps,
      a = !1,
      u = (t.flags & 128) !== 0,
      o
    if (
      ((o = u) || (o = e !== null && e.memoizedState === null ? !1 : (Je.current & 2) !== 0),
      o && ((a = !0), (t.flags &= -129)),
      (o = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (ye) {
        if (
          (a ? Ll(t) : Bl(),
          (e = je)
            ? ((e = Rm(e, qt)),
              (e = e !== null && e.data !== '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Ol !== null ? { id: Wt, overflow: Ft } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = ks(e)),
                (l.return = t),
                (t.child = l),
                (ut = t),
                (je = null)))
            : (e = null),
          e === null)
        )
          throw Ml(t)
        return (Ir(e) ? (t.lanes = 32) : (t.lanes = 536870912), null)
      }
      var d = n.children
      return (
        (n = n.fallback),
        a
          ? (Bl(),
            (a = t.mode),
            (d = ri({ mode: 'hidden', children: d }, a)),
            (n = on(n, a, l, null)),
            (d.return = t),
            (n.return = t),
            (d.sibling = n),
            (t.child = d),
            (n = t.child),
            (n.memoizedState = vr(l)),
            (n.childLanes = gr(e, o, l)),
            (t.memoizedState = hr),
            Ka(null, n))
          : (Ll(t), yr(t, d))
      )
    }
    var p = e.memoizedState
    if (p !== null && ((d = p.dehydrated), d !== null)) {
      if (u)
        t.flags & 256
          ? (Ll(t), (t.flags &= -257), (t = pr(e, t, l)))
          : t.memoizedState !== null
            ? (Bl(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Bl(),
              (d = n.fallback),
              (a = t.mode),
              (n = ri({ mode: 'visible', children: n.children }, a)),
              (d = on(d, a, l, null)),
              (d.flags |= 2),
              (n.return = t),
              (d.return = t),
              (n.sibling = d),
              (t.child = n),
              gn(t, e.child, null, l),
              (n = t.child),
              (n.memoizedState = vr(l)),
              (n.childLanes = gr(e, o, l)),
              (t.memoizedState = hr),
              (t = Ka(null, n)))
      else if ((Ll(t), Ir(d))) {
        if (((o = d.nextSibling && d.nextSibling.dataset), o)) var _ = o.dgst
        ;((o = _),
          (n = Error(c(419))),
          (n.stack = ''),
          (n.digest = o),
          Ua({ value: n, source: null, stack: null }),
          (t = pr(e, t, l)))
      } else if ((Fe || Vn(e, t, l, !1), (o = (l & e.childLanes) !== 0), Fe || o)) {
        if (((o = De), o !== null && ((n = ts(o, l)), n !== 0 && n !== p.retryLane)))
          throw ((p.retryLane = n), rn(e, n), St(o, e, n), dr)
        ;(Fr(d) || yi(), (t = pr(e, t, l)))
      } else
        Fr(d)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = p.treeContext),
            (je = Gt(d.nextSibling)),
            (ut = t),
            (ye = !0),
            (Dl = null),
            (qt = !1),
            e !== null && Fs(t, e),
            (t = yr(t, n.children)),
            (t.flags |= 4096))
      return t
    }
    return a
      ? (Bl(),
        (d = n.fallback),
        (a = t.mode),
        (p = e.child),
        (_ = p.sibling),
        (n = il(p, { mode: 'hidden', children: n.children })),
        (n.subtreeFlags = p.subtreeFlags & 65011712),
        _ !== null ? (d = il(_, d)) : ((d = on(d, a, l, null)), (d.flags |= 2)),
        (d.return = t),
        (n.return = t),
        (n.sibling = d),
        (t.child = n),
        Ka(null, n),
        (n = t.child),
        (d = e.child.memoizedState),
        d === null
          ? (d = vr(l))
          : ((a = d.cachePool),
            a !== null
              ? ((p = $e._currentValue), (a = a.parent !== p ? { parent: p, pool: p } : a))
              : (a = nf()),
            (d = { baseLanes: d.baseLanes | l, cachePool: a })),
        (n.memoizedState = d),
        (n.childLanes = gr(e, o, l)),
        (t.memoizedState = hr),
        Ka(e.child, n))
      : (Ll(t),
        (l = e.child),
        (e = l.sibling),
        (l = il(l, { mode: 'visible', children: n.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((o = t.deletions), o === null ? ((t.deletions = [e]), (t.flags |= 16)) : o.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l)
  }
  function yr(e, t) {
    return ((t = ri({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t))
  }
  function ri(e, t) {
    return ((e = At(22, e, null, t)), (e.lanes = 0), e)
  }
  function pr(e, t, l) {
    return (
      gn(t, e.child, null, l),
      (e = yr(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    )
  }
  function yd(e, t, l) {
    e.lanes |= t
    var n = e.alternate
    ;(n !== null && (n.lanes |= t), jc(e.return, t, l))
  }
  function br(e, t, l, n, a, u) {
    var o = e.memoizedState
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: n,
          tail: l,
          tailMode: a,
          treeForkCount: u,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = n),
        (o.tail = l),
        (o.tailMode = a),
        (o.treeForkCount = u))
  }
  function pd(e, t, l) {
    var n = t.pendingProps,
      a = n.revealOrder,
      u = n.tail
    n = n.children
    var o = Je.current,
      d = (o & 2) !== 0
    if (
      (d ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
      V(Je, o),
      ct(e, t, n, l),
      (n = ye ? ja : 0),
      !d && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && yd(e, l, t)
        else if (e.tag === 19) yd(e, l, t)
        else if (e.child !== null) {
          ;((e.child.return = e), (e = e.child))
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;((e.sibling.return = e.return), (e = e.sibling))
      }
    switch (a) {
      case 'forwards':
        for (l = t.child, a = null; l !== null; )
          ((e = l.alternate), e !== null && Wu(e) === null && (a = l), (l = l.sibling))
        ;((l = a),
          l === null ? ((a = t.child), (t.child = null)) : ((a = l.sibling), (l.sibling = null)),
          br(t, !1, a, l, u, n))
        break
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (l = null, a = t.child, t.child = null; a !== null; ) {
          if (((e = a.alternate), e !== null && Wu(e) === null)) {
            t.child = a
            break
          }
          ;((e = a.sibling), (a.sibling = l), (l = a), (a = e))
        }
        br(t, !0, l, null, u, n)
        break
      case 'together':
        br(t, !1, null, null, void 0, n)
        break
      default:
        t.memoizedState = null
    }
    return t.child
  }
  function dl(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (Gl |= t.lanes), (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Vn(e, t, l, !1), (l & t.childLanes) === 0)) return null
      } else return null
    if (e !== null && t.child !== e.child) throw Error(c(153))
    if (t.child !== null) {
      for (e = t.child, l = il(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        ((e = e.sibling), (l = l.sibling = il(e, e.pendingProps)), (l.return = t))
      l.sibling = null
    }
    return t.child
  }
  function Sr(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && Vu(e)))
  }
  function Rg(e, t, l) {
    switch (t.tag) {
      case 3:
        ;(Ze(t, t.stateNode.containerInfo), jl(t, $e, e.memoizedState.cache), sn())
        break
      case 27:
      case 5:
        ll(t)
        break
      case 4:
        Ze(t, t.stateNode.containerInfo)
        break
      case 10:
        jl(t, t.type, t.memoizedProps.value)
        break
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Zc(t), null)
        break
      case 13:
        var n = t.memoizedState
        if (n !== null)
          return n.dehydrated !== null
            ? (Ll(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
              ? gd(e, t, l)
              : (Ll(t), (e = dl(e, t, l)), e !== null ? e.sibling : null)
        Ll(t)
        break
      case 19:
        var a = (e.flags & 128) !== 0
        if (
          ((n = (l & t.childLanes) !== 0),
          n || (Vn(e, t, l, !1), (n = (l & t.childLanes) !== 0)),
          a)
        ) {
          if (n) return pd(e, t, l)
          t.flags |= 128
        }
        if (
          ((a = t.memoizedState),
          a !== null && ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          V(Je, Je.current),
          n)
        )
          break
        return null
      case 22:
        return ((t.lanes = 0), sd(e, t, l, t.pendingProps))
      case 24:
        jl(t, $e, e.memoizedState.cache)
    }
    return dl(e, t, l)
  }
  function bd(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Fe = !0
      else {
        if (!Sr(e, l) && (t.flags & 128) === 0) return ((Fe = !1), Rg(e, t, l))
        Fe = (e.flags & 131072) !== 0
      }
    else ((Fe = !1), ye && (t.flags & 1048576) !== 0 && Ws(t, ja, t.index))
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var n = t.pendingProps
          if (((e = hn(t.elementType)), (t.type = e), typeof e == 'function'))
            zc(e)
              ? ((n = pn(e, n)), (t.tag = 1), (t = hd(null, t, e, n, l)))
              : ((t.tag = 0), (t = mr(null, t, e, n, l)))
          else {
            if (e != null) {
              var a = e.$$typeof
              if (a === ee) {
                ;((t.tag = 11), (t = cd(null, t, e, n, l)))
                break e
              } else if (a === k) {
                ;((t.tag = 14), (t = rd(null, t, e, n, l)))
                break e
              }
            }
            throw ((t = Re(e) || e), Error(c(306, t, '')))
          }
        }
        return t
      case 0:
        return mr(e, t, t.type, t.pendingProps, l)
      case 1:
        return ((n = t.type), (a = pn(n, t.pendingProps)), hd(e, t, n, a, l))
      case 3:
        e: {
          if ((Ze(t, t.stateNode.containerInfo), e === null)) throw Error(c(387))
          n = t.pendingProps
          var u = t.memoizedState
          ;((a = u.element), Yc(e, t), Ga(t, n, null, l))
          var o = t.memoizedState
          if (
            ((n = o.cache),
            jl(t, $e, n),
            n !== u.cache && Uc(t, [$e], l, !0),
            Ya(),
            (n = o.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: n, isDehydrated: !1, cache: o.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = vd(e, t, n, l)
              break e
            } else if (n !== a) {
              ;((a = Ht(Error(c(424)), t)), Ua(a), (t = vd(e, t, n, l)))
              break e
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body
                  break
                default:
                  e = e.nodeName === 'HTML' ? e.ownerDocument.body : e
              }
              for (
                je = Gt(e.firstChild),
                  ut = t,
                  ye = !0,
                  Dl = null,
                  qt = !0,
                  l = sf(t, null, n, l),
                  t.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling))
            }
          else {
            if ((sn(), n === a)) {
              t = dl(e, t, l)
              break e
            }
            ct(e, t, n, l)
          }
          t = t.child
        }
        return t
      case 26:
        return (
          ci(e, t),
          e === null
            ? (l = Om(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : ye ||
                ((l = t.type),
                (e = t.pendingProps),
                (n = Ri(ae.current).createElement(l)),
                (n[at] = t),
                (n[ht] = e),
                rt(n, l, e),
                tt(n),
                (t.stateNode = n))
            : (t.memoizedState = Om(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        )
      case 27:
        return (
          ll(t),
          e === null &&
            ye &&
            ((n = t.stateNode = Nm(t.type, t.pendingProps, ae.current)),
            (ut = t),
            (qt = !0),
            (a = je),
            Kl(t.type) ? ((Pr = a), (je = Gt(n.firstChild))) : (je = a)),
          ct(e, t, t.pendingProps.children, l),
          ci(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        )
      case 5:
        return (
          e === null &&
            ye &&
            ((a = n = je) &&
              ((n = ey(n, t.type, t.pendingProps, qt)),
              n !== null
                ? ((t.stateNode = n), (ut = t), (je = Gt(n.firstChild)), (qt = !1), (a = !0))
                : (a = !1)),
            a || Ml(t)),
          ll(t),
          (a = t.type),
          (u = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (n = u.children),
          kr(a, u) ? (n = null) : o !== null && kr(a, o) && (t.flags |= 32),
          t.memoizedState !== null && ((a = Jc(e, t, vg, null, null, l)), (cu._currentValue = a)),
          ci(e, t),
          ct(e, t, n, l),
          t.child
        )
      case 6:
        return (
          e === null &&
            ye &&
            ((e = l = je) &&
              ((l = ty(l, t.pendingProps, qt)),
              l !== null ? ((t.stateNode = l), (ut = t), (je = null), (e = !0)) : (e = !1)),
            e || Ml(t)),
          null
        )
      case 13:
        return gd(e, t, l)
      case 4:
        return (
          Ze(t, t.stateNode.containerInfo),
          (n = t.pendingProps),
          e === null ? (t.child = gn(t, null, n, l)) : ct(e, t, n, l),
          t.child
        )
      case 11:
        return cd(e, t, t.type, t.pendingProps, l)
      case 7:
        return (ct(e, t, t.pendingProps, l), t.child)
      case 8:
        return (ct(e, t, t.pendingProps.children, l), t.child)
      case 12:
        return (ct(e, t, t.pendingProps.children, l), t.child)
      case 10:
        return ((n = t.pendingProps), jl(t, t.type, n.value), ct(e, t, n.children, l), t.child)
      case 9:
        return (
          (a = t.type._context),
          (n = t.pendingProps.children),
          dn(t),
          (a = it(a)),
          (n = n(a)),
          (t.flags |= 1),
          ct(e, t, n, l),
          t.child
        )
      case 14:
        return rd(e, t, t.type, t.pendingProps, l)
      case 15:
        return od(e, t, t.type, t.pendingProps, l)
      case 19:
        return pd(e, t, l)
      case 31:
        return Tg(e, t, l)
      case 22:
        return sd(e, t, l, t.pendingProps)
      case 24:
        return (
          dn(t),
          (n = it($e)),
          e === null
            ? ((a = Lc()),
              a === null &&
                ((a = De),
                (u = wc()),
                (a.pooledCache = u),
                u.refCount++,
                u !== null && (a.pooledCacheLanes |= l),
                (a = u)),
              (t.memoizedState = { parent: n, cache: a }),
              qc(t),
              jl(t, $e, a))
            : ((e.lanes & l) !== 0 && (Yc(e, t), Ga(t, null, null, l), Ya()),
              (a = e.memoizedState),
              (u = t.memoizedState),
              a.parent !== n
                ? ((a = { parent: n, cache: n }),
                  (t.memoizedState = a),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a),
                  jl(t, $e, n))
                : ((n = u.cache), jl(t, $e, n), n !== a.cache && Uc(t, [$e], l, !0))),
          ct(e, t, t.pendingProps.children, l),
          t.child
        )
      case 29:
        throw t.pendingProps
    }
    throw Error(c(156, t.tag))
  }
  function ml(e) {
    e.flags |= 4
  }
  function xr(e, t, l, n, a) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (a & 335544128) === a))
        if (e.stateNode.complete) e.flags |= 8192
        else if (Kd()) e.flags |= 8192
        else throw ((vn = Ku), Bc)
    } else e.flags &= -16777217
  }
  function Sd(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217
    else if (((e.flags |= 16777216), !wm(t)))
      if (Kd()) e.flags |= 8192
      else throw ((vn = Ku), Bc)
  }
  function oi(e, t) {
    ;(t !== null && (e.flags |= 4),
      e.flags & 16384 && ((t = e.tag !== 22 ? Io() : 536870912), (e.lanes |= t), (ea |= t)))
  }
  function Ja(e, t) {
    if (!ye)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail
          for (var l = null; t !== null; ) (t.alternate !== null && (l = t), (t = t.sibling))
          l === null ? (e.tail = null) : (l.sibling = null)
          break
        case 'collapsed':
          l = e.tail
          for (var n = null; l !== null; ) (l.alternate !== null && (n = l), (l = l.sibling))
          n === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (n.sibling = null)
      }
  }
  function Ue(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      n = 0
    if (t)
      for (var a = e.child; a !== null; )
        ((l |= a.lanes | a.childLanes),
          (n |= a.subtreeFlags & 65011712),
          (n |= a.flags & 65011712),
          (a.return = e),
          (a = a.sibling))
    else
      for (a = e.child; a !== null; )
        ((l |= a.lanes | a.childLanes),
          (n |= a.subtreeFlags),
          (n |= a.flags),
          (a.return = e),
          (a = a.sibling))
    return ((e.subtreeFlags |= n), (e.childLanes = l), t)
  }
  function zg(e, t, l) {
    var n = t.pendingProps
    switch ((Cc(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ue(t), null)
      case 1:
        return (Ue(t), null)
      case 3:
        return (
          (l = t.stateNode),
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          ol($e),
          qe(),
          l.pendingContext && ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (Gn(t)
              ? ml(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Dc())),
          Ue(t),
          null
        )
      case 26:
        var a = t.type,
          u = t.memoizedState
        return (
          e === null
            ? (ml(t), u !== null ? (Ue(t), Sd(t, u)) : (Ue(t), xr(t, a, null, n, l)))
            : u
              ? u !== e.memoizedState
                ? (ml(t), Ue(t), Sd(t, u))
                : (Ue(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps), e !== n && ml(t), Ue(t), xr(t, a, e, n, l)),
          null
        )
      case 27:
        if ((Tn(t), (l = ae.current), (a = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== n && ml(t)
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(c(166))
            return (Ue(t), null)
          }
          ;((e = Q.current), Gn(t) ? Is(t) : ((e = Nm(a, n, l)), (t.stateNode = e), ml(t)))
        }
        return (Ue(t), null)
      case 5:
        if ((Tn(t), (a = t.type), e !== null && t.stateNode != null)) e.memoizedProps !== n && ml(t)
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(c(166))
            return (Ue(t), null)
          }
          if (((u = Q.current), Gn(t))) Is(t)
          else {
            var o = Ri(ae.current)
            switch (u) {
              case 1:
                u = o.createElementNS('http://www.w3.org/2000/svg', a)
                break
              case 2:
                u = o.createElementNS('http://www.w3.org/1998/Math/MathML', a)
                break
              default:
                switch (a) {
                  case 'svg':
                    u = o.createElementNS('http://www.w3.org/2000/svg', a)
                    break
                  case 'math':
                    u = o.createElementNS('http://www.w3.org/1998/Math/MathML', a)
                    break
                  case 'script':
                    ;((u = o.createElement('div')),
                      (u.innerHTML = '<script><\/script>'),
                      (u = u.removeChild(u.firstChild)))
                    break
                  case 'select':
                    ;((u =
                      typeof n.is == 'string'
                        ? o.createElement('select', { is: n.is })
                        : o.createElement('select')),
                      n.multiple ? (u.multiple = !0) : n.size && (u.size = n.size))
                    break
                  default:
                    u =
                      typeof n.is == 'string'
                        ? o.createElement(a, { is: n.is })
                        : o.createElement(a)
                }
            }
            ;((u[at] = t), (u[ht] = n))
            e: for (o = t.child; o !== null; ) {
              if (o.tag === 5 || o.tag === 6) u.appendChild(o.stateNode)
              else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                ;((o.child.return = o), (o = o.child))
                continue
              }
              if (o === t) break e
              for (; o.sibling === null; ) {
                if (o.return === null || o.return === t) break e
                o = o.return
              }
              ;((o.sibling.return = o.return), (o = o.sibling))
            }
            t.stateNode = u
            e: switch ((rt(u, a, n), a)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                n = !!n.autoFocus
                break e
              case 'img':
                n = !0
                break e
              default:
                n = !1
            }
            n && ml(t)
          }
        }
        return (Ue(t), xr(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l), null)
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== n && ml(t)
        else {
          if (typeof n != 'string' && t.stateNode === null) throw Error(c(166))
          if (((e = ae.current), Gn(t))) {
            if (((e = t.stateNode), (l = t.memoizedProps), (n = null), (a = ut), a !== null))
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps
              }
            ;((e[at] = t),
              (e = !!(
                e.nodeValue === l ||
                (n !== null && n.suppressHydrationWarning === !0) ||
                gm(e.nodeValue, l)
              )),
              e || Ml(t, !0))
          } else ((e = Ri(e).createTextNode(n)), (e[at] = t), (t.stateNode = e))
        }
        return (Ue(t), null)
      case 31:
        if (((l = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((n = Gn(t)), l !== null)) {
            if (e === null) {
              if (!n) throw Error(c(318))
              if (((e = t.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
                throw Error(c(557))
              e[at] = t
            } else (sn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4))
            ;(Ue(t), (e = !1))
          } else
            ((l = Dc()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l),
              (e = !0))
          if (!e) return t.flags & 256 ? (_t(t), t) : (_t(t), null)
          if ((t.flags & 128) !== 0) throw Error(c(558))
        }
        return (Ue(t), null)
      case 13:
        if (
          ((n = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((a = Gn(t)), n !== null && n.dehydrated !== null)) {
            if (e === null) {
              if (!a) throw Error(c(318))
              if (((a = t.memoizedState), (a = a !== null ? a.dehydrated : null), !a))
                throw Error(c(317))
              a[at] = t
            } else (sn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4))
            ;(Ue(t), (a = !1))
          } else
            ((a = Dc()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a),
              (a = !0))
          if (!a) return t.flags & 256 ? (_t(t), t) : (_t(t), null)
        }
        return (
          _t(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = l), t)
            : ((l = n !== null),
              (e = e !== null && e.memoizedState !== null),
              l &&
                ((n = t.child),
                (a = null),
                n.alternate !== null &&
                  n.alternate.memoizedState !== null &&
                  n.alternate.memoizedState.cachePool !== null &&
                  (a = n.alternate.memoizedState.cachePool.pool),
                (u = null),
                n.memoizedState !== null &&
                  n.memoizedState.cachePool !== null &&
                  (u = n.memoizedState.cachePool.pool),
                u !== a && (n.flags |= 2048)),
              l !== e && l && (t.child.flags |= 8192),
              oi(t, t.updateQueue),
              Ue(t),
              null)
        )
      case 4:
        return (qe(), e === null && Xr(t.stateNode.containerInfo), Ue(t), null)
      case 10:
        return (ol(t.type), Ue(t), null)
      case 19:
        if ((H(Je), (n = t.memoizedState), n === null)) return (Ue(t), null)
        if (((a = (t.flags & 128) !== 0), (u = n.rendering), u === null))
          if (a) Ja(n, !1)
          else {
            if (Ve !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = Wu(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      Ja(n, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      oi(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;
                  )
                    (Js(l, e), (l = l.sibling))
                  return (V(Je, (Je.current & 1) | 2), ye && cl(t, n.treeForkCount), t.child)
                }
                e = e.sibling
              }
            n.tail !== null &&
              Pe() > hi &&
              ((t.flags |= 128), (a = !0), Ja(n, !1), (t.lanes = 4194304))
          }
        else {
          if (!a)
            if (((e = Wu(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                oi(t, e),
                Ja(n, !0),
                n.tail === null && n.tailMode === 'hidden' && !u.alternate && !ye)
              )
                return (Ue(t), null)
            } else
              2 * Pe() - n.renderingStartTime > hi &&
                l !== 536870912 &&
                ((t.flags |= 128), (a = !0), Ja(n, !1), (t.lanes = 4194304))
          n.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = n.last), e !== null ? (e.sibling = u) : (t.child = u), (n.last = u))
        }
        return n.tail !== null
          ? ((e = n.tail),
            (n.rendering = e),
            (n.tail = e.sibling),
            (n.renderingStartTime = Pe()),
            (e.sibling = null),
            (l = Je.current),
            V(Je, a ? (l & 1) | 2 : l & 1),
            ye && cl(t, n.treeForkCount),
            e)
          : (Ue(t), null)
      case 22:
      case 23:
        return (
          _t(t),
          Qc(),
          (n = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== n && (t.flags |= 8192)
            : n && (t.flags |= 8192),
          n
            ? (l & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ue(t),
          (l = t.updateQueue),
          l !== null && oi(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (n = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          n !== l && (t.flags |= 2048),
          e !== null && H(mn),
          null
        )
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          ol($e),
          Ue(t),
          null
        )
      case 25:
        return null
      case 30:
        return null
    }
    throw Error(c(156, t.tag))
  }
  function Ag(e, t) {
    switch ((Cc(t), t.tag)) {
      case 1:
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null)
      case 3:
        return (
          ol($e),
          qe(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 26:
      case 27:
      case 5:
        return (Tn(t), null)
      case 31:
        if (t.memoizedState !== null) {
          if ((_t(t), t.alternate === null)) throw Error(c(340))
          sn()
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null)
      case 13:
        if ((_t(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(c(340))
          sn()
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null)
      case 19:
        return (H(Je), null)
      case 4:
        return (qe(), null)
      case 10:
        return (ol(t.type), null)
      case 22:
      case 23:
        return (
          _t(t),
          Qc(),
          e !== null && H(mn),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 24:
        return (ol($e), null)
      case 25:
        return null
      default:
        return null
    }
  }
  function xd(e, t) {
    switch ((Cc(t), t.tag)) {
      case 3:
        ;(ol($e), qe())
        break
      case 26:
      case 27:
      case 5:
        Tn(t)
        break
      case 4:
        qe()
        break
      case 31:
        t.memoizedState !== null && _t(t)
        break
      case 13:
        _t(t)
        break
      case 19:
        H(Je)
        break
      case 10:
        ol(t.type)
        break
      case 22:
      case 23:
        ;(_t(t), Qc(), e !== null && H(mn))
        break
      case 24:
        ol($e)
    }
  }
  function ka(e, t) {
    try {
      var l = t.updateQueue,
        n = l !== null ? l.lastEffect : null
      if (n !== null) {
        var a = n.next
        l = a
        do {
          if ((l.tag & e) === e) {
            n = void 0
            var u = l.create,
              o = l.inst
            ;((n = u()), (o.destroy = n))
          }
          l = l.next
        } while (l !== a)
      }
    } catch (d) {
      Ae(t, t.return, d)
    }
  }
  function ql(e, t, l) {
    try {
      var n = t.updateQueue,
        a = n !== null ? n.lastEffect : null
      if (a !== null) {
        var u = a.next
        n = u
        do {
          if ((n.tag & e) === e) {
            var o = n.inst,
              d = o.destroy
            if (d !== void 0) {
              ;((o.destroy = void 0), (a = t))
              var p = l,
                _ = d
              try {
                _()
              } catch (M) {
                Ae(a, p, M)
              }
            }
          }
          n = n.next
        } while (n !== u)
      }
    } catch (M) {
      Ae(t, t.return, M)
    }
  }
  function Ed(e) {
    var t = e.updateQueue
    if (t !== null) {
      var l = e.stateNode
      try {
        df(t, l)
      } catch (n) {
        Ae(e, e.return, n)
      }
    }
  }
  function Td(e, t, l) {
    ;((l.props = pn(e.type, e.memoizedProps)), (l.state = e.memoizedState))
    try {
      l.componentWillUnmount()
    } catch (n) {
      Ae(e, t, n)
    }
  }
  function $a(e, t) {
    try {
      var l = e.ref
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var n = e.stateNode
            break
          case 30:
            n = e.stateNode
            break
          default:
            n = e.stateNode
        }
        typeof l == 'function' ? (e.refCleanup = l(n)) : (l.current = n)
      }
    } catch (a) {
      Ae(e, t, a)
    }
  }
  function It(e, t) {
    var l = e.ref,
      n = e.refCleanup
    if (l !== null)
      if (typeof n == 'function')
        try {
          n()
        } catch (a) {
          Ae(e, t, a)
        } finally {
          ;((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null))
        }
      else if (typeof l == 'function')
        try {
          l(null)
        } catch (a) {
          Ae(e, t, a)
        }
      else l.current = null
  }
  function Rd(e) {
    var t = e.type,
      l = e.memoizedProps,
      n = e.stateNode
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          l.autoFocus && n.focus()
          break e
        case 'img':
          l.src ? (n.src = l.src) : l.srcSet && (n.srcset = l.srcSet)
      }
    } catch (a) {
      Ae(e, e.return, a)
    }
  }
  function Er(e, t, l) {
    try {
      var n = e.stateNode
      ;(kg(n, e.type, l, t), (n[ht] = t))
    } catch (a) {
      Ae(e, e.return, a)
    }
  }
  function zd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && Kl(e.type)) || e.tag === 4
  }
  function Tr(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || zd(e.return)) return null
        e = e.return
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if ((e.tag === 27 && Kl(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
          continue e
        ;((e.child.return = e), (e = e.child))
      }
      if (!(e.flags & 2)) return e.stateNode
    }
  }
  function Rr(e, t, l) {
    var n = e.tag
    if (n === 5 || n === 6)
      ((e = e.stateNode),
        t
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === 'HTML'
                ? l.ownerDocument.body
                : l
            ).insertBefore(e, t)
          : ((t = l.nodeType === 9 ? l.body : l.nodeName === 'HTML' ? l.ownerDocument.body : l),
            t.appendChild(e),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = al)))
    else if (
      n !== 4 &&
      (n === 27 && Kl(e.type) && ((l = e.stateNode), (t = null)), (e = e.child), e !== null)
    )
      for (Rr(e, t, l), e = e.sibling; e !== null; ) (Rr(e, t, l), (e = e.sibling))
  }
  function si(e, t, l) {
    var n = e.tag
    if (n === 5 || n === 6) ((e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e))
    else if (n !== 4 && (n === 27 && Kl(e.type) && (l = e.stateNode), (e = e.child), e !== null))
      for (si(e, t, l), e = e.sibling; e !== null; ) (si(e, t, l), (e = e.sibling))
  }
  function Ad(e) {
    var t = e.stateNode,
      l = e.memoizedProps
    try {
      for (var n = e.type, a = t.attributes; a.length; ) t.removeAttributeNode(a[0])
      ;(rt(t, n, l), (t[at] = e), (t[ht] = l))
    } catch (u) {
      Ae(e, e.return, u)
    }
  }
  var hl = !1,
    Ie = !1,
    zr = !1,
    Nd = typeof WeakSet == 'function' ? WeakSet : Set,
    lt = null
  function Ng(e, t) {
    if (((e = e.containerInfo), (Kr = Di), (e = Bs(e)), pc(e))) {
      if ('selectionStart' in e) var l = { start: e.selectionStart, end: e.selectionEnd }
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window
          var n = l.getSelection && l.getSelection()
          if (n && n.rangeCount !== 0) {
            l = n.anchorNode
            var a = n.anchorOffset,
              u = n.focusNode
            n = n.focusOffset
            try {
              ;(l.nodeType, u.nodeType)
            } catch {
              l = null
              break e
            }
            var o = 0,
              d = -1,
              p = -1,
              _ = 0,
              M = 0,
              L = e,
              C = null
            t: for (;;) {
              for (
                var O;
                L !== l || (a !== 0 && L.nodeType !== 3) || (d = o + a),
                  L !== u || (n !== 0 && L.nodeType !== 3) || (p = o + n),
                  L.nodeType === 3 && (o += L.nodeValue.length),
                  (O = L.firstChild) !== null;
              )
                ((C = L), (L = O))
              for (;;) {
                if (L === e) break t
                if (
                  (C === l && ++_ === a && (d = o),
                  C === u && ++M === n && (p = o),
                  (O = L.nextSibling) !== null)
                )
                  break
                ;((L = C), (C = L.parentNode))
              }
              L = O
            }
            l = d === -1 || p === -1 ? null : { start: d, end: p }
          } else l = null
        }
      l = l || { start: 0, end: 0 }
    } else l = null
    for (Jr = { focusedElem: e, selectionRange: l }, Di = !1, lt = t; lt !== null; )
      if (((t = lt), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (lt = e))
      else
        for (; lt !== null; ) {
          switch (((t = lt), (u = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue), (e = e !== null ? e.events : null), e !== null)
              )
                for (l = 0; l < e.length; l++) ((a = e[l]), (a.ref.impl = a.nextImpl))
              break
            case 11:
            case 15:
              break
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                ;((e = void 0),
                  (l = t),
                  (a = u.memoizedProps),
                  (u = u.memoizedState),
                  (n = l.stateNode))
                try {
                  var K = pn(l.type, a)
                  ;((e = n.getSnapshotBeforeUpdate(K, u)),
                    (n.__reactInternalSnapshotBeforeUpdate = e))
                } catch (I) {
                  Ae(l, l.return, I)
                }
              }
              break
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)) Wr(e)
                else if (l === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Wr(e)
                      break
                    default:
                      e.textContent = ''
                  }
              }
              break
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break
            default:
              if ((e & 1024) !== 0) throw Error(c(163))
          }
          if (((e = t.sibling), e !== null)) {
            ;((e.return = t.return), (lt = e))
            break
          }
          lt = t.return
        }
  }
  function _d(e, t, l) {
    var n = l.flags
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ;(gl(e, l), n & 4 && ka(5, l))
        break
      case 1:
        if ((gl(e, l), n & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount()
            } catch (o) {
              Ae(l, l.return, o)
            }
          else {
            var a = pn(l.type, t.memoizedProps)
            t = t.memoizedState
            try {
              e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate)
            } catch (o) {
              Ae(l, l.return, o)
            }
          }
        ;(n & 64 && Ed(l), n & 512 && $a(l, l.return))
        break
      case 3:
        if ((gl(e, l), n & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode
                break
              case 1:
                t = l.child.stateNode
            }
          try {
            df(e, t)
          } catch (o) {
            Ae(l, l.return, o)
          }
        }
        break
      case 27:
        t === null && n & 4 && Ad(l)
      case 26:
      case 5:
        ;(gl(e, l), t === null && n & 4 && Rd(l), n & 512 && $a(l, l.return))
        break
      case 12:
        gl(e, l)
        break
      case 31:
        ;(gl(e, l), n & 4 && Dd(e, l))
        break
      case 13:
        ;(gl(e, l),
          n & 4 && Md(e, l),
          n & 64 &&
            ((e = l.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((l = Hg.bind(null, l)), ly(e, l)))))
        break
      case 22:
        if (((n = l.memoizedState !== null || hl), !n)) {
          ;((t = (t !== null && t.memoizedState !== null) || Ie), (a = hl))
          var u = Ie
          ;((hl = n),
            (Ie = t) && !u ? yl(e, l, (l.subtreeFlags & 8772) !== 0) : gl(e, l),
            (hl = a),
            (Ie = u))
        }
        break
      case 30:
        break
      default:
        gl(e, l)
    }
  }
  function Cd(e) {
    var t = e.alternate
    ;(t !== null && ((e.alternate = null), Cd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && tc(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null))
  }
  var Le = null,
    gt = !1
  function vl(e, t, l) {
    for (l = l.child; l !== null; ) (Od(e, t, l), (l = l.sibling))
  }
  function Od(e, t, l) {
    if (Tt && typeof Tt.onCommitFiberUnmount == 'function')
      try {
        Tt.onCommitFiberUnmount(ba, l)
      } catch {}
    switch (l.tag) {
      case 26:
        ;(Ie || It(l, t),
          vl(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)))
        break
      case 27:
        Ie || It(l, t)
        var n = Le,
          a = gt
        ;(Kl(l.type) && ((Le = l.stateNode), (gt = !1)),
          vl(e, t, l),
          au(l.stateNode),
          (Le = n),
          (gt = a))
        break
      case 5:
        Ie || It(l, t)
      case 6:
        if (((n = Le), (a = gt), (Le = null), vl(e, t, l), (Le = n), (gt = a), Le !== null))
          if (gt)
            try {
              ;(Le.nodeType === 9
                ? Le.body
                : Le.nodeName === 'HTML'
                  ? Le.ownerDocument.body
                  : Le
              ).removeChild(l.stateNode)
            } catch (u) {
              Ae(l, t, u)
            }
          else
            try {
              Le.removeChild(l.stateNode)
            } catch (u) {
              Ae(l, t, u)
            }
        break
      case 18:
        Le !== null &&
          (gt
            ? ((e = Le),
              Em(
                e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e,
                l.stateNode
              ),
              ra(e))
            : Em(Le, l.stateNode))
        break
      case 4:
        ;((n = Le),
          (a = gt),
          (Le = l.stateNode.containerInfo),
          (gt = !0),
          vl(e, t, l),
          (Le = n),
          (gt = a))
        break
      case 0:
      case 11:
      case 14:
      case 15:
        ;(ql(2, l, t), Ie || ql(4, l, t), vl(e, t, l))
        break
      case 1:
        ;(Ie ||
          (It(l, t), (n = l.stateNode), typeof n.componentWillUnmount == 'function' && Td(l, t, n)),
          vl(e, t, l))
        break
      case 21:
        vl(e, t, l)
        break
      case 22:
        ;((Ie = (n = Ie) || l.memoizedState !== null), vl(e, t, l), (Ie = n))
        break
      default:
        vl(e, t, l)
    }
  }
  function Dd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated
      try {
        ra(e)
      } catch (l) {
        Ae(t, t.return, l)
      }
    }
  }
  function Md(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        ra(e)
      } catch (l) {
        Ae(t, t.return, l)
      }
  }
  function _g(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode
        return (t === null && (t = e.stateNode = new Nd()), t)
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Nd()),
          t
        )
      default:
        throw Error(c(435, e.tag))
    }
  }
  function fi(e, t) {
    var l = _g(e)
    t.forEach(function (n) {
      if (!l.has(n)) {
        l.add(n)
        var a = Lg.bind(null, e, n)
        n.then(a, a)
      }
    })
  }
  function yt(e, t) {
    var l = t.deletions
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = l[n],
          u = e,
          o = t,
          d = o
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (Kl(d.type)) {
                ;((Le = d.stateNode), (gt = !1))
                break e
              }
              break
            case 5:
              ;((Le = d.stateNode), (gt = !1))
              break e
            case 3:
            case 4:
              ;((Le = d.stateNode.containerInfo), (gt = !0))
              break e
          }
          d = d.return
        }
        if (Le === null) throw Error(c(160))
        ;(Od(u, o, a),
          (Le = null),
          (gt = !1),
          (u = a.alternate),
          u !== null && (u.return = null),
          (a.return = null))
      }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (jd(t, e), (t = t.sibling))
  }
  var Zt = null
  function jd(e, t) {
    var l = e.alternate,
      n = e.flags
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ;(yt(t, e), pt(e), n & 4 && (ql(3, e, e.return), ka(3, e), ql(5, e, e.return)))
        break
      case 1:
        ;(yt(t, e),
          pt(e),
          n & 512 && (Ie || l === null || It(l, l.return)),
          n & 64 &&
            hl &&
            ((e = e.updateQueue),
            e !== null &&
              ((n = e.callbacks),
              n !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? n : l.concat(n))))))
        break
      case 26:
        var a = Zt
        if ((yt(t, e), pt(e), n & 512 && (Ie || l === null || It(l, l.return)), n & 4)) {
          var u = l !== null ? l.memoizedState : null
          if (((n = e.memoizedState), l === null))
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  ;((n = e.type), (l = e.memoizedProps), (a = a.ownerDocument || a))
                  t: switch (n) {
                    case 'title':
                      ;((u = a.getElementsByTagName('title')[0]),
                        (!u ||
                          u[Ea] ||
                          u[at] ||
                          u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          u.hasAttribute('itemprop')) &&
                          ((u = a.createElement(n)),
                          a.head.insertBefore(u, a.querySelector('head > title'))),
                        rt(u, n, l),
                        (u[at] = e),
                        tt(u),
                        (n = u))
                      break e
                    case 'link':
                      var o = jm('link', 'href', a).get(n + (l.href || ''))
                      if (o) {
                        for (var d = 0; d < o.length; d++)
                          if (
                            ((u = o[d]),
                            u.getAttribute('href') ===
                              (l.href == null || l.href === '' ? null : l.href) &&
                              u.getAttribute('rel') === (l.rel == null ? null : l.rel) &&
                              u.getAttribute('title') === (l.title == null ? null : l.title) &&
                              u.getAttribute('crossorigin') ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            o.splice(d, 1)
                            break t
                          }
                      }
                      ;((u = a.createElement(n)), rt(u, n, l), a.head.appendChild(u))
                      break
                    case 'meta':
                      if ((o = jm('meta', 'content', a).get(n + (l.content || '')))) {
                        for (d = 0; d < o.length; d++)
                          if (
                            ((u = o[d]),
                            u.getAttribute('content') ===
                              (l.content == null ? null : '' + l.content) &&
                              u.getAttribute('name') === (l.name == null ? null : l.name) &&
                              u.getAttribute('property') ===
                                (l.property == null ? null : l.property) &&
                              u.getAttribute('http-equiv') ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              u.getAttribute('charset') === (l.charSet == null ? null : l.charSet))
                          ) {
                            o.splice(d, 1)
                            break t
                          }
                      }
                      ;((u = a.createElement(n)), rt(u, n, l), a.head.appendChild(u))
                      break
                    default:
                      throw Error(c(468, n))
                  }
                  ;((u[at] = e), tt(u), (n = u))
                }
                e.stateNode = n
              } else Um(a, e.type, e.stateNode)
            else e.stateNode = Mm(a, n, e.memoizedProps)
          else
            u !== n
              ? (u === null
                  ? l.stateNode !== null && ((l = l.stateNode), l.parentNode.removeChild(l))
                  : u.count--,
                n === null ? Um(a, e.type, e.stateNode) : Mm(a, n, e.memoizedProps))
              : n === null && e.stateNode !== null && Er(e, e.memoizedProps, l.memoizedProps)
        }
        break
      case 27:
        ;(yt(t, e),
          pt(e),
          n & 512 && (Ie || l === null || It(l, l.return)),
          l !== null && n & 4 && Er(e, e.memoizedProps, l.memoizedProps))
        break
      case 5:
        if ((yt(t, e), pt(e), n & 512 && (Ie || l === null || It(l, l.return)), e.flags & 32)) {
          a = e.stateNode
          try {
            Dn(a, '')
          } catch (K) {
            Ae(e, e.return, K)
          }
        }
        ;(n & 4 &&
          e.stateNode != null &&
          ((a = e.memoizedProps), Er(e, a, l !== null ? l.memoizedProps : a)),
          n & 1024 && (zr = !0))
        break
      case 6:
        if ((yt(t, e), pt(e), n & 4)) {
          if (e.stateNode === null) throw Error(c(162))
          ;((n = e.memoizedProps), (l = e.stateNode))
          try {
            l.nodeValue = n
          } catch (K) {
            Ae(e, e.return, K)
          }
        }
        break
      case 3:
        if (
          ((Ni = null),
          (a = Zt),
          (Zt = zi(t.containerInfo)),
          yt(t, e),
          (Zt = a),
          pt(e),
          n & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            ra(t.containerInfo)
          } catch (K) {
            Ae(e, e.return, K)
          }
        zr && ((zr = !1), Ud(e))
        break
      case 4:
        ;((n = Zt), (Zt = zi(e.stateNode.containerInfo)), yt(t, e), pt(e), (Zt = n))
        break
      case 12:
        ;(yt(t, e), pt(e))
        break
      case 31:
        ;(yt(t, e),
          pt(e),
          n & 4 && ((n = e.updateQueue), n !== null && ((e.updateQueue = null), fi(e, n))))
        break
      case 13:
        ;(yt(t, e),
          pt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (l !== null && l.memoizedState !== null) &&
            (mi = Pe()),
          n & 4 && ((n = e.updateQueue), n !== null && ((e.updateQueue = null), fi(e, n))))
        break
      case 22:
        a = e.memoizedState !== null
        var p = l !== null && l.memoizedState !== null,
          _ = hl,
          M = Ie
        if (((hl = _ || a), (Ie = M || p), yt(t, e), (Ie = M), (hl = _), pt(e), n & 8192))
          e: for (
            t = e.stateNode,
              t._visibility = a ? t._visibility & -2 : t._visibility | 1,
              a && (l === null || p || hl || Ie || bn(e)),
              l = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                p = l = t
                try {
                  if (((u = p.stateNode), a))
                    ((o = u.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                  else {
                    d = p.stateNode
                    var L = p.memoizedProps.style,
                      C = L != null && L.hasOwnProperty('display') ? L.display : null
                    d.style.display = C == null || typeof C == 'boolean' ? '' : ('' + C).trim()
                  }
                } catch (K) {
                  Ae(p, p.return, K)
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                p = t
                try {
                  p.stateNode.nodeValue = a ? '' : p.memoizedProps
                } catch (K) {
                  Ae(p, p.return, K)
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                p = t
                try {
                  var O = p.stateNode
                  a ? Tm(O, !0) : Tm(p.stateNode, !1)
                } catch (K) {
                  Ae(p, p.return, K)
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) &&
              t.child !== null
            ) {
              ;((t.child.return = t), (t = t.child))
              continue
            }
            if (t === e) break e
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e
              ;(l === t && (l = null), (t = t.return))
            }
            ;(l === t && (l = null), (t.sibling.return = t.return), (t = t.sibling))
          }
        n & 4 &&
          ((n = e.updateQueue),
          n !== null && ((l = n.retryQueue), l !== null && ((n.retryQueue = null), fi(e, l))))
        break
      case 19:
        ;(yt(t, e),
          pt(e),
          n & 4 && ((n = e.updateQueue), n !== null && ((e.updateQueue = null), fi(e, n))))
        break
      case 30:
        break
      case 21:
        break
      default:
        ;(yt(t, e), pt(e))
    }
  }
  function pt(e) {
    var t = e.flags
    if (t & 2) {
      try {
        for (var l, n = e.return; n !== null; ) {
          if (zd(n)) {
            l = n
            break
          }
          n = n.return
        }
        if (l == null) throw Error(c(160))
        switch (l.tag) {
          case 27:
            var a = l.stateNode,
              u = Tr(e)
            si(e, u, a)
            break
          case 5:
            var o = l.stateNode
            l.flags & 32 && (Dn(o, ''), (l.flags &= -33))
            var d = Tr(e)
            si(e, d, o)
            break
          case 3:
          case 4:
            var p = l.stateNode.containerInfo,
              _ = Tr(e)
            Rr(e, _, p)
            break
          default:
            throw Error(c(161))
        }
      } catch (M) {
        Ae(e, e.return, M)
      }
      e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
  }
  function Ud(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e
        ;(Ud(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling))
      }
  }
  function gl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (_d(e, t.alternate, t), (t = t.sibling))
  }
  function bn(e) {
    for (e = e.child; e !== null; ) {
      var t = e
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ;(ql(4, t, t.return), bn(t))
          break
        case 1:
          It(t, t.return)
          var l = t.stateNode
          ;(typeof l.componentWillUnmount == 'function' && Td(t, t.return, l), bn(t))
          break
        case 27:
          au(t.stateNode)
        case 26:
        case 5:
          ;(It(t, t.return), bn(t))
          break
        case 22:
          t.memoizedState === null && bn(t)
          break
        case 30:
          bn(t)
          break
        default:
          bn(t)
      }
      e = e.sibling
    }
  }
  function yl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var n = t.alternate,
        a = e,
        u = t,
        o = u.flags
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ;(yl(a, u, l), ka(4, u))
          break
        case 1:
          if ((yl(a, u, l), (n = u), (a = n.stateNode), typeof a.componentDidMount == 'function'))
            try {
              a.componentDidMount()
            } catch (_) {
              Ae(n, n.return, _)
            }
          if (((n = u), (a = n.updateQueue), a !== null)) {
            var d = n.stateNode
            try {
              var p = a.shared.hiddenCallbacks
              if (p !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < p.length; a++) ff(p[a], d)
            } catch (_) {
              Ae(n, n.return, _)
            }
          }
          ;(l && o & 64 && Ed(u), $a(u, u.return))
          break
        case 27:
          Ad(u)
        case 26:
        case 5:
          ;(yl(a, u, l), l && n === null && o & 4 && Rd(u), $a(u, u.return))
          break
        case 12:
          yl(a, u, l)
          break
        case 31:
          ;(yl(a, u, l), l && o & 4 && Dd(a, u))
          break
        case 13:
          ;(yl(a, u, l), l && o & 4 && Md(a, u))
          break
        case 22:
          ;(u.memoizedState === null && yl(a, u, l), $a(u, u.return))
          break
        case 30:
          break
        default:
          yl(a, u, l)
      }
      t = t.sibling
    }
  }
  function Ar(e, t) {
    var l = null
    ;(e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && wa(l)))
  }
  function Nr(e, t) {
    ;((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && wa(e)))
  }
  function Kt(e, t, l, n) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (wd(e, t, l, n), (t = t.sibling))
  }
  function wd(e, t, l, n) {
    var a = t.flags
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ;(Kt(e, t, l, n), a & 2048 && ka(9, t))
        break
      case 1:
        Kt(e, t, l, n)
        break
      case 3:
        ;(Kt(e, t, l, n),
          a & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && wa(e))))
        break
      case 12:
        if (a & 2048) {
          ;(Kt(e, t, l, n), (e = t.stateNode))
          try {
            var u = t.memoizedProps,
              o = u.id,
              d = u.onPostCommit
            typeof d == 'function' &&
              d(o, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0)
          } catch (p) {
            Ae(t, t.return, p)
          }
        } else Kt(e, t, l, n)
        break
      case 31:
        Kt(e, t, l, n)
        break
      case 13:
        Kt(e, t, l, n)
        break
      case 23:
        break
      case 22:
        ;((u = t.stateNode),
          (o = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? Kt(e, t, l, n)
              : Wa(e, t)
            : u._visibility & 2
              ? Kt(e, t, l, n)
              : ((u._visibility |= 2), Fn(e, t, l, n, (t.subtreeFlags & 10256) !== 0 || !1)),
          a & 2048 && Ar(o, t))
        break
      case 24:
        ;(Kt(e, t, l, n), a & 2048 && Nr(t.alternate, t))
        break
      default:
        Kt(e, t, l, n)
    }
  }
  function Fn(e, t, l, n, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e,
        o = t,
        d = l,
        p = n,
        _ = o.flags
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          ;(Fn(u, o, d, p, a), ka(8, o))
          break
        case 23:
          break
        case 22:
          var M = o.stateNode
          ;(o.memoizedState !== null
            ? M._visibility & 2
              ? Fn(u, o, d, p, a)
              : Wa(u, o)
            : ((M._visibility |= 2), Fn(u, o, d, p, a)),
            a && _ & 2048 && Ar(o.alternate, o))
          break
        case 24:
          ;(Fn(u, o, d, p, a), a && _ & 2048 && Nr(o.alternate, o))
          break
        default:
          Fn(u, o, d, p, a)
      }
      t = t.sibling
    }
  }
  function Wa(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          n = t,
          a = n.flags
        switch (n.tag) {
          case 22:
            ;(Wa(l, n), a & 2048 && Ar(n.alternate, n))
            break
          case 24:
            ;(Wa(l, n), a & 2048 && Nr(n.alternate, n))
            break
          default:
            Wa(l, n)
        }
        t = t.sibling
      }
  }
  var Fa = 8192
  function In(e, t, l) {
    if (e.subtreeFlags & Fa) for (e = e.child; e !== null; ) (Hd(e, t, l), (e = e.sibling))
  }
  function Hd(e, t, l) {
    switch (e.tag) {
      case 26:
        ;(In(e, t, l),
          e.flags & Fa && e.memoizedState !== null && hy(l, Zt, e.memoizedState, e.memoizedProps))
        break
      case 5:
        In(e, t, l)
        break
      case 3:
      case 4:
        var n = Zt
        ;((Zt = zi(e.stateNode.containerInfo)), In(e, t, l), (Zt = n))
        break
      case 22:
        e.memoizedState === null &&
          ((n = e.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = Fa), (Fa = 16777216), In(e, t, l), (Fa = n))
            : In(e, t, l))
        break
      default:
        In(e, t, l)
    }
  }
  function Ld(e) {
    var t = e.alternate
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null
      do ((t = e.sibling), (e.sibling = null), (e = t))
      while (e !== null)
    }
  }
  function Ia(e) {
    var t = e.deletions
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l]
          ;((lt = n), qd(n, e))
        }
      Ld(e)
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (Bd(e), (e = e.sibling))
  }
  function Bd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ;(Ia(e), e.flags & 2048 && ql(9, e, e.return))
        break
      case 3:
        Ia(e)
        break
      case 12:
        Ia(e)
        break
      case 22:
        var t = e.stateNode
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), di(e))
          : Ia(e)
        break
      default:
        Ia(e)
    }
  }
  function di(e) {
    var t = e.deletions
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l]
          ;((lt = n), qd(n, e))
        }
      Ld(e)
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          ;(ql(8, t, t.return), di(t))
          break
        case 22:
          ;((l = t.stateNode), l._visibility & 2 && ((l._visibility &= -3), di(t)))
          break
        default:
          di(t)
      }
      e = e.sibling
    }
  }
  function qd(e, t) {
    for (; lt !== null; ) {
      var l = lt
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          ql(8, l, t)
          break
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool
            n != null && n.refCount++
          }
          break
        case 24:
          wa(l.memoizedState.cache)
      }
      if (((n = l.child), n !== null)) ((n.return = l), (lt = n))
      else
        e: for (l = e; lt !== null; ) {
          n = lt
          var a = n.sibling,
            u = n.return
          if ((Cd(n), n === l)) {
            lt = null
            break e
          }
          if (a !== null) {
            ;((a.return = u), (lt = a))
            break e
          }
          lt = u
        }
    }
  }
  var Cg = {
      getCacheForType: function (e) {
        var t = it($e),
          l = t.data.get(e)
        return (l === void 0 && ((l = e()), t.data.set(e, l)), l)
      },
      cacheSignal: function () {
        return it($e).controller.signal
      },
    },
    Og = typeof WeakMap == 'function' ? WeakMap : Map,
    xe = 0,
    De = null,
    de = null,
    he = 0,
    ze = 0,
    Ct = null,
    Yl = !1,
    Pn = !1,
    _r = !1,
    pl = 0,
    Ve = 0,
    Gl = 0,
    Sn = 0,
    Cr = 0,
    Ot = 0,
    ea = 0,
    Pa = null,
    bt = null,
    Or = !1,
    mi = 0,
    Yd = 0,
    hi = 1 / 0,
    vi = null,
    Vl = null,
    et = 0,
    Xl = null,
    ta = null,
    bl = 0,
    Dr = 0,
    Mr = null,
    Gd = null,
    eu = 0,
    jr = null
  function Dt() {
    return (xe & 2) !== 0 && he !== 0 ? he & -he : D.T !== null ? qr() : ls()
  }
  function Vd() {
    if (Ot === 0)
      if ((he & 536870912) === 0 || ye) {
        var e = Tu
        ;((Tu <<= 1), (Tu & 3932160) === 0 && (Tu = 262144), (Ot = e))
      } else Ot = 536870912
    return ((e = Nt.current), e !== null && (e.flags |= 32), Ot)
  }
  function St(e, t, l) {
    ;(((e === De && (ze === 2 || ze === 9)) || e.cancelPendingCommit !== null) &&
      (la(e, 0), Ql(e, he, Ot, !1)),
      xa(e, l),
      ((xe & 2) === 0 || e !== De) &&
        (e === De && ((xe & 2) === 0 && (Sn |= l), Ve === 4 && Ql(e, he, Ot, !1)), Pt(e)))
  }
  function Xd(e, t, l) {
    if ((xe & 6) !== 0) throw Error(c(327))
    var n = (!l && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Sa(e, t),
      a = n ? jg(e, t) : wr(e, t, !0),
      u = n
    do {
      if (a === 0) {
        Pn && !n && Ql(e, t, 0, !1)
        break
      } else {
        if (((l = e.current.alternate), u && !Dg(l))) {
          ;((a = wr(e, t, !1)), (u = !1))
          continue
        }
        if (a === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var o = 0
          else
            ((o = e.pendingLanes & -536870913), (o = o !== 0 ? o : o & 536870912 ? 536870912 : 0))
          if (o !== 0) {
            t = o
            e: {
              var d = e
              a = Pa
              var p = d.current.memoizedState.isDehydrated
              if ((p && (la(d, o).flags |= 256), (o = wr(d, o, !1)), o !== 2)) {
                if (_r && !p) {
                  ;((d.errorRecoveryDisabledLanes |= u), (Sn |= u), (a = 4))
                  break e
                }
                ;((u = bt), (bt = a), u !== null && (bt === null ? (bt = u) : bt.push.apply(bt, u)))
              }
              a = o
            }
            if (((u = !1), a !== 2)) continue
          }
        }
        if (a === 1) {
          ;(la(e, 0), Ql(e, t, 0, !0))
          break
        }
        e: {
          switch (((n = e), (u = a), u)) {
            case 0:
            case 1:
              throw Error(c(345))
            case 4:
              if ((t & 4194048) !== t) break
            case 6:
              Ql(n, t, Ot, !Yl)
              break e
            case 2:
              bt = null
              break
            case 3:
            case 5:
              break
            default:
              throw Error(c(329))
          }
          if ((t & 62914560) === t && ((a = mi + 300 - Pe()), 10 < a)) {
            if ((Ql(n, t, Ot, !Yl), zu(n, 0, !0) !== 0)) break e
            ;((bl = t),
              (n.timeoutHandle = Sm(
                Qd.bind(null, n, l, bt, vi, Or, t, Ot, Sn, ea, Yl, u, 'Throttled', -0, 0),
                a
              )))
            break e
          }
          Qd(n, l, bt, vi, Or, t, Ot, Sn, ea, Yl, u, null, -0, 0)
        }
      }
      break
    } while (!0)
    Pt(e)
  }
  function Qd(e, t, l, n, a, u, o, d, p, _, M, L, C, O) {
    if (((e.timeoutHandle = -1), (L = t.subtreeFlags), L & 8192 || (L & 16785408) === 16785408)) {
      ;((L = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: al,
      }),
        Hd(t, u, L))
      var K = (u & 62914560) === u ? mi - Pe() : (u & 4194048) === u ? Yd - Pe() : 0
      if (((K = vy(L, K)), K !== null)) {
        ;((bl = u),
          (e.cancelPendingCommit = K(Id.bind(null, e, t, u, l, n, a, o, d, p, M, L, null, C, O))),
          Ql(e, u, o, !_))
        return
      }
    }
    Id(e, t, u, l, n, a, o, d, p)
  }
  function Dg(e) {
    for (var t = e; ; ) {
      var l = t.tag
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var n = 0; n < l.length; n++) {
          var a = l[n],
            u = a.getSnapshot
          a = a.value
          try {
            if (!zt(u(), a)) return !1
          } catch {
            return !1
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null)) ((l.return = t), (t = l))
      else {
        if (t === e) break
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0
          t = t.return
        }
        ;((t.sibling.return = t.return), (t = t.sibling))
      }
    }
    return !0
  }
  function Ql(e, t, l, n) {
    ;((t &= ~Cr),
      (t &= ~Sn),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      n && (e.warmLanes |= t),
      (n = e.expirationTimes))
    for (var a = t; 0 < a; ) {
      var u = 31 - Rt(a),
        o = 1 << u
      ;((n[u] = -1), (a &= ~o))
    }
    l !== 0 && Po(e, l, t)
  }
  function gi() {
    return (xe & 6) === 0 ? (tu(0), !1) : !0
  }
  function Ur() {
    if (de !== null) {
      if (ze === 0) var e = de.return
      else ((e = de), (rl = fn = null), Wc(e), (Kn = null), (La = 0), (e = de))
      for (; e !== null; ) (xd(e.alternate, e), (e = e.return))
      de = null
    }
  }
  function la(e, t) {
    var l = e.timeoutHandle
    ;(l !== -1 && ((e.timeoutHandle = -1), Fg(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      (bl = 0),
      Ur(),
      (De = e),
      (de = l = il(e.current, null)),
      (he = t),
      (ze = 0),
      (Ct = null),
      (Yl = !1),
      (Pn = Sa(e, t)),
      (_r = !1),
      (ea = Ot = Cr = Sn = Gl = Ve = 0),
      (bt = Pa = null),
      (Or = !1),
      (t & 8) !== 0 && (t |= t & 32))
    var n = e.entangledLanes
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var a = 31 - Rt(n),
          u = 1 << a
        ;((t |= e[a]), (n &= ~u))
      }
    return ((pl = t), Lu(), l)
  }
  function Zd(e, t) {
    ;((ue = null),
      (D.H = Za),
      t === Zn || t === Zu
        ? ((t = cf()), (ze = 3))
        : t === Bc
          ? ((t = cf()), (ze = 4))
          : (ze =
              t === dr
                ? 8
                : t !== null && typeof t == 'object' && typeof t.then == 'function'
                  ? 6
                  : 1),
      (Ct = t),
      de === null && ((Ve = 1), ui(e, Ht(t, e.current))))
  }
  function Kd() {
    var e = Nt.current
    return e === null
      ? !0
      : (he & 4194048) === he
        ? Yt === null
        : (he & 62914560) === he || (he & 536870912) !== 0
          ? e === Yt
          : !1
  }
  function Jd() {
    var e = D.H
    return ((D.H = Za), e === null ? Za : e)
  }
  function kd() {
    var e = D.A
    return ((D.A = Cg), e)
  }
  function yi() {
    ;((Ve = 4),
      Yl || ((he & 4194048) !== he && Nt.current !== null) || (Pn = !0),
      ((Gl & 134217727) === 0 && (Sn & 134217727) === 0) || De === null || Ql(De, he, Ot, !1))
  }
  function wr(e, t, l) {
    var n = xe
    xe |= 2
    var a = Jd(),
      u = kd()
    ;((De !== e || he !== t) && ((vi = null), la(e, t)), (t = !1))
    var o = Ve
    e: do
      try {
        if (ze !== 0 && de !== null) {
          var d = de,
            p = Ct
          switch (ze) {
            case 8:
              ;(Ur(), (o = 6))
              break e
            case 3:
            case 2:
            case 9:
            case 6:
              Nt.current === null && (t = !0)
              var _ = ze
              if (((ze = 0), (Ct = null), na(e, d, p, _), l && Pn)) {
                o = 0
                break e
              }
              break
            default:
              ;((_ = ze), (ze = 0), (Ct = null), na(e, d, p, _))
          }
        }
        ;(Mg(), (o = Ve))
        break
      } catch (M) {
        Zd(e, M)
      }
    while (!0)
    return (
      t && e.shellSuspendCounter++,
      (rl = fn = null),
      (xe = n),
      (D.H = a),
      (D.A = u),
      de === null && ((De = null), (he = 0), Lu()),
      o
    )
  }
  function Mg() {
    for (; de !== null; ) $d(de)
  }
  function jg(e, t) {
    var l = xe
    xe |= 2
    var n = Jd(),
      a = kd()
    De !== e || he !== t ? ((vi = null), (hi = Pe() + 500), la(e, t)) : (Pn = Sa(e, t))
    e: do
      try {
        if (ze !== 0 && de !== null) {
          t = de
          var u = Ct
          t: switch (ze) {
            case 1:
              ;((ze = 0), (Ct = null), na(e, t, u, 1))
              break
            case 2:
            case 9:
              if (af(u)) {
                ;((ze = 0), (Ct = null), Wd(t))
                break
              }
              ;((t = function () {
                ;((ze !== 2 && ze !== 9) || De !== e || (ze = 7), Pt(e))
              }),
                u.then(t, t))
              break e
            case 3:
              ze = 7
              break e
            case 4:
              ze = 5
              break e
            case 7:
              af(u) ? ((ze = 0), (Ct = null), Wd(t)) : ((ze = 0), (Ct = null), na(e, t, u, 7))
              break
            case 5:
              var o = null
              switch (de.tag) {
                case 26:
                  o = de.memoizedState
                case 5:
                case 27:
                  var d = de
                  if (o ? wm(o) : d.stateNode.complete) {
                    ;((ze = 0), (Ct = null))
                    var p = d.sibling
                    if (p !== null) de = p
                    else {
                      var _ = d.return
                      _ !== null ? ((de = _), pi(_)) : (de = null)
                    }
                    break t
                  }
              }
              ;((ze = 0), (Ct = null), na(e, t, u, 5))
              break
            case 6:
              ;((ze = 0), (Ct = null), na(e, t, u, 6))
              break
            case 8:
              ;(Ur(), (Ve = 6))
              break e
            default:
              throw Error(c(462))
          }
        }
        Ug()
        break
      } catch (M) {
        Zd(e, M)
      }
    while (!0)
    return (
      (rl = fn = null),
      (D.H = n),
      (D.A = a),
      (xe = l),
      de !== null ? 0 : ((De = null), (he = 0), Lu(), Ve)
    )
  }
  function Ug() {
    for (; de !== null && !Ke(); ) $d(de)
  }
  function $d(e) {
    var t = bd(e.alternate, e, pl)
    ;((e.memoizedProps = e.pendingProps), t === null ? pi(e) : (de = t))
  }
  function Wd(e) {
    var t = e,
      l = t.alternate
    switch (t.tag) {
      case 15:
      case 0:
        t = md(l, t, t.pendingProps, t.type, void 0, he)
        break
      case 11:
        t = md(l, t, t.pendingProps, t.type.render, t.ref, he)
        break
      case 5:
        Wc(t)
      default:
        ;(xd(l, t), (t = de = Js(t, pl)), (t = bd(l, t, pl)))
    }
    ;((e.memoizedProps = e.pendingProps), t === null ? pi(e) : (de = t))
  }
  function na(e, t, l, n) {
    ;((rl = fn = null), Wc(t), (Kn = null), (La = 0))
    var a = t.return
    try {
      if (Eg(e, a, t, l, he)) {
        ;((Ve = 1), ui(e, Ht(l, e.current)), (de = null))
        return
      }
    } catch (u) {
      if (a !== null) throw ((de = a), u)
      ;((Ve = 1), ui(e, Ht(l, e.current)), (de = null))
      return
    }
    t.flags & 32768
      ? (ye || n === 1
          ? (e = !0)
          : Pn || (he & 536870912) !== 0
            ? (e = !1)
            : ((Yl = e = !0),
              (n === 2 || n === 9 || n === 3 || n === 6) &&
                ((n = Nt.current), n !== null && n.tag === 13 && (n.flags |= 16384))),
        Fd(t, e))
      : pi(t)
  }
  function pi(e) {
    var t = e
    do {
      if ((t.flags & 32768) !== 0) {
        Fd(t, Yl)
        return
      }
      e = t.return
      var l = zg(t.alternate, t, pl)
      if (l !== null) {
        de = l
        return
      }
      if (((t = t.sibling), t !== null)) {
        de = t
        return
      }
      de = t = e
    } while (t !== null)
    Ve === 0 && (Ve = 5)
  }
  function Fd(e, t) {
    do {
      var l = Ag(e.alternate, e)
      if (l !== null) {
        ;((l.flags &= 32767), (de = l))
        return
      }
      if (
        ((l = e.return),
        l !== null && ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        de = e
        return
      }
      de = e = l
    } while (e !== null)
    ;((Ve = 6), (de = null))
  }
  function Id(e, t, l, n, a, u, o, d, p) {
    e.cancelPendingCommit = null
    do bi()
    while (et !== 0)
    if ((xe & 6) !== 0) throw Error(c(327))
    if (t !== null) {
      if (t === e.current) throw Error(c(177))
      if (
        ((u = t.lanes | t.childLanes),
        (u |= Tc),
        mv(e, l, u, o, d, p),
        e === De && ((de = De = null), (he = 0)),
        (ta = t),
        (Xl = e),
        (bl = l),
        (Dr = u),
        (Mr = a),
        (Gd = n),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Bg(nt, function () {
              return (nm(), null)
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (n = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || n)
      ) {
        ;((n = D.T), (D.T = null), (a = X.p), (X.p = 2), (o = xe), (xe |= 4))
        try {
          Ng(e, t, l)
        } finally {
          ;((xe = o), (X.p = a), (D.T = n))
        }
      }
      ;((et = 1), Pd(), em(), tm())
    }
  }
  function Pd() {
    if (et === 1) {
      et = 0
      var e = Xl,
        t = ta,
        l = (t.flags & 13878) !== 0
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        ;((l = D.T), (D.T = null))
        var n = X.p
        X.p = 2
        var a = xe
        xe |= 4
        try {
          jd(t, e)
          var u = Jr,
            o = Bs(e.containerInfo),
            d = u.focusedElem,
            p = u.selectionRange
          if (o !== d && d && d.ownerDocument && Ls(d.ownerDocument.documentElement, d)) {
            if (p !== null && pc(d)) {
              var _ = p.start,
                M = p.end
              if ((M === void 0 && (M = _), 'selectionStart' in d))
                ((d.selectionStart = _), (d.selectionEnd = Math.min(M, d.value.length)))
              else {
                var L = d.ownerDocument || document,
                  C = (L && L.defaultView) || window
                if (C.getSelection) {
                  var O = C.getSelection(),
                    K = d.textContent.length,
                    I = Math.min(p.start, K),
                    Ce = p.end === void 0 ? I : Math.min(p.end, K)
                  !O.extend && I > Ce && ((o = Ce), (Ce = I), (I = o))
                  var z = Hs(d, I),
                    x = Hs(d, Ce)
                  if (
                    z &&
                    x &&
                    (O.rangeCount !== 1 ||
                      O.anchorNode !== z.node ||
                      O.anchorOffset !== z.offset ||
                      O.focusNode !== x.node ||
                      O.focusOffset !== x.offset)
                  ) {
                    var N = L.createRange()
                    ;(N.setStart(z.node, z.offset),
                      O.removeAllRanges(),
                      I > Ce
                        ? (O.addRange(N), O.extend(x.node, x.offset))
                        : (N.setEnd(x.node, x.offset), O.addRange(N)))
                  }
                }
              }
            }
            for (L = [], O = d; (O = O.parentNode); )
              O.nodeType === 1 && L.push({ element: O, left: O.scrollLeft, top: O.scrollTop })
            for (typeof d.focus == 'function' && d.focus(), d = 0; d < L.length; d++) {
              var w = L[d]
              ;((w.element.scrollLeft = w.left), (w.element.scrollTop = w.top))
            }
          }
          ;((Di = !!Kr), (Jr = Kr = null))
        } finally {
          ;((xe = a), (X.p = n), (D.T = l))
        }
      }
      ;((e.current = t), (et = 2))
    }
  }
  function em() {
    if (et === 2) {
      et = 0
      var e = Xl,
        t = ta,
        l = (t.flags & 8772) !== 0
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        ;((l = D.T), (D.T = null))
        var n = X.p
        X.p = 2
        var a = xe
        xe |= 4
        try {
          _d(e, t.alternate, t)
        } finally {
          ;((xe = a), (X.p = n), (D.T = l))
        }
      }
      et = 3
    }
  }
  function tm() {
    if (et === 4 || et === 3) {
      ;((et = 0), Et())
      var e = Xl,
        t = ta,
        l = bl,
        n = Gd
      ;(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (et = 5)
        : ((et = 0), (ta = Xl = null), lm(e, e.pendingLanes))
      var a = e.pendingLanes
      if (
        (a === 0 && (Vl = null),
        Pi(l),
        (t = t.stateNode),
        Tt && typeof Tt.onCommitFiberRoot == 'function')
      )
        try {
          Tt.onCommitFiberRoot(ba, t, void 0, (t.current.flags & 128) === 128)
        } catch {}
      if (n !== null) {
        ;((t = D.T), (a = X.p), (X.p = 2), (D.T = null))
        try {
          for (var u = e.onRecoverableError, o = 0; o < n.length; o++) {
            var d = n[o]
            u(d.value, { componentStack: d.stack })
          }
        } finally {
          ;((D.T = t), (X.p = a))
        }
      }
      ;((bl & 3) !== 0 && bi(),
        Pt(e),
        (a = e.pendingLanes),
        (l & 261930) !== 0 && (a & 42) !== 0 ? (e === jr ? eu++ : ((eu = 0), (jr = e))) : (eu = 0),
        tu(0))
    }
  }
  function lm(e, t) {
    ;(e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), wa(t)))
  }
  function bi() {
    return (Pd(), em(), tm(), nm())
  }
  function nm() {
    if (et !== 5) return !1
    var e = Xl,
      t = Dr
    Dr = 0
    var l = Pi(bl),
      n = D.T,
      a = X.p
    try {
      ;((X.p = 32 > l ? 32 : l), (D.T = null), (l = Mr), (Mr = null))
      var u = Xl,
        o = bl
      if (((et = 0), (ta = Xl = null), (bl = 0), (xe & 6) !== 0)) throw Error(c(331))
      var d = xe
      if (
        ((xe |= 4),
        Bd(u.current),
        wd(u, u.current, o, l),
        (xe = d),
        tu(0, !1),
        Tt && typeof Tt.onPostCommitFiberRoot == 'function')
      )
        try {
          Tt.onPostCommitFiberRoot(ba, u)
        } catch {}
      return !0
    } finally {
      ;((X.p = a), (D.T = n), lm(e, t))
    }
  }
  function am(e, t, l) {
    ;((t = Ht(l, t)),
      (t = fr(e.stateNode, t, 2)),
      (e = Hl(e, t, 2)),
      e !== null && (xa(e, 2), Pt(e)))
  }
  function Ae(e, t, l) {
    if (e.tag === 3) am(e, e, l)
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          am(t, e, l)
          break
        } else if (t.tag === 1) {
          var n = t.stateNode
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof n.componentDidCatch == 'function' && (Vl === null || !Vl.has(n)))
          ) {
            ;((e = Ht(l, e)),
              (l = ud(2)),
              (n = Hl(t, l, 2)),
              n !== null && (id(l, n, t, e), xa(n, 2), Pt(n)))
            break
          }
        }
        t = t.return
      }
  }
  function Hr(e, t, l) {
    var n = e.pingCache
    if (n === null) {
      n = e.pingCache = new Og()
      var a = new Set()
      n.set(t, a)
    } else ((a = n.get(t)), a === void 0 && ((a = new Set()), n.set(t, a)))
    a.has(l) || ((_r = !0), a.add(l), (e = wg.bind(null, e, t, l)), t.then(e, e))
  }
  function wg(e, t, l) {
    var n = e.pingCache
    ;(n !== null && n.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      De === e &&
        (he & l) === l &&
        (Ve === 4 || (Ve === 3 && (he & 62914560) === he && 300 > Pe() - mi)
          ? (xe & 2) === 0 && la(e, 0)
          : (Cr |= l),
        ea === he && (ea = 0)),
      Pt(e))
  }
  function um(e, t) {
    ;(t === 0 && (t = Io()), (e = rn(e, t)), e !== null && (xa(e, t), Pt(e)))
  }
  function Hg(e) {
    var t = e.memoizedState,
      l = 0
    ;(t !== null && (l = t.retryLane), um(e, l))
  }
  function Lg(e, t) {
    var l = 0
    switch (e.tag) {
      case 31:
      case 13:
        var n = e.stateNode,
          a = e.memoizedState
        a !== null && (l = a.retryLane)
        break
      case 19:
        n = e.stateNode
        break
      case 22:
        n = e.stateNode._retryCache
        break
      default:
        throw Error(c(314))
    }
    ;(n !== null && n.delete(t), um(e, l))
  }
  function Bg(e, t) {
    return mt(e, t)
  }
  var Si = null,
    aa = null,
    Lr = !1,
    xi = !1,
    Br = !1,
    Zl = 0
  function Pt(e) {
    ;(e !== aa && e.next === null && (aa === null ? (Si = aa = e) : (aa = aa.next = e)),
      (xi = !0),
      Lr || ((Lr = !0), Yg()))
  }
  function tu(e, t) {
    if (!Br && xi) {
      Br = !0
      do
        for (var l = !1, n = Si; n !== null; ) {
          if (e !== 0) {
            var a = n.pendingLanes
            if (a === 0) var u = 0
            else {
              var o = n.suspendedLanes,
                d = n.pingedLanes
              ;((u = (1 << (31 - Rt(42 | e) + 1)) - 1),
                (u &= a & ~(o & ~d)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0))
            }
            u !== 0 && ((l = !0), om(n, u))
          } else
            ((u = he),
              (u = zu(
                n,
                n === De ? u : 0,
                n.cancelPendingCommit !== null || n.timeoutHandle !== -1
              )),
              (u & 3) === 0 || Sa(n, u) || ((l = !0), om(n, u)))
          n = n.next
        }
      while (l)
      Br = !1
    }
  }
  function qg() {
    im()
  }
  function im() {
    xi = Lr = !1
    var e = 0
    Zl !== 0 && Wg() && (e = Zl)
    for (var t = Pe(), l = null, n = Si; n !== null; ) {
      var a = n.next,
        u = cm(n, t)
      ;(u === 0
        ? ((n.next = null), l === null ? (Si = a) : (l.next = a), a === null && (aa = l))
        : ((l = n), (e !== 0 || (u & 3) !== 0) && (xi = !0)),
        (n = a))
    }
    ;((et !== 0 && et !== 5) || tu(e), Zl !== 0 && (Zl = 0))
  }
  function cm(e, t) {
    for (
      var l = e.suspendedLanes,
        n = e.pingedLanes,
        a = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var o = 31 - Rt(u),
        d = 1 << o,
        p = a[o]
      ;(p === -1
        ? ((d & l) === 0 || (d & n) !== 0) && (a[o] = dv(d, t))
        : p <= t && (e.expiredLanes |= d),
        (u &= ~d))
    }
    if (
      ((t = De),
      (l = he),
      (l = zu(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (n = e.callbackNode),
      l === 0 || (e === t && (ze === 2 || ze === 9)) || e.cancelPendingCommit !== null)
    )
      return (n !== null && n !== null && ot(n), (e.callbackNode = null), (e.callbackPriority = 0))
    if ((l & 3) === 0 || Sa(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t
      switch ((n !== null && ot(n), Pi(l))) {
        case 2:
        case 8:
          l = ya
          break
        case 32:
          l = nt
          break
        case 268435456:
          l = Rn
          break
        default:
          l = nt
      }
      return (
        (n = rm.bind(null, e)),
        (l = mt(l, n)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      )
    }
    return (n !== null && n !== null && ot(n), (e.callbackPriority = 2), (e.callbackNode = null), 2)
  }
  function rm(e, t) {
    if (et !== 0 && et !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null)
    var l = e.callbackNode
    if (bi() && e.callbackNode !== l) return null
    var n = he
    return (
      (n = zu(e, e === De ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      n === 0
        ? null
        : (Xd(e, n, t),
          cm(e, Pe()),
          e.callbackNode != null && e.callbackNode === l ? rm.bind(null, e) : null)
    )
  }
  function om(e, t) {
    if (bi()) return null
    Xd(e, t, !0)
  }
  function Yg() {
    Ig(function () {
      ;(xe & 6) !== 0 ? mt(ga, qg) : im()
    })
  }
  function qr() {
    if (Zl === 0) {
      var e = Xn
      ;(e === 0 && ((e = Eu), (Eu <<= 1), (Eu & 261888) === 0 && (Eu = 256)), (Zl = e))
    }
    return Zl
  }
  function sm(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : Cu('' + e)
  }
  function fm(e, t) {
    var l = t.ownerDocument.createElement('input')
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute('form', e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    )
  }
  function Gg(e, t, l, n, a) {
    if (t === 'submit' && l && l.stateNode === a) {
      var u = sm((a[ht] || null).action),
        o = n.submitter
      o &&
        ((t = (t = o[ht] || null) ? sm(t.formAction) : o.getAttribute('formAction')),
        t !== null && ((u = t), (o = null)))
      var d = new ju('action', 'action', null, n, a)
      e.push({
        event: d,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (n.defaultPrevented) {
                if (Zl !== 0) {
                  var p = o ? fm(a, o) : new FormData(a)
                  ur(l, { pending: !0, data: p, method: a.method, action: u }, null, p)
                }
              } else
                typeof u == 'function' &&
                  (d.preventDefault(),
                  (p = o ? fm(a, o) : new FormData(a)),
                  ur(l, { pending: !0, data: p, method: a.method, action: u }, u, p))
            },
            currentTarget: a,
          },
        ],
      })
    }
  }
  for (var Yr = 0; Yr < Ec.length; Yr++) {
    var Gr = Ec[Yr],
      Vg = Gr.toLowerCase(),
      Xg = Gr[0].toUpperCase() + Gr.slice(1)
    Qt(Vg, 'on' + Xg)
  }
  ;(Qt(Gs, 'onAnimationEnd'),
    Qt(Vs, 'onAnimationIteration'),
    Qt(Xs, 'onAnimationStart'),
    Qt('dblclick', 'onDoubleClick'),
    Qt('focusin', 'onFocus'),
    Qt('focusout', 'onBlur'),
    Qt(ug, 'onTransitionRun'),
    Qt(ig, 'onTransitionStart'),
    Qt(cg, 'onTransitionCancel'),
    Qt(Qs, 'onTransitionEnd'),
    Cn('onMouseEnter', ['mouseout', 'mouseover']),
    Cn('onMouseLeave', ['mouseout', 'mouseover']),
    Cn('onPointerEnter', ['pointerout', 'pointerover']),
    Cn('onPointerLeave', ['pointerout', 'pointerover']),
    nn('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    nn(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    nn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    nn('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    nn(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    nn(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ))
  var lu =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Qg = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(lu)
    )
  function dm(e, t) {
    t = (t & 4) !== 0
    for (var l = 0; l < e.length; l++) {
      var n = e[l],
        a = n.event
      n = n.listeners
      e: {
        var u = void 0
        if (t)
          for (var o = n.length - 1; 0 <= o; o--) {
            var d = n[o],
              p = d.instance,
              _ = d.currentTarget
            if (((d = d.listener), p !== u && a.isPropagationStopped())) break e
            ;((u = d), (a.currentTarget = _))
            try {
              u(a)
            } catch (M) {
              Hu(M)
            }
            ;((a.currentTarget = null), (u = p))
          }
        else
          for (o = 0; o < n.length; o++) {
            if (
              ((d = n[o]),
              (p = d.instance),
              (_ = d.currentTarget),
              (d = d.listener),
              p !== u && a.isPropagationStopped())
            )
              break e
            ;((u = d), (a.currentTarget = _))
            try {
              u(a)
            } catch (M) {
              Hu(M)
            }
            ;((a.currentTarget = null), (u = p))
          }
      }
    }
  }
  function me(e, t) {
    var l = t[ec]
    l === void 0 && (l = t[ec] = new Set())
    var n = e + '__bubble'
    l.has(n) || (mm(t, e, 2, !1), l.add(n))
  }
  function Vr(e, t, l) {
    var n = 0
    ;(t && (n |= 4), mm(l, e, n, t))
  }
  var Ei = '_reactListening' + Math.random().toString(36).slice(2)
  function Xr(e) {
    if (!e[Ei]) {
      ;((e[Ei] = !0),
        us.forEach(function (l) {
          l !== 'selectionchange' && (Qg.has(l) || Vr(l, !1, e), Vr(l, !0, e))
        }))
      var t = e.nodeType === 9 ? e : e.ownerDocument
      t === null || t[Ei] || ((t[Ei] = !0), Vr('selectionchange', !1, t))
    }
  }
  function mm(e, t, l, n) {
    switch (Vm(t)) {
      case 2:
        var a = py
        break
      case 8:
        a = by
        break
      default:
        a = ao
    }
    ;((l = a.bind(null, t, l, e)),
      (a = void 0),
      !oc || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (a = !0),
      n
        ? a !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: a })
          : e.addEventListener(t, l, !0)
        : a !== void 0
          ? e.addEventListener(t, l, { passive: a })
          : e.addEventListener(t, l, !1))
  }
  function Qr(e, t, l, n, a) {
    var u = n
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e: for (;;) {
        if (n === null) return
        var o = n.tag
        if (o === 3 || o === 4) {
          var d = n.stateNode.containerInfo
          if (d === a) break
          if (o === 4)
            for (o = n.return; o !== null; ) {
              var p = o.tag
              if ((p === 3 || p === 4) && o.stateNode.containerInfo === a) return
              o = o.return
            }
          for (; d !== null; ) {
            if (((o = An(d)), o === null)) return
            if (((p = o.tag), p === 5 || p === 6 || p === 26 || p === 27)) {
              n = u = o
              continue e
            }
            d = d.parentNode
          }
        }
        n = n.return
      }
    ys(function () {
      var _ = u,
        M = cc(l),
        L = []
      e: {
        var C = Zs.get(e)
        if (C !== void 0) {
          var O = ju,
            K = e
          switch (e) {
            case 'keypress':
              if (Du(l) === 0) break e
            case 'keydown':
            case 'keyup':
              O = Lv
              break
            case 'focusin':
              ;((K = 'focus'), (O = mc))
              break
            case 'focusout':
              ;((K = 'blur'), (O = mc))
              break
            case 'beforeblur':
            case 'afterblur':
              O = mc
              break
            case 'click':
              if (l.button === 2) break e
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              O = Ss
              break
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              O = zv
              break
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              O = Yv
              break
            case Gs:
            case Vs:
            case Xs:
              O = _v
              break
            case Qs:
              O = Vv
              break
            case 'scroll':
            case 'scrollend':
              O = Tv
              break
            case 'wheel':
              O = Qv
              break
            case 'copy':
            case 'cut':
            case 'paste':
              O = Ov
              break
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              O = Es
              break
            case 'toggle':
            case 'beforetoggle':
              O = Kv
          }
          var I = (t & 4) !== 0,
            Ce = !I && (e === 'scroll' || e === 'scrollend'),
            z = I ? (C !== null ? C + 'Capture' : null) : C
          I = []
          for (var x = _, N; x !== null; ) {
            var w = x
            if (
              ((N = w.stateNode),
              (w = w.tag),
              (w !== 5 && w !== 26 && w !== 27) ||
                N === null ||
                z === null ||
                ((w = Ra(x, z)), w != null && I.push(nu(x, w, N))),
              Ce)
            )
              break
            x = x.return
          }
          0 < I.length && ((C = new O(C, K, null, l, M)), L.push({ event: C, listeners: I }))
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((C = e === 'mouseover' || e === 'pointerover'),
            (O = e === 'mouseout' || e === 'pointerout'),
            C && l !== ic && (K = l.relatedTarget || l.fromElement) && (An(K) || K[zn]))
          )
            break e
          if (
            (O || C) &&
            ((C =
              M.window === M
                ? M
                : (C = M.ownerDocument)
                  ? C.defaultView || C.parentWindow
                  : window),
            O
              ? ((K = l.relatedTarget || l.toElement),
                (O = _),
                (K = K ? An(K) : null),
                K !== null &&
                  ((Ce = m(K)), (I = K.tag), K !== Ce || (I !== 5 && I !== 27 && I !== 6)) &&
                  (K = null))
              : ((O = null), (K = _)),
            O !== K)
          ) {
            if (
              ((I = Ss),
              (w = 'onMouseLeave'),
              (z = 'onMouseEnter'),
              (x = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((I = Es), (w = 'onPointerLeave'), (z = 'onPointerEnter'), (x = 'pointer')),
              (Ce = O == null ? C : Ta(O)),
              (N = K == null ? C : Ta(K)),
              (C = new I(w, x + 'leave', O, l, M)),
              (C.target = Ce),
              (C.relatedTarget = N),
              (w = null),
              An(M) === _ &&
                ((I = new I(z, x + 'enter', K, l, M)),
                (I.target = N),
                (I.relatedTarget = Ce),
                (w = I)),
              (Ce = w),
              O && K)
            )
              t: {
                for (I = Zg, z = O, x = K, N = 0, w = z; w; w = I(w)) N++
                w = 0
                for (var F = x; F; F = I(F)) w++
                for (; 0 < N - w; ) ((z = I(z)), N--)
                for (; 0 < w - N; ) ((x = I(x)), w--)
                for (; N--; ) {
                  if (z === x || (x !== null && z === x.alternate)) {
                    I = z
                    break t
                  }
                  ;((z = I(z)), (x = I(x)))
                }
                I = null
              }
            else I = null
            ;(O !== null && hm(L, C, O, I, !1), K !== null && Ce !== null && hm(L, Ce, K, I, !0))
          }
        }
        e: {
          if (
            ((C = _ ? Ta(_) : window),
            (O = C.nodeName && C.nodeName.toLowerCase()),
            O === 'select' || (O === 'input' && C.type === 'file'))
          )
            var pe = Os
          else if (_s(C))
            if (Ds) pe = lg
            else {
              pe = eg
              var J = Pv
            }
          else
            ((O = C.nodeName),
              !O || O.toLowerCase() !== 'input' || (C.type !== 'checkbox' && C.type !== 'radio')
                ? _ && uc(_.elementType) && (pe = Os)
                : (pe = tg))
          if (pe && (pe = pe(e, _))) {
            Cs(L, pe, l, M)
            break e
          }
          ;(J && J(e, C, _),
            e === 'focusout' &&
              _ &&
              C.type === 'number' &&
              _.memoizedProps.value != null &&
              ac(C, 'number', C.value))
        }
        switch (((J = _ ? Ta(_) : window), e)) {
          case 'focusin':
            ;(_s(J) || J.contentEditable === 'true') && ((wn = J), (bc = _), (Ma = null))
            break
          case 'focusout':
            Ma = bc = wn = null
            break
          case 'mousedown':
            Sc = !0
            break
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ;((Sc = !1), qs(L, l, M))
            break
          case 'selectionchange':
            if (ag) break
          case 'keydown':
          case 'keyup':
            qs(L, l, M)
        }
        var ie
        if (vc)
          e: {
            switch (e) {
              case 'compositionstart':
                var ve = 'onCompositionStart'
                break e
              case 'compositionend':
                ve = 'onCompositionEnd'
                break e
              case 'compositionupdate':
                ve = 'onCompositionUpdate'
                break e
            }
            ve = void 0
          }
        else
          Un
            ? As(e, l) && (ve = 'onCompositionEnd')
            : e === 'keydown' && l.keyCode === 229 && (ve = 'onCompositionStart')
        ;(ve &&
          (Ts &&
            l.locale !== 'ko' &&
            (Un || ve !== 'onCompositionStart'
              ? ve === 'onCompositionEnd' && Un && (ie = ps())
              : ((Cl = M), (sc = 'value' in Cl ? Cl.value : Cl.textContent), (Un = !0))),
          (J = Ti(_, ve)),
          0 < J.length &&
            ((ve = new xs(ve, e, null, l, M)),
            L.push({ event: ve, listeners: J }),
            ie ? (ve.data = ie) : ((ie = Ns(l)), ie !== null && (ve.data = ie)))),
          (ie = kv ? $v(e, l) : Wv(e, l)) &&
            ((ve = Ti(_, 'onBeforeInput')),
            0 < ve.length &&
              ((J = new xs('onBeforeInput', 'beforeinput', null, l, M)),
              L.push({ event: J, listeners: ve }),
              (J.data = ie))),
          Gg(L, e, _, l, M))
      }
      dm(L, t)
    })
  }
  function nu(e, t, l) {
    return { instance: e, listener: t, currentTarget: l }
  }
  function Ti(e, t) {
    for (var l = t + 'Capture', n = []; e !== null; ) {
      var a = e,
        u = a.stateNode
      if (
        ((a = a.tag),
        (a !== 5 && a !== 26 && a !== 27) ||
          u === null ||
          ((a = Ra(e, l)),
          a != null && n.unshift(nu(e, a, u)),
          (a = Ra(e, t)),
          a != null && n.push(nu(e, a, u))),
        e.tag === 3)
      )
        return n
      e = e.return
    }
    return []
  }
  function Zg(e) {
    if (e === null) return null
    do e = e.return
    while (e && e.tag !== 5 && e.tag !== 27)
    return e || null
  }
  function hm(e, t, l, n, a) {
    for (var u = t._reactName, o = []; l !== null && l !== n; ) {
      var d = l,
        p = d.alternate,
        _ = d.stateNode
      if (((d = d.tag), p !== null && p === n)) break
      ;((d !== 5 && d !== 26 && d !== 27) ||
        _ === null ||
        ((p = _),
        a
          ? ((_ = Ra(l, u)), _ != null && o.unshift(nu(l, _, p)))
          : a || ((_ = Ra(l, u)), _ != null && o.push(nu(l, _, p)))),
        (l = l.return))
    }
    o.length !== 0 && e.push({ event: t, listeners: o })
  }
  var Kg = /\r\n?/g,
    Jg = /\u0000|\uFFFD/g
  function vm(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Kg,
        `
`
      )
      .replace(Jg, '')
  }
  function gm(e, t) {
    return ((t = vm(t)), vm(e) === t)
  }
  function _e(e, t, l, n, a, u) {
    switch (l) {
      case 'children':
        typeof n == 'string'
          ? t === 'body' || (t === 'textarea' && n === '') || Dn(e, n)
          : (typeof n == 'number' || typeof n == 'bigint') && t !== 'body' && Dn(e, '' + n)
        break
      case 'className':
        Nu(e, 'class', n)
        break
      case 'tabIndex':
        Nu(e, 'tabindex', n)
        break
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Nu(e, l, n)
        break
      case 'style':
        vs(e, n, u)
        break
      case 'data':
        if (t !== 'object') {
          Nu(e, 'data', n)
          break
        }
      case 'src':
      case 'href':
        if (n === '' && (t !== 'a' || l !== 'href')) {
          e.removeAttribute(l)
          break
        }
        if (n == null || typeof n == 'function' || typeof n == 'symbol' || typeof n == 'boolean') {
          e.removeAttribute(l)
          break
        }
        ;((n = Cu('' + n)), e.setAttribute(l, n))
        break
      case 'action':
      case 'formAction':
        if (typeof n == 'function') {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          )
          break
        } else
          typeof u == 'function' &&
            (l === 'formAction'
              ? (t !== 'input' && _e(e, t, 'name', a.name, a, null),
                _e(e, t, 'formEncType', a.formEncType, a, null),
                _e(e, t, 'formMethod', a.formMethod, a, null),
                _e(e, t, 'formTarget', a.formTarget, a, null))
              : (_e(e, t, 'encType', a.encType, a, null),
                _e(e, t, 'method', a.method, a, null),
                _e(e, t, 'target', a.target, a, null)))
        if (n == null || typeof n == 'symbol' || typeof n == 'boolean') {
          e.removeAttribute(l)
          break
        }
        ;((n = Cu('' + n)), e.setAttribute(l, n))
        break
      case 'onClick':
        n != null && (e.onclick = al)
        break
      case 'onScroll':
        n != null && me('scroll', e)
        break
      case 'onScrollEnd':
        n != null && me('scrollend', e)
        break
      case 'dangerouslySetInnerHTML':
        if (n != null) {
          if (typeof n != 'object' || !('__html' in n)) throw Error(c(61))
          if (((l = n.__html), l != null)) {
            if (a.children != null) throw Error(c(60))
            e.innerHTML = l
          }
        }
        break
      case 'multiple':
        e.multiple = n && typeof n != 'function' && typeof n != 'symbol'
        break
      case 'muted':
        e.muted = n && typeof n != 'function' && typeof n != 'symbol'
        break
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break
      case 'autoFocus':
        break
      case 'xlinkHref':
        if (n == null || typeof n == 'function' || typeof n == 'boolean' || typeof n == 'symbol') {
          e.removeAttribute('xlink:href')
          break
        }
        ;((l = Cu('' + n)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', l))
        break
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        n != null && typeof n != 'function' && typeof n != 'symbol'
          ? e.setAttribute(l, '' + n)
          : e.removeAttribute(l)
        break
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        n && typeof n != 'function' && typeof n != 'symbol'
          ? e.setAttribute(l, '')
          : e.removeAttribute(l)
        break
      case 'capture':
      case 'download':
        n === !0
          ? e.setAttribute(l, '')
          : n !== !1 && n != null && typeof n != 'function' && typeof n != 'symbol'
            ? e.setAttribute(l, n)
            : e.removeAttribute(l)
        break
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        n != null && typeof n != 'function' && typeof n != 'symbol' && !isNaN(n) && 1 <= n
          ? e.setAttribute(l, n)
          : e.removeAttribute(l)
        break
      case 'rowSpan':
      case 'start':
        n == null || typeof n == 'function' || typeof n == 'symbol' || isNaN(n)
          ? e.removeAttribute(l)
          : e.setAttribute(l, n)
        break
      case 'popover':
        ;(me('beforetoggle', e), me('toggle', e), Au(e, 'popover', n))
        break
      case 'xlinkActuate':
        nl(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', n)
        break
      case 'xlinkArcrole':
        nl(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', n)
        break
      case 'xlinkRole':
        nl(e, 'http://www.w3.org/1999/xlink', 'xlink:role', n)
        break
      case 'xlinkShow':
        nl(e, 'http://www.w3.org/1999/xlink', 'xlink:show', n)
        break
      case 'xlinkTitle':
        nl(e, 'http://www.w3.org/1999/xlink', 'xlink:title', n)
        break
      case 'xlinkType':
        nl(e, 'http://www.w3.org/1999/xlink', 'xlink:type', n)
        break
      case 'xmlBase':
        nl(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', n)
        break
      case 'xmlLang':
        nl(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', n)
        break
      case 'xmlSpace':
        nl(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', n)
        break
      case 'is':
        Au(e, 'is', n)
        break
      case 'innerText':
      case 'textContent':
        break
      default:
        ;(!(2 < l.length) || (l[0] !== 'o' && l[0] !== 'O') || (l[1] !== 'n' && l[1] !== 'N')) &&
          ((l = xv.get(l) || l), Au(e, l, n))
    }
  }
  function Zr(e, t, l, n, a, u) {
    switch (l) {
      case 'style':
        vs(e, n, u)
        break
      case 'dangerouslySetInnerHTML':
        if (n != null) {
          if (typeof n != 'object' || !('__html' in n)) throw Error(c(61))
          if (((l = n.__html), l != null)) {
            if (a.children != null) throw Error(c(60))
            e.innerHTML = l
          }
        }
        break
      case 'children':
        typeof n == 'string'
          ? Dn(e, n)
          : (typeof n == 'number' || typeof n == 'bigint') && Dn(e, '' + n)
        break
      case 'onScroll':
        n != null && me('scroll', e)
        break
      case 'onScrollEnd':
        n != null && me('scrollend', e)
        break
      case 'onClick':
        n != null && (e.onclick = al)
        break
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break
      case 'innerText':
      case 'textContent':
        break
      default:
        if (!is.hasOwnProperty(l))
          e: {
            if (
              l[0] === 'o' &&
              l[1] === 'n' &&
              ((a = l.endsWith('Capture')),
              (t = l.slice(2, a ? l.length - 7 : void 0)),
              (u = e[ht] || null),
              (u = u != null ? u[l] : null),
              typeof u == 'function' && e.removeEventListener(t, u, a),
              typeof n == 'function')
            ) {
              ;(typeof u != 'function' &&
                u !== null &&
                (l in e ? (e[l] = null) : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, n, a))
              break e
            }
            l in e ? (e[l] = n) : n === !0 ? e.setAttribute(l, '') : Au(e, l, n)
          }
    }
  }
  function rt(e, t, l) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break
      case 'img':
        ;(me('error', e), me('load', e))
        var n = !1,
          a = !1,
          u
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var o = l[u]
            if (o != null)
              switch (u) {
                case 'src':
                  n = !0
                  break
                case 'srcSet':
                  a = !0
                  break
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(c(137, t))
                default:
                  _e(e, t, u, o, l, null)
              }
          }
        ;(a && _e(e, t, 'srcSet', l.srcSet, l, null), n && _e(e, t, 'src', l.src, l, null))
        return
      case 'input':
        me('invalid', e)
        var d = (u = o = a = null),
          p = null,
          _ = null
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var M = l[n]
            if (M != null)
              switch (n) {
                case 'name':
                  a = M
                  break
                case 'type':
                  o = M
                  break
                case 'checked':
                  p = M
                  break
                case 'defaultChecked':
                  _ = M
                  break
                case 'value':
                  u = M
                  break
                case 'defaultValue':
                  d = M
                  break
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (M != null) throw Error(c(137, t))
                  break
                default:
                  _e(e, t, n, M, l, null)
              }
          }
        fs(e, u, d, p, _, o, a, !1)
        return
      case 'select':
        ;(me('invalid', e), (n = o = u = null))
        for (a in l)
          if (l.hasOwnProperty(a) && ((d = l[a]), d != null))
            switch (a) {
              case 'value':
                u = d
                break
              case 'defaultValue':
                o = d
                break
              case 'multiple':
                n = d
              default:
                _e(e, t, a, d, l, null)
            }
        ;((t = u),
          (l = o),
          (e.multiple = !!n),
          t != null ? On(e, !!n, t, !1) : l != null && On(e, !!n, l, !0))
        return
      case 'textarea':
        ;(me('invalid', e), (u = a = n = null))
        for (o in l)
          if (l.hasOwnProperty(o) && ((d = l[o]), d != null))
            switch (o) {
              case 'value':
                n = d
                break
              case 'defaultValue':
                a = d
                break
              case 'children':
                u = d
                break
              case 'dangerouslySetInnerHTML':
                if (d != null) throw Error(c(91))
                break
              default:
                _e(e, t, o, d, l, null)
            }
        ms(e, n, a, u)
        return
      case 'option':
        for (p in l)
          if (l.hasOwnProperty(p) && ((n = l[p]), n != null))
            switch (p) {
              case 'selected':
                e.selected = n && typeof n != 'function' && typeof n != 'symbol'
                break
              default:
                _e(e, t, p, n, l, null)
            }
        return
      case 'dialog':
        ;(me('beforetoggle', e), me('toggle', e), me('cancel', e), me('close', e))
        break
      case 'iframe':
      case 'object':
        me('load', e)
        break
      case 'video':
      case 'audio':
        for (n = 0; n < lu.length; n++) me(lu[n], e)
        break
      case 'image':
        ;(me('error', e), me('load', e))
        break
      case 'details':
        me('toggle', e)
        break
      case 'embed':
      case 'source':
      case 'link':
        ;(me('error', e), me('load', e))
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (_ in l)
          if (l.hasOwnProperty(_) && ((n = l[_]), n != null))
            switch (_) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(c(137, t))
              default:
                _e(e, t, _, n, l, null)
            }
        return
      default:
        if (uc(t)) {
          for (M in l)
            l.hasOwnProperty(M) && ((n = l[M]), n !== void 0 && Zr(e, t, M, n, l, void 0))
          return
        }
    }
    for (d in l) l.hasOwnProperty(d) && ((n = l[d]), n != null && _e(e, t, d, n, l, null))
  }
  function kg(e, t, l, n) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break
      case 'input':
        var a = null,
          u = null,
          o = null,
          d = null,
          p = null,
          _ = null,
          M = null
        for (O in l) {
          var L = l[O]
          if (l.hasOwnProperty(O) && L != null)
            switch (O) {
              case 'checked':
                break
              case 'value':
                break
              case 'defaultValue':
                p = L
              default:
                n.hasOwnProperty(O) || _e(e, t, O, null, n, L)
            }
        }
        for (var C in n) {
          var O = n[C]
          if (((L = l[C]), n.hasOwnProperty(C) && (O != null || L != null)))
            switch (C) {
              case 'type':
                u = O
                break
              case 'name':
                a = O
                break
              case 'checked':
                _ = O
                break
              case 'defaultChecked':
                M = O
                break
              case 'value':
                o = O
                break
              case 'defaultValue':
                d = O
                break
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (O != null) throw Error(c(137, t))
                break
              default:
                O !== L && _e(e, t, C, O, n, L)
            }
        }
        nc(e, o, d, p, _, M, u, a)
        return
      case 'select':
        O = o = d = C = null
        for (u in l)
          if (((p = l[u]), l.hasOwnProperty(u) && p != null))
            switch (u) {
              case 'value':
                break
              case 'multiple':
                O = p
              default:
                n.hasOwnProperty(u) || _e(e, t, u, null, n, p)
            }
        for (a in n)
          if (((u = n[a]), (p = l[a]), n.hasOwnProperty(a) && (u != null || p != null)))
            switch (a) {
              case 'value':
                C = u
                break
              case 'defaultValue':
                d = u
                break
              case 'multiple':
                o = u
              default:
                u !== p && _e(e, t, a, u, n, p)
            }
        ;((t = d),
          (l = o),
          (n = O),
          C != null
            ? On(e, !!l, C, !1)
            : !!n != !!l && (t != null ? On(e, !!l, t, !0) : On(e, !!l, l ? [] : '', !1)))
        return
      case 'textarea':
        O = C = null
        for (d in l)
          if (((a = l[d]), l.hasOwnProperty(d) && a != null && !n.hasOwnProperty(d)))
            switch (d) {
              case 'value':
                break
              case 'children':
                break
              default:
                _e(e, t, d, null, n, a)
            }
        for (o in n)
          if (((a = n[o]), (u = l[o]), n.hasOwnProperty(o) && (a != null || u != null)))
            switch (o) {
              case 'value':
                C = a
                break
              case 'defaultValue':
                O = a
                break
              case 'children':
                break
              case 'dangerouslySetInnerHTML':
                if (a != null) throw Error(c(91))
                break
              default:
                a !== u && _e(e, t, o, a, n, u)
            }
        ds(e, C, O)
        return
      case 'option':
        for (var K in l)
          if (((C = l[K]), l.hasOwnProperty(K) && C != null && !n.hasOwnProperty(K)))
            switch (K) {
              case 'selected':
                e.selected = !1
                break
              default:
                _e(e, t, K, null, n, C)
            }
        for (p in n)
          if (((C = n[p]), (O = l[p]), n.hasOwnProperty(p) && C !== O && (C != null || O != null)))
            switch (p) {
              case 'selected':
                e.selected = C && typeof C != 'function' && typeof C != 'symbol'
                break
              default:
                _e(e, t, p, C, n, O)
            }
        return
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var I in l)
          ((C = l[I]),
            l.hasOwnProperty(I) && C != null && !n.hasOwnProperty(I) && _e(e, t, I, null, n, C))
        for (_ in n)
          if (((C = n[_]), (O = l[_]), n.hasOwnProperty(_) && C !== O && (C != null || O != null)))
            switch (_) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (C != null) throw Error(c(137, t))
                break
              default:
                _e(e, t, _, C, n, O)
            }
        return
      default:
        if (uc(t)) {
          for (var Ce in l)
            ((C = l[Ce]),
              l.hasOwnProperty(Ce) &&
                C !== void 0 &&
                !n.hasOwnProperty(Ce) &&
                Zr(e, t, Ce, void 0, n, C))
          for (M in n)
            ((C = n[M]),
              (O = l[M]),
              !n.hasOwnProperty(M) ||
                C === O ||
                (C === void 0 && O === void 0) ||
                Zr(e, t, M, C, n, O))
          return
        }
    }
    for (var z in l)
      ((C = l[z]),
        l.hasOwnProperty(z) && C != null && !n.hasOwnProperty(z) && _e(e, t, z, null, n, C))
    for (L in n)
      ((C = n[L]),
        (O = l[L]),
        !n.hasOwnProperty(L) || C === O || (C == null && O == null) || _e(e, t, L, C, n, O))
  }
  function ym(e) {
    switch (e) {
      case 'css':
      case 'script':
      case 'font':
      case 'img':
      case 'image':
      case 'input':
      case 'link':
        return !0
      default:
        return !1
    }
  }
  function $g() {
    if (typeof performance.getEntriesByType == 'function') {
      for (
        var e = 0, t = 0, l = performance.getEntriesByType('resource'), n = 0;
        n < l.length;
        n++
      ) {
        var a = l[n],
          u = a.transferSize,
          o = a.initiatorType,
          d = a.duration
        if (u && d && ym(o)) {
          for (o = 0, d = a.responseEnd, n += 1; n < l.length; n++) {
            var p = l[n],
              _ = p.startTime
            if (_ > d) break
            var M = p.transferSize,
              L = p.initiatorType
            M && ym(L) && ((p = p.responseEnd), (o += M * (p < d ? 1 : (d - _) / (p - _))))
          }
          if ((--n, (t += (8 * (u + o)) / (a.duration / 1e3)), e++, 10 < e)) break
        }
      }
      if (0 < e) return t / e / 1e6
    }
    return navigator.connection && ((e = navigator.connection.downlink), typeof e == 'number')
      ? e
      : 5
  }
  var Kr = null,
    Jr = null
  function Ri(e) {
    return e.nodeType === 9 ? e : e.ownerDocument
  }
  function pm(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1
      case 'http://www.w3.org/1998/Math/MathML':
        return 2
      default:
        return 0
    }
  }
  function bm(e, t) {
    if (e === 0)
      switch (t) {
        case 'svg':
          return 1
        case 'math':
          return 2
        default:
          return 0
      }
    return e === 1 && t === 'foreignObject' ? 0 : e
  }
  function kr(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      typeof t.children == 'bigint' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    )
  }
  var $r = null
  function Wg() {
    var e = window.event
    return e && e.type === 'popstate' ? (e === $r ? !1 : (($r = e), !0)) : (($r = null), !1)
  }
  var Sm = typeof setTimeout == 'function' ? setTimeout : void 0,
    Fg = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    xm = typeof Promise == 'function' ? Promise : void 0,
    Ig =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof xm < 'u'
          ? function (e) {
              return xm.resolve(null).then(e).catch(Pg)
            }
          : Sm
  function Pg(e) {
    setTimeout(function () {
      throw e
    })
  }
  function Kl(e) {
    return e === 'head'
  }
  function Em(e, t) {
    var l = t,
      n = 0
    do {
      var a = l.nextSibling
      if ((e.removeChild(l), a && a.nodeType === 8))
        if (((l = a.data), l === '/$' || l === '/&')) {
          if (n === 0) {
            ;(e.removeChild(a), ra(t))
            return
          }
          n--
        } else if (l === '$' || l === '$?' || l === '$~' || l === '$!' || l === '&') n++
        else if (l === 'html') au(e.ownerDocument.documentElement)
        else if (l === 'head') {
          ;((l = e.ownerDocument.head), au(l))
          for (var u = l.firstChild; u; ) {
            var o = u.nextSibling,
              d = u.nodeName
            ;(u[Ea] ||
              d === 'SCRIPT' ||
              d === 'STYLE' ||
              (d === 'LINK' && u.rel.toLowerCase() === 'stylesheet') ||
              l.removeChild(u),
              (u = o))
          }
        } else l === 'body' && au(e.ownerDocument.body)
      l = a
    } while (l)
    ra(t)
  }
  function Tm(e, t) {
    var l = e
    e = 0
    do {
      var n = l.nextSibling
      if (
        (l.nodeType === 1
          ? t
            ? ((l._stashedDisplay = l.style.display), (l.style.display = 'none'))
            : ((l.style.display = l._stashedDisplay || ''),
              l.getAttribute('style') === '' && l.removeAttribute('style'))
          : l.nodeType === 3 &&
            (t
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ''))
              : (l.nodeValue = l._stashedText || '')),
        n && n.nodeType === 8)
      )
        if (((l = n.data), l === '/$')) {
          if (e === 0) break
          e--
        } else (l !== '$' && l !== '$?' && l !== '$~' && l !== '$!') || e++
      l = n
    } while (l)
  }
  function Wr(e) {
    var t = e.firstChild
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t
      switch (((t = t.nextSibling), l.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          ;(Wr(l), tc(l))
          continue
        case 'SCRIPT':
        case 'STYLE':
          continue
        case 'LINK':
          if (l.rel.toLowerCase() === 'stylesheet') continue
      }
      e.removeChild(l)
    }
  }
  function ey(e, t, l, n) {
    for (; e.nodeType === 1; ) {
      var a = l
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!n && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break
      } else if (n) {
        if (!e[Ea])
          switch (t) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break
              return e
            case 'link':
              if (
                ((u = e.getAttribute('rel')),
                u === 'stylesheet' && e.hasAttribute('data-precedence'))
              )
                break
              if (
                u !== a.rel ||
                e.getAttribute('href') !== (a.href == null || a.href === '' ? null : a.href) ||
                e.getAttribute('crossorigin') !== (a.crossOrigin == null ? null : a.crossOrigin) ||
                e.getAttribute('title') !== (a.title == null ? null : a.title)
              )
                break
              return e
            case 'style':
              if (e.hasAttribute('data-precedence')) break
              return e
            case 'script':
              if (
                ((u = e.getAttribute('src')),
                (u !== (a.src == null ? null : a.src) ||
                  e.getAttribute('type') !== (a.type == null ? null : a.type) ||
                  e.getAttribute('crossorigin') !==
                    (a.crossOrigin == null ? null : a.crossOrigin)) &&
                  u &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break
              return e
            default:
              return e
          }
      } else if (t === 'input' && e.type === 'hidden') {
        var u = a.name == null ? null : '' + a.name
        if (a.type === 'hidden' && e.getAttribute('name') === u) return e
      } else return e
      if (((e = Gt(e.nextSibling)), e === null)) break
    }
    return null
  }
  function ty(e, t, l) {
    if (t === '') return null
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !l) ||
        ((e = Gt(e.nextSibling)), e === null)
      )
        return null
    return e
  }
  function Rm(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !t) ||
        ((e = Gt(e.nextSibling)), e === null)
      )
        return null
    return e
  }
  function Fr(e) {
    return e.data === '$?' || e.data === '$~'
  }
  function Ir(e) {
    return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState !== 'loading')
  }
  function ly(e, t) {
    var l = e.ownerDocument
    if (e.data === '$~') e._reactRetry = t
    else if (e.data !== '$?' || l.readyState !== 'loading') t()
    else {
      var n = function () {
        ;(t(), l.removeEventListener('DOMContentLoaded', n))
      }
      ;(l.addEventListener('DOMContentLoaded', n), (e._reactRetry = n))
    }
  }
  function Gt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType
      if (t === 1 || t === 3) break
      if (t === 8) {
        if (
          ((t = e.data),
          t === '$' ||
            t === '$!' ||
            t === '$?' ||
            t === '$~' ||
            t === '&' ||
            t === 'F!' ||
            t === 'F')
        )
          break
        if (t === '/$' || t === '/&') return null
      }
    }
    return e
  }
  var Pr = null
  function zm(e) {
    e = e.nextSibling
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data
        if (l === '/$' || l === '/&') {
          if (t === 0) return Gt(e.nextSibling)
          t--
        } else (l !== '$' && l !== '$!' && l !== '$?' && l !== '$~' && l !== '&') || t++
      }
      e = e.nextSibling
    }
    return null
  }
  function Am(e) {
    e = e.previousSibling
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data
        if (l === '$' || l === '$!' || l === '$?' || l === '$~' || l === '&') {
          if (t === 0) return e
          t--
        } else (l !== '/$' && l !== '/&') || t++
      }
      e = e.previousSibling
    }
    return null
  }
  function Nm(e, t, l) {
    switch (((t = Ri(l)), e)) {
      case 'html':
        if (((e = t.documentElement), !e)) throw Error(c(452))
        return e
      case 'head':
        if (((e = t.head), !e)) throw Error(c(453))
        return e
      case 'body':
        if (((e = t.body), !e)) throw Error(c(454))
        return e
      default:
        throw Error(c(451))
    }
  }
  function au(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0])
    tc(e)
  }
  var Vt = new Map(),
    _m = new Set()
  function zi(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument
  }
  var Sl = X.d
  X.d = { f: ny, r: ay, D: uy, C: iy, L: cy, m: ry, X: sy, S: oy, M: fy }
  function ny() {
    var e = Sl.f(),
      t = gi()
    return e || t
  }
  function ay(e) {
    var t = Nn(e)
    t !== null && t.tag === 5 && t.type === 'form' ? Zf(t) : Sl.r(e)
  }
  var ua = typeof document > 'u' ? null : document
  function Cm(e, t, l) {
    var n = ua
    if (n && typeof t == 'string' && t) {
      var a = Ut(t)
      ;((a = 'link[rel="' + e + '"][href="' + a + '"]'),
        typeof l == 'string' && (a += '[crossorigin="' + l + '"]'),
        _m.has(a) ||
          (_m.add(a),
          (e = { rel: e, crossOrigin: l, href: t }),
          n.querySelector(a) === null &&
            ((t = n.createElement('link')), rt(t, 'link', e), tt(t), n.head.appendChild(t))))
    }
  }
  function uy(e) {
    ;(Sl.D(e), Cm('dns-prefetch', e, null))
  }
  function iy(e, t) {
    ;(Sl.C(e, t), Cm('preconnect', e, t))
  }
  function cy(e, t, l) {
    Sl.L(e, t, l)
    var n = ua
    if (n && e && t) {
      var a = 'link[rel="preload"][as="' + Ut(t) + '"]'
      t === 'image' && l && l.imageSrcSet
        ? ((a += '[imagesrcset="' + Ut(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == 'string' && (a += '[imagesizes="' + Ut(l.imageSizes) + '"]'))
        : (a += '[href="' + Ut(e) + '"]')
      var u = a
      switch (t) {
        case 'style':
          u = ia(e)
          break
        case 'script':
          u = ca(e)
      }
      Vt.has(u) ||
        ((e = b(
          { rel: 'preload', href: t === 'image' && l && l.imageSrcSet ? void 0 : e, as: t },
          l
        )),
        Vt.set(u, e),
        n.querySelector(a) !== null ||
          (t === 'style' && n.querySelector(uu(u))) ||
          (t === 'script' && n.querySelector(iu(u))) ||
          ((t = n.createElement('link')), rt(t, 'link', e), tt(t), n.head.appendChild(t)))
    }
  }
  function ry(e, t) {
    Sl.m(e, t)
    var l = ua
    if (l && e) {
      var n = t && typeof t.as == 'string' ? t.as : 'script',
        a = 'link[rel="modulepreload"][as="' + Ut(n) + '"][href="' + Ut(e) + '"]',
        u = a
      switch (n) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          u = ca(e)
      }
      if (
        !Vt.has(u) &&
        ((e = b({ rel: 'modulepreload', href: e }, t)), Vt.set(u, e), l.querySelector(a) === null)
      ) {
        switch (n) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (l.querySelector(iu(u))) return
        }
        ;((n = l.createElement('link')), rt(n, 'link', e), tt(n), l.head.appendChild(n))
      }
    }
  }
  function oy(e, t, l) {
    Sl.S(e, t, l)
    var n = ua
    if (n && e) {
      var a = _n(n).hoistableStyles,
        u = ia(e)
      t = t || 'default'
      var o = a.get(u)
      if (!o) {
        var d = { loading: 0, preload: null }
        if ((o = n.querySelector(uu(u)))) d.loading = 5
        else {
          ;((e = b({ rel: 'stylesheet', href: e, 'data-precedence': t }, l)),
            (l = Vt.get(u)) && eo(e, l))
          var p = (o = n.createElement('link'))
          ;(tt(p),
            rt(p, 'link', e),
            (p._p = new Promise(function (_, M) {
              ;((p.onload = _), (p.onerror = M))
            })),
            p.addEventListener('load', function () {
              d.loading |= 1
            }),
            p.addEventListener('error', function () {
              d.loading |= 2
            }),
            (d.loading |= 4),
            Ai(o, t, n))
        }
        ;((o = { type: 'stylesheet', instance: o, count: 1, state: d }), a.set(u, o))
      }
    }
  }
  function sy(e, t) {
    Sl.X(e, t)
    var l = ua
    if (l && e) {
      var n = _n(l).hoistableScripts,
        a = ca(e),
        u = n.get(a)
      u ||
        ((u = l.querySelector(iu(a))),
        u ||
          ((e = b({ src: e, async: !0 }, t)),
          (t = Vt.get(a)) && to(e, t),
          (u = l.createElement('script')),
          tt(u),
          rt(u, 'link', e),
          l.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        n.set(a, u))
    }
  }
  function fy(e, t) {
    Sl.M(e, t)
    var l = ua
    if (l && e) {
      var n = _n(l).hoistableScripts,
        a = ca(e),
        u = n.get(a)
      u ||
        ((u = l.querySelector(iu(a))),
        u ||
          ((e = b({ src: e, async: !0, type: 'module' }, t)),
          (t = Vt.get(a)) && to(e, t),
          (u = l.createElement('script')),
          tt(u),
          rt(u, 'link', e),
          l.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        n.set(a, u))
    }
  }
  function Om(e, t, l, n) {
    var a = (a = ae.current) ? zi(a) : null
    if (!a) throw Error(c(446))
    switch (e) {
      case 'meta':
      case 'title':
        return null
      case 'style':
        return typeof l.precedence == 'string' && typeof l.href == 'string'
          ? ((t = ia(l.href)),
            (l = _n(a).hoistableStyles),
            (n = l.get(t)),
            n || ((n = { type: 'style', instance: null, count: 0, state: null }), l.set(t, n)),
            n)
          : { type: 'void', instance: null, count: 0, state: null }
      case 'link':
        if (
          l.rel === 'stylesheet' &&
          typeof l.href == 'string' &&
          typeof l.precedence == 'string'
        ) {
          e = ia(l.href)
          var u = _n(a).hoistableStyles,
            o = u.get(e)
          if (
            (o ||
              ((a = a.ownerDocument || a),
              (o = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, o),
              (u = a.querySelector(uu(e))) && !u._p && ((o.instance = u), (o.state.loading = 5)),
              Vt.has(e) ||
                ((l = {
                  rel: 'preload',
                  as: 'style',
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Vt.set(e, l),
                u || dy(a, e, l, o.state))),
            t && n === null)
          )
            throw Error(c(528, ''))
          return o
        }
        if (t && n !== null) throw Error(c(529, ''))
        return null
      case 'script':
        return (
          (t = l.async),
          (l = l.src),
          typeof l == 'string' && t && typeof t != 'function' && typeof t != 'symbol'
            ? ((t = ca(l)),
              (l = _n(a).hoistableScripts),
              (n = l.get(t)),
              n || ((n = { type: 'script', instance: null, count: 0, state: null }), l.set(t, n)),
              n)
            : { type: 'void', instance: null, count: 0, state: null }
        )
      default:
        throw Error(c(444, e))
    }
  }
  function ia(e) {
    return 'href="' + Ut(e) + '"'
  }
  function uu(e) {
    return 'link[rel="stylesheet"][' + e + ']'
  }
  function Dm(e) {
    return b({}, e, { 'data-precedence': e.precedence, precedence: null })
  }
  function dy(e, t, l, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']')
      ? (n.loading = 1)
      : ((t = e.createElement('link')),
        (n.preload = t),
        t.addEventListener('load', function () {
          return (n.loading |= 1)
        }),
        t.addEventListener('error', function () {
          return (n.loading |= 2)
        }),
        rt(t, 'link', l),
        tt(t),
        e.head.appendChild(t))
  }
  function ca(e) {
    return '[src="' + Ut(e) + '"]'
  }
  function iu(e) {
    return 'script[async]' + e
  }
  function Mm(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var n = e.querySelector('style[data-href~="' + Ut(l.href) + '"]')
          if (n) return ((t.instance = n), tt(n), n)
          var a = b({}, l, {
            'data-href': l.href,
            'data-precedence': l.precedence,
            href: null,
            precedence: null,
          })
          return (
            (n = (e.ownerDocument || e).createElement('style')),
            tt(n),
            rt(n, 'style', a),
            Ai(n, l.precedence, e),
            (t.instance = n)
          )
        case 'stylesheet':
          a = ia(l.href)
          var u = e.querySelector(uu(a))
          if (u) return ((t.state.loading |= 4), (t.instance = u), tt(u), u)
          ;((n = Dm(l)),
            (a = Vt.get(a)) && eo(n, a),
            (u = (e.ownerDocument || e).createElement('link')),
            tt(u))
          var o = u
          return (
            (o._p = new Promise(function (d, p) {
              ;((o.onload = d), (o.onerror = p))
            })),
            rt(u, 'link', n),
            (t.state.loading |= 4),
            Ai(u, l.precedence, e),
            (t.instance = u)
          )
        case 'script':
          return (
            (u = ca(l.src)),
            (a = e.querySelector(iu(u)))
              ? ((t.instance = a), tt(a), a)
              : ((n = l),
                (a = Vt.get(u)) && ((n = b({}, l)), to(n, a)),
                (e = e.ownerDocument || e),
                (a = e.createElement('script')),
                tt(a),
                rt(a, 'link', n),
                e.head.appendChild(a),
                (t.instance = a))
          )
        case 'void':
          return null
        default:
          throw Error(c(443, t.type))
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((n = t.instance), (t.state.loading |= 4), Ai(n, l.precedence, e))
    return t.instance
  }
  function Ai(e, t, l) {
    for (
      var n = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        a = n.length ? n[n.length - 1] : null,
        u = a,
        o = 0;
      o < n.length;
      o++
    ) {
      var d = n[o]
      if (d.dataset.precedence === t) u = d
      else if (u !== a) break
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild))
  }
  function eo(e, t) {
    ;(e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title))
  }
  function to(e, t) {
    ;(e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity))
  }
  var Ni = null
  function jm(e, t, l) {
    if (Ni === null) {
      var n = new Map(),
        a = (Ni = new Map())
      a.set(l, n)
    } else ((a = Ni), (n = a.get(l)), n || ((n = new Map()), a.set(l, n)))
    if (n.has(e)) return n
    for (n.set(e, null), l = l.getElementsByTagName(e), a = 0; a < l.length; a++) {
      var u = l[a]
      if (
        !(u[Ea] || u[at] || (e === 'link' && u.getAttribute('rel') === 'stylesheet')) &&
        u.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var o = u.getAttribute(t) || ''
        o = e + o
        var d = n.get(o)
        d ? d.push(u) : n.set(o, [u])
      }
    }
    return n
  }
  function Um(e, t, l) {
    ;((e = e.ownerDocument || e),
      e.head.insertBefore(l, t === 'title' ? e.querySelector('head > title') : null))
  }
  function my(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1
    switch (e) {
      case 'meta':
      case 'title':
        return !0
      case 'style':
        if (typeof t.precedence != 'string' || typeof t.href != 'string' || t.href === '') break
        return !0
      case 'link':
        if (
          typeof t.rel != 'string' ||
          typeof t.href != 'string' ||
          t.href === '' ||
          t.onLoad ||
          t.onError
        )
          break
        switch (t.rel) {
          case 'stylesheet':
            return ((e = t.disabled), typeof t.precedence == 'string' && e == null)
          default:
            return !0
        }
      case 'script':
        if (
          t.async &&
          typeof t.async != 'function' &&
          typeof t.async != 'symbol' &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == 'string'
        )
          return !0
    }
    return !1
  }
  function wm(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0)
  }
  function hy(e, t, l, n) {
    if (
      l.type === 'stylesheet' &&
      (typeof n.media != 'string' || matchMedia(n.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var a = ia(n.href),
          u = t.querySelector(uu(a))
        if (u) {
          ;((t = u._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (e.count++, (e = _i.bind(e)), t.then(e, e)),
            (l.state.loading |= 4),
            (l.instance = u),
            tt(u))
          return
        }
        ;((u = t.ownerDocument || t),
          (n = Dm(n)),
          (a = Vt.get(a)) && eo(n, a),
          (u = u.createElement('link')),
          tt(u))
        var o = u
        ;((o._p = new Promise(function (d, p) {
          ;((o.onload = d), (o.onerror = p))
        })),
          rt(u, 'link', n),
          (l.instance = u))
      }
      ;(e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(l, t),
        (t = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (e.count++,
          (l = _i.bind(e)),
          t.addEventListener('load', l),
          t.addEventListener('error', l)))
    }
  }
  var lo = 0
  function vy(e, t) {
    return (
      e.stylesheets && e.count === 0 && Oi(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (l) {
            var n = setTimeout(function () {
              if ((e.stylesheets && Oi(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend
                ;((e.unsuspend = null), u())
              }
            }, 6e4 + t)
            0 < e.imgBytes && lo === 0 && (lo = 62500 * $g())
            var a = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 && (e.stylesheets && Oi(e, e.stylesheets), e.unsuspend))
                ) {
                  var u = e.unsuspend
                  ;((e.unsuspend = null), u())
                }
              },
              (e.imgBytes > lo ? 50 : 800) + t
            )
            return (
              (e.unsuspend = l),
              function () {
                ;((e.unsuspend = null), clearTimeout(n), clearTimeout(a))
              }
            )
          }
        : null
    )
  }
  function _i() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) Oi(this, this.stylesheets)
      else if (this.unsuspend) {
        var e = this.unsuspend
        ;((this.unsuspend = null), e())
      }
    }
  }
  var Ci = null
  function Oi(e, t) {
    ;((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (Ci = new Map()), t.forEach(gy, e), (Ci = null), _i.call(e)))
  }
  function gy(e, t) {
    if (!(t.state.loading & 4)) {
      var l = Ci.get(e)
      if (l) var n = l.get(null)
      else {
        ;((l = new Map()), Ci.set(e, l))
        for (
          var a = e.querySelectorAll('link[data-precedence],style[data-precedence]'), u = 0;
          u < a.length;
          u++
        ) {
          var o = a[u]
          ;(o.nodeName === 'LINK' || o.getAttribute('media') !== 'not all') &&
            (l.set(o.dataset.precedence, o), (n = o))
        }
        n && l.set(null, n)
      }
      ;((a = t.instance),
        (o = a.getAttribute('data-precedence')),
        (u = l.get(o) || n),
        u === n && l.set(null, a),
        l.set(o, a),
        this.count++,
        (n = _i.bind(this)),
        a.addEventListener('load', n),
        a.addEventListener('error', n),
        u
          ? u.parentNode.insertBefore(a, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(a, e.firstChild)),
        (t.state.loading |= 4))
    }
  }
  var cu = {
    $$typeof: Z,
    Provider: null,
    Consumer: null,
    _currentValue: W,
    _currentValue2: W,
    _threadCount: 0,
  }
  function yy(e, t, l, n, a, u, o, d, p) {
    ;((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Fi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Fi(0)),
      (this.hiddenUpdates = Fi(null)),
      (this.identifierPrefix = n),
      (this.onUncaughtError = a),
      (this.onCaughtError = u),
      (this.onRecoverableError = o),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = p),
      (this.incompleteTransitions = new Map()))
  }
  function Hm(e, t, l, n, a, u, o, d, p, _, M, L) {
    return (
      (e = new yy(e, t, l, o, p, _, M, L, d)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = At(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = wc()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: n, isDehydrated: l, cache: t }),
      qc(u),
      e
    )
  }
  function Lm(e) {
    return e ? ((e = Bn), e) : Bn
  }
  function Bm(e, t, l, n, a, u) {
    ;((a = Lm(a)),
      n.context === null ? (n.context = a) : (n.pendingContext = a),
      (n = wl(t)),
      (n.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (n.callback = u),
      (l = Hl(e, n, t)),
      l !== null && (St(l, e, t), qa(l, e, t)))
  }
  function qm(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane
      e.retryLane = l !== 0 && l < t ? l : t
    }
  }
  function no(e, t) {
    ;(qm(e, t), (e = e.alternate) && qm(e, t))
  }
  function Ym(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = rn(e, 67108864)
      ;(t !== null && St(t, e, 67108864), no(e, 67108864))
    }
  }
  function Gm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Dt()
      t = Ii(t)
      var l = rn(e, t)
      ;(l !== null && St(l, e, t), no(e, t))
    }
  }
  var Di = !0
  function py(e, t, l, n) {
    var a = D.T
    D.T = null
    var u = X.p
    try {
      ;((X.p = 2), ao(e, t, l, n))
    } finally {
      ;((X.p = u), (D.T = a))
    }
  }
  function by(e, t, l, n) {
    var a = D.T
    D.T = null
    var u = X.p
    try {
      ;((X.p = 8), ao(e, t, l, n))
    } finally {
      ;((X.p = u), (D.T = a))
    }
  }
  function ao(e, t, l, n) {
    if (Di) {
      var a = uo(n)
      if (a === null) (Qr(e, t, n, Mi, l), Xm(e, n))
      else if (xy(a, e, t, l, n)) n.stopPropagation()
      else if ((Xm(e, n), t & 4 && -1 < Sy.indexOf(e))) {
        for (; a !== null; ) {
          var u = Nn(a)
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var o = ln(u.pendingLanes)
                  if (o !== 0) {
                    var d = u
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; o; ) {
                      var p = 1 << (31 - Rt(o))
                      ;((d.entanglements[1] |= p), (o &= ~p))
                    }
                    ;(Pt(u), (xe & 6) === 0 && ((hi = Pe() + 500), tu(0)))
                  }
                }
                break
              case 31:
              case 13:
                ;((d = rn(u, 2)), d !== null && St(d, u, 2), gi(), no(u, 2))
            }
          if (((u = uo(n)), u === null && Qr(e, t, n, Mi, l), u === a)) break
          a = u
        }
        a !== null && n.stopPropagation()
      } else Qr(e, t, n, null, l)
    }
  }
  function uo(e) {
    return ((e = cc(e)), io(e))
  }
  var Mi = null
  function io(e) {
    if (((Mi = null), (e = An(e)), e !== null)) {
      var t = m(e)
      if (t === null) e = null
      else {
        var l = t.tag
        if (l === 13) {
          if (((e = h(t)), e !== null)) return e
          e = null
        } else if (l === 31) {
          if (((e = y(t)), e !== null)) return e
          e = null
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null
          e = null
        } else t !== e && (e = null)
      }
    }
    return ((Mi = e), null)
  }
  function Vm(e) {
    switch (e) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8
      case 'message':
        switch (tn()) {
          case ga:
            return 2
          case ya:
            return 8
          case nt:
          case Xt:
            return 32
          case Rn:
            return 268435456
          default:
            return 32
        }
      default:
        return 32
    }
  }
  var co = !1,
    Jl = null,
    kl = null,
    $l = null,
    ru = new Map(),
    ou = new Map(),
    Wl = [],
    Sy =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      )
  function Xm(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Jl = null
        break
      case 'dragenter':
      case 'dragleave':
        kl = null
        break
      case 'mouseover':
      case 'mouseout':
        $l = null
        break
      case 'pointerover':
      case 'pointerout':
        ru.delete(t.pointerId)
        break
      case 'gotpointercapture':
      case 'lostpointercapture':
        ou.delete(t.pointerId)
    }
  }
  function su(e, t, l, n, a, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: n,
          nativeEvent: u,
          targetContainers: [a],
        }),
        t !== null && ((t = Nn(t)), t !== null && Ym(t)),
        e)
      : ((e.eventSystemFlags |= n),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e)
  }
  function xy(e, t, l, n, a) {
    switch (t) {
      case 'focusin':
        return ((Jl = su(Jl, e, t, l, n, a)), !0)
      case 'dragenter':
        return ((kl = su(kl, e, t, l, n, a)), !0)
      case 'mouseover':
        return (($l = su($l, e, t, l, n, a)), !0)
      case 'pointerover':
        var u = a.pointerId
        return (ru.set(u, su(ru.get(u) || null, e, t, l, n, a)), !0)
      case 'gotpointercapture':
        return ((u = a.pointerId), ou.set(u, su(ou.get(u) || null, e, t, l, n, a)), !0)
    }
    return !1
  }
  function Qm(e) {
    var t = An(e.target)
    if (t !== null) {
      var l = m(t)
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = h(l)), t !== null)) {
            ;((e.blockedOn = t),
              ns(e.priority, function () {
                Gm(l)
              }))
            return
          }
        } else if (t === 31) {
          if (((t = y(l)), t !== null)) {
            ;((e.blockedOn = t),
              ns(e.priority, function () {
                Gm(l)
              }))
            return
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null
          return
        }
      }
    }
    e.blockedOn = null
  }
  function ji(e) {
    if (e.blockedOn !== null) return !1
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = uo(e.nativeEvent)
      if (l === null) {
        l = e.nativeEvent
        var n = new l.constructor(l.type, l)
        ;((ic = n), l.target.dispatchEvent(n), (ic = null))
      } else return ((t = Nn(l)), t !== null && Ym(t), (e.blockedOn = l), !1)
      t.shift()
    }
    return !0
  }
  function Zm(e, t, l) {
    ji(e) && l.delete(t)
  }
  function Ey() {
    ;((co = !1),
      Jl !== null && ji(Jl) && (Jl = null),
      kl !== null && ji(kl) && (kl = null),
      $l !== null && ji($l) && ($l = null),
      ru.forEach(Zm),
      ou.forEach(Zm))
  }
  function Ui(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      co || ((co = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, Ey)))
  }
  var wi = null
  function Km(e) {
    wi !== e &&
      ((wi = e),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        wi === e && (wi = null)
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            n = e[t + 1],
            a = e[t + 2]
          if (typeof n != 'function') {
            if (io(n || l) === null) continue
            break
          }
          var u = Nn(l)
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            ur(u, { pending: !0, data: a, method: l.method, action: n }, n, a))
        }
      }))
  }
  function ra(e) {
    function t(p) {
      return Ui(p, e)
    }
    ;(Jl !== null && Ui(Jl, e),
      kl !== null && Ui(kl, e),
      $l !== null && Ui($l, e),
      ru.forEach(t),
      ou.forEach(t))
    for (var l = 0; l < Wl.length; l++) {
      var n = Wl[l]
      n.blockedOn === e && (n.blockedOn = null)
    }
    for (; 0 < Wl.length && ((l = Wl[0]), l.blockedOn === null); )
      (Qm(l), l.blockedOn === null && Wl.shift())
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (n = 0; n < l.length; n += 3) {
        var a = l[n],
          u = l[n + 1],
          o = a[ht] || null
        if (typeof u == 'function') o || Km(l)
        else if (o) {
          var d = null
          if (u && u.hasAttribute('formAction')) {
            if (((a = u), (o = u[ht] || null))) d = o.formAction
            else if (io(a) !== null) continue
          } else d = o.action
          ;(typeof d == 'function' ? (l[n + 1] = d) : (l.splice(n, 3), (n -= 3)), Km(l))
        }
      }
  }
  function Jm() {
    function e(u) {
      u.canIntercept &&
        u.info === 'react-transition' &&
        u.intercept({
          handler: function () {
            return new Promise(function (o) {
              return (a = o)
            })
          },
          focusReset: 'manual',
          scroll: 'manual',
        })
    }
    function t() {
      ;(a !== null && (a(), (a = null)), n || setTimeout(l, 20))
    }
    function l() {
      if (!n && !navigation.transition) {
        var u = navigation.currentEntry
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: 'react-transition',
            history: 'replace',
          })
      }
    }
    if (typeof navigation == 'object') {
      var n = !1,
        a = null
      return (
        navigation.addEventListener('navigate', e),
        navigation.addEventListener('navigatesuccess', t),
        navigation.addEventListener('navigateerror', t),
        setTimeout(l, 100),
        function () {
          ;((n = !0),
            navigation.removeEventListener('navigate', e),
            navigation.removeEventListener('navigatesuccess', t),
            navigation.removeEventListener('navigateerror', t),
            a !== null && (a(), (a = null)))
        }
      )
    }
  }
  function ro(e) {
    this._internalRoot = e
  }
  ;((Hi.prototype.render = ro.prototype.render =
    function (e) {
      var t = this._internalRoot
      if (t === null) throw Error(c(409))
      var l = t.current,
        n = Dt()
      Bm(l, n, e, t, null, null)
    }),
    (Hi.prototype.unmount = ro.prototype.unmount =
      function () {
        var e = this._internalRoot
        if (e !== null) {
          this._internalRoot = null
          var t = e.containerInfo
          ;(Bm(e.current, 2, null, e, null, null), gi(), (t[zn] = null))
        }
      }))
  function Hi(e) {
    this._internalRoot = e
  }
  Hi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ls()
      e = { blockedOn: null, target: e, priority: t }
      for (var l = 0; l < Wl.length && t !== 0 && t < Wl[l].priority; l++);
      ;(Wl.splice(l, 0, e), l === 0 && Qm(e))
    }
  }
  var km = r.version
  if (km !== '19.2.3') throw Error(c(527, km, '19.2.3'))
  X.findDOMNode = function (e) {
    var t = e._reactInternals
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(c(188))
        : ((e = Object.keys(e).join(',')), Error(c(268, e)))
    return ((e = v(t)), (e = e !== null ? T(e) : null), (e = e === null ? null : e.stateNode), e)
  }
  var Ty = {
    bundleType: 0,
    version: '19.2.3',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: D,
    reconcilerVersion: '19.2.3',
  }
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Li = __REACT_DEVTOOLS_GLOBAL_HOOK__
    if (!Li.isDisabled && Li.supportsFiber)
      try {
        ;((ba = Li.inject(Ty)), (Tt = Li))
      } catch {}
  }
  return (
    (du.createRoot = function (e, t) {
      if (!f(e)) throw Error(c(299))
      var l = !1,
        n = '',
        a = td,
        u = ld,
        o = nd
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (a = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = Hm(e, 1, !1, null, null, l, n, null, a, u, o, Jm)),
        (e[zn] = t.current),
        Xr(e),
        new ro(t)
      )
    }),
    (du.hydrateRoot = function (e, t, l) {
      if (!f(e)) throw Error(c(299))
      var n = !1,
        a = '',
        u = td,
        o = ld,
        d = nd,
        p = null
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (n = !0),
          l.identifierPrefix !== void 0 && (a = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (o = l.onCaughtError),
          l.onRecoverableError !== void 0 && (d = l.onRecoverableError),
          l.formState !== void 0 && (p = l.formState)),
        (t = Hm(e, 1, !0, t, l ?? null, n, a, p, u, o, d, Jm)),
        (t.context = Lm(null)),
        (l = t.current),
        (n = Dt()),
        (n = Ii(n)),
        (a = wl(n)),
        (a.callback = null),
        Hl(l, a, n),
        (l = n),
        (t.current.lanes = l),
        xa(t, l),
        Pt(t),
        (e[zn] = t.current),
        Xr(e),
        new Hi(t)
      )
    }),
    (du.version = '19.2.3'),
    du
  )
}
var ah
function jy() {
  if (ah) return fo.exports
  ah = 1
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
      } catch (r) {
        console.error(r)
      }
  }
  return (i(), (fo.exports = My()), fo.exports)
}
var Uy = jy()
const wy = Ah(Uy)
/**
 * react-router v7.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var uh = 'popstate'
function ih(i) {
  return (
    typeof i == 'object' &&
    i != null &&
    'pathname' in i &&
    'search' in i &&
    'hash' in i &&
    'state' in i &&
    'key' in i
  )
}
function Hy(i = {}) {
  function r(c, f) {
    var v
    let m = (v = f.state) == null ? void 0 : v.masked,
      { pathname: h, search: y, hash: g } = m || c.location
    return _o(
      '',
      { pathname: h, search: y, hash: g },
      (f.state && f.state.usr) || null,
      (f.state && f.state.key) || 'default',
      m
        ? { pathname: c.location.pathname, search: c.location.search, hash: c.location.hash }
        : void 0
    )
  }
  function s(c, f) {
    return typeof f == 'string' ? f : gu(f)
  }
  return By(r, s, null, i)
}
function Be(i, r) {
  if (i === !1 || i === null || typeof i > 'u') throw new Error(r)
}
function Jt(i, r) {
  if (!i) {
    typeof console < 'u' && console.warn(r)
    try {
      throw new Error(r)
    } catch {}
  }
}
function Ly() {
  return Math.random().toString(36).substring(2, 10)
}
function ch(i, r) {
  return {
    usr: i.state,
    key: i.key,
    idx: r,
    masked: i.unstable_mask ? { pathname: i.pathname, search: i.search, hash: i.hash } : void 0,
  }
}
function _o(i, r, s = null, c, f) {
  return {
    pathname: typeof i == 'string' ? i : i.pathname,
    search: '',
    hash: '',
    ...(typeof r == 'string' ? fa(r) : r),
    state: s,
    key: (r && r.key) || c || Ly(),
    unstable_mask: f,
  }
}
function gu({ pathname: i = '/', search: r = '', hash: s = '' }) {
  return (
    r && r !== '?' && (i += r.charAt(0) === '?' ? r : '?' + r),
    s && s !== '#' && (i += s.charAt(0) === '#' ? s : '#' + s),
    i
  )
}
function fa(i) {
  let r = {}
  if (i) {
    let s = i.indexOf('#')
    s >= 0 && ((r.hash = i.substring(s)), (i = i.substring(0, s)))
    let c = i.indexOf('?')
    ;(c >= 0 && ((r.search = i.substring(c)), (i = i.substring(0, c))), i && (r.pathname = i))
  }
  return r
}
function By(i, r, s, c = {}) {
  let { window: f = document.defaultView, v5Compat: m = !1 } = c,
    h = f.history,
    y = 'POP',
    g = null,
    v = T()
  v == null && ((v = 0), h.replaceState({ ...h.state, idx: v }, ''))
  function T() {
    return (h.state || { idx: null }).idx
  }
  function b() {
    y = 'POP'
    let B = T(),
      j = B == null ? null : B - v
    ;((v = B), g && g({ action: y, location: q.location, delta: j }))
  }
  function A(B, j) {
    y = 'PUSH'
    let U = ih(B) ? B : _o(q.location, B, j)
    v = T() + 1
    let Z = ch(U, v),
      ee = q.createHref(U.unstable_mask || U)
    try {
      h.pushState(Z, '', ee)
    } catch ($) {
      if ($ instanceof DOMException && $.name === 'DataCloneError') throw $
      f.location.assign(ee)
    }
    m && g && g({ action: y, location: q.location, delta: 1 })
  }
  function Y(B, j) {
    y = 'REPLACE'
    let U = ih(B) ? B : _o(q.location, B, j)
    v = T()
    let Z = ch(U, v),
      ee = q.createHref(U.unstable_mask || U)
    ;(h.replaceState(Z, '', ee), m && g && g({ action: y, location: q.location, delta: 0 }))
  }
  function G(B) {
    return qy(B)
  }
  let q = {
    get action() {
      return y
    },
    get location() {
      return i(f, h)
    },
    listen(B) {
      if (g) throw new Error('A history only accepts one active listener')
      return (
        f.addEventListener(uh, b),
        (g = B),
        () => {
          ;(f.removeEventListener(uh, b), (g = null))
        }
      )
    },
    createHref(B) {
      return r(f, B)
    },
    createURL: G,
    encodeLocation(B) {
      let j = G(B)
      return { pathname: j.pathname, search: j.search, hash: j.hash }
    },
    push: A,
    replace: Y,
    go(B) {
      return h.go(B)
    },
  }
  return q
}
function qy(i, r = !1) {
  let s = 'http://localhost'
  ;(typeof window < 'u' &&
    (s = window.location.origin !== 'null' ? window.location.origin : window.location.href),
    Be(s, 'No window.location.(origin|href) available to create URL'))
  let c = typeof i == 'string' ? i : gu(i)
  return ((c = c.replace(/ $/, '%20')), !r && c.startsWith('//') && (c = s + c), new URL(c, s))
}
function Nh(i, r, s = '/') {
  return Yy(i, r, s, !1)
}
function Yy(i, r, s, c) {
  let f = typeof r == 'string' ? fa(r) : r,
    m = Rl(f.pathname || '/', s)
  if (m == null) return null
  let h = _h(i)
  Gy(h)
  let y = null
  for (let g = 0; y == null && g < h.length; ++g) {
    let v = Iy(m)
    y = Wy(h[g], v, c)
  }
  return y
}
function _h(i, r = [], s = [], c = '', f = !1) {
  let m = (h, y, g = f, v) => {
    let T = {
      relativePath: v === void 0 ? h.path || '' : v,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: y,
      route: h,
    }
    if (T.relativePath.startsWith('/')) {
      if (!T.relativePath.startsWith(c) && g) return
      ;(Be(
        T.relativePath.startsWith(c),
        `Absolute route path "${T.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (T.relativePath = T.relativePath.slice(c.length)))
    }
    let b = tl([c, T.relativePath]),
      A = s.concat(T)
    ;(h.children &&
      h.children.length > 0 &&
      (Be(
        h.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${b}".`
      ),
      _h(h.children, r, A, b, g)),
      !(h.path == null && !h.index) && r.push({ path: b, score: ky(b, h.index), routesMeta: A }))
  }
  return (
    i.forEach((h, y) => {
      var g
      if (h.path === '' || !((g = h.path) != null && g.includes('?'))) m(h, y)
      else for (let v of Ch(h.path)) m(h, y, !0, v)
    }),
    r
  )
}
function Ch(i) {
  let r = i.split('/')
  if (r.length === 0) return []
  let [s, ...c] = r,
    f = s.endsWith('?'),
    m = s.replace(/\?$/, '')
  if (c.length === 0) return f ? [m, ''] : [m]
  let h = Ch(c.join('/')),
    y = []
  return (
    y.push(...h.map((g) => (g === '' ? m : [m, g].join('/')))),
    f && y.push(...h),
    y.map((g) => (i.startsWith('/') && g === '' ? '/' : g))
  )
}
function Gy(i) {
  i.sort((r, s) =>
    r.score !== s.score
      ? s.score - r.score
      : $y(
          r.routesMeta.map((c) => c.childrenIndex),
          s.routesMeta.map((c) => c.childrenIndex)
        )
  )
}
var Vy = /^:[\w-]+$/,
  Xy = 3,
  Qy = 2,
  Zy = 1,
  Ky = 10,
  Jy = -2,
  rh = (i) => i === '*'
function ky(i, r) {
  let s = i.split('/'),
    c = s.length
  return (
    s.some(rh) && (c += Jy),
    r && (c += Qy),
    s.filter((f) => !rh(f)).reduce((f, m) => f + (Vy.test(m) ? Xy : m === '' ? Zy : Ky), c)
  )
}
function $y(i, r) {
  return i.length === r.length && i.slice(0, -1).every((c, f) => c === r[f])
    ? i[i.length - 1] - r[r.length - 1]
    : 0
}
function Wy(i, r, s = !1) {
  let { routesMeta: c } = i,
    f = {},
    m = '/',
    h = []
  for (let y = 0; y < c.length; ++y) {
    let g = c[y],
      v = y === c.length - 1,
      T = m === '/' ? r : r.slice(m.length) || '/',
      b = Qi({ path: g.relativePath, caseSensitive: g.caseSensitive, end: v }, T),
      A = g.route
    if (
      (!b &&
        v &&
        s &&
        !c[c.length - 1].route.index &&
        (b = Qi({ path: g.relativePath, caseSensitive: g.caseSensitive, end: !1 }, T)),
      !b)
    )
      return null
    ;(Object.assign(f, b.params),
      h.push({
        params: f,
        pathname: tl([m, b.pathname]),
        pathnameBase: lp(tl([m, b.pathnameBase])),
        route: A,
      }),
      b.pathnameBase !== '/' && (m = tl([m, b.pathnameBase])))
  }
  return h
}
function Qi(i, r) {
  typeof i == 'string' && (i = { path: i, caseSensitive: !1, end: !0 })
  let [s, c] = Fy(i.path, i.caseSensitive, i.end),
    f = r.match(s)
  if (!f) return null
  let m = f[0],
    h = m.replace(/(.)\/+$/, '$1'),
    y = f.slice(1)
  return {
    params: c.reduce((v, { paramName: T, isOptional: b }, A) => {
      if (T === '*') {
        let G = y[A] || ''
        h = m.slice(0, m.length - G.length).replace(/(.)\/+$/, '$1')
      }
      const Y = y[A]
      return (b && !Y ? (v[T] = void 0) : (v[T] = (Y || '').replace(/%2F/g, '/')), v)
    }, {}),
    pathname: m,
    pathnameBase: h,
    pattern: i,
  }
}
function Fy(i, r = !1, s = !0) {
  Jt(
    i === '*' || !i.endsWith('*') || i.endsWith('/*'),
    `Route path "${i}" will be treated as if it were "${i.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/, '/*')}".`
  )
  let c = [],
    f =
      '^' +
      i
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(/\/:([\w-]+)(\?)?/g, (h, y, g, v, T) => {
          if ((c.push({ paramName: y, isOptional: g != null }), g)) {
            let b = T.charAt(v + h.length)
            return b && b !== '/' ? '/([^\\/]*)' : '(?:/([^\\/]*))?'
          }
          return '/([^\\/]+)'
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2')
  return (
    i.endsWith('*')
      ? (c.push({ paramName: '*' }), (f += i === '*' || i === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : s
        ? (f += '\\/*$')
        : i !== '' && i !== '/' && (f += '(?:(?=\\/|$))'),
    [new RegExp(f, r ? void 0 : 'i'), c]
  )
}
function Iy(i) {
  try {
    return i
      .split('/')
      .map((r) => decodeURIComponent(r).replace(/\//g, '%2F'))
      .join('/')
  } catch (r) {
    return (
      Jt(
        !1,
        `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
      ),
      i
    )
  }
}
function Rl(i, r) {
  if (r === '/') return i
  if (!i.toLowerCase().startsWith(r.toLowerCase())) return null
  let s = r.endsWith('/') ? r.length - 1 : r.length,
    c = i.charAt(s)
  return c && c !== '/' ? null : i.slice(s) || '/'
}
var Py = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
function ep(i, r = '/') {
  let { pathname: s, search: c = '', hash: f = '' } = typeof i == 'string' ? fa(i) : i,
    m
  return (
    s
      ? ((s = s.replace(/\/\/+/g, '/')),
        s.startsWith('/') ? (m = oh(s.substring(1), '/')) : (m = oh(s, r)))
      : (m = r),
    { pathname: m, search: np(c), hash: ap(f) }
  )
}
function oh(i, r) {
  let s = r.replace(/\/+$/, '').split('/')
  return (
    i.split('/').forEach((f) => {
      f === '..' ? s.length > 1 && s.pop() : f !== '.' && s.push(f)
    }),
    s.length > 1 ? s.join('/') : '/'
  )
}
function go(i, r, s, c) {
  return `Cannot include a '${i}' character in a manually specified \`to.${r}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function tp(i) {
  return i.filter((r, s) => s === 0 || (r.route.path && r.route.path.length > 0))
}
function Yo(i) {
  let r = tp(i)
  return r.map((s, c) => (c === r.length - 1 ? s.pathname : s.pathnameBase))
}
function Ji(i, r, s, c = !1) {
  let f
  typeof i == 'string'
    ? (f = fa(i))
    : ((f = { ...i }),
      Be(!f.pathname || !f.pathname.includes('?'), go('?', 'pathname', 'search', f)),
      Be(!f.pathname || !f.pathname.includes('#'), go('#', 'pathname', 'hash', f)),
      Be(!f.search || !f.search.includes('#'), go('#', 'search', 'hash', f)))
  let m = i === '' || f.pathname === '',
    h = m ? '/' : f.pathname,
    y
  if (h == null) y = s
  else {
    let b = r.length - 1
    if (!c && h.startsWith('..')) {
      let A = h.split('/')
      for (; A[0] === '..'; ) (A.shift(), (b -= 1))
      f.pathname = A.join('/')
    }
    y = b >= 0 ? r[b] : '/'
  }
  let g = ep(f, y),
    v = h && h !== '/' && h.endsWith('/'),
    T = (m || h === '.') && s.endsWith('/')
  return (!g.pathname.endsWith('/') && (v || T) && (g.pathname += '/'), g)
}
var tl = (i) => i.join('/').replace(/\/\/+/g, '/'),
  lp = (i) => i.replace(/\/+$/, '').replace(/^\/*/, '/'),
  np = (i) => (!i || i === '?' ? '' : i.startsWith('?') ? i : '?' + i),
  ap = (i) => (!i || i === '#' ? '' : i.startsWith('#') ? i : '#' + i),
  up = class {
    constructor(i, r, s, c = !1) {
      ;((this.status = i),
        (this.statusText = r || ''),
        (this.internal = c),
        s instanceof Error ? ((this.data = s.toString()), (this.error = s)) : (this.data = s))
    }
  }
function ip(i) {
  return (
    i != null &&
    typeof i.status == 'number' &&
    typeof i.statusText == 'string' &&
    typeof i.internal == 'boolean' &&
    'data' in i
  )
}
function cp(i) {
  return (
    i
      .map((r) => r.route.path)
      .filter(Boolean)
      .join('/')
      .replace(/\/\/*/g, '/') || '/'
  )
}
var Oh =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u'
function Dh(i, r) {
  let s = i
  if (typeof s != 'string' || !Py.test(s)) return { absoluteURL: void 0, isExternal: !1, to: s }
  let c = s,
    f = !1
  if (Oh)
    try {
      let m = new URL(window.location.href),
        h = s.startsWith('//') ? new URL(m.protocol + s) : new URL(s),
        y = Rl(h.pathname, r)
      h.origin === m.origin && y != null ? (s = y + h.search + h.hash) : (f = !0)
    } catch {
      Jt(
        !1,
        `<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      )
    }
  return { absoluteURL: c, isExternal: f, to: s }
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0')
var Mh = ['POST', 'PUT', 'PATCH', 'DELETE']
new Set(Mh)
var rp = ['GET', ...Mh]
new Set(rp)
var da = R.createContext(null)
da.displayName = 'DataRouter'
var ki = R.createContext(null)
ki.displayName = 'DataRouterState'
var op = R.createContext(!1),
  jh = R.createContext({ isTransitioning: !1 })
jh.displayName = 'ViewTransition'
var sp = R.createContext(new Map())
sp.displayName = 'Fetchers'
var fp = R.createContext(null)
fp.displayName = 'Await'
var Mt = R.createContext(null)
Mt.displayName = 'Navigation'
var yu = R.createContext(null)
yu.displayName = 'Location'
var kt = R.createContext({ outlet: null, matches: [], isDataRoute: !1 })
kt.displayName = 'Route'
var Go = R.createContext(null)
Go.displayName = 'RouteError'
var Uh = 'REACT_ROUTER_ERROR',
  dp = 'REDIRECT',
  mp = 'ROUTE_ERROR_RESPONSE'
function hp(i) {
  if (i.startsWith(`${Uh}:${dp}:{`))
    try {
      let r = JSON.parse(i.slice(28))
      if (
        typeof r == 'object' &&
        r &&
        typeof r.status == 'number' &&
        typeof r.statusText == 'string' &&
        typeof r.location == 'string' &&
        typeof r.reloadDocument == 'boolean' &&
        typeof r.replace == 'boolean'
      )
        return r
    } catch {}
}
function vp(i) {
  if (i.startsWith(`${Uh}:${mp}:{`))
    try {
      let r = JSON.parse(i.slice(40))
      if (
        typeof r == 'object' &&
        r &&
        typeof r.status == 'number' &&
        typeof r.statusText == 'string'
      )
        return new up(r.status, r.statusText, r.data)
    } catch {}
}
function gp(i, { relative: r } = {}) {
  Be(ma(), 'useHref() may be used only in the context of a <Router> component.')
  let { basename: s, navigator: c } = R.useContext(Mt),
    { hash: f, pathname: m, search: h } = pu(i, { relative: r }),
    y = m
  return (
    s !== '/' && (y = m === '/' ? s : tl([s, m])),
    c.createHref({ pathname: y, search: h, hash: f })
  )
}
function ma() {
  return R.useContext(yu) != null
}
function zl() {
  return (
    Be(ma(), 'useLocation() may be used only in the context of a <Router> component.'),
    R.useContext(yu).location
  )
}
var wh =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.'
function Hh(i) {
  R.useContext(Mt).static || R.useLayoutEffect(i)
}
function Vo() {
  let { isDataRoute: i } = R.useContext(kt)
  return i ? Op() : yp()
}
function yp() {
  Be(ma(), 'useNavigate() may be used only in the context of a <Router> component.')
  let i = R.useContext(da),
    { basename: r, navigator: s } = R.useContext(Mt),
    { matches: c } = R.useContext(kt),
    { pathname: f } = zl(),
    m = JSON.stringify(Yo(c)),
    h = R.useRef(!1)
  return (
    Hh(() => {
      h.current = !0
    }),
    R.useCallback(
      (g, v = {}) => {
        if ((Jt(h.current, wh), !h.current)) return
        if (typeof g == 'number') {
          s.go(g)
          return
        }
        let T = Ji(g, JSON.parse(m), f, v.relative === 'path')
        ;(i == null && r !== '/' && (T.pathname = T.pathname === '/' ? r : tl([r, T.pathname])),
          (v.replace ? s.replace : s.push)(T, v.state, v))
      },
      [r, s, m, f, i]
    )
  )
}
R.createContext(null)
function pp() {
  let { matches: i } = R.useContext(kt),
    r = i[i.length - 1]
  return r ? r.params : {}
}
function pu(i, { relative: r } = {}) {
  let { matches: s } = R.useContext(kt),
    { pathname: c } = zl(),
    f = JSON.stringify(Yo(s))
  return R.useMemo(() => Ji(i, JSON.parse(f), c, r === 'path'), [i, f, c, r])
}
function bp(i, r) {
  return Lh(i, r)
}
function Lh(i, r, s) {
  var B
  Be(ma(), 'useRoutes() may be used only in the context of a <Router> component.')
  let { navigator: c } = R.useContext(Mt),
    { matches: f } = R.useContext(kt),
    m = f[f.length - 1],
    h = m ? m.params : {},
    y = m ? m.pathname : '/',
    g = m ? m.pathnameBase : '/',
    v = m && m.route
  {
    let j = (v && v.path) || ''
    qh(
      y,
      !v || j.endsWith('*') || j.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${j}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${j}"> to <Route path="${j === '/' ? '*' : `${j}/*`}">.`
    )
  }
  let T = zl(),
    b
  if (r) {
    let j = typeof r == 'string' ? fa(r) : r
    ;(Be(
      g === '/' || ((B = j.pathname) == null ? void 0 : B.startsWith(g)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${j.pathname}" was given in the \`location\` prop.`
    ),
      (b = j))
  } else b = T
  let A = b.pathname || '/',
    Y = A
  if (g !== '/') {
    let j = g.replace(/^\//, '').split('/')
    Y = '/' + A.replace(/^\//, '').split('/').slice(j.length).join('/')
  }
  let G = Nh(i, { pathname: Y })
  ;(Jt(v || G != null, `No routes matched location "${b.pathname}${b.search}${b.hash}" `),
    Jt(
      G == null ||
        G[G.length - 1].route.element !== void 0 ||
        G[G.length - 1].route.Component !== void 0 ||
        G[G.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ))
  let q = Rp(
    G &&
      G.map((j) =>
        Object.assign({}, j, {
          params: Object.assign({}, h, j.params),
          pathname: tl([
            g,
            c.encodeLocation
              ? c.encodeLocation(j.pathname.replace(/\?/g, '%3F').replace(/#/g, '%23')).pathname
              : j.pathname,
          ]),
          pathnameBase:
            j.pathnameBase === '/'
              ? g
              : tl([
                  g,
                  c.encodeLocation
                    ? c.encodeLocation(j.pathnameBase.replace(/\?/g, '%3F').replace(/#/g, '%23'))
                        .pathname
                    : j.pathnameBase,
                ]),
        })
      ),
    f,
    s
  )
  return r && q
    ? R.createElement(
        yu.Provider,
        {
          value: {
            location: {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
              unstable_mask: void 0,
              ...b,
            },
            navigationType: 'POP',
          },
        },
        q
      )
    : q
}
function Sp() {
  let i = Cp(),
    r = ip(i) ? `${i.status} ${i.statusText}` : i instanceof Error ? i.message : JSON.stringify(i),
    s = i instanceof Error ? i.stack : null,
    c = 'rgba(200,200,200, 0.5)',
    f = { padding: '0.5rem', backgroundColor: c },
    m = { padding: '2px 4px', backgroundColor: c },
    h = null
  return (
    console.error('Error handled by React Router default ErrorBoundary:', i),
    (h = R.createElement(
      R.Fragment,
      null,
      R.createElement('p', null, '💿 Hey developer 👋'),
      R.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        R.createElement('code', { style: m }, 'ErrorBoundary'),
        ' or',
        ' ',
        R.createElement('code', { style: m }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    R.createElement(
      R.Fragment,
      null,
      R.createElement('h2', null, 'Unexpected Application Error!'),
      R.createElement('h3', { style: { fontStyle: 'italic' } }, r),
      s ? R.createElement('pre', { style: f }, s) : null,
      h
    )
  )
}
var xp = R.createElement(Sp, null),
  Bh = class extends R.Component {
    constructor(i) {
      ;(super(i),
        (this.state = { location: i.location, revalidation: i.revalidation, error: i.error }))
    }
    static getDerivedStateFromError(i) {
      return { error: i }
    }
    static getDerivedStateFromProps(i, r) {
      return r.location !== i.location || (r.revalidation !== 'idle' && i.revalidation === 'idle')
        ? { error: i.error, location: i.location, revalidation: i.revalidation }
        : {
            error: i.error !== void 0 ? i.error : r.error,
            location: r.location,
            revalidation: i.revalidation || r.revalidation,
          }
    }
    componentDidCatch(i, r) {
      this.props.onError
        ? this.props.onError(i, r)
        : console.error('React Router caught the following error during render', i)
    }
    render() {
      let i = this.state.error
      if (
        this.context &&
        typeof i == 'object' &&
        i &&
        'digest' in i &&
        typeof i.digest == 'string'
      ) {
        const s = vp(i.digest)
        s && (i = s)
      }
      let r =
        i !== void 0
          ? R.createElement(
              kt.Provider,
              { value: this.props.routeContext },
              R.createElement(Go.Provider, { value: i, children: this.props.component })
            )
          : this.props.children
      return this.context ? R.createElement(Ep, { error: i }, r) : r
    }
  }
Bh.contextType = op
var yo = new WeakMap()
function Ep({ children: i, error: r }) {
  let { basename: s } = R.useContext(Mt)
  if (typeof r == 'object' && r && 'digest' in r && typeof r.digest == 'string') {
    let c = hp(r.digest)
    if (c) {
      let f = yo.get(r)
      if (f) throw f
      let m = Dh(c.location, s)
      if (Oh && !yo.get(r))
        if (m.isExternal || c.reloadDocument) window.location.href = m.absoluteURL || m.to
        else {
          const h = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(m.to, { replace: c.replace })
          )
          throw (yo.set(r, h), h)
        }
      return R.createElement('meta', {
        httpEquiv: 'refresh',
        content: `0;url=${m.absoluteURL || m.to}`,
      })
    }
  }
  return i
}
function Tp({ routeContext: i, match: r, children: s }) {
  let c = R.useContext(da)
  return (
    c &&
      c.static &&
      c.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (c.staticContext._deepestRenderedBoundaryId = r.route.id),
    R.createElement(kt.Provider, { value: i }, s)
  )
}
function Rp(i, r = [], s) {
  let c = s == null ? void 0 : s.state
  if (i == null) {
    if (!c) return null
    if (c.errors) i = c.matches
    else if (r.length === 0 && !c.initialized && c.matches.length > 0) i = c.matches
    else return null
  }
  let f = i,
    m = c == null ? void 0 : c.errors
  if (m != null) {
    let T = f.findIndex((b) => b.route.id && (m == null ? void 0 : m[b.route.id]) !== void 0)
    ;(Be(
      T >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(m).join(',')}`
    ),
      (f = f.slice(0, Math.min(f.length, T + 1))))
  }
  let h = !1,
    y = -1
  if (s && c) {
    h = c.renderFallback
    for (let T = 0; T < f.length; T++) {
      let b = f[T]
      if (((b.route.HydrateFallback || b.route.hydrateFallbackElement) && (y = T), b.route.id)) {
        let { loaderData: A, errors: Y } = c,
          G = b.route.loader && !A.hasOwnProperty(b.route.id) && (!Y || Y[b.route.id] === void 0)
        if (b.route.lazy || G) {
          ;(s.isStatic && (h = !0), y >= 0 ? (f = f.slice(0, y + 1)) : (f = [f[0]]))
          break
        }
      }
    }
  }
  let g = s == null ? void 0 : s.onError,
    v =
      c && g
        ? (T, b) => {
            var A, Y
            g(T, {
              location: c.location,
              params:
                ((Y = (A = c.matches) == null ? void 0 : A[0]) == null ? void 0 : Y.params) ?? {},
              unstable_pattern: cp(c.matches),
              errorInfo: b,
            })
          }
        : void 0
  return f.reduceRight((T, b, A) => {
    let Y,
      G = !1,
      q = null,
      B = null
    c &&
      ((Y = m && b.route.id ? m[b.route.id] : void 0),
      (q = b.route.errorElement || xp),
      h &&
        (y < 0 && A === 0
          ? (qh(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (G = !0),
            (B = null))
          : y === A && ((G = !0), (B = b.route.hydrateFallbackElement || null))))
    let j = r.concat(f.slice(0, A + 1)),
      U = () => {
        let Z
        return (
          Y
            ? (Z = q)
            : G
              ? (Z = B)
              : b.route.Component
                ? (Z = R.createElement(b.route.Component, null))
                : b.route.element
                  ? (Z = b.route.element)
                  : (Z = T),
          R.createElement(Tp, {
            match: b,
            routeContext: { outlet: T, matches: j, isDataRoute: c != null },
            children: Z,
          })
        )
      }
    return c && (b.route.ErrorBoundary || b.route.errorElement || A === 0)
      ? R.createElement(Bh, {
          location: c.location,
          revalidation: c.revalidation,
          component: q,
          error: Y,
          children: U(),
          routeContext: { outlet: null, matches: j, isDataRoute: !0 },
          onError: v,
        })
      : U()
  }, null)
}
function Xo(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function zp(i) {
  let r = R.useContext(da)
  return (Be(r, Xo(i)), r)
}
function Ap(i) {
  let r = R.useContext(ki)
  return (Be(r, Xo(i)), r)
}
function Np(i) {
  let r = R.useContext(kt)
  return (Be(r, Xo(i)), r)
}
function Qo(i) {
  let r = Np(i),
    s = r.matches[r.matches.length - 1]
  return (Be(s.route.id, `${i} can only be used on routes that contain a unique "id"`), s.route.id)
}
function _p() {
  return Qo('useRouteId')
}
function Cp() {
  var c
  let i = R.useContext(Go),
    r = Ap('useRouteError'),
    s = Qo('useRouteError')
  return i !== void 0 ? i : (c = r.errors) == null ? void 0 : c[s]
}
function Op() {
  let { router: i } = zp('useNavigate'),
    r = Qo('useNavigate'),
    s = R.useRef(!1)
  return (
    Hh(() => {
      s.current = !0
    }),
    R.useCallback(
      async (f, m = {}) => {
        ;(Jt(s.current, wh),
          s.current &&
            (typeof f == 'number'
              ? await i.navigate(f)
              : await i.navigate(f, { fromRouteId: r, ...m })))
      },
      [i, r]
    )
  )
}
var sh = {}
function qh(i, r, s) {
  !r && !sh[i] && ((sh[i] = !0), Jt(!1, s))
}
R.memo(Dp)
function Dp({ routes: i, future: r, state: s, isStatic: c, onError: f }) {
  return Lh(i, void 0, { state: s, isStatic: c, onError: f })
}
function Mp({ to: i, replace: r, state: s, relative: c }) {
  Be(ma(), '<Navigate> may be used only in the context of a <Router> component.')
  let { static: f } = R.useContext(Mt)
  Jt(
    !f,
    '<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.'
  )
  let { matches: m } = R.useContext(kt),
    { pathname: h } = zl(),
    y = Vo(),
    g = Ji(i, Yo(m), h, c === 'path'),
    v = JSON.stringify(g)
  return (
    R.useEffect(() => {
      y(JSON.parse(v), { replace: r, state: s, relative: c })
    }, [y, v, c, r, s]),
    null
  )
}
function Gi(i) {
  Be(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  )
}
function jp({
  basename: i = '/',
  children: r = null,
  location: s,
  navigationType: c = 'POP',
  navigator: f,
  static: m = !1,
  unstable_useTransitions: h,
}) {
  Be(
    !ma(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  )
  let y = i.replace(/^\/*/, '/'),
    g = R.useMemo(
      () => ({ basename: y, navigator: f, static: m, unstable_useTransitions: h, future: {} }),
      [y, f, m, h]
    )
  typeof s == 'string' && (s = fa(s))
  let {
      pathname: v = '/',
      search: T = '',
      hash: b = '',
      state: A = null,
      key: Y = 'default',
      unstable_mask: G,
    } = s,
    q = R.useMemo(() => {
      let B = Rl(v, y)
      return B == null
        ? null
        : {
            location: { pathname: B, search: T, hash: b, state: A, key: Y, unstable_mask: G },
            navigationType: c,
          }
    }, [y, v, T, b, A, Y, c, G])
  return (
    Jt(
      q != null,
      `<Router basename="${y}"> is not able to match the URL "${v}${T}${b}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    q == null
      ? null
      : R.createElement(
          Mt.Provider,
          { value: g },
          R.createElement(yu.Provider, { children: r, value: q })
        )
  )
}
function Up({ children: i, location: r }) {
  return bp(Co(i), r)
}
function Co(i, r = []) {
  let s = []
  return (
    R.Children.forEach(i, (c, f) => {
      if (!R.isValidElement(c)) return
      let m = [...r, f]
      if (c.type === R.Fragment) {
        s.push.apply(s, Co(c.props.children, m))
        return
      }
      ;(Be(
        c.type === Gi,
        `[${typeof c.type == 'string' ? c.type : c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Be(!c.props.index || !c.props.children, 'An index route cannot have child routes.'))
      let h = {
        id: c.props.id || m.join('-'),
        caseSensitive: c.props.caseSensitive,
        element: c.props.element,
        Component: c.props.Component,
        index: c.props.index,
        path: c.props.path,
        middleware: c.props.middleware,
        loader: c.props.loader,
        action: c.props.action,
        hydrateFallbackElement: c.props.hydrateFallbackElement,
        HydrateFallback: c.props.HydrateFallback,
        errorElement: c.props.errorElement,
        ErrorBoundary: c.props.ErrorBoundary,
        hasErrorBoundary:
          c.props.hasErrorBoundary === !0 ||
          c.props.ErrorBoundary != null ||
          c.props.errorElement != null,
        shouldRevalidate: c.props.shouldRevalidate,
        handle: c.props.handle,
        lazy: c.props.lazy,
      }
      ;(c.props.children && (h.children = Co(c.props.children, m)), s.push(h))
    }),
    s
  )
}
var Vi = 'get',
  Xi = 'application/x-www-form-urlencoded'
function $i(i) {
  return typeof HTMLElement < 'u' && i instanceof HTMLElement
}
function wp(i) {
  return $i(i) && i.tagName.toLowerCase() === 'button'
}
function Hp(i) {
  return $i(i) && i.tagName.toLowerCase() === 'form'
}
function Lp(i) {
  return $i(i) && i.tagName.toLowerCase() === 'input'
}
function Bp(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey)
}
function qp(i, r) {
  return i.button === 0 && (!r || r === '_self') && !Bp(i)
}
var Bi = null
function Yp() {
  if (Bi === null)
    try {
      ;(new FormData(document.createElement('form'), 0), (Bi = !1))
    } catch {
      Bi = !0
    }
  return Bi
}
var Gp = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain'])
function po(i) {
  return i != null && !Gp.has(i)
    ? (Jt(
        !1,
        `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xi}"`
      ),
      null)
    : i
}
function Vp(i, r) {
  let s, c, f, m, h
  if (Hp(i)) {
    let y = i.getAttribute('action')
    ;((c = y ? Rl(y, r) : null),
      (s = i.getAttribute('method') || Vi),
      (f = po(i.getAttribute('enctype')) || Xi),
      (m = new FormData(i)))
  } else if (wp(i) || (Lp(i) && (i.type === 'submit' || i.type === 'image'))) {
    let y = i.form
    if (y == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>')
    let g = i.getAttribute('formaction') || y.getAttribute('action')
    if (
      ((c = g ? Rl(g, r) : null),
      (s = i.getAttribute('formmethod') || y.getAttribute('method') || Vi),
      (f = po(i.getAttribute('formenctype')) || po(y.getAttribute('enctype')) || Xi),
      (m = new FormData(y, i)),
      !Yp())
    ) {
      let { name: v, type: T, value: b } = i
      if (T === 'image') {
        let A = v ? `${v}.` : ''
        ;(m.append(`${A}x`, '0'), m.append(`${A}y`, '0'))
      } else v && m.append(v, b)
    }
  } else {
    if ($i(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      )
    ;((s = Vi), (c = null), (f = Xi), (h = i))
  }
  return (
    m && f === 'text/plain' && ((h = m), (m = void 0)),
    { action: c, method: s.toLowerCase(), encType: f, formData: m, body: h }
  )
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0')
function Zo(i, r) {
  if (i === !1 || i === null || typeof i > 'u') throw new Error(r)
}
function Xp(i, r, s, c) {
  let f =
    typeof i == 'string'
      ? new URL(i, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin)
      : i
  return (
    s
      ? f.pathname.endsWith('/')
        ? (f.pathname = `${f.pathname}_.${c}`)
        : (f.pathname = `${f.pathname}.${c}`)
      : f.pathname === '/'
        ? (f.pathname = `_root.${c}`)
        : r && Rl(f.pathname, r) === '/'
          ? (f.pathname = `${r.replace(/\/$/, '')}/_root.${c}`)
          : (f.pathname = `${f.pathname.replace(/\/$/, '')}.${c}`),
    f
  )
}
async function Qp(i, r) {
  if (i.id in r) return r[i.id]
  try {
    let s = await import(i.module)
    return ((r[i.id] = s), s)
  } catch (s) {
    return (
      console.error(`Error loading route module \`${i.module}\`, reloading page...`),
      console.error(s),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    )
  }
}
function Zp(i) {
  return i == null
    ? !1
    : i.href == null
      ? i.rel === 'preload' && typeof i.imageSrcSet == 'string' && typeof i.imageSizes == 'string'
      : typeof i.rel == 'string' && typeof i.href == 'string'
}
async function Kp(i, r, s) {
  let c = await Promise.all(
    i.map(async (f) => {
      let m = r.routes[f.route.id]
      if (m) {
        let h = await Qp(m, s)
        return h.links ? h.links() : []
      }
      return []
    })
  )
  return Wp(
    c
      .flat(1)
      .filter(Zp)
      .filter((f) => f.rel === 'stylesheet' || f.rel === 'preload')
      .map((f) =>
        f.rel === 'stylesheet' ? { ...f, rel: 'prefetch', as: 'style' } : { ...f, rel: 'prefetch' }
      )
  )
}
function fh(i, r, s, c, f, m) {
  let h = (g, v) => (s[v] ? g.route.id !== s[v].route.id : !0),
    y = (g, v) => {
      var T
      return (
        s[v].pathname !== g.pathname ||
        (((T = s[v].route.path) == null ? void 0 : T.endsWith('*')) &&
          s[v].params['*'] !== g.params['*'])
      )
    }
  return m === 'assets'
    ? r.filter((g, v) => h(g, v) || y(g, v))
    : m === 'data'
      ? r.filter((g, v) => {
          var b
          let T = c.routes[g.route.id]
          if (!T || !T.hasLoader) return !1
          if (h(g, v) || y(g, v)) return !0
          if (g.route.shouldRevalidate) {
            let A = g.route.shouldRevalidate({
              currentUrl: new URL(f.pathname + f.search + f.hash, window.origin),
              currentParams: ((b = s[0]) == null ? void 0 : b.params) || {},
              nextUrl: new URL(i, window.origin),
              nextParams: g.params,
              defaultShouldRevalidate: !0,
            })
            if (typeof A == 'boolean') return A
          }
          return !0
        })
      : []
}
function Jp(i, r, { includeHydrateFallback: s } = {}) {
  return kp(
    i
      .map((c) => {
        let f = r.routes[c.route.id]
        if (!f) return []
        let m = [f.module]
        return (
          f.clientActionModule && (m = m.concat(f.clientActionModule)),
          f.clientLoaderModule && (m = m.concat(f.clientLoaderModule)),
          s && f.hydrateFallbackModule && (m = m.concat(f.hydrateFallbackModule)),
          f.imports && (m = m.concat(f.imports)),
          m
        )
      })
      .flat(1)
  )
}
function kp(i) {
  return [...new Set(i)]
}
function $p(i) {
  let r = {},
    s = Object.keys(i).sort()
  for (let c of s) r[c] = i[c]
  return r
}
function Wp(i, r) {
  let s = new Set()
  return (
    new Set(r),
    i.reduce((c, f) => {
      let m = JSON.stringify($p(f))
      return (s.has(m) || (s.add(m), c.push({ key: m, link: f })), c)
    }, [])
  )
}
function Yh() {
  let i = R.useContext(da)
  return (Zo(i, 'You must render this element inside a <DataRouterContext.Provider> element'), i)
}
function Fp() {
  let i = R.useContext(ki)
  return (
    Zo(i, 'You must render this element inside a <DataRouterStateContext.Provider> element'),
    i
  )
}
var Ko = R.createContext(void 0)
Ko.displayName = 'FrameworkContext'
function Gh() {
  let i = R.useContext(Ko)
  return (Zo(i, 'You must render this element inside a <HydratedRouter> element'), i)
}
function Ip(i, r) {
  let s = R.useContext(Ko),
    [c, f] = R.useState(!1),
    [m, h] = R.useState(!1),
    { onFocus: y, onBlur: g, onMouseEnter: v, onMouseLeave: T, onTouchStart: b } = r,
    A = R.useRef(null)
  ;(R.useEffect(() => {
    if ((i === 'render' && h(!0), i === 'viewport')) {
      let q = (j) => {
          j.forEach((U) => {
            h(U.isIntersecting)
          })
        },
        B = new IntersectionObserver(q, { threshold: 0.5 })
      return (
        A.current && B.observe(A.current),
        () => {
          B.disconnect()
        }
      )
    }
  }, [i]),
    R.useEffect(() => {
      if (c) {
        let q = setTimeout(() => {
          h(!0)
        }, 100)
        return () => {
          clearTimeout(q)
        }
      }
    }, [c]))
  let Y = () => {
      f(!0)
    },
    G = () => {
      ;(f(!1), h(!1))
    }
  return s
    ? i !== 'intent'
      ? [m, A, {}]
      : [
          m,
          A,
          {
            onFocus: mu(y, Y),
            onBlur: mu(g, G),
            onMouseEnter: mu(v, Y),
            onMouseLeave: mu(T, G),
            onTouchStart: mu(b, Y),
          },
        ]
    : [!1, A, {}]
}
function mu(i, r) {
  return (s) => {
    ;(i && i(s), s.defaultPrevented || r(s))
  }
}
function Pp({ page: i, ...r }) {
  let { router: s } = Yh(),
    c = R.useMemo(() => Nh(s.routes, i, s.basename), [s.routes, i, s.basename])
  return c ? R.createElement(t0, { page: i, matches: c, ...r }) : null
}
function e0(i) {
  let { manifest: r, routeModules: s } = Gh(),
    [c, f] = R.useState([])
  return (
    R.useEffect(() => {
      let m = !1
      return (
        Kp(i, r, s).then((h) => {
          m || f(h)
        }),
        () => {
          m = !0
        }
      )
    }, [i, r, s]),
    c
  )
}
function t0({ page: i, matches: r, ...s }) {
  let c = zl(),
    { future: f, manifest: m, routeModules: h } = Gh(),
    { basename: y } = Yh(),
    { loaderData: g, matches: v } = Fp(),
    T = R.useMemo(() => fh(i, r, v, m, c, 'data'), [i, r, v, m, c]),
    b = R.useMemo(() => fh(i, r, v, m, c, 'assets'), [i, r, v, m, c]),
    A = R.useMemo(() => {
      if (i === c.pathname + c.search + c.hash) return []
      let q = new Set(),
        B = !1
      if (
        (r.forEach((U) => {
          var ee
          let Z = m.routes[U.route.id]
          !Z ||
            !Z.hasLoader ||
            ((!T.some(($) => $.route.id === U.route.id) &&
              U.route.id in g &&
              (ee = h[U.route.id]) != null &&
              ee.shouldRevalidate) ||
            Z.hasClientLoader
              ? (B = !0)
              : q.add(U.route.id))
        }),
        q.size === 0)
      )
        return []
      let j = Xp(i, y, f.unstable_trailingSlashAwareDataRequests, 'data')
      return (
        B &&
          q.size > 0 &&
          j.searchParams.set(
            '_routes',
            r
              .filter((U) => q.has(U.route.id))
              .map((U) => U.route.id)
              .join(',')
          ),
        [j.pathname + j.search]
      )
    }, [y, f.unstable_trailingSlashAwareDataRequests, g, c, m, T, r, i, h]),
    Y = R.useMemo(() => Jp(b, m), [b, m]),
    G = e0(b)
  return R.createElement(
    R.Fragment,
    null,
    A.map((q) => R.createElement('link', { key: q, rel: 'prefetch', as: 'fetch', href: q, ...s })),
    Y.map((q) => R.createElement('link', { key: q, rel: 'modulepreload', href: q, ...s })),
    G.map(({ key: q, link: B }) =>
      R.createElement('link', {
        key: q,
        nonce: s.nonce,
        ...B,
        crossOrigin: B.crossOrigin ?? s.crossOrigin,
      })
    )
  )
}
function l0(...i) {
  return (r) => {
    i.forEach((s) => {
      typeof s == 'function' ? s(r) : s != null && (s.current = r)
    })
  }
}
var n0 =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u'
try {
  n0 && (window.__reactRouterVersion = '7.13.1')
} catch {}
function a0({ basename: i, children: r, unstable_useTransitions: s, window: c }) {
  let f = R.useRef()
  f.current == null && (f.current = Hy({ window: c, v5Compat: !0 }))
  let m = f.current,
    [h, y] = R.useState({ action: m.action, location: m.location }),
    g = R.useCallback(
      (v) => {
        s === !1 ? y(v) : R.startTransition(() => y(v))
      },
      [s]
    )
  return (
    R.useLayoutEffect(() => m.listen(g), [m, g]),
    R.createElement(jp, {
      basename: i,
      children: r,
      location: h.location,
      navigationType: h.action,
      navigator: m,
      unstable_useTransitions: s,
    })
  )
}
var Vh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  xn = R.forwardRef(function (
    {
      onClick: r,
      discover: s = 'render',
      prefetch: c = 'none',
      relative: f,
      reloadDocument: m,
      replace: h,
      unstable_mask: y,
      state: g,
      target: v,
      to: T,
      preventScrollReset: b,
      viewTransition: A,
      unstable_defaultShouldRevalidate: Y,
      ...G
    },
    q
  ) {
    let { basename: B, navigator: j, unstable_useTransitions: U } = R.useContext(Mt),
      Z = typeof T == 'string' && Vh.test(T),
      ee = Dh(T, B)
    T = ee.to
    let $ = gp(T, { relative: f }),
      re = zl(),
      k = null
    if (y) {
      let Ee = Ji(y, [], re.unstable_mask ? re.unstable_mask.pathname : '/', !0)
      ;(B !== '/' && (Ee.pathname = Ee.pathname === '/' ? B : tl([B, Ee.pathname])),
        (k = j.createHref(Ee)))
    }
    let [Se, ne, Xe] = Ip(c, G),
      Oe = r0(T, {
        replace: h,
        unstable_mask: y,
        state: g,
        target: v,
        preventScrollReset: b,
        relative: f,
        viewTransition: A,
        unstable_defaultShouldRevalidate: Y,
        unstable_useTransitions: U,
      })
    function P(Ee) {
      ;(r && r(Ee), Ee.defaultPrevented || Oe(Ee))
    }
    let Qe = !(ee.isExternal || m),
      Re = R.createElement('a', {
        ...G,
        ...Xe,
        href: (Qe ? k : void 0) || ee.absoluteURL || $,
        onClick: Qe ? P : r,
        ref: l0(q, ne),
        target: v,
        'data-discover': !Z && s === 'render' ? 'true' : void 0,
      })
    return Se && !Z ? R.createElement(R.Fragment, null, Re, R.createElement(Pp, { page: $ })) : Re
  })
xn.displayName = 'Link'
var u0 = R.forwardRef(function (
  {
    'aria-current': r = 'page',
    caseSensitive: s = !1,
    className: c = '',
    end: f = !1,
    style: m,
    to: h,
    viewTransition: y,
    children: g,
    ...v
  },
  T
) {
  let b = pu(h, { relative: v.relative }),
    A = zl(),
    Y = R.useContext(ki),
    { navigator: G, basename: q } = R.useContext(Mt),
    B = Y != null && m0(b) && y === !0,
    j = G.encodeLocation ? G.encodeLocation(b).pathname : b.pathname,
    U = A.pathname,
    Z = Y && Y.navigation && Y.navigation.location ? Y.navigation.location.pathname : null
  ;(s || ((U = U.toLowerCase()), (Z = Z ? Z.toLowerCase() : null), (j = j.toLowerCase())),
    Z && q && (Z = Rl(Z, q) || Z))
  const ee = j !== '/' && j.endsWith('/') ? j.length - 1 : j.length
  let $ = U === j || (!f && U.startsWith(j) && U.charAt(ee) === '/'),
    re = Z != null && (Z === j || (!f && Z.startsWith(j) && Z.charAt(j.length) === '/')),
    k = { isActive: $, isPending: re, isTransitioning: B },
    Se = $ ? r : void 0,
    ne
  typeof c == 'function'
    ? (ne = c(k))
    : (ne = [c, $ ? 'active' : null, re ? 'pending' : null, B ? 'transitioning' : null]
        .filter(Boolean)
        .join(' '))
  let Xe = typeof m == 'function' ? m(k) : m
  return R.createElement(
    xn,
    { ...v, 'aria-current': Se, className: ne, ref: T, style: Xe, to: h, viewTransition: y },
    typeof g == 'function' ? g(k) : g
  )
})
u0.displayName = 'NavLink'
var i0 = R.forwardRef(
  (
    {
      discover: i = 'render',
      fetcherKey: r,
      navigate: s,
      reloadDocument: c,
      replace: f,
      state: m,
      method: h = Vi,
      action: y,
      onSubmit: g,
      relative: v,
      preventScrollReset: T,
      viewTransition: b,
      unstable_defaultShouldRevalidate: A,
      ...Y
    },
    G
  ) => {
    let { unstable_useTransitions: q } = R.useContext(Mt),
      B = f0(),
      j = d0(y, { relative: v }),
      U = h.toLowerCase() === 'get' ? 'get' : 'post',
      Z = typeof y == 'string' && Vh.test(y),
      ee = ($) => {
        if ((g && g($), $.defaultPrevented)) return
        $.preventDefault()
        let re = $.nativeEvent.submitter,
          k = (re == null ? void 0 : re.getAttribute('formmethod')) || h,
          Se = () =>
            B(re || $.currentTarget, {
              fetcherKey: r,
              method: k,
              navigate: s,
              replace: f,
              state: m,
              relative: v,
              preventScrollReset: T,
              viewTransition: b,
              unstable_defaultShouldRevalidate: A,
            })
        q && s !== !1 ? R.startTransition(() => Se()) : Se()
      }
    return R.createElement('form', {
      ref: G,
      method: U,
      action: j,
      onSubmit: c ? g : ee,
      ...Y,
      'data-discover': !Z && i === 'render' ? 'true' : void 0,
    })
  }
)
i0.displayName = 'Form'
function c0(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Xh(i) {
  let r = R.useContext(da)
  return (Be(r, c0(i)), r)
}
function r0(
  i,
  {
    target: r,
    replace: s,
    unstable_mask: c,
    state: f,
    preventScrollReset: m,
    relative: h,
    viewTransition: y,
    unstable_defaultShouldRevalidate: g,
    unstable_useTransitions: v,
  } = {}
) {
  let T = Vo(),
    b = zl(),
    A = pu(i, { relative: h })
  return R.useCallback(
    (Y) => {
      if (qp(Y, r)) {
        Y.preventDefault()
        let G = s !== void 0 ? s : gu(b) === gu(A),
          q = () =>
            T(i, {
              replace: G,
              unstable_mask: c,
              state: f,
              preventScrollReset: m,
              relative: h,
              viewTransition: y,
              unstable_defaultShouldRevalidate: g,
            })
        v ? R.startTransition(() => q()) : q()
      }
    },
    [b, T, A, s, c, f, r, i, m, h, y, g, v]
  )
}
var o0 = 0,
  s0 = () => `__${String(++o0)}__`
function f0() {
  let { router: i } = Xh('useSubmit'),
    { basename: r } = R.useContext(Mt),
    s = _p(),
    c = i.fetch,
    f = i.navigate
  return R.useCallback(
    async (m, h = {}) => {
      let { action: y, method: g, encType: v, formData: T, body: b } = Vp(m, r)
      if (h.navigate === !1) {
        let A = h.fetcherKey || s0()
        await c(A, s, h.action || y, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: T,
          body: b,
          formMethod: h.method || g,
          formEncType: h.encType || v,
          flushSync: h.flushSync,
        })
      } else
        await f(h.action || y, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: T,
          body: b,
          formMethod: h.method || g,
          formEncType: h.encType || v,
          replace: h.replace,
          state: h.state,
          fromRouteId: s,
          flushSync: h.flushSync,
          viewTransition: h.viewTransition,
        })
    },
    [c, f, r, s]
  )
}
function d0(i, { relative: r } = {}) {
  let { basename: s } = R.useContext(Mt),
    c = R.useContext(kt)
  Be(c, 'useFormAction must be used inside a RouteContext')
  let [f] = c.matches.slice(-1),
    m = { ...pu(i || '.', { relative: r }) },
    h = zl()
  if (i == null) {
    m.search = h.search
    let y = new URLSearchParams(m.search),
      g = y.getAll('index')
    if (g.some((T) => T === '')) {
      ;(y.delete('index'), g.filter((b) => b).forEach((b) => y.append('index', b)))
      let T = y.toString()
      m.search = T ? `?${T}` : ''
    }
  }
  return (
    (!i || i === '.') &&
      f.route.index &&
      (m.search = m.search ? m.search.replace(/^\?/, '?index&') : '?index'),
    s !== '/' && (m.pathname = m.pathname === '/' ? s : tl([s, m.pathname])),
    gu(m)
  )
}
function m0(i, { relative: r } = {}) {
  let s = R.useContext(jh)
  Be(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  )
  let { basename: c } = Xh('useViewTransitionState'),
    f = pu(i, { relative: r })
  if (!s.isTransitioning) return !1
  let m = Rl(s.currentLocation.pathname, c) || s.currentLocation.pathname,
    h = Rl(s.nextLocation.pathname, c) || s.nextLocation.pathname
  return Qi(f.pathname, h) != null || Qi(f.pathname, m) != null
}
const h0 = '/assets/gitrep-icon-C7lvewn3.png'
var bo = { exports: {} },
  So = {}
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dh
function v0() {
  if (dh) return So
  dh = 1
  var i = Zi()
  function r(b, A) {
    return (b === A && (b !== 0 || 1 / b === 1 / A)) || (b !== b && A !== A)
  }
  var s = typeof Object.is == 'function' ? Object.is : r,
    c = i.useState,
    f = i.useEffect,
    m = i.useLayoutEffect,
    h = i.useDebugValue
  function y(b, A) {
    var Y = A(),
      G = c({ inst: { value: Y, getSnapshot: A } }),
      q = G[0].inst,
      B = G[1]
    return (
      m(
        function () {
          ;((q.value = Y), (q.getSnapshot = A), g(q) && B({ inst: q }))
        },
        [b, Y, A]
      ),
      f(
        function () {
          return (
            g(q) && B({ inst: q }),
            b(function () {
              g(q) && B({ inst: q })
            })
          )
        },
        [b]
      ),
      h(Y),
      Y
    )
  }
  function g(b) {
    var A = b.getSnapshot
    b = b.value
    try {
      var Y = A()
      return !s(b, Y)
    } catch {
      return !0
    }
  }
  function v(b, A) {
    return A()
  }
  var T =
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
      ? v
      : y
  return (
    (So.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : T),
    So
  )
}
var mh
function g0() {
  return (mh || ((mh = 1), (bo.exports = v0())), bo.exports)
}
var hh = g0()
const Qh = 0,
  Zh = 1,
  Kh = 2,
  vh = 3
var gh = Object.prototype.hasOwnProperty
function Oo(i, r) {
  var s, c
  if (i === r) return !0
  if (i && r && (s = i.constructor) === r.constructor) {
    if (s === Date) return i.getTime() === r.getTime()
    if (s === RegExp) return i.toString() === r.toString()
    if (s === Array) {
      if ((c = i.length) === r.length) for (; c-- && Oo(i[c], r[c]); );
      return c === -1
    }
    if (!s || typeof i == 'object') {
      c = 0
      for (s in i)
        if ((gh.call(i, s) && ++c && !gh.call(r, s)) || !(s in r) || !Oo(i[s], r[s])) return !1
      return Object.keys(r).length === c
    }
  }
  return i !== i && r !== r
}
const El = new WeakMap(),
  Tl = () => {},
  ft = Tl(),
  Do = Object,
  ge = (i) => i === ft,
  el = (i) => typeof i == 'function',
  en = (i, r) => ({ ...i, ...r }),
  Jh = (i) => el(i.then),
  xo = {},
  qi = {},
  Jo = 'undefined',
  bu = typeof window != Jo,
  Mo = typeof document != Jo,
  y0 = bu && 'Deno' in window,
  p0 = () => bu && typeof window.requestAnimationFrame != Jo,
  kh = (i, r) => {
    const s = El.get(i)
    return [
      () => (!ge(r) && i.get(r)) || xo,
      (c) => {
        if (!ge(r)) {
          const f = i.get(r)
          ;(r in qi || (qi[r] = f), s[5](r, en(f, c), f || xo))
        }
      },
      s[6],
      () => (!ge(r) && r in qi ? qi[r] : (!ge(r) && i.get(r)) || xo),
    ]
  }
let jo = !0
const b0 = () => jo,
  [Uo, wo] =
    bu && window.addEventListener
      ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)]
      : [Tl, Tl],
  S0 = () => {
    const i = Mo && document.visibilityState
    return ge(i) || i !== 'hidden'
  },
  x0 = (i) => (
    Mo && document.addEventListener('visibilitychange', i),
    Uo('focus', i),
    () => {
      ;(Mo && document.removeEventListener('visibilitychange', i), wo('focus', i))
    }
  ),
  E0 = (i) => {
    const r = () => {
        ;((jo = !0), i())
      },
      s = () => {
        jo = !1
      }
    return (
      Uo('online', r),
      Uo('offline', s),
      () => {
        ;(wo('online', r), wo('offline', s))
      }
    )
  },
  T0 = { isOnline: b0, isVisible: S0 },
  R0 = { initFocus: x0, initReconnect: E0 },
  yh = !Ki.useId,
  oa = !bu || y0,
  z0 = (i) => (p0() ? window.requestAnimationFrame(i) : setTimeout(i, 1)),
  Eo = oa ? R.useEffect : R.useLayoutEffect,
  To = typeof navigator < 'u' && navigator.connection,
  ph = !oa && To && (['slow-2g', '2g'].includes(To.effectiveType) || To.saveData),
  Yi = new WeakMap(),
  A0 = (i) => Do.prototype.toString.call(i),
  Ro = (i, r) => i === `[object ${r}]`
let N0 = 0
const Ho = (i) => {
    const r = typeof i,
      s = A0(i),
      c = Ro(s, 'Date'),
      f = Ro(s, 'RegExp'),
      m = Ro(s, 'Object')
    let h, y
    if (Do(i) === i && !c && !f) {
      if (((h = Yi.get(i)), h)) return h
      if (((h = ++N0 + '~'), Yi.set(i, h), Array.isArray(i))) {
        for (h = '@', y = 0; y < i.length; y++) h += Ho(i[y]) + ','
        Yi.set(i, h)
      }
      if (m) {
        h = '#'
        const g = Do.keys(i).sort()
        for (; !ge((y = g.pop())); ) ge(i[y]) || (h += y + ':' + Ho(i[y]) + ',')
        Yi.set(i, h)
      }
    } else
      h = c ? i.toJSON() : r == 'symbol' ? i.toString() : r == 'string' ? JSON.stringify(i) : '' + i
    return h
  },
  ko = (i) => {
    if (el(i))
      try {
        i = i()
      } catch {
        i = ''
      }
    const r = i
    return ((i = typeof i == 'string' ? i : (Array.isArray(i) ? i.length : i) ? Ho(i) : ''), [i, r])
  }
let _0 = 0
const Lo = () => ++_0
async function $h(...i) {
  const [r, s, c, f] = i,
    m = en(
      { populateCache: !0, throwOnError: !0 },
      typeof f == 'boolean' ? { revalidate: f } : f || {}
    )
  let h = m.populateCache
  const y = m.rollbackOnError
  let g = m.optimisticData
  const v = (A) => (typeof y == 'function' ? y(A) : y !== !1),
    T = m.throwOnError
  if (el(s)) {
    const A = s,
      Y = [],
      G = r.keys()
    for (const q of G) !/^\$(inf|sub)\$/.test(q) && A(r.get(q)._k) && Y.push(q)
    return Promise.all(Y.map(b))
  }
  return b(s)
  async function b(A) {
    const [Y] = ko(A)
    if (!Y) return
    const [G, q] = kh(r, Y),
      [B, j, U, Z] = El.get(r),
      ee = () => {
        const Re = B[Y]
        return (el(m.revalidate) ? m.revalidate(G().data, A) : m.revalidate !== !1) &&
          (delete U[Y], delete Z[Y], Re && Re[0])
          ? Re[0](Kh).then(() => G().data)
          : G().data
      }
    if (i.length < 3) return ee()
    let $ = c,
      re,
      k = !1
    const Se = Lo()
    j[Y] = [Se, 0]
    const ne = !ge(g),
      Xe = G(),
      Oe = Xe.data,
      P = Xe._c,
      Qe = ge(P) ? Oe : P
    if ((ne && ((g = el(g) ? g(Qe, Oe) : g), q({ data: g, _c: Qe })), el($)))
      try {
        $ = $(Qe)
      } catch (Re) {
        ;((re = Re), (k = !0))
      }
    if ($ && Jh($))
      if (
        (($ = await $.catch((Re) => {
          ;((re = Re), (k = !0))
        })),
        Se !== j[Y][0])
      ) {
        if (k) throw re
        return $
      } else k && ne && v(re) && ((h = !0), q({ data: Qe, _c: ft }))
    if (h && !k)
      if (el(h)) {
        const Re = h($, Qe)
        q({ data: Re, error: ft, _c: ft })
      } else q({ data: $, error: ft, _c: ft })
    if (
      ((j[Y][1] = Lo()),
      Promise.resolve(ee()).then(() => {
        q({ _c: ft })
      }),
      k)
    ) {
      if (T) throw re
      return
    }
    return $
  }
}
const bh = (i, r) => {
    for (const s in i) i[s][0] && i[s][0](r)
  },
  C0 = (i, r) => {
    if (!El.has(i)) {
      const s = en(R0, r),
        c = Object.create(null),
        f = $h.bind(ft, i)
      let m = Tl
      const h = Object.create(null),
        y = (T, b) => {
          const A = h[T] || []
          return ((h[T] = A), A.push(b), () => A.splice(A.indexOf(b), 1))
        },
        g = (T, b, A) => {
          i.set(T, b)
          const Y = h[T]
          if (Y) for (const G of Y) G(b, A)
        },
        v = () => {
          if (
            !El.has(i) &&
            (El.set(i, [c, Object.create(null), Object.create(null), Object.create(null), f, g, y]),
            !oa)
          ) {
            const T = s.initFocus(setTimeout.bind(ft, bh.bind(ft, c, Qh))),
              b = s.initReconnect(setTimeout.bind(ft, bh.bind(ft, c, Zh)))
            m = () => {
              ;(T && T(), b && b(), El.delete(i))
            }
          }
        }
      return (v(), [i, f, v, m])
    }
    return [i, El.get(i)[4]]
  },
  O0 = (i, r, s, c, f) => {
    const m = s.errorRetryCount,
      h = f.retryCount,
      y = ~~((Math.random() + 0.5) * (1 << (h < 8 ? h : 8))) * s.errorRetryInterval
    ;(!ge(m) && h > m) || setTimeout(c, y, f)
  },
  D0 = Oo,
  [Wh, Fh] = C0(new Map()),
  M0 = en(
    {
      onLoadingSlow: Tl,
      onSuccess: Tl,
      onError: Tl,
      onErrorRetry: O0,
      onDiscarded: Tl,
      revalidateOnFocus: !0,
      revalidateOnReconnect: !0,
      revalidateIfStale: !0,
      shouldRetryOnError: !0,
      errorRetryInterval: ph ? 1e4 : 5e3,
      focusThrottleInterval: 5 * 1e3,
      dedupingInterval: 2 * 1e3,
      loadingTimeout: ph ? 5e3 : 3e3,
      compare: D0,
      isPaused: () => !1,
      cache: Wh,
      mutate: Fh,
      fallback: {},
    },
    T0
  ),
  j0 = (i, r) => {
    const s = en(i, r)
    if (r) {
      const { use: c, fallback: f } = i,
        { use: m, fallback: h } = r
      ;(c && m && (s.use = c.concat(m)), f && h && (s.fallback = en(f, h)))
    }
    return s
  },
  U0 = R.createContext({}),
  w0 = '$inf$',
  Ih = bu && window.__SWR_DEVTOOLS_USE__,
  H0 = Ih ? window.__SWR_DEVTOOLS_USE__ : [],
  L0 = () => {
    Ih && (window.__SWR_DEVTOOLS_REACT__ = Ki)
  },
  B0 = (i) =>
    el(i[1]) ? [i[0], i[1], i[2] || {}] : [i[0], null, (i[1] === null ? i[2] : i[1]) || {}],
  q0 = () => {
    const i = R.useContext(U0)
    return R.useMemo(() => en(M0, i), [i])
  },
  Y0 = (i) => (r, s, c) =>
    i(
      r,
      s &&
        ((...m) => {
          const [h] = ko(r),
            [, , , y] = El.get(Wh)
          if (h.startsWith(w0)) return s(...m)
          const g = y[h]
          return ge(g) ? s(...m) : (delete y[h], g)
        }),
      c
    ),
  G0 = H0.concat(Y0),
  V0 = (i) =>
    function (...s) {
      const c = q0(),
        [f, m, h] = B0(s),
        y = j0(c, h)
      let g = i
      const { use: v } = y,
        T = (v || []).concat(G0)
      for (let b = T.length; b--; ) g = T[b](g)
      return g(f, m || y.fetcher || null, y)
    },
  X0 = (i, r, s) => {
    const c = r[i] || (r[i] = [])
    return (
      c.push(s),
      () => {
        const f = c.indexOf(s)
        f >= 0 && ((c[f] = c[c.length - 1]), c.pop())
      }
    )
  }
L0()
const zo =
    Ki.use ||
    ((i) => {
      switch (i.status) {
        case 'pending':
          throw i
        case 'fulfilled':
          return i.value
        case 'rejected':
          throw i.reason
        default:
          throw (
            (i.status = 'pending'),
            i.then(
              (r) => {
                ;((i.status = 'fulfilled'), (i.value = r))
              },
              (r) => {
                ;((i.status = 'rejected'), (i.reason = r))
              }
            ),
            i
          )
      }
    }),
  Ao = { dedupe: !0 },
  Sh = Promise.resolve(ft),
  Q0 = () => Tl,
  Z0 = (i, r, s) => {
    const {
        cache: c,
        compare: f,
        suspense: m,
        fallbackData: h,
        revalidateOnMount: y,
        revalidateIfStale: g,
        refreshInterval: v,
        refreshWhenHidden: T,
        refreshWhenOffline: b,
        keepPreviousData: A,
        strictServerPrefetchWarning: Y,
      } = s,
      [G, q, B, j] = El.get(c),
      [U, Z] = ko(i),
      ee = R.useRef(!1),
      $ = R.useRef(!1),
      re = R.useRef(U),
      k = R.useRef(r),
      Se = R.useRef(s),
      ne = () => Se.current,
      Xe = () => ne().isVisible() && ne().isOnline(),
      [Oe, P, Qe, Re] = kh(c, U),
      Ee = R.useRef({}).current,
      D = ge(h) ? (ge(s.fallback) ? ft : s.fallback[U]) : h,
      X = (Te, Ye) => {
        for (const He in Ee) {
          const Me = He
          if (Me === 'data') {
            if (!f(Te[Me], Ye[Me]) && (!ge(Te[Me]) || !f(ae, Ye[Me]))) return !1
          } else if (Ye[Me] !== Te[Me]) return !1
        }
        return !0
      },
      W = !ee.current,
      se = R.useMemo(() => {
        const Te = Oe(),
          Ye = Re(),
          He = (Ke) => {
            const Et = en(Ke)
            return (
              delete Et._k,
              (() => {
                if (!U || !r || ne().isPaused()) return !1
                if (W && !ge(y)) return y
                const tn = ge(D) ? Et.data : D
                return ge(tn) || g
              })()
                ? { isValidating: !0, isLoading: !0, ...Et }
                : Et
            )
          },
          Me = He(Te),
          mt = Te === Ye ? Me : He(Ye)
        let ot = Me
        return [
          () => {
            const Ke = He(Oe())
            return X(Ke, ot)
              ? ((ot.data = Ke.data),
                (ot.isLoading = Ke.isLoading),
                (ot.isValidating = Ke.isValidating),
                (ot.error = Ke.error),
                ot)
              : ((ot = Ke), Ke)
          },
          () => mt,
        ]
      }, [c, U]),
      fe = hh.useSyncExternalStore(
        R.useCallback(
          (Te) =>
            Qe(U, (Ye, He) => {
              X(He, Ye) || Te()
            }),
          [c, U]
        ),
        se[0],
        se[1]
      ),
      S = G[U] && G[U].length > 0,
      H = fe.data,
      V = ge(H) ? (D && Jh(D) ? zo(D) : D) : H,
      Q = fe.error,
      te = R.useRef(V),
      ae = A ? (ge(H) ? (ge(te.current) ? V : te.current) : H) : V,
      oe = U && ge(V),
      Ze = R.useRef(null)
    !oa &&
      hh.useSyncExternalStore(
        Q0,
        () => ((Ze.current = !1), Ze),
        () => ((Ze.current = !0), Ze)
      )
    const qe = Ze.current
    Y &&
      qe &&
      !m &&
      oe &&
      console.warn(
        `Missing pre-initiated data for serialized key "${U}" during server-side rendering. Data fetching should be initiated on the server and provided to SWR via fallback data. You can set "strictServerPrefetchWarning: false" to disable this warning.`
      )
    const ll =
        !U || !r || ne().isPaused() || (S && !ge(Q))
          ? !1
          : W && !ge(y)
            ? y
            : m
              ? ge(V)
                ? !1
                : g
              : ge(V) || g,
      Tn = ge(fe.isValidating) ? ll : fe.isValidating,
      va = ge(fe.isLoading) ? ll : fe.isLoading,
      Al = R.useCallback(
        async (Te) => {
          const Ye = k.current
          if (!U || !Ye || $.current || ne().isPaused()) return !1
          let He,
            Me,
            mt = !0
          const ot = Te || {},
            Ke = !B[U] || !ot.dedupe,
            Et = () => (yh ? !$.current && U === re.current && ee.current : U === re.current),
            Pe = { isValidating: !1, isLoading: !1 },
            tn = () => {
              P(Pe)
            },
            ga = () => {
              const nt = B[U]
              nt && nt[1] === Me && delete B[U]
            },
            ya = { isValidating: !0 }
          ge(Oe().data) && (ya.isLoading = !0)
          try {
            if (
              (Ke &&
                (P(ya),
                s.loadingTimeout &&
                  ge(Oe().data) &&
                  setTimeout(() => {
                    mt && Et() && ne().onLoadingSlow(U, s)
                  }, s.loadingTimeout),
                (B[U] = [Ye(Z), Lo()])),
              ([He, Me] = B[U]),
              (He = await He),
              Ke && setTimeout(ga, s.dedupingInterval),
              !B[U] || B[U][1] !== Me)
            )
              return (Ke && Et() && ne().onDiscarded(U), !1)
            Pe.error = ft
            const nt = q[U]
            if (!ge(nt) && (Me <= nt[0] || Me <= nt[1] || nt[1] === 0))
              return (tn(), Ke && Et() && ne().onDiscarded(U), !1)
            const Xt = Oe().data
            ;((Pe.data = f(Xt, He) ? Xt : He), Ke && Et() && ne().onSuccess(He, U, s))
          } catch (nt) {
            ga()
            const Xt = ne(),
              { shouldRetryOnError: Rn } = Xt
            Xt.isPaused() ||
              ((Pe.error = nt),
              Ke &&
                Et() &&
                (Xt.onError(nt, U, Xt),
                (Rn === !0 || (el(Rn) && Rn(nt))) &&
                  (!ne().revalidateOnFocus || !ne().revalidateOnReconnect || Xe()) &&
                  Xt.onErrorRetry(
                    nt,
                    U,
                    Xt,
                    (Wi) => {
                      const pa = G[U]
                      pa && pa[0] && pa[0](vh, Wi)
                    },
                    { retryCount: (ot.retryCount || 0) + 1, dedupe: !0 }
                  )))
          }
          return ((mt = !1), tn(), !0)
        },
        [U, c]
      ),
      $t = R.useCallback((...Te) => $h(c, re.current, ...Te), [])
    if (
      (Eo(() => {
        ;((k.current = r), (Se.current = s), ge(H) || (te.current = H))
      }),
      Eo(() => {
        if (!U) return
        const Te = Al.bind(ft, Ao)
        let Ye = 0
        ne().revalidateOnFocus && (Ye = Date.now() + ne().focusThrottleInterval)
        const Me = X0(U, G, (mt, ot = {}) => {
          if (mt == Qh) {
            const Ke = Date.now()
            ne().revalidateOnFocus &&
              Ke > Ye &&
              Xe() &&
              ((Ye = Ke + ne().focusThrottleInterval), Te())
          } else if (mt == Zh) ne().revalidateOnReconnect && Xe() && Te()
          else {
            if (mt == Kh) return Al()
            if (mt == vh) return Al(ot)
          }
        })
        return (
          ($.current = !1),
          (re.current = U),
          (ee.current = !0),
          P({ _k: Z }),
          ll && (B[U] || (ge(V) || oa ? Te() : z0(Te))),
          () => {
            ;(($.current = !0), Me())
          }
        )
      }, [U]),
      Eo(() => {
        let Te
        function Ye() {
          const Me = el(v) ? v(Oe().data) : v
          Me && Te !== -1 && (Te = setTimeout(He, Me))
        }
        function He() {
          !Oe().error && (T || ne().isVisible()) && (b || ne().isOnline()) ? Al(Ao).then(Ye) : Ye()
        }
        return (
          Ye(),
          () => {
            Te && (clearTimeout(Te), (Te = -1))
          }
        )
      }, [v, T, b, U]),
      R.useDebugValue(ae),
      m)
    ) {
      if (!yh && oa && oe) throw new Error('Fallback data is required when using Suspense in SSR.')
      oe && ((k.current = r), (Se.current = s), ($.current = !1))
      const Te = j[U],
        Ye = !ge(Te) && oe ? $t(Te) : Sh
      if ((zo(Ye), !ge(Q) && oe)) throw Q
      const He = oe ? Al(Ao) : Sh
      ;(!ge(ae) && oe && ((He.status = 'fulfilled'), (He.value = !0)), zo(He))
    }
    return {
      mutate: $t,
      get data() {
        return ((Ee.data = !0), ae)
      },
      get error() {
        return ((Ee.error = !0), Q)
      },
      get isValidating() {
        return ((Ee.isValidating = !0), Tn)
      },
      get isLoading() {
        return ((Ee.isLoading = !0), va)
      },
    }
  },
  En = V0(Z0),
  K0 = (i) => fetch(i).then((r) => r.json())
async function Ph() {
  ;(await fetch('/api/auth/logout', { method: 'POST' }), Fh('/api/auth/me', { user: null }, !1))
}
function $o() {
  const { data: i, error: r, isLoading: s, mutate: c } = En('/api/auth/me', K0),
    f = () => {
      window.location.href = '/api/auth/github'
    },
    m = async () => {
      ;(await fetch('/api/auth/logout', { method: 'POST' }), c({ user: null }))
    }
  return {
    user: (i == null ? void 0 : i.user) || null,
    isLoading: s,
    error: r,
    login: f,
    logout: m,
    mutate: c,
  }
}
function ev(i) {
  var r,
    s,
    c = ''
  if (typeof i == 'string' || typeof i == 'number') c += i
  else if (typeof i == 'object')
    if (Array.isArray(i)) {
      var f = i.length
      for (r = 0; r < f; r++) i[r] && (s = ev(i[r])) && (c && (c += ' '), (c += s))
    } else for (s in i) i[s] && (c && (c += ' '), (c += s))
  return c
}
function tv() {
  for (var i, r, s = 0, c = '', f = arguments.length; s < f; s++)
    (i = arguments[s]) && (r = ev(i)) && (c && (c += ' '), (c += r))
  return c
}
const Wo = '-',
  J0 = (i) => {
    const r = $0(i),
      { conflictingClassGroups: s, conflictingClassGroupModifiers: c } = i
    return {
      getClassGroupId: (h) => {
        const y = h.split(Wo)
        return (y[0] === '' && y.length !== 1 && y.shift(), lv(y, r) || k0(h))
      },
      getConflictingClassGroupIds: (h, y) => {
        const g = s[h] || []
        return y && c[h] ? [...g, ...c[h]] : g
      },
    }
  },
  lv = (i, r) => {
    var h
    if (i.length === 0) return r.classGroupId
    const s = i[0],
      c = r.nextPart.get(s),
      f = c ? lv(i.slice(1), c) : void 0
    if (f) return f
    if (r.validators.length === 0) return
    const m = i.join(Wo)
    return (h = r.validators.find(({ validator: y }) => y(m))) == null ? void 0 : h.classGroupId
  },
  xh = /^\[(.+)\]$/,
  k0 = (i) => {
    if (xh.test(i)) {
      const r = xh.exec(i)[1],
        s = r == null ? void 0 : r.substring(0, r.indexOf(':'))
      if (s) return 'arbitrary..' + s
    }
  },
  $0 = (i) => {
    const { theme: r, prefix: s } = i,
      c = { nextPart: new Map(), validators: [] }
    return (
      F0(Object.entries(i.classGroups), s).forEach(([m, h]) => {
        Bo(h, c, m, r)
      }),
      c
    )
  },
  Bo = (i, r, s, c) => {
    i.forEach((f) => {
      if (typeof f == 'string') {
        const m = f === '' ? r : Eh(r, f)
        m.classGroupId = s
        return
      }
      if (typeof f == 'function') {
        if (W0(f)) {
          Bo(f(c), r, s, c)
          return
        }
        r.validators.push({ validator: f, classGroupId: s })
        return
      }
      Object.entries(f).forEach(([m, h]) => {
        Bo(h, Eh(r, m), s, c)
      })
    })
  },
  Eh = (i, r) => {
    let s = i
    return (
      r.split(Wo).forEach((c) => {
        ;(s.nextPart.has(c) || s.nextPart.set(c, { nextPart: new Map(), validators: [] }),
          (s = s.nextPart.get(c)))
      }),
      s
    )
  },
  W0 = (i) => i.isThemeGetter,
  F0 = (i, r) =>
    r
      ? i.map(([s, c]) => {
          const f = c.map((m) =>
            typeof m == 'string'
              ? r + m
              : typeof m == 'object'
                ? Object.fromEntries(Object.entries(m).map(([h, y]) => [r + h, y]))
                : m
          )
          return [s, f]
        })
      : i,
  I0 = (i) => {
    if (i < 1) return { get: () => {}, set: () => {} }
    let r = 0,
      s = new Map(),
      c = new Map()
    const f = (m, h) => {
      ;(s.set(m, h), r++, r > i && ((r = 0), (c = s), (s = new Map())))
    }
    return {
      get(m) {
        let h = s.get(m)
        if (h !== void 0) return h
        if ((h = c.get(m)) !== void 0) return (f(m, h), h)
      },
      set(m, h) {
        s.has(m) ? s.set(m, h) : f(m, h)
      },
    }
  },
  nv = '!',
  P0 = (i) => {
    const { separator: r, experimentalParseClassName: s } = i,
      c = r.length === 1,
      f = r[0],
      m = r.length,
      h = (y) => {
        const g = []
        let v = 0,
          T = 0,
          b
        for (let B = 0; B < y.length; B++) {
          let j = y[B]
          if (v === 0) {
            if (j === f && (c || y.slice(B, B + m) === r)) {
              ;(g.push(y.slice(T, B)), (T = B + m))
              continue
            }
            if (j === '/') {
              b = B
              continue
            }
          }
          j === '[' ? v++ : j === ']' && v--
        }
        const A = g.length === 0 ? y : y.substring(T),
          Y = A.startsWith(nv),
          G = Y ? A.substring(1) : A,
          q = b && b > T ? b - T : void 0
        return {
          modifiers: g,
          hasImportantModifier: Y,
          baseClassName: G,
          maybePostfixModifierPosition: q,
        }
      }
    return s ? (y) => s({ className: y, parseClassName: h }) : h
  },
  eb = (i) => {
    if (i.length <= 1) return i
    const r = []
    let s = []
    return (
      i.forEach((c) => {
        c[0] === '[' ? (r.push(...s.sort(), c), (s = [])) : s.push(c)
      }),
      r.push(...s.sort()),
      r
    )
  },
  tb = (i) => ({ cache: I0(i.cacheSize), parseClassName: P0(i), ...J0(i) }),
  lb = /\s+/,
  nb = (i, r) => {
    const { parseClassName: s, getClassGroupId: c, getConflictingClassGroupIds: f } = r,
      m = [],
      h = i.trim().split(lb)
    let y = ''
    for (let g = h.length - 1; g >= 0; g -= 1) {
      const v = h[g],
        {
          modifiers: T,
          hasImportantModifier: b,
          baseClassName: A,
          maybePostfixModifierPosition: Y,
        } = s(v)
      let G = !!Y,
        q = c(G ? A.substring(0, Y) : A)
      if (!q) {
        if (!G) {
          y = v + (y.length > 0 ? ' ' + y : y)
          continue
        }
        if (((q = c(A)), !q)) {
          y = v + (y.length > 0 ? ' ' + y : y)
          continue
        }
        G = !1
      }
      const B = eb(T).join(':'),
        j = b ? B + nv : B,
        U = j + q
      if (m.includes(U)) continue
      m.push(U)
      const Z = f(q, G)
      for (let ee = 0; ee < Z.length; ++ee) {
        const $ = Z[ee]
        m.push(j + $)
      }
      y = v + (y.length > 0 ? ' ' + y : y)
    }
    return y
  }
function ab() {
  let i = 0,
    r,
    s,
    c = ''
  for (; i < arguments.length; ) (r = arguments[i++]) && (s = av(r)) && (c && (c += ' '), (c += s))
  return c
}
const av = (i) => {
  if (typeof i == 'string') return i
  let r,
    s = ''
  for (let c = 0; c < i.length; c++) i[c] && (r = av(i[c])) && (s && (s += ' '), (s += r))
  return s
}
function ub(i, ...r) {
  let s,
    c,
    f,
    m = h
  function h(g) {
    const v = r.reduce((T, b) => b(T), i())
    return ((s = tb(v)), (c = s.cache.get), (f = s.cache.set), (m = y), y(g))
  }
  function y(g) {
    const v = c(g)
    if (v) return v
    const T = nb(g, s)
    return (f(g, T), T)
  }
  return function () {
    return m(ab.apply(null, arguments))
  }
}
const we = (i) => {
    const r = (s) => s[i] || []
    return ((r.isThemeGetter = !0), r)
  },
  uv = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  ib = /^\d+\/\d+$/,
  cb = new Set(['px', 'full', 'screen']),
  rb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  ob =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  sb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  fb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  db =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  xl = (i) => sa(i) || cb.has(i) || ib.test(i),
  Il = (i) => ha(i, 'length', Sb),
  sa = (i) => !!i && !Number.isNaN(Number(i)),
  No = (i) => ha(i, 'number', sa),
  hu = (i) => !!i && Number.isInteger(Number(i)),
  mb = (i) => i.endsWith('%') && sa(i.slice(0, -1)),
  ce = (i) => uv.test(i),
  Pl = (i) => rb.test(i),
  hb = new Set(['length', 'size', 'percentage']),
  vb = (i) => ha(i, hb, iv),
  gb = (i) => ha(i, 'position', iv),
  yb = new Set(['image', 'url']),
  pb = (i) => ha(i, yb, Eb),
  bb = (i) => ha(i, '', xb),
  vu = () => !0,
  ha = (i, r, s) => {
    const c = uv.exec(i)
    return c ? (c[1] ? (typeof r == 'string' ? c[1] === r : r.has(c[1])) : s(c[2])) : !1
  },
  Sb = (i) => ob.test(i) && !sb.test(i),
  iv = () => !1,
  xb = (i) => fb.test(i),
  Eb = (i) => db.test(i),
  Tb = () => {
    const i = we('colors'),
      r = we('spacing'),
      s = we('blur'),
      c = we('brightness'),
      f = we('borderColor'),
      m = we('borderRadius'),
      h = we('borderSpacing'),
      y = we('borderWidth'),
      g = we('contrast'),
      v = we('grayscale'),
      T = we('hueRotate'),
      b = we('invert'),
      A = we('gap'),
      Y = we('gradientColorStops'),
      G = we('gradientColorStopPositions'),
      q = we('inset'),
      B = we('margin'),
      j = we('opacity'),
      U = we('padding'),
      Z = we('saturate'),
      ee = we('scale'),
      $ = we('sepia'),
      re = we('skew'),
      k = we('space'),
      Se = we('translate'),
      ne = () => ['auto', 'contain', 'none'],
      Xe = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
      Oe = () => ['auto', ce, r],
      P = () => [ce, r],
      Qe = () => ['', xl, Il],
      Re = () => ['auto', sa, ce],
      Ee = () => [
        'bottom',
        'center',
        'left',
        'left-bottom',
        'left-top',
        'right',
        'right-bottom',
        'right-top',
        'top',
      ],
      D = () => ['solid', 'dashed', 'dotted', 'double', 'none'],
      X = () => [
        'normal',
        'multiply',
        'screen',
        'overlay',
        'darken',
        'lighten',
        'color-dodge',
        'color-burn',
        'hard-light',
        'soft-light',
        'difference',
        'exclusion',
        'hue',
        'saturation',
        'color',
        'luminosity',
      ],
      W = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'],
      se = () => ['', '0', ce],
      fe = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
      S = () => [sa, ce]
    return {
      cacheSize: 500,
      separator: ':',
      theme: {
        colors: [vu],
        spacing: [xl, Il],
        blur: ['none', '', Pl, ce],
        brightness: S(),
        borderColor: [i],
        borderRadius: ['none', '', 'full', Pl, ce],
        borderSpacing: P(),
        borderWidth: Qe(),
        contrast: S(),
        grayscale: se(),
        hueRotate: S(),
        invert: se(),
        gap: P(),
        gradientColorStops: [i],
        gradientColorStopPositions: [mb, Il],
        inset: Oe(),
        margin: Oe(),
        opacity: S(),
        padding: P(),
        saturate: S(),
        scale: S(),
        sepia: se(),
        skew: S(),
        space: P(),
        translate: P(),
      },
      classGroups: {
        aspect: [{ aspect: ['auto', 'square', 'video', ce] }],
        container: ['container'],
        columns: [{ columns: [Pl] }],
        'break-after': [{ 'break-after': fe() }],
        'break-before': [{ 'break-before': fe() }],
        'break-inside': [{ 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] }],
        'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
        box: [{ box: ['border', 'content'] }],
        display: [
          'block',
          'inline-block',
          'inline',
          'flex',
          'inline-flex',
          'table',
          'inline-table',
          'table-caption',
          'table-cell',
          'table-column',
          'table-column-group',
          'table-footer-group',
          'table-header-group',
          'table-row-group',
          'table-row',
          'flow-root',
          'grid',
          'inline-grid',
          'contents',
          'list-item',
          'hidden',
        ],
        float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
        clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
        isolation: ['isolate', 'isolation-auto'],
        'object-fit': [{ object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }],
        'object-position': [{ object: [...Ee(), ce] }],
        overflow: [{ overflow: Xe() }],
        'overflow-x': [{ 'overflow-x': Xe() }],
        'overflow-y': [{ 'overflow-y': Xe() }],
        overscroll: [{ overscroll: ne() }],
        'overscroll-x': [{ 'overscroll-x': ne() }],
        'overscroll-y': [{ 'overscroll-y': ne() }],
        position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
        inset: [{ inset: [q] }],
        'inset-x': [{ 'inset-x': [q] }],
        'inset-y': [{ 'inset-y': [q] }],
        start: [{ start: [q] }],
        end: [{ end: [q] }],
        top: [{ top: [q] }],
        right: [{ right: [q] }],
        bottom: [{ bottom: [q] }],
        left: [{ left: [q] }],
        visibility: ['visible', 'invisible', 'collapse'],
        z: [{ z: ['auto', hu, ce] }],
        basis: [{ basis: Oe() }],
        'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
        'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
        flex: [{ flex: ['1', 'auto', 'initial', 'none', ce] }],
        grow: [{ grow: se() }],
        shrink: [{ shrink: se() }],
        order: [{ order: ['first', 'last', 'none', hu, ce] }],
        'grid-cols': [{ 'grid-cols': [vu] }],
        'col-start-end': [{ col: ['auto', { span: ['full', hu, ce] }, ce] }],
        'col-start': [{ 'col-start': Re() }],
        'col-end': [{ 'col-end': Re() }],
        'grid-rows': [{ 'grid-rows': [vu] }],
        'row-start-end': [{ row: ['auto', { span: [hu, ce] }, ce] }],
        'row-start': [{ 'row-start': Re() }],
        'row-end': [{ 'row-end': Re() }],
        'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
        'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', ce] }],
        'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', ce] }],
        gap: [{ gap: [A] }],
        'gap-x': [{ 'gap-x': [A] }],
        'gap-y': [{ 'gap-y': [A] }],
        'justify-content': [{ justify: ['normal', ...W()] }],
        'justify-items': [{ 'justify-items': ['start', 'end', 'center', 'stretch'] }],
        'justify-self': [{ 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
        'align-content': [{ content: ['normal', ...W(), 'baseline'] }],
        'align-items': [{ items: ['start', 'end', 'center', 'baseline', 'stretch'] }],
        'align-self': [{ self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] }],
        'place-content': [{ 'place-content': [...W(), 'baseline'] }],
        'place-items': [{ 'place-items': ['start', 'end', 'center', 'baseline', 'stretch'] }],
        'place-self': [{ 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
        p: [{ p: [U] }],
        px: [{ px: [U] }],
        py: [{ py: [U] }],
        ps: [{ ps: [U] }],
        pe: [{ pe: [U] }],
        pt: [{ pt: [U] }],
        pr: [{ pr: [U] }],
        pb: [{ pb: [U] }],
        pl: [{ pl: [U] }],
        m: [{ m: [B] }],
        mx: [{ mx: [B] }],
        my: [{ my: [B] }],
        ms: [{ ms: [B] }],
        me: [{ me: [B] }],
        mt: [{ mt: [B] }],
        mr: [{ mr: [B] }],
        mb: [{ mb: [B] }],
        ml: [{ ml: [B] }],
        'space-x': [{ 'space-x': [k] }],
        'space-x-reverse': ['space-x-reverse'],
        'space-y': [{ 'space-y': [k] }],
        'space-y-reverse': ['space-y-reverse'],
        w: [{ w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', ce, r] }],
        'min-w': [{ 'min-w': [ce, r, 'min', 'max', 'fit'] }],
        'max-w': [
          { 'max-w': [ce, r, 'none', 'full', 'min', 'max', 'fit', 'prose', { screen: [Pl] }, Pl] },
        ],
        h: [{ h: [ce, r, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
        'min-h': [{ 'min-h': [ce, r, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
        'max-h': [{ 'max-h': [ce, r, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
        size: [{ size: [ce, r, 'auto', 'min', 'max', 'fit'] }],
        'font-size': [{ text: ['base', Pl, Il] }],
        'font-smoothing': ['antialiased', 'subpixel-antialiased'],
        'font-style': ['italic', 'not-italic'],
        'font-weight': [
          {
            font: [
              'thin',
              'extralight',
              'light',
              'normal',
              'medium',
              'semibold',
              'bold',
              'extrabold',
              'black',
              No,
            ],
          },
        ],
        'font-family': [{ font: [vu] }],
        'fvn-normal': ['normal-nums'],
        'fvn-ordinal': ['ordinal'],
        'fvn-slashed-zero': ['slashed-zero'],
        'fvn-figure': ['lining-nums', 'oldstyle-nums'],
        'fvn-spacing': ['proportional-nums', 'tabular-nums'],
        'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
        tracking: [{ tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', ce] }],
        'line-clamp': [{ 'line-clamp': ['none', sa, No] }],
        leading: [{ leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', xl, ce] }],
        'list-image': [{ 'list-image': ['none', ce] }],
        'list-style-type': [{ list: ['none', 'disc', 'decimal', ce] }],
        'list-style-position': [{ list: ['inside', 'outside'] }],
        'placeholder-color': [{ placeholder: [i] }],
        'placeholder-opacity': [{ 'placeholder-opacity': [j] }],
        'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
        'text-color': [{ text: [i] }],
        'text-opacity': [{ 'text-opacity': [j] }],
        'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
        'text-decoration-style': [{ decoration: [...D(), 'wavy'] }],
        'text-decoration-thickness': [{ decoration: ['auto', 'from-font', xl, Il] }],
        'underline-offset': [{ 'underline-offset': ['auto', xl, ce] }],
        'text-decoration-color': [{ decoration: [i] }],
        'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
        'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
        'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
        indent: [{ indent: P() }],
        'vertical-align': [
          {
            align: [
              'baseline',
              'top',
              'middle',
              'bottom',
              'text-top',
              'text-bottom',
              'sub',
              'super',
              ce,
            ],
          },
        ],
        whitespace: [
          { whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] },
        ],
        break: [{ break: ['normal', 'words', 'all', 'keep'] }],
        hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
        content: [{ content: ['none', ce] }],
        'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
        'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
        'bg-opacity': [{ 'bg-opacity': [j] }],
        'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
        'bg-position': [{ bg: [...Ee(), gb] }],
        'bg-repeat': [{ bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] }],
        'bg-size': [{ bg: ['auto', 'cover', 'contain', vb] }],
        'bg-image': [
          { bg: ['none', { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, pb] },
        ],
        'bg-color': [{ bg: [i] }],
        'gradient-from-pos': [{ from: [G] }],
        'gradient-via-pos': [{ via: [G] }],
        'gradient-to-pos': [{ to: [G] }],
        'gradient-from': [{ from: [Y] }],
        'gradient-via': [{ via: [Y] }],
        'gradient-to': [{ to: [Y] }],
        rounded: [{ rounded: [m] }],
        'rounded-s': [{ 'rounded-s': [m] }],
        'rounded-e': [{ 'rounded-e': [m] }],
        'rounded-t': [{ 'rounded-t': [m] }],
        'rounded-r': [{ 'rounded-r': [m] }],
        'rounded-b': [{ 'rounded-b': [m] }],
        'rounded-l': [{ 'rounded-l': [m] }],
        'rounded-ss': [{ 'rounded-ss': [m] }],
        'rounded-se': [{ 'rounded-se': [m] }],
        'rounded-ee': [{ 'rounded-ee': [m] }],
        'rounded-es': [{ 'rounded-es': [m] }],
        'rounded-tl': [{ 'rounded-tl': [m] }],
        'rounded-tr': [{ 'rounded-tr': [m] }],
        'rounded-br': [{ 'rounded-br': [m] }],
        'rounded-bl': [{ 'rounded-bl': [m] }],
        'border-w': [{ border: [y] }],
        'border-w-x': [{ 'border-x': [y] }],
        'border-w-y': [{ 'border-y': [y] }],
        'border-w-s': [{ 'border-s': [y] }],
        'border-w-e': [{ 'border-e': [y] }],
        'border-w-t': [{ 'border-t': [y] }],
        'border-w-r': [{ 'border-r': [y] }],
        'border-w-b': [{ 'border-b': [y] }],
        'border-w-l': [{ 'border-l': [y] }],
        'border-opacity': [{ 'border-opacity': [j] }],
        'border-style': [{ border: [...D(), 'hidden'] }],
        'divide-x': [{ 'divide-x': [y] }],
        'divide-x-reverse': ['divide-x-reverse'],
        'divide-y': [{ 'divide-y': [y] }],
        'divide-y-reverse': ['divide-y-reverse'],
        'divide-opacity': [{ 'divide-opacity': [j] }],
        'divide-style': [{ divide: D() }],
        'border-color': [{ border: [f] }],
        'border-color-x': [{ 'border-x': [f] }],
        'border-color-y': [{ 'border-y': [f] }],
        'border-color-s': [{ 'border-s': [f] }],
        'border-color-e': [{ 'border-e': [f] }],
        'border-color-t': [{ 'border-t': [f] }],
        'border-color-r': [{ 'border-r': [f] }],
        'border-color-b': [{ 'border-b': [f] }],
        'border-color-l': [{ 'border-l': [f] }],
        'divide-color': [{ divide: [f] }],
        'outline-style': [{ outline: ['', ...D()] }],
        'outline-offset': [{ 'outline-offset': [xl, ce] }],
        'outline-w': [{ outline: [xl, Il] }],
        'outline-color': [{ outline: [i] }],
        'ring-w': [{ ring: Qe() }],
        'ring-w-inset': ['ring-inset'],
        'ring-color': [{ ring: [i] }],
        'ring-opacity': [{ 'ring-opacity': [j] }],
        'ring-offset-w': [{ 'ring-offset': [xl, Il] }],
        'ring-offset-color': [{ 'ring-offset': [i] }],
        shadow: [{ shadow: ['', 'inner', 'none', Pl, bb] }],
        'shadow-color': [{ shadow: [vu] }],
        opacity: [{ opacity: [j] }],
        'mix-blend': [{ 'mix-blend': [...X(), 'plus-lighter', 'plus-darker'] }],
        'bg-blend': [{ 'bg-blend': X() }],
        filter: [{ filter: ['', 'none'] }],
        blur: [{ blur: [s] }],
        brightness: [{ brightness: [c] }],
        contrast: [{ contrast: [g] }],
        'drop-shadow': [{ 'drop-shadow': ['', 'none', Pl, ce] }],
        grayscale: [{ grayscale: [v] }],
        'hue-rotate': [{ 'hue-rotate': [T] }],
        invert: [{ invert: [b] }],
        saturate: [{ saturate: [Z] }],
        sepia: [{ sepia: [$] }],
        'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
        'backdrop-blur': [{ 'backdrop-blur': [s] }],
        'backdrop-brightness': [{ 'backdrop-brightness': [c] }],
        'backdrop-contrast': [{ 'backdrop-contrast': [g] }],
        'backdrop-grayscale': [{ 'backdrop-grayscale': [v] }],
        'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [T] }],
        'backdrop-invert': [{ 'backdrop-invert': [b] }],
        'backdrop-opacity': [{ 'backdrop-opacity': [j] }],
        'backdrop-saturate': [{ 'backdrop-saturate': [Z] }],
        'backdrop-sepia': [{ 'backdrop-sepia': [$] }],
        'border-collapse': [{ border: ['collapse', 'separate'] }],
        'border-spacing': [{ 'border-spacing': [h] }],
        'border-spacing-x': [{ 'border-spacing-x': [h] }],
        'border-spacing-y': [{ 'border-spacing-y': [h] }],
        'table-layout': [{ table: ['auto', 'fixed'] }],
        caption: [{ caption: ['top', 'bottom'] }],
        transition: [
          { transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', ce] },
        ],
        duration: [{ duration: S() }],
        ease: [{ ease: ['linear', 'in', 'out', 'in-out', ce] }],
        delay: [{ delay: S() }],
        animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', ce] }],
        transform: [{ transform: ['', 'gpu', 'none'] }],
        scale: [{ scale: [ee] }],
        'scale-x': [{ 'scale-x': [ee] }],
        'scale-y': [{ 'scale-y': [ee] }],
        rotate: [{ rotate: [hu, ce] }],
        'translate-x': [{ 'translate-x': [Se] }],
        'translate-y': [{ 'translate-y': [Se] }],
        'skew-x': [{ 'skew-x': [re] }],
        'skew-y': [{ 'skew-y': [re] }],
        'transform-origin': [
          {
            origin: [
              'center',
              'top',
              'top-right',
              'right',
              'bottom-right',
              'bottom',
              'bottom-left',
              'left',
              'top-left',
              ce,
            ],
          },
        ],
        accent: [{ accent: ['auto', i] }],
        appearance: [{ appearance: ['none', 'auto'] }],
        cursor: [
          {
            cursor: [
              'auto',
              'default',
              'pointer',
              'wait',
              'text',
              'move',
              'help',
              'not-allowed',
              'none',
              'context-menu',
              'progress',
              'cell',
              'crosshair',
              'vertical-text',
              'alias',
              'copy',
              'no-drop',
              'grab',
              'grabbing',
              'all-scroll',
              'col-resize',
              'row-resize',
              'n-resize',
              'e-resize',
              's-resize',
              'w-resize',
              'ne-resize',
              'nw-resize',
              'se-resize',
              'sw-resize',
              'ew-resize',
              'ns-resize',
              'nesw-resize',
              'nwse-resize',
              'zoom-in',
              'zoom-out',
              ce,
            ],
          },
        ],
        'caret-color': [{ caret: [i] }],
        'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
        resize: [{ resize: ['none', 'y', 'x', ''] }],
        'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
        'scroll-m': [{ 'scroll-m': P() }],
        'scroll-mx': [{ 'scroll-mx': P() }],
        'scroll-my': [{ 'scroll-my': P() }],
        'scroll-ms': [{ 'scroll-ms': P() }],
        'scroll-me': [{ 'scroll-me': P() }],
        'scroll-mt': [{ 'scroll-mt': P() }],
        'scroll-mr': [{ 'scroll-mr': P() }],
        'scroll-mb': [{ 'scroll-mb': P() }],
        'scroll-ml': [{ 'scroll-ml': P() }],
        'scroll-p': [{ 'scroll-p': P() }],
        'scroll-px': [{ 'scroll-px': P() }],
        'scroll-py': [{ 'scroll-py': P() }],
        'scroll-ps': [{ 'scroll-ps': P() }],
        'scroll-pe': [{ 'scroll-pe': P() }],
        'scroll-pt': [{ 'scroll-pt': P() }],
        'scroll-pr': [{ 'scroll-pr': P() }],
        'scroll-pb': [{ 'scroll-pb': P() }],
        'scroll-pl': [{ 'scroll-pl': P() }],
        'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
        'snap-stop': [{ snap: ['normal', 'always'] }],
        'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
        'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
        touch: [{ touch: ['auto', 'none', 'manipulation'] }],
        'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
        'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
        'touch-pz': ['touch-pinch-zoom'],
        select: [{ select: ['none', 'text', 'all', 'auto'] }],
        'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', ce] }],
        fill: [{ fill: [i, 'none'] }],
        'stroke-w': [{ stroke: [xl, Il, No] }],
        stroke: [{ stroke: [i, 'none'] }],
        sr: ['sr-only', 'not-sr-only'],
        'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
      },
      conflictingClassGroups: {
        overflow: ['overflow-x', 'overflow-y'],
        overscroll: ['overscroll-x', 'overscroll-y'],
        inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
        'inset-x': ['right', 'left'],
        'inset-y': ['top', 'bottom'],
        flex: ['basis', 'grow', 'shrink'],
        gap: ['gap-x', 'gap-y'],
        p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
        px: ['pr', 'pl'],
        py: ['pt', 'pb'],
        m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
        mx: ['mr', 'ml'],
        my: ['mt', 'mb'],
        size: ['w', 'h'],
        'font-size': ['leading'],
        'fvn-normal': [
          'fvn-ordinal',
          'fvn-slashed-zero',
          'fvn-figure',
          'fvn-spacing',
          'fvn-fraction',
        ],
        'fvn-ordinal': ['fvn-normal'],
        'fvn-slashed-zero': ['fvn-normal'],
        'fvn-figure': ['fvn-normal'],
        'fvn-spacing': ['fvn-normal'],
        'fvn-fraction': ['fvn-normal'],
        'line-clamp': ['display', 'overflow'],
        rounded: [
          'rounded-s',
          'rounded-e',
          'rounded-t',
          'rounded-r',
          'rounded-b',
          'rounded-l',
          'rounded-ss',
          'rounded-se',
          'rounded-ee',
          'rounded-es',
          'rounded-tl',
          'rounded-tr',
          'rounded-br',
          'rounded-bl',
        ],
        'rounded-s': ['rounded-ss', 'rounded-es'],
        'rounded-e': ['rounded-se', 'rounded-ee'],
        'rounded-t': ['rounded-tl', 'rounded-tr'],
        'rounded-r': ['rounded-tr', 'rounded-br'],
        'rounded-b': ['rounded-br', 'rounded-bl'],
        'rounded-l': ['rounded-tl', 'rounded-bl'],
        'border-spacing': ['border-spacing-x', 'border-spacing-y'],
        'border-w': [
          'border-w-s',
          'border-w-e',
          'border-w-t',
          'border-w-r',
          'border-w-b',
          'border-w-l',
        ],
        'border-w-x': ['border-w-r', 'border-w-l'],
        'border-w-y': ['border-w-t', 'border-w-b'],
        'border-color': [
          'border-color-s',
          'border-color-e',
          'border-color-t',
          'border-color-r',
          'border-color-b',
          'border-color-l',
        ],
        'border-color-x': ['border-color-r', 'border-color-l'],
        'border-color-y': ['border-color-t', 'border-color-b'],
        'scroll-m': [
          'scroll-mx',
          'scroll-my',
          'scroll-ms',
          'scroll-me',
          'scroll-mt',
          'scroll-mr',
          'scroll-mb',
          'scroll-ml',
        ],
        'scroll-mx': ['scroll-mr', 'scroll-ml'],
        'scroll-my': ['scroll-mt', 'scroll-mb'],
        'scroll-p': [
          'scroll-px',
          'scroll-py',
          'scroll-ps',
          'scroll-pe',
          'scroll-pt',
          'scroll-pr',
          'scroll-pb',
          'scroll-pl',
        ],
        'scroll-px': ['scroll-pr', 'scroll-pl'],
        'scroll-py': ['scroll-pt', 'scroll-pb'],
        touch: ['touch-x', 'touch-y', 'touch-pz'],
        'touch-x': ['touch'],
        'touch-y': ['touch'],
        'touch-pz': ['touch'],
      },
      conflictingClassGroupModifiers: { 'font-size': ['leading'] },
    }
  },
  Rb = ub(Tb)
function Fo(...i) {
  return Rb(tv(i))
}
const Su = R.forwardRef(({ className: i, type: r, ...s }, c) =>
  E.jsx('input', {
    type: r,
    className: Fo(
      'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
      i
    ),
    ref: c,
    ...s,
  })
)
Su.displayName = 'Input'
function Th(i, r) {
  if (typeof i == 'function') return i(r)
  i != null && (i.current = r)
}
function zb(...i) {
  return (r) => {
    let s = !1
    const c = i.map((f) => {
      const m = Th(f, r)
      return (!s && typeof m == 'function' && (s = !0), m)
    })
    if (s)
      return () => {
        for (let f = 0; f < c.length; f++) {
          const m = c[f]
          typeof m == 'function' ? m() : Th(i[f], null)
        }
      }
  }
}
var cv = R.forwardRef((i, r) => {
  const { children: s, ...c } = i,
    f = R.Children.toArray(s),
    m = f.find(Nb)
  if (m) {
    const h = m.props.children,
      y = f.map((g) =>
        g === m
          ? R.Children.count(h) > 1
            ? R.Children.only(null)
            : R.isValidElement(h)
              ? h.props.children
              : null
          : g
      )
    return E.jsx(qo, {
      ...c,
      ref: r,
      children: R.isValidElement(h) ? R.cloneElement(h, void 0, y) : null,
    })
  }
  return E.jsx(qo, { ...c, ref: r, children: s })
})
cv.displayName = 'Slot'
var qo = R.forwardRef((i, r) => {
  const { children: s, ...c } = i
  if (R.isValidElement(s)) {
    const f = Cb(s)
    return R.cloneElement(s, { ..._b(c, s.props), ref: r ? zb(r, f) : f })
  }
  return R.Children.count(s) > 1 ? R.Children.only(null) : null
})
qo.displayName = 'SlotClone'
var Ab = ({ children: i }) => E.jsx(E.Fragment, { children: i })
function Nb(i) {
  return R.isValidElement(i) && i.type === Ab
}
function _b(i, r) {
  const s = { ...r }
  for (const c in r) {
    const f = i[c],
      m = r[c]
    ;/^on[A-Z]/.test(c)
      ? f && m
        ? (s[c] = (...y) => {
            ;(m(...y), f(...y))
          })
        : f && (s[c] = f)
      : c === 'style'
        ? (s[c] = { ...f, ...m })
        : c === 'className' && (s[c] = [f, m].filter(Boolean).join(' '))
  }
  return { ...i, ...s }
}
function Cb(i) {
  var c, f
  let r = (c = Object.getOwnPropertyDescriptor(i.props, 'ref')) == null ? void 0 : c.get,
    s = r && 'isReactWarning' in r && r.isReactWarning
  return s
    ? i.ref
    : ((r = (f = Object.getOwnPropertyDescriptor(i, 'ref')) == null ? void 0 : f.get),
      (s = r && 'isReactWarning' in r && r.isReactWarning),
      s ? i.props.ref : i.props.ref || i.ref)
}
const Rh = (i) => (typeof i == 'boolean' ? `${i}` : i === 0 ? '0' : i),
  zh = tv,
  Ob = (i, r) => (s) => {
    var c
    if ((r == null ? void 0 : r.variants) == null)
      return zh(i, s == null ? void 0 : s.class, s == null ? void 0 : s.className)
    const { variants: f, defaultVariants: m } = r,
      h = Object.keys(f).map((v) => {
        const T = s == null ? void 0 : s[v],
          b = m == null ? void 0 : m[v]
        if (T === null) return null
        const A = Rh(T) || Rh(b)
        return f[v][A]
      }),
      y =
        s &&
        Object.entries(s).reduce((v, T) => {
          let [b, A] = T
          return (A === void 0 || (v[b] = A), v)
        }, {}),
      g =
        r == null || (c = r.compoundVariants) === null || c === void 0
          ? void 0
          : c.reduce((v, T) => {
              let { class: b, className: A, ...Y } = T
              return Object.entries(Y).every((G) => {
                let [q, B] = G
                return Array.isArray(B) ? B.includes({ ...m, ...y }[q]) : { ...m, ...y }[q] === B
              })
                ? [...v, b, A]
                : v
            }, [])
    return zh(i, h, g, s == null ? void 0 : s.class, s == null ? void 0 : s.className)
  },
  Db = Ob(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    {
      variants: {
        variant: {
          default: 'bg-primary text-primary-foreground hover:bg-primary/90',
          destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
          outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
          secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
          ghost: 'hover:bg-accent hover:text-accent-foreground',
          link: 'text-primary underline-offset-4 hover:underline',
        },
        size: {
          default: 'h-10 px-4 py-2',
          sm: 'h-9 rounded-md px-3',
          lg: 'h-11 rounded-md px-8',
          icon: 'h-10 w-10',
        },
      },
      defaultVariants: { variant: 'default', size: 'default' },
    }
  ),
  xt = R.forwardRef(({ className: i, variant: r, size: s, asChild: c = !1, ...f }, m) => {
    const h = c ? cv : 'button'
    return E.jsx(h, { className: Fo(Db({ variant: r, size: s, className: i })), ref: m, ...f })
  })
xt.displayName = 'Button'
function Mb() {
  const [i, r] = R.useState(''),
    [s, c] = R.useState(''),
    [f, m] = R.useState([]),
    [h, y] = R.useState(-1),
    g = Vo(),
    { user: v, isLoading: T, login: b, logout: A } = $o(),
    Y = R.useRef(null)
  R.useEffect(() => {
    var ee
    const j = i.trim().replace(/^https?:\/\/github\.com\//, '')
    if (j.length < 2) {
      ;(m([]), y(-1))
      return
    }
    ;(ee = Y.current) == null || ee.abort()
    const U = new AbortController()
    Y.current = U
    const Z = setTimeout(() => {
      fetch(`/api/search?q=${encodeURIComponent(j)}`, { signal: U.signal })
        .then(($) => $.json())
        .then(($) => {
          ;(m($.results), y(-1))
        })
        .catch(() => {})
    }, 150)
    return () => {
      ;(clearTimeout(Z), U.abort())
    }
  }, [i])
  function G(j) {
    c('')
    const Z = j
      .trim()
      .replace(/^https?:\/\/github\.com\//, '')
      .split('/')
      .filter(Boolean)
    if (Z.length < 2) {
      c('Enter a valid repo like owner/repo')
      return
    }
    g(`/${Z[0]}/${Z[1]}`)
  }
  function q(j) {
    if ((j.preventDefault(), h >= 0 && h < f.length)) {
      const U = f[h]
      g(`/${U.repo_owner}/${U.repo_name}`)
      return
    }
    G(i)
  }
  function B(j) {
    f.length !== 0 &&
      (j.key === 'ArrowDown'
        ? (j.preventDefault(), y((U) => (U < f.length - 1 ? U + 1 : 0)))
        : j.key === 'ArrowUp' && (j.preventDefault(), y((U) => (U > 0 ? U - 1 : f.length - 1))))
  }
  return E.jsx('main', {
    className: 'flex min-h-screen flex-col items-center justify-center px-4',
    children: E.jsxs('div', {
      className: 'w-full max-w-md flex flex-col items-center gap-6',
      children: [
        E.jsxs('div', {
          className: 'flex flex-col items-center gap-3',
          children: [
            E.jsx('img', { src: h0, alt: 'gitrep logo', className: 'w-24 h-24' }),
            E.jsx('h1', {
              className: 'text-3xl font-mono font-bold tracking-tight',
              children: 'gitrep',
            }),
          ],
        }),
        E.jsx('p', {
          className: 'text-sm text-muted-foreground text-center',
          children: 'Reputation for GitHub repositories.',
        }),
        E.jsxs('form', {
          onSubmit: q,
          className: 'w-full flex flex-col gap-3 relative',
          children: [
            E.jsx(Su, {
              placeholder: 'owner/repo or GitHub URL',
              value: i,
              onChange: (j) => r(j.target.value),
              onKeyDown: B,
              className: 'font-mono text-sm',
              autoFocus: !0,
            }),
            f.length > 0 &&
              E.jsx('ul', {
                className:
                  'absolute top-full left-0 right-0 z-10 mt-1 border border-border rounded-md bg-background overflow-hidden shadow-lg',
                children: f.map((j, U) =>
                  E.jsx(
                    'li',
                    {
                      children: E.jsxs('button', {
                        type: 'button',
                        onClick: () => g(`/${j.repo_owner}/${j.repo_name}`),
                        onMouseEnter: () => y(U),
                        className: `w-full px-3 py-2 flex items-center justify-between text-left text-sm font-mono transition-colors ${U === h ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'}`,
                        children: [
                          E.jsxs('span', {
                            children: [
                              E.jsx('span', {
                                className: 'text-muted-foreground',
                                children: j.repo_owner,
                              }),
                              E.jsx('span', { className: 'text-muted-foreground', children: '/' }),
                              E.jsx('span', { className: 'font-semibold', children: j.repo_name }),
                            ],
                          }),
                          E.jsx('span', {
                            className: `text-xs ${j.score > 0 ? 'text-success' : j.score < 0 ? 'text-destructive' : 'text-muted-foreground'}`,
                            children: j.score > 0 ? `+${j.score}` : j.score,
                          }),
                        ],
                      }),
                    },
                    `${j.repo_owner}/${j.repo_name}`
                  )
                ),
              }),
            s && E.jsx('p', { className: 'text-xs text-destructive', children: s }),
            E.jsx(xt, { type: 'submit', className: 'w-full', children: 'Go' }),
          ],
        }),
        E.jsx('div', {
          className: 'pt-2',
          children: T
            ? E.jsx('p', { className: 'text-xs text-muted-foreground', children: 'Loading...' })
            : v
              ? E.jsxs('div', {
                  className: 'flex items-center gap-3',
                  children: [
                    E.jsxs('span', {
                      className: 'text-xs text-muted-foreground',
                      children: [
                        'Signed in as ',
                        E.jsx('span', {
                          className: 'font-mono text-foreground',
                          children: v.username,
                        }),
                      ],
                    }),
                    v.is_admin &&
                      E.jsx(xn, {
                        to: '/admin',
                        className: 'text-xs text-muted-foreground underline hover:text-foreground',
                        children: 'Admin',
                      }),
                    E.jsx('button', {
                      onClick: A,
                      className: 'text-xs text-muted-foreground underline hover:text-foreground',
                      children: 'Sign out',
                    }),
                  ],
                })
              : E.jsx('button', {
                  onClick: b,
                  className: 'text-xs text-muted-foreground underline hover:text-foreground',
                  children: 'Sign in with GitHub',
                }),
        }),
      ],
    }),
  })
}
function jb(i, r, s) {
  const c = R.useRef(null),
    f = R.useRef(s)
  ;((f.current = s),
    R.useEffect(() => {
      if (!i || !r) return
      const y = location.protocol === 'https:' ? 'wss:' : 'ws:',
        g = new WebSocket(`${y}//${location.host}/ws/repos/${i}/${r}`)
      return (
        (c.current = g),
        (g.onmessage = (v) => {
          try {
            const T = JSON.parse(v.data)
            T.type === 'rep_update'
              ? f.current.onRepUpdate(T.reputation)
              : T.type === 'vote_ok'
                ? f.current.onVoteOk(T.userRep)
                : T.type === 'error' && f.current.onError(T.error)
          } catch {}
        }),
        () => {
          ;((c.current = null), g.close())
        }
      )
    }, [i, r]))
  const m = R.useCallback((y) => {
      var g
      ;(g = c.current) == null || g.send(JSON.stringify({ action: 'vote', type: y }))
    }, []),
    h = R.useCallback(() => {
      var y
      ;(y = c.current) == null || y.send(JSON.stringify({ action: 'remove' }))
    }, [])
  return { sendVote: m, sendRemove: h }
}
function Ub({ user: i, userRep: r, onLogin: s, onVote: c, onRemove: f }) {
  const m = (r == null ? void 0 : r.type) ?? null
  return i
    ? E.jsx('div', {
        className: 'border border-border rounded-md p-4 flex flex-col gap-3',
        children: E.jsxs('div', {
          className: 'flex items-center gap-2',
          children: [
            E.jsx(xt, {
              variant: m === 'positive' ? 'default' : 'outline',
              size: 'sm',
              onClick: () => c('positive'),
              className:
                m === 'positive' ? 'bg-success text-success-foreground hover:bg-success/90' : '',
              children: 'rep+',
            }),
            E.jsx(xt, {
              variant: m === 'negative' ? 'default' : 'outline',
              size: 'sm',
              onClick: () => c('negative'),
              className:
                m === 'negative'
                  ? 'bg-destructive text-destructive-foreground hover:bg-destructive/90'
                  : '',
              children: 'rep-',
            }),
            m &&
              E.jsx('button', {
                onClick: f,
                className: 'text-xs text-muted-foreground underline hover:text-foreground ml-2',
                children: 'remove',
              }),
          ],
        }),
      })
    : E.jsx('div', {
        className: 'border border-border rounded-md p-4',
        children: E.jsxs('p', {
          className: 'text-sm text-muted-foreground',
          children: [
            E.jsx('button', {
              onClick: s,
              className: 'underline hover:text-foreground',
              children: 'Sign in with GitHub',
            }),
            ' ',
            'to vote.',
          ],
        }),
      })
}
const rv = R.forwardRef(({ className: i, ...r }, s) =>
  E.jsx('textarea', {
    className: Fo(
      'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
      i
    ),
    ref: s,
    ...r,
  })
)
rv.displayName = 'Textarea'
function wb({ owner: i, repo: r, user: s, onUpdate: c }) {
  const [f, m] = R.useState(''),
    [h, y] = R.useState(!1),
    [g, v] = R.useState(null)
  if (!s) return null
  async function T() {
    const b = f.trim()
    if (b) {
      ;(y(!0), v(null))
      try {
        const A = await fetch(`/api/repos/${i}/${r}/comments`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content: b }),
        })
        if (A.status === 401) {
          await Ph()
          return
        }
        if (!A.ok) throw new Error('Failed to post comment')
        ;(m(''), c())
      } catch {
        v('Failed to post comment. Please try again.')
      } finally {
        y(!1)
      }
    }
  }
  return E.jsxs('div', {
    className: 'flex flex-col gap-3',
    children: [
      E.jsx(rv, {
        placeholder: 'Leave a comment (max 500 chars)',
        value: f,
        onChange: (b) => m(b.target.value.slice(0, 500)),
        rows: 3,
        className: 'text-sm resize-none',
      }),
      E.jsxs('div', {
        className: 'flex items-center gap-2',
        children: [
          E.jsx(xt, {
            size: 'sm',
            onClick: T,
            disabled: !f.trim() || h,
            children: h ? 'Posting...' : 'Comment',
          }),
          E.jsxs('span', {
            className: 'text-xs text-muted-foreground',
            children: [f.length, '/500'],
          }),
        ],
      }),
      g && E.jsx('p', { className: 'text-xs text-destructive', children: g }),
    ],
  })
}
function Hb({ owner: i, repo: r, comments: s, isLoading: c, user: f, onUpdate: m }) {
  const [h, y] = R.useState(null)
  if (c)
    return E.jsx('div', {
      className: 'text-sm text-muted-foreground',
      children: 'Loading comments...',
    })
  if (s.length === 0)
    return E.jsx('p', { className: 'text-sm text-muted-foreground', children: 'No comments yet.' })
  async function g(v) {
    y(v)
    try {
      const T = await fetch(`/api/repos/${i}/${r}/comments`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ commentId: v }),
      })
      if (T.status === 401) {
        await Ph()
        return
      }
      T.ok && m()
    } finally {
      y(null)
    }
  }
  return E.jsxs('div', {
    className: 'flex flex-col gap-4',
    children: [
      E.jsxs('h2', {
        className: 'text-xs font-mono text-muted-foreground uppercase tracking-wider',
        children: ['Comments (', s.length, ')'],
      }),
      E.jsx('div', {
        className: 'flex flex-col gap-3',
        children: s.map((v) =>
          E.jsxs(
            'div',
            {
              className: 'border border-border rounded-md p-3 flex flex-col gap-2',
              children: [
                E.jsxs('div', {
                  className: 'flex items-center justify-between',
                  children: [
                    E.jsxs('div', {
                      className: 'flex items-center gap-2',
                      children: [
                        v.avatar_url &&
                          E.jsx('img', {
                            src: v.avatar_url,
                            alt: `${v.username}'s avatar`,
                            className: 'w-5 h-5 rounded-full',
                          }),
                        E.jsx('span', { className: 'text-sm font-mono', children: v.username }),
                      ],
                    }),
                    E.jsxs('div', {
                      className: 'flex items-center gap-2',
                      children: [
                        E.jsx('time', {
                          className: 'text-xs text-muted-foreground',
                          children: new Date(v.created_at).toLocaleDateString(),
                        }),
                        f &&
                          f.id === v.user_id &&
                          E.jsx('button', {
                            onClick: () => g(v.id),
                            disabled: h === v.id,
                            className:
                              'text-xs text-destructive underline hover:text-destructive/80',
                            children: 'delete',
                          }),
                      ],
                    }),
                  ],
                }),
                E.jsx('p', { className: 'text-sm text-foreground', children: v.content }),
              ],
            },
            v.id
          )
        ),
      }),
    ],
  })
}
const Lb = (i) => fetch(i).then((r) => r.json())
async function Bb(i, r) {
  try {
    return (
      await fetch(`https://api.github.com/repos/${i}/${r}`, {
        method: 'HEAD',
        headers: { 'User-Agent': 'gitrep' },
      })
    ).ok
  } catch {
    return !1
  }
}
function qb() {
  const { owner: i, repo: r } = pp(),
    { user: s, isLoading: c, login: f, logout: m } = $o(),
    [h, y] = R.useState(null)
  R.useEffect(() => {
    i && r && Bb(i, r).then(y)
  }, [i, r])
  const { data: g, isLoading: v, mutate: T } = En(i && r ? `/api/repos/${i}/${r}` : null, Lb),
    b = R.useCallback(
      (j) => {
        T((U) => U && { ...U, reputation: j }, !1)
      },
      [T]
    ),
    A = R.useCallback(
      (j) => {
        T((U) => U && { ...U, userRep: j }, !1)
      },
      [T]
    ),
    Y = R.useCallback((j) => {
      console.error('WebSocket error:', j)
    }, []),
    { sendVote: G, sendRemove: q } = jb(i, r, { onRepUpdate: b, onVoteOk: A, onError: Y })
  if (!i || !r) return null
  if (h === !1)
    return E.jsx('main', {
      className: 'flex min-h-screen flex-col items-center justify-center px-4',
      children: E.jsxs('div', {
        className: 'text-center',
        children: [
          E.jsx('h1', { className: 'text-2xl font-bold mb-2', children: 'Repository not found' }),
          E.jsxs('p', {
            className: 'text-muted-foreground mb-4',
            children: ['The repository ', i, '/', r, ' does not exist on GitHub.'],
          }),
          E.jsx(xn, { to: '/', className: 'text-primary underline', children: 'Go back home' }),
        ],
      }),
    })
  const B = g ? g.reputation.positive - g.reputation.negative : 0
  return E.jsx('main', {
    className: 'min-h-screen px-4 py-12',
    children: E.jsxs('div', {
      className: 'mx-auto w-full max-w-lg flex flex-col gap-8',
      children: [
        E.jsxs('div', {
          className: 'flex items-center justify-between',
          children: [
            E.jsx(xn, {
              to: '/',
              className: 'text-sm font-mono font-bold text-muted-foreground hover:text-foreground',
              children: 'gitrep',
            }),
            c
              ? null
              : s
                ? E.jsxs('div', {
                    className: 'flex items-center gap-3',
                    children: [
                      E.jsx('span', {
                        className: 'text-xs text-muted-foreground font-mono',
                        children: s.username,
                      }),
                      s.is_admin &&
                        E.jsx(xn, {
                          to: '/admin',
                          className:
                            'text-xs text-muted-foreground underline hover:text-foreground',
                          children: 'admin',
                        }),
                      E.jsx('button', {
                        onClick: m,
                        className: 'text-xs text-muted-foreground underline hover:text-foreground',
                        children: 'sign out',
                      }),
                    ],
                  })
                : E.jsx('button', {
                    onClick: f,
                    className: 'text-xs text-muted-foreground underline hover:text-foreground',
                    children: 'sign in',
                  }),
          ],
        }),
        E.jsx('div', {
          className: 'flex flex-col gap-1',
          children: E.jsxs('a', {
            href: `https://github.com/${i}/${r}`,
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'font-mono text-lg hover:underline',
            children: [
              E.jsx('span', { className: 'text-muted-foreground', children: i }),
              E.jsx('span', { className: 'text-muted-foreground', children: '/' }),
              E.jsx('span', { className: 'text-foreground font-semibold', children: r }),
            ],
          }),
        }),
        v
          ? E.jsx('div', {
              className: 'h-16 flex items-center',
              children: E.jsx('span', {
                className: 'text-sm text-muted-foreground',
                children: 'Loading...',
              }),
            })
          : E.jsxs('div', {
              className: 'flex items-baseline gap-4',
              children: [
                E.jsx('span', {
                  className: `font-mono text-4xl font-bold ${B > 0 ? 'text-success' : B < 0 ? 'text-destructive' : 'text-muted-foreground'}`,
                  children: B > 0 ? `+${B}` : B,
                }),
                E.jsxs('div', {
                  className: 'flex items-center gap-3 text-xs text-muted-foreground font-mono',
                  children: [
                    E.jsxs('span', {
                      className: 'text-success',
                      children: ['+', (g == null ? void 0 : g.reputation.positive) ?? 0],
                    }),
                    E.jsxs('span', {
                      className: 'text-destructive',
                      children: ['-', (g == null ? void 0 : g.reputation.negative) ?? 0],
                    }),
                  ],
                }),
              ],
            }),
        E.jsx(Ub, {
          user: s,
          userRep: (g == null ? void 0 : g.userRep) ?? null,
          onLogin: f,
          onVote: G,
          onRemove: q,
        }),
        E.jsx(wb, { owner: i, repo: r, user: s, onUpdate: () => T() }),
        E.jsx(Hb, {
          owner: i,
          repo: r,
          comments: (g == null ? void 0 : g.comments) ?? [],
          isLoading: v,
          user: s,
          onUpdate: () => T(),
        }),
      ],
    }),
  })
}
const Yb = (i) => fetch(i).then((r) => r.json())
function Gb() {
  const { data: i, isLoading: r } = En('/api/admin/stats', Yb)
  return r
    ? E.jsx('p', { className: 'text-sm text-muted-foreground', children: 'Loading stats...' })
    : E.jsx('div', {
        className: 'grid grid-cols-2 gap-4',
        children: [
          { label: 'Users', value: (i == null ? void 0 : i.total_users) ?? 0 },
          { label: 'Comments', value: (i == null ? void 0 : i.total_comments) ?? 0 },
          { label: 'Votes', value: (i == null ? void 0 : i.total_votes) ?? 0 },
          { label: 'Banned', value: (i == null ? void 0 : i.banned_users) ?? 0 },
        ].map((s) =>
          E.jsxs(
            'div',
            {
              className: 'border border-border rounded-md p-4',
              children: [
                E.jsx('p', { className: 'text-xs text-muted-foreground', children: s.label }),
                E.jsx('p', { className: 'text-2xl font-mono font-bold', children: s.value }),
              ],
            },
            s.label
          )
        ),
      })
}
const Vb = (i) => fetch(i).then((r) => r.json())
function Xb() {
  var b
  const [i, r] = R.useState(1),
    [s, c] = R.useState(''),
    [f, m] = R.useState(''),
    {
      data: h,
      mutate: y,
      isLoading: g,
    } = En(`/api/admin/users?page=${i}${f ? `&q=${encodeURIComponent(f)}` : ''}`, Vb)
  async function v(A, Y) {
    ;(Y
      ? await fetch(`/api/admin/users/${A}/ban`, { method: 'DELETE' })
      : await fetch(`/api/admin/users/${A}/ban`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ reason: 'Banned by admin' }),
        }),
      y())
  }
  const T = Math.ceil(((h == null ? void 0 : h.total) ?? 0) / 20)
  return E.jsxs('div', {
    className: 'flex flex-col gap-4',
    children: [
      E.jsxs('form', {
        onSubmit: (A) => {
          ;(A.preventDefault(), m(s), r(1))
        },
        className: 'flex gap-2',
        children: [
          E.jsx(Su, {
            placeholder: 'Search users...',
            value: s,
            onChange: (A) => c(A.target.value),
            className: 'font-mono text-sm',
          }),
          E.jsx(xt, { type: 'submit', variant: 'outline', children: 'Search' }),
        ],
      }),
      g
        ? E.jsx('p', { className: 'text-sm text-muted-foreground', children: 'Loading...' })
        : E.jsx('div', {
            className: 'border border-border rounded-md overflow-hidden',
            children: E.jsxs('table', {
              className: 'w-full text-sm',
              children: [
                E.jsx('thead', {
                  className: 'bg-muted/50',
                  children: E.jsxs('tr', {
                    children: [
                      E.jsx('th', { className: 'text-left p-2 font-mono', children: 'ID' }),
                      E.jsx('th', { className: 'text-left p-2 font-mono', children: 'Username' }),
                      E.jsx('th', { className: 'text-left p-2 font-mono', children: 'Joined' }),
                      E.jsx('th', { className: 'text-left p-2 font-mono', children: 'Status' }),
                      E.jsx('th', { className: 'text-right p-2 font-mono', children: 'Action' }),
                    ],
                  }),
                }),
                E.jsx('tbody', {
                  children:
                    (b = h == null ? void 0 : h.users) == null
                      ? void 0
                      : b.map((A) =>
                          E.jsxs(
                            'tr',
                            {
                              className: 'border-t border-border',
                              children: [
                                E.jsx('td', {
                                  className: 'p-2 font-mono text-muted-foreground',
                                  children: A.id,
                                }),
                                E.jsx('td', { className: 'p-2 font-mono', children: A.username }),
                                E.jsx('td', {
                                  className: 'p-2 text-muted-foreground',
                                  children: new Date(A.created_at).toLocaleDateString(),
                                }),
                                E.jsx('td', {
                                  className: 'p-2',
                                  children: A.banned_at
                                    ? E.jsx('span', {
                                        className: 'text-destructive text-xs',
                                        children: 'Banned',
                                      })
                                    : E.jsx('span', {
                                        className: 'text-success text-xs',
                                        children: 'Active',
                                      }),
                                }),
                                E.jsx('td', {
                                  className: 'p-2 text-right',
                                  children: E.jsx('button', {
                                    onClick: () => v(A.id, !!A.banned_at),
                                    className: `text-xs underline ${A.banned_at ? 'text-success' : 'text-destructive'}`,
                                    children: A.banned_at ? 'Unban' : 'Ban',
                                  }),
                                }),
                              ],
                            },
                            A.id
                          )
                        ),
                }),
              ],
            }),
          }),
      T > 1 &&
        E.jsxs('div', {
          className: 'flex gap-2 justify-center',
          children: [
            E.jsx(xt, {
              variant: 'outline',
              size: 'sm',
              disabled: i <= 1,
              onClick: () => r((A) => A - 1),
              children: 'Prev',
            }),
            E.jsxs('span', {
              className: 'text-sm text-muted-foreground py-1',
              children: [i, ' / ', T],
            }),
            E.jsx(xt, {
              variant: 'outline',
              size: 'sm',
              disabled: i >= T,
              onClick: () => r((A) => A + 1),
              children: 'Next',
            }),
          ],
        }),
    ],
  })
}
const Qb = (i) => fetch(i).then((r) => r.json())
function Zb() {
  var b
  const [i, r] = R.useState(1),
    [s, c] = R.useState(''),
    [f, m] = R.useState(''),
    {
      data: h,
      mutate: y,
      isLoading: g,
    } = En(`/api/admin/comments?page=${i}${f ? `&q=${encodeURIComponent(f)}` : ''}`, Qb)
  async function v(A) {
    ;(await fetch(`/api/admin/comments/${A}`, { method: 'DELETE' }), y())
  }
  const T = Math.ceil(((h == null ? void 0 : h.total) ?? 0) / 20)
  return E.jsxs('div', {
    className: 'flex flex-col gap-4',
    children: [
      E.jsxs('form', {
        onSubmit: (A) => {
          ;(A.preventDefault(), m(s), r(1))
        },
        className: 'flex gap-2',
        children: [
          E.jsx(Su, {
            placeholder: 'Search comments...',
            value: s,
            onChange: (A) => c(A.target.value),
            className: 'font-mono text-sm',
          }),
          E.jsx(xt, { type: 'submit', variant: 'outline', children: 'Search' }),
        ],
      }),
      g
        ? E.jsx('p', { className: 'text-sm text-muted-foreground', children: 'Loading...' })
        : E.jsxs('div', {
            className: 'flex flex-col gap-2',
            children: [
              (b = h == null ? void 0 : h.comments) == null
                ? void 0
                : b.map((A) =>
                    E.jsxs(
                      'div',
                      {
                        className: 'border border-border rounded-md p-3 flex flex-col gap-1',
                        children: [
                          E.jsxs('div', {
                            className: 'flex items-center justify-between',
                            children: [
                              E.jsxs('span', {
                                className: 'text-xs text-muted-foreground font-mono',
                                children: [A.username, ' on ', A.repo_owner, '/', A.repo_name],
                              }),
                              E.jsx('button', {
                                onClick: () => v(A.id),
                                className: 'text-xs text-destructive underline',
                                children: 'Delete',
                              }),
                            ],
                          }),
                          E.jsx('p', { className: 'text-sm', children: A.content }),
                          E.jsx('span', {
                            className: 'text-xs text-muted-foreground',
                            children: new Date(A.created_at).toLocaleString(),
                          }),
                        ],
                      },
                      A.id
                    )
                  ),
              (!(h != null && h.comments) || h.comments.length === 0) &&
                E.jsx('p', {
                  className: 'text-sm text-muted-foreground',
                  children: 'No comments found.',
                }),
            ],
          }),
      T > 1 &&
        E.jsxs('div', {
          className: 'flex gap-2 justify-center',
          children: [
            E.jsx(xt, {
              variant: 'outline',
              size: 'sm',
              disabled: i <= 1,
              onClick: () => r((A) => A - 1),
              children: 'Prev',
            }),
            E.jsxs('span', {
              className: 'text-sm text-muted-foreground py-1',
              children: [i, ' / ', T],
            }),
            E.jsx(xt, {
              variant: 'outline',
              size: 'sm',
              disabled: i >= T,
              onClick: () => r((A) => A + 1),
              children: 'Next',
            }),
          ],
        }),
    ],
  })
}
const Kb = (i) => fetch(i).then((r) => r.json())
function Jb() {
  var m
  const [i, r] = R.useState(1),
    { data: s, isLoading: c } = En(`/api/admin/modlog?page=${i}`, Kb),
    f = Math.ceil(((s == null ? void 0 : s.total) ?? 0) / 20)
  return E.jsxs('div', {
    className: 'flex flex-col gap-4',
    children: [
      c
        ? E.jsx('p', { className: 'text-sm text-muted-foreground', children: 'Loading...' })
        : E.jsx('div', {
            className: 'border border-border rounded-md overflow-hidden',
            children: E.jsxs('table', {
              className: 'w-full text-sm',
              children: [
                E.jsx('thead', {
                  className: 'bg-muted/50',
                  children: E.jsxs('tr', {
                    children: [
                      E.jsx('th', { className: 'text-left p-2 font-mono', children: 'Admin' }),
                      E.jsx('th', { className: 'text-left p-2 font-mono', children: 'Action' }),
                      E.jsx('th', { className: 'text-left p-2 font-mono', children: 'Target' }),
                      E.jsx('th', { className: 'text-left p-2 font-mono', children: 'Reason' }),
                      E.jsx('th', { className: 'text-left p-2 font-mono', children: 'Date' }),
                    ],
                  }),
                }),
                E.jsxs('tbody', {
                  children: [
                    (m = s == null ? void 0 : s.entries) == null
                      ? void 0
                      : m.map((h) =>
                          E.jsxs(
                            'tr',
                            {
                              className: 'border-t border-border',
                              children: [
                                E.jsx('td', {
                                  className: 'p-2 font-mono',
                                  children: h.admin_username,
                                }),
                                E.jsx('td', {
                                  className: 'p-2',
                                  children: E.jsx('span', {
                                    className: `text-xs px-1.5 py-0.5 rounded ${h.action === 'ban' ? 'bg-destructive/10 text-destructive' : h.action === 'unban' ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'}`,
                                    children: h.action,
                                  }),
                                }),
                                E.jsx('td', {
                                  className: 'p-2 font-mono text-muted-foreground',
                                  children:
                                    h.target_username ||
                                    (h.target_comment_id ? `comment #${h.target_comment_id}` : '-'),
                                }),
                                E.jsx('td', {
                                  className: 'p-2 text-muted-foreground',
                                  children: h.reason || '-',
                                }),
                                E.jsx('td', {
                                  className: 'p-2 text-muted-foreground',
                                  children: new Date(h.created_at).toLocaleString(),
                                }),
                              ],
                            },
                            h.id
                          )
                        ),
                    (!(s != null && s.entries) || s.entries.length === 0) &&
                      E.jsx('tr', {
                        children: E.jsx('td', {
                          colSpan: 5,
                          className: 'p-2 text-muted-foreground text-center',
                          children: 'No entries.',
                        }),
                      }),
                  ],
                }),
              ],
            }),
          }),
      f > 1 &&
        E.jsxs('div', {
          className: 'flex gap-2 justify-center',
          children: [
            E.jsx(xt, {
              variant: 'outline',
              size: 'sm',
              disabled: i <= 1,
              onClick: () => r((h) => h - 1),
              children: 'Prev',
            }),
            E.jsxs('span', {
              className: 'text-sm text-muted-foreground py-1',
              children: [i, ' / ', f],
            }),
            E.jsx(xt, {
              variant: 'outline',
              size: 'sm',
              disabled: i >= f,
              onClick: () => r((h) => h + 1),
              children: 'Next',
            }),
          ],
        }),
    ],
  })
}
const kb = (i) => fetch(i).then((r) => r.json())
function $b() {
  var y
  const [i, r] = R.useState(''),
    { data: s, mutate: c, isLoading: f } = En('/api/admin/blocked-words', kb)
  async function m(g) {
    ;(g.preventDefault(),
      i.trim() &&
        (await fetch('/api/admin/blocked-words', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ word: i.trim() }),
        }),
        r(''),
        c()))
  }
  async function h(g) {
    ;(await fetch('/api/admin/blocked-words', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ word: g }),
    }),
      c())
  }
  return E.jsxs('div', {
    className: 'flex flex-col gap-4',
    children: [
      E.jsxs('form', {
        onSubmit: m,
        className: 'flex gap-2',
        children: [
          E.jsx(Su, {
            placeholder: 'Add blocked word...',
            value: i,
            onChange: (g) => r(g.target.value),
            className: 'font-mono text-sm',
          }),
          E.jsx(xt, { type: 'submit', variant: 'outline', children: 'Add' }),
        ],
      }),
      f
        ? E.jsx('p', { className: 'text-sm text-muted-foreground', children: 'Loading...' })
        : E.jsxs('div', {
            className: 'flex flex-wrap gap-2',
            children: [
              (y = s == null ? void 0 : s.words) == null
                ? void 0
                : y.map((g) =>
                    E.jsxs(
                      'span',
                      {
                        className:
                          'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted text-sm font-mono',
                        children: [
                          g,
                          E.jsx('button', {
                            onClick: () => h(g),
                            className: 'text-muted-foreground hover:text-destructive',
                            children: 'x',
                          }),
                        ],
                      },
                      g
                    )
                  ),
              (!(s != null && s.words) || s.words.length === 0) &&
                E.jsx('p', {
                  className: 'text-sm text-muted-foreground',
                  children: 'No blocked words configured.',
                }),
            ],
          }),
    ],
  })
}
const Wb = ['Dashboard', 'Users', 'Comments', 'Blocked Words', 'Mod Log']
function Fb() {
  const { user: i, isLoading: r } = $o(),
    [s, c] = R.useState('Dashboard')
  return r
    ? E.jsx('main', {
        className: 'flex min-h-screen items-center justify-center',
        children: E.jsx('p', {
          className: 'text-sm text-muted-foreground',
          children: 'Loading...',
        }),
      })
    : i != null && i.is_admin
      ? E.jsx('main', {
          className: 'min-h-screen px-4 py-12',
          children: E.jsxs('div', {
            className: 'mx-auto w-full max-w-3xl flex flex-col gap-6',
            children: [
              E.jsxs('div', {
                className: 'flex items-center justify-between',
                children: [
                  E.jsx(xn, {
                    to: '/',
                    className:
                      'text-sm font-mono font-bold text-muted-foreground hover:text-foreground',
                    children: 'gitrep',
                  }),
                  E.jsx('h1', { className: 'text-lg font-mono font-bold', children: 'Admin' }),
                ],
              }),
              E.jsx('div', {
                className: 'flex gap-1 border-b border-border',
                children: Wb.map((f) =>
                  E.jsx(
                    'button',
                    {
                      onClick: () => c(f),
                      className: `px-3 py-2 text-sm font-mono transition-colors ${s === f ? 'border-b-2 border-foreground text-foreground' : 'text-muted-foreground hover:text-foreground'}`,
                      children: f,
                    },
                    f
                  )
                ),
              }),
              s === 'Dashboard' && E.jsx(Gb, {}),
              s === 'Users' && E.jsx(Xb, {}),
              s === 'Comments' && E.jsx(Zb, {}),
              s === 'Blocked Words' && E.jsx($b, {}),
              s === 'Mod Log' && E.jsx(Jb, {}),
            ],
          }),
        })
      : E.jsx(Mp, { to: '/', replace: !0 })
}
function Ib() {
  return E.jsxs(Up, {
    children: [
      E.jsx(Gi, { path: '/', element: E.jsx(Mb, {}) }),
      E.jsx(Gi, { path: '/admin', element: E.jsx(Fb, {}) }),
      E.jsx(Gi, { path: '/:owner/:repo', element: E.jsx(qb, {}) }),
    ],
  })
}
wy.createRoot(document.getElementById('root')).render(
  E.jsx(Ki.StrictMode, { children: E.jsx(a0, { children: E.jsx(Ib, {}) }) })
)
