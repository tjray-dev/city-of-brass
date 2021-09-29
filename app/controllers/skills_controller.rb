class SkillsController < ApplicationController

  def index
    render json: Skill.all, status: :ok
  end

  def show
    skill = Skill.find(params[:id])
    render json: skill, status: :ok
  end
end
