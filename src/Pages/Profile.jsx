import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
      <header>
    <div className="header-box">
        <div className="header-left">
            <img src="/Logo.png" alt="" />
        </div>
        <div className="header-center">
            <nav>
                <ul>
                    <Link to={"/home"}><a href="">Home</a></Link>
                    <Link to={"/about"}><a href="">About Me</a></Link>
                    <Link to={"/services"}><a href="">Services</a></Link>
                    <Link to={"/portfolio"}><a href="">Portfolio</a></Link>
                </ul>
            </nav>
        </div>
        <div className="header-right">
        {users?.login}
        <button onClick={DelteUser}>LogOut</button>
        </div>
    </div>
</header>
    </div>
  );
}

export default Profile;
