import ApplicationItem from "./ApplicationItem";

export default function ApplicationList({ applications, onDelete }) {
  if (applications.length === 0) {
    return <p>No applications yet</p>;
  }

  return (
    <ul>
      {applications.map(app => (
        <ApplicationItem
          key={app.id}
          application={app}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
