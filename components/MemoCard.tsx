"use client";

import React from "react";

interface MemoCardProps {
  note: string;
  deleteNote: () => void;
}

const MemoCard: React.FC<MemoCardProps> = ({ note = [], deleteNote }) => {
  return (
    <div className="m-6 p-4 bg-yellow-200 w-56 border-l-8 border-yellow-600">
      <p className="mb-2.5 text-3xl">{note}</p>
      <button onClick={deleteNote} className="mt-2 text-red-500">
        Delete
      </button>
    </div>
  );
};

export default MemoCard;
