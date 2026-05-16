import queries from "@/app/lib/data";
import Link from "next/link";

/* ALL REGISTERED PENDING DISPATCHES */
export async function DispatchRides() {

  return (
        <div>
            <div className="flex items-center gap-2">
            <Link href="/dashboard" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded-lg shadow-sm transition duration-200">
                All
            </Link>
            <Link  href="/dashboard/pending" className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium px-4 py-2 rounded-lg shadow-sm transition duration-200">
                Pending
            </Link>

            <Link href="/dashboard/in-transit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow-sm transition duration-200">
                In Transit
            </Link>
            </div>
            <div className="overflow-x-auto rounded-lg border shadow-sm mt-1">
                <table className="w-full text-sm text-left">
                <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                    <tr>
                    <th className="p-3">Driver</th>
                    <th className="p-3">Pickup</th>
                    <th className="p-3">Destination</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Created</th>
                    </tr>
                </thead>
                <tbody className="data">
                    {await queries.dispatches().then((dispatches) => {
                        return dispatches.map((d) => (
                    <tr key={d.id}className="border-t hover:bg-gray-50 transition">
                        {/* Driver */}
                        <td className="p-3 font-medium">
                        {d.first_name} {d.last_name || "Unassigned"}
                        </td>

                        {/* Pickup */}
                        <td className="p-3 text-gray-700">
                        {d.pickup_location}
                        </td>

                        {/* Destination */}
                        <td className="p-3 text-gray-700">
                        {d.destination}
                        </td>

                        {/* Status Badge */}
                        <td className="p-3"> <span className={`px-2 py-1 rounded-full text-xs font-medium ${d.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>{d.status}</span>
                        </td>

                        {/* Date */}
                        <td className="p-3 text-gray-500">
                        {new Date(d.created_at).toLocaleString()}
                        </td>
                    </tr>
                        ));
                    })}
                </tbody>
                </table>
            </div>
        </div>

  );
}









export async function PendingRides() {

  return (
        <div>
            <div className="flex items-center gap-2">
            <Link href="/dashboard" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded-lg shadow-sm transition duration-200">
                All
            </Link>
            <Link  href="/dashboard/pending" className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium px-4 py-2 rounded-lg shadow-sm transition duration-200">
                Pending
            </Link>

            <Link href="/dashboard/in-transit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow-sm transition duration-200">
                In Transit
            </Link>
            </div>
            <div className="overflow-x-auto rounded-lg border shadow-sm mt-1">
                <table className="w-full text-sm text-left">
                <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                    <tr>
                    <th className="p-3">Driver</th>
                    <th className="p-3">Pickup</th>
                    <th className="p-3">Destination</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Created</th>
                    </tr>
                </thead>
                <tbody className="data">
                    {await queries.pendingDispatches().then((dispatches) => {
                        return dispatches.map((d) => (
                    <tr key={d.id}className="border-t hover:bg-gray-50 transition">
                        {/* Driver */}
                        <td className="p-3 font-medium">
                        {d.first_name} {d.last_name || "Unassigned"}
                        </td>

                        {/* Pickup */}
                        <td className="p-3 text-gray-700">
                        {d.pickup_location}
                        </td>

                        {/* Destination */}
                        <td className="p-3 text-gray-700">
                        {d.destination}
                        </td>

                        {/* Status Badge */}
                        <td className="p-3"> <span className={`px-2 py-1 rounded-full text-xs font-medium ${d.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>{d.status}</span>
                        </td>

                        {/* Date */}
                        <td className="p-3 text-gray-500">
                        {new Date(d.created_at).toLocaleString()}
                        </td>
                    </tr>
                        ));
                    })}
                </tbody>
                </table>
            </div>
        </div>

  );
}

export async function InTransit() {

  return (
        <div>
            <div className="flex items-center gap-2">
            <Link href="/dashboard" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded-lg shadow-sm transition duration-200">
                All
            </Link>
            <Link  href="/dashboard/pending" className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium px-4 py-2 rounded-lg shadow-sm transition duration-200">
                Pending
            </Link>

            <Link href="/dashboard/in-transit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow-sm transition duration-200">
                In Transit
            </Link>
            </div>
            <div className="overflow-x-auto rounded-lg border shadow-sm mt-1">
                <table className="w-full text-sm text-left">
                <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                    <tr>
                    <th className="p-3">Driver</th>
                    <th className="p-3">Pickup</th>
                    <th className="p-3">Destination</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Created</th>
                    </tr>
                </thead>
                <tbody className="data">
                    {await queries.inTransitDispatches().then((dispatches) => {
                        return dispatches.map((d) => (
                    <tr key={d.id}className="border-t hover:bg-gray-50 transition">
                        {/* Driver */}
                        <td className="p-3 font-medium">
                        {d.first_name} {d.last_name || "Unassigned"}
                        </td>

                        {/* Pickup */}
                        <td className="p-3 text-gray-700">
                        {d.pickup_location}
                        </td>

                        {/* Destination */}
                        <td className="p-3 text-gray-700">
                        {d.destination}
                        </td>

                        {/* Status Badge */}
                        <td className="p-3"> <span className={`px-2 py-1 rounded-full text-xs font-medium ${d.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>{d.status}</span>
                        </td>

                        {/* Date */}
                        <td className="p-3 text-gray-500">
                        {new Date(d.created_at).toLocaleString()}
                        </td>
                    </tr>
                        ));
                    })}
                </tbody>
                </table>
            </div>
        </div>
  );
}
