class GameChannel < ApplicationCable::Channel
  def subscribed
    stream_from "game_#{params[:game_id]}"
    # stream_from "game_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive(data)
    binding.pry
    puts data
    let user_id = data[:user][:user_id]
    let game_id = params[:game_id]
    let answer_status = data[:selection][:answerStatus]
    # Currently, we dont actually use this code that much. But you would have to set up these models if you want to record the conversations in your chat.
    game = Game.find(game_id)
    selection = Selection.find(data[:selection][:selectionId])
    
    selection.user_id = user_id
    selection.answer_status = data[:selection][:answerStatus]
    selection.save!

    game_session = GameSession.find_by(user_id: user_id, game_id: game_id)
    
    if answer_status == true #correct
      game_session.score += selection.clue.value
    elsif answer_status == false #incorrect
      game_session.score -= selection.clue.value
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