import { app } from "./app";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
    console.log(`Listening in the port: ${PORT}`);
});