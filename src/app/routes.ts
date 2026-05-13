import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { MethodPage } from "./pages/Method";
import { WorkPage } from "./pages/Work";
import { CaseStudyPage } from "./pages/CaseStudy";
import { StudioPage } from "./pages/Studio";
import { InsightsPage } from "./pages/Insights";
import { InsightPage } from "./pages/Insight";
import { ContactPage } from "./pages/Contact";
import { BookPage } from "./pages/Book";
import { NotFoundPage } from "./pages/NotFound";
import { RecordPage } from "./pages/Record";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "work", Component: WorkPage },
      { path: "work/:slug", Component: CaseStudyPage },
      { path: "studio", Component: StudioPage },
      { path: "method", Component: MethodPage },
      { path: "insights", Component: InsightsPage },
      { path: "insights/:slug", Component: InsightPage },
      { path: "contact", Component: ContactPage },
      { path: "book", Component: BookPage },
      { path: "record", Component: RecordPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
