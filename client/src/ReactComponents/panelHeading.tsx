import React, { useState, useEffect } from "react";
import { username, changeUsername } from "../store/nanostore";

const PanelHeading = () => {
    const [user, setUser] = useState<string>('User');

    useEffect(() => {
        changeUsername(localStorage.getItem("username") as string);
        localStorage.removeItem('username');
        setUser(username.get());
    }, [])

    return <h1>{ user }</h1>
}

export { PanelHeading };