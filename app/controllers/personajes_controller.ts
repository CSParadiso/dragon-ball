// app/controllers/get_personajes_controller.ts

import type { HttpContext } from '@adonisjs/core/http'

export default class GetPersonajesController {
  async show({ params, view }: HttpContext) {
    const res = await fetch(`https://dragonball-api.com/api/characters/${params.id}`)

    if (!res.ok) {
      throw new Error('Character not found')
    }

    const personaje = await res.json()

    return view.render('pages/personajes/detalle', {
      personaje,
    })
  }
}
