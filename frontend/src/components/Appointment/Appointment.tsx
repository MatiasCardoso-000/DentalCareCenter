import { Header } from "../Header/Header";

export const Appointment = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-4 items-center justify-center p-4">
        <h1 className="text-4xl font-bold">CITAS</h1>
        <table className="min-w-full bg-white shadow-md overflow-hidden">
          <thead>
            <tr className="bg-blue-100 text-left text-gray-700 text-sm uppercase font-semibold">
              <th className="px-6 py-4">Citas ID</th>
              <th className="px-6 py-4">Doctor</th>
              <th className="px-6 py-4">Fecha</th>
              <th className="px-6 py-4">Hora</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            <tr className="border-b hover:bg-gray-100 transition-colors">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">Dr. John Doe</td>
              <td className="px-6 py-4">28-05-2025</td>
              <td className="px-6 py-4">10:00 AM</td>
              <td className="py-4 flex">
                <input type="radio" />
              </td>
            </tr>
            <tr className="border-b hover:bg-gray-100 transition-colors">
              <td className="px-6 py-4">2</td>
              <td className="px-6 py-4">Dr. Jane Smith</td>
              <td className="px-6 py-4 dtext-gray-400 italic" colSpan={2}>
                Información no disponible
              </td>
              <td className="py-4 flex">
                <input type="radio" />
              </td>
            </tr>
            <tr className="border-b hover:bg-gray-100 transition-colors">
              <td className="px-6 py-4">3</td>
              <td className="px-6 py-4">Dra. Laura Pérez</td>
              <td className="px-6 py-4">30-08-2025</td>
              <td className="px-6 py-4">09:30 AM</td>
              <td className="py-4 flex">
                <input type="radio" />
              </td>
            </tr>
            <tr className="border-b hover:bg-gray-100 transition-colors">
              <td className="px-6 py-4">4</td>
              <td className="px-6 py-4">Dr. Carlos Ruiz</td>
              <td className="px-6 py-4">01-09-2025</td>
              <td className="px-6 py-4">11:15 AM</td>
              <td className="py-4 flex">
                <input type="radio" />
              </td>
            </tr>
            <tr className="border-b hover:bg-gray-100 transition-colors">
              <td className="px-6 py-4">5</td>
              <td className="px-6 py-4">Dra. Mariana Gómez</td>
              <td className="px-6 py-4">03-09-2025</td>
              <td className="px-6 py-4">02:45 PM</td>
              <td className="py-4 flex">
                <input type="radio" />
              </td>
            </tr>
          </tbody>
        </table>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer">
          CONFIRMAR CITA
        </button>
      </div>
    </div>
  );
};
