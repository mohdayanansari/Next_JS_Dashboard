import { Banner, DashboardHeader } from "@/components/index";

type Props = {};

const CalenderPage = (props: Props) => {
  return (
    <section className={`flex-1`}>
      {/* Header */}
      <DashboardHeader />
      {/* main */}
      <section className=" p-[10px] lg:p-[20px] dashboard-scroll-settings">
        <Banner />
      </section>
    </section>
  );
};

export default CalenderPage;
