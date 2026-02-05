export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-brand-soft/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 text-sm text-black/60">
        © {new Date().getFullYear()} Dana El Cheikh Mohamad • Special Educator • All rights reserved.
      </div>
    </footer>
  );
}
