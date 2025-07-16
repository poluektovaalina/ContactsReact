import { create } from 'zustand';
import { v4 as uuidv4 } from "uuid";

const useContactStore = create((set, get) => ({
    contacts: [],
    addContact: (firstName, lastName, phone) => {
        const newContact = {
         id: uuidv4(),
         firstName,
         lastName,
         phone,
        };

        const updatedContacts = [...get().contacts, newContact];
        set({ contacts: updatedContacts })

        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    },

    deleteContact: (id) => {
        const updatedDelContacts = get().contacts.filter((contact) => contact.id != id);
        set({ contacts: updatedDelContacts });
        localStorage.setItem('contacts', JSON.stringify(updatedDelContacts))
    },
        

    updateContact: (id, updatedData) =>
        set((state) => {
            const updatedContacts = state.contacts.map((contact) => 
                contact.id === id ? { ...contact, ...updatedData } : contact
            );
            localStorage.setItem('contacts', JSON.stringify(updatedContacts));
            return { contacts: updatedContacts }
        }),

    loadContacts: () => {
        const stored = localStorage.getItem('contacts');
        if(stored) {
            set({ contacts: JSON.parse(stored) });
        }
    },

    saveContacts: () => {
        const contacts = get().contacts;
        localStorage.setItem('contacts', JSON.stringify(contacts));
    },

    setSearchTerm: (term) => set({ searchTerm: term })

}));

export default useContactStore
