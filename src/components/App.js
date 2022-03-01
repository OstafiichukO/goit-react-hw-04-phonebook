import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import Section from "./Section";

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem("contacts")) ?? []
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const filtered = (() => {
    const value = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(value)
    );
  })();

  const addContact = (id, name, number) => {
    const value = name.toLowerCase();
    contacts.filter((contact) => contact.name.toLowerCase() === value)
      .length === 0
      ? setContacts((prevState) => [
          ...prevState,
          { id: id, name: name, number: number },
        ])
      : alert(`${name} is already in contacts.`);
  };

  const deleteContact = (event) => {
    const { name } = event.target;
    setContacts(contacts.filter((contact) => contact.id !== name));
  };

  const handlleFilterContactsByName = (event) => {
    const { value } = event.target;
    setFilter(value);
  };

  return (
    <>
      <Section title={"Phonebook"}>
        <ContactForm onSubmit={addContact} />
      </Section>
      <Section title={"Contacts"}>
        <Filter filter={filter} onChange={handlleFilterContactsByName} />
        <ContactList contacts={filtered} onClick={deleteContact} />
      </Section>
    </>
  );
};

export default App;
