import React from 'react';
import './App.css';
import Title from './components/Title/Title';
import MessagesList from './components/MessagesList/MessagesList';
import SendMessageForm from './components/SendMessageForm/SendMessageForm';

function App() {
  const myUsername = "Gabriele Polenta";
  // const myUsername = "Mr Smith";

  return (
    <div className="App">
      <Title titleText="Doodle Chat"/>
      <MessagesList
        myUsername={myUsername}
      />
      <SendMessageForm
        myUsername={myUsername}
      />
    </div>
  );
}

App.displayName = 'App';

export default App;
