const Contact = require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access public 

const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Get all contacts (testing only"});
});

//@desc Create a new contact
//@route POST /api/contacts
//@access public (for testing only)
 
const createContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Create a new contact (testing only"});
});

//@desc Get a single contact by ID
//@route GET /api/contacts/:id
//@access public (for testing only)
const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get contact with ID: ${req.params.id} (testing only)` });
});

//@desc Update a contact by ID
//@route PUT /api/contacts/:id
//@access public (for testing only)
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update contact with ID: ${req.params.id} (testing only)` });
});

//@desc Delete a contact by ID
//@route DELETE /api/contacts/:id
//@access public (for testing only)
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete contact with ID: ${req.params.id} (testing only)` });
});

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};

