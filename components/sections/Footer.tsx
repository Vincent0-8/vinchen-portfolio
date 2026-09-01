export default function Footer() {
  return (
    <footer className="container px-8 pt-8 pb-8 border-t-2 border-(--color-border)">
      <p className="font-medium text-sm text-center text-(--color-text-secondary)">
        &copy; {new Date().getFullYear()} Vincent
      </p>
    </footer>
  );
}