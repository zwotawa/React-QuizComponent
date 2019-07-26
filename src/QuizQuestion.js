import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {
    render() {
        return (
            <main>
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
        }
    }
}

export default QuizQuestion