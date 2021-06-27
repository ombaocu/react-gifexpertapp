

export const getGifts = async (category) => {
    const apiKey = 'b8nLEbz4o1uuy6tLPXyRgRBvFEjiNni4';
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=${apiKey}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_still.url
        }
    });

    console.log(data);
    return gifs;
}
