import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const pictures = [
  "DSC00680",
  "DSC00933",
  "DSC00966",
  "DSC00983",
  "DSC01011",
  "DSC01040",
  "DSC01064",
  "DSC01071",
  "DSC01103",
  "DSC01145",
  "DSC01420",
  "DSC01461",
  "DSC01489",
  "DSC02031",
  "DSC02064",
  "DSC02069",
];

export const pageAtom1 = atom(0);
export const pageAtom2 = atom(0);
export const pages = [
  {
    front: "book-back",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom1);
  const [page2, setPage2] = useAtom(pageAtom2)

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3")
    audio.play()
  }, [page])

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3")
    audio.play()
  }, [page2])
  return (
    <>
    </>
  );
};
