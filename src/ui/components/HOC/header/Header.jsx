import * as React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../../../../core/Context";
import { useHistory } from "react-router-dom";

export const Header = ({ children }) => {
  const { login, unLogin, wallet } = useContext(Context);
  const nav = useHistory();
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "#916cb4" }}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {wallet === "" && (
                <Nav.Link
                  onClick={async (e) => {
                    e.preventDefault();
                    await login();
                    await nav.push("/personal");
                  }}
                >
                  Авторизоваться
                </Nav.Link>
              )}
              {wallet !== "" && (
                <Nav.Link
                  onClick={(e) => {
                    e.preventDefault();
                    unLogin();
                    nav.push("/");
                  }}
                >
                  Разлогиниться
                </Nav.Link>
              )}
              <Nav.Link
                onClick={(e) => {
                  e.preventDefault();
                  nav.push("/");
                }}
              >
                Главная страница
              </Nav.Link>
              <Nav.Link
                onClick={(e) => {
                  e.preventDefault();
                  nav.push("/personal");
                }}
              >
                Личный кабинет
              </Nav.Link>
              <Nav.Link
                onClick={(e) => {
                  e.preventDefault();
                  nav.push("/market");
                }}
              >
                Торговая площадка
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
    </>
  );
};
