class RoomsController < ApplicationController

  def show
    render json: @room, status: :ok
  end

  private

  def find_room
    @room = Room.find(params[:id])
  end
end
