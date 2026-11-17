"use client";

import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { fetchNoteById } from "../../../../lib/api";
import NotePreview from "../../../../components/NotePreview/NotePreview";
import Modal from "../../../../components/Modal/Modal";

interface NotePreviewClientProps {
  id: string;
}

export default function NotePreviewClient({
  id,
}: NotePreviewClientProps) {
  const router = useRouter();

  const { data: note, isLoading, isError } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal onClose={handleClose}>
      <button type="button" onClick={handleClose}>
        Close
      </button>

      {isLoading && <p>Loading note...</p>}

      {isError && <p>Failed to load note.</p>}

      {note && <NotePreview note={note} />}
    </Modal>
  );
}