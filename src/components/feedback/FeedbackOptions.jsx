import PropTypes from 'prop-types'
import {Btn, List, Option} from './Feedback.styled'

export const FeedbackOptions =({options, onLeaveFeedback}) => {

    return (
         <List>
      {options.map(option => (
        <Option  key={option}>
          <Btn
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </Btn>
        </Option>
      ))}
    </List>
    )}

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,

};
