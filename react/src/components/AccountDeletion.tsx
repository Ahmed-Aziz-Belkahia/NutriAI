import React from 'react';
import { Link } from 'react-router-dom';

/*
  Demo Account Deletion Information Page
  Replace any placeholder emails, timelines, and process notes with your real policy before production.
*/

const sectionClass = 'mt-8';
const headingClass = 'text-xl font-semibold mb-3';
const listClass = 'list-disc pl-5 space-y-1';

export default function AccountDeletion() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold tracking-tight">Account Deletion & Data Removal</h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          This demo page explains how users can request deletion of their account and what happens to
          their data. Adapt this content to reflect your actual legal, privacy, and operational
          policies before going live.
        </p>

        <section className={sectionClass}>
          <h2 className={headingClass}>Overview</h2>
          <p className="text-slate-600">
            You can permanently delete your account at any time. Deletion is irreversible. Once the
            process is complete, you will lose access to your data and any active subscriptions or
            historical analytics tied to the account.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>What Gets Deleted</h2>
          <ul className={listClass}>
            <li>Profile information (name, email, avatar)</li>
            <li>Nutrition logs and meal entries</li>
            <li>Custom goals and progress metrics</li>
            <li>Personal settings & preferences</li>
          </ul>
          <p className="mt-3 text-slate-600 text-sm">
            Aggregated/anonymized statistics that cannot be linked back to you may be retained to
            improve overall product insights.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>Data Retention (Demo)</h2>
          <ul className={listClass}>
            <li>Immediate soft delete flag is applied instantly.</li>
            <li>Hard deletion from primary database: within 24 hours.</li>
            <li>Removal from search/index caches: within 72 hours.</li>
            <li>Encrypted backups purge cycle: 30 day rolling window.</li>
          </ul>
          <p className="mt-3 text-slate-600 text-sm">
            Timelines above are illustrative. Replace with your real operational SLAs.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>How to Request Deletion</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Navigate to Account Settings &gt; Privacy & Security.</li>
            <li>Click the <span className="font-medium">Delete My Account</span> button.</li>
            <li>Confirm identity via email or 2FA (if enabled).</li>
            <li>Review summary of data to be deleted and confirm.</li>
            <li>Receive an email confirmation with tracking ID.</li>
          </ol>
          <p className="mt-3 text-slate-600 text-sm">
            If you cannot access your account, email
            {' '}<a className="text-indigo-600 hover:underline" href="mailto:support@nutriai.online">support@nutriai.online</a>{' '}from the registered address.
          </p>
        </section>


        <section className={sectionClass}>
          <h2 className={headingClass}>FAQ</h2>
          <details className="group border border-slate-200 rounded-md p-4">
            <summary className="cursor-pointer font-medium flex justify-between items-center">
              Can I undo deletion?
              <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-2 text-slate-600 text-sm">No. Once hard deletion occurs the data is irrecoverable.</p>
          </details>
          <details className="group border border-slate-200 rounded-md p-4 mt-3">
            <summary className="cursor-pointer font-medium flex justify-between items-center">
              What about subscription billing?
              <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-2 text-slate-600 text-sm">Any active subscription is canceled effective immediately; prorating is subject to terms.</p>
          </details>
          <details className="group border border-slate-200 rounded-md p-4 mt-3">
            <summary className="cursor-pointer font-medium flex justify-between items-center">
              How do backups work?
              <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-2 text-slate-600 text-sm">Backups are encrypted and rotated. Your identifiers are removed once the purge cycle hits.</p>
          </details>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>Contact</h2>
            <p className="text-slate-600">Questions? Email <a className="text-indigo-600 hover:underline" href="mailto:support@nutriai.online">support@nutriai.online</a>.</p>
        </section>

        <div className="mt-10">
          <Link to="/" className="text-indigo-600 hover:underline text-sm">← Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
