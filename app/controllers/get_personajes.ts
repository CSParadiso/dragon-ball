// app/controllers/external_api_controller.ts
import type { HttpContext } from '@adonisjs/core/http'

export default class PersonajesController {
  async index({ view }: HttpContext) {
    const res = await fetch('https://dragonball-api.com/api/characters?limit=100')
    const data = await res.json()

    return view.render('pages/personajes/home', {
      personajes: data.items ?? data,
    })
  }
}
