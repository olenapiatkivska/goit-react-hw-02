import { useState, useEffect } from 'react';
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import "./App.css"



const App = () => {
    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = window.localStorage.getItem("saved-feedback");
        if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
        return {
            good: 0,
            neutral: 0,
            bad: 0
        };
    });
    
    const updateFeedback = (feedbackType) => {
        setFeedback((feedback) => ({
            ...feedback,
            [feedbackType]: feedback[feedbackType] + 1,
        }));
    };

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedback = Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100);
    


    const resetFeedback = () => {
        setFeedback({
            good: 0,
            neutral: 0,
            bad: 0
        });
    };
    
      useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

    return (
        <div className='sectionApp'>
            <Description />
            <Options
                options={["good", "neutral", "bad"]}
                updateFeedback={updateFeedback}
                totalFeedback={totalFeedback}
                resetFeedback={resetFeedback} />
            {totalFeedback > 0 ? <Feedback
                feedback={feedback}
                totalFeedback={totalFeedback}
                positiveFeedback={positiveFeedback} />
                : <Notification message="No feedback yet" />}
        </div>
    );
};

export default App;