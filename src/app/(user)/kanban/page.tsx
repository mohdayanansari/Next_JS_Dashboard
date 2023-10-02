import { Banner, DashboardHeader, KanbanBoard } from "@/components/index";

type Props = {};

const KanbanPage = (props: Props) => {
  return (
    <section className={`flex-1`}>
      {/* Header */}
      <DashboardHeader />
      {/* main */}
      <section className=" p-[10px] lg:p-[20px] dashboard-scroll-settings">
        <Banner />
        <KanbanBoard />
      </section>
    </section>
  );
};

export default KanbanPage;
