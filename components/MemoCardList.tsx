"use client";

import React from "react";
import MemoCard from "./MemoCard";

interface MemoCardListProps {
  notes: string[];
  deleteNote: (index: number) => void;
}

const MemoCardList: React.FC<MemoCardListProps> = ({ notes, deleteNote }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {notes.map((note, index) => (
        <MemoCard
          key={index}
          note={note}
          deleteNote={() => deleteNote(index)}
        />
      ))}
    </div>
  );
};

export default MemoCardList;
