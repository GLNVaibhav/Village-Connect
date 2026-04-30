import Grievance from "../models/Grievance.js";

export const getGrievance = async (req, res) => {
  try {
    const grievances = await Grievance.find();
    res.json(grievances);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createGrievance = async (req, res) => {
  try {
    const { title, description, category, priority } = req.body;

    const grievance = new Grievance({
      title,
      description,
      category,
      priority,
      submittedBy: req.user.id,
      status: "open",
    });

    await grievance.save();
    res.status(201).json(grievance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getGrievanceById = async (req, res) => {
  try {
    const grievance = await Grievance.findById(req.params.id);
    if (!grievance) {
      return res.status(404).json({ error: "Grievance not found" });
    }
    res.json(grievance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateGrievanceStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const grievance = await Grievance.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!grievance) {
      return res.status(404).json({ error: "Grievance not found" });
    }

    res.json(grievance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
