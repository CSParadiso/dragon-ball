// app/controllers/external_api_controller.ts
import type { HttpContext } from '@adonisjs/core/http'

export default class PersonajesController {
  async index({ view }: HttpContext) {
    const res = await fetch('https://dragonball-api.com/api/planets?limit=100')
    const data = await res.json()

    return view.render('pages/planetas/home', {
      planetas: data.items ?? data,
    })
  }
  async show({ params, view }: HttpContext) {
    const res = await fetch(`https://dragonball-api.com/api/planets/${params.id}`)

    if (!res.ok) {
      throw new Error('Character not found')
    }

    const planeta = await res.json()

    return view.render('pages/planetas/detalle', {
      planeta,
    })
  }
}
