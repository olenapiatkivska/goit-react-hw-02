import { useState } from 'react';
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";



const App = () => {
    const [feedback, setFeedback] = useState({
	good: 0,
	neutral: 0,
	bad: 0
    });
    
    const updateFeedback = (feedbackType) => {
        setFeedback((feedback) => ({
            ...feedback,
            [feedbackType]: feedback[feedbackType] + 1,
        }));
    };

    return (
        <>
            <Description />
            <Options updateFeedback={updateFeedback} />
            <Feedback feedback={feedback} />
        </>
    );
};

export default App;