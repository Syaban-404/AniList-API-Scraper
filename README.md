# AniList-API-Scraper
[Node.js v24.14.1]⚙️](https://nodejs.org)            
[Express v5.3.0]⚙️](https://expressjs.com)
[Axios v1.20.0]⚙️](https://axios.rest)                
[Cheerio v1.2.0]⚙️](https://cheerio.js.org)

A high-performance Manga API Scraper built with **Node.js** and **Express.js**. This application seamlessly interacts with the official **AniList GraphQL API** to fetch, filter, and deliver clean, structured Manga information ready for frontend consumption.

## ✨ Main Feature
* 🔍 **Accurate Manga Search:** Retrieve detailed manga information effortlessly using just a `title` query parameter.
* 🧹 **Clean JSON Response:** Formats and filters the raw API data to deliver only essential fields (IDs, multilingual titles, high-res covers, and descriptions).
* ⚙️ **GraphQL Integration:** Leverages Axios to handle robust and efficient POST requests directly to AniList's GraphQL endpoint.
* 🛡️ **Robust Validation:** Built-in error handling for missing query parameters and non-existent manga queries.

## 🛠️ Tech Stack & Dependencies
* **Node.js** - Runtime Environment
* **Express.js** - Web Framework
* **Axios** - Promise-based HTTP Client

## 📂 Project Architecture
```text
manga-scraper-api/
├── src/
│   ├── config/
│   │   └── constants.js  # GraphQL query definitions
│   ├── controllers/
│   │   └── mangaControllers.js      # Business logic & external API requests
│   └── routes/
│       └── mangaRoutes.js       # API endpoint routing
├── app.js                       # Application entry point
└── README.md
```

Follow these steps to get the project running locally on your machine:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Syaban-404/AniList-API-Scraper.git
   cd AniList-API-Scraper
   ```

2. **Install Dependencies**
   ```bash
   npm install express axios cheerio
   ```

3. **Start the Server**
   ```bash
   node app.js
   ```
   The local server will spin up at: `http://localhost:3000`

## 🔌 API Documentation
###  Fetch Manga Details
Fetches comprehensive data of a specific manga by its title.

* **URL:** `/api/search-manga`
* **Method:** `GET`
* **Query Parameters:** `title=[string]` (Required)

#### 📝 Example Request:
```text
http://localhost:3000/api/manga?title=One Piece
```
