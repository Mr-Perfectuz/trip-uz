"use client";
import { useProperty } from "@/utils/store";
import BookingForm from "./BookingForm";
import ConfirmBooking from "./ConfirmBooking";

function BookingContainer() {
  const state = useProperty((state) => state);
  return (
    <div className="w-full">
      <BookingForm />
      <ConfirmBooking />
    </div>
  );
}

export default BookingContainer;
