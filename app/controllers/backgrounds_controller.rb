class BackgroundsController < ApplicationController

  def index
    @background = Background.all
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

  private

  def find_background
    @background = Background.find(params[:background_id])
  end

  def background_params
  end
end
