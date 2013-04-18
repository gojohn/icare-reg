class PartialsController < ActionController::Base
  def list; render :partial => "partials/list"; end;
  def home; render :partial => "partials/home"; end;
  def register; render :partial => "partials/register"; end;
end
