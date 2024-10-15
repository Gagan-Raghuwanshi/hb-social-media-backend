import db from "../DB/db.js";

const User = {
  createUser: async (userData) => {
    const { name, mobile, email,user_id, password,device_id,vehicle_no,vehicle_type,purchase_from,other_option } = userData;
    const query =
      "INSERT INTO devices (name, mobile, email,user_id, password,device_id,vehicle_no,vehicle_type,purchase_from,other_option) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [name, mobile, email,user_id, password,device_id,vehicle_no,vehicle_type,purchase_from,other_option];

    const [result] = await db.query(query, values);
    return result;
  },
  getAllUsers: async () => {
    return await db.query("SELECT * FROM devices ORDER BY id DESC");
  },
};

export default User;
