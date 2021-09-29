class CharacterItemSerializer < ActiveModel::Serializer
  attributes :id, :level
  has_one :character
  has_one :item
end
