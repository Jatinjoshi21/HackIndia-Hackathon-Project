const bcrypt = require("bcryptjs");

const User = require("../../models/User");

const generateToken = require("../../utils/generateToken");

const signupService = async (data) => {
  const { name, email, password, role } = data;

  // Check if user already exists
  const existingUser = await User.findOne({
    email,
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(
    password,
    10
  );

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role,
  });

  // Generate JWT token
  const token = generateToken(
    user._id,
    user.role
  );

  // Remove password before sending response
  const userWithoutPassword =
    user.toObject();

  delete userWithoutPassword.password;

  return {
    user: userWithoutPassword,
    token,
  };
};

const loginService = async (data) => {
  const { email, password } = data;

  // Find user
  const user = await User.findOne({
    email,
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  // Compare passwords
  const isMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  // Generate token
  const token = generateToken(
    user._id,
    user.role
  );

  // Remove password before sending response
  const userWithoutPassword =
    user.toObject();

  delete userWithoutPassword.password;

  return {
    user: userWithoutPassword,
    token,
  };
};

module.exports = {
  signupService,
  loginService,
};