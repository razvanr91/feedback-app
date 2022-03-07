import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedBackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });

    useEffect(() => {
        fetchFeedback();
    }, []);

    // Fetch data
    const fetchFeedback = async () => {
        const response = await fetch("/feedback?_sort=id&_order=desc");
        const data = await response.json();

        setFeedback(data)
        setIsLoading(false);
    }

    // Add feedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch("/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFeedback)
        });

        const data = await response.json();
        setFeedback([data, ...feedback]);
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
                isLoading,
                updateFeedback
            }}
        >
            {children}
        </FeedbackContext.Provider>)
}

export default FeedbackContext;