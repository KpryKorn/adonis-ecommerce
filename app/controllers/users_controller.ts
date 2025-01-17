import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  /**
   * Return list of all users or paginate through
   * them
   */
  async index({ inertia }: HttpContext) {
    return inertia.render('users/index', {
      users: [{ id: 1, name: 'John Doe' }],
    })
  }

  /**
   * Render the form to create a new user.
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission to create a new user
   */
  async store({ request }: HttpContext) {}

  /**
   * Display a single user by id.
   */
  async show({ params }: HttpContext) {}

  /**
   * Render the form to edit an existing user by its id.
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle the form submission to update a specific user by id
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Handle the form submission to delete a specific user by id.
   */
  async destroy({ params }: HttpContext) {}
}
