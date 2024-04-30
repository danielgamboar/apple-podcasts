import { Link } from "wouter";
import { routes } from "../../router/routes";

interface CardProps {
  id: string;
  imageUrl: string;
  title: string;
  author: string;
}
export default function Card({ id, imageUrl, title, author }: CardProps) {
  return (
    <Link
      href={`${routes.podcasts}/${id}`}
      className="rounded-sm  shadow-xl p-3"
    >
      <img
        className="mx-auto -translate-y-12 items-start justify-center rounded-full w-32 h-32"
        src={imageUrl}
        alt={`${title}-logo`}
      />

      <div className="flex flex-col w-50 h-50 mt-[-30px]">
        <h1 className="uppercase text-center font-semibold">{title}</h1>
        <h2 className="text-center text-slate-600">
          Author: <span className="uppercase">{author}</span>
        </h2>
      </div>
    </Link>
  );
}
