/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

let renderCount = 0
let refreshCount1 = 0
let refreshCount2 = 0
let lazyCount = 0

const UsersController = () => import('#controllers/users_controller')

router.on('/').renderInertia('home', { stuff: 'props data' })

router.get('/users', [UsersController, 'index'])

router.get('/login', async (ctx) => {
  return ctx.inertia.render('auth/login', {
    renderCount: ++renderCount,
    refreshCount1: () => ++refreshCount1,
    refreshCount2: () => ++refreshCount2,
    lazyCount: ++lazyCount,
  })
})
