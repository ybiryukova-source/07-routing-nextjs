import { fetchNoteById } from "../../../lib/api";
import NotePreview from "../../../components/NotePreview/NotePreview";

interface ModalNotePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ModalNotePage({ params }: ModalNotePageProps) {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return <NotePreview note={note} />;
}
