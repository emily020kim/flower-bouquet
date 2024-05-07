import rose from "./images/rose.png";
import lavender from "./images/lavender.png";
import tulip from "./images/tulip.png";
import orchid from "./images/orchid.png";
import dahlia from "./images/dahlia.png";
import hyacinth from "./images/hyacinth.png";
import lily from  "./images/lily.png";
import carnation from "./images/carnation.png";

const express = require('express');
const app = express();

app.get("/flowers", (req, res) => {
    res.json([
        { name: "Rose", genus: "Rosa", season: "Spring, Summer", image: {rose} },
        { name: "Lavender", genus: "Lavandula", season: "Spring, Summer", image: {lavender} },
        { name: "Tulip", genus: "Tulipa", season: "Spring", image: {tulip} },
        { name: "Orchid", genus: "Orchidaceae", season: "Winter, Spring", image: {orchid} },
        { name: "Dahlia", genus: "Dahlia", season: "Spring, Autumn", image: {dahlia} },
        { name: "Hyacinth", genus: "Hyacinthus", season: "Spring", image: {hyacinth} },
        { name: "Lily", genus: "Lilium", season: "Summer, Autumn", image: {lily} },
        { name: "Carnation", genus: "Caryophyllaceae", season: "Spring, Autumn", image: {carnation} },
    ])
})

app.get("/rose", (req, res) => {
    res.json(
        { name: "Rose", genus: "Rosa", season: "Spring, Summer", height: "4-7 inches", water: "Water once a week", sunlight: "Direct sunlight" }
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