import classes from "./Notification.module.css";
import { useSelector } from "react-redux";
const Notification = (props) => {
  const notification = useSelector((state) => state.cart.notification);

  let specialClasses = "error";

  if (notification.status === "error") {
    specialClasses = classes.error;
  }
  if (notification.status === "success") {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{notification.title}</h2>
      <p>{notification.message}</p>
    </section>
  );
};

export default Notification;
