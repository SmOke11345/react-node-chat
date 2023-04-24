import React from "react";
import {AuthPage} from "./AuthPage";
import {ChatsPage} from "./ChatsPage";
import "./App.css";

export const App = () => {
    const [user, setUser] = React.useState(undefined);

    if (!user) {
        return <AuthPage onAuth={(user) => setUser(user)} />;
    } else {
        return <ChatsPage user={user} />;
    }
};
