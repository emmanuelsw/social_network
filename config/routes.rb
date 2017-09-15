Rails.application.routes.draw do
  devise_for :users

  authenticated :user do
    root 'main#dashboard', as: :authenticated_root
  end

  root 'main#home'
end
