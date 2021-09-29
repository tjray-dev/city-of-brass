class Skill < ApplicationRecord
  
  validates :name, :desc, presence: true
  validates :skill_type, numericality: true
end
