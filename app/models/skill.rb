class Skill < ApplicationRecord
  has_many :character_skills
  has_many :characters, through: :character_skills
  
  validates :name, :desc, presence: true
  validates :skill_type, numericality: true
end
