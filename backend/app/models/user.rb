class User < ApplicationRecord
  has_secure_password

  validates :name, presence: true, allow_blank: false
  validates :name, length: { minimum: 3 }, if: proc { |record| record.name? }

  validates :email, presence: true, uniqueness: true, allow_blank: false

  validates :password, length: { minimum: 6 }, if: proc { |record| record.password.present? }
end
