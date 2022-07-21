class TraitSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :stat, :modifier
end
