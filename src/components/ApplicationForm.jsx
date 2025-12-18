import { useState } from "react";

export default function ApplicationForm({ onAdd }) {
  const [form, setForm] = useState({
    company: "",
    role: "",
    status: "Applied",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};
    if (!form.company.trim()) {
      newErrors.company = "Company is required";
    }
    if (!form.role.trim()) {
      newErrors.role = "Role is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onAdd(form);
      setForm({
        company: "",
        role: "",
        status: "Applied",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="company"
        placeholder="Company"
        value={form.company}
        onChange={handleChange}
      />
      {errors.company && <p>{errors.company}</p>}

      <input
        name="role"
        placeholder="Role"
        value={form.role}
        onChange={handleChange}
      />
      {errors.role && <p>{errors.role}</p>}

      <select
        name="status"
        value={form.status}
        onChange={handleChange}
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>

      <button >Add Application</button>
    </form>
  );
}
