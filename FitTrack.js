import React, { useState } from 'react';
import { LineChart, XAxis, YAxis, Line, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Heart, Shield, Clock, Users } from 'lucide-react';

interface Activity {
  name: string;
  distance: number;
  duration: number;
  calories: number;
  pace: number;
}

interface User {
  age: number;
  gender: string;
  height: number;
  weight: number;
}

const FitTrack = () => {
  const [user, setUser] = useState<User>({
    age: 25,
    gender: 'male',
    height: 175,
    weight: 70,
  });

  const [activities, setActivities] = useState<Activity[]>([
    { name: 'Running', distance: 10, duration: 60, calories: 500, pace: 10 },
    { name: 'Walking', distance: 5, duration: 30, calories: 200, pace: 5 },
    { name: 'Cycling', distance: 20, duration: 90, calories: 800, pace: 20 },
  ]);

  const handleAddActivity = (activity: Activity) => {
    setActivities([...activities, activity]);
  };

  const handleUpdateUser = (user: User) => {
    setUser(user);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">FitTrack</h1>
        <div className="flex items-center">
          <Heart className="mr-2" />
          <Shield className="mr-2" />
          <Clock className="mr-2" />
          <Users />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-md">
          <h2 className="text-2xl font-bold mb-2">User Profile</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                Age
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="age"
                type="number"
                value={user.age}
                onChange={(e) => handleUpdateUser({ ...user, age: parseInt(e.target.value) })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                Gender
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="gender"
                value={user.gender}
                onChange={(e) => handleUpdateUser({ ...user, gender: e.target.value })}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="height">
                Height
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="height"
                type="number"
                value={user.height}
                onChange={(e) => handleUpdateUser({ ...user, height: parseInt(e.target.value) })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
                Weight
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="weight"
                type="number"
                value={user.weight}
                onChange={(e) => handleUpdateUser({ ...user, weight: parseInt(e.target.value) })}
              />
            </div>
          </form>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md">
          <h2 className="text-2xl font-bold mb-2">Activities</h2>
          <ul>
            {activities.map((activity, index) => (
              <li key={index} className="mb-4">
                <h3 className="text-xl font-bold">{activity.name}</h3>
                <p>Distance: {activity.distance} km</p>
                <p>Duration: {activity.duration} minutes</p>
                <p>Calories: {activity.calories}</p>
                <p>Pace: {activity.pace} km/h</p>
              </li>
            ))}
          </ul>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="distance">
                Distance
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="distance"
                type="number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="duration">
                Duration
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="duration"
                type="number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="calories">
                Calories
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="calories"
                type="number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pace">
                Pace
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="pace"
                type="number"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleAddActivity({
                name: 'New Activity',
                distance: 0,
                duration: 0,
                calories: 0,
                pace: 0,
              })}
            >
              Add Activity
            </button>
          </form>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md">
          <h2 className="text-2xl font-bold mb-2">Chart</h2>
          <LineChart width={400} height={200} data={activities}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#ccc" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="distance" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="duration" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default FitTrack;
