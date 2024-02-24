# == Schema Information
#
# Table name: albums
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  artist_id  :integer
#  song_id    :integer
#
class Album < ApplicationRecord
    belongs_to :song
    belongs_to :artist
end
