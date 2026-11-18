"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PageHeader } from "@/components/sites/amaali/blog";

// The source's second My Account page (/my-account-2/, WC Vendors variant):
// logged-out visitors see only the WooCommerce login form — no register
// form, unlike /my-account/. Vendor dashboard links redirect here, so this
// page is their landing target. Login is a local demo using the same
// session + demo account as /my-account/ (see src/app/my-account/page.tsx).
const SESSION_KEY = "amaali-session";
const DEMO_USER = "customer";
const DEMO_PASS = "customerofpassword";

export default function MyAccount2Page() {
  const [user, setUser] = useState<string | null>(null);
  const [loginError, setLoginError] = useState("");
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
        <div className="mx-auto max-w-7xl px-4 py-10">
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
          <p className="mt-4 leading-relaxed text-neutral-600">
            Vendor tools are a local demo in this clone — see your{" "}
            <Link href="/my-account" className="text-orange-500 hover:underline">
              My Account
            </Link>{" "}
            page for orders and account details.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <PageHeader title="My Account" crumb="My Account" />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="max-w-xl border border-neutral-200 p-6">
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
      </div>
    </main>
  );
}
