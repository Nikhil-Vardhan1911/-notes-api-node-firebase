// src/routes/notes.js
const express = require("express");
const router = express.Router();
const db = require("../config/firebase");

// Create a new note
router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;

    // Validation
    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }

    const now = new Date();
    const docRef = await db.collection("notes").add({
      title,
      content,
      createdAt: now,
      updatedAt: now,
    });

    res.status(201).json({ id: docRef.id, title, content, createdAt: now, updatedAt: now });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all notes
router.get("/", async (req, res) => {
  try {
    const snapshot = await db.collection("notes").get();
    const notes = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single note by ID
router.get("/:id", async (req, res) => {
  try {
    const doc = await db.collection("notes").doc(req.params.id).get();
    if (!doc.exists) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json({ id: doc.id, ...doc.data() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a note by ID
router.put("/:id", async (req, res) => {
  try {
    const { title, content } = req.body;

    // Validation
    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }

    const now = new Date();
    await db.collection("notes").doc(req.params.id).update({
      title,
      content,
      updatedAt: now,
    });

    res.json({ id: req.params.id, title, content, updatedAt: now });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a note by ID
router.delete("/:id", async (req, res) => {
  try {
    await db.collection("notes").doc(req.params.id).delete();
    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;