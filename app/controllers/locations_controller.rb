class LocationsController < ApplicationController
  before_action :find_location

  def show
    render json: @location, status: :ok
  end

  private

  def find_location
    @location = Location.find(params[:id])
  end
end
