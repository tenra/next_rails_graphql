# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  sub        :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class User < ApplicationRecord
    has_many :posts, dependent: :destroy

    def self.from_token_payload(payload)
        find_by(sub: payload['sub']) || create!(sub: payload['sub'])
    end
end
