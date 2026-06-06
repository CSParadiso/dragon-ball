// app/controllers/external_api_controller.ts
import type { HttpContext } from '@adonisjs/core/http'

export default class GetPlantetasPersonajes {
  async show({ params, view }: HttpContext) {
    const res = await fetch(`https://dragonball-api.com/api/planets/${params.id}`)

    if (!res.ok) {
      throw new Error('Character not found')
    }

    const planeta = await res.json()

    return view.render('pages/planetas/personajes_planeta', {
      personajes: planeta.characters,
      plantea_name:planeta.name, // Aquí se asume que la API devuelve un campo "characters" con los personajes relacionados al planeta
    })
  }
}
