"use client";

interface NoteDetailsErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function NoteDetailsError({ error }: NoteDetailsErrorProps) {
  return <p role="alert">Could not fetch note details. {error.message}</p>;
}
