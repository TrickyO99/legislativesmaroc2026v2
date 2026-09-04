import { Suspense } from "react";
import { ResultsView } from "@/components/ResultsView";

export default function ResultatsPage() {
  return (
    <Suspense fallback={null}>
      <ResultsView />
    </Suspense>
  );
}
