class TitlesController < ApplicationController
  before_action :set_title, only: [:show, :update, :destroy]

  def app 
    render component: "App"
  end

  # Following James lesson, below should all render json
  def index
    render json: Book.all
  end

  def show
    render json: @title
  end

  def create
    @title = Book.new(title_params)
    if (@title.save)
      render json: @title
    else
      render json: {errors: @title.errors.full_messages}, status: 422
    end
  end

  def update
    if (@title.update(title_params))
      render json: @title
    else
      render json: {errors: @title.errors.full_messages}, status: 422
    end
  end

  def destroy
    render json: @title.destroy
  end

  private

  def set_title
    @title = Book.find(params[:id])
  end

  def title_params
    params.require(:title).permit(:book_name, :author, :genre)
  end
end
