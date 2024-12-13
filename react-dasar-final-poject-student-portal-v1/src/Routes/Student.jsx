import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Students.css'

const Student = () => {
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [selectedFaculty, setSelectedFaculty] = useState('All');
    const [Loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetchStudents();
    }, []);
  
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:3001/student');
        const data = await response.json();
        setStudents(data);
        setFilteredStudents(data);
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleDelete = async (id) => {
      try {
        await fetch(`http://localhost:3001/student/${id}`, {
          method: 'DELETE',
        });
        setFilteredStudents(filteredStudents.filter((student) => student.id !== id));
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleFilterChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedFaculty(selectedValue);
  
      if (selectedValue === 'All') {
        setFilteredStudents(students);
      } else {
        const filteredData = students.filter((student) => student.faculty === selectedValue);
        setFilteredStudents(filteredData);
      }
    };
  
    if (Loading) {
      return <div><p className='loading' >Loading ...</p></div>;
    } else {

    return (
      <div className='container'>
        <Navbar className='navbar' />
        <h1>All Students</h1>
        <select value={selectedFaculty} onChange={handleFilterChange} data-testid="filter">
          <option value="All">All</option>
          <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
          <option value="Fakultas Ilmu Sosial dan Politik">Fakultas Ilmu Sosial dan Politik</option>
          <option value="Fakultas Teknik">Fakultas Teknik</option>
          <option value="Fakultas Teknologi Informasi dan Sains">
            Fakultas Teknologi Informasi dan Sains
          </option>
        </select>
  
        <table id="table-student">
          <thead>
            <tr>
              <th>No</th>
              <th data-testid="name">Full Name</th>
              <th data-testid="prody">Faculty</th>
              <th>Program Study</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={student.id} className="student-data-row">
                <td>{index + 1}</td>
                <td>
                  <Link to={`/student/${student.id}`}>{student.fullname}</Link>
                </td>
                <td>{student.faculty}</td>
                <td>{student.programStudy}</td>
                <td>
                  <button
                    onClick={() => handleDelete(student.id)}
                    data-testid={`delete-${student.id}`}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
};

export default Student;
