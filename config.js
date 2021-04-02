const ownerNumber = ["50379210905@s.whatsapp.net"]
 // cambie solo el número y no elimine @ s.whatsapp.net

 const OriginalOwner = '50379210905'
 // cambia a tu número

 const cr = '꧁✭̶ᎦᏫᎿᏰᏫᎿ ♛۝꧂ \ n'
 // texto del símbolo verificado

 conts prefix = '!'
 // prefijo

 const msgerr = 'Hubo un error, inténtelo de nuevo: /'
 // mensaje de error

 const apiTobz = 'clave'
 // para obtener la clave de Tobz ve al número
 //wa.me/50379210905 registrarse con el bot
 // y luego escriba #generateapikey que el
 // tobz bot generará tu clave

 let mess = {
     wait: '⌛ Espera un minuto ... ⌛',
     success: '✔️ ¡Éxito!  ✔️ ',
     error: {
         stick: '❌ Falló, hubo un error al convertir la imagen en una pegatina ❌',
         Iv: '❌ Enlace no válido ❌'
     },
     only: {
         group: '❌ ¡Este comando solo se puede usar en grupos!  ❌ ',
         ownerG: '❌ ¡Este comando solo puede ser utilizado por el grupo propietario!  ❌ ',
         ownerB: '❌ ¡Este comando solo puede ser utilizado por el número de propietario!  ❌ ',
         admin: '❌ COMMON MEMBER SILENCE VC NO TIENE LA MORAL PARA USAR ESTE COMANDO ❌',
         Badmin: '❌ ¡Este comando solo se puede usar cuando el bot se convierte en administrador!  ❌ '
     }
 }

 const vcard = 'BEGIN:VCARD \ n'
 + 'VERSIÓN: 3.0 \ n'
 + 'FN: Mi creador ^ ~ ^ \ n'
 + 'ORG: Ian; \ n'
 + 'TEL; tipo = CELDA; tipo = VOZ; waid = 50379210905: +50379210905\ n'
 + 'END:VCARD'
 // vcard del propietario, cambia los números según el formato
 // coincide

 exports.msgerr = msgerr
exports.mess = mess
exports.apiTobz = apiTobz
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber