"use client";

import { useState } from "react";

export function CommentForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      className="mt-5 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        e.currentTarget.reset();
        setSent(true);
      }}
    >
      {sent ? (
        <p className="rounded bg-green-50 px-4 py-3 text-sm text-green-700">
          Thank you for your comment. This is a local demo — comments are not published.
        </p>
      ) : null}
      <div className="grid gap-4 sm:grid-cols-3">
        <input required name="author" placeholder="Name *" className="border border-neutral-300 px-3 py-2 text-sm" />
        <input
          required
          type="email"
          name="email"
          placeholder="Email *"
          className="border border-neutral-300 px-3 py-2 text-sm"
        />
        <input name="url" placeholder="Website" className="border border-neutral-300 px-3 py-2 text-sm" />
      </div>
      <textarea
        required
        name="comment"
        rows={5}
        placeholder="Comment *"
        className="w-full border border-neutral-300 px-3 py-2 text-sm"
      />
      <label className="flex items-center gap-2 text-sm text-neutral-600">
        <input type="checkbox" name="save" />
        Save my name, email, and website in this browser for the next time I comment.
      </label>
      <button
        type="submit"
        className="bg-neutral-800 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-orange-500"
      >
        Post Comment
      </button>
    </form>
  );
}
