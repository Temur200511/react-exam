import {
  require_react
} from "./chunk-HKLPI2XQ.js";
import {
  __toESM
} from "./chunk-ZS7NZCD4.js";

// node_modules/@restart/hooks/esm/useMounted.js
var import_react = __toESM(require_react());
function useMounted() {
  const mounted = (0, import_react.useRef)(true);
  const isMounted = (0, import_react.useRef)(() => mounted.current);
  (0, import_react.useEffect)(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

// node_modules/@restart/hooks/esm/useIsomorphicEffect.js
var import_react2 = __toESM(require_react());
var isReactNative = typeof global !== "undefined" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative";
var isDOM = typeof document !== "undefined";
var useIsomorphicEffect_default = isDOM || isReactNative ? import_react2.useLayoutEffect : import_react2.useEffect;

// node_modules/@restart/hooks/esm/usePrevious.js
var import_react3 = __toESM(require_react());
function usePrevious(value) {
  const ref = (0, import_react3.useRef)(null);
  (0, import_react3.useEffect)(() => {
    ref.current = value;
  });
  return ref.current;
}

export {
  useMounted,
  usePrevious,
  useIsomorphicEffect_default
};
//# sourceMappingURL=chunk-26BDJZQW.js.map
