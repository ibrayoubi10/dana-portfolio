export function Button({ as = "button", href, onClick, variant = "primary", className = "", children }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-semibold " +
    "focus:outline-none focus:ring-2 focus:ring-mauve-400/40 focus:ring-offset-2 cursor-pointer";

  const styles = {
    primary:   "btn-primary",
    secondary: "btn-secondary",
    ghost:     "text-ink-700 hover:bg-mauve-50/60 rounded-2xl px-4 py-2 transition",
  };

  const cls = `${base} ${styles[variant] ?? ""} ${className}`;

  if (as === "a") {
    return <a className={cls} href={href} onClick={onClick}>{children}</a>;
  }
  return (
    <button className={cls} onClick={onClick} type="button">{children}</button>
  );
}
