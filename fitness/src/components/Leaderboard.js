import React from 'react';

function Leaderboard({ leaderboardData }) {
    return (
        <div>
            <h2>Leaderboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Exercise</th>
                        <th>Score</th>
                        <th>Diet</th>
                        <th>Goal</th>
                        <th>Steps</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardData.map((p, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{p.name}</td>
                            <td>{p.exercise}</td>
                            <td>{p.score}</td>
                            <td>{p.diet}</td>
                            <td>{p.goal}</td>
                            <td>{p.steps}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Leaderboard;

