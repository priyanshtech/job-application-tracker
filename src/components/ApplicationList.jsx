

export default function ApplicationList({ applications, onDelete }) {
  if (applications.length === 0) {
    return <p>No applications yet</p>;
  }

  return (
    <ul>
      {applications.map(app => (
        <li  className="border-2 rounded-lg px-2 py-1 my-1"key={app.id}>
          <p>Company:{app.company}</p>
          <p>Role: {app.role}</p>
          <p>Status: {app.status}</p>
          <button className="border-2 px-1 rounded-lg bg-red-300 hover:bg-red-400 hover:scale-102" onClick={() => onDelete(app.id)}>Delete</button></li>
      ))}
    </ul>
  );
}
