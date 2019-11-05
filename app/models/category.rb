class Category < ApplicationRecord
  has_many :clues
  has_many :assigned_categories
  has_many :games, through: :assigned_categories
end