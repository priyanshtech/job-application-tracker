import ApplicationForm from "./components/ApplicationForm";
import ApplicationList from "./components/ApplicationList";
import { useApplications } from "./hooks/useApplications";

export default function App() {
  const {
    applications,
    addApplication,
    deleteApplication,
  } = useApplications();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">
        Job Application Tracker
      </h1>

      <ApplicationForm onAdd={addApplication} />

      <ApplicationList
        applications={applications}
        onDelete={deleteApplication}
      />
    </div>
  );
}
