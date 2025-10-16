import { render, screen } from "@testing-library/react";
import App from "./App";

test("muestra los elementos principales del encabezado", () => {
  render(<App />);
  expect(screen.getByText(/Astebece2/i)).toBeInTheDocument();
  expect(screen.getByText(/Patologías/i)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Contacto 24/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Perfil/i })).toBeInTheDocument();
});
