class RegistrationsController < ActionController::Base
  protect_from_forgery
  
  def index
    render :json => Registration.all
  end
end
