import "./App.css";
import { useEffect } from "react";
import ContactForm from "./ContactForm/ContactForm.jsx";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contactsOps.js";
import { Toaster } from "react-hot-toast";
import Error from "./Error/Error.jsx";
import Loader from "./Loader/Loader.jsx";

export const App = () =>{
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Toaster />
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && <Error errorMessage={`${error}`}> Error message: </Error>}
      {loading && <Loader>Loading</Loader>}
      <ContactList />
    </div>
  );
}
