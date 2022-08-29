import React, { useEffect, useState } from "react";
import { GlobalStateContext } from "../../../../globals/GlobalState";
import { Container, StyledInput, StyledLabel } from "./Styles";

export default function FilterSection({ data, id }) {
  const { setSearchOptions } = React.useContext(GlobalStateContext);
  const [filterValue, setFilterValue] = useState("");

  const key = id;

  const onClick = (e) => {
    const target = e.target;

    setSearchOptions((prevState) => ({
      ...prevState,
      [key]: target.id,
    }));

    const parentId = id;

    if (target.checked) {
      const parentDiv = document.querySelector(`#${parentId}`);
      const inputElements = Array.from(parentDiv.querySelectorAll("input"));

      const inputsToUncheck = inputElements.filter(
        (input) => input.id !== target.id
      );

      inputsToUncheck.forEach((input) => {
        if (input.checked) {
          input.checked = false;
        }
      });
    } else {
      setSearchOptions((prevState) => ({
        ...prevState,
        [key]: "",
      }));
    }
  };

  return (
    <Container type="container" id={id}>
      {data &&
        data.map((item, key) => {
          if (item[Object.keys(item)].length > 0) {
            return (
              <Container type="sub" key={key}>
                <StyledLabel htmlFor={`${Object.keys(item)}`}>
                  <StyledInput
                    type="checkbox"
                    id={Object.keys(item)}
                    name={`${Object.keys(item)}`}
                    onClick={onClick}
                  />
                  {Object.values(item)}
                </StyledLabel>
              </Container>
            );
          }
        })}
    </Container>
  );
}
