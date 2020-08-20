const express = require(`express`);
const PORT = process.env.PORT || 3001;
const app = express();
const db = require(`./db/database`);
const apiRoutes = require(`./routes/apiRoutes`);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(`/api`, apiRoutes);

app.use((req, res) => {
    res.status(404).end();
});

// start server after db connection
db.on(`open`, () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
