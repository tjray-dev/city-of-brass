class Character < ApplicationRecord
  has_many :character_skills
  has_many :skills, through: :character_skills

  has_many :character_items
  has_many :items, through: :character_items

  validates :character_name, :character_origin, presence: true
  validates :character_name, length: { in: 2..20 }
  validates :attack_bonus, :defense_bonus, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 10 }
  validates :character_hp, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 100}

  def attack(opponent)
    damage = ((rand(1..10) + self.attack_bonus) - opponent.defense_bonus)
    opponent.character_hp -= damage.positive? ? damage : 0
    opponent.save!
  end
  
end
