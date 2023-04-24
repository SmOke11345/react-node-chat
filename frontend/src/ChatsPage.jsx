import {PrettyChatWindow} from "react-chat-engine-pretty";

export const ChatsPage = (props) => {

    return (
        <div className="background" style={{height: "100vh"}}>
            <PrettyChatWindow projectId="c37e2269-b0b6-4a4b-8aa4-2aa062d60046" username={props.user.username} secret={props.user.secret} style={{height: "100%"}} />
        </div>
    );
};