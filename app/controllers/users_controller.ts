import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  /**
   * Return list of all users or paginate through
   * them
   */
  async index({ inertia }: HttpContext) {
    return inertia.render('users/index', {
      users: await User.all(),
    })
  }

  /**
   * Handle form submission to create a new user
   */
  async store({ request, response }: HttpContext) {
    const data = request.only(['fullName', 'email', 'password'])
    await User.create(data)
    return response.redirect().toRoute('users.index')
  }

  /**
   * Display a single user by id.
   */
  async show({ params }: HttpContext) {}

  /**
   * Handle the form submission to update a specific user by id
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Handle the form submission to delete a specific user by id.
   */
  async destroy({ params }: HttpContext) {}
}
