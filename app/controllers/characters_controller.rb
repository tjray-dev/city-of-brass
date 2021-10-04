class CharactersController < ApplicationController

  before_action :find_character, except: [ :create ]
  before_action :authorize

  def create
    character = Character.create(character_params)
    render json: { character: character }, status: :created
  end

  def show
    render json: @character, status: :ok
  end

  def update
    @character.update
    render json: @character, status: :accepted
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
end
