import React, { useState } from "react";

const Carbonfootprint = () => {
  const [entries, setEntries] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [saving, setSaving] = useState("");

  const addEntry = () => {
    if (title && description && saving) {
      const newEntry = { title, description, saving: parseFloat(saving) };
      setEntries([...entries, newEntry]);
      setTitle("");
      setDescription("");
      setSaving("");
    } else {
      alert("Please fill out all fields.");
    }
  };

  const totalSavings = entries.reduce((sum, entry) => sum + entry.saving, 0);

  return (
    <div className="md:h-[700px] mt-24 bg-orange-400 md:mt-28  p-5">
      <div className="md:w-[780px] mx-auto md:mt-8 bg-gray-100 shadow-md rounded-lg p-4">
        <h1 className="text-xl md:text-3xl font-bold text-center  mb-8">
          Carbon Footprint Tracker
        </h1>

        <div className="mb-4 ">
          <input type="text" placeholder="Title......" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 mb-2 border rounded-md" />
          <textarea placeholder="Describe your ideas/recipe/projects"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 mb-2 border rounded-md"
            rows="3" />


          <input type="number"
            placeholder="Estimated CO2 saving (kg)"
            value={saving}
            onChange={(e) => setSaving(e.target.value)}
            className="w-full p-2 mb-4 border rounded-md" />


          <button
            onClick={addEntry}
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-800">
            Add Entry </button>
        </div>

      
        <h2 className="text-xl font-semibold mb-4">Your Entries</h2>
        {entries.length > 0 ? (
          <ul className="space-y-4">
            {entries.map((entry, index) => (
              <li
                key={index}
                className="p-4 border rounded-md bg-gray-50 shadow-sm"
              >
                <h3 className="text-lg font-bold">{entry.title}</h3>
                <p>{entry.description}</p>
                <p className="mt-2 text-green-600">
                  CO2 Saving: {entry.saving} kg
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No entries yet. Start adding some!</p>
        )}

      
        <div className="mt-6 p-4 bg-blue-50 rounded-md">
          <h3 className="text-lg font-semibold">
            Total Estimated CO2 Savings:
          </h3>
          <p className="text-2xl font-bold text-blue-600">{totalSavings} kg</p>
        </div>
      </div>
    </div>
  );
};

export default Carbonfootprint;
