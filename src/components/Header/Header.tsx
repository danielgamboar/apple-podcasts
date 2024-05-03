import { Link } from "wouter";
import { titles } from "../../data/constants";
import useLoadingProvider from "../../hooks/useLoadingProvider";
import { routes } from "../../router/routes";

export function Header() {
  const { loadingApp } = useLoadingProvider();

  return (
    <header className="flex justify-between border-b-2 mb-4 items-center">
      <Link
        href={routes.home}
        className="text-blue-500 text-3xl hover:font-medium"
      >
        {titles.header.title}
      </Link>
      <div
        className={`bg-blue-500 h-4 w-4 rounded-full ${
          loadingApp ? "animate-pulse" : ""
        }`}
      />
    </header>
  );
}
