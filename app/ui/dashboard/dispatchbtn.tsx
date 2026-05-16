import { PlusCircleIcon } from "@heroicons/react/24/outline";

/*COMPONET FOR CREATING A DISPATCH*/
export default function DispatchBtn(){
    return (
                <button className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-700 ">               
                    Create Ride <PlusCircleIcon className="h-5 w-5 inline" />
                </button>
    )
}