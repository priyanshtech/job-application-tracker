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

  return (<div className="border-2 rounded-lg px-2 py-1"><h2 className="font-semibold mx-1">ADD APPLICATION</h2>
    <form onSubmit={handleSubmit} className="flex">
      <div className="flex flex-col w-1/4">
      <input className="border-2 rounded-lg mx-1 my-1 px-1"
        name="company"
        placeholder="Company"
        value={form.company}
        onChange={handleChange}
      />
      {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
      </div>




      <div className="flex flex-col w-1/4">
      

      <input
      className="border-2 rounded-lg mx-1 my-1 px-1"
        name="role"
        placeholder="Role"
        value={form.role}
        onChange={handleChange}
      />
      {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}</div>
      <div className="flex flex-col w-1/4">

      <select
      className="border-2 rounded-lg mx-1 my-1 px-1"
        name="status"
        value={form.status}
        onChange={handleChange}
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select></div>

      <button className="border-2 rounded-lg  px-1 h-10 bg-gray-400  hover:bg-gray-500" >Add </button>
    </form></div>
  );
}
