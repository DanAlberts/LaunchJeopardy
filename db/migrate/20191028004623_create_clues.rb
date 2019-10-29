class CreateClues < ActiveRecord::Migration[5.2]
  def change
    create_table :clues do |t|
      t.string :question, null: false
      t.string :answer, null: false
      t.integer :value, null: false
      t.belongs_to :category, null: false

      t.timestamps
    end
  end
end
