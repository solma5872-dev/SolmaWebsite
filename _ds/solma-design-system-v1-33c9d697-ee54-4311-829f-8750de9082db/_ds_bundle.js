/* @ds-bundle: {"format":3,"namespace":"SolMaDesignSystem_33c9d6","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"50a1ff36500d","components/actions/IconButton.jsx":"b5c1dbdad592","components/display/Avatar.jsx":"f818cf90440c","components/display/Badge.jsx":"77630eff052b","components/display/Card.jsx":"e07c78508752","components/feedback/Banner.jsx":"eaa07d8a60c4","components/forms/Input.jsx":"5cc18cd911ff","components/forms/Switch.jsx":"53d8a3d62115","ui_kits/landing/Landing.jsx":"e9ee1fdf7c3c","ui_kits/whatsapp/WhatsAppChat.jsx":"f25c305f200d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SolMaDesignSystem_33c9d6 = window.SolMaDesignSystem_33c9d6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: "8px 14px",
    fontSize: "var(--text-sm)",
    height: 36,
    radius: "var(--radius-md)",
    gap: 7
  },
  md: {
    padding: "11px 20px",
    fontSize: "var(--text-md)",
    height: 44,
    radius: "var(--radius-md)",
    gap: 9
  },
  lg: {
    padding: "15px 26px",
    fontSize: "var(--text-lg)",
    height: 54,
    radius: "var(--radius-lg)",
    gap: 11
  }
};
const VARIANTS = {
  primary: {
    background: "var(--primary)",
    color: "var(--text-on-primary)",
    border: "1px solid transparent",
    boxShadow: "var(--glow-sun)",
    "--hover-bg": "var(--primary-hover)",
    "--press-bg": "var(--primary-press)"
  },
  accent: {
    background: "var(--accent)",
    color: "var(--text-on-coral)",
    border: "1px solid transparent",
    boxShadow: "var(--glow-coral)",
    "--hover-bg": "var(--accent-hover)",
    "--press-bg": "var(--coral-700)"
  },
  secondary: {
    background: "var(--bg-surface)",
    color: "var(--text-strong)",
    border: "1px solid var(--border-strong)",
    boxShadow: "var(--shadow-xs)",
    "--hover-bg": "var(--cream-50)",
    "--press-bg": "var(--cream-100)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-body)",
    border: "1px solid transparent",
    "--hover-bg": "var(--cream-100)",
    "--press-bg": "var(--cream-200)"
  }
};

/**
 * SolMa primary action button.
 * Variants: primary (marigold), accent (coral), secondary (outline), ghost.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  loading = false,
  disabled = false,
  fullWidth = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const sz = SIZES[size] || SIZES.md;
  const vr = VARIANTS[variant] || VARIANTS.primary;
  const isDisabled = disabled || loading;
  const [state, setState] = React.useState("rest");
  const bg = state === "press" ? vr["--press-bg"] : state === "hover" ? vr["--hover-bg"] : vr.background;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: isDisabled,
    onClick: onClick,
    onMouseEnter: () => setState("hover"),
    onMouseLeave: () => setState("rest"),
    onMouseDown: () => setState("press"),
    onMouseUp: () => setState("hover"),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: sz.gap,
      width: fullWidth ? "100%" : "auto",
      minHeight: sz.height,
      padding: sz.padding,
      font: "var(--type-label)",
      fontSize: sz.fontSize,
      fontWeight: "var(--weight-semibold)",
      lineHeight: 1,
      letterSpacing: "var(--tracking-snug)",
      borderRadius: vr.radius || sz.radius,
      cursor: isDisabled ? "not-allowed" : "pointer",
      opacity: isDisabled ? 0.5 : 1,
      transition: "background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
      transform: state === "press" && !isDisabled ? "translateY(1px)" : "none",
      WebkitTapHighlightColor: "transparent",
      fontFamily: "var(--font-sans)",
      ...vr,
      background: bg,
      ...style
    }
  }, rest), loading ? /*#__PURE__*/React.createElement(Spinner, null) : iconLeft, children && /*#__PURE__*/React.createElement("span", null, children), !loading && iconRight);
}
function Spinner() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: "50%",
      border: "2px solid currentColor",
      borderTopColor: "transparent",
      display: "inline-block",
      animation: "solma-spin 0.7s linear infinite"
    }
  });
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 34,
  md: 42,
  lg: 50
};
const VARIANTS = {
  solid: {
    background: "var(--primary)",
    color: "var(--text-on-primary)",
    border: "1px solid transparent",
    "--hover-bg": "var(--primary-hover)"
  },
  soft: {
    background: "var(--cream-100)",
    color: "var(--text-strong)",
    border: "1px solid transparent",
    "--hover-bg": "var(--cream-200)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-body)",
    border: "1px solid transparent",
    "--hover-bg": "var(--cream-100)"
  },
  outline: {
    background: "var(--bg-surface)",
    color: "var(--text-strong)",
    border: "1px solid var(--border-strong)",
    "--hover-bg": "var(--cream-50)"
  }
};

