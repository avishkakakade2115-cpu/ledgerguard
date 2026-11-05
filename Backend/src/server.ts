
import "dotenv/config";
import app from "./app.js";

const PORT = Number(process.env.PORT) || 5000;

const server = app.listen(PORT, () => {
  console.log(`LedgerGuard server running on port ${PORT}`);
});

// Handle unexpected server errors
server.on("error", (error) => {
  console.error("Server startup error:", error);
  process.exit(1);
});
