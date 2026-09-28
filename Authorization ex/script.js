// Массив с пользователями
        const users = [
            { login: "user1", password: "111", name: "Анна" },
            { login: "user2", password: "222", name: "Иван" },
            { login: "user3", password: "333", name: "Костя" },
            { login: "user4", password: "444", name: "Ольга" },
            { login: "user5", password: "555", name: "Петр" }
        ];

        function loginUser() {
            let enteredLogin = document.getElementById("loginInput").value;
            let enteredPassword = document.getElementById("passwordInput").value;

            // Поиск пользователя с помощью метода find
            let foundUser = users.find(u => u.login === enteredLogin && u.password === enteredPassword);

            let msg = document.getElementById("message");

            if (foundUser) {
                msg.style.color = "green";
                msg.innerText = "Привет, " + foundUser.name + "! Успешный вход.";
            } else {
                msg.style.color = "red";
                msg.innerText = "Ошибка: неверный логин или пароль!";
            }
        }