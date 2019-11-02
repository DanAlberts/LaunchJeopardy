class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :name, null: false
      t.integer :playerone, null: false
      t.integer :playertwo
      t.integer :playerthree
      t.
      t.timestamps
  end
end
