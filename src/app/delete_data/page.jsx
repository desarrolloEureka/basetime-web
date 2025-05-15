'use client'
import Header from '@/components/Header'
import Layout from '@/components/layout'

export default function DeleteAccountPage() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
     <Header />
      <div className="flex flex-col items-center justify-center flex-grow pt-24 py-4 overflow-y-auto pb-8">
        <div className="w-[70%] mx-auto bg-[#3E3E3E] rounded-lg shadow-md p-6 mt-5 space-y-6 text-white">
          <h2 className="text-xl font-semibold">Solicitud para borrar mi cuenta</h2>
          <p>
            Si eres usuario de <strong>BASETIME APP by Eureka Dreams</strong> y deseas solicitar la eliminación de tus datos personales, por favor completa el siguiente formulario. Una vez que recibamos tu solicitud, nuestro equipo la revisará y te responderá por correo electrónico dentro de los 2 días hábiles confirmando la eliminación de tus datos. ¡Gracias por confiar en BASETIME APP!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block mb-1" htmlFor="name">Nombre</label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-3 py-2 rounded-md bg-[#2e2e2e] border border-gray-600 text-white"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-1" htmlFor="lastname">Apellido</label>
                <input
                  id="lastname"
                  type="text"
                  className="w-full px-3 py-2 rounded-md bg-[#2e2e2e] border border-gray-600 text-white"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 rounded-md bg-[#2e2e2e] border border-gray-600 text-white"
              />
            </div>

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-md mt-2"
            >
              Enviar solicitud
            </button>
          </form>

          <h2 className="text-xl font-semibold">Política de eliminación de datos: aplicación BASETIME APP</h2>
          <p>
            En <strong>BASETIME APP by Eureka Dreams</strong> respetamos tu privacidad y tu derecho a gestionar tus datos personales.
          </p>
          <p>
            <strong>Cómo funciona:</strong> Los usuarios pueden solicitar la eliminación de sus datos personales en cualquier momento completando el formulario de esta página. Una vez enviada la solicitud, nuestro equipo la revisará y confirmará su identidad en función de la información proporcionada.
          </p>
          <p>
            Eliminaremos todos los datos personales asociados con su cuenta, incluida la información de su perfil, los datos de su mascota y su historial de uso. Después de completar el proceso de eliminación, le enviaremos una confirmación por correo electrónico dentro de los 2 días hábiles.
          </p>
          <p>
            <strong>Importante:</strong> una vez eliminados, sus datos no se pueden recuperar. Si tiene alguna pregunta sobre esta política, contáctenos en: <a href="mailto:support@basetime-app.com" className="underline text-blue-400">support@basetime-app.com</a>
          </p>
        </div>
      </div>
      <Layout />
    </>
  )
}
