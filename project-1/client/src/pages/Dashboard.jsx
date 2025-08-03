import { useContext } from "react";
import { usercontext } from "../context/usercontext";
const Dashboard = () => {
    const {user}= useContext(usercontext)
  return (
    <div>
        <h1>Dashboard</h1>
        {!!user && (<h2>hi {user.name}!</h2>)}
    </div>
)
}

export default Dashboard