import React, { useEffect, useState } from "react";

function Setting() {
  const [users, setUsers] = useState("");
  useEffect(() => {
    fetch("https://7217f53e6149482b.mokky.dev/user")
      .then((res) => res.json())
      .then((json) => setUsers(json));
  });
  const DelteUser = (id) => {
    fetch(`https://7217f53e6149482b.mokky.dev/user/${id}`, {
      method: "DELETE",
    });
  };
<div className="aa">  <Header /></div>
  return (
    <div>
      <span>{users?.length}</span>
      {users.length !== 0 ? (
        users.map((e) => {
          return (
            <>
              <span>{e.login}</span>
              <br />
              <button onClick={() => DelteUser(e.id)}>Log Out</button>
            </>
          );
        })
      ) : (
        <>
          <p>"Empty Users"</p>
        </>
      )}
    </div>
  );
}

export default Setting;
