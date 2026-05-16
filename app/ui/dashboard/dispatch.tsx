import DispatchBtn from "./dispatchbtn";
export default function Dispatch() {
    return (
        <div className="p-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Dispatch Rides</h1>
                <DispatchBtn />
            </div>
            

        </div>
    );
}