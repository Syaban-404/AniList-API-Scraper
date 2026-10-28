export const ANILIST_QUERY = `
  query ($search: String, $type: MediaType) {
    Media (search: $search, type: $type) {
      id
      title {
        romaji
        english
        native
      }
      coverImage {
        large
      }
      type
      description
    }
  }
`;