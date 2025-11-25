require("dotenv").config({ path: ".env.local" });
const mongoose = require("mongoose");

// MongoDB 연결 URI
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// 명령줄 인자로 이메일과 역할 받기
const userEmail = process.argv[2];
const newRole = process.argv[3];

if (!userEmail || !newRole) {
  console.error("❌ Error: Please provide user email and role");
  console.log(
    "\nUsage: node scripts/change-role.js user@example.com [Admin|User]"
  );
  console.log("\nExamples:");
  console.log("  node scripts/change-role.js user@example.com Admin");
  console.log("  node scripts/change-role.js user@example.com User");
  process.exit(1);
}

// 역할 유효성 검사
if (newRole !== "Admin" && newRole !== "User") {
  console.error("❌ Error: Role must be either 'Admin' or 'User'");
  console.log(
    "\nUsage: node scripts/change-role.js user@example.com [Admin|User]"
  );
  process.exit(1);
}

async function changeUserRole() {
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

    // console.log(`\nFound user: ${user.name} (${user.email})`);
    // console.log(`Current role: ${user.role || "User"}`);

    // if (user.role === newRole) {
    //   console.log(`\n⚠️  User already has role: ${newRole}`);
    //   return;
    // }

    // 역할 변경
    user.role = newRole;
    await user.save();

    console.log(`\n✅ Successfully changed ${userEmail} role to ${newRole}!`);
    console.log(`New role: ${user.role}`);
  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await mongoose.connection.close();
    console.log("\nDatabase connection closed");
  }
}

changeUserRole();
