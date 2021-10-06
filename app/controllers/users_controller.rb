class UsersController < ApplicationController

  wrap_parameters format: []
  before_action :authorize
  skip_before_action :authorize, only: [ :create ]
  
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: {user: user, session_id: session[:user_id] }, status: :created
  end

  def show
    user = User.find(session[:user_id])
    render json: {user: user, session_id: session[:user_id] }, status: :created
  end

  def update
    user = User.find(session[:user_id])
    user.update!(user_params)
    render json: {user: user}, status: :accepted
  end

  def destroy
    user = User.find(session[:user_id])
    user.destroy
    session.delete :user_id
    head :no_content
  end

  private

  def user_params
    params.permit(:user_name, :password, :password_confirmation, :character_id)
  end
end
