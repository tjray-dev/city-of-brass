class CharactersController < ApplicationController
  before_action :find_character

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
  
  def character_params
    params.permit(:character_name, :character_origin)
  end

  def find_character
    @character = Character.find(params[:id])
  end
end
