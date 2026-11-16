import { fetchNoteById } from "../../../../lib/api";
import NotePreviewClient from "./NotePreview.client";

interface ModalNotePageProps {
  params: Promise<{ id: string }>;
}

export default async function ModalNotePage({ params }: ModalNotePageProps) {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return <NotePreviewClient note={note} />;
}
