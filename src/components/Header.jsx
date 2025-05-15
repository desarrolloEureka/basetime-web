import Link from 'next/link';

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0  bg-[#1C1C1C] mb-5 ">
      <div className="p-4 bg-[#030303] text-white shadow-md mt-4 rounded-2xl mx-5 flex items-center justify-between">
        {/* Logo a la izquierda */}
        <img src="/images/Logo.png" alt="BaseTime Logo" className="h-13" />

        {/* Enlaces centrados */}
        <nav className="flex justify-center space-x-8 flex-grow mr-36">
          <Link href="/home" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link href="/terms" className="hover:text-blue-400 transition-colors">
            Términos y Condiciones
          </Link>
          <Link href="/delete_data" className="hover:text-blue-400 transition-colors">
            Eliminar Cuenta
          </Link>
        </nav>
      </div>
    </div>
  );
}
