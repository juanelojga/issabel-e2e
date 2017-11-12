const baseUrl = "https://192.168.56.102/";

module.exports = {
  "login": browser => {
    browser
      .url(`${baseUrl}`)
      .waitForElementVisible("body", 500)
      .setValue("input[name=input_user]", "admin")
      .setValue("input[name=input_pass]", "issabel")
      .click("button[name=submit_login]")
      .pause(500);
  },

  "create-user": browser => {
    browser
      .url(`${baseUrl}index.php?menu=userlist`)
      .pause(500)
      .click("button[name='?menu=userlist&action=new']")
      .pause(500)
      .setValue("input[name=name]", "testuser")
      .setValue("input[name=description]", "Test User")
      .setValue("input[name=password1]", "mynewpassword")
      .setValue("input[name=password2]", "mynewpassword")
      .click("button[name='save']")
      .assert.urlEquals(`${baseUrl}index.php?menu=userlist`)
      .assert.containsText(".table-data", "Test User");
  },

  "check-if-user-exists": browser => {
    browser
      .url(`${baseUrl}index.php?menu=userlist`)
      .pause(500)
      .assert.containsText(".table-data", "Test User")
      .end();
  }
};
