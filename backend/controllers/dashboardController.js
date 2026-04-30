import Grievance from "../models/Grievance.js";
import Job from "../models/Job.js";
import User from "../models/User.js";

export const getDashboardSummary = async (req, res) => {
  try {
    const grievanceCount = await Grievance.countDocuments();
    const jobCount = await Job.countDocuments();
    const userCount = await User.countDocuments();

    const grievancesByStatus = await Grievance.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 },
        },
      },
    ]);

    res.json({
      totalGrievances: grievanceCount,
      totalJobs: jobCount,
      totalUsers: userCount,
      grievancesByStatus,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getRecentActivity = async (req, res) => {
  try {
    const recentGrievances = await Grievance.find()
      .sort({ createdAt: -1 })
      .limit(5);
    const recentJobs = await Job.find()
      .sort({ createdAt: -1 })
      .limit(5);

    res.json({
      recentGrievances,
      recentJobs,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getGrievanceStats = async (req, res) => {
  try {
    const stats = await Grievance.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
          avgPriority: { $avg: "$priority" },
        },
      },
    ]);

    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