/**
 * Square icon-only button. Always pass an accessible label.
 */
function IconButton({
  children,
  label,
  variant = "ghost",
  size = "md",
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const vr = VARIANTS[variant] || VARIANTS.ghost;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--dur-fast) var(--ease-out)",
      ...vr,
      background: hover && !disabled ? vr["--hover-bg"] : vr.background,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xs: 24,
  sm: 32,
  md: 44,
  lg: 56,
  xl: 72
};
const PALETTE = [["var(--sun-200)", "var(--sun-700)"], ["#FBE3DB", "var(--coral-700)"], ["#DCF0E8", "var(--sage-700)"], ["var(--cream-200)", "var(--ink-700)"]];
function initials(name = "") {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * User / business avatar. Shows image, else colored initials.
 */
function Avatar({
  src,
  name = "",
  size = "md",
  ring = false,
  style,
  ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const pal = PALETTE[(name.charCodeAt(0) || 0) % PALETTE.length];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      width: dim,
      height: dim,
      flex: "none",
      borderRadius: "50%",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      background: pal[0],
      color: pal[1],
      font: "var(--type-label)",
      fontSize: dim * 0.38,
      fontWeight: "var(--weight-bold)",
      fontFamily: "var(--font-sans)",
      boxShadow: ring ? "0 0 0 2px var(--bg-surface), 0 0 0 4px var(--sun-400)" : "none",
      userSelect: "none",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    background: "var(--cream-100)",
    color: "var(--ink-700)",
    border: "1px solid var(--sand-300)"
  },
  sun: {
    background: "var(--sun-100)",
    color: "var(--sun-700)",
    border: "1px solid var(--sun-200)"
  },
  coral: {
    background: "#FBE3DB",
    color: "var(--coral-700)",
    border: "1px solid #F4C3B5"
  },
  sage: {
    background: "#DCF0E8",
    color: "var(--sage-700)",
    border: "1px solid #B6E0D1"
  },
  solid: {
    background: "var(--sage-500)",
    color: "#fff",
    border: "1px solid transparent"
  },
  danger: {
    background: "var(--red-50)",
    color: "#A1331F",
    border: "1px solid #F0C2B8"
  },
  info: {
    background: "var(--blue-50)",
    color: "#1F4E80",
    border: "1px solid #C2D8EC"
  }
};

/**
 * Compact status / category label. Optional leading dot.
 */
function Badge({
  children,
  tone = "neutral",
  dot = false,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "3px 10px",
      borderRadius: "var(--radius-pill)",
      font: "var(--type-eyebrow)",
      fontSize: "var(--text-xs)",
      letterSpacing: "var(--tracking-snug)",
      fontFamily: "var(--font-sans)",
      whiteSpace: "nowrap",
      ...t,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "currentColor",
      opacity: 0.9
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  white: {
    background: "var(--bg-surface)",
    border: "1px solid var(--border-subtle)"
  },
  warm: {
    background: "var(--bg-surface-warm)",
    border: "1px solid var(--sand-300)"
  },
  sun: {
    background: "var(--sun-50)",
    border: "1px solid var(--sun-200)"
  },
  inverse: {
    background: "var(--bg-inverse)",
    border: "1px solid var(--ink-700)",
    color: "var(--text-on-inverse)"
  }
};
const ELEV = {
  flat: "none",
  sm: "var(--shadow-sm)",
  md: "var(--shadow-md)",
  lg: "var(--shadow-lg)"
};

/**
 * Surface container. Warm by default, soft shadow, 16px radius.
 */
function Card({
  children,
  tone = "white",
  elevation = "md",
  padding = "var(--space-6)",
  interactive = false,
  onClick,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.white;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: "var(--radius-lg)",
      padding,
      boxShadow: hover && interactive ? "var(--shadow-lg)" : ELEV[elevation],
      transform: hover && interactive ? "translateY(-2px)" : "none",
      transition: "box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
      cursor: interactive ? "pointer" : "default",
      fontFamily: "var(--font-sans)",
      color: "var(--text-body)",
      ...t,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: {
    bg: "var(--blue-50)",
    border: "#C2D8EC",
    fg: "#1F4E80",
    accent: "var(--info)"
  },
  success: {
    bg: "#DCF0E8",
    border: "#B6E0D1",
    fg: "var(--sage-700)",
    accent: "var(--success)"
  },
  warning: {
    bg: "var(--sun-50)",
    border: "var(--sun-200)",
    fg: "var(--sun-700)",
    accent: "var(--warning)"
  },
  danger: {
    bg: "var(--red-50)",
    border: "#F0C2B8",
    fg: "#A1331F",
    accent: "var(--danger)"
  }
};

/**
 * Inline contextual banner. Optional icon, title, and dismiss.
 */
function Banner({
  children,
  tone = "info",
  title,
  icon,
  onDismiss,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      background: t.bg,
      border: `1px solid ${t.border}`,
      borderRadius: "var(--radius-md)",
      padding: "13px 15px",
      fontFamily: "var(--font-sans)",
      color: t.fg,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      color: t.accent,
      marginTop: 1,
      flex: "none"
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      color: t.fg,
      marginBottom: children ? 2 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      color: t.fg,
      opacity: 0.92
    }
  }, children)), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Fermer",
    onClick: onDismiss,
    style: {
      border: "none",
      background: "transparent",
      color: t.fg,
      cursor: "pointer",
      fontSize: 18,
      lineHeight: 1,
      opacity: 0.6,
      padding: 0,
      flex: "none"
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with label, hint, error and optional leading icon / suffix.
 */
function Input({
  label,
  hint,
  error,
  iconLeft,
  suffix,
  id,
  size = "md",
  disabled = false,
  style,
  ...rest
}) {
  const autoId = React.useId();
  const inputId = id || autoId;
  const [focus, setFocus] = React.useState(false);
  const pad = size === "lg" ? "13px 14px" : size === "sm" ? "8px 12px" : "11px 14px";
  const borderColor = error ? "var(--danger)" : focus ? "var(--border-focus)" : "var(--border-strong)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-sans)"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      font: "var(--type-label)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      background: disabled ? "var(--cream-100)" : "var(--bg-surface)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      padding: pad,
      boxShadow: focus ? "var(--ring-focus)" : "none",
      transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      color: "var(--text-muted)"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      font: "var(--type-body)",
      color: "var(--text-strong)",
      minWidth: 0
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      font: "var(--type-body-sm)"
    }
  }, suffix)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * On/off switch. Sage when on (the brand's "live / go" color).
 */
function Switch({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  label,
  id,
  style,
  ...rest
}) {
  const autoId = React.useId();
  const switchId = id || autoId;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  const track = /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": on,
    id: switchId,
    disabled: disabled,
    onClick: toggle,
    style: {
      width: 46,
      height: 27,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      border: "none",
      padding: 3,
      cursor: disabled ? "not-allowed" : "pointer",
      background: on ? "var(--positive)" : "var(--sand-400)",
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--dur-base) var(--ease-out)",
      display: "inline-flex",
      alignItems: "center",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 21,
      height: 21,
      borderRadius: "50%",
      background: "var(--white)",
      boxShadow: "var(--shadow-sm)",
      transform: on ? "translateX(19px)" : "translateX(0)",
      transition: "transform var(--dur-base) var(--ease-out)"
    }
  }));
  if (!label) return track;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: switchId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-sans)"
    }
  }, track, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-strong)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Landing.jsx
