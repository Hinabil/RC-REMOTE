import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex flex-col">
     
      {/* Konten halaman */}
      <main className="flex-grow flex items-center justify-center p-4">
        <Outlet />
      </main>
    </div>
  );
}
