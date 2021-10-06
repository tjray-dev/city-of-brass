class CharactersController < ApplicationController

  before_action :find_user
  before_action :find_character, except: [ :create, :monster ]
  before_action :find_opponent, only: [ :update ]
  before_action :authorize

  def create
    character = Character.create(character_params)
    @user.update!(character_id: character.id)
    render json: { character: character }, status: :created
  end

  def show
    render json: @character, status: :ok
  end

  def update
    @character.attack(@opponent)
    render json: @opponent, status: :accepted
  end

  def destroy
    @character.destroy
    head :no_content
  end

  def monster
    monster = Character.where("character_type = '1'").sample
    render json: monster, status: :ok
  end

  private 

  def find_user 
    @user = User.find(session[:user_id])
  end

  def character_params
    params.permit(:character_name, :character_origin)
  end

  def find_character
    @character = Character.find(params[:id])
  end

  def find_opponent
    @opponent = Character.find(params[:opponent_id])
  end
end
