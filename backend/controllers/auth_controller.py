const pool = require("../config/db");
const bcrypt = require("bcrypt");

exports.signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const userExists = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (userExists.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
      [name, email, hashedPassword]
    );

    res.status(201).json({ message: "Signup successful" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

