import { notFound } from "next/navigation";
import Image from "next/image";
import { news } from "@/lib/newsData";
import { PageSection } from "@/components/layout/PageSection";

interface NewsPageProps {
  params: Promise<{ slug: string }>;
}

export default async function NewsPage(props: NewsPageProps) {
  const { params } = props;
  const { slug } = await params;
  const data = news[slug as keyof typeof news];

  if (!data) {
    notFound();
    return null;
  }

  return (
    <section className="min-h-screen flex flex-col">
      <div className="h-20"></div>
      <div className="bg-[var(--color-black)]">
        <PageSection className="">
          <div className="text-white col-span-6 py-20">
            <div className="flex gap-6 text-[var(--color-gray)] subtitle pb-4">
              <p>{data.tag}</p>
              <p>{data.date}</p>
            </div>
            <h1>{data.title}</h1>
          </div>
          <Image
            src={data.image}
            alt=""
            sizes="auto"
            className="col-span-2 h-full w-full object-cover"
          />
        </PageSection>
      </div>
      <p className="py-20 mx-auto">{data.text}</p>
      <div className="">
        <Image
          src={data.image}
          alt={data.title}
          sizes="auto"
          className="w-full h-[29.75rem] object-cover"
        />
      </div>
    </section>
  );
}
