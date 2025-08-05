import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static("public"));
app.use(express.json());

app.post("/api/ai", (req, res) => {
  const { message } = req.body;
  let reply = "Saya tidak mengerti maksudmu.";

  if (message.toLowerCase().includes("halo")) {
    reply = "Halo juga! Senang bertemu denganmu.";
  } else if (message.toLowerCase().includes("nama")) {
    reply = "Saya AI di portofolio ini. Kamu bisa lihat karya pembuatku di bawah.";
  } else if (message.toLowerCase().includes("kontak")) {
    reply = "Kontak saya: email@example.com";
  }

  res.json({ reply });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Web aktif di http://localhost:${PORT}`));
