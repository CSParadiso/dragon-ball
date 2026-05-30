import type { HttpContext } from '@adonisjs/core/http'

export default class GetPersonajesDetallesController {
  async index({ response, view, params }: HttpContext) {
    try {
      // Realizamos la petición a la API externa
      console.log(params.id)
      const res = await fetch(`https://dragonball-api.com/api/characters/${params.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        // 'Authorization': 'Bearer TU_TOKEN' // Si necesitas autenticación
        },
    })

    // Verificamos si la respuesta fue exitosa
    if (!res.ok) {
        return response.status(res.status).send({ error: 'Error al conectar con la API' })
    }

    // Parseamos el JSON
    const data = await res.json()

    // Retornamos los datos obtenidos
    //return response.ok(data)
      return view.render('pages/personajes/detalle', { data })
    } catch (error) {
    return response.internalServerError({
        message: 'Error en la comunicación',
        error: error.message,
    })
    }
}
}
