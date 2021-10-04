class CharactersController < ApplicationController

  before_action :find_character, except: [ :create ]
  before_action :find_opponent, only: [ :update ]
  before_action :authorize

  def create
    character = Character.create(character_params)
    render json: { character: character }, status: :created
  end

  def show
    render json: @character, status: :ok
  end

  def update
    # use a case statement to evaluate the action param
    # then call the appropriate character class method based
    # passing in any needed arguments
    @character.attack(@opponent)
    render json: @opponent, status: :accepted
  end

  def destroy
    @character.destroy
    head :no_content
  end

  private 

  def character_params
    params.permit(:character_name, :character_origin)
  end

  def find_character
    @character = Character.find(params[:id])
  end

  def find_opponent
    @opponent = Character.find(params[:monster_id])
  end
end
