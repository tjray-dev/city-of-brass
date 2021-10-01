class SessionsController < ApplicationController

  before_action :authorize
  skip_before_action :authorize, only: [ :create ]
  
  def create
    user = User.find_by!(user_name: params[:user_name])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      # byebug
      render json: {user: user, session_id: session[:user_id] }, status: :created
    else
      render json: { errors: ["Invalid username and/or password"] }, status: :unauthorized
    end
  end

  def destroy
      session.delete :user_id
      head :no_content
  end
end