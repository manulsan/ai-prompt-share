require("dotenv").config({ path: ".env.local" });
const mongoose = require("mongoose");

// MongoDB 연결 URI
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

async function listAllUsers() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI);
    console.log("Connected successfully!\n");

    const User = mongoose.model(
      "User",
      new mongoose.Schema({
        email: String,
        name: String,
        image: String,
        role: {
          type: String,
          enum: ["Admin", "User"],
          default: "User",
        },
      })
    );

    const users = await User.find({});

    console.log("=== All Users and Their Roles ===\n");
    users.forEach((user, index) => {
      console.log(`${index + 1}. Email: ${user.email}`);
      console.log(`   Name: ${user.name}`);
      console.log(`   Role: ${user.role || "User (not set)"}`);
      console.log(`   ID: ${user._id}`);
      console.log("");
    });

    console.log(`Total users: ${users.length}`);
  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await mongoose.connection.close();
    console.log("\nDatabase connection closed");
  }
}

listAllUsers();
