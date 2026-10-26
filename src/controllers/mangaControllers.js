const axios = require('axios');
const { GET_MANGA_DETAILS } = require('../queries/anilistQuery');

const searchManga = async (req, res) => {
    const mangaTitle = req.query.title;

    // 1. Input Parameter Validation
    if (!mangaTitle) {
        return res.status(400).json({ 
            success: false,
            message: 'Parameter "title" is required.' 
        });
    }

    try {
        // 2. Request Data Anilist GraphQL
        const response = await axios({
            url: 'https://anilist.co',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            data: {
                query: GET_MANGA_DETAILS,
                variables: { search: mangaTitle }
            }
        });

        const mangaData = response.data.data.Media;

        // 3. data validation while not founded
        if (!mangaData) {
            return res.status(404).json({ 
                success: false,
                message: 'Manga not found.' 
            });
        }

        // 4. Clean Response Formatting
        return res.status(200).json({
            success: true,
            data: {
                id: mangaData.id,
                title: {
                    romaji: mangaData.title.romaji,
                    english: mangaData.title.english,
                    native: mangaData.title.native
                },
                cover_url: mangaData.coverImage.large,
                description: mangaData.description
            }
        });

    } catch (error) {
        // Logging error for debugging internal server
        console.error('AniList API Error:', error.response ? error.response.data : error.message);
        
        return res.status(500).json({ 
            success: false,
            message: 'Internal server error while fetching data from AniList.' 
        });
    }
};

module.exports = { searchManga };