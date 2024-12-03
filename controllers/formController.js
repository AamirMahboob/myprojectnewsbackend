// const FormData = require('../models/formDataModel');
const FormData = require('../models/newsdata');

// Handle form submission
const submitForm = async (req, res) => {
    try {
        const newFormData = new FormData(req.body);
        await newFormData.save();
        res.status(201).json({ message: 'Form data saved successfully', data: newFormData });
    } catch (error) {
        res.status(500).json({ message: 'Error saving form data', error });
    }
};

const getData = async (req, res) => {
    try {
        const data = await FormData.find(); // Retrieves all documents from the 'newsdata' collection
        res.status(200).json({ message: 'Data fetched successfully', data });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data', error });
    }
};

module.exports = {
    submitForm,
    getData,
};
