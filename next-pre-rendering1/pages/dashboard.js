import { useState, useEffect } from "react";

export default function Dashboard() {
  const [Loading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const userData = async () => {
      const fetchData = await axios.get("http://localhost:4000/dashboard");
      const data = await fetchData.json();
      setDashboardData(data);
      setIsLoading(false);
    };
    userData();
  }, []);

  if (Loading) {
    return <div>...Loading</div>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <div>Post - {dashboardData.post}</div>
      <div>Likes - {dashboardData.likes}</div>
      <div>Followers - {dashboardData.followers}</div>
      <div  >Following - {dashboardData.following}</div>
    </div>
  );
}

// import { useState, useEffect } from 'react'

// function Dashboard() {
//   const [isLoading, setIsLoading] = useState(true)
//   const [dashboardData, setDashboardData] = useState(null)
//   useEffect(() => {
//     async function fetchDashboardData() {
//       const response = await fetch('http://localhost:4000/dashboard')
//       const data = await response.json()
//       setDashboardData(data)
//       setIsLoading(false)
//     }
//     fetchDashboardData()
//   }, [])

//   if (isLoading) {
//     return <h2>Loading...</h2>
//   }

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <h2>Posts - {dashboardData.posts}</h2>
//       <h2>Likes - {dashboardData.likes}</h2>
//       <h2>Followers - {dashboardData.followers}</h2>
//       <h2>Following - {dashboardData.following}</h2>
//     </div>
//   )
// }

// export default Dashboard
