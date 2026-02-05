export function Card({ children, className = "" }) {
  return (
    <div className={"glass rounded-3xl shadow-soft p-6 sm:p-7 card-hover " + className}>
      {children}
    </div>
  );
}
