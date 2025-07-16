import React from 'react';

const SysAdminWelcome = () => {
  return (
    <div className="bg-white p-8 shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, System Administrator!</h1>
      <p className="text-gray-600">
        Please use the sidebar navigation to access different administrative sections.
      </p>
      <ul className="list-disc list-inside text-gray-600 mt-4">
        <li><strong>Pending Approvals:</strong> Review and approve or reject new HR registrations.</li>
        <li><strong>Manage Internships:</strong> Oversee internship postings across all organizations.</li>
        <li><strong>Statistics:</strong> View platform-wide statistics and analytics.</li>
      </ul>
    </div>
  );
};

export default SysAdminWelcome;
