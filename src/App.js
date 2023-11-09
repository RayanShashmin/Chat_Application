import {ChatEngine} from 'react-chat-engine';
import LoginForm from './components/LoginForm';

import ChatFeed from './components/ChatFeed';
import './App.css';

const App =() =>{
    if(!localStorage.getItem('username'))return <LoginForm/>

    return(
        <ChatEngine
            height= "100vh"
            projectID="b980b0e0-f552-47d3-9aa3-25f591f61517"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;