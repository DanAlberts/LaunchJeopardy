class CreateGameSessions < ActiveRecord::Migration[5.2]
  def change
    create_table :game_sessions do |t|
      t.belongs_to :game
      t.belongs_to :user
      t.integer :player_number
      t.integer :score
      t.timestamps
    end
  end
end
