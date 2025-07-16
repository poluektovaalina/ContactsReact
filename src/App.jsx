import { useState, useEffect } from "react";
import useContactStore from "./store/useContactStore";
import ContactForm from "./components/ContactForm.jsx";
import ContactList from "./components/ContactList.jsx";
import './App.css'
import ContactSearch from "./components/ContactSearch.jsx";

export default function App() {
  const loadContacts = useContactStore((state) => state.loadContacts);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  return (
    <div className="container">
      <div className="right">
        <div className="title">
          <span>Книга Контактов</span>
        </div>
        <ContactForm />
      </div>
      <div className="left">
          <ContactSearch/>
          <ContactList />
      </div>
    </div>
  );
}