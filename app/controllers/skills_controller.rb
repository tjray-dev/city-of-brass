class SkillsController < ApplicationController

  def index
    render json: Skill.all, status: :ok
  end

  def show
    skill = Skill.find_by!(name: params[:name])
    render json: skill, status: :ok
  end
end
