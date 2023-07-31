import userModel from "../Models/userModel.js";
import slugify from "slugify";

// Update user
export const updateUser = async (req, res) => {
  try {
    const { name, email, phone, answer } = req.fields;

    // Validation
    if (!name) {
      return res.status(400).send({ error: "Name is required" });
    }
    if (!email) {
      return res.status(400).send({ error: "Email is required" });
    }
    if (!phone) {
      return res.status(400).send({ error: "Phone is required" });
    }
    if (!answer) {
      return res.status(400).send({ error: "Answer is required" });
    }

    const updatedUser = await userModel.findByIdAndUpdate(
      req.params._id,
      { ...req.fields, slug: slugify(name) },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).send({ error: "User not found" });
    }

    res.status(200).send({
      success: true,
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error: error.message,
      message: "Error updating profile",
    });
  }
};
