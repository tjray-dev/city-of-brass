class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :character_name, :character_origin, :character_type, :character_hp, :attack_bonus, :defense_bonus
end
