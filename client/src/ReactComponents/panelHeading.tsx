import { useState, useEffect } from "preact/hooks";

import userIcon from "../assets/user.png";

const PanelHeading = () => {
  const [user, setUser] = useState<string>("User");

  useEffect(() => {
    setUser(localStorage.getItem("username") as string);
  }, []);

  return (
    <h2 className="username">
      <img className="icon" src={userIcon} alt="Avatar" />
      {user}
    </h2>
  );
};

export { PanelHeading };
