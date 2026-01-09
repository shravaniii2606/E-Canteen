const pool = require('../config/db');

async function signup(req, res) {
  // your logic to insert user in PostgreSQL
}

async function login(req, res) {
  // your logic to check user + password + role
}

module.exports = { signup, login };
