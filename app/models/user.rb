class User < ApplicationRecord
  has_secure_password

  has_one :character

  validates :user_name, presence: true 
  validates :password, presence: true, on: :create
  validates :user_name, uniqueness: true
  validates :password, confirmation: true
end
