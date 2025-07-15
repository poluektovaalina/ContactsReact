import { create } from 'zustand';
import { v4 as uuidv4 } from "uuid";

const useContactStore = create((set) => ({
    contacts: [],
    addContact: (firstName, lastName, phone) =>
        set((state) => ({
            ...state,
            contacts:[
                ...state,
                {
                    id: uuidv4(),
                    firstName,
                    lastName,
                    phone
                }
            ]
        })),

    deleteContact: (id) =>
        set((state) => ({
            contacts: state.contacts.filter((contact) => contact.id != id)
        })),

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
