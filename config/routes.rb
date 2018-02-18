Me::Application.routes.draw do
  get '/' => 'application#index'
  get '/projects' => 'application#projects'
  get '/publications' => 'application#publications'
  get '/achievements' => 'application#achievements'
  get '/travels' => 'application#travels'
  get '/terms' => 'application#terms'
end
