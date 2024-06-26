import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import millsRoute from "./routes/millsRoute.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", millsRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);

export default app;