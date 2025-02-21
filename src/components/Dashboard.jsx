import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Dashboard() {
    return (
        <div style={{ display: "flex", gap: "20px" }}>
            <div style={{width:"20%", backgroundColor:"lightblue", height:"100vh"}}>
                <h1>Dashboard</h1>
                <Link to={'/addStudent'} style={{color:"black", display:"block"}}>Add Student</Link>
                <Link to={'/listStudent'} style={{color:"black", display:"block"}}>List Student</Link>

            </div>
            <div style={{width:"80%", height:"100vh"}}>
                <Outlet />
            </div>

        </div>
    )
}

export default Dashboard;