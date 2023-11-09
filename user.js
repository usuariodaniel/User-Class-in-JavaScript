class user {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
  }

  userData() {
    console.log(
      `Registration completed successfully\n\nUsername: ${this.username}\nPassword: ${this.password}\nE-mail: ${this.email}`
    );
  }

  onlyName() {
    console.log(`Username: ${this.username}`);
  }

  onlyPassword() {
    console.log(`Password: ${this.password}`);
  }

  onlyEmail() {
    console.log(`E-mail: ${this.email}`);
  }
}

let userRegistration = new user(
  "Brigetjones",
  "myglass123",
  "briget.jones@gmail.com"
);

userRegistration.userData();

userRegistration.onlyName();
userRegistration.onlyPassword();
userRegistration.onlyEmail();
