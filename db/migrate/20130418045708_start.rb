class Start < ActiveRecord::Migration
  def up
    execute('CREATE TABLE `registrations` (
      `registration_id` int(11) NOT NULL AUTO_INCREMENT,
      `first_name` varchar(64) DEFAULT NULL,
      `last_name` varchar(64) DEFAULT NULL,
      `email` varchar(64) DEFAULT NULL,
      `phone` varchar(64) DEFAULT NULL,
      `gender` varchar(64) DEFAULT NULL,
      `age` int(11) DEFAULT NULL,
      `address` varchar(64) DEFAULT NULL,
      `city` varchar(64) DEFAULT NULL,
      `state` varchar(64) DEFAULT NULL,
      `zip` varchar(64) DEFAULT NULL,
      `emergency_contact` varchar(64) DEFAULT NULL,
      `emergency_phone` varchar(64) DEFAULT NULL,
      `is_family` varchar(64) DEFAULT NULL,
      `ride` varchar(64) DEFAULT NULL,
      `shirt_size` varchar(64) DEFAULT NULL,
      `payment` int(11) DEFAULT NULL,
      `reg_date` varchar(64) DEFAULT NULL,
      `addl_donation` int(11) DEFAULT NULL,
      `checkin_time` time DEFAULT NULL,
      `return_time` time DEFAULT NULL,
      PRIMARY KEY (`registration_id`)
    )');
  end

  def down
    execute('drop table registrations')
  end
end
