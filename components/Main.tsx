import { ReactNode } from "react";

export const Main = ({ children }: MainProps) => {
  return (
    <main className="flex-grow max-w-2xl mx-auto grid p-6 gap-6 sm:grid-cols-2 bg-teal-500">
      {children}
    </main>
  );
};

interface MainProps {
  children: ReactNode;
}
