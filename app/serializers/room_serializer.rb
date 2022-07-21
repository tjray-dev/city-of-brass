class RoomSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location_id, :enemy_amount
end
