class PostsController < ApplicationController
  def index
    posts = Post.order("created_at DESC")
    render json: posts
  end

  def create
    post = Post.create(post_param)
    render json: post
  end

  def update
    post = Post.find(params[:id])
    post.update_attributes(post_param)
    render json :post
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
    head :no_content, status: :ok
  end

  private

  def post_param
    params.require(:post).permit(:name, :description)
  end
end
