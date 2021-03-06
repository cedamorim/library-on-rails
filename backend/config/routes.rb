Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope :api, defaults: { format: 'json' } do
    resources :books, only: %i[index create show update destroy]
    resources :auth, only: %i[create]
  end
end