try { (() => {
/* SolMa — marketing landing page recreation.
   Warm, sunny SaaS landing for French small-business owners. Uses brand
   components (Button, Card, Badge) on cream paper. */

const {
  Button,
  Card,
  Badge
} = window.SolMaDesignSystem_33c9d6;
const {
  useRef,
  useEffect
} = React;
function Ico({
  n,
  s = 22,
  c = "currentColor",
  sw = 2
}) {
  const r = useRef();
  useEffect(() => {
    if (r.current && window.lucide && lucide[n]) {
      r.current.innerHTML = "";
      const e = lucide.createElement(lucide[n]);
      e.setAttribute("width", s);
      e.setAttribute("height", s);
      e.setAttribute("stroke", c);
      e.setAttribute("stroke-width", sw);
      r.current.appendChild(e);
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    ref: r,
    style: {
      display: "inline-flex"
    }
  });
}
const wrap = {
  maxWidth: 1120,
  margin: "0 auto",
  padding: "0 28px"
};
function Nav() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "rgba(252,248,241,.86)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      height: 70,
      display: "flex",
      alignItems: "center",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "solma-logo",
    style: {
      fontSize: 27
    }
  }, "SolMa"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 26,
      marginLeft: 18,
      fontSize: 15,
      color: "var(--text-body)",
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", null, "Comment \xE7a marche"), /*#__PURE__*/React.createElement("span", null, "Tarifs"), /*#__PURE__*/React.createElement("span", null, "Avis")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Se connecter"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Ico, {
      n: "MessageCircle",
      s: 17
    })
  }, "Essayer sur WhatsApp"))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -160,
      right: -120,
      width: 440,
      height: 440,
      borderRadius: "50%",
      background: "radial-gradient(circle,#FCE9C8 0%,rgba(252,248,241,0) 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: 40,
      alignItems: "center",
      padding: "70px 28px 80px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "sage",
    dot: true
  }, "Nouveau \xB7 pour les commerces de quartier"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 60,
      lineHeight: 1.04,
      letterSpacing: "-0.025em",
      color: "var(--text-strong)",
      margin: "16px 0 18px"
    }
  }, "Votre boutique,", /*#__PURE__*/React.createElement("br", null), "sous le ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--coral-500)"
    }
  }, "soleil"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.55,
      color: "var(--text-body)",
      maxWidth: 460,
      margin: "0 0 26px"
    }
  }, "SolMa est votre community manager dans WhatsApp. Envoyez une photo et une note vocale \u2014 on r\xE9dige, on retouche, on publie sur Instagram et Facebook. ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-strong)"
    }
  }, "Sans appli, sans tableau de bord.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Ico, {
      n: "MessageCircle",
      s: 20
    })
  }, "Commencer sur WhatsApp"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Ico, {
      n: "Play",
      s: 18
    })
  }, "Voir une d\xE9mo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      marginTop: 22,
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "Check",
    s: 17,
    c: "var(--sage-500)"
  }), " 14 jours d'essai \xB7 sans carte bancaire")), /*#__PURE__*/React.createElement(HeroPhone, null)));
}
function HeroPhone() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 290,
      background: "var(--white)",
      borderRadius: 30,
      boxShadow: "var(--shadow-xl)",
      padding: 14,
      border: "1px solid var(--sand-300)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#075E54",
      color: "#fff",
      borderRadius: "18px 18px 0 0",
      padding: "13px 14px",
      display: "flex",
      alignItems: "center",
      gap: 9,
      margin: -14,
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "solma-mark",
    style: {
      width: 34,
      height: 34,
      borderRadius: "50%",
      fontSize: 20
    }
  }, /*#__PURE__*/React.createElement("span", null, "S"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14.5
    }
  }, "SolMa"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#cde9e3"
    }
  }, "en ligne"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--wa-bg)",
      padding: "14px 12px",
      margin: "0 -14px",
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: "flex-end",
      background: "var(--wa-bubble-out)",
      borderRadius: "10px 3px 10px 10px",
      padding: 7,
      maxWidth: "82%",
      boxShadow: "0 1px 0.5px rgba(0,0,0,.13)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 96,
      borderRadius: 7,
      background: "linear-gradient(135deg,#C9B89B,#B49E7E)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "Image",
    s: 26,
    c: "rgba(255,255,255,.9)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      fontSize: 10,
      color: "#5b7a52",
      marginTop: 3
    }
  }, "8:02 \u2713\u2713")), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: "flex-start",
      background: "#fff",
      borderRadius: "3px 10px 10px 10px",
      padding: "8px 10px",
      maxWidth: "88%",
      boxShadow: "0 1px 0.5px rgba(0,0,0,.13)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      lineHeight: 1.4,
      color: "#111b21"
    }
  }, "Croissants tout chauds, sortis du four \xE0 7h \uD83E\uDD50 Venez vite !"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      background: "var(--sun-400)",
      color: "var(--ink-900)",
      fontWeight: 600,
      fontSize: 11.5,
      textAlign: "center",
      padding: "6px 0",
      borderRadius: 8
    }
  }, "Valider & publier"), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--cream-100)",
      color: "var(--ink-700)",
      fontWeight: 600,
      fontSize: 11.5,
      padding: "6px 10px",
      borderRadius: 8
    }
  }, "Modifier")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--wa-bg)",
      margin: "0 -14px -14px",
      borderRadius: "0 0 18px 18px",
      padding: "8px 12px 12px",
      display: "flex",
      alignItems: "center",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: "#fff",
      borderRadius: 20,
      padding: "7px 12px",
      fontSize: 12.5,
      color: "#8a9b8f"
    }
  }, "Message"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "50%",
      background: "#128C7E",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "Mic",
    s: 17,
    c: "#fff"
  })))));
}
function LogoRow() {
  const items = ["Boulangeries", "Restaurants", "Salons de coiffure", "Fleuristes", "Indépendants"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-surface-warm)",
      borderTop: "1px solid var(--border-subtle)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "22px 28px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 30,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      fontWeight: 600
    }
  }, "D\xE9j\xE0 adopt\xE9 par 2 400+ commerces :"), items.map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 17,
      color: "var(--ink-500)"
    }
  }, i))));
}
function How() {
  const steps = [{
    ic: "Camera",
    t: "Envoyez",
    d: "Une photo de votre produit + une note vocale de 10 secondes. C'est tout."
  }, {
    ic: "Sparkles",
    t: "SolMa crée",
    d: "On retouche la photo, on écrit une légende qui vous ressemble, on choisit les hashtags."
  }, {
    ic: "Send",
    t: "Vous validez",
    d: "Un mot dans WhatsApp et c'est publié sur Instagram et Facebook. Vous gardez la main."
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "84px 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      maxWidth: 600,
      margin: "0 auto 50px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--coral-600)"
    }
  }, "Comment \xE7a marche"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 42,
      letterSpacing: "-0.02em",
      color: "var(--text-strong)",
      margin: "12px 0 0"
    }
  }, "Trois gestes. Z\xE9ro corv\xE9e.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 22
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: s.t,
    elevation: "sm",
    padding: "28px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 16,
      background: "var(--sun-100)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: s.ic,
    s: 26,
    c: "var(--sun-600)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--coral-500)",
      fontWeight: 700
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 23,
      color: "var(--text-strong)",
      margin: 0
    }
  }, s.t)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.55,
      color: "var(--text-body)",
      margin: 0
    }
  }, s.d)))));
}
function Testimonial() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ink-900)",
      color: "var(--cream-50)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "76px 28px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Ico, {
    n: "Quote",
    s: 40,
    c: "var(--sun-400)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1.25,
      letterSpacing: "-0.01em",
      margin: "16px 0 22px"
    }
  }, "\xAB Je poste tous les jours maintenant. Avant, je n'avais jamais le temps. SolMa, c'est 10 secondes le matin. \xBB"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: "50%",
      background: "var(--sun-300)",
      color: "var(--ink-900)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      fontFamily: "var(--font-sans)"
    }
  }, "CR"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, "Camille Roy"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--ink-400)"
    }
  }, "Boulangerie du Soleil, Lyon")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, [["+312%", "de visibilité Instagram"], ["10 s", "par publication"], ["6 j/7", "de présence en ligne"], ["0", "appli à installer"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      background: "var(--ink-800)",
      border: "1px solid var(--ink-700)",
      borderRadius: "var(--radius-lg)",
      padding: "22px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 34,
      color: "var(--sun-400)",
      letterSpacing: "-0.02em"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--ink-300)",
      marginTop: 4
    }
  }, l))))));
}
function Pricing() {
  const tiers = [{
    name: "Solo",
    price: "29",
    tag: null,
    feat: ["1 commerce", "Instagram + Facebook", "Posts illimités", "Validation par WhatsApp"],
    cta: "secondary"
  }, {
    name: "Boutique",
    price: "49",
    tag: "Le plus choisi",
    feat: ["Tout Solo, plus :", "Stories automatiques", "Programmation des posts", "Statistiques hebdo"],
    cta: "primary"
  }, {
    name: "Quartier",
    price: "79",
    tag: null,
    feat: ["Tout Boutique, plus :", "Jusqu'à 3 commerces", "Réponses aux commentaires", "Support prioritaire"],
    cta: "secondary"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "84px 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      maxWidth: 600,
      margin: "0 auto 48px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--coral-600)"
    }
  }, "Tarifs"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 42,
      letterSpacing: "-0.02em",
      color: "var(--text-strong)",
      margin: "12px 0 8px"
    }
  }, "Un prix simple, comme le reste."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: "var(--text-muted)",
      margin: 0
    }
  }, "Sans engagement. Annulez en un message.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 22,
      alignItems: "stretch"
    }
  }, tiers.map(t => /*#__PURE__*/React.createElement(Card, {
    key: t.name,
    tone: t.tag ? "white" : "white",
    elevation: t.tag ? "lg" : "sm",
    padding: "30px",
    style: {
      border: t.tag ? "2px solid var(--sun-400)" : "1px solid var(--border-subtle)",
      position: "relative",
      display: "flex",
      flexDirection: "column"
    }
  }, t.tag && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -12,
      left: "50%",
      transform: "translateX(-50%)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "solid"
  }, t.tag)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 22,
      color: "var(--text-strong)",
      margin: "0 0 6px"
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 4,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 46,
      color: "var(--text-strong)",
      letterSpacing: "-0.02em"
    }
  }, t.price, "\u20AC"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: "var(--text-muted)"
    }
  }, "/ mois")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 11,
      flex: 1,
      marginBottom: 22
    }
  }, t.feat.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      display: "flex",
      gap: 9,
      alignItems: "flex-start",
      fontSize: 14.5,
      color: i === 0 && f.includes("Tout") ? "var(--text-muted)" : "var(--text-body)",
      fontWeight: i === 0 && f.includes("Tout") ? 600 : 400
    }
  }, !(i === 0 && f.includes("Tout")) && /*#__PURE__*/React.createElement(Ico, {
    n: "Check",
    s: 18,
    c: "var(--sage-500)"
  }), /*#__PURE__*/React.createElement("span", null, f)))), /*#__PURE__*/React.createElement(Button, {
    variant: t.cta,
    fullWidth: true
  }, "Choisir ", t.name)))));
}
function FinalCTA() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "20px 28px 90px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg,var(--sun-400) 0%,var(--coral-500) 120%)",
      borderRadius: "var(--radius-2xl)",
      padding: "60px 40px",
      textAlign: "center",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 40,
      letterSpacing: "-0.02em",
      color: "var(--ink-900)",
      margin: "0 0 12px"
    }
  }, "Et si vous publiez d\xE8s ce matin ?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: "rgba(36,27,20,.82)",
      margin: "0 0 26px",
      maxWidth: 480,
      marginInline: "auto"
    }
  }, "Ouvrez WhatsApp, dites bonjour \xE0 SolMa. Votre premier post est gratuit."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Ico, {
      n: "MessageCircle",
      s: 20
    }),
    style: {
      background: "var(--ink-900)",
      color: "var(--cream-50)",
      border: "none"
    }
  }, "D\xE9marrer sur WhatsApp")));
}
function Footer() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-surface-warm)",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "36px 28px",
      display: "flex",
      alignItems: "center",
      gap: 18,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "solma-logo",
    style: {
      fontSize: 23
    }
  }, "SolMa"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: "var(--text-muted)"
    }
  }, "\xA9 2026 SolMa \xB7 Fait avec \u2600\uFE0F en France"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 20,
      fontSize: 13.5,
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Confidentialit\xE9"), /*#__PURE__*/React.createElement("span", null, "CGU"), /*#__PURE__*/React.createElement("span", null, "Contact"))));
}
function Landing() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(LogoRow, null), /*#__PURE__*/React.createElement(How, null), /*#__PURE__*/React.createElement(Testimonial, null), /*#__PURE__*/React.createElement(Pricing, null), /*#__PURE__*/React.createElement(FinalCTA, null), /*#__PURE__*/React.createElement(Footer, null));
}
window.SolMaLanding = {
  Landing
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Landing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/whatsapp/WhatsAppChat.jsx
try { (() => {
/* SolMa × WhatsApp — chat surface recreation.
   The product lives 100% inside a WhatsApp conversation. This file rebuilds
   the WhatsApp chrome (green header, beige thread, in/out bubbles) and the
   SolMa post-approval flow on top of it. Brand components (Button/Badge) are
   used inside SolMa's rich messages; WhatsApp chrome uses WhatsApp's own look. */

const {
  Button,
  Badge
} = window.SolMaDesignSystem_33c9d6;
const {
  useState,
  useRef,
  useEffect
} = React;

/* tiny lucide icon helper */
function Ico({
  n,
  s = 22,
  c = "currentColor",
  sw = 2
}) {
  const r = useRef();
  useEffect(() => {
    if (r.current && window.lucide && lucide[n]) {
      r.current.innerHTML = "";
      const e = lucide.createElement(lucide[n]);
      e.setAttribute("width", s);
      e.setAttribute("height", s);
      e.setAttribute("stroke", c);
      e.setAttribute("stroke-width", sw);
      r.current.appendChild(e);
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    ref: r,
    style: {
      display: "inline-flex"
    }
  });
}
const WA_GREEN = "#075E54";
const WA_TEAL = "#128C7E";
function Tick({
  read
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      marginLeft: 3,
      color: read ? "#53BDEB" : "#9bb0a5"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "11",
    viewBox: "0 0 16 11",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 5.5L4.2 8.6L9.5 2",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 8.4L7 7.3M11.4 2L7.4 6.9",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
function Time({
  t,
  out,
  read
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: out ? "#5b7a52" : "#8a9b8f",
      marginLeft: 8,
      whiteSpace: "nowrap",
      display: "inline-flex",
      alignItems: "center"
    }
  }, t, out && /*#__PURE__*/React.createElement(Tick, {
    read: read
  }));
}

/* photo placeholder block (user supplies real imagery later) */
function PhotoBlock({
  label,
  h = 150,
  retouched
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      borderRadius: 8,
      position: "relative",
      overflow: "hidden",
      background: retouched ? "linear-gradient(135deg,#F6C76A 0%,#EAA24A 45%,#D98441 100%)" : "linear-gradient(135deg,#C9B89B 0%,#B49E7E 100%)",
      display: "flex",
      alignItems: "flex-end",
      padding: 10,
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: 0.85
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: retouched ? "Sparkles" : "Image",
    s: 30,
    c: "rgba(255,255,255,.92)",
    sw: 2
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "rgba(255,255,255,.95)",
      background: "rgba(36,27,20,.32)",
      padding: "3px 8px",
      borderRadius: 999
    }
  }, label));
}
function VoiceNote({
  secs = "0:08"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      minWidth: 168
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "Play",
    s: 22,
    c: WA_TEAL,
    sw: 2
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      gap: 2
    }
  }, [7, 12, 18, 10, 22, 14, 8, 16, 20, 11, 6, 15, 9, 19, 12, 7].map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 2.5,
      height: h,
      borderRadius: 2,
      background: "#9bb0a5"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "#5b7a52"
    }
  }, secs));
}
function Bubble({
  out,
  children,
  tail = true,
  pad = "7px 9px 6px"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: out ? "flex-end" : "flex-start",
      padding: "1px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "78%",
      background: out ? "var(--wa-bubble-out)" : "var(--wa-bubble-in)",
      borderRadius: 10,
      [out ? "borderTopRightRadius" : "borderTopLeftRadius"]: tail ? 3 : 10,
      padding: pad,
      boxShadow: "0 1px 0.5px rgba(0,0,0,.13)",
      position: "relative",
      fontFamily: "var(--font-sans)",
      fontSize: 14.5,
      lineHeight: 1.4,
      color: "#111b21"
    }
  }, children));
}

