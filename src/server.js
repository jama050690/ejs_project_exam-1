import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function main() {
  console.log(__filename);
  console.log(__dirname);

  const app = express();
  app.use(express.static(path.join(__dirname, "../public")));

  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "views"));
  app.get("/", (req, res) => {
    res.render("index", {
      title: "Dashboard",
    });
  });

  app.listen(PORT, () => {
    console.log(`App ready at: ${PORT}`);
  });
}
