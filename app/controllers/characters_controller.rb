class CharactersController < ApplicationController

  def create
    character = Character.create(character_params)
  end

  private 

  def character_params
    params.permit(:character_name, :character_origin)
  end
end
