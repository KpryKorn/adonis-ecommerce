import Produit from '#models/produit'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProduitsController {
  /**
   * Display a list of resource
   */
  async index({ inertia }: HttpContext) {
    return inertia.render('produits/index', {
      produits: await Produit.all(),
    })
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const data = request.only(['nom', 'description', 'prix', 'stock', 'image'])
    await Produit.create(data)
    return response.redirect().toRoute('produits.index')
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
