import React from "react";
import Header from "../components/header-home";
import { dashboardFirstImage } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="w-[90%] mx-auto max-w-[1440px]">
        <div>
        </div>
        <div className="space-y-8 p-3 ">
          <section>
            <h2 className="text-xl font-bold mb-2">Listen Now</h2>
            <p className="text-sm text-gray-500 mb-4">
              Top picks for you. Updated daily.
            </p>
            <div className="overflow-x-scroll  ">
              <div className="flex gap-4">
                {dashboardFirstImage.map((value, i) => (
                  <div
                    key={i}
                    className="w-full max-w-[240px] object-cover h-full flex-shrink-0 rounded  shadow-sm bg-white"
                  >
                    <img
                      src={value}
                      alt="Cover"
                      className="w-full min-h-80 object-cover"
                    />
                    <div className="p-2">
                      <h3 className="text-sm font-semibold">
                        React Rendezvous
                      </h3>
                      <p className="text-xs text-gray-500">Ethan Byte</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-2">Made for You</h2>
            <p className="text-sm text-gray-500 mb-4">
              Your personal playlists. Updated daily.
            </p>
            <div className="overflow-x-scroll  ">
              <div className="flex gap-4  min-w-max">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="w-40 flex-shrink-0">
                    <img
                      src={`https://s3-alpha-sig.figma.com/img/7a58/78c1/bd313ce120b2061ac8b1cbd22d425fb8?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CgKb2p7jzNwcwwJdUsPC6s4C3v6etSHVXtfZQBvQghbjxBi3leGA1hHNt6rTzyFVN9Gbn9tD206OpsI~eugE299swRNYkTsWB-wrxLFENiwCZ2fngGH-zSQUlxIpfWAM1nTBYpacN70QZDRU~a4y4G2hKrFsddTVhIbE7m7fmFtVJ-NdftM-uPgWw3zSZVjkZAqt7YBPryWnx2rURuXZoDRp6mPVrLrmwDr8gFWW~rjYrdum90QoIi0uuCgm14pfrk7SuU3jKsyrIprCVlWQiXDo-QRMCfw3E1hphVXd3nY1~cbXbyGtzhUgZrbE4KArn2sNdLfWefnAmDCn1fiUjA__`}
                      alt="Cover"
                      className="rounded w-full h-36 object-cover"
                    />
                    <h3 className="text-sm mt-2 font-medium">
                      Playlist {i + 1}
                    </h3>
                    <p className="text-xs text-gray-500">By Creator</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
