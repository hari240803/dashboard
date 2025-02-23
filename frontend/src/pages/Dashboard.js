

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { FaUsers, FaChartBar, FaShoppingCart, FaThumbsUp } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { RiUserAddLine } from "react-icons/ri";
import "../styles/dashboard.css";
import { useState } from "react";
import AddProfileModal from "./AddProfileModal";


// const Modal = ({ onClose }) => {
//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <h2 className="modal-title">Add Profile</h2>
//         <input type="text" placeholder="Enter Name" className="modal-input" />
//         <button className="modal-btn">Submit</button>
//         <button className="modal-close" onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };

const Dashboard = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const barData = [
    { name: "Week 1", user: 400, guest: 300 },
    { name: "Week 2", user: 350, guest: 400 },
    { name: "Week 3", user: 200, guest: 250 },
    { name: "Week 4", user: 450, guest: 300 },
  ];

  const pieData = [
    { name: "Basic Tees", value: 55, color: "#4CAF50" },
    { name: "Custom Pants", value: 31, color: "#FFC107" },
    { name: "Super Hoodies", value: 14, color: "#F44336" },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div>
          <h2>Board.</h2>
          <ul>
            <li>
              <MdDashboard /> Dashboard
            </li>
            <li>
              <FaShoppingCart /> Transactions
            </li>
            <li>
              <FaChartBar /> Analytics
            </li>
            <li>
              <FaUsers /> Users
            </li>
            <li>
              <FiSettings /> Settings
            </li>
          </ul>
        </div>
        <div>
          <p>Help</p>
          <p>Contact Us</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2 className="dashboard-title">Dashboard</h2>

        {/* Stats Section */}
        <div className="stats-container">
          {["Total Revenue", "Total Transactions", "Total Likes", "Total Users"].map((title, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">
                {React.createElement([FaUsers, FaShoppingCart, FaThumbsUp, FaChartBar][index])}
              </div>
              <div className="stat-info">
                <p>{title}</p>
                <h3>9,721</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="charts-container">
          <div className="chart-card">
            <h3>Activities</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="user" fill="#4CAF50" />
                <Bar dataKey="guest" fill="#F44336" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <h3>Top Products</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80}>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Add Profile Section */}
        <div className="add-profile" onClick={() => setModalOpen(true)} role="button" tabIndex="0">
         <RiUserAddLine className="add-profile-icon" />
         <p>Add Profile</p>
        </div>

         {/* Show Modal if modalOpen is true */}
         <AddProfileModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

    
      </div>
    </div>
  );
};

export default Dashboard;

