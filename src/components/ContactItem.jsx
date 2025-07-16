import IconPencil from '../assets/iconmonstr-pencil-filled.svg?react';
import IconTrash from '../assets/iconmonstr-trash-can-filled.svg?react';
import useContactStore from '../store/useContactStore';

export default function ContactItem({ contact }) {
  const deleteContact = useContactStore((state) => state.deleteContact);


  return (
    <>
      <div className="contact_item">
        <span>{contact.firstName}</span>
        <span>{contact.lastName}</span>
        <span>{contact.phone}</span>
        <div className="grop_ico">
            <div className="btn pen">
                <IconPencil/>
            </div>
            <div className="btn delete" onClick={() => deleteContact(contact.id)}>
                <IconTrash/>
            </div>
        </div>
      </div>
    </>
  );
}
