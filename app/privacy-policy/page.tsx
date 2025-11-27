export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">
        Last Updated: November 27, 2025
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
        <p className="mb-4">When you use AI Prompt Share, we collect:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Your name and email address from your Google account</li>
          <li>Posts and comments you create</li>
          <li>User interaction data (likes, notifications)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
        <p className="mb-4">We use your information to:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Provide and maintain our service</li>
          <li>Enable user authentication</li>
          <li>Display your profile information</li>
          <li>Send notifications about comments on your posts</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Data Storage</h2>
        <p>
          Your data is stored securely in MongoDB databases. We implement
          appropriate security measures to protect your personal information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
        <p>
          We use Google OAuth for authentication. Please review{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Google&apos;s Privacy Policy
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
        <p className="mb-4">You can:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Access your personal data</li>
          <li>Delete your account and associated data</li>
          <li>Opt out of notifications</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. We will notify
          you of any changes by posting the new privacy policy on this page.
        </p>
      </section>
    </div>
  );
}
