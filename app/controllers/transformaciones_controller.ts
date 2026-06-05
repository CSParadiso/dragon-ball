import type { HttpContext } from '@adonisjs/core/http'

interface Transformation {
  id: number
  name: string
  image: string
  ki: string
}

interface Character {
  id: number
  name: string
  race: string
  gender: string
  ki: string
  maxKi: string
  affiliation: string
  description: string
  image: string
  transformations: Transformation[]
}

export default class TransformationsController {

  async transformations({ params, view, response }: HttpContext) {
    const apiResponse = await fetch(`https://dragonball-api.com/api/characters/${params.id}`)

    if (!apiResponse.ok) {
      return response.notFound('No se encontró el personaje')
    }

    const character = (await apiResponse.json()) as Character

    return view.render('pages/transformaciones/detalle', { character })
  }
}