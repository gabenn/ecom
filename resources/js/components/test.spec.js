import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import App from "./App.vue";

test("mount component", async () => {
  expect(App).toBeTruthy();
  
  const wrapper = mount(App,{
    props: {
      category: "adan"
    },
  });
  expect(wrapper.text()).toContain('adan');
});