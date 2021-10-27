Rails.application.routes.draw do
  resources :user_plans, only: [:index, :show, :create, :destroy]
  resources :plans
  resources :user_trips
  resources :trips
  resources :users, only: [:show, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # get "/hello", to: "application#hello_world"

  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
