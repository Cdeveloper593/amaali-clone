"use client";

import { useEffect, useState } from "react";
import { PageHeader } from "@/components/sites/amaali/blog";

const SESSION_KEY = "amaali-session";
const DEMO_USER = "customer";
const DEMO_PASS = "customerofpassword";

type Tab = "dashboard" | "orders" | "downloads" | "addresses" | "account";

const TABS: { id: Tab; label: string }[] = [
  { id: "dashboard", label: "Dashboard" },
  { id: "orders", label: "Orders" },
  { id: "downloads", label: "Downloads" },
  { id: "addresses", label: "Addresses" },
  { id: "account", label: "Account details" },
];

export default function MyAccountPage() {
  const [user, setUser] = useState<string | null>(null);
  const [tab, setTab] = useState<Tab>("dashboard");
  const [loginError, setLoginError] = useState("");
  const [registerNote, setRegisterNote] = useState("");
  const [savedNote, setSavedNote] = useState("");
  const [hydrated, setHydrated] = useState(false);

  // Read the persisted session after mount (client-only storage).
  useEffect(() => {
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUser(localStorage.getItem(SESSION_KEY));
    } catch {
      setUser(null);
    }
    setHydrated(true);
  }, []);

  function login(name: string, pass: string) {
    if (name.trim() === DEMO_USER && pass === DEMO_PASS) {
      try {
        localStorage.setItem(SESSION_KEY, DEMO_USER);
      } catch {
        // storage unavailable; session still shown for this visit
      }
      setUser(DEMO_USER);
      setLoginError("");
    } else {
      setLoginError("The user name or email address isn’t correct.");
    }
  }

  function logout() {
    try {
      localStorage.removeItem(SESSION_KEY);
    } catch {
      // ignore
    }
    setUser(null);
    setTab("dashboard");
  }

  if (!hydrated) {
    return (
      <main className="bg-white">
        <PageHeader title="My Account" crumb="My Account" />
      </main>
    );
  }

  if (user) {
    return (
      <main className="bg-white">
        <PageHeader title="My Account" crumb="My Account" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 lg:grid-cols-[220px_1fr]">
          <nav className="space-y-1" aria-label="My account">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`block w-full border px-4 py-2.5 text-left text-sm font-semibold ${
                  tab === t.id
                    ? "border-orange-500 bg-orange-500 text-white"
                    : "border-neutral-200 text-neutral-700 hover:border-orange-500 hover:text-orange-500"
                }`}
              >
                {t.label}
              </button>
            ))}
            <button
              type="button"
              onClick={logout}
              className="block w-full border border-neutral-200 px-4 py-2.5 text-left text-sm font-semibold text-neutral-700 hover:border-orange-500 hover:text-orange-500"
            >
              Log out
            </button>
          </nav>

          <div>
            {tab === "dashboard" ? (
              <div>
                <p className="text-neutral-700">
                  Hello <strong>{user}</strong> (not {user}?{" "}
                  <button type="button" onClick={logout} className="text-orange-500 hover:underline">
                    Log out
                  </button>
                  )
                </p>
                <p className="mt-4 leading-relaxed text-neutral-600">
                  From your account dashboard you can view your recent orders, manage your shipping and billing
                  addresses, and edit your password and account details.
                </p>
              </div>
            ) : null}
            {tab === "orders" ? <p className="border border-neutral-200 bg-neutral-50 px-4 py-6 text-neutral-600">No order has been made yet.</p> : null}
            {tab === "downloads" ? <p className="border border-neutral-200 bg-neutral-50 px-4 py-6 text-neutral-600">No downloads available yet.</p> : null}
            {tab === "addresses" ? (
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-lg font-bold text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">Billing address</h3>
                  <p className="mt-2 text-neutral-600">You have not set up this type of address yet.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">Shipping address</h3>
                  <p className="mt-2 text-neutral-600">You have not set up this type of address yet.</p>
                </div>
              </div>
            ) : null}
            {tab === "account" ? (
              <form
                className="max-w-lg space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSavedNote("Account details changed successfully.");
                }}
              >
                {savedNote ? <p className="rounded bg-green-50 px-4 py-3 text-sm text-green-700">{savedNote}</p> : null}
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-sm">
                    <span className="mb-1 block font-semibold text-neutral-700">First name *</span>
                    <input required name="first_name" className="w-full border border-neutral-300 px-3 py-2" />
                  </label>
                  <label className="text-sm">
                    <span className="mb-1 block font-semibold text-neutral-700">Last name *</span>
                    <input required name="last_name" className="w-full border border-neutral-300 px-3 py-2" />
                  </label>
                </div>
                <label className="block text-sm">
                  <span className="mb-1 block font-semibold text-neutral-700">Display name *</span>
                  <input required name="display_name" defaultValue={user} className="w-full border border-neutral-300 px-3 py-2" />
                  <span className="mt-1 block text-xs text-neutral-500">
                    This will be how your name will be displayed in the account section and in reviews
                  </span>
                </label>
                <label className="block text-sm">
                  <span className="mb-1 block font-semibold text-neutral-700">Email address *</span>
                  <input required type="email" name="email" className="w-full border border-neutral-300 px-3 py-2" />
                </label>
                <fieldset className="border border-neutral-200 p-4">
                  <legend className="px-2 text-sm font-bold text-neutral-800">Password change</legend>
                  <div className="space-y-4">
                    <label className="block text-sm">
                      <span className="mb-1 block font-semibold text-neutral-700">Current password (leave blank to leave unchanged)</span>
                      <input type="password" name="password_current" autoComplete="current-password" className="w-full border border-neutral-300 px-3 py-2" />
                    </label>
                    <label className="block text-sm">
                      <span className="mb-1 block font-semibold text-neutral-700">New password (leave blank to leave unchanged)</span>
                      <input type="password" name="password_1" autoComplete="new-password" className="w-full border border-neutral-300 px-3 py-2" />
                    </label>
                    <label className="block text-sm">
                      <span className="mb-1 block font-semibold text-neutral-700">Confirm new password</span>
                      <input type="password" name="password_2" autoComplete="new-password" className="w-full border border-neutral-300 px-3 py-2" />
                    </label>
                  </div>
                </fieldset>
                <button
                  type="submit"
                  className="bg-neutral-800 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-orange-500"
                >
                  Save changes
                </button>
              </form>
            ) : null}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <PageHeader title="My Account" crumb="My Account" />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <p className="mb-8 border border-neutral-200 bg-neutral-50 px-4 py-4 text-sm text-neutral-600">
          You can login Website by account “customer/customerofpassword” to check Login/Register status
        </p>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="border border-neutral-200 p-6">
            <h2 className="text-2xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">Login</h2>
            <form
              className="mt-5 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                login(String(data.get("username") ?? ""), String(data.get("password") ?? ""));
              }}
            >
              {loginError ? <p className="rounded bg-red-50 px-4 py-3 text-sm text-red-700">{loginError}</p> : null}
              <label className="block text-sm">
                <span className="mb-1 block font-semibold text-neutral-700">Username or email address *</span>
                <input required name="username" autoComplete="username" className="w-full border border-neutral-300 px-3 py-2" />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-semibold text-neutral-700">Password *</span>
                <input required type="password" name="password" autoComplete="current-password" className="w-full border border-neutral-300 px-3 py-2" />
              </label>
              <label className="flex items-center gap-2 text-sm text-neutral-600">
                <input type="checkbox" name="rememberme" /> Remember me
              </label>
              <button
                type="submit"
                className="bg-neutral-800 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-orange-500"
              >
                Log in
              </button>
              <p>
                <button type="button" className="text-sm text-orange-500 hover:underline">
                  Lost your password?
                </button>
              </p>
            </form>
          </div>

          <div className="border border-neutral-200 p-6">
            <h2 className="text-2xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">Register</h2>
            <form
              className="mt-5 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const name = String(data.get("username") ?? "").trim();
                if (name) {
                  try {
                    localStorage.setItem(SESSION_KEY, name);
                  } catch {
                    // ignore
                  }
                  setUser(name);
                }
                setRegisterNote("Registration complete. Please check your email.");
              }}
            >
              {registerNote ? <p className="rounded bg-green-50 px-4 py-3 text-sm text-green-700">{registerNote}</p> : null}
              <label className="block text-sm">
                <span className="mb-1 block font-semibold text-neutral-700">Username *</span>
                <input required name="username" autoComplete="username" className="w-full border border-neutral-300 px-3 py-2" />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-semibold text-neutral-700">Email address *</span>
                <input required type="email" name="email" autoComplete="email" className="w-full border border-neutral-300 px-3 py-2" />
              </label>
              <label className="flex items-center gap-2 text-sm text-neutral-600">
                <input type="checkbox" name="apply_for_vendor" /> Apply to become a vendor?
              </label>
              <p className="text-xs text-neutral-500">Registration confirmation will be emailed to you.</p>
              <button
                type="submit"
                className="bg-neutral-800 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-orange-500"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
