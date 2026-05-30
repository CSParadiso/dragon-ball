import type { HttpContext } from '@adonisjs/core/http'

interface Character {
  id: number
  name: string
  race: string
  image: string
  ki: string
  maxKi: string
  gender: string
  description: string
  affiliation: string
}

export default class GetPersonajesController {
  async show({ params, view }: HttpContext) {
    try {
      const res = await fetch(`https://dragonball-api.com/api/characters/${params.id}`)

      if (!res.ok) {
        throw new Error('Personaje no encontrado')
      }

      const personaje = (await res.json()) as Character

      return view.render('pages/personajes/detalle',{personaje})
    } catch (error) {
      return view.render('pages/personajes/detalle',{error: 'No se pudo cargar el personaje'}) 
   }
  }
}