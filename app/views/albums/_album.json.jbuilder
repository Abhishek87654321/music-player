json.extract! album, :id, :name, :song_id, :artist_id, :created_at, :updated_at
json.url album_url(album, format: :json)