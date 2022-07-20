class MonstersController < ApplicationController
  before_action :find_character, except: [:monster, :boss, :npc]

  def create
    monster = Monster.create(monster_params)
    @user.update!(character_id: character.id)
    render json: { monster: monster }, status: :created
  end

  def show
    render json: @monster, status: :ok
  end

  def update
  end

  def destroy
    @monster.destroy
    head :no_content
  end

  private 
  
  def monster_params
    params.permit(:monster_name, :monster_type, :mind, :body, :spirit, :strength, :agility, :fortitude, :sanity, :knowledge, :reason, :faith, :will, :intution)
  end

  def find_Monster
    @monster = Monster.find(params[:id])
  end
end
