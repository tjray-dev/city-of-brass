class ProfessionSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :strength, :agility, :fortitude, :sanity, :reason, :knowledge, :faith, :will, :intuition
end
