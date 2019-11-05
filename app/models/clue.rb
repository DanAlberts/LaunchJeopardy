class Clue < ApplicationRecord
  belongs_to :category
  has_many :selections
  has_many :games, through: :selections
  has_many :users, through: :selections
end