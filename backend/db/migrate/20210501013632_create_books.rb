class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.text :description
      t.string :image_url, null: false
      t.timestamps
    end

    add_index :title
    add_index :author
  end
end
