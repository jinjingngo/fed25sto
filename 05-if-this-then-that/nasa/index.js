"use strict";
import { getAPOD } from "./nasa.js";

const GALLERY_ELEMENTS = {
  CARD: "gallery__card",
  PICTURE: "gallery__picture",
  VIDEO: "gallery__video",
  TITLE: "gallery__title",
};

/**
 * <a>
 *  <img />
 *  <span></span>
 * </a>
 * @param {object} picture
 */
const mountPictureCard = (picture, container) => {
  const { media_type, hdurl, title, url, thumbnail_url } = picture;
  const linkEle = document.createElement("a");
  linkEle.href = media_type !== "video" ? hdurl : url;
  linkEle.target = "_blank";
  linkEle.classList.add(GALLERY_ELEMENTS.CARD);

  const imageEle = document.createElement("img");
  imageEle.classList.add(
    media_type === "video" ? GALLERY_ELEMENTS.VIDEO : GALLERY_ELEMENTS.PICTURE
  );
  imageEle.src = media_type !== "video" ? url : thumbnail_url;

  const titleEle = document.createElement("span");
  titleEle.textContent = title;
  titleEle.classList.add(GALLERY_ELEMENTS.TITLE);

  linkEle.append(imageEle, titleEle);
  container.append(linkEle);
};

const unmountPictureCard = (container) => {
  const pictures = [...container.children].filter(
    (child) => child.tagName === "A"
  );
  pictures.forEach((picture) => picture.remove());
};

const section = document.querySelector("#gallery");

const main = async () => {
  const pictures = await getAPOD();
  const validPictures = pictures.filter(({ media_type }) =>
    ["image", "video"].includes(media_type)
  );

  validPictures.forEach((picture) => mountPictureCard(picture, section));
};

const refreshEle = document.querySelector("#refresh");
refreshEle.addEventListener("click", () => {
  unmountPictureCard(section);
  main();
});

main();
