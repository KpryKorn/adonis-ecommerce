/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const ProduitsController = () => import('#controllers/produits_controller')
const UsersController = () => import('#controllers/users_controller')

router.on('/').renderInertia('home')

router.resource('/users', UsersController)
router.resource('/produits', ProduitsController)
