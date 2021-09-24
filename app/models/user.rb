class User < ApplicationRecord

  validates :user_name, presence: true
  validates :user_name, length: { in: 3..20 }
  validates :user_name, uniqueness: true
  validates :password, presence: true
  validates :password, length: { in: 5..20 }
  validates :password, confirmation: true
end
