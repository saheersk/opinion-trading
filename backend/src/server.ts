import http from "http";
import app from "./app";
import { initializeSockets } from "./websockets/socket";
import { PORT } from "./config";

const server = http.createServer(app);
initializeSockets(server);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
