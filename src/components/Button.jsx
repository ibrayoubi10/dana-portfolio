export function Button({ as = "button", href, onClick, variant = "primary", children }) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-coral/40";

  const styles = {
    primary:
      "text-white shadow-soft bg-gradient-to-r from-brand-coral to-brand-blue " +
      "hover:opacity-95 active:scale-[0.99]",
    secondary:
      "glass text-brand-ink hover:bg-white/80 active:scale-[0.99]",
    ghost: "text-brand-ink hover:bg-white/60 rounded-2xl px-4 py-2",
  };

  const cls = `${base} ${styles[variant]}`;

  if (as === "a") {
    return (
      <a className={cls} href={href} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} onClick={onClick} type="button">
      {children}
    </button>
  );
}
