const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.get("/flowers", (req, res) => {
    res.json([
        { name: "rose", genus: "rosa", season: "spring, summer" },
        { name: "lavender", genus: "lavandula", season: "spring, summer" },
        { name: "tulip", genus: "tulipa", season: "spring" },
        { name: "orchid", genus: "orchidaceae", season: "winter, spring" },
        { name: "sunflower", genus: "helianthus", season: "summer" },
        { name: "hyacinth", genus: "hyacinthus", season: "spring" },
        { name: "lily", genus: "lilium", season: "summer, autumn" },
        { name: "carnation", genus: "caryophyllaceae", season: "spring, autumn" },
    ])
})

app.get("/rose", (req, res) => {
    res.json(
        { name: "rose", genus: "rosa", season: "spring, summer", height: "4 - 7 inches", water: "water once a week", sunlight: "direct sunlight" }
    )
})

app.get("/lavender", (req, res) => {
    res.json(
        { name: "lavender", genus: "lavandula", season: "spring, summer", height: "20 - 24 inches", water: "water once every 2 weeks", sunlight: "full sun" }
    )
})

app.get("/tulip", (req, res) => {
    res.json(
        { name: "tulip", genus: "tulipa", season: "spring", height: "4 - 28 inches", water: "water once a week", sunlight: "full sun" }
    )
})

app.get("/orchid", (req, res) => {
    res.json(
        { name: "orchid", genus: "orchidaceae", season: "winter, spring", height: "1 - 3 feet", water: "water every 1-2 weeks", sunlight: "indirect sunlight" }
    )
})

app.get("/sunflower", (req, res) => {
    res.json(
        { name: "sunflower", genus: "helianthus", season: "summer", height: "5 - 6 feet", water: "water once a week", sunlight: "direct sunlight" }
    )
})
app.get("/hyacinth", (req, res) => {
    res.json(
        { name: "hyacinth", genus: "hyacinthus", season: "spring", height: "6 - 10 inches", water: "water every 1-2 weeks", sunlight: "full sun" }
    )
})

app.get("/lily", (req, res) => {
    res.json(
        { name: "lily", genus: "lilium", season: "summer, autumn", height: "14 - 18 inches", water: "water every 2-3 days", sunlight: "direct sunlight" }
    )
})

app.get("/carnation", (req, res) => {
    res.json(
        { name: "carnation", genus: "caryophyllaceae", season: "spring, autumn", height: "6 - 24 inches", water: "water once a week", sunlight: "full sun" }
    )
})


app.listen(5000, () => { console.log("Server started on port 5000") })