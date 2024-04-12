export default function Principal() {
  return (
    <main className="h-screen w-screen gap-2 flex ">
      <div className="h-screen w-1/2 flex flex-col justify-center items-center ">
        <div className="flex items-start">
          <img
            src="/logo UTM-01.png"
            alt="UTM Go"
            width={300}
            height={300}
          />
        </div>
        <div className="">
          <p className="font-black">Inicio de sesión</p>
          <div className="flex flex-col space-y-5">
            <input className="border-2 border-gray-300 p-2 rounded-md" type="text" placeholder="Usuario" />
            <input className="border-2 border-gray-300 p-2 rounded-md" type="password" placeholder="Contraseña" />
            <button className="bg-[#00A886] text-white p-2 rounded-md">Iniciar sesión</button>
          </div>
          <div className="flex items-center space-x-5">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember" style={{ color: '#00A886' }}>Recuerdame</label>
          </div>
        </div>
      </div>

      
      <div className="h-screen w-1/2 bg-[#00A886] flex justify-center items-center object-contain">
        <img
          src="/vinculacion.jpg"
          alt="UTM Go"
          className="object-contain "
          width={800}
          height={800}
        />
      </div>
    </main>
  );
}