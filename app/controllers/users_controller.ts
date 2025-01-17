import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  index({ inertia }: HttpContext) {
    return inertia.render('users/index', {
      users: [
        { id: 1, name: 'Jane Doe' },
        { id: 2, name: 'John Doe' },
        { id: 3, name: 'Foo Bar' },
      ],
    })
  }
}
