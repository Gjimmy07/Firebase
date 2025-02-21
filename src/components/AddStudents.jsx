import React, { useState } from 'react';
import { getDatabase, ref, set, get, child } from 'firebase/database';
import { app } from '../server/server.js';
import { useNavigate } from 'react-router-dom';

function AddStudents() {
    const [rollNo, setRollNo] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate(); // ✅ Hook to navigate after adding student

    const submitHandler = async (e) => {
        e.preventDefault();
        const db = getDatabase(app);
        const userRef = ref(db, 'users/' + rollNo);

        try {
            // Check if student already exists
            const snapshot = await get(child(ref(db), 'users/' + rollNo));
            if (snapshot.exists()) {
                alert("Student with this Roll Number already exists!");
            } else {
                // Add new student
                await set(userRef, { name, age, email });

                alert("Student Added Successfully!");
                navigate('/listStudent'); // ✅ Navigate to student list after adding
            }
        } catch (error) {
            alert("Error: " + error.message);
        }
    };

    return (
        <div className="form-container">
            <h2>Add Student</h2>
            <form id="studentForm" onSubmit={submitHandler}>
                <label htmlFor="roll">Roll Number:</label>
                <input value={rollNo} onChange={(e) => setRollNo(e.target.value)} type="number" id="roll" required />

                <label htmlFor="name">Student Name:</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" required />

                <label htmlFor="age">Age:</label>
                <input value={age} onChange={(e) => setAge(e.target.value)} type="number" id="age" required />

                <label htmlFor="email">Email:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" required />

                <button type="submit" className="submit-btn">Add Student</button>
            </form>
        </div>
    );
}

export default AddStudents;
