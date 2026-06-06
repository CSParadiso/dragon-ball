/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home').as('home') // resources/view/page/home.edge
/* router.on('/personajes').render('pages/personajes/home').as('personajes') */
//router.get('personajes', [controllers.GetPersonajes, 'index'])
/* router.on('/planetas').render('pages/planetas/home').as('planetas') */
/* router.on('/personajes/detalles').render('pages/personajes/detalle').as('personajesDetalle') */
/* router.on('/planetas/detalles').render('pages/planetas/detalle').as('planetaDetalle') */

// Pasarle valores a la vista de personajes
/* router.get('/personajes', async (ctx) => {
  const personajes = [controllers.GetPersonajes, 'index']
  return ctx.view.render('pages/personajes/home', { personajes })
}) */

/* Este en realidad no es un controlador de por sí, sinó una petición a una API externa */
router.get('/personajes', [controllers.GetPersonajes, 'index'])

router.get('/personajes/:id', [controllers.Personajes, 'show'])

router.get('/planetas', [controllers.GetPlanetas, 'index'])
router.get('/planetas/:id', [controllers.GetPlanetas, 'show'])
router.get('/planetas/:id/personajes', [controllers.GetPlanetasPersonajes, 'show']).as('planetasPersonajes')



// Indicar router.metodo(url, [controlador.Clase, metodoAInvocar])
router
  .group(() => {
    router.get('signup', [controllers.NewAccount, 'create'])
    router.post('signup', [controllers.NewAccount, 'store'])

    router.get('login', [controllers.Session, 'create'])
    router.post('login', [controllers.Session, 'store'])
  })
  .use(middleware.guest())

router
  .group(() => {
    router.post('logout', [controllers.Session, 'destroy'])
  })
  .use(middleware.auth())
