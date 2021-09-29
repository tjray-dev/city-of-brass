class Item < ApplicationRecord
  has_many :character_items
  has_many :items, through: :character_items
end
