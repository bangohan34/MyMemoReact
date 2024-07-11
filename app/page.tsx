"use client";

import { useState } from "react";
import MemoCardList from "../components/MemoCardList";

export default function Home() {
  // notesは値を保持する変数
  // setNotesはnotesを更新するための関数
  // []はnotesの初期値
  // メモのリスト全体を管理する
  const [notes, setNotes] = useState<string[]>([]);
  // 現在の入力内容を管理する
  const [note, setNote] = useState<string>("");
  const [charCount, setCharCount] = useState<number>(0);

  // 入力されたメモをnotesに追加
  const addNote = () => {
    // 空のメモを追加しない
    if (note.trim() == "") return;
    setNotes([...notes, note]);
    setNote("");
    setCharCount(0);
  };

  // 選択されたメモを削除
  const deleteNote = (index: number) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  // 文字が入力されたときに反応する関数
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setNote(inputValue);
    setCharCount(inputValue.length);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Memo App</h1>
      <div className="mb-4">
        <input
          type="text"
          value={note}
          onChange={handleInputChange}
          className="border p-2 round w-full"
          placeholder="Enter your memo here"
        />
        <div className="flex">
          <button
            onClick={addNote}
            className="bg-blue-500 text-white p-2 rounded mt-2"
          >
            Add Note
          </button>
          <p className="ml-6 mt-2 content-center">文字数：{charCount}</p>
        </div>
      </div>
      <MemoCardList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}
