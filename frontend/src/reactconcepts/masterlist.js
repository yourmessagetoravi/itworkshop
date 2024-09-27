import React from 'react';
import ChildstudentList from './childstudentList';


const Masterlist = () => {
  // Static array of student data (without using useState)
  const students = [
    {
      id: 1,
      name: "John Doe",
      image: "https://via.placeholder.com/150",
      group: "Group 1",
      attendancePercentage: 90,
      marksPercentage: 85,
      address: "123 Main St, Springfield"
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "https://via.placeholder.com/150",
      group: "Group 2",
      attendancePercentage: 95,
      marksPercentage: 88,
      address: "456 Maple Ave, Shelbyville"
    },
    {
      id: 3,
      name: "Emily Johnson",
      image: "https://via.placeholder.com/150",
      group: "Group 3",
      attendancePercentage: 85,
      marksPercentage: 92,
      address: "789 Oak Dr, Capital City"
    }
    // More students can be added here
  ];

  return (
    <div className="container mt-5">
      {/* Passing the static array as props to the StudentList component */}
      <ChildstudentList students={students} />
    </div>
  );
};

export default Masterlist;
