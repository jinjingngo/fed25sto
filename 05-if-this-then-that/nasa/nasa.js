"use strict";

/**
 * APOD:  Astronomy Picture of the Day
 * Fetch APOD from NASA
 * @returns {Promise<Array<object>>}
 * [
 *  {
 *    date: string,
 *    explanation: string,
 *    hdurl: string,
 *    media+type: string,
 *    service_version: string,
 *    title: string,
 *    url: string
 *  }
 * ]
 */
export const getAPOD = async () => {
  const thumbs = true;
  const count = 12;
  const url = `https://nasa-apod.jinjingwu.workers.dev/?thumbs=${thumbs}&count=${count}`;
  try {
    const response = await fetch(url);
    const pictures = await response.json();
    return pictures;
  } catch (error) {
    console.error(error);
    return [];
  }
};
