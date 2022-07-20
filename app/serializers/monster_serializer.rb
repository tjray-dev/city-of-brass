class MonsterSerializer < ActiveModel::Serializer
  attributes :id, 
             :character_name, 
             :character_type,
             :mind,
             :body,
             :spirit
end
