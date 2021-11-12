import { expect } from "chai";
import { Element } from "webdriverio";
import { IWebElement } from "./interfaces/IWebElement";

export declare type AsyncElement = Element<'async'>

export class WebdriverIoElement implements IWebElement {

    private element: AsyncElement;

    constructor(selector: AsyncElement){
        this.element = selector;
    }

    async waitUntilVisible(duration: number): Promise<void> {
        this.element.waitForDisplayed({ timeout: duration });
    }

    async shouldHaveText(text: string): Promise<void> {
        expect(await this.element.getText()).to.have.string(text);
    }

    async getText(): Promise<string> {
        return this.element.getText();
    }
    async click(): Promise<void> {
        this.element.click();
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