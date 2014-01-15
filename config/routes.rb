Me::Application.routes.draw do
  get '/' => 'application#index'
  get '/projects' => 'application#projects'
  get '/publications' => 'application#publications'
  get '/achievements' => 'application#achievements'
  get '/travels' => 'application#travels'
  post '/contact' => 'application#contact', :defaults => { :format => :json }
end
