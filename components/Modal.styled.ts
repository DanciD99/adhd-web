import { styled } from "styled-components";

export const ModalOverlay = styled.div<{ open: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background overlay */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;

    ${({ open }) => open && `
        opacity: 1;
        visibility: visible;
    `}
`
export const ModalContent =  styled.div`
    background-color: #23222;
    padding: 20px;
    border-radius: 5px;
    width: 400px; 
    max-width: 80%; 
    max-height: 80vh; 
    overflow-y: auto; 
  `

  export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  `