import Agriculture from "../models/Agriculture.js";
import Healthcare from "../models/Healthcare.js";
import Education from "../models/Education.js";
import Environmental from "../models/Environmental.js";

// Agriculture controllers
export const getAgriculture = async (req, res) => {
  try {
    const data = await Agriculture.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createAgriculture = async (req, res) => {
  try {
    const agriculture = new Agriculture(req.body);
    await agriculture.save();
    res.status(201).json(agriculture);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateAgriculture = async (req, res) => {
  try {
    const agriculture = await Agriculture.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!agriculture) {
      return res.status(404).json({ error: "Agriculture data not found" });
    }
    res.json(agriculture);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAgriculture = async (req, res) => {
  try {
    const agriculture = await Agriculture.findByIdAndDelete(req.params.id);
    if (!agriculture) {
      return res.status(404).json({ error: "Agriculture data not found" });
    }
    res.json({ message: "Agriculture data deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Healthcare controllers
export const getHealthcare = async (req, res) => {
  try {
    const data = await Healthcare.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createHealthcare = async (req, res) => {
  try {
    const healthcare = new Healthcare(req.body);
    await healthcare.save();
    res.status(201).json(healthcare);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateHealthcare = async (req, res) => {
  try {
    const healthcare = await Healthcare.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!healthcare) {
      return res.status(404).json({ error: "Healthcare data not found" });
    }
    res.json(healthcare);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteHealthcare = async (req, res) => {
  try {
    const healthcare = await Healthcare.findByIdAndDelete(req.params.id);
    if (!healthcare) {
      return res.status(404).json({ error: "Healthcare data not found" });
    }
    res.json({ message: "Healthcare data deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Education controllers
export const getEducation = async (req, res) => {
  try {
    const data = await Education.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createEducation = async (req, res) => {
  try {
    const education = new Education(req.body);
    await education.save();
    res.status(201).json(education);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!education) {
      return res.status(404).json({ error: "Education data not found" });
    }
    res.json(education);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);
    if (!education) {
      return res.status(404).json({ error: "Education data not found" });
    }
    res.json({ message: "Education data deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Environmental controllers
export const getEnvironmental = async (req, res) => {
  try {
    const data = await Environmental.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getEnvironmentalById = async (req, res) => {
  try {
    const data = await Environmental.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ error: "Environmental data not found" });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createEnvironmental = async (req, res) => {
  try {
    const environmental = new Environmental(req.body);
    await environmental.save();
    res.status(201).json(environmental);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateEnvironmental = async (req, res) => {
  try {
    const environmental = await Environmental.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!environmental) {
      return res.status(404).json({ error: "Environmental data not found" });
    }
    res.json(environmental);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteEnvironmental = async (req, res) => {
  try {
    const environmental = await Environmental.findByIdAndDelete(req.params.id);
    if (!environmental) {
      return res.status(404).json({ error: "Environmental data not found" });
    }
    res.json({ message: "Environmental data deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
