import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const navSections = [
  {
    title: "Discover",
    links: ["Listen Now", "Browse", "Radio"],
  },
  {
    title: "Library",
    links: ["Playlists", "Songs", "Made for you", "Artists", "Albums"],
  },
  {
    title: "Playlists",
    links: [
      "Recently Added",
      "Recently Played",
      "Top Songs",
      "Top Albums",
      "Top Artists",
      "Logic Discography",
      "Bedtime Beats",
    ],
  },
];

export const dashboardFirstImage = [
  "https://s3-alpha-sig.figma.com/img/8857/95c7/4efe22646db1fec8e1d3397219c28b42?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hweO~b3K5ynNPbwiu457D4-NR38bdfanlb82b5IksjDgCZzlJgEPfEPViBF59QSaiL5sxHuOoPTarZ3e~yE-RSQ5pWGau3kaQurQ0Y0fBwFHfn~mTSqA27-81UXHKZJci6~-CrUcEkn7AVmciY-Va75OEG5dt6lsyGdVNERf59wbjZqqefdzpA7XMTh-Kpm0z6r320DMXwWFixuYUeKBaoqj8dWu5cuUoBnxN2n17JwftPP-G7ZMHqUIY0AOzPRS~NLSt7~sVNvxUym~i-N~XGg0voUkgX8qF3ZJHtX8f613KuSRlNZZuCqeLWs1c9M3ODytqcoILHUI6u1c2jnfaw__",
  "https://s3-alpha-sig.figma.com/img/7ca3/890a/a686fd6b31b0ff10be3544bc6969e429?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WzfZKXHPQKru0XGOyQom6l88cG5HuZpPIpxad~kmGsVpP-Qp0YXBnNlCclEFxOoZYLf1348rKsnwXx6mwubeBGOUlc1TwV42cIyeuIUIn4ELUeMymUVPGSNkJIeMJslddcnz8IqkkWJwI-M4RIJnmLR9MXqatWICHeftglwfdIasMVBJu-k3X4g5KZ2nWzXs5E1bjrZ53foZRbwtKArumRmTKGohaa42jiix-ZQuUbJwhm-jVvqWgz~4VjEmBTLX5ULW-2NePi0aOs65QBwkjTa469LtKWuMnLsrU-Q2~iTy9wSBd9ObuUCH0waYFWfYYv~3tWMwoxtRu-ldas6r1A__",
  "https://s3-alpha-sig.figma.com/img/73cd/fc05/d32c714050ce3ccd44f5299280b7816d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cpHLbCgxEqvq2LBXRdYJ~TS21vRY4K-jT-qyz3DtYp1eqSwEROG6R2T~MWl85eZeNDP42aOwPX5~kCf03UXLceq6-AzQnGn4afA4fD4JbkfhHEqspUQZXjNecjIs0yaPrbeVXCb-CmNVHWPYy8RJXRTJI9MUinNlA72t~-4KmFKBZrQDVIpctIDy6AuQb5SENFda7RSOMFm-5idOtShUaJCpaoQZXiyGxxHpqWSanWJrm3c-TnMPOO-2fk53XXSM6mkSqemPLc0NZ5iwZg54y6gfQuOOTai6GccBpOdZikaAzQ8DrdfopC0KogD-Va-LVSt1pwsnf7~q~ZqWDdvyHg__",
  "https://s3-alpha-sig.figma.com/img/8857/95c7/4efe22646db1fec8e1d3397219c28b42?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hweO~b3K5ynNPbwiu457D4-NR38bdfanlb82b5IksjDgCZzlJgEPfEPViBF59QSaiL5sxHuOoPTarZ3e~yE-RSQ5pWGau3kaQurQ0Y0fBwFHfn~mTSqA27-81UXHKZJci6~-CrUcEkn7AVmciY-Va75OEG5dt6lsyGdVNERf59wbjZqqefdzpA7XMTh-Kpm0z6r320DMXwWFixuYUeKBaoqj8dWu5cuUoBnxN2n17JwftPP-G7ZMHqUIY0AOzPRS~NLSt7~sVNvxUym~i-N~XGg0voUkgX8qF3ZJHtX8f613KuSRlNZZuCqeLWs1c9M3ODytqcoILHUI6u1c2jnfaw__",
  "https://s3-alpha-sig.figma.com/img/7ca3/890a/a686fd6b31b0ff10be3544bc6969e429?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WzfZKXHPQKru0XGOyQom6l88cG5HuZpPIpxad~kmGsVpP-Qp0YXBnNlCclEFxOoZYLf1348rKsnwXx6mwubeBGOUlc1TwV42cIyeuIUIn4ELUeMymUVPGSNkJIeMJslddcnz8IqkkWJwI-M4RIJnmLR9MXqatWICHeftglwfdIasMVBJu-k3X4g5KZ2nWzXs5E1bjrZ53foZRbwtKArumRmTKGohaa42jiix-ZQuUbJwhm-jVvqWgz~4VjEmBTLX5ULW-2NePi0aOs65QBwkjTa469LtKWuMnLsrU-Q2~iTy9wSBd9ObuUCH0waYFWfYYv~3tWMwoxtRu-ldas6r1A__",
  "https://s3-alpha-sig.figma.com/img/73cd/fc05/d32c714050ce3ccd44f5299280b7816d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cpHLbCgxEqvq2LBXRdYJ~TS21vRY4K-jT-qyz3DtYp1eqSwEROG6R2T~MWl85eZeNDP42aOwPX5~kCf03UXLceq6-AzQnGn4afA4fD4JbkfhHEqspUQZXjNecjIs0yaPrbeVXCb-CmNVHWPYy8RJXRTJI9MUinNlA72t~-4KmFKBZrQDVIpctIDy6AuQb5SENFda7RSOMFm-5idOtShUaJCpaoQZXiyGxxHpqWSanWJrm3c-TnMPOO-2fk53XXSM6mkSqemPLc0NZ5iwZg54y6gfQuOOTai6GccBpOdZikaAzQ8DrdfopC0KogD-Va-LVSt1pwsnf7~q~ZqWDdvyHg__",
  "https://s3-alpha-sig.figma.com/img/8857/95c7/4efe22646db1fec8e1d3397219c28b42?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hweO~b3K5ynNPbwiu457D4-NR38bdfanlb82b5IksjDgCZzlJgEPfEPViBF59QSaiL5sxHuOoPTarZ3e~yE-RSQ5pWGau3kaQurQ0Y0fBwFHfn~mTSqA27-81UXHKZJci6~-CrUcEkn7AVmciY-Va75OEG5dt6lsyGdVNERf59wbjZqqefdzpA7XMTh-Kpm0z6r320DMXwWFixuYUeKBaoqj8dWu5cuUoBnxN2n17JwftPP-G7ZMHqUIY0AOzPRS~NLSt7~sVNvxUym~i-N~XGg0voUkgX8qF3ZJHtX8f613KuSRlNZZuCqeLWs1c9M3ODytqcoILHUI6u1c2jnfaw__",
  "https://s3-alpha-sig.figma.com/img/7ca3/890a/a686fd6b31b0ff10be3544bc6969e429?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WzfZKXHPQKru0XGOyQom6l88cG5HuZpPIpxad~kmGsVpP-Qp0YXBnNlCclEFxOoZYLf1348rKsnwXx6mwubeBGOUlc1TwV42cIyeuIUIn4ELUeMymUVPGSNkJIeMJslddcnz8IqkkWJwI-M4RIJnmLR9MXqatWICHeftglwfdIasMVBJu-k3X4g5KZ2nWzXs5E1bjrZ53foZRbwtKArumRmTKGohaa42jiix-ZQuUbJwhm-jVvqWgz~4VjEmBTLX5ULW-2NePi0aOs65QBwkjTa469LtKWuMnLsrU-Q2~iTy9wSBd9ObuUCH0waYFWfYYv~3tWMwoxtRu-ldas6r1A__",
  "https://s3-alpha-sig.figma.com/img/73cd/fc05/d32c714050ce3ccd44f5299280b7816d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cpHLbCgxEqvq2LBXRdYJ~TS21vRY4K-jT-qyz3DtYp1eqSwEROG6R2T~MWl85eZeNDP42aOwPX5~kCf03UXLceq6-AzQnGn4afA4fD4JbkfhHEqspUQZXjNecjIs0yaPrbeVXCb-CmNVHWPYy8RJXRTJI9MUinNlA72t~-4KmFKBZrQDVIpctIDy6AuQb5SENFda7RSOMFm-5idOtShUaJCpaoQZXiyGxxHpqWSanWJrm3c-TnMPOO-2fk53XXSM6mkSqemPLc0NZ5iwZg54y6gfQuOOTai6GccBpOdZikaAzQ8DrdfopC0KogD-Va-LVSt1pwsnf7~q~ZqWDdvyHg__",
];
