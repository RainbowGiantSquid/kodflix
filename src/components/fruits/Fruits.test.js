import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Fruits from "./Fruits";

describe("Testing the <Fruits/> component functinality", () => {
  //it is a required method, description isn't
  it("switch the state based on the event"),
    () => {
      //Arrange
      const { getBytext } = render(<Fruit />);
      const isFavourite = getBytext("NO!");

      //Act
      fireEvent.click(buttonChange);

      //Assert
      expect();
    };
});
