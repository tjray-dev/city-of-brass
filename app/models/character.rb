class Character < ApplicationRecord



  validates :character_name, :character_origin, presence: true
  validates :character_name, length: { in: 2..20 }
  validates :attack_bonus, :defense_bonus, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 10 }
  validates :character_hp, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 100}
end
