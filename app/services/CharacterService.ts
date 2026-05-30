
import { DragonBallApiResponse } from '../interfaces/Character'

export default class CharacterService {
  private static baseUrl = 'https://dragonball-api.com/api'

  /**
   * Obtiene la lista de personajes con soporte para paginación
   */
  public static async getCharacters(page: number = 1, limit: number = 10): Promise<DragonBallApiResponse | null> {
    try {
      const response = await fetch(`${this.baseUrl}/characters?page=${page}&limit=${limit}`)
      
      if (!response.ok) {
        throw new Error(`Error en la API externa: ${response.statusText}`)
      }

      const data = await response.json() as DragonBallApiResponse
      return data
      
    } catch (error) {
      console.error('Error obteniendo personajes de Dragon Ball:', error)
      return null // O manejar el error según las necesidades de tu app
    }
  }
}