import React, { useState } from 'react';
import './Workout.css';

function Workout() {
    const [selectedWorkout, setSelectedWorkout] = useState(null);

    const workouts = {
        pazartesi: {
            title: 'Göğüs ve Triceps',
            exercises: [
                { name: 'Bench Press', sets: '4', reps: '12', rest: '90 sn' },
                { name: 'Incline Dumbbell Press', sets: '3', reps: '12', rest: '60 sn' },
                { name: 'Triceps Pushdown', sets: '3', reps: '15', rest: '60 sn' },
                { name: 'Dips', sets: '3', reps: '12', rest: '60 sn' }
            ]
        },
        carsamba: {
            title: 'Sırt ve Biceps',
            exercises: [
                { name: 'Lat Pulldown', sets: '4', reps: '12', rest: '90 sn' },
                { name: 'Barbell Row', sets: '3', reps: '12', rest: '60 sn' },
                { name: 'Biceps Curl', sets: '3', reps: '15', rest: '60 sn' },
                { name: 'Hammer Curl', sets: '3', reps: '12', rest: '60 sn' }
            ]
        },
        cuma: {
            title: 'Bacak ve Omuz',
            exercises: [
                { name: 'Squat', sets: '4', reps: '12', rest: '90 sn' },
                { name: 'Leg Press', sets: '3', reps: '12', rest: '60 sn' },
                { name: 'Shoulder Press', sets: '3', reps: '12', rest: '60 sn' },
                { name: 'Lateral Raise', sets: '3', reps: '15', rest: '60 sn' }
            ]
        }
    };

    return (
        <div className="workout">
            <h1>Antrenman Programı</h1>
            <div className="workout-planner">
                <div className="workout-days">
                    <h2>Haftalık Program</h2>
                    <div className="day-card">
                        <h3>Pazartesi</h3>
                        <p>Göğüs ve Triceps</p>
                        <button
                            className="btn-start"
                            onClick={() => setSelectedWorkout(workouts.pazartesi)}
                        >
                            Antrenmana Başla
                        </button>
                    </div>
                    <div className="day-card">
                        <h3>Çarşamba</h3>
                        <p>Sırt ve Biceps</p>
                        <button
                            className="btn-start"
                            onClick={() => setSelectedWorkout(workouts.carsamba)}
                        >
                            Antrenmana Başla
                        </button>
                    </div>
                    <div className="day-card">
                        <h3>Cuma</h3>
                        <p>Bacak ve Omuz</p>
                        <button
                            className="btn-start"
                            onClick={() => setSelectedWorkout(workouts.cuma)}
                        >
                            Antrenmana Başla
                        </button>
                    </div>
                </div>
            </div>

            {selectedWorkout && (
                <div className="workout-modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>{selectedWorkout.title}</h2>
                            <button
                                className="close-button"
                                onClick={() => setSelectedWorkout(null)}
                            >
                                ×
                            </button>
                        </div>
                        <div className="exercises-list">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Egzersiz</th>
                                        <th>Set</th>
                                        <th>Tekrar</th>
                                        <th>Dinlenme</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedWorkout.exercises.map((exercise, index) => (
                                        <tr key={index}>
                                            <td>{exercise.name}</td>
                                            <td>{exercise.sets}</td>
                                            <td>{exercise.reps}</td>
                                            <td>{exercise.rest}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Workout; 