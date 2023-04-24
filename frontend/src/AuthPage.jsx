import axios from "axios";

export const AuthPage = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const {value} = event.target[0];

        axios.post("http://localhost:3001/authenticate", {
            username: value,
        }).then((response) => {
            props.onAuth({...response.data, secret: value});
        }).catch((error) => {
            console.warn(error);
        });

        props.onAuth({username: value, secret: value});
    };

    return (
        <div className="background">
            <form onSubmit={handleSubmit} className="form-card">
                <div className="form-title">
                    welcome 👋
                </div>
                <div className="form-subtitle">
                    Set a username to get started!
                </div>
                <div className="auth">
                    <div className="auth-label">Username</div>
                    <input type="text" name="username" className="auth-input" />
                    <button className="auth-button" type="submit">Enter</button>
                </div>
            </form>
        </div>
    );
};