import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }
    section, aside{
        background: ${({ theme }) => theme.sectionBackground}
    }
    hr{
        border-top: ${({ theme }) => theme.hrBorder}
    }
    .header{
        background: ${({ theme }) => theme.header}
    }
    .navbar-nav .nav-item.active .nav-link{
        color: ${({ theme }) => theme.navLinkActive}
    }
    .tag::after{
        background: ${({ theme }) => theme.tagBeforeBackground}
    }
  `;
