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

// node_modules/react-bootstrap/esm/Col.js
var import_classnames = __toESM(require_classnames());
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
function useCol({
  as,
  bsPrefix,
  className,
  ...props
}) {
  bsPrefix = useBootstrapPrefix(bsPrefix, "col");
  const breakpoints = useBootstrapBreakpoints();
  const minBreakpoint = useBootstrapMinBreakpoint();
  const spans = [];
  const classes = [];
  breakpoints.forEach((brkPoint) => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let span;
    let offset;
    let order;
    if (typeof propValue === "object" && propValue != null) {
      ({
        span,
        offset,
        order
      } = propValue);
    } else {
      span = propValue;
    }
    const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : "";
    if (span)
      spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
    if (order != null)
      classes.push(`order${infix}-${order}`);
    if (offset != null)
      classes.push(`offset${infix}-${offset}`);
  });
  return [{
    ...props,
    className: (0, import_classnames.default)(className, ...spans, ...classes)
  }, {
    as,
    bsPrefix,
    spans
  }];
}
var Col = React.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  (props, ref) => {
    const [{
      className,
      ...colProps
    }, {
      as: Component = "div",
      bsPrefix,
      spans
    }] = useCol(props);
    return (0, import_jsx_runtime.jsx)(Component, {
      ...colProps,
      ref,
      className: (0, import_classnames.default)(className, !spans.length && bsPrefix)
    });
  }
);
Col.displayName = "Col";
var Col_default = Col;

export {
  useCol,
  Col_default
};
//# sourceMappingURL=chunk-7HYBUYOA.js.map
