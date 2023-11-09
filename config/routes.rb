Rails.application.routes.draw do
  root 'root#index'
  namespace :api do
    get 'greetings', to: 'greetings#api'
  end
end
