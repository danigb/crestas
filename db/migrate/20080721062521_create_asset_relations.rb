class CreateAssetRelations < ActiveRecord::Migration
  def self.up
    create_table :asset_relations do |t|
      t.integer :asset_id
      t.string :name
      t.integer :related_object_id
      t.string :related_object_type
      t.integer :position
      t.string :field_name

      t.timestamps
    end
  end

  def self.down
    drop_table :asset_relations
  end
end
