import { CheckIcon, MapPinIcon, PencilIcon, Trash2Icon } from "lucide-react";
import React from "react";

// label: "Home",
// address: "123 Main St ",
// city: "New York ",
// state: "NY",
// zip: "10001",
// isDefault: true,
// lat: 40.7128,
// lng: -74.006,
// _id: "69d3652df9a340288f1a0f8c",

function AddressCard({ addr, onEditHandler, setAddresses }) {
  const handleDelete = async (id)=>{
    console.log(id)
  }
  return (
    <div className="flex items-start justify-between max-w-3xl bg-white rounded-2xl p-6 ">

      {/* left */}
      <div className="flex gap-4">
          <div className="size-10 rounded-xl bg-app-cream flex-center shrink-0">
            <MapPinIcon className="size-5 text-app-green" />
          </div>
          <div className="">
            <div className="flex items-center gap-2 mb-1">
              <p className="text-sm font-semibold text-app-green">
                {addr.label}
              </p>
              {addr.isDefault && (
                <span className="flex-center gap- px-2.5 py-0.5 text-[10px] font-medium bg-app-green text-white rounded-full">
                  <CheckIcon className='size-2.5'/> Default
                </span>
              )}
            </div>
            <p className="text-sm text-app-text-light">
              {addr.address}, {addr.city},
              <br /> {addr.state}, {addr.zip}
            </p>
          </div>
      </div>

      {/* right- action buttos */}
      <div className="flex items-center gap-1">
          <button onClick={()=>onEditHandler(addr)} className="p-2 text-app-text-light hover:text-app-green hover:bg-app-cream rounded-lg transition-colors">
            <PencilIcon className="size-4"/>
          </button>

          <button onClick={()=>handleDelete(addr._id)} className="p-2 text-app-text-light hover:text-app-error hover:bg-red-50 rounded-lg transition-colors">
            <Trash2Icon className="size-4"/>
          </button>
      </div>
    </div>
  )
}

export default AddressCard;
