const apiKey = 'nXkHQuF9KrWlNQF3H1LjJUnss8wA3VxN';
const baseUrl = 'https://api.giphy.com/v1/gifs/';

export const getGifsByQuery = async (query, limit = 50, rating = 'g', lang = 'en', bundle = 'messaging_non_clips') => {
    const url = `${baseUrl}search?api_key=${apiKey}&q=${query}&limit=${limit}&rating=${rating}&lang=${lang}&bundle=${bundle}`;

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

export const getTrendingGifs = async (limit = 50, rating = 'g', lang = 'en', bundle = 'messaging_non_clips') => {
    const url = `${baseUrl}trending?api_key=${apiKey}&limit=${limit}&rating=${rating}&lang=${lang}&bundle=${bundle}`;

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