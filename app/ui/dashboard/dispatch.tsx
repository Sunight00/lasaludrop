import queries from "@/app/lib/data";
import DispatchBtn from "./dispatchbtn";
export default async function Dispatch() {
    const drivers = await queries.drivers();

    return (
        <div className="p-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Dispatched Rides</h1>
                <DispatchBtn drivers={drivers} />
            </div>
            
        </div>
    );
}