import React, { useState, useEffect } from "react";

const PanelHeading = () => {
    const [user, setUser] = useState<string>('User');

    React.useEffect(() => {
        setUser(localStorage.getItem('username') as string);
    }, []);

    return <h1>{ user }</h1>
}

export { PanelHeading };