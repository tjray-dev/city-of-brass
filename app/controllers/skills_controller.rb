class SkillsController < ApplicationController

  def show
    skill = Skill.find_by!(name: params[:name])
    render json: skill, status: :ok
  end
end
