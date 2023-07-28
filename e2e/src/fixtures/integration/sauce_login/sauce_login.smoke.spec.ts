const loginPage = require("../../support/module/sauce_login/LoginPage.screen");
describe("Login Page",()=>{
  it("login",async()=>{
      const login = new loginPage()
      login.performLogin()
      const product = await $('//android.widget.TextView[@text ="PRODUCTS"]');
      await expect(product).toHaveText("PRODUCTS");
  })
})