import React from 'react';
import './Profile.css';
import profileImage from '../assets/profile-image.jpg';

function Profile() {
    return (
        <div className="profile">
            <div className="profile-header">
                <img
                    src={profileImage}
                    alt="Profile"
                    className="profile-avatar"
                />
                <h1>Fatma Gül Özgün</h1>
            </div>

            <div className="profile-stats">
                <div className="stat-card">
                    <h3>Antrenman Sayısı</h3>
                    <p>24</p>
                </div>
                <div className="stat-card">
                    <h3>Toplam Süre</h3>
                    <p>32 saat</p>
                </div>
                <div className="stat-card">
                    <h3>Yakılan Kalori</h3>
                    <p>12,400 kcal</p>
                </div>
            </div>

            <div className="profile-progress">
                <h2>İlerleme Grafiği</h2>
                <div className="progress-chart">
                    <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format"
                        alt="Progress Chart"
                        className="chart-image"
                    />
                </div>
            </div>
        </div>
    );
}

export default Profile; 