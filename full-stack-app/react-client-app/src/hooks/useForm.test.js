import { renderHook, act } from "@testing-library/react";
import { useForm } from "./useForm";

describe("use form custom hook", () => {
  test("use form", () => {
    const { result } = renderHook(() => useForm({ firstName: "", age: NaN }));

    let form = result.current[0];
    expect(form.firstName).toEqual("");
    expect(form.age).toBeNaN();

    act(() => {
      const e = {
        target: {
          name: "firstName",
          type: "text",
          value: "B",
        },
      };

      const change = result.current[1];
      change(e);
    });

    form = result.current[0];
    expect(form.firstName).toEqual("B");
    expect(form.age).toBeNaN();

    act(() => {
      const e = {
        target: {
          name: "age",
          type: "number",
          valueAsNumber: 20,
        },
      };

      const change = result.current[1];
      change(e);
    });

    form = result.current[0];
    expect(form.firstName).toEqual("B");
    expect(form.age).toEqual(20);

    act(() => {
      const resetForm = result.current[2];
      resetForm();
    });

    form = result.current[0];
    expect(form.firstName).toEqual("");
    expect(form.age).toBeNaN();
  });
});
