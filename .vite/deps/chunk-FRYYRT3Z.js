import {
  canUseDOM_default
} from "./chunk-RAOVWLAA.js";
import {
  require_react
} from "./chunk-HKLPI2XQ.js";
import {
  __toESM
} from "./chunk-ZS7NZCD4.js";

// node_modules/dom-helpers/esm/contains.js
function contains(context, node) {
  if (context.contains)
    return context.contains(node);
  if (context.compareDocumentPosition)
    return context === node || !!(context.compareDocumentPosition(node) & 16);
}

// node_modules/@restart/ui/esm/useWindow.js
var import_react = __toESM(require_react());
var Context = (0, import_react.createContext)(canUseDOM_default ? window : void 0);
var WindowProvider = Context.Provider;
function useWindow() {
  return (0, import_react.useContext)(Context);
}

export {
  contains,
  useWindow
};
//# sourceMappingURL=chunk-FRYYRT3Z.js.map
