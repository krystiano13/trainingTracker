import React, { useState, useEffect } from "react";

const PanelHeading: React.FC<{ username: string }> = ({ username }) => {
    const [user, setUser] = useState<string>('User');

    useEffect(() => {
        setUser(username);
    }, [username])

    return <h1>{ user }</h1>
}

export { PanelHeading };