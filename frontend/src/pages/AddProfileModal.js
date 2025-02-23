import React, { useState } from "react";
import "../styles/model.css";

const AddProfileModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("basic");

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Add New Profile</h2>
          <span className="close-btn" onClick={onClose}>&times;</span>
        </div>

        <div className="modal-tabs">
          <span 
            className={activeTab === "basic" ? "active" : ""}
            onClick={() => setActiveTab("basic")}
          >
            Basic
          </span>
          <span 
            className={activeTab === "social" ? "active" : ""}
            onClick={() => setActiveTab("social")}
          >
            Social
          </span>
        </div>

        <div className="modal-content">
          {activeTab === "basic" ? (
            <div>
            <label>Name*</label>
            <input type="text"placeholder="Full Name" required />
            <label>Email*</label>
            <input type="email" placeholder="Email Address" required />
            <label>Phone*</label>
            <input type="number" placeholder="Eg. 89xxxxxx56" required />
          </div>
          ) : (
            <div>
              <label>Instagram Link (Optional)</label>
              <input type="text" placeholder="Eg. ...instagram.com/username" />
              <label>YouTube Link (Optional)</label>
              <input type="text" placeholder="Eg. ...youtube.com/username" />
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button className="btn back-btn" onClick={onClose}>Back</button>
          <button className="btn done-btn">Done</button>
        </div>
      </div>
    </div>
  );
};

export default AddProfileModal;
