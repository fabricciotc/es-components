import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  .dst-overlay
  {
    z-index: 1000;
  }

  .ReactModal__Body--open {
    overflow-y: hidden;
  }

  .dst .slide-pane__close, .dst .slide-pane__title-wrapper {
    margin-left: 0px;
  }

  .dst .slide-pane__content {
  padding: 0;
  }

  .dst .slide-pane__header
  {
    background-color: #006685;
    color: #fff; 
  }

  .dst .slide-pane__title-wrapper .slide-pane__title {
    font-size: 32px;
  } 

  .slide-pane {
    display: flex;
    flex-direction: column;
    background: #fff;
    min-width: 100px;
    height: 100%;
    box-shadow: 0 8px 8px rgba(0,0,0,0.5);
    transition: transform 0.5s;
    width: 100%;
    will-change: transform;

    @media (min-width: ${props => props.theme.screenSize.tablet}) {
      width: 900px;
    }
  }
  .slide-pane:focus {
    outline-style: none;
  }
  .slide-pane_from_right {
    margin-left: auto;
    transform: translateX(100%);
  }
  .slide-pane_from_right.ReactModal__Content--after-open {
    transform: translateX(0%);
  }
  .slide-pane_from_right.ReactModal__Content--before-close {
    transform: translateX(100%);
  }
  .slide-pane_from_left {
    margin-right: auto;
    transform: translateX(-100%);
  }
  .slide-pane_from_left.ReactModal__Content--after-open {
    transform: translateX(0%);
  }
  .slide-pane_from_left.ReactModal__Content--before-close {
    transform: translateX(-100%);
  }
  .slide-pane_from_bottom {
    height: 90vh;
    margin-top: 10vh;
    transform: translateY(100%);
  }
  .slide-pane_from_bottom.ReactModal__Content--after-open {
    transform: translateY(0%);
  }
  .slide-pane_from_bottom.ReactModal__Content--before-close {
    transform: translateY(100%);
  }
  .slide-pane__overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(0,0,0,0);
  }
  .slide-pane__overlay.ReactModal__Overlay--after-open {
    background-color: rgba(0,0,0,0.3);
    transition: background-color 0.5s;
  }
  .slide-pane__overlay.ReactModal__Overlay--before-close {
    background-color: rgba(0,0,0,0);
  }
  .slide-pane__header {
    display: flex;
    flex: 0 0 64px;
    align-items: center;
    background: #ebebeb;
    height: 64px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .slide-pane__title-wrapper {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-left: 32px;
    min-width: 0;
  }
  .slide-pane .slide-pane__title {
    font-size: 18px;
    font-weight: normal;
    max-width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    padding: 0;
  }
  .slide-pane__close {
    margin-left: 24px;
    padding: 16px;
    opacity: 0.7;
    cursor: pointer;
  }
  .slide-pane__close svg {
    width: 12px;
    padding: 0;
  }
  .slide-pane__content {
    position: relative;
    overflow-y: auto;
    padding: 24px 32px;
    flex: 1 1 auto;
  }
  .slide-pane__subtitle {
    font-size: 12px;
    margin-top: 2px;
  }
`;
