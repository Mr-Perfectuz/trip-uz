import { Suspense } from "react";
import StatsContainer from "@/components/admin/StatsContainer";
import {
  ChartsLoadingContainer,
  StatsLoadingContaiener,
} from "@/components/admin/Loading";
import ChartsContainer from "@/components/admin/ChartsContainer";

function AdminPage() {
  return (
    <>
      <Suspense fallback={<StatsLoadingContaiener />}>
        <StatsContainer />
      </Suspense>
      <Suspense fallback={<ChartsLoadingContainer />}>
        <ChartsContainer />
      </Suspense>
    </>
  );
}

export default AdminPage;
