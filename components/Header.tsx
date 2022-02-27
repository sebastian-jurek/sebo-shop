import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full max-w-2xl mx-auto">
      <nav className="px-4 py-2 bg-gray-500 text-white">
        <Link href="/">
          <a>Główna</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </header>
  );
};
