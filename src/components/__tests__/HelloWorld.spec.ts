import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";

import Form from "../FormComponent.vue";
describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(Form, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
