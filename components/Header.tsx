import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  return (
    <header className="w-full max-w-2xl mx-auto">
      <nav className="px-4 py-2 bg-gray-500 text-white">
        <Link href="/">
          <a className={router.pathname == "/" ? "selected" : ""}>Główna</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname == "/about" ? "selected" : ""}>About</a>
        </Link>
      </nav>
    </header>
  );
};
