import { createContext, useState } from "react";
import { v4 as uuid } from "uuid"
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedBackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(FeedbackData);

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuid();
        console.log(newFeedback)
        setFeedback([newFeedback, ...feedback]);
    }

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;