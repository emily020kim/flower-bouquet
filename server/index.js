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
        { name: "dahlia", genus: "dahlia", season: "spring, autumn" },
        { name: "hyacinth", genus: "hyacinthus", season: "spring" },
        { name: "lily", genus: "lilium", season: "summer, autumn" },
        { name: "carnation", genus: "caryophyllaceae", season: "spring, autumn" },
    ])
})

app.get("/rose", (req, res) => {
    res.json(
        { name: "rose", genus: "rosa", season: "spring, summer", height: "4-7 inches", water: "water once a week", sunlight: "direct sunlight" }
    )
})

app.get("/lavender", (req, res) => {
    res.json(
        { name: "Lavender", genus: "Lavandula", season: "Spring, Summer", height: "20-24 inches", water: "Water once every 2 weeks", sunlight: "Full sun" }
    )
})

app.get("/tulip", (req, res) => {
    res.json(
        { name: "Tulip", genus: "Tulipa", season: "Spring", height: "4-28 inches", water: "Water once a week", sunlight: "Full sun" }
    )
})

app.get("/orchid", (req, res) => {
    res.json(
        { name: "Orchid", genus: "Orchidaceae", season: "Winter, Spring", water: "Water every 1-2 weeks", sunlight: "Indirect sunlight" }
    )
})

app.get("/dahlia", (req, res) => {
    res.json(
        { nname: "Dahlia", genus: "Dahlia", season: "Spring, Autumn", water: "Water once a week", sunlight: "Direct sunlight" }
    )
})
app.get("/hyacinth", (req, res) => {
    res.json(
        { name: "Hyacinth", genus: "Hyacinthus", season: "Spring", water: "Water every 1-2 weeks", sunlight: "Full sun" }
    )
})

app.get("/lily", (req, res) => {
    res.json(
        { name: "Lily", genus: "Lilium", season: "Summer, Autumn", water: "Water every 2-3 days", sunlight: "Direct sunlight" }
    )
})

app.get("/carnation", (req, res) => {
    res.json(
        { name: "Carnation", genus: "Caryophyllaceae", season: "Spring, Autumn", water: "Water once a week", sunlight: "Full sun" }
    )
})


app.listen(5000, () => { console.log("Server started on port 5000") })