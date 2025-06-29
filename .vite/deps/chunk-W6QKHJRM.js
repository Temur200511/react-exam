import {
  contains,
  useWindow
} from "./chunk-FRYYRT3Z.js";
import {
  ENTERED,
  ENTERING,
  EXITED,
  EXITING,
  TransitionWrapper_default,
  css_default,
  transitionEndListener,
  triggerBrowserReflow,
  useWillUnmount
} from "./chunk-E43SROTJ.js";
import {
  canUseDOM_default,
  listen_default,
  ownerDocument
} from "./chunk-RAOVWLAA.js";
import {
  require_react_dom
} from "./chunk-YI7ZP7WZ.js";
import {
  require_prop_types
} from "./chunk-4LVSZ64H.js";
import {
  NavbarContext_default
} from "./chunk-HFS2TIZ4.js";
import {
  useIsomorphicEffect_default,
  useMounted,
  usePrevious
} from "./chunk-26BDJZQW.js";
import {
  SelectableContext_default,
  dataAttr,
  qsa
} from "./chunk-VW4VFWGN.js";
import {
  useEventCallback,
  useMergedRefs_default,
  useUncontrolled
} from "./chunk-R46KTWCR.js";
import {
  divWithClassName_default
} from "./chunk-SLR2NPT4.js";
import {
  require_classnames,
  useBootstrapPrefix
} from "./chunk-XB44QIN4.js";
import {
  require_jsx_runtime
} from "./chunk-HVLLINLV.js";
import {
  require_react
} from "./chunk-HKLPI2XQ.js";
import {
  __toESM
} from "./chunk-ZS7NZCD4.js";

// node_modules/react-bootstrap/esm/Navbar.js
var import_classnames12 = __toESM(require_classnames());
var React19 = __toESM(require_react());
var import_react15 = __toESM(require_react());

// node_modules/react-bootstrap/esm/NavbarBrand.js
var import_classnames = __toESM(require_classnames());
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var NavbarBrand = React.forwardRef(({
  bsPrefix,
  className,
  as,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "navbar-brand");
  const Component = as || (props.href ? "a" : "span");
  return (0, import_jsx_runtime.jsx)(Component, {
    ...props,
    ref,
    className: (0, import_classnames.default)(className, bsPrefix)
  });
});
NavbarBrand.displayName = "NavbarBrand";
var NavbarBrand_default = NavbarBrand;

// node_modules/react-bootstrap/esm/NavbarCollapse.js
var React3 = __toESM(require_react());
var import_react2 = __toESM(require_react());

// node_modules/react-bootstrap/esm/Collapse.js
var import_classnames2 = __toESM(require_classnames());
var import_react = __toESM(require_react());

