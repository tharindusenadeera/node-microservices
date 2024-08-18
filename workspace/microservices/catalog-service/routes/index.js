const express = require("express");
const CatalogService = require("../lib/CatalogService");

const router = express.Router();

// Define your RESTful routes here
router.get("/items", async (req, res) => {
  try {
    const items = await CatalogService.getAll();
    return res.json(items);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
