json.books do
  json.array! @books, :id, :title, :author, :image_url, :description
end

json.books_count @books_count
