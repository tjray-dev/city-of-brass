class ItemsController < ApplicationController
  before_action :find_item

  def show
    render json: @item, status: :ok
  end

  private

  def find_item
    @item = Item.find(params[:id])
  end
end
