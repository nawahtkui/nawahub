import { useState } from "react";

export default function ProjectForm({ onAdd }: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if(title && description) {
      onAdd({ title, description });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="عنوان المشروع" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea placeholder="وصف المشروع" value={description} onChange={e => setDescription(e.target.value)} />
      <button type="submit">إضافة مشروع</button>
    </form>
  );
}
