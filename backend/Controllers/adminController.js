import Admin from "../models/AdminSchema.js";

//  Get Single admin profile
export const getSingleAdmin = async (req, res) => {
  const { id } = req.params;

  try {
    const admin = await Admin.findById(id);

    if (!admin) {
      return res
        .status(404)
        .json({ message: "Admin not found", success: false });
    }

    res.status(200).json({ admin, data, success: true });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};
