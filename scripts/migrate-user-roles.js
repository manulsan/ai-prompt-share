require("dotenv").config({ path: ".env.local" });
const mongoose = require("mongoose");

// MongoDB 연결 URI
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

async function migrateUserRoles() {
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

    // 모든 사용자 조회
    const users = await User.find({});
    console.log(`Found ${users.length} users`);

    // role 필드가 없는 사용자들 업데이트
    const usersWithoutRole = users.filter((user) => !user.role);
    console.log(`${usersWithoutRole.length} users need role field`);

    if (usersWithoutRole.length > 0) {
      const result = await User.updateMany(
        { role: { $exists: false } },
        { $set: { role: "User" } }
      );
      console.log(
        `Updated ${result.modifiedCount} users with default role "User"`
      );
    }

    // 모든 사용자 목록 출력 (role 포함)
    console.log("\n=== All Users ===");
    const allUsers = await User.find({});
    allUsers.forEach((user, index) => {
      console.log(`${index + 1}. ${user.email} - Role: ${user.role}`);
    });

    console.log("\n✅ Migration completed successfully!");
    console.log("\n📝 To set a user as Admin, run:");
    console.log(
      'db.users.updateOne({email: "admin@example.com"}, {$set: {role: "Admin"}})'
    );
  } catch (error) {
    console.error("❌ Migration failed:", error);
  } finally {
    await mongoose.connection.close();
    console.log("\nDatabase connection closed");
  }
}

migrateUserRoles();
