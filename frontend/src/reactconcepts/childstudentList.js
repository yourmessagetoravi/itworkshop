import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const ChildstudentList = ({ students }) => {
  return (
    <div>
      <h3>Student List</h3>
      <ListGroup>
        {/* Mapping through the students array and displaying each student as a list item */}
        {students.map((student) => (
          <ListGroupItem key={student.id}>
            <div>
              <img
                src={student.image}
                alt={student.name}
                style={{ width: '50px', height: '50px', marginRight: '10px' }}
              />
              <strong>{student.name}</strong> (Roll No: {student.id}) - Group: {student.group}
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default ChildstudentList;
