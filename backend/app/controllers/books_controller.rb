class BooksController < ApplicationController
  skip_before_action :validate_token, only: %i[index]
  before_action :find_book, only: %i[update destroy show]

  def index
    search = Book.search(filter_params)

    @books_count = search.count
    @books = search.paginate(filter_params[:page])
  end

  def create
    @book = Book.create(book_params)

    return render status: :created if @book.save

    render_errors
  end

  def show; end

  def update
    return if @book.update(book_params)

    render_errors
  end

  def destroy
    @book.destroy!
  end

  private

  def render_errors
    render json: { errors: @book.errors.messages }, status: :unprocessable_entity
  end

  def find_book
    @book = Book.find(params[:id])
  end

  def book_params
    params.permit(:title, :author, :description, :image_url)
  end

  def filter_params
    params.permit(:search, :orderBy, :direction, :page)
  end
end
