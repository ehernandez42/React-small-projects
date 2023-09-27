import React, {useState} from "react";
import './faq.module.css';


const Setup = ({question}) => {

    const [isOpen, setIsOpen] = useState(false);
    return(
        <section>
        <div className={isOpen ? 'open' : 'closed'}>
        <h4>{question.title}</h4>
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? '-' : '+'}</button>
        </div>
            {isOpen && <p>{question.info}</p>}
        </section>
    )
}


export default Setup;