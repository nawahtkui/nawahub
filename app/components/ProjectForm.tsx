import { useState } from 'react';

export default function ProjectForm({ onAdd }: { onAdd: (title: string, desc: string) => void }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && desc) {
      onAdd(title, desc);
      setTitle('');
      setDesc('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="عنوان المشروع" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="وصف المشروع" value={desc} onChange={(e) => setDesc(e.target.value)} required />
      <button type="submit">إنشاء مشروع جديد</button>
    </form>
  );
}
