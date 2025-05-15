import Header from '@/components/Header'
import Layout from '@/components/layout'

export default function TermsPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow pt-24 py-4 overflow-y-auto pb-8">
        <div className="w-[70%] mx-auto bg-[#3E3E3E] rounded-lg shadow-md p-6 mt-5">
          <h1 className="text-3xl font-bold text-center mb-6">Términos y Condiciones de Uso</h1>
          <p className="text-lg mb-6">
            En un mundo donde exploramos el espacio y avanzamos en la tecnología, BASETIME APP redefine cómo valoramos nuestro tiempo. Al reconocer cada momento como un recurso valioso, nuestra plataforma permite a los usuarios transformar sus habilidades en oportunidades reales de generación de ingresos.
          </p>
          <p className="text-lg mb-6">
            BASETIME APP ofrece un espacio donde puedes monetizar tus talentos a través de servicios y contratos legales. Nuestro sistema fomenta la creación de una red conectada, donde al invitar a otros, no solo amplías tus oportunidades, sino también generas ingresos adicionales y pasivos.
          </p>
          <p className="text-lg mb-6">
            Únete a BASETIME APP y descubre cómo maximizar el valor de tu tiempo en un universo lleno de posibilidades. Cada instante cuenta.
          </p>
          <h2 className="text-2xl font-semibold mb-4 mt-5">1. Aceptación del Acuerdo</h2>
          <p className="text-lg mb-4">
            Al crear una cuenta en BASETIME APP o utilizar cualquier servicio ofrecido por BASETIME APP, ya sea a través de un dispositivo móvil, aplicación móvil o computadora (colectivamente, el “Servicio”), usted acepta estar sujeto a:
          </p>
          <ul className="list-inside list-disc pl-6 mb-6">
            <li className="text-lg mb-2">Los presentes Términos y Condiciones de Uso.</li>
            <li className="text-lg mb-2">Nuestra Política de Privacidad y Consejos de Seguridad, incorporados por referencia en este Acuerdo.</li>
            <li className="text-lg mb-2">Cualquier término adicional que le haya sido comunicado y aceptado al adquirir características, productos o servicios adicionales ofrecidos en el Servicio (colectivamente, este “Acuerdo”).</li>
          </ul>
          <p className="text-lg mb-6">
            Si no acepta y acuerda regirse por todos los términos de este Acuerdo, no podrá utilizar el Servicio.
          </p>
          <h2 className="text-2xl font-semibold mb-4 mt-5">Modificaciones al Acuerdo:</h2>
          <p className="text-lg mb-6">
            BASETIME APP se reserva el derecho de modificar este Acuerdo y el Servicio en cualquier momento. Las modificaciones pueden ser realizadas para reflejar cambios en la legislación colombiana o de los países donde opere BASETIME APP, nuevas funcionalidades o cambios en las prácticas comerciales. La versión más reciente del Acuerdo será publicada en el Servicio bajo Configuración, y se recomienda revisarla periódicamente.
          </p>
          <p className="text-lg mb-6">
            Si los cambios incluyen modificaciones sustanciales que afecten sus derechos u obligaciones, se le notificará con antelación a través del Servicio o por correo electrónico. Si continúa utilizando el Servicio después de que los cambios entren en vigor, se entenderá que acepta el Acuerdo revisado.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-5">2. Elegibilidad</h2>
          <p className="text-lg mb-6">
            Para crear una cuenta en BASETIME APP y utilizar el Servicio, debe cumplir con los siguientes requisitos:
          </p>
          <ol className="list-inside list-decimal pl-6 mb-6">

            <li className="text-lg mb-2">Tener al menos 18 años de edad.</li>
            <li className="text-lg mb-2">Ser capaz de celebrar un acuerdo vinculante con BASETIME APP.</li>
            <li className="text-lg mb-2">No estar prohibido de usar el Servicio bajo las leyes de la República de Colombia.</li>
            <li className="text-lg mb-2">Cumplir con este Acuerdo y todas las leyes, normas y reglamentos locales, nacionales e internacionales aplicables.</li>
            <li className="text-lg mb-2">No haber sido condenado por un delito grave, delito sexual o cualquier otro delito violento.</li>
          </ol>

          <h2 className="text-2xl font-semibold mb-4 mt-5">3. Registro de Usuario</h2>

          <p className="text-lg mb-4">a. <strong>Proceso de Registro:</strong></p>
          <ul className="list-inside list-decimal pl-6 mb-6">
            <li className="text-lg mb-2">Descargue la aplicación a través de Apple Store o Play Store.</li>
            <li className="text-lg mb-2">Cree una cuenta proporcionando la siguiente información:
              <ul className="list-inside list-disc pl-6 mt-2">
                <li className="text-lg">Nombre.</li>
                <li className="text-lg">Nombre de Usuario (único e irrepetible).</li>
                <li className="text-lg">Cédula de Ciudadanía (CC) o Identificación (ID).</li>
                <li className="text-lg">Fecha de Nacimiento.</li>
                <li className="text-lg">Correo Electrónico.</li>
                <li className="text-lg">Invitado por (opcional).</li>
              </ul>
            </li>
            <li className="text-lg mb-2">Acepte los Términos y Condiciones y las Políticas de Privacidad.</li>
          </ul>

          <p className="text-lg mb-4">b. <strong>Verificación de Identidad:</strong></p>
          <p className="text-lg mb-6">
            Para garantizar la autenticidad de los usuarios y los servicios ofrecidos, BASETIME APP requiere la subida de dos fotos:
          </p>
          <ul className="list-inside list-decimal pl-6 mb-6">
            <li className="text-lg mb-2">Foto del ID por ambos lados.</li>
            <li className="text-lg mb-2">Foto del usuario sosteniendo el ID junto a su cara.</li>
          </ul>
          <p className="text-lg mb-6">
            Una vez subidos los documentos, la administración verificará la información y aprobará o rechazará la creación de la cuenta.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-5">4. Conducta del Usuario</h2>
          <p className="text-lg mb-6">
            Los usuarios de BASETIME APP deben adherirse a las siguientes normas de conducta:
          </p>
          <ol className="list-inside list-decimal pl-6 mb-6">
            <li className="text-lg mb-2">
              <strong>Respeto y Cortesía:</strong> Tratar a todos los miembros de la comunidad con respeto. No se tolerarán comportamientos abusivos, ofensivos o discriminatorios.
            </li>
            <li className="text-lg mb-2">
              <strong>Cumplimiento de la Ley:</strong> Actuar conforme a las leyes y regulaciones aplicables en su jurisdicción.
            </li>
            <li className="text-lg mb-2">
              <strong>Integridad y Honestidad:</strong> Proporcionar información verdadera y precisa en la creación de cuentas y durante la interacción con otros usuarios.
            </li>
            <li className="text-lg mb-2">
              <strong>Uso Adecuado de la Plataforma:</strong> Utilizar la plataforma exclusivamente para fines legales y autorizados, evitando actividades fraudulentas o engañosas. Solo se pueden ofrecer y vender servicios personales, técnicos o profesionales que estén permitidos por la ley.
            </li>
          </ol>

          <h2 className="text-2xl font-semibold mb-4 mt-5">5. Propiedad Intelectual</h2>

          <p className="text-lg mb-4">a. <strong>Derechos de Autor:</strong></p>
          <p className="text-lg mb-6">
            Todos los contenidos, marcas, logos y otros elementos visuales o escritos de la plataforma están protegidos por derechos de autor y no pueden ser utilizados sin autorización previa.
          </p>

          <p className="text-lg mb-4">b. <strong>Contenido del Usuario:</strong></p>
          <p className="text-lg mb-6">
            Los usuarios conservan los derechos sobre el contenido que suben a la plataforma. Sin embargo, al publicar contenido, otorgan a BASETIME APP una licencia no exclusiva para usar, modificar y mostrar dicho contenido dentro de la plataforma.
          </p>

          <p className="text-lg mb-4">c. <strong>Uso de Material de Terceros:</strong></p>
          <p className="text-lg mb-6">
            Los usuarios se comprometen a no subir o compartir contenido que infrinja los derechos de propiedad intelectual de terceros.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-5">6. Limitación de Responsabilidad</h2>
          <p className="text-lg mb-4">
            BASETIME APP actúa únicamente como intermediario facilitando el contacto entre usuarios para la prestación de servicios. No somos responsables por:
          </p>
          <ol className="list-decimal list-inside pl-6 mb-6">
            <li className="text-lg mb-2">La calidad, legalidad o seguridad de los servicios ofrecidos.</li>
            <li className="text-lg mb-2">Cualquier delito cometido durante la prestación de servicios legales vendidos a través de la plataforma.</li>
            <li className="text-lg mb-2">La información falsa proporcionada por los usuarios.</li>
          </ol>

          <h2 className="text-2xl font-semibold mb-4 mt-5">7. Suspensión y Terminación de Cuentas</h2>
          <p className="text-lg mb-4">
            BASETIME APP se reserva el derecho de suspender o terminar cuentas en los siguientes casos:
          </p>
          <ol className="list-decimal list-inside pl-6">
            <li className="text-lg mb-2">Incumplimiento de tres o más contratos.</li>
            <li className="text-lg mb-2">Reiteradas denuncias y malos comentarios.</li>
            <li className="text-lg mb-2">Provisión de información personal falsa o documentos de identificación falsos.</li>
            <li className="text-lg mb-2">Denuncias reiteradas contra la cuenta.</li>
          </ol>

          <h2 className="text-2xl font-semibold mb-4 mt-5">8. Ley Aplicable</h2>
          <p className="text-lg">
            Este Acuerdo se rige por las leyes de la República de Colombia. Cualquier disputa que surja en relación con este Acuerdo o el Servicio estará sujeta a la jurisdicción colombiana.
          </p>


          {/*  */}

          <h2 className="text-2xl font-semibold mb-4 mt-6">Políticas de Privacidad</h2>

          <h3 className="text-xl font-semibold mb-2">1. Información Recopilada</h3>
          <h4 className="text-lg font-semibold mb-1">a. Información Personal:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Nombre, dirección de correo electrónico, detalles de pago y otros datos proporcionados durante el registro o transacciones.</li>
          </ul>
          <h4 className="text-lg font-semibold mb-1">b. Información de Uso:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Datos sobre cómo interactúa con la plataforma, incluidas las páginas visitadas, el tiempo de uso y las transacciones realizadas.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">2. Uso de la Información</h3>
          <h4 className="text-lg font-semibold mb-1">a. Mejora del Servicio:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Utilizamos la información para mejorar y personalizar su experiencia.</li>
          </ul>
          <h4 className="text-lg font-semibold mb-1">b. Comunicación:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Enviar notificaciones, actualizaciones y ofertas promocionales (con su consentimiento).</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">3. Compartición de Datos</h3>
          <h4 className="text-lg font-semibold mb-1">a. Proveedores de Servicios:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Compartimos datos con terceros de confianza que nos asisten en la operación de la plataforma.</li>
          </ul>
          <h4 className="text-lg font-semibold mb-1">b. Cumplimiento Legal:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Compartimos datos cuando sea necesario para cumplir con la ley o responder a procedimientos legales.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">4. Seguridad de la Información</h3>
          <h4 className="text-lg font-semibold mb-1">a. Medidas de Seguridad:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Implementamos medidas técnicas y organizativas para proteger su información.</li>
          </ul>
          <h4 className="text-lg font-semibold mb-1">b. Cifrado de Datos:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Utilizamos tecnologías de cifrado para proteger la información sensible durante su transmisión.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">5. Derechos del Usuario</h3>
          <h4 className="text-lg font-semibold mb-1">a. Acceso y Rectificación:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Puede acceder a su información personal y solicitar correcciones.</li>
          </ul>
          <h4 className="text-lg font-semibold mb-1">b. Eliminación de Datos:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Puede solicitar la eliminación de su información personal, sujeto a las leyes aplicables.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Condiciones de Pago</h2>

          <h3 className="text-xl font-semibold mb-2">1. Métodos de Pago</h3>
          <p className="text-lg mb-2">BASETIME APP acepta los siguientes métodos de pago a través de WOMPI:</p>
          <ul className="list-disc list-inside mb-6">
            <li>Tarjetas de Crédito o Débito (Visa, Mastercard, Amex).</li>
            <li>Transferencias Bancarias (PSE, Bancolombia).</li>
            <li>Pagos en Efectivo (Corresponsales Bancarios).</li>
            <li>Pagos Móviles (Nequi, Daviplata).</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">2. Políticas de Reembolso</h3>
          <p className="text-lg">
            En caso de incumplimiento del servicio, los reembolsos se realizarán en forma de crédito virtual. Si el comprador desea recibir el reembolso en su cuenta de pago inicial, deberá presentar una PQR ante la administración de la aplicación.
          </p>

          <h3 className="text-xl font-semibold mb-2">3. Impuestos</h3>
          <p className="text-lg mb-4">
            WOMPI cobrará el IVA correspondiente sobre la comisión generada por cada transacción. El vendedor es responsable de pagar todos los demás impuestos derivados de las ventas realizadas.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-6">Contrato de Prestación de Servicios</h2>
          <p className="text-lg mb-4">
            Al realizar una transacción en BASETIME APP, ya sea como proveedor de servicios (vendedor) o como contratante (comprador), usted acepta automáticamente los términos de este Contrato de Prestación de Servicios (en adelante, el "Contrato"). Este Contrato se entiende firmado y es vinculante para ambas partes con cada compraventa de servicios realizada a través de la plataforma.
          </p>

          <h3 className="text-xl font-semibold mb-2">1. Partes del Contrato</h3>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Proveedor de Servicios (Vendedor):</strong> El usuario que ofrece y vende un servicio a través de la plataforma.</li>
            <li><strong>Contratante (Comprador):</strong> El usuario que adquiere y paga por un servicio ofrecido en la plataforma.</li>
            <li><strong>BASETIME APP:</strong> La plataforma que actúa como intermediario para facilitar la conexión entre el Proveedor de Servicios y el Contratante.</li>
          </ul>

          <hr className="my-8 border-t border-gray-300" />

          <h3 className="text-xl font-semibold mb-2">2. Objeto del Contrato</h3>
          <p className="text-lg mb-2">
            El objeto de este Contrato es la prestación de un servicio específico ofrecido por el Proveedor de Servicios y adquirido por el Contratante a través de la plataforma BASETIME APP. El servicio se entenderá definido por:
          </p>
          <ol className="list-decimal list-inside mb-4 pl-4">
            <li className="mb-2">
              La descripción publicada en la tarjeta de publicidad del servicio, la cual debe incluir:
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Nombre del servicio.</li>
                <li>Descripción detallada del servicio.</li>
                <li>Precio.</li>
                <li>Plazo de ejecución (si aplica).</li>
                <li>Requisitos o condiciones especiales.</li>
              </ul>
            </li>
            <li>
              Lo pactado en el chat dentro de la aplicación, donde el Proveedor de Servicios y el Contratante pueden acordar detalles adicionales, modificaciones o especificaciones relacionadas con el servicio.
            </li>
          </ol>
          <p className="text-lg mb-4">
            En caso de discrepancia entre lo descrito en la tarjeta de publicidad y lo pactado en el chat, prevalecerá lo acordado en el chat, siempre que no contradiga los términos generales establecidos en la publicación original.
          </p>

          <hr className="my-8 border-t border-gray-300" />

          <h3 className="text-xl font-semibold mb-2">3. Obligaciones del Proveedor de Servicios</h3>
          <ol className="list-decimal list-inside mb-4 pl-4">
            <li>Cumplir con el Servicio: Prestar el servicio de acuerdo con las condiciones, plazos y especificaciones descritas en la publicación.</li>
            <li>Calidad del Servicio: Garantizar que el servicio cumpla con los estándares de calidad razonables y esperados por el Contratante.</li>
            <li>Información Veraz: Proporcionar información veraz y completa sobre el servicio ofrecido.</li>
            <li>Respeto y Profesionalismo: Actuar con respeto, profesionalismo y ética durante la prestación del servicio.</li>
          </ol>

          <hr className="my-8 border-t border-gray-300" />

          <h3 className="text-xl font-semibold mb-2">4. Obligaciones del Contratante</h3>
          <ol className="list-decimal list-inside mb-4 pl-4">
            <li>Pago del Servicio: Pagar el precio acordado por el servicio a través de los métodos de pago disponibles en la plataforma.</li>
            <li>Información Veraz: Proporcionar información veraz y completa necesaria para la prestación del servicio.</li>
            <li>Respeto y Colaboración: Actuar con respeto y colaborar con el Proveedor de Servicios para facilitar la prestación del servicio.</li>
          </ol>

          <hr className="my-8 border-t border-gray-300" />

          <h3 className="text-xl font-semibold mb-2">5. Precio y Forma de Pago</h3>
          <ol className="list-decimal list-inside mb-6 pl-4">
            <li>El precio del servicio será el indicado en la publicación dentro de la plataforma.</li>
            <li>El pago se realizará a través de los métodos de pago disponibles en BASETIME APP (tarjetas de crédito/débito, transferencias bancarias, etc.).</li>
            <li>BASETIME APP retendrá una comisión por la transacción, la cual será descontada del monto total pagado por el Contratante.</li>
          </ol>

          <hr className="my-8 border-t border-gray-300" />

          <h3 className="text-xl font-semibold mb-2">6. Plazo de Ejecución</h3>
          <p className="text-lg mb-4">
            El plazo para la prestación del servicio será el acordado entre el Proveedor de Servicios y el Contratante. Si no se indica un plazo, se entenderá que el servicio será prestado en un tiempo razonable.
          </p>

          <hr className="my-8 border-t border-gray-300" />

          <h3 className="text-xl font-semibold mb-2">7. Cancelación y Reembolsos</h3>
          <ol className="list-decimal list-inside mb-4 pl-4">
            <li>
              <strong>Cancelación por el Contratante:</strong> El Contratante puede cancelar la solicitud del servicio antes de que este haya comenzado. Si el pago ya se ha realizado, se aplicará la política de reembolsos establecida en las Condiciones de Pago de BASETIME APP.
            </li>
            <li>
              <strong>Cancelación por el Proveedor:</strong> El Proveedor de Servicios puede cancelar la prestación del servicio antes de que este haya comenzado, siempre que notifique al Contratante y a BASETIME APP de manera oportuna.
            </li>
            <li>
              <strong>Incumplimiento:</strong> Si el Proveedor de Servicios no cumple con el servicio acordado, el Contratante podrá solicitar un reembolso total o parcial a través de la plataforma.
            </li>
          </ol>

          <hr className="my-8 border-t border-gray-300" />

          <h3 className="text-xl font-semibold mb-2">8. Limitación de Responsabilidad de BASETIME APP</h3>
          <p className="text-lg mb-2">
            BASETIME APP actúa únicamente como intermediario facilitando la conexión entre el Proveedor de Servicios y el Contratante. No somos responsables por:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>La calidad, legalidad o seguridad de los servicios prestados.</li>
            <li>Cualquier incumplimiento por parte del Proveedor de Servicios o del Contratante.</li>
            <li>Cualquier disputa, daño o perjuicio derivado de la prestación del servicio.</li>
          </ul>

          <hr className="my-8 border-t border-gray-300" />

          <h3 className="text-xl font-semibold mb-2">9. Resolución de Disputas</h3>
          <p className="text-lg mb-4">
            En caso de disputas entre el Proveedor de Servicios y el Contratante, BASETIME APP podrá mediar para facilitar una solución amistosa. Si no se llega a un acuerdo, las partes podrán recurrir a los mecanismos de resolución de conflictos establecidos en las leyes de la República de Colombia.
          </p>

          <hr className="my-8 border-t border-gray-300" />

          <h3 className="text-xl font-semibold mb-2">10. Aceptación del Contrato</h3>
          <p className="text-lg mb-6">
            Al realizar una transacción en BASETIME APP, tanto el Proveedor de Servicios como el Contratante aceptan automáticamente los términos de este Contrato. Este Contrato se entiende firmado y es vinculante para ambas partes con cada compra-venta de servicios realizada a través de la plataforma.
          </p>


        </div>
      </div>

      <Layout/>
    </>
  )
}
