Rails.application.routes.draw do
  # resources :books
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

# For this assignment follow James lecture to grasp on what the F you're doing
# the only route that renders a component(HTML)
root "titles#app"

# these routes should all render json;
# We need to use the standard CRUD routes except doing new/edit
get "/titles", to: "titles#index"
get "/titles/:id", to: "titles#show"

post "/titles", to: "titles#create"
put "/titles/:id", to: "titles#update"
patch "/titles/:id", to: "titles#update"

delete "/titles/:id", to: "titles#destroy"

end
