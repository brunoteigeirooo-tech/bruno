export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-6">
      <div className="text-lg font-semibold tracking-tight">
        BRUNO TEIGEIRO
      </div>

      <div className="flex items-center gap-8 text-sm text-zinc-600">
        <a href="#perfil" className="hover:text-black transition">
          Perfil
        </a>

        <a href="#experiencia" className="hover:text-black transition">
          Experiencia
        </a>

        <a href="#contacto" className="hover:text-black transition">
          Contacto
        </a>

        <button className="border rounded-full px-4 py-2 hover:bg-black hover:text-white transition">
          ES / EN
        </button>
      </div>
    </nav>
  );
}