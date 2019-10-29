Rails.application.routes.draw do

  devise_for :users
  root 'static_pages#index'

  # namespace :api do
  #   namespace :v1 do
      
  #   end
  # end
end
