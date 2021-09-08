INSERT INTO users (first_name, last_name)
VALUES ("Elliot", "Smith"),
       ("Amira", "Afzal"),
       ("Christoper", "Lee"),
       ("Verónica", "Rodriguez"),
       ("Igor", "Ivanov");
       
INSERT INTO events (title, schedule, details, cancelled, user_id, user2_id)
VALUES ("Not a Date", 2021-09-24, "Dinner and a movie.", false, 1, 2),
        ("Beach Party", 2021-10-02, "just normal, legal stuff down by the river.", true, 3, 4)