import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import Home from "../pages/Home/Home";
import TestReducer from "../pages/TestReducer";
import TestGenerics from "../pages/Generics";
import TestRef from "../pages/TestRef";
import TestCallback from "../pages/TestCallback";
import TestMemo from "../pages/TestMemo";
import TestPortal from "../pages/TestPortal";
import TestForwardRef from "../pages/TestForwardRef";
import TestContext from "../pages/TestContext";
import HOC from "../pages/HOC";
import { Test } from "../pages/Test";
import DOM from "../pages/DOM";
import TestCustomHook from "../pages/TestCustomHook";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="reducer" element={<TestReducer />} />
      <Route path="generics" element={<TestGenerics />} />
      <Route path="ref" element={<TestRef />} />
      <Route path="callback" element={<TestCallback />} />
      <Route path="memo" element={<TestMemo />} />
      <Route path="portal" element={<TestPortal />} />
      <Route path="forward-ref" element={<TestForwardRef />} />
      <Route path="context" element={<TestContext />} />
      <Route path="hoc" element={<HOC />} />
      <Route path="test" element={<Test />} />
      <Route path="dom" element={<DOM />} />
      <Route path="hook" element={<TestCustomHook />} />
    </Route>
  )
);

