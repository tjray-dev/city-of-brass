class User < ApplicationRecord
  has_secure_password

  validates :user_name, :password, presence: true
  validates :user_name, uniqueness: true
  validates :password, confirmation: true
end
