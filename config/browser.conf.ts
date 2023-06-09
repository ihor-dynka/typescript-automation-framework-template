import { TEST_CONFIG } from "./env.conf";

export const browserConfig: WebdriverIO.Config = {
    hostname: TEST_CONFIG.REMOTE_BROWSER_ENABLE ? TEST_CONFIG.REMOTE_BROWSER_HOST : 'localhost',
    baseUrl: TEST_CONFIG.WEB_BASE_URL,
    path: TEST_CONFIG.REMOTE_BROWSER_ENABLE ? TEST_CONFIG.REMOTE_BROWSER_BASE_PATH : TEST_CONFIG.LOCAL_CHROME_DRIVER_BASE_PATH,
    waitforTimeout: TEST_CONFIG.IMPLICIT_WAIT,
    port: TEST_CONFIG.REMOTE_BROWSER_ENABLE ? TEST_CONFIG.REMOTE_BROWSER_PORT : TEST_CONFIG.LOCAL_CHROME_DRIVER_PORT,
    outputDir: 'C:\\ts_automation\\ts-automation-framework\\test-results\\web\\',

    capabilities: {
        browserName: TEST_CONFIG.BROWSER,
        browserVersion: TEST_CONFIG.BROWSER_VERSION,
        "goog:chromeOptions": {
            "args": [
                "no-sandbox",
                TEST_CONFIG.HEADLESS ? "headless": "false",
                "disable-gpu",
                "disable-dev-shm-usage",
                "disable-crash-reporter",
                "disable-logging",
                "log-level=3"
            ]
        },
        "selenoid:options": {
            enableVideo: TEST_CONFIG.SELENOID_ENABLE_VIDEO,
            enableLog: TEST_CONFIG.SELENOID_ENABLE_LOGS,
            enableVNC: TEST_CONFIG.SELENOID_ENABLE_VNC
        }
    }
};