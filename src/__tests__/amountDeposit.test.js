import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // for better assertion messages
import axios from "axios";
import AmountDeposit from "./AmountDeposit";

jest.mock("axios");

describe("AmountDeposit", () => {
  it("renders the component", () => {
    render(<AmountDeposit />);
    expect(screen.getByLabelText(/Account Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Select Account Type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Deposit Amount/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Depositor Mobile/i)).toBeInTheDocument();
  });

  it("submits the form", async () => {
    axios.post.mockResolvedValueOnce({
      data: {
        depositAmount: 500, // Mocked response
      },
    });

    render(<AmountDeposit />);

    fireEvent.change(screen.getByLabelText(/Account Number/i), {
      target: { value: "12345678901" },
    });
    fireEvent.change(screen.getByLabelText(/Select Account Type/i), {
      target: { value: "savings" },
    });
    fireEvent.change(screen.getByLabelText(/Deposit Amount/i), {
      target: { value: "500" },
    });
    fireEvent.change(screen.getByLabelText(/Depositor Mobile/i), {
      target: { value: "1234567890" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Deposit Amount/i }));

    // Wait for the axios request to be resolved
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith("http://localhost:8080/deposit", {
        accountNumber: "12345678901",
        accountType: "savings",
        depositAmount: "500",
        depositorMobile: "1234567890",
      });
      expect(
        screen.getByText(/Amount deposited to your account Rs:500/i)
      ).toBeInTheDocument();
    });
  });
});
