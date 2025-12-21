var ReactQuill = (function (exports, React) {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var jsxRuntime = {exports: {}};

	var reactJsxRuntime_production_min = {};

	/**
	 * @license React
	 * react-jsx-runtime.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReactJsxRuntime_production_min;

	function requireReactJsxRuntime_production_min () {
		if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
		hasRequiredReactJsxRuntime_production_min = 1;
	var f=React,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:true,ref:true,__self:true,__source:true};
		function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a) void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
		return reactJsxRuntime_production_min;
	}

	var reactJsxRuntime_development = {};

	/**
	 * @license React
	 * react-jsx-runtime.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReactJsxRuntime_development;

	function requireReactJsxRuntime_development () {
		if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
		hasRequiredReactJsxRuntime_development = 1;

		if (process.env.NODE_ENV !== "production") {
		  (function() {

		var React$1 = React;

		// ATTENTION
		// When adding new symbols to this file,
		// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
		// The Symbol used to tag the ReactElement-like types.
		var REACT_ELEMENT_TYPE = Symbol.for('react.element');
		var REACT_PORTAL_TYPE = Symbol.for('react.portal');
		var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
		var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
		var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
		var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
		var REACT_CONTEXT_TYPE = Symbol.for('react.context');
		var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
		var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
		var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
		var REACT_MEMO_TYPE = Symbol.for('react.memo');
		var REACT_LAZY_TYPE = Symbol.for('react.lazy');
		var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
		var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
		var FAUX_ITERATOR_SYMBOL = '@@iterator';
		function getIteratorFn(maybeIterable) {
		  if (maybeIterable === null || typeof maybeIterable !== 'object') {
		    return null;
		  }

		  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

		  if (typeof maybeIterator === 'function') {
		    return maybeIterator;
		  }

		  return null;
		}

		var ReactSharedInternals = React$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

		function error(format) {
		  {
		    {
		      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		        args[_key2 - 1] = arguments[_key2];
		      }

		      printWarning('error', format, args);
		    }
		  }
		}

		function printWarning(level, format, args) {
		  // When changing this logic, you might want to also
		  // update consoleWithStackDev.www.js as well.
		  {
		    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
		    var stack = ReactDebugCurrentFrame.getStackAddendum();

		    if (stack !== '') {
		      format += '%s';
		      args = args.concat([stack]);
		    } // eslint-disable-next-line react-internal/safe-string-coercion


		    var argsWithFormat = args.map(function (item) {
		      return String(item);
		    }); // Careful: RN currently depends on this prefix

		    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
		    // breaks IE9: https://github.com/facebook/react/issues/13610
		    // eslint-disable-next-line react-internal/no-production-logging

		    Function.prototype.apply.call(console[level], console, argsWithFormat);
		  }
		}

		// -----------------------------------------------------------------------------

		var enableScopeAPI = false; // Experimental Create Event Handle API.
		var enableCacheElement = false;
		var enableTransitionTracing = false; // No known bugs, but needs performance testing

		var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
		// stuff. Intended to enable React core members to more easily debug scheduling
		// issues in DEV builds.

		var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

		var REACT_MODULE_REFERENCE;

		{
		  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
		}

		function isValidElementType(type) {
		  if (typeof type === 'string' || typeof type === 'function') {
		    return true;
		  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


		  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
		    return true;
		  }

		  if (typeof type === 'object' && type !== null) {
		    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
		    // types supported by any Flight configuration anywhere since
		    // we don't know which Flight build this will end up being used
		    // with.
		    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
		      return true;
		    }
		  }

		  return false;
		}

		function getWrappedName(outerType, innerType, wrapperName) {
		  var displayName = outerType.displayName;

		  if (displayName) {
		    return displayName;
		  }

		  var functionName = innerType.displayName || innerType.name || '';
		  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
		} // Keep in sync with react-reconciler/getComponentNameFromFiber


		function getContextName(type) {
		  return type.displayName || 'Context';
		} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


		function getComponentNameFromType(type) {
		  if (type == null) {
		    // Host root, text node or just invalid type.
		    return null;
		  }

		  {
		    if (typeof type.tag === 'number') {
		      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
		    }
		  }

		  if (typeof type === 'function') {
		    return type.displayName || type.name || null;
		  }

		  if (typeof type === 'string') {
		    return type;
		  }

		  switch (type) {
		    case REACT_FRAGMENT_TYPE:
		      return 'Fragment';

		    case REACT_PORTAL_TYPE:
		      return 'Portal';

		    case REACT_PROFILER_TYPE:
		      return 'Profiler';

		    case REACT_STRICT_MODE_TYPE:
		      return 'StrictMode';

		    case REACT_SUSPENSE_TYPE:
		      return 'Suspense';

		    case REACT_SUSPENSE_LIST_TYPE:
		      return 'SuspenseList';

		  }

		  if (typeof type === 'object') {
		    switch (type.$$typeof) {
		      case REACT_CONTEXT_TYPE:
		        var context = type;
		        return getContextName(context) + '.Consumer';

		      case REACT_PROVIDER_TYPE:
		        var provider = type;
		        return getContextName(provider._context) + '.Provider';

		      case REACT_FORWARD_REF_TYPE:
		        return getWrappedName(type, type.render, 'ForwardRef');

		      case REACT_MEMO_TYPE:
		        var outerName = type.displayName || null;

		        if (outerName !== null) {
		          return outerName;
		        }

		        return getComponentNameFromType(type.type) || 'Memo';

		      case REACT_LAZY_TYPE:
		        {
		          var lazyComponent = type;
		          var payload = lazyComponent._payload;
		          var init = lazyComponent._init;

		          try {
		            return getComponentNameFromType(init(payload));
		          } catch (x) {
		            return null;
		          }
		        }

		      // eslint-disable-next-line no-fallthrough
		    }
		  }

		  return null;
		}

		var assign = Object.assign;

		// Helpers to patch console.logs to avoid logging during side-effect free
		// replaying on render function. This currently only patches the object
		// lazily which won't cover if the log function was extracted eagerly.
		// We could also eagerly patch the method.
		var disabledDepth = 0;
		var prevLog;
		var prevInfo;
		var prevWarn;
		var prevError;
		var prevGroup;
		var prevGroupCollapsed;
		var prevGroupEnd;

		function disabledLog() {}

		disabledLog.__reactDisabledLog = true;
		function disableLogs() {
		  {
		    if (disabledDepth === 0) {
		      /* eslint-disable react-internal/no-production-logging */
		      prevLog = console.log;
		      prevInfo = console.info;
		      prevWarn = console.warn;
		      prevError = console.error;
		      prevGroup = console.group;
		      prevGroupCollapsed = console.groupCollapsed;
		      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

		      var props = {
		        configurable: true,
		        enumerable: true,
		        value: disabledLog,
		        writable: true
		      }; // $FlowFixMe Flow thinks console is immutable.

		      Object.defineProperties(console, {
		        info: props,
		        log: props,
		        warn: props,
		        error: props,
		        group: props,
		        groupCollapsed: props,
		        groupEnd: props
		      });
		      /* eslint-enable react-internal/no-production-logging */
		    }

		    disabledDepth++;
		  }
		}
		function reenableLogs() {
		  {
		    disabledDepth--;

		    if (disabledDepth === 0) {
		      /* eslint-disable react-internal/no-production-logging */
		      var props = {
		        configurable: true,
		        enumerable: true,
		        writable: true
		      }; // $FlowFixMe Flow thinks console is immutable.

		      Object.defineProperties(console, {
		        log: assign({}, props, {
		          value: prevLog
		        }),
		        info: assign({}, props, {
		          value: prevInfo
		        }),
		        warn: assign({}, props, {
		          value: prevWarn
		        }),
		        error: assign({}, props, {
		          value: prevError
		        }),
		        group: assign({}, props, {
		          value: prevGroup
		        }),
		        groupCollapsed: assign({}, props, {
		          value: prevGroupCollapsed
		        }),
		        groupEnd: assign({}, props, {
		          value: prevGroupEnd
		        })
		      });
		      /* eslint-enable react-internal/no-production-logging */
		    }

		    if (disabledDepth < 0) {
		      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
		    }
		  }
		}

		var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
		var prefix;
		function describeBuiltInComponentFrame(name, source, ownerFn) {
		  {
		    if (prefix === undefined) {
		      // Extract the VM specific prefix used by each line.
		      try {
		        throw Error();
		      } catch (x) {
		        var match = x.stack.trim().match(/\n( *(at )?)/);
		        prefix = match && match[1] || '';
		      }
		    } // We use the prefix to ensure our stacks line up with native stack frames.


		    return '\n' + prefix + name;
		  }
		}
		var reentry = false;
		var componentFrameCache;

		{
		  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
		  componentFrameCache = new PossiblyWeakMap();
		}

		function describeNativeComponentFrame(fn, construct) {
		  // If something asked for a stack inside a fake render, it should get ignored.
		  if ( !fn || reentry) {
		    return '';
		  }

		  {
		    var frame = componentFrameCache.get(fn);

		    if (frame !== undefined) {
		      return frame;
		    }
		  }

		  var control;
		  reentry = true;
		  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

		  Error.prepareStackTrace = undefined;
		  var previousDispatcher;

		  {
		    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
		    // for warnings.

		    ReactCurrentDispatcher.current = null;
		    disableLogs();
		  }

		  try {
		    // This should throw.
		    if (construct) {
		      // Something should be setting the props in the constructor.
		      var Fake = function () {
		        throw Error();
		      }; // $FlowFixMe


		      Object.defineProperty(Fake.prototype, 'props', {
		        set: function () {
		          // We use a throwing setter instead of frozen or non-writable props
		          // because that won't throw in a non-strict mode function.
		          throw Error();
		        }
		      });

		      if (typeof Reflect === 'object' && Reflect.construct) {
		        // We construct a different control for this case to include any extra
		        // frames added by the construct call.
		        try {
		          Reflect.construct(Fake, []);
		        } catch (x) {
		          control = x;
		        }

		        Reflect.construct(fn, [], Fake);
		      } else {
		        try {
		          Fake.call();
		        } catch (x) {
		          control = x;
		        }

		        fn.call(Fake.prototype);
		      }
		    } else {
		      try {
		        throw Error();
		      } catch (x) {
		        control = x;
		      }

		      fn();
		    }
		  } catch (sample) {
		    // This is inlined manually because closure doesn't do it for us.
		    if (sample && control && typeof sample.stack === 'string') {
		      // This extracts the first frame from the sample that isn't also in the control.
		      // Skipping one frame that we assume is the frame that calls the two.
		      var sampleLines = sample.stack.split('\n');
		      var controlLines = control.stack.split('\n');
		      var s = sampleLines.length - 1;
		      var c = controlLines.length - 1;

		      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
		        // We expect at least one stack frame to be shared.
		        // Typically this will be the root most one. However, stack frames may be
		        // cut off due to maximum stack limits. In this case, one maybe cut off
		        // earlier than the other. We assume that the sample is longer or the same
		        // and there for cut off earlier. So we should find the root most frame in
		        // the sample somewhere in the control.
		        c--;
		      }

		      for (; s >= 1 && c >= 0; s--, c--) {
		        // Next we find the first one that isn't the same which should be the
		        // frame that called our sample function and the control.
		        if (sampleLines[s] !== controlLines[c]) {
		          // In V8, the first line is describing the message but other VMs don't.
		          // If we're about to return the first line, and the control is also on the same
		          // line, that's a pretty good indicator that our sample threw at same line as
		          // the control. I.e. before we entered the sample frame. So we ignore this result.
		          // This can happen if you passed a class to function component, or non-function.
		          if (s !== 1 || c !== 1) {
		            do {
		              s--;
		              c--; // We may still have similar intermediate frames from the construct call.
		              // The next one that isn't the same should be our match though.

		              if (c < 0 || sampleLines[s] !== controlLines[c]) {
		                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
		                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
		                // but we have a user-provided "displayName"
		                // splice it in to make the stack more readable.


		                if (fn.displayName && _frame.includes('<anonymous>')) {
		                  _frame = _frame.replace('<anonymous>', fn.displayName);
		                }

		                {
		                  if (typeof fn === 'function') {
		                    componentFrameCache.set(fn, _frame);
		                  }
		                } // Return the line we found.


		                return _frame;
		              }
		            } while (s >= 1 && c >= 0);
		          }

		          break;
		        }
		      }
		    }
		  } finally {
		    reentry = false;

		    {
		      ReactCurrentDispatcher.current = previousDispatcher;
		      reenableLogs();
		    }

		    Error.prepareStackTrace = previousPrepareStackTrace;
		  } // Fallback to just using the name if we couldn't make it throw.


		  var name = fn ? fn.displayName || fn.name : '';
		  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

		  {
		    if (typeof fn === 'function') {
		      componentFrameCache.set(fn, syntheticFrame);
		    }
		  }

		  return syntheticFrame;
		}
		function describeFunctionComponentFrame(fn, source, ownerFn) {
		  {
		    return describeNativeComponentFrame(fn, false);
		  }
		}

		function shouldConstruct(Component) {
		  var prototype = Component.prototype;
		  return !!(prototype && prototype.isReactComponent);
		}

		function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

		  if (type == null) {
		    return '';
		  }

		  if (typeof type === 'function') {
		    {
		      return describeNativeComponentFrame(type, shouldConstruct(type));
		    }
		  }

		  if (typeof type === 'string') {
		    return describeBuiltInComponentFrame(type);
		  }

		  switch (type) {
		    case REACT_SUSPENSE_TYPE:
		      return describeBuiltInComponentFrame('Suspense');

		    case REACT_SUSPENSE_LIST_TYPE:
		      return describeBuiltInComponentFrame('SuspenseList');
		  }

		  if (typeof type === 'object') {
		    switch (type.$$typeof) {
		      case REACT_FORWARD_REF_TYPE:
		        return describeFunctionComponentFrame(type.render);

		      case REACT_MEMO_TYPE:
		        // Memo may contain any component type so we recursively resolve it.
		        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

		      case REACT_LAZY_TYPE:
		        {
		          var lazyComponent = type;
		          var payload = lazyComponent._payload;
		          var init = lazyComponent._init;

		          try {
		            // Lazy may contain any component type so we recursively resolve it.
		            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
		          } catch (x) {}
		        }
		    }
		  }

		  return '';
		}

		var hasOwnProperty = Object.prototype.hasOwnProperty;

		var loggedTypeFailures = {};
		var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

		function setCurrentlyValidatingElement(element) {
		  {
		    if (element) {
		      var owner = element._owner;
		      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		      ReactDebugCurrentFrame.setExtraStackFrame(stack);
		    } else {
		      ReactDebugCurrentFrame.setExtraStackFrame(null);
		    }
		  }
		}

		function checkPropTypes(typeSpecs, values, location, componentName, element) {
		  {
		    // $FlowFixMe This is okay but Flow doesn't know it.
		    var has = Function.call.bind(hasOwnProperty);

		    for (var typeSpecName in typeSpecs) {
		      if (has(typeSpecs, typeSpecName)) {
		        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
		        // fail the render phase where it didn't fail before. So we log it.
		        // After these have been cleaned up, we'll let them throw.

		        try {
		          // This is intentionally an invariant that gets caught. It's the same
		          // behavior as without this statement except with a better message.
		          if (typeof typeSpecs[typeSpecName] !== 'function') {
		            // eslint-disable-next-line react-internal/prod-error-codes
		            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
		            err.name = 'Invariant Violation';
		            throw err;
		          }

		          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
		        } catch (ex) {
		          error$1 = ex;
		        }

		        if (error$1 && !(error$1 instanceof Error)) {
		          setCurrentlyValidatingElement(element);

		          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

		          setCurrentlyValidatingElement(null);
		        }

		        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
		          // Only monitor this failure once because there tends to be a lot of the
		          // same error.
		          loggedTypeFailures[error$1.message] = true;
		          setCurrentlyValidatingElement(element);

		          error('Failed %s type: %s', location, error$1.message);

		          setCurrentlyValidatingElement(null);
		        }
		      }
		    }
		  }
		}

		var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

		function isArray(a) {
		  return isArrayImpl(a);
		}

		/*
		 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
		 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
		 *
		 * The functions in this module will throw an easier-to-understand,
		 * easier-to-debug exception with a clear errors message message explaining the
		 * problem. (Instead of a confusing exception thrown inside the implementation
		 * of the `value` object).
		 */
		// $FlowFixMe only called in DEV, so void return is not possible.
		function typeName(value) {
		  {
		    // toStringTag is needed for namespaced types like Temporal.Instant
		    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
		    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
		    return type;
		  }
		} // $FlowFixMe only called in DEV, so void return is not possible.


		function willCoercionThrow(value) {
		  {
		    try {
		      testStringCoercion(value);
		      return false;
		    } catch (e) {
		      return true;
		    }
		  }
		}

		function testStringCoercion(value) {
		  // If you ended up here by following an exception call stack, here's what's
		  // happened: you supplied an object or symbol value to React (as a prop, key,
		  // DOM attribute, CSS property, string ref, etc.) and when React tried to
		  // coerce it to a string using `'' + value`, an exception was thrown.
		  //
		  // The most common types that will cause this exception are `Symbol` instances
		  // and Temporal objects like `Temporal.Instant`. But any object that has a
		  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
		  // exception. (Library authors do this to prevent users from using built-in
		  // numeric operators like `+` or comparison operators like `>=` because custom
		  // methods are needed to perform accurate arithmetic or comparison.)
		  //
		  // To fix the problem, coerce this object or symbol value to a string before
		  // passing it to React. The most reliable way is usually `String(value)`.
		  //
		  // To find which value is throwing, check the browser or debugger console.
		  // Before this exception was thrown, there should be `console.error` output
		  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
		  // problem and how that type was used: key, atrribute, input value prop, etc.
		  // In most cases, this console output also shows the component and its
		  // ancestor components where the exception happened.
		  //
		  // eslint-disable-next-line react-internal/safe-string-coercion
		  return '' + value;
		}
		function checkKeyStringCoercion(value) {
		  {
		    if (willCoercionThrow(value)) {
		      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

		      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
		    }
		  }
		}

		var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
		var RESERVED_PROPS = {
		  key: true,
		  ref: true,
		  __self: true,
		  __source: true
		};
		var specialPropKeyWarningShown;
		var specialPropRefWarningShown;

		function hasValidRef(config) {
		  {
		    if (hasOwnProperty.call(config, 'ref')) {
		      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

		      if (getter && getter.isReactWarning) {
		        return false;
		      }
		    }
		  }

		  return config.ref !== undefined;
		}

		function hasValidKey(config) {
		  {
		    if (hasOwnProperty.call(config, 'key')) {
		      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

		      if (getter && getter.isReactWarning) {
		        return false;
		      }
		    }
		  }

		  return config.key !== undefined;
		}

		function warnIfStringRefCannotBeAutoConverted(config, self) {
		  {
		    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self) ;
		  }
		}

		function defineKeyPropWarningGetter(props, displayName) {
		  {
		    var warnAboutAccessingKey = function () {
		      if (!specialPropKeyWarningShown) {
		        specialPropKeyWarningShown = true;

		        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		      }
		    };

		    warnAboutAccessingKey.isReactWarning = true;
		    Object.defineProperty(props, 'key', {
		      get: warnAboutAccessingKey,
		      configurable: true
		    });
		  }
		}

		function defineRefPropWarningGetter(props, displayName) {
		  {
		    var warnAboutAccessingRef = function () {
		      if (!specialPropRefWarningShown) {
		        specialPropRefWarningShown = true;

		        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		      }
		    };

		    warnAboutAccessingRef.isReactWarning = true;
		    Object.defineProperty(props, 'ref', {
		      get: warnAboutAccessingRef,
		      configurable: true
		    });
		  }
		}
		/**
		 * Factory method to create a new React element. This no longer adheres to
		 * the class pattern, so do not use new to call it. Also, instanceof check
		 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
		 * if something is a React Element.
		 *
		 * @param {*} type
		 * @param {*} props
		 * @param {*} key
		 * @param {string|object} ref
		 * @param {*} owner
		 * @param {*} self A *temporary* helper to detect places where `this` is
		 * different from the `owner` when React.createElement is called, so that we
		 * can warn. We want to get rid of owner and replace string `ref`s with arrow
		 * functions, and as long as `this` and owner are the same, there will be no
		 * change in behavior.
		 * @param {*} source An annotation object (added by a transpiler or otherwise)
		 * indicating filename, line number, and/or other information.
		 * @internal
		 */


		var ReactElement = function (type, key, ref, self, source, owner, props) {
		  var element = {
		    // This tag allows us to uniquely identify this as a React Element
		    $$typeof: REACT_ELEMENT_TYPE,
		    // Built-in properties that belong on the element
		    type: type,
		    key: key,
		    ref: ref,
		    props: props,
		    // Record the component responsible for creating this element.
		    _owner: owner
		  };

		  {
		    // The validation flag is currently mutative. We put it on
		    // an external backing store so that we can freeze the whole object.
		    // This can be replaced with a WeakMap once they are implemented in
		    // commonly used development environments.
		    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
		    // the validation flag non-enumerable (where possible, which should
		    // include every environment we run tests in), so the test framework
		    // ignores it.

		    Object.defineProperty(element._store, 'validated', {
		      configurable: false,
		      enumerable: false,
		      writable: true,
		      value: false
		    }); // self and source are DEV only properties.

		    Object.defineProperty(element, '_self', {
		      configurable: false,
		      enumerable: false,
		      writable: false,
		      value: self
		    }); // Two elements created in two different places should be considered
		    // equal for testing purposes and therefore we hide it from enumeration.

		    Object.defineProperty(element, '_source', {
		      configurable: false,
		      enumerable: false,
		      writable: false,
		      value: source
		    });

		    if (Object.freeze) {
		      Object.freeze(element.props);
		      Object.freeze(element);
		    }
		  }

		  return element;
		};
		/**
		 * https://github.com/reactjs/rfcs/pull/107
		 * @param {*} type
		 * @param {object} props
		 * @param {string} key
		 */

		function jsxDEV(type, config, maybeKey, source, self) {
		  {
		    var propName; // Reserved names are extracted

		    var props = {};
		    var key = null;
		    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
		    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
		    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
		    // but as an intermediary step, we will use jsxDEV for everything except
		    // <div {...props} key="Hi" />, because we aren't currently able to tell if
		    // key is explicitly declared to be undefined or not.

		    if (maybeKey !== undefined) {
		      {
		        checkKeyStringCoercion(maybeKey);
		      }

		      key = '' + maybeKey;
		    }

		    if (hasValidKey(config)) {
		      {
		        checkKeyStringCoercion(config.key);
		      }

		      key = '' + config.key;
		    }

		    if (hasValidRef(config)) {
		      ref = config.ref;
		      warnIfStringRefCannotBeAutoConverted(config, self);
		    } // Remaining properties are added to a new props object


		    for (propName in config) {
		      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		        props[propName] = config[propName];
		      }
		    } // Resolve default props


		    if (type && type.defaultProps) {
		      var defaultProps = type.defaultProps;

		      for (propName in defaultProps) {
		        if (props[propName] === undefined) {
		          props[propName] = defaultProps[propName];
		        }
		      }
		    }

		    if (key || ref) {
		      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

		      if (key) {
		        defineKeyPropWarningGetter(props, displayName);
		      }

		      if (ref) {
		        defineRefPropWarningGetter(props, displayName);
		      }
		    }

		    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
		  }
		}

		var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
		var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

		function setCurrentlyValidatingElement$1(element) {
		  {
		    if (element) {
		      var owner = element._owner;
		      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
		    } else {
		      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
		    }
		  }
		}

		var propTypesMisspellWarningShown;

		{
		  propTypesMisspellWarningShown = false;
		}
		/**
		 * Verifies the object is a ReactElement.
		 * See https://reactjs.org/docs/react-api.html#isvalidelement
		 * @param {?object} object
		 * @return {boolean} True if `object` is a ReactElement.
		 * @final
		 */


		function isValidElement(object) {
		  {
		    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		  }
		}

		function getDeclarationErrorAddendum() {
		  {
		    if (ReactCurrentOwner$1.current) {
		      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

		      if (name) {
		        return '\n\nCheck the render method of `' + name + '`.';
		      }
		    }

		    return '';
		  }
		}

		function getSourceInfoErrorAddendum(source) {
		  {

		    return '';
		  }
		}
		/**
		 * Warn if there's no key explicitly set on dynamic arrays of children or
		 * object keys are not valid. This allows us to keep track of children between
		 * updates.
		 */


		var ownerHasKeyUseWarning = {};

		function getCurrentComponentErrorInfo(parentType) {
		  {
		    var info = getDeclarationErrorAddendum();

		    if (!info) {
		      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

		      if (parentName) {
		        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
		      }
		    }

		    return info;
		  }
		}
		/**
		 * Warn if the element doesn't have an explicit key assigned to it.
		 * This element is in an array. The array could grow and shrink or be
		 * reordered. All children that haven't already been validated are required to
		 * have a "key" property assigned to it. Error statuses are cached so a warning
		 * will only be shown once.
		 *
		 * @internal
		 * @param {ReactElement} element Element that requires a key.
		 * @param {*} parentType element's parent's type.
		 */


		function validateExplicitKey(element, parentType) {
		  {
		    if (!element._store || element._store.validated || element.key != null) {
		      return;
		    }

		    element._store.validated = true;
		    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

		    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
		      return;
		    }

		    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
		    // property, it may be the creator of the child that's responsible for
		    // assigning it a key.

		    var childOwner = '';

		    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
		      // Give the component that originally created this child.
		      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
		    }

		    setCurrentlyValidatingElement$1(element);

		    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

		    setCurrentlyValidatingElement$1(null);
		  }
		}
		/**
		 * Ensure that every element either is passed in a static location, in an
		 * array with an explicit keys property defined, or in an object literal
		 * with valid key property.
		 *
		 * @internal
		 * @param {ReactNode} node Statically passed child of any type.
		 * @param {*} parentType node's parent's type.
		 */


		function validateChildKeys(node, parentType) {
		  {
		    if (typeof node !== 'object') {
		      return;
		    }

		    if (isArray(node)) {
		      for (var i = 0; i < node.length; i++) {
		        var child = node[i];

		        if (isValidElement(child)) {
		          validateExplicitKey(child, parentType);
		        }
		      }
		    } else if (isValidElement(node)) {
		      // This element was passed in a valid location.
		      if (node._store) {
		        node._store.validated = true;
		      }
		    } else if (node) {
		      var iteratorFn = getIteratorFn(node);

		      if (typeof iteratorFn === 'function') {
		        // Entry iterators used to provide implicit keys,
		        // but now we print a separate warning for them later.
		        if (iteratorFn !== node.entries) {
		          var iterator = iteratorFn.call(node);
		          var step;

		          while (!(step = iterator.next()).done) {
		            if (isValidElement(step.value)) {
		              validateExplicitKey(step.value, parentType);
		            }
		          }
		        }
		      }
		    }
		  }
		}
		/**
		 * Given an element, validate that its props follow the propTypes definition,
		 * provided by the type.
		 *
		 * @param {ReactElement} element
		 */


		function validatePropTypes(element) {
		  {
		    var type = element.type;

		    if (type === null || type === undefined || typeof type === 'string') {
		      return;
		    }

		    var propTypes;

		    if (typeof type === 'function') {
		      propTypes = type.propTypes;
		    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
		    // Inner props are checked in the reconciler.
		    type.$$typeof === REACT_MEMO_TYPE)) {
		      propTypes = type.propTypes;
		    } else {
		      return;
		    }

		    if (propTypes) {
		      // Intentionally inside to avoid triggering lazy initializers:
		      var name = getComponentNameFromType(type);
		      checkPropTypes(propTypes, element.props, 'prop', name, element);
		    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
		      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

		      var _name = getComponentNameFromType(type);

		      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
		    }

		    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
		      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
		    }
		  }
		}
		/**
		 * Given a fragment, validate that it can only be provided with fragment props
		 * @param {ReactElement} fragment
		 */


		function validateFragmentProps(fragment) {
		  {
		    var keys = Object.keys(fragment.props);

		    for (var i = 0; i < keys.length; i++) {
		      var key = keys[i];

		      if (key !== 'children' && key !== 'key') {
		        setCurrentlyValidatingElement$1(fragment);

		        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

		        setCurrentlyValidatingElement$1(null);
		        break;
		      }
		    }

		    if (fragment.ref !== null) {
		      setCurrentlyValidatingElement$1(fragment);

		      error('Invalid attribute `ref` supplied to `React.Fragment`.');

		      setCurrentlyValidatingElement$1(null);
		    }
		  }
		}

		var didWarnAboutKeySpread = {};
		function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
		  {
		    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
		    // succeed and there will likely be errors in render.

		    if (!validType) {
		      var info = '';

		      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
		        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
		      }

		      var sourceInfo = getSourceInfoErrorAddendum();

		      if (sourceInfo) {
		        info += sourceInfo;
		      } else {
		        info += getDeclarationErrorAddendum();
		      }

		      var typeString;

		      if (type === null) {
		        typeString = 'null';
		      } else if (isArray(type)) {
		        typeString = 'array';
		      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
		        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
		        info = ' Did you accidentally export a JSX literal instead of a component?';
		      } else {
		        typeString = typeof type;
		      }

		      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
		    }

		    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
		    // TODO: Drop this when these are no longer allowed as the type argument.

		    if (element == null) {
		      return element;
		    } // Skip key warning if the type isn't valid since our key validation logic
		    // doesn't expect a non-string/function type and can throw confusing errors.
		    // We don't want exception behavior to differ between dev and prod.
		    // (Rendering will throw with a helpful message and as soon as the type is
		    // fixed, the key warnings will appear.)


		    if (validType) {
		      var children = props.children;

		      if (children !== undefined) {
		        if (isStaticChildren) {
		          if (isArray(children)) {
		            for (var i = 0; i < children.length; i++) {
		              validateChildKeys(children[i], type);
		            }

		            if (Object.freeze) {
		              Object.freeze(children);
		            }
		          } else {
		            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
		          }
		        } else {
		          validateChildKeys(children, type);
		        }
		      }
		    }

		    {
		      if (hasOwnProperty.call(props, 'key')) {
		        var componentName = getComponentNameFromType(type);
		        var keys = Object.keys(props).filter(function (k) {
		          return k !== 'key';
		        });
		        var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';

		        if (!didWarnAboutKeySpread[componentName + beforeExample]) {
		          var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';

		          error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);

		          didWarnAboutKeySpread[componentName + beforeExample] = true;
		        }
		      }
		    }

		    if (type === REACT_FRAGMENT_TYPE) {
		      validateFragmentProps(element);
		    } else {
		      validatePropTypes(element);
		    }

		    return element;
		  }
		} // These two functions exist to still get child warnings in dev
		// even with the prod transform. This means that jsxDEV is purely
		// opt-in behavior for better messages but that we won't stop
		// giving you warnings if you use production apis.

		function jsxWithValidationStatic(type, props, key) {
		  {
		    return jsxWithValidation(type, props, key, true);
		  }
		}
		function jsxWithValidationDynamic(type, props, key) {
		  {
		    return jsxWithValidation(type, props, key, false);
		  }
		}

		var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
		// for now we can ship identical prod functions

		var jsxs =  jsxWithValidationStatic ;

		reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
		reactJsxRuntime_development.jsx = jsx;
		reactJsxRuntime_development.jsxs = jsxs;
		  })();
		}
		return reactJsxRuntime_development;
	}

	var hasRequiredJsxRuntime;

	function requireJsxRuntime () {
		if (hasRequiredJsxRuntime) return jsxRuntime.exports;
		hasRequiredJsxRuntime = 1;

		if (process.env.NODE_ENV === 'production') {
		  jsxRuntime.exports = requireReactJsxRuntime_production_min();
		} else {
		  jsxRuntime.exports = requireReactJsxRuntime_development();
		}
		return jsxRuntime.exports;
	}

	var jsxRuntimeExports = requireJsxRuntime();

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Built-in value references. */
	var Symbol$1 = root.Symbol;

	/** Used for built-in method references. */
	var objectProto$f = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$c = objectProto$f.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$f.toString;

	/** Built-in value references. */
	var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty$c.call(value, symToStringTag$1),
	      tag = value[symToStringTag$1];

	  try {
	    value[symToStringTag$1] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString$1.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag$1] = tag;
	    } else {
	      delete value[symToStringTag$1];
	    }
	  }
	  return result;
	}

	/** Used for built-in method references. */
	var objectProto$e = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto$e.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag$2 = '[object Function]',
	    genTag$1 = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
	}

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	/** Used for built-in method references. */
	var funcProto$2 = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$2 = funcProto$2.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString$2.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto$1 = Function.prototype,
	    objectProto$d = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$1 = funcProto$1.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$b = objectProto$d.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString$1.call(hasOwnProperty$b).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/* Built-in method references that are verified to be native. */
	var WeakMap$1 = getNative(root, 'WeakMap');

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER$1 = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER$1 : length;

	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/** Used for built-in method references. */
	var objectProto$c = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$a = objectProto$c.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty$a.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	/** Used for built-in method references. */
	var objectProto$b = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$b;

	  return value === proto;
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/** `Object#toString` result references. */
	var argsTag$3 = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag$3;
	}

	/** Used for built-in method references. */
	var objectProto$a = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$9 = objectProto$a.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable$1 = objectProto$a.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty$9.call(value, 'callee') &&
	    !propertyIsEnumerable$1.call(value, 'callee');
	};

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	/** Detect free variable `exports`. */
	var freeExports$2 = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule$2 = freeExports$2 && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;

	/** Built-in value references. */
	var Buffer$1 = moduleExports$2 ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	/** `Object#toString` result references. */
	var argsTag$2 = '[object Arguments]',
	    arrayTag$2 = '[object Array]',
	    boolTag$3 = '[object Boolean]',
	    dateTag$3 = '[object Date]',
	    errorTag$2 = '[object Error]',
	    funcTag$1 = '[object Function]',
	    mapTag$5 = '[object Map]',
	    numberTag$3 = '[object Number]',
	    objectTag$4 = '[object Object]',
	    regexpTag$3 = '[object RegExp]',
	    setTag$5 = '[object Set]',
	    stringTag$3 = '[object String]',
	    weakMapTag$2 = '[object WeakMap]';

	var arrayBufferTag$3 = '[object ArrayBuffer]',
	    dataViewTag$4 = '[object DataView]',
	    float32Tag$2 = '[object Float32Array]',
	    float64Tag$2 = '[object Float64Array]',
	    int8Tag$2 = '[object Int8Array]',
	    int16Tag$2 = '[object Int16Array]',
	    int32Tag$2 = '[object Int32Array]',
	    uint8Tag$2 = '[object Uint8Array]',
	    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
	    uint16Tag$2 = '[object Uint16Array]',
	    uint32Tag$2 = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] =
	typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] =
	typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] =
	typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] =
	typedArrayTags[uint32Tag$2] = true;
	typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] =
	typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] =
	typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] =
	typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] =
	typedArrayTags[mapTag$5] = typedArrayTags[numberTag$3] =
	typedArrayTags[objectTag$4] = typedArrayTags[regexpTag$3] =
	typedArrayTags[setTag$5] = typedArrayTags[stringTag$3] =
	typedArrayTags[weakMapTag$2] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	/** Detect free variable `exports`. */
	var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports$1 && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule$1 && freeModule$1.require && freeModule$1.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	/** Used for built-in method references. */
	var objectProto$9 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$8 = objectProto$9.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty$8.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	/** Used for built-in method references. */
	var objectProto$8 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$7 = objectProto$8.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty$7.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/** Used for built-in method references. */
	var objectProto$7 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty$6.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto$6 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED$2 ? undefined : result;
	  }
	  return hasOwnProperty$5.call(data, key) ? data[key] : undefined;
	}

	/** Used for built-in method references. */
	var objectProto$5 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty$4.call(data, key);
	}

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
	  return this;
	}

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/* Built-in method references that are verified to be native. */
	var Map$1 = getNative(root, 'Map');

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map$1 || ListCache),
	    'string': new Hash
	  };
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	/** `Object#toString` result references. */
	var objectTag$3 = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto$4 = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag$3) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty$3.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map$1 || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	  buffer.copy(result);
	  return result;
	}

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	/** Used for built-in method references. */
	var objectProto$3 = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	/* Built-in method references that are verified to be native. */
	var Promise$1 = getNative(root, 'Promise');

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	/** `Object#toString` result references. */
	var mapTag$4 = '[object Map]',
	    objectTag$2 = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag$4 = '[object Set]',
	    weakMapTag$1 = '[object WeakMap]';

	var dataViewTag$3 = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map$1),
	    promiseCtorString = toSource(Promise$1),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap$1);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$3) ||
	    (Map$1 && getTag(new Map$1) != mapTag$4) ||
	    (Promise$1 && getTag(Promise$1.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag$4) ||
	    (WeakMap$1 && getTag(new WeakMap$1) != weakMapTag$1)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag$2 ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag$3;
	        case mapCtorString: return mapTag$4;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag$4;
	        case weakMapCtorString: return weakMapTag$1;
	      }
	    }
	    return result;
	  };
	}

	/** Used for built-in method references. */
	var objectProto$2 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = new array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty$2.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = cloneArrayBuffer(dataView.buffer) ;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	/** Used to convert symbols to primitives and strings. */
	var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : undefined,
	    symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : undefined;

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
	}

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	/** `Object#toString` result references. */
	var boolTag$2 = '[object Boolean]',
	    dateTag$2 = '[object Date]',
	    mapTag$3 = '[object Map]',
	    numberTag$2 = '[object Number]',
	    regexpTag$2 = '[object RegExp]',
	    setTag$3 = '[object Set]',
	    stringTag$2 = '[object String]',
	    symbolTag$2 = '[object Symbol]';

	var arrayBufferTag$2 = '[object ArrayBuffer]',
	    dataViewTag$2 = '[object DataView]',
	    float32Tag$1 = '[object Float32Array]',
	    float64Tag$1 = '[object Float64Array]',
	    int8Tag$1 = '[object Int8Array]',
	    int16Tag$1 = '[object Int16Array]',
	    int32Tag$1 = '[object Int32Array]',
	    uint8Tag$1 = '[object Uint8Array]',
	    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
	    uint16Tag$1 = '[object Uint16Array]',
	    uint32Tag$1 = '[object Uint32Array]';

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag$2:
	      return cloneArrayBuffer(object);

	    case boolTag$2:
	    case dateTag$2:
	      return new Ctor(+object);

	    case dataViewTag$2:
	      return cloneDataView(object);

	    case float32Tag$1: case float64Tag$1:
	    case int8Tag$1: case int16Tag$1: case int32Tag$1:
	    case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
	      return cloneTypedArray(object, isDeep);

	    case mapTag$3:
	      return new Ctor;

	    case numberTag$2:
	    case stringTag$2:
	      return new Ctor(object);

	    case regexpTag$2:
	      return cloneRegExp(object);

	    case setTag$3:
	      return new Ctor;

	    case symbolTag$2:
	      return cloneSymbol(object);
	  }
	}

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	/** `Object#toString` result references. */
	var mapTag$2 = '[object Map]';

	/**
	 * The base implementation of `_.isMap` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 */
	function baseIsMap(value) {
	  return isObjectLike(value) && getTag(value) == mapTag$2;
	}

	/* Node.js helper references. */
	var nodeIsMap = nodeUtil && nodeUtil.isMap;

	/**
	 * Checks if `value` is classified as a `Map` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 * @example
	 *
	 * _.isMap(new Map);
	 * // => true
	 *
	 * _.isMap(new WeakMap);
	 * // => false
	 */
	var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

	/** `Object#toString` result references. */
	var setTag$2 = '[object Set]';

	/**
	 * The base implementation of `_.isSet` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 */
	function baseIsSet(value) {
	  return isObjectLike(value) && getTag(value) == setTag$2;
	}

	/* Node.js helper references. */
	var nodeIsSet = nodeUtil && nodeUtil.isSet;

	/**
	 * Checks if `value` is classified as a `Set` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 * @example
	 *
	 * _.isSet(new Set);
	 * // => true
	 *
	 * _.isSet(new WeakSet);
	 * // => false
	 */
	var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG$1 = 1;

	/** `Object#toString` result references. */
	var argsTag$1 = '[object Arguments]',
	    arrayTag$1 = '[object Array]',
	    boolTag$1 = '[object Boolean]',
	    dateTag$1 = '[object Date]',
	    errorTag$1 = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag$1 = '[object Map]',
	    numberTag$1 = '[object Number]',
	    objectTag$1 = '[object Object]',
	    regexpTag$1 = '[object RegExp]',
	    setTag$1 = '[object Set]',
	    stringTag$1 = '[object String]',
	    symbolTag$1 = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag$1 = '[object ArrayBuffer]',
	    dataViewTag$1 = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] =
	cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] =
	cloneableTags[boolTag$1] = cloneableTags[dateTag$1] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag$1] =
	cloneableTags[numberTag$1] = cloneableTags[objectTag$1] =
	cloneableTags[regexpTag$1] = cloneableTags[setTag$1] =
	cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag$1] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Deep clone
	 *  2 - Flatten inherited properties
	 *  4 - Clone symbols
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, bitmask, customizer, key, object, stack) {
	  var result,
	      isDeep = bitmask & CLONE_DEEP_FLAG$1;
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;

	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag$1 || tag == argsTag$1 || (isFunc && !object)) {
	      result = (isFunc) ? {} : initCloneObject(value);
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  if (isSet(value)) {
	    value.forEach(function(subValue) {
	      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
	    });
	  } else if (isMap(value)) {
	    value.forEach(function(subValue, key) {
	      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
	    });
	  }

	  var keysFunc = (getAllKeys)
	    ;

	  var props = isArr ? undefined : keysFunc(value);
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	  });
	  return result;
	}

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1,
	    CLONE_SYMBOLS_FLAG = 4;

	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.clone
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var deep = _.cloneDeep(objects);
	 * console.log(deep[0] === objects[0]);
	 * // => false
	 */
	function cloneDeep(value) {
	  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
	}

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$3 = 1,
	    COMPARE_UNORDERED_FLAG$1 = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Check that cyclic values are equal.
	  var arrStacked = stack.get(array);
	  var othStacked = stack.get(other);
	  if (arrStacked && othStacked) {
	    return arrStacked == other && othStacked == array;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG$1) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$2 = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$1 = 1;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
	      return false;
	    }
	  }
	  // Check that cyclic values are equal.
	  var objStacked = stack.get(object);
	  var othStacked = stack.get(other);
	  if (objStacked && othStacked) {
	    return objStacked == other && othStacked == object;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);

	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;

	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function safeGet(object, key) {
	  if (key === 'constructor' && typeof object[key] === 'function') {
	    return;
	  }

	  if (key == '__proto__') {
	    return;
	  }

	  return object[key];
	}

	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return copyObject(value, keysIn(value));
	}

	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = safeGet(object, key),
	      srcValue = safeGet(source, key),
	      stacked = stack.get(srcValue);

	  if (stacked) {
	    assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;

	  var isCommon = newValue === undefined;

	  if (isCommon) {
	    var isArr = isArray(srcValue),
	        isBuff = !isArr && isBuffer(srcValue),
	        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

	    newValue = srcValue;
	    if (isArr || isBuff || isTyped) {
	      if (isArray(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      }
	      else if (isBuff) {
	        isCommon = false;
	        newValue = cloneBuffer(srcValue, true);
	      }
	      else if (isTyped) {
	        isCommon = false;
	        newValue = cloneTypedArray(srcValue, true);
	      }
	      else {
	        newValue = [];
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      newValue = objValue;
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || isFunction(objValue)) {
	        newValue = initCloneObject(srcValue);
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    stack.set(srcValue, newValue);
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	    stack['delete'](srcValue);
	  }
	  assignMergeValue(object, key, newValue);
	}

	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  baseFor(source, function(srcValue, key) {
	    stack || (stack = new Stack);
	    if (isObject(srcValue)) {
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
	        : undefined;

	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  }, keysIn);
	}

	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent.
	 *
	 * **Note:** This method supports comparing arrays, array buffers, booleans,
	 * date objects, error objects, maps, numbers, `Object` objects, regexes,
	 * sets, strings, symbols, and typed arrays. `Object` objects are compared
	 * by their own, not inherited, enumerable properties. Functions and DOM
	 * nodes are compared by strict equality, i.e. `===`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * object === other;
	 * // => false
	 */
	function isEqual$1(value, other) {
	  return baseIsEqual(value, other);
	}

	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively. Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = {
	 *   'a': [{ 'b': 2 }, { 'd': 4 }]
	 * };
	 *
	 * var other = {
	 *   'a': [{ 'c': 3 }, { 'e': 5 }]
	 * };
	 *
	 * _.merge(object, other);
	 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	 */
	var merge = createAssigner(function(object, source, srcIndex) {
	  baseMerge(object, source, srcIndex);
	});

	var Scope = /* @__PURE__ */ ((Scope2) => (Scope2[Scope2.TYPE = 3] = "TYPE", Scope2[Scope2.LEVEL = 12] = "LEVEL", Scope2[Scope2.ATTRIBUTE = 13] = "ATTRIBUTE", Scope2[Scope2.BLOT = 14] = "BLOT", Scope2[Scope2.INLINE = 7] = "INLINE", Scope2[Scope2.BLOCK = 11] = "BLOCK", Scope2[Scope2.BLOCK_BLOT = 10] = "BLOCK_BLOT", Scope2[Scope2.INLINE_BLOT = 6] = "INLINE_BLOT", Scope2[Scope2.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", Scope2[Scope2.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", Scope2[Scope2.ANY = 15] = "ANY", Scope2))(Scope || {});
	class Attributor {
	  constructor(attrName, keyName, options = {}) {
	    this.attrName = attrName, this.keyName = keyName;
	    const attributeBit = Scope.TYPE & Scope.ATTRIBUTE;
	    this.scope = options.scope != null ? (
	      // Ignore type bits, force attribute bit
	      options.scope & Scope.LEVEL | attributeBit
	    ) : Scope.ATTRIBUTE, options.whitelist != null && (this.whitelist = options.whitelist);
	  }
	  static keys(node) {
	    return Array.from(node.attributes).map((item) => item.name);
	  }
	  add(node, value) {
	    return this.canAdd(node, value) ? (node.setAttribute(this.keyName, value), true) : false;
	  }
	  canAdd(_node, value) {
	    return this.whitelist == null ? true : typeof value == "string" ? this.whitelist.indexOf(value.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(value) > -1;
	  }
	  remove(node) {
	    node.removeAttribute(this.keyName);
	  }
	  value(node) {
	    const value = node.getAttribute(this.keyName);
	    return this.canAdd(node, value) && value ? value : "";
	  }
	}
	class ParchmentError extends Error {
	  constructor(message) {
	    message = "[Parchment] " + message, super(message), this.message = message, this.name = this.constructor.name;
	  }
	}
	const _Registry = class _Registry {
	  constructor() {
	    this.attributes = {}, this.classes = {}, this.tags = {}, this.types = {};
	  }
	  static find(node, bubble = false) {
	    if (node == null)
	      return null;
	    if (this.blots.has(node))
	      return this.blots.get(node) || null;
	    if (bubble) {
	      let parentNode = null;
	      try {
	        parentNode = node.parentNode;
	      } catch {
	        return null;
	      }
	      return this.find(parentNode, bubble);
	    }
	    return null;
	  }
	  create(scroll, input, value) {
	    const match2 = this.query(input);
	    if (match2 == null)
	      throw new ParchmentError(`Unable to create ${input} blot`);
	    const blotClass = match2, node = (
	      // @ts-expect-error Fix me later
	      input instanceof Node || input.nodeType === Node.TEXT_NODE ? input : blotClass.create(value)
	    ), blot = new blotClass(scroll, node, value);
	    return _Registry.blots.set(blot.domNode, blot), blot;
	  }
	  find(node, bubble = false) {
	    return _Registry.find(node, bubble);
	  }
	  query(query, scope = Scope.ANY) {
	    let match2;
	    return typeof query == "string" ? match2 = this.types[query] || this.attributes[query] : query instanceof Text || query.nodeType === Node.TEXT_NODE ? match2 = this.types.text : typeof query == "number" ? query & Scope.LEVEL & Scope.BLOCK ? match2 = this.types.block : query & Scope.LEVEL & Scope.INLINE && (match2 = this.types.inline) : query instanceof Element && ((query.getAttribute("class") || "").split(/\s+/).some((name) => (match2 = this.classes[name], !!match2)), match2 = match2 || this.tags[query.tagName]), match2 == null ? null : "scope" in match2 && scope & Scope.LEVEL & match2.scope && scope & Scope.TYPE & match2.scope ? match2 : null;
	  }
	  register(...definitions) {
	    return definitions.map((definition) => {
	      const isBlot = "blotName" in definition, isAttr = "attrName" in definition;
	      if (!isBlot && !isAttr)
	        throw new ParchmentError("Invalid definition");
	      if (isBlot && definition.blotName === "abstract")
	        throw new ParchmentError("Cannot register abstract class");
	      const key = isBlot ? definition.blotName : isAttr ? definition.attrName : void 0;
	      return this.types[key] = definition, isAttr ? typeof definition.keyName == "string" && (this.attributes[definition.keyName] = definition) : isBlot && (definition.className && (this.classes[definition.className] = definition), definition.tagName && (Array.isArray(definition.tagName) ? definition.tagName = definition.tagName.map((tagName) => tagName.toUpperCase()) : definition.tagName = definition.tagName.toUpperCase(), (Array.isArray(definition.tagName) ? definition.tagName : [definition.tagName]).forEach((tag) => {
	        (this.tags[tag] == null || definition.className == null) && (this.tags[tag] = definition);
	      }))), definition;
	    });
	  }
	};
	_Registry.blots = /* @__PURE__ */ new WeakMap();
	let Registry = _Registry;
	function match(node, prefix) {
	  return (node.getAttribute("class") || "").split(/\s+/).filter((name) => name.indexOf(`${prefix}-`) === 0);
	}
	class ClassAttributor extends Attributor {
	  static keys(node) {
	    return (node.getAttribute("class") || "").split(/\s+/).map((name) => name.split("-").slice(0, -1).join("-"));
	  }
	  add(node, value) {
	    return this.canAdd(node, value) ? (this.remove(node), node.classList.add(`${this.keyName}-${value}`), true) : false;
	  }
	  remove(node) {
	    match(node, this.keyName).forEach((name) => {
	      node.classList.remove(name);
	    }), node.classList.length === 0 && node.removeAttribute("class");
	  }
	  value(node) {
	    const value = (match(node, this.keyName)[0] || "").slice(this.keyName.length + 1);
	    return this.canAdd(node, value) ? value : "";
	  }
	}
	const ClassAttributor$1 = ClassAttributor;
	function camelize(name) {
	  const parts = name.split("-"), rest = parts.slice(1).map((part) => part[0].toUpperCase() + part.slice(1)).join("");
	  return parts[0] + rest;
	}
	class StyleAttributor extends Attributor {
	  static keys(node) {
	    return (node.getAttribute("style") || "").split(";").map((value) => value.split(":")[0].trim());
	  }
	  add(node, value) {
	    return this.canAdd(node, value) ? (node.style[camelize(this.keyName)] = value, true) : false;
	  }
	  remove(node) {
	    node.style[camelize(this.keyName)] = "", node.getAttribute("style") || node.removeAttribute("style");
	  }
	  value(node) {
	    const value = node.style[camelize(this.keyName)];
	    return this.canAdd(node, value) ? value : "";
	  }
	}
	const StyleAttributor$1 = StyleAttributor;
	class AttributorStore {
	  constructor(domNode) {
	    this.attributes = {}, this.domNode = domNode, this.build();
	  }
	  attribute(attribute, value) {
	    value ? attribute.add(this.domNode, value) && (attribute.value(this.domNode) != null ? this.attributes[attribute.attrName] = attribute : delete this.attributes[attribute.attrName]) : (attribute.remove(this.domNode), delete this.attributes[attribute.attrName]);
	  }
	  build() {
	    this.attributes = {};
	    const blot = Registry.find(this.domNode);
	    if (blot == null)
	      return;
	    const attributes = Attributor.keys(this.domNode), classes = ClassAttributor$1.keys(this.domNode), styles = StyleAttributor$1.keys(this.domNode);
	    attributes.concat(classes).concat(styles).forEach((name) => {
	      const attr = blot.scroll.query(name, Scope.ATTRIBUTE);
	      attr instanceof Attributor && (this.attributes[attr.attrName] = attr);
	    });
	  }
	  copy(target) {
	    Object.keys(this.attributes).forEach((key) => {
	      const value = this.attributes[key].value(this.domNode);
	      target.format(key, value);
	    });
	  }
	  move(target) {
	    this.copy(target), Object.keys(this.attributes).forEach((key) => {
	      this.attributes[key].remove(this.domNode);
	    }), this.attributes = {};
	  }
	  values() {
	    return Object.keys(this.attributes).reduce(
	      (attributes, name) => (attributes[name] = this.attributes[name].value(this.domNode), attributes),
	      {}
	    );
	  }
	}
	const AttributorStore$1 = AttributorStore, _ShadowBlot = class _ShadowBlot {
	  constructor(scroll, domNode) {
	    this.scroll = scroll, this.domNode = domNode, Registry.blots.set(domNode, this), this.prev = null, this.next = null;
	  }
	  static create(rawValue) {
	    if (this.tagName == null)
	      throw new ParchmentError("Blot definition missing tagName");
	    let node, value;
	    return Array.isArray(this.tagName) ? (typeof rawValue == "string" ? (value = rawValue.toUpperCase(), parseInt(value, 10).toString() === value && (value = parseInt(value, 10))) : typeof rawValue == "number" && (value = rawValue), typeof value == "number" ? node = document.createElement(this.tagName[value - 1]) : value && this.tagName.indexOf(value) > -1 ? node = document.createElement(value) : node = document.createElement(this.tagName[0])) : node = document.createElement(this.tagName), this.className && node.classList.add(this.className), node;
	  }
	  // Hack for accessing inherited static methods
	  get statics() {
	    return this.constructor;
	  }
	  attach() {
	  }
	  clone() {
	    const domNode = this.domNode.cloneNode(false);
	    return this.scroll.create(domNode);
	  }
	  detach() {
	    this.parent != null && this.parent.removeChild(this), Registry.blots.delete(this.domNode);
	  }
	  deleteAt(index, length) {
	    this.isolate(index, length).remove();
	  }
	  formatAt(index, length, name, value) {
	    const blot = this.isolate(index, length);
	    if (this.scroll.query(name, Scope.BLOT) != null && value)
	      blot.wrap(name, value);
	    else if (this.scroll.query(name, Scope.ATTRIBUTE) != null) {
	      const parent = this.scroll.create(this.statics.scope);
	      blot.wrap(parent), parent.format(name, value);
	    }
	  }
	  insertAt(index, value, def) {
	    const blot = def == null ? this.scroll.create("text", value) : this.scroll.create(value, def), ref = this.split(index);
	    this.parent.insertBefore(blot, ref || void 0);
	  }
	  isolate(index, length) {
	    const target = this.split(index);
	    if (target == null)
	      throw new Error("Attempt to isolate at end");
	    return target.split(length), target;
	  }
	  length() {
	    return 1;
	  }
	  offset(root = this.parent) {
	    return this.parent == null || this === root ? 0 : this.parent.children.offset(this) + this.parent.offset(root);
	  }
	  optimize(_context) {
	    this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer) && this.wrap(this.statics.requiredContainer.blotName);
	  }
	  remove() {
	    this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
	  }
	  replaceWith(name, value) {
	    const replacement = typeof name == "string" ? this.scroll.create(name, value) : name;
	    return this.parent != null && (this.parent.insertBefore(replacement, this.next || void 0), this.remove()), replacement;
	  }
	  split(index, _force) {
	    return index === 0 ? this : this.next;
	  }
	  update(_mutations, _context) {
	  }
	  wrap(name, value) {
	    const wrapper = typeof name == "string" ? this.scroll.create(name, value) : name;
	    if (this.parent != null && this.parent.insertBefore(wrapper, this.next || void 0), typeof wrapper.appendChild != "function")
	      throw new ParchmentError(`Cannot wrap ${name}`);
	    return wrapper.appendChild(this), wrapper;
	  }
	};
	_ShadowBlot.blotName = "abstract";
	let ShadowBlot = _ShadowBlot;
	const _LeafBlot = class _LeafBlot extends ShadowBlot {
	  /**
	   * Returns the value represented by domNode if it is this Blot's type
	   * No checking that domNode can represent this Blot type is required so
	   * applications needing it should check externally before calling.
	   */
	  static value(_domNode) {
	    return true;
	  }
	  /**
	   * Given location represented by node and offset from DOM Selection Range,
	   * return index to that location.
	   */
	  index(node, offset) {
	    return this.domNode === node || this.domNode.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(offset, 1) : -1;
	  }
	  /**
	   * Given index to location within blot, return node and offset representing
	   * that location, consumable by DOM Selection Range
	   */
	  position(index, _inclusive) {
	    let offset = Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);
	    return index > 0 && (offset += 1), [this.parent.domNode, offset];
	  }
	  /**
	   * Return value represented by this blot
	   * Should not change without interaction from API or
	   * user change detectable by update()
	   */
	  value() {
	    return {
	      [this.statics.blotName]: this.statics.value(this.domNode) || true
	    };
	  }
	};
	_LeafBlot.scope = Scope.INLINE_BLOT;
	let LeafBlot = _LeafBlot;
	const LeafBlot$1 = LeafBlot;
	class LinkedList {
	  constructor() {
	    this.head = null, this.tail = null, this.length = 0;
	  }
	  append(...nodes) {
	    if (this.insertBefore(nodes[0], null), nodes.length > 1) {
	      const rest = nodes.slice(1);
	      this.append(...rest);
	    }
	  }
	  at(index) {
	    const next = this.iterator();
	    let cur = next();
	    for (; cur && index > 0; )
	      index -= 1, cur = next();
	    return cur;
	  }
	  contains(node) {
	    const next = this.iterator();
	    let cur = next();
	    for (; cur; ) {
	      if (cur === node)
	        return true;
	      cur = next();
	    }
	    return false;
	  }
	  indexOf(node) {
	    const next = this.iterator();
	    let cur = next(), index = 0;
	    for (; cur; ) {
	      if (cur === node)
	        return index;
	      index += 1, cur = next();
	    }
	    return -1;
	  }
	  insertBefore(node, refNode) {
	    node != null && (this.remove(node), node.next = refNode, refNode != null ? (node.prev = refNode.prev, refNode.prev != null && (refNode.prev.next = node), refNode.prev = node, refNode === this.head && (this.head = node)) : this.tail != null ? (this.tail.next = node, node.prev = this.tail, this.tail = node) : (node.prev = null, this.head = this.tail = node), this.length += 1);
	  }
	  offset(target) {
	    let index = 0, cur = this.head;
	    for (; cur != null; ) {
	      if (cur === target)
	        return index;
	      index += cur.length(), cur = cur.next;
	    }
	    return -1;
	  }
	  remove(node) {
	    this.contains(node) && (node.prev != null && (node.prev.next = node.next), node.next != null && (node.next.prev = node.prev), node === this.head && (this.head = node.next), node === this.tail && (this.tail = node.prev), this.length -= 1);
	  }
	  iterator(curNode = this.head) {
	    return () => {
	      const ret = curNode;
	      return curNode != null && (curNode = curNode.next), ret;
	    };
	  }
	  find(index, inclusive = false) {
	    const next = this.iterator();
	    let cur = next();
	    for (; cur; ) {
	      const length = cur.length();
	      if (index < length || inclusive && index === length && (cur.next == null || cur.next.length() !== 0))
	        return [cur, index];
	      index -= length, cur = next();
	    }
	    return [null, 0];
	  }
	  forEach(callback) {
	    const next = this.iterator();
	    let cur = next();
	    for (; cur; )
	      callback(cur), cur = next();
	  }
	  forEachAt(index, length, callback) {
	    if (length <= 0)
	      return;
	    const [startNode, offset] = this.find(index);
	    let curIndex = index - offset;
	    const next = this.iterator(startNode);
	    let cur = next();
	    for (; cur && curIndex < index + length; ) {
	      const curLength = cur.length();
	      index > curIndex ? callback(
	        cur,
	        index - curIndex,
	        Math.min(length, curIndex + curLength - index)
	      ) : callback(cur, 0, Math.min(curLength, index + length - curIndex)), curIndex += curLength, cur = next();
	    }
	  }
	  map(callback) {
	    return this.reduce((memo, cur) => (memo.push(callback(cur)), memo), []);
	  }
	  reduce(callback, memo) {
	    const next = this.iterator();
	    let cur = next();
	    for (; cur; )
	      memo = callback(memo, cur), cur = next();
	    return memo;
	  }
	}
	function makeAttachedBlot(node, scroll) {
	  const found = scroll.find(node);
	  if (found)
	    return found;
	  try {
	    return scroll.create(node);
	  } catch {
	    const blot = scroll.create(Scope.INLINE);
	    return Array.from(node.childNodes).forEach((child) => {
	      blot.domNode.appendChild(child);
	    }), node.parentNode && node.parentNode.replaceChild(blot.domNode, node), blot.attach(), blot;
	  }
	}
	const _ParentBlot = class _ParentBlot extends ShadowBlot {
	  constructor(scroll, domNode) {
	    super(scroll, domNode), this.uiNode = null, this.build();
	  }
	  appendChild(other) {
	    this.insertBefore(other);
	  }
	  attach() {
	    super.attach(), this.children.forEach((child) => {
	      child.attach();
	    });
	  }
	  attachUI(node) {
	    this.uiNode != null && this.uiNode.remove(), this.uiNode = node, _ParentBlot.uiClass && this.uiNode.classList.add(_ParentBlot.uiClass), this.uiNode.setAttribute("contenteditable", "false"), this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
	  }
	  /**
	   * Called during construction, should fill its own children LinkedList.
	   */
	  build() {
	    this.children = new LinkedList(), Array.from(this.domNode.childNodes).filter((node) => node !== this.uiNode).reverse().forEach((node) => {
	      try {
	        const child = makeAttachedBlot(node, this.scroll);
	        this.insertBefore(child, this.children.head || void 0);
	      } catch (err) {
	        if (err instanceof ParchmentError)
	          return;
	        throw err;
	      }
	    });
	  }
	  deleteAt(index, length) {
	    if (index === 0 && length === this.length())
	      return this.remove();
	    this.children.forEachAt(index, length, (child, offset, childLength) => {
	      child.deleteAt(offset, childLength);
	    });
	  }
	  descendant(criteria, index = 0) {
	    const [child, offset] = this.children.find(index);
	    return criteria.blotName == null && criteria(child) || criteria.blotName != null && child instanceof criteria ? [child, offset] : child instanceof _ParentBlot ? child.descendant(criteria, offset) : [null, -1];
	  }
	  descendants(criteria, index = 0, length = Number.MAX_VALUE) {
	    let descendants = [], lengthLeft = length;
	    return this.children.forEachAt(
	      index,
	      length,
	      (child, childIndex, childLength) => {
	        (criteria.blotName == null && criteria(child) || criteria.blotName != null && child instanceof criteria) && descendants.push(child), child instanceof _ParentBlot && (descendants = descendants.concat(
	          child.descendants(criteria, childIndex, lengthLeft)
	        )), lengthLeft -= childLength;
	      }
	    ), descendants;
	  }
	  detach() {
	    this.children.forEach((child) => {
	      child.detach();
	    }), super.detach();
	  }
	  enforceAllowedChildren() {
	    let done = false;
	    this.children.forEach((child) => {
	      done || this.statics.allowedChildren.some(
	        (def) => child instanceof def
	      ) || (child.statics.scope === Scope.BLOCK_BLOT ? (child.next != null && this.splitAfter(child), child.prev != null && this.splitAfter(child.prev), child.parent.unwrap(), done = true) : child instanceof _ParentBlot ? child.unwrap() : child.remove());
	    });
	  }
	  formatAt(index, length, name, value) {
	    this.children.forEachAt(index, length, (child, offset, childLength) => {
	      child.formatAt(offset, childLength, name, value);
	    });
	  }
	  insertAt(index, value, def) {
	    const [child, offset] = this.children.find(index);
	    if (child)
	      child.insertAt(offset, value, def);
	    else {
	      const blot = def == null ? this.scroll.create("text", value) : this.scroll.create(value, def);
	      this.appendChild(blot);
	    }
	  }
	  insertBefore(childBlot, refBlot) {
	    childBlot.parent != null && childBlot.parent.children.remove(childBlot);
	    let refDomNode = null;
	    this.children.insertBefore(childBlot, refBlot || null), childBlot.parent = this, refBlot != null && (refDomNode = refBlot.domNode), (this.domNode.parentNode !== childBlot.domNode || this.domNode.nextSibling !== refDomNode) && this.domNode.insertBefore(childBlot.domNode, refDomNode), childBlot.attach();
	  }
	  length() {
	    return this.children.reduce((memo, child) => memo + child.length(), 0);
	  }
	  moveChildren(targetParent, refNode) {
	    this.children.forEach((child) => {
	      targetParent.insertBefore(child, refNode);
	    });
	  }
	  optimize(context) {
	    if (super.optimize(context), this.enforceAllowedChildren(), this.uiNode != null && this.uiNode !== this.domNode.firstChild && this.domNode.insertBefore(this.uiNode, this.domNode.firstChild), this.children.length === 0)
	      if (this.statics.defaultChild != null) {
	        const child = this.scroll.create(this.statics.defaultChild.blotName);
	        this.appendChild(child);
	      } else
	        this.remove();
	  }
	  path(index, inclusive = false) {
	    const [child, offset] = this.children.find(index, inclusive), position = [[this, index]];
	    return child instanceof _ParentBlot ? position.concat(child.path(offset, inclusive)) : (child != null && position.push([child, offset]), position);
	  }
	  removeChild(child) {
	    this.children.remove(child);
	  }
	  replaceWith(name, value) {
	    const replacement = typeof name == "string" ? this.scroll.create(name, value) : name;
	    return replacement instanceof _ParentBlot && this.moveChildren(replacement), super.replaceWith(replacement);
	  }
	  split(index, force = false) {
	    if (!force) {
	      if (index === 0)
	        return this;
	      if (index === this.length())
	        return this.next;
	    }
	    const after = this.clone();
	    return this.parent && this.parent.insertBefore(after, this.next || void 0), this.children.forEachAt(index, this.length(), (child, offset, _length) => {
	      const split = child.split(offset, force);
	      split != null && after.appendChild(split);
	    }), after;
	  }
	  splitAfter(child) {
	    const after = this.clone();
	    for (; child.next != null; )
	      after.appendChild(child.next);
	    return this.parent && this.parent.insertBefore(after, this.next || void 0), after;
	  }
	  unwrap() {
	    this.parent && this.moveChildren(this.parent, this.next || void 0), this.remove();
	  }
	  update(mutations, _context) {
	    const addedNodes = [], removedNodes = [];
	    mutations.forEach((mutation) => {
	      mutation.target === this.domNode && mutation.type === "childList" && (addedNodes.push(...mutation.addedNodes), removedNodes.push(...mutation.removedNodes));
	    }), removedNodes.forEach((node) => {
	      if (node.parentNode != null && // @ts-expect-error Fix me later
	      node.tagName !== "IFRAME" && document.body.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY)
	        return;
	      const blot = this.scroll.find(node);
	      blot != null && (blot.domNode.parentNode == null || blot.domNode.parentNode === this.domNode) && blot.detach();
	    }), addedNodes.filter((node) => node.parentNode === this.domNode && node !== this.uiNode).sort((a, b) => a === b ? 0 : a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1).forEach((node) => {
	      let refBlot = null;
	      node.nextSibling != null && (refBlot = this.scroll.find(node.nextSibling));
	      const blot = makeAttachedBlot(node, this.scroll);
	      (blot.next !== refBlot || blot.next == null) && (blot.parent != null && blot.parent.removeChild(this), this.insertBefore(blot, refBlot || void 0));
	    }), this.enforceAllowedChildren();
	  }
	};
	_ParentBlot.uiClass = "";
	let ParentBlot = _ParentBlot;
	const ParentBlot$1 = ParentBlot;
	function isEqual(obj1, obj2) {
	  if (Object.keys(obj1).length !== Object.keys(obj2).length)
	    return false;
	  for (const prop in obj1)
	    if (obj1[prop] !== obj2[prop])
	      return false;
	  return true;
	}
	const _InlineBlot = class _InlineBlot extends ParentBlot$1 {
	  static create(value) {
	    return super.create(value);
	  }
	  static formats(domNode, scroll) {
	    const match2 = scroll.query(_InlineBlot.blotName);
	    if (!(match2 != null && domNode.tagName === match2.tagName)) {
	      if (typeof this.tagName == "string")
	        return true;
	      if (Array.isArray(this.tagName))
	        return domNode.tagName.toLowerCase();
	    }
	  }
	  constructor(scroll, domNode) {
	    super(scroll, domNode), this.attributes = new AttributorStore$1(this.domNode);
	  }
	  format(name, value) {
	    if (name === this.statics.blotName && !value)
	      this.children.forEach((child) => {
	        child instanceof _InlineBlot || (child = child.wrap(_InlineBlot.blotName, true)), this.attributes.copy(child);
	      }), this.unwrap();
	    else {
	      const format = this.scroll.query(name, Scope.INLINE);
	      if (format == null)
	        return;
	      format instanceof Attributor ? this.attributes.attribute(format, value) : value && (name !== this.statics.blotName || this.formats()[name] !== value) && this.replaceWith(name, value);
	    }
	  }
	  formats() {
	    const formats = this.attributes.values(), format = this.statics.formats(this.domNode, this.scroll);
	    return format != null && (formats[this.statics.blotName] = format), formats;
	  }
	  formatAt(index, length, name, value) {
	    this.formats()[name] != null || this.scroll.query(name, Scope.ATTRIBUTE) ? this.isolate(index, length).format(name, value) : super.formatAt(index, length, name, value);
	  }
	  optimize(context) {
	    super.optimize(context);
	    const formats = this.formats();
	    if (Object.keys(formats).length === 0)
	      return this.unwrap();
	    const next = this.next;
	    next instanceof _InlineBlot && next.prev === this && isEqual(formats, next.formats()) && (next.moveChildren(this), next.remove());
	  }
	  replaceWith(name, value) {
	    const replacement = super.replaceWith(name, value);
	    return this.attributes.copy(replacement), replacement;
	  }
	  update(mutations, context) {
	    super.update(mutations, context), mutations.some(
	      (mutation) => mutation.target === this.domNode && mutation.type === "attributes"
	    ) && this.attributes.build();
	  }
	  wrap(name, value) {
	    const wrapper = super.wrap(name, value);
	    return wrapper instanceof _InlineBlot && this.attributes.move(wrapper), wrapper;
	  }
	};
	_InlineBlot.allowedChildren = [_InlineBlot, LeafBlot$1], _InlineBlot.blotName = "inline", _InlineBlot.scope = Scope.INLINE_BLOT, _InlineBlot.tagName = "SPAN";
	let InlineBlot = _InlineBlot;
	const InlineBlot$1 = InlineBlot, _BlockBlot = class _BlockBlot extends ParentBlot$1 {
	  static create(value) {
	    return super.create(value);
	  }
	  static formats(domNode, scroll) {
	    const match2 = scroll.query(_BlockBlot.blotName);
	    if (!(match2 != null && domNode.tagName === match2.tagName)) {
	      if (typeof this.tagName == "string")
	        return true;
	      if (Array.isArray(this.tagName))
	        return domNode.tagName.toLowerCase();
	    }
	  }
	  constructor(scroll, domNode) {
	    super(scroll, domNode), this.attributes = new AttributorStore$1(this.domNode);
	  }
	  format(name, value) {
	    const format = this.scroll.query(name, Scope.BLOCK);
	    format != null && (format instanceof Attributor ? this.attributes.attribute(format, value) : name === this.statics.blotName && !value ? this.replaceWith(_BlockBlot.blotName) : value && (name !== this.statics.blotName || this.formats()[name] !== value) && this.replaceWith(name, value));
	  }
	  formats() {
	    const formats = this.attributes.values(), format = this.statics.formats(this.domNode, this.scroll);
	    return format != null && (formats[this.statics.blotName] = format), formats;
	  }
	  formatAt(index, length, name, value) {
	    this.scroll.query(name, Scope.BLOCK) != null ? this.format(name, value) : super.formatAt(index, length, name, value);
	  }
	  insertAt(index, value, def) {
	    if (def == null || this.scroll.query(value, Scope.INLINE) != null)
	      super.insertAt(index, value, def);
	    else {
	      const after = this.split(index);
	      if (after != null) {
	        const blot = this.scroll.create(value, def);
	        after.parent.insertBefore(blot, after);
	      } else
	        throw new Error("Attempt to insertAt after block boundaries");
	    }
	  }
	  replaceWith(name, value) {
	    const replacement = super.replaceWith(name, value);
	    return this.attributes.copy(replacement), replacement;
	  }
	  update(mutations, context) {
	    super.update(mutations, context), mutations.some(
	      (mutation) => mutation.target === this.domNode && mutation.type === "attributes"
	    ) && this.attributes.build();
	  }
	};
	_BlockBlot.blotName = "block", _BlockBlot.scope = Scope.BLOCK_BLOT, _BlockBlot.tagName = "P", _BlockBlot.allowedChildren = [
	  InlineBlot$1,
	  _BlockBlot,
	  LeafBlot$1
	];
	let BlockBlot = _BlockBlot;
	const BlockBlot$1 = BlockBlot, _ContainerBlot = class _ContainerBlot extends ParentBlot$1 {
	  checkMerge() {
	    return this.next !== null && this.next.statics.blotName === this.statics.blotName;
	  }
	  deleteAt(index, length) {
	    super.deleteAt(index, length), this.enforceAllowedChildren();
	  }
	  formatAt(index, length, name, value) {
	    super.formatAt(index, length, name, value), this.enforceAllowedChildren();
	  }
	  insertAt(index, value, def) {
	    super.insertAt(index, value, def), this.enforceAllowedChildren();
	  }
	  optimize(context) {
	    super.optimize(context), this.children.length > 0 && this.next != null && this.checkMerge() && (this.next.moveChildren(this), this.next.remove());
	  }
	};
	_ContainerBlot.blotName = "container", _ContainerBlot.scope = Scope.BLOCK_BLOT;
	let ContainerBlot = _ContainerBlot;
	const ContainerBlot$1 = ContainerBlot;
	class EmbedBlot extends LeafBlot$1 {
	  static formats(_domNode, _scroll) {
	  }
	  format(name, value) {
	    super.formatAt(0, this.length(), name, value);
	  }
	  formatAt(index, length, name, value) {
	    index === 0 && length === this.length() ? this.format(name, value) : super.formatAt(index, length, name, value);
	  }
	  formats() {
	    return this.statics.formats(this.domNode, this.scroll);
	  }
	}
	const EmbedBlot$1 = EmbedBlot, OBSERVER_CONFIG = {
	  attributes: true,
	  characterData: true,
	  characterDataOldValue: true,
	  childList: true,
	  subtree: true
	}, MAX_OPTIMIZE_ITERATIONS = 100, _ScrollBlot = class _ScrollBlot extends ParentBlot$1 {
	  constructor(registry, node) {
	    super(null, node), this.registry = registry, this.scroll = this, this.build(), this.observer = new MutationObserver((mutations) => {
	      this.update(mutations);
	    }), this.observer.observe(this.domNode, OBSERVER_CONFIG), this.attach();
	  }
	  create(input, value) {
	    return this.registry.create(this, input, value);
	  }
	  find(node, bubble = false) {
	    const blot = this.registry.find(node, bubble);
	    return blot ? blot.scroll === this ? blot : bubble ? this.find(blot.scroll.domNode.parentNode, true) : null : null;
	  }
	  query(query, scope = Scope.ANY) {
	    return this.registry.query(query, scope);
	  }
	  register(...definitions) {
	    return this.registry.register(...definitions);
	  }
	  build() {
	    this.scroll != null && super.build();
	  }
	  detach() {
	    super.detach(), this.observer.disconnect();
	  }
	  deleteAt(index, length) {
	    this.update(), index === 0 && length === this.length() ? this.children.forEach((child) => {
	      child.remove();
	    }) : super.deleteAt(index, length);
	  }
	  formatAt(index, length, name, value) {
	    this.update(), super.formatAt(index, length, name, value);
	  }
	  insertAt(index, value, def) {
	    this.update(), super.insertAt(index, value, def);
	  }
	  optimize(mutations = [], context = {}) {
	    super.optimize(context);
	    const mutationsMap = context.mutationsMap || /* @__PURE__ */ new WeakMap();
	    let records = Array.from(this.observer.takeRecords());
	    for (; records.length > 0; )
	      mutations.push(records.pop());
	    const mark = (blot, markParent = true) => {
	      blot == null || blot === this || blot.domNode.parentNode != null && (mutationsMap.has(blot.domNode) || mutationsMap.set(blot.domNode, []), markParent && mark(blot.parent));
	    }, optimize = (blot) => {
	      mutationsMap.has(blot.domNode) && (blot instanceof ParentBlot$1 && blot.children.forEach(optimize), mutationsMap.delete(blot.domNode), blot.optimize(context));
	    };
	    let remaining = mutations;
	    for (let i = 0; remaining.length > 0; i += 1) {
	      if (i >= MAX_OPTIMIZE_ITERATIONS)
	        throw new Error("[Parchment] Maximum optimize iterations reached");
	      for (remaining.forEach((mutation) => {
	        const blot = this.find(mutation.target, true);
	        blot != null && (blot.domNode === mutation.target && (mutation.type === "childList" ? (mark(this.find(mutation.previousSibling, false)), Array.from(mutation.addedNodes).forEach((node) => {
	          const child = this.find(node, false);
	          mark(child, false), child instanceof ParentBlot$1 && child.children.forEach((grandChild) => {
	            mark(grandChild, false);
	          });
	        })) : mutation.type === "attributes" && mark(blot.prev)), mark(blot));
	      }), this.children.forEach(optimize), remaining = Array.from(this.observer.takeRecords()), records = remaining.slice(); records.length > 0; )
	        mutations.push(records.pop());
	    }
	  }
	  update(mutations, context = {}) {
	    mutations = mutations || this.observer.takeRecords();
	    const mutationsMap = /* @__PURE__ */ new WeakMap();
	    mutations.map((mutation) => {
	      const blot = this.find(mutation.target, true);
	      return blot == null ? null : mutationsMap.has(blot.domNode) ? (mutationsMap.get(blot.domNode).push(mutation), null) : (mutationsMap.set(blot.domNode, [mutation]), blot);
	    }).forEach((blot) => {
	      blot != null && blot !== this && mutationsMap.has(blot.domNode) && blot.update(mutationsMap.get(blot.domNode) || [], context);
	    }), context.mutationsMap = mutationsMap, mutationsMap.has(this.domNode) && super.update(mutationsMap.get(this.domNode), context), this.optimize(mutations, context);
	  }
	};
	_ScrollBlot.blotName = "scroll", _ScrollBlot.defaultChild = BlockBlot$1, _ScrollBlot.allowedChildren = [BlockBlot$1, ContainerBlot$1], _ScrollBlot.scope = Scope.BLOCK_BLOT, _ScrollBlot.tagName = "DIV";
	let ScrollBlot = _ScrollBlot;
	const ScrollBlot$1 = ScrollBlot, _TextBlot = class _TextBlot extends LeafBlot$1 {
	  static create(value) {
	    return document.createTextNode(value);
	  }
	  static value(domNode) {
	    return domNode.data;
	  }
	  constructor(scroll, node) {
	    super(scroll, node), this.text = this.statics.value(this.domNode);
	  }
	  deleteAt(index, length) {
	    this.domNode.data = this.text = this.text.slice(0, index) + this.text.slice(index + length);
	  }
	  index(node, offset) {
	    return this.domNode === node ? offset : -1;
	  }
	  insertAt(index, value, def) {
	    def == null ? (this.text = this.text.slice(0, index) + value + this.text.slice(index), this.domNode.data = this.text) : super.insertAt(index, value, def);
	  }
	  length() {
	    return this.text.length;
	  }
	  optimize(context) {
	    super.optimize(context), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof _TextBlot && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
	  }
	  position(index, _inclusive = false) {
	    return [this.domNode, index];
	  }
	  split(index, force = false) {
	    if (!force) {
	      if (index === 0)
	        return this;
	      if (index === this.length())
	        return this.next;
	    }
	    const after = this.scroll.create(this.domNode.splitText(index));
	    return this.parent.insertBefore(after, this.next || void 0), this.text = this.statics.value(this.domNode), after;
	  }
	  update(mutations, _context) {
	    mutations.some((mutation) => mutation.type === "characterData" && mutation.target === this.domNode) && (this.text = this.statics.value(this.domNode));
	  }
	  value() {
	    return this.text;
	  }
	};
	_TextBlot.blotName = "text", _TextBlot.scope = Scope.INLINE_BLOT;
	let TextBlot = _TextBlot;
	const TextBlot$1 = TextBlot;

	var Parchment = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Attributor: Attributor,
		AttributorStore: AttributorStore$1,
		BlockBlot: BlockBlot$1,
		ClassAttributor: ClassAttributor$1,
		ContainerBlot: ContainerBlot$1,
		EmbedBlot: EmbedBlot$1,
		InlineBlot: InlineBlot$1,
		LeafBlot: LeafBlot$1,
		ParentBlot: ParentBlot$1,
		Registry: Registry,
		Scope: Scope,
		ScrollBlot: ScrollBlot$1,
		StyleAttributor: StyleAttributor$1,
		TextBlot: TextBlot$1
	});

	var Delta$1 = {exports: {}};

	/**
	 * This library modifies the diff-patch-match library by Neil Fraser
	 * by removing the patch and match functionality and certain advanced
	 * options in the diff function. The original license is as follows:
	 *
	 * ===
	 *
	 * Diff Match and Patch
	 *
	 * Copyright 2006 Google Inc.
	 * http://code.google.com/p/google-diff-match-patch/
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	var diff_1;
	var hasRequiredDiff;

	function requireDiff () {
		if (hasRequiredDiff) return diff_1;
		hasRequiredDiff = 1;
		/**
		 * The data structure representing a diff is an array of tuples:
		 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
		 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
		 */
		var DIFF_DELETE = -1;
		var DIFF_INSERT = 1;
		var DIFF_EQUAL = 0;

		/**
		 * Find the differences between two texts.  Simplifies the problem by stripping
		 * any common prefix or suffix off the texts before diffing.
		 * @param {string} text1 Old string to be diffed.
		 * @param {string} text2 New string to be diffed.
		 * @param {Int|Object} [cursor_pos] Edit position in text1 or object with more info
		 * @param {boolean} [cleanup] Apply semantic cleanup before returning.
		 * @return {Array} Array of diff tuples.
		 */
		function diff_main(text1, text2, cursor_pos, cleanup, _fix_unicode) {
		  // Check for equality
		  if (text1 === text2) {
		    if (text1) {
		      return [[DIFF_EQUAL, text1]];
		    }
		    return [];
		  }

		  if (cursor_pos != null) {
		    var editdiff = find_cursor_edit_diff(text1, text2, cursor_pos);
		    if (editdiff) {
		      return editdiff;
		    }
		  }

		  // Trim off common prefix (speedup).
		  var commonlength = diff_commonPrefix(text1, text2);
		  var commonprefix = text1.substring(0, commonlength);
		  text1 = text1.substring(commonlength);
		  text2 = text2.substring(commonlength);

		  // Trim off common suffix (speedup).
		  commonlength = diff_commonSuffix(text1, text2);
		  var commonsuffix = text1.substring(text1.length - commonlength);
		  text1 = text1.substring(0, text1.length - commonlength);
		  text2 = text2.substring(0, text2.length - commonlength);

		  // Compute the diff on the middle block.
		  var diffs = diff_compute_(text1, text2);

		  // Restore the prefix and suffix.
		  if (commonprefix) {
		    diffs.unshift([DIFF_EQUAL, commonprefix]);
		  }
		  if (commonsuffix) {
		    diffs.push([DIFF_EQUAL, commonsuffix]);
		  }
		  diff_cleanupMerge(diffs, _fix_unicode);
		  if (cleanup) {
		    diff_cleanupSemantic(diffs);
		  }
		  return diffs;
		}

		/**
		 * Find the differences between two texts.  Assumes that the texts do not
		 * have any common prefix or suffix.
		 * @param {string} text1 Old string to be diffed.
		 * @param {string} text2 New string to be diffed.
		 * @return {Array} Array of diff tuples.
		 */
		function diff_compute_(text1, text2) {
		  var diffs;

		  if (!text1) {
		    // Just add some text (speedup).
		    return [[DIFF_INSERT, text2]];
		  }

		  if (!text2) {
		    // Just delete some text (speedup).
		    return [[DIFF_DELETE, text1]];
		  }

		  var longtext = text1.length > text2.length ? text1 : text2;
		  var shorttext = text1.length > text2.length ? text2 : text1;
		  var i = longtext.indexOf(shorttext);
		  if (i !== -1) {
		    // Shorter text is inside the longer text (speedup).
		    diffs = [
		      [DIFF_INSERT, longtext.substring(0, i)],
		      [DIFF_EQUAL, shorttext],
		      [DIFF_INSERT, longtext.substring(i + shorttext.length)],
		    ];
		    // Swap insertions for deletions if diff is reversed.
		    if (text1.length > text2.length) {
		      diffs[0][0] = diffs[2][0] = DIFF_DELETE;
		    }
		    return diffs;
		  }

		  if (shorttext.length === 1) {
		    // Single character string.
		    // After the previous speedup, the character can't be an equality.
		    return [
		      [DIFF_DELETE, text1],
		      [DIFF_INSERT, text2],
		    ];
		  }

		  // Check to see if the problem can be split in two.
		  var hm = diff_halfMatch_(text1, text2);
		  if (hm) {
		    // A half-match was found, sort out the return data.
		    var text1_a = hm[0];
		    var text1_b = hm[1];
		    var text2_a = hm[2];
		    var text2_b = hm[3];
		    var mid_common = hm[4];
		    // Send both pairs off for separate processing.
		    var diffs_a = diff_main(text1_a, text2_a);
		    var diffs_b = diff_main(text1_b, text2_b);
		    // Merge the results.
		    return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
		  }

		  return diff_bisect_(text1, text2);
		}

		/**
		 * Find the 'middle snake' of a diff, split the problem in two
		 * and return the recursively constructed diff.
		 * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
		 * @param {string} text1 Old string to be diffed.
		 * @param {string} text2 New string to be diffed.
		 * @return {Array} Array of diff tuples.
		 * @private
		 */
		function diff_bisect_(text1, text2) {
		  // Cache the text lengths to prevent multiple calls.
		  var text1_length = text1.length;
		  var text2_length = text2.length;
		  var max_d = Math.ceil((text1_length + text2_length) / 2);
		  var v_offset = max_d;
		  var v_length = 2 * max_d;
		  var v1 = new Array(v_length);
		  var v2 = new Array(v_length);
		  // Setting all elements to -1 is faster in Chrome & Firefox than mixing
		  // integers and undefined.
		  for (var x = 0; x < v_length; x++) {
		    v1[x] = -1;
		    v2[x] = -1;
		  }
		  v1[v_offset + 1] = 0;
		  v2[v_offset + 1] = 0;
		  var delta = text1_length - text2_length;
		  // If the total number of characters is odd, then the front path will collide
		  // with the reverse path.
		  var front = delta % 2 !== 0;
		  // Offsets for start and end of k loop.
		  // Prevents mapping of space beyond the grid.
		  var k1start = 0;
		  var k1end = 0;
		  var k2start = 0;
		  var k2end = 0;
		  for (var d = 0; d < max_d; d++) {
		    // Walk the front path one step.
		    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
		      var k1_offset = v_offset + k1;
		      var x1;
		      if (k1 === -d || (k1 !== d && v1[k1_offset - 1] < v1[k1_offset + 1])) {
		        x1 = v1[k1_offset + 1];
		      } else {
		        x1 = v1[k1_offset - 1] + 1;
		      }
		      var y1 = x1 - k1;
		      while (
		        x1 < text1_length &&
		        y1 < text2_length &&
		        text1.charAt(x1) === text2.charAt(y1)
		      ) {
		        x1++;
		        y1++;
		      }
		      v1[k1_offset] = x1;
		      if (x1 > text1_length) {
		        // Ran off the right of the graph.
		        k1end += 2;
		      } else if (y1 > text2_length) {
		        // Ran off the bottom of the graph.
		        k1start += 2;
		      } else if (front) {
		        var k2_offset = v_offset + delta - k1;
		        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] !== -1) {
		          // Mirror x2 onto top-left coordinate system.
		          var x2 = text1_length - v2[k2_offset];
		          if (x1 >= x2) {
		            // Overlap detected.
		            return diff_bisectSplit_(text1, text2, x1, y1);
		          }
		        }
		      }
		    }

		    // Walk the reverse path one step.
		    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
		      var k2_offset = v_offset + k2;
		      var x2;
		      if (k2 === -d || (k2 !== d && v2[k2_offset - 1] < v2[k2_offset + 1])) {
		        x2 = v2[k2_offset + 1];
		      } else {
		        x2 = v2[k2_offset - 1] + 1;
		      }
		      var y2 = x2 - k2;
		      while (
		        x2 < text1_length &&
		        y2 < text2_length &&
		        text1.charAt(text1_length - x2 - 1) ===
		          text2.charAt(text2_length - y2 - 1)
		      ) {
		        x2++;
		        y2++;
		      }
		      v2[k2_offset] = x2;
		      if (x2 > text1_length) {
		        // Ran off the left of the graph.
		        k2end += 2;
		      } else if (y2 > text2_length) {
		        // Ran off the top of the graph.
		        k2start += 2;
		      } else if (!front) {
		        var k1_offset = v_offset + delta - k2;
		        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] !== -1) {
		          var x1 = v1[k1_offset];
		          var y1 = v_offset + x1 - k1_offset;
		          // Mirror x2 onto top-left coordinate system.
		          x2 = text1_length - x2;
		          if (x1 >= x2) {
		            // Overlap detected.
		            return diff_bisectSplit_(text1, text2, x1, y1);
		          }
		        }
		      }
		    }
		  }
		  // Diff took too long and hit the deadline or
		  // number of diffs equals number of characters, no commonality at all.
		  return [
		    [DIFF_DELETE, text1],
		    [DIFF_INSERT, text2],
		  ];
		}

		/**
		 * Given the location of the 'middle snake', split the diff in two parts
		 * and recurse.
		 * @param {string} text1 Old string to be diffed.
		 * @param {string} text2 New string to be diffed.
		 * @param {number} x Index of split point in text1.
		 * @param {number} y Index of split point in text2.
		 * @return {Array} Array of diff tuples.
		 */
		function diff_bisectSplit_(text1, text2, x, y) {
		  var text1a = text1.substring(0, x);
		  var text2a = text2.substring(0, y);
		  var text1b = text1.substring(x);
		  var text2b = text2.substring(y);

		  // Compute both diffs serially.
		  var diffs = diff_main(text1a, text2a);
		  var diffsb = diff_main(text1b, text2b);

		  return diffs.concat(diffsb);
		}

		/**
		 * Determine the common prefix of two strings.
		 * @param {string} text1 First string.
		 * @param {string} text2 Second string.
		 * @return {number} The number of characters common to the start of each
		 *     string.
		 */
		function diff_commonPrefix(text1, text2) {
		  // Quick check for common null cases.
		  if (!text1 || !text2 || text1.charAt(0) !== text2.charAt(0)) {
		    return 0;
		  }
		  // Binary search.
		  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
		  var pointermin = 0;
		  var pointermax = Math.min(text1.length, text2.length);
		  var pointermid = pointermax;
		  var pointerstart = 0;
		  while (pointermin < pointermid) {
		    if (
		      text1.substring(pointerstart, pointermid) ==
		      text2.substring(pointerstart, pointermid)
		    ) {
		      pointermin = pointermid;
		      pointerstart = pointermin;
		    } else {
		      pointermax = pointermid;
		    }
		    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
		  }

		  if (is_surrogate_pair_start(text1.charCodeAt(pointermid - 1))) {
		    pointermid--;
		  }

		  return pointermid;
		}

		/**
		 * Determine if the suffix of one string is the prefix of another.
		 * @param {string} text1 First string.
		 * @param {string} text2 Second string.
		 * @return {number} The number of characters common to the end of the first
		 *     string and the start of the second string.
		 * @private
		 */
		function diff_commonOverlap_(text1, text2) {
		  // Cache the text lengths to prevent multiple calls.
		  var text1_length = text1.length;
		  var text2_length = text2.length;
		  // Eliminate the null case.
		  if (text1_length == 0 || text2_length == 0) {
		    return 0;
		  }
		  // Truncate the longer string.
		  if (text1_length > text2_length) {
		    text1 = text1.substring(text1_length - text2_length);
		  } else if (text1_length < text2_length) {
		    text2 = text2.substring(0, text1_length);
		  }
		  var text_length = Math.min(text1_length, text2_length);
		  // Quick check for the worst case.
		  if (text1 == text2) {
		    return text_length;
		  }

		  // Start by looking for a single character match
		  // and increase length until no match is found.
		  // Performance analysis: http://neil.fraser.name/news/2010/11/04/
		  var best = 0;
		  var length = 1;
		  while (true) {
		    var pattern = text1.substring(text_length - length);
		    var found = text2.indexOf(pattern);
		    if (found == -1) {
		      return best;
		    }
		    length += found;
		    if (
		      found == 0 ||
		      text1.substring(text_length - length) == text2.substring(0, length)
		    ) {
		      best = length;
		      length++;
		    }
		  }
		}

		/**
		 * Determine the common suffix of two strings.
		 * @param {string} text1 First string.
		 * @param {string} text2 Second string.
		 * @return {number} The number of characters common to the end of each string.
		 */
		function diff_commonSuffix(text1, text2) {
		  // Quick check for common null cases.
		  if (!text1 || !text2 || text1.slice(-1) !== text2.slice(-1)) {
		    return 0;
		  }
		  // Binary search.
		  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
		  var pointermin = 0;
		  var pointermax = Math.min(text1.length, text2.length);
		  var pointermid = pointermax;
		  var pointerend = 0;
		  while (pointermin < pointermid) {
		    if (
		      text1.substring(text1.length - pointermid, text1.length - pointerend) ==
		      text2.substring(text2.length - pointermid, text2.length - pointerend)
		    ) {
		      pointermin = pointermid;
		      pointerend = pointermin;
		    } else {
		      pointermax = pointermid;
		    }
		    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
		  }

		  if (is_surrogate_pair_end(text1.charCodeAt(text1.length - pointermid))) {
		    pointermid--;
		  }

		  return pointermid;
		}

		/**
		 * Do the two texts share a substring which is at least half the length of the
		 * longer text?
		 * This speedup can produce non-minimal diffs.
		 * @param {string} text1 First string.
		 * @param {string} text2 Second string.
		 * @return {Array.<string>} Five element Array, containing the prefix of
		 *     text1, the suffix of text1, the prefix of text2, the suffix of
		 *     text2 and the common middle.  Or null if there was no match.
		 */
		function diff_halfMatch_(text1, text2) {
		  var longtext = text1.length > text2.length ? text1 : text2;
		  var shorttext = text1.length > text2.length ? text2 : text1;
		  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
		    return null; // Pointless.
		  }

		  /**
		   * Does a substring of shorttext exist within longtext such that the substring
		   * is at least half the length of longtext?
		   * Closure, but does not reference any external variables.
		   * @param {string} longtext Longer string.
		   * @param {string} shorttext Shorter string.
		   * @param {number} i Start index of quarter length substring within longtext.
		   * @return {Array.<string>} Five element Array, containing the prefix of
		   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
		   *     of shorttext and the common middle.  Or null if there was no match.
		   * @private
		   */
		  function diff_halfMatchI_(longtext, shorttext, i) {
		    // Start with a 1/4 length substring at position i as a seed.
		    var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
		    var j = -1;
		    var best_common = "";
		    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
		    while ((j = shorttext.indexOf(seed, j + 1)) !== -1) {
		      var prefixLength = diff_commonPrefix(
		        longtext.substring(i),
		        shorttext.substring(j)
		      );
		      var suffixLength = diff_commonSuffix(
		        longtext.substring(0, i),
		        shorttext.substring(0, j)
		      );
		      if (best_common.length < suffixLength + prefixLength) {
		        best_common =
		          shorttext.substring(j - suffixLength, j) +
		          shorttext.substring(j, j + prefixLength);
		        best_longtext_a = longtext.substring(0, i - suffixLength);
		        best_longtext_b = longtext.substring(i + prefixLength);
		        best_shorttext_a = shorttext.substring(0, j - suffixLength);
		        best_shorttext_b = shorttext.substring(j + prefixLength);
		      }
		    }
		    if (best_common.length * 2 >= longtext.length) {
		      return [
		        best_longtext_a,
		        best_longtext_b,
		        best_shorttext_a,
		        best_shorttext_b,
		        best_common,
		      ];
		    } else {
		      return null;
		    }
		  }

		  // First check if the second quarter is the seed for a half-match.
		  var hm1 = diff_halfMatchI_(
		    longtext,
		    shorttext,
		    Math.ceil(longtext.length / 4)
		  );
		  // Check again based on the third quarter.
		  var hm2 = diff_halfMatchI_(
		    longtext,
		    shorttext,
		    Math.ceil(longtext.length / 2)
		  );
		  var hm;
		  if (!hm1 && !hm2) {
		    return null;
		  } else if (!hm2) {
		    hm = hm1;
		  } else if (!hm1) {
		    hm = hm2;
		  } else {
		    // Both matched.  Select the longest.
		    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
		  }

		  // A half-match was found, sort out the return data.
		  var text1_a, text1_b, text2_a, text2_b;
		  if (text1.length > text2.length) {
		    text1_a = hm[0];
		    text1_b = hm[1];
		    text2_a = hm[2];
		    text2_b = hm[3];
		  } else {
		    text2_a = hm[0];
		    text2_b = hm[1];
		    text1_a = hm[2];
		    text1_b = hm[3];
		  }
		  var mid_common = hm[4];
		  return [text1_a, text1_b, text2_a, text2_b, mid_common];
		}

		/**
		 * Reduce the number of edits by eliminating semantically trivial equalities.
		 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
		 */
		function diff_cleanupSemantic(diffs) {
		  var changes = false;
		  var equalities = []; // Stack of indices where equalities are found.
		  var equalitiesLength = 0; // Keeping our own length var is faster in JS.
		  /** @type {?string} */
		  var lastequality = null;
		  // Always equal to diffs[equalities[equalitiesLength - 1]][1]
		  var pointer = 0; // Index of current position.
		  // Number of characters that changed prior to the equality.
		  var length_insertions1 = 0;
		  var length_deletions1 = 0;
		  // Number of characters that changed after the equality.
		  var length_insertions2 = 0;
		  var length_deletions2 = 0;
		  while (pointer < diffs.length) {
		    if (diffs[pointer][0] == DIFF_EQUAL) {
		      // Equality found.
		      equalities[equalitiesLength++] = pointer;
		      length_insertions1 = length_insertions2;
		      length_deletions1 = length_deletions2;
		      length_insertions2 = 0;
		      length_deletions2 = 0;
		      lastequality = diffs[pointer][1];
		    } else {
		      // An insertion or deletion.
		      if (diffs[pointer][0] == DIFF_INSERT) {
		        length_insertions2 += diffs[pointer][1].length;
		      } else {
		        length_deletions2 += diffs[pointer][1].length;
		      }
		      // Eliminate an equality that is smaller or equal to the edits on both
		      // sides of it.
		      if (
		        lastequality &&
		        lastequality.length <=
		          Math.max(length_insertions1, length_deletions1) &&
		        lastequality.length <= Math.max(length_insertions2, length_deletions2)
		      ) {
		        // Duplicate record.
		        diffs.splice(equalities[equalitiesLength - 1], 0, [
		          DIFF_DELETE,
		          lastequality,
		        ]);
		        // Change second copy to insert.
		        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
		        // Throw away the equality we just deleted.
		        equalitiesLength--;
		        // Throw away the previous equality (it needs to be reevaluated).
		        equalitiesLength--;
		        pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
		        length_insertions1 = 0; // Reset the counters.
		        length_deletions1 = 0;
		        length_insertions2 = 0;
		        length_deletions2 = 0;
		        lastequality = null;
		        changes = true;
		      }
		    }
		    pointer++;
		  }

		  // Normalize the diff.
		  if (changes) {
		    diff_cleanupMerge(diffs);
		  }
		  diff_cleanupSemanticLossless(diffs);

		  // Find any overlaps between deletions and insertions.
		  // e.g: <del>abcxxx</del><ins>xxxdef</ins>
		  //   -> <del>abc</del>xxx<ins>def</ins>
		  // e.g: <del>xxxabc</del><ins>defxxx</ins>
		  //   -> <ins>def</ins>xxx<del>abc</del>
		  // Only extract an overlap if it is as big as the edit ahead or behind it.
		  pointer = 1;
		  while (pointer < diffs.length) {
		    if (
		      diffs[pointer - 1][0] == DIFF_DELETE &&
		      diffs[pointer][0] == DIFF_INSERT
		    ) {
		      var deletion = diffs[pointer - 1][1];
		      var insertion = diffs[pointer][1];
		      var overlap_length1 = diff_commonOverlap_(deletion, insertion);
		      var overlap_length2 = diff_commonOverlap_(insertion, deletion);
		      if (overlap_length1 >= overlap_length2) {
		        if (
		          overlap_length1 >= deletion.length / 2 ||
		          overlap_length1 >= insertion.length / 2
		        ) {
		          // Overlap found.  Insert an equality and trim the surrounding edits.
		          diffs.splice(pointer, 0, [
		            DIFF_EQUAL,
		            insertion.substring(0, overlap_length1),
		          ]);
		          diffs[pointer - 1][1] = deletion.substring(
		            0,
		            deletion.length - overlap_length1
		          );
		          diffs[pointer + 1][1] = insertion.substring(overlap_length1);
		          pointer++;
		        }
		      } else {
		        if (
		          overlap_length2 >= deletion.length / 2 ||
		          overlap_length2 >= insertion.length / 2
		        ) {
		          // Reverse overlap found.
		          // Insert an equality and swap and trim the surrounding edits.
		          diffs.splice(pointer, 0, [
		            DIFF_EQUAL,
		            deletion.substring(0, overlap_length2),
		          ]);
		          diffs[pointer - 1][0] = DIFF_INSERT;
		          diffs[pointer - 1][1] = insertion.substring(
		            0,
		            insertion.length - overlap_length2
		          );
		          diffs[pointer + 1][0] = DIFF_DELETE;
		          diffs[pointer + 1][1] = deletion.substring(overlap_length2);
		          pointer++;
		        }
		      }
		      pointer++;
		    }
		    pointer++;
		  }
		}

		var nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/;
		var whitespaceRegex_ = /\s/;
		var linebreakRegex_ = /[\r\n]/;
		var blanklineEndRegex_ = /\n\r?\n$/;
		var blanklineStartRegex_ = /^\r?\n\r?\n/;

		/**
		 * Look for single edits surrounded on both sides by equalities
		 * which can be shifted sideways to align the edit to a word boundary.
		 * e.g: The c<ins>at c</ins>ame. -> The <ins>cat </ins>came.
		 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
		 */
		function diff_cleanupSemanticLossless(diffs) {
		  /**
		   * Given two strings, compute a score representing whether the internal
		   * boundary falls on logical boundaries.
		   * Scores range from 6 (best) to 0 (worst).
		   * Closure, but does not reference any external variables.
		   * @param {string} one First string.
		   * @param {string} two Second string.
		   * @return {number} The score.
		   * @private
		   */
		  function diff_cleanupSemanticScore_(one, two) {
		    if (!one || !two) {
		      // Edges are the best.
		      return 6;
		    }

		    // Each port of this function behaves slightly differently due to
		    // subtle differences in each language's definition of things like
		    // 'whitespace'.  Since this function's purpose is largely cosmetic,
		    // the choice has been made to use each language's native features
		    // rather than force total conformity.
		    var char1 = one.charAt(one.length - 1);
		    var char2 = two.charAt(0);
		    var nonAlphaNumeric1 = char1.match(nonAlphaNumericRegex_);
		    var nonAlphaNumeric2 = char2.match(nonAlphaNumericRegex_);
		    var whitespace1 = nonAlphaNumeric1 && char1.match(whitespaceRegex_);
		    var whitespace2 = nonAlphaNumeric2 && char2.match(whitespaceRegex_);
		    var lineBreak1 = whitespace1 && char1.match(linebreakRegex_);
		    var lineBreak2 = whitespace2 && char2.match(linebreakRegex_);
		    var blankLine1 = lineBreak1 && one.match(blanklineEndRegex_);
		    var blankLine2 = lineBreak2 && two.match(blanklineStartRegex_);

		    if (blankLine1 || blankLine2) {
		      // Five points for blank lines.
		      return 5;
		    } else if (lineBreak1 || lineBreak2) {
		      // Four points for line breaks.
		      return 4;
		    } else if (nonAlphaNumeric1 && !whitespace1 && whitespace2) {
		      // Three points for end of sentences.
		      return 3;
		    } else if (whitespace1 || whitespace2) {
		      // Two points for whitespace.
		      return 2;
		    } else if (nonAlphaNumeric1 || nonAlphaNumeric2) {
		      // One point for non-alphanumeric.
		      return 1;
		    }
		    return 0;
		  }

		  var pointer = 1;
		  // Intentionally ignore the first and last element (don't need checking).
		  while (pointer < diffs.length - 1) {
		    if (
		      diffs[pointer - 1][0] == DIFF_EQUAL &&
		      diffs[pointer + 1][0] == DIFF_EQUAL
		    ) {
		      // This is a single edit surrounded by equalities.
		      var equality1 = diffs[pointer - 1][1];
		      var edit = diffs[pointer][1];
		      var equality2 = diffs[pointer + 1][1];

		      // First, shift the edit as far left as possible.
		      var commonOffset = diff_commonSuffix(equality1, edit);
		      if (commonOffset) {
		        var commonString = edit.substring(edit.length - commonOffset);
		        equality1 = equality1.substring(0, equality1.length - commonOffset);
		        edit = commonString + edit.substring(0, edit.length - commonOffset);
		        equality2 = commonString + equality2;
		      }

		      // Second, step character by character right, looking for the best fit.
		      var bestEquality1 = equality1;
		      var bestEdit = edit;
		      var bestEquality2 = equality2;
		      var bestScore =
		        diff_cleanupSemanticScore_(equality1, edit) +
		        diff_cleanupSemanticScore_(edit, equality2);
		      while (edit.charAt(0) === equality2.charAt(0)) {
		        equality1 += edit.charAt(0);
		        edit = edit.substring(1) + equality2.charAt(0);
		        equality2 = equality2.substring(1);
		        var score =
		          diff_cleanupSemanticScore_(equality1, edit) +
		          diff_cleanupSemanticScore_(edit, equality2);
		        // The >= encourages trailing rather than leading whitespace on edits.
		        if (score >= bestScore) {
		          bestScore = score;
		          bestEquality1 = equality1;
		          bestEdit = edit;
		          bestEquality2 = equality2;
		        }
		      }

		      if (diffs[pointer - 1][1] != bestEquality1) {
		        // We have an improvement, save it back to the diff.
		        if (bestEquality1) {
		          diffs[pointer - 1][1] = bestEquality1;
		        } else {
		          diffs.splice(pointer - 1, 1);
		          pointer--;
		        }
		        diffs[pointer][1] = bestEdit;
		        if (bestEquality2) {
		          diffs[pointer + 1][1] = bestEquality2;
		        } else {
		          diffs.splice(pointer + 1, 1);
		          pointer--;
		        }
		      }
		    }
		    pointer++;
		  }
		}

		/**
		 * Reorder and merge like edit sections.  Merge equalities.
		 * Any edit section can move as long as it doesn't cross an equality.
		 * @param {Array} diffs Array of diff tuples.
		 * @param {boolean} fix_unicode Whether to normalize to a unicode-correct diff
		 */
		function diff_cleanupMerge(diffs, fix_unicode) {
		  diffs.push([DIFF_EQUAL, ""]); // Add a dummy entry at the end.
		  var pointer = 0;
		  var count_delete = 0;
		  var count_insert = 0;
		  var text_delete = "";
		  var text_insert = "";
		  var commonlength;
		  while (pointer < diffs.length) {
		    if (pointer < diffs.length - 1 && !diffs[pointer][1]) {
		      diffs.splice(pointer, 1);
		      continue;
		    }
		    switch (diffs[pointer][0]) {
		      case DIFF_INSERT:
		        count_insert++;
		        text_insert += diffs[pointer][1];
		        pointer++;
		        break;
		      case DIFF_DELETE:
		        count_delete++;
		        text_delete += diffs[pointer][1];
		        pointer++;
		        break;
		      case DIFF_EQUAL:
		        var previous_equality = pointer - count_insert - count_delete - 1;
		        if (fix_unicode) {
		          // prevent splitting of unicode surrogate pairs.  when fix_unicode is true,
		          // we assume that the old and new text in the diff are complete and correct
		          // unicode-encoded JS strings, but the tuple boundaries may fall between
		          // surrogate pairs.  we fix this by shaving off stray surrogates from the end
		          // of the previous equality and the beginning of this equality.  this may create
		          // empty equalities or a common prefix or suffix.  for example, if AB and AC are
		          // emojis, `[[0, 'A'], [-1, 'BA'], [0, 'C']]` would turn into deleting 'ABAC' and
		          // inserting 'AC', and then the common suffix 'AC' will be eliminated.  in this
		          // particular case, both equalities go away, we absorb any previous inequalities,
		          // and we keep scanning for the next equality before rewriting the tuples.
		          if (
		            previous_equality >= 0 &&
		            ends_with_pair_start(diffs[previous_equality][1])
		          ) {
		            var stray = diffs[previous_equality][1].slice(-1);
		            diffs[previous_equality][1] = diffs[previous_equality][1].slice(
		              0,
		              -1
		            );
		            text_delete = stray + text_delete;
		            text_insert = stray + text_insert;
		            if (!diffs[previous_equality][1]) {
		              // emptied out previous equality, so delete it and include previous delete/insert
		              diffs.splice(previous_equality, 1);
		              pointer--;
		              var k = previous_equality - 1;
		              if (diffs[k] && diffs[k][0] === DIFF_INSERT) {
		                count_insert++;
		                text_insert = diffs[k][1] + text_insert;
		                k--;
		              }
		              if (diffs[k] && diffs[k][0] === DIFF_DELETE) {
		                count_delete++;
		                text_delete = diffs[k][1] + text_delete;
		                k--;
		              }
		              previous_equality = k;
		            }
		          }
		          if (starts_with_pair_end(diffs[pointer][1])) {
		            var stray = diffs[pointer][1].charAt(0);
		            diffs[pointer][1] = diffs[pointer][1].slice(1);
		            text_delete += stray;
		            text_insert += stray;
		          }
		        }
		        if (pointer < diffs.length - 1 && !diffs[pointer][1]) {
		          // for empty equality not at end, wait for next equality
		          diffs.splice(pointer, 1);
		          break;
		        }
		        if (text_delete.length > 0 || text_insert.length > 0) {
		          // note that diff_commonPrefix and diff_commonSuffix are unicode-aware
		          if (text_delete.length > 0 && text_insert.length > 0) {
		            // Factor out any common prefixes.
		            commonlength = diff_commonPrefix(text_insert, text_delete);
		            if (commonlength !== 0) {
		              if (previous_equality >= 0) {
		                diffs[previous_equality][1] += text_insert.substring(
		                  0,
		                  commonlength
		                );
		              } else {
		                diffs.splice(0, 0, [
		                  DIFF_EQUAL,
		                  text_insert.substring(0, commonlength),
		                ]);
		                pointer++;
		              }
		              text_insert = text_insert.substring(commonlength);
		              text_delete = text_delete.substring(commonlength);
		            }
		            // Factor out any common suffixes.
		            commonlength = diff_commonSuffix(text_insert, text_delete);
		            if (commonlength !== 0) {
		              diffs[pointer][1] =
		                text_insert.substring(text_insert.length - commonlength) +
		                diffs[pointer][1];
		              text_insert = text_insert.substring(
		                0,
		                text_insert.length - commonlength
		              );
		              text_delete = text_delete.substring(
		                0,
		                text_delete.length - commonlength
		              );
		            }
		          }
		          // Delete the offending records and add the merged ones.
		          var n = count_insert + count_delete;
		          if (text_delete.length === 0 && text_insert.length === 0) {
		            diffs.splice(pointer - n, n);
		            pointer = pointer - n;
		          } else if (text_delete.length === 0) {
		            diffs.splice(pointer - n, n, [DIFF_INSERT, text_insert]);
		            pointer = pointer - n + 1;
		          } else if (text_insert.length === 0) {
		            diffs.splice(pointer - n, n, [DIFF_DELETE, text_delete]);
		            pointer = pointer - n + 1;
		          } else {
		            diffs.splice(
		              pointer - n,
		              n,
		              [DIFF_DELETE, text_delete],
		              [DIFF_INSERT, text_insert]
		            );
		            pointer = pointer - n + 2;
		          }
		        }
		        if (pointer !== 0 && diffs[pointer - 1][0] === DIFF_EQUAL) {
		          // Merge this equality with the previous one.
		          diffs[pointer - 1][1] += diffs[pointer][1];
		          diffs.splice(pointer, 1);
		        } else {
		          pointer++;
		        }
		        count_insert = 0;
		        count_delete = 0;
		        text_delete = "";
		        text_insert = "";
		        break;
		    }
		  }
		  if (diffs[diffs.length - 1][1] === "") {
		    diffs.pop(); // Remove the dummy entry at the end.
		  }

		  // Second pass: look for single edits surrounded on both sides by equalities
		  // which can be shifted sideways to eliminate an equality.
		  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
		  var changes = false;
		  pointer = 1;
		  // Intentionally ignore the first and last element (don't need checking).
		  while (pointer < diffs.length - 1) {
		    if (
		      diffs[pointer - 1][0] === DIFF_EQUAL &&
		      diffs[pointer + 1][0] === DIFF_EQUAL
		    ) {
		      // This is a single edit surrounded by equalities.
		      if (
		        diffs[pointer][1].substring(
		          diffs[pointer][1].length - diffs[pointer - 1][1].length
		        ) === diffs[pointer - 1][1]
		      ) {
		        // Shift the edit over the previous equality.
		        diffs[pointer][1] =
		          diffs[pointer - 1][1] +
		          diffs[pointer][1].substring(
		            0,
		            diffs[pointer][1].length - diffs[pointer - 1][1].length
		          );
		        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
		        diffs.splice(pointer - 1, 1);
		        changes = true;
		      } else if (
		        diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==
		        diffs[pointer + 1][1]
		      ) {
		        // Shift the edit over the next equality.
		        diffs[pointer - 1][1] += diffs[pointer + 1][1];
		        diffs[pointer][1] =
		          diffs[pointer][1].substring(diffs[pointer + 1][1].length) +
		          diffs[pointer + 1][1];
		        diffs.splice(pointer + 1, 1);
		        changes = true;
		      }
		    }
		    pointer++;
		  }
		  // If shifts were made, the diff needs reordering and another shift sweep.
		  if (changes) {
		    diff_cleanupMerge(diffs, fix_unicode);
		  }
		}

		function is_surrogate_pair_start(charCode) {
		  return charCode >= 0xd800 && charCode <= 0xdbff;
		}

		function is_surrogate_pair_end(charCode) {
		  return charCode >= 0xdc00 && charCode <= 0xdfff;
		}

		function starts_with_pair_end(str) {
		  return is_surrogate_pair_end(str.charCodeAt(0));
		}

		function ends_with_pair_start(str) {
		  return is_surrogate_pair_start(str.charCodeAt(str.length - 1));
		}

		function remove_empty_tuples(tuples) {
		  var ret = [];
		  for (var i = 0; i < tuples.length; i++) {
		    if (tuples[i][1].length > 0) {
		      ret.push(tuples[i]);
		    }
		  }
		  return ret;
		}

		function make_edit_splice(before, oldMiddle, newMiddle, after) {
		  if (ends_with_pair_start(before) || starts_with_pair_end(after)) {
		    return null;
		  }
		  return remove_empty_tuples([
		    [DIFF_EQUAL, before],
		    [DIFF_DELETE, oldMiddle],
		    [DIFF_INSERT, newMiddle],
		    [DIFF_EQUAL, after],
		  ]);
		}

		function find_cursor_edit_diff(oldText, newText, cursor_pos) {
		  // note: this runs after equality check has ruled out exact equality
		  var oldRange =
		    typeof cursor_pos === "number"
		      ? { index: cursor_pos, length: 0 }
		      : cursor_pos.oldRange;
		  var newRange = typeof cursor_pos === "number" ? null : cursor_pos.newRange;
		  // take into account the old and new selection to generate the best diff
		  // possible for a text edit.  for example, a text change from "xxx" to "xx"
		  // could be a delete or forwards-delete of any one of the x's, or the
		  // result of selecting two of the x's and typing "x".
		  var oldLength = oldText.length;
		  var newLength = newText.length;
		  if (oldRange.length === 0 && (newRange === null || newRange.length === 0)) {
		    // see if we have an insert or delete before or after cursor
		    var oldCursor = oldRange.index;
		    var oldBefore = oldText.slice(0, oldCursor);
		    var oldAfter = oldText.slice(oldCursor);
		    var maybeNewCursor = newRange ? newRange.index : null;
		    editBefore: {
		      // is this an insert or delete right before oldCursor?
		      var newCursor = oldCursor + newLength - oldLength;
		      if (maybeNewCursor !== null && maybeNewCursor !== newCursor) {
		        break editBefore;
		      }
		      if (newCursor < 0 || newCursor > newLength) {
		        break editBefore;
		      }
		      var newBefore = newText.slice(0, newCursor);
		      var newAfter = newText.slice(newCursor);
		      if (newAfter !== oldAfter) {
		        break editBefore;
		      }
		      var prefixLength = Math.min(oldCursor, newCursor);
		      var oldPrefix = oldBefore.slice(0, prefixLength);
		      var newPrefix = newBefore.slice(0, prefixLength);
		      if (oldPrefix !== newPrefix) {
		        break editBefore;
		      }
		      var oldMiddle = oldBefore.slice(prefixLength);
		      var newMiddle = newBefore.slice(prefixLength);
		      return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldAfter);
		    }
		    editAfter: {
		      // is this an insert or delete right after oldCursor?
		      if (maybeNewCursor !== null && maybeNewCursor !== oldCursor) {
		        break editAfter;
		      }
		      var cursor = oldCursor;
		      var newBefore = newText.slice(0, cursor);
		      var newAfter = newText.slice(cursor);
		      if (newBefore !== oldBefore) {
		        break editAfter;
		      }
		      var suffixLength = Math.min(oldLength - cursor, newLength - cursor);
		      var oldSuffix = oldAfter.slice(oldAfter.length - suffixLength);
		      var newSuffix = newAfter.slice(newAfter.length - suffixLength);
		      if (oldSuffix !== newSuffix) {
		        break editAfter;
		      }
		      var oldMiddle = oldAfter.slice(0, oldAfter.length - suffixLength);
		      var newMiddle = newAfter.slice(0, newAfter.length - suffixLength);
		      return make_edit_splice(oldBefore, oldMiddle, newMiddle, oldSuffix);
		    }
		  }
		  if (oldRange.length > 0 && newRange && newRange.length === 0) {
		    replaceRange: {
		      // see if diff could be a splice of the old selection range
		      var oldPrefix = oldText.slice(0, oldRange.index);
		      var oldSuffix = oldText.slice(oldRange.index + oldRange.length);
		      var prefixLength = oldPrefix.length;
		      var suffixLength = oldSuffix.length;
		      if (newLength < prefixLength + suffixLength) {
		        break replaceRange;
		      }
		      var newPrefix = newText.slice(0, prefixLength);
		      var newSuffix = newText.slice(newLength - suffixLength);
		      if (oldPrefix !== newPrefix || oldSuffix !== newSuffix) {
		        break replaceRange;
		      }
		      var oldMiddle = oldText.slice(prefixLength, oldLength - suffixLength);
		      var newMiddle = newText.slice(prefixLength, newLength - suffixLength);
		      return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldSuffix);
		    }
		  }

		  return null;
		}

		function diff(text1, text2, cursor_pos, cleanup) {
		  // only pass fix_unicode=true at the top level, not when diff_main is
		  // recursively invoked
		  return diff_main(text1, text2, cursor_pos, cleanup, true);
		}

		diff.INSERT = DIFF_INSERT;
		diff.DELETE = DIFF_DELETE;
		diff.EQUAL = DIFF_EQUAL;

		diff_1 = diff;
		return diff_1;
	}

	var lodash_clonedeep = {exports: {}};

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	lodash_clonedeep.exports;

	var hasRequiredLodash_clonedeep;

	function requireLodash_clonedeep () {
		if (hasRequiredLodash_clonedeep) return lodash_clonedeep.exports;
		hasRequiredLodash_clonedeep = 1;
		(function (module, exports$1) {
			/** Used as the size to enable large array optimizations. */
			var LARGE_ARRAY_SIZE = 200;

			/** Used to stand-in for `undefined` hash values. */
			var HASH_UNDEFINED = '__lodash_hash_undefined__';

			/** Used as references for various `Number` constants. */
			var MAX_SAFE_INTEGER = 9007199254740991;

			/** `Object#toString` result references. */
			var argsTag = '[object Arguments]',
			    arrayTag = '[object Array]',
			    boolTag = '[object Boolean]',
			    dateTag = '[object Date]',
			    errorTag = '[object Error]',
			    funcTag = '[object Function]',
			    genTag = '[object GeneratorFunction]',
			    mapTag = '[object Map]',
			    numberTag = '[object Number]',
			    objectTag = '[object Object]',
			    promiseTag = '[object Promise]',
			    regexpTag = '[object RegExp]',
			    setTag = '[object Set]',
			    stringTag = '[object String]',
			    symbolTag = '[object Symbol]',
			    weakMapTag = '[object WeakMap]';

			var arrayBufferTag = '[object ArrayBuffer]',
			    dataViewTag = '[object DataView]',
			    float32Tag = '[object Float32Array]',
			    float64Tag = '[object Float64Array]',
			    int8Tag = '[object Int8Array]',
			    int16Tag = '[object Int16Array]',
			    int32Tag = '[object Int32Array]',
			    uint8Tag = '[object Uint8Array]',
			    uint8ClampedTag = '[object Uint8ClampedArray]',
			    uint16Tag = '[object Uint16Array]',
			    uint32Tag = '[object Uint32Array]';

			/**
			 * Used to match `RegExp`
			 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
			 */
			var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

			/** Used to match `RegExp` flags from their coerced string values. */
			var reFlags = /\w*$/;

			/** Used to detect host constructors (Safari). */
			var reIsHostCtor = /^\[object .+?Constructor\]$/;

			/** Used to detect unsigned integer values. */
			var reIsUint = /^(?:0|[1-9]\d*)$/;

			/** Used to identify `toStringTag` values supported by `_.clone`. */
			var cloneableTags = {};
			cloneableTags[argsTag] = cloneableTags[arrayTag] =
			cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
			cloneableTags[boolTag] = cloneableTags[dateTag] =
			cloneableTags[float32Tag] = cloneableTags[float64Tag] =
			cloneableTags[int8Tag] = cloneableTags[int16Tag] =
			cloneableTags[int32Tag] = cloneableTags[mapTag] =
			cloneableTags[numberTag] = cloneableTags[objectTag] =
			cloneableTags[regexpTag] = cloneableTags[setTag] =
			cloneableTags[stringTag] = cloneableTags[symbolTag] =
			cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
			cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
			cloneableTags[errorTag] = cloneableTags[funcTag] =
			cloneableTags[weakMapTag] = false;

			/** Detect free variable `global` from Node.js. */
			var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

			/** Detect free variable `self`. */
			var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

			/** Used as a reference to the global object. */
			var root = freeGlobal || freeSelf || Function('return this')();

			/** Detect free variable `exports`. */
			var freeExports = exports$1 && !exports$1.nodeType && exports$1;

			/** Detect free variable `module`. */
			var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

			/** Detect the popular CommonJS extension `module.exports`. */
			var moduleExports = freeModule && freeModule.exports === freeExports;

			/**
			 * Adds the key-value `pair` to `map`.
			 *
			 * @private
			 * @param {Object} map The map to modify.
			 * @param {Array} pair The key-value pair to add.
			 * @returns {Object} Returns `map`.
			 */
			function addMapEntry(map, pair) {
			  // Don't return `map.set` because it's not chainable in IE 11.
			  map.set(pair[0], pair[1]);
			  return map;
			}

			/**
			 * Adds `value` to `set`.
			 *
			 * @private
			 * @param {Object} set The set to modify.
			 * @param {*} value The value to add.
			 * @returns {Object} Returns `set`.
			 */
			function addSetEntry(set, value) {
			  // Don't return `set.add` because it's not chainable in IE 11.
			  set.add(value);
			  return set;
			}

			/**
			 * A specialized version of `_.forEach` for arrays without support for
			 * iteratee shorthands.
			 *
			 * @private
			 * @param {Array} [array] The array to iterate over.
			 * @param {Function} iteratee The function invoked per iteration.
			 * @returns {Array} Returns `array`.
			 */
			function arrayEach(array, iteratee) {
			  var index = -1,
			      length = array ? array.length : 0;

			  while (++index < length) {
			    if (iteratee(array[index], index, array) === false) {
			      break;
			    }
			  }
			  return array;
			}

			/**
			 * Appends the elements of `values` to `array`.
			 *
			 * @private
			 * @param {Array} array The array to modify.
			 * @param {Array} values The values to append.
			 * @returns {Array} Returns `array`.
			 */
			function arrayPush(array, values) {
			  var index = -1,
			      length = values.length,
			      offset = array.length;

			  while (++index < length) {
			    array[offset + index] = values[index];
			  }
			  return array;
			}

			/**
			 * A specialized version of `_.reduce` for arrays without support for
			 * iteratee shorthands.
			 *
			 * @private
			 * @param {Array} [array] The array to iterate over.
			 * @param {Function} iteratee The function invoked per iteration.
			 * @param {*} [accumulator] The initial value.
			 * @param {boolean} [initAccum] Specify using the first element of `array` as
			 *  the initial value.
			 * @returns {*} Returns the accumulated value.
			 */
			function arrayReduce(array, iteratee, accumulator, initAccum) {
			  var index = -1,
			      length = array ? array.length : 0;
			  while (++index < length) {
			    accumulator = iteratee(accumulator, array[index], index, array);
			  }
			  return accumulator;
			}

			/**
			 * The base implementation of `_.times` without support for iteratee shorthands
			 * or max array length checks.
			 *
			 * @private
			 * @param {number} n The number of times to invoke `iteratee`.
			 * @param {Function} iteratee The function invoked per iteration.
			 * @returns {Array} Returns the array of results.
			 */
			function baseTimes(n, iteratee) {
			  var index = -1,
			      result = Array(n);

			  while (++index < n) {
			    result[index] = iteratee(index);
			  }
			  return result;
			}

			/**
			 * Gets the value at `key` of `object`.
			 *
			 * @private
			 * @param {Object} [object] The object to query.
			 * @param {string} key The key of the property to get.
			 * @returns {*} Returns the property value.
			 */
			function getValue(object, key) {
			  return object == null ? undefined : object[key];
			}

			/**
			 * Checks if `value` is a host object in IE < 9.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
			 */
			function isHostObject(value) {
			  // Many host objects are `Object` objects that can coerce to strings
			  // despite having improperly defined `toString` methods.
			  var result = false;
			  if (value != null && typeof value.toString != 'function') {
			    try {
			      result = !!(value + '');
			    } catch (e) {}
			  }
			  return result;
			}

			/**
			 * Converts `map` to its key-value pairs.
			 *
			 * @private
			 * @param {Object} map The map to convert.
			 * @returns {Array} Returns the key-value pairs.
			 */
			function mapToArray(map) {
			  var index = -1,
			      result = Array(map.size);

			  map.forEach(function(value, key) {
			    result[++index] = [key, value];
			  });
			  return result;
			}

			/**
			 * Creates a unary function that invokes `func` with its argument transformed.
			 *
			 * @private
			 * @param {Function} func The function to wrap.
			 * @param {Function} transform The argument transform.
			 * @returns {Function} Returns the new function.
			 */
			function overArg(func, transform) {
			  return function(arg) {
			    return func(transform(arg));
			  };
			}

			/**
			 * Converts `set` to an array of its values.
			 *
			 * @private
			 * @param {Object} set The set to convert.
			 * @returns {Array} Returns the values.
			 */
			function setToArray(set) {
			  var index = -1,
			      result = Array(set.size);

			  set.forEach(function(value) {
			    result[++index] = value;
			  });
			  return result;
			}

			/** Used for built-in method references. */
			var arrayProto = Array.prototype,
			    funcProto = Function.prototype,
			    objectProto = Object.prototype;

			/** Used to detect overreaching core-js shims. */
			var coreJsData = root['__core-js_shared__'];

			/** Used to detect methods masquerading as native. */
			var maskSrcKey = (function() {
			  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
			  return uid ? ('Symbol(src)_1.' + uid) : '';
			}());

			/** Used to resolve the decompiled source of functions. */
			var funcToString = funcProto.toString;

			/** Used to check objects for own properties. */
			var hasOwnProperty = objectProto.hasOwnProperty;

			/**
			 * Used to resolve the
			 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
			 * of values.
			 */
			var objectToString = objectProto.toString;

			/** Used to detect if a method is native. */
			var reIsNative = RegExp('^' +
			  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
			  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
			);

			/** Built-in value references. */
			var Buffer = moduleExports ? root.Buffer : undefined,
			    Symbol = root.Symbol,
			    Uint8Array = root.Uint8Array,
			    getPrototype = overArg(Object.getPrototypeOf, Object),
			    objectCreate = Object.create,
			    propertyIsEnumerable = objectProto.propertyIsEnumerable,
			    splice = arrayProto.splice;

			/* Built-in method references for those with the same name as other `lodash` methods. */
			var nativeGetSymbols = Object.getOwnPropertySymbols,
			    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
			    nativeKeys = overArg(Object.keys, Object);

			/* Built-in method references that are verified to be native. */
			var DataView = getNative(root, 'DataView'),
			    Map = getNative(root, 'Map'),
			    Promise = getNative(root, 'Promise'),
			    Set = getNative(root, 'Set'),
			    WeakMap = getNative(root, 'WeakMap'),
			    nativeCreate = getNative(Object, 'create');

			/** Used to detect maps, sets, and weakmaps. */
			var dataViewCtorString = toSource(DataView),
			    mapCtorString = toSource(Map),
			    promiseCtorString = toSource(Promise),
			    setCtorString = toSource(Set),
			    weakMapCtorString = toSource(WeakMap);

			/** Used to convert symbols to primitives and strings. */
			var symbolProto = Symbol ? Symbol.prototype : undefined,
			    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

			/**
			 * Creates a hash object.
			 *
			 * @private
			 * @constructor
			 * @param {Array} [entries] The key-value pairs to cache.
			 */
			function Hash(entries) {
			  var index = -1,
			      length = entries ? entries.length : 0;

			  this.clear();
			  while (++index < length) {
			    var entry = entries[index];
			    this.set(entry[0], entry[1]);
			  }
			}

			/**
			 * Removes all key-value entries from the hash.
			 *
			 * @private
			 * @name clear
			 * @memberOf Hash
			 */
			function hashClear() {
			  this.__data__ = nativeCreate ? nativeCreate(null) : {};
			}

			/**
			 * Removes `key` and its value from the hash.
			 *
			 * @private
			 * @name delete
			 * @memberOf Hash
			 * @param {Object} hash The hash to modify.
			 * @param {string} key The key of the value to remove.
			 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
			 */
			function hashDelete(key) {
			  return this.has(key) && delete this.__data__[key];
			}

			/**
			 * Gets the hash value for `key`.
			 *
			 * @private
			 * @name get
			 * @memberOf Hash
			 * @param {string} key The key of the value to get.
			 * @returns {*} Returns the entry value.
			 */
			function hashGet(key) {
			  var data = this.__data__;
			  if (nativeCreate) {
			    var result = data[key];
			    return result === HASH_UNDEFINED ? undefined : result;
			  }
			  return hasOwnProperty.call(data, key) ? data[key] : undefined;
			}

			/**
			 * Checks if a hash value for `key` exists.
			 *
			 * @private
			 * @name has
			 * @memberOf Hash
			 * @param {string} key The key of the entry to check.
			 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			 */
			function hashHas(key) {
			  var data = this.__data__;
			  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
			}

			/**
			 * Sets the hash `key` to `value`.
			 *
			 * @private
			 * @name set
			 * @memberOf Hash
			 * @param {string} key The key of the value to set.
			 * @param {*} value The value to set.
			 * @returns {Object} Returns the hash instance.
			 */
			function hashSet(key, value) {
			  var data = this.__data__;
			  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
			  return this;
			}

			// Add methods to `Hash`.
			Hash.prototype.clear = hashClear;
			Hash.prototype['delete'] = hashDelete;
			Hash.prototype.get = hashGet;
			Hash.prototype.has = hashHas;
			Hash.prototype.set = hashSet;

			/**
			 * Creates an list cache object.
			 *
			 * @private
			 * @constructor
			 * @param {Array} [entries] The key-value pairs to cache.
			 */
			function ListCache(entries) {
			  var index = -1,
			      length = entries ? entries.length : 0;

			  this.clear();
			  while (++index < length) {
			    var entry = entries[index];
			    this.set(entry[0], entry[1]);
			  }
			}

			/**
			 * Removes all key-value entries from the list cache.
			 *
			 * @private
			 * @name clear
			 * @memberOf ListCache
			 */
			function listCacheClear() {
			  this.__data__ = [];
			}

			/**
			 * Removes `key` and its value from the list cache.
			 *
			 * @private
			 * @name delete
			 * @memberOf ListCache
			 * @param {string} key The key of the value to remove.
			 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
			 */
			function listCacheDelete(key) {
			  var data = this.__data__,
			      index = assocIndexOf(data, key);

			  if (index < 0) {
			    return false;
			  }
			  var lastIndex = data.length - 1;
			  if (index == lastIndex) {
			    data.pop();
			  } else {
			    splice.call(data, index, 1);
			  }
			  return true;
			}

			/**
			 * Gets the list cache value for `key`.
			 *
			 * @private
			 * @name get
			 * @memberOf ListCache
			 * @param {string} key The key of the value to get.
			 * @returns {*} Returns the entry value.
			 */
			function listCacheGet(key) {
			  var data = this.__data__,
			      index = assocIndexOf(data, key);

			  return index < 0 ? undefined : data[index][1];
			}

			/**
			 * Checks if a list cache value for `key` exists.
			 *
			 * @private
			 * @name has
			 * @memberOf ListCache
			 * @param {string} key The key of the entry to check.
			 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			 */
			function listCacheHas(key) {
			  return assocIndexOf(this.__data__, key) > -1;
			}

			/**
			 * Sets the list cache `key` to `value`.
			 *
			 * @private
			 * @name set
			 * @memberOf ListCache
			 * @param {string} key The key of the value to set.
			 * @param {*} value The value to set.
			 * @returns {Object} Returns the list cache instance.
			 */
			function listCacheSet(key, value) {
			  var data = this.__data__,
			      index = assocIndexOf(data, key);

			  if (index < 0) {
			    data.push([key, value]);
			  } else {
			    data[index][1] = value;
			  }
			  return this;
			}

			// Add methods to `ListCache`.
			ListCache.prototype.clear = listCacheClear;
			ListCache.prototype['delete'] = listCacheDelete;
			ListCache.prototype.get = listCacheGet;
			ListCache.prototype.has = listCacheHas;
			ListCache.prototype.set = listCacheSet;

			/**
			 * Creates a map cache object to store key-value pairs.
			 *
			 * @private
			 * @constructor
			 * @param {Array} [entries] The key-value pairs to cache.
			 */
			function MapCache(entries) {
			  var index = -1,
			      length = entries ? entries.length : 0;

			  this.clear();
			  while (++index < length) {
			    var entry = entries[index];
			    this.set(entry[0], entry[1]);
			  }
			}

			/**
			 * Removes all key-value entries from the map.
			 *
			 * @private
			 * @name clear
			 * @memberOf MapCache
			 */
			function mapCacheClear() {
			  this.__data__ = {
			    'hash': new Hash,
			    'map': new (Map || ListCache),
			    'string': new Hash
			  };
			}

			/**
			 * Removes `key` and its value from the map.
			 *
			 * @private
			 * @name delete
			 * @memberOf MapCache
			 * @param {string} key The key of the value to remove.
			 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
			 */
			function mapCacheDelete(key) {
			  return getMapData(this, key)['delete'](key);
			}

			/**
			 * Gets the map value for `key`.
			 *
			 * @private
			 * @name get
			 * @memberOf MapCache
			 * @param {string} key The key of the value to get.
			 * @returns {*} Returns the entry value.
			 */
			function mapCacheGet(key) {
			  return getMapData(this, key).get(key);
			}

			/**
			 * Checks if a map value for `key` exists.
			 *
			 * @private
			 * @name has
			 * @memberOf MapCache
			 * @param {string} key The key of the entry to check.
			 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			 */
			function mapCacheHas(key) {
			  return getMapData(this, key).has(key);
			}

			/**
			 * Sets the map `key` to `value`.
			 *
			 * @private
			 * @name set
			 * @memberOf MapCache
			 * @param {string} key The key of the value to set.
			 * @param {*} value The value to set.
			 * @returns {Object} Returns the map cache instance.
			 */
			function mapCacheSet(key, value) {
			  getMapData(this, key).set(key, value);
			  return this;
			}

			// Add methods to `MapCache`.
			MapCache.prototype.clear = mapCacheClear;
			MapCache.prototype['delete'] = mapCacheDelete;
			MapCache.prototype.get = mapCacheGet;
			MapCache.prototype.has = mapCacheHas;
			MapCache.prototype.set = mapCacheSet;

			/**
			 * Creates a stack cache object to store key-value pairs.
			 *
			 * @private
			 * @constructor
			 * @param {Array} [entries] The key-value pairs to cache.
			 */
			function Stack(entries) {
			  this.__data__ = new ListCache(entries);
			}

			/**
			 * Removes all key-value entries from the stack.
			 *
			 * @private
			 * @name clear
			 * @memberOf Stack
			 */
			function stackClear() {
			  this.__data__ = new ListCache;
			}

			/**
			 * Removes `key` and its value from the stack.
			 *
			 * @private
			 * @name delete
			 * @memberOf Stack
			 * @param {string} key The key of the value to remove.
			 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
			 */
			function stackDelete(key) {
			  return this.__data__['delete'](key);
			}

			/**
			 * Gets the stack value for `key`.
			 *
			 * @private
			 * @name get
			 * @memberOf Stack
			 * @param {string} key The key of the value to get.
			 * @returns {*} Returns the entry value.
			 */
			function stackGet(key) {
			  return this.__data__.get(key);
			}

			/**
			 * Checks if a stack value for `key` exists.
			 *
			 * @private
			 * @name has
			 * @memberOf Stack
			 * @param {string} key The key of the entry to check.
			 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			 */
			function stackHas(key) {
			  return this.__data__.has(key);
			}

			/**
			 * Sets the stack `key` to `value`.
			 *
			 * @private
			 * @name set
			 * @memberOf Stack
			 * @param {string} key The key of the value to set.
			 * @param {*} value The value to set.
			 * @returns {Object} Returns the stack cache instance.
			 */
			function stackSet(key, value) {
			  var cache = this.__data__;
			  if (cache instanceof ListCache) {
			    var pairs = cache.__data__;
			    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
			      pairs.push([key, value]);
			      return this;
			    }
			    cache = this.__data__ = new MapCache(pairs);
			  }
			  cache.set(key, value);
			  return this;
			}

			// Add methods to `Stack`.
			Stack.prototype.clear = stackClear;
			Stack.prototype['delete'] = stackDelete;
			Stack.prototype.get = stackGet;
			Stack.prototype.has = stackHas;
			Stack.prototype.set = stackSet;

			/**
			 * Creates an array of the enumerable property names of the array-like `value`.
			 *
			 * @private
			 * @param {*} value The value to query.
			 * @param {boolean} inherited Specify returning inherited property names.
			 * @returns {Array} Returns the array of property names.
			 */
			function arrayLikeKeys(value, inherited) {
			  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
			  // Safari 9 makes `arguments.length` enumerable in strict mode.
			  var result = (isArray(value) || isArguments(value))
			    ? baseTimes(value.length, String)
			    : [];

			  var length = result.length,
			      skipIndexes = !!length;

			  for (var key in value) {
			    if ((hasOwnProperty.call(value, key)) &&
			        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
			      result.push(key);
			    }
			  }
			  return result;
			}

			/**
			 * Assigns `value` to `key` of `object` if the existing value is not equivalent
			 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
			 * for equality comparisons.
			 *
			 * @private
			 * @param {Object} object The object to modify.
			 * @param {string} key The key of the property to assign.
			 * @param {*} value The value to assign.
			 */
			function assignValue(object, key, value) {
			  var objValue = object[key];
			  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
			      (value === undefined && !(key in object))) {
			    object[key] = value;
			  }
			}

			/**
			 * Gets the index at which the `key` is found in `array` of key-value pairs.
			 *
			 * @private
			 * @param {Array} array The array to inspect.
			 * @param {*} key The key to search for.
			 * @returns {number} Returns the index of the matched value, else `-1`.
			 */
			function assocIndexOf(array, key) {
			  var length = array.length;
			  while (length--) {
			    if (eq(array[length][0], key)) {
			      return length;
			    }
			  }
			  return -1;
			}

			/**
			 * The base implementation of `_.assign` without support for multiple sources
			 * or `customizer` functions.
			 *
			 * @private
			 * @param {Object} object The destination object.
			 * @param {Object} source The source object.
			 * @returns {Object} Returns `object`.
			 */
			function baseAssign(object, source) {
			  return object && copyObject(source, keys(source), object);
			}

			/**
			 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
			 * traversed objects.
			 *
			 * @private
			 * @param {*} value The value to clone.
			 * @param {boolean} [isDeep] Specify a deep clone.
			 * @param {boolean} [isFull] Specify a clone including symbols.
			 * @param {Function} [customizer] The function to customize cloning.
			 * @param {string} [key] The key of `value`.
			 * @param {Object} [object] The parent object of `value`.
			 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
			 * @returns {*} Returns the cloned value.
			 */
			function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
			  var result;
			  if (customizer) {
			    result = object ? customizer(value, key, object, stack) : customizer(value);
			  }
			  if (result !== undefined) {
			    return result;
			  }
			  if (!isObject(value)) {
			    return value;
			  }
			  var isArr = isArray(value);
			  if (isArr) {
			    result = initCloneArray(value);
			    if (!isDeep) {
			      return copyArray(value, result);
			    }
			  } else {
			    var tag = getTag(value),
			        isFunc = tag == funcTag || tag == genTag;

			    if (isBuffer(value)) {
			      return cloneBuffer(value, isDeep);
			    }
			    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
			      if (isHostObject(value)) {
			        return object ? value : {};
			      }
			      result = initCloneObject(isFunc ? {} : value);
			      if (!isDeep) {
			        return copySymbols(value, baseAssign(result, value));
			      }
			    } else {
			      if (!cloneableTags[tag]) {
			        return object ? value : {};
			      }
			      result = initCloneByTag(value, tag, baseClone, isDeep);
			    }
			  }
			  // Check for circular references and return its corresponding clone.
			  stack || (stack = new Stack);
			  var stacked = stack.get(value);
			  if (stacked) {
			    return stacked;
			  }
			  stack.set(value, result);

			  if (!isArr) {
			    var props = isFull ? getAllKeys(value) : keys(value);
			  }
			  arrayEach(props || value, function(subValue, key) {
			    if (props) {
			      key = subValue;
			      subValue = value[key];
			    }
			    // Recursively populate clone (susceptible to call stack limits).
			    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
			  });
			  return result;
			}

			/**
			 * The base implementation of `_.create` without support for assigning
			 * properties to the created object.
			 *
			 * @private
			 * @param {Object} prototype The object to inherit from.
			 * @returns {Object} Returns the new object.
			 */
			function baseCreate(proto) {
			  return isObject(proto) ? objectCreate(proto) : {};
			}

			/**
			 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
			 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
			 * symbols of `object`.
			 *
			 * @private
			 * @param {Object} object The object to query.
			 * @param {Function} keysFunc The function to get the keys of `object`.
			 * @param {Function} symbolsFunc The function to get the symbols of `object`.
			 * @returns {Array} Returns the array of property names and symbols.
			 */
			function baseGetAllKeys(object, keysFunc, symbolsFunc) {
			  var result = keysFunc(object);
			  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
			}

			/**
			 * The base implementation of `getTag`.
			 *
			 * @private
			 * @param {*} value The value to query.
			 * @returns {string} Returns the `toStringTag`.
			 */
			function baseGetTag(value) {
			  return objectToString.call(value);
			}

			/**
			 * The base implementation of `_.isNative` without bad shim checks.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a native function,
			 *  else `false`.
			 */
			function baseIsNative(value) {
			  if (!isObject(value) || isMasked(value)) {
			    return false;
			  }
			  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
			  return pattern.test(toSource(value));
			}

			/**
			 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
			 *
			 * @private
			 * @param {Object} object The object to query.
			 * @returns {Array} Returns the array of property names.
			 */
			function baseKeys(object) {
			  if (!isPrototype(object)) {
			    return nativeKeys(object);
			  }
			  var result = [];
			  for (var key in Object(object)) {
			    if (hasOwnProperty.call(object, key) && key != 'constructor') {
			      result.push(key);
			    }
			  }
			  return result;
			}

			/**
			 * Creates a clone of  `buffer`.
			 *
			 * @private
			 * @param {Buffer} buffer The buffer to clone.
			 * @param {boolean} [isDeep] Specify a deep clone.
			 * @returns {Buffer} Returns the cloned buffer.
			 */
			function cloneBuffer(buffer, isDeep) {
			  if (isDeep) {
			    return buffer.slice();
			  }
			  var result = new buffer.constructor(buffer.length);
			  buffer.copy(result);
			  return result;
			}

			/**
			 * Creates a clone of `arrayBuffer`.
			 *
			 * @private
			 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
			 * @returns {ArrayBuffer} Returns the cloned array buffer.
			 */
			function cloneArrayBuffer(arrayBuffer) {
			  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
			  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
			  return result;
			}

			/**
			 * Creates a clone of `dataView`.
			 *
			 * @private
			 * @param {Object} dataView The data view to clone.
			 * @param {boolean} [isDeep] Specify a deep clone.
			 * @returns {Object} Returns the cloned data view.
			 */
			function cloneDataView(dataView, isDeep) {
			  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
			  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
			}

			/**
			 * Creates a clone of `map`.
			 *
			 * @private
			 * @param {Object} map The map to clone.
			 * @param {Function} cloneFunc The function to clone values.
			 * @param {boolean} [isDeep] Specify a deep clone.
			 * @returns {Object} Returns the cloned map.
			 */
			function cloneMap(map, isDeep, cloneFunc) {
			  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
			  return arrayReduce(array, addMapEntry, new map.constructor);
			}

			/**
			 * Creates a clone of `regexp`.
			 *
			 * @private
			 * @param {Object} regexp The regexp to clone.
			 * @returns {Object} Returns the cloned regexp.
			 */
			function cloneRegExp(regexp) {
			  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
			  result.lastIndex = regexp.lastIndex;
			  return result;
			}

			/**
			 * Creates a clone of `set`.
			 *
			 * @private
			 * @param {Object} set The set to clone.
			 * @param {Function} cloneFunc The function to clone values.
			 * @param {boolean} [isDeep] Specify a deep clone.
			 * @returns {Object} Returns the cloned set.
			 */
			function cloneSet(set, isDeep, cloneFunc) {
			  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
			  return arrayReduce(array, addSetEntry, new set.constructor);
			}

			/**
			 * Creates a clone of the `symbol` object.
			 *
			 * @private
			 * @param {Object} symbol The symbol object to clone.
			 * @returns {Object} Returns the cloned symbol object.
			 */
			function cloneSymbol(symbol) {
			  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
			}

			/**
			 * Creates a clone of `typedArray`.
			 *
			 * @private
			 * @param {Object} typedArray The typed array to clone.
			 * @param {boolean} [isDeep] Specify a deep clone.
			 * @returns {Object} Returns the cloned typed array.
			 */
			function cloneTypedArray(typedArray, isDeep) {
			  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
			  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
			}

			/**
			 * Copies the values of `source` to `array`.
			 *
			 * @private
			 * @param {Array} source The array to copy values from.
			 * @param {Array} [array=[]] The array to copy values to.
			 * @returns {Array} Returns `array`.
			 */
			function copyArray(source, array) {
			  var index = -1,
			      length = source.length;

			  array || (array = Array(length));
			  while (++index < length) {
			    array[index] = source[index];
			  }
			  return array;
			}

			/**
			 * Copies properties of `source` to `object`.
			 *
			 * @private
			 * @param {Object} source The object to copy properties from.
			 * @param {Array} props The property identifiers to copy.
			 * @param {Object} [object={}] The object to copy properties to.
			 * @param {Function} [customizer] The function to customize copied values.
			 * @returns {Object} Returns `object`.
			 */
			function copyObject(source, props, object, customizer) {
			  object || (object = {});

			  var index = -1,
			      length = props.length;

			  while (++index < length) {
			    var key = props[index];

			    var newValue = undefined;

			    assignValue(object, key, newValue === undefined ? source[key] : newValue);
			  }
			  return object;
			}

			/**
			 * Copies own symbol properties of `source` to `object`.
			 *
			 * @private
			 * @param {Object} source The object to copy symbols from.
			 * @param {Object} [object={}] The object to copy symbols to.
			 * @returns {Object} Returns `object`.
			 */
			function copySymbols(source, object) {
			  return copyObject(source, getSymbols(source), object);
			}

			/**
			 * Creates an array of own enumerable property names and symbols of `object`.
			 *
			 * @private
			 * @param {Object} object The object to query.
			 * @returns {Array} Returns the array of property names and symbols.
			 */
			function getAllKeys(object) {
			  return baseGetAllKeys(object, keys, getSymbols);
			}

			/**
			 * Gets the data for `map`.
			 *
			 * @private
			 * @param {Object} map The map to query.
			 * @param {string} key The reference key.
			 * @returns {*} Returns the map data.
			 */
			function getMapData(map, key) {
			  var data = map.__data__;
			  return isKeyable(key)
			    ? data[typeof key == 'string' ? 'string' : 'hash']
			    : data.map;
			}

			/**
			 * Gets the native function at `key` of `object`.
			 *
			 * @private
			 * @param {Object} object The object to query.
			 * @param {string} key The key of the method to get.
			 * @returns {*} Returns the function if it's native, else `undefined`.
			 */
			function getNative(object, key) {
			  var value = getValue(object, key);
			  return baseIsNative(value) ? value : undefined;
			}

			/**
			 * Creates an array of the own enumerable symbol properties of `object`.
			 *
			 * @private
			 * @param {Object} object The object to query.
			 * @returns {Array} Returns the array of symbols.
			 */
			var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

			/**
			 * Gets the `toStringTag` of `value`.
			 *
			 * @private
			 * @param {*} value The value to query.
			 * @returns {string} Returns the `toStringTag`.
			 */
			var getTag = baseGetTag;

			// Fallback for data views, maps, sets, and weak maps in IE 11,
			// for data views in Edge < 14, and promises in Node.js.
			if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
			    (Map && getTag(new Map) != mapTag) ||
			    (Promise && getTag(Promise.resolve()) != promiseTag) ||
			    (Set && getTag(new Set) != setTag) ||
			    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
			  getTag = function(value) {
			    var result = objectToString.call(value),
			        Ctor = result == objectTag ? value.constructor : undefined,
			        ctorString = Ctor ? toSource(Ctor) : undefined;

			    if (ctorString) {
			      switch (ctorString) {
			        case dataViewCtorString: return dataViewTag;
			        case mapCtorString: return mapTag;
			        case promiseCtorString: return promiseTag;
			        case setCtorString: return setTag;
			        case weakMapCtorString: return weakMapTag;
			      }
			    }
			    return result;
			  };
			}

			/**
			 * Initializes an array clone.
			 *
			 * @private
			 * @param {Array} array The array to clone.
			 * @returns {Array} Returns the initialized clone.
			 */
			function initCloneArray(array) {
			  var length = array.length,
			      result = array.constructor(length);

			  // Add properties assigned by `RegExp#exec`.
			  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
			    result.index = array.index;
			    result.input = array.input;
			  }
			  return result;
			}

			/**
			 * Initializes an object clone.
			 *
			 * @private
			 * @param {Object} object The object to clone.
			 * @returns {Object} Returns the initialized clone.
			 */
			function initCloneObject(object) {
			  return (typeof object.constructor == 'function' && !isPrototype(object))
			    ? baseCreate(getPrototype(object))
			    : {};
			}

			/**
			 * Initializes an object clone based on its `toStringTag`.
			 *
			 * **Note:** This function only supports cloning values with tags of
			 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
			 *
			 * @private
			 * @param {Object} object The object to clone.
			 * @param {string} tag The `toStringTag` of the object to clone.
			 * @param {Function} cloneFunc The function to clone values.
			 * @param {boolean} [isDeep] Specify a deep clone.
			 * @returns {Object} Returns the initialized clone.
			 */
			function initCloneByTag(object, tag, cloneFunc, isDeep) {
			  var Ctor = object.constructor;
			  switch (tag) {
			    case arrayBufferTag:
			      return cloneArrayBuffer(object);

			    case boolTag:
			    case dateTag:
			      return new Ctor(+object);

			    case dataViewTag:
			      return cloneDataView(object, isDeep);

			    case float32Tag: case float64Tag:
			    case int8Tag: case int16Tag: case int32Tag:
			    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
			      return cloneTypedArray(object, isDeep);

			    case mapTag:
			      return cloneMap(object, isDeep, cloneFunc);

			    case numberTag:
			    case stringTag:
			      return new Ctor(object);

			    case regexpTag:
			      return cloneRegExp(object);

			    case setTag:
			      return cloneSet(object, isDeep, cloneFunc);

			    case symbolTag:
			      return cloneSymbol(object);
			  }
			}

			/**
			 * Checks if `value` is a valid array-like index.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
			 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
			 */
			function isIndex(value, length) {
			  length = length == null ? MAX_SAFE_INTEGER : length;
			  return !!length &&
			    (typeof value == 'number' || reIsUint.test(value)) &&
			    (value > -1 && value % 1 == 0 && value < length);
			}

			/**
			 * Checks if `value` is suitable for use as unique object key.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
			 */
			function isKeyable(value) {
			  var type = typeof value;
			  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
			    ? (value !== '__proto__')
			    : (value === null);
			}

			/**
			 * Checks if `func` has its source masked.
			 *
			 * @private
			 * @param {Function} func The function to check.
			 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
			 */
			function isMasked(func) {
			  return !!maskSrcKey && (maskSrcKey in func);
			}

			/**
			 * Checks if `value` is likely a prototype object.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
			 */
			function isPrototype(value) {
			  var Ctor = value && value.constructor,
			      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

			  return value === proto;
			}

			/**
			 * Converts `func` to its source code.
			 *
			 * @private
			 * @param {Function} func The function to process.
			 * @returns {string} Returns the source code.
			 */
			function toSource(func) {
			  if (func != null) {
			    try {
			      return funcToString.call(func);
			    } catch (e) {}
			    try {
			      return (func + '');
			    } catch (e) {}
			  }
			  return '';
			}

			/**
			 * This method is like `_.clone` except that it recursively clones `value`.
			 *
			 * @static
			 * @memberOf _
			 * @since 1.0.0
			 * @category Lang
			 * @param {*} value The value to recursively clone.
			 * @returns {*} Returns the deep cloned value.
			 * @see _.clone
			 * @example
			 *
			 * var objects = [{ 'a': 1 }, { 'b': 2 }];
			 *
			 * var deep = _.cloneDeep(objects);
			 * console.log(deep[0] === objects[0]);
			 * // => false
			 */
			function cloneDeep(value) {
			  return baseClone(value, true, true);
			}

			/**
			 * Performs a
			 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
			 * comparison between two values to determine if they are equivalent.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to compare.
			 * @param {*} other The other value to compare.
			 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
			 * @example
			 *
			 * var object = { 'a': 1 };
			 * var other = { 'a': 1 };
			 *
			 * _.eq(object, object);
			 * // => true
			 *
			 * _.eq(object, other);
			 * // => false
			 *
			 * _.eq('a', 'a');
			 * // => true
			 *
			 * _.eq('a', Object('a'));
			 * // => false
			 *
			 * _.eq(NaN, NaN);
			 * // => true
			 */
			function eq(value, other) {
			  return value === other || (value !== value && other !== other);
			}

			/**
			 * Checks if `value` is likely an `arguments` object.
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
			 *  else `false`.
			 * @example
			 *
			 * _.isArguments(function() { return arguments; }());
			 * // => true
			 *
			 * _.isArguments([1, 2, 3]);
			 * // => false
			 */
			function isArguments(value) {
			  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
			  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
			    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
			}

			/**
			 * Checks if `value` is classified as an `Array` object.
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
			 * @example
			 *
			 * _.isArray([1, 2, 3]);
			 * // => true
			 *
			 * _.isArray(document.body.children);
			 * // => false
			 *
			 * _.isArray('abc');
			 * // => false
			 *
			 * _.isArray(_.noop);
			 * // => false
			 */
			var isArray = Array.isArray;

			/**
			 * Checks if `value` is array-like. A value is considered array-like if it's
			 * not a function and has a `value.length` that's an integer greater than or
			 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
			 * @example
			 *
			 * _.isArrayLike([1, 2, 3]);
			 * // => true
			 *
			 * _.isArrayLike(document.body.children);
			 * // => true
			 *
			 * _.isArrayLike('abc');
			 * // => true
			 *
			 * _.isArrayLike(_.noop);
			 * // => false
			 */
			function isArrayLike(value) {
			  return value != null && isLength(value.length) && !isFunction(value);
			}

			/**
			 * This method is like `_.isArrayLike` except that it also checks if `value`
			 * is an object.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is an array-like object,
			 *  else `false`.
			 * @example
			 *
			 * _.isArrayLikeObject([1, 2, 3]);
			 * // => true
			 *
			 * _.isArrayLikeObject(document.body.children);
			 * // => true
			 *
			 * _.isArrayLikeObject('abc');
			 * // => false
			 *
			 * _.isArrayLikeObject(_.noop);
			 * // => false
			 */
			function isArrayLikeObject(value) {
			  return isObjectLike(value) && isArrayLike(value);
			}

			/**
			 * Checks if `value` is a buffer.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.3.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
			 * @example
			 *
			 * _.isBuffer(new Buffer(2));
			 * // => true
			 *
			 * _.isBuffer(new Uint8Array(2));
			 * // => false
			 */
			var isBuffer = nativeIsBuffer || stubFalse;

			/**
			 * Checks if `value` is classified as a `Function` object.
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
			 * @example
			 *
			 * _.isFunction(_);
			 * // => true
			 *
			 * _.isFunction(/abc/);
			 * // => false
			 */
			function isFunction(value) {
			  // The use of `Object#toString` avoids issues with the `typeof` operator
			  // in Safari 8-9 which returns 'object' for typed array and other constructors.
			  var tag = isObject(value) ? objectToString.call(value) : '';
			  return tag == funcTag || tag == genTag;
			}

			/**
			 * Checks if `value` is a valid array-like length.
			 *
			 * **Note:** This method is loosely based on
			 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
			 * @example
			 *
			 * _.isLength(3);
			 * // => true
			 *
			 * _.isLength(Number.MIN_VALUE);
			 * // => false
			 *
			 * _.isLength(Infinity);
			 * // => false
			 *
			 * _.isLength('3');
			 * // => false
			 */
			function isLength(value) {
			  return typeof value == 'number' &&
			    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
			}

			/**
			 * Checks if `value` is the
			 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
			 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
			 * @example
			 *
			 * _.isObject({});
			 * // => true
			 *
			 * _.isObject([1, 2, 3]);
			 * // => true
			 *
			 * _.isObject(_.noop);
			 * // => true
			 *
			 * _.isObject(null);
			 * // => false
			 */
			function isObject(value) {
			  var type = typeof value;
			  return !!value && (type == 'object' || type == 'function');
			}

			/**
			 * Checks if `value` is object-like. A value is object-like if it's not `null`
			 * and has a `typeof` result of "object".
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
			 * @example
			 *
			 * _.isObjectLike({});
			 * // => true
			 *
			 * _.isObjectLike([1, 2, 3]);
			 * // => true
			 *
			 * _.isObjectLike(_.noop);
			 * // => false
			 *
			 * _.isObjectLike(null);
			 * // => false
			 */
			function isObjectLike(value) {
			  return !!value && typeof value == 'object';
			}

			/**
			 * Creates an array of the own enumerable property names of `object`.
			 *
			 * **Note:** Non-object values are coerced to objects. See the
			 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
			 * for more details.
			 *
			 * @static
			 * @since 0.1.0
			 * @memberOf _
			 * @category Object
			 * @param {Object} object The object to query.
			 * @returns {Array} Returns the array of property names.
			 * @example
			 *
			 * function Foo() {
			 *   this.a = 1;
			 *   this.b = 2;
			 * }
			 *
			 * Foo.prototype.c = 3;
			 *
			 * _.keys(new Foo);
			 * // => ['a', 'b'] (iteration order is not guaranteed)
			 *
			 * _.keys('hi');
			 * // => ['0', '1']
			 */
			function keys(object) {
			  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
			}

			/**
			 * This method returns a new empty array.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.13.0
			 * @category Util
			 * @returns {Array} Returns the new empty array.
			 * @example
			 *
			 * var arrays = _.times(2, _.stubArray);
			 *
			 * console.log(arrays);
			 * // => [[], []]
			 *
			 * console.log(arrays[0] === arrays[1]);
			 * // => false
			 */
			function stubArray() {
			  return [];
			}

			/**
			 * This method returns `false`.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.13.0
			 * @category Util
			 * @returns {boolean} Returns `false`.
			 * @example
			 *
			 * _.times(2, _.stubFalse);
			 * // => [false, false]
			 */
			function stubFalse() {
			  return false;
			}

			module.exports = cloneDeep; 
		} (lodash_clonedeep, lodash_clonedeep.exports));
		return lodash_clonedeep.exports;
	}

	var lodash_isequal = {exports: {}};

	/**
	 * Lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright JS Foundation and other contributors <https://js.foundation/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	lodash_isequal.exports;

	var hasRequiredLodash_isequal;

	function requireLodash_isequal () {
		if (hasRequiredLodash_isequal) return lodash_isequal.exports;
		hasRequiredLodash_isequal = 1;
		(function (module, exports$1) {
			/** Used as the size to enable large array optimizations. */
			var LARGE_ARRAY_SIZE = 200;

			/** Used to stand-in for `undefined` hash values. */
			var HASH_UNDEFINED = '__lodash_hash_undefined__';

			/** Used to compose bitmasks for value comparisons. */
			var COMPARE_PARTIAL_FLAG = 1,
			    COMPARE_UNORDERED_FLAG = 2;

			/** Used as references for various `Number` constants. */
			var MAX_SAFE_INTEGER = 9007199254740991;

			/** `Object#toString` result references. */
			var argsTag = '[object Arguments]',
			    arrayTag = '[object Array]',
			    asyncTag = '[object AsyncFunction]',
			    boolTag = '[object Boolean]',
			    dateTag = '[object Date]',
			    errorTag = '[object Error]',
			    funcTag = '[object Function]',
			    genTag = '[object GeneratorFunction]',
			    mapTag = '[object Map]',
			    numberTag = '[object Number]',
			    nullTag = '[object Null]',
			    objectTag = '[object Object]',
			    promiseTag = '[object Promise]',
			    proxyTag = '[object Proxy]',
			    regexpTag = '[object RegExp]',
			    setTag = '[object Set]',
			    stringTag = '[object String]',
			    symbolTag = '[object Symbol]',
			    undefinedTag = '[object Undefined]',
			    weakMapTag = '[object WeakMap]';

			var arrayBufferTag = '[object ArrayBuffer]',
			    dataViewTag = '[object DataView]',
			    float32Tag = '[object Float32Array]',
			    float64Tag = '[object Float64Array]',
			    int8Tag = '[object Int8Array]',
			    int16Tag = '[object Int16Array]',
			    int32Tag = '[object Int32Array]',
			    uint8Tag = '[object Uint8Array]',
			    uint8ClampedTag = '[object Uint8ClampedArray]',
			    uint16Tag = '[object Uint16Array]',
			    uint32Tag = '[object Uint32Array]';

			/**
			 * Used to match `RegExp`
			 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
			 */
			var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

			/** Used to detect host constructors (Safari). */
			var reIsHostCtor = /^\[object .+?Constructor\]$/;

			/** Used to detect unsigned integer values. */
			var reIsUint = /^(?:0|[1-9]\d*)$/;

			/** Used to identify `toStringTag` values of typed arrays. */
			var typedArrayTags = {};
			typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
			typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
			typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
			typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
			typedArrayTags[uint32Tag] = true;
			typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
			typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
			typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
			typedArrayTags[errorTag] = typedArrayTags[funcTag] =
			typedArrayTags[mapTag] = typedArrayTags[numberTag] =
			typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
			typedArrayTags[setTag] = typedArrayTags[stringTag] =
			typedArrayTags[weakMapTag] = false;

			/** Detect free variable `global` from Node.js. */
			var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

			/** Detect free variable `self`. */
			var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

			/** Used as a reference to the global object. */
			var root = freeGlobal || freeSelf || Function('return this')();

			/** Detect free variable `exports`. */
			var freeExports = exports$1 && !exports$1.nodeType && exports$1;

			/** Detect free variable `module`. */
			var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

			/** Detect the popular CommonJS extension `module.exports`. */
			var moduleExports = freeModule && freeModule.exports === freeExports;

			/** Detect free variable `process` from Node.js. */
			var freeProcess = moduleExports && freeGlobal.process;

			/** Used to access faster Node.js helpers. */
			var nodeUtil = (function() {
			  try {
			    return freeProcess && freeProcess.binding && freeProcess.binding('util');
			  } catch (e) {}
			}());

			/* Node.js helper references. */
			var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

			/**
			 * A specialized version of `_.filter` for arrays without support for
			 * iteratee shorthands.
			 *
			 * @private
			 * @param {Array} [array] The array to iterate over.
			 * @param {Function} predicate The function invoked per iteration.
			 * @returns {Array} Returns the new filtered array.
			 */
			function arrayFilter(array, predicate) {
			  var index = -1,
			      length = array == null ? 0 : array.length,
			      resIndex = 0,
			      result = [];

			  while (++index < length) {
			    var value = array[index];
			    if (predicate(value, index, array)) {
			      result[resIndex++] = value;
			    }
			  }
			  return result;
			}

			/**
			 * Appends the elements of `values` to `array`.
			 *
			 * @private
			 * @param {Array} array The array to modify.
			 * @param {Array} values The values to append.
			 * @returns {Array} Returns `array`.
			 */
			function arrayPush(array, values) {
			  var index = -1,
			      length = values.length,
			      offset = array.length;

			  while (++index < length) {
			    array[offset + index] = values[index];
			  }
			  return array;
			}

			/**
			 * A specialized version of `_.some` for arrays without support for iteratee
			 * shorthands.
			 *
			 * @private
			 * @param {Array} [array] The array to iterate over.
			 * @param {Function} predicate The function invoked per iteration.
			 * @returns {boolean} Returns `true` if any element passes the predicate check,
			 *  else `false`.
			 */
			function arraySome(array, predicate) {
			  var index = -1,
			      length = array == null ? 0 : array.length;

			  while (++index < length) {
			    if (predicate(array[index], index, array)) {
			      return true;
			    }
			  }
			  return false;
			}

			/**
			 * The base implementation of `_.times` without support for iteratee shorthands
			 * or max array length checks.
			 *
			 * @private
			 * @param {number} n The number of times to invoke `iteratee`.
			 * @param {Function} iteratee The function invoked per iteration.
			 * @returns {Array} Returns the array of results.
			 */
			function baseTimes(n, iteratee) {
			  var index = -1,
			      result = Array(n);

			  while (++index < n) {
			    result[index] = iteratee(index);
			  }
			  return result;
			}

			/**
			 * The base implementation of `_.unary` without support for storing metadata.
			 *
			 * @private
			 * @param {Function} func The function to cap arguments for.
			 * @returns {Function} Returns the new capped function.
			 */
			function baseUnary(func) {
			  return function(value) {
			    return func(value);
			  };
			}

			/**
			 * Checks if a `cache` value for `key` exists.
			 *
			 * @private
			 * @param {Object} cache The cache to query.
			 * @param {string} key The key of the entry to check.
			 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			 */
			function cacheHas(cache, key) {
			  return cache.has(key);
			}

			/**
			 * Gets the value at `key` of `object`.
			 *
			 * @private
			 * @param {Object} [object] The object to query.
			 * @param {string} key The key of the property to get.
			 * @returns {*} Returns the property value.
			 */
			function getValue(object, key) {
			  return object == null ? undefined : object[key];
			}

			/**
			 * Converts `map` to its key-value pairs.
			 *
			 * @private
			 * @param {Object} map The map to convert.
			 * @returns {Array} Returns the key-value pairs.
			 */
			function mapToArray(map) {
			  var index = -1,
			      result = Array(map.size);

			  map.forEach(function(value, key) {
			    result[++index] = [key, value];
			  });
			  return result;
			}

			/**
			 * Creates a unary function that invokes `func` with its argument transformed.
			 *
			 * @private
			 * @param {Function} func The function to wrap.
			 * @param {Function} transform The argument transform.
			 * @returns {Function} Returns the new function.
			 */
			function overArg(func, transform) {
			  return function(arg) {
			    return func(transform(arg));
			  };
			}

			/**
			 * Converts `set` to an array of its values.
			 *
			 * @private
			 * @param {Object} set The set to convert.
			 * @returns {Array} Returns the values.
			 */
			function setToArray(set) {
			  var index = -1,
			      result = Array(set.size);

			  set.forEach(function(value) {
			    result[++index] = value;
			  });
			  return result;
			}

			/** Used for built-in method references. */
			var arrayProto = Array.prototype,
			    funcProto = Function.prototype,
			    objectProto = Object.prototype;

			/** Used to detect overreaching core-js shims. */
			var coreJsData = root['__core-js_shared__'];

			/** Used to resolve the decompiled source of functions. */
			var funcToString = funcProto.toString;

			/** Used to check objects for own properties. */
			var hasOwnProperty = objectProto.hasOwnProperty;

			/** Used to detect methods masquerading as native. */
			var maskSrcKey = (function() {
			  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
			  return uid ? ('Symbol(src)_1.' + uid) : '';
			}());

			/**
			 * Used to resolve the
			 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
			 * of values.
			 */
			var nativeObjectToString = objectProto.toString;

			/** Used to detect if a method is native. */
			var reIsNative = RegExp('^' +
			  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
			  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
			);

			/** Built-in value references. */
			var Buffer = moduleExports ? root.Buffer : undefined,
			    Symbol = root.Symbol,
			    Uint8Array = root.Uint8Array,
			    propertyIsEnumerable = objectProto.propertyIsEnumerable,
			    splice = arrayProto.splice,
			    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

			/* Built-in method references for those with the same name as other `lodash` methods. */
			var nativeGetSymbols = Object.getOwnPropertySymbols,
			    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
			    nativeKeys = overArg(Object.keys, Object);

			/* Built-in method references that are verified to be native. */
			var DataView = getNative(root, 'DataView'),
			    Map = getNative(root, 'Map'),
			    Promise = getNative(root, 'Promise'),
			    Set = getNative(root, 'Set'),
			    WeakMap = getNative(root, 'WeakMap'),
			    nativeCreate = getNative(Object, 'create');

			/** Used to detect maps, sets, and weakmaps. */
			var dataViewCtorString = toSource(DataView),
			    mapCtorString = toSource(Map),
			    promiseCtorString = toSource(Promise),
			    setCtorString = toSource(Set),
			    weakMapCtorString = toSource(WeakMap);

			/** Used to convert symbols to primitives and strings. */
			var symbolProto = Symbol ? Symbol.prototype : undefined,
			    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

			/**
			 * Creates a hash object.
			 *
			 * @private
			 * @constructor
			 * @param {Array} [entries] The key-value pairs to cache.
			 */
			function Hash(entries) {
			  var index = -1,
			      length = entries == null ? 0 : entries.length;

			  this.clear();
			  while (++index < length) {
			    var entry = entries[index];
			    this.set(entry[0], entry[1]);
			  }
			}

			/**
			 * Removes all key-value entries from the hash.
			 *
			 * @private
			 * @name clear
			 * @memberOf Hash
			 */
			function hashClear() {
			  this.__data__ = nativeCreate ? nativeCreate(null) : {};
			  this.size = 0;
			}

			/**
			 * Removes `key` and its value from the hash.
			 *
			 * @private
			 * @name delete
			 * @memberOf Hash
			 * @param {Object} hash The hash to modify.
			 * @param {string} key The key of the value to remove.
			 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
			 */
			function hashDelete(key) {
			  var result = this.has(key) && delete this.__data__[key];
			  this.size -= result ? 1 : 0;
			  return result;
			}

			/**
			 * Gets the hash value for `key`.
			 *
			 * @private
			 * @name get
			 * @memberOf Hash
			 * @param {string} key The key of the value to get.
			 * @returns {*} Returns the entry value.
			 */
			function hashGet(key) {
			  var data = this.__data__;
			  if (nativeCreate) {
			    var result = data[key];
			    return result === HASH_UNDEFINED ? undefined : result;
			  }
			  return hasOwnProperty.call(data, key) ? data[key] : undefined;
			}

			/**
			 * Checks if a hash value for `key` exists.
			 *
			 * @private
			 * @name has
			 * @memberOf Hash
			 * @param {string} key The key of the entry to check.
			 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			 */
			function hashHas(key) {
			  var data = this.__data__;
			  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
			}

			/**
			 * Sets the hash `key` to `value`.
			 *
			 * @private
			 * @name set
			 * @memberOf Hash
			 * @param {string} key The key of the value to set.
			 * @param {*} value The value to set.
			 * @returns {Object} Returns the hash instance.
			 */
			function hashSet(key, value) {
			  var data = this.__data__;
			  this.size += this.has(key) ? 0 : 1;
			  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
			  return this;
			}

			// Add methods to `Hash`.
			Hash.prototype.clear = hashClear;
			Hash.prototype['delete'] = hashDelete;
			Hash.prototype.get = hashGet;
			Hash.prototype.has = hashHas;
			Hash.prototype.set = hashSet;

			/**
			 * Creates an list cache object.
			 *
			 * @private
			 * @constructor
			 * @param {Array} [entries] The key-value pairs to cache.
			 */
			function ListCache(entries) {
			  var index = -1,
			      length = entries == null ? 0 : entries.length;

			  this.clear();
			  while (++index < length) {
			    var entry = entries[index];
			    this.set(entry[0], entry[1]);
			  }
			}

			/**
			 * Removes all key-value entries from the list cache.
			 *
			 * @private
			 * @name clear
			 * @memberOf ListCache
			 */
			function listCacheClear() {
			  this.__data__ = [];
			  this.size = 0;
			}

			/**
			 * Removes `key` and its value from the list cache.
			 *
			 * @private
			 * @name delete
			 * @memberOf ListCache
			 * @param {string} key The key of the value to remove.
			 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
			 */
			function listCacheDelete(key) {
			  var data = this.__data__,
			      index = assocIndexOf(data, key);

			  if (index < 0) {
			    return false;
			  }
			  var lastIndex = data.length - 1;
			  if (index == lastIndex) {
			    data.pop();
			  } else {
			    splice.call(data, index, 1);
			  }
			  --this.size;
			  return true;
			}

			/**
			 * Gets the list cache value for `key`.
			 *
			 * @private
			 * @name get
			 * @memberOf ListCache
			 * @param {string} key The key of the value to get.
			 * @returns {*} Returns the entry value.
			 */
			function listCacheGet(key) {
			  var data = this.__data__,
			      index = assocIndexOf(data, key);

			  return index < 0 ? undefined : data[index][1];
			}

			/**
			 * Checks if a list cache value for `key` exists.
			 *
			 * @private
			 * @name has
			 * @memberOf ListCache
			 * @param {string} key The key of the entry to check.
			 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			 */
			function listCacheHas(key) {
			  return assocIndexOf(this.__data__, key) > -1;
			}

			/**
			 * Sets the list cache `key` to `value`.
			 *
			 * @private
			 * @name set
			 * @memberOf ListCache
			 * @param {string} key The key of the value to set.
			 * @param {*} value The value to set.
			 * @returns {Object} Returns the list cache instance.
			 */
			function listCacheSet(key, value) {
			  var data = this.__data__,
			      index = assocIndexOf(data, key);

			  if (index < 0) {
			    ++this.size;
			    data.push([key, value]);
			  } else {
			    data[index][1] = value;
			  }
			  return this;
			}

			// Add methods to `ListCache`.
			ListCache.prototype.clear = listCacheClear;
			ListCache.prototype['delete'] = listCacheDelete;
			ListCache.prototype.get = listCacheGet;
			ListCache.prototype.has = listCacheHas;
			ListCache.prototype.set = listCacheSet;

			/**
			 * Creates a map cache object to store key-value pairs.
			 *
			 * @private
			 * @constructor
			 * @param {Array} [entries] The key-value pairs to cache.
			 */
			function MapCache(entries) {
			  var index = -1,
			      length = entries == null ? 0 : entries.length;

			  this.clear();
			  while (++index < length) {
			    var entry = entries[index];
			    this.set(entry[0], entry[1]);
			  }
			}

			/**
			 * Removes all key-value entries from the map.
			 *
			 * @private
			 * @name clear
			 * @memberOf MapCache
			 */
			function mapCacheClear() {
			  this.size = 0;
			  this.__data__ = {
			    'hash': new Hash,
			    'map': new (Map || ListCache),
			    'string': new Hash
			  };
			}

			/**
			 * Removes `key` and its value from the map.
			 *
			 * @private
			 * @name delete
			 * @memberOf MapCache
			 * @param {string} key The key of the value to remove.
			 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
			 */
			function mapCacheDelete(key) {
			  var result = getMapData(this, key)['delete'](key);
			  this.size -= result ? 1 : 0;
			  return result;
			}

			/**
			 * Gets the map value for `key`.
			 *
			 * @private
			 * @name get
			 * @memberOf MapCache
			 * @param {string} key The key of the value to get.
			 * @returns {*} Returns the entry value.
			 */
			function mapCacheGet(key) {
			  return getMapData(this, key).get(key);
			}

			/**
			 * Checks if a map value for `key` exists.
			 *
			 * @private
			 * @name has
			 * @memberOf MapCache
			 * @param {string} key The key of the entry to check.
			 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			 */
			function mapCacheHas(key) {
			  return getMapData(this, key).has(key);
			}

			/**
			 * Sets the map `key` to `value`.
			 *
			 * @private
			 * @name set
			 * @memberOf MapCache
			 * @param {string} key The key of the value to set.
			 * @param {*} value The value to set.
			 * @returns {Object} Returns the map cache instance.
			 */
			function mapCacheSet(key, value) {
			  var data = getMapData(this, key),
			      size = data.size;

			  data.set(key, value);
			  this.size += data.size == size ? 0 : 1;
			  return this;
			}

			// Add methods to `MapCache`.
			MapCache.prototype.clear = mapCacheClear;
			MapCache.prototype['delete'] = mapCacheDelete;
			MapCache.prototype.get = mapCacheGet;
			MapCache.prototype.has = mapCacheHas;
			MapCache.prototype.set = mapCacheSet;

			/**
			 *
			 * Creates an array cache object to store unique values.
			 *
			 * @private
			 * @constructor
			 * @param {Array} [values] The values to cache.
			 */
			function SetCache(values) {
			  var index = -1,
			      length = values == null ? 0 : values.length;

			  this.__data__ = new MapCache;
			  while (++index < length) {
			    this.add(values[index]);
			  }
			}

			/**
			 * Adds `value` to the array cache.
			 *
			 * @private
			 * @name add
			 * @memberOf SetCache
			 * @alias push
			 * @param {*} value The value to cache.
			 * @returns {Object} Returns the cache instance.
			 */
			function setCacheAdd(value) {
			  this.__data__.set(value, HASH_UNDEFINED);
			  return this;
			}

			/**
			 * Checks if `value` is in the array cache.
			 *
			 * @private
			 * @name has
			 * @memberOf SetCache
			 * @param {*} value The value to search for.
			 * @returns {number} Returns `true` if `value` is found, else `false`.
			 */
			function setCacheHas(value) {
			  return this.__data__.has(value);
			}

			// Add methods to `SetCache`.
			SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
			SetCache.prototype.has = setCacheHas;

			/**
			 * Creates a stack cache object to store key-value pairs.
			 *
			 * @private
			 * @constructor
			 * @param {Array} [entries] The key-value pairs to cache.
			 */
			function Stack(entries) {
			  var data = this.__data__ = new ListCache(entries);
			  this.size = data.size;
			}

			/**
			 * Removes all key-value entries from the stack.
			 *
			 * @private
			 * @name clear
			 * @memberOf Stack
			 */
			function stackClear() {
			  this.__data__ = new ListCache;
			  this.size = 0;
			}

			/**
			 * Removes `key` and its value from the stack.
			 *
			 * @private
			 * @name delete
			 * @memberOf Stack
			 * @param {string} key The key of the value to remove.
			 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
			 */
			function stackDelete(key) {
			  var data = this.__data__,
			      result = data['delete'](key);

			  this.size = data.size;
			  return result;
			}

			/**
			 * Gets the stack value for `key`.
			 *
			 * @private
			 * @name get
			 * @memberOf Stack
			 * @param {string} key The key of the value to get.
			 * @returns {*} Returns the entry value.
			 */
			function stackGet(key) {
			  return this.__data__.get(key);
			}

			/**
			 * Checks if a stack value for `key` exists.
			 *
			 * @private
			 * @name has
			 * @memberOf Stack
			 * @param {string} key The key of the entry to check.
			 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			 */
			function stackHas(key) {
			  return this.__data__.has(key);
			}

			/**
			 * Sets the stack `key` to `value`.
			 *
			 * @private
			 * @name set
			 * @memberOf Stack
			 * @param {string} key The key of the value to set.
			 * @param {*} value The value to set.
			 * @returns {Object} Returns the stack cache instance.
			 */
			function stackSet(key, value) {
			  var data = this.__data__;
			  if (data instanceof ListCache) {
			    var pairs = data.__data__;
			    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
			      pairs.push([key, value]);
			      this.size = ++data.size;
			      return this;
			    }
			    data = this.__data__ = new MapCache(pairs);
			  }
			  data.set(key, value);
			  this.size = data.size;
			  return this;
			}

			// Add methods to `Stack`.
			Stack.prototype.clear = stackClear;
			Stack.prototype['delete'] = stackDelete;
			Stack.prototype.get = stackGet;
			Stack.prototype.has = stackHas;
			Stack.prototype.set = stackSet;

			/**
			 * Creates an array of the enumerable property names of the array-like `value`.
			 *
			 * @private
			 * @param {*} value The value to query.
			 * @param {boolean} inherited Specify returning inherited property names.
			 * @returns {Array} Returns the array of property names.
			 */
			function arrayLikeKeys(value, inherited) {
			  var isArr = isArray(value),
			      isArg = !isArr && isArguments(value),
			      isBuff = !isArr && !isArg && isBuffer(value),
			      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
			      skipIndexes = isArr || isArg || isBuff || isType,
			      result = skipIndexes ? baseTimes(value.length, String) : [],
			      length = result.length;

			  for (var key in value) {
			    if ((hasOwnProperty.call(value, key)) &&
			        !(skipIndexes && (
			           // Safari 9 has enumerable `arguments.length` in strict mode.
			           key == 'length' ||
			           // Node.js 0.10 has enumerable non-index properties on buffers.
			           (isBuff && (key == 'offset' || key == 'parent')) ||
			           // PhantomJS 2 has enumerable non-index properties on typed arrays.
			           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
			           // Skip index properties.
			           isIndex(key, length)
			        ))) {
			      result.push(key);
			    }
			  }
			  return result;
			}

			/**
			 * Gets the index at which the `key` is found in `array` of key-value pairs.
			 *
			 * @private
			 * @param {Array} array The array to inspect.
			 * @param {*} key The key to search for.
			 * @returns {number} Returns the index of the matched value, else `-1`.
			 */
			function assocIndexOf(array, key) {
			  var length = array.length;
			  while (length--) {
			    if (eq(array[length][0], key)) {
			      return length;
			    }
			  }
			  return -1;
			}

			/**
			 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
			 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
			 * symbols of `object`.
			 *
			 * @private
			 * @param {Object} object The object to query.
			 * @param {Function} keysFunc The function to get the keys of `object`.
			 * @param {Function} symbolsFunc The function to get the symbols of `object`.
			 * @returns {Array} Returns the array of property names and symbols.
			 */
			function baseGetAllKeys(object, keysFunc, symbolsFunc) {
			  var result = keysFunc(object);
			  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
			}

			/**
			 * The base implementation of `getTag` without fallbacks for buggy environments.
			 *
			 * @private
			 * @param {*} value The value to query.
			 * @returns {string} Returns the `toStringTag`.
			 */
			function baseGetTag(value) {
			  if (value == null) {
			    return value === undefined ? undefinedTag : nullTag;
			  }
			  return (symToStringTag && symToStringTag in Object(value))
			    ? getRawTag(value)
			    : objectToString(value);
			}

			/**
			 * The base implementation of `_.isArguments`.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
			 */
			function baseIsArguments(value) {
			  return isObjectLike(value) && baseGetTag(value) == argsTag;
			}

			/**
			 * The base implementation of `_.isEqual` which supports partial comparisons
			 * and tracks traversed objects.
			 *
			 * @private
			 * @param {*} value The value to compare.
			 * @param {*} other The other value to compare.
			 * @param {boolean} bitmask The bitmask flags.
			 *  1 - Unordered comparison
			 *  2 - Partial comparison
			 * @param {Function} [customizer] The function to customize comparisons.
			 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
			 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
			 */
			function baseIsEqual(value, other, bitmask, customizer, stack) {
			  if (value === other) {
			    return true;
			  }
			  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
			    return value !== value && other !== other;
			  }
			  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
			}

			/**
			 * A specialized version of `baseIsEqual` for arrays and objects which performs
			 * deep comparisons and tracks traversed objects enabling objects with circular
			 * references to be compared.
			 *
			 * @private
			 * @param {Object} object The object to compare.
			 * @param {Object} other The other object to compare.
			 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
			 * @param {Function} customizer The function to customize comparisons.
			 * @param {Function} equalFunc The function to determine equivalents of values.
			 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
			 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
			 */
			function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
			  var objIsArr = isArray(object),
			      othIsArr = isArray(other),
			      objTag = objIsArr ? arrayTag : getTag(object),
			      othTag = othIsArr ? arrayTag : getTag(other);

			  objTag = objTag == argsTag ? objectTag : objTag;
			  othTag = othTag == argsTag ? objectTag : othTag;

			  var objIsObj = objTag == objectTag,
			      othIsObj = othTag == objectTag,
			      isSameTag = objTag == othTag;

			  if (isSameTag && isBuffer(object)) {
			    if (!isBuffer(other)) {
			      return false;
			    }
			    objIsArr = true;
			    objIsObj = false;
			  }
			  if (isSameTag && !objIsObj) {
			    stack || (stack = new Stack);
			    return (objIsArr || isTypedArray(object))
			      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
			      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
			  }
			  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
			    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
			        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

			    if (objIsWrapped || othIsWrapped) {
			      var objUnwrapped = objIsWrapped ? object.value() : object,
			          othUnwrapped = othIsWrapped ? other.value() : other;

			      stack || (stack = new Stack);
			      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
			    }
			  }
			  if (!isSameTag) {
			    return false;
			  }
			  stack || (stack = new Stack);
			  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
			}

			/**
			 * The base implementation of `_.isNative` without bad shim checks.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a native function,
			 *  else `false`.
			 */
			function baseIsNative(value) {
			  if (!isObject(value) || isMasked(value)) {
			    return false;
			  }
			  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
			  return pattern.test(toSource(value));
			}

			/**
			 * The base implementation of `_.isTypedArray` without Node.js optimizations.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
			 */
			function baseIsTypedArray(value) {
			  return isObjectLike(value) &&
			    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
			}

			/**
			 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
			 *
			 * @private
			 * @param {Object} object The object to query.
			 * @returns {Array} Returns the array of property names.
			 */
			function baseKeys(object) {
			  if (!isPrototype(object)) {
			    return nativeKeys(object);
			  }
			  var result = [];
			  for (var key in Object(object)) {
			    if (hasOwnProperty.call(object, key) && key != 'constructor') {
			      result.push(key);
			    }
			  }
			  return result;
			}

			/**
			 * A specialized version of `baseIsEqualDeep` for arrays with support for
			 * partial deep comparisons.
			 *
			 * @private
			 * @param {Array} array The array to compare.
			 * @param {Array} other The other array to compare.
			 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
			 * @param {Function} customizer The function to customize comparisons.
			 * @param {Function} equalFunc The function to determine equivalents of values.
			 * @param {Object} stack Tracks traversed `array` and `other` objects.
			 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
			 */
			function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
			  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
			      arrLength = array.length,
			      othLength = other.length;

			  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
			    return false;
			  }
			  // Assume cyclic values are equal.
			  var stacked = stack.get(array);
			  if (stacked && stack.get(other)) {
			    return stacked == other;
			  }
			  var index = -1,
			      result = true,
			      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

			  stack.set(array, other);
			  stack.set(other, array);

			  // Ignore non-index properties.
			  while (++index < arrLength) {
			    var arrValue = array[index],
			        othValue = other[index];

			    if (customizer) {
			      var compared = isPartial
			        ? customizer(othValue, arrValue, index, other, array, stack)
			        : customizer(arrValue, othValue, index, array, other, stack);
			    }
			    if (compared !== undefined) {
			      if (compared) {
			        continue;
			      }
			      result = false;
			      break;
			    }
			    // Recursively compare arrays (susceptible to call stack limits).
			    if (seen) {
			      if (!arraySome(other, function(othValue, othIndex) {
			            if (!cacheHas(seen, othIndex) &&
			                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
			              return seen.push(othIndex);
			            }
			          })) {
			        result = false;
			        break;
			      }
			    } else if (!(
			          arrValue === othValue ||
			            equalFunc(arrValue, othValue, bitmask, customizer, stack)
			        )) {
			      result = false;
			      break;
			    }
			  }
			  stack['delete'](array);
			  stack['delete'](other);
			  return result;
			}

			/**
			 * A specialized version of `baseIsEqualDeep` for comparing objects of
			 * the same `toStringTag`.
			 *
			 * **Note:** This function only supports comparing values with tags of
			 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
			 *
			 * @private
			 * @param {Object} object The object to compare.
			 * @param {Object} other The other object to compare.
			 * @param {string} tag The `toStringTag` of the objects to compare.
			 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
			 * @param {Function} customizer The function to customize comparisons.
			 * @param {Function} equalFunc The function to determine equivalents of values.
			 * @param {Object} stack Tracks traversed `object` and `other` objects.
			 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
			 */
			function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
			  switch (tag) {
			    case dataViewTag:
			      if ((object.byteLength != other.byteLength) ||
			          (object.byteOffset != other.byteOffset)) {
			        return false;
			      }
			      object = object.buffer;
			      other = other.buffer;

			    case arrayBufferTag:
			      if ((object.byteLength != other.byteLength) ||
			          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
			        return false;
			      }
			      return true;

			    case boolTag:
			    case dateTag:
			    case numberTag:
			      // Coerce booleans to `1` or `0` and dates to milliseconds.
			      // Invalid dates are coerced to `NaN`.
			      return eq(+object, +other);

			    case errorTag:
			      return object.name == other.name && object.message == other.message;

			    case regexpTag:
			    case stringTag:
			      // Coerce regexes to strings and treat strings, primitives and objects,
			      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
			      // for more details.
			      return object == (other + '');

			    case mapTag:
			      var convert = mapToArray;

			    case setTag:
			      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
			      convert || (convert = setToArray);

			      if (object.size != other.size && !isPartial) {
			        return false;
			      }
			      // Assume cyclic values are equal.
			      var stacked = stack.get(object);
			      if (stacked) {
			        return stacked == other;
			      }
			      bitmask |= COMPARE_UNORDERED_FLAG;

			      // Recursively compare objects (susceptible to call stack limits).
			      stack.set(object, other);
			      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
			      stack['delete'](object);
			      return result;

			    case symbolTag:
			      if (symbolValueOf) {
			        return symbolValueOf.call(object) == symbolValueOf.call(other);
			      }
			  }
			  return false;
			}

			/**
			 * A specialized version of `baseIsEqualDeep` for objects with support for
			 * partial deep comparisons.
			 *
			 * @private
			 * @param {Object} object The object to compare.
			 * @param {Object} other The other object to compare.
			 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
			 * @param {Function} customizer The function to customize comparisons.
			 * @param {Function} equalFunc The function to determine equivalents of values.
			 * @param {Object} stack Tracks traversed `object` and `other` objects.
			 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
			 */
			function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
			  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
			      objProps = getAllKeys(object),
			      objLength = objProps.length,
			      othProps = getAllKeys(other),
			      othLength = othProps.length;

			  if (objLength != othLength && !isPartial) {
			    return false;
			  }
			  var index = objLength;
			  while (index--) {
			    var key = objProps[index];
			    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
			      return false;
			    }
			  }
			  // Assume cyclic values are equal.
			  var stacked = stack.get(object);
			  if (stacked && stack.get(other)) {
			    return stacked == other;
			  }
			  var result = true;
			  stack.set(object, other);
			  stack.set(other, object);

			  var skipCtor = isPartial;
			  while (++index < objLength) {
			    key = objProps[index];
			    var objValue = object[key],
			        othValue = other[key];

			    if (customizer) {
			      var compared = isPartial
			        ? customizer(othValue, objValue, key, other, object, stack)
			        : customizer(objValue, othValue, key, object, other, stack);
			    }
			    // Recursively compare objects (susceptible to call stack limits).
			    if (!(compared === undefined
			          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
			          : compared
			        )) {
			      result = false;
			      break;
			    }
			    skipCtor || (skipCtor = key == 'constructor');
			  }
			  if (result && !skipCtor) {
			    var objCtor = object.constructor,
			        othCtor = other.constructor;

			    // Non `Object` object instances with different constructors are not equal.
			    if (objCtor != othCtor &&
			        ('constructor' in object && 'constructor' in other) &&
			        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
			          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
			      result = false;
			    }
			  }
			  stack['delete'](object);
			  stack['delete'](other);
			  return result;
			}

			/**
			 * Creates an array of own enumerable property names and symbols of `object`.
			 *
			 * @private
			 * @param {Object} object The object to query.
			 * @returns {Array} Returns the array of property names and symbols.
			 */
			function getAllKeys(object) {
			  return baseGetAllKeys(object, keys, getSymbols);
			}

			/**
			 * Gets the data for `map`.
			 *
			 * @private
			 * @param {Object} map The map to query.
			 * @param {string} key The reference key.
			 * @returns {*} Returns the map data.
			 */
			function getMapData(map, key) {
			  var data = map.__data__;
			  return isKeyable(key)
			    ? data[typeof key == 'string' ? 'string' : 'hash']
			    : data.map;
			}

			/**
			 * Gets the native function at `key` of `object`.
			 *
			 * @private
			 * @param {Object} object The object to query.
			 * @param {string} key The key of the method to get.
			 * @returns {*} Returns the function if it's native, else `undefined`.
			 */
			function getNative(object, key) {
			  var value = getValue(object, key);
			  return baseIsNative(value) ? value : undefined;
			}

			/**
			 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
			 *
			 * @private
			 * @param {*} value The value to query.
			 * @returns {string} Returns the raw `toStringTag`.
			 */
			function getRawTag(value) {
			  var isOwn = hasOwnProperty.call(value, symToStringTag),
			      tag = value[symToStringTag];

			  try {
			    value[symToStringTag] = undefined;
			    var unmasked = true;
			  } catch (e) {}

			  var result = nativeObjectToString.call(value);
			  if (unmasked) {
			    if (isOwn) {
			      value[symToStringTag] = tag;
			    } else {
			      delete value[symToStringTag];
			    }
			  }
			  return result;
			}

			/**
			 * Creates an array of the own enumerable symbols of `object`.
			 *
			 * @private
			 * @param {Object} object The object to query.
			 * @returns {Array} Returns the array of symbols.
			 */
			var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
			  if (object == null) {
			    return [];
			  }
			  object = Object(object);
			  return arrayFilter(nativeGetSymbols(object), function(symbol) {
			    return propertyIsEnumerable.call(object, symbol);
			  });
			};

			/**
			 * Gets the `toStringTag` of `value`.
			 *
			 * @private
			 * @param {*} value The value to query.
			 * @returns {string} Returns the `toStringTag`.
			 */
			var getTag = baseGetTag;

			// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
			if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
			    (Map && getTag(new Map) != mapTag) ||
			    (Promise && getTag(Promise.resolve()) != promiseTag) ||
			    (Set && getTag(new Set) != setTag) ||
			    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
			  getTag = function(value) {
			    var result = baseGetTag(value),
			        Ctor = result == objectTag ? value.constructor : undefined,
			        ctorString = Ctor ? toSource(Ctor) : '';

			    if (ctorString) {
			      switch (ctorString) {
			        case dataViewCtorString: return dataViewTag;
			        case mapCtorString: return mapTag;
			        case promiseCtorString: return promiseTag;
			        case setCtorString: return setTag;
			        case weakMapCtorString: return weakMapTag;
			      }
			    }
			    return result;
			  };
			}

			/**
			 * Checks if `value` is a valid array-like index.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
			 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
			 */
			function isIndex(value, length) {
			  length = length == null ? MAX_SAFE_INTEGER : length;
			  return !!length &&
			    (typeof value == 'number' || reIsUint.test(value)) &&
			    (value > -1 && value % 1 == 0 && value < length);
			}

			/**
			 * Checks if `value` is suitable for use as unique object key.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
			 */
			function isKeyable(value) {
			  var type = typeof value;
			  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
			    ? (value !== '__proto__')
			    : (value === null);
			}

			/**
			 * Checks if `func` has its source masked.
			 *
			 * @private
			 * @param {Function} func The function to check.
			 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
			 */
			function isMasked(func) {
			  return !!maskSrcKey && (maskSrcKey in func);
			}

			/**
			 * Checks if `value` is likely a prototype object.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
			 */
			function isPrototype(value) {
			  var Ctor = value && value.constructor,
			      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

			  return value === proto;
			}

			/**
			 * Converts `value` to a string using `Object.prototype.toString`.
			 *
			 * @private
			 * @param {*} value The value to convert.
			 * @returns {string} Returns the converted string.
			 */
			function objectToString(value) {
			  return nativeObjectToString.call(value);
			}

			/**
			 * Converts `func` to its source code.
			 *
			 * @private
			 * @param {Function} func The function to convert.
			 * @returns {string} Returns the source code.
			 */
			function toSource(func) {
			  if (func != null) {
			    try {
			      return funcToString.call(func);
			    } catch (e) {}
			    try {
			      return (func + '');
			    } catch (e) {}
			  }
			  return '';
			}

			/**
			 * Performs a
			 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
			 * comparison between two values to determine if they are equivalent.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to compare.
			 * @param {*} other The other value to compare.
			 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
			 * @example
			 *
			 * var object = { 'a': 1 };
			 * var other = { 'a': 1 };
			 *
			 * _.eq(object, object);
			 * // => true
			 *
			 * _.eq(object, other);
			 * // => false
			 *
			 * _.eq('a', 'a');
			 * // => true
			 *
			 * _.eq('a', Object('a'));
			 * // => false
			 *
			 * _.eq(NaN, NaN);
			 * // => true
			 */
			function eq(value, other) {
			  return value === other || (value !== value && other !== other);
			}

			/**
			 * Checks if `value` is likely an `arguments` object.
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
			 *  else `false`.
			 * @example
			 *
			 * _.isArguments(function() { return arguments; }());
			 * // => true
			 *
			 * _.isArguments([1, 2, 3]);
			 * // => false
			 */
			var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
			  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
			    !propertyIsEnumerable.call(value, 'callee');
			};

			/**
			 * Checks if `value` is classified as an `Array` object.
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
			 * @example
			 *
			 * _.isArray([1, 2, 3]);
			 * // => true
			 *
			 * _.isArray(document.body.children);
			 * // => false
			 *
			 * _.isArray('abc');
			 * // => false
			 *
			 * _.isArray(_.noop);
			 * // => false
			 */
			var isArray = Array.isArray;

			/**
			 * Checks if `value` is array-like. A value is considered array-like if it's
			 * not a function and has a `value.length` that's an integer greater than or
			 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
			 * @example
			 *
			 * _.isArrayLike([1, 2, 3]);
			 * // => true
			 *
			 * _.isArrayLike(document.body.children);
			 * // => true
			 *
			 * _.isArrayLike('abc');
			 * // => true
			 *
			 * _.isArrayLike(_.noop);
			 * // => false
			 */
			function isArrayLike(value) {
			  return value != null && isLength(value.length) && !isFunction(value);
			}

			/**
			 * Checks if `value` is a buffer.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.3.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
			 * @example
			 *
			 * _.isBuffer(new Buffer(2));
			 * // => true
			 *
			 * _.isBuffer(new Uint8Array(2));
			 * // => false
			 */
			var isBuffer = nativeIsBuffer || stubFalse;

			/**
			 * Performs a deep comparison between two values to determine if they are
			 * equivalent.
			 *
			 * **Note:** This method supports comparing arrays, array buffers, booleans,
			 * date objects, error objects, maps, numbers, `Object` objects, regexes,
			 * sets, strings, symbols, and typed arrays. `Object` objects are compared
			 * by their own, not inherited, enumerable properties. Functions and DOM
			 * nodes are compared by strict equality, i.e. `===`.
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Lang
			 * @param {*} value The value to compare.
			 * @param {*} other The other value to compare.
			 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
			 * @example
			 *
			 * var object = { 'a': 1 };
			 * var other = { 'a': 1 };
			 *
			 * _.isEqual(object, other);
			 * // => true
			 *
			 * object === other;
			 * // => false
			 */
			function isEqual(value, other) {
			  return baseIsEqual(value, other);
			}

			/**
			 * Checks if `value` is classified as a `Function` object.
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
			 * @example
			 *
			 * _.isFunction(_);
			 * // => true
			 *
			 * _.isFunction(/abc/);
			 * // => false
			 */
			function isFunction(value) {
			  if (!isObject(value)) {
			    return false;
			  }
			  // The use of `Object#toString` avoids issues with the `typeof` operator
			  // in Safari 9 which returns 'object' for typed arrays and other constructors.
			  var tag = baseGetTag(value);
			  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
			}

			/**
			 * Checks if `value` is a valid array-like length.
			 *
			 * **Note:** This method is loosely based on
			 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
			 * @example
			 *
			 * _.isLength(3);
			 * // => true
			 *
			 * _.isLength(Number.MIN_VALUE);
			 * // => false
			 *
			 * _.isLength(Infinity);
			 * // => false
			 *
			 * _.isLength('3');
			 * // => false
			 */
			function isLength(value) {
			  return typeof value == 'number' &&
			    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
			}

			/**
			 * Checks if `value` is the
			 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
			 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
			 * @example
			 *
			 * _.isObject({});
			 * // => true
			 *
			 * _.isObject([1, 2, 3]);
			 * // => true
			 *
			 * _.isObject(_.noop);
			 * // => true
			 *
			 * _.isObject(null);
			 * // => false
			 */
			function isObject(value) {
			  var type = typeof value;
			  return value != null && (type == 'object' || type == 'function');
			}

			/**
			 * Checks if `value` is object-like. A value is object-like if it's not `null`
			 * and has a `typeof` result of "object".
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
			 * @example
			 *
			 * _.isObjectLike({});
			 * // => true
			 *
			 * _.isObjectLike([1, 2, 3]);
			 * // => true
			 *
			 * _.isObjectLike(_.noop);
			 * // => false
			 *
			 * _.isObjectLike(null);
			 * // => false
			 */
			function isObjectLike(value) {
			  return value != null && typeof value == 'object';
			}

			/**
			 * Checks if `value` is classified as a typed array.
			 *
			 * @static
			 * @memberOf _
			 * @since 3.0.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
			 * @example
			 *
			 * _.isTypedArray(new Uint8Array);
			 * // => true
			 *
			 * _.isTypedArray([]);
			 * // => false
			 */
			var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

			/**
			 * Creates an array of the own enumerable property names of `object`.
			 *
			 * **Note:** Non-object values are coerced to objects. See the
			 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
			 * for more details.
			 *
			 * @static
			 * @since 0.1.0
			 * @memberOf _
			 * @category Object
			 * @param {Object} object The object to query.
			 * @returns {Array} Returns the array of property names.
			 * @example
			 *
			 * function Foo() {
			 *   this.a = 1;
			 *   this.b = 2;
			 * }
			 *
			 * Foo.prototype.c = 3;
			 *
			 * _.keys(new Foo);
			 * // => ['a', 'b'] (iteration order is not guaranteed)
			 *
			 * _.keys('hi');
			 * // => ['0', '1']
			 */
			function keys(object) {
			  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
			}

			/**
			 * This method returns a new empty array.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.13.0
			 * @category Util
			 * @returns {Array} Returns the new empty array.
			 * @example
			 *
			 * var arrays = _.times(2, _.stubArray);
			 *
			 * console.log(arrays);
			 * // => [[], []]
			 *
			 * console.log(arrays[0] === arrays[1]);
			 * // => false
			 */
			function stubArray() {
			  return [];
			}

			/**
			 * This method returns `false`.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.13.0
			 * @category Util
			 * @returns {boolean} Returns `false`.
			 * @example
			 *
			 * _.times(2, _.stubFalse);
			 * // => [false, false]
			 */
			function stubFalse() {
			  return false;
			}

			module.exports = isEqual; 
		} (lodash_isequal, lodash_isequal.exports));
		return lodash_isequal.exports;
	}

	var AttributeMap = {};

	var hasRequiredAttributeMap;

	function requireAttributeMap () {
		if (hasRequiredAttributeMap) return AttributeMap;
		hasRequiredAttributeMap = 1;
		Object.defineProperty(AttributeMap, "__esModule", { value: true });
		const cloneDeep = requireLodash_clonedeep();
		const isEqual = requireLodash_isequal();
		var AttributeMap$1;
		(function (AttributeMap) {
		    function compose(a = {}, b = {}, keepNull = false) {
		        if (typeof a !== 'object') {
		            a = {};
		        }
		        if (typeof b !== 'object') {
		            b = {};
		        }
		        let attributes = cloneDeep(b);
		        if (!keepNull) {
		            attributes = Object.keys(attributes).reduce((copy, key) => {
		                if (attributes[key] != null) {
		                    copy[key] = attributes[key];
		                }
		                return copy;
		            }, {});
		        }
		        for (const key in a) {
		            if (a[key] !== undefined && b[key] === undefined) {
		                attributes[key] = a[key];
		            }
		        }
		        return Object.keys(attributes).length > 0 ? attributes : undefined;
		    }
		    AttributeMap.compose = compose;
		    function diff(a = {}, b = {}) {
		        if (typeof a !== 'object') {
		            a = {};
		        }
		        if (typeof b !== 'object') {
		            b = {};
		        }
		        const attributes = Object.keys(a)
		            .concat(Object.keys(b))
		            .reduce((attrs, key) => {
		            if (!isEqual(a[key], b[key])) {
		                attrs[key] = b[key] === undefined ? null : b[key];
		            }
		            return attrs;
		        }, {});
		        return Object.keys(attributes).length > 0 ? attributes : undefined;
		    }
		    AttributeMap.diff = diff;
		    function invert(attr = {}, base = {}) {
		        attr = attr || {};
		        const baseInverted = Object.keys(base).reduce((memo, key) => {
		            if (base[key] !== attr[key] && attr[key] !== undefined) {
		                memo[key] = base[key];
		            }
		            return memo;
		        }, {});
		        return Object.keys(attr).reduce((memo, key) => {
		            if (attr[key] !== base[key] && base[key] === undefined) {
		                memo[key] = null;
		            }
		            return memo;
		        }, baseInverted);
		    }
		    AttributeMap.invert = invert;
		    function transform(a, b, priority = false) {
		        if (typeof a !== 'object') {
		            return b;
		        }
		        if (typeof b !== 'object') {
		            return undefined;
		        }
		        if (!priority) {
		            return b; // b simply overwrites us without priority
		        }
		        const attributes = Object.keys(b).reduce((attrs, key) => {
		            if (a[key] === undefined) {
		                attrs[key] = b[key]; // null is a valid value
		            }
		            return attrs;
		        }, {});
		        return Object.keys(attributes).length > 0 ? attributes : undefined;
		    }
		    AttributeMap.transform = transform;
		})(AttributeMap$1 || (AttributeMap$1 = {}));
		AttributeMap.default = AttributeMap$1;
		
		return AttributeMap;
	}

	var Op = {};

	var hasRequiredOp;

	function requireOp () {
		if (hasRequiredOp) return Op;
		hasRequiredOp = 1;
		Object.defineProperty(Op, "__esModule", { value: true });
		var Op$1;
		(function (Op) {
		    function length(op) {
		        if (typeof op.delete === 'number') {
		            return op.delete;
		        }
		        else if (typeof op.retain === 'number') {
		            return op.retain;
		        }
		        else if (typeof op.retain === 'object' && op.retain !== null) {
		            return 1;
		        }
		        else {
		            return typeof op.insert === 'string' ? op.insert.length : 1;
		        }
		    }
		    Op.length = length;
		})(Op$1 || (Op$1 = {}));
		Op.default = Op$1;
		
		return Op;
	}

	var OpIterator = {};

	var hasRequiredOpIterator;

	function requireOpIterator () {
		if (hasRequiredOpIterator) return OpIterator;
		hasRequiredOpIterator = 1;
		Object.defineProperty(OpIterator, "__esModule", { value: true });
		const Op_1 = requireOp();
		class Iterator {
		    constructor(ops) {
		        this.ops = ops;
		        this.index = 0;
		        this.offset = 0;
		    }
		    hasNext() {
		        return this.peekLength() < Infinity;
		    }
		    next(length) {
		        if (!length) {
		            length = Infinity;
		        }
		        const nextOp = this.ops[this.index];
		        if (nextOp) {
		            const offset = this.offset;
		            const opLength = Op_1.default.length(nextOp);
		            if (length >= opLength - offset) {
		                length = opLength - offset;
		                this.index += 1;
		                this.offset = 0;
		            }
		            else {
		                this.offset += length;
		            }
		            if (typeof nextOp.delete === 'number') {
		                return { delete: length };
		            }
		            else {
		                const retOp = {};
		                if (nextOp.attributes) {
		                    retOp.attributes = nextOp.attributes;
		                }
		                if (typeof nextOp.retain === 'number') {
		                    retOp.retain = length;
		                }
		                else if (typeof nextOp.retain === 'object' &&
		                    nextOp.retain !== null) {
		                    // offset should === 0, length should === 1
		                    retOp.retain = nextOp.retain;
		                }
		                else if (typeof nextOp.insert === 'string') {
		                    retOp.insert = nextOp.insert.substr(offset, length);
		                }
		                else {
		                    // offset should === 0, length should === 1
		                    retOp.insert = nextOp.insert;
		                }
		                return retOp;
		            }
		        }
		        else {
		            return { retain: Infinity };
		        }
		    }
		    peek() {
		        return this.ops[this.index];
		    }
		    peekLength() {
		        if (this.ops[this.index]) {
		            // Should never return 0 if our index is being managed correctly
		            return Op_1.default.length(this.ops[this.index]) - this.offset;
		        }
		        else {
		            return Infinity;
		        }
		    }
		    peekType() {
		        const op = this.ops[this.index];
		        if (op) {
		            if (typeof op.delete === 'number') {
		                return 'delete';
		            }
		            else if (typeof op.retain === 'number' ||
		                (typeof op.retain === 'object' && op.retain !== null)) {
		                return 'retain';
		            }
		            else {
		                return 'insert';
		            }
		        }
		        return 'retain';
		    }
		    rest() {
		        if (!this.hasNext()) {
		            return [];
		        }
		        else if (this.offset === 0) {
		            return this.ops.slice(this.index);
		        }
		        else {
		            const offset = this.offset;
		            const index = this.index;
		            const next = this.next();
		            const rest = this.ops.slice(this.index);
		            this.offset = offset;
		            this.index = index;
		            return [next].concat(rest);
		        }
		    }
		}
		OpIterator.default = Iterator;
		
		return OpIterator;
	}

	var hasRequiredDelta;

	function requireDelta () {
		if (hasRequiredDelta) return Delta$1.exports;
		hasRequiredDelta = 1;
		(function (module, exports$1) {
			Object.defineProperty(exports$1, "__esModule", { value: true });
			exports$1.AttributeMap = exports$1.OpIterator = exports$1.Op = void 0;
			const diff = requireDiff();
			const cloneDeep = requireLodash_clonedeep();
			const isEqual = requireLodash_isequal();
			const AttributeMap_1 = requireAttributeMap();
			exports$1.AttributeMap = AttributeMap_1.default;
			const Op_1 = requireOp();
			exports$1.Op = Op_1.default;
			const OpIterator_1 = requireOpIterator();
			exports$1.OpIterator = OpIterator_1.default;
			const NULL_CHARACTER = String.fromCharCode(0); // Placeholder char for embed in diff()
			const getEmbedTypeAndData = (a, b) => {
			    if (typeof a !== 'object' || a === null) {
			        throw new Error(`cannot retain a ${typeof a}`);
			    }
			    if (typeof b !== 'object' || b === null) {
			        throw new Error(`cannot retain a ${typeof b}`);
			    }
			    const embedType = Object.keys(a)[0];
			    if (!embedType || embedType !== Object.keys(b)[0]) {
			        throw new Error(`embed types not matched: ${embedType} != ${Object.keys(b)[0]}`);
			    }
			    return [embedType, a[embedType], b[embedType]];
			};
			class Delta {
			    constructor(ops) {
			        // Assume we are given a well formed ops
			        if (Array.isArray(ops)) {
			            this.ops = ops;
			        }
			        else if (ops != null && Array.isArray(ops.ops)) {
			            this.ops = ops.ops;
			        }
			        else {
			            this.ops = [];
			        }
			    }
			    static registerEmbed(embedType, handler) {
			        this.handlers[embedType] = handler;
			    }
			    static unregisterEmbed(embedType) {
			        delete this.handlers[embedType];
			    }
			    static getHandler(embedType) {
			        const handler = this.handlers[embedType];
			        if (!handler) {
			            throw new Error(`no handlers for embed type "${embedType}"`);
			        }
			        return handler;
			    }
			    insert(arg, attributes) {
			        const newOp = {};
			        if (typeof arg === 'string' && arg.length === 0) {
			            return this;
			        }
			        newOp.insert = arg;
			        if (attributes != null &&
			            typeof attributes === 'object' &&
			            Object.keys(attributes).length > 0) {
			            newOp.attributes = attributes;
			        }
			        return this.push(newOp);
			    }
			    delete(length) {
			        if (length <= 0) {
			            return this;
			        }
			        return this.push({ delete: length });
			    }
			    retain(length, attributes) {
			        if (typeof length === 'number' && length <= 0) {
			            return this;
			        }
			        const newOp = { retain: length };
			        if (attributes != null &&
			            typeof attributes === 'object' &&
			            Object.keys(attributes).length > 0) {
			            newOp.attributes = attributes;
			        }
			        return this.push(newOp);
			    }
			    push(newOp) {
			        let index = this.ops.length;
			        let lastOp = this.ops[index - 1];
			        newOp = cloneDeep(newOp);
			        if (typeof lastOp === 'object') {
			            if (typeof newOp.delete === 'number' &&
			                typeof lastOp.delete === 'number') {
			                this.ops[index - 1] = { delete: lastOp.delete + newOp.delete };
			                return this;
			            }
			            // Since it does not matter if we insert before or after deleting at the same index,
			            // always prefer to insert first
			            if (typeof lastOp.delete === 'number' && newOp.insert != null) {
			                index -= 1;
			                lastOp = this.ops[index - 1];
			                if (typeof lastOp !== 'object') {
			                    this.ops.unshift(newOp);
			                    return this;
			                }
			            }
			            if (isEqual(newOp.attributes, lastOp.attributes)) {
			                if (typeof newOp.insert === 'string' &&
			                    typeof lastOp.insert === 'string') {
			                    this.ops[index - 1] = { insert: lastOp.insert + newOp.insert };
			                    if (typeof newOp.attributes === 'object') {
			                        this.ops[index - 1].attributes = newOp.attributes;
			                    }
			                    return this;
			                }
			                else if (typeof newOp.retain === 'number' &&
			                    typeof lastOp.retain === 'number') {
			                    this.ops[index - 1] = { retain: lastOp.retain + newOp.retain };
			                    if (typeof newOp.attributes === 'object') {
			                        this.ops[index - 1].attributes = newOp.attributes;
			                    }
			                    return this;
			                }
			            }
			        }
			        if (index === this.ops.length) {
			            this.ops.push(newOp);
			        }
			        else {
			            this.ops.splice(index, 0, newOp);
			        }
			        return this;
			    }
			    chop() {
			        const lastOp = this.ops[this.ops.length - 1];
			        if (lastOp && typeof lastOp.retain === 'number' && !lastOp.attributes) {
			            this.ops.pop();
			        }
			        return this;
			    }
			    filter(predicate) {
			        return this.ops.filter(predicate);
			    }
			    forEach(predicate) {
			        this.ops.forEach(predicate);
			    }
			    map(predicate) {
			        return this.ops.map(predicate);
			    }
			    partition(predicate) {
			        const passed = [];
			        const failed = [];
			        this.forEach((op) => {
			            const target = predicate(op) ? passed : failed;
			            target.push(op);
			        });
			        return [passed, failed];
			    }
			    reduce(predicate, initialValue) {
			        return this.ops.reduce(predicate, initialValue);
			    }
			    changeLength() {
			        return this.reduce((length, elem) => {
			            if (elem.insert) {
			                return length + Op_1.default.length(elem);
			            }
			            else if (elem.delete) {
			                return length - elem.delete;
			            }
			            return length;
			        }, 0);
			    }
			    length() {
			        return this.reduce((length, elem) => {
			            return length + Op_1.default.length(elem);
			        }, 0);
			    }
			    slice(start = 0, end = Infinity) {
			        const ops = [];
			        const iter = new OpIterator_1.default(this.ops);
			        let index = 0;
			        while (index < end && iter.hasNext()) {
			            let nextOp;
			            if (index < start) {
			                nextOp = iter.next(start - index);
			            }
			            else {
			                nextOp = iter.next(end - index);
			                ops.push(nextOp);
			            }
			            index += Op_1.default.length(nextOp);
			        }
			        return new Delta(ops);
			    }
			    compose(other) {
			        const thisIter = new OpIterator_1.default(this.ops);
			        const otherIter = new OpIterator_1.default(other.ops);
			        const ops = [];
			        const firstOther = otherIter.peek();
			        if (firstOther != null &&
			            typeof firstOther.retain === 'number' &&
			            firstOther.attributes == null) {
			            let firstLeft = firstOther.retain;
			            while (thisIter.peekType() === 'insert' &&
			                thisIter.peekLength() <= firstLeft) {
			                firstLeft -= thisIter.peekLength();
			                ops.push(thisIter.next());
			            }
			            if (firstOther.retain - firstLeft > 0) {
			                otherIter.next(firstOther.retain - firstLeft);
			            }
			        }
			        const delta = new Delta(ops);
			        while (thisIter.hasNext() || otherIter.hasNext()) {
			            if (otherIter.peekType() === 'insert') {
			                delta.push(otherIter.next());
			            }
			            else if (thisIter.peekType() === 'delete') {
			                delta.push(thisIter.next());
			            }
			            else {
			                const length = Math.min(thisIter.peekLength(), otherIter.peekLength());
			                const thisOp = thisIter.next(length);
			                const otherOp = otherIter.next(length);
			                if (otherOp.retain) {
			                    const newOp = {};
			                    if (typeof thisOp.retain === 'number') {
			                        newOp.retain =
			                            typeof otherOp.retain === 'number' ? length : otherOp.retain;
			                    }
			                    else {
			                        if (typeof otherOp.retain === 'number') {
			                            if (thisOp.retain == null) {
			                                newOp.insert = thisOp.insert;
			                            }
			                            else {
			                                newOp.retain = thisOp.retain;
			                            }
			                        }
			                        else {
			                            const action = thisOp.retain == null ? 'insert' : 'retain';
			                            const [embedType, thisData, otherData] = getEmbedTypeAndData(thisOp[action], otherOp.retain);
			                            const handler = Delta.getHandler(embedType);
			                            newOp[action] = {
			                                [embedType]: handler.compose(thisData, otherData, action === 'retain'),
			                            };
			                        }
			                    }
			                    // Preserve null when composing with a retain, otherwise remove it for inserts
			                    const attributes = AttributeMap_1.default.compose(thisOp.attributes, otherOp.attributes, typeof thisOp.retain === 'number');
			                    if (attributes) {
			                        newOp.attributes = attributes;
			                    }
			                    delta.push(newOp);
			                    // Optimization if rest of other is just retain
			                    if (!otherIter.hasNext() &&
			                        isEqual(delta.ops[delta.ops.length - 1], newOp)) {
			                        const rest = new Delta(thisIter.rest());
			                        return delta.concat(rest).chop();
			                    }
			                    // Other op should be delete, we could be an insert or retain
			                    // Insert + delete cancels out
			                }
			                else if (typeof otherOp.delete === 'number' &&
			                    (typeof thisOp.retain === 'number' ||
			                        (typeof thisOp.retain === 'object' && thisOp.retain !== null))) {
			                    delta.push(otherOp);
			                }
			            }
			        }
			        return delta.chop();
			    }
			    concat(other) {
			        const delta = new Delta(this.ops.slice());
			        if (other.ops.length > 0) {
			            delta.push(other.ops[0]);
			            delta.ops = delta.ops.concat(other.ops.slice(1));
			        }
			        return delta;
			    }
			    diff(other, cursor) {
			        if (this.ops === other.ops) {
			            return new Delta();
			        }
			        const strings = [this, other].map((delta) => {
			            return delta
			                .map((op) => {
			                if (op.insert != null) {
			                    return typeof op.insert === 'string' ? op.insert : NULL_CHARACTER;
			                }
			                const prep = delta === other ? 'on' : 'with';
			                throw new Error('diff() called ' + prep + ' non-document');
			            })
			                .join('');
			        });
			        const retDelta = new Delta();
			        const diffResult = diff(strings[0], strings[1], cursor, true);
			        const thisIter = new OpIterator_1.default(this.ops);
			        const otherIter = new OpIterator_1.default(other.ops);
			        diffResult.forEach((component) => {
			            let length = component[1].length;
			            while (length > 0) {
			                let opLength = 0;
			                switch (component[0]) {
			                    case diff.INSERT:
			                        opLength = Math.min(otherIter.peekLength(), length);
			                        retDelta.push(otherIter.next(opLength));
			                        break;
			                    case diff.DELETE:
			                        opLength = Math.min(length, thisIter.peekLength());
			                        thisIter.next(opLength);
			                        retDelta.delete(opLength);
			                        break;
			                    case diff.EQUAL:
			                        opLength = Math.min(thisIter.peekLength(), otherIter.peekLength(), length);
			                        const thisOp = thisIter.next(opLength);
			                        const otherOp = otherIter.next(opLength);
			                        if (isEqual(thisOp.insert, otherOp.insert)) {
			                            retDelta.retain(opLength, AttributeMap_1.default.diff(thisOp.attributes, otherOp.attributes));
			                        }
			                        else {
			                            retDelta.push(otherOp).delete(opLength);
			                        }
			                        break;
			                }
			                length -= opLength;
			            }
			        });
			        return retDelta.chop();
			    }
			    eachLine(predicate, newline = '\n') {
			        const iter = new OpIterator_1.default(this.ops);
			        let line = new Delta();
			        let i = 0;
			        while (iter.hasNext()) {
			            if (iter.peekType() !== 'insert') {
			                return;
			            }
			            const thisOp = iter.peek();
			            const start = Op_1.default.length(thisOp) - iter.peekLength();
			            const index = typeof thisOp.insert === 'string'
			                ? thisOp.insert.indexOf(newline, start) - start
			                : -1;
			            if (index < 0) {
			                line.push(iter.next());
			            }
			            else if (index > 0) {
			                line.push(iter.next(index));
			            }
			            else {
			                if (predicate(line, iter.next(1).attributes || {}, i) === false) {
			                    return;
			                }
			                i += 1;
			                line = new Delta();
			            }
			        }
			        if (line.length() > 0) {
			            predicate(line, {}, i);
			        }
			    }
			    invert(base) {
			        const inverted = new Delta();
			        this.reduce((baseIndex, op) => {
			            if (op.insert) {
			                inverted.delete(Op_1.default.length(op));
			            }
			            else if (typeof op.retain === 'number' && op.attributes == null) {
			                inverted.retain(op.retain);
			                return baseIndex + op.retain;
			            }
			            else if (op.delete || typeof op.retain === 'number') {
			                const length = (op.delete || op.retain);
			                const slice = base.slice(baseIndex, baseIndex + length);
			                slice.forEach((baseOp) => {
			                    if (op.delete) {
			                        inverted.push(baseOp);
			                    }
			                    else if (op.retain && op.attributes) {
			                        inverted.retain(Op_1.default.length(baseOp), AttributeMap_1.default.invert(op.attributes, baseOp.attributes));
			                    }
			                });
			                return baseIndex + length;
			            }
			            else if (typeof op.retain === 'object' && op.retain !== null) {
			                const slice = base.slice(baseIndex, baseIndex + 1);
			                const baseOp = new OpIterator_1.default(slice.ops).next();
			                const [embedType, opData, baseOpData] = getEmbedTypeAndData(op.retain, baseOp.insert);
			                const handler = Delta.getHandler(embedType);
			                inverted.retain({ [embedType]: handler.invert(opData, baseOpData) }, AttributeMap_1.default.invert(op.attributes, baseOp.attributes));
			                return baseIndex + 1;
			            }
			            return baseIndex;
			        }, 0);
			        return inverted.chop();
			    }
			    transform(arg, priority = false) {
			        priority = !!priority;
			        if (typeof arg === 'number') {
			            return this.transformPosition(arg, priority);
			        }
			        const other = arg;
			        const thisIter = new OpIterator_1.default(this.ops);
			        const otherIter = new OpIterator_1.default(other.ops);
			        const delta = new Delta();
			        while (thisIter.hasNext() || otherIter.hasNext()) {
			            if (thisIter.peekType() === 'insert' &&
			                (priority || otherIter.peekType() !== 'insert')) {
			                delta.retain(Op_1.default.length(thisIter.next()));
			            }
			            else if (otherIter.peekType() === 'insert') {
			                delta.push(otherIter.next());
			            }
			            else {
			                const length = Math.min(thisIter.peekLength(), otherIter.peekLength());
			                const thisOp = thisIter.next(length);
			                const otherOp = otherIter.next(length);
			                if (thisOp.delete) {
			                    // Our delete either makes their delete redundant or removes their retain
			                    continue;
			                }
			                else if (otherOp.delete) {
			                    delta.push(otherOp);
			                }
			                else {
			                    const thisData = thisOp.retain;
			                    const otherData = otherOp.retain;
			                    let transformedData = typeof otherData === 'object' && otherData !== null
			                        ? otherData
			                        : length;
			                    if (typeof thisData === 'object' &&
			                        thisData !== null &&
			                        typeof otherData === 'object' &&
			                        otherData !== null) {
			                        const embedType = Object.keys(thisData)[0];
			                        if (embedType === Object.keys(otherData)[0]) {
			                            const handler = Delta.getHandler(embedType);
			                            if (handler) {
			                                transformedData = {
			                                    [embedType]: handler.transform(thisData[embedType], otherData[embedType], priority),
			                                };
			                            }
			                        }
			                    }
			                    // We retain either their retain or insert
			                    delta.retain(transformedData, AttributeMap_1.default.transform(thisOp.attributes, otherOp.attributes, priority));
			                }
			            }
			        }
			        return delta.chop();
			    }
			    transformPosition(index, priority = false) {
			        priority = !!priority;
			        const thisIter = new OpIterator_1.default(this.ops);
			        let offset = 0;
			        while (thisIter.hasNext() && offset <= index) {
			            const length = thisIter.peekLength();
			            const nextType = thisIter.peekType();
			            thisIter.next();
			            if (nextType === 'delete') {
			                index -= Math.min(length, index - offset);
			                continue;
			            }
			            else if (nextType === 'insert' && (offset < index || !priority)) {
			                index += length;
			            }
			            offset += length;
			        }
			        return index;
			    }
			}
			Delta.Op = Op_1.default;
			Delta.OpIterator = OpIterator_1.default;
			Delta.AttributeMap = AttributeMap_1.default;
			Delta.handlers = {};
			exports$1.default = Delta;
			{
			    module.exports = Delta;
			    module.exports.default = Delta;
			}
			
		} (Delta$1, Delta$1.exports));
		return Delta$1.exports;
	}

	var DeltaExports = requireDelta();
	var Delta = /*@__PURE__*/getDefaultExportFromCjs(DeltaExports);

	class Break extends EmbedBlot$1 {
	  static value() {
	    return undefined;
	  }
	  optimize() {
	    if (this.prev || this.next) {
	      this.remove();
	    }
	  }
	  length() {
	    return 0;
	  }
	  value() {
	    return '';
	  }
	}
	Break.blotName = 'break';
	Break.tagName = 'BR';

	let Text$1 = class Text extends TextBlot$1 {};

	// https://lodash.com/docs#escape
	const entityMap = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#39;'
	};
	function escapeText(text) {
	  return text.replace(/[&<>"']/g, s => entityMap[s]);
	}

	class Inline extends InlineBlot$1 {
	  static allowedChildren = [Inline, Break, EmbedBlot$1, Text$1];
	  // Lower index means deeper in the DOM tree, since not found (-1) is for embeds
	  static order = ['cursor', 'inline',
	  // Must be lower
	  'link',
	  // Chrome wants <a> to be lower
	  'underline', 'strike', 'italic', 'bold', 'script', 'code' // Must be higher
	  ];
	  static compare(self, other) {
	    const selfIndex = Inline.order.indexOf(self);
	    const otherIndex = Inline.order.indexOf(other);
	    if (selfIndex >= 0 || otherIndex >= 0) {
	      return selfIndex - otherIndex;
	    }
	    if (self === other) {
	      return 0;
	    }
	    if (self < other) {
	      return -1;
	    }
	    return 1;
	  }
	  formatAt(index, length, name, value) {
	    if (Inline.compare(this.statics.blotName, name) < 0 && this.scroll.query(name, Scope.BLOT)) {
	      const blot = this.isolate(index, length);
	      if (value) {
	        blot.wrap(name, value);
	      }
	    } else {
	      super.formatAt(index, length, name, value);
	    }
	  }
	  optimize(context) {
	    super.optimize(context);
	    if (this.parent instanceof Inline && Inline.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
	      const parent = this.parent.isolate(this.offset(), this.length());
	      // @ts-expect-error TODO: make isolate generic
	      this.moveChildren(parent);
	      parent.wrap(this);
	    }
	  }
	}

	const NEWLINE_LENGTH = 1;
	class Block extends BlockBlot$1 {
	  cache = {};
	  delta() {
	    if (this.cache.delta == null) {
	      this.cache.delta = blockDelta(this);
	    }
	    return this.cache.delta;
	  }
	  deleteAt(index, length) {
	    super.deleteAt(index, length);
	    this.cache = {};
	  }
	  formatAt(index, length, name, value) {
	    if (length <= 0) return;
	    if (this.scroll.query(name, Scope.BLOCK)) {
	      if (index + length === this.length()) {
	        this.format(name, value);
	      }
	    } else {
	      super.formatAt(index, Math.min(length, this.length() - index - 1), name, value);
	    }
	    this.cache = {};
	  }
	  insertAt(index, value, def) {
	    if (def != null) {
	      super.insertAt(index, value, def);
	      this.cache = {};
	      return;
	    }
	    if (value.length === 0) return;
	    const lines = value.split('\n');
	    const text = lines.shift();
	    if (text.length > 0) {
	      if (index < this.length() - 1 || this.children.tail == null) {
	        super.insertAt(Math.min(index, this.length() - 1), text);
	      } else {
	        this.children.tail.insertAt(this.children.tail.length(), text);
	      }
	      this.cache = {};
	    }
	    // TODO: Fix this next time the file is edited.
	    // eslint-disable-next-line @typescript-eslint/no-this-alias
	    let block = this;
	    lines.reduce((lineIndex, line) => {
	      // @ts-expect-error Fix me later
	      block = block.split(lineIndex, true);
	      block.insertAt(0, line);
	      return line.length;
	    }, index + text.length);
	  }
	  insertBefore(blot, ref) {
	    const {
	      head
	    } = this.children;
	    super.insertBefore(blot, ref);
	    if (head instanceof Break) {
	      head.remove();
	    }
	    this.cache = {};
	  }
	  length() {
	    if (this.cache.length == null) {
	      this.cache.length = super.length() + NEWLINE_LENGTH;
	    }
	    return this.cache.length;
	  }
	  moveChildren(target, ref) {
	    super.moveChildren(target, ref);
	    this.cache = {};
	  }
	  optimize(context) {
	    super.optimize(context);
	    this.cache = {};
	  }
	  path(index) {
	    return super.path(index, true);
	  }
	  removeChild(child) {
	    super.removeChild(child);
	    this.cache = {};
	  }
	  split(index) {
	    let force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    if (force && (index === 0 || index >= this.length() - NEWLINE_LENGTH)) {
	      const clone = this.clone();
	      if (index === 0) {
	        this.parent.insertBefore(clone, this);
	        return this;
	      }
	      this.parent.insertBefore(clone, this.next);
	      return clone;
	    }
	    const next = super.split(index, force);
	    this.cache = {};
	    return next;
	  }
	}
	Block.blotName = 'block';
	Block.tagName = 'P';
	Block.defaultChild = Break;
	Block.allowedChildren = [Break, Inline, EmbedBlot$1, Text$1];
	class BlockEmbed extends EmbedBlot$1 {
	  attach() {
	    super.attach();
	    this.attributes = new AttributorStore$1(this.domNode);
	  }
	  delta() {
	    return new Delta().insert(this.value(), {
	      ...this.formats(),
	      ...this.attributes.values()
	    });
	  }
	  format(name, value) {
	    const attribute = this.scroll.query(name, Scope.BLOCK_ATTRIBUTE);
	    if (attribute != null) {
	      // @ts-expect-error TODO: Scroll#query() should return Attributor when scope is attribute
	      this.attributes.attribute(attribute, value);
	    }
	  }
	  formatAt(index, length, name, value) {
	    this.format(name, value);
	  }
	  insertAt(index, value, def) {
	    if (def != null) {
	      super.insertAt(index, value, def);
	      return;
	    }
	    const lines = value.split('\n');
	    const text = lines.pop();
	    const blocks = lines.map(line => {
	      const block = this.scroll.create(Block.blotName);
	      block.insertAt(0, line);
	      return block;
	    });
	    const ref = this.split(index);
	    blocks.forEach(block => {
	      this.parent.insertBefore(block, ref);
	    });
	    if (text) {
	      this.parent.insertBefore(this.scroll.create('text', text), ref);
	    }
	  }
	}
	BlockEmbed.scope = Scope.BLOCK_BLOT;
	// It is important for cursor behavior BlockEmbeds use tags that are block level elements

	function blockDelta(blot) {
	  let filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	  return blot.descendants(LeafBlot$1).reduce((delta, leaf) => {
	    if (leaf.length() === 0) {
	      return delta;
	    }
	    return delta.insert(leaf.value(), bubbleFormats(leaf, {}, filter));
	  }, new Delta()).insert('\n', bubbleFormats(blot));
	}
	function bubbleFormats(blot) {
	  let formats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  let filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	  if (blot == null) return formats;
	  if ('formats' in blot && typeof blot.formats === 'function') {
	    formats = {
	      ...formats,
	      ...blot.formats()
	    };
	    if (filter) {
	      // exclude syntax highlighting from deltas and getFormat()
	      delete formats['code-token'];
	    }
	  }
	  if (blot.parent == null || blot.parent.statics.blotName === 'scroll' || blot.parent.statics.scope !== blot.statics.scope) {
	    return formats;
	  }
	  return bubbleFormats(blot.parent, formats, filter);
	}

	class Cursor extends EmbedBlot$1 {
	  static blotName = 'cursor';
	  static className = 'ql-cursor';
	  static tagName = 'span';
	  static CONTENTS = '\uFEFF'; // Zero width no break space

	  static value() {
	    return undefined;
	  }
	  constructor(scroll, domNode, selection) {
	    super(scroll, domNode);
	    this.selection = selection;
	    this.textNode = document.createTextNode(Cursor.CONTENTS);
	    this.domNode.appendChild(this.textNode);
	    this.savedLength = 0;
	  }
	  detach() {
	    // super.detach() will also clear domNode.__blot
	    if (this.parent != null) this.parent.removeChild(this);
	  }
	  format(name, value) {
	    if (this.savedLength !== 0) {
	      super.format(name, value);
	      return;
	    }
	    // TODO: Fix this next time the file is edited.
	    // eslint-disable-next-line @typescript-eslint/no-this-alias
	    let target = this;
	    let index = 0;
	    while (target != null && target.statics.scope !== Scope.BLOCK_BLOT) {
	      index += target.offset(target.parent);
	      target = target.parent;
	    }
	    if (target != null) {
	      this.savedLength = Cursor.CONTENTS.length;
	      // @ts-expect-error TODO: allow empty context in Parchment
	      target.optimize();
	      target.formatAt(index, Cursor.CONTENTS.length, name, value);
	      this.savedLength = 0;
	    }
	  }
	  index(node, offset) {
	    if (node === this.textNode) return 0;
	    return super.index(node, offset);
	  }
	  length() {
	    return this.savedLength;
	  }
	  position() {
	    return [this.textNode, this.textNode.data.length];
	  }
	  remove() {
	    super.remove();
	    // @ts-expect-error Fix me later
	    this.parent = null;
	  }
	  restore() {
	    if (this.selection.composing || this.parent == null) return null;
	    const range = this.selection.getNativeRange();
	    // Browser may push down styles/nodes inside the cursor blot.
	    // https://dvcs.w3.org/hg/editing/raw-file/tip/editing.html#push-down-values
	    while (this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode) {
	      // @ts-expect-error Fix me later
	      this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
	    }
	    const prevTextBlot = this.prev instanceof Text$1 ? this.prev : null;
	    const prevTextLength = prevTextBlot ? prevTextBlot.length() : 0;
	    const nextTextBlot = this.next instanceof Text$1 ? this.next : null;
	    // @ts-expect-error TODO: make TextBlot.text public
	    const nextText = nextTextBlot ? nextTextBlot.text : '';
	    const {
	      textNode
	    } = this;
	    // take text from inside this blot and reset it
	    const newText = textNode.data.split(Cursor.CONTENTS).join('');
	    textNode.data = Cursor.CONTENTS;

	    // proactively merge TextBlots around cursor so that optimization
	    // doesn't lose the cursor.  the reason we are here in cursor.restore
	    // could be that the user clicked in prevTextBlot or nextTextBlot, or
	    // the user typed something.
	    let mergedTextBlot;
	    if (prevTextBlot) {
	      mergedTextBlot = prevTextBlot;
	      if (newText || nextTextBlot) {
	        prevTextBlot.insertAt(prevTextBlot.length(), newText + nextText);
	        if (nextTextBlot) {
	          nextTextBlot.remove();
	        }
	      }
	    } else if (nextTextBlot) {
	      mergedTextBlot = nextTextBlot;
	      nextTextBlot.insertAt(0, newText);
	    } else {
	      const newTextNode = document.createTextNode(newText);
	      mergedTextBlot = this.scroll.create(newTextNode);
	      this.parent.insertBefore(mergedTextBlot, this);
	    }
	    this.remove();
	    if (range) {
	      // calculate selection to restore
	      const remapOffset = (node, offset) => {
	        if (prevTextBlot && node === prevTextBlot.domNode) {
	          return offset;
	        }
	        if (node === textNode) {
	          return prevTextLength + offset - 1;
	        }
	        if (nextTextBlot && node === nextTextBlot.domNode) {
	          return prevTextLength + newText.length + offset;
	        }
	        return null;
	      };
	      const start = remapOffset(range.start.node, range.start.offset);
	      const end = remapOffset(range.end.node, range.end.offset);
	      if (start !== null && end !== null) {
	        return {
	          startNode: mergedTextBlot.domNode,
	          startOffset: start,
	          endNode: mergedTextBlot.domNode,
	          endOffset: end
	        };
	      }
	    }
	    return null;
	  }
	  update(mutations, context) {
	    if (mutations.some(mutation => {
	      return mutation.type === 'characterData' && mutation.target === this.textNode;
	    })) {
	      const range = this.restore();
	      if (range) context.range = range;
	    }
	  }

	  // Avoid .ql-cursor being a descendant of `<a/>`.
	  // The reason is Safari pushes down `<a/>` on text insertion.
	  // That will cause DOM nodes not sync with the model.
	  //
	  // For example ({I} is the caret), given the markup:
	  //    <a><span class="ql-cursor">\uFEFF{I}</span></a>
	  // When typing a char "x", `<a/>` will be pushed down inside the `<span>` first:
	  //    <span class="ql-cursor"><a>\uFEFF{I}</a></span>
	  // And then "x" will be inserted after `<a/>`:
	  //    <span class="ql-cursor"><a>\uFEFF</a>d{I}</span>
	  optimize(context) {
	    // @ts-expect-error Fix me later
	    super.optimize(context);
	    let {
	      parent
	    } = this;
	    while (parent) {
	      if (parent.domNode.tagName === 'A') {
	        this.savedLength = Cursor.CONTENTS.length;
	        // @ts-expect-error TODO: make isolate generic
	        parent.isolate(this.offset(parent), this.length()).unwrap();
	        this.savedLength = 0;
	        break;
	      }
	      parent = parent.parent;
	    }
	  }
	  value() {
	    return '';
	  }
	}

	var eventemitter3 = {exports: {}};

	var hasRequiredEventemitter3;

	function requireEventemitter3 () {
		if (hasRequiredEventemitter3) return eventemitter3.exports;
		hasRequiredEventemitter3 = 1;
		(function (module) {

			var has = Object.prototype.hasOwnProperty
			  , prefix = '~';

			/**
			 * Constructor to create a storage for our `EE` objects.
			 * An `Events` instance is a plain object whose properties are event names.
			 *
			 * @constructor
			 * @private
			 */
			function Events() {}

			//
			// We try to not inherit from `Object.prototype`. In some engines creating an
			// instance in this way is faster than calling `Object.create(null)` directly.
			// If `Object.create(null)` is not supported we prefix the event names with a
			// character to make sure that the built-in object properties are not
			// overridden or used as an attack vector.
			//
			if (Object.create) {
			  Events.prototype = Object.create(null);

			  //
			  // This hack is needed because the `__proto__` property is still inherited in
			  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
			  //
			  if (!new Events().__proto__) prefix = false;
			}

			/**
			 * Representation of a single event listener.
			 *
			 * @param {Function} fn The listener function.
			 * @param {*} context The context to invoke the listener with.
			 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
			 * @constructor
			 * @private
			 */
			function EE(fn, context, once) {
			  this.fn = fn;
			  this.context = context;
			  this.once = once || false;
			}

			/**
			 * Add a listener for a given event.
			 *
			 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
			 * @param {(String|Symbol)} event The event name.
			 * @param {Function} fn The listener function.
			 * @param {*} context The context to invoke the listener with.
			 * @param {Boolean} once Specify if the listener is a one-time listener.
			 * @returns {EventEmitter}
			 * @private
			 */
			function addListener(emitter, event, fn, context, once) {
			  if (typeof fn !== 'function') {
			    throw new TypeError('The listener must be a function');
			  }

			  var listener = new EE(fn, context || emitter, once)
			    , evt = prefix ? prefix + event : event;

			  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
			  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
			  else emitter._events[evt] = [emitter._events[evt], listener];

			  return emitter;
			}

			/**
			 * Clear event by name.
			 *
			 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
			 * @param {(String|Symbol)} evt The Event name.
			 * @private
			 */
			function clearEvent(emitter, evt) {
			  if (--emitter._eventsCount === 0) emitter._events = new Events();
			  else delete emitter._events[evt];
			}

			/**
			 * Minimal `EventEmitter` interface that is molded against the Node.js
			 * `EventEmitter` interface.
			 *
			 * @constructor
			 * @public
			 */
			function EventEmitter() {
			  this._events = new Events();
			  this._eventsCount = 0;
			}

			/**
			 * Return an array listing the events for which the emitter has registered
			 * listeners.
			 *
			 * @returns {Array}
			 * @public
			 */
			EventEmitter.prototype.eventNames = function eventNames() {
			  var names = []
			    , events
			    , name;

			  if (this._eventsCount === 0) return names;

			  for (name in (events = this._events)) {
			    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
			  }

			  if (Object.getOwnPropertySymbols) {
			    return names.concat(Object.getOwnPropertySymbols(events));
			  }

			  return names;
			};

			/**
			 * Return the listeners registered for a given event.
			 *
			 * @param {(String|Symbol)} event The event name.
			 * @returns {Array} The registered listeners.
			 * @public
			 */
			EventEmitter.prototype.listeners = function listeners(event) {
			  var evt = prefix ? prefix + event : event
			    , handlers = this._events[evt];

			  if (!handlers) return [];
			  if (handlers.fn) return [handlers.fn];

			  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
			    ee[i] = handlers[i].fn;
			  }

			  return ee;
			};

			/**
			 * Return the number of listeners listening to a given event.
			 *
			 * @param {(String|Symbol)} event The event name.
			 * @returns {Number} The number of listeners.
			 * @public
			 */
			EventEmitter.prototype.listenerCount = function listenerCount(event) {
			  var evt = prefix ? prefix + event : event
			    , listeners = this._events[evt];

			  if (!listeners) return 0;
			  if (listeners.fn) return 1;
			  return listeners.length;
			};

			/**
			 * Calls each of the listeners registered for a given event.
			 *
			 * @param {(String|Symbol)} event The event name.
			 * @returns {Boolean} `true` if the event had listeners, else `false`.
			 * @public
			 */
			EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
			  var evt = prefix ? prefix + event : event;

			  if (!this._events[evt]) return false;

			  var listeners = this._events[evt]
			    , len = arguments.length
			    , args
			    , i;

			  if (listeners.fn) {
			    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

			    switch (len) {
			      case 1: return listeners.fn.call(listeners.context), true;
			      case 2: return listeners.fn.call(listeners.context, a1), true;
			      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
			      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
			      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
			      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
			    }

			    for (i = 1, args = new Array(len -1); i < len; i++) {
			      args[i - 1] = arguments[i];
			    }

			    listeners.fn.apply(listeners.context, args);
			  } else {
			    var length = listeners.length
			      , j;

			    for (i = 0; i < length; i++) {
			      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

			      switch (len) {
			        case 1: listeners[i].fn.call(listeners[i].context); break;
			        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
			        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
			        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
			        default:
			          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
			            args[j - 1] = arguments[j];
			          }

			          listeners[i].fn.apply(listeners[i].context, args);
			      }
			    }
			  }

			  return true;
			};

			/**
			 * Add a listener for a given event.
			 *
			 * @param {(String|Symbol)} event The event name.
			 * @param {Function} fn The listener function.
			 * @param {*} [context=this] The context to invoke the listener with.
			 * @returns {EventEmitter} `this`.
			 * @public
			 */
			EventEmitter.prototype.on = function on(event, fn, context) {
			  return addListener(this, event, fn, context, false);
			};

			/**
			 * Add a one-time listener for a given event.
			 *
			 * @param {(String|Symbol)} event The event name.
			 * @param {Function} fn The listener function.
			 * @param {*} [context=this] The context to invoke the listener with.
			 * @returns {EventEmitter} `this`.
			 * @public
			 */
			EventEmitter.prototype.once = function once(event, fn, context) {
			  return addListener(this, event, fn, context, true);
			};

			/**
			 * Remove the listeners of a given event.
			 *
			 * @param {(String|Symbol)} event The event name.
			 * @param {Function} fn Only remove the listeners that match this function.
			 * @param {*} context Only remove the listeners that have this context.
			 * @param {Boolean} once Only remove one-time listeners.
			 * @returns {EventEmitter} `this`.
			 * @public
			 */
			EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
			  var evt = prefix ? prefix + event : event;

			  if (!this._events[evt]) return this;
			  if (!fn) {
			    clearEvent(this, evt);
			    return this;
			  }

			  var listeners = this._events[evt];

			  if (listeners.fn) {
			    if (
			      listeners.fn === fn &&
			      (!once || listeners.once) &&
			      (!context || listeners.context === context)
			    ) {
			      clearEvent(this, evt);
			    }
			  } else {
			    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
			      if (
			        listeners[i].fn !== fn ||
			        (once && !listeners[i].once) ||
			        (context && listeners[i].context !== context)
			      ) {
			        events.push(listeners[i]);
			      }
			    }

			    //
			    // Reset the array, or remove it completely if we have no more listeners.
			    //
			    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
			    else clearEvent(this, evt);
			  }

			  return this;
			};

			/**
			 * Remove all listeners, or those of the specified event.
			 *
			 * @param {(String|Symbol)} [event] The event name.
			 * @returns {EventEmitter} `this`.
			 * @public
			 */
			EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
			  var evt;

			  if (event) {
			    evt = prefix ? prefix + event : event;
			    if (this._events[evt]) clearEvent(this, evt);
			  } else {
			    this._events = new Events();
			    this._eventsCount = 0;
			  }

			  return this;
			};

			//
			// Alias methods names because people roll like that.
			//
			EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
			EventEmitter.prototype.addListener = EventEmitter.prototype.on;

			//
			// Expose the prefix.
			//
			EventEmitter.prefixed = prefix;

			//
			// Allow `EventEmitter` to be imported as module namespace.
			//
			EventEmitter.EventEmitter = EventEmitter;

			//
			// Expose the module.
			//
			{
			  module.exports = EventEmitter;
			} 
		} (eventemitter3));
		return eventemitter3.exports;
	}

	var eventemitter3Exports = requireEventemitter3();
	var EventEmitter = /*@__PURE__*/getDefaultExportFromCjs(eventemitter3Exports);

	var instances = new WeakMap();

	const levels = ['error', 'warn', 'log', 'info'];
	let level = 'warn';
	function debug$6(method) {
	  if (level) {
	    if (levels.indexOf(method) <= levels.indexOf(level)) {
	      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	      console[method](...args); // eslint-disable-line no-console
	    }
	  }
	}
	function namespace(ns) {
	  return levels.reduce((logger, method) => {
	    logger[method] = debug$6.bind(console, method, ns);
	    return logger;
	  }, {});
	}
	namespace.level = newLevel => {
	  level = newLevel;
	};
	debug$6.level = namespace.level;

	const debug$5 = namespace('quill:events');
	const EVENTS = ['selectionchange', 'mousedown', 'mouseup', 'click'];
	EVENTS.forEach(eventName => {
	  document.addEventListener(eventName, function () {
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	    Array.from(document.querySelectorAll('.ql-container')).forEach(node => {
	      const quill = instances.get(node);
	      if (quill && quill.emitter) {
	        quill.emitter.handleDOM(...args);
	      }
	    });
	  });
	});
	class Emitter extends EventEmitter {
	  static events = {
	    EDITOR_CHANGE: 'editor-change',
	    SCROLL_BEFORE_UPDATE: 'scroll-before-update',
	    SCROLL_BLOT_MOUNT: 'scroll-blot-mount',
	    SCROLL_BLOT_UNMOUNT: 'scroll-blot-unmount',
	    SCROLL_OPTIMIZE: 'scroll-optimize',
	    SCROLL_UPDATE: 'scroll-update',
	    SCROLL_EMBED_UPDATE: 'scroll-embed-update',
	    SELECTION_CHANGE: 'selection-change',
	    TEXT_CHANGE: 'text-change',
	    COMPOSITION_BEFORE_START: 'composition-before-start',
	    COMPOSITION_START: 'composition-start',
	    COMPOSITION_BEFORE_END: 'composition-before-end',
	    COMPOSITION_END: 'composition-end'
	  };
	  static sources = {
	    API: 'api',
	    SILENT: 'silent',
	    USER: 'user'
	  };
	  constructor() {
	    super();
	    this.domListeners = {};
	    this.on('error', debug$5.error);
	  }
	  emit() {
	    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	    debug$5.log.call(debug$5, ...args);
	    // @ts-expect-error
	    return super.emit(...args);
	  }
	  handleDOM(event) {
	    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	      args[_key3 - 1] = arguments[_key3];
	    }
	    (this.domListeners[event.type] || []).forEach(_ref => {
	      let {
	        node,
	        handler
	      } = _ref;
	      if (event.target === node || node.contains(event.target)) {
	        handler(event, ...args);
	      }
	    });
	  }
	  listenDOM(eventName, node, handler) {
	    if (!this.domListeners[eventName]) {
	      this.domListeners[eventName] = [];
	    }
	    this.domListeners[eventName].push({
	      node,
	      handler
	    });
	  }
	}

	const debug$4 = namespace('quill:selection');
	class Range {
	  constructor(index) {
	    let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    this.index = index;
	    this.length = length;
	  }
	}
	class Selection {
	  constructor(scroll, emitter) {
	    this.emitter = emitter;
	    this.scroll = scroll;
	    this.composing = false;
	    this.mouseDown = false;
	    this.root = this.scroll.domNode;
	    // @ts-expect-error
	    this.cursor = this.scroll.create('cursor', this);
	    // savedRange is last non-null range
	    this.savedRange = new Range(0, 0);
	    this.lastRange = this.savedRange;
	    this.lastNative = null;
	    this.handleComposition();
	    this.handleDragging();
	    this.emitter.listenDOM('selectionchange', document, () => {
	      if (!this.mouseDown && !this.composing) {
	        setTimeout(this.update.bind(this, Emitter.sources.USER), 1);
	      }
	    });
	    this.emitter.on(Emitter.events.SCROLL_BEFORE_UPDATE, () => {
	      if (!this.hasFocus()) return;
	      const native = this.getNativeRange();
	      if (native == null) return;
	      if (native.start.node === this.cursor.textNode) return; // cursor.restore() will handle
	      this.emitter.once(Emitter.events.SCROLL_UPDATE, (source, mutations) => {
	        try {
	          if (this.root.contains(native.start.node) && this.root.contains(native.end.node)) {
	            this.setNativeRange(native.start.node, native.start.offset, native.end.node, native.end.offset);
	          }
	          const triggeredByTyping = mutations.some(mutation => mutation.type === 'characterData' || mutation.type === 'childList' || mutation.type === 'attributes' && mutation.target === this.root);
	          this.update(triggeredByTyping ? Emitter.sources.SILENT : source);
	        } catch (ignored) {
	          // ignore
	        }
	      });
	    });
	    this.emitter.on(Emitter.events.SCROLL_OPTIMIZE, (mutations, context) => {
	      if (context.range) {
	        const {
	          startNode,
	          startOffset,
	          endNode,
	          endOffset
	        } = context.range;
	        this.setNativeRange(startNode, startOffset, endNode, endOffset);
	        this.update(Emitter.sources.SILENT);
	      }
	    });
	    this.update(Emitter.sources.SILENT);
	  }
	  handleComposition() {
	    this.emitter.on(Emitter.events.COMPOSITION_BEFORE_START, () => {
	      this.composing = true;
	    });
	    this.emitter.on(Emitter.events.COMPOSITION_END, () => {
	      this.composing = false;
	      if (this.cursor.parent) {
	        const range = this.cursor.restore();
	        if (!range) return;
	        setTimeout(() => {
	          this.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);
	        }, 1);
	      }
	    });
	  }
	  handleDragging() {
	    this.emitter.listenDOM('mousedown', document.body, () => {
	      this.mouseDown = true;
	    });
	    this.emitter.listenDOM('mouseup', document.body, () => {
	      this.mouseDown = false;
	      this.update(Emitter.sources.USER);
	    });
	  }
	  focus() {
	    if (this.hasFocus()) return;
	    this.root.focus({
	      preventScroll: true
	    });
	    this.setRange(this.savedRange);
	  }
	  format(format, value) {
	    this.scroll.update();
	    const nativeRange = this.getNativeRange();
	    if (nativeRange == null || !nativeRange.native.collapsed || this.scroll.query(format, Scope.BLOCK)) return;
	    if (nativeRange.start.node !== this.cursor.textNode) {
	      const blot = this.scroll.find(nativeRange.start.node, false);
	      if (blot == null) return;
	      // TODO Give blot ability to not split
	      if (blot instanceof LeafBlot$1) {
	        const after = blot.split(nativeRange.start.offset);
	        blot.parent.insertBefore(this.cursor, after);
	      } else {
	        // @ts-expect-error TODO: nativeRange.start.node doesn't seem to match function signature
	        blot.insertBefore(this.cursor, nativeRange.start.node); // Should never happen
	      }
	      this.cursor.attach();
	    }
	    this.cursor.format(format, value);
	    this.scroll.optimize();
	    this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length);
	    this.update();
	  }
	  getBounds(index) {
	    let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    const scrollLength = this.scroll.length();
	    index = Math.min(index, scrollLength - 1);
	    length = Math.min(index + length, scrollLength - 1) - index;
	    let node;
	    let [leaf, offset] = this.scroll.leaf(index);
	    if (leaf == null) return null;
	    if (length > 0 && offset === leaf.length()) {
	      const [next] = this.scroll.leaf(index + 1);
	      if (next) {
	        const [line] = this.scroll.line(index);
	        const [nextLine] = this.scroll.line(index + 1);
	        if (line === nextLine) {
	          leaf = next;
	          offset = 0;
	        }
	      }
	    }
	    [node, offset] = leaf.position(offset, true);
	    const range = document.createRange();
	    if (length > 0) {
	      range.setStart(node, offset);
	      [leaf, offset] = this.scroll.leaf(index + length);
	      if (leaf == null) return null;
	      [node, offset] = leaf.position(offset, true);
	      range.setEnd(node, offset);
	      return range.getBoundingClientRect();
	    }
	    let side = 'left';
	    let rect;
	    if (node instanceof Text) {
	      // Return null if the text node is empty because it is
	      // not able to get a useful client rect:
	      // https://github.com/w3c/csswg-drafts/issues/2514.
	      // Empty text nodes are most likely caused by TextBlot#optimize()
	      // not getting called when editor content changes.
	      if (!node.data.length) {
	        return null;
	      }
	      if (offset < node.data.length) {
	        range.setStart(node, offset);
	        range.setEnd(node, offset + 1);
	      } else {
	        range.setStart(node, offset - 1);
	        range.setEnd(node, offset);
	        side = 'right';
	      }
	      rect = range.getBoundingClientRect();
	    } else {
	      if (!(leaf.domNode instanceof Element)) return null;
	      rect = leaf.domNode.getBoundingClientRect();
	      if (offset > 0) side = 'right';
	    }
	    return {
	      bottom: rect.top + rect.height,
	      height: rect.height,
	      left: rect[side],
	      right: rect[side],
	      top: rect.top,
	      width: 0
	    };
	  }
	  getNativeRange() {
	    const selection = document.getSelection();
	    if (selection == null || selection.rangeCount <= 0) return null;
	    const nativeRange = selection.getRangeAt(0);
	    if (nativeRange == null) return null;
	    const range = this.normalizeNative(nativeRange);
	    debug$4.info('getNativeRange', range);
	    return range;
	  }
	  getRange() {
	    const root = this.scroll.domNode;
	    if ('isConnected' in root && !root.isConnected) {
	      // document.getSelection() forces layout on Blink, so we trend to
	      // not calling it.
	      return [null, null];
	    }
	    const normalized = this.getNativeRange();
	    if (normalized == null) return [null, null];
	    const range = this.normalizedToRange(normalized);
	    return [range, normalized];
	  }
	  hasFocus() {
	    return document.activeElement === this.root || document.activeElement != null && contains(this.root, document.activeElement);
	  }
	  normalizedToRange(range) {
	    const positions = [[range.start.node, range.start.offset]];
	    if (!range.native.collapsed) {
	      positions.push([range.end.node, range.end.offset]);
	    }
	    const indexes = positions.map(position => {
	      const [node, offset] = position;
	      const blot = this.scroll.find(node, true);
	      // @ts-expect-error Fix me later
	      const index = blot.offset(this.scroll);
	      if (offset === 0) {
	        return index;
	      }
	      if (blot instanceof LeafBlot$1) {
	        return index + blot.index(node, offset);
	      }
	      // @ts-expect-error Fix me later
	      return index + blot.length();
	    });
	    const end = Math.min(Math.max(...indexes), this.scroll.length() - 1);
	    const start = Math.min(end, ...indexes);
	    return new Range(start, end - start);
	  }
	  normalizeNative(nativeRange) {
	    if (!contains(this.root, nativeRange.startContainer) || !nativeRange.collapsed && !contains(this.root, nativeRange.endContainer)) {
	      return null;
	    }
	    const range = {
	      start: {
	        node: nativeRange.startContainer,
	        offset: nativeRange.startOffset
	      },
	      end: {
	        node: nativeRange.endContainer,
	        offset: nativeRange.endOffset
	      },
	      native: nativeRange
	    };
	    [range.start, range.end].forEach(position => {
	      let {
	        node,
	        offset
	      } = position;
	      while (!(node instanceof Text) && node.childNodes.length > 0) {
	        if (node.childNodes.length > offset) {
	          node = node.childNodes[offset];
	          offset = 0;
	        } else if (node.childNodes.length === offset) {
	          // @ts-expect-error Fix me later
	          node = node.lastChild;
	          if (node instanceof Text) {
	            offset = node.data.length;
	          } else if (node.childNodes.length > 0) {
	            // Container case
	            offset = node.childNodes.length;
	          } else {
	            // Embed case
	            offset = node.childNodes.length + 1;
	          }
	        } else {
	          break;
	        }
	      }
	      position.node = node;
	      position.offset = offset;
	    });
	    return range;
	  }
	  rangeToNative(range) {
	    const scrollLength = this.scroll.length();
	    const getPosition = (index, inclusive) => {
	      index = Math.min(scrollLength - 1, index);
	      const [leaf, leafOffset] = this.scroll.leaf(index);
	      return leaf ? leaf.position(leafOffset, inclusive) : [null, -1];
	    };
	    return [...getPosition(range.index, false), ...getPosition(range.index + range.length, true)];
	  }
	  setNativeRange(startNode, startOffset) {
	    let endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : startNode;
	    let endOffset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : startOffset;
	    let force = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
	    debug$4.info('setNativeRange', startNode, startOffset, endNode, endOffset);
	    if (startNode != null && (this.root.parentNode == null || startNode.parentNode == null ||
	    // @ts-expect-error Fix me later
	    endNode.parentNode == null)) {
	      return;
	    }
	    const selection = document.getSelection();
	    if (selection == null) return;
	    if (startNode != null) {
	      if (!this.hasFocus()) this.root.focus({
	        preventScroll: true
	      });
	      const {
	        native
	      } = this.getNativeRange() || {};
	      if (native == null || force || startNode !== native.startContainer || startOffset !== native.startOffset || endNode !== native.endContainer || endOffset !== native.endOffset) {
	        if (startNode instanceof Element && startNode.tagName === 'BR') {
	          // @ts-expect-error Fix me later
	          startOffset = Array.from(startNode.parentNode.childNodes).indexOf(startNode);
	          startNode = startNode.parentNode;
	        }
	        if (endNode instanceof Element && endNode.tagName === 'BR') {
	          // @ts-expect-error Fix me later
	          endOffset = Array.from(endNode.parentNode.childNodes).indexOf(endNode);
	          endNode = endNode.parentNode;
	        }
	        const range = document.createRange();
	        // @ts-expect-error Fix me later
	        range.setStart(startNode, startOffset);
	        // @ts-expect-error Fix me later
	        range.setEnd(endNode, endOffset);
	        selection.removeAllRanges();
	        selection.addRange(range);
	      }
	    } else {
	      selection.removeAllRanges();
	      this.root.blur();
	    }
	  }
	  setRange(range) {
	    let force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    let source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Emitter.sources.API;
	    if (typeof force === 'string') {
	      source = force;
	      force = false;
	    }
	    debug$4.info('setRange', range);
	    if (range != null) {
	      const args = this.rangeToNative(range);
	      this.setNativeRange(...args, force);
	    } else {
	      this.setNativeRange(null);
	    }
	    this.update(source);
	  }
	  update() {
	    let source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Emitter.sources.USER;
	    const oldRange = this.lastRange;
	    const [lastRange, nativeRange] = this.getRange();
	    this.lastRange = lastRange;
	    this.lastNative = nativeRange;
	    if (this.lastRange != null) {
	      this.savedRange = this.lastRange;
	    }
	    if (!isEqual$1(oldRange, this.lastRange)) {
	      if (!this.composing && nativeRange != null && nativeRange.native.collapsed && nativeRange.start.node !== this.cursor.textNode) {
	        const range = this.cursor.restore();
	        if (range) {
	          this.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);
	        }
	      }
	      const args = [Emitter.events.SELECTION_CHANGE, cloneDeep(this.lastRange), cloneDeep(oldRange), source];
	      this.emitter.emit(Emitter.events.EDITOR_CHANGE, ...args);
	      if (source !== Emitter.sources.SILENT) {
	        this.emitter.emit(...args);
	      }
	    }
	  }
	}
	function contains(parent, descendant) {
	  try {
	    // Firefox inserts inaccessible nodes around video elements
	    descendant.parentNode; // eslint-disable-line @typescript-eslint/no-unused-expressions
	  } catch (e) {
	    return false;
	  }
	  return parent.contains(descendant);
	}

	const ASCII = /^[ -~]*$/;
	class Editor {
	  constructor(scroll) {
	    this.scroll = scroll;
	    this.delta = this.getDelta();
	  }
	  applyDelta(delta) {
	    this.scroll.update();
	    let scrollLength = this.scroll.length();
	    this.scroll.batchStart();
	    const normalizedDelta = normalizeDelta(delta);
	    const deleteDelta = new Delta();
	    const normalizedOps = splitOpLines(normalizedDelta.ops.slice());
	    normalizedOps.reduce((index, op) => {
	      const length = DeltaExports.Op.length(op);
	      let attributes = op.attributes || {};
	      let isImplicitNewlinePrepended = false;
	      let isImplicitNewlineAppended = false;
	      if (op.insert != null) {
	        deleteDelta.retain(length);
	        if (typeof op.insert === 'string') {
	          const text = op.insert;
	          isImplicitNewlineAppended = !text.endsWith('\n') && (scrollLength <= index || !!this.scroll.descendant(BlockEmbed, index)[0]);
	          this.scroll.insertAt(index, text);
	          const [line, offset] = this.scroll.line(index);
	          let formats = merge({}, bubbleFormats(line));
	          if (line instanceof Block) {
	            const [leaf] = line.descendant(LeafBlot$1, offset);
	            if (leaf) {
	              formats = merge(formats, bubbleFormats(leaf));
	            }
	          }
	          attributes = DeltaExports.AttributeMap.diff(formats, attributes) || {};
	        } else if (typeof op.insert === 'object') {
	          const key = Object.keys(op.insert)[0]; // There should only be one key
	          if (key == null) return index;
	          const isInlineEmbed = this.scroll.query(key, Scope.INLINE) != null;
	          if (isInlineEmbed) {
	            if (scrollLength <= index || !!this.scroll.descendant(BlockEmbed, index)[0]) {
	              isImplicitNewlineAppended = true;
	            }
	          } else if (index > 0) {
	            const [leaf, offset] = this.scroll.descendant(LeafBlot$1, index - 1);
	            if (leaf instanceof Text$1) {
	              const text = leaf.value();
	              if (text[offset] !== '\n') {
	                isImplicitNewlinePrepended = true;
	              }
	            } else if (leaf instanceof EmbedBlot$1 && leaf.statics.scope === Scope.INLINE_BLOT) {
	              isImplicitNewlinePrepended = true;
	            }
	          }
	          this.scroll.insertAt(index, key, op.insert[key]);
	          if (isInlineEmbed) {
	            const [leaf] = this.scroll.descendant(LeafBlot$1, index);
	            if (leaf) {
	              const formats = merge({}, bubbleFormats(leaf));
	              attributes = DeltaExports.AttributeMap.diff(formats, attributes) || {};
	            }
	          }
	        }
	        scrollLength += length;
	      } else {
	        deleteDelta.push(op);
	        if (op.retain !== null && typeof op.retain === 'object') {
	          const key = Object.keys(op.retain)[0];
	          if (key == null) return index;
	          this.scroll.updateEmbedAt(index, key, op.retain[key]);
	        }
	      }
	      Object.keys(attributes).forEach(name => {
	        this.scroll.formatAt(index, length, name, attributes[name]);
	      });
	      const prependedLength = isImplicitNewlinePrepended ? 1 : 0;
	      const addedLength = isImplicitNewlineAppended ? 1 : 0;
	      scrollLength += prependedLength + addedLength;
	      deleteDelta.retain(prependedLength);
	      deleteDelta.delete(addedLength);
	      return index + length + prependedLength + addedLength;
	    }, 0);
	    deleteDelta.reduce((index, op) => {
	      if (typeof op.delete === 'number') {
	        this.scroll.deleteAt(index, op.delete);
	        return index;
	      }
	      return index + DeltaExports.Op.length(op);
	    }, 0);
	    this.scroll.batchEnd();
	    this.scroll.optimize();
	    return this.update(normalizedDelta);
	  }
	  deleteText(index, length) {
	    this.scroll.deleteAt(index, length);
	    return this.update(new Delta().retain(index).delete(length));
	  }
	  formatLine(index, length) {
	    let formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    this.scroll.update();
	    Object.keys(formats).forEach(format => {
	      this.scroll.lines(index, Math.max(length, 1)).forEach(line => {
	        line.format(format, formats[format]);
	      });
	    });
	    this.scroll.optimize();
	    const delta = new Delta().retain(index).retain(length, cloneDeep(formats));
	    return this.update(delta);
	  }
	  formatText(index, length) {
	    let formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    Object.keys(formats).forEach(format => {
	      this.scroll.formatAt(index, length, format, formats[format]);
	    });
	    const delta = new Delta().retain(index).retain(length, cloneDeep(formats));
	    return this.update(delta);
	  }
	  getContents(index, length) {
	    return this.delta.slice(index, index + length);
	  }
	  getDelta() {
	    return this.scroll.lines().reduce((delta, line) => {
	      return delta.concat(line.delta());
	    }, new Delta());
	  }
	  getFormat(index) {
	    let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    let lines = [];
	    let leaves = [];
	    if (length === 0) {
	      this.scroll.path(index).forEach(path => {
	        const [blot] = path;
	        if (blot instanceof Block) {
	          lines.push(blot);
	        } else if (blot instanceof LeafBlot$1) {
	          leaves.push(blot);
	        }
	      });
	    } else {
	      lines = this.scroll.lines(index, length);
	      leaves = this.scroll.descendants(LeafBlot$1, index, length);
	    }
	    const [lineFormats, leafFormats] = [lines, leaves].map(blots => {
	      const blot = blots.shift();
	      if (blot == null) return {};
	      let formats = bubbleFormats(blot);
	      while (Object.keys(formats).length > 0) {
	        const blot = blots.shift();
	        if (blot == null) return formats;
	        formats = combineFormats(bubbleFormats(blot), formats);
	      }
	      return formats;
	    });
	    return {
	      ...lineFormats,
	      ...leafFormats
	    };
	  }
	  getHTML(index, length) {
	    const [line, lineOffset] = this.scroll.line(index);
	    if (line) {
	      const lineLength = line.length();
	      const isWithinLine = line.length() >= lineOffset + length;
	      if (isWithinLine && !(lineOffset === 0 && length === lineLength)) {
	        return convertHTML(line, lineOffset, length, true);
	      }
	      return convertHTML(this.scroll, index, length, true);
	    }
	    return '';
	  }
	  getText(index, length) {
	    return this.getContents(index, length).filter(op => typeof op.insert === 'string').map(op => op.insert).join('');
	  }
	  insertContents(index, contents) {
	    const normalizedDelta = normalizeDelta(contents);
	    const change = new Delta().retain(index).concat(normalizedDelta);
	    this.scroll.insertContents(index, normalizedDelta);
	    return this.update(change);
	  }
	  insertEmbed(index, embed, value) {
	    this.scroll.insertAt(index, embed, value);
	    return this.update(new Delta().retain(index).insert({
	      [embed]: value
	    }));
	  }
	  insertText(index, text) {
	    let formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
	    this.scroll.insertAt(index, text);
	    Object.keys(formats).forEach(format => {
	      this.scroll.formatAt(index, text.length, format, formats[format]);
	    });
	    return this.update(new Delta().retain(index).insert(text, cloneDeep(formats)));
	  }
	  isBlank() {
	    if (this.scroll.children.length === 0) return true;
	    if (this.scroll.children.length > 1) return false;
	    const blot = this.scroll.children.head;
	    if (blot?.statics.blotName !== Block.blotName) return false;
	    const block = blot;
	    if (block.children.length > 1) return false;
	    return block.children.head instanceof Break;
	  }
	  removeFormat(index, length) {
	    const text = this.getText(index, length);
	    const [line, offset] = this.scroll.line(index + length);
	    let suffixLength = 0;
	    let suffix = new Delta();
	    if (line != null) {
	      suffixLength = line.length() - offset;
	      suffix = line.delta().slice(offset, offset + suffixLength - 1).insert('\n');
	    }
	    const contents = this.getContents(index, length + suffixLength);
	    const diff = contents.diff(new Delta().insert(text).concat(suffix));
	    const delta = new Delta().retain(index).concat(diff);
	    return this.applyDelta(delta);
	  }
	  update(change) {
	    let mutations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	    let selectionInfo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
	    const oldDelta = this.delta;
	    if (mutations.length === 1 && mutations[0].type === 'characterData' &&
	    // @ts-expect-error Fix me later
	    mutations[0].target.data.match(ASCII) && this.scroll.find(mutations[0].target)) {
	      // Optimization for character changes
	      const textBlot = this.scroll.find(mutations[0].target);
	      const formats = bubbleFormats(textBlot);
	      const index = textBlot.offset(this.scroll);
	      // @ts-expect-error Fix me later
	      const oldValue = mutations[0].oldValue.replace(Cursor.CONTENTS, '');
	      const oldText = new Delta().insert(oldValue);
	      // @ts-expect-error
	      const newText = new Delta().insert(textBlot.value());
	      const relativeSelectionInfo = selectionInfo && {
	        oldRange: shiftRange$1(selectionInfo.oldRange, -index),
	        newRange: shiftRange$1(selectionInfo.newRange, -index)
	      };
	      const diffDelta = new Delta().retain(index).concat(oldText.diff(newText, relativeSelectionInfo));
	      change = diffDelta.reduce((delta, op) => {
	        if (op.insert) {
	          return delta.insert(op.insert, formats);
	        }
	        return delta.push(op);
	      }, new Delta());
	      this.delta = oldDelta.compose(change);
	    } else {
	      this.delta = this.getDelta();
	      if (!change || !isEqual$1(oldDelta.compose(change), this.delta)) {
	        change = oldDelta.diff(this.delta, selectionInfo);
	      }
	    }
	    return change;
	  }
	}
	function convertListHTML(items, lastIndent, types) {
	  if (items.length === 0) {
	    const [endTag] = getListType(types.pop());
	    if (lastIndent <= 0) {
	      return `</li></${endTag}>`;
	    }
	    return `</li></${endTag}>${convertListHTML([], lastIndent - 1, types)}`;
	  }
	  const [{
	    child,
	    offset,
	    length,
	    indent,
	    type
	  }, ...rest] = items;
	  const [tag, attribute] = getListType(type);
	  if (indent > lastIndent) {
	    types.push(type);
	    if (indent === lastIndent + 1) {
	      return `<${tag}><li${attribute}>${convertHTML(child, offset, length)}${convertListHTML(rest, indent, types)}`;
	    }
	    return `<${tag}><li>${convertListHTML(items, lastIndent + 1, types)}`;
	  }
	  const previousType = types[types.length - 1];
	  if (indent === lastIndent && type === previousType) {
	    return `</li><li${attribute}>${convertHTML(child, offset, length)}${convertListHTML(rest, indent, types)}`;
	  }
	  const [endTag] = getListType(types.pop());
	  return `</li></${endTag}>${convertListHTML(items, lastIndent - 1, types)}`;
	}
	function convertHTML(blot, index, length) {
	  let isRoot = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	  if ('html' in blot && typeof blot.html === 'function') {
	    return blot.html(index, length);
	  }
	  if (blot instanceof Text$1) {
	    const escapedText = escapeText(blot.value().slice(index, index + length));
	    return escapedText.replaceAll(' ', '&nbsp;');
	  }
	  if (blot instanceof ParentBlot$1) {
	    // TODO fix API
	    if (blot.statics.blotName === 'list-container') {
	      const items = [];
	      blot.children.forEachAt(index, length, (child, offset, childLength) => {
	        const formats = 'formats' in child && typeof child.formats === 'function' ? child.formats() : {};
	        items.push({
	          child,
	          offset,
	          length: childLength,
	          indent: formats.indent || 0,
	          type: formats.list
	        });
	      });
	      return convertListHTML(items, -1, []);
	    }
	    const parts = [];
	    blot.children.forEachAt(index, length, (child, offset, childLength) => {
	      parts.push(convertHTML(child, offset, childLength));
	    });
	    if (isRoot || blot.statics.blotName === 'list') {
	      return parts.join('');
	    }
	    const {
	      outerHTML,
	      innerHTML
	    } = blot.domNode;
	    const [start, end] = outerHTML.split(`>${innerHTML}<`);
	    // TODO cleanup
	    if (start === '<table') {
	      return `<table style="border: 1px solid #000;">${parts.join('')}<${end}`;
	    }
	    return `${start}>${parts.join('')}<${end}`;
	  }
	  return blot.domNode instanceof Element ? blot.domNode.outerHTML : '';
	}
	function combineFormats(formats, combined) {
	  return Object.keys(combined).reduce((merged, name) => {
	    if (formats[name] == null) return merged;
	    const combinedValue = combined[name];
	    if (combinedValue === formats[name]) {
	      merged[name] = combinedValue;
	    } else if (Array.isArray(combinedValue)) {
	      if (combinedValue.indexOf(formats[name]) < 0) {
	        merged[name] = combinedValue.concat([formats[name]]);
	      } else {
	        // If style already exists, don't add to an array, but don't lose other styles
	        merged[name] = combinedValue;
	      }
	    } else {
	      merged[name] = [combinedValue, formats[name]];
	    }
	    return merged;
	  }, {});
	}
	function getListType(type) {
	  const tag = type === 'ordered' ? 'ol' : 'ul';
	  switch (type) {
	    case 'checked':
	      return [tag, ' data-list="checked"'];
	    case 'unchecked':
	      return [tag, ' data-list="unchecked"'];
	    default:
	      return [tag, ''];
	  }
	}
	function normalizeDelta(delta) {
	  return delta.reduce((normalizedDelta, op) => {
	    if (typeof op.insert === 'string') {
	      const text = op.insert.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
	      return normalizedDelta.insert(text, op.attributes);
	    }
	    return normalizedDelta.push(op);
	  }, new Delta());
	}
	function shiftRange$1(_ref, amount) {
	  let {
	    index,
	    length
	  } = _ref;
	  return new Range(index + amount, length);
	}
	function splitOpLines(ops) {
	  const split = [];
	  ops.forEach(op => {
	    if (typeof op.insert === 'string') {
	      const lines = op.insert.split('\n');
	      lines.forEach((line, index) => {
	        if (index) split.push({
	          insert: '\n',
	          attributes: op.attributes
	        });
	        if (line) split.push({
	          insert: line,
	          attributes: op.attributes
	        });
	      });
	    } else {
	      split.push(op);
	    }
	  });
	  return split;
	}

	class Module {
	  static DEFAULTS = {};
	  constructor(quill) {
	    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    this.quill = quill;
	    this.options = options;
	  }
	}

	const GUARD_TEXT = '\uFEFF';
	class Embed extends EmbedBlot$1 {
	  constructor(scroll, node) {
	    super(scroll, node);
	    this.contentNode = document.createElement('span');
	    this.contentNode.setAttribute('contenteditable', 'false');
	    Array.from(this.domNode.childNodes).forEach(childNode => {
	      this.contentNode.appendChild(childNode);
	    });
	    this.leftGuard = document.createTextNode(GUARD_TEXT);
	    this.rightGuard = document.createTextNode(GUARD_TEXT);
	    this.domNode.appendChild(this.leftGuard);
	    this.domNode.appendChild(this.contentNode);
	    this.domNode.appendChild(this.rightGuard);
	  }
	  index(node, offset) {
	    if (node === this.leftGuard) return 0;
	    if (node === this.rightGuard) return 1;
	    return super.index(node, offset);
	  }
	  restore(node) {
	    let range = null;
	    let textNode;
	    const text = node.data.split(GUARD_TEXT).join('');
	    if (node === this.leftGuard) {
	      if (this.prev instanceof Text$1) {
	        const prevLength = this.prev.length();
	        this.prev.insertAt(prevLength, text);
	        range = {
	          startNode: this.prev.domNode,
	          startOffset: prevLength + text.length
	        };
	      } else {
	        textNode = document.createTextNode(text);
	        this.parent.insertBefore(this.scroll.create(textNode), this);
	        range = {
	          startNode: textNode,
	          startOffset: text.length
	        };
	      }
	    } else if (node === this.rightGuard) {
	      if (this.next instanceof Text$1) {
	        this.next.insertAt(0, text);
	        range = {
	          startNode: this.next.domNode,
	          startOffset: text.length
	        };
	      } else {
	        textNode = document.createTextNode(text);
	        this.parent.insertBefore(this.scroll.create(textNode), this.next);
	        range = {
	          startNode: textNode,
	          startOffset: text.length
	        };
	      }
	    }
	    node.data = GUARD_TEXT;
	    return range;
	  }
	  update(mutations, context) {
	    mutations.forEach(mutation => {
	      if (mutation.type === 'characterData' && (mutation.target === this.leftGuard || mutation.target === this.rightGuard)) {
	        const range = this.restore(mutation.target);
	        if (range) context.range = range;
	      }
	    });
	  }
	}

	class Composition {
	  isComposing = false;
	  constructor(scroll, emitter) {
	    this.scroll = scroll;
	    this.emitter = emitter;
	    this.setupListeners();
	  }
	  setupListeners() {
	    this.scroll.domNode.addEventListener('compositionstart', event => {
	      if (!this.isComposing) {
	        this.handleCompositionStart(event);
	      }
	    });
	    this.scroll.domNode.addEventListener('compositionend', event => {
	      if (this.isComposing) {
	        // Webkit makes DOM changes after compositionend, so we use microtask to
	        // ensure the order.
	        // https://bugs.webkit.org/show_bug.cgi?id=31902
	        queueMicrotask(() => {
	          this.handleCompositionEnd(event);
	        });
	      }
	    });
	  }
	  handleCompositionStart(event) {
	    const blot = event.target instanceof Node ? this.scroll.find(event.target, true) : null;
	    if (blot && !(blot instanceof Embed)) {
	      this.emitter.emit(Emitter.events.COMPOSITION_BEFORE_START, event);
	      this.scroll.batchStart();
	      this.emitter.emit(Emitter.events.COMPOSITION_START, event);
	      this.isComposing = true;
	    }
	  }
	  handleCompositionEnd(event) {
	    this.emitter.emit(Emitter.events.COMPOSITION_BEFORE_END, event);
	    this.scroll.batchEnd();
	    this.emitter.emit(Emitter.events.COMPOSITION_END, event);
	    this.isComposing = false;
	  }
	}

	class Theme {
	  static DEFAULTS = {
	    modules: {}
	  };
	  static themes = {
	    default: Theme
	  };
	  modules = {};
	  constructor(quill, options) {
	    this.quill = quill;
	    this.options = options;
	  }
	  init() {
	    Object.keys(this.options.modules).forEach(name => {
	      if (this.modules[name] == null) {
	        this.addModule(name);
	      }
	    });
	  }
	  addModule(name) {
	    // @ts-expect-error
	    const ModuleClass = this.quill.constructor.import(`modules/${name}`);
	    this.modules[name] = new ModuleClass(this.quill, this.options.modules[name] || {});
	    return this.modules[name];
	  }
	}

	const getParentElement = element => element.parentElement || element.getRootNode().host || null;
	const getElementRect = element => {
	  const rect = element.getBoundingClientRect();
	  const scaleX = 'offsetWidth' in element && Math.abs(rect.width) / element.offsetWidth || 1;
	  const scaleY = 'offsetHeight' in element && Math.abs(rect.height) / element.offsetHeight || 1;
	  return {
	    top: rect.top,
	    right: rect.left + element.clientWidth * scaleX,
	    bottom: rect.top + element.clientHeight * scaleY,
	    left: rect.left
	  };
	};
	const paddingValueToInt = value => {
	  const number = parseInt(value, 10);
	  return Number.isNaN(number) ? 0 : number;
	};

	// Follow the steps described in https://www.w3.org/TR/cssom-view-1/#element-scrolling-members,
	// assuming that the scroll option is set to 'nearest'.
	const getScrollDistance = (targetStart, targetEnd, scrollStart, scrollEnd, scrollPaddingStart, scrollPaddingEnd) => {
	  if (targetStart < scrollStart && targetEnd > scrollEnd) {
	    return 0;
	  }
	  if (targetStart < scrollStart) {
	    return -(scrollStart - targetStart + scrollPaddingStart);
	  }
	  if (targetEnd > scrollEnd) {
	    return targetEnd - targetStart > scrollEnd - scrollStart ? targetStart + scrollPaddingStart - scrollStart : targetEnd - scrollEnd + scrollPaddingEnd;
	  }
	  return 0;
	};
	const scrollRectIntoView = (root, targetRect) => {
	  const document = root.ownerDocument;
	  let rect = targetRect;
	  let current = root;
	  while (current) {
	    const isDocumentBody = current === document.body;
	    const bounding = isDocumentBody ? {
	      top: 0,
	      right: window.visualViewport?.width ?? document.documentElement.clientWidth,
	      bottom: window.visualViewport?.height ?? document.documentElement.clientHeight,
	      left: 0
	    } : getElementRect(current);
	    const style = getComputedStyle(current);
	    const scrollDistanceX = getScrollDistance(rect.left, rect.right, bounding.left, bounding.right, paddingValueToInt(style.scrollPaddingLeft), paddingValueToInt(style.scrollPaddingRight));
	    const scrollDistanceY = getScrollDistance(rect.top, rect.bottom, bounding.top, bounding.bottom, paddingValueToInt(style.scrollPaddingTop), paddingValueToInt(style.scrollPaddingBottom));
	    if (scrollDistanceX || scrollDistanceY) {
	      if (isDocumentBody) {
	        document.defaultView?.scrollBy(scrollDistanceX, scrollDistanceY);
	      } else {
	        const {
	          scrollLeft,
	          scrollTop
	        } = current;
	        if (scrollDistanceY) {
	          current.scrollTop += scrollDistanceY;
	        }
	        if (scrollDistanceX) {
	          current.scrollLeft += scrollDistanceX;
	        }
	        const scrolledLeft = current.scrollLeft - scrollLeft;
	        const scrolledTop = current.scrollTop - scrollTop;
	        rect = {
	          left: rect.left - scrolledLeft,
	          top: rect.top - scrolledTop,
	          right: rect.right - scrolledLeft,
	          bottom: rect.bottom - scrolledTop
	        };
	      }
	    }
	    current = isDocumentBody || style.position === 'fixed' ? null : getParentElement(current);
	  }
	};

	const MAX_REGISTER_ITERATIONS = 100;
	const CORE_FORMATS = ['block', 'break', 'cursor', 'inline', 'scroll', 'text'];
	const createRegistryWithFormats = (formats, sourceRegistry, debug) => {
	  const registry = new Registry();
	  CORE_FORMATS.forEach(name => {
	    const coreBlot = sourceRegistry.query(name);
	    if (coreBlot) registry.register(coreBlot);
	  });
	  formats.forEach(name => {
	    let format = sourceRegistry.query(name);
	    if (!format) {
	      debug.error(`Cannot register "${name}" specified in "formats" config. Are you sure it was registered?`);
	    }
	    let iterations = 0;
	    while (format) {
	      registry.register(format);
	      format = 'blotName' in format ? format.requiredContainer ?? null : null;
	      iterations += 1;
	      if (iterations > MAX_REGISTER_ITERATIONS) {
	        debug.error(`Cycle detected in registering blot requiredContainer: "${name}"`);
	        break;
	      }
	    }
	  });
	  return registry;
	};

	const debug$3 = namespace('quill');
	const globalRegistry = new Registry();
	ParentBlot$1.uiClass = 'ql-ui';

	/**
	 * Options for initializing a Quill instance
	 */

	/**
	 * Similar to QuillOptions, but with all properties expanded to their default values,
	 * and all selectors resolved to HTMLElements.
	 */

	class Quill {
	  static DEFAULTS = {
	    bounds: null,
	    modules: {
	      clipboard: true,
	      keyboard: true,
	      history: true,
	      uploader: true
	    },
	    placeholder: '',
	    readOnly: false,
	    registry: globalRegistry,
	    theme: 'default'
	  };
	  static events = Emitter.events;
	  static sources = Emitter.sources;
	  static version = "2.0.3";
	  static imports = {
	    delta: Delta,
	    parchment: Parchment,
	    'core/module': Module,
	    'core/theme': Theme
	  };
	  static debug(limit) {
	    if (limit === true) {
	      limit = 'log';
	    }
	    namespace.level(limit);
	  }
	  static find(node) {
	    let bubble = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    return instances.get(node) || globalRegistry.find(node, bubble);
	  }
	  static import(name) {
	    if (this.imports[name] == null) {
	      debug$3.error(`Cannot import ${name}. Are you sure it was registered?`);
	    }
	    return this.imports[name];
	  }
	  static register() {
	    if (typeof (arguments.length <= 0 ? undefined : arguments[0]) !== 'string') {
	      const target = arguments.length <= 0 ? undefined : arguments[0];
	      const overwrite = !!(arguments.length <= 1 ? undefined : arguments[1]);
	      const name = 'attrName' in target ? target.attrName : target.blotName;
	      if (typeof name === 'string') {
	        // Shortcut for formats:
	        // register(Blot | Attributor, overwrite)
	        this.register(`formats/${name}`, target, overwrite);
	      } else {
	        Object.keys(target).forEach(key => {
	          this.register(key, target[key], overwrite);
	        });
	      }
	    } else {
	      const path = arguments.length <= 0 ? undefined : arguments[0];
	      const target = arguments.length <= 1 ? undefined : arguments[1];
	      const overwrite = !!(arguments.length <= 2 ? undefined : arguments[2]);
	      if (this.imports[path] != null && !overwrite) {
	        debug$3.warn(`Overwriting ${path} with`, target);
	      }
	      this.imports[path] = target;
	      if ((path.startsWith('blots/') || path.startsWith('formats/')) && target && typeof target !== 'boolean' && target.blotName !== 'abstract') {
	        globalRegistry.register(target);
	      }
	      if (typeof target.register === 'function') {
	        target.register(globalRegistry);
	      }
	    }
	  }
	  constructor(container) {
	    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    this.options = expandConfig(container, options);
	    this.container = this.options.container;
	    if (this.container == null) {
	      debug$3.error('Invalid Quill container', container);
	      return;
	    }
	    if (this.options.debug) {
	      Quill.debug(this.options.debug);
	    }
	    const html = this.container.innerHTML.trim();
	    this.container.classList.add('ql-container');
	    this.container.innerHTML = '';
	    instances.set(this.container, this);
	    this.root = this.addContainer('ql-editor');
	    this.root.classList.add('ql-blank');
	    this.emitter = new Emitter();
	    const scrollBlotName = ScrollBlot$1.blotName;
	    const ScrollBlot = this.options.registry.query(scrollBlotName);
	    if (!ScrollBlot || !('blotName' in ScrollBlot)) {
	      throw new Error(`Cannot initialize Quill without "${scrollBlotName}" blot`);
	    }
	    this.scroll = new ScrollBlot(this.options.registry, this.root, {
	      emitter: this.emitter
	    });
	    this.editor = new Editor(this.scroll);
	    this.selection = new Selection(this.scroll, this.emitter);
	    this.composition = new Composition(this.scroll, this.emitter);
	    this.theme = new this.options.theme(this, this.options); // eslint-disable-line new-cap
	    this.keyboard = this.theme.addModule('keyboard');
	    this.clipboard = this.theme.addModule('clipboard');
	    this.history = this.theme.addModule('history');
	    this.uploader = this.theme.addModule('uploader');
	    this.theme.addModule('input');
	    this.theme.addModule('uiNode');
	    this.theme.init();
	    this.emitter.on(Emitter.events.EDITOR_CHANGE, type => {
	      if (type === Emitter.events.TEXT_CHANGE) {
	        this.root.classList.toggle('ql-blank', this.editor.isBlank());
	      }
	    });
	    this.emitter.on(Emitter.events.SCROLL_UPDATE, (source, mutations) => {
	      const oldRange = this.selection.lastRange;
	      const [newRange] = this.selection.getRange();
	      const selectionInfo = oldRange && newRange ? {
	        oldRange,
	        newRange
	      } : undefined;
	      modify.call(this, () => this.editor.update(null, mutations, selectionInfo), source);
	    });
	    this.emitter.on(Emitter.events.SCROLL_EMBED_UPDATE, (blot, delta) => {
	      const oldRange = this.selection.lastRange;
	      const [newRange] = this.selection.getRange();
	      const selectionInfo = oldRange && newRange ? {
	        oldRange,
	        newRange
	      } : undefined;
	      modify.call(this, () => {
	        const change = new Delta().retain(blot.offset(this)).retain({
	          [blot.statics.blotName]: delta
	        });
	        return this.editor.update(change, [], selectionInfo);
	      }, Quill.sources.USER);
	    });
	    if (html) {
	      const contents = this.clipboard.convert({
	        html: `${html}<p><br></p>`,
	        text: '\n'
	      });
	      this.setContents(contents);
	    }
	    this.history.clear();
	    if (this.options.placeholder) {
	      this.root.setAttribute('data-placeholder', this.options.placeholder);
	    }
	    if (this.options.readOnly) {
	      this.disable();
	    }
	    this.allowReadOnlyEdits = false;
	  }
	  addContainer(container) {
	    let refNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	    if (typeof container === 'string') {
	      const className = container;
	      container = document.createElement('div');
	      container.classList.add(className);
	    }
	    this.container.insertBefore(container, refNode);
	    return container;
	  }
	  blur() {
	    this.selection.setRange(null);
	  }
	  deleteText(index, length, source) {
	    // @ts-expect-error
	    [index, length,, source] = overload(index, length, source);
	    return modify.call(this, () => {
	      return this.editor.deleteText(index, length);
	    }, source, index, -1 * length);
	  }
	  disable() {
	    this.enable(false);
	  }
	  editReadOnly(modifier) {
	    this.allowReadOnlyEdits = true;
	    const value = modifier();
	    this.allowReadOnlyEdits = false;
	    return value;
	  }
	  enable() {
	    let enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	    this.scroll.enable(enabled);
	    this.container.classList.toggle('ql-disabled', !enabled);
	  }
	  focus() {
	    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    this.selection.focus();
	    if (!options.preventScroll) {
	      this.scrollSelectionIntoView();
	    }
	  }
	  format(name, value) {
	    let source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Emitter.sources.API;
	    return modify.call(this, () => {
	      const range = this.getSelection(true);
	      let change = new Delta();
	      if (range == null) return change;
	      if (this.scroll.query(name, Scope.BLOCK)) {
	        change = this.editor.formatLine(range.index, range.length, {
	          [name]: value
	        });
	      } else if (range.length === 0) {
	        this.selection.format(name, value);
	        return change;
	      } else {
	        change = this.editor.formatText(range.index, range.length, {
	          [name]: value
	        });
	      }
	      this.setSelection(range, Emitter.sources.SILENT);
	      return change;
	    }, source);
	  }
	  formatLine(index, length, name, value, source) {
	    let formats;
	    // eslint-disable-next-line prefer-const
	    [index, length, formats, source] = overload(index, length,
	    // @ts-expect-error
	    name, value, source);
	    return modify.call(this, () => {
	      return this.editor.formatLine(index, length, formats);
	    }, source, index, 0);
	  }
	  formatText(index, length, name, value, source) {
	    let formats;
	    // eslint-disable-next-line prefer-const
	    [index, length, formats, source] = overload(
	    // @ts-expect-error
	    index, length, name, value, source);
	    return modify.call(this, () => {
	      return this.editor.formatText(index, length, formats);
	    }, source, index, 0);
	  }
	  getBounds(index) {
	    let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    let bounds = null;
	    if (typeof index === 'number') {
	      bounds = this.selection.getBounds(index, length);
	    } else {
	      bounds = this.selection.getBounds(index.index, index.length);
	    }
	    if (!bounds) return null;
	    const containerBounds = this.container.getBoundingClientRect();
	    return {
	      bottom: bounds.bottom - containerBounds.top,
	      height: bounds.height,
	      left: bounds.left - containerBounds.left,
	      right: bounds.right - containerBounds.left,
	      top: bounds.top - containerBounds.top,
	      width: bounds.width
	    };
	  }
	  getContents() {
	    let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getLength() - index;
	    [index, length] = overload(index, length);
	    return this.editor.getContents(index, length);
	  }
	  getFormat() {
	    let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSelection(true);
	    let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    if (typeof index === 'number') {
	      return this.editor.getFormat(index, length);
	    }
	    return this.editor.getFormat(index.index, index.length);
	  }
	  getIndex(blot) {
	    return blot.offset(this.scroll);
	  }
	  getLength() {
	    return this.scroll.length();
	  }
	  getLeaf(index) {
	    return this.scroll.leaf(index);
	  }
	  getLine(index) {
	    return this.scroll.line(index);
	  }
	  getLines() {
	    let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;
	    if (typeof index !== 'number') {
	      return this.scroll.lines(index.index, index.length);
	    }
	    return this.scroll.lines(index, length);
	  }
	  getModule(name) {
	    return this.theme.modules[name];
	  }
	  getSelection() {
	    let focus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	    if (focus) this.focus();
	    this.update(); // Make sure we access getRange with editor in consistent state
	    return this.selection.getRange()[0];
	  }
	  getSemanticHTML() {
	    let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    let length = arguments.length > 1 ? arguments[1] : undefined;
	    if (typeof index === 'number') {
	      length = length ?? this.getLength() - index;
	    }
	    // @ts-expect-error
	    [index, length] = overload(index, length);
	    return this.editor.getHTML(index, length);
	  }
	  getText() {
	    let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    let length = arguments.length > 1 ? arguments[1] : undefined;
	    if (typeof index === 'number') {
	      length = length ?? this.getLength() - index;
	    }
	    // @ts-expect-error
	    [index, length] = overload(index, length);
	    return this.editor.getText(index, length);
	  }
	  hasFocus() {
	    return this.selection.hasFocus();
	  }
	  insertEmbed(index, embed, value) {
	    let source = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Quill.sources.API;
	    return modify.call(this, () => {
	      return this.editor.insertEmbed(index, embed, value);
	    }, source, index);
	  }
	  insertText(index, text, name, value, source) {
	    let formats;
	    // eslint-disable-next-line prefer-const
	    // @ts-expect-error
	    [index,, formats, source] = overload(index, 0, name, value, source);
	    return modify.call(this, () => {
	      return this.editor.insertText(index, text, formats);
	    }, source, index, text.length);
	  }
	  isEnabled() {
	    return this.scroll.isEnabled();
	  }
	  off() {
	    return this.emitter.off(...arguments);
	  }
	  on() {
	    return this.emitter.on(...arguments);
	  }
	  once() {
	    return this.emitter.once(...arguments);
	  }
	  removeFormat(index, length, source) {
	    [index, length,, source] = overload(index, length, source);
	    return modify.call(this, () => {
	      return this.editor.removeFormat(index, length);
	    }, source, index);
	  }
	  scrollRectIntoView(rect) {
	    scrollRectIntoView(this.root, rect);
	  }

	  /**
	   * @deprecated Use Quill#scrollSelectionIntoView() instead.
	   */
	  scrollIntoView() {
	    console.warn('Quill#scrollIntoView() has been deprecated and will be removed in the near future. Please use Quill#scrollSelectionIntoView() instead.');
	    this.scrollSelectionIntoView();
	  }

	  /**
	   * Scroll the current selection into the visible area.
	   * If the selection is already visible, no scrolling will occur.
	   */
	  scrollSelectionIntoView() {
	    const range = this.selection.lastRange;
	    const bounds = range && this.selection.getBounds(range.index, range.length);
	    if (bounds) {
	      this.scrollRectIntoView(bounds);
	    }
	  }
	  setContents(delta) {
	    let source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Emitter.sources.API;
	    return modify.call(this, () => {
	      delta = new Delta(delta);
	      const length = this.getLength();
	      // Quill will set empty editor to \n
	      const delete1 = this.editor.deleteText(0, length);
	      const applied = this.editor.insertContents(0, delta);
	      // Remove extra \n from empty editor initialization
	      const delete2 = this.editor.deleteText(this.getLength() - 1, 1);
	      return delete1.compose(applied).compose(delete2);
	    }, source);
	  }
	  setSelection(index, length, source) {
	    if (index == null) {
	      // @ts-expect-error https://github.com/microsoft/TypeScript/issues/22609
	      this.selection.setRange(null, length || Quill.sources.API);
	    } else {
	      // @ts-expect-error
	      [index, length,, source] = overload(index, length, source);
	      this.selection.setRange(new Range(Math.max(0, index), length), source);
	      if (source !== Emitter.sources.SILENT) {
	        this.scrollSelectionIntoView();
	      }
	    }
	  }
	  setText(text) {
	    let source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Emitter.sources.API;
	    const delta = new Delta().insert(text);
	    return this.setContents(delta, source);
	  }
	  update() {
	    let source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Emitter.sources.USER;
	    const change = this.scroll.update(source); // Will update selection before selection.update() does if text changes
	    this.selection.update(source);
	    // TODO this is usually undefined
	    return change;
	  }
	  updateContents(delta) {
	    let source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Emitter.sources.API;
	    return modify.call(this, () => {
	      delta = new Delta(delta);
	      return this.editor.applyDelta(delta);
	    }, source, true);
	  }
	}
	function resolveSelector(selector) {
	  return typeof selector === 'string' ? document.querySelector(selector) : selector;
	}
	function expandModuleConfig(config) {
	  return Object.entries(config ?? {}).reduce((expanded, _ref) => {
	    let [key, value] = _ref;
	    return {
	      ...expanded,
	      [key]: value === true ? {} : value
	    };
	  }, {});
	}
	function omitUndefinedValuesFromOptions(obj) {
	  return Object.fromEntries(Object.entries(obj).filter(entry => entry[1] !== undefined));
	}
	function expandConfig(containerOrSelector, options) {
	  const container = resolveSelector(containerOrSelector);
	  if (!container) {
	    throw new Error('Invalid Quill container');
	  }
	  const shouldUseDefaultTheme = !options.theme || options.theme === Quill.DEFAULTS.theme;
	  const theme = shouldUseDefaultTheme ? Theme : Quill.import(`themes/${options.theme}`);
	  if (!theme) {
	    throw new Error(`Invalid theme ${options.theme}. Did you register it?`);
	  }
	  const {
	    modules: quillModuleDefaults,
	    ...quillDefaults
	  } = Quill.DEFAULTS;
	  const {
	    modules: themeModuleDefaults,
	    ...themeDefaults
	  } = theme.DEFAULTS;
	  let userModuleOptions = expandModuleConfig(options.modules);
	  // Special case toolbar shorthand
	  if (userModuleOptions != null && userModuleOptions.toolbar && userModuleOptions.toolbar.constructor !== Object) {
	    userModuleOptions = {
	      ...userModuleOptions,
	      toolbar: {
	        container: userModuleOptions.toolbar
	      }
	    };
	  }
	  const modules = merge({}, expandModuleConfig(quillModuleDefaults), expandModuleConfig(themeModuleDefaults), userModuleOptions);
	  const config = {
	    ...quillDefaults,
	    ...omitUndefinedValuesFromOptions(themeDefaults),
	    ...omitUndefinedValuesFromOptions(options)
	  };
	  let registry = options.registry;
	  if (registry) {
	    if (options.formats) {
	      debug$3.warn('Ignoring "formats" option because "registry" is specified');
	    }
	  } else {
	    registry = options.formats ? createRegistryWithFormats(options.formats, config.registry, debug$3) : config.registry;
	  }
	  return {
	    ...config,
	    registry,
	    container,
	    theme,
	    modules: Object.entries(modules).reduce((modulesWithDefaults, _ref2) => {
	      let [name, value] = _ref2;
	      if (!value) return modulesWithDefaults;
	      const moduleClass = Quill.import(`modules/${name}`);
	      if (moduleClass == null) {
	        debug$3.error(`Cannot load ${name} module. Are you sure you registered it?`);
	        return modulesWithDefaults;
	      }
	      return {
	        ...modulesWithDefaults,
	        // @ts-expect-error
	        [name]: merge({}, moduleClass.DEFAULTS || {}, value)
	      };
	    }, {}),
	    bounds: resolveSelector(config.bounds)
	  };
	}

	// Handle selection preservation and TEXT_CHANGE emission
	// common to modification APIs
	function modify(modifier, source, index, shift) {
	  if (!this.isEnabled() && source === Emitter.sources.USER && !this.allowReadOnlyEdits) {
	    return new Delta();
	  }
	  let range = index == null ? null : this.getSelection();
	  const oldDelta = this.editor.delta;
	  const change = modifier();
	  if (range != null) {
	    if (index === true) {
	      index = range.index; // eslint-disable-line prefer-destructuring
	    }
	    if (shift == null) {
	      range = shiftRange(range, change, source);
	    } else if (shift !== 0) {
	      // @ts-expect-error index should always be number
	      range = shiftRange(range, index, shift, source);
	    }
	    this.setSelection(range, Emitter.sources.SILENT);
	  }
	  if (change.length() > 0) {
	    const args = [Emitter.events.TEXT_CHANGE, change, oldDelta, source];
	    this.emitter.emit(Emitter.events.EDITOR_CHANGE, ...args);
	    if (source !== Emitter.sources.SILENT) {
	      this.emitter.emit(...args);
	    }
	  }
	  return change;
	}
	function overload(index, length, name, value, source) {
	  let formats = {};
	  // @ts-expect-error
	  if (typeof index.index === 'number' && typeof index.length === 'number') {
	    // Allow for throwaway end (used by insertText/insertEmbed)
	    if (typeof length !== 'number') {
	      // @ts-expect-error
	      source = value;
	      value = name;
	      name = length;
	      // @ts-expect-error
	      length = index.length; // eslint-disable-line prefer-destructuring
	      // @ts-expect-error
	      index = index.index; // eslint-disable-line prefer-destructuring
	    } else {
	      // @ts-expect-error
	      length = index.length; // eslint-disable-line prefer-destructuring
	      // @ts-expect-error
	      index = index.index; // eslint-disable-line prefer-destructuring
	    }
	  } else if (typeof length !== 'number') {
	    // @ts-expect-error
	    source = value;
	    value = name;
	    name = length;
	    length = 0;
	  }
	  // Handle format being object, two format name/value strings or excluded
	  if (typeof name === 'object') {
	    // @ts-expect-error Fix me later
	    formats = name;
	    // @ts-expect-error
	    source = value;
	  } else if (typeof name === 'string') {
	    if (value != null) {
	      formats[name] = value;
	    } else {
	      // @ts-expect-error
	      source = name;
	    }
	  }
	  // Handle optional source
	  source = source || Emitter.sources.API;
	  // @ts-expect-error
	  return [index, length, formats, source];
	}
	function shiftRange(range, index, lengthOrSource, source) {
	  const length = typeof lengthOrSource === 'number' ? lengthOrSource : 0;
	  if (range == null) return null;
	  let start;
	  let end;
	  // @ts-expect-error -- TODO: add a better type guard around `index`
	  if (index && typeof index.transformPosition === 'function') {
	    [start, end] = [range.index, range.index + range.length].map(pos =>
	    // @ts-expect-error -- TODO: add a better type guard around `index`
	    index.transformPosition(pos, source !== Emitter.sources.USER));
	  } else {
	    [start, end] = [range.index, range.index + range.length].map(pos => {
	      // @ts-expect-error -- TODO: add a better type guard around `index`
	      if (pos < index || pos === index && source === Emitter.sources.USER) return pos;
	      if (length >= 0) {
	        return pos + length;
	      }
	      // @ts-expect-error -- TODO: add a better type guard around `index`
	      return Math.max(index, pos + length);
	    });
	  }
	  return new Range(start, end - start);
	}

	class Container extends ContainerBlot$1 {}

	function isLine$1(blot) {
	  return blot instanceof Block || blot instanceof BlockEmbed;
	}
	function isUpdatable(blot) {
	  return typeof blot.updateContent === 'function';
	}
	class Scroll extends ScrollBlot$1 {
	  static blotName = 'scroll';
	  static className = 'ql-editor';
	  static tagName = 'DIV';
	  static defaultChild = Block;
	  static allowedChildren = [Block, BlockEmbed, Container];
	  constructor(registry, domNode, _ref) {
	    let {
	      emitter
	    } = _ref;
	    super(registry, domNode);
	    this.emitter = emitter;
	    this.batch = false;
	    this.optimize();
	    this.enable();
	    this.domNode.addEventListener('dragstart', e => this.handleDragStart(e));
	  }
	  batchStart() {
	    if (!Array.isArray(this.batch)) {
	      this.batch = [];
	    }
	  }
	  batchEnd() {
	    if (!this.batch) return;
	    const mutations = this.batch;
	    this.batch = false;
	    this.update(mutations);
	  }
	  emitMount(blot) {
	    this.emitter.emit(Emitter.events.SCROLL_BLOT_MOUNT, blot);
	  }
	  emitUnmount(blot) {
	    this.emitter.emit(Emitter.events.SCROLL_BLOT_UNMOUNT, blot);
	  }
	  emitEmbedUpdate(blot, change) {
	    this.emitter.emit(Emitter.events.SCROLL_EMBED_UPDATE, blot, change);
	  }
	  deleteAt(index, length) {
	    const [first, offset] = this.line(index);
	    const [last] = this.line(index + length);
	    super.deleteAt(index, length);
	    if (last != null && first !== last && offset > 0) {
	      if (first instanceof BlockEmbed || last instanceof BlockEmbed) {
	        this.optimize();
	        return;
	      }
	      const ref = last.children.head instanceof Break ? null : last.children.head;
	      // @ts-expect-error
	      first.moveChildren(last, ref);
	      // @ts-expect-error
	      first.remove();
	    }
	    this.optimize();
	  }
	  enable() {
	    let enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	    this.domNode.setAttribute('contenteditable', enabled ? 'true' : 'false');
	  }
	  formatAt(index, length, format, value) {
	    super.formatAt(index, length, format, value);
	    this.optimize();
	  }
	  insertAt(index, value, def) {
	    if (index >= this.length()) {
	      if (def == null || this.scroll.query(value, Scope.BLOCK) == null) {
	        const blot = this.scroll.create(this.statics.defaultChild.blotName);
	        this.appendChild(blot);
	        if (def == null && value.endsWith('\n')) {
	          blot.insertAt(0, value.slice(0, -1), def);
	        } else {
	          blot.insertAt(0, value, def);
	        }
	      } else {
	        const embed = this.scroll.create(value, def);
	        this.appendChild(embed);
	      }
	    } else {
	      super.insertAt(index, value, def);
	    }
	    this.optimize();
	  }
	  insertBefore(blot, ref) {
	    if (blot.statics.scope === Scope.INLINE_BLOT) {
	      const wrapper = this.scroll.create(this.statics.defaultChild.blotName);
	      wrapper.appendChild(blot);
	      super.insertBefore(wrapper, ref);
	    } else {
	      super.insertBefore(blot, ref);
	    }
	  }
	  insertContents(index, delta) {
	    const renderBlocks = this.deltaToRenderBlocks(delta.concat(new Delta().insert('\n')));
	    const last = renderBlocks.pop();
	    if (last == null) return;
	    this.batchStart();
	    const first = renderBlocks.shift();
	    if (first) {
	      const shouldInsertNewlineChar = first.type === 'block' && (first.delta.length() === 0 || !this.descendant(BlockEmbed, index)[0] && index < this.length());
	      const delta = first.type === 'block' ? first.delta : new Delta().insert({
	        [first.key]: first.value
	      });
	      insertInlineContents(this, index, delta);
	      const newlineCharLength = first.type === 'block' ? 1 : 0;
	      const lineEndIndex = index + delta.length() + newlineCharLength;
	      if (shouldInsertNewlineChar) {
	        this.insertAt(lineEndIndex - 1, '\n');
	      }
	      const formats = bubbleFormats(this.line(index)[0]);
	      const attributes = DeltaExports.AttributeMap.diff(formats, first.attributes) || {};
	      Object.keys(attributes).forEach(name => {
	        this.formatAt(lineEndIndex - 1, 1, name, attributes[name]);
	      });
	      index = lineEndIndex;
	    }
	    let [refBlot, refBlotOffset] = this.children.find(index);
	    if (renderBlocks.length) {
	      if (refBlot) {
	        refBlot = refBlot.split(refBlotOffset);
	        refBlotOffset = 0;
	      }
	      renderBlocks.forEach(renderBlock => {
	        if (renderBlock.type === 'block') {
	          const block = this.createBlock(renderBlock.attributes, refBlot || undefined);
	          insertInlineContents(block, 0, renderBlock.delta);
	        } else {
	          const blockEmbed = this.create(renderBlock.key, renderBlock.value);
	          this.insertBefore(blockEmbed, refBlot || undefined);
	          Object.keys(renderBlock.attributes).forEach(name => {
	            blockEmbed.format(name, renderBlock.attributes[name]);
	          });
	        }
	      });
	    }
	    if (last.type === 'block' && last.delta.length()) {
	      const offset = refBlot ? refBlot.offset(refBlot.scroll) + refBlotOffset : this.length();
	      insertInlineContents(this, offset, last.delta);
	    }
	    this.batchEnd();
	    this.optimize();
	  }
	  isEnabled() {
	    return this.domNode.getAttribute('contenteditable') === 'true';
	  }
	  leaf(index) {
	    const last = this.path(index).pop();
	    if (!last) {
	      return [null, -1];
	    }
	    const [blot, offset] = last;
	    return blot instanceof LeafBlot$1 ? [blot, offset] : [null, -1];
	  }
	  line(index) {
	    if (index === this.length()) {
	      return this.line(index - 1);
	    }
	    // @ts-expect-error TODO: make descendant() generic
	    return this.descendant(isLine$1, index);
	  }
	  lines() {
	    let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;
	    const getLines = (blot, blotIndex, blotLength) => {
	      let lines = [];
	      let lengthLeft = blotLength;
	      blot.children.forEachAt(blotIndex, blotLength, (child, childIndex, childLength) => {
	        if (isLine$1(child)) {
	          lines.push(child);
	        } else if (child instanceof ContainerBlot$1) {
	          lines = lines.concat(getLines(child, childIndex, lengthLeft));
	        }
	        lengthLeft -= childLength;
	      });
	      return lines;
	    };
	    return getLines(this, index, length);
	  }
	  optimize() {
	    let mutations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    if (this.batch) return;
	    super.optimize(mutations, context);
	    if (mutations.length > 0) {
	      this.emitter.emit(Emitter.events.SCROLL_OPTIMIZE, mutations, context);
	    }
	  }
	  path(index) {
	    return super.path(index).slice(1); // Exclude self
	  }
	  remove() {
	    // Never remove self
	  }
	  update(mutations) {
	    if (this.batch) {
	      if (Array.isArray(mutations)) {
	        this.batch = this.batch.concat(mutations);
	      }
	      return;
	    }
	    let source = Emitter.sources.USER;
	    if (typeof mutations === 'string') {
	      source = mutations;
	    }
	    if (!Array.isArray(mutations)) {
	      mutations = this.observer.takeRecords();
	    }
	    mutations = mutations.filter(_ref2 => {
	      let {
	        target
	      } = _ref2;
	      const blot = this.find(target, true);
	      return blot && !isUpdatable(blot);
	    });
	    if (mutations.length > 0) {
	      this.emitter.emit(Emitter.events.SCROLL_BEFORE_UPDATE, source, mutations);
	    }
	    super.update(mutations.concat([])); // pass copy
	    if (mutations.length > 0) {
	      this.emitter.emit(Emitter.events.SCROLL_UPDATE, source, mutations);
	    }
	  }
	  updateEmbedAt(index, key, change) {
	    // Currently it only supports top-level embeds (BlockEmbed).
	    // We can update `ParentBlot` in parchment to support inline embeds.
	    const [blot] = this.descendant(b => b instanceof BlockEmbed, index);
	    if (blot && blot.statics.blotName === key && isUpdatable(blot)) {
	      blot.updateContent(change);
	    }
	  }
	  handleDragStart(event) {
	    event.preventDefault();
	  }
	  deltaToRenderBlocks(delta) {
	    const renderBlocks = [];
	    let currentBlockDelta = new Delta();
	    delta.forEach(op => {
	      const insert = op?.insert;
	      if (!insert) return;
	      if (typeof insert === 'string') {
	        const splitted = insert.split('\n');
	        splitted.slice(0, -1).forEach(text => {
	          currentBlockDelta.insert(text, op.attributes);
	          renderBlocks.push({
	            type: 'block',
	            delta: currentBlockDelta,
	            attributes: op.attributes ?? {}
	          });
	          currentBlockDelta = new Delta();
	        });
	        const last = splitted[splitted.length - 1];
	        if (last) {
	          currentBlockDelta.insert(last, op.attributes);
	        }
	      } else {
	        const key = Object.keys(insert)[0];
	        if (!key) return;
	        if (this.query(key, Scope.INLINE)) {
	          currentBlockDelta.push(op);
	        } else {
	          if (currentBlockDelta.length()) {
	            renderBlocks.push({
	              type: 'block',
	              delta: currentBlockDelta,
	              attributes: {}
	            });
	          }
	          currentBlockDelta = new Delta();
	          renderBlocks.push({
	            type: 'blockEmbed',
	            key,
	            value: insert[key],
	            attributes: op.attributes ?? {}
	          });
	        }
	      }
	    });
	    if (currentBlockDelta.length()) {
	      renderBlocks.push({
	        type: 'block',
	        delta: currentBlockDelta,
	        attributes: {}
	      });
	    }
	    return renderBlocks;
	  }
	  createBlock(attributes, refBlot) {
	    let blotName;
	    const formats = {};
	    Object.entries(attributes).forEach(_ref3 => {
	      let [key, value] = _ref3;
	      const isBlockBlot = this.query(key, Scope.BLOCK & Scope.BLOT) != null;
	      if (isBlockBlot) {
	        blotName = key;
	      } else {
	        formats[key] = value;
	      }
	    });
	    const block = this.create(blotName || this.statics.defaultChild.blotName, blotName ? attributes[blotName] : undefined);
	    this.insertBefore(block, refBlot || undefined);
	    const length = block.length();
	    Object.entries(formats).forEach(_ref4 => {
	      let [key, value] = _ref4;
	      block.formatAt(0, length, key, value);
	    });
	    return block;
	  }
	}
	function insertInlineContents(parent, index, inlineContents) {
	  inlineContents.reduce((index, op) => {
	    const length = DeltaExports.Op.length(op);
	    let attributes = op.attributes || {};
	    if (op.insert != null) {
	      if (typeof op.insert === 'string') {
	        const text = op.insert;
	        parent.insertAt(index, text);
	        const [leaf] = parent.descendant(LeafBlot$1, index);
	        const formats = bubbleFormats(leaf);
	        attributes = DeltaExports.AttributeMap.diff(formats, attributes) || {};
	      } else if (typeof op.insert === 'object') {
	        const key = Object.keys(op.insert)[0]; // There should only be one key
	        if (key == null) return index;
	        parent.insertAt(index, key, op.insert[key]);
	        const isInlineEmbed = parent.scroll.query(key, Scope.INLINE) != null;
	        if (isInlineEmbed) {
	          const [leaf] = parent.descendant(LeafBlot$1, index);
	          const formats = bubbleFormats(leaf);
	          attributes = DeltaExports.AttributeMap.diff(formats, attributes) || {};
	        }
	      }
	    }
	    Object.keys(attributes).forEach(key => {
	      parent.formatAt(index, length, key, attributes[key]);
	    });
	    return index + length;
	  }, index);
	}

	const config$2 = {
	  scope: Scope.BLOCK,
	  whitelist: ['right', 'center', 'justify']
	};
	const AlignAttribute = new Attributor('align', 'align', config$2);
	const AlignClass = new ClassAttributor$1('align', 'ql-align', config$2);
	const AlignStyle = new StyleAttributor$1('align', 'text-align', config$2);

	class ColorAttributor extends StyleAttributor$1 {
	  value(domNode) {
	    let value = super.value(domNode);
	    if (!value.startsWith('rgb(')) return value;
	    value = value.replace(/^[^\d]+/, '').replace(/[^\d]+$/, '');
	    const hex = value.split(',').map(component => `00${parseInt(component, 10).toString(16)}`.slice(-2)).join('');
	    return `#${hex}`;
	  }
	}
	const ColorClass = new ClassAttributor$1('color', 'ql-color', {
	  scope: Scope.INLINE
	});
	const ColorStyle = new ColorAttributor('color', 'color', {
	  scope: Scope.INLINE
	});

	const BackgroundClass = new ClassAttributor$1('background', 'ql-bg', {
	  scope: Scope.INLINE
	});
	const BackgroundStyle = new ColorAttributor('background', 'background-color', {
	  scope: Scope.INLINE
	});

	class CodeBlockContainer extends Container {
	  static create(value) {
	    const domNode = super.create(value);
	    domNode.setAttribute('spellcheck', 'false');
	    return domNode;
	  }
	  code(index, length) {
	    return this.children
	    // @ts-expect-error
	    .map(child => child.length() <= 1 ? '' : child.domNode.innerText).join('\n').slice(index, index + length);
	  }
	  html(index, length) {
	    // `\n`s are needed in order to support empty lines at the beginning and the end.
	    // https://html.spec.whatwg.org/multipage/syntax.html#element-restrictions
	    return `<pre>\n${escapeText(this.code(index, length))}\n</pre>`;
	  }
	}
	class CodeBlock extends Block {
	  static TAB = '  ';
	  static register() {
	    Quill.register(CodeBlockContainer);
	  }
	}
	class Code extends Inline {}
	Code.blotName = 'code';
	Code.tagName = 'CODE';
	CodeBlock.blotName = 'code-block';
	CodeBlock.className = 'ql-code-block';
	CodeBlock.tagName = 'DIV';
	CodeBlockContainer.blotName = 'code-block-container';
	CodeBlockContainer.className = 'ql-code-block-container';
	CodeBlockContainer.tagName = 'DIV';
	CodeBlockContainer.allowedChildren = [CodeBlock];
	CodeBlock.allowedChildren = [Text$1, Break, Cursor];
	CodeBlock.requiredContainer = CodeBlockContainer;

	const config$1 = {
	  scope: Scope.BLOCK,
	  whitelist: ['rtl']
	};
	const DirectionAttribute = new Attributor('direction', 'dir', config$1);
	const DirectionClass = new ClassAttributor$1('direction', 'ql-direction', config$1);
	const DirectionStyle = new StyleAttributor$1('direction', 'direction', config$1);

	const config = {
	  scope: Scope.INLINE,
	  whitelist: ['serif', 'monospace']
	};
	const FontClass = new ClassAttributor$1('font', 'ql-font', config);
	class FontStyleAttributor extends StyleAttributor$1 {
	  value(node) {
	    return super.value(node).replace(/["']/g, '');
	  }
	}
	const FontStyle = new FontStyleAttributor('font', 'font-family', config);

	const SizeClass = new ClassAttributor$1('size', 'ql-size', {
	  scope: Scope.INLINE,
	  whitelist: ['small', 'large', 'huge']
	});
	const SizeStyle = new StyleAttributor$1('size', 'font-size', {
	  scope: Scope.INLINE,
	  whitelist: ['10px', '18px', '32px']
	});

	const debug$2 = namespace('quill:keyboard');
	const SHORTKEY = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey';
	class Keyboard extends Module {
	  static match(evt, binding) {
	    if (['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].some(key => {
	      return !!binding[key] !== evt[key] && binding[key] !== null;
	    })) {
	      return false;
	    }
	    return binding.key === evt.key || binding.key === evt.which;
	  }
	  constructor(quill, options) {
	    super(quill, options);
	    this.bindings = {};
	    // @ts-expect-error Fix me later
	    Object.keys(this.options.bindings).forEach(name => {
	      // @ts-expect-error Fix me later
	      if (this.options.bindings[name]) {
	        // @ts-expect-error Fix me later
	        this.addBinding(this.options.bindings[name]);
	      }
	    });
	    this.addBinding({
	      key: 'Enter',
	      shiftKey: null
	    }, this.handleEnter);
	    this.addBinding({
	      key: 'Enter',
	      metaKey: null,
	      ctrlKey: null,
	      altKey: null
	    }, () => {});
	    if (/Firefox/i.test(navigator.userAgent)) {
	      // Need to handle delete and backspace for Firefox in the general case #1171
	      this.addBinding({
	        key: 'Backspace'
	      }, {
	        collapsed: true
	      }, this.handleBackspace);
	      this.addBinding({
	        key: 'Delete'
	      }, {
	        collapsed: true
	      }, this.handleDelete);
	    } else {
	      this.addBinding({
	        key: 'Backspace'
	      }, {
	        collapsed: true,
	        prefix: /^.?$/
	      }, this.handleBackspace);
	      this.addBinding({
	        key: 'Delete'
	      }, {
	        collapsed: true,
	        suffix: /^.?$/
	      }, this.handleDelete);
	    }
	    this.addBinding({
	      key: 'Backspace'
	    }, {
	      collapsed: false
	    }, this.handleDeleteRange);
	    this.addBinding({
	      key: 'Delete'
	    }, {
	      collapsed: false
	    }, this.handleDeleteRange);
	    this.addBinding({
	      key: 'Backspace',
	      altKey: null,
	      ctrlKey: null,
	      metaKey: null,
	      shiftKey: null
	    }, {
	      collapsed: true,
	      offset: 0
	    }, this.handleBackspace);
	    this.listen();
	  }
	  addBinding(keyBinding) {
	    let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    let handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    const binding = normalize$2(keyBinding);
	    if (binding == null) {
	      debug$2.warn('Attempted to add invalid keyboard binding', binding);
	      return;
	    }
	    if (typeof context === 'function') {
	      context = {
	        handler: context
	      };
	    }
	    if (typeof handler === 'function') {
	      handler = {
	        handler
	      };
	    }
	    const keys = Array.isArray(binding.key) ? binding.key : [binding.key];
	    keys.forEach(key => {
	      const singleBinding = {
	        ...binding,
	        key,
	        ...context,
	        ...handler
	      };
	      this.bindings[singleBinding.key] = this.bindings[singleBinding.key] || [];
	      this.bindings[singleBinding.key].push(singleBinding);
	    });
	  }
	  listen() {
	    this.quill.root.addEventListener('keydown', evt => {
	      if (evt.defaultPrevented || evt.isComposing) return;

	      // evt.isComposing is false when pressing Enter/Backspace when composing in Safari
	      // https://bugs.webkit.org/show_bug.cgi?id=165004
	      const isComposing = evt.keyCode === 229 && (evt.key === 'Enter' || evt.key === 'Backspace');
	      if (isComposing) return;
	      const bindings = (this.bindings[evt.key] || []).concat(this.bindings[evt.which] || []);
	      const matches = bindings.filter(binding => Keyboard.match(evt, binding));
	      if (matches.length === 0) return;
	      // @ts-expect-error
	      const blot = Quill.find(evt.target, true);
	      if (blot && blot.scroll !== this.quill.scroll) return;
	      const range = this.quill.getSelection();
	      if (range == null || !this.quill.hasFocus()) return;
	      const [line, offset] = this.quill.getLine(range.index);
	      const [leafStart, offsetStart] = this.quill.getLeaf(range.index);
	      const [leafEnd, offsetEnd] = range.length === 0 ? [leafStart, offsetStart] : this.quill.getLeaf(range.index + range.length);
	      const prefixText = leafStart instanceof TextBlot$1 ? leafStart.value().slice(0, offsetStart) : '';
	      const suffixText = leafEnd instanceof TextBlot$1 ? leafEnd.value().slice(offsetEnd) : '';
	      const curContext = {
	        collapsed: range.length === 0,
	        // @ts-expect-error Fix me later
	        empty: range.length === 0 && line.length() <= 1,
	        format: this.quill.getFormat(range),
	        line,
	        offset,
	        prefix: prefixText,
	        suffix: suffixText,
	        event: evt
	      };
	      const prevented = matches.some(binding => {
	        if (binding.collapsed != null && binding.collapsed !== curContext.collapsed) {
	          return false;
	        }
	        if (binding.empty != null && binding.empty !== curContext.empty) {
	          return false;
	        }
	        if (binding.offset != null && binding.offset !== curContext.offset) {
	          return false;
	        }
	        if (Array.isArray(binding.format)) {
	          // any format is present
	          if (binding.format.every(name => curContext.format[name] == null)) {
	            return false;
	          }
	        } else if (typeof binding.format === 'object') {
	          // all formats must match
	          if (!Object.keys(binding.format).every(name => {
	            // @ts-expect-error Fix me later
	            if (binding.format[name] === true) return curContext.format[name] != null;
	            // @ts-expect-error Fix me later
	            if (binding.format[name] === false) return curContext.format[name] == null;
	            // @ts-expect-error Fix me later
	            return isEqual$1(binding.format[name], curContext.format[name]);
	          })) {
	            return false;
	          }
	        }
	        if (binding.prefix != null && !binding.prefix.test(curContext.prefix)) {
	          return false;
	        }
	        if (binding.suffix != null && !binding.suffix.test(curContext.suffix)) {
	          return false;
	        }
	        // @ts-expect-error Fix me later
	        return binding.handler.call(this, range, curContext, binding) !== true;
	      });
	      if (prevented) {
	        evt.preventDefault();
	      }
	    });
	  }
	  handleBackspace(range, context) {
	    // Check for astral symbols
	    const length = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(context.prefix) ? 2 : 1;
	    if (range.index === 0 || this.quill.getLength() <= 1) return;
	    let formats = {};
	    const [line] = this.quill.getLine(range.index);
	    let delta = new Delta().retain(range.index - length).delete(length);
	    if (context.offset === 0) {
	      // Always deleting newline here, length always 1
	      const [prev] = this.quill.getLine(range.index - 1);
	      if (prev) {
	        const isPrevLineEmpty = prev.statics.blotName === 'block' && prev.length() <= 1;
	        if (!isPrevLineEmpty) {
	          // @ts-expect-error Fix me later
	          const curFormats = line.formats();
	          const prevFormats = this.quill.getFormat(range.index - 1, 1);
	          formats = DeltaExports.AttributeMap.diff(curFormats, prevFormats) || {};
	          if (Object.keys(formats).length > 0) {
	            // line.length() - 1 targets \n in line, another -1 for newline being deleted
	            const formatDelta = new Delta()
	            // @ts-expect-error Fix me later
	            .retain(range.index + line.length() - 2).retain(1, formats);
	            delta = delta.compose(formatDelta);
	          }
	        }
	      }
	    }
	    this.quill.updateContents(delta, Quill.sources.USER);
	    this.quill.focus();
	  }
	  handleDelete(range, context) {
	    // Check for astral symbols
	    const length = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(context.suffix) ? 2 : 1;
	    if (range.index >= this.quill.getLength() - length) return;
	    let formats = {};
	    const [line] = this.quill.getLine(range.index);
	    let delta = new Delta().retain(range.index).delete(length);
	    // @ts-expect-error Fix me later
	    if (context.offset >= line.length() - 1) {
	      const [next] = this.quill.getLine(range.index + 1);
	      if (next) {
	        // @ts-expect-error Fix me later
	        const curFormats = line.formats();
	        const nextFormats = this.quill.getFormat(range.index, 1);
	        formats = DeltaExports.AttributeMap.diff(curFormats, nextFormats) || {};
	        if (Object.keys(formats).length > 0) {
	          delta = delta.retain(next.length() - 1).retain(1, formats);
	        }
	      }
	    }
	    this.quill.updateContents(delta, Quill.sources.USER);
	    this.quill.focus();
	  }
	  handleDeleteRange(range) {
	    deleteRange({
	      range,
	      quill: this.quill
	    });
	    this.quill.focus();
	  }
	  handleEnter(range, context) {
	    const lineFormats = Object.keys(context.format).reduce((formats, format) => {
	      if (this.quill.scroll.query(format, Scope.BLOCK) && !Array.isArray(context.format[format])) {
	        formats[format] = context.format[format];
	      }
	      return formats;
	    }, {});
	    const delta = new Delta().retain(range.index).delete(range.length).insert('\n', lineFormats);
	    this.quill.updateContents(delta, Quill.sources.USER);
	    this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
	    this.quill.focus();
	  }
	}
	const defaultOptions = {
	  bindings: {
	    bold: makeFormatHandler('bold'),
	    italic: makeFormatHandler('italic'),
	    underline: makeFormatHandler('underline'),
	    indent: {
	      // highlight tab or tab at beginning of list, indent or blockquote
	      key: 'Tab',
	      format: ['blockquote', 'indent', 'list'],
	      handler(range, context) {
	        if (context.collapsed && context.offset !== 0) return true;
	        this.quill.format('indent', '+1', Quill.sources.USER);
	        return false;
	      }
	    },
	    outdent: {
	      key: 'Tab',
	      shiftKey: true,
	      format: ['blockquote', 'indent', 'list'],
	      // highlight tab or tab at beginning of list, indent or blockquote
	      handler(range, context) {
	        if (context.collapsed && context.offset !== 0) return true;
	        this.quill.format('indent', '-1', Quill.sources.USER);
	        return false;
	      }
	    },
	    'outdent backspace': {
	      key: 'Backspace',
	      collapsed: true,
	      shiftKey: null,
	      metaKey: null,
	      ctrlKey: null,
	      altKey: null,
	      format: ['indent', 'list'],
	      offset: 0,
	      handler(range, context) {
	        if (context.format.indent != null) {
	          this.quill.format('indent', '-1', Quill.sources.USER);
	        } else if (context.format.list != null) {
	          this.quill.format('list', false, Quill.sources.USER);
	        }
	      }
	    },
	    'indent code-block': makeCodeBlockHandler(true),
	    'outdent code-block': makeCodeBlockHandler(false),
	    'remove tab': {
	      key: 'Tab',
	      shiftKey: true,
	      collapsed: true,
	      prefix: /\t$/,
	      handler(range) {
	        this.quill.deleteText(range.index - 1, 1, Quill.sources.USER);
	      }
	    },
	    tab: {
	      key: 'Tab',
	      handler(range, context) {
	        if (context.format.table) return true;
	        this.quill.history.cutoff();
	        const delta = new Delta().retain(range.index).delete(range.length).insert('\t');
	        this.quill.updateContents(delta, Quill.sources.USER);
	        this.quill.history.cutoff();
	        this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
	        return false;
	      }
	    },
	    'blockquote empty enter': {
	      key: 'Enter',
	      collapsed: true,
	      format: ['blockquote'],
	      empty: true,
	      handler() {
	        this.quill.format('blockquote', false, Quill.sources.USER);
	      }
	    },
	    'list empty enter': {
	      key: 'Enter',
	      collapsed: true,
	      format: ['list'],
	      empty: true,
	      handler(range, context) {
	        const formats = {
	          list: false
	        };
	        if (context.format.indent) {
	          formats.indent = false;
	        }
	        this.quill.formatLine(range.index, range.length, formats, Quill.sources.USER);
	      }
	    },
	    'checklist enter': {
	      key: 'Enter',
	      collapsed: true,
	      format: {
	        list: 'checked'
	      },
	      handler(range) {
	        const [line, offset] = this.quill.getLine(range.index);
	        const formats = {
	          // @ts-expect-error Fix me later
	          ...line.formats(),
	          list: 'checked'
	        };
	        const delta = new Delta().retain(range.index).insert('\n', formats)
	        // @ts-expect-error Fix me later
	        .retain(line.length() - offset - 1).retain(1, {
	          list: 'unchecked'
	        });
	        this.quill.updateContents(delta, Quill.sources.USER);
	        this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
	        this.quill.scrollSelectionIntoView();
	      }
	    },
	    'header enter': {
	      key: 'Enter',
	      collapsed: true,
	      format: ['header'],
	      suffix: /^$/,
	      handler(range, context) {
	        const [line, offset] = this.quill.getLine(range.index);
	        const delta = new Delta().retain(range.index).insert('\n', context.format)
	        // @ts-expect-error Fix me later
	        .retain(line.length() - offset - 1).retain(1, {
	          header: null
	        });
	        this.quill.updateContents(delta, Quill.sources.USER);
	        this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
	        this.quill.scrollSelectionIntoView();
	      }
	    },
	    'table backspace': {
	      key: 'Backspace',
	      format: ['table'],
	      collapsed: true,
	      offset: 0,
	      handler() {}
	    },
	    'table delete': {
	      key: 'Delete',
	      format: ['table'],
	      collapsed: true,
	      suffix: /^$/,
	      handler() {}
	    },
	    'table enter': {
	      key: 'Enter',
	      shiftKey: null,
	      format: ['table'],
	      handler(range) {
	        const module = this.quill.getModule('table');
	        if (module) {
	          // @ts-expect-error
	          const [table, row, cell, offset] = module.getTable(range);
	          const shift = tableSide(table, row, cell, offset);
	          if (shift == null) return;
	          let index = table.offset();
	          if (shift < 0) {
	            const delta = new Delta().retain(index).insert('\n');
	            this.quill.updateContents(delta, Quill.sources.USER);
	            this.quill.setSelection(range.index + 1, range.length, Quill.sources.SILENT);
	          } else if (shift > 0) {
	            index += table.length();
	            const delta = new Delta().retain(index).insert('\n');
	            this.quill.updateContents(delta, Quill.sources.USER);
	            this.quill.setSelection(index, Quill.sources.USER);
	          }
	        }
	      }
	    },
	    'table tab': {
	      key: 'Tab',
	      shiftKey: null,
	      format: ['table'],
	      handler(range, context) {
	        const {
	          event,
	          line: cell
	        } = context;
	        const offset = cell.offset(this.quill.scroll);
	        if (event.shiftKey) {
	          this.quill.setSelection(offset - 1, Quill.sources.USER);
	        } else {
	          this.quill.setSelection(offset + cell.length(), Quill.sources.USER);
	        }
	      }
	    },
	    'list autofill': {
	      key: ' ',
	      shiftKey: null,
	      collapsed: true,
	      format: {
	        'code-block': false,
	        blockquote: false,
	        table: false
	      },
	      prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
	      handler(range, context) {
	        if (this.quill.scroll.query('list') == null) return true;
	        const {
	          length
	        } = context.prefix;
	        const [line, offset] = this.quill.getLine(range.index);
	        if (offset > length) return true;
	        let value;
	        switch (context.prefix.trim()) {
	          case '[]':
	          case '[ ]':
	            value = 'unchecked';
	            break;
	          case '[x]':
	            value = 'checked';
	            break;
	          case '-':
	          case '*':
	            value = 'bullet';
	            break;
	          default:
	            value = 'ordered';
	        }
	        this.quill.insertText(range.index, ' ', Quill.sources.USER);
	        this.quill.history.cutoff();
	        const delta = new Delta().retain(range.index - offset).delete(length + 1)
	        // @ts-expect-error Fix me later
	        .retain(line.length() - 2 - offset).retain(1, {
	          list: value
	        });
	        this.quill.updateContents(delta, Quill.sources.USER);
	        this.quill.history.cutoff();
	        this.quill.setSelection(range.index - length, Quill.sources.SILENT);
	        return false;
	      }
	    },
	    'code exit': {
	      key: 'Enter',
	      collapsed: true,
	      format: ['code-block'],
	      prefix: /^$/,
	      suffix: /^\s*$/,
	      handler(range) {
	        const [line, offset] = this.quill.getLine(range.index);
	        let numLines = 2;
	        let cur = line;
	        while (cur != null && cur.length() <= 1 && cur.formats()['code-block']) {
	          // @ts-expect-error
	          cur = cur.prev;
	          numLines -= 1;
	          // Requisite prev lines are empty
	          if (numLines <= 0) {
	            const delta = new Delta()
	            // @ts-expect-error Fix me later
	            .retain(range.index + line.length() - offset - 2).retain(1, {
	              'code-block': null
	            }).delete(1);
	            this.quill.updateContents(delta, Quill.sources.USER);
	            this.quill.setSelection(range.index - 1, Quill.sources.SILENT);
	            return false;
	          }
	        }
	        return true;
	      }
	    },
	    'embed left': makeEmbedArrowHandler('ArrowLeft', false),
	    'embed left shift': makeEmbedArrowHandler('ArrowLeft', true),
	    'embed right': makeEmbedArrowHandler('ArrowRight', false),
	    'embed right shift': makeEmbedArrowHandler('ArrowRight', true),
	    'table down': makeTableArrowHandler(false),
	    'table up': makeTableArrowHandler(true)
	  }
	};
	Keyboard.DEFAULTS = defaultOptions;
	function makeCodeBlockHandler(indent) {
	  return {
	    key: 'Tab',
	    shiftKey: !indent,
	    format: {
	      'code-block': true
	    },
	    handler(range, _ref) {
	      let {
	        event
	      } = _ref;
	      const CodeBlock = this.quill.scroll.query('code-block');
	      // @ts-expect-error
	      const {
	        TAB
	      } = CodeBlock;
	      if (range.length === 0 && !event.shiftKey) {
	        this.quill.insertText(range.index, TAB, Quill.sources.USER);
	        this.quill.setSelection(range.index + TAB.length, Quill.sources.SILENT);
	        return;
	      }
	      const lines = range.length === 0 ? this.quill.getLines(range.index, 1) : this.quill.getLines(range);
	      let {
	        index,
	        length
	      } = range;
	      lines.forEach((line, i) => {
	        if (indent) {
	          line.insertAt(0, TAB);
	          if (i === 0) {
	            index += TAB.length;
	          } else {
	            length += TAB.length;
	          }
	          // @ts-expect-error Fix me later
	        } else if (line.domNode.textContent.startsWith(TAB)) {
	          line.deleteAt(0, TAB.length);
	          if (i === 0) {
	            index -= TAB.length;
	          } else {
	            length -= TAB.length;
	          }
	        }
	      });
	      this.quill.update(Quill.sources.USER);
	      this.quill.setSelection(index, length, Quill.sources.SILENT);
	    }
	  };
	}
	function makeEmbedArrowHandler(key, shiftKey) {
	  const where = key === 'ArrowLeft' ? 'prefix' : 'suffix';
	  return {
	    key,
	    shiftKey,
	    altKey: null,
	    [where]: /^$/,
	    handler(range) {
	      let {
	        index
	      } = range;
	      if (key === 'ArrowRight') {
	        index += range.length + 1;
	      }
	      const [leaf] = this.quill.getLeaf(index);
	      if (!(leaf instanceof EmbedBlot$1)) return true;
	      if (key === 'ArrowLeft') {
	        if (shiftKey) {
	          this.quill.setSelection(range.index - 1, range.length + 1, Quill.sources.USER);
	        } else {
	          this.quill.setSelection(range.index - 1, Quill.sources.USER);
	        }
	      } else if (shiftKey) {
	        this.quill.setSelection(range.index, range.length + 1, Quill.sources.USER);
	      } else {
	        this.quill.setSelection(range.index + range.length + 1, Quill.sources.USER);
	      }
	      return false;
	    }
	  };
	}
	function makeFormatHandler(format) {
	  return {
	    key: format[0],
	    shortKey: true,
	    handler(range, context) {
	      this.quill.format(format, !context.format[format], Quill.sources.USER);
	    }
	  };
	}
	function makeTableArrowHandler(up) {
	  return {
	    key: up ? 'ArrowUp' : 'ArrowDown',
	    collapsed: true,
	    format: ['table'],
	    handler(range, context) {
	      // TODO move to table module
	      const key = up ? 'prev' : 'next';
	      const cell = context.line;
	      const targetRow = cell.parent[key];
	      if (targetRow != null) {
	        if (targetRow.statics.blotName === 'table-row') {
	          // @ts-expect-error
	          let targetCell = targetRow.children.head;
	          let cur = cell;
	          while (cur.prev != null) {
	            // @ts-expect-error
	            cur = cur.prev;
	            targetCell = targetCell.next;
	          }
	          const index = targetCell.offset(this.quill.scroll) + Math.min(context.offset, targetCell.length() - 1);
	          this.quill.setSelection(index, 0, Quill.sources.USER);
	        }
	      } else {
	        // @ts-expect-error
	        const targetLine = cell.table()[key];
	        if (targetLine != null) {
	          if (up) {
	            this.quill.setSelection(targetLine.offset(this.quill.scroll) + targetLine.length() - 1, 0, Quill.sources.USER);
	          } else {
	            this.quill.setSelection(targetLine.offset(this.quill.scroll), 0, Quill.sources.USER);
	          }
	        }
	      }
	      return false;
	    }
	  };
	}
	function normalize$2(binding) {
	  if (typeof binding === 'string' || typeof binding === 'number') {
	    binding = {
	      key: binding
	    };
	  } else if (typeof binding === 'object') {
	    binding = cloneDeep(binding);
	  } else {
	    return null;
	  }
	  if (binding.shortKey) {
	    binding[SHORTKEY] = binding.shortKey;
	    delete binding.shortKey;
	  }
	  return binding;
	}

	// TODO: Move into quill.ts or editor.ts
	function deleteRange(_ref2) {
	  let {
	    quill,
	    range
	  } = _ref2;
	  const lines = quill.getLines(range);
	  let formats = {};
	  if (lines.length > 1) {
	    const firstFormats = lines[0].formats();
	    const lastFormats = lines[lines.length - 1].formats();
	    formats = DeltaExports.AttributeMap.diff(lastFormats, firstFormats) || {};
	  }
	  quill.deleteText(range, Quill.sources.USER);
	  if (Object.keys(formats).length > 0) {
	    quill.formatLine(range.index, 1, formats, Quill.sources.USER);
	  }
	  quill.setSelection(range.index, Quill.sources.SILENT);
	}
	function tableSide(_table, row, cell, offset) {
	  if (row.prev == null && row.next == null) {
	    if (cell.prev == null && cell.next == null) {
	      return offset === 0 ? -1 : 1;
	    }
	    return cell.prev == null ? -1 : 1;
	  }
	  if (row.prev == null) {
	    return -1;
	  }
	  if (row.next == null) {
	    return 1;
	  }
	  return null;
	}

	const normalWeightRegexp = /font-weight:\s*normal/;
	const blockTagNames = ['P', 'OL', 'UL'];
	const isBlockElement = element => {
	  return element && blockTagNames.includes(element.tagName);
	};
	const normalizeEmptyLines = doc => {
	  Array.from(doc.querySelectorAll('br')).filter(br => isBlockElement(br.previousElementSibling) && isBlockElement(br.nextElementSibling)).forEach(br => {
	    br.parentNode?.removeChild(br);
	  });
	};
	const normalizeFontWeight = doc => {
	  Array.from(doc.querySelectorAll('b[style*="font-weight"]')).filter(node => node.getAttribute('style')?.match(normalWeightRegexp)).forEach(node => {
	    const fragment = doc.createDocumentFragment();
	    fragment.append(...node.childNodes);
	    node.parentNode?.replaceChild(fragment, node);
	  });
	};
	function normalize$1(doc) {
	  if (doc.querySelector('[id^="docs-internal-guid-"]')) {
	    normalizeFontWeight(doc);
	    normalizeEmptyLines(doc);
	  }
	}

	const ignoreRegexp = /\bmso-list:[^;]*ignore/i;
	const idRegexp = /\bmso-list:[^;]*\bl(\d+)/i;
	const indentRegexp = /\bmso-list:[^;]*\blevel(\d+)/i;
	const parseListItem = (element, html) => {
	  const style = element.getAttribute('style');
	  const idMatch = style?.match(idRegexp);
	  if (!idMatch) {
	    return null;
	  }
	  const id = Number(idMatch[1]);
	  const indentMatch = style?.match(indentRegexp);
	  const indent = indentMatch ? Number(indentMatch[1]) : 1;
	  const typeRegexp = new RegExp(`@list l${id}:level${indent}\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)`, 'i');
	  const typeMatch = html.match(typeRegexp);
	  const type = typeMatch && typeMatch[1] === 'bullet' ? 'bullet' : 'ordered';
	  return {
	    id,
	    indent,
	    type,
	    element
	  };
	};

	// list items are represented as `p` tags with styles like `mso-list: l0 level1` where:
	// 1. "0" in "l0" means the list item id;
	// 2. "1" in "level1" means the indent level, starting from 1.
	const normalizeListItem = doc => {
	  const msoList = Array.from(doc.querySelectorAll('[style*=mso-list]'));
	  const ignored = [];
	  const others = [];
	  msoList.forEach(node => {
	    const shouldIgnore = (node.getAttribute('style') || '').match(ignoreRegexp);
	    if (shouldIgnore) {
	      ignored.push(node);
	    } else {
	      others.push(node);
	    }
	  });

	  // Each list item contains a marker wrapped with "mso-list: Ignore".
	  ignored.forEach(node => node.parentNode?.removeChild(node));

	  // The list stype is not defined inline with the tag, instead, it's in the
	  // style tag so we need to pass the html as a string.
	  const html = doc.documentElement.innerHTML;
	  const listItems = others.map(element => parseListItem(element, html)).filter(parsed => parsed);
	  while (listItems.length) {
	    const childListItems = [];
	    let current = listItems.shift();
	    // Group continuous items into the same group (aka "ul")
	    while (current) {
	      childListItems.push(current);
	      current = listItems.length && listItems[0]?.element === current.element.nextElementSibling &&
	      // Different id means the next item doesn't belong to this group.
	      listItems[0].id === current.id ? listItems.shift() : null;
	    }
	    const ul = document.createElement('ul');
	    childListItems.forEach(listItem => {
	      const li = document.createElement('li');
	      li.setAttribute('data-list', listItem.type);
	      if (listItem.indent > 1) {
	        li.setAttribute('class', `ql-indent-${listItem.indent - 1}`);
	      }
	      li.innerHTML = listItem.element.innerHTML;
	      ul.appendChild(li);
	    });
	    const element = childListItems[0]?.element;
	    const {
	      parentNode
	    } = element ?? {};
	    if (element) {
	      parentNode?.replaceChild(ul, element);
	    }
	    childListItems.slice(1).forEach(_ref => {
	      let {
	        element: e
	      } = _ref;
	      parentNode?.removeChild(e);
	    });
	  }
	};
	function normalize(doc) {
	  if (doc.documentElement.getAttribute('xmlns:w') === 'urn:schemas-microsoft-com:office:word') {
	    normalizeListItem(doc);
	  }
	}

	const NORMALIZERS = [normalize, normalize$1];
	const normalizeExternalHTML = doc => {
	  if (doc.documentElement) {
	    NORMALIZERS.forEach(normalize => {
	      normalize(doc);
	    });
	  }
	};

	const debug$1 = namespace('quill:clipboard');
	const CLIPBOARD_CONFIG = [[Node.TEXT_NODE, matchText], [Node.TEXT_NODE, matchNewline], ['br', matchBreak], [Node.ELEMENT_NODE, matchNewline], [Node.ELEMENT_NODE, matchBlot], [Node.ELEMENT_NODE, matchAttributor], [Node.ELEMENT_NODE, matchStyles], ['li', matchIndent], ['ol, ul', matchList], ['pre', matchCodeBlock], ['tr', matchTable], ['b', createMatchAlias('bold')], ['i', createMatchAlias('italic')], ['strike', createMatchAlias('strike')], ['style', matchIgnore]];
	const ATTRIBUTE_ATTRIBUTORS = [AlignAttribute, DirectionAttribute].reduce((memo, attr) => {
	  memo[attr.keyName] = attr;
	  return memo;
	}, {});
	const STYLE_ATTRIBUTORS = [AlignStyle, BackgroundStyle, ColorStyle, DirectionStyle, FontStyle, SizeStyle].reduce((memo, attr) => {
	  memo[attr.keyName] = attr;
	  return memo;
	}, {});
	class Clipboard extends Module {
	  static DEFAULTS = {
	    matchers: []
	  };
	  constructor(quill, options) {
	    super(quill, options);
	    this.quill.root.addEventListener('copy', e => this.onCaptureCopy(e, false));
	    this.quill.root.addEventListener('cut', e => this.onCaptureCopy(e, true));
	    this.quill.root.addEventListener('paste', this.onCapturePaste.bind(this));
	    this.matchers = [];
	    CLIPBOARD_CONFIG.concat(this.options.matchers ?? []).forEach(_ref => {
	      let [selector, matcher] = _ref;
	      this.addMatcher(selector, matcher);
	    });
	  }
	  addMatcher(selector, matcher) {
	    this.matchers.push([selector, matcher]);
	  }
	  convert(_ref2) {
	    let {
	      html,
	      text
	    } = _ref2;
	    let formats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    if (formats[CodeBlock.blotName]) {
	      return new Delta().insert(text || '', {
	        [CodeBlock.blotName]: formats[CodeBlock.blotName]
	      });
	    }
	    if (!html) {
	      return new Delta().insert(text || '', formats);
	    }
	    const delta = this.convertHTML(html);
	    // Remove trailing newline
	    if (deltaEndsWith(delta, '\n') && (delta.ops[delta.ops.length - 1].attributes == null || formats.table)) {
	      return delta.compose(new Delta().retain(delta.length() - 1).delete(1));
	    }
	    return delta;
	  }
	  normalizeHTML(doc) {
	    normalizeExternalHTML(doc);
	  }
	  convertHTML(html) {
	    const doc = new DOMParser().parseFromString(html, 'text/html');
	    this.normalizeHTML(doc);
	    const container = doc.body;
	    const nodeMatches = new WeakMap();
	    const [elementMatchers, textMatchers] = this.prepareMatching(container, nodeMatches);
	    return traverse(this.quill.scroll, container, elementMatchers, textMatchers, nodeMatches);
	  }
	  dangerouslyPasteHTML(index, html) {
	    let source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Quill.sources.API;
	    if (typeof index === 'string') {
	      const delta = this.convert({
	        html: index,
	        text: ''
	      });
	      // @ts-expect-error
	      this.quill.setContents(delta, html);
	      this.quill.setSelection(0, Quill.sources.SILENT);
	    } else {
	      const paste = this.convert({
	        html,
	        text: ''
	      });
	      this.quill.updateContents(new Delta().retain(index).concat(paste), source);
	      this.quill.setSelection(index + paste.length(), Quill.sources.SILENT);
	    }
	  }
	  onCaptureCopy(e) {
	    let isCut = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    if (e.defaultPrevented) return;
	    e.preventDefault();
	    const [range] = this.quill.selection.getRange();
	    if (range == null) return;
	    const {
	      html,
	      text
	    } = this.onCopy(range, isCut);
	    e.clipboardData?.setData('text/plain', text);
	    e.clipboardData?.setData('text/html', html);
	    if (isCut) {
	      deleteRange({
	        range,
	        quill: this.quill
	      });
	    }
	  }

	  /*
	   * https://www.iana.org/assignments/media-types/text/uri-list
	   */
	  normalizeURIList(urlList) {
	    return urlList.split(/\r?\n/)
	    // Ignore all comments
	    .filter(url => url[0] !== '#').join('\n');
	  }
	  onCapturePaste(e) {
	    if (e.defaultPrevented || !this.quill.isEnabled()) return;
	    e.preventDefault();
	    const range = this.quill.getSelection(true);
	    if (range == null) return;
	    const html = e.clipboardData?.getData('text/html');
	    let text = e.clipboardData?.getData('text/plain');
	    if (!html && !text) {
	      const urlList = e.clipboardData?.getData('text/uri-list');
	      if (urlList) {
	        text = this.normalizeURIList(urlList);
	      }
	    }
	    const files = Array.from(e.clipboardData?.files || []);
	    if (!html && files.length > 0) {
	      this.quill.uploader.upload(range, files);
	      return;
	    }
	    if (html && files.length > 0) {
	      const doc = new DOMParser().parseFromString(html, 'text/html');
	      if (doc.body.childElementCount === 1 && doc.body.firstElementChild?.tagName === 'IMG') {
	        this.quill.uploader.upload(range, files);
	        return;
	      }
	    }
	    this.onPaste(range, {
	      html,
	      text
	    });
	  }
	  onCopy(range) {
	    const text = this.quill.getText(range);
	    const html = this.quill.getSemanticHTML(range);
	    return {
	      html,
	      text
	    };
	  }
	  onPaste(range, _ref3) {
	    let {
	      text,
	      html
	    } = _ref3;
	    const formats = this.quill.getFormat(range.index);
	    const pastedDelta = this.convert({
	      text,
	      html
	    }, formats);
	    debug$1.log('onPaste', pastedDelta, {
	      text,
	      html
	    });
	    const delta = new Delta().retain(range.index).delete(range.length).concat(pastedDelta);
	    this.quill.updateContents(delta, Quill.sources.USER);
	    // range.length contributes to delta.length()
	    this.quill.setSelection(delta.length() - range.length, Quill.sources.SILENT);
	    this.quill.scrollSelectionIntoView();
	  }
	  prepareMatching(container, nodeMatches) {
	    const elementMatchers = [];
	    const textMatchers = [];
	    this.matchers.forEach(pair => {
	      const [selector, matcher] = pair;
	      switch (selector) {
	        case Node.TEXT_NODE:
	          textMatchers.push(matcher);
	          break;
	        case Node.ELEMENT_NODE:
	          elementMatchers.push(matcher);
	          break;
	        default:
	          Array.from(container.querySelectorAll(selector)).forEach(node => {
	            if (nodeMatches.has(node)) {
	              const matches = nodeMatches.get(node);
	              matches?.push(matcher);
	            } else {
	              nodeMatches.set(node, [matcher]);
	            }
	          });
	          break;
	      }
	    });
	    return [elementMatchers, textMatchers];
	  }
	}
	function applyFormat(delta, format, value, scroll) {
	  if (!scroll.query(format)) {
	    return delta;
	  }
	  return delta.reduce((newDelta, op) => {
	    if (!op.insert) return newDelta;
	    if (op.attributes && op.attributes[format]) {
	      return newDelta.push(op);
	    }
	    const formats = value ? {
	      [format]: value
	    } : {};
	    return newDelta.insert(op.insert, {
	      ...formats,
	      ...op.attributes
	    });
	  }, new Delta());
	}
	function deltaEndsWith(delta, text) {
	  let endText = '';
	  for (let i = delta.ops.length - 1; i >= 0 && endText.length < text.length; --i // eslint-disable-line no-plusplus
	  ) {
	    const op = delta.ops[i];
	    if (typeof op.insert !== 'string') break;
	    endText = op.insert + endText;
	  }
	  return endText.slice(-1 * text.length) === text;
	}
	function isLine(node, scroll) {
	  if (!(node instanceof Element)) return false;
	  const match = scroll.query(node);
	  // @ts-expect-error
	  if (match && match.prototype instanceof EmbedBlot$1) return false;
	  return ['address', 'article', 'blockquote', 'canvas', 'dd', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'iframe', 'li', 'main', 'nav', 'ol', 'output', 'p', 'pre', 'section', 'table', 'td', 'tr', 'ul', 'video'].includes(node.tagName.toLowerCase());
	}
	function isBetweenInlineElements(node, scroll) {
	  return node.previousElementSibling && node.nextElementSibling && !isLine(node.previousElementSibling, scroll) && !isLine(node.nextElementSibling, scroll);
	}
	const preNodes = new WeakMap();
	function isPre(node) {
	  if (node == null) return false;
	  if (!preNodes.has(node)) {
	    // @ts-expect-error
	    if (node.tagName === 'PRE') {
	      preNodes.set(node, true);
	    } else {
	      preNodes.set(node, isPre(node.parentNode));
	    }
	  }
	  return preNodes.get(node);
	}
	function traverse(scroll, node, elementMatchers, textMatchers, nodeMatches) {
	  // Post-order
	  if (node.nodeType === node.TEXT_NODE) {
	    return textMatchers.reduce((delta, matcher) => {
	      return matcher(node, delta, scroll);
	    }, new Delta());
	  }
	  if (node.nodeType === node.ELEMENT_NODE) {
	    return Array.from(node.childNodes || []).reduce((delta, childNode) => {
	      let childrenDelta = traverse(scroll, childNode, elementMatchers, textMatchers, nodeMatches);
	      if (childNode.nodeType === node.ELEMENT_NODE) {
	        childrenDelta = elementMatchers.reduce((reducedDelta, matcher) => {
	          return matcher(childNode, reducedDelta, scroll);
	        }, childrenDelta);
	        childrenDelta = (nodeMatches.get(childNode) || []).reduce((reducedDelta, matcher) => {
	          return matcher(childNode, reducedDelta, scroll);
	        }, childrenDelta);
	      }
	      return delta.concat(childrenDelta);
	    }, new Delta());
	  }
	  return new Delta();
	}
	function createMatchAlias(format) {
	  return (_node, delta, scroll) => {
	    return applyFormat(delta, format, true, scroll);
	  };
	}
	function matchAttributor(node, delta, scroll) {
	  const attributes = Attributor.keys(node);
	  const classes = ClassAttributor$1.keys(node);
	  const styles = StyleAttributor$1.keys(node);
	  const formats = {};
	  attributes.concat(classes).concat(styles).forEach(name => {
	    let attr = scroll.query(name, Scope.ATTRIBUTE);
	    if (attr != null) {
	      formats[attr.attrName] = attr.value(node);
	      if (formats[attr.attrName]) return;
	    }
	    attr = ATTRIBUTE_ATTRIBUTORS[name];
	    if (attr != null && (attr.attrName === name || attr.keyName === name)) {
	      formats[attr.attrName] = attr.value(node) || undefined;
	    }
	    attr = STYLE_ATTRIBUTORS[name];
	    if (attr != null && (attr.attrName === name || attr.keyName === name)) {
	      attr = STYLE_ATTRIBUTORS[name];
	      formats[attr.attrName] = attr.value(node) || undefined;
	    }
	  });
	  return Object.entries(formats).reduce((newDelta, _ref4) => {
	    let [name, value] = _ref4;
	    return applyFormat(newDelta, name, value, scroll);
	  }, delta);
	}
	function matchBlot(node, delta, scroll) {
	  const match = scroll.query(node);
	  if (match == null) return delta;
	  // @ts-expect-error
	  if (match.prototype instanceof EmbedBlot$1) {
	    const embed = {};
	    // @ts-expect-error
	    const value = match.value(node);
	    if (value != null) {
	      // @ts-expect-error
	      embed[match.blotName] = value;
	      // @ts-expect-error
	      return new Delta().insert(embed, match.formats(node, scroll));
	    }
	  } else {
	    // @ts-expect-error
	    if (match.prototype instanceof BlockBlot$1 && !deltaEndsWith(delta, '\n')) {
	      delta.insert('\n');
	    }
	    if ('blotName' in match && 'formats' in match && typeof match.formats === 'function') {
	      return applyFormat(delta, match.blotName, match.formats(node, scroll), scroll);
	    }
	  }
	  return delta;
	}
	function matchBreak(node, delta) {
	  if (!deltaEndsWith(delta, '\n')) {
	    delta.insert('\n');
	  }
	  return delta;
	}
	function matchCodeBlock(node, delta, scroll) {
	  const match = scroll.query('code-block');
	  const language = match && 'formats' in match && typeof match.formats === 'function' ? match.formats(node, scroll) : true;
	  return applyFormat(delta, 'code-block', language, scroll);
	}
	function matchIgnore() {
	  return new Delta();
	}
	function matchIndent(node, delta, scroll) {
	  const match = scroll.query(node);
	  if (match == null ||
	  // @ts-expect-error
	  match.blotName !== 'list' || !deltaEndsWith(delta, '\n')) {
	    return delta;
	  }
	  let indent = -1;
	  let parent = node.parentNode;
	  while (parent != null) {
	    // @ts-expect-error
	    if (['OL', 'UL'].includes(parent.tagName)) {
	      indent += 1;
	    }
	    parent = parent.parentNode;
	  }
	  if (indent <= 0) return delta;
	  return delta.reduce((composed, op) => {
	    if (!op.insert) return composed;
	    if (op.attributes && typeof op.attributes.indent === 'number') {
	      return composed.push(op);
	    }
	    return composed.insert(op.insert, {
	      indent,
	      ...(op.attributes || {})
	    });
	  }, new Delta());
	}
	function matchList(node, delta, scroll) {
	  const element = node;
	  let list = element.tagName === 'OL' ? 'ordered' : 'bullet';
	  const checkedAttr = element.getAttribute('data-checked');
	  if (checkedAttr) {
	    list = checkedAttr === 'true' ? 'checked' : 'unchecked';
	  }
	  return applyFormat(delta, 'list', list, scroll);
	}
	function matchNewline(node, delta, scroll) {
	  if (!deltaEndsWith(delta, '\n')) {
	    if (isLine(node, scroll) && (node.childNodes.length > 0 || node instanceof HTMLParagraphElement)) {
	      return delta.insert('\n');
	    }
	    if (delta.length() > 0 && node.nextSibling) {
	      let nextSibling = node.nextSibling;
	      while (nextSibling != null) {
	        if (isLine(nextSibling, scroll)) {
	          return delta.insert('\n');
	        }
	        const match = scroll.query(nextSibling);
	        // @ts-expect-error
	        if (match && match.prototype instanceof BlockEmbed) {
	          return delta.insert('\n');
	        }
	        nextSibling = nextSibling.firstChild;
	      }
	    }
	  }
	  return delta;
	}
	function matchStyles(node, delta, scroll) {
	  const formats = {};
	  const style = node.style || {};
	  if (style.fontStyle === 'italic') {
	    formats.italic = true;
	  }
	  if (style.textDecoration === 'underline') {
	    formats.underline = true;
	  }
	  if (style.textDecoration === 'line-through') {
	    formats.strike = true;
	  }
	  if (style.fontWeight?.startsWith('bold') ||
	  // @ts-expect-error Fix me later
	  parseInt(style.fontWeight, 10) >= 700) {
	    formats.bold = true;
	  }
	  delta = Object.entries(formats).reduce((newDelta, _ref5) => {
	    let [name, value] = _ref5;
	    return applyFormat(newDelta, name, value, scroll);
	  }, delta);
	  // @ts-expect-error
	  if (parseFloat(style.textIndent || 0) > 0) {
	    // Could be 0.5in
	    return new Delta().insert('\t').concat(delta);
	  }
	  return delta;
	}
	function matchTable(node, delta, scroll) {
	  const table = node.parentElement?.tagName === 'TABLE' ? node.parentElement : node.parentElement?.parentElement;
	  if (table != null) {
	    const rows = Array.from(table.querySelectorAll('tr'));
	    const row = rows.indexOf(node) + 1;
	    return applyFormat(delta, 'table', row, scroll);
	  }
	  return delta;
	}
	function matchText(node, delta, scroll) {
	  // @ts-expect-error
	  let text = node.data;
	  // Word represents empty line with <o:p>&nbsp;</o:p>
	  if (node.parentElement?.tagName === 'O:P') {
	    return delta.insert(text.trim());
	  }
	  if (!isPre(node)) {
	    if (text.trim().length === 0 && text.includes('\n') && !isBetweenInlineElements(node, scroll)) {
	      return delta;
	    }
	    // convert all non-nbsp whitespace into regular space
	    text = text.replace(/[^\S\u00a0]/g, ' ');
	    // collapse consecutive spaces into one
	    text = text.replace(/ {2,}/g, ' ');
	    if (node.previousSibling == null && node.parentElement != null && isLine(node.parentElement, scroll) || node.previousSibling instanceof Element && isLine(node.previousSibling, scroll)) {
	      // block structure means we don't need leading space
	      text = text.replace(/^ /, '');
	    }
	    if (node.nextSibling == null && node.parentElement != null && isLine(node.parentElement, scroll) || node.nextSibling instanceof Element && isLine(node.nextSibling, scroll)) {
	      // block structure means we don't need trailing space
	      text = text.replace(/ $/, '');
	    }
	    // done removing whitespace and can normalize all to regular space
	    text = text.replaceAll('\u00a0', ' ');
	  }
	  return delta.insert(text);
	}

	class History extends Module {
	  static DEFAULTS = {
	    delay: 1000,
	    maxStack: 100,
	    userOnly: false
	  };
	  lastRecorded = 0;
	  ignoreChange = false;
	  stack = {
	    undo: [],
	    redo: []
	  };
	  currentRange = null;
	  constructor(quill, options) {
	    super(quill, options);
	    this.quill.on(Quill.events.EDITOR_CHANGE, (eventName, value, oldValue, source) => {
	      if (eventName === Quill.events.SELECTION_CHANGE) {
	        if (value && source !== Quill.sources.SILENT) {
	          this.currentRange = value;
	        }
	      } else if (eventName === Quill.events.TEXT_CHANGE) {
	        if (!this.ignoreChange) {
	          if (!this.options.userOnly || source === Quill.sources.USER) {
	            this.record(value, oldValue);
	          } else {
	            this.transform(value);
	          }
	        }
	        this.currentRange = transformRange(this.currentRange, value);
	      }
	    });
	    this.quill.keyboard.addBinding({
	      key: 'z',
	      shortKey: true
	    }, this.undo.bind(this));
	    this.quill.keyboard.addBinding({
	      key: ['z', 'Z'],
	      shortKey: true,
	      shiftKey: true
	    }, this.redo.bind(this));
	    if (/Win/i.test(navigator.platform)) {
	      this.quill.keyboard.addBinding({
	        key: 'y',
	        shortKey: true
	      }, this.redo.bind(this));
	    }
	    this.quill.root.addEventListener('beforeinput', event => {
	      if (event.inputType === 'historyUndo') {
	        this.undo();
	        event.preventDefault();
	      } else if (event.inputType === 'historyRedo') {
	        this.redo();
	        event.preventDefault();
	      }
	    });
	  }
	  change(source, dest) {
	    if (this.stack[source].length === 0) return;
	    const item = this.stack[source].pop();
	    if (!item) return;
	    const base = this.quill.getContents();
	    const inverseDelta = item.delta.invert(base);
	    this.stack[dest].push({
	      delta: inverseDelta,
	      range: transformRange(item.range, inverseDelta)
	    });
	    this.lastRecorded = 0;
	    this.ignoreChange = true;
	    this.quill.updateContents(item.delta, Quill.sources.USER);
	    this.ignoreChange = false;
	    this.restoreSelection(item);
	  }
	  clear() {
	    this.stack = {
	      undo: [],
	      redo: []
	    };
	  }
	  cutoff() {
	    this.lastRecorded = 0;
	  }
	  record(changeDelta, oldDelta) {
	    if (changeDelta.ops.length === 0) return;
	    this.stack.redo = [];
	    let undoDelta = changeDelta.invert(oldDelta);
	    let undoRange = this.currentRange;
	    const timestamp = Date.now();
	    if (
	    // @ts-expect-error Fix me later
	    this.lastRecorded + this.options.delay > timestamp && this.stack.undo.length > 0) {
	      const item = this.stack.undo.pop();
	      if (item) {
	        undoDelta = undoDelta.compose(item.delta);
	        undoRange = item.range;
	      }
	    } else {
	      this.lastRecorded = timestamp;
	    }
	    if (undoDelta.length() === 0) return;
	    this.stack.undo.push({
	      delta: undoDelta,
	      range: undoRange
	    });
	    // @ts-expect-error Fix me later
	    if (this.stack.undo.length > this.options.maxStack) {
	      this.stack.undo.shift();
	    }
	  }
	  redo() {
	    this.change('redo', 'undo');
	  }
	  transform(delta) {
	    transformStack(this.stack.undo, delta);
	    transformStack(this.stack.redo, delta);
	  }
	  undo() {
	    this.change('undo', 'redo');
	  }
	  restoreSelection(stackItem) {
	    if (stackItem.range) {
	      this.quill.setSelection(stackItem.range, Quill.sources.USER);
	    } else {
	      const index = getLastChangeIndex(this.quill.scroll, stackItem.delta);
	      this.quill.setSelection(index, Quill.sources.USER);
	    }
	  }
	}
	function transformStack(stack, delta) {
	  let remoteDelta = delta;
	  for (let i = stack.length - 1; i >= 0; i -= 1) {
	    const oldItem = stack[i];
	    stack[i] = {
	      delta: remoteDelta.transform(oldItem.delta, true),
	      range: oldItem.range && transformRange(oldItem.range, remoteDelta)
	    };
	    remoteDelta = oldItem.delta.transform(remoteDelta);
	    if (stack[i].delta.length() === 0) {
	      stack.splice(i, 1);
	    }
	  }
	}
	function endsWithNewlineChange(scroll, delta) {
	  const lastOp = delta.ops[delta.ops.length - 1];
	  if (lastOp == null) return false;
	  if (lastOp.insert != null) {
	    return typeof lastOp.insert === 'string' && lastOp.insert.endsWith('\n');
	  }
	  if (lastOp.attributes != null) {
	    return Object.keys(lastOp.attributes).some(attr => {
	      return scroll.query(attr, Scope.BLOCK) != null;
	    });
	  }
	  return false;
	}
	function getLastChangeIndex(scroll, delta) {
	  const deleteLength = delta.reduce((length, op) => {
	    return length + (op.delete || 0);
	  }, 0);
	  let changeIndex = delta.length() - deleteLength;
	  if (endsWithNewlineChange(scroll, delta)) {
	    changeIndex -= 1;
	  }
	  return changeIndex;
	}
	function transformRange(range, delta) {
	  if (!range) return range;
	  const start = delta.transformPosition(range.index);
	  const end = delta.transformPosition(range.index + range.length);
	  return {
	    index: start,
	    length: end - start
	  };
	}

	class Uploader extends Module {
	  constructor(quill, options) {
	    super(quill, options);
	    quill.root.addEventListener('drop', e => {
	      e.preventDefault();
	      let native = null;
	      if (document.caretRangeFromPoint) {
	        native = document.caretRangeFromPoint(e.clientX, e.clientY);
	        // @ts-expect-error
	      } else if (document.caretPositionFromPoint) {
	        // @ts-expect-error
	        const position = document.caretPositionFromPoint(e.clientX, e.clientY);
	        native = document.createRange();
	        native.setStart(position.offsetNode, position.offset);
	        native.setEnd(position.offsetNode, position.offset);
	      }
	      const normalized = native && quill.selection.normalizeNative(native);
	      if (normalized) {
	        const range = quill.selection.normalizedToRange(normalized);
	        if (e.dataTransfer?.files) {
	          this.upload(range, e.dataTransfer.files);
	        }
	      }
	    });
	  }
	  upload(range, files) {
	    const uploads = [];
	    Array.from(files).forEach(file => {
	      if (file && this.options.mimetypes?.includes(file.type)) {
	        uploads.push(file);
	      }
	    });
	    if (uploads.length > 0) {
	      // @ts-expect-error Fix me later
	      this.options.handler.call(this, range, uploads);
	    }
	  }
	}
	Uploader.DEFAULTS = {
	  mimetypes: ['image/png', 'image/jpeg'],
	  handler(range, files) {
	    if (!this.quill.scroll.query('image')) {
	      return;
	    }
	    const promises = files.map(file => {
	      return new Promise(resolve => {
	        const reader = new FileReader();
	        reader.onload = () => {
	          resolve(reader.result);
	        };
	        reader.readAsDataURL(file);
	      });
	    });
	    Promise.all(promises).then(images => {
	      const update = images.reduce((delta, image) => {
	        return delta.insert({
	          image
	        });
	      }, new Delta().retain(range.index).delete(range.length));
	      this.quill.updateContents(update, Emitter.sources.USER);
	      this.quill.setSelection(range.index + images.length, Emitter.sources.SILENT);
	    });
	  }
	};

	const INSERT_TYPES = ['insertText', 'insertReplacementText'];
	class Input extends Module {
	  constructor(quill, options) {
	    super(quill, options);
	    quill.root.addEventListener('beforeinput', event => {
	      this.handleBeforeInput(event);
	    });

	    // Gboard with English input on Android triggers `compositionstart` sometimes even
	    // users are not going to type anything.
	    if (!/Android/i.test(navigator.userAgent)) {
	      quill.on(Quill.events.COMPOSITION_BEFORE_START, () => {
	        this.handleCompositionStart();
	      });
	    }
	  }
	  deleteRange(range) {
	    deleteRange({
	      range,
	      quill: this.quill
	    });
	  }
	  replaceText(range) {
	    let text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	    if (range.length === 0) return false;
	    if (text) {
	      // Follow the native behavior that inherits the formats of the first character
	      const formats = this.quill.getFormat(range.index, 1);
	      this.deleteRange(range);
	      this.quill.updateContents(new Delta().retain(range.index).insert(text, formats), Quill.sources.USER);
	    } else {
	      this.deleteRange(range);
	    }
	    this.quill.setSelection(range.index + text.length, 0, Quill.sources.SILENT);
	    return true;
	  }
	  handleBeforeInput(event) {
	    if (this.quill.composition.isComposing || event.defaultPrevented || !INSERT_TYPES.includes(event.inputType)) {
	      return;
	    }
	    const staticRange = event.getTargetRanges ? event.getTargetRanges()[0] : null;
	    if (!staticRange || staticRange.collapsed === true) {
	      return;
	    }
	    const text = getPlainTextFromInputEvent(event);
	    if (text == null) {
	      return;
	    }
	    const normalized = this.quill.selection.normalizeNative(staticRange);
	    const range = normalized ? this.quill.selection.normalizedToRange(normalized) : null;
	    if (range && this.replaceText(range, text)) {
	      event.preventDefault();
	    }
	  }
	  handleCompositionStart() {
	    const range = this.quill.getSelection();
	    if (range) {
	      this.replaceText(range);
	    }
	  }
	}
	function getPlainTextFromInputEvent(event) {
	  // When `inputType` is "insertText":
	  // - `event.data` should be string (Safari uses `event.dataTransfer`).
	  // - `event.dataTransfer` should be null.
	  // When `inputType` is "insertReplacementText":
	  // - `event.data` should be null.
	  // - `event.dataTransfer` should contain "text/plain" data.

	  if (typeof event.data === 'string') {
	    return event.data;
	  }
	  if (event.dataTransfer?.types.includes('text/plain')) {
	    return event.dataTransfer.getData('text/plain');
	  }
	  return null;
	}

	const isMac = /Mac/i.test(navigator.platform);

	// Export for testing
	const TTL_FOR_VALID_SELECTION_CHANGE = 100;

	// A loose check to determine if the shortcut can move the caret before a UI node:
	// <ANY_PARENT>[CARET]<div class="ql-ui"></div>[CONTENT]</ANY_PARENT>
	const canMoveCaretBeforeUINode = event => {
	  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' ||
	  // RTL scripts or moving from the end of the previous line
	  event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'Home') {
	    return true;
	  }
	  if (isMac && event.key === 'a' && event.ctrlKey === true) {
	    return true;
	  }
	  return false;
	};
	class UINode extends Module {
	  isListening = false;
	  selectionChangeDeadline = 0;
	  constructor(quill, options) {
	    super(quill, options);
	    this.handleArrowKeys();
	    this.handleNavigationShortcuts();
	  }
	  handleArrowKeys() {
	    this.quill.keyboard.addBinding({
	      key: ['ArrowLeft', 'ArrowRight'],
	      offset: 0,
	      shiftKey: null,
	      handler(range, _ref) {
	        let {
	          line,
	          event
	        } = _ref;
	        if (!(line instanceof ParentBlot$1) || !line.uiNode) {
	          return true;
	        }
	        const isRTL = getComputedStyle(line.domNode)['direction'] === 'rtl';
	        if (isRTL && event.key !== 'ArrowRight' || !isRTL && event.key !== 'ArrowLeft') {
	          return true;
	        }
	        this.quill.setSelection(range.index - 1, range.length + (event.shiftKey ? 1 : 0), Quill.sources.USER);
	        return false;
	      }
	    });
	  }
	  handleNavigationShortcuts() {
	    this.quill.root.addEventListener('keydown', event => {
	      if (!event.defaultPrevented && canMoveCaretBeforeUINode(event)) {
	        this.ensureListeningToSelectionChange();
	      }
	    });
	  }

	  /**
	   * We only listen to the `selectionchange` event when
	   * there is an intention of moving the caret to the beginning using shortcuts.
	   * This is primarily implemented to prevent infinite loops, as we are changing
	   * the selection within the handler of a `selectionchange` event.
	   */
	  ensureListeningToSelectionChange() {
	    this.selectionChangeDeadline = Date.now() + TTL_FOR_VALID_SELECTION_CHANGE;
	    if (this.isListening) return;
	    this.isListening = true;
	    const listener = () => {
	      this.isListening = false;
	      if (Date.now() <= this.selectionChangeDeadline) {
	        this.handleSelectionChange();
	      }
	    };
	    document.addEventListener('selectionchange', listener, {
	      once: true
	    });
	  }
	  handleSelectionChange() {
	    const selection = document.getSelection();
	    if (!selection) return;
	    const range = selection.getRangeAt(0);
	    if (range.collapsed !== true || range.startOffset !== 0) return;
	    const line = this.quill.scroll.find(range.startContainer);
	    if (!(line instanceof ParentBlot$1) || !line.uiNode) return;
	    const newRange = document.createRange();
	    newRange.setStartAfter(line.uiNode);
	    newRange.setEndAfter(line.uiNode);
	    selection.removeAllRanges();
	    selection.addRange(newRange);
	  }
	}

	Quill.register({
	  'blots/block': Block,
	  'blots/block/embed': BlockEmbed,
	  'blots/break': Break,
	  'blots/container': Container,
	  'blots/cursor': Cursor,
	  'blots/embed': Embed,
	  'blots/inline': Inline,
	  'blots/scroll': Scroll,
	  'blots/text': Text$1,
	  'modules/clipboard': Clipboard,
	  'modules/history': History,
	  'modules/keyboard': Keyboard,
	  'modules/uploader': Uploader,
	  'modules/input': Input,
	  'modules/uiNode': UINode
	});

	class IndentAttributor extends ClassAttributor$1 {
	  add(node, value) {
	    let normalizedValue = 0;
	    if (value === '+1' || value === '-1') {
	      const indent = this.value(node) || 0;
	      normalizedValue = value === '+1' ? indent + 1 : indent - 1;
	    } else if (typeof value === 'number') {
	      normalizedValue = value;
	    }
	    if (normalizedValue === 0) {
	      this.remove(node);
	      return true;
	    }
	    return super.add(node, normalizedValue.toString());
	  }
	  canAdd(node, value) {
	    return super.canAdd(node, value) || super.canAdd(node, parseInt(value, 10));
	  }
	  value(node) {
	    return parseInt(super.value(node), 10) || undefined; // Don't return NaN
	  }
	}
	const IndentClass = new IndentAttributor('indent', 'ql-indent', {
	  scope: Scope.BLOCK,
	  // @ts-expect-error
	  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
	});

	class Blockquote extends Block {
	  static blotName = 'blockquote';
	  static tagName = 'blockquote';
	}

	class Header extends Block {
	  static blotName = 'header';
	  static tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
	  static formats(domNode) {
	    return this.tagName.indexOf(domNode.tagName) + 1;
	  }
	}

	class ListContainer extends Container {}
	ListContainer.blotName = 'list-container';
	ListContainer.tagName = 'OL';
	class ListItem extends Block {
	  static create(value) {
	    const node = super.create();
	    node.setAttribute('data-list', value);
	    return node;
	  }
	  static formats(domNode) {
	    return domNode.getAttribute('data-list') || undefined;
	  }
	  static register() {
	    Quill.register(ListContainer);
	  }
	  constructor(scroll, domNode) {
	    super(scroll, domNode);
	    const ui = domNode.ownerDocument.createElement('span');
	    const listEventHandler = e => {
	      if (!scroll.isEnabled()) return;
	      const format = this.statics.formats(domNode, scroll);
	      if (format === 'checked') {
	        this.format('list', 'unchecked');
	        e.preventDefault();
	      } else if (format === 'unchecked') {
	        this.format('list', 'checked');
	        e.preventDefault();
	      }
	    };
	    ui.addEventListener('mousedown', listEventHandler);
	    ui.addEventListener('touchstart', listEventHandler);
	    this.attachUI(ui);
	  }
	  format(name, value) {
	    if (name === this.statics.blotName && value) {
	      this.domNode.setAttribute('data-list', value);
	    } else {
	      super.format(name, value);
	    }
	  }
	}
	ListItem.blotName = 'list';
	ListItem.tagName = 'LI';
	ListContainer.allowedChildren = [ListItem];
	ListItem.requiredContainer = ListContainer;

	class Bold extends Inline {
	  static blotName = 'bold';
	  static tagName = ['STRONG', 'B'];
	  static create() {
	    return super.create();
	  }
	  static formats() {
	    return true;
	  }
	  optimize(context) {
	    super.optimize(context);
	    if (this.domNode.tagName !== this.statics.tagName[0]) {
	      this.replaceWith(this.statics.blotName);
	    }
	  }
	}

	class Italic extends Bold {
	  static blotName = 'italic';
	  static tagName = ['EM', 'I'];
	}

	class Link extends Inline {
	  static blotName = 'link';
	  static tagName = 'A';
	  static SANITIZED_URL = 'about:blank';
	  static PROTOCOL_WHITELIST = ['http', 'https', 'mailto', 'tel', 'sms'];
	  static create(value) {
	    const node = super.create(value);
	    node.setAttribute('href', this.sanitize(value));
	    node.setAttribute('rel', 'noopener noreferrer');
	    node.setAttribute('target', '_blank');
	    return node;
	  }
	  static formats(domNode) {
	    return domNode.getAttribute('href');
	  }
	  static sanitize(url) {
	    return sanitize(url, this.PROTOCOL_WHITELIST) ? url : this.SANITIZED_URL;
	  }
	  format(name, value) {
	    if (name !== this.statics.blotName || !value) {
	      super.format(name, value);
	    } else {
	      // @ts-expect-error
	      this.domNode.setAttribute('href', this.constructor.sanitize(value));
	    }
	  }
	}
	function sanitize(url, protocols) {
	  const anchor = document.createElement('a');
	  anchor.href = url;
	  const protocol = anchor.href.slice(0, anchor.href.indexOf(':'));
	  return protocols.indexOf(protocol) > -1;
	}

	class Script extends Inline {
	  static blotName = 'script';
	  static tagName = ['SUB', 'SUP'];
	  static create(value) {
	    if (value === 'super') {
	      return document.createElement('sup');
	    }
	    if (value === 'sub') {
	      return document.createElement('sub');
	    }
	    return super.create(value);
	  }
	  static formats(domNode) {
	    if (domNode.tagName === 'SUB') return 'sub';
	    if (domNode.tagName === 'SUP') return 'super';
	    return undefined;
	  }
	}

	class Strike extends Bold {
	  static blotName = 'strike';
	  static tagName = ['S', 'STRIKE'];
	}

	class Underline extends Inline {
	  static blotName = 'underline';
	  static tagName = 'U';
	}

	class Formula extends Embed {
	  static blotName = 'formula';
	  static className = 'ql-formula';
	  static tagName = 'SPAN';
	  static create(value) {
	    // @ts-expect-error
	    if (window.katex == null) {
	      throw new Error('Formula module requires KaTeX.');
	    }
	    const node = super.create(value);
	    if (typeof value === 'string') {
	      // @ts-expect-error
	      window.katex.render(value, node, {
	        throwOnError: false,
	        errorColor: '#f00'
	      });
	      node.setAttribute('data-value', value);
	    }
	    return node;
	  }
	  static value(domNode) {
	    return domNode.getAttribute('data-value');
	  }
	  html() {
	    const {
	      formula
	    } = this.value();
	    return `<span>${formula}</span>`;
	  }
	}

	const ATTRIBUTES$1 = ['alt', 'height', 'width'];
	class Image extends EmbedBlot$1 {
	  static blotName = 'image';
	  static tagName = 'IMG';
	  static create(value) {
	    const node = super.create(value);
	    if (typeof value === 'string') {
	      node.setAttribute('src', this.sanitize(value));
	    }
	    return node;
	  }
	  static formats(domNode) {
	    return ATTRIBUTES$1.reduce((formats, attribute) => {
	      if (domNode.hasAttribute(attribute)) {
	        formats[attribute] = domNode.getAttribute(attribute);
	      }
	      return formats;
	    }, {});
	  }
	  static match(url) {
	    return /\.(jpe?g|gif|png)$/.test(url) || /^data:image\/.+;base64/.test(url);
	  }
	  static sanitize(url) {
	    return sanitize(url, ['http', 'https', 'data']) ? url : '//:0';
	  }
	  static value(domNode) {
	    return domNode.getAttribute('src');
	  }
	  format(name, value) {
	    if (ATTRIBUTES$1.indexOf(name) > -1) {
	      if (value) {
	        this.domNode.setAttribute(name, value);
	      } else {
	        this.domNode.removeAttribute(name);
	      }
	    } else {
	      super.format(name, value);
	    }
	  }
	}

	const ATTRIBUTES = ['height', 'width'];
	class Video extends BlockEmbed {
	  static blotName = 'video';
	  static className = 'ql-video';
	  static tagName = 'IFRAME';
	  static create(value) {
	    const node = super.create(value);
	    node.setAttribute('frameborder', '0');
	    node.setAttribute('allowfullscreen', 'true');
	    node.setAttribute('src', this.sanitize(value));
	    return node;
	  }
	  static formats(domNode) {
	    return ATTRIBUTES.reduce((formats, attribute) => {
	      if (domNode.hasAttribute(attribute)) {
	        formats[attribute] = domNode.getAttribute(attribute);
	      }
	      return formats;
	    }, {});
	  }
	  static sanitize(url) {
	    return Link.sanitize(url);
	  }
	  static value(domNode) {
	    return domNode.getAttribute('src');
	  }
	  format(name, value) {
	    if (ATTRIBUTES.indexOf(name) > -1) {
	      if (value) {
	        this.domNode.setAttribute(name, value);
	      } else {
	        this.domNode.removeAttribute(name);
	      }
	    } else {
	      super.format(name, value);
	    }
	  }
	  html() {
	    const {
	      video
	    } = this.value();
	    return `<a href="${video}">${video}</a>`;
	  }
	}

	const TokenAttributor = new ClassAttributor$1('code-token', 'hljs', {
	  scope: Scope.INLINE
	});
	class CodeToken extends Inline {
	  static formats(node, scroll) {
	    while (node != null && node !== scroll.domNode) {
	      if (node.classList && node.classList.contains(CodeBlock.className)) {
	        // @ts-expect-error
	        return super.formats(node, scroll);
	      }
	      // @ts-expect-error
	      node = node.parentNode;
	    }
	    return undefined;
	  }
	  constructor(scroll, domNode, value) {
	    // @ts-expect-error
	    super(scroll, domNode, value);
	    TokenAttributor.add(this.domNode, value);
	  }
	  format(format, value) {
	    if (format !== CodeToken.blotName) {
	      super.format(format, value);
	    } else if (value) {
	      TokenAttributor.add(this.domNode, value);
	    } else {
	      TokenAttributor.remove(this.domNode);
	      this.domNode.classList.remove(this.statics.className);
	    }
	  }
	  optimize() {
	    // @ts-expect-error
	    super.optimize(...arguments);
	    if (!TokenAttributor.value(this.domNode)) {
	      this.unwrap();
	    }
	  }
	}
	CodeToken.blotName = 'code-token';
	CodeToken.className = 'ql-token';
	class SyntaxCodeBlock extends CodeBlock {
	  static create(value) {
	    const domNode = super.create(value);
	    if (typeof value === 'string') {
	      domNode.setAttribute('data-language', value);
	    }
	    return domNode;
	  }
	  static formats(domNode) {
	    // @ts-expect-error
	    return domNode.getAttribute('data-language') || 'plain';
	  }
	  static register() {} // Syntax module will register

	  format(name, value) {
	    if (name === this.statics.blotName && value) {
	      // @ts-expect-error
	      this.domNode.setAttribute('data-language', value);
	    } else {
	      super.format(name, value);
	    }
	  }
	  replaceWith(name, value) {
	    this.formatAt(0, this.length(), CodeToken.blotName, false);
	    return super.replaceWith(name, value);
	  }
	}
	class SyntaxCodeBlockContainer extends CodeBlockContainer {
	  attach() {
	    super.attach();
	    this.forceNext = false;
	    // @ts-expect-error
	    this.scroll.emitMount(this);
	  }
	  format(name, value) {
	    if (name === SyntaxCodeBlock.blotName) {
	      this.forceNext = true;
	      this.children.forEach(child => {
	        // @ts-expect-error
	        child.format(name, value);
	      });
	    }
	  }
	  formatAt(index, length, name, value) {
	    if (name === SyntaxCodeBlock.blotName) {
	      this.forceNext = true;
	    }
	    super.formatAt(index, length, name, value);
	  }
	  highlight(highlight) {
	    let forced = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    if (this.children.head == null) return;
	    const nodes = Array.from(this.domNode.childNodes).filter(node => node !== this.uiNode);
	    const text = `${nodes.map(node => node.textContent).join('\n')}\n`;
	    const language = SyntaxCodeBlock.formats(this.children.head.domNode);
	    if (forced || this.forceNext || this.cachedText !== text) {
	      if (text.trim().length > 0 || this.cachedText == null) {
	        const oldDelta = this.children.reduce((delta, child) => {
	          // @ts-expect-error
	          return delta.concat(blockDelta(child, false));
	        }, new Delta());
	        const delta = highlight(text, language);
	        oldDelta.diff(delta).reduce((index, _ref) => {
	          let {
	            retain,
	            attributes
	          } = _ref;
	          // Should be all retains
	          if (!retain) return index;
	          if (attributes) {
	            Object.keys(attributes).forEach(format => {
	              if ([SyntaxCodeBlock.blotName, CodeToken.blotName].includes(format)) {
	                // @ts-expect-error
	                this.formatAt(index, retain, format, attributes[format]);
	              }
	            });
	          }
	          // @ts-expect-error
	          return index + retain;
	        }, 0);
	      }
	      this.cachedText = text;
	      this.forceNext = false;
	    }
	  }
	  html(index, length) {
	    const [codeBlock] = this.children.find(index);
	    const language = codeBlock ? SyntaxCodeBlock.formats(codeBlock.domNode) : 'plain';
	    return `<pre data-language="${language}">\n${escapeText(this.code(index, length))}\n</pre>`;
	  }
	  optimize(context) {
	    super.optimize(context);
	    if (this.parent != null && this.children.head != null && this.uiNode != null) {
	      const language = SyntaxCodeBlock.formats(this.children.head.domNode);
	      // @ts-expect-error
	      if (language !== this.uiNode.value) {
	        // @ts-expect-error
	        this.uiNode.value = language;
	      }
	    }
	  }
	}
	SyntaxCodeBlockContainer.allowedChildren = [SyntaxCodeBlock];
	SyntaxCodeBlock.requiredContainer = SyntaxCodeBlockContainer;
	SyntaxCodeBlock.allowedChildren = [CodeToken, Cursor, Text$1, Break];
	const highlight = (lib, language, text) => {
	  if (typeof lib.versionString === 'string') {
	    const majorVersion = lib.versionString.split('.')[0];
	    if (parseInt(majorVersion, 10) >= 11) {
	      return lib.highlight(text, {
	        language
	      }).value;
	    }
	  }
	  return lib.highlight(language, text).value;
	};
	class Syntax extends Module {
	  static register() {
	    Quill.register(CodeToken, true);
	    Quill.register(SyntaxCodeBlock, true);
	    Quill.register(SyntaxCodeBlockContainer, true);
	  }
	  constructor(quill, options) {
	    super(quill, options);
	    if (this.options.hljs == null) {
	      throw new Error('Syntax module requires highlight.js. Please include the library on the page before Quill.');
	    }
	    // @ts-expect-error Fix me later
	    this.languages = this.options.languages.reduce((memo, _ref2) => {
	      let {
	        key
	      } = _ref2;
	      memo[key] = true;
	      return memo;
	    }, {});
	    this.highlightBlot = this.highlightBlot.bind(this);
	    this.initListener();
	    this.initTimer();
	  }
	  initListener() {
	    this.quill.on(Quill.events.SCROLL_BLOT_MOUNT, blot => {
	      if (!(blot instanceof SyntaxCodeBlockContainer)) return;
	      const select = this.quill.root.ownerDocument.createElement('select');
	      // @ts-expect-error Fix me later
	      this.options.languages.forEach(_ref3 => {
	        let {
	          key,
	          label
	        } = _ref3;
	        const option = select.ownerDocument.createElement('option');
	        option.textContent = label;
	        option.setAttribute('value', key);
	        select.appendChild(option);
	      });
	      select.addEventListener('change', () => {
	        blot.format(SyntaxCodeBlock.blotName, select.value);
	        this.quill.root.focus(); // Prevent scrolling
	        this.highlight(blot, true);
	      });
	      if (blot.uiNode == null) {
	        blot.attachUI(select);
	        if (blot.children.head) {
	          select.value = SyntaxCodeBlock.formats(blot.children.head.domNode);
	        }
	      }
	    });
	  }
	  initTimer() {
	    let timer = null;
	    this.quill.on(Quill.events.SCROLL_OPTIMIZE, () => {
	      if (timer) {
	        clearTimeout(timer);
	      }
	      timer = setTimeout(() => {
	        this.highlight();
	        timer = null;
	      }, this.options.interval);
	    });
	  }
	  highlight() {
	    let blot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	    let force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    if (this.quill.selection.composing) return;
	    this.quill.update(Quill.sources.USER);
	    const range = this.quill.getSelection();
	    const blots = blot == null ? this.quill.scroll.descendants(SyntaxCodeBlockContainer) : [blot];
	    blots.forEach(container => {
	      container.highlight(this.highlightBlot, force);
	    });
	    this.quill.update(Quill.sources.SILENT);
	    if (range != null) {
	      this.quill.setSelection(range, Quill.sources.SILENT);
	    }
	  }
	  highlightBlot(text) {
	    let language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'plain';
	    language = this.languages[language] ? language : 'plain';
	    if (language === 'plain') {
	      return escapeText(text).split('\n').reduce((delta, line, i) => {
	        if (i !== 0) {
	          delta.insert('\n', {
	            [CodeBlock.blotName]: language
	          });
	        }
	        return delta.insert(line);
	      }, new Delta());
	    }
	    const container = this.quill.root.ownerDocument.createElement('div');
	    container.classList.add(CodeBlock.className);
	    container.innerHTML = highlight(this.options.hljs, language, text);
	    return traverse(this.quill.scroll, container, [(node, delta) => {
	      // @ts-expect-error
	      const value = TokenAttributor.value(node);
	      if (value) {
	        return delta.compose(new Delta().retain(delta.length(), {
	          [CodeToken.blotName]: value
	        }));
	      }
	      return delta;
	    }], [(node, delta) => {
	      // @ts-expect-error
	      return node.data.split('\n').reduce((memo, nodeText, i) => {
	        if (i !== 0) memo.insert('\n', {
	          [CodeBlock.blotName]: language
	        });
	        return memo.insert(nodeText);
	      }, delta);
	    }], new WeakMap());
	  }
	}
	Syntax.DEFAULTS = {
	  hljs: (() => {
	    return window.hljs;
	  })(),
	  interval: 1000,
	  languages: [{
	    key: 'plain',
	    label: 'Plain'
	  }, {
	    key: 'bash',
	    label: 'Bash'
	  }, {
	    key: 'cpp',
	    label: 'C++'
	  }, {
	    key: 'cs',
	    label: 'C#'
	  }, {
	    key: 'css',
	    label: 'CSS'
	  }, {
	    key: 'diff',
	    label: 'Diff'
	  }, {
	    key: 'xml',
	    label: 'HTML/XML'
	  }, {
	    key: 'java',
	    label: 'Java'
	  }, {
	    key: 'javascript',
	    label: 'JavaScript'
	  }, {
	    key: 'markdown',
	    label: 'Markdown'
	  }, {
	    key: 'php',
	    label: 'PHP'
	  }, {
	    key: 'python',
	    label: 'Python'
	  }, {
	    key: 'ruby',
	    label: 'Ruby'
	  }, {
	    key: 'sql',
	    label: 'SQL'
	  }]
	};

	class TableCell extends Block {
	  static blotName = 'table';
	  static tagName = 'TD';
	  static create(value) {
	    const node = super.create();
	    if (value) {
	      node.setAttribute('data-row', value);
	    } else {
	      node.setAttribute('data-row', tableId());
	    }
	    return node;
	  }
	  static formats(domNode) {
	    if (domNode.hasAttribute('data-row')) {
	      return domNode.getAttribute('data-row');
	    }
	    return undefined;
	  }
	  cellOffset() {
	    if (this.parent) {
	      return this.parent.children.indexOf(this);
	    }
	    return -1;
	  }
	  format(name, value) {
	    if (name === TableCell.blotName && value) {
	      this.domNode.setAttribute('data-row', value);
	    } else {
	      super.format(name, value);
	    }
	  }
	  row() {
	    return this.parent;
	  }
	  rowOffset() {
	    if (this.row()) {
	      return this.row().rowOffset();
	    }
	    return -1;
	  }
	  table() {
	    return this.row() && this.row().table();
	  }
	}
	class TableRow extends Container {
	  static blotName = 'table-row';
	  static tagName = 'TR';
	  checkMerge() {
	    // @ts-expect-error
	    if (super.checkMerge() && this.next.children.head != null) {
	      // @ts-expect-error
	      const thisHead = this.children.head.formats();
	      // @ts-expect-error
	      const thisTail = this.children.tail.formats();
	      // @ts-expect-error
	      const nextHead = this.next.children.head.formats();
	      // @ts-expect-error
	      const nextTail = this.next.children.tail.formats();
	      return thisHead.table === thisTail.table && thisHead.table === nextHead.table && thisHead.table === nextTail.table;
	    }
	    return false;
	  }
	  optimize(context) {
	    super.optimize(context);
	    this.children.forEach(child => {
	      if (child.next == null) return;
	      const childFormats = child.formats();
	      const nextFormats = child.next.formats();
	      if (childFormats.table !== nextFormats.table) {
	        const next = this.splitAfter(child);
	        if (next) {
	          // @ts-expect-error TODO: parameters of optimize() should be a optional
	          next.optimize();
	        }
	        // We might be able to merge with prev now
	        if (this.prev) {
	          // @ts-expect-error TODO: parameters of optimize() should be a optional
	          this.prev.optimize();
	        }
	      }
	    });
	  }
	  rowOffset() {
	    if (this.parent) {
	      return this.parent.children.indexOf(this);
	    }
	    return -1;
	  }
	  table() {
	    return this.parent && this.parent.parent;
	  }
	}
	class TableBody extends Container {
	  static blotName = 'table-body';
	  static tagName = 'TBODY';
	}
	class TableContainer extends Container {
	  static blotName = 'table-container';
	  static tagName = 'TABLE';
	  balanceCells() {
	    const rows = this.descendants(TableRow);
	    const maxColumns = rows.reduce((max, row) => {
	      return Math.max(row.children.length, max);
	    }, 0);
	    rows.forEach(row => {
	      new Array(maxColumns - row.children.length).fill(0).forEach(() => {
	        let value;
	        if (row.children.head != null) {
	          value = TableCell.formats(row.children.head.domNode);
	        }
	        const blot = this.scroll.create(TableCell.blotName, value);
	        row.appendChild(blot);
	        // @ts-expect-error TODO: parameters of optimize() should be a optional
	        blot.optimize(); // Add break blot
	      });
	    });
	  }
	  cells(column) {
	    return this.rows().map(row => row.children.at(column));
	  }
	  deleteColumn(index) {
	    // @ts-expect-error
	    const [body] = this.descendant(TableBody);
	    if (body == null || body.children.head == null) return;
	    body.children.forEach(row => {
	      const cell = row.children.at(index);
	      if (cell != null) {
	        cell.remove();
	      }
	    });
	  }
	  insertColumn(index) {
	    // @ts-expect-error
	    const [body] = this.descendant(TableBody);
	    if (body == null || body.children.head == null) return;
	    body.children.forEach(row => {
	      const ref = row.children.at(index);
	      // @ts-expect-error
	      const value = TableCell.formats(row.children.head.domNode);
	      const cell = this.scroll.create(TableCell.blotName, value);
	      row.insertBefore(cell, ref);
	    });
	  }
	  insertRow(index) {
	    // @ts-expect-error
	    const [body] = this.descendant(TableBody);
	    if (body == null || body.children.head == null) return;
	    const id = tableId();
	    const row = this.scroll.create(TableRow.blotName);
	    body.children.head.children.forEach(() => {
	      const cell = this.scroll.create(TableCell.blotName, id);
	      row.appendChild(cell);
	    });
	    const ref = body.children.at(index);
	    body.insertBefore(row, ref);
	  }
	  rows() {
	    const body = this.children.head;
	    if (body == null) return [];
	    return body.children.map(row => row);
	  }
	}
	TableContainer.allowedChildren = [TableBody];
	TableBody.requiredContainer = TableContainer;
	TableBody.allowedChildren = [TableRow];
	TableRow.requiredContainer = TableBody;
	TableRow.allowedChildren = [TableCell];
	TableCell.requiredContainer = TableRow;
	function tableId() {
	  const id = Math.random().toString(36).slice(2, 6);
	  return `row-${id}`;
	}

	class Table extends Module {
	  static register() {
	    Quill.register(TableCell);
	    Quill.register(TableRow);
	    Quill.register(TableBody);
	    Quill.register(TableContainer);
	  }
	  constructor() {
	    super(...arguments);
	    this.listenBalanceCells();
	  }
	  balanceTables() {
	    this.quill.scroll.descendants(TableContainer).forEach(table => {
	      table.balanceCells();
	    });
	  }
	  deleteColumn() {
	    const [table,, cell] = this.getTable();
	    if (cell == null) return;
	    // @ts-expect-error
	    table.deleteColumn(cell.cellOffset());
	    this.quill.update(Quill.sources.USER);
	  }
	  deleteRow() {
	    const [, row] = this.getTable();
	    if (row == null) return;
	    row.remove();
	    this.quill.update(Quill.sources.USER);
	  }
	  deleteTable() {
	    const [table] = this.getTable();
	    if (table == null) return;
	    // @ts-expect-error
	    const offset = table.offset();
	    // @ts-expect-error
	    table.remove();
	    this.quill.update(Quill.sources.USER);
	    this.quill.setSelection(offset, Quill.sources.SILENT);
	  }
	  getTable() {
	    let range = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.quill.getSelection();
	    if (range == null) return [null, null, null, -1];
	    const [cell, offset] = this.quill.getLine(range.index);
	    if (cell == null || cell.statics.blotName !== TableCell.blotName) {
	      return [null, null, null, -1];
	    }
	    const row = cell.parent;
	    const table = row.parent.parent;
	    // @ts-expect-error
	    return [table, row, cell, offset];
	  }
	  insertColumn(offset) {
	    const range = this.quill.getSelection();
	    if (!range) return;
	    const [table, row, cell] = this.getTable(range);
	    if (cell == null) return;
	    const column = cell.cellOffset();
	    table.insertColumn(column + offset);
	    this.quill.update(Quill.sources.USER);
	    let shift = row.rowOffset();
	    if (offset === 0) {
	      shift += 1;
	    }
	    this.quill.setSelection(range.index + shift, range.length, Quill.sources.SILENT);
	  }
	  insertColumnLeft() {
	    this.insertColumn(0);
	  }
	  insertColumnRight() {
	    this.insertColumn(1);
	  }
	  insertRow(offset) {
	    const range = this.quill.getSelection();
	    if (!range) return;
	    const [table, row, cell] = this.getTable(range);
	    if (cell == null) return;
	    const index = row.rowOffset();
	    table.insertRow(index + offset);
	    this.quill.update(Quill.sources.USER);
	    if (offset > 0) {
	      this.quill.setSelection(range, Quill.sources.SILENT);
	    } else {
	      this.quill.setSelection(range.index + row.children.length, range.length, Quill.sources.SILENT);
	    }
	  }
	  insertRowAbove() {
	    this.insertRow(0);
	  }
	  insertRowBelow() {
	    this.insertRow(1);
	  }
	  insertTable(rows, columns) {
	    const range = this.quill.getSelection();
	    if (range == null) return;
	    const delta = new Array(rows).fill(0).reduce(memo => {
	      const text = new Array(columns).fill('\n').join('');
	      return memo.insert(text, {
	        table: tableId()
	      });
	    }, new Delta().retain(range.index));
	    this.quill.updateContents(delta, Quill.sources.USER);
	    this.quill.setSelection(range.index, Quill.sources.SILENT);
	    this.balanceTables();
	  }
	  listenBalanceCells() {
	    this.quill.on(Quill.events.SCROLL_OPTIMIZE, mutations => {
	      mutations.some(mutation => {
	        if (['TD', 'TR', 'TBODY', 'TABLE'].includes(mutation.target.tagName)) {
	          this.quill.once(Quill.events.TEXT_CHANGE, (delta, old, source) => {
	            if (source !== Quill.sources.USER) return;
	            this.balanceTables();
	          });
	          return true;
	        }
	        return false;
	      });
	    });
	  }
	}

	const debug = namespace('quill:toolbar');
	class Toolbar extends Module {
	  constructor(quill, options) {
	    super(quill, options);
	    if (Array.isArray(this.options.container)) {
	      const container = document.createElement('div');
	      container.setAttribute('role', 'toolbar');
	      addControls(container, this.options.container);
	      quill.container?.parentNode?.insertBefore(container, quill.container);
	      this.container = container;
	    } else if (typeof this.options.container === 'string') {
	      this.container = document.querySelector(this.options.container);
	    } else {
	      this.container = this.options.container;
	    }
	    if (!(this.container instanceof HTMLElement)) {
	      debug.error('Container required for toolbar', this.options);
	      return;
	    }
	    this.container.classList.add('ql-toolbar');
	    this.controls = [];
	    this.handlers = {};
	    if (this.options.handlers) {
	      Object.keys(this.options.handlers).forEach(format => {
	        const handler = this.options.handlers?.[format];
	        if (handler) {
	          this.addHandler(format, handler);
	        }
	      });
	    }
	    Array.from(this.container.querySelectorAll('button, select')).forEach(input => {
	      // @ts-expect-error
	      this.attach(input);
	    });
	    this.quill.on(Quill.events.EDITOR_CHANGE, () => {
	      const [range] = this.quill.selection.getRange(); // quill.getSelection triggers update
	      this.update(range);
	    });
	  }
	  addHandler(format, handler) {
	    this.handlers[format] = handler;
	  }
	  attach(input) {
	    let format = Array.from(input.classList).find(className => {
	      return className.indexOf('ql-') === 0;
	    });
	    if (!format) return;
	    format = format.slice('ql-'.length);
	    if (input.tagName === 'BUTTON') {
	      input.setAttribute('type', 'button');
	    }
	    if (this.handlers[format] == null && this.quill.scroll.query(format) == null) {
	      debug.warn('ignoring attaching to nonexistent format', format, input);
	      return;
	    }
	    const eventName = input.tagName === 'SELECT' ? 'change' : 'click';
	    input.addEventListener(eventName, e => {
	      let value;
	      if (input.tagName === 'SELECT') {
	        // @ts-expect-error
	        if (input.selectedIndex < 0) return;
	        // @ts-expect-error
	        const selected = input.options[input.selectedIndex];
	        if (selected.hasAttribute('selected')) {
	          value = false;
	        } else {
	          value = selected.value || false;
	        }
	      } else {
	        if (input.classList.contains('ql-active')) {
	          value = false;
	        } else {
	          // @ts-expect-error
	          value = input.value || !input.hasAttribute('value');
	        }
	        e.preventDefault();
	      }
	      this.quill.focus();
	      const [range] = this.quill.selection.getRange();
	      if (this.handlers[format] != null) {
	        this.handlers[format].call(this, value);
	      } else if (
	      // @ts-expect-error
	      this.quill.scroll.query(format).prototype instanceof EmbedBlot$1) {
	        value = prompt(`Enter ${format}`); // eslint-disable-line no-alert
	        if (!value) return;
	        this.quill.updateContents(new Delta()
	        // @ts-expect-error Fix me later
	        .retain(range.index)
	        // @ts-expect-error Fix me later
	        .delete(range.length).insert({
	          [format]: value
	        }), Quill.sources.USER);
	      } else {
	        this.quill.format(format, value, Quill.sources.USER);
	      }
	      this.update(range);
	    });
	    this.controls.push([format, input]);
	  }
	  update(range) {
	    const formats = range == null ? {} : this.quill.getFormat(range);
	    this.controls.forEach(pair => {
	      const [format, input] = pair;
	      if (input.tagName === 'SELECT') {
	        let option = null;
	        if (range == null) {
	          option = null;
	        } else if (formats[format] == null) {
	          option = input.querySelector('option[selected]');
	        } else if (!Array.isArray(formats[format])) {
	          let value = formats[format];
	          if (typeof value === 'string') {
	            value = value.replace(/"/g, '\\"');
	          }
	          option = input.querySelector(`option[value="${value}"]`);
	        }
	        if (option == null) {
	          // @ts-expect-error TODO fix me later
	          input.value = ''; // TODO make configurable?
	          // @ts-expect-error TODO fix me later
	          input.selectedIndex = -1;
	        } else {
	          option.selected = true;
	        }
	      } else if (range == null) {
	        input.classList.remove('ql-active');
	        input.setAttribute('aria-pressed', 'false');
	      } else if (input.hasAttribute('value')) {
	        // both being null should match (default values)
	        // '1' should match with 1 (headers)
	        const value = formats[format];
	        const isActive = value === input.getAttribute('value') || value != null && value.toString() === input.getAttribute('value') || value == null && !input.getAttribute('value');
	        input.classList.toggle('ql-active', isActive);
	        input.setAttribute('aria-pressed', isActive.toString());
	      } else {
	        const isActive = formats[format] != null;
	        input.classList.toggle('ql-active', isActive);
	        input.setAttribute('aria-pressed', isActive.toString());
	      }
	    });
	  }
	}
	Toolbar.DEFAULTS = {};
	function addButton(container, format, value) {
	  const input = document.createElement('button');
	  input.setAttribute('type', 'button');
	  input.classList.add(`ql-${format}`);
	  input.setAttribute('aria-pressed', 'false');
	  if (value != null) {
	    input.value = value;
	    input.setAttribute('aria-label', `${format}: ${value}`);
	  } else {
	    input.setAttribute('aria-label', format);
	  }
	  container.appendChild(input);
	}
	function addControls(container, groups) {
	  if (!Array.isArray(groups[0])) {
	    // @ts-expect-error
	    groups = [groups];
	  }
	  groups.forEach(controls => {
	    const group = document.createElement('span');
	    group.classList.add('ql-formats');
	    controls.forEach(control => {
	      if (typeof control === 'string') {
	        addButton(group, control);
	      } else {
	        const format = Object.keys(control)[0];
	        const value = control[format];
	        if (Array.isArray(value)) {
	          addSelect(group, format, value);
	        } else {
	          addButton(group, format, value);
	        }
	      }
	    });
	    container.appendChild(group);
	  });
	}
	function addSelect(container, format, values) {
	  const input = document.createElement('select');
	  input.classList.add(`ql-${format}`);
	  values.forEach(value => {
	    const option = document.createElement('option');
	    if (value !== false) {
	      option.setAttribute('value', String(value));
	    } else {
	      option.setAttribute('selected', 'selected');
	    }
	    input.appendChild(option);
	  });
	  container.appendChild(input);
	}
	Toolbar.DEFAULTS = {
	  container: null,
	  handlers: {
	    clean() {
	      const range = this.quill.getSelection();
	      if (range == null) return;
	      if (range.length === 0) {
	        const formats = this.quill.getFormat();
	        Object.keys(formats).forEach(name => {
	          // Clean functionality in existing apps only clean inline formats
	          if (this.quill.scroll.query(name, Scope.INLINE) != null) {
	            this.quill.format(name, false, Quill.sources.USER);
	          }
	        });
	      } else {
	        this.quill.removeFormat(range.index, range.length, Quill.sources.USER);
	      }
	    },
	    direction(value) {
	      const {
	        align
	      } = this.quill.getFormat();
	      if (value === 'rtl' && align == null) {
	        this.quill.format('align', 'right', Quill.sources.USER);
	      } else if (!value && align === 'right') {
	        this.quill.format('align', false, Quill.sources.USER);
	      }
	      this.quill.format('direction', value, Quill.sources.USER);
	    },
	    indent(value) {
	      const range = this.quill.getSelection();
	      // @ts-expect-error
	      const formats = this.quill.getFormat(range);
	      // @ts-expect-error
	      const indent = parseInt(formats.indent || 0, 10);
	      if (value === '+1' || value === '-1') {
	        let modifier = value === '+1' ? 1 : -1;
	        if (formats.direction === 'rtl') modifier *= -1;
	        this.quill.format('indent', indent + modifier, Quill.sources.USER);
	      }
	    },
	    link(value) {
	      if (value === true) {
	        value = prompt('Enter link URL:'); // eslint-disable-line no-alert
	      }
	      this.quill.format('link', value, Quill.sources.USER);
	    },
	    list(value) {
	      const range = this.quill.getSelection();
	      // @ts-expect-error
	      const formats = this.quill.getFormat(range);
	      if (value === 'check') {
	        if (formats.list === 'checked' || formats.list === 'unchecked') {
	          this.quill.format('list', false, Quill.sources.USER);
	        } else {
	          this.quill.format('list', 'unchecked', Quill.sources.USER);
	        }
	      } else {
	        this.quill.format('list', value, Quill.sources.USER);
	      }
	    }
	  }
	};

	const alignLeftIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"13\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"9\" y1=\"4\" y2=\"4\"/></svg>";
	const alignCenterIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"14\" x2=\"4\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"12\" x2=\"6\" y1=\"4\" y2=\"4\"/></svg>";
	const alignRightIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"5\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"9\" y1=\"4\" y2=\"4\"/></svg>";
	const alignJustifyIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"4\" y2=\"4\"/></svg>";
	const backgroundIcon = "<svg viewbox=\"0 0 18 18\"><g class=\"ql-fill ql-color-label\"><polygon points=\"6 6.868 6 6 5 6 5 7 5.942 7 6 6.868\"/><rect height=\"1\" width=\"1\" x=\"4\" y=\"4\"/><polygon points=\"6.817 5 6 5 6 6 6.38 6 6.817 5\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"6\"/><rect height=\"1\" width=\"1\" x=\"3\" y=\"5\"/><rect height=\"1\" width=\"1\" x=\"4\" y=\"7\"/><polygon points=\"4 11.439 4 11 3 11 3 12 3.755 12 4 11.439\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"12\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"9\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"15\"/><polygon points=\"4.63 10 4 10 4 11 4.192 11 4.63 10\"/><rect height=\"1\" width=\"1\" x=\"3\" y=\"8\"/><path d=\"M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z\"/><path d=\"M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z\"/><path d=\"M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z\"/><rect height=\"1\" width=\"1\" x=\"12\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"11\" y=\"3\"/><path d=\"M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"3\"/><rect height=\"1\" width=\"1\" x=\"6\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"3\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"5\" y=\"3\"/><rect height=\"1\" width=\"1\" x=\"9\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"14\"/><polygon points=\"13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174\"/><rect height=\"1\" width=\"1\" x=\"13\" y=\"7\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"5\"/><rect height=\"1\" width=\"1\" x=\"14\" y=\"6\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"8\"/><rect height=\"1\" width=\"1\" x=\"14\" y=\"9\"/><path d=\"M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z\"/><rect height=\"1\" width=\"1\" x=\"14\" y=\"3\"/><polygon points=\"12 6.868 12 6 11.62 6 12 6.868\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"12\" y=\"5\"/><rect height=\"1\" width=\"1\" x=\"13\" y=\"4\"/><polygon points=\"12.933 9 13 9 13 8 12.495 8 12.933 9\"/><rect height=\"1\" width=\"1\" x=\"9\" y=\"14\"/><rect height=\"1\" width=\"1\" x=\"8\" y=\"15\"/><path d=\"M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z\"/><rect height=\"1\" width=\"1\" x=\"5\" y=\"15\"/><path d=\"M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z\"/><rect height=\"1\" width=\"1\" x=\"11\" y=\"15\"/><path d=\"M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z\"/><rect height=\"1\" width=\"1\" x=\"14\" y=\"15\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"11\"/></g><polyline class=\"ql-stroke\" points=\"5.5 13 9 5 12.5 13\"/><line class=\"ql-stroke\" x1=\"11.63\" x2=\"6.38\" y1=\"11\" y2=\"11\"/></svg>";
	const blockquoteIcon = "<svg viewbox=\"0 0 18 18\"><rect class=\"ql-fill ql-stroke\" height=\"3\" width=\"3\" x=\"4\" y=\"5\"/><rect class=\"ql-fill ql-stroke\" height=\"3\" width=\"3\" x=\"11\" y=\"5\"/><path class=\"ql-even ql-fill ql-stroke\" d=\"M7,8c0,4.031-3,5-3,5\"/><path class=\"ql-even ql-fill ql-stroke\" d=\"M14,8c0,4.031-3,5-3,5\"/></svg>";
	const boldIcon = "<svg viewbox=\"0 0 18 18\"><path class=\"ql-stroke\" d=\"M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z\"/><path class=\"ql-stroke\" d=\"M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z\"/></svg>";
	const cleanIcon = "<svg class=\"\" viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"5\" x2=\"13\" y1=\"3\" y2=\"3\"/><line class=\"ql-stroke\" x1=\"6\" x2=\"9.35\" y1=\"12\" y2=\"3\"/><line class=\"ql-stroke\" x1=\"11\" x2=\"15\" y1=\"11\" y2=\"15\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"11\" y1=\"11\" y2=\"15\"/><rect class=\"ql-fill\" height=\"1\" rx=\"0.5\" ry=\"0.5\" width=\"7\" x=\"2\" y=\"14\"/></svg>";
	const codeIcon = "<svg viewbox=\"0 0 18 18\"><polyline class=\"ql-even ql-stroke\" points=\"5 7 3 9 5 11\"/><polyline class=\"ql-even ql-stroke\" points=\"13 7 15 9 13 11\"/><line class=\"ql-stroke\" x1=\"10\" x2=\"8\" y1=\"5\" y2=\"13\"/></svg>";
	const colorIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-color-label ql-stroke ql-transparent\" x1=\"3\" x2=\"15\" y1=\"15\" y2=\"15\"/><polyline class=\"ql-stroke\" points=\"5.5 11 9 3 12.5 11\"/><line class=\"ql-stroke\" x1=\"11.63\" x2=\"6.38\" y1=\"9\" y2=\"9\"/></svg>";
	const directionLeftToRightIcon = "<svg viewbox=\"0 0 18 18\"><polygon class=\"ql-stroke ql-fill\" points=\"3 11 5 9 3 7 3 11\"/><line class=\"ql-stroke ql-fill\" x1=\"15\" x2=\"11\" y1=\"4\" y2=\"4\"/><path class=\"ql-fill\" d=\"M11,3a3,3,0,0,0,0,6h1V3H11Z\"/><rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"11\" y=\"4\"/><rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"13\" y=\"4\"/></svg>";
	const directionRightToLeftIcon = "<svg viewbox=\"0 0 18 18\"><polygon class=\"ql-stroke ql-fill\" points=\"15 12 13 10 15 8 15 12\"/><line class=\"ql-stroke ql-fill\" x1=\"9\" x2=\"5\" y1=\"4\" y2=\"4\"/><path class=\"ql-fill\" d=\"M5,3A3,3,0,0,0,5,9H6V3H5Z\"/><rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"5\" y=\"4\"/><rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"7\" y=\"4\"/></svg>";
	const formulaIcon = "<svg viewbox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z\"/><rect class=\"ql-fill\" height=\"1.6\" rx=\"0.8\" ry=\"0.8\" width=\"5\" x=\"5.15\" y=\"6.2\"/><path class=\"ql-fill\" d=\"M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z\"/></svg>";
	const headerIcon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z\"/></svg>";
	const header2Icon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z\"/></svg>";
	const header3Icon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z\"/></svg>";
	const header4Icon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm7.05371,7.96582v.38477c0,.39648-.165.60547-.46191.60547h-.47314v1.29785a.54085.54085,0,0,1-.605.60547h-.69336a.54085.54085,0,0,1-.605-.60547V12.95605H11.333a.5412.5412,0,0,1-.60547-.60547v-.15332a1.199,1.199,0,0,1,.22021-.748l2.56348-4.05957a.7819.7819,0,0,1,.72607-.39648h1.27637a.54085.54085,0,0,1,.605.60547v3.7627h.33008A.54055.54055,0,0,1,17.05371,11.96582ZM14.28125,8.7207h-.022a4.18969,4.18969,0,0,1-.38525.81348l-1.188,1.80469v.02246h1.5293V9.60059A7.04058,7.04058,0,0,1,14.28125,8.7207Z\"/></svg>";
	const header5Icon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M16.74023,12.18555a2.75131,2.75131,0,0,1-2.91553,2.80566,3.908,3.908,0,0,1-2.25537-.68164.54809.54809,0,0,1-.13184-.8252L11.73438,13c.209-.34082.48389-.36328.8252-.1543a2.23757,2.23757,0,0,0,1.1001.33008,1.01827,1.01827,0,0,0,1.1001-.96777c0-.61621-.53906-.97949-1.25439-.97949a2.15554,2.15554,0,0,0-.64893.09961,1.15209,1.15209,0,0,1-.814.01074l-.12109-.04395a.64116.64116,0,0,1-.45117-.71484l.231-3.00391a.56666.56666,0,0,1,.62744-.583H15.541a.54085.54085,0,0,1,.605.60547v.43945a.54085.54085,0,0,1-.605.60547H13.41748l-.04395.72559a1.29306,1.29306,0,0,1-.04395.30859h.022a2.39776,2.39776,0,0,1,.57227-.07715A2.53266,2.53266,0,0,1,16.74023,12.18555ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z\"/></svg>";
	const header6Icon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M14.51758,9.64453a1.85627,1.85627,0,0,0-1.24316.38477H13.252a1.73532,1.73532,0,0,1,1.72754-1.4082,2.66491,2.66491,0,0,1,.5498.06641c.35254.05469.57227.01074.70508-.40723l.16406-.5166a.53393.53393,0,0,0-.373-.75977,4.83723,4.83723,0,0,0-1.17773-.14258c-2.43164,0-3.7627,2.17773-3.7627,4.43359,0,2.47559,1.60645,3.69629,3.19043,3.69629A2.70585,2.70585,0,0,0,16.96,12.19727,2.43861,2.43861,0,0,0,14.51758,9.64453Zm-.23047,3.58691c-.67187,0-1.22168-.81445-1.22168-1.45215,0-.47363.30762-.583.72559-.583.96875,0,1.27734.59375,1.27734,1.12207A.82182.82182,0,0,1,14.28711,13.23145ZM10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z\"/></svg>";
	const italicIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"7\" x2=\"13\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"5\" x2=\"11\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"8\" x2=\"10\" y1=\"14\" y2=\"4\"/></svg>";
	const imageIcon = "<svg viewbox=\"0 0 18 18\"><rect class=\"ql-stroke\" height=\"10\" width=\"12\" x=\"3\" y=\"4\"/><circle class=\"ql-fill\" cx=\"6\" cy=\"7\" r=\"1\"/><polyline class=\"ql-even ql-fill\" points=\"5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12\"/></svg>";
	const indentIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"9\" y2=\"9\"/><polyline class=\"ql-fill ql-stroke\" points=\"3 7 3 11 5 9 3 7\"/></svg>";
	const outdentIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"9\" y2=\"9\"/><polyline class=\"ql-stroke\" points=\"5 7 5 11 3 9 5 7\"/></svg>";
	const linkIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"7\" x2=\"11\" y1=\"7\" y2=\"11\"/><path class=\"ql-even ql-stroke\" d=\"M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z\"/><path class=\"ql-even ql-stroke\" d=\"M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z\"/></svg>";
	const listBulletIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"6\" x2=\"15\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"6\" x2=\"15\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"6\" x2=\"15\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"3\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"3\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"3\" y1=\"14\" y2=\"14\"/></svg>";
	const listCheckIcon = "<svg class=\"\" viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"4\" y2=\"4\"/><polyline class=\"ql-stroke\" points=\"3 4 4 5 6 3\"/><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"14\" y2=\"14\"/><polyline class=\"ql-stroke\" points=\"3 14 4 15 6 13\"/><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"9\" y2=\"9\"/><polyline class=\"ql-stroke\" points=\"3 9 4 10 6 8\"/></svg>";
	const listOrderedIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"7\" x2=\"15\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"7\" x2=\"15\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"7\" x2=\"15\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke ql-thin\" x1=\"2.5\" x2=\"4.5\" y1=\"5.5\" y2=\"5.5\"/><path class=\"ql-fill\" d=\"M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z\"/><path class=\"ql-stroke ql-thin\" d=\"M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156\"/><path class=\"ql-stroke ql-thin\" d=\"M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109\"/></svg>";
	const subscriptIcon = "<svg viewbox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z\"/><path class=\"ql-fill\" d=\"M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z\"/></svg>";
	const superscriptIcon = "<svg viewbox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z\"/><path class=\"ql-fill\" d=\"M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z\"/></svg>";
	const strikeIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke ql-thin\" x1=\"15.5\" x2=\"2.5\" y1=\"8.5\" y2=\"9.5\"/><path class=\"ql-fill\" d=\"M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z\"/><path class=\"ql-fill\" d=\"M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z\"/></svg>";
	const tableIcon = "<svg viewbox=\"0 0 18 18\"><rect class=\"ql-stroke\" height=\"12\" width=\"12\" x=\"3\" y=\"3\"/><rect class=\"ql-fill\" height=\"2\" width=\"3\" x=\"5\" y=\"5\"/><rect class=\"ql-fill\" height=\"2\" width=\"4\" x=\"9\" y=\"5\"/><g class=\"ql-fill ql-transparent\"><rect height=\"2\" width=\"3\" x=\"5\" y=\"8\"/><rect height=\"2\" width=\"4\" x=\"9\" y=\"8\"/><rect height=\"2\" width=\"3\" x=\"5\" y=\"11\"/><rect height=\"2\" width=\"4\" x=\"9\" y=\"11\"/></g></svg>";
	const underlineIcon = "<svg viewbox=\"0 0 18 18\"><path class=\"ql-stroke\" d=\"M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3\"/><rect class=\"ql-fill\" height=\"1\" rx=\"0.5\" ry=\"0.5\" width=\"12\" x=\"3\" y=\"15\"/></svg>";
	const videoIcon = "<svg viewbox=\"0 0 18 18\"><rect class=\"ql-stroke\" height=\"12\" width=\"12\" x=\"3\" y=\"3\"/><rect class=\"ql-fill\" height=\"12\" width=\"1\" x=\"5\" y=\"3\"/><rect class=\"ql-fill\" height=\"12\" width=\"1\" x=\"12\" y=\"3\"/><rect class=\"ql-fill\" height=\"2\" width=\"8\" x=\"5\" y=\"8\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"5\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"7\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"10\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"12\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"5\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"7\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"10\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"12\"/></svg>";
	var Icons = {
	  align: {
	    '': alignLeftIcon,
	    center: alignCenterIcon,
	    right: alignRightIcon,
	    justify: alignJustifyIcon
	  },
	  background: backgroundIcon,
	  blockquote: blockquoteIcon,
	  bold: boldIcon,
	  clean: cleanIcon,
	  code: codeIcon,
	  'code-block': codeIcon,
	  color: colorIcon,
	  direction: {
	    '': directionLeftToRightIcon,
	    rtl: directionRightToLeftIcon
	  },
	  formula: formulaIcon,
	  header: {
	    '1': headerIcon,
	    '2': header2Icon,
	    '3': header3Icon,
	    '4': header4Icon,
	    '5': header5Icon,
	    '6': header6Icon
	  },
	  italic: italicIcon,
	  image: imageIcon,
	  indent: {
	    '+1': indentIcon,
	    '-1': outdentIcon
	  },
	  link: linkIcon,
	  list: {
	    bullet: listBulletIcon,
	    check: listCheckIcon,
	    ordered: listOrderedIcon
	  },
	  script: {
	    sub: subscriptIcon,
	    super: superscriptIcon
	  },
	  strike: strikeIcon,
	  table: tableIcon,
	  underline: underlineIcon,
	  video: videoIcon
	};

	const DropdownIcon = "<svg viewbox=\"0 0 18 18\"><polygon class=\"ql-stroke\" points=\"7 11 9 13 11 11 7 11\"/><polygon class=\"ql-stroke\" points=\"7 7 9 5 11 7 7 7\"/></svg>";
	let optionsCounter = 0;
	function toggleAriaAttribute(element, attribute) {
	  element.setAttribute(attribute, `${!(element.getAttribute(attribute) === 'true')}`);
	}
	class Picker {
	  constructor(select) {
	    this.select = select;
	    this.container = document.createElement('span');
	    this.buildPicker();
	    this.select.style.display = 'none';
	    // @ts-expect-error Fix me later
	    this.select.parentNode.insertBefore(this.container, this.select);
	    this.label.addEventListener('mousedown', () => {
	      this.togglePicker();
	    });
	    this.label.addEventListener('keydown', event => {
	      switch (event.key) {
	        case 'Enter':
	          this.togglePicker();
	          break;
	        case 'Escape':
	          this.escape();
	          event.preventDefault();
	          break;
	      }
	    });
	    this.select.addEventListener('change', this.update.bind(this));
	  }
	  togglePicker() {
	    this.container.classList.toggle('ql-expanded');
	    // Toggle aria-expanded and aria-hidden to make the picker accessible
	    toggleAriaAttribute(this.label, 'aria-expanded');
	    // @ts-expect-error
	    toggleAriaAttribute(this.options, 'aria-hidden');
	  }
	  buildItem(option) {
	    const item = document.createElement('span');
	    // @ts-expect-error
	    item.tabIndex = '0';
	    item.setAttribute('role', 'button');
	    item.classList.add('ql-picker-item');
	    const value = option.getAttribute('value');
	    if (value) {
	      item.setAttribute('data-value', value);
	    }
	    if (option.textContent) {
	      item.setAttribute('data-label', option.textContent);
	    }
	    item.addEventListener('click', () => {
	      this.selectItem(item, true);
	    });
	    item.addEventListener('keydown', event => {
	      switch (event.key) {
	        case 'Enter':
	          this.selectItem(item, true);
	          event.preventDefault();
	          break;
	        case 'Escape':
	          this.escape();
	          event.preventDefault();
	          break;
	      }
	    });
	    return item;
	  }
	  buildLabel() {
	    const label = document.createElement('span');
	    label.classList.add('ql-picker-label');
	    label.innerHTML = DropdownIcon;
	    // @ts-expect-error
	    label.tabIndex = '0';
	    label.setAttribute('role', 'button');
	    label.setAttribute('aria-expanded', 'false');
	    this.container.appendChild(label);
	    return label;
	  }
	  buildOptions() {
	    const options = document.createElement('span');
	    options.classList.add('ql-picker-options');

	    // Don't want screen readers to read this until options are visible
	    options.setAttribute('aria-hidden', 'true');
	    // @ts-expect-error
	    options.tabIndex = '-1';

	    // Need a unique id for aria-controls
	    options.id = `ql-picker-options-${optionsCounter}`;
	    optionsCounter += 1;
	    this.label.setAttribute('aria-controls', options.id);

	    // @ts-expect-error
	    this.options = options;
	    Array.from(this.select.options).forEach(option => {
	      const item = this.buildItem(option);
	      options.appendChild(item);
	      if (option.selected === true) {
	        this.selectItem(item);
	      }
	    });
	    this.container.appendChild(options);
	  }
	  buildPicker() {
	    Array.from(this.select.attributes).forEach(item => {
	      this.container.setAttribute(item.name, item.value);
	    });
	    this.container.classList.add('ql-picker');
	    this.label = this.buildLabel();
	    this.buildOptions();
	  }
	  escape() {
	    // Close menu and return focus to trigger label
	    this.close();
	    // Need setTimeout for accessibility to ensure that the browser executes
	    // focus on the next process thread and after any DOM content changes
	    setTimeout(() => this.label.focus(), 1);
	  }
	  close() {
	    this.container.classList.remove('ql-expanded');
	    this.label.setAttribute('aria-expanded', 'false');
	    // @ts-expect-error
	    this.options.setAttribute('aria-hidden', 'true');
	  }
	  selectItem(item) {
	    let trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    const selected = this.container.querySelector('.ql-selected');
	    if (item === selected) return;
	    if (selected != null) {
	      selected.classList.remove('ql-selected');
	    }
	    if (item == null) return;
	    item.classList.add('ql-selected');
	    // @ts-expect-error Fix me later
	    this.select.selectedIndex = Array.from(item.parentNode.children).indexOf(item);
	    if (item.hasAttribute('data-value')) {
	      // @ts-expect-error Fix me later
	      this.label.setAttribute('data-value', item.getAttribute('data-value'));
	    } else {
	      this.label.removeAttribute('data-value');
	    }
	    if (item.hasAttribute('data-label')) {
	      // @ts-expect-error Fix me later
	      this.label.setAttribute('data-label', item.getAttribute('data-label'));
	    } else {
	      this.label.removeAttribute('data-label');
	    }
	    if (trigger) {
	      this.select.dispatchEvent(new Event('change'));
	      this.close();
	    }
	  }
	  update() {
	    let option;
	    if (this.select.selectedIndex > -1) {
	      const item =
	      // @ts-expect-error Fix me later
	      this.container.querySelector('.ql-picker-options').children[this.select.selectedIndex];
	      option = this.select.options[this.select.selectedIndex];
	      // @ts-expect-error
	      this.selectItem(item);
	    } else {
	      this.selectItem(null);
	    }
	    const isActive = option != null && option !== this.select.querySelector('option[selected]');
	    this.label.classList.toggle('ql-active', isActive);
	  }
	}

	class ColorPicker extends Picker {
	  constructor(select, label) {
	    super(select);
	    this.label.innerHTML = label;
	    this.container.classList.add('ql-color-picker');
	    Array.from(this.container.querySelectorAll('.ql-picker-item')).slice(0, 7).forEach(item => {
	      item.classList.add('ql-primary');
	    });
	  }
	  buildItem(option) {
	    const item = super.buildItem(option);
	    item.style.backgroundColor = option.getAttribute('value') || '';
	    return item;
	  }
	  selectItem(item, trigger) {
	    super.selectItem(item, trigger);
	    const colorLabel = this.label.querySelector('.ql-color-label');
	    const value = item ? item.getAttribute('data-value') || '' : '';
	    if (colorLabel) {
	      if (colorLabel.tagName === 'line') {
	        colorLabel.style.stroke = value;
	      } else {
	        colorLabel.style.fill = value;
	      }
	    }
	  }
	}

	class IconPicker extends Picker {
	  constructor(select, icons) {
	    super(select);
	    this.container.classList.add('ql-icon-picker');
	    Array.from(this.container.querySelectorAll('.ql-picker-item')).forEach(item => {
	      item.innerHTML = icons[item.getAttribute('data-value') || ''];
	    });
	    this.defaultItem = this.container.querySelector('.ql-selected');
	    this.selectItem(this.defaultItem);
	  }
	  selectItem(target, trigger) {
	    super.selectItem(target, trigger);
	    const item = target || this.defaultItem;
	    if (item != null) {
	      if (this.label.innerHTML === item.innerHTML) return;
	      this.label.innerHTML = item.innerHTML;
	    }
	  }
	}

	const isScrollable = el => {
	  const {
	    overflowY
	  } = getComputedStyle(el, null);
	  return overflowY !== 'visible' && overflowY !== 'clip';
	};
	class Tooltip {
	  constructor(quill, boundsContainer) {
	    this.quill = quill;
	    this.boundsContainer = boundsContainer || document.body;
	    this.root = quill.addContainer('ql-tooltip');
	    // @ts-expect-error
	    this.root.innerHTML = this.constructor.TEMPLATE;
	    if (isScrollable(this.quill.root)) {
	      this.quill.root.addEventListener('scroll', () => {
	        this.root.style.marginTop = `${ -1 * this.quill.root.scrollTop}px`;
	      });
	    }
	    this.hide();
	  }
	  hide() {
	    this.root.classList.add('ql-hidden');
	  }
	  position(reference) {
	    const left = reference.left + reference.width / 2 - this.root.offsetWidth / 2;
	    // root.scrollTop should be 0 if scrollContainer !== root
	    const top = reference.bottom + this.quill.root.scrollTop;
	    this.root.style.left = `${left}px`;
	    this.root.style.top = `${top}px`;
	    this.root.classList.remove('ql-flip');
	    const containerBounds = this.boundsContainer.getBoundingClientRect();
	    const rootBounds = this.root.getBoundingClientRect();
	    let shift = 0;
	    if (rootBounds.right > containerBounds.right) {
	      shift = containerBounds.right - rootBounds.right;
	      this.root.style.left = `${left + shift}px`;
	    }
	    if (rootBounds.left < containerBounds.left) {
	      shift = containerBounds.left - rootBounds.left;
	      this.root.style.left = `${left + shift}px`;
	    }
	    if (rootBounds.bottom > containerBounds.bottom) {
	      const height = rootBounds.bottom - rootBounds.top;
	      const verticalShift = reference.bottom - reference.top + height;
	      this.root.style.top = `${top - verticalShift}px`;
	      this.root.classList.add('ql-flip');
	    }
	    return shift;
	  }
	  show() {
	    this.root.classList.remove('ql-editing');
	    this.root.classList.remove('ql-hidden');
	  }
	}

	const ALIGNS = [false, 'center', 'right', 'justify'];
	const COLORS = ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466'];
	const FONTS = [false, 'serif', 'monospace'];
	const HEADERS = ['1', '2', '3', false];
	const SIZES = ['small', false, 'large', 'huge'];
	class BaseTheme extends Theme {
	  constructor(quill, options) {
	    super(quill, options);
	    const listener = e => {
	      if (!document.body.contains(quill.root)) {
	        document.body.removeEventListener('click', listener);
	        return;
	      }
	      if (this.tooltip != null &&
	      // @ts-expect-error
	      !this.tooltip.root.contains(e.target) &&
	      // @ts-expect-error
	      document.activeElement !== this.tooltip.textbox && !this.quill.hasFocus()) {
	        this.tooltip.hide();
	      }
	      if (this.pickers != null) {
	        this.pickers.forEach(picker => {
	          // @ts-expect-error
	          if (!picker.container.contains(e.target)) {
	            picker.close();
	          }
	        });
	      }
	    };
	    quill.emitter.listenDOM('click', document.body, listener);
	  }
	  addModule(name) {
	    const module = super.addModule(name);
	    if (name === 'toolbar') {
	      // @ts-expect-error
	      this.extendToolbar(module);
	    }
	    return module;
	  }
	  buildButtons(buttons, icons) {
	    Array.from(buttons).forEach(button => {
	      const className = button.getAttribute('class') || '';
	      className.split(/\s+/).forEach(name => {
	        if (!name.startsWith('ql-')) return;
	        name = name.slice('ql-'.length);
	        if (icons[name] == null) return;
	        if (name === 'direction') {
	          // @ts-expect-error
	          button.innerHTML = icons[name][''] + icons[name].rtl;
	        } else if (typeof icons[name] === 'string') {
	          // @ts-expect-error
	          button.innerHTML = icons[name];
	        } else {
	          // @ts-expect-error
	          const value = button.value || '';
	          // @ts-expect-error
	          if (value != null && icons[name][value]) {
	            // @ts-expect-error
	            button.innerHTML = icons[name][value];
	          }
	        }
	      });
	    });
	  }
	  buildPickers(selects, icons) {
	    this.pickers = Array.from(selects).map(select => {
	      if (select.classList.contains('ql-align')) {
	        if (select.querySelector('option') == null) {
	          fillSelect(select, ALIGNS);
	        }
	        if (typeof icons.align === 'object') {
	          return new IconPicker(select, icons.align);
	        }
	      }
	      if (select.classList.contains('ql-background') || select.classList.contains('ql-color')) {
	        const format = select.classList.contains('ql-background') ? 'background' : 'color';
	        if (select.querySelector('option') == null) {
	          fillSelect(select, COLORS, format === 'background' ? '#ffffff' : '#000000');
	        }
	        return new ColorPicker(select, icons[format]);
	      }
	      if (select.querySelector('option') == null) {
	        if (select.classList.contains('ql-font')) {
	          fillSelect(select, FONTS);
	        } else if (select.classList.contains('ql-header')) {
	          fillSelect(select, HEADERS);
	        } else if (select.classList.contains('ql-size')) {
	          fillSelect(select, SIZES);
	        }
	      }
	      return new Picker(select);
	    });
	    const update = () => {
	      this.pickers.forEach(picker => {
	        picker.update();
	      });
	    };
	    this.quill.on(Emitter.events.EDITOR_CHANGE, update);
	  }
	}
	BaseTheme.DEFAULTS = merge({}, Theme.DEFAULTS, {
	  modules: {
	    toolbar: {
	      handlers: {
	        formula() {
	          this.quill.theme.tooltip.edit('formula');
	        },
	        image() {
	          let fileInput = this.container.querySelector('input.ql-image[type=file]');
	          if (fileInput == null) {
	            fileInput = document.createElement('input');
	            fileInput.setAttribute('type', 'file');
	            fileInput.setAttribute('accept', this.quill.uploader.options.mimetypes.join(', '));
	            fileInput.classList.add('ql-image');
	            fileInput.addEventListener('change', () => {
	              const range = this.quill.getSelection(true);
	              this.quill.uploader.upload(range, fileInput.files);
	              fileInput.value = '';
	            });
	            this.container.appendChild(fileInput);
	          }
	          fileInput.click();
	        },
	        video() {
	          this.quill.theme.tooltip.edit('video');
	        }
	      }
	    }
	  }
	});
	class BaseTooltip extends Tooltip {
	  constructor(quill, boundsContainer) {
	    super(quill, boundsContainer);
	    this.textbox = this.root.querySelector('input[type="text"]');
	    this.listen();
	  }
	  listen() {
	    // @ts-expect-error Fix me later
	    this.textbox.addEventListener('keydown', event => {
	      if (event.key === 'Enter') {
	        this.save();
	        event.preventDefault();
	      } else if (event.key === 'Escape') {
	        this.cancel();
	        event.preventDefault();
	      }
	    });
	  }
	  cancel() {
	    this.hide();
	    this.restoreFocus();
	  }
	  edit() {
	    let mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'link';
	    let preview = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	    this.root.classList.remove('ql-hidden');
	    this.root.classList.add('ql-editing');
	    if (this.textbox == null) return;
	    if (preview != null) {
	      this.textbox.value = preview;
	    } else if (mode !== this.root.getAttribute('data-mode')) {
	      this.textbox.value = '';
	    }
	    const bounds = this.quill.getBounds(this.quill.selection.savedRange);
	    if (bounds != null) {
	      this.position(bounds);
	    }
	    this.textbox.select();
	    this.textbox.setAttribute('placeholder', this.textbox.getAttribute(`data-${mode}`) || '');
	    this.root.setAttribute('data-mode', mode);
	  }
	  restoreFocus() {
	    this.quill.focus({
	      preventScroll: true
	    });
	  }
	  save() {
	    // @ts-expect-error Fix me later
	    let {
	      value
	    } = this.textbox;
	    switch (this.root.getAttribute('data-mode')) {
	      case 'link':
	        {
	          const {
	            scrollTop
	          } = this.quill.root;
	          if (this.linkRange) {
	            this.quill.formatText(this.linkRange, 'link', value, Emitter.sources.USER);
	            delete this.linkRange;
	          } else {
	            this.restoreFocus();
	            this.quill.format('link', value, Emitter.sources.USER);
	          }
	          this.quill.root.scrollTop = scrollTop;
	          break;
	        }
	      case 'video':
	        {
	          value = extractVideoUrl(value);
	        }
	      // eslint-disable-next-line no-fallthrough
	      case 'formula':
	        {
	          if (!value) break;
	          const range = this.quill.getSelection(true);
	          if (range != null) {
	            const index = range.index + range.length;
	            this.quill.insertEmbed(index,
	            // @ts-expect-error Fix me later
	            this.root.getAttribute('data-mode'), value, Emitter.sources.USER);
	            if (this.root.getAttribute('data-mode') === 'formula') {
	              this.quill.insertText(index + 1, ' ', Emitter.sources.USER);
	            }
	            this.quill.setSelection(index + 2, Emitter.sources.USER);
	          }
	          break;
	        }
	    }
	    // @ts-expect-error Fix me later
	    this.textbox.value = '';
	    this.hide();
	  }
	}
	function extractVideoUrl(url) {
	  let match = url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
	  if (match) {
	    return `${match[1] || 'https'}://www.youtube.com/embed/${match[2]}?showinfo=0`;
	  }
	  // eslint-disable-next-line no-cond-assign
	  if (match = url.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) {
	    return `${match[1] || 'https'}://player.vimeo.com/video/${match[2]}/`;
	  }
	  return url;
	}
	function fillSelect(select, values) {
	  let defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	  values.forEach(value => {
	    const option = document.createElement('option');
	    if (value === defaultValue) {
	      option.setAttribute('selected', 'selected');
	    } else {
	      option.setAttribute('value', String(value));
	    }
	    select.appendChild(option);
	  });
	}

	const TOOLBAR_CONFIG$1 = [['bold', 'italic', 'link'], [{
	  header: 1
	}, {
	  header: 2
	}, 'blockquote']];
	class BubbleTooltip extends BaseTooltip {
	  static TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', '</div>'].join('');
	  constructor(quill, bounds) {
	    super(quill, bounds);
	    this.quill.on(Emitter.events.EDITOR_CHANGE, (type, range, oldRange, source) => {
	      if (type !== Emitter.events.SELECTION_CHANGE) return;
	      if (range != null && range.length > 0 && source === Emitter.sources.USER) {
	        this.show();
	        // Lock our width so we will expand beyond our offsetParent boundaries
	        this.root.style.left = '0px';
	        this.root.style.width = '';
	        this.root.style.width = `${this.root.offsetWidth}px`;
	        const lines = this.quill.getLines(range.index, range.length);
	        if (lines.length === 1) {
	          const bounds = this.quill.getBounds(range);
	          if (bounds != null) {
	            this.position(bounds);
	          }
	        } else {
	          const lastLine = lines[lines.length - 1];
	          const index = this.quill.getIndex(lastLine);
	          const length = Math.min(lastLine.length() - 1, range.index + range.length - index);
	          const indexBounds = this.quill.getBounds(new Range(index, length));
	          if (indexBounds != null) {
	            this.position(indexBounds);
	          }
	        }
	      } else if (document.activeElement !== this.textbox && this.quill.hasFocus()) {
	        this.hide();
	      }
	    });
	  }
	  listen() {
	    super.listen();
	    // @ts-expect-error Fix me later
	    this.root.querySelector('.ql-close').addEventListener('click', () => {
	      this.root.classList.remove('ql-editing');
	    });
	    this.quill.on(Emitter.events.SCROLL_OPTIMIZE, () => {
	      // Let selection be restored by toolbar handlers before repositioning
	      setTimeout(() => {
	        if (this.root.classList.contains('ql-hidden')) return;
	        const range = this.quill.getSelection();
	        if (range != null) {
	          const bounds = this.quill.getBounds(range);
	          if (bounds != null) {
	            this.position(bounds);
	          }
	        }
	      }, 1);
	    });
	  }
	  cancel() {
	    this.show();
	  }
	  position(reference) {
	    const shift = super.position(reference);
	    const arrow = this.root.querySelector('.ql-tooltip-arrow');
	    // @ts-expect-error
	    arrow.style.marginLeft = '';
	    if (shift !== 0) {
	      // @ts-expect-error
	      arrow.style.marginLeft = `${ -1 * shift - arrow.offsetWidth / 2}px`;
	    }
	    return shift;
	  }
	}
	class BubbleTheme extends BaseTheme {
	  constructor(quill, options) {
	    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
	      options.modules.toolbar.container = TOOLBAR_CONFIG$1;
	    }
	    super(quill, options);
	    this.quill.container.classList.add('ql-bubble');
	  }
	  extendToolbar(toolbar) {
	    // @ts-expect-error
	    this.tooltip = new BubbleTooltip(this.quill, this.options.bounds);
	    if (toolbar.container != null) {
	      this.tooltip.root.appendChild(toolbar.container);
	      this.buildButtons(toolbar.container.querySelectorAll('button'), Icons);
	      this.buildPickers(toolbar.container.querySelectorAll('select'), Icons);
	    }
	  }
	}
	BubbleTheme.DEFAULTS = merge({}, BaseTheme.DEFAULTS, {
	  modules: {
	    toolbar: {
	      handlers: {
	        link(value) {
	          if (!value) {
	            this.quill.format('link', false, Quill.sources.USER);
	          } else {
	            // @ts-expect-error
	            this.quill.theme.tooltip.edit();
	          }
	        }
	      }
	    }
	  }
	});

	const TOOLBAR_CONFIG = [[{
	  header: ['1', '2', '3', false]
	}], ['bold', 'italic', 'underline', 'link'], [{
	  list: 'ordered'
	}, {
	  list: 'bullet'
	}], ['clean']];
	class SnowTooltip extends BaseTooltip {
	  static TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join('');
	  preview = this.root.querySelector('a.ql-preview');
	  listen() {
	    super.listen();
	    // @ts-expect-error Fix me later
	    this.root.querySelector('a.ql-action').addEventListener('click', event => {
	      if (this.root.classList.contains('ql-editing')) {
	        this.save();
	      } else {
	        // @ts-expect-error Fix me later
	        this.edit('link', this.preview.textContent);
	      }
	      event.preventDefault();
	    });
	    // @ts-expect-error Fix me later
	    this.root.querySelector('a.ql-remove').addEventListener('click', event => {
	      if (this.linkRange != null) {
	        const range = this.linkRange;
	        this.restoreFocus();
	        this.quill.formatText(range, 'link', false, Emitter.sources.USER);
	        delete this.linkRange;
	      }
	      event.preventDefault();
	      this.hide();
	    });
	    this.quill.on(Emitter.events.SELECTION_CHANGE, (range, oldRange, source) => {
	      if (range == null) return;
	      if (range.length === 0 && source === Emitter.sources.USER) {
	        const [link, offset] = this.quill.scroll.descendant(Link, range.index);
	        if (link != null) {
	          this.linkRange = new Range(range.index - offset, link.length());
	          const preview = Link.formats(link.domNode);
	          // @ts-expect-error Fix me later
	          this.preview.textContent = preview;
	          // @ts-expect-error Fix me later
	          this.preview.setAttribute('href', preview);
	          this.show();
	          const bounds = this.quill.getBounds(this.linkRange);
	          if (bounds != null) {
	            this.position(bounds);
	          }
	          return;
	        }
	      } else {
	        delete this.linkRange;
	      }
	      this.hide();
	    });
	  }
	  show() {
	    super.show();
	    this.root.removeAttribute('data-mode');
	  }
	}
	class SnowTheme extends BaseTheme {
	  constructor(quill, options) {
	    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
	      options.modules.toolbar.container = TOOLBAR_CONFIG;
	    }
	    super(quill, options);
	    this.quill.container.classList.add('ql-snow');
	  }
	  extendToolbar(toolbar) {
	    if (toolbar.container != null) {
	      toolbar.container.classList.add('ql-snow');
	      this.buildButtons(toolbar.container.querySelectorAll('button'), Icons);
	      this.buildPickers(toolbar.container.querySelectorAll('select'), Icons);
	      // @ts-expect-error
	      this.tooltip = new SnowTooltip(this.quill, this.options.bounds);
	      if (toolbar.container.querySelector('.ql-link')) {
	        this.quill.keyboard.addBinding({
	          key: 'k',
	          shortKey: true
	        }, (_range, context) => {
	          toolbar.handlers.link.call(toolbar, !context.format.link);
	        });
	      }
	    }
	  }
	}
	SnowTheme.DEFAULTS = merge({}, BaseTheme.DEFAULTS, {
	  modules: {
	    toolbar: {
	      handlers: {
	        link(value) {
	          if (value) {
	            const range = this.quill.getSelection();
	            if (range == null || range.length === 0) return;
	            let preview = this.quill.getText(range);
	            if (/^\S+@\S+\.\S+$/.test(preview) && preview.indexOf('mailto:') !== 0) {
	              preview = `mailto:${preview}`;
	            }
	            // @ts-expect-error
	            const {
	              tooltip
	            } = this.quill.theme;
	            tooltip.edit('link', preview);
	          } else {
	            this.quill.format('link', false, Quill.sources.USER);
	          }
	        }
	      }
	    }
	  }
	});

	Quill.register({
	  'attributors/attribute/direction': DirectionAttribute,
	  'attributors/class/align': AlignClass,
	  'attributors/class/background': BackgroundClass,
	  'attributors/class/color': ColorClass,
	  'attributors/class/direction': DirectionClass,
	  'attributors/class/font': FontClass,
	  'attributors/class/size': SizeClass,
	  'attributors/style/align': AlignStyle,
	  'attributors/style/background': BackgroundStyle,
	  'attributors/style/color': ColorStyle,
	  'attributors/style/direction': DirectionStyle,
	  'attributors/style/font': FontStyle,
	  'attributors/style/size': SizeStyle
	}, true);
	Quill.register({
	  'formats/align': AlignClass,
	  'formats/direction': DirectionClass,
	  'formats/indent': IndentClass,
	  'formats/background': BackgroundStyle,
	  'formats/color': ColorStyle,
	  'formats/font': FontClass,
	  'formats/size': SizeClass,
	  'formats/blockquote': Blockquote,
	  'formats/code-block': CodeBlock,
	  'formats/header': Header,
	  'formats/list': ListItem,
	  'formats/bold': Bold,
	  'formats/code': Code,
	  'formats/italic': Italic,
	  'formats/link': Link,
	  'formats/script': Script,
	  'formats/strike': Strike,
	  'formats/underline': Underline,
	  'formats/formula': Formula,
	  'formats/image': Image,
	  'formats/video': Video,
	  'modules/syntax': Syntax,
	  'modules/table': Table,
	  'modules/toolbar': Toolbar,
	  'themes/bubble': BubbleTheme,
	  'themes/snow': SnowTheme,
	  'ui/icons': Icons,
	  'ui/picker': Picker,
	  'ui/icon-picker': IconPicker,
	  'ui/color-picker': ColorPicker,
	  'ui/tooltip': Tooltip
	}, true);

	var __defProp = Object.defineProperty;
	var __getOwnPropSymbols = Object.getOwnPropertySymbols;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __propIsEnum = Object.prototype.propertyIsEnumerable;
	var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
	var __spreadValues = (a, b) => {
	  for (var prop in b || (b = {}))
	    if (__hasOwnProp.call(b, prop))
	      __defNormalProp(a, prop, b[prop]);
	  if (__getOwnPropSymbols)
	    for (var prop of __getOwnPropSymbols(b)) {
	      if (__propIsEnum.call(b, prop))
	        __defNormalProp(a, prop, b[prop]);
	    }
	  return a;
	};
	class ReactQuill extends React.Component {
	  constructor(props) {
	    super(props);
	    this.editingAreaRef = React.createRef();
	    this.containerRef = React.createRef();
	    /*
	    Changing one of these props should cause a full re-render and a
	    re-instantiation of the Quill editor.
	    */
	    this.dirtyProps = [
	      "modules",
	      "formats",
	      "bounds",
	      "theme",
	      "children"
	    ];
	    /*
	    Changing one of these props should cause a regular update. These are mostly
	    props that act on the container, rather than the quillized editing area.
	    */
	    this.cleanProps = [
	      "id",
	      "className",
	      "style",
	      "placeholder",
	      "tabIndex",
	      "onChange",
	      "onChangeSelection",
	      "onFocus",
	      "onBlur",
	      "onKeyPress",
	      "onKeyDown",
	      "onKeyUp"
	    ];
	    this.state = {
	      generation: 0
	    };
	    /*
	    Tracks the internal selection of the Quill editor
	    */
	    this.selection = null;
	    this.onEditorChange = (eventName, rangeOrDelta, oldRangeOrDelta, source) => {
	      var _a, _b;
	      if (eventName === "text-change") {
	        (_a = this.onEditorChangeText) == null ? void 0 : _a.call(
	          this,
	          this.editor.getSemanticHTML(),
	          rangeOrDelta,
	          source,
	          this.unprivilegedEditor
	        );
	      } else if (eventName === "selection-change") {
	        (_b = this.onEditorChangeSelection) == null ? void 0 : _b.call(
	          this,
	          rangeOrDelta,
	          source,
	          this.unprivilegedEditor
	        );
	      }
	    };
	    const value = this.isControlled() ? props.value : props.defaultValue;
	    this.value = value != null ? value : "";
	  }
	  validateProps(props) {
	    if (React.Children.count(props.children) > 1)
	      throw new Error(
	        "The Quill editing area can only be composed of a single React element."
	      );
	    if (React.Children.count(props.children)) {
	      const child = React.Children.only(props.children);
	      if ((child == null ? void 0 : child.type) === "textarea")
	        throw new Error("Quill does not support editing on a <textarea>. Use a <div> instead.");
	    }
	    if (this.lastDeltaChangeSet && props.value === this.lastDeltaChangeSet)
	      throw new Error(
	        "You are passing the `delta` object from the `onChange` event back as `value`. You most probably want `editor.getContents()` instead. See: https://github.com/zenoamaro/react-quill#using-deltas"
	      );
	  }
	  shouldComponentUpdate(nextProps, nextState) {
	    var _a;
	    this.validateProps(nextProps);
	    if (!this.editor || this.state.generation !== nextState.generation) {
	      return true;
	    }
	    if ("value" in nextProps) {
	      const prevContents = this.getEditorContents();
	      const nextContents = (_a = nextProps.value) != null ? _a : "";
	      if (!this.isEqualValue(nextContents, prevContents)) {
	        this.setEditorContents(this.editor, nextContents);
	      }
	    }
	    if (nextProps.readOnly !== this.props.readOnly) {
	      this.setEditorReadOnly(this.editor, nextProps.readOnly);
	    }
	    return [...this.cleanProps, ...this.dirtyProps].some((prop) => {
	      return !isEqual$1(nextProps[prop], this.props[prop]);
	    });
	  }
	  shouldComponentRegenerate(nextProps) {
	    return this.dirtyProps.some((prop) => {
	      return !isEqual$1(nextProps[prop], this.props[prop]);
	    });
	  }
	  componentDidMount() {
	    this.instantiateEditor();
	    this.setEditorContents(this.editor, this.getEditorContents());
	  }
	  componentWillUnmount() {
	    this.destroyEditor();
	  }
	  componentDidUpdate(prevProps, prevState) {
	    if (this.editor && this.shouldComponentRegenerate(prevProps)) {
	      const delta = this.editor.getContents();
	      const selection = this.editor.getSelection();
	      this.regenerationSnapshot = { delta, selection };
	      this.setState({ generation: this.state.generation + 1 });
	      this.destroyEditor();
	    }
	    if (this.editor && prevProps.placeholder !== this.props.placeholder) {
	      this.editor.root.dataset.placeholder = this.props.placeholder || "";
	    }
	    if (this.state.generation !== prevState.generation) {
	      const { delta, selection } = this.regenerationSnapshot;
	      delete this.regenerationSnapshot;
	      this.instantiateEditor();
	      const editor = this.editor;
	      editor.setContents(delta);
	      postpone(() => this.setEditorSelection(editor, selection));
	    }
	  }
	  instantiateEditor() {
	    if (this.editor) {
	      this.hookEditor(this.editor);
	    } else {
	      this.editor = this.createEditor(this.getEditingArea(), this.getEditorConfig());
	    }
	  }
	  destroyEditor() {
	    var _a, _b;
	    if (!this.editor) return;
	    this.unhookEditor(this.editor);
	    const toolbar = (_a = this.props.modules) == null ? void 0 : _a.toolbar;
	    const usingExternalToolbar = typeof toolbar === "object" && toolbar && "container" in toolbar && typeof toolbar.container === "string" || typeof toolbar === "string";
	    if (!usingExternalToolbar) {
	      const leftOverToolbar = (_b = this.containerRef.current) == null ? void 0 : _b.querySelector(".ql-toolbar");
	      if (leftOverToolbar) {
	        leftOverToolbar.remove();
	      }
	    }
	    delete this.editor;
	  }
	  /*
	  We consider the component to be controlled if `value` is being sent in props.
	  */
	  isControlled() {
	    return "value" in this.props;
	  }
	  getEditorConfig() {
	    return {
	      bounds: this.props.bounds,
	      formats: this.props.formats,
	      modules: this.props.modules,
	      placeholder: this.props.placeholder,
	      readOnly: this.props.readOnly,
	      tabIndex: this.props.tabIndex,
	      theme: this.props.theme
	    };
	  }
	  getEditor() {
	    if (!this.editor) throw new Error("Accessing non-instantiated editor");
	    return this.editor;
	  }
	  /**
	  Creates an editor on the given element. The editor will be passed the
	  configuration, have its events bound,
	  */
	  createEditor(element, config) {
	    const editor = new Quill(element, config);
	    if (config.tabIndex != null) {
	      this.setEditorTabIndex(editor, config.tabIndex);
	    }
	    this.hookEditor(editor);
	    return editor;
	  }
	  hookEditor(editor) {
	    this.unprivilegedEditor = this.makeUnprivilegedEditor(editor);
	    editor.on("editor-change", this.onEditorChange);
	  }
	  unhookEditor(editor) {
	    editor.off("editor-change", this.onEditorChange);
	  }
	  getEditorContents() {
	    return this.value;
	  }
	  getEditorSelection() {
	    return this.selection;
	  }
	  /*
	  True if the value is a Delta instance or a Delta look-alike.
	  */
	  isDelta(value) {
	    return value && value.ops;
	  }
	  /*
	  Special comparison function that knows how to compare Deltas.
	  */
	  isEqualValue(value, nextValue) {
	    if (this.isDelta(value) && this.isDelta(nextValue)) {
	      return isEqual$1(value.ops, nextValue.ops);
	    } else {
	      return isEqual$1(value, nextValue);
	    }
	  }
	  /*
	  Replace the contents of the editor, but keep the previous selection hanging
	  around so that the cursor won't move.
	  */
	  setEditorContents(editor, value) {
	    this.value = value;
	    const sel = this.getEditorSelection();
	    if (typeof value === "string") {
	      editor.setContents(editor.clipboard.convert({ html: value }));
	    } else {
	      editor.setContents(value);
	    }
	    postpone(() => this.setEditorSelection(editor, sel));
	  }
	  setEditorSelection(editor, range) {
	    this.selection = range;
	    if (range) {
	      const length = editor.getLength();
	      range.index = Math.max(0, Math.min(range.index, length - 1));
	      range.length = Math.max(0, Math.min(range.length, length - 1 - range.index));
	      editor.setSelection(range);
	    }
	  }
	  setEditorTabIndex(editor, tabIndex) {
	    var _a;
	    if ((_a = editor == null ? void 0 : editor.scroll) == null ? void 0 : _a.domNode) {
	      editor.scroll.domNode.tabIndex = tabIndex;
	    }
	  }
	  setEditorReadOnly(editor, value) {
	    if (value) {
	      editor.disable();
	    } else {
	      editor.enable();
	    }
	  }
	  /*
	  Returns a weaker, unprivileged proxy object that only exposes read-only
	  accessors found on the editor instance, without any state-modifying methods.
	  */
	  makeUnprivilegedEditor(editor) {
	    const e = editor;
	    return {
	      getHTML: () => e.root.innerHTML,
	      getSemanticHTML: e.getSemanticHTML.bind(e),
	      getLength: e.getLength.bind(e),
	      getText: e.getText.bind(e),
	      getContents: e.getContents.bind(e),
	      getSelection: e.getSelection.bind(e),
	      getBounds: e.getBounds.bind(e)
	    };
	  }
	  getEditingArea() {
	    const element = this.editingAreaRef.current;
	    if (!element) {
	      throw new Error("Cannot find element for editing area");
	    }
	    if (element.nodeType === 3) {
	      throw new Error("Editing area cannot be a text node");
	    }
	    return element;
	  }
	  /*
	  Renders an editor area, unless it has been provided one to clone.
	  */
	  renderEditingArea() {
	    const { children, preserveWhitespace } = this.props;
	    const { generation } = this.state;
	    const properties = {
	      key: generation,
	      ref: this.editingAreaRef
	    };
	    if (React.Children.count(children)) {
	      return React.cloneElement(React.Children.only(children), properties);
	    }
	    return preserveWhitespace ? /* @__PURE__ */ jsxRuntimeExports.jsx("pre", __spreadValues({}, properties)) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", __spreadValues({}, properties));
	  }
	  render() {
	    var _a;
	    return /* @__PURE__ */ jsxRuntimeExports.jsx(
	      "div",
	      {
	        ref: this.containerRef,
	        id: this.props.id,
	        style: this.props.style,
	        className: `quill ${(_a = this.props.className) != null ? _a : ""}`,
	        onKeyPress: this.props.onKeyPress,
	        onKeyDown: this.props.onKeyDown,
	        onKeyUp: this.props.onKeyUp,
	        children: this.renderEditingArea()
	      },
	      this.state.generation
	    );
	  }
	  onEditorChangeText(value, delta, source, editor) {
	    var _a, _b;
	    if (!this.editor) return;
	    const nextContents = this.isDelta(this.value) ? editor.getContents() : editor.getSemanticHTML();
	    if (nextContents !== this.getEditorContents()) {
	      this.lastDeltaChangeSet = delta;
	      this.value = nextContents;
	      (_b = (_a = this.props).onChange) == null ? void 0 : _b.call(_a, value, delta, source, editor);
	    }
	  }
	  onEditorChangeSelection(nextSelection, source, editor) {
	    var _a, _b, _c, _d, _e, _f;
	    if (!this.editor) return;
	    const currentSelection = this.getEditorSelection();
	    const hasGainedFocus = !currentSelection && nextSelection;
	    const hasLostFocus = currentSelection && !nextSelection;
	    if (isEqual$1(nextSelection, currentSelection)) return;
	    this.selection = nextSelection;
	    (_b = (_a = this.props).onChangeSelection) == null ? void 0 : _b.call(_a, nextSelection, source, editor);
	    if (hasGainedFocus) {
	      (_d = (_c = this.props).onFocus) == null ? void 0 : _d.call(_c, nextSelection, source, editor);
	    } else if (hasLostFocus) {
	      (_f = (_e = this.props).onBlur) == null ? void 0 : _f.call(_e, currentSelection, source, editor);
	    }
	  }
	  focus() {
	    if (!this.editor) return;
	    this.editor.focus();
	  }
	  blur() {
	    if (!this.editor) return;
	    this.selection = null;
	    this.editor.blur();
	  }
	}
	ReactQuill.displayName = "React Quill";
	/*
	Export Quill to be able to call `register`
	*/
	ReactQuill.Quill = Quill;
	ReactQuill.defaultProps = {
	  theme: "snow",
	  modules: {},
	  readOnly: false
	};
	function postpone(fn) {
	  Promise.resolve().then(fn);
	}

	exports.Quill = Quill;
	exports.default = ReactQuill;

	Object.defineProperty(exports, '__esModule', { value: true });

	return exports;

})({}, React);
//# sourceMappingURL=react-quill.js.map
