class CharacterSkillsController < ApplicationController

  def create
    character_skill = CharacterSkill.create!(character_skill_params)
    render json: character_skill, status: :created
  end

  def show
    character_skill = CharacterSkill.find(params[:id])
    render json: character_skill, status: :ok
  end

  def update
    character_skill = CharacterSkill.find(params[:id])
    character_skill.update!(params[:level])
    render json: character_skill, status: :accepted
  end

  private

  def character_skill_params
    params.permit(:character_id, :skill_id)
  end
end
