# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!({
               name: 'Administrador',
               email: 'admin@admin.com',
               password: '123456'
             })

200.times do
  Book.create!({
                 title: Faker::Book.title,
                 author: Faker::Book.author,
                 image_url: 'https://via.placeholder.com/200x250',
                 description: Faker::Lorem.paragraph_by_chars(number: 1500)
               })
end
