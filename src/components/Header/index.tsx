import { Link } from "wouter";
import { titles } from "../../data/constants";
import { routes } from "../../router/routes";

export default function Header() {
  return (
    <header className=" border-b-2 mb-20">
      <Link href={routes.home} className="text-blue-500 text-3xl hover:font-medium">
        {titles.header.title}
      </Link>
    </header>
  );
}