/* SolMa's rich post-approval card, sent as a WhatsApp message */
function PostProposal({
  onApprove,
  onEdit,
  status
}) {
  return /*#__PURE__*/React.createElement(Bubble, {
    out: false,
    pad: "8px 8px 9px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 250
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginBottom: 7
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "sun"
  }, "Proposition"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      color: "var(--text-muted)",
      marginLeft: "auto"
    }
  }, "SolMa")), /*#__PURE__*/React.createElement(PhotoBlock, {
    label: "retouch\xE9 \u2728",
    retouched: true,
    h: 150
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "9px 2px 4px",
      fontSize: 14,
      lineHeight: 1.45,
      color: "#111b21"
    }
  }, "Croissants tout chauds, sortis du four \xE0 7h \uD83E\uDD50 Venez vite, \xE7a part vite ! \uD83D\uDCCD 12 rue du March\xE9."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 5,
      margin: "6px 2px 2px"
    }
  }, ["#boulangerie", "#faitmaison", "#croissant", "#Lyon"].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontSize: 12.5,
      color: "var(--coral-600)",
      fontWeight: 600
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      margin: "9px 2px",
      paddingTop: 8,
      borderTop: "1px solid var(--cream-200)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: "var(--text-muted)",
      display: "inline-flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "Instagram",
    s: 15,
    c: "var(--coral-500)"
  }), " Instagram"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: "var(--text-muted)",
      display: "inline-flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "Facebook",
    s: 15,
    c: "var(--info)"
  }), " Facebook")), status === "pending" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 7,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    fullWidth: true,
    onClick: onApprove
  }, "Valider & publier"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: onEdit
  }, "Modifier")), status === "approved" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginTop: 4,
      color: "var(--sage-600)",
      fontWeight: 600,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "CircleCheck",
    s: 17,
    c: "var(--sage-600)"
  }), " Valid\xE9 par vous")));
}
function Typing() {
  return /*#__PURE__*/React.createElement(Bubble, {
    out: false,
    tail: false,
    pad: "11px 13px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      alignItems: "center"
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "#9bb0a5",
      display: "inline-block",
      animation: `wa-typing 1.1s ${i * 0.18}s infinite ease-in-out`
    }
  }))));
}
function DayChip({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      margin: "10px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: "#FFF6D9",
      color: "#5b6b73",
      fontSize: 12,
      padding: "5px 12px",
      borderRadius: 8,
      boxShadow: "0 1px 0.5px rgba(0,0,0,.1)"
    }
  }, children));
}
function PhoneFrame({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 800,
      background: "#000",
      borderRadius: 46,
      padding: 11,
      boxShadow: "var(--shadow-xl)",
      position: "relative",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 11,
      left: "50%",
      transform: "translateX(-50%)",
      width: 130,
      height: 30,
      background: "#000",
      borderRadius: "0 0 18px 18px",
      zIndex: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      borderRadius: 36,
      overflow: "hidden",
      background: "var(--wa-bg)",
      display: "flex",
      flexDirection: "column",
      position: "relative"
    }
  }, children));
}
function Header() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: WA_GREEN,
      color: "#fff",
      paddingTop: 38
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      padding: "7px 12px 11px"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "ChevronLeft",
    s: 26,
    c: "#fff"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "solma-mark",
    style: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      fontSize: 23
    }
  }, /*#__PURE__*/React.createElement("span", null, "S"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 16.5,
      fontFamily: "var(--font-sans)"
    }
  }, "SolMa"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "#cde9e3"
    }
  }, "votre community manager \xB7 en ligne")), /*#__PURE__*/React.createElement(Ico, {
    n: "Video",
    s: 22,
    c: "#fff"
  }), /*#__PURE__*/React.createElement(Ico, {
    n: "Phone",
    s: 20,
    c: "#fff"
  }), /*#__PURE__*/React.createElement(Ico, {
    n: "EllipsisVertical",
    s: 22,
    c: "#fff"
  })));
}
function Composer({
  onSend,
  sendLabel
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 9px 14px",
      background: "var(--wa-bg)",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: "#fff",
      borderRadius: 24,
      display: "flex",
      alignItems: "center",
      gap: 9,
      padding: "9px 13px",
      boxShadow: "0 1px 0.5px rgba(0,0,0,.1)"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "Smile",
    s: 22,
    c: "#8a9b8f"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: "#8a9b8f",
      fontSize: 14.5,
      fontFamily: "var(--font-sans)"
    }
  }, sendLabel || "Message"), /*#__PURE__*/React.createElement(Ico, {
    n: "Paperclip",
    s: 21,
    c: "#8a9b8f"
  }), /*#__PURE__*/React.createElement(Ico, {
    n: "Camera",
    s: 21,
    c: "#8a9b8f"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onSend,
    style: {
      width: 47,
      height: 47,
      borderRadius: "50%",
      background: WA_TEAL,
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      flex: "none",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "Mic",
    s: 23,
    c: "#fff"
  })));
}
function Chat() {
  // step: 0 intro · 1 user sent photo+voice · 2 SolMa typing · 3 proposal · 4 approved/published
  const [step, setStep] = useState(0);
  const scroller = useRef();
  useEffect(() => {
    if (scroller.current) scroller.current.scrollTop = scroller.current.scrollHeight;
  }, [step]);
  const advance = () => {
    if (step === 0) {
      setStep(1);
      setTimeout(() => setStep(2), 700);
      setTimeout(() => setStep(3), 2100);
    } else if (step === 3) {
      setStep(4);
    }
  };
  const composerLabel = step === 0 ? "Touchez le micro pour envoyer la photo + note vocale" : step === 3 ? "Touchez « Valider » dans le message" : "Message";
  return /*#__PURE__*/React.createElement(PhoneFrame, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
    ref: scroller,
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "4px 9px 6px",
      backgroundImage: "radial-gradient(rgba(120,100,70,.05) 1px, transparent 1px)",
      backgroundSize: "18px 18px"
    }
  }, /*#__PURE__*/React.createElement(DayChip, null, "Aujourd'hui"), /*#__PURE__*/React.createElement(Bubble, {
    out: false
  }, /*#__PURE__*/React.createElement("div", null, "Bonjour Camille \u2600\uFE0F Une nouveaut\xE9 \xE0 publier aujourd'hui ? Envoyez-moi une photo + une petite note vocale."), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      marginTop: -2
    }
  }, /*#__PURE__*/React.createElement(Time, {
    t: "7:58"
  }))), step >= 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Bubble, {
    out: true
  }, /*#__PURE__*/React.createElement(PhotoBlock, {
    label: "photo des croissants",
    h: 170
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement(Time, {
    t: "8:02",
    out: true,
    read: step >= 2
  }))), /*#__PURE__*/React.createElement(Bubble, {
    out: true
  }, /*#__PURE__*/React.createElement(VoiceNote, {
    secs: "0:09"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Time, {
    t: "8:02",
    out: true,
    read: step >= 2
  })))), step === 2 && /*#__PURE__*/React.createElement(Typing, null), step >= 3 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Bubble, {
    out: false
  }, /*#__PURE__*/React.createElement("div", null, "C'est pr\xEAt ! J'ai retouch\xE9 la photo et \xE9crit la l\xE9gende. On publie sur Instagram et Facebook ?"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      marginTop: -2
    }
  }, /*#__PURE__*/React.createElement(Time, {
    t: "8:02"
  }))), /*#__PURE__*/React.createElement(PostProposal, {
    status: step >= 4 ? "approved" : "pending",
    onApprove: advance,
    onEdit: () => {}
  })), step >= 4 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Bubble, {
    out: true
  }, /*#__PURE__*/React.createElement("div", null, "Parfait, publie \uD83D\uDC4D"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      marginTop: -2
    }
  }, /*#__PURE__*/React.createElement(Time, {
    t: "8:03",
    out: true,
    read: true
  }))), /*#__PURE__*/React.createElement(Bubble, {
    out: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7,
      color: "var(--sage-600)",
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "CircleCheck",
    s: 18,
    c: "var(--sage-600)"
  }), " Publi\xE9 sur Instagram et Facebook \uD83C\uDF89"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#54656f",
      marginTop: 4
    }
  }, "Je vous envoie les statistiques ce soir. Bonne journ\xE9e \u2600\uFE0F"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(Time, {
    t: "8:03"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6
    }
  })), /*#__PURE__*/React.createElement(Composer, {
    onSend: advance,
    sendLabel: composerLabel
  }));
}
window.SolMaWhatsApp = {
  Chat
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/whatsapp/WhatsAppChat.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

})();
