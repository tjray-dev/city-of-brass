class CharacterItemsController < ApplicationController

  def create
    character_item = CharacterItem.create!(character_item_params)
    render json: character_item, status: :created
  end

  def show
    character_item = CharacterItem.find(params[:id])
    render json: character_item, status: :ok
  end

  def update
    character_item = CharacterItem.find(params[:id])
    character_item.update!(params[:level])
    render json: character_item, status: :accepted
  end

  private

  def character_item_params
    params.permit(:character_id, :item_id)
  end
end
