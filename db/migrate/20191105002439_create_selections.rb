class CreateSelections < ActiveRecord::Migration[5.2]
  def change
    create_table :selections do |t|
      t.belongs_to :game
      t.belongs_to :clue
      t.belongs_to :user
      t.boolean :answer_status
      t.timestamps
    end
  end
end
