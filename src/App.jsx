import './App.css';
import React, {useState} from "react";

const Header = () => {
    return(
        <div className={'headerBar'}>
            <h1>Hello User!</h1>
        </div>
    )
}

//working on sending the data to the console *done*
//next is to create an API endpoint to send the information to a json file on server.js
const InputField = () => {
const [inputText, setInputText] = useState("");

const inputHandle = (event) => {
    event.preventDefault();

    setInputText(`${inputText}`);
    setInputText('')
}
        return (
            <form onSubmit={inputHandle}>
                <input className={'address-input-field'} name={'inputMain'} value={inputText} onChange={(event) => setInputText(event.target.value)} placeholder={"Write here.."} />
                <button className={'address-input-button'}>Clear</button>
                <p>You typed: {inputText}</p>
            </form>
        )
}
const LookUpPage = () => {
  return (
      <div className={'center-piece-lookup'}>
        <p>See what you typed!</p>
          <p>Enter your word or phrase below</p>
          <InputField />
      </div>
  )
}

class App extends React.Component {

    render () {
        return (
            <>
                <Header />
                <LookUpPage />
            </>

        )
    }
}

export default App;
