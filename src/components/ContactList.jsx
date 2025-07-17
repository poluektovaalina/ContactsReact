import ContactItem from "./ContactItem.jsx";
import useContactStore from "../store/useContactStore.js";

export default function ContactList() {
  const contacts = useContactStore((state) => state.contacts);
  const searchTerm = useContactStore((state) => state.searchTerm);

  const filteredContacts = contacts.filter(contact =>
    contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="table_contact">
      <div className="contact_main">
        <span>Имя</span>
        <span>Фамилия</span>
        <span>Номер телефона</span>
      </div>
      {filteredContacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact}/>
      ))}
    </div>
  );
}
