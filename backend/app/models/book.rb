class Book < ApplicationRecord
  validates :title, presence: true, allow_blank: false
  validates :title, length: { minimum: 5 }, if: proc { |record| record.title? }

  validates :author, presence: true, allow_blank: false
  validates :author, length: { minimum: 3 }, if: proc { |record| record.author? }

  validates :image_url, presence: true, allow_blank: false

  scope :search, lambda { |params|
                   where('author like ?', "%#{params[:search]}%")
                     .or(where('title like ?', "%#{params[:search]}%").or(
                           where('description like ?', "%#{params[:search]}%")
                         ))
                     .order(order_by(params[:orderBy], params[:direction]))
                 }

  def self.safe_direction(direction)
    %w[asc desc].include?(direction) ? direction : 'asc'
  end

  def self.safe_order(order)
    %w[title author].include?(order) ? order : 'title'
  end

  def self.order_by(order, direction)
    "#{safe_order(order)} #{safe_direction(direction)}"
  end
end
