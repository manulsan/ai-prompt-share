export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-8">
        Last Updated: November 27, 2025
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
        <p>
          By accessing and using AI Prompt Share, you accept and agree to be
          bound by these Terms of Service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Use of Service</h2>
        <p className="mb-4">You agree to:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Provide accurate information</li>
          <li>Maintain the security of your account</li>
          <li>Not use the service for illegal purposes</li>
          <li>Not post offensive or harmful content</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">User Content</h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>You retain ownership of content you post</li>
          <li>You grant us a license to display and distribute your content</li>
          <li>You are responsible for your content</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Account Termination</h2>
        <p>
          We reserve the right to terminate accounts that violate these terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
        <p>
          The service is provided &quot;as is&quot; without warranties of any
          kind.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
        <p>
          We may modify these terms at any time. Continued use constitutes
          acceptance of modified terms.
        </p>
      </section>
    </div>
  );
}
