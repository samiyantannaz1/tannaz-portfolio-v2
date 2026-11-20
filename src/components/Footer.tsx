

// import type { Dictionary } from "@/lib/dictionaries";

// export default function Footer({ dict }: { dict: Dictionary["footer"] }) {
//   return (
//     <footer className="border-t border-white/10 px-6 py-12 text-[11px] uppercase tracking-[0.2em] text-neutral-400 rtl:tracking-normal">
//       <div className="mx-auto grid max-w-7xl items-center gap-4 text-center md:grid-cols-3">
//         <span className="md:text-start">{dict.role}</span>
//         <span className="font-display text-base normal-case text-white/40">
//           {dict.name}
//         </span>
//         <span className="md:text-end">
//           {dict.name} © {new Date().getFullYear()}
//         </span>
//       </div>
//     </footer>
//   );
// }


import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";

export default function Footer({ dict }: { dict: Dictionary["footer"] }) {
  return (
    <footer className="border-t border-white/10 px-6 py-12 text-[11px] uppercase tracking-[0.2em] text-neutral-400 rtl:tracking-normal">
      <div className="mx-auto grid max-w-7xl items-center gap-6 text-center md:grid-cols-3">
        <span className="md:text-start">{dict.role}</span>
        <span className="flex justify-center">
          <Image
            src="/images/tannaz-angular.svg"

            alt="Tannaz"
            width={180}
            height={43}
            className="h-9 w-auto opacity-90"
          />
        </span>
        <span className="md:text-end">
          {dict.name} © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}