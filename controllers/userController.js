import User from "../models/userModel.js";

export const createUser = async (req, res) => {
    try {
      const { 
        name, 
        mobile, 
        email, 
        user_id, 
        password, 
        device_id, 
        vehicle_no, 
        vehicle_type, 
        purchase_from, 
        other_option 
      } = req.body;
  
      if (!name || !mobile || !email || !user_id || !password || !device_id || !vehicle_no || !vehicle_type || !purchase_from || !other_option) {
        return res.status(400).json({
          message: 'All fields are required',
          success: false,
        });
      }
  
      const result = await User.createUser({ name, mobile, email, user_id, password, device_id, vehicle_no, vehicle_type, purchase_from, other_option });
  
      if (!result || !result.insertId) { 
        return res.status(500).json({
          message: 'Failed to create user',
          success: false,
        });
      }
  
      return res.status(201).json({
        message: 'User created successfully',
        userId: result.insertId,
        success: true,
      });
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(500).json({
        message: 'An error occurred while creating the user',
        success: false,
        error: error.message,
      });
    }
  };
  
export const getUsers = async (req, res) => {
  try {
    const [rows] = await User.getAllUsers();
    console.log("just checking try block")
    res.status(200).json({
      message:"All Users",
      data:rows,
    });
  } catch (error) {
    console.log("just checking catch block")

    res.status(500).json({ message: error.message });
  }
};
