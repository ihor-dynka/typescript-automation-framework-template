import { expect } from "chai";
import { Element } from "webdriverio";
import { IWebElement } from "./interfaces/iwebelement";

export declare type AsyncElement = Element<'async'>

export class WebdriverIoElement implements IWebElement {

    private element: AsyncElement;

    constructor(selector: AsyncElement) {
        this.element = selector;
    }

    async moveTo(): Promise<void> {
       await this.element.moveTo();
    }

    async setValue(text: string): Promise<void> {
        await this.element.setValue(text);
    }

    async waitUntilVisible(duration: number): Promise<IWebElement> {
        await this.element.waitForDisplayed({ timeout: duration });
        return this;
    }

    async shouldHaveText(text: string): Promise<IWebElement> {
        expect(await this.element.getText()).to.have.string(text);
        return this;
    }

    async getText(): Promise<string> {
        return this.element.getText();
    }

    async click(): Promise<IWebElement> {
        await this.element.click();
        return this;
    }

    async exists(): Promise<boolean> {
        return this.element.isExisting();
    }

    async isDisplayed(): Promise<boolean> {
        return this.element.isDisplayed();
    }

    async isEnabled(): Promise<boolean> {
        return this.element.isEnabled();
    }

    async getAttributeValue(attributeName: string): Promise<string> {
        return this.element.getAttribute(attributeName);
    }
}