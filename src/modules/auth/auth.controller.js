const {
  signupService,
  loginService,
} = require("./auth.service");

const signupController = async (
  req,
  res
) => {
  try {
    const data = await signupService(req.body);

    // Set JWT token in cookie
    res.cookie("token", data.token, {
      httpOnly: true,
      secure: false, // true in production with HTTPS
      sameSite: "strict",
      maxAge:
        7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      success: true,
      message: "Signup successful",
      user: data.user,
      token: data.token,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const loginController = async (
  req,
  res
) => {
  try {
    const data = await loginService(req.body);

    // Set JWT token in cookie
    res.cookie("token", data.token, {
      httpOnly: true,
      secure: false, // true in production with HTTPS
      sameSite: "strict",
      maxAge:
        7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: data.user,
      token: data.token,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  signupController,
  loginController,
};