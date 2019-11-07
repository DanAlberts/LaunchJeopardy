class GamesController < ApplicationController

  def join_game
    created_game = GameCreator.new(current_user)
    created_game.generate_new_game
binding.pry
    # redirect_to created_game.game
    redirect_to "/games/#{created_game.game.id}"
  end

  def show
    # create template with div and id of app to render react
  end

end
