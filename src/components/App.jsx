import { Container } from "components/App.styled";
import {Component} from "react";
import { FeedbackOptions } from './feedback/FeedbackOptions';
import { Section } from './feedback/Section';
import { Statistics } from "./feedback/Statistics";
import { Notification } from "./feedback/Notification";

export class App extends Component  {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
    // positiveFeedback = () => {
    //     this.setState((prevState) => ({
    //          good: prevState.good + 1,
    //     }))
    // }
    //   neutralFeedback = () => {
    //     this.setState((prevState) => ({
    //      neutral: prevState.neutral + 1,
    //     }))
    // }
    //     negativeFeedback = () => {
    //     this.setState((prevState) => ({
    //     bad: prevState.bad + 1,
    //     }))
    //     }
  handleClickBtn = e => {
    const option = e.target.name
    if (option) {
      this.setState(prevState => ({[option]: prevState[option] +1 }))
    }
  }
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
    }
  countPositiveFeedback = () => {
    const totalFeedback = this.countTotalFeedback();
    let result = 0;
    if (totalFeedback > 0) {
      result = Math.floor((this.state.good / totalFeedback) * 100);
    }
    return result;
    }

  render() {
    const options = Object.keys(this.state);
    const countTotalFeedback = this.countTotalFeedback();
    const countPositiveFeedback = this.countPositiveFeedback();

    return (
      <Container> 
         <Section title='Please leave feedback'>
           <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClickBtn}
          />
     </Section>
        
        <Section title='Statistics'>
          {countTotalFeedback > 0 ? (
            <Statistics
              good= {this.state.good}
              neutral= {this.state.neutral}
              bad={this.state.bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedback}
            />
          ) :(<Notification message="No feedback yet"/>)
        }           
        </Section>
       </Container>
    )}
}