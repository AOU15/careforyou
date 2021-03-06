Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  
  resources :services do 
    resources :reviews, shallow: true
  end
  resources :services, except: [:update, :destroy]
  resources :users, only: :create

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
