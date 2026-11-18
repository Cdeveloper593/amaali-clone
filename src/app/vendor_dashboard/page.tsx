import { redirect } from "next/navigation";

// The source 303-redirects logged-out visitors from the vendor dashboard
// to /my-account-2/; this local demo has no vendor session, so mirror it.
export default function VendorDashboardPage() {
  redirect("/my-account-2");
}
