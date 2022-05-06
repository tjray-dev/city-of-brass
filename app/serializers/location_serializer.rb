class LocationSerializer < ActiveModel::Serializer
  attributes :id, :location_name, :location_description, :location_type
end
