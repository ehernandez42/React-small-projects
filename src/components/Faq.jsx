import Setup from "./Question.jsx";
import styles from "./faq.module.css";




const questions = [
    {
        id: 1,
        title: "What is your favorite part of teaching music?",
        info: "Getting to see kids sing and dance every day!"
    },
    {
        id: 2,
        title: "Who is in your dream starting 11?",
        info: "Pretty much bayern's 11"
    }
]


const Faq = () => {
    return(
        <div className={styles.questions}>
            <h1>Project 2: FAQ Section</h1>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.questions}>
                {questions.map((question) => (
                    <Setup key={question.id} question={question} />
                ))}
            </div>
        </div>
    )
}

export default Faq;