class Game < ApplicationRecord
  has_many :game_sessions
  has_many :selections
  has_many :users, through: :selections
  has_many :clues, through: :selections
  has_many :users, through: :game_sessions
  has_many :assigned_categories
  has_many :categories, through: :assigned_categories
end

