class GameChannel < ApplicationCable::Channel
  def subscribed
    stream_from "game_#{params[:game_id]}"
    # stream_from "game_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive(data)
  
    puts data
    game_id = params[:game_id]
    user_id = data["user"]["id"]
    user_answer = data["userAnswer"]
    clue_id = data["clueId"]
    game = Game.find(game_id)
    clue = Clue.find(clue_id)
    selection = Selection.find_by(clue: clue, game: game)
    selection.user_id = user_id
    selection.save!

    game_session = GameSession.find_by(user_id: user_id, game_id: game_id)
    # DETERMINE ANSWER STATUS 
    if clue.answer == user_answer
      game_session.score = game_session.score + selection.clue.value
      selection.answerStatus = true
    else 
      game_session.score = game_session.score - selection.clue.value
      selection.answerStatus = true
    end

    game_session.save!

    # ActionCable.server.broadcast("game_#{params[:game_id]}", { gameState: game_json(game), user: current_user })
    ActionCable.server.broadcast("game_#{params[:game_id]}", { gameState: game_json(game) })
  end

  private 

  def game_json(game)
    game_categories_collection = []

    game.categories.map do |category|
      game_categories_collection << { 
        title: category.title, 
        clues: category.clues, 
        selections: game.selections
      }
    end

    return game_categories_collection
  end
end