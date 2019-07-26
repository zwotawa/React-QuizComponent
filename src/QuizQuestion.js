import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {

    constructor(props) {
        super(props)
        this.state = {incorrectAnswer: false}
    }

    render() {
        return (
            <main>
                {this.state.incorrectAnswer ? 
                <p className="error">Sorry, that's not right</p> :
                null}
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((answer, index) => {
                            const localAnswer = answer
                            const localIndex = index
                            return(
                                    <QuizQuestionButton 
                                        key={localIndex} 
                                        button_text={localAnswer}
                                        clickHandler={this.handleClick.bind(this)}
                                        />
                            )
                        })}
                        
                    </ul>
                </section>
            </main>
        )
    }

    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler()
            this.setState((state) => {
                return {incorrectAnswer: this.state.incorrectAnswer = false}
            })
        } else {
            this.setState((state) => {
                return {incorrectAnswer: this.state.incorrectAnswer = true}
            })
        }
    }
}

export default QuizQuestion