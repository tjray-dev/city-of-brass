class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :character_name, :character_origin, :character_type, :character_hp, :attack_bonus, :defense_bonus, :skills

  # add character skills/items
  # def skills
  #   self.object.charcater_skills.all
  # end

  # seprate serialzer for monsters
end
