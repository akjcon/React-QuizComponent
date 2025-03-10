import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {incorrectAnswer: false}
  }

  handleClick(buttonText) {
    if (buttonText == this.props.quiz_question.answer) {
      this.props.showNextQuestionHandler()
    } else {
      this.setState({incorrectAnswer: true})
    }
  }

  render() {
    const quizAnswers = this.props.quiz_question.answer_options.map(
      (answer_option, index) =>
      {return(
        <QuizQuestionButton key={index}
                            button_text={answer_option}
                            clickHandler={this.handleClick.bind(this)}
                                   />)})

    const errorMessage = this.state.incorrectAnswer ? <p className='error'> Sorry, that's not right </p> : null
    return (
      <main>
        {errorMessage}
        <section>
          <p>
            {this.props.quiz_question.instruction_text}
          </p>
        </section>
        <section className="buttons">
          <ul>
            {quizAnswers}
          </ul>
        </section>
      </main>
    )
  }

}

export default QuizQuestion
