// const { from } = require("node:stream/iter");

const {test,expect} = require ('@playwright/test');
const { clear } = require("node:console");

test("Verify Application Title", async function({page}){

  await  page.goto("http://google.com")
  const myUrl = await page.url()
  const myTitle = await page.title()
//   console.log("Title is = " + myUrl)
console.log("Application Title =" + myTitle)
})