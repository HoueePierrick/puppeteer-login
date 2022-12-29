import puppeteer from "puppeteer";
import dotenv from "dotenv";

dotenv.config();
const password = process.env.Password;

async function main() {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto("https://accounts.craigslist.org/login");
    // To type text
    await page.type("#inputEmailHandle", "houee.pierrick@gmail.com", {
      delay: 200,
    });
    await page.type("#inputPassword", password!, {
      delay: 200,
    });
    // To click on element
    await page.click("#login", { delay: 200 });
    // Wait for login to complete (the redirect)
    await page.waitForNavigation();
    await page.goto(
      "https://accounts.craigslist.org/login/home?show_tab=settings"
    );
  } catch (error) {
    console.log(error);
  }
}

main();
// Puppeteer would never load the page
