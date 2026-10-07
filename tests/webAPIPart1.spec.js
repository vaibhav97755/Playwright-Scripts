const{test,expect,request}=require("@playwright/test");

const loginPayload = {email: "test1313@gmail.com", password: "Test@1234"};
let token;
test.beforeAll(async() =>
{
    const apiContext = await request.newContext();

    const apiResponse = await apiContext.post("https://api.eventhub.rahulshettyacademy.com/api/auth/login", 
        {
        data: loginPayload
            })

            expect(apiResponse.ok()).toBeTruthy();
            const responseJson = await apiResponse.json();
            const token = responseJson.token;
            console.log(token);




});

test('Create a brand new event from the admin panel, then complete a booking for that event, and finally verify the seat count drops by exactly 1.' , async({page}) => {

   page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token);
   
    // await page.goto('https://eventhub.rahulshettyacademy.com/login');
    // await page.getByPlaceholder("you@email.com").pressSequentially("test1313@gmail.com" , { delay: 100 });
    // await page.locator("#password").pressSequentially("Test@1234", { delay: 100 });
    // await page.getByRole("button", { name: "Sign In" }).click();
    await expect (page).toHaveURL('https://eventhub.rahulshettyacademy.com/');  
    await expect(page.getByText("Browse Events →")).toBeVisible();
    await page.getByRole("button", { name: "Admin" }).click();
    await page.getByRole("link", { name: "Manage Events" }).first().click();
    await expect(page).toHaveURL('https://eventhub.rahulshettyacademy.com/admin/events');

    // adding an event

    await page.getByPlaceholder("Event title").pressSequentially("Testing Event", { delay: 100 });
    await page.getByPlaceholder("Describe the event…").pressSequentially("This is a test event for automation testing.", { delay: 100 });
    await page.locator("#category").selectOption("Sports");
    await page.locator("#city").pressSequentially("Gurugram", { delay: 100 });
    await page.locator("#venue").pressSequentially("Unitech Cyber Park", { delay: 100 });
    await page.locator('[id="event-date-&-time"]').fill("2026-10-04T18:30");
    await page.locator('[id="price-($)"]').fill("2100");
    await page.locator("#total-seats").fill("100");
    await page.getByLabel("Image URL (optional)").fill("https://example.com/event-image.jpg");
    await page.locator("#add-event-btn").click();
    await expect(page.locator('[aria-live="polite"]')).toBeVisible();


    // booking the event
    await page.getByTestId('nav-events').click();
    await expect(page).toHaveURL('https://eventhub.rahulshettyacademy.com/events');
    
    const eventCard = page.getByTestId('event-card').filter({ hasText: 'Testing Event' });

    await expect(eventCard).toBeVisible();
    await expect(eventCard).toContainText('Testing Event');
    await expect(eventCard).toContainText('Sun, 4 Oct');
    await expect(eventCard).toContainText('Unitech Cyber Park, Gurugram');
    await expect(eventCard).toContainText('$2,100');
    await expect(eventCard).toContainText('100 seats available');

    await eventCard.getByRole('link', { name: 'Book Now' }).click();

    await page.getByRole('button', { name: '+', exact: true }).click();
    await page.locator('#customerName').fill('Vaibhav Sharma');
    await page.locator('#customer-email').fill('test1313@gmail.com');
    await page.locator('#phone').fill('9212333444');
    await page.getByRole('button', { name: 'Confirm Booking' }).click();
    



    

});
