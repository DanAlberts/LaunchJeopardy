class Selection < ApplicationRecord
  belongs_to :game
  belongs_to :clue
  belongs_to :user, optional: true
end