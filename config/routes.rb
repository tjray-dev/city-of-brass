Rails.application.routes.draw do
  
  resources :items
  resources :rooms, only: [ :show ]
  resources :characters, only: [ :create, :show, :update, :destroy ]
  resources :users, only: [ :create, :show, :update, :destroy ]

  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
