'use strict'

const Post = use( 'App/Models/Post' )

/**
 * Resourceful controller for interacting with posts
 */
class PostController {
  /**
   * Show a list of all posts.
   * GET posts
   */
  async index( { request, response, view } ) {
    // await Post.create({
    //   title: '1111111111',
    //   content: '22222222222222222222'
    // })
    return await Post.query().fetch()
  }

  /**
   * Render a form to be used for creating a new post.
   * GET posts/create
   */
  async create( { request, response, view } ) {
  }

  /**
   * Create/save a new post.
   * POST posts
   */
  async store( { request, response } ) {
    const model = await Post.create( request.all() )
    return model
  }

  /**
   * Display a single post.
   * GET posts/:id
   */
  async show( { params, request, response, view } ) {
    return await Post.findOne( params.id )
  }

  /**
   * Render a form to update an existing post.
   * GET posts/:id/edit
   */
  async edit( { params, request, response, view } ) {
  }

  /**
   * Update post details.
   * PUT or PATCH posts/:id
   */
  async update( { params, request, response } ) {
    const model = await Post.find(params.id)
    model.fill(request.all())
    await model.save()
    return model
  }

  /**
   * Delete a post with id.
   * DELETE posts/:id
   */
  async destroy( { params, request, response } ) {
  }
}

module.exports = PostController
