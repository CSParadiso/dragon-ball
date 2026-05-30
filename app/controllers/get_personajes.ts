// app/controllers/external_api_controller.ts
import type { HttpContext } from '@adonisjs/core/http'

interface Character {
  id: number
  name: string
  ki: string
  maxKi: string
  race: string
  gender: string
  description: string
  image: string
  affiliation: string
}

interface DragonBallApiResponse {
  items: Character[]
  meta: {
    totalItems: number
    itemCount: number
    itemsPerPage: number
    totalPages: number
    currentPage: number
  }
}

export default class ExternalApiController {
  async index({ view }: HttpContext) {
    try {
      const res = await fetch('https://dragonball-api.com/api/characters')

      if (!res.ok) {
        throw new Error('Error al obtener los personajes')
      }

      const data = (await res.json()) as DragonBallApiResponse

      return view.render('pages/personajes/home', {
        personajes: data.items,
      })
    } catch (error) {
      console.error(error)

      return view.render('pages/personajes/home', {
        personajes: [],
        error: 'No se pudieron cargar los personajes',
      })
    }
  }
}
