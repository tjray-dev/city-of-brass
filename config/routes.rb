Rails.application.routes.draw do
  
  resources :rooms
  resources :professions
  resources :backgrounds
  resources :locations
  resources :items
  resources :character_items, only: [ :create, :show, :update ]
  resources :character_skills, only: [ :create, :show, :update ]
  resources :items, only: [ :index, :show ]
  resources :skills, only: [ :index, :show ]
  resources :rooms, only: [ :show ]
  resources :characters, only: [ :create, :show, :update, :destroy ]
  resources :users, only: [ :create, :show, :update, :destroy ]

  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/monster', to: 'characters#monster'
  get '/boss', to: 'characters#boss'
  get '/npc', to: 'characters#npc'

  get '/loot', to: 'items#loot'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
