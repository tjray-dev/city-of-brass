Rails.application.routes.draw do
  
<<<<<<< HEAD
  resources :users
  
=======
  resources :users, only: [ :create, :show, :update, :destroy ]

  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'


>>>>>>> user
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
