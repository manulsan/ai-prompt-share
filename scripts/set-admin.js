require("dotenv").config({ path: ".env.local" });
const mongoose = require("mongoose");

// MongoDB 연결 URI
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// 명령줄 인자로 이메일 받기
const userEmail = process.argv[2];

if (!userEmail) {
  console.error("❌ Error: Please provide user email");
  console.log("\nUsage: node scripts/set-admin.js user@example.com");
  process.exit(1);
}

async function setAdminRole() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI);
    console.log("Connected successfully!");

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

    // 사용자 찾기
    const user = await User.findOne({ email: userEmail });

    if (!user) {
      console.error(`❌ User not found: ${userEmail}`);
      return;
    }

    console.log(`\nFound user: ${user.name} (${user.email})`);
    console.log(`Current role: ${user.role || "User"}`);

    // Admin 역할 설정
    user.role = "Admin";
    await user.save();

    console.log(`\n✅ Successfully set ${userEmail} as Admin!`);
    console.log(`New role: ${user.role}`);
  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await mongoose.connection.close();
    console.log("\nDatabase connection closed");
  }
}

setAdminRole();
