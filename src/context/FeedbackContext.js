import { createContext, useState } from "react";
import { v4 as uuid } from "uuid"
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedBackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(FeedbackData);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });

    // Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuid();
        console.log(newFeedback)
        setFeedback([newFeedback, ...feedback]);
    }

    // Delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // Set item to be edited
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        });
    }

    const updateFeedback = (id, updatedItem) => {
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updatedItem } : item));
    }

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                deleteFeedback,
                addFeedback,
                editFeedback,
                feedbackEdit,
                updateFeedback
            }}
        >
            {children}
        </FeedbackContext.Provider>)
}

export default FeedbackContext;