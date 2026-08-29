const {test, expect} = require ('@playwright/test')

test("My First Test", async function({page}){

    expect(10).toBe(10)
})

// ************ To skip any test - we use test.skip **********
test.skip("My Second Test" , async function({page}){

    expect(100).toBe(101)
})

test("My Third Test", async function({page}){
    expect(50).toBe(50)

})

// ******** To run only a specific test- we use test.only *********

// test.only("My Fourth Test", async function({page}){
//   expect("vaibhav sharma").toContain("sharma")
// })


test("My Fifth Test" , async function({page}){


})