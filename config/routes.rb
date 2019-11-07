Rails.application.routes.draw do

  devise_for :users
  root 'static_pages#index'
  get '/categories', to: "static_pages#index"
  get '/games/:id', to: "static_pages#index"
  get '/join_game', to: "games#join_game"

  namespace :api do
    namespace :v1 do
      resources :categories, only: [:index]
      resources :games, only: [:show]
    end
  end
end
