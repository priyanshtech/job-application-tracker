export default function ApplicationItem({ application,onDelete}) {
  return (
    <li className="border-2">
      <p>Company: {application.company}</p>
      <p>Role: {application.role}</p>
      <p>Status: {application.status}</p>
      <button onClick={() => onDelete(application.id)}>delete</button>
    </li>
  );
}
