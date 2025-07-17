import { create } from 'zustand';
import { v4 as uuidv4 } from "uuid";

const useContactStore = create((set, get) => ({
    contacts: [],
    searchTerm: '',
    editingContactId: null,
    setEditingContactId: (id) => set({ editingContactId: id }),
    setSearchTerm: (term) => set({ searchTerm: term }),

    filteredContacts:() => {
        const { contacts, searchTerm } = get();
        if(!searchTerm.trim()) return contacts;
        return contacts.filter(contact => 
            contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.lastName.toLowerCase().includes(searchTerm.toLowerCase())
        );
    },

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
        

    updateContact: (id, updatedData) => {
        const updatedContacts = get().contacts.map((contact) => contact.id === id ? { ...contact, ...updatedData } : contact);
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        set({ contacts: updatedContacts });
    },
        
    loadContacts: () => {
        const stored = localStorage.getItem('contacts');
        if(stored) {
            set({ contacts: JSON.parse(stored) });
        }
    }

}));

export default useContactStore
