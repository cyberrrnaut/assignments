import { InputBox } from "./InputBox";
import { BlackButton } from "./BlackButton";
import { useEffect, useState } from "react";
import Avatar from "./Avatar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = ({id}) => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/user/bulk?filter=${filter}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        setUsers(response.data.user);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [filter]);

  return (
    <div>
      <div className="pl-2">Users</div>
      <InputBox onChange={(e) => setFilter(e.target.value)} label={""} type={"text"} placeholder={"Search Users..."} />

      {/* {users.map((user, key) => (
        <User key={key} user={user} />
      ))} */}

    {users.map((user, key) => (
        user._id !== id && (
          <User key={key} user={user} />
        )
      ))}

      
    </div>
  );
};

const User = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between pt-3">
      <div className="flex">
        <div className="pl-2">
          <Avatar name={user.firstName} />
        </div>

        <span className="font-medium pl-3 pt-5">
          {user.firstName} {user.lastName}
        </span>
      </div>
      <div className="pt-4 pr-2">
        <BlackButton
          onClick={() => {
            navigate(`/sendmoney?id=${user._id}&name=${user.firstName}`);
          }}
          label={"Send Money"}
        />
      </div>
    </div>
  );
};
