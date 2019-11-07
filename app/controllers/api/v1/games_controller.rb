class Api::V1::GamesController < ApiController

  def show
    # binding.pry
    game = Game.find_by(id: params[:id])
    # binding.pry
    if game.present?
      render json: { gameState: game_json(game), user: current_user}
      # binding.pry
    else 
      created_game = GameCreator.new(current_user)
      created_game.generate_new_game
      # binding.pry
      render json: { gameState: game_json(created_game), user: current_user}
    end
  end

  # TODO: create a serializer instead of game_json

  private

  def game_json(created_game)
    # binding.pry
    game_categories_collection = []
    created_game.categories.map do |category|
      game_categories_collection << {
        title: category.title, 
        clues: category.clues, 
        selections: created_game.selections
      }
    end

    return game_categories_collection
  end

end
