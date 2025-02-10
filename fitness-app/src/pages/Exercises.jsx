import React from 'react';
import './Exercises.css';

function Exercises() {
    return (
        <div className="exercises">
            <h1>Egzersiz Kütüphanesi</h1>
            <div className="exercises-grid">
                <div className="exercise-card">
                    <img src="https://images.unsplash.com/photo-1566241142559-40e1742168a5?w=500&auto=format" alt="Squat" />
                    <h3>Squat</h3>
                    <p>Bacak ve kalça kaslarını güçlendiren temel egzersiz</p>
                    <button className="btn-details">Detayları Gör</button>
                </div>
                <div className="exercise-card">
                    <img src="https://images.unsplash.com/photo-1598971639058-b11fb6f4bb81?w=500&auto=format" alt="Push-up" />
                    <h3>Şınav</h3>
                    <p>Göğüs, omuz ve kol kaslarını çalıştıran etkili egzersiz</p>
                    <button className="btn-details">Detayları Gör</button>
                </div>
                <div className="exercise-card">
                    <img src="https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=500&auto=format" alt="Deadlift" />
                    <h3>Deadlift</h3>
                    <p>Sırt ve bacak kaslarını güçlendiren kompleks hareket</p>
                    <button className="btn-details">Detayları Gör</button>
                </div>
                <div className="exercise-card">
                    <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500&auto=format" alt="Bench Press" />
                    <h3>Bench Press</h3>
                    <p>Göğüs kaslarını geliştiren temel egzersiz</p>
                    <button className="btn-details">Detayları Gör</button>
                </div>
                <div className="exercise-card">
                    <img src="https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=500&auto=format" alt="Pull-up" />
                    <h3>Pull-up</h3>
                    <p>Sırt ve biceps kaslarını güçlendiren etkili hareket</p>
                    <button className="btn-details">Detayları Gör</button>
                </div>
                <div className="exercise-card">
                    <img src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=500&auto=format" alt="Shoulder Press" />
                    <h3>Shoulder Press</h3>
                    <p>Omuz kaslarını geliştiren temel egzersiz</p>
                    <button className="btn-details">Detayları Gör</button>
                </div>
            </div>
        </div>
    );
}

export default Exercises; 