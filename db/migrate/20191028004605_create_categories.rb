class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :title, null: false
      # t.integer :clues
      # t.belongs_to :game
    end
  end
end
