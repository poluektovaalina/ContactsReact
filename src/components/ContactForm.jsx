import { useState } from "react";
import useContactStore from "../store/useContactStore";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const addContact = useContactStore((state) => state.addContact);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && phone) {
      addContact(firstName, lastName, phone);
      setFirstName("");
      setLastName("");
      setPhone("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="group">
          <input
            type="text"
            placeholder="Имя"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Фамилия"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Номер телефона"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit" className="button">
          <span>Добавить контакт</span>
        </button>
      </form>
    </>
  );
}
