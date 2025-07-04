import { notFound } from "next/navigation";
import Image from "next/image";
import { news } from "@/lib/newsData";

interface NewsPageProps {
  params: { slug: string };
}

export default function NewsPage(props: NewsPageProps) {
  const { params } = props;
  const data = news[params.slug as keyof typeof news];

  if (!data) {
    notFound();
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl mb-4">{data.title}</h1>
      <p className="text-[var(--color-gray)] mb-8">{data.tag}</p>
      <Image
        src={data.Image}
        alt={data.title}
        className="w-full max-w-[800px] object-cover"
      />
    </div>
  );
}
