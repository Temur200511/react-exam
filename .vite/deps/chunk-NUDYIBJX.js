import {
  require_classnames,
  useBootstrapBreakpoints,
  useBootstrapMinBreakpoint,
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

// node_modules/react-bootstrap/esm/Row.js
var import_classnames = __toESM(require_classnames());
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var Row = React.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, "row");
  const breakpoints = useBootstrapBreakpoints();
  const minBreakpoint = useBootstrapMinBreakpoint();
  const sizePrefix = `${decoratedBsPrefix}-cols`;
  const classes = [];
  breakpoints.forEach((brkPoint) => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let cols;
    if (propValue != null && typeof propValue === "object") {
      ({
        cols
      } = propValue);
    } else {
      cols = propValue;
    }
    const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : "";
    if (cols != null)
      classes.push(`${sizePrefix}${infix}-${cols}`);
  });
  return (0, import_jsx_runtime.jsx)(Component, {
    ref,
    ...props,
    className: (0, import_classnames.default)(className, decoratedBsPrefix, ...classes)
  });
});
Row.displayName = "Row";
var Row_default = Row;

export {
  Row_default
};
//# sourceMappingURL=chunk-NUDYIBJX.js.map
