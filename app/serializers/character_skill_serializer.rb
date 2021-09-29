class CharacterSkillSerializer < ActiveModel::Serializer
  attributes :id
  has_one :skill
  has_one :character
end
