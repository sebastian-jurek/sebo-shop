import ActiveLink from "./ActiveLink";

export const Header = () => {
  /* const router = useRouter();
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
}; */
  return (
    <header className="w-full max-w-2xl mx-auto">
      <nav className="px-4 py-2 bg-gray-500 text-white">
        <ActiveLink href="/" activeClassName="font-extrabold">
          <a>Główna</a>
        </ActiveLink>
        <ActiveLink href="/about" activeClassName="font-extrabold">
          <a>About</a>
        </ActiveLink>
      </nav>
    </header>
  );
};
