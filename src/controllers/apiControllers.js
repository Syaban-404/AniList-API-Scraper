import axios from 'axios';
import { ANILIST_QUERY } from '../config/constants.js';

// Anime Endpoint
export const getAnime = async (req, res) => {
    const { title } = req.query;

    // Parameter Validation
    if (!title) {
        return res.status(400).json({ 
            success: false,
            message: "Please input parameter 'title'. Example: /anime?title=Naruto"
        });
    }

    try {
        // Request to AniList Using Axios
        const response = await axios({
            url: 'https://graphql.anilist.co',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            data: {
                query: ANILIST_QUERY,
                variables: { search: title, type: 'ANIME' }
            }
        });

        const apiData = response.data.data.Media;

        if (!apiData) {
            return res.status(404).json({ success: false, message: "Anime not found" });
        }

        // Output Formatting Clean JSON
        return res.status(200).json({
            success: true,
            data: {
                id: apiData.id,
                title: {
                    romaji: apiData.title.romaji,
                    english: apiData.title.english,
                    native: apiData.title.native
                },
                cover_url: apiData.coverImage?.large || null, 
                description: apiData.description,
                type: apiData.type
            }
        });

    } catch (error) {
        console.error(error); // Helping debugging in backend terminal
        return res.status(500).json({ 
            success: false, 
            error: "Failed to fetch anime data" 
        });
    }
};

// Manga Endpoint
export const getManga = async (req, res) => {
    const { title } = req.query;

    // Parameter Validation
    if (!title) {
        return res.status(400).json({ 
            success: false,
            message: "Please input parameter 'title'. Example: /manga?title=One Piece"
        });
    }

    try {
        // Request to AniList Using Axios
        const response = await axios({
            url: 'https://graphql.anilist.co',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            data: {
                query: ANILIST_QUERY,
                variables: { search: title, type: 'MANGA' }
            }
        });

        const apiData = response.data.data.Media;

        if (!apiData) {
            return res.status(404).json({ success: false, message: "Manga not found" });
        }

        // Output Formatting Clean JSON
        return res.status(200).json({
            success: true,
            data: {
                id: apiData.id,
                title: {
                    romaji: apiData.title.romaji,
                    english: apiData.title.english,
                    native: apiData.title.native
                },
                cover_url: apiData.coverImage?.large || null,
                type: apiData.type,
                description: apiData.description
                ? apiData.description
                    .replace(/\\u003C/g, '<')
                    .replace(/\\u003E/g, '>')
                    .replace(/<\/?[^>]+(>|$)/g, "")
                    .replace(/\n+/g, ' ')
                    .trim()
                : null
            }
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ 
            success: false, 
            error: "Failed to fetch manga data" 
        });
    }
};