const ANILIST_MANGA_QUERY = `
  query ($search: String) {
    Media (search: $search, type: MANGA) {
      id
      title {
        romaji
        english
        native
      }
      coverImage {
        large
      }
      description
    }
  }
`;

module.exports = { ANILIST_MANGA_QUERY };