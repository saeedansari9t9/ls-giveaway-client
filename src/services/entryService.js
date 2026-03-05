export const submitEntry = async (payload) => {
    try {
        const API_URL = import.meta.env.VITE_API_URL || 'https://ls-giveaway-server.vercel.app';

        const response = await fetch(`${API_URL}/api/entries`, {
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
