/** Display derivatives of project screenshots; the original assets stay intact. */
export function projectImage(slug: 'water-machine' | 'cell-tower' | 'ovin') {
  const base = `${process.env.PUBLIC_URL}/projects/${slug}`;
  return {
    src: `${base}-1280.jpg`,
    srcSet: `${base}-640.jpg 640w, ${base}-1280.jpg 1280w`,
  };
}
