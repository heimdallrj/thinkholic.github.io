export default function PostSingle({ title, date, content }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
