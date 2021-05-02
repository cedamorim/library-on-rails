class Book < ApplicationRecord
  validates :title, presence: true, allow_blank: false
  validates :title, length: { minimum: 5 }, if: proc { |record| record.title? }

  validates :author, presence: true, allow_blank: false
  validates :author, length: { minimum: 3 }, if: proc { |record| record.author? }

  validates :image_url, presence: true, allow_blank: false

  scope :search, lambda { |search|
                   where('author like ? or title like ?', "%#{search}%", "%#{search}%")
                     .order('title')
                 }
end
