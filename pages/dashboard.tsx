import type { ReactElement } from "react";
import { Alert, Progress, RadialProgress, Stats } from "react-daisyui";
import { Section } from "../components/Section";
import { AppLayout } from "../layouts/AppLayout";
import type { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  return (
      <div className="w-full text-left">
        <div className="flex flex-col gap-y-4 sm:gap-y-8">
          <Section title="Overview">
            <Stats className="w-full flex flex-col md:flex-row">
              <Stats.Stat className="place-items-center">
                <Stats.Stat.Item variant="title">Total Successful Initiatives</Stats.Stat.Item>
                <Stats.Stat.Item variant="value">65</Stats.Stat.Item>
                <Stats.Stat.Item variant="desc">
                  From January 1st to June 1st
                </Stats.Stat.Item>
              </Stats.Stat>

              <Stats.Stat className="place-items-center">
                <Stats.Stat.Item variant="title">New Dao Members</Stats.Stat.Item>
                <Stats.Stat.Item variant="value" className="text-secondary">
                  210
                </Stats.Stat.Item>
                <Stats.Stat.Item variant="desc" className="text-secondary">
                  ↗︎ 37 (17.62%)
                </Stats.Stat.Item>
              </Stats.Stat>

              <Stats.Stat className="place-items-center">
                <Stats.Stat.Item variant="title">Current Active Membership</Stats.Stat.Item>
                <Stats.Stat.Item variant="value">3,051</Stats.Stat.Item>
                <Stats.Stat.Item variant="desc">↘︎ 31 (10%)</Stats.Stat.Item>
              </Stats.Stat>
            </Stats>
          </Section>
          <Section title="Progress">
            <div className="flex items-center flex-col sm:flex-row gap-x-8">
              <div className="flex flex-col items-center m-2">
                <RadialProgress
                    value={81}
                    size="12rem"
                    color="warning"
                    thickness="2rem"
                >
                  72%
                </RadialProgress>
                <span className="mt-4">DaoDash Sprint Progress</span>
              </div>
              <div className="flex flex-col w-full gap-y-4">
                <div className="">
                  <span>Revamp Dao Landing Page</span>
                  <Progress
                      className="w-full progress-primary h-[24px]"
                      value={72}
                      max={100}
                  />
                </div>
                <div className="">
                  <span>Complete Interview Recordings for the Quarter for the Dao Podcast</span>
                  <Progress
                      className="w-full progress-success h-[24px]"
                      value={42}
                      max={100}
                  />
                </div>

                <div className="">
                  <span>Finish Art for Season 2 NFT</span>
                  <Progress
                      className="w-full progress-secondary h-[24px]"
                      value={33}
                      max={100}
                  />
                </div>
              </div>
            </div>
          </Section>
          <div className="flex flex-col sm:flex-row gap-x-8">
            <Section title="Status" className="">
              <div className="flex flex-col sm:flex-row  justify-around text-xl">
                <div className="flex gap-x-2 items-center">
                  <div className="rounded-full w-6 h-6 bg-success"></div>
                  <span>Landing Page Revamp</span>
                </div>
                <div className="flex gap-x-2 items-center">
                  <div className="rounded-full w-6 h-6 bg-error"></div>
                  <span>Dao Podcast Recordings</span>
                </div>
                <div className="flex gap-x-2 items-center">
                  <div className="rounded-full w-6 h-6 bg-success"></div>
                  <span>Season 2 NFT Art</span>
                </div>
              </div>
            </Section>
            <Section
                title="DaoDash Alerts"
                className="flex flex-col gap-y-2 sm:overflow-y-scroll sm:max-h-[250px]"
            >
              <Alert status="error">
                Podcast Guest had to reschedule. Replacement guest is being scheduled. Contributing Dao Member: #ZackAttack#32 (5:24pm)
              </Alert>
              <Alert status="success">
                The UX designers have successfully completed the UX designs, and passed them to the frontend team. Contributing Dao Members: #GeekyNaruto and Amish42 (1:08pm)
              </Alert>
              <Alert status="success">
                3D renders for artwork for season 2 of NFTs successfully exported, and ready to be integrated with code. Contributing Dao Members: DevKev#52 (12:17pm)
              </Alert>
              <Alert status="info">
                The DAO NFT floor has incresed by 9.42% in the past 72 hours.
                (12:02pm)
              </Alert>
            </Section>
          </div>
        </div>
      </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
      <AppLayout
          title="DaoDash"
          description="The Ultimate Dashboard Solution for Everything Daos"
      >
        {page}
      </AppLayout>
  );
};

export default Page;
