module.exports = {
  'Login Issabel Test' : (browser) => {
    browser
      .url('https://192.168.56.102')
      .waitForElementVisible('body', 1000)
      .setValue('input[name=input_user]', 'admin')
      .setValue('input[name=input_pass]', 'issabel')
      .click('button[name=submit_login]')
      .pause(1000)
      .assert.title('Issabel')
      .assert.elementPresent('.sidebar-menu')
      .end();
  }
};
