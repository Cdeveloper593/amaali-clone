import { redirect } from "next/navigation";

// The source 303-redirects logged-out visitors from the vendor shop
// settings to /my-account-2/; this local demo has no vendor session.
export default function VendorShopSettingsPage() {
  redirect("/my-account-2");
}
