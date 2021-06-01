import {ChatEngine, ChatFeed} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css'

const App = () =>{
    return (
        <ChatEngine
            height = "100vh"
            projectID = "ddf98115-e492-4e38-8105-9f477077842b" //ID from ChatEngine
            userName = "shaunwang"
            userSecret = "123123"
            renderChatFeed = {(chatAppProps) => {
                <ChatFeed {...chatAppProps}/>}
            }
        />
    )
}

export default App;