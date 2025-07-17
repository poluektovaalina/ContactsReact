import IconPencil from "../assets/iconmonstr-pencil-filled.svg?react";
import IconTrash from "../assets/iconmonstr-trash-can-filled.svg?react";
import IconCheckMark from "../assets/iconmonstr-check-mark-5.svg?react";
import useContactStore from "../store/useContactStore";
import { useState } from "react";

export default function ContactItem({ contact }) {
  const {
    deleteContact,
    updateContact,
    editingContactId,
    setEditingContactId,
  } = useContactStore();

  const [editedFirstName, setEditedFirstName] = useState(contact.firstName);
  const [editedLastName, setEditedLastName] = useState(contact.lastName);
  const [editedPhone, setEditedPhone] = useState(contact.phone);

  const handleSave = () => {
    updateContact(contact.id, {
      firstName: editedFirstName,
      lastName: editedLastName,
      phone: editedPhone,
    });
    setEditingContactId(null);
  };

  const isEditing = editingContactId === contact.id;

  return (
    <>
      <div className="contact_item">
        {isEditing ? (
          <>
            <input
              value={editedFirstName}
              onChange={(e) => setEditedFirstName(e.target.value)}
            />
            <input
              value={editedLastName}
              onChange={(e) => setEditedLastName(e.target.value)}
            />
            <input
              value={editedPhone}
              onChange={(e) => setEditedPhone(e.target.value)}
            />
            <div className="btn_edited">
              <button onClick={handleSave}>
                <IconCheckMark />
              </button>
            </div>
          </>
        ) : (
          <>
            <span>{contact.firstName}</span>
            <span>{contact.lastName}</span>
            <span>{contact.phone}</span>
            <div className="grop_ico">
              <div
                className="btn pen"
                onClick={() => setEditingContactId(contact.id)}
              >
                <IconPencil />
              </div>
              <div
                className="btn delete"
                onClick={() => deleteContact(contact.id)}
              >
                <IconTrash />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
