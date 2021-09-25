class UsersController < ApplicationController

  before_action :find_user, except: [ :create ]

  def create
    user = User.create(user_params)
    render json: user, status: :created
  end

  def show
    render json: @user, stauts: :ok
  end

  def update
    @user.update(user_params)
    render json: @user, status: :accepted
  end

  def destroy
    @user.destroy
    head :no_content
  end

  private

  def user_params
    params.permit(:user_name, :password, :password_confirmation)
  end

  def find_user
    @user = User.find_by!(id: session[:user_id])
  end
end
