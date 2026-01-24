export default function ProjectForm() {
  return (
    <div style={{ marginTop: '2rem', padding: '1rem', border: '1px dashed #6a1b9a', borderRadius: '4px' }}>
      <h3>إنشاء مشروع جديد</h3>
      <form>
        <input type="text" placeholder="اسم المشروع" style={{ display: 'block', marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }} />
        <textarea placeholder="وصف المشروع" style={{ display: 'block', marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}></textarea>
        <button type="submit" style={{ padding: '0.5rem 1rem', background: '#6a1b9a', color: 'white', borderRadius: '4px' }}>حفظ المشروع</button>
      </form>
    </div>
  );
}
