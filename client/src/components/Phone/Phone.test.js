import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Phone from "./Phone";

Enzyme.configure({ adapter: new Adapter() });

const phone = {
  id: 0,
  name: "iPhone 7",
  manufacturer: "Apple",
  description:
    "iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.",
  color: "black",
  price: 769,
  imageFileName: "IPhone_7.png",
  screen: "4,7 inch IPS",
  processor: "A10 Fusion",
  ram: 2,
};

function shallowSetup() {
  const props = { phone };

  const enzymeWrapper = shallow(<Phone {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe("Shallow rendered phone", () => {
  const { enzymeWrapper, props } = shallowSetup();

  it("should render the correct phone name", () => {
    expect(enzymeWrapper.find(".phoneTitleContainer").text()).toBe(
      "Smartphone - " +
        phone.manufacturer +
        " " +
        phone.name +
        " " +
        phone.color +
        " " +
        phone.processor
    );
  });

  it("should render the correct phone image", () => {
    expect(enzymeWrapper.find("img").prop("src")).toBe(
      "/images/" + phone.imageFileName
    );
  });

  it("should render the correct phone price", () => {
    expect(enzymeWrapper.find(".phonePrice").text()).toBe("£" + phone.price);
  });

  it("should render view more button", () => {
    expect(enzymeWrapper.find(".phoneButtonView").text()).toBe("View more");
  });

  it("should render buy button", () => {
    expect(enzymeWrapper.find(".phoneButtonBuy").text()).toBe("Buy");
  });

});
