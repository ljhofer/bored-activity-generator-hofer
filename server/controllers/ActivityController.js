const { Activity } = require("../models");

// getTopActivities, createActivity, getActivityById

module.exports = {

    async createActivity({ body }, res) {
        const activity = await Activity.create(body);

        if (!activity) {
            return res.status(400).json({ message: 'Unable to create Activity' });
        }
        
        res.status(200).json(activity);
    },




















}