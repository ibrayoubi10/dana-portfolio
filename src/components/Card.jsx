export function Card({ children, className = "", accent = false }) {
  return (
    <div
      className={
        "glass rounded-3xl shadow-soft p-6 sm:p-7 card-hover " +
        (accent ? "border-l-[3px] border-l-sage-500 " : "") +
        className
      }
    >
      {children}
    </div>
  );
}
