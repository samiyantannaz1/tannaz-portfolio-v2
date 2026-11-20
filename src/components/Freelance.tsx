// const benefits = [
//   {
//     title: "Direct line to the designer",
//     text: "No middlemen or account managers. You talk to the person who designs and codes your site.",
//   },
//   {
//     title: "Full focus on your project",
//     text: "Your project gets personal attention and never gets lost among dozens of others.",
//   },
//   {
//     title: "Fast decisions, fast delivery",
//     text: "Your feedback goes straight into the work, without queues or long meetings.",
//   },
//   {
//     title: "Flexibility",
//     text: "Scheduling and scope adapt to your needs, and changes along the way are easy to make.",
//   },
//   {
//     title: "Transparent, fair pricing",
//     text: "No agency overhead, and a clear quote before any work begins.",
//   },
//   {
//     title: "Support after launch",
//     text: "The person who built your site stays available after it goes live.",
//   },
// ];

// export default function Freelance() {
//   return (
//     <section className="bg-secondary px-6 py-28 text-deep">
//       <div className="mx-auto max-w-7xl">
//         <span className="mb-4 block text-[11px] uppercase tracking-[0.3em] text-wine">
//           Freelance
//         </span>
//         <h2 className="mb-6 font-display text-5xl uppercase leading-[1.1] tracking-wide md:text-6xl">
//           Why work with a freelancer
//         </h2>
//         <p className="max-w-2xl text-[#6e5f5a]">
//           I work independently, which means from the first conversation to the
//           final delivery you deal with me directly, and every decision is made
//           together with you.
//         </p>

//         <div className="mt-12 grid gap-px border border-[#d6c8bb] bg-[#d6c8bb] md:grid-cols-2 lg:grid-cols-3">
//           {benefits.map((b, i) => (
//             <div key={b.title} className="bg-secondary px-8 py-9">
//               <b className="text-xs font-medium tracking-[0.25em] text-wine">
//                 {String(i + 1).padStart(2, "0")}
//               </b>
//               <h3 className="mb-2 mt-3 font-display text-2xl">{b.title}</h3>
//               <p className="text-[#6e5f5a]">{b.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import type { Dictionary } from "@/lib/dictionaries";

export default function Freelance({
  dict,
}: {
  dict: Dictionary["freelance"];
}) {
  return (
    <section className="bg-secondary px-6 py-28 text-deep">
      <div className="mx-auto max-w-7xl">
        <span className="mb-4 block text-[11px] uppercase tracking-[0.3em] text-wine rtl:tracking-normal">
          {dict.eyebrow}
        </span>
        <h2 className="mb-6 font-display text-5xl uppercase leading-[1.1] tracking-wide rtl:leading-[1.4] rtl:tracking-normal md:text-6xl">
          {dict.title}
        </h2>
        <p className="max-w-2xl text-[#6e5f5a] rtl:leading-loose">
          {dict.text}
        </p>

        <div className="mt-12 grid gap-px border border-[#d6c8bb] bg-[#d6c8bb] md:grid-cols-2 lg:grid-cols-3">
          {dict.benefits.map((b, i) => (
            <div key={b.title} className="bg-secondary px-8 py-9">
              <b className="text-xs font-medium tracking-[0.25em] text-wine">
                {String(i + 1).padStart(2, "0")}
              </b>
              <h3 className="mb-2 mt-3 font-display text-2xl rtl:leading-snug">
                {b.title}
              </h3>
              <p className="text-[#6e5f5a] rtl:leading-loose">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}