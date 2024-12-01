const Contact = require("../models/contactModel");
const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({ user_id: req.user.id }); // Fetch contacts for the logged-in user
    res.status(200).json(contacts);
});

//@desc Create a new contact
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const contact = await Contact.create({
        user_id: req.user.id,
        name,
        email,
        phone,
    });

    res.status(201).json(contact);
});

//@desc Get a single contact by ID
//@route GET /api/contacts/:id
//@access private
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    // Check if the contact belongs to the logged-in user
    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User doesn't have permission to access this contact");
    }

    res.status(200).json(contact);
});

//@desc Update a contact by ID
//@route PUT /api/contacts/:id
//@access private
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    // Check if the contact belongs to the logged-in user
    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User doesn't have permission to update this contact");
    }

    // Update contact details
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
        new: true, // Return the updated document
    });

    res.status(200).json(updatedContact);
});

//@desc Delete a contact by ID
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    // Check if the contact belongs to the logged-in user
    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User doesn't have permission to delete this contact");
    }

    await Contact.findByIdAndDelete(req.params.id); // Delete the contact
    res.status(200).json({ message: "Contact deleted successfully", contact });
});

// Export all the controller functions
module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
};
