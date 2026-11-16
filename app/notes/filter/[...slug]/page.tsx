import FilterNotesClient from "./Notes.client";

interface FilterNotesPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function FilterNotesPage({
  params,
}: FilterNotesPageProps) {
  const { slug } = await params;
  const tag = slug[0] === "all" ? undefined : slug[0];

  return <FilterNotesClient tag={tag} />;
}
