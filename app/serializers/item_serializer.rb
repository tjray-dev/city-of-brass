class ItemSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :item_type, :item_effect, :item_level
end
