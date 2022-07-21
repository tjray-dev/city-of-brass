class ItemsController < ApplicationController
  before_action :find_item, only: [:show]

  def index
  end

  def show
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

  def loot 
    item = Item.all.sample()
    render json: item, status: :ok
  end

  private

  def find_item
    @item = Item.find(params[:id])
  end

  def item_parmas
  end
  
end
