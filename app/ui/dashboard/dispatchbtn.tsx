"use client";

import { useRef } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

export default function DispatchBtn() {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const openModal = () => {
    modalRef.current?.showModal();
  };

  const closeModal = () => {
    modalRef.current?.close();
  };

  return (
    <>
      <button
        onClick={openModal}
        className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-700 flex items-center gap-2"
>
        Create Ride
        <PlusCircleIcon className="h-5 w-5" />
      </button>

      <dialog ref={modalRef} className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg"> Create New Dispatch</h3>
          <p className="py-4"> Fill in the details for the new dispatch.</p>

          <input type='text' placeholder="Pick-up Location"></input>

          <div className="modal-action">
            <button type="submit" onClick={closeModal} className="btn"> Add Dispatch </button>
          </div>

        </form>
      </dialog>
    </>
  );
}