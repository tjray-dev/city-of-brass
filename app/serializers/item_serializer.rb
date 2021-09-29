class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :desc, :item_type
end
