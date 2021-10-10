import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />)
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    // const values = {
    //     first: "test value first name",
    //     last: "test value last name",
    //     address: "test value address",
    //     city: "test value city",
    //     state: "test value state",
    //     zip: "test value zip"
    // }
    const first = "test value first name"
    const last = "test value last name"
    const address = "test value address"
    const city = "test value city"
    const state = "test value state"
    const zip = "test value zip"

    const firstField = screen.getByLabelText(/first name:/i)
    const lastField = screen.getByLabelText(/last name/i)
    const addressField = screen.getByLabelText(/address/i)
    const cityField = screen.getByLabelText(/city/i)
    const stateField = screen.getByLabelText(/state/i)
    const zipField = screen.getByLabelText(/zip/i)
  
    userEvent.type(firstField, first);
    userEvent.type(lastField, last);
    userEvent.type(addressField, address);
    userEvent.type(cityField, city);
    userEvent.type(stateField, state);
    userEvent.type(zipField, zip);
  
    userEvent.click(screen.getByRole("button", { name: /checkout/i }));

    const successMessage = screen.getByTestId("successMessage")
    expect(successMessage).toBeInTheDocument();


    const successAddress = screen.getByText(/test value address/i)
    expect(successAddress).toBeTruthy()

    const successName = screen.getByText(/test value first name/i)
    expect(successName).toBeTruthy()
    });

