class CreateSelections < ActiveRecord::Migration[5.2]
  def change
    create_table :selections do |t|
      t.belongs_to :game
      t.belongs_to :clue
      t.belongs_to :user
      t.boolean :answerStatus
      t.timestamps
    end
  end
end
