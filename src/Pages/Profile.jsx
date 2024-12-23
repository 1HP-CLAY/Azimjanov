import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";

function Profile() {
  const [users, setUsers] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://7217f53e6149482b.mokky.dev/user/` + id)
      .then((res) => res.json())
      .then((json) => setUsers(json));
  });
  const DelteUser = () => {
    fetch(`https://7217f53e6149482b.mokky.dev/user/${id}`, {
      method: "DELETE",
    }).then((res) => {
      navigate("/");
    });
  };
  return (
    <div>
      <Header />
      {users?.login}
      <button onClick={DelteUser}>LogOut</button>
    </div>
  );
}

export default Profile;
