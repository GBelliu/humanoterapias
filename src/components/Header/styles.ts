import styled from "styled-components";

export const Container = styled.div`
  height: 75px;
  width: 100%;
  background-color: #040439;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  position: fixed;
`;

export const Content = styled.div`
  max-width: 1394px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  height: 100%;
  img {
    height: 100%;
  }

  @media (max-width: 1750px) {
    max-width: 965px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
  }

  @media (max-width: 767px) {
    max-width: 350px;
  }

  .bm-burger-button {
    position: sticky;
    width: 36px;
    height: 30px;
    margin-top: auto;
    margin-bottom: auto;
    display: none;
    z-index: 990 !important;
    @media (max-width: 1023px) {
      display: flex;
    }
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #fff;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #fff !important;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #fff;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
    top: 0;
    right: 0;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #040439;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #fff;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;

    color: #fff;
    margin-bottom: 10px;
    text-align: left;
    text-decoration: none;
    transition: color 0.2s;
  }

  .bm-item:hover {
    color: #fff;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
    right: 0;
    top: 0;
  }
`;
export const ItemsMenu = styled.div`
  max-width: 1394px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  gap: 35px;
  a {
    font-size: 16px;
    text-decoration: none;
    color: #fff;
  }

  @media (max-width: 1750px) {
    max-width: 965px;
  }
  @media (max-width: 1023px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
  }

  @media (max-width: 767px) {
    max-width: 350px;
  }
`;
