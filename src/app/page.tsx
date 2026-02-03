import TitleSlide from "../components/slides/TitleSlide";
import ExecutiveSummarySlide from "../components/slides/ExecutiveSummarySlide";
import MonthlyPerformanceSlide from "../components/slides/MonthlyPerformanceSlide";
import TopPerformersSlide from "../components/slides/TopPerformersSlide";
import SlideTimelineSummary from "../components/slides/SlideTimelineSummary";
import SlideUpworkCapacity from "../components/slides/SlideUpworkCapacity";
import SlideDepartmentDeepDive from "../components/slides/SlideDepartmentDeepDive";
import SlideVARoster from "../components/slides/SlideVARoster";
import SlideGDRoster from "../components/slides/SlideGDRoster";
import SlideShiftMatrix from "../components/slides/SlideShiftMatrix";
import SlideMarketingOpsRoster from "../components/slides/SlideMarketingOpsRoster";
import SlideGrowthStrategy from "../components/slides/SlideGrowthStrategy";
// import SlideSuccessMetrics from "../components/slides/SlideSuccessMetrics";
import SlideCriticalParadox from "../components/slides/SlideCriticalParadox";
import SlideExecutionEnablers from "../components/slides/SlideExecutionEnablers";
import SlideActionPlan from "../components/slides/SlideActionPlan";
import SlideRecommendations from "../components/slides/SlideRecommendations";
import SlideKeyEnablers from "../components/slides/SlideKeyEnablers";

export default function Home() {
  return (
    <main>
      <TitleSlide />
      <ExecutiveSummarySlide />
      <MonthlyPerformanceSlide />
      <TopPerformersSlide />
      <SlideTimelineSummary />
      <SlideUpworkCapacity />
      <SlideDepartmentDeepDive />
      <SlideVARoster />
      <SlideGDRoster />
      <SlideMarketingOpsRoster />
      <SlideShiftMatrix />
      <SlideGrowthStrategy />
      {/* <SlideSuccessMetrics /> */}
      <SlideCriticalParadox />
      <SlideExecutionEnablers />
      <SlideActionPlan />
      <SlideRecommendations />
      <SlideKeyEnablers />
    </main>
  );
}
