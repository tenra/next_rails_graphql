class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :sub, null: false # ユーザーidが入ってきます。
      t.timestamps
    end
  end
end
