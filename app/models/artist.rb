# == Schema Information
#
# Table name: artists
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Artist < ApplicationRecord
    has_many :albums
    has_many :songs, through: :albums
end
