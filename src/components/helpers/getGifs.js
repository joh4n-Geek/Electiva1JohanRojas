export const getGifsByQuery = async (query = 'cat', limit = 25, offset = 0, rating = 'g', lang = 'en', bundle = 'messaging_non_clips') => {
    const apiKey = 'nXkHQuF9KrWlNQF3H1LjJUnss8wA3VxN';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}&bundle=${bundle}`;

    try {
        const response = await fetch(url);
        const { data } = await response.json();
        return data.map(gif => {
            const { id, title, type, images: { fixed_height, fixed_width } } = gif;
            return { id, title, type, images: { fixed_height, fixed_width } };
        });
    } catch (error) {
        console.error('Error fetching GIFs: ', error);
    }
};