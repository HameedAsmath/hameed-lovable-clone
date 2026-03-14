import express from 'express';
import {b} from "../baml_client/sync_client.js";
import "dotenv/config"

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/",(req, res) => {
    res.send(b.Greet("Hameed Asmath"));
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
