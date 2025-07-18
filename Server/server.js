import dotenv from "dotenv";
dotenv.config();
const secret = process.env.JWT_SECRET;
import cors from "cors";
import morgan from "morgan";
import express from "express";
import cloudinary from "./config/cloudinary.js";

import {
  registerUser,
  loginUser,
  getUser,
  addProduct,
} from "./config/firebase.js";
import jwt from "jsonwebtoken";

// DOTENV

// REST OBJ
const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));
app.use(morgan("dev"));

// ROUTES
app.post("/add-user", async (req, res) => {
  try {
    console.log(req.body);
    await registerUser(req.body);
    res.status(200).json({ message: "User added to Firestore" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add user" });
  }
});

app.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const result = await loginUser(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to add user" });
  }
});

app.get("/getUserInformation", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader)
      return res.status(401).json({ error: "Missing Authorization header" });

    const token = authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Missing token" });

    const decoded = jwt.verify(token, secret);
    if (!decoded.email) return res.status(401).json({ error: "Invalid token" });

    const user = await getUser(decoded.email);
    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

// CLOUDINARY IMAGE UPLOAD

app.post("/uploadImageToCloudinary", (req, res) => {
  const { image } = req.body;

  console.log("image backend receiverd : ", image);

  cloudinary.uploader.upload(image, (error, result) => {
    if (error) {
      console.error("Cloudinary Error:", error);
      return res.status(500).json({ error: "Upload failed" });
    }

    console.log("Uploaded to Cloudinary:", result);
    res.status(200).json({ secure_url: result.secure_url });
  });
});

// ADMIN FUNCTIONS

app.post("/add-product", async (req, res) => {
  try {
    console.log(req.body);
    await addProduct(req.body);
    res.status(200).json({ message: "Product added to Firestore" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add product" });
  }
});

// PORT
const PORT = process.env.PORT || 8080;

// LISTEN
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
