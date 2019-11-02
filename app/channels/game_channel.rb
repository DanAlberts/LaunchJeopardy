class GameChannel < ApplicationCable::Channel
  def subscribed
    stream_from "game_#{params[:game_id]}"
    # stream_from "chat_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive(data)
    puts data
    # Currently, we dont actually use this code that much. But you would have to set up these models if you want to record the conversations in your chat.
    game = Game.find_or_create_by(id: params[:game_id])
    new_message = Message.create(body: data["message"], user: User.find(data["user"]["user_id"]))
    game.messages << new_message

    game_key = game.id

    game_json = {
      "game_key": game_key,
      "message": new_message.body,
      "messageId": new_message.id,
      "user": data["user"]
    }

    ActionCable.server.broadcast("game_#{params[:game_id]}", chat_json)
  end