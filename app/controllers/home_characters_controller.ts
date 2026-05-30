// app/Controllers/Http/HomeController.ts
import { HttpContext } from '@adonisjs/core/http'
import CharacterService from '#services/CharacterService'

export default class HomeController {
  public async index({ request, view, response }: HttpContext) {
    // Obtenemos la página actual desde la URL (ej: /home?page=2), por defecto es 1
    const page = request.input('page', 1)
    
    // Llamamos al servicio
    const apiData = await CharacterService.getCharacters(page)

    if (!apiData) {
      // Manejo de error si la API falla
      return response.status(500).send('Error al cargar la información')
    }

    // SI USAS VISTAS EDGE (Fullstack AdonisJS):
    return view.render('home', {
      characters: apiData.items,
      meta: apiData.meta,
      links: apiData.links
    })

    // SI USAS ADONISJS SOLO COMO API (Frontend en React/Vue/Angular):
    // return response.json(apiData)
  }
}