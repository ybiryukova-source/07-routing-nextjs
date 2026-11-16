"use client";

import NotesClient from "../../Notes.client";

interface FilterNotesClientProps {
  tag?: string;
}

export default function FilterNotesClient({ tag }: FilterNotesClientProps) {
  return <NotesClient tag={tag} />;
}
