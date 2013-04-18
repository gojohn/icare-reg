class HomeController < ActionController::Base
  protect_from_forgery
  
  def index
    render "index"
  end
end
