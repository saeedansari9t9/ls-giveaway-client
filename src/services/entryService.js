export const submitEntry = async (payload) => {
    try {
        const response = await fetch('http://localhost:5000/api/entries', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong');
        }

        return { success: true, data };
    } catch (error) {
        console.error('Error submitting entry:', error);
        throw error;
    }
};
