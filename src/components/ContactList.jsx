import ContactItem from "./ContactItem.jsx";
import useContactStore from "../store/useContactStore.js";

export default function ContactList() {
  const contacts = useContactStore((state) => state.contacts)
  return (
    <div className="table_contact">
      <div className="contact_main">
        <span>Имя</span>
        <span>Фамилия</span>
        <span>Номер телефона</span>
      </div>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact}/>
      ))}
    </div>
  );
}
