const { mount } = require("@vue/test-utils");
const expect = require("expect");
const BaseComponent = require("./components/BaseComponent.vue").default;
const ChildComponent = require("./components/ChildComponent.vue").default;

describe("test override", function() {
  it("should override default slot", function() {
    const base = mount(BaseComponent);
    expect(base.html()).toContain("default");

    const child = mount(ChildComponent);
    expect(child.html()).toContain("override default");
    expect(child.html()).toContain("override namedSlot: Foo Bar");
    expect(child.html()).toContain("no override");
  });

  it("should conditionaly override", async function() {
    const child = mount(ChildComponent);

    expect(child.html()).not.toContain("conditionalOverride: override");

    child.setData({
      shouldOverride: true
    });
    await child.vm.$nextTick();
    expect(child.html()).toContain("conditionalOverride: override");
  });

  it("should work with keep alive component", async function() {
    const keepAlive = mount(
      require("./components/KeepAliveComponent.vue").default
    );

    expect(keepAlive.html()).toContain("override namedSlot: Foo Bar");
    keepAlive.vm.show = false;
    await keepAlive.vm.$nextTick();
    keepAlive.vm.cm.test = "Test-1";
    await keepAlive.vm.$nextTick();
    keepAlive.vm.show = true;
    await keepAlive.vm.$nextTick();
    expect(keepAlive.html()).toContain("override namedSlot: Test-1");

    keepAlive.vm.cm.test = "Test-2";
    await keepAlive.vm.$nextTick();
    expect(keepAlive.html()).toContain("override namedSlot: Test-2");
  });
});
