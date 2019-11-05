class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :selections
  has_many :game_sessions
  has_many :games, through: :game_sessions
  has_many :clues, through: :selections
  validates :username, uniqueness: true
end
