class RegistrationsController < ActionController::Base
  protect_from_forgery
  
  def index
    render :json => Registration.all
  end
  
  def create
    logger.info params
    r = Registration.new params[:registration]
    r.save
    render :json => {success:true};
  end
  
  def update
    params[:registration][:checkin_time] = Time.now.strftime("%I:%M:%S") if params[:registration][:checkin_time] == 1
    params[:registration][:return_time] = Time.now.strftime("%I:%M:%S") if params[:registration][:return_time] == 1
    r = Registration.update params[:id], params[:registration]
    
    render :json => r
  end
end
