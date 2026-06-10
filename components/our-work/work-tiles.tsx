import type { CaseStudyListItem } from "@/lib/case-studies/types";
import { WorkTile } from "./work-tile";

interface WorkTilesProps {
  studies: CaseStudyListItem[];
}

export function WorkTiles({ studies }: WorkTilesProps) {
  return (
    <section
      id="work-tiles"
      className="scroll-mt-24 bg-surface px-8 py-[clamp(64px,8vw,104px)]"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="work-tiles-grid grid gap-7">
          {studies.map((study) => (
            <WorkTile key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}
