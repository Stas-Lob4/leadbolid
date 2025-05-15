const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

const dataFilePath = path.join(__dirname, "historical.json");

app.use(cors());

app.get(
  "/bapi/composite/v1/public/promo/cmc/cryptocurrency/quotes/historical",
  (req, res) => {
    console.log("Mock request received with params:", req.query);

    if (!req.query.id && !req.query.symbol) {
      return res.status(400).json({
        code: "000000",
        message: null,
        messageDetail: null,
        data: {
          body: {
            status: {
              timestamp: new Date().toISOString(),
              error_code: 400,
              error_message:
                '"value" must contain at least one of [id, symbol]',
              elapsed: 0,
              credit_count: 0,
            },
          },
          success: false,
        },
        success: true,
      });
    }

    fs.readFile(dataFilePath, "utf8", (err, data) => {
      if (err) {
        console.error("Failed to read mock data:", err);
        return res.status(500).json({ message: "Error reading mock data" });
      }

      res.setHeader("Content-Type", "application/json");
      res.status(200).json(JSON.parse(data));
    });
  },
);

app.listen(PORT, () => {
  console.log(`HTTP Mock server running on http://localhost:${PORT}`);
});
