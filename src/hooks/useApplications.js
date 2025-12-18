import { useState } from "react";

export function useApplications() {
  const [applications, setApplications] = useState([]);

  function addApplication(application) {
    setApplications(prev => [
      ...prev,
      { ...application, id: Date.now() }
    ]);
  }

  function deleteApplication(id) {
    setApplications(prev =>
      prev.filter(app => app.id !== id)
    );
  }

  return {
    applications,
    addApplication,
    deleteApplication
  };
}
