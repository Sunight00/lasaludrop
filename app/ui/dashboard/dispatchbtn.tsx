"use client";

import { useRef } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { createDispatch } from "@/app/lib/action";

type Driver = {
  id: number;
  first_name: string;
  last_name: string;
};

type Props = {
  drivers: Driver[];
};

export default function DispatchBtn({ drivers }: Props) {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const openModal = () => modalRef.current?.showModal();
  const closeModal = () => modalRef.current?.close();

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={openModal}
        className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-md transition"
      >
        Create Ride
        <PlusCircleIcon className="h-5 w-5" />
      </button>

      {/* MODAL */}
      <dialog ref={modalRef} className="modal">
        {/* BACKDROP */}
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          
          {/* MODAL BOX */}
          <form
            action={createDispatch}
            className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-800">
              Create New Dispatch
            </h3>

            <p className="text-sm text-gray-500">
              Fill in the details for the new dispatch.
            </p>

            {/* DRIVER */}
            <div>
              <label className="text-sm font-medium">Driver</label>
              <select
                name="driver_id"
                className="w-full mt-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select a driver</option>

                {drivers.map((driver) => (
                  <option key={driver.id} value={driver.id}>
                    {driver.first_name} {driver.last_name}
                  </option>
                ))}
              </select>
            </div>

            {/* PICKUP */}
            <div>
              <label className="text-sm font-medium">Pick-up Location</label>
              <input
                type="text"
                name="pickup_location"
                placeholder="Enter pickup location"
                className="w-full mt-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* DESTINATION */}
            <div>
              <label className="text-sm font-medium">Destination</label>
              <input
                type="text"
                name="destination"
                placeholder="Enter destination"
                className="w-full mt-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* BUTTONS */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={closeModal}
                className="px-4 py-2 rounded-lg border hover:bg-gray-100"
              >
                Close
              </button>

              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-purple-700 text-white hover:bg-purple-800"
              >
                Add Dispatch
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}