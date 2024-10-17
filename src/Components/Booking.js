import React from "react";
import BookingPage from "./BookingPage";

function Booking(props) {
  return (
    <BookingPage
      availableTimes={props.availableTimes}
      dispatch={props.dispatch}
      submitForm={props.submitForm}
    />
  );
}
export default Booking;
