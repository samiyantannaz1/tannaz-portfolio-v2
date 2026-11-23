
// import { getImageProps } from "next/image";
// import type { CSSProperties } from "react";

// type ResponsivePhotoProps = {
//   desktop: string;
//   mobile?: string;
//   alt: string;
//   sizes?: string;
//   priority?: boolean;
//   desktopPosition?: string;
//   mobilePosition?: string;
// };

// export default function ResponsivePhoto({
//   desktop,
//   mobile,
//   alt,
//   sizes = "100vw",
//   priority = false,
//   desktopPosition = "50% 30%",
//   mobilePosition = "50% 20%",
// }: ResponsivePhotoProps) {
//   const common = { alt, fill: true, quality: 90, sizes, priority };

//   const { props: d } = getImageProps({ ...common, src: desktop });
//   const { props: m } = getImageProps({ ...common, src: mobile ?? desktop });

//   const { srcSet: mobileSet, ...img } = m;

//   return (
//     <picture>
//       <source media="(min-width: 768px)" srcSet={d.srcSet} />
//       <source media="(max-width: 767px)" srcSet={mobileSet} />
//       <img
//         {...img}
//         alt={alt}
//         style={
//           {
//             ...img.style,
//             "--pd": desktopPosition,
//             "--pm": mobilePosition,
//           } as CSSProperties
//         }
//         className="object-cover [object-position:var(--pm)] md:[object-position:var(--pd)]"
//       />
//     </picture>
//   );
// }



import { getImageProps } from "next/image";
import type { CSSProperties } from "react";
import ScrollImage from "@/components/ScrollImage";

type ResponsivePhotoProps = {
  desktop: string;
  mobile?: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  desktopPosition?: string;
  mobilePosition?: string;
  scrollZoom?: boolean;
};

export default function ResponsivePhoto({
  desktop,
  mobile,
  alt,
  sizes = "100vw",
  priority = false,
  desktopPosition = "50% 30%",
  mobilePosition = "50% 20%",
  scrollZoom = false,
}: ResponsivePhotoProps) {
  const common = { alt, fill: true, quality: 90, sizes, priority };

  const { props: d } = getImageProps({ ...common, src: desktop });
  const { props: m } = getImageProps({ ...common, src: mobile ?? desktop });

  const { srcSet: mobileSet, ...img } = m;

  const picture = (
    <picture>
      <source media="(min-width: 768px)" srcSet={d.srcSet} />
      <source media="(max-width: 767px)" srcSet={mobileSet} />
      <img
        {...img}
        alt={alt}
        style={
          {
            ...img.style,
            "--pd": desktopPosition,
            "--pm": mobilePosition,
          } as CSSProperties
        }
        className="object-cover [object-position:var(--pm)] md:[object-position:var(--pd)]"
      />
    </picture>
  );

  return scrollZoom ? (
    <ScrollImage>{picture}</ScrollImage>
  ) : (
    picture
  );
}
