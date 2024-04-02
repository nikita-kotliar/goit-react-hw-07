// import { IoPerson } from "react-icons/io5";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contactsSlice";
// import css from "./Contact.module.css";

// export default function Contact({ contact }) {
//   const dispatch = useDispatch();

//   const handleDelete = () => dispatch(deleteContact(contact.id));

//   return (
//     <>
//       <div className={css.contact_div}>
//         <IoPerson className={css.icon} />
//         <p className={css.p}>{contact.username}</p>
//         <BsFillTelephoneFill className={css.icon} />
//         <p className={css.p}>{contact.tel}</p>
//       </div>
//       <button onClick={handleDelete}>Delete</button>
//     </>
//   );
// }

// import css from "./Contact.module.css";
import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch(); 
  const handleDelete = () => {
    dispatch(deleteContact(id)); 
  };
  return (
    <div className={css.contact_div}>
      <p className={css.p}>
        <IoPersonSharp />
        {name}
      </p>

      <p className={css.p}>
        <FaPhone />
        {number}
      </p>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
