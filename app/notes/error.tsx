"use client";

interface NotesErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function NotesError({ error }: NotesErrorProps) {
  return <p role="alert">Could not fetch the list of notes. {error.message}</p>;
}