// node_modules/react-bootstrap/esm/createChainedFunction.js
function createChainedFunction(...funcs) {
  return funcs.filter((f) => f != null).reduce((acc, f) => {
    if (typeof f !== "function") {
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    }
    if (acc === null)
      return f;
    return function chainedFunction(...args) {
      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}
var createChainedFunction_default = createChainedFunction;

// node_modules/react-bootstrap/esm/Collapse.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var MARGINS = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"]
};
function getDefaultDimensionValue(dimension, elem) {
  const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(1)}`;
  const value = elem[offset];
  const margins = MARGINS[dimension];
  return value + // @ts-ignore
  parseInt(css_default(elem, margins[0]), 10) + // @ts-ignore
  parseInt(css_default(elem, margins[1]), 10);
}
var collapseStyles = {
  [EXITED]: "collapse",
  [EXITING]: "collapsing",
  [ENTERING]: "collapsing",
  [ENTERED]: "collapse show"
};
var Collapse = import_react.default.forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  className,
  children,
  dimension = "height",
  in: inProp = false,
  timeout = 300,
  mountOnEnter = false,
  unmountOnExit = false,
  appear = false,
  getDimensionValue = getDefaultDimensionValue,
  ...props
}, ref) => {
  const computedDimension = typeof dimension === "function" ? dimension() : dimension;
  const handleEnter = (0, import_react.useMemo)(() => createChainedFunction_default((elem) => {
    elem.style[computedDimension] = "0";
  }, onEnter), [computedDimension, onEnter]);
  const handleEntering = (0, import_react.useMemo)(() => createChainedFunction_default((elem) => {
    const scroll = `scroll${computedDimension[0].toUpperCase()}${computedDimension.slice(1)}`;
    elem.style[computedDimension] = `${elem[scroll]}px`;
  }, onEntering), [computedDimension, onEntering]);
  const handleEntered = (0, import_react.useMemo)(() => createChainedFunction_default((elem) => {
    elem.style[computedDimension] = null;
  }, onEntered), [computedDimension, onEntered]);
  const handleExit = (0, import_react.useMemo)(() => createChainedFunction_default((elem) => {
    elem.style[computedDimension] = `${getDimensionValue(computedDimension, elem)}px`;
    triggerBrowserReflow(elem);
  }, onExit), [onExit, getDimensionValue, computedDimension]);
  const handleExiting = (0, import_react.useMemo)(() => createChainedFunction_default((elem) => {
    elem.style[computedDimension] = null;
  }, onExiting), [computedDimension, onExiting]);
  return (0, import_jsx_runtime2.jsx)(TransitionWrapper_default, {
    ref,
    addEndListener: transitionEndListener,
    ...props,
    "aria-expanded": props.role ? inProp : null,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: handleEntered,
    onExit: handleExit,
    onExiting: handleExiting,
    childRef: children.ref,
    in: inProp,
    timeout,
    mountOnEnter,
    unmountOnExit,
    appear,
    children: (state, innerProps) => import_react.default.cloneElement(children, {
      ...innerProps,
      className: (0, import_classnames2.default)(className, children.props.className, collapseStyles[state], computedDimension === "width" && "collapse-horizontal")
    })
  });
});
var Collapse_default = Collapse;

// node_modules/react-bootstrap/esm/NavbarCollapse.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var NavbarCollapse = React3.forwardRef(({
  children,
  bsPrefix,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "navbar-collapse");
  const context = (0, import_react2.useContext)(NavbarContext_default);
  return (0, import_jsx_runtime3.jsx)(Collapse_default, {
    in: !!(context && context.expanded),
    ...props,
    children: (0, import_jsx_runtime3.jsx)("div", {
      ref,
      className: bsPrefix,
      children
    })
  });
});
NavbarCollapse.displayName = "NavbarCollapse";
var NavbarCollapse_default = NavbarCollapse;

// node_modules/react-bootstrap/esm/NavbarToggle.js
var import_classnames3 = __toESM(require_classnames());
var React4 = __toESM(require_react());
var import_react3 = __toESM(require_react());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var NavbarToggle = React4.forwardRef(({
  bsPrefix,
  className,
  children,
  label = "Toggle navigation",
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "button",
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "navbar-toggler");
  const {
    onToggle,
    expanded
  } = (0, import_react3.useContext)(NavbarContext_default) || {};
  const handleClick = useEventCallback((e) => {
    if (onClick)
      onClick(e);
    if (onToggle)
      onToggle();
  });
  if (Component === "button") {
    props.type = "button";
  }
  return (0, import_jsx_runtime4.jsx)(Component, {
    ...props,
    ref,
    onClick: handleClick,
    "aria-label": label,
    className: (0, import_classnames3.default)(className, bsPrefix, !expanded && "collapsed"),
    children: children || (0, import_jsx_runtime4.jsx)("span", {
      className: `${bsPrefix}-icon`
    })
  });
});
NavbarToggle.displayName = "NavbarToggle";
var NavbarToggle_default = NavbarToggle;

// node_modules/react-bootstrap/esm/NavbarOffcanvas.js
var React17 = __toESM(require_react());
var import_react14 = __toESM(require_react());

// node_modules/react-bootstrap/esm/Offcanvas.js
var import_classnames10 = __toESM(require_classnames());

// node_modules/@restart/hooks/esm/useMediaQuery.js
var import_react4 = __toESM(require_react());
var matchersByWindow = /* @__PURE__ */ new WeakMap();
var getMatcher = (query, targetWindow) => {
  if (!query || !targetWindow)
    return void 0;
  const matchers = matchersByWindow.get(targetWindow) || /* @__PURE__ */ new Map();
  matchersByWindow.set(targetWindow, matchers);
  let mql = matchers.get(query);
  if (!mql) {
    mql = targetWindow.matchMedia(query);
    mql.refCount = 0;
    matchers.set(mql.media, mql);
  }
  return mql;
};
function useMediaQuery(query, targetWindow = typeof window === "undefined" ? void 0 : window) {
  const mql = getMatcher(query, targetWindow);
  const [matches, setMatches] = (0, import_react4.useState)(() => mql ? mql.matches : false);
  useIsomorphicEffect_default(() => {
    let mql2 = getMatcher(query, targetWindow);
    if (!mql2) {
      return setMatches(false);
    }
    let matchers = matchersByWindow.get(targetWindow);
    const handleChange = () => {
      setMatches(mql2.matches);
    };
    mql2.refCount++;
    mql2.addListener(handleChange);
    handleChange();
    return () => {
      mql2.removeListener(handleChange);
      mql2.refCount--;
      if (mql2.refCount <= 0) {
        matchers == null ? void 0 : matchers.delete(mql2.media);
      }
      mql2 = void 0;
    };
  }, [query]);
  return matches;
}

// node_modules/@restart/hooks/esm/useBreakpoint.js
var import_react5 = __toESM(require_react());
function createBreakpointHook(breakpointValues) {
  const names = Object.keys(breakpointValues);
  function and(query, next) {
    if (query === next) {
      return next;
    }
    return query ? `${query} and ${next}` : next;
  }
  function getNext(breakpoint) {
    return names[Math.min(names.indexOf(breakpoint) + 1, names.length - 1)];
  }
  function getMaxQuery(breakpoint) {
    const next = getNext(breakpoint);
    let value = breakpointValues[next];
    if (typeof value === "number")
      value = `${value - 0.2}px`;
    else
      value = `calc(${value} - 0.2px)`;
    return `(max-width: ${value})`;
  }
  function getMinQuery(breakpoint) {
    let value = breakpointValues[breakpoint];
    if (typeof value === "number") {
      value = `${value}px`;
    }
    return `(min-width: ${value})`;
  }
  function useBreakpoint2(breakpointOrMap, direction, window2) {
    let breakpointMap;
    if (typeof breakpointOrMap === "object") {
      breakpointMap = breakpointOrMap;
      window2 = direction;
      direction = true;
    } else {
      direction = direction || true;
      breakpointMap = {
        [breakpointOrMap]: direction
      };
    }
    let query = (0, import_react5.useMemo)(() => Object.entries(breakpointMap).reduce((query2, [key, direction2]) => {
      if (direction2 === "up" || direction2 === true) {
        query2 = and(query2, getMinQuery(key));
      }
      if (direction2 === "down" || direction2 === true) {
        query2 = and(query2, getMaxQuery(key));
      }
      return query2;
    }, ""), [JSON.stringify(breakpointMap)]);
    return useMediaQuery(query, window2);
  }
  return useBreakpoint2;
}
var useBreakpoint = createBreakpointHook({
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
});
var useBreakpoint_default = useBreakpoint;

// node_modules/react-bootstrap/esm/Offcanvas.js
var React16 = __toESM(require_react());
var import_react13 = __toESM(require_react());

// node_modules/dom-helpers/esm/activeElement.js
function activeElement(doc) {
  if (doc === void 0) {
    doc = ownerDocument();
  }
  try {
    var active = doc.activeElement;
    if (!active || !active.nodeName)
      return null;
    return active;
  } catch (e) {
    return doc.body;
  }
}

// node_modules/@restart/ui/esm/Modal.js
var import_react10 = __toESM(require_react());
var React7 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/@restart/ui/esm/getScrollbarWidth.js
function getBodyScrollbarWidth(ownerDocument2 = document) {
  const window2 = ownerDocument2.defaultView;
  return Math.abs(window2.innerWidth - ownerDocument2.documentElement.clientWidth);
}

// node_modules/@restart/ui/esm/ModalManager.js
var OPEN_DATA_ATTRIBUTE = dataAttr("modal-open");
var ModalManager = class {
  constructor({
    ownerDocument: ownerDocument2,
    handleContainerOverflow = true,
    isRTL = false
  } = {}) {
    this.handleContainerOverflow = handleContainerOverflow;
    this.isRTL = isRTL;
    this.modals = [];
    this.ownerDocument = ownerDocument2;
  }
  getScrollbarWidth() {
    return getBodyScrollbarWidth(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(_modal) {
  }
  removeModalAttributes(_modal) {
  }
  setContainerStyle(containerState) {
    const style = {
      overflow: "hidden"
    };
    const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
    const container = this.getElement();
    containerState.style = {
      overflow: container.style.overflow,
      [paddingProp]: container.style[paddingProp]
    };
    if (containerState.scrollBarWidth) {
      style[paddingProp] = `${parseInt(css_default(container, paddingProp) || "0", 10) + containerState.scrollBarWidth}px`;
    }
    container.setAttribute(OPEN_DATA_ATTRIBUTE, "");
    css_default(container, style);
  }
  reset() {
    [...this.modals].forEach((m) => this.remove(m));
  }
  removeContainerStyle(containerState) {
    const container = this.getElement();
    container.removeAttribute(OPEN_DATA_ATTRIBUTE);
    Object.assign(container.style, containerState.style);
  }
  add(modal) {
    let modalIdx = this.modals.indexOf(modal);
    if (modalIdx !== -1) {
      return modalIdx;
    }
    modalIdx = this.modals.length;
    this.modals.push(modal);
    this.setModalAttributes(modal);
    if (modalIdx !== 0) {
      return modalIdx;
    }
    this.state = {
      scrollBarWidth: this.getScrollbarWidth(),
      style: {}
    };
    if (this.handleContainerOverflow) {
      this.setContainerStyle(this.state);
    }
    return modalIdx;
  }
  remove(modal) {
    const modalIdx = this.modals.indexOf(modal);
    if (modalIdx === -1) {
      return;
    }
    this.modals.splice(modalIdx, 1);
    if (!this.modals.length && this.handleContainerOverflow) {
      this.removeContainerStyle(this.state);
    }
    this.removeModalAttributes(modal);
  }
  isTopModal(modal) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
  }
};
var ModalManager_default = ModalManager;

// node_modules/@restart/ui/esm/useWaitForDOMRef.js
var import_react6 = __toESM(require_react());
var resolveContainerRef = (ref, document2) => {
  if (!canUseDOM_default)
    return null;
  if (ref == null)
    return (document2 || ownerDocument()).body;
  if (typeof ref === "function")
    ref = ref();
  if (ref && "current" in ref)
    ref = ref.current;
  if (ref && ("nodeType" in ref || ref.getBoundingClientRect))
    return ref;
  return null;
};
function useWaitForDOMRef(ref, onResolved) {
  const window2 = useWindow();
  const [resolvedRef, setRef] = (0, import_react6.useState)(() => resolveContainerRef(ref, window2 == null ? void 0 : window2.document));
  if (!resolvedRef) {
    const earlyRef = resolveContainerRef(ref);
    if (earlyRef)
      setRef(earlyRef);
  }
  (0, import_react6.useEffect)(() => {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef);
    }
  }, [onResolved, resolvedRef]);
  (0, import_react6.useEffect)(() => {
    const nextRef = resolveContainerRef(ref);
    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);
  return resolvedRef;
}

// node_modules/@restart/ui/esm/ImperativeTransition.js
var import_react9 = __toESM(require_react());

// node_modules/@restart/ui/esm/NoopTransition.js
var import_react7 = __toESM(require_react());
function NoopTransition({
  children,
  in: inProp,
  onExited,
  mountOnEnter,
  unmountOnExit
}) {
  const ref = (0, import_react7.useRef)(null);
  const hasEnteredRef = (0, import_react7.useRef)(inProp);
  const handleExited = useEventCallback(onExited);
  (0, import_react7.useEffect)(() => {
    if (inProp)
      hasEnteredRef.current = true;
    else {
      handleExited(ref.current);
    }
  }, [inProp, handleExited]);
  const combinedRef = useMergedRefs_default(ref, children.ref);
  const child = (0, import_react7.cloneElement)(children, {
    ref: combinedRef
  });
  if (inProp)
    return child;
  if (unmountOnExit) {
    return null;
  }
  if (!hasEnteredRef.current && mountOnEnter) {
    return null;
  }
  return child;
}
var NoopTransition_default = NoopTransition;

// node_modules/@restart/ui/esm/RTGTransition.js
var React5 = __toESM(require_react());

// node_modules/@restart/ui/esm/useRTGTransitionProps.js
var import_react8 = __toESM(require_react());
var _excluded = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "addEndListener", "children"];
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function useRTGTransitionProps(_ref) {
  let {
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    addEndListener,
    children
  } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded);
  const nodeRef = (0, import_react8.useRef)(null);
  const mergedRef = useMergedRefs_default(nodeRef, typeof children === "function" ? null : children.ref);
  const normalize = (callback) => (param) => {
    if (callback && nodeRef.current) {
      callback(nodeRef.current, param);
    }
  };
  const handleEnter = (0, import_react8.useCallback)(normalize(onEnter), [onEnter]);
  const handleEntering = (0, import_react8.useCallback)(normalize(onEntering), [onEntering]);
  const handleEntered = (0, import_react8.useCallback)(normalize(onEntered), [onEntered]);
  const handleExit = (0, import_react8.useCallback)(normalize(onExit), [onExit]);
  const handleExiting = (0, import_react8.useCallback)(normalize(onExiting), [onExiting]);
  const handleExited = (0, import_react8.useCallback)(normalize(onExited), [onExited]);
  const handleAddEndListener = (0, import_react8.useCallback)(normalize(addEndListener), [addEndListener]);
  return Object.assign({}, props, {
    nodeRef
  }, onEnter && {
    onEnter: handleEnter
  }, onEntering && {
    onEntering: handleEntering
  }, onEntered && {
    onEntered: handleEntered
  }, onExit && {
    onExit: handleExit
  }, onExiting && {
    onExiting: handleExiting
  }, onExited && {
    onExited: handleExited
  }, addEndListener && {
    addEndListener: handleAddEndListener
  }, {
    children: typeof children === "function" ? (status, innerProps) => (
      // TODO: Types for RTG missing innerProps, so need to cast.
      children(status, Object.assign({}, innerProps, {
        ref: mergedRef
      }))
    ) : (0, import_react8.cloneElement)(children, {
      ref: mergedRef
    })
  });
}

// node_modules/@restart/ui/esm/RTGTransition.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var _excluded2 = ["component"];
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var RTGTransition = React5.forwardRef((_ref, ref) => {
  let {
    component: Component
  } = _ref, props = _objectWithoutPropertiesLoose2(_ref, _excluded2);
  const transitionProps = useRTGTransitionProps(props);
  return (0, import_jsx_runtime5.jsx)(Component, Object.assign({
    ref
  }, transitionProps));
});
var RTGTransition_default = RTGTransition;

// node_modules/@restart/ui/esm/ImperativeTransition.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
function useTransition({
  in: inProp,
  onTransition
}) {
  const ref = (0, import_react9.useRef)(null);
  const isInitialRef = (0, import_react9.useRef)(true);
  const handleTransition = useEventCallback(onTransition);
  useIsomorphicEffect_default(() => {
    if (!ref.current) {
      return void 0;
    }
    let stale = false;
    handleTransition({
      in: inProp,
      element: ref.current,
      initial: isInitialRef.current,
      isStale: () => stale
    });
    return () => {
      stale = true;
    };
  }, [inProp, handleTransition]);
  useIsomorphicEffect_default(() => {
    isInitialRef.current = false;
    return () => {
      isInitialRef.current = true;
    };
  }, []);
  return ref;
}
function ImperativeTransition({
  children,
  in: inProp,
  onExited,
  onEntered,
  transition
}) {
  const [exited, setExited] = (0, import_react9.useState)(!inProp);
  if (inProp && exited) {
    setExited(false);
  }
  const ref = useTransition({
    in: !!inProp,
    onTransition: (options) => {
      const onFinish = () => {
        if (options.isStale())
          return;
        if (options.in) {
          onEntered == null ? void 0 : onEntered(options.element, options.initial);
        } else {
          setExited(true);
          onExited == null ? void 0 : onExited(options.element);
        }
      };
      Promise.resolve(transition(options)).then(onFinish, (error) => {
        if (!options.in)
          setExited(true);
        throw error;
      });
    }
  });
  const combinedRef = useMergedRefs_default(ref, children.ref);
  return exited && !inProp ? null : (0, import_react9.cloneElement)(children, {
    ref: combinedRef
  });
}
function renderTransition(component, runTransition, props) {
  if (component) {
    return (0, import_jsx_runtime6.jsx)(RTGTransition_default, Object.assign({}, props, {
      component
    }));
  }
  if (runTransition) {
    return (0, import_jsx_runtime6.jsx)(ImperativeTransition, Object.assign({}, props, {
      transition: runTransition
    }));
  }
  return (0, import_jsx_runtime6.jsx)(NoopTransition_default, Object.assign({}, props));
}

// node_modules/@restart/ui/esm/utils.js
function isEscKey(e) {
  return e.code === "Escape" || e.keyCode === 27;
}

// node_modules/@restart/ui/esm/Modal.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var _excluded3 = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "runTransition", "backdropTransition", "runBackdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];
function _objectWithoutPropertiesLoose3(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var manager;
function getManager(window2) {
  if (!manager)
    manager = new ModalManager_default({
      ownerDocument: window2 == null ? void 0 : window2.document
    });
  return manager;
}
function useModalManager(provided) {
  const window2 = useWindow();
  const modalManager = provided || getManager(window2);
  const modal = (0, import_react10.useRef)({
    dialog: null,
    backdrop: null
  });
  return Object.assign(modal.current, {
    add: () => modalManager.add(modal.current),
    remove: () => modalManager.remove(modal.current),
    isTopModal: () => modalManager.isTopModal(modal.current),
    setDialogRef: (0, import_react10.useCallback)((ref) => {
      modal.current.dialog = ref;
    }, []),
    setBackdropRef: (0, import_react10.useCallback)((ref) => {
      modal.current.backdrop = ref;
    }, [])
  });
}
var Modal = (0, import_react10.forwardRef)((_ref, ref) => {
  let {
    show = false,
    role = "dialog",
    className,
    style,
    children,
    backdrop = true,
    keyboard = true,
    onBackdropClick,
    onEscapeKeyDown,
    transition,
    runTransition,
    backdropTransition,
    runBackdropTransition,
    autoFocus = true,
    enforceFocus = true,
    restoreFocus = true,
    restoreFocusOptions,
    renderDialog,
    renderBackdrop = (props) => (0, import_jsx_runtime7.jsx)("div", Object.assign({}, props)),
    manager: providedManager,
    container: containerRef,
    onShow,
    onHide = () => {
    },
    onExit,
    onExited,
    onExiting,
    onEnter,
    onEntering,
    onEntered
  } = _ref, rest = _objectWithoutPropertiesLoose3(_ref, _excluded3);
  const ownerWindow = useWindow();
  const container = useWaitForDOMRef(containerRef);
  const modal = useModalManager(providedManager);
  const isMounted = useMounted();
  const prevShow = usePrevious(show);
  const [exited, setExited] = (0, import_react10.useState)(!show);
  const lastFocusRef = (0, import_react10.useRef)(null);
  (0, import_react10.useImperativeHandle)(ref, () => modal, [modal]);
  if (canUseDOM_default && !prevShow && show) {
    lastFocusRef.current = activeElement(ownerWindow == null ? void 0 : ownerWindow.document);
  }
  if (show && exited) {
    setExited(false);
  }
  const handleShow = useEventCallback(() => {
    modal.add();
    removeKeydownListenerRef.current = listen_default(document, "keydown", handleDocumentKeyDown);
    removeFocusListenerRef.current = listen_default(
      document,
      "focus",
      // the timeout is necessary b/c this will run before the new modal is mounted
      // and so steals focus from it
      () => setTimeout(handleEnforceFocus),
      true
    );
    if (onShow) {
      onShow();
    }
    if (autoFocus) {
      var _modal$dialog$ownerDo, _modal$dialog;
      const currentActiveElement = activeElement((_modal$dialog$ownerDo = (_modal$dialog = modal.dialog) == null ? void 0 : _modal$dialog.ownerDocument) != null ? _modal$dialog$ownerDo : ownerWindow == null ? void 0 : ownerWindow.document);
      if (modal.dialog && currentActiveElement && !contains(modal.dialog, currentActiveElement)) {
        lastFocusRef.current = currentActiveElement;
        modal.dialog.focus();
      }
    }
  });
  const handleHide = useEventCallback(() => {
    modal.remove();
    removeKeydownListenerRef.current == null ? void 0 : removeKeydownListenerRef.current();
    removeFocusListenerRef.current == null ? void 0 : removeFocusListenerRef.current();
    if (restoreFocus) {
      var _lastFocusRef$current;
      (_lastFocusRef$current = lastFocusRef.current) == null ? void 0 : _lastFocusRef$current.focus == null ? void 0 : _lastFocusRef$current.focus(restoreFocusOptions);
      lastFocusRef.current = null;
    }
  });
  (0, import_react10.useEffect)(() => {
    if (!show || !container)
      return;
    handleShow();
  }, [
    show,
    container,
    /* should never change: */
    handleShow
  ]);
  (0, import_react10.useEffect)(() => {
    if (!exited)
      return;
    handleHide();
  }, [exited, handleHide]);
  useWillUnmount(() => {
    handleHide();
  });
  const handleEnforceFocus = useEventCallback(() => {
    if (!enforceFocus || !isMounted() || !modal.isTopModal()) {
      return;
    }
    const currentActiveElement = activeElement(ownerWindow == null ? void 0 : ownerWindow.document);
    if (modal.dialog && currentActiveElement && !contains(modal.dialog, currentActiveElement)) {
      modal.dialog.focus();
    }
  });
  const handleBackdropClick = useEventCallback((e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    onBackdropClick == null ? void 0 : onBackdropClick(e);
    if (backdrop === true) {
      onHide();
    }
  });
  const handleDocumentKeyDown = useEventCallback((e) => {
    if (keyboard && isEscKey(e) && modal.isTopModal()) {
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(e);
      if (!e.defaultPrevented) {
        onHide();
      }
    }
  });
  const removeFocusListenerRef = (0, import_react10.useRef)();
  const removeKeydownListenerRef = (0, import_react10.useRef)();
  const handleHidden = (...args) => {
    setExited(true);
    onExited == null ? void 0 : onExited(...args);
  };
  if (!container) {
    return null;
  }
  const dialogProps = Object.assign({
    role,
    ref: modal.setDialogRef,
    // apparently only works on the dialog role element
    "aria-modal": role === "dialog" ? true : void 0
  }, rest, {
    style,
    className,
    tabIndex: -1
  });
  let dialog = renderDialog ? renderDialog(dialogProps) : (0, import_jsx_runtime7.jsx)("div", Object.assign({}, dialogProps, {
    children: React7.cloneElement(children, {
      role: "document"
    })
  }));
  dialog = renderTransition(transition, runTransition, {
    unmountOnExit: true,
    mountOnEnter: true,
    appear: true,
    in: !!show,
    onExit,
    onExiting,
    onExited: handleHidden,
    onEnter,
    onEntering,
    onEntered,
    children: dialog
  });
  let backdropElement = null;
  if (backdrop) {
    backdropElement = renderBackdrop({
      ref: modal.setBackdropRef,
      onClick: handleBackdropClick
    });
    backdropElement = renderTransition(backdropTransition, runBackdropTransition, {
      in: !!show,
      appear: true,
      mountOnEnter: true,
      unmountOnExit: true,
      children: backdropElement
    });
  }
  return (0, import_jsx_runtime7.jsx)(import_jsx_runtime8.Fragment, {
    children: import_react_dom.default.createPortal((0, import_jsx_runtime9.jsxs)(import_jsx_runtime8.Fragment, {
      children: [backdropElement, dialog]
    }), container)
  });
});
Modal.displayName = "Modal";
var Modal_default = Object.assign(Modal, {
  Manager: ModalManager_default
});

// node_modules/react-bootstrap/esm/Fade.js
var import_classnames4 = __toESM(require_classnames());
var React8 = __toESM(require_react());
var import_react11 = __toESM(require_react());
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var fadeStyles = {
  [ENTERING]: "show",
  [ENTERED]: "show"
};
var Fade = React8.forwardRef(({
  className,
  children,
  transitionClasses = {},
  onEnter,
  ...rest
}, ref) => {
  const props = {
    in: false,
    timeout: 300,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    ...rest
  };
  const handleEnter = (0, import_react11.useCallback)((node, isAppearing) => {
    triggerBrowserReflow(node);
    onEnter == null ? void 0 : onEnter(node, isAppearing);
  }, [onEnter]);
  return (0, import_jsx_runtime10.jsx)(TransitionWrapper_default, {
    ref,
    addEndListener: transitionEndListener,
    ...props,
    onEnter: handleEnter,
    childRef: children.ref,
    children: (status, innerProps) => React8.cloneElement(children, {
      ...innerProps,
      className: (0, import_classnames4.default)("fade", className, children.props.className, fadeStyles[status], transitionClasses[status])
    })
  });
});
Fade.displayName = "Fade";
var Fade_default = Fade;

// node_modules/react-bootstrap/esm/OffcanvasBody.js
var React9 = __toESM(require_react());
var import_classnames5 = __toESM(require_classnames());
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var OffcanvasBody = React9.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas-body");
  return (0, import_jsx_runtime11.jsx)(Component, {
    ref,
    className: (0, import_classnames5.default)(className, bsPrefix),
    ...props
  });
});
OffcanvasBody.displayName = "OffcanvasBody";
var OffcanvasBody_default = OffcanvasBody;

// node_modules/react-bootstrap/esm/OffcanvasToggling.js
var import_classnames6 = __toESM(require_classnames());
var React10 = __toESM(require_react());
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var transitionStyles = {
  [ENTERING]: "show",
  [ENTERED]: "show"
};
var OffcanvasToggling = React10.forwardRef(({
  bsPrefix,
  className,
  children,
  in: inProp = false,
  mountOnEnter = false,
  unmountOnExit = false,
  appear = false,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas");
  return (0, import_jsx_runtime12.jsx)(TransitionWrapper_default, {
    ref,
    addEndListener: transitionEndListener,
    in: inProp,
    mountOnEnter,
    unmountOnExit,
    appear,
    ...props,
    childRef: children.ref,
    children: (status, innerProps) => React10.cloneElement(children, {
      ...innerProps,
      className: (0, import_classnames6.default)(className, children.props.className, (status === ENTERING || status === EXITING) && `${bsPrefix}-toggling`, transitionStyles[status])
    })
  });
});
OffcanvasToggling.displayName = "OffcanvasToggling";
var OffcanvasToggling_default = OffcanvasToggling;

// node_modules/react-bootstrap/esm/ModalContext.js
var React11 = __toESM(require_react());
var ModalContext = React11.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHide() {
  }
});
var ModalContext_default = ModalContext;

// node_modules/react-bootstrap/esm/OffcanvasHeader.js
var import_classnames8 = __toESM(require_classnames());
var React14 = __toESM(require_react());

// node_modules/react-bootstrap/esm/AbstractModalHeader.js
var React13 = __toESM(require_react());
var import_react12 = __toESM(require_react());

// node_modules/react-bootstrap/esm/CloseButton.js
var import_prop_types = __toESM(require_prop_types());
var React12 = __toESM(require_react());
var import_classnames7 = __toESM(require_classnames());
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var propTypes = {
  /** An accessible label indicating the relevant information about the Close Button. */
  "aria-label": import_prop_types.default.string,
  /** A callback fired after the Close Button is clicked. */
  onClick: import_prop_types.default.func,
  /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */
  variant: import_prop_types.default.oneOf(["white"])
};
var CloseButton = React12.forwardRef(({
  className,
  variant,
  "aria-label": ariaLabel = "Close",
  ...props
}, ref) => (0, import_jsx_runtime13.jsx)("button", {
  ref,
  type: "button",
  className: (0, import_classnames7.default)("btn-close", variant && `btn-close-${variant}`, className),
  "aria-label": ariaLabel,
  ...props
}));
CloseButton.displayName = "CloseButton";
CloseButton.propTypes = propTypes;
var CloseButton_default = CloseButton;

// node_modules/react-bootstrap/esm/AbstractModalHeader.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var AbstractModalHeader = React13.forwardRef(({
  closeLabel = "Close",
  closeVariant,
  closeButton = false,
  onHide,
  children,
  ...props
}, ref) => {
  const context = (0, import_react12.useContext)(ModalContext_default);
  const handleClick = useEventCallback(() => {
    context == null ? void 0 : context.onHide();
    onHide == null ? void 0 : onHide();
  });
  return (0, import_jsx_runtime15.jsxs)("div", {
    ref,
    ...props,
    children: [children, closeButton && (0, import_jsx_runtime14.jsx)(CloseButton_default, {
      "aria-label": closeLabel,
      variant: closeVariant,
      onClick: handleClick
    })]
  });
});
var AbstractModalHeader_default = AbstractModalHeader;

// node_modules/react-bootstrap/esm/OffcanvasHeader.js
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
var OffcanvasHeader = React14.forwardRef(({
  bsPrefix,
  className,
  closeLabel = "Close",
  closeButton = false,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas-header");
  return (0, import_jsx_runtime16.jsx)(AbstractModalHeader_default, {
    ref,
    ...props,
    className: (0, import_classnames8.default)(className, bsPrefix),
    closeLabel,
    closeButton
  });
});
OffcanvasHeader.displayName = "OffcanvasHeader";
var OffcanvasHeader_default = OffcanvasHeader;

// node_modules/react-bootstrap/esm/OffcanvasTitle.js
var React15 = __toESM(require_react());
var import_classnames9 = __toESM(require_classnames());
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var DivStyledAsH5 = divWithClassName_default("h5");
var OffcanvasTitle = React15.forwardRef(({
  className,
  bsPrefix,
  as: Component = DivStyledAsH5,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas-title");
  return (0, import_jsx_runtime17.jsx)(Component, {
    ref,
    className: (0, import_classnames9.default)(className, bsPrefix),
    ...props
  });
});
OffcanvasTitle.displayName = "OffcanvasTitle";
var OffcanvasTitle_default = OffcanvasTitle;

// node_modules/dom-helpers/esm/hasClass.js
function hasClass(element, className) {
  if (element.classList)
    return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

// node_modules/dom-helpers/esm/addClass.js
function addClass(element, className) {
  if (element.classList)
    element.classList.add(className);
  else if (!hasClass(element, className))
    if (typeof element.className === "string")
      element.className = element.className + " " + className;
    else
      element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}

// node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === "string") {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
  }
}

// node_modules/react-bootstrap/esm/BootstrapModalManager.js
var Selector = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler"
};
var BootstrapModalManager = class extends ModalManager_default {
  adjustAndStore(prop, element, adjust) {
    const actual = element.style[prop];
    element.dataset[prop] = actual;
    css_default(element, {
      [prop]: `${parseFloat(css_default(element, prop)) + adjust}px`
    });
  }
  restore(prop, element) {
    const value = element.dataset[prop];
    if (value !== void 0) {
      delete element.dataset[prop];
      css_default(element, {
        [prop]: value
      });
    }
  }
  setContainerStyle(containerState) {
    super.setContainerStyle(containerState);
    const container = this.getElement();
    addClass(container, "modal-open");
    if (!containerState.scrollBarWidth)
      return;
    const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
    const marginProp = this.isRTL ? "marginLeft" : "marginRight";
    qsa(container, Selector.FIXED_CONTENT).forEach((el) => this.adjustAndStore(paddingProp, el, containerState.scrollBarWidth));
    qsa(container, Selector.STICKY_CONTENT).forEach((el) => this.adjustAndStore(marginProp, el, -containerState.scrollBarWidth));
    qsa(container, Selector.NAVBAR_TOGGLER).forEach((el) => this.adjustAndStore(marginProp, el, containerState.scrollBarWidth));
  }
  removeContainerStyle(containerState) {
    super.removeContainerStyle(containerState);
    const container = this.getElement();
    removeClass(container, "modal-open");
    const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
    const marginProp = this.isRTL ? "marginLeft" : "marginRight";
    qsa(container, Selector.FIXED_CONTENT).forEach((el) => this.restore(paddingProp, el));
    qsa(container, Selector.STICKY_CONTENT).forEach((el) => this.restore(marginProp, el));
    qsa(container, Selector.NAVBAR_TOGGLER).forEach((el) => this.restore(marginProp, el));
  }
};
var sharedManager;
function getSharedManager(options) {
  if (!sharedManager)
    sharedManager = new BootstrapModalManager(options);
  return sharedManager;
}
var BootstrapModalManager_default = BootstrapModalManager;

// node_modules/react-bootstrap/esm/Offcanvas.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
var import_jsx_runtime20 = __toESM(require_jsx_runtime());
function DialogTransition(props) {
  return (0, import_jsx_runtime18.jsx)(OffcanvasToggling_default, {
    ...props
  });
}
function BackdropTransition(props) {
  return (0, import_jsx_runtime18.jsx)(Fade_default, {
    ...props
  });
}
var Offcanvas = React16.forwardRef(({
  bsPrefix,
  className,
  children,
  "aria-labelledby": ariaLabelledby,
  placement = "start",
  responsive,
  /* BaseModal props */
  show = false,
  backdrop = true,
  keyboard = true,
  scroll = false,
  onEscapeKeyDown,
  onShow,
  onHide,
  container,
  autoFocus = true,
  enforceFocus = true,
  restoreFocus = true,
  restoreFocusOptions,
  onEntered,
  onExit,
  onExiting,
  onEnter,
  onEntering,
  onExited,
  backdropClassName,
  manager: propsManager,
  renderStaticNode = false,
  ...props
}, ref) => {
  const modalManager = (0, import_react13.useRef)();
  bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas");
  const {
    onToggle
  } = (0, import_react13.useContext)(NavbarContext_default) || {};
  const [showOffcanvas, setShowOffcanvas] = (0, import_react13.useState)(false);
  const hideResponsiveOffcanvas = useBreakpoint_default(responsive || "xs", "up");
  (0, import_react13.useEffect)(() => {
    setShowOffcanvas(responsive ? show && !hideResponsiveOffcanvas : show);
  }, [show, responsive, hideResponsiveOffcanvas]);
  const handleHide = useEventCallback(() => {
    onToggle == null ? void 0 : onToggle();
    onHide == null ? void 0 : onHide();
  });
  const modalContext = (0, import_react13.useMemo)(() => ({
    onHide: handleHide
  }), [handleHide]);
  function getModalManager() {
    if (propsManager)
      return propsManager;
    if (scroll) {
      if (!modalManager.current)
        modalManager.current = new BootstrapModalManager_default({
          handleContainerOverflow: false
        });
      return modalManager.current;
    }
    return getSharedManager();
  }
  const handleEnter = (node, ...args) => {
    if (node)
      node.style.visibility = "visible";
    onEnter == null ? void 0 : onEnter(node, ...args);
  };
  const handleExited = (node, ...args) => {
    if (node)
      node.style.visibility = "";
    onExited == null ? void 0 : onExited(...args);
  };
  const renderBackdrop = (0, import_react13.useCallback)((backdropProps) => (0, import_jsx_runtime18.jsx)("div", {
    ...backdropProps,
    className: (0, import_classnames10.default)(`${bsPrefix}-backdrop`, backdropClassName)
  }), [backdropClassName, bsPrefix]);
  const renderDialog = (dialogProps) => (0, import_jsx_runtime18.jsx)("div", {
    ...dialogProps,
    ...props,
    className: (0, import_classnames10.default)(className, responsive ? `${bsPrefix}-${responsive}` : bsPrefix, `${bsPrefix}-${placement}`),
    "aria-labelledby": ariaLabelledby,
    children
  });
  return (0, import_jsx_runtime20.jsxs)(import_jsx_runtime19.Fragment, {
    children: [!showOffcanvas && (responsive || renderStaticNode) && renderDialog({}), (0, import_jsx_runtime18.jsx)(ModalContext_default.Provider, {
      value: modalContext,
      children: (0, import_jsx_runtime18.jsx)(Modal_default, {
        show: showOffcanvas,
        ref,
        backdrop,
        container,
        keyboard,
        autoFocus,
        enforceFocus: enforceFocus && !scroll,
        restoreFocus,
        restoreFocusOptions,
        onEscapeKeyDown,
        onShow,
        onHide: handleHide,
        onEnter: handleEnter,
        onEntering,
        onEntered,
        onExit,
        onExiting,
        onExited: handleExited,
        manager: getModalManager(),
        transition: DialogTransition,
        backdropTransition: BackdropTransition,
        renderBackdrop,
        renderDialog
      })
    })]
  });
});
Offcanvas.displayName = "Offcanvas";
var Offcanvas_default = Object.assign(Offcanvas, {
  Body: OffcanvasBody_default,
  Header: OffcanvasHeader_default,
  Title: OffcanvasTitle_default
});

// node_modules/react-bootstrap/esm/NavbarOffcanvas.js
var import_jsx_runtime21 = __toESM(require_jsx_runtime());
var NavbarOffcanvas = React17.forwardRef((props, ref) => {
  const context = (0, import_react14.useContext)(NavbarContext_default);
  return (0, import_jsx_runtime21.jsx)(Offcanvas_default, {
    ref,
    show: !!(context != null && context.expanded),
    ...props,
    renderStaticNode: true
  });
});
NavbarOffcanvas.displayName = "NavbarOffcanvas";
var NavbarOffcanvas_default = NavbarOffcanvas;

// node_modules/react-bootstrap/esm/NavbarText.js
var React18 = __toESM(require_react());
var import_classnames11 = __toESM(require_classnames());
var import_jsx_runtime22 = __toESM(require_jsx_runtime());
var NavbarText = React18.forwardRef(({
  className,
  bsPrefix,
  as: Component = "span",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "navbar-text");
  return (0, import_jsx_runtime22.jsx)(Component, {
    ref,
    className: (0, import_classnames11.default)(className, bsPrefix),
    ...props
  });
});
NavbarText.displayName = "NavbarText";
var NavbarText_default = NavbarText;

// node_modules/react-bootstrap/esm/Navbar.js
var import_jsx_runtime23 = __toESM(require_jsx_runtime());
var Navbar = React19.forwardRef((props, ref) => {
  const {
    bsPrefix: initialBsPrefix,
    expand = true,
    variant = "light",
    bg,
    fixed,
    sticky,
    className,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = "nav",
    expanded,
    onToggle,
    onSelect,
    collapseOnSelect = false,
    ...controlledProps
  } = useUncontrolled(props, {
    expanded: "onToggle"
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, "navbar");
  const handleCollapse = (0, import_react15.useCallback)((...args) => {
    onSelect == null ? void 0 : onSelect(...args);
    if (collapseOnSelect && expanded) {
      onToggle == null ? void 0 : onToggle(false);
    }
  }, [onSelect, collapseOnSelect, expanded, onToggle]);
  if (controlledProps.role === void 0 && Component !== "nav") {
    controlledProps.role = "navigation";
  }
  let expandClass = `${bsPrefix}-expand`;
  if (typeof expand === "string")
    expandClass = `${expandClass}-${expand}`;
  const navbarContext = (0, import_react15.useMemo)(() => ({
    onToggle: () => onToggle == null ? void 0 : onToggle(!expanded),
    bsPrefix,
    expanded: !!expanded,
    expand
  }), [bsPrefix, expanded, expand, onToggle]);
  return (0, import_jsx_runtime23.jsx)(NavbarContext_default.Provider, {
    value: navbarContext,
    children: (0, import_jsx_runtime23.jsx)(SelectableContext_default.Provider, {
      value: handleCollapse,
      children: (0, import_jsx_runtime23.jsx)(Component, {
        ref,
        ...controlledProps,
        className: (0, import_classnames12.default)(className, bsPrefix, expand && expandClass, variant && `${bsPrefix}-${variant}`, bg && `bg-${bg}`, sticky && `sticky-${sticky}`, fixed && `fixed-${fixed}`)
      })
    })
  });
});
Navbar.displayName = "Navbar";
var Navbar_default = Object.assign(Navbar, {
  Brand: NavbarBrand_default,
  Collapse: NavbarCollapse_default,
  Offcanvas: NavbarOffcanvas_default,
  Text: NavbarText_default,
  Toggle: NavbarToggle_default
});

export {
  createChainedFunction_default,
  Collapse_default,
  Fade_default,
  CloseButton_default,
  useWaitForDOMRef,
  NoopTransition_default,
  renderTransition,
  isEscKey,
  Modal_default,
  hasClass,
  getSharedManager,
  ModalContext_default,
  AbstractModalHeader_default,
  NavbarBrand_default,
  NavbarCollapse_default,
  NavbarToggle_default,
  OffcanvasBody_default,
  OffcanvasToggling_default,
  OffcanvasHeader_default,
  OffcanvasTitle_default,
  Offcanvas_default,
  NavbarOffcanvas_default,
  NavbarText_default,
  Navbar_default
};
//# sourceMappingURL=chunk-W6QKHJRM.js.map
