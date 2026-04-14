import { writeFile } from 'fs/promises';

const logos = [
  {
    name: 'public/logo-takeuforward.png',
    url: 'https://media.licdn.com/dms/image/v2/D4D0BAQFBmwNKR-dcVQ/company-logo_200_200/B4DZoSsOAoIgAI-/0/1761250173462/takeuforward_logo?e=1777507200&v=beta&t=Ftjpxtys0pfPqcy31dIyV75kRQe1SJAWR4BAR5DYQfg',
  },
  {
    name: 'public/logo-dodox.png',
    url: 'https://media.licdn.com/dms/image/v2/D4D0BAQHZJsmoAKVmPw/company-logo_200_200/B4DZwSvXGvKEAI-/0/1769840931723/dodox_in_logo?e=1777507200&v=beta&t=5U3zwAYU8d_npoov85vqEgSRRriaosgRJKHl35Pgydc',
  },
  {
    name: 'public/logo-quvor.png',
    url: 'https://media.licdn.com/dms/image/v2/C510BAQGCKYtAVVPNng/company-logo_200_200/company-logo_200_200/0/1630610640856/quvor_logo?e=1777507200&v=beta&t=Ley2Wwb3CpFgaLnfoJ4WwgF-ut_oM4Eaga9UxdlO-tY',
  },
];

for (const logo of logos) {
  const res = await fetch(logo.url);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(logo.name, buf);
  console.log(`Downloaded ${logo.name} (${buf.length} bytes)`);
}
console.log('All done!');
