import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from "axios";


export const Dashboard = ()=>{
    
const [name, setName] = useState("");
const [id, setId] = useState();


    useEffect(() => {
        const fetchUserDetails = async () => {
          try {
            const token = localStorage.getItem("token");
            if (!token) {
              throw new Error("No token found");
            }
    
            const response = await axios.get('http://localhost:5000/api/v1/user/me', {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
    
            const userDetails = response.data;
            setName(userDetails.firstName);
            setId(userDetails._id);
          } catch (error) {
            console.error("Error fetching user details:", error.message);
            // Handle error, e.g., redirect to login
            navigate("/signin");
          }
        };
    
        fetchUserDetails();
      }, []);
    
    return <div>
    
    <Appbar name={name}/>

    <Balance amount={"10000"} />
    
    <Users id={id}/>


    </div>
}